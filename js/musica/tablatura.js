// Tablatura: as seis linhas do violão com o número da casa em cada corda.
// Formato dos compassos (o mesmo usado nas aulas):
//   { notas: [ { pos: [[corda, casa], ...], fig: 'seminima', dedo: 'p', texto: '' } ] }
// Corda 1 é a mais fina e fica em cima, como em toda tablatura.
import { sv, VALOR } from './notacao.js';

const ESP = 17;           // distância entre as linhas das cordas
const Y0 = 34;            // onde começa a primeira linha

export function desenharTab(svg, { compassos = [], largura = 1000, dedos = true, numerar = false, quebrar = 0, aoClicar = null } = {}) {
  svg.innerHTML = '';
  svg.setAttribute('class', 'tab-aula');
  const porLinha = quebrar || compassos.length || 1;
  const linhas = [];
  for (let i = 0; i < compassos.length; i += porLinha) linhas.push(compassos.slice(i, i + porLinha));
  if (!linhas.length) linhas.push([]);

  const temDedo = dedos && compassos.some((c) => (c.notas || []).some((n) => n.dedo));
  const altLinha = Y0 + ESP * 5 + 46 + (temDedo ? 24 : 0);
  svg.setAttribute('viewBox', `0 0 ${largura} ${altLinha * linhas.length}`);

  let numero = 1;
  linhas.forEach((grupo, li) => {
    const g = sv('g', { transform: `translate(0 ${li * altLinha})` }, svg);
    const x0 = 36, xFim = largura - 12;
    for (let k = 0; k < 6; k++) sv('line', { x1: x0, x2: xFim, y1: Y0 + k * ESP, y2: Y0 + k * ESP, class: 'tabl-linha' }, g);
    ['T', 'A', 'B'].forEach((l, i) => {
      const t = sv('text', { x: 10, y: Y0 + (1.3 + i * 1.4) * ESP, class: 'tabl-tab' }, g);
      t.textContent = l;
    });
    sv('line', { x1: x0, x2: x0, y1: Y0, y2: Y0 + 5 * ESP, class: 'tabl-barra' }, g);

    const pesos = grupo.map((c) => Math.max(1, (c.notas || []).length));
    const total = pesos.reduce((a, b) => a + b, 0) || 1;
    let cx = x0;
    grupo.forEach((comp, ci) => {
      const larg = (xFim - x0) * (pesos[ci] / total);
      desenhar(g, comp, cx, larg, { numerar, numero, temDedo, aoClicar });
      numero++; cx += larg;
      const ultimo = li === linhas.length - 1 && ci === grupo.length - 1;
      sv('line', { x1: cx, x2: cx, y1: Y0, y2: Y0 + 5 * ESP, class: 'tabl-barra' + (ultimo ? ' fim' : '') }, g);
    });
  });
  return svg;
}

function desenhar(g, comp, x0, largura, cfg) {
  const notas = comp.notas || [];
  if (cfg.numerar) {
    const t = sv('text', { x: x0 + 3, y: Y0 - 12, class: 'tabl-num' }, g);
    t.textContent = cfg.numero;
  }
  if (comp.acorde) {
    const t = sv('text', { x: x0 + 3, y: Y0 - 12, class: 'tabl-cifra' }, g);
    t.textContent = comp.acorde;
  }
  const dur = notas.map((n) => (VALOR[n.fig || 'seminima'] || 1) * (n.ponto ? 1.5 : 1));
  const soma = dur.reduce((a, b) => a + b, 0) || 1;
  const margem = largura * 0.12;
  const util = largura - margem * 1.5;
  let acum = 0;
  const yBase = Y0 + 5 * ESP;

  notas.forEach((n, i) => {
    const x = x0 + margem + (acum / soma) * util;
    acum += dur[i];
    const gN = sv('g', { class: 'tabl-nota' + (n.classe ? ' ' + n.classe : ''), 'data-i': i }, g);
    (n.pos || []).forEach(([corda, casa]) => {
      const y = Y0 + (corda - 1) * ESP;
      sv('rect', { x: x - 8, y: y - 8, width: 16, height: 16, class: 'tabl-fundo' }, gN);
      const t = sv('text', { x, y: y + 5, class: 'tabl-casa', 'text-anchor': 'middle' }, gN);
      t.textContent = casa;
    });
    // hastinha embaixo mostrando a figura
    const fig = n.fig || 'seminima';
    const h = yBase + 10;
    sv('line', { x1: x, x2: x, y1: h, y2: h + 16, class: 'tabl-haste' }, gN);
    if (VALOR[fig] >= 2) sv('circle', { cx: x, cy: h + 19, r: 2.6, class: 'tabl-oco' }, gN);
    if (VALOR[fig] <= 0.5) sv('line', { x1: x, x2: x + 7, y1: h + 16, y2: h + 10, class: 'tabl-viga' }, gN);
    if (VALOR[fig] <= 0.25) sv('line', { x1: x, x2: x + 7, y1: h + 12, y2: h + 6, class: 'tabl-viga' }, gN);
    if (cfg.temDedo && n.dedo) {
      const t = sv('text', { x, y: h + 38, class: 'tabl-dedo', 'text-anchor': 'middle' }, gN);
      t.textContent = n.dedo;
    }
    if (n.texto) {
      const t = sv('text', { x, y: Y0 - 12, class: 'tabl-txt', 'text-anchor': 'middle' }, gN);
      t.textContent = n.texto;
    }
    if (cfg.aoClicar) {
      const r = sv('rect', { x: x - 14, y: Y0 - 14, width: 28, height: 5 * ESP + 60, class: 'toque' }, gN);
      r.onclick = () => cfg.aoClicar(i, n);
    }
  });
}

// Converte a tablatura para os eventos que o tocador entende (som real).
import { midiDaPosicao } from '../curso/audio.js';
export function eventosDaTab(compassos) {
  const ev = [];
  compassos.forEach((c) => (c.notas || []).forEach((n) => {
    ev.push({ midis: (n.pos || []).map(([corda, casa]) => midiDaPosicao(corda, casa)), fig: n.fig || 'seminima', ponto: n.ponto });
  }));
  return ev;
}
