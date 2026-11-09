// LEITOR EM VOZ ALTA
//
// Para estudar no ônibus: a aula lida em voz alta, com a frase atual
// destacada na tela. Só aparece nas aulas que não pedem o violão — nas
// outras o conteúdo é diagrama, e áudio sozinho não ensina.
//
// Usa a voz que já está no aparelho (Web Speech API). Nada é baixado, nada
// pesa no app, e funciona sem internet. A qualidade depende de qual voz você
// escolher: as naturais do Google são bem melhores que as antigas, e o
// seletor aqui lista todas as pt-BR instaladas.
//
// O texto sai do que já está desenhado na tela, não dos dados da aula. É de
// propósito: assim o leitor não precisa saber o vocabulário de blocos, e
// qualquer bloco novo passa a ser lido sem mexer aqui.
import { Config } from './db.js';
import { icone, botaoIcone } from './icones.js';
import { plugin } from './nativo.js';

// DOIS MOTORES DE VOZ, UM PARA CADA LUGAR
//
// No navegador e no PWA: speechSynthesis, que já vem no Chrome.
// No APK: o WebView do Android NÃO tem speechSynthesis — é limitação antiga
// e conhecida do WebView, não defeito do app. Lá a fala sai pelo plugin
// TextToSpeech do Capacitor, que fala pelo mecanismo nativo do Android (o
// mesmo das vozes que você instala nos Ajustes).
//
// Os dois têm a mesma forma aqui dentro: listar vozes, falar um trecho,
// calar. O resto do leitor não sabe qual está em uso.
function motorNativo() {
  const tts = plugin('TextToSpeech');
  if (!tts) return null;
  return {
    nome: 'nativo',
    async vozes() {
      const r = await tts.getSupportedVoices();
      return (r.voices || []).map((v, i) => ({ name: v.name || v.voiceURI || ('Voz ' + i), lang: v.lang, indice: i }));
    },
    // Resolve quando terminar de falar; rejeita se for interrompido.
    falar(texto, voz, velocidade) {
      return tts.speak({
        text: texto,
        lang: (voz && voz.lang) || 'pt-BR',
        rate: velocidade,
        pitch: 1,
        volume: 1,
        voice: voz && typeof voz.indice === 'number' ? voz.indice : undefined,
        category: 'playback'
      });
    },
    calar() { return tts.stop().catch(() => {}); }
  };
}

function motorWeb() {
  const fala = window.speechSynthesis;
  if (!fala) return null;
  return {
    nome: 'web',
    fala,
    async vozes() {
      return fala.getVoices().map((v) => ({ name: v.name, lang: v.lang, local: v.localService, bruta: v }));
    },
    falar(texto, voz, velocidade) {
      return new Promise((resolve, reject) => {
        const u = new SpeechSynthesisUtterance(texto);
        if (voz && voz.bruta) { u.voice = voz.bruta; u.lang = voz.lang; } else u.lang = 'pt-BR';
        u.rate = velocidade;
        u.onend = resolve;
        u.onerror = (ev) => reject(new Error(ev.error || 'erro'));
        fala.speak(u);
      });
    },
    calar() { try { fala.cancel(); } catch { /* cancelar vazio irrita alguns navegadores */ } }
  };
}

const C_VOZ = 'leitor.voz';
const C_VEL = 'leitor.velocidade';

// Pedaços curtos: o Android corta locuções longas no meio, e frase a frase
// também deixa o destaque acompanhar a leitura.
const MAX = 220;

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

// O que vale ler, e o que fazer com o que não se lê.
function extrair(corpo) {
  const partes = [];
  const alvo = 'p.texto-bloco, h2, h3, li, figcaption, .cartao-desc, td, th';
  corpo.querySelectorAll(alvo).forEach((n) => {
    if (n.closest('svg')) return;                       // rótulo dentro de diagrama
    const t = (n.textContent || '').replace(/\s+/g, ' ').trim();
    if (t.length < 2) return;
    // Quebra em frases, sem perder a pontuação.
    const frases = t.match(/[^.!?;:]+[.!?;:]?/g) || [t];
    let atual = '';
    for (const f of frases) {
      if ((atual + f).length > MAX && atual) { partes.push({ no: n, texto: atual.trim() }); atual = ''; }
      atual += f;
    }
    if (atual.trim()) partes.push({ no: n, texto: atual.trim() });
  });

  // Diagramas não têm texto: em vez de pular em silêncio, o leitor avisa que
  // ali tem figura — senão a aula parece ter buracos.
  corpo.querySelectorAll('figure.bloco-fig').forEach((f) => {
    const leg = f.querySelector('figcaption');
    const antes = partes.findIndex((p) => f.compareDocumentPosition(p.no) & Node.DOCUMENT_POSITION_FOLLOWING);
    const aviso = { no: f, texto: leg ? 'Figura: ' + leg.textContent.trim() : 'Aqui há uma figura para ver na tela.' };
    if (antes >= 0) partes.splice(antes, 0, aviso); else partes.push(aviso);
  });
  return partes;
}

