// Desenhos didáticos em SVG que as aulas usam: diagrama de acorde, anatomia do violão,
// postura, mãos, figuras rítmicas e compasso representado graficamente.
// Tudo desenhado com código (nenhuma imagem), para o app continuar leve e funcionar offline.
import { sv, VALOR, NOME_FIGURA } from './notacao.js';

function txt(pai, x, y, texto, classe, anc = 'middle') {
  const t = sv('text', { x, y, class: classe, 'text-anchor': anc }, pai);
  t.textContent = texto;
  return t;
}

// ===========================================================================
// 1) DIAGRAMA DE ACORDE  (grade vertical: cordas de pé, casas deitadas)
// ===========================================================================
// cordas: 6 números da 6ª para a 1ª corda. -1 = não tocar, 0 = solta, n = casa.
// dedos:  6 números com o dedo da mão esquerda (0 = nenhum, 1 a 4).
export function diagramaAcorde(svg, { nome = '', desc = '', cordas = [], dedos = [], casaInicial = 0, pestana = null } = {}) {
  const L = 150, A = 200, X0 = 28, Y0 = 60, DX = 19, DY = 24, CASAS = 4;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-acorde');
  if (nome) txt(svg, L / 2, 22, nome, 'diag-nome');
  if (desc) txt(svg, L / 2, 38, desc, 'diag-desc');

  // a primeira casa mostrada: 0 = posição aberta (desenha a pestana grossa em cima)
  const base = casaInicial;
  if (base === 0) sv('rect', { x: X0 - 1, y: Y0 - 4, width: DX * 5 + 2, height: 5, class: 'diag-pestana' }, svg);
  else txt(svg, X0 - 17, Y0 + DY * 0.75, base + 'ª', 'diag-casa-num', 'middle');

  for (let c = 0; c <= CASAS; c++) sv('line', { x1: X0, x2: X0 + DX * 5, y1: Y0 + c * DY, y2: Y0 + c * DY, class: 'diag-traste' }, svg);
  for (let k = 0; k < 6; k++) sv('line', { x1: X0 + k * DX, x2: X0 + k * DX, y1: Y0, y2: Y0 + CASAS * DY, class: 'diag-corda' }, svg);

  if (pestana) {
    const rel = pestana.casa - base + (base === 0 ? 0 : 1);
    const a = Math.min(pestana.de, pestana.ate) - 1, b = Math.max(pestana.de, pestana.ate) - 1;
    // de/ate em número de corda (6 = mais grave): a coluna 0 é a 6ª corda
    const xa = X0 + (6 - Math.max(pestana.de, pestana.ate)) * DX;
    const xb = X0 + (6 - Math.min(pestana.de, pestana.ate)) * DX;
    sv('rect', { x: xa - 7, y: Y0 + (rel - 0.5) * DY - 7, width: xb - xa + 14, height: 14, rx: 7, class: 'diag-barra' }, svg);
  }

  cordas.forEach((casa, k) => {
    const x = X0 + k * DX;
    if (casa === -1) { txt(svg, x, Y0 - 12, '×', 'diag-x'); return; }
    if (casa === 0) { sv('circle', { cx: x, cy: Y0 - 16, r: 4.6, class: 'diag-solta' }, svg); return; }
    const rel = casa - base + (base === 0 ? 0 : 1);
    const cy = Y0 + (rel - 0.5) * DY;
    sv('circle', { cx: x, cy, r: 8.4, class: 'diag-dedo' }, svg);
    if (dedos[k]) txt(svg, x, cy + 4, dedos[k], 'diag-dedo-num');
  });

  for (let k = 0; k < 6; k++) txt(svg, X0 + k * DX, Y0 + CASAS * DY + 16, 6 - k, 'diag-corda-num');
  return svg;
}

// Tradução: a forma do app (lista da 6ª para a 1ª) para um texto falado.
export function descreverAcorde(cordas) {
  const partes = [];
  cordas.forEach((casa, k) => {
    const corda = 6 - k;
    if (casa === -1) partes.push(corda + 'ª não toca');
    else if (casa === 0) partes.push(corda + 'ª solta');
    else partes.push(corda + 'ª na casa ' + casa);
  });
  return partes.join(', ') + '.';
}

