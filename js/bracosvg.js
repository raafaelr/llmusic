// Desenha um braço de violão em SVG que outras telas reaproveitam (CAGED e Teoria).
// Corda 1 fica em cima. As bolinhas são desenhadas com ponto(corda, casa, classe, texto).
const NS = 'http://www.w3.org/2000/svg';
function sv(tag, attrs, pai) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (pai) pai.append(e);
  return e;
}

export function criarBraco(svg, { casas = 12, aoToque = null } = {}) {
  // O viewBox acompanha o número de casas. Antes era sempre 1000 de largura,
  // então um braço de 7 casas era desenhado espalhado e depois espremido para
  // caber na tela do celular — e os rótulos dentro das bolinhas chegavam a
  // 7 pixels, ilegíveis. Com a largura proporcional, a escala é bem maior.
  const PASSO = 82, X0 = 60, DY = 35, Y0 = 28, A = 244;
  const passo = PASSO;
  const L = X0 + casas * passo + 10;
  const xCasa = (c) => (c === 0 ? X0 - 28 : X0 + (c - 0.5) * passo);
  const yCorda = (corda) => Y0 + (corda - 1) * DY;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
  // Largura mínima proporcional ao desenho: abaixo de ~62% da escala natural
  // os rótulos dentro das bolinhas ficam pequenos demais para ler. Em tela
  // estreita o pai rola na horizontal em vez de espremer.
  svg.style.minWidth = Math.round(L * 0.62) + 'px';
  sv('rect', { x: X0, y: Y0 - 14, width: L - X0 - 10, height: DY * 5 + 28, rx: 6, class: 'madeira' }, svg);
  for (let c = 1; c <= casas; c++) {
    const x = X0 + c * passo;
    sv('line', { x1: x, x2: x, y1: Y0 - 14, y2: Y0 + DY * 5 + 14, class: 'traste' }, svg);
    const t = sv('text', { x: X0 + (c - 0.5) * passo, y: A - 8, class: 'num-casa', 'text-anchor': 'middle' }, svg);
    t.textContent = c;
  }
  sv('line', { x1: X0, x2: X0, y1: Y0 - 14, y2: Y0 + DY * 5 + 14, class: 'pestana' }, svg);
  [3, 5, 7, 9, 15, 17].filter((c) => c <= casas).forEach((c) => sv('circle', { cx: X0 + (c - 0.5) * passo, cy: Y0 + DY * 2.5, r: 6, class: 'marca-casa' }, svg));
  if (casas >= 12) {
    sv('circle', { cx: X0 + 11.5 * passo, cy: Y0 + DY * 1.5, r: 6, class: 'marca-casa' }, svg);
    sv('circle', { cx: X0 + 11.5 * passo, cy: Y0 + DY * 3.5, r: 6, class: 'marca-casa' }, svg);
  }
  for (let corda = 1; corda <= 6; corda++) {
    sv('line', { x1: X0, x2: L - 10, y1: yCorda(corda), y2: yCorda(corda), class: 'corda-svg', 'stroke-width': 1 + (corda - 1) * 0.45 }, svg);
    const n = sv('text', { x: 3, y: yCorda(corda) + 5, class: 'num-corda' }, svg);
    n.textContent = corda;
  }
  const pontos = new Map();
  const camada = sv('g', {}, svg);
  function ponto(corda, casa, classe, texto = '') {
    const chave = corda + ',' + casa;
    let g = pontos.get(chave);
    if (!g) {
      g = sv('g', { class: 'bolinha' }, camada);
      g.__c = sv('circle', { cx: xCasa(casa), cy: yCorda(corda), r: 15 }, g);
      g.__t = sv('text', { x: xCasa(casa), y: yCorda(corda) + 5, class: 'ponto-txt', 'text-anchor': 'middle' }, g);
      pontos.set(chave, g);
    }
    g.__c.setAttribute('class', 'ponto ' + classe);
    g.__t.textContent = texto;
    return g;
  }
  function marcaMuda(corda) {
    const t = sv('text', { x: X0 - 28, y: yCorda(corda) + 6, 'text-anchor': 'middle', class: 'muda' }, camada);
    t.textContent = '×';
  }
  // Pestana: barra arredondada na casa, de uma corda a outra (cordaDe e cordaAte entre 1 e 6).
  function barra(casa, cordaDe, cordaAte) {
    const a = Math.min(cordaDe, cordaAte), b = Math.max(cordaDe, cordaAte);
    sv('rect', { x: xCasa(casa) - 19, y: yCorda(a) - 19, width: 38, height: (b - a) * DY + 38, rx: 19, class: 'barra-pestana' }, camada);
  }
  function limpar() { camada.innerHTML = ''; pontos.clear(); }
  if (aoToque) {
    for (let corda = 1; corda <= 6; corda++) for (let c = 0; c <= casas; c++) {
      const r = sv('rect', c === 0 ? { x: 2, y: yCorda(corda) - DY / 2, width: X0 - 4, height: DY, class: 'toque' } : { x: xCasa(c) - passo / 2, y: yCorda(corda) - DY / 2, width: passo, height: DY, class: 'toque' }, svg);
      r.onclick = () => aoToque(corda, c);
    }
  }
  return { ponto, marcaMuda, barra, limpar };
}