export function criarLeitor(ondePor, corpo) {
  // No APK o motor nativo; no navegador o da web. Sem nenhum dos dois não há
  // o que montar — e aí o botão simplesmente não aparece, em vez de aparecer
  // e não funcionar.
  const motor = motorNativo() || motorWeb();
  if (!motor) return null;

  const partes = extrair(corpo);
  if (!partes.length) return null;

  let i = 0, tocando = false, encerrado = false;
  // Cancelar uma locução dispara o onend dela. Sem este contador, esse
  // onend tardio avançava o índice e começava uma segunda leitura por cima
  // da nova — duas vozes no mesmo lugar, e o trecho pulando para trás.
  // Cada reinício incrementa a geração; retorno de geração velha é ignorado.
  let geracao = 0;
  let vozes = [], vozEscolhida = null, velocidade = 1;

  // ------------------------------------------------------------ interface
  const caixa = el('section', 'leitor');
  const abrir = botaoIcone('botao-sec leitor-abrir', 'ouvir', 'Ouvir a aula');
  caixa.append(abrir);

  const painel = el('div', 'leitor-painel');
  painel.hidden = true;

  const btTocar = botaoIcone('botao-principal leitor-tocar', 'tocar', 'Ouvir');
  const btAnterior = botaoIcone('botao-sec bt-so-icone', 'voltar');
  btAnterior.setAttribute('aria-label', 'Trecho anterior');
  const btProximo = botaoIcone('botao-sec bt-so-icone', 'avancar');
  btProximo.setAttribute('aria-label', 'Próximo trecho');
  const btParar = botaoIcone('botao-sec bt-so-icone', 'parar');
  btParar.setAttribute('aria-label', 'Parar a leitura');

  const linha = el('div', 'leitor-controles');
  linha.append(btAnterior, btTocar, btProximo, btParar);
  painel.append(linha);

  const progresso = el('p', 'leitor-progresso', '');
  progresso.setAttribute('aria-live', 'off');
  painel.append(progresso);

  // velocidade
  const velLinha = el('div', 'chips leitor-vel');
  velLinha.setAttribute('role', 'radiogroup');
  velLinha.setAttribute('aria-label', 'Velocidade da leitura');
  [0.8, 0.9, 1, 1.1, 1.25].forEach((v) => {
    const b = el('button', 'chip', v.toFixed(2).replace(/0$|\.00$/, '').replace('.', ',') + '×');
    b.setAttribute('role', 'radio');
    b.onclick = async () => {
      velocidade = v;
      [...velLinha.children].forEach((c) => {
        c.classList.toggle('ativo', c === b);
        c.setAttribute('aria-checked', String(c === b));
      });
      await Config.guardar(C_VEL, v).catch(() => {});
      if (tocando) { silenciar(); dizer(); }   // aplica já, sem perder o lugar
    };
    velLinha.append(b);
  });
  painel.append(velLinha);

  // voz
  const selVoz = document.createElement('select');
  selVoz.className = 'campo-sel leitor-voz';
  selVoz.setAttribute('aria-label', 'Voz da leitura');
  const rotuloVoz = el('label', 'leitor-rotulo');
  rotuloVoz.append(el('span', 'cartao-desc', 'Voz'), selVoz);
  painel.append(rotuloVoz);

  const dica = el('p', 'cartao-desc leitor-dica', '');
  painel.append(dica);

  caixa.append(painel);
  ondePor.append(caixa);

  // -------------------------------------------------------------- vozes
  async function carregarVozes() {
    const todas = await motor.vozes().catch(() => []);
    vozes = todas.filter((v) => /^pt([-_]BR)?/i.test(v.lang || ''));
    if (!vozes.length) vozes = todas.filter((v) => /^pt/i.test(v.lang || ''));
    selVoz.innerHTML = '';
    if (!vozes.length) {
      selVoz.append(new Option('Nenhuma voz em português instalada', ''));
      selVoz.disabled = true;
      dica.textContent = 'Seu aparelho não tem voz em português instalada. Procure por '
        + '"texto em voz" na busca dos Ajustes do Android e instale os dados de voz do português.';
      return;
    }
    selVoz.disabled = false;
    vozes.forEach((v, k) => selVoz.append(new Option(v.name + (v.local === false ? ' (precisa de internet)' : ''), String(k))));
    const salva = vozes.findIndex((v) => v.name === (vozEscolhida && vozEscolhida.name));
    selVoz.selectedIndex = salva >= 0 ? salva : 0;
    vozEscolhida = vozes[selVoz.selectedIndex];
    dica.textContent = 'A qualidade vem do aparelho, não do app. Para ter mais opções aqui, '
      + 'procure por "texto em voz" na busca dos Ajustes e instale os dados de voz — as vozes '
      + 'recentes soam bem melhor que as antigas. Trocou de mecanismo? Feche e abra o app.';
  }
  selVoz.onchange = async () => {
    vozEscolhida = vozes[Number(selVoz.value)] || vozes[0];
    await Config.guardar(C_VOZ, vozEscolhida ? vozEscolhida.name : '').catch(() => {});
    if (tocando) { silenciar(); dizer(); }
  };
  // No motor da web a lista chega atrasada; no nativo já vem pronta.
  if (motor.nome === 'web' && typeof motor.fala.addEventListener === 'function') {
    motor.fala.addEventListener('voiceschanged', carregarVozes);
  }

  // ------------------------------------------------------------- leitura
  function destacar() {
    corpo.querySelectorAll('.lendo').forEach((n) => n.classList.remove('lendo'));
    const p = partes[i];
    if (!p) return;
    p.no.classList.add('lendo');
    p.no.scrollIntoView({ block: 'center', behavior: 'smooth' });
    progresso.textContent = 'Trecho ' + (i + 1) + ' de ' + partes.length;
  }

  function dizer() {
    if (encerrado || i >= partes.length) return terminar();
    destacar();
    const minha = ++geracao;
    motor.falar(partes[i].texto, vozEscolhida, velocidade).then(
      () => { if (encerrado || minha !== geracao || !tocando) return; i++; dizer(); },
      (e) => {
        if (encerrado || minha !== geracao) return;
        const m = String((e && e.message) || e);
        if (/interrupt|cancel/i.test(m)) return;
        tocando = false; marcarTocando();
        dica.textContent = 'A leitura parou (' + m + '). Toque em Ouvir para continuar.';
      }
    );
  }

  // Cala a voz e invalida os retornos pendentes: parar uma locução faz o
  // motor avisar que ela "terminou", e sem isto o leitor avançaria sozinho.
  function silenciar() { geracao++; motor.calar(); }

  function marcarTocando() {
    btTocar.textContent = '';
    btTocar.append(icone(tocando ? 'pausar' : 'tocar'),
      document.createTextNode(tocando ? ' Pausar' : (i ? ' Continuar' : ' Ouvir')));
  }

  function terminar() {
    tocando = false;
    marcarTocando();
    corpo.querySelectorAll('.lendo').forEach((n) => n.classList.remove('lendo'));
    progresso.textContent = 'Fim da aula.';
    i = 0;
  }

  btTocar.onclick = () => {
    if (tocando) { silenciar(); tocando = false; marcarTocando(); return; }
    tocando = true; marcarTocando(); dizer();
  };
  btParar.onclick = () => { silenciar(); terminar(); };
  btAnterior.onclick = () => { silenciar(); i = Math.max(0, i - 1); if (tocando) dizer(); else destacar(); };
  btProximo.onclick = () => { silenciar(); i = Math.min(partes.length - 1, i + 1); if (tocando) dizer(); else destacar(); };

  abrir.onclick = () => {
    painel.hidden = !painel.hidden;
    abrir.setAttribute('aria-expanded', String(!painel.hidden));
    if (!painel.hidden && !vozes.length) carregarVozes().catch(() => {});
  };
  abrir.setAttribute('aria-expanded', 'false');

  (async () => {
    const nome = await Config.obter(C_VOZ, '');
    velocidade = await Config.obter(C_VEL, 1);
    if (encerrado) return;
    vozEscolhida = { name: nome };
    await carregarVozes();
    if (encerrado) return;
    const k = [0.8, 0.9, 1, 1.1, 1.25].indexOf(velocidade);
    if (k >= 0) velLinha.children[k].classList.add('ativo');
    progresso.textContent = partes.length + ' trechos nesta aula.';
    marcarTocando();
  })().catch(() => {});

  // Sair da tela com a voz falando seria o pior defeito possível.
  return () => {
    encerrado = true;
    geracao++;
    try { motor.calar(); } catch { /* nada falando */ }
    if (motor.nome === 'web' && typeof motor.fala.removeEventListener === 'function') {
      motor.fala.removeEventListener('voiceschanged', carregarVozes);
    }
  };
}