// ===========================================================================
// 2) ANATOMIA DO VIOLÃO
// ===========================================================================
// partes: lista de ids a destacar. Se vazia, mostra todas com rótulo.
export const PARTES_VIOLAO = [
  { id: 'cabeca', nome: 'Mão (cabeça)', x: 60, y: 138, lx: 56, ly: 44, desc: 'A ponta do braço, onde ficam as tarraxas.' },
  { id: 'tarraxas', nome: 'Tarraxas', x: 40, y: 212, lx: 44, ly: 316, desc: 'As engrenagens que esticam ou afrouxam cada corda. É com elas que se afina.' },
  { id: 'pestana', nome: 'Pestana', x: 169, y: 147, lx: 170, ly: 44, desc: 'A peça branca no fim do braço: é onde começa a parte que vibra de cada corda.' },
  { id: 'braco', nome: 'Braço', x: 250, y: 196, lx: 250, ly: 316, desc: 'A parte comprida onde a mão esquerda trabalha.' },
  { id: 'escala', nome: 'Escala', x: 330, y: 148, lx: 330, ly: 44, desc: 'A madeira escura colada sobre o braço, onde você aperta as cordas.' },
  { id: 'trastes', nome: 'Trastes', x: 400, y: 196, lx: 400, ly: 316, desc: 'As barrinhas de metal. O espaço entre dois trastes é uma casa.' },
  { id: 'tampo', nome: 'Tampo', x: 520, y: 110, lx: 500, ly: 44, desc: 'A tampa da frente. É ela que vibra e faz quase todo o som.' },
  { id: 'boca', nome: 'Boca', x: 605, y: 209, lx: 605, ly: 316, desc: 'O buraco redondo. O som sai por ali depois de ressoar dentro da caixa.' },
  { id: 'cordas', nome: 'Cordas', x: 660, y: 162, lx: 680, ly: 44, desc: 'Seis cordas. No violão clássico, as três mais agudas são de náilon.' },
  { id: 'cavalete', nome: 'Cavalete', x: 748, y: 256, lx: 740, ly: 316, desc: 'A peça onde as cordas são amarradas. Leva a vibração para o tampo.' },
  { id: 'corpo', nome: 'Corpo (caixa)', x: 858, y: 250, lx: 858, ly: 316, desc: 'A caixa de ressonância, que amplifica a vibração das cordas.' }
];

// Desenha o violão inteiro (corpo, braço, cabeça, cordas) em coordenadas locais
// de 0 a 900 na horizontal e 0 a 340 na vertical, com a cabeça à esquerda.
// A anatomia e a postura usam o mesmo desenho, só que em tamanhos diferentes.
// O desenho está em escala: um violão clássico tem 1000 mm de comprimento total,
// então aqui 1 mm vale 0,9 unidade e o instrumento ocupa a caixa inteira (900 x 340),
// com a linha das cordas no meio (y = 170). As medidas são as de um clássico padrão:
// escala 650, corpo 487 de comprimento, bojo superior 278, cintura 243, bojo inferior
// 368, pestana 52 de largura, boca 87 de diâmetro, 59 entre as cordas no cavalete.
// Desenhar na medida certa custa o mesmo que desenhar no olho e sai parecido com um violão.
const V = {
  nut: 169.2,        // pestana (188 mm)
  casa12: 461.7,     // onde o braço encontra o corpo (513 mm)
  fimEscala: 558.9,  // a escala avança sobre o tampo até a 19ª casa
  boca: 605.3, rBoca: 39.2,
  rastilho: 754.2,   // 188 + 650 mm: o ponto que define a afinação
  cy: 170, passo: 585 // 650 mm de escala x 0,9
};
// Contorno do corpo: curva passando por dezessete pontos medidos de um violão real.
const CORPO_D = 'M461.7 107.0 470.3 91.2 478.9 79.9 487.5 71.2 496.1 64.6 504.7 59.4 513.3 55.0 521.9 51.7 530.5 49.3 539.0 47.3 547.6 45.7 556.2 44.9 564.8 45.1 573.4 45.6 582.0 46.5 590.6 47.4 599.2 48.6 607.8 50.4 616.4 52.4 625.0 54.2 633.6 55.8 642.2 57.5 650.8 59.0 659.4 60.2 668.0 60.6 676.6 60.0 685.1 58.2 693.7 55.7 702.3 52.7 710.9 49.7 719.5 45.6 728.1 40.4 736.7 34.7 745.3 28.9 753.9 23.0 762.5 15.6 771.1 8.6 779.7 4.6 788.3 4.5 796.9 4.8 805.5 5.4 814.1 6.2 822.7 7.9 831.2 11.2 839.8 15.3 848.4 19.9 857.0 25.9 865.6 33.8 874.2 45.8 882.8 64.2 891.4 93.1 900.0 170.0L900.0 170.0 891.4 246.9 882.8 275.8 874.2 294.2 865.6 306.2 857.0 314.1 848.4 320.1 839.8 324.7 831.2 328.8 822.7 332.1 814.1 333.8 805.5 334.6 796.9 335.2 788.3 335.5 779.7 335.4 771.1 331.4 762.5 324.4 753.9 317.0 745.3 311.1 736.7 305.3 728.1 299.6 719.5 294.4 710.9 290.3 702.3 287.3 693.7 284.3 685.1 281.8 676.6 280.0 668.0 279.4 659.4 279.8 650.8 281.0 642.2 282.5 633.6 284.2 625.0 285.8 616.4 287.6 607.8 289.6 599.2 291.4 590.6 292.6 582.0 293.5 573.4 294.4 564.8 294.9 556.2 295.1 547.6 294.3 539.0 292.7 530.5 290.7 521.9 288.3 513.3 285.0 504.7 280.6 496.1 275.4 487.5 268.8 478.9 260.1 470.3 248.8 461.7 233.0Z';
// Cabeça fendida, como a de um violão clássico: 185 mm, alargando de 52 para 78.
const CABECA_D = 'M169.2,146.6 C158.4,146.6 151.2,140.3 144,138.5 C108,135.8 63,134.9 36,134.9'
  + ' C16.2,134.9 5.4,141.2 5.4,155.6 L5.4,184.4 C5.4,198.8 16.2,205.1 36,205.1'
  + ' C63,205.1 108,204.2 144,201.5 C151.2,199.7 158.4,193.4 169.2,193.4 Z';

