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
import { botaoIcone } from './icones.js';

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
  const botao = botaoIcone('estudo-entrar', 'expandir', 'Modo Estudo');
  botao.setAttribute('aria-label', 'Entrar no Modo Estudo: esconde os menus e mostra a barra de prática');
  botao.onclick = () => entrar();
  botao.hidden = true;

  // O botão entra no corpo da tela, logo abaixo do cabeçalho, e não flutuando
  // por cima dela. Antes ele era fixo no canto de baixo e tapava a linha do
  // texto da aula que estivesse ali — e o texto da aula é o conteúdo do app.
  // Cada tela é remontada do zero pelo roteador, então ele é recolocado a cada
  // troca; por isso move, em vez de ser criado uma vez e ficar parado.
  // A maioria das telas se desenha depois de ler o banco, então quando o
  // roteador avisa da troca o cabeçalho ainda não existe. Em vez de chutar um
  // tempo de espera, fica de olho no #app até o cabeçalho aparecer, e larga.
  let espiao = null;
  function colocar() {
    const topo = document.querySelector('#app .topo');
    if (!topo) return false;
    topo.after(botao);
    return true;
  }
  function mostrarBotao(sim) {
    if (espiao) { espiao.disconnect(); espiao = null; }
    botao.hidden = !sim;
    if (!sim) { botao.remove(); return; }
    if (colocar()) return;
    espiao = new MutationObserver(() => { if (colocar()) { espiao.disconnect(); espiao = null; } });
    espiao.observe(document.getElementById('app'), { childList: true, subtree: true });
  }

  // ---------------------------------------------------------------- barra
  const barra = el('div', 'estudo-barra');
  barra.setAttribute('role', 'toolbar');
  barra.setAttribute('aria-label', 'Controles do Modo Estudo');
  barra.hidden = true;

  const bAnterior = botaoIcone('estudo-bt', 'voltar');
  bAnterior.setAttribute('aria-label', 'Conteúdo anterior');
  const bProxima = botaoIcone('estudo-bt', 'avancar');
  bProxima.setAttribute('aria-label', 'Próximo conteúdo');

  const bMetro = botaoIcone('estudo-bt estudo-metro', 'tocar');
  bMetro.setAttribute('aria-label', 'Ligar ou desligar o metrônomo');
  const bpmTxt = el('span', 'estudo-bpm', '80');
  bpmTxt.setAttribute('aria-live', 'off');
  const bMenos = botaoIcone('estudo-bt sm', 'menos');
  bMenos.setAttribute('aria-label', 'Diminuir 4 batidas por minuto');
  const bMais = botaoIcone('estudo-bt sm', 'mais');
  bMais.setAttribute('aria-label', 'Aumentar 4 batidas por minuto');

  const tempo = el('span', 'estudo-tempo', '0:00');
  tempo.setAttribute('aria-label', 'Tempo desta sessão');

  // O rótulo "Sair" some nas telas estreitas; o ✕ fica (ver o CSS).
  const bSair = botaoIcone('estudo-bt estudo-sair', 'fechar');
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
    mostrarBotao(false);
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
    mostrarBotao(ROTAS_ESTUDO.has(rotaAtual));
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
      mostrarBotao(!ligado && vale);
      if (!vale && ligado) sair();
      if (vale) descobrirVizinhos(rota, arg);
    },
    ligado: () => ligado,
    sair
  };
}
