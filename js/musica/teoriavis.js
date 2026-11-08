// Desenhos de teoria musical: ciclo das quintas e teclado de piano.
// O teclado aparece muito nas aulas porque é a forma mais clara de enxergar
// onde estão os tons e os semitons (Mi–Fá e Si–Dó são vizinhos, sem tecla preta no meio).
import { sv } from './notacao.js';

const NOMES = ['Dó', 'Dó♯', 'Ré', 'Ré♯', 'Mi', 'Fá', 'Fá♯', 'Sol', 'Sol♯', 'Lá', 'Lá♯', 'Si'];
const CIFRA = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const BRANCAS = [0, 2, 4, 5, 7, 9, 11];
const PRETA_DEPOIS = [0, 2, 5, 7, 9];       // brancas que têm uma preta logo à direita

function txt(pai, x, y, t, classe, anc = 'middle') {
  const e = sv('text', { x, y, class: classe, 'text-anchor': anc }, pai);
  e.textContent = t;
  return e;
}

// ---------------------------------------------------------------------------
// Teclado de piano
// ---------------------------------------------------------------------------
// destacar: [{ pc, rotulo, classe }]  — pc é a classe de nota (0 = Dó ... 11 = Si)
// oitavas: quantas oitavas desenhar (padrão 1 e meia, que dá para mostrar a escala toda)
export function teclado(svg, { oitavas = 1, destacar = [], nomes = true, deDo = 0, aoClicar = null } = {}) {
  const LB = 46, AB = 170, LP = 28, AP = 104;
  const nBrancas = 7 * oitavas + 1;
  const L = LB * nBrancas + 8, A = AB + (nomes ? 34 : 10);
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  svg.setAttribute('class', 'diag-teclado');
  const marca = new Map(destacar.map((d) => [((d.pc % 12) + 12) % 12, d]));

  const xDaBranca = (i) => 4 + i * LB;
  // brancas
  for (let i = 0; i < nBrancas; i++) {
    const pc = BRANCAS[(i + deDo) % 7];
    const m = marca.get(pc);
    const r = sv('rect', { x: xDaBranca(i), y: 6, width: LB - 2, height: AB, rx: 5, class: 'tec-branca' + (m ? ' acesa ' + (m.classe || '') : '') }, svg);
    if (aoClicar) { r.style.cursor = 'pointer'; r.onclick = () => aoClicar(pc); }
    if (m && m.rotulo) txt(svg, xDaBranca(i) + LB / 2 - 1, AB - 14, m.rotulo, 'tec-rotulo');
    if (nomes) txt(svg, xDaBranca(i) + LB / 2 - 1, A - 10, NOMES[pc], 'tec-nome');
  }
  // pretas
  for (let i = 0; i < nBrancas - 1; i++) {
    const base = BRANCAS[(i + deDo) % 7];
    if (!PRETA_DEPOIS.includes(base)) continue;
    const pc = (base + 1) % 12;
    const m = marca.get(pc);
    const x = xDaBranca(i) + LB - LP / 2 - 1;
    const r = sv('rect', { x, y: 6, width: LP, height: AP, rx: 4, class: 'tec-preta' + (m ? ' acesa ' + (m.classe || '') : '') }, svg);
    if (aoClicar) { r.style.cursor = 'pointer'; r.onclick = () => aoClicar(pc); }
    if (m && m.rotulo) txt(svg, x + LP / 2, AP - 12, m.rotulo, 'tec-rotulo-p');
  }
  return svg;
}

// Marca no teclado onde estão os semitons naturais (Mi–Fá e Si–Dó).
export function tecladoSemitons(svg) {
  teclado(svg, { oitavas: 1, nomes: true });
  const LB = 46;
  const x = (i) => 4 + i * LB + LB / 2 - 1;
  // Mi é a 3ª branca (índice 2) e Fá a 4ª (índice 3); Si é a 7ª (6) e Dó a 8ª (7)
  [[2, 3], [6, 7]].forEach(([a, b]) => {
    sv('path', { d: `M${x(a)},196 Q${(x(a) + x(b)) / 2},214 ${x(b)},196`, class: 'tec-laco' }, svg);
    txt(svg, (x(a) + x(b)) / 2, 230, 'semitom', 'tec-aviso');
  });
  const vb = svg.getAttribute('viewBox').split(' ');
  svg.setAttribute('viewBox', `${vb[0]} ${vb[1]} ${vb[2]} 244`);
  return svg;
}

// ---------------------------------------------------------------------------
// Ciclo das quintas
// ---------------------------------------------------------------------------
// Cada passo no sentido horário sobe uma quinta justa e acrescenta um sustenido.
export const CICLO = [
  { cifra: 'C', nome: 'Dó', arm: 0, rel: 'Am' }, { cifra: 'G', nome: 'Sol', arm: 1, rel: 'Em' },
  { cifra: 'D', nome: 'Ré', arm: 2, rel: 'Bm' }, { cifra: 'A', nome: 'Lá', arm: 3, rel: 'F♯m' },
  { cifra: 'E', nome: 'Mi', arm: 4, rel: 'C♯m' }, { cifra: 'B', nome: 'Si', arm: 5, rel: 'G♯m' },
  { cifra: 'F♯', nome: 'Fá♯', arm: 6, rel: 'D♯m' }, { cifra: 'D♭', nome: 'Ré♭', arm: -5, rel: 'B♭m' },
  { cifra: 'A♭', nome: 'Lá♭', arm: -4, rel: 'Fm' }, { cifra: 'E♭', nome: 'Mi♭', arm: -3, rel: 'Cm' },
  { cifra: 'B♭', nome: 'Si♭', arm: -2, rel: 'Gm' }, { cifra: 'F', nome: 'Fá', arm: -1, rel: 'Dm' }
];

export function cicloQuintas(svg, { destacar = [], aoClicar = null, menores = true } = {}) {
  const L = 420, C = 210, R = 160, r2 = 112;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${L}`);
  svg.setAttribute('class', 'diag-ciclo');
  sv('circle', { cx: C, cy: C, r: R + 28, class: 'ciclo-fundo' }, svg);
  sv('circle', { cx: C, cy: C, r: r2 - 34, class: 'ciclo-miolo' }, svg);
  txt(svg, C, C - 6, 'Ciclo das', 'ciclo-tit');
  txt(svg, C, C + 16, 'quintas', 'ciclo-tit');

  CICLO.forEach((t, i) => {
    const ang = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const x = C + Math.cos(ang) * R, y = C + Math.sin(ang) * R;
    const aceso = destacar.includes(t.cifra);
    const g = sv('g', { class: 'ciclo-item' + (aceso ? ' aceso' : ''), 'data-cifra': t.cifra }, svg);
    sv('circle', { cx: x, cy: y, r: 30, class: 'ciclo-bolha' }, g);
    txt(g, x, y + 2, t.cifra, 'ciclo-cifra');
    txt(g, x, y + 18, t.arm === 0 ? '—' : (t.arm > 0 ? t.arm + '♯' : -t.arm + '♭'), 'ciclo-arm');
    if (aoClicar) { g.style.cursor = 'pointer'; g.onclick = () => aoClicar(t); }
    if (menores) {
      const xm = C + Math.cos(ang) * r2, ym = C + Math.sin(ang) * r2;
      txt(svg, xm, ym + 4, t.rel, 'ciclo-menor');
    }
  });
  return svg;
}