// Distância da pestana até o traste n. Cada casa é 1/2^(1/12) da anterior: é essa
// fórmula que faz as casas irem ficando menores, e não um espaçamento igual.
export function xDoTraste(n) { return V.nut + V.passo * (1 - Math.pow(2, -n / 12)); }

export function silhuetaViolao(g, { comDetalhe = true } = {}) {
  sv('path', { d: CORPO_D, class: 'v-corpo', 'data-id': 'corpo' }, g);
  sv('path', { d: CABECA_D, class: 'v-cabeca', 'data-id': 'cabeca' }, g);
  // o braço vai se alargando da pestana (52 mm) até a 12ª casa (62 mm)
  sv('path', { d: `M${V.nut},146.6 L${V.casa12},142.1 L${V.casa12},197.9 L${V.nut},193.4 Z`, class: 'v-braco', 'data-id': 'braco' }, g);
  sv('path', { d: `M${V.casa12},142.1 L${V.fimEscala},140.3 L${V.fimEscala},199.7 L${V.casa12},197.9 Z`, class: 'v-escala', 'data-id': 'escala' }, g);
  sv('rect', { x: V.nut - 4.5, y: 145.7, width: 5, height: 48.6, rx: 1.5, class: 'v-pestana', 'data-id': 'pestana' }, g);
  sv('circle', { cx: V.boca, cy: V.cy, r: V.rBoca, class: 'v-boca', 'data-id': 'boca' }, g);
  sv('circle', { cx: V.boca, cy: V.cy, r: V.rBoca + 4, class: 'v-roseta', 'data-id': 'boca' }, g);
  // cavalete de 185 mm, com o rastilho em cima do ponto que define a escala
  sv('path', { d: `M721.8,86.7 L774,86.7 L779.4,99.3 L779.4,240.7 L774,253.3 L721.8,253.3 L716.4,240.7 L716.4,99.3 Z`, class: 'v-cavalete', 'data-id': 'cavalete' }, g);
  if (!comDetalhe) return g;
  sv('circle', { cx: V.boca, cy: V.cy, r: V.rBoca + 13, class: 'v-roseta', 'data-id': 'boca' }, g);
  sv('rect', { x: V.rastilho - 1.8, y: 141, width: 3.6, height: 58, rx: 1, class: 'v-rastilho', 'data-id': 'cavalete' }, g);
  for (let lado = -1; lado <= 1; lado += 2) {
    sv('rect', { x: 23.4, y: V.cy + lado * 22.5 - 5.4, width: 93.6, height: 10.8, rx: 5.4, class: 'v-fenda', 'data-id': 'cabeca' }, g);
    for (let k = 0; k < 3; k++) {
      const xr = 39.6 + k * 28.8;
      sv('circle', { cx: xr, cy: V.cy + lado * 22.5, r: 6.5, class: 'v-tarraxa', 'data-id': 'tarraxas' }, g);
      sv('line', { x1: xr, x2: xr, y1: V.cy + lado * 22.5, y2: V.cy + lado * 39.6, class: 'v-eixo', 'data-id': 'tarraxas' }, g);
      sv('ellipse', { cx: xr, cy: V.cy + lado * 43.2, rx: 4.5, ry: 6.3, class: 'v-botao', 'data-id': 'tarraxas' }, g);
    }
  }
  for (let n = 1; n <= 19; n++) {
    const x = xDoTraste(n);
    const meia = x <= V.casa12 ? 23.4 + (x - V.nut) / (V.casa12 - V.nut) * 4.5 : 29.7;
    sv('line', { x1: x, x2: x, y1: V.cy - meia, y2: V.cy + meia, class: 'v-traste', 'data-id': 'trastes' }, g);
  }
  // as cordas abrem de 43 mm na pestana para 59 mm no cavalete, e vão engrossando
  for (let i = 0; i < 6; i++) {
    const f = i / 5 - 0.5;
    sv('line', { x1: V.nut - 2, x2: V.rastilho, y1: V.cy + f * 38.7, y2: V.cy + f * 53.1, class: 'v-corda', 'data-id': 'cordas', 'stroke-width': 0.8 + i * 0.38 }, g);
    sv('line', { x1: 39.6, x2: V.nut - 2, y1: V.cy + f * 21, y2: V.cy + f * 38.7, class: 'v-corda', 'data-id': 'cordas', 'stroke-width': 0.7 + i * 0.28 }, g);
  }
  return g;
}

