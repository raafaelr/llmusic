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
  { id: 'cabeca', nome: 'Mão (cabeça)', x: 60, y: 126, lx: 54, ly: 44, desc: 'A ponta do braço, onde ficam as tarraxas.' },
  { id: 'tarraxas', nome: 'Tarraxas', x: 44, y: 207, lx: 36, ly: 316, desc: 'As engrenagens que esticam ou afrouxam cada corda. É com elas que se afina.' },
  { id: 'pestana', nome: 'Pestana', x: 121, y: 143, lx: 150, ly: 44, desc: 'A peça branca no fim do braço: é onde começa a parte que vibra de cada corda.' },
  { id: 'braco', nome: 'Braço', x: 180, y: 195, lx: 170, ly: 316, desc: 'A parte comprida onde a mão esquerda trabalha.' },
  { id: 'escala', nome: 'Escala', x: 250, y: 150, lx: 262, ly: 44, desc: 'A madeira escura colada sobre o braço, onde você aperta as cordas.' },
  { id: 'trastes', nome: 'Trastes', x: 306, y: 191, lx: 310, ly: 316, desc: 'As barrinhas de metal. O espaço entre dois trastes é uma casa.' },
  { id: 'tampo', nome: 'Tampo', x: 440, y: 92, lx: 420, ly: 44, desc: 'A tampa da frente. É ela que vibra e faz quase todo o som.' },
  { id: 'boca', nome: 'Boca', x: 506, y: 218, lx: 500, ly: 316, desc: 'O buraco redondo. O som sai por ali depois de ressoar dentro da caixa.' },
  { id: 'cordas', nome: 'Cordas', x: 600, y: 150, lx: 600, ly: 44, desc: 'Seis cordas. No violão clássico, as três mais agudas são de náilon.' },
  { id: 'cavalete', nome: 'Cavalete', x: 726, y: 202, lx: 700, ly: 316, desc: 'A peça onde as cordas são amarradas. Leva a vibração para o tampo.' },
  { id: 'corpo', nome: 'Corpo (caixa)', x: 830, y: 240, lx: 834, ly: 44, desc: 'A caixa de ressonância, que amplifica a vibração das cordas.' }
];

// Desenha o violão inteiro (corpo, braço, cabeça, cordas) em coordenadas locais
// de 0 a 900 na horizontal e 0 a 340 na vertical, com a cabeça à esquerda.
// A anatomia e a postura usam o mesmo desenho, só que em tamanhos diferentes.
export function silhuetaViolao(g, { comDetalhe = true } = {}) {
  sv('path', {
    d: 'M340,89 C356,71 420,61 460,64 C500,67 516,83 540,91 C558,97 566,96 580,96'
     + ' C596,96 604,85 628,71 C660,52 700,41 740,43 C796,46 846,75 870,115'
     + ' C882,135 886,153 886,170 C886,187 882,205 870,225 C846,265 796,294 740,297'
     + ' C700,299 660,288 628,269 C604,255 596,244 580,244 C566,244 558,243 540,249'
     + ' C516,257 500,273 460,276 C420,279 356,269 340,251 Z',
    class: 'v-corpo', 'data-id': 'corpo'
  }, g);
  sv('rect', { x: 118, y: 146, width: 228, height: 48, rx: 5, class: 'v-braco', 'data-id': 'braco' }, g);
  sv('rect', { x: 126, y: 149, width: 220, height: 42, rx: 3, class: 'v-escala', 'data-id': 'escala' }, g);
  sv('rect', { x: 116, y: 143, width: 9, height: 54, rx: 2, class: 'v-pestana', 'data-id': 'pestana' }, g);
  sv('path', { d: 'M118,144 L38,126 C22,122 16,138 16,170 C16,202 22,218 38,214 L118,196 Z', class: 'v-cabeca', 'data-id': 'cabeca' }, g);
  sv('circle', { cx: 506, cy: 170, r: 56, class: 'v-roseta', 'data-id': 'boca' }, g);
  sv('circle', { cx: 506, cy: 170, r: 48, class: 'v-boca', 'data-id': 'boca' }, g);
  sv('rect', { x: 676, y: 138, width: 100, height: 64, rx: 7, class: 'v-cavalete', 'data-id': 'cavalete' }, g);
  if (!comDetalhe) return g;
  sv('rect', { x: 686, y: 146, width: 11, height: 48, rx: 3, class: 'v-rastilho', 'data-id': 'cavalete' }, g);
  for (let i = 0; i < 3; i++) {
    sv('circle', { cx: 44 + i * 25, cy: 133, r: 6, class: 'v-tarraxa', 'data-id': 'tarraxas' }, g);
    sv('circle', { cx: 44 + i * 25, cy: 207, r: 6, class: 'v-tarraxa', 'data-id': 'tarraxas' }, g);
  }
  for (let i = 1; i <= 10; i++) {
    const x = 126 + i * 20;
    sv('line', { x1: x, x2: x, y1: 149, y2: 191, class: 'v-traste', 'data-id': 'trastes' }, g);
  }
  for (let i = 0; i < 6; i++) {
    sv('line', { x1: 120, x2: 692, y1: 152 + i * 7.2, y2: 148 + i * 9.2, class: 'v-corda', 'data-id': 'cordas', 'stroke-width': 0.9 + i * 0.4 }, g);
  }
  return g;
}

