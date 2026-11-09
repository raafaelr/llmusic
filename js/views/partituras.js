// Player de tablatura: mostra a peça, toca com som de violão e move um cursor.
// Recursos: tempo ajustável (50% a 100%), repetir um compasso (toque no compasso),
// e "esperar eu tocar": o cursor só avança quando você toca a nota certa no violão (microfone).
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima } from '../pitch.js';
import { PECAS, achatar, tempoPorCompasso, dedoDaCorda } from '../pecas.js';
import { tocarNota } from '../violao.js';
import { todasAsPecas } from '../biblioteca.js';

const NS = 'http://www.w3.org/2000/svg';
function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function sv(tag, attrs, pai) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (pai) pai.append(e);
  return e;
}

const LARG = 1000, ESQ = 56, DIR = 12, POR_LINHA = 2, ESP = 17, ALTURA_LINHA = 190;

export function montar(raiz, ir) {
  let peca = PECAS[0];
  let pecas = PECAS;
  let eventos = [];
  let fator = 1;                   // 0.5, 0.75 ou 1 (velocidade)
  // Trecho em repetição: { de, ate } em índices de compasso, ou null para a
  // peça toda. É assim que se estuda violão clássico de verdade — isolando
  // os compassos 14 a 17 e repetindo devagar, não tocando do início ao fim.
  let trecho = null;
  let primeiroToque = -1;          // compasso tocado à espera do segundo, para formar o trecho
  let tocando = false;
  let idxAtual = -1;
  let esperar = false;
  let encerrada = false;
  let ctx = null, saida = null;
  let agenda = [];                 // {evento, quando}
  let timer = null, raf = null;
  let proximo = 0, tInicio = 0, volta = 0;
  let bloqueioMidi = -1, bloqueioAte = 0;
  const motor = new Afinador((f) => aoOuvir(f));
  let cursor, posicoes = [], marcasCompasso = [];

  const tela = el('main', 'tela partituras');
  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  const bImp = el('button', 'botao-sec bt-aulas', '＋ Importar');
  bImp.onclick = () => ir('importar');
  topo.append(voltar, el('h1', 'titulo-tela', 'Partituras'), bImp);

  const cab = el('section', 'cab-peca');
  const titulo = el('h2', 'peca-titulo', '');
  const dica = el('p', 'dica', '');
  cab.append(titulo, dica);

  const rolagem = el('div', 'tab-rolagem');
  const svg = sv('svg', { class: 'tab-svg', role: 'img' });
  rolagem.append(svg);

  const barra = el('div', 'barra-player');
  const play = el('button', 'botao-principal', '▶ Tocar');
  const gPeca = el('div', 'grupo'); gPeca.append(el('h2', 'rotulo-grupo', 'Peça'));
  const chipsPeca = el('div', 'chips'); gPeca.append(chipsPeca);
  const gVel = el('div', 'grupo'); gVel.append(el('h2', 'rotulo-grupo', 'Velocidade'));
  const chipsVel = el('div', 'chips'); gVel.append(chipsVel);
  const gOpc = el('div', 'grupo'); gOpc.append(el('h2', 'rotulo-grupo', 'Modo'));
  const chipsOpc = el('div', 'chips'); gOpc.append(chipsOpc);
  const status = el('p', 'dica status-player', '');
  status.setAttribute('aria-live', 'polite');
  const voltasTxt = el('span', 'voltas-contador', '');
  voltasTxt.setAttribute('aria-live', 'off');
  const linhaPlay = el('div', 'linha-play');
  linhaPlay.append(play, voltasTxt);

  // Trechos difíceis: as passagens que você marcou nesta peça para voltar.
  const gTrechos = el('div', 'grupo');
  gTrechos.append(el('h2', 'rotulo-grupo', 'Trechos difíceis'));
  const acoesTrecho = el('div', 'bloco-botoes');
  const btMarcar = el('button', 'botao-sec', '★ Marcar este trecho');
  acoesTrecho.append(btMarcar);
  gTrechos.append(acoesTrecho);
  const listaTrechos = el('div', 'trechos-lista');
  gTrechos.append(listaTrechos);

  barra.append(linhaPlay, gVel, gOpc);

  tela.append(topo, gPeca, cab, rolagem, barra, status, gTrechos);
  raiz.append(tela);

  // ---------- desenho da tablatura ----------
  function desenhar() {
    svg.innerHTML = '';
    posicoes = [];
    marcasCompasso = [];
    const tpc = tempoPorCompasso(peca);
    const nM = peca.compassos.length;
    const linhas = Math.ceil(nM / POR_LINHA);
    const mw = (LARG - ESQ - DIR) / POR_LINHA;
    svg.setAttribute('viewBox', `0 0 ${LARG} ${linhas * ALTURA_LINHA + 8}`);
    for (let r = 0; r < linhas; r++) {
      const y0 = r * ALTURA_LINHA + 44;       // linha da 1ª corda
      for (let s = 0; s < 6; s++) sv('line', { x1: ESQ, x2: LARG - DIR, y1: y0 + s * ESP, y2: y0 + s * ESP, class: 'linha-tab' }, svg);
      ['T', 'A', 'B'].forEach((l, k) => { const t = sv('text', { x: 14, y: y0 + (1.4 + k * 1.5) * ESP + 6, class: 'rot-tab' }, svg); t.textContent = l; });
      sv('line', { x1: ESQ, x2: ESQ, y1: y0, y2: y0 + 5 * ESP, class: 'barra-tab' }, svg);
    }
    peca.compassos.forEach((comp, m) => {
      const r = Math.floor(m / POR_LINHA), k = m % POR_LINHA;
      const y0 = r * ALTURA_LINHA + 44;
      const x0 = ESQ + k * mw;
      const area = sv('rect', { x: x0, y: y0 - 30, width: mw, height: 5 * ESP + 90, class: 'area-compasso', 'data-compasso': m }, svg);
      area.onclick = () => escolherCompasso(m);
      marcasCompasso.push(area);
      sv('line', { x1: x0 + mw, x2: x0 + mw, y1: y0, y2: y0 + 5 * ESP, class: 'barra-tab' }, svg);
      const nm = sv('text', { x: x0 + 6, y: y0 - 22, class: 'num-compasso' }, svg); nm.textContent = m + 1;
      if (comp.acorde) { const a = sv('text', { x: x0 + 34, y: y0 - 12, class: 'acorde' }, svg); a.textContent = comp.acorde; }
      const xe = (t) => x0 + 22 + (t / tpc) * (mw - 44);
      const bottomY = y0 + 5 * ESP;
      comp.eventos.forEach((e, i) => {
        const x = xe(e.t);
        e.n.forEach(([c, f]) => {
          const y = y0 + (c - 1) * ESP;
          sv('rect', { x: x - 9, y: y - 8, width: 18, height: 16, class: 'fundo-num' }, svg);
          const t = sv('text', { x, y: y + 5, 'text-anchor': 'middle', class: 'num-tab' }, svg); t.textContent = f;
        });
        // haste e ritmo abaixo da tablatura
        if (e.silencio) { const z = sv('text', { x: x0 + mw / 2, y: y0 + 2.6 * ESP, 'text-anchor': 'middle', class: 'dedo' }, svg); z.textContent = 'pausa'; return; }
        const yh = bottomY + 10;
        sv('line', { x1: x, x2: x, y1: yh, y2: yh + 22, class: 'haste-tab' }, svg);
        if (e.d >= 2) sv('circle', { cx: x, cy: yh + 26, r: 3, class: 'haste-tab-o' }, svg);
        const prox = comp.eventos[i + 1];
        const gb = peca.compasso[1] === 8 ? 1.5 : 1;     // 6/8: colcheias agrupadas de três em três
        const mesmo = (a, b) => Math.floor((a.t + 1e-6) / gb) === Math.floor((b.t + 1e-6) / gb);
        if (e.d === 0.5 && prox && prox.d === 0.5 && mesmo(e, prox)) {
          sv('line', { x1: x, x2: xe(prox.t), y1: yh + 22, y2: yh + 22, class: 'viga' }, svg);
        } else if (e.d === 0.5) {
          const ant = comp.eventos[i - 1];
          if (!(ant && ant.d === 0.5 && mesmo(ant, e))) sv('line', { x1: x, x2: x + 8, y1: yh + 22, y2: yh + 14, class: 'viga' }, svg);
        }
        const dd = [...new Set(e.n.map(([c]) => dedoDaCorda(c)))];
        const dt = sv('text', { x, y: yh + 46, 'text-anchor': 'middle', class: 'dedo' }, svg);
        dt.textContent = e.n.length === 1 ? dd[0] : [...e.n.map(([c]) => dedoDaCorda(c))].reverse().join('');
      });
    });
    cursor = sv('rect', { class: 'cursor-tab', x: 0, y: 0, width: 26, height: 5 * ESP + 20, rx: 6, visibility: 'hidden' }, svg);
    // posição de cada evento achatado (para mover o cursor)
    eventos.forEach((ev) => {
      const m = ev.compasso, r = Math.floor(m / POR_LINHA), k = m % POR_LINHA;
      const y0 = r * ALTURA_LINHA + 44, x0 = ESQ + k * mw;
      const tl = ev.t - m * tpc;
      posicoes.push({ x: x0 + 22 + (tl / tpc) * (mw - 44), y: y0 - 10 });
    });
    marcarRepetir();
  }
  function moverCursor(i) {
    idxAtual = i;
    if (i < 0 || !posicoes[i]) { cursor.setAttribute('visibility', 'hidden'); return; }
    const p = posicoes[i];
    cursor.setAttribute('x', p.x - 13);
    cursor.setAttribute('y', p.y);
    cursor.setAttribute('visibility', 'visible');
    // mantém a linha atual visível na rolagem
    const esc = rolagem.clientWidth / LARG;
    const alvoY = (p.y - 40) * esc;
    if (alvoY < rolagem.scrollTop || alvoY + 120 > rolagem.scrollTop + rolagem.clientHeight) rolagem.scrollTop = Math.max(0, alvoY - 10);
  }
  function marcarRepetir() {
    marcasCompasso.forEach((a, m) => {
      a.classList.toggle('repetir', !!trecho && m >= trecho.de && m <= trecho.ate);
      a.classList.toggle('ponta', m === primeiroToque && !trecho);
      a.classList.toggle('dificil', ehDificil(m));
    });
    if (typeof desenharTrechos === 'function') desenharTrechos();
  }

  // Toque num compasso: ele vira o trecho. Toque em outro: o trecho se estica
  // de um até o outro. Toque de novo no mesmo trecho de um compasso só: volta
  // à peça inteira.
  function escolherCompasso(m) {
    if (trecho && trecho.de === m && trecho.ate === m) {
      trecho = null; primeiroToque = -1;
    } else if (trecho) {
      // já existe trecho: o compasso tocado vira a nova ponta
      const de = Math.min(trecho.de, m), ate = Math.max(trecho.ate, m);
      trecho = (m >= trecho.de && m <= trecho.ate) ? { de: m, ate: m } : { de, ate };
    } else {
      trecho = { de: m, ate: m };
    }
    primeiroToque = -1;
    marcarRepetir();
    atualizarStatusTrecho();
    if (tocando) { parar(); }
    if (esperar) iniciarEspera();
  }

  function atualizarStatusTrecho() {
    if (!trecho) { status.textContent = ''; voltasTxt.textContent = ''; return; }
    status.textContent = trecho.de === trecho.ate
      ? 'Repetindo o compasso ' + (trecho.de + 1) + '. Toque em outro compasso para esticar o trecho, ou nele de novo para voltar à peça toda.'
      : 'Repetindo os compassos ' + (trecho.de + 1) + ' a ' + (trecho.ate + 1) + '.';
  }

  // ---------- reprodução ----------
  function segPorTempo() { return 60 / (peca.bpm * fator); }
  function faixa() {
    const tpc = tempoPorCompasso(peca);
    if (!trecho) return { ini: 0, fim: peca.compassos.length * tpc };
    return { ini: trecho.de * tpc, fim: (trecho.ate + 1) * tpc };
  }
  function iniciarAudio() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC();
      saida = ctx.createGain(); saida.gain.value = 0.8; saida.connect(ctx.destination);
    }
    return ctx.state === 'suspended' ? ctx.resume() : Promise.resolve();
  }
  async function tocar() {
    await iniciarAudio();
    const f = faixa();
    agenda = [];
    proximo = eventos.findIndex((e) => e.t >= f.ini);
    tInicio = ctx.currentTime + 0.15;
    volta = 0;
    tocando = true;
    comecarPratica();
    play.textContent = '■ Parar';
    play.classList.add('ligado');
    timer = setInterval(agendar, 25);
    agendar();
    laco();
  }
  function agendar() {
    if (!tocando) return;
    const f = faixa();
    const dur = (f.fim - f.ini) * segPorTempo();
    while (true) {
      if (proximo >= eventos.length || eventos[proximo].t >= f.fim) {
        // fim da faixa: repete a faixa se for compasso isolado, senão para ao terminar o som
        if (trecho) {
          volta++;
          // Contar as voltas não é enfeite: prática deliberada é saber quantas
          // vezes você repetiu a passagem, não "tocar um pouco".
          voltasTxt.textContent = volta + (volta === 1 ? ' volta' : ' voltas');
          proximo = eventos.findIndex((e) => e.t >= f.ini);
          continue;
        }
        if (ctx.currentTime > tInicio + dur + 0.3) { parar(); }
        return;
      }
      const e = eventos[proximo];
      const quando = tInicio + volta * dur + (e.t - f.ini) * segPorTempo();
      if (quando > ctx.currentTime + 0.15) return;
      e.midis.forEach((mm, k) => tocarNota(ctx, saida, mm, quando + k * 0.018, 0.5));
      agenda.push({ i: proximo, quando });
      proximo++;
    }
  }
  function laco() {
    if (!tocando) return;
    const agora = ctx.currentTime;
    let atual = -1;
    for (const a of agenda) if (a.quando <= agora) atual = a.i;
    if (agenda.length > 64) agenda = agenda.slice(-32);
    if (atual >= 0 && atual !== idxAtual) moverCursor(atual);
    raf = requestAnimationFrame(laco);
  }
  async function parar() {
    tocando = false;
    clearInterval(timer); timer = null;
    cancelAnimationFrame(raf);
    agenda = [];
    play.textContent = esperar ? '↺ Recomeçar' : '▶ Tocar';
    play.classList.remove('ligado');
    await pararPratica();
  }
  play.onclick = () => {
    if (esperar) return iniciarEspera();
    return tocando ? parar() : tocar();
  };

  // ---------- modo "esperar eu tocar" ----------
  function iniciarEspera() {
    if (tocando) parar();
    const f = faixa();
    const i = eventos.findIndex((e) => e.t >= f.ini);
    moverCursor(i);
    bloqueioMidi = -1;
    status.textContent = motor.ouvindo ? 'Toque a nota marcada.' : 'Ligue o microfone no botão acima e toque a nota marcada.';
  }
  function aoOuvir(freq) {
    if (!esperar || encerrada || idxAtual < 0 || !freq) return;
    const r = notaMaisProxima(freq);
    if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
    const ev = eventos[idxAtual];
    if (!ev || Math.abs(r.cents) > 25) return;
    if (ev.midis.includes(r.midi)) {
      bloqueioMidi = r.midi; bloqueioAte = performance.now() + 900;
      const f = faixa();
      let prox = idxAtual + 1;
      if (prox >= eventos.length || eventos[prox].t >= f.fim) {
        if (trecho) prox = eventos.findIndex((e) => e.t >= f.ini);
        else { status.textContent = '✓ Peça completa! Parabéns!'; moverCursor(-1); idxAtual = -1; return; }
      }
      moverCursor(prox);
      status.textContent = '✓';
    }
  }
  let micBtn;
  botaoMic();
  function botaoMic() {
    const b = el('button', 'chip sm', '🎤 Microfone');
    b.setAttribute('aria-pressed', 'false');
    b.hidden = true;
    b.onclick = async () => {
      if (motor.ouvindo) { motor.parar(); await pararPratica(); b.setAttribute('aria-pressed', 'false'); return; }
      try { await motor.iniciar(); comecarPratica(); b.setAttribute('aria-pressed', 'true'); status.textContent = 'Toque a nota marcada.'; }
      catch (e) { status.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações.'; }
    };
    micBtn = b;
  }

  // ---------- controles ----------
  function chips() {
    chipsPeca.innerHTML = '';
    pecas.forEach((p) => {
      const b = el('button', 'chip sm', p.titulo);
      b.setAttribute('aria-pressed', String(p === peca));
      b.onclick = () => { escolherPeca(p); };
      chipsPeca.append(b);
    });
    chipsVel.innerHTML = '';
    [[0.5, '50%'], [0.75, '75%'], [1, '100%']].forEach(([v, n]) => {
      const b = el('button', 'chip sm', n);
      b.setAttribute('aria-pressed', String(v === fator));
      b.onclick = () => { fator = v; Config.guardar('part.fator', v); if (tocando) { parar(); } chips(); atualizarTitulo(); };
      chipsVel.append(b);
    });
    chipsOpc.innerHTML = '';
    const e = el('button', 'chip sm', 'Esperar eu tocar');
    e.setAttribute('aria-pressed', String(esperar));
    e.onclick = async () => {
      esperar = !esperar;
      if (esperar) { if (tocando) await parar(); iniciarEspera(); play.textContent = '↺ Recomeçar'; }
      else { if (motor.ouvindo) { motor.parar(); pararPratica(); } moverCursor(-1); play.textContent = '▶ Tocar'; status.textContent = ''; }
      micBtn.hidden = !esperar; micBtn.setAttribute('aria-pressed', String(motor.ouvindo));
      chips();
    };
    chipsOpc.append(e, micBtn);
  }
  function atualizarTitulo() {
    titulo.textContent = peca.titulo;
    dica.textContent = peca.nivel + ' · ' + Math.round(peca.bpm * fator) + ' BPM · ' + peca.dica;
  }
  async function escolherPeca(p) {
    if (tocando) await parar();
    peca = p; eventos = achatar(p); trecho = null; primeiroToque = -1; idxAtual = -1;
    Config.guardar('part.peca', p.id);
    status.textContent = ''; voltasTxt.textContent = '';
    await carregarTrechos();          // cada peça tem os seus trechos marcados
    if (encerrada) return;
    chips(); atualizarTitulo(); desenhar(); marcarRepetir(); rolagem.scrollTop = 0;
    if (esperar) iniciarEspera();
  }

  // ---------- trechos difíceis ----------
  //
  // Marcar a passagem é metade do trabalho: a outra metade é voltar nela
  // amanhã. Por isso a marca fica guardada por peça e sobrevive ao app
  // fechar — ela é a lista do que ainda não está pronto.
  const C_TRECHOS = 'part.trechos';
  let trechosDificeis = [];

  async function carregarTrechos() {
    const todos = await Config.obter(C_TRECHOS, {});
    trechosDificeis = todos[peca.id] || [];
  }
  async function guardarTrechos() {
    const todos = await Config.obter(C_TRECHOS, {});
    if (trechosDificeis.length) todos[peca.id] = trechosDificeis; else delete todos[peca.id];
    await Config.guardar(C_TRECHOS, todos);
  }
  function ehDificil(m) {
    return trechosDificeis.some((t) => m >= t.de && m <= t.ate);
  }
  function rotuloTrecho(t) {
    return t.de === t.ate ? 'Compasso ' + (t.de + 1) : 'Compassos ' + (t.de + 1) + '–' + (t.ate + 1);
  }
  function desenharTrechos() {
    listaTrechos.innerHTML = '';
    btMarcar.disabled = !trecho;
    btMarcar.textContent = trecho
      ? (ehDificil(trecho.de) && ehDificil(trecho.ate) ? '★ Desmarcar este trecho' : '★ Marcar este trecho')
      : '★ Marcar este trecho';
    if (!trecho) {
      listaTrechos.append(el('p', 'cartao-desc',
        'Toque num compasso da partitura para isolá-lo, e em outro para esticar o trecho. '
        + 'Depois marque o que estiver difícil: a marca fica guardada nesta peça.'));
    }
    if (!trechosDificeis.length) return;
    const grade = el('div', 'chips');
    trechosDificeis.slice().sort((a, b) => a.de - b.de).forEach((t) => {
      const b = el('button', 'chip chip-trecho', '★ ' + rotuloTrecho(t));
      b.title = 'Repetir este trecho';
      b.onclick = () => {
        trecho = { de: t.de, ate: t.ate };
        primeiroToque = -1;
        volta = 0; voltasTxt.textContent = '';
        marcarRepetir(); atualizarStatusTrecho();
        if (tocando) parar();
      };
      grade.append(b);
    });
    listaTrechos.append(grade);
  }
  btMarcar.onclick = async () => {
    if (!trecho) return;
    const jaTem = trechosDificeis.findIndex((t) => t.de === trecho.de && t.ate === trecho.ate);
    if (jaTem >= 0) trechosDificeis.splice(jaTem, 1);
    else trechosDificeis = trechosDificeis
      .filter((t) => t.ate < trecho.de || t.de > trecho.ate)   // sem trechos sobrepostos
      .concat([{ de: trecho.de, ate: trecho.ate, em: new Date().toISOString() }]);
    await guardarTrechos();
    if (encerrada) return;
    marcarRepetir();
  };

  function aoEsconder() { if (document.hidden) { if (tocando) parar(); if (motor.ouvindo) { motor.parar(); pararPratica(); if (micBtn) micBtn.setAttribute('aria-pressed', 'false'); } } }
  document.addEventListener('visibilitychange', aoEsconder);

  (async () => {
    const id = await Config.obter('part.peca', PECAS[0].id);
    const fv = await Config.obter('part.fator', 1);
    if (encerrada) return;
    pecas = await todasAsPecas();
    if (encerrada) return;
    peca = pecas.find((p) => p.id === id) || PECAS[0];
    fator = [0.5, 0.75, 1].includes(fv) ? fv : 1;
    eventos = achatar(peca);
    await carregarTrechos();
    if (encerrada) return;
    chips(); atualizarTitulo(); desenhar(); marcarRepetir();
  })();

  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    const eraTocando = tocando;
    tocando = false;
    clearInterval(timer); cancelAnimationFrame(raf);
    if (motor.ouvindo) motor.parar();
    if (eraTocando || motor.ouvindo || esperar) pararPratica();
    if (motor.ctx) motor.ctx.close().catch(() => {});
    if (ctx) ctx.close().catch(() => {});
  };
}