export function anatomiaViolao(svg, { destacar = [], rotulos = true } = {}) {
  // O violão ocupa 900 x 340; a folga em volta é para os rótulos não caírem
  // em cima do corpo, que nesta escala chega quase na borda de cima e de baixo.
  const OFX = 20, OFY = 44;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', '0 0 940 428');
  svg.setAttribute('class', 'diag-violao');
  const g = sv('g', { transform: `translate(${OFX} ${OFY})` }, svg);
  silhuetaViolao(g);

  if (destacar.length) {
    g.querySelectorAll('[data-id]').forEach((e) => {
      if (!destacar.includes(e.dataset.id)) e.classList.add('apagado'); else e.classList.add('aceso');
    });
  }
  if (rotulos) {
    const alvos = destacar.length ? PARTES_VIOLAO.filter((p) => destacar.includes(p.id)) : PARTES_VIOLAO;
    alvos.forEach((p) => {
      const cima = p.ly < 120;
      const ly = cima ? 30 : 412;
      sv('line', { x1: p.x + OFX, x2: p.lx + OFX, y1: p.y + OFY, y2: ly + (cima ? 8 : -12), class: 'v-guia' }, svg);
      txt(svg, p.lx + OFX, ly, p.nome, 'v-rotulo');
    });
  }
  return svg;
}

// ===========================================================================
// 3) MÃOS: nomes dos dedos
// ===========================================================================
export const DEDOS_DIR = [
  { s: 'p', nome: 'polegar', lat: 'pulgar', uso: 'cordas 6, 5 e 4 (os baixos)' },
  { s: 'i', nome: 'indicador', lat: 'índice', uso: '3ª corda' },
  { s: 'm', nome: 'médio', lat: 'medio', uso: '2ª corda' },
  { s: 'a', nome: 'anelar', lat: 'anular', uso: '1ª corda' },
  { s: 'c', nome: 'mindinho', lat: 'chico/meñique', uso: 'quase não se usa' }
];
export const DEDOS_ESQ = [
  { s: '1', nome: 'indicador', uso: 'o dedo das pestanas' },
  { s: '2', nome: 'médio', uso: 'o mais forte depois do indicador' },
  { s: '3', nome: 'anelar', uso: 'precisa de treino para ficar firme' },
  { s: '4', nome: 'mindinho', uso: 'o mais fraco: nunca o deixe de fora' }
];