export function anatomiaViolao(svg, { destacar = [], rotulos = true } = {}) {
  const L = 900, A = 340;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-violao');
  const g = sv('g', {}, svg);
  silhuetaViolao(g);
  sv('path', { d: 'M360,104 C380,92 426,86 458,88 C470,89 478,93 486,98', class: 'v-brilho' }, g);

  if (destacar.length) {
    g.querySelectorAll('[data-id]').forEach((e) => {
      if (!destacar.includes(e.dataset.id)) e.classList.add('apagado'); else e.classList.add('aceso');
    });
  }
  if (rotulos) {
    const alvos = destacar.length ? PARTES_VIOLAO.filter((p) => destacar.includes(p.id)) : PARTES_VIOLAO;
    alvos.forEach((p) => {
      sv('line', { x1: p.x, x2: p.lx, y1: p.y, y2: p.ly + (p.ly < 120 ? 8 : -12), class: 'v-guia' }, svg);
      txt(svg, p.lx, p.ly, p.nome, 'v-rotulo');
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
export function diagramaMao(svg, { lado = 'direita', destacar = [] } = {}) {
  const L = 600, A = 340;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-mao');
  const dir = lado === 'direita';
  sv('path', { d: 'M150,320 C120,320 108,296 110,264 L118,170 C120,146 140,138 152,152 L166,170 L166,116'
    + ' C166,98 192,98 192,116 L192,166 L196,106 C196,88 222,88 222,106 L222,166 L228,114'
    + ' C228,96 254,96 254,114 L254,170 L262,132 C264,114 290,118 288,136 L280,216'
    + ' C276,270 262,320 222,320 Z', class: 'mao-palma' }, svg);
  sv('path', { d: 'M118,190 C96,178 72,190 66,212 C60,234 78,252 100,248 L124,242', class: 'mao-polegar' }, svg);

  const dedos = dir ? DEDOS_DIR : DEDOS_ESQ;
  const pontas = [{ x: 179, y: 106, k: 1 }, { x: 209, y: 96, k: 2 }, { x: 241, y: 104, k: 3 }, { x: 274, y: 126, k: 4 }];
  const polegar = dir ? DEDOS_DIR[0] : { s: 'P', nome: 'polegar', uso: 'fica atrás do braço, como apoio' };
  const marcar = (x, y, d, r) => {
    sv('circle', { cx: x, cy: y, r, class: 'mao-ponta' + (destacar.includes(d.s) ? ' aceso' : ''), 'data-dedo': d.s }, svg);
    txt(svg, x, y + 6, d.s, 'mao-letra');
  };
  pontas.forEach((pt) => { const d = dedos[dir ? pt.k : pt.k - 1]; if (d) marcar(pt.x, pt.y, d, 17); });
  marcar(78, 220, polegar, 18);

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
  const t = classica
    ? 'translate(355 67) rotate(-40) scale(-0.372 0.372)'
    : 'translate(392 150) rotate(-17) scale(-0.36 0.36)';
  const gv = sv('g', { transform: t, class: 'po-guitarra' }, svg);
  silhuetaViolao(gv, { comDetalhe: false });
  for (let i = 0; i < 6; i++) sv('line', { x1: 120, x2: 692, y1: 152 + i * 7.2, y2: 148 + i * 9.2, class: 'v-corda', 'stroke-width': 2.4 }, gv);

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
