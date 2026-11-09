// MODO ESTUDO — ambiente de concentração para usar com o violão na mão.
//
// Some com tudo o que não é conteúdo (menu, cabeçalhos, rodapés, decoração),
// aumenta a área útil e deixa na tela só uma barra fixa com o que se usa
// tocando: metrônomo, cronômetro da sessão, avançar e voltar, e sair.
//
// Como funciona por dentro: o modo é um atributo no <html> (data-estudo) que
// o CSS lê. Nenhuma tela precisa saber que ele existe — por isso ele funciona
// em aulas, exercícios, técnicas, partituras, leitura e ritmo sem duplicar
// código em cada uma.
import { Metronomo, limitarBpm } from './metronome.js';
import { comecarPratica, pararPratica } from './pratica.js';
import { Config } from './db.js';
import { conferirPostura, deveConferir } from './postura.js';

// Telas que fazem sentido no modo estudo (as que a gente usa tocando).
const ROTAS_ESTUDO = new Set(['aula', 'exercicios', 'tecnicas', 'partituras', 'leitura', 'ritmo', 'braco']);

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function mmss(seg) {
  const m = Math.floor(seg / 60), s = seg % 60;
  return m + ':' + String(s).padStart(2, '0');
}

export function criarEstudo(ir) {
  let ligado = false;
  let rotaAtual = '';
  let argAtual = '';
  let metro = null;
  let relogio = null;
  let inicio = 0;
  let vizinhos = { anterior: null, proxima: null };

  // ---------------------------------------------------------------- botão
  const botao = el('button', 'estudo-entrar', '⤢ Modo Estudo');
  botao.setAttribute('aria-label', 'Entrar no Modo Estudo: esconde os menus e mostra a barra de prática');
  botao.hidden = true;
  botao.onclick = () => entrar();
  document.body.append(botao);

  // ---------------------------------------------------------------- barra
  const barra = el('div', 'estudo-barra');
  barra.setAttribute('role', 'toolbar');
  barra.setAttribute('aria-label', 'Controles do Modo Estudo');
  barra.hidden = true;

  const bAnterior = el('button', 'estudo-bt', '‹');
  bAnterior.setAttribute('aria-label', 'Conteúdo anterior');
  const bProxima = el('button', 'estudo-bt', '›');
  bProxima.setAttribute('aria-label', 'Próximo conteúdo');

  const bMetro = el('button', 'estudo-bt estudo-metro', '▶');
  bMetro.setAttribute('aria-label', 'Ligar ou desligar o metrônomo');
  const bpmTxt = el('span', 'estudo-bpm', '80');
  bpmTxt.setAttribute('aria-live', 'off');
  const bMenos = el('button', 'estudo-bt sm', '−');
  bMenos.setAttribute('aria-label', 'Diminuir 4 batidas por minuto');
  const bMais = el('button', 'estudo-bt sm', '+');
  bMais.setAttribute('aria-label', 'Aumentar 4 batidas por minuto');

  const tempo = el('span', 'estudo-tempo', '0:00');
  tempo.setAttribute('aria-label', 'Tempo desta sessão');

  // O rótulo "Sair" some nas telas estreitas; o ✕ fica (ver o CSS).
  const bSair = el('button', 'estudo-bt estudo-sair', '✕');
  bSair.append(el('span', 'estudo-rotulo', ' Sair'));
  bSair.setAttribute('aria-label', 'Sair do Modo Estudo');

  const grupoNav = el('div', 'estudo-grupo');
  grupoNav.append(bAnterior, bProxima);
  const grupoMetro = el('div', 'estudo-grupo');
  grupoMetro.append(bMenos, bMetro, bpmTxt, bMais);
  const grupoFim = el('div', 'estudo-grupo');
  grupoFim.append(tempo, bSair);
  barra.append(grupoNav, grupoMetro, grupoFim);
  document.body.append(barra);

  // ---------------------------------------------------------------- metrônomo
  function garantirMetro() {
    if (!metro) {
      metro = new Metronomo();
      Config.obter('metro.bpm', 80).then((b) => {
        if (!metro) return;
        metro.bpm = typeof b === 'number' ? b : 80;
        bpmTxt.textContent = String(metro.bpm);
      });
    }
    return metro;
  }
  function mudarBpm(d) {
    const m = garantirMetro();
    m.bpm = limitarBpm((m.bpm || 80) + d);
    bpmTxt.textContent = String(m.bpm);
    Config.guardar('metro.bpm', m.bpm);
  }
  bMenos.onclick = () => mudarBpm(-4);
  bMais.onclick = () => mudarBpm(4);
  bMetro.onclick = async () => {
    const m = garantirMetro();
    if (m.rodando) { m.parar(); bMetro.textContent = '▶'; bMetro.classList.remove('ligado'); }
    else {
      try { await m.iniciar(); bMetro.textContent = '⏸'; bMetro.classList.add('ligado'); }
      catch { bMetro.textContent = '▶'; }
    }
  };

  // ---------------------------------------------------------------- navegação
  bAnterior.onclick = () => { if (vizinhos.anterior) ir(vizinhos.anterior); };
  bProxima.onclick = () => { if (vizinhos.proxima) ir(vizinhos.proxima); };

  // Descobre o que vem antes e depois, conforme a tela.
  async function descobrirVizinhos(rota, arg) {
    vizinhos = { anterior: null, proxima: null };
    try {
      if (rota === 'aula' && arg) {
        const c = await import('./curso/curriculo.js');
        const todas = c.todasAsAulas(await c.carregarTodos());
        const i = todas.findIndex((a) => a.id === arg);
        if (i > 0) vizinhos.anterior = 'aula/' + todas[i - 1].id;
        if (i >= 0 && i < todas.length - 1) vizinhos.proxima = 'aula/' + todas[i + 1].id;
      } else if (rota === 'exercicios' && arg) {
        const { EXERCICIOS } = await import('./curso/exercicios.js');
        const i = EXERCICIOS.findIndex((e) => e.id === arg);
        if (i > 0) vizinhos.anterior = 'exercicios/' + EXERCICIOS[i - 1].id;
        if (i >= 0 && i < EXERCICIOS.length - 1) vizinhos.proxima = 'exercicios/' + EXERCICIOS[i + 1].id;
      } else if (rota === 'tecnicas' && arg) {
        const { TECNICAS } = await import('./curso/tecnicas.js');
        const i = TECNICAS.findIndex((t) => t.id === arg);
        if (i > 0) vizinhos.anterior = 'tecnicas/' + TECNICAS[i - 1].id;
        if (i >= 0 && i < TECNICAS.length - 1) vizinhos.proxima = 'tecnicas/' + TECNICAS[i + 1].id;
      }
    } catch { /* sem vizinhos: os botões ficam desligados */ }
    bAnterior.disabled = !vizinhos.anterior;
    bProxima.disabled = !vizinhos.proxima;
  }

  // ---------------------------------------------------------------- entrar/sair
  async function entrar() {
    if (ligado) return;
    // A conferência de postura vem antes de tudo: é o único momento em que
    // você ainda não começou a tocar errado nesta sessão.
    try { if (await deveConferir()) await conferirPostura(); } catch { /* segue */ }
    if (ligado) return;
    ligado = true;
    document.documentElement.setAttribute('data-estudo', '');
    botao.hidden = true;
    barra.hidden = false;
    garantirMetro();
    inicio = Date.now();
    comecarPratica();
    tempo.textContent = '0:00';
    relogio = setInterval(() => {
      tempo.textContent = mmss(Math.floor((Date.now() - inicio) / 1000));
    }, 1000);
    const alvo = document.documentElement;
    if (alvo.requestFullscreen) alvo.requestFullscreen().catch(() => { /* sem tela cheia, segue igual */ });
    bSair.focus();
  }

  function sair() {
    if (!ligado) return;
    ligado = false;
    document.documentElement.removeAttribute('data-estudo');
    barra.hidden = true;
    botao.hidden = !ROTAS_ESTUDO.has(rotaAtual);
    if (metro && metro.rodando) { metro.parar(); bMetro.textContent = '▶'; bMetro.classList.remove('ligado'); }
    if (relogio) { clearInterval(relogio); relogio = null; }
    pararPratica();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  }
  bSair.onclick = sair;

  // Esc sai do modo; a tecla M liga e desliga o metrônomo (atalhos de teclado
  // no computador, sem atrapalhar quem digita num campo).
  document.addEventListener('keydown', (ev) => {
    if (!ligado) return;
    const alvo = ev.target;
    if (alvo && (alvo.tagName === 'INPUT' || alvo.tagName === 'TEXTAREA')) return;
    if (ev.key === 'Escape') { sair(); }
    else if (ev.key === 'm' || ev.key === 'M') { bMetro.click(); }
    else if (ev.key === 'ArrowRight' && vizinhos.proxima) { ir(vizinhos.proxima); }
    else if (ev.key === 'ArrowLeft' && vizinhos.anterior) { ir(vizinhos.anterior); }
  });

  // Se o usuário sair da tela cheia pelo gesto do sistema, o modo continua:
  // tela cheia é um extra, não o modo em si.

  return {
    // Chamado pelo roteador a cada troca de tela.
    aplicar(rota, arg) {
      rotaAtual = rota;
      argAtual = arg;
      const vale = ROTAS_ESTUDO.has(rota);
      botao.hidden = ligado || !vale;
      if (!vale && ligado) sair();
      if (vale) descobrirVizinhos(rota, arg);
    },
    ligado: () => ligado,
    sair
  };
}