// Desenha uma mão estilizada vista de cima, com os dedos nomeados.
// lado: 'direita' (p i m a c) ou 'esquerda' (1 2 3 4, com o polegar atrás).
// Medidas de uma mão adulta (mm): mão 189 de comprimento, palma 107, largura 87.
// Dedos, a partir da prega da palma: indicador 70, médio 80, anelar 75, mínimo 58,
// polegar 65. Desenhar os quatro dedos iguais é o que fazia a mão antiga parecer
// uma luva; aqui cada um tem o comprimento e a largura que tem na mão de verdade.
const MAO_DEDOS = [
  { k: 'i', bx: 158, by: 228, px: 150, py: 158, wb: 9.5, wp: 7.4, arco: -3 },
  { k: 'm', bx: 181, by: 221, px: 180, py: 141, wb: 9.6, wp: 7.5, arco: 0 },
  { k: 'a', bx: 204, by: 225, px: 209, py: 150, wb: 8.8, wp: 7.0, arco: 2.5 },
  { k: 'c', bx: 224, by: 236, px: 236, py: 178, wb: 7.6, wp: 6.0, arco: 4 }
];
const MAO_POLEGAR = { k: 'p', bx: 152, by: 300, px: 92, py: 252, wb: 11, wp: 8, arco: -4 };
const MAO_PALMA = 'M148 332 C141 316 140 300 142 284 C144 262 147 244 150 232'
  + ' L168 227 L192 221 L214 225 L231 233 C236 248 238 268 236 288'
  + ' C234 308 228 324 220 334 C206 342 162 342 148 332 Z';
// a mão desenhada ocupa x 71..242 e y 111..342; isto a encaixa na metade esquerda
// da figura, deixando a direita para a legenda
const MAO_ESC = 1.3, MAO_OFX = -52.3, MAO_OFY = -126.3;
const maoX = (x) => x * MAO_ESC + MAO_OFX;
const maoY = (y) => y * MAO_ESC + MAO_OFY;

// Dedo tapered: percorre a linha central e abre a largura para os dois lados,
// terminando numa cúpula em vez de um corte reto.
function dedoD({ bx, by, px, py, wb, wp, arco }) {
  const mx = (bx + px) / 2 + arco, my = (by + py) / 2;
  const P = [[bx, by], [mx, my], [px, py]], W = [wb, (wb + wp) / 2 * 1.02, wp];
  const N = 12, cx = [], cy = [], w = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1), s = t * 2, j = Math.min(1, Math.floor(s)), u = s - j;
    cx.push(P[j][0] + (P[j + 1][0] - P[j][0]) * u);
    cy.push(P[j][1] + (P[j + 1][1] - P[j][1]) * u);
    w.push(W[j] + (W[j + 1] - W[j]) * u);
  }
  let ux = cx[N - 1] - cx[N - 2], uy = cy[N - 1] - cy[N - 2];
  const ul = Math.hypot(ux, uy) || 1; ux /= ul; uy /= ul;
  [[0.5, 0.87], [0.8, 0.6], [0.97, 0.26]].forEach(([f, gg]) => {
    cx.push(cx[N - 1] + ux * w[N - 1] * f); cy.push(cy[N - 1] + uy * w[N - 1] * f); w.push(w[N - 1] * gg);
  });
  const esq = [], dir = [];
  for (let i = 0; i < cx.length; i++) {
    const ax = cx[Math.min(i + 1, cx.length - 1)] - cx[Math.max(i - 1, 0)];
    const ay = cy[Math.min(i + 1, cy.length - 1)] - cy[Math.max(i - 1, 0)];
    const l = Math.hypot(ax, ay) || 1, nx = -ay / l, ny = ax / l;
    esq.push([cx[i] + nx * w[i], cy[i] + ny * w[i]]);
    dir.push([cx[i] - nx * w[i], cy[i] - ny * w[i]]);
  }
  const p = (a) => a.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L ');
  return `M ${p(esq)} L ${p(dir.reverse())} Z`;
}

