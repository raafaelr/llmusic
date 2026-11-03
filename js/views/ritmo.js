// Leitura rítmica: o app mostra 2 compassos de ritmo, conta 4 tempos de preparação com o metrônomo
// e você toca o ritmo no botão grande (ou na barra de espaço). Pausas = silêncio, sem tocar.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { NIVEIS_RITMO, gerarRitmo, onsets, avaliarToques, estrelasDoRitmo } from '../ritmo.js';

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
const COMPASSOS = 2, MW = 440, X0 = 90, Y = 78;

export function montar(raiz, ir) {
  let nivel = 1, bpm = 60;
  let ev = [], esperados = [];
  let ctx = null, t0 = 0, rodando = false, raf = null, fimTimer = null;
  let toques = [];
  let encerrada = false;

  const tela = el('main', 'tela ritmo');
  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Ritmo'));

  const area = el('section', 'coluna');
  const instr = el('p', 'pergunta pergunta-leitura', '');
  instr.setAttribute('role', 'status');
  const svg = sv('svg', { class: 'pauta-svg ritmo-svg', viewBox: `0 0 ${X0 + MW * COMPASSOS + 20} 150`, role: 'img', 'aria-label': 'Ritmo para tocar' });
  const contagem = el('p', 'contagem', '');
  area.append(instr, svg, contagem);

  const tap = el('button', 'botao-tap', 'TOQUE AQUI no ritmo');
  tap.disabled = true;
  const painelFim = el('div', 'painel-fim'); painelFim.hidden = true;

  const opcoes = el('div', 'leitura-opcoes');
  const gNiv = el('div', 'grupo'); gNiv.append(el('h2', 'rotulo-grupo', 'Nível'));
  const chipsNiv = el('div', 'chips'); gNiv.append(chipsNiv);
  const gB = el('div', 'grupo'); gB.append(el('h2', 'rotulo-grupo', 'Andamento (BPM)'));
  const chipsB = el('div', 'chips'); gB.append(chipsB);
  const iniciar = el('button', 'botao-principal', '▶ Começar');
  opcoes.append(gNiv, gB, iniciar);

  tela.append(topo, area, tap, painelFim, opcoes);
  raiz.append(tela);

  // ---------- desenho do ritmo ----------
  const xDe = (t) => X0 + Math.floor(t / 4) * MW + 20 + ((t % 4) / 4) * (MW - 40);
  let grupos = [];
  function desenhar() {
    svg.innerHTML = '';
    grupos = [];
    sv('line', { x1: 20, x2: X0 + MW * COMPASSOS, y1: Y, y2: Y, class: 'linha-pauta' }, svg);
    for (let c = 0; c <= COMPASSOS; c++) sv('line', { x1: X0 + c * MW, x2: X0 + c * MW, y1: Y - 30, y2: Y + 30, class: 'linha-pauta' }, svg);
    const f1 = sv('text', { x: 36, y: Y - 2, class: 'compasso-num', 'text-anchor': 'middle' }, svg); f1.textContent = '4';
    const f2 = sv('text', { x: 36, y: Y + 30, class: 'compasso-num', 'text-anchor': 'middle' }, svg); f2.textContent = '4';
    ev.forEach((e, i) => {
      const x = xDe(e.t);
      const g = sv('g', { class: 'ritmo-ev ' + e.tipo, 'data-t': e.t }, svg);
      if (e.tipo === 'nota') {
        sv('ellipse', { cx: x, cy: Y, rx: 13, ry: 10, class: e.d >= 2 ? 'cabeca-aberta' : 'cabeca', transform: `rotate(-18 ${x} ${Y})` }, g);
        sv('line', { x1: x + 12, x2: x + 12, y1: Y, y2: Y - 48, class: 'haste' }, g);
        if (e.d === 0.5) {
          const prox = ev[i + 1], ant = ev[i - 1];
          if (prox && prox.tipo === 'nota' && prox.d === 0.5 && Math.floor(prox.t) === Math.floor(e.t)) sv('line', { x1: x + 12, x2: xDe(prox.t) + 12, y1: Y - 48, y2: Y - 48, class: 'viga-grossa' }, g);
          else if (!(ant && ant.tipo === 'nota' && ant.d === 0.5 && Math.floor(ant.t) === Math.floor(e.t))) sv('path', { d: `M${x + 12} ${Y - 48} q 14 8 8 24`, class: 'bandeira' }, g);
        }
      } else if (e.d >= 1) {
        sv('polyline', { points: `${x - 5},${Y - 22} ${x + 5},${Y - 10} ${x - 5},${Y + 2} ${x + 5},${Y + 14}`, class: 'pausa-svg' }, g);
      } else {
        sv('path', { d: `M${x - 6} ${Y - 10} l 10 0 l -8 20`, class: 'pausa-svg' }, g);
        sv('circle', { cx: x - 6, cy: Y - 10, r: 3.5, class: 'pausa-pt' }, g);
      }
      grupos.push(g);
    });
    cursor = sv('line', { x1: 0, x2: 0, y1: Y - 40, y2: Y + 38, class: 'cursor-ritmo', visibility: 'hidden' }, svg);
  }
  let cursor;

  // ---------- exercício ----------
  function novo() {
    parar(false);
    ev = gerarRitmo(nivel, COMPASSOS);
    esperados = onsets(ev);
    svg.dataset.onsets = esperados.join(',');
    painelFim.hidden = true;
    desenhar();
    instr.textContent = 'Toque só as notas (não as pausas), no tempo do metrônomo.';
    contagem.textContent = '';
    tap.hidden = false;
  }

  function clique(tempo, forte) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = forte ? 1600 : 900;
    g.gain.setValueAtTime(0.0001, tempo);
    g.gain.exponentialRampToValueAtTime(0.5, tempo + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, tempo + 0.06);
    o.connect(g); g.connect(ctx.destination);
    o.start(tempo); o.stop(tempo + 0.08);
  }
  async function comecar() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!ctx) ctx = new AC();
    if (ctx.state === 'suspended') await ctx.resume();
    window.__llmusicCtx = ctx;                       // gancho para os testes automáticos
    ev = ev.length ? ev : gerarRitmo(nivel, COMPASSOS);
    painelFim.hidden = true;
    desenhar();
    grupos.forEach((g) => g.classList.remove('hit', 'miss'));
    toques = []; rodando = true;
    const spb = 60 / bpm;
    const inicioContagem = ctx.currentTime + 0.3;
    t0 = inicioContagem + 4 * spb;                   // instante do tempo 0 do exercício
    svg.dataset.t0 = String(t0); svg.dataset.bpm = String(bpm);
    for (let b = 0; b < 4; b++) clique(inicioContagem + b * spb, b === 0);
    for (let b = 0; b < COMPASSOS * 4; b++) clique(t0 + b * spb, b % 4 === 0);
    tap.disabled = false;
    comecarPratica();
    iniciar.textContent = '■ Parar'; iniciar.classList.add('ligado');
    instr.textContent = 'Contagem… prepare-se!';
    laco();
    clearTimeout(fimTimer);
    fimTimer = setTimeout(avaliar, (t0 + COMPASSOS * 4 * spb + 0.5 - ctx.currentTime) * 1000);
  }
  function laco() {
    if (!rodando) return;
    const spb = 60 / bpm;
    const b = (ctx.currentTime - t0) / spb;
    if (b < 0) {
      contagem.textContent = String(Math.min(4, Math.floor(b + 5)));
      cursor.setAttribute('visibility', 'hidden');
    } else if (b <= COMPASSOS * 4) {
      contagem.textContent = String(Math.floor(b % 4) + 1);
      instr.textContent = 'Toque!';
      const x = xDe(Math.min(b, COMPASSOS * 4 - 0.001));
      cursor.setAttribute('x1', x); cursor.setAttribute('x2', x); cursor.setAttribute('visibility', 'visible');
    }
    raf = requestAnimationFrame(laco);
  }
  function registrarToque() {
    if (!rodando || !ctx) return;
    const b = (ctx.currentTime - t0) / (60 / bpm);
    if (b < -0.5 || b > COMPASSOS * 4 + 0.5) return;
    toques.push(b);
    tap.classList.add('batido'); setTimeout(() => tap.classList.remove('batido'), 90);
  }
  tap.addEventListener('pointerdown', (e) => { e.preventDefault(); registrarToque(); });
  function teclado(e) { if (e.code === 'Space' && !e.repeat && rodando) { e.preventDefault(); registrarToque(); } }
  document.addEventListener('keydown', teclado);

  async function avaliar() {
    if (!rodando) return;
    rodando = false;
    cancelAnimationFrame(raf);
    tap.disabled = true; cursor.setAttribute('visibility', 'hidden');
    iniciar.textContent = '▶ Começar'; iniciar.classList.remove('ligado');
    await pararPratica();
    const av = avaliarToques(esperados, toques, 0.25);
    const r = estrelasDoRitmo(av, esperados.length);
    // pinta os resultados nas notas
    const notasG = grupos.filter((g) => g.classList.contains('nota'));
    notasG.forEach((g, i) => g.classList.add(av.desvios[i] === null ? 'miss' : 'hit'));
    const medidos = av.desvios.filter((d) => d !== null);
    const media = medidos.length ? medidos.reduce((a, d) => a + d, 0) / medidos.length : 0;
    const ms = Math.round(media * 60000 / bpm);
    const chave = 'ritmo.melhor.' + nivel;
    const antes = await Config.obter(chave, 0);
    if (r.estrelas > antes) await Config.guardar(chave, r.estrelas);
    if (encerrada) return;
    painelFim.innerHTML = '';
    const est = el('p', 'estrelas', '★'.repeat(r.estrelas) + '☆'.repeat(3 - r.estrelas));
    est.dataset.estrelas = r.estrelas;
    est.setAttribute('aria-label', r.estrelas + ' de 3 estrelas');
    const tendencia = medidos.length < 3 ? '' : Math.abs(ms) < 25 ? ' · no tempo!' : ms > 0 ? ' · tendência: atrasado (' + ms + ' ms)' : ' · tendência: adiantado (' + Math.abs(ms) + ' ms)';
    const msg = el('p', 'fim-msg', av.acertos + ' de ' + esperados.length + ' notas no tempo' + (av.extras ? ', ' + av.extras + ' toque(s) a mais' : '') + tendencia + (r.estrelas > antes ? ' · novo recorde!' : ''));
    msg.dataset.acertos = av.acertos; msg.dataset.extras = av.extras;
    const outro = el('button', 'botao-principal', 'Novo ritmo'); outro.onclick = novo;
    const repetir = el('button', 'botao-sec', 'Tentar este de novo'); repetir.onclick = () => { painelFim.hidden = true; tap.hidden = false; comecar(); };
    const botoesFim = el('div', 'fim-botoes'); botoesFim.append(outro, repetir);
    painelFim.append(est, msg, botoesFim);
    painelFim.hidden = false; tap.hidden = true;
    instr.textContent = r.estrelas === 3 ? 'Excelente!' : r.estrelas >= 1 ? 'Muito bem!' : 'Vamos de novo, mais devagar.';
    contagem.textContent = '';
  }
  async function parar(avaliando = true) {
    clearTimeout(fimTimer);
    if (rodando) {
      rodando = false; cancelAnimationFrame(raf);
      if (ctx) { ctx.close().catch(() => {}); ctx = null; }
      tap.disabled = true; iniciar.textContent = '▶ Começar'; iniciar.classList.remove('ligado');
      await pararPratica();
    }
  }
  iniciar.onclick = () => (rodando ? parar().then(() => { instr.textContent = 'Parado.'; contagem.textContent = ''; }) : comecar());

  function chips() {
    chipsNiv.innerHTML = '';
    NIVEIS_RITMO.forEach((n) => {
      const b = el('button', 'chip sm', n.nome); b.title = n.desc;
      b.setAttribute('aria-pressed', String(n.id === nivel));
      b.onclick = () => { nivel = n.id; Config.guardar('ritmo.nivel', n.id); chips(); novo(); };
      chipsNiv.append(b);
    });
    chipsB.innerHTML = '';
    [40, 50, 60, 80, 100].forEach((v) => {
      const b = el('button', 'chip sm', String(v));
      b.setAttribute('aria-pressed', String(v === bpm));
      b.onclick = () => { bpm = v; Config.guardar('ritmo.bpm', v); chips(); if (rodando) parar(); };
      chipsB.append(b);
    });
  }
  function aoEsconder() { if (document.hidden && rodando) parar(); }
  document.addEventListener('visibilitychange', aoEsconder);

  (async () => {
    const n = await Config.obter('ritmo.nivel', 1);
    const b = await Config.obter('ritmo.bpm', 60);
    if (encerrada) return;
    nivel = [1, 2, 3].includes(n) ? n : 1;
    bpm = [40, 50, 60, 80, 100].includes(b) ? b : 60;
    chips(); novo();
  })();

  return () => {
    encerrada = true;
    clearTimeout(fimTimer); cancelAnimationFrame(raf);
    document.removeEventListener('keydown', teclado);
    document.removeEventListener('visibilitychange', aoEsconder);
    if (rodando) pararPratica();
    rodando = false;
    if (ctx) ctx.close().catch(() => {});
  };
}