export function diagramaMao(svg, { lado = 'direita', destacar = [] } = {}) {
  svg.innerHTML = '';
  svg.setAttribute('viewBox', '0 0 600 360');
  svg.setAttribute('class', 'diag-mao');
  const dir = lado === 'direita';
  const g = sv('g', { transform: `translate(${MAO_OFX} ${MAO_OFY}) scale(${MAO_ESC})` }, svg);
  sv('path', { d: dedoD(MAO_POLEGAR), class: 'mao-palma' }, g);
  MAO_DEDOS.forEach((d) => sv('path', { d: dedoD(d), class: 'mao-palma' }, g));
  sv('path', { d: MAO_PALMA, class: 'mao-palma' }, g);
  sv('path', { d: MAO_PALMA, class: 'mao-palma-cheia' }, g);
  // dobras das articulações e vãos entre os dedos: é o que faz ler como mão
  MAO_DEDOS.forEach((d) => {
    [[0.40, 1], [0.72, 0.86]].forEach(([f, esc]) => {
      const x = d.bx + (d.px - d.bx) * f + d.arco * Math.sin(Math.PI * f);
      const y = d.by + (d.py - d.by) * f;
      const w = (d.wb + (d.wp - d.wb) * f) * esc;
      sv('path', { d: `M${(x - w).toFixed(1)} ${y.toFixed(1)} Q${x.toFixed(1)} ${(y + 2.4).toFixed(1)} ${(x + w).toFixed(1)} ${y.toFixed(1)}`, class: 'mao-dobra' }, g);
    });
    sv('ellipse', {
      cx: (d.px + (d.bx - d.px) * 0.045).toFixed(1), cy: (d.py + (d.by - d.py) * 0.045).toFixed(1),
      rx: (d.wp * 0.7).toFixed(1), ry: (d.wp * 0.95).toFixed(1), class: 'mao-unha'
    }, g);
  });
  for (let j = 0; j < 3; j++) {
    const a = MAO_DEDOS[j], b = MAO_DEDOS[j + 1];
    const mx = (a.bx + b.bx) / 2, my = (a.by + b.by) / 2;
    sv('path', { d: `M${mx - 4} ${my + 1} Q${mx} ${my - 7} ${mx + 4} ${my + 1}`, class: 'mao-dobra' }, g);
  }
  sv('ellipse', { cx: 94.7, cy: 254.2, rx: 5.6, ry: 7.6, class: 'mao-unha' }, g);

  const dedos = dir ? DEDOS_DIR : DEDOS_ESQ;
  const polegar = dir ? DEDOS_DIR[0] : { s: 'P', nome: 'polegar', uso: 'fica atrás do braço, como apoio' };
  const marcar = (x, y, d, r) => {
    sv('circle', { cx: x, cy: y, r, class: 'mao-ponta' + (destacar.includes(d.s) ? ' aceso' : ''), 'data-dedo': d.s }, svg);
    txt(svg, x, y + 6, d.s, 'mao-letra');
  };
  // a letra fica na ponta do dedo que ela nomeia, e não solta ao lado
  MAO_DEDOS.forEach((d, j) => {
    const dd = dedos[dir ? j + 1 : j];
    if (dd) marcar(maoX(d.px), maoY(d.py - 19), dd, 14);
  });
  marcar(maoX(MAO_POLEGAR.px - 10), maoY(MAO_POLEGAR.py - 11), polegar, 14);

  // legenda ao lado: assim os nomes nunca se sobrepõem
  const lista = dir ? DEDOS_DIR : [polegar, ...DEDOS_ESQ];
  lista.forEach((d, i) => {
    const y = 74 + i * 40;
    sv('circle', { cx: 340, cy: y - 5, r: 14, class: 'mao-ponta' + (destacar.includes(d.s) ? ' aceso' : '') }, svg);
    txt(svg, 340, y + 1, d.s, 'mao-letra');
    txt(svg, 366, y - 9, d.nome, 'mao-leg-nome', 'start');
    if (d.uso) txt(svg, 366, y + 8, d.uso, 'mao-leg-uso', 'start');
  });
  txt(svg, 215, 336, dir ? 'Mão direita: toca as cordas' : 'Mão esquerda: aperta as casas', 'mao-titulo');
  return svg;
}

// ===========================================================================
// 4) POSTURA
// ===========================================================================
// tipo: 'classica' (violão na perna esquerda, com apoio) ou 'comum' (perna direita).
export function diagramaPostura(svg, { tipo = 'classica' } = {}) {
  const L = 440, A = 420;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-postura');
  const classica = tipo === 'classica';

  // banco
  sv('rect', { x: 132, y: 268, width: 180, height: 14, rx: 3, class: 'po-banco' }, svg);
  sv('line', { x1: 150, x2: 142, y1: 282, y2: 386, class: 'po-banco-pe' }, svg);
  sv('line', { x1: 296, x2: 304, y1: 282, y2: 386, class: 'po-banco-pe' }, svg);

  // pernas (desenhadas antes do tronco)
  if (classica) {
    sv('path', { d: 'M250,266 L306,296 L316,348', class: 'po-perna' }, svg);
    sv('rect', { x: 292, y: 348, width: 56, height: 12, rx: 3, class: 'po-apoio' }, svg);
    sv('line', { x1: 302, x2: 302, y1: 360, y2: 386, class: 'po-banco-pe' }, svg);
    sv('line', { x1: 338, x2: 338, y1: 360, y2: 386, class: 'po-banco-pe' }, svg);
    sv('path', { d: 'M176,266 L138,320 L134,382', class: 'po-perna' }, svg);
  } else {
    sv('path', { d: 'M250,266 L296,318 L300,382', class: 'po-perna' }, svg);
    sv('path', { d: 'M176,266 L134,318 L130,382', class: 'po-perna' }, svg);
  }

  // tronco e cabeça
  sv('path', { d: 'M196,84 L228,84 L228,100 L196,100 Z', class: 'po-pele' }, svg);
  sv('path', { d: 'M162,112 C162,100 182,94 212,94 C242,94 262,100 262,112 L258,268 L166,268 Z', class: 'po-tronco' }, svg);
  sv('circle', { cx: 212, cy: 56, r: 30, class: 'po-pele' }, svg);

  // o violão
  // O violão agora é desenhado em escala real, com o corpo 28% mais alto que o
  // desenho antigo; estas escalas o deixam do mesmo tamanho aparente de antes.
  const t = classica
    ? 'translate(338 97) rotate(-40) scale(-0.30 0.30)'
    : 'translate(366 171) rotate(-17) scale(-0.29 0.29)';
  const gv = sv('g', { transform: t, class: 'po-guitarra' }, svg);
  silhuetaViolao(gv, { comDetalhe: false });
  for (let i = 0; i < 6; i++) {
    const f = i / 5 - 0.5;
    sv('line', { x1: V.nut, x2: V.rastilho, y1: V.cy + f * 38.7, y2: V.cy + f * 53.1, class: 'v-corda', 'stroke-width': 2.4 }, gv);
  }

  // braços por cima: o direito cai sobre o tampo, o esquerdo segura o braço do violão
  const maoD = classica ? [222, 262] : [214, 286];
  const maoE = classica ? [327, 172] : [352, 212];
  sv('path', { d: `M174,118 C150,168 166,216 ${maoD[0]},${maoD[1]}`, class: 'po-braco-h' }, svg);
  sv('circle', { cx: maoD[0], cy: maoD[1], r: 11, class: 'po-pele' }, svg);
  sv('path', { d: `M254,118 C290,138 ${maoE[0]},${maoE[1] + 46} ${maoE[0]},${maoE[1]}`, class: 'po-braco-h' }, svg);
  sv('circle', { cx: maoE[0], cy: maoE[1], r: 11, class: 'po-pele' }, svg);

  txt(svg, L / 2, 406, classica
    ? 'Clássica: violão na perna esquerda, braço a 45°, apoio sob o pé'
    : 'Comum: violão na perna direita, braço quase na horizontal', 'po-legenda');
  return svg;
}

// ===========================================================================
// 5) FIGURAS RÍTMICAS (a "árvore" das durações)
// ===========================================================================
const DESENHO_FIG = {
  semibreve: { aberta: true, haste: false, ganchos: 0 },
  minima: { aberta: true, haste: true, ganchos: 0 },
  seminima: { aberta: false, haste: true, ganchos: 0 },
  colcheia: { aberta: false, haste: true, ganchos: 1 },
  semicolcheia: { aberta: false, haste: true, ganchos: 2 }
};

// Desenha uma figura isolada (nota ou pausa) num grupo <g> já posicionado.
export function figuraSolta(pai, x, y, fig, { pausa = false, escala = 1 } = {}) {
  const g = sv('g', { transform: `translate(${x} ${y}) scale(${escala})` }, pai);
  if (pausa) {
    if (fig === 'semibreve') sv('rect', { x: -11, y: -16, width: 22, height: 8, class: 'fig-cheia' }, g);
    else if (fig === 'minima') sv('rect', { x: -11, y: 8, width: 22, height: 8, class: 'fig-cheia' }, g);
    else if (fig === 'seminima') sv('path', { d: 'M-6,-26 c7,8 2,12 -3,15 c-6,5 -7,11 -1,17 c-7,-5 -11,-1 -8,5 c3,6 11,7 16,2 c-6,-8 -1,-13 4,-17 c6,-5 7,-12 1,-18 z', class: 'fig-cheia' }, g);
    else {
      const n = fig === 'semicolcheia' ? 2 : 1;
      sv('line', { x1: 8, x2: -5, y1: -18 - (n - 1) * 6, y2: 18, class: 'fig-haste' }, g);
      for (let i = 0; i < n; i++) {
        const yy = -18 - (n - 1) * 6 + i * 12;
        sv('circle', { cx: 3, cy: yy, r: 4, class: 'fig-cheia' }, g);
        sv('path', { d: `M3,${yy} q8,2 11,7`, class: 'fig-haste', fill: 'none' }, g);
      }
    }
    return g;
  }
  const d = DESENHO_FIG[fig] || DESENHO_FIG.seminima;
  sv('ellipse', { cx: 0, cy: 0, rx: 11, ry: 8, transform: 'rotate(-20)', class: d.aberta ? 'fig-vazia' : 'fig-cheia' }, g);
  if (d.haste) {
    sv('line', { x1: 10, x2: 10, y1: -2, y2: -56, class: 'fig-haste' }, g);
    for (let i = 0; i < d.ganchos; i++) {
      sv('path', { d: `M10,${-56 + i * 12} c10,5 14,13 11,24 c-1,-9 -5,-13 -11,-16 z`, class: 'fig-cheia' }, g);
    }
  }
  return g;
}

// Tabela visual: figura, nome, quantos tempos vale, e a pausa correspondente.
export function tabelaFiguras(svg, { figuras = ['semibreve', 'minima', 'seminima', 'colcheia', 'semicolcheia'], comPausa = true } = {}) {
  const col = 180, A = comPausa ? 230 : 170;
  const L = col * figuras.length;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-figuras');
  figuras.forEach((f, i) => {
    const cx = col * i + col / 2;
    figuraSolta(svg, cx, 76, f);
    txt(svg, cx, 118, NOME_FIGURA[f], 'fig-nome');
    const v = VALOR[f];
    txt(svg, cx, 140, v === 1 ? '1 tempo' : v > 1 ? v + ' tempos' : (v === 0.5 ? '½ tempo' : '¼ de tempo'), 'fig-valor');
    if (comPausa) {
      figuraSolta(svg, cx, 190, f, { pausa: true });
      txt(svg, cx, 222, 'pausa', 'fig-valor');
    }
    if (i) sv('line', { x1: col * i, x2: col * i, y1: 20, y2: A - 10, class: 'fig-sep' }, svg);
  });
  return svg;
}

// ===========================================================================
// 6) COMPASSO REPRESENTADO GRAFICAMENTE
// ===========================================================================
// Mostra os tempos de um compasso como caixas, com a acentuação (forte/fraco).
export function compassoGrafico(svg, { formula = [4, 4], acentos = null, rotulo = '' } = {}) {
  const [num] = formula;
  const cel = 120, L = cel * num + 40, A = 150;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-compasso');
  const forca = acentos || (num === 4 ? ['forte', 'fraco', 'meio', 'fraco'] : num === 3 ? ['forte', 'fraco', 'fraco'] : num === 2 ? ['forte', 'fraco'] : Array(num).fill('fraco'));
  txt(svg, 20, 28, formula[0] + '/' + formula[1], 'comp-formula', 'start');
  if (rotulo) txt(svg, L - 20, 28, rotulo, 'comp-rotulo', 'end');
  for (let i = 0; i < num; i++) {
    const x = 20 + i * cel;
    sv('rect', { x, y: 44, width: cel - 10, height: 74, rx: 10, class: 'comp-celula ' + forca[i] }, svg);
    txt(svg, x + (cel - 10) / 2, 90, String(i + 1), 'comp-num');
    txt(svg, x + (cel - 10) / 2, 136, forca[i] === 'forte' ? 'FORTE' : forca[i] === 'meio' ? 'meio forte' : 'fraco', 'comp-forca');
  }
  return svg;
}

// ===========================================================================
// 7) INTERVALO: duas notas e a distância entre elas no braço
// ===========================================================================
export function reguaSemitons(svg, { de = 0, ate = 7, nomes = [] } = {}) {
  const n = 13, cel = 56, L = cel * n + 20, A = 110;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-regua');
  for (let i = 0; i < n; i++) {
    const x = 10 + i * cel;
    const dentro = i >= de && i <= ate;
    sv('rect', { x, y: 30, width: cel - 6, height: 44, rx: 6, class: 'regua-cel' + (dentro ? ' dentro' : '') + (i === de || i === ate ? ' ponta' : '') }, svg);
    txt(svg, x + (cel - 6) / 2, 58, String(i), 'regua-num');
    if (nomes[i]) txt(svg, x + (cel - 6) / 2, 94, nomes[i], 'regua-nome');
  }
  txt(svg, 10 + ((de + ate) / 2) * cel + (cel - 6) / 2, 20, (ate - de) + ' semitons', 'regua-tit');
  return svg;
}
