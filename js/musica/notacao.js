// Desenha partitura de verdade em SVG: pentagrama, clave, armadura, fórmula de compasso,
// figuras (semibreve a semicolcheia), pausas, pontos de aumento, ligaduras, acidentes,
// linhas suplementares, vigas das colcheias, dedilhado e letras de acorde.
//
// Este arquivo é a base visual de todo o curso: sempre que uma aula precisa mostrar
// música escrita, ela chama desenharPauta().
//
// Convenção de alturas: usamos o número MIDI da nota ESCRITA.
// A partitura de violão soa uma oitava abaixo do que está escrito, por isso existe
// a opção { oitavaAbaixo: true }, que desenha o "8" embaixo da clave.
//
// Posição na pauta: 0 = primeira linha de baixo (Mi4), 1 = primeiro espaço (Fá4),
// 2 = segunda linha (Sol4) ... 8 = linha de cima (Fá5). Abaixo de 0 e acima de 8
// aparecem linhas suplementares.

const NS = 'http://www.w3.org/2000/svg';
const PC_NAT = [0, 2, 4, 5, 7, 9, 11];
export const NOMES_PT = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
export const CIFRAS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Quanto vale cada figura, em tempos (semínima = 1).
export const VALOR = { semibreve: 4, minima: 2, seminima: 1, colcheia: 0.5, semicolcheia: 0.25, fusa: 0.125 };
export const NOME_FIGURA = {
  semibreve: 'semibreve', minima: 'mínima', seminima: 'semínima',
  colcheia: 'colcheia', semicolcheia: 'semicolcheia', fusa: 'fusa'
};

export function sv(tag, attrs, pai) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
  if (pai) pai.append(e);
  return e;
}

// ---------- alturas ----------
const diatonico = (midi) => Math.floor(midi / 12) * 7 + PC_NAT.indexOf(((midi % 12) + 12) % 12);
export function posicaoNaPauta(midiNatural) { return diatonico(midiNatural) - diatonico(64); }

// Separa uma nota qualquer em { base (nota natural desenhada), acc (-1, 0 ou +1) }.
// Preferimos sustenido, a não ser que a armadura seja de bemóis.
export function escrever(midi, armadura = 0) {
  const pc = ((midi % 12) + 12) % 12;
  if (PC_NAT.includes(pc)) return { base: midi, acc: 0 };
  return armadura < 0 ? { base: midi + 1, acc: -1 } : { base: midi - 1, acc: 1 };
}
export function nomeNatural(midi) { return NOMES_PT[PC_NAT.indexOf(((midi % 12) + 12) % 12)]; }
export function nomeDaNota(midi, armadura = 0) {
  const { base, acc } = escrever(midi, armadura);
  return nomeNatural(base) + (acc > 0 ? '♯' : acc < 0 ? '♭' : '');
}
export function oitavaDe(midi) { return Math.floor(midi / 12) - 1; }

// ---------- medidas do desenho ----------
const H = 12;                           // meia distância entre linhas
const yDe = (pos) => 200 - pos * H;     // y da posição na pauta
const Y_TOPO = yDe(8), Y_BASE = yDe(0);

// Clave de sol desenhada à mão, num traço só (fica legível em qualquer tamanho de tela).
// O desenho é feito num sistema próprio onde o centro da espiral está em (30, 100);
// esse ponto é levado exatamente para a 2ª linha da pauta (Sol4), como manda a notação.
// Repare que a haste da clave passa por dentro da espiral: é assim na clave de verdade.
const CLAVE_SOL = 'M30,100 C19,99 9,107 10,118 C11,131 23,140 35,136 C49,131 55,116 51,100'
  + ' C47,82 37,70 31,56 C22,38 12,22 16,4 C20,-14 36,-20 44,-6 C51,6 48,30 40,44'
  + ' C34,56 31,76 31,100 C31,124 34,142 34,152 C34,166 28,174 18,173 C8,172 4,163 8,155';

function desenharClave(g, x) {
  const escala = 0.85;
  const gx = sv('g', { transform: `translate(${x - 8} ${yDe(2) - 100 * escala}) scale(${escala})`, class: 'clave-path' }, g);
  sv('path', { d: CLAVE_SOL, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, gx);
  sv('circle', { cx: 30, cy: 100, r: 5 }, gx);
}

// ---------- armadura de clave ----------
// Ordem dos sustenidos: Fá Dó Sol Ré Lá Mi Si. Dos bemóis, o contrário.
const POS_SUST = [8, 5, 9, 6, 3, 7, 4];     // posições na pauta (clave de sol)
const POS_BEM = [4, 7, 3, 6, 2, 5, 1];
export const ARMADURAS = {
  0: 'Dó maior / Lá menor', 1: 'Sol maior / Mi menor', 2: 'Ré maior / Si menor', 3: 'Lá maior / Fá♯ menor',
  4: 'Mi maior / Dó♯ menor', 5: 'Si maior / Sol♯ menor', 6: 'Fá♯ maior / Ré♯ menor',
  '-1': 'Fá maior / Ré menor', '-2': 'Si♭ maior / Sol menor', '-3': 'Mi♭ maior / Dó menor',
  '-4': 'Lá♭ maior / Fá menor', '-5': 'Ré♭ maior / Si♭ menor', '-6': 'Sol♭ maior / Mi♭ menor'
};

function desenharArmadura(g, x, armadura) {
  const n = Math.abs(armadura);
  const poss = armadura > 0 ? POS_SUST : POS_BEM;
  for (let i = 0; i < n; i++) {
    const t = sv('text', { x: x + i * 15, y: yDe(poss[i]) + 7, class: 'acidente arm', 'text-anchor': 'middle' }, g);
    t.textContent = armadura > 0 ? '♯' : '♭';
  }
  return n * 15;
}

function desenharFormula(g, x, [num, den]) {
  const a = sv('text', { x, y: yDe(6) + 15, class: 'formula', 'text-anchor': 'middle' }, g);
  a.textContent = num;
  const b = sv('text', { x, y: yDe(2) + 15, class: 'formula', 'text-anchor': 'middle' }, g);
  b.textContent = den;
}

// ---------- pausas ----------
// Cada pausa tem um desenho próprio. Usamos formas simples e reconhecíveis.
function desenharPausa(g, x, fig) {
  const y3 = yDe(4);                 // linha do meio
  if (fig === 'semibreve') { sv('rect', { x: x - 9, y: yDe(6) - 1, width: 18, height: 7, class: 'pausa-fig' }, g); return; }
  if (fig === 'minima') { sv('rect', { x: x - 9, y: yDe(4) - 6, width: 18, height: 7, class: 'pausa-fig' }, g); return; }
  if (fig === 'seminima') {
    sv('path', {
      d: `M${x - 5},${y3 - 24} c6,7 2,10 -2,13 c-5,4 -6,9 -1,14 c-6,-4 -9,-1 -7,4 c2,5 9,6 13,2 c-5,-7 -1,-11 3,-14 c5,-4 6,-10 1,-15 z`,
      class: 'pausa-fig'
    }, g);
    return;
  }
  // colcheia e semicolcheia: ganchos com a bolinha
  const n = fig === 'semicolcheia' ? 2 : 1;
  const topo = y3 - 14 - (n - 1) * 5;
  sv('line', { x1: x + 6, x2: x - 4, y1: topo, y2: y3 + 14, class: 'pausa-haste' }, g);
  for (let i = 0; i < n; i++) {
    const yy = topo + i * 11;
    sv('circle', { cx: x + 2, cy: yy, r: 3.5, class: 'pausa-fig' }, g);
    sv('path', { d: `M${x + 2},${yy} q7,1 10,6`, class: 'pausa-haste', fill: 'none' }, g);
  }
}

// ---------- uma nota ----------
// A cabeça de nota tem exatamente a altura de um espaço da pauta (2H) e fica
// inclinada 20°: é assim nas editoras, e é o que faz a nota "assentar" na linha
// em vez de parecer uma bolinha solta. Antes ela tinha 62% da altura do espaço.
function cabeca(g, x, y, fig, classe) {
  const aberta = fig === 'semibreve' || fig === 'minima';
  sv('ellipse', {
    cx: x, cy: y, rx: fig === 'semibreve' ? 18.5 : 15.5, ry: 11.5,
    class: 'cabeca' + (aberta ? ' cabeca-aberta' : '') + (classe ? ' ' + classe : ''),
    transform: `rotate(-20 ${x} ${y})`
  }, g);
}

function ganchos(g, x, yFim, paraCima, fig) {
  const n = fig === 'semicolcheia' ? 2 : fig === 'fusa' ? 3 : 1;
  for (let i = 0; i < n; i++) {
    const y = yFim + (paraCima ? 1 : -1) * i * 17;
    const d = paraCima
      ? `M${x},${y} c16,7 21,20 18,36 c-2,-13 -7,-20 -18,-23 z`
      : `M${x},${y} c16,-7 21,-20 18,-36 c-2,13 -7,20 -18,23 z`;
    sv('path', { d, class: 'gancho' }, g);
  }
}

// ---------- desenho principal ----------
// opcoes:
//   compassos: [{ notas: [...], acorde: 'G', numero: 1, repetir: 'inicio'|'fim', casa: 1|2 }]
//     nota  = { midi, fig, ponto, acc, dedo, texto, classe, ligar }
//     pausa = { pausa: 'seminima', ponto }
//     acorde (várias notas juntas) = { midis: [60,64,67], fig, ... }
//   clave, armadura, formula, nomes, largura, rotulo, oitavaAbaixo, aoClicar(i)
export function desenharPauta(svg, opcoes = {}) {
  const {
    compassos = [], armadura = 0, formula = [4, 4], nomes = false, dedos = false,
    largura = 1000, oitavaAbaixo = false, numerar = false, aoClicar = null,
    semClave = false, quebrar = 0
  } = opcoes;

  svg.innerHTML = '';
  svg.setAttribute('class', (svg.getAttribute('class') || 'pauta-svg').replace(/\s*pauta-svg\s*/, ' ') + ' pauta-svg');

  // quantas linhas (sistemas) o desenho terá
  const porLinha = quebrar || compassos.length;
  const linhas = [];
  for (let i = 0; i < compassos.length; i += porLinha) linhas.push(compassos.slice(i, i + porLinha));
  if (!linhas.length) linhas.push([]);

  // altura de cada sistema: espaço para linhas suplementares, nomes e dedilhado
  const todas = compassos.flatMap((c) => c.notas || []);
  const poss = todas.flatMap((n) => (n.pausa ? [] : (n.midis || [n.midi]).map((m) => posicaoNaPauta(escrever(m, armadura).base))));
  const maxP = Math.max(8, ...poss, -Infinity), minP = Math.min(0, ...poss, Infinity);
  const extraCima = Math.max(0, (maxP - 8) * H) + 54;
  const extraBaixo = Math.max(0, (0 - minP) * H) + (nomes || dedos ? 68 : 54);
  const yNomes = Y_BASE + Math.max(0, (0 - minP) * H) + 26;   // sempre abaixo da nota mais grave
  const altLinha = (Y_BASE + extraBaixo) - (Y_TOPO - extraCima);

  svg.setAttribute('viewBox', `0 0 ${largura} ${altLinha * linhas.length}`);
  const raiz = sv('g', { transform: `translate(0 ${extraCima - Y_TOPO})` }, svg);

  let numero = 1;
  linhas.forEach((grupo, li) => {
    const g = sv('g', { transform: `translate(0 ${li * altLinha})` }, raiz);
    let x = 14;
    if (!semClave) { desenharClave(g, x); x += 56; }
    if (oitavaAbaixo && !semClave) {
      const o = sv('text', { x: x - 30, y: Y_BASE + 34, class: 'clave-oit', 'text-anchor': 'middle' }, g);
      o.textContent = '8';
    }
    if (armadura) x += desenharArmadura(g, x + 4, armadura) + 10;
    if (formula && li === 0) { desenharFormula(g, x + 12, formula); x += 34; }
    const x0 = x + 10;
    const xFim = largura - 14;

    // as cinco linhas
    for (let l = 0; l < 5; l++) sv('line', { x1: 14, x2: xFim, y1: yDe(l * 2), y2: yDe(l * 2), class: 'linha-pauta' }, g);
    sv('line', { x1: 14, x2: 14, y1: Y_TOPO, y2: Y_BASE, class: 'barra-compasso' }, g);

    // Lista de todas as notas desenhadas neste sistema, na ordem. É o que permite
    // desenhar ligaduras que atravessam a barra de compasso.
    const desenhadas = [];

    // divide a largura entre os compassos, proporcional ao número de eventos
    const pesos = grupo.map((c) => Math.max(1, (c.notas || []).length));
    const total = pesos.reduce((a, b) => a + b, 0) || 1;
    let cx = x0;
    grupo.forEach((comp, ci) => {
      const larg = (xFim - x0) * (pesos[ci] / total);
      desenharCompasso(g, comp, cx, larg, { armadura, nomes, dedos, numerar, numero, aoClicar, yNomes, desenhadas });
      numero++;
      cx += larg;
      const ultimo = li === linhas.length - 1 && ci === grupo.length - 1;
      sv('line', {
        x1: cx, x2: cx, y1: Y_TOPO, y2: Y_BASE,
        class: 'barra-compasso' + (ultimo ? ' barra-final' : '')
      }, g);
      if (ultimo) sv('line', { x1: cx - 5, x2: cx - 5, y1: Y_TOPO, y2: Y_BASE, class: 'barra-compasso' }, g);
      if (comp.repetir === 'fim' || comp.repetir === 'ambos') pontosRepeticao(g, cx - 12);
      if (comp.repetir === 'inicio' || comp.repetir === 'ambos') pontosRepeticao(g, cx - larg + 12);
      if (comp.casa) casaDeFinal(g, cx - larg, cx, comp.casa);
    });
    desenharLigaduras(g, desenhadas);
  });
  return svg;
}

// Ligadura: o arco que liga duas notas.
//  - de prolongamento (mesma altura): soma as durações, toca-se só a primeira.
//  - de expressão (alturas diferentes): no violão, indica ligado de mão esquerda.
function desenharLigaduras(g, lista) {
  lista.forEach((n, i) => {
    if (!n.lig) return;
    const prox = lista[i + 1];
    if (!prox) return;
    const cima = !n.cima;                       // o arco vai do lado oposto à haste
    const y1 = cima ? Math.min(n.yTopo, prox.yTopo) - 12 : Math.max(n.yBase, prox.yBase) + 12;
    const meioX = (n.x + prox.x) / 2;
    const curva = cima ? y1 - 10 : y1 + 10;
    sv('path', {
      d: `M${n.x + 7},${cima ? n.yTopo - 8 : n.yBase + 8} Q${meioX},${curva} ${prox.x - 7},${cima ? prox.yTopo - 8 : prox.yBase + 8}`,
      class: 'ligadura', fill: 'none'
    }, g);
  });
}

// Casa 1 e casa 2 do final (os colchetes "1." e "2." sobre a pauta).
function casaDeFinal(g, x0, x1, numero) {
  const y = Y_TOPO - 34;
  sv('polyline', { points: `${x0 + 4},${y + 12} ${x0 + 4},${y} ${x1 - 4},${y} ${x1 - 4},${y + 12}`, class: 'casa-final', fill: 'none' }, g);
  const t = sv('text', { x: x0 + 10, y: y + 11, class: 'casa-final-num' }, g);
  t.textContent = numero + '.';
}

function pontosRepeticao(g, x) {
  sv('circle', { cx: x, cy: yDe(3), r: 2.6, class: 'ponto-rep' }, g);
  sv('circle', { cx: x, cy: yDe(5), r: 2.6, class: 'ponto-rep' }, g);
}

function desenharCompasso(pai, comp, x0, largura, cfg) {
  const notas = comp.notas || [];
  // Cada compasso ganha o seu próprio grupo <g>: assim as vigas nunca pegam
  // notas de outro compasso por engano.
  const g = sv('g', { class: 'compasso-g' }, pai);
  if (cfg.numerar) {
    const t = sv('text', { x: x0 + 2, y: Y_TOPO - 14, class: 'num-compasso-pauta' }, g);
    t.textContent = cfg.numero;
  }
  if (comp.acorde) {
    const t = sv('text', { x: x0 + 4, y: Y_TOPO - 26, class: 'cifra-pauta' }, g);
    t.textContent = comp.acorde;
  }
  if (comp.texto) {
    const t = sv('text', { x: x0 + 4, y: cfg.yNomes + 24, class: 'letra-pauta' }, g);
    t.textContent = comp.texto;
  }

  // ---- 1ª passada: onde cada evento fica e que notas ele tem ----
  const dur = notas.map((n) => (VALOR[n.fig || n.pausa || 'seminima'] || 1) * (n.ponto ? 1.5 : 1));
  const soma = dur.reduce((a, b) => a + b, 0) || 1;
  const margem = largura * 0.1;
  const util = largura - margem * 1.45;
  let acum = 0;
  const evs = notas.map((n, i) => {
    const x = x0 + margem + (acum / soma) * util;
    acum += dur[i];
    if (n.pausa) return { n, i, x, pausa: true };
    const midis = (n.midis || [n.midi]).filter((m) => m !== undefined && m !== null);
    const info = midis.map((m) => {
      const e = escrever(m, cfg.armadura);
      return { midi: m, pos: posicaoNaPauta(e.base), acc: n.acc !== undefined ? n.acc : e.acc };
    }).sort((a, b) => a.pos - b.pos);
    return { n, i, x, info, fig: n.fig || 'seminima', midis };
  });

  // ---- 2ª passada: grupos de viga e direção das hastes ----
  const grupos = agruparVigas(notas, dur);
  const doGrupo = new Map();
  grupos.forEach((gr) => gr.forEach((i) => doGrupo.set(i, gr)));
  const direcao = new Map();
  evs.forEach((e) => {
    if (e.pausa) return;
    const gr = doGrupo.get(e.i);
    // notas de uma mesma viga apontam todas para o mesmo lado (regra da notação)
    const refs = gr ? gr.map((i) => evs[i]).filter((x) => !x.pausa) : [e];
    const media = refs.reduce((a, x) => a + x.info.reduce((b, it) => b + it.pos, 0) / x.info.length, 0) / refs.length;
    direcao.set(e.i, media < 4);
  });

  // ---- 3ª passada: desenhar ----
  evs.forEach((e) => {
    const { n, i, x } = e;
    if (e.pausa) {
      desenharPausa(g, x, n.pausa);
      if (n.ponto) sv('circle', { cx: x + 20, cy: yDe(5), r: 3.6, class: 'ponto-aum' }, g);
      if (n.texto) rotulo(g, x, n.texto, cfg.yNomes);
      return;
    }
    const { info, fig, midis } = e;
    const gN = sv('g', { class: 'nota-g' + (n.classe ? ' ' + n.classe : ''), 'data-i': i }, g);
    const paraCima = direcao.get(i);

    info.forEach((it, k) => {
      const y = yDe(it.pos);
      linhasSupl(it.pos).forEach((p) => sv('line', { x1: x - 23, x2: x + 23, y1: yDe(p), y2: yDe(p), class: 'linha-pauta linha-supl' }, gN));
      if (it.acc || n.bequadro) {
        const t = sv('text', { x: x - 32 - k * 18, y: y + 16, class: 'acidente', 'text-anchor': 'middle' }, gN);
        t.textContent = n.bequadro ? '♮' : it.acc > 0 ? '♯' : '♭';
      }
      cabeca(gN, x, y, fig, n.cabeca);
      if (n.ponto) sv('circle', { cx: x + 24, cy: y - (it.pos % 2 === 0 ? 12 : 0), r: 3.6, class: 'ponto-aum' }, gN);
    });

    if (fig !== 'semibreve') {
      const yAlto = yDe(info[info.length - 1].pos), yBaixo = yDe(info[0].pos);
      const xh = paraCima ? x + 14.5 : x - 14.5;
      const comprimento = 7 * H;
      const yFim = paraCima ? yAlto - comprimento : yBaixo + comprimento;
      sv('line', { x1: xh, x2: xh, y1: paraCima ? yBaixo : yAlto, y2: yFim, class: 'haste' }, gN);
      gN.dataset.hx = xh; gN.dataset.hy = yFim; gN.dataset.cima = paraCima ? 1 : 0;
      gN.dataset.ref = paraCima ? yAlto : yBaixo;
      const gr = doGrupo.get(i);
      if (VALOR[fig] < 1 && (!gr || gr.length === 1)) ganchos(gN, xh, yFim, paraCima, fig);
    }

    if (cfg.desenhadas) cfg.desenhadas.push({
      x, lig: n.lig, cima: direcao.get(i),
      yTopo: yDe(info[info.length - 1].pos), yBase: yDe(info[0].pos)
    });
    if (cfg.nomes) {
      // Se a aula forçou um acidente (ex.: escrever Si♭ em vez de Lá♯), o nome segue a escrita.
      const ult = info[info.length - 1];
      const nome = n.acc !== undefined
        ? nomeNatural(ult.pos >= 0 ? midis[midis.length - 1] - n.acc : midis[midis.length - 1] - n.acc) + (n.acc > 0 ? '♯' : n.acc < 0 ? '♭' : '')
        : nomeDaNota(midis[midis.length - 1], cfg.armadura);
      rotulo(g, x, nome, cfg.yNomes);
    }
    if (cfg.dedos && n.dedo) {
      const t = sv('text', { x, y: Y_TOPO - 8, class: 'dedo-pauta', 'text-anchor': 'middle' }, g);
      t.textContent = n.dedo;
    }
    if (n.texto) rotulo(g, x, n.texto, cfg.yNomes + (cfg.nomes ? 20 : 0));
    if (cfg.aoClicar) {
      const r = sv('rect', { x: x - 22, y: Y_TOPO - 24, width: 32, height: (Y_BASE - Y_TOPO) + 48, class: 'toque' }, g);
      r.onclick = () => cfg.aoClicar(i, n);
    }
  });

  // ---- vigas: uma barra ligando as hastes de cada grupo ----
  // A viga é inclinada (acompanha a subida ou descida das notas), como na partitura impressa,
  // mas com a inclinação limitada para não ficar exagerada.
  grupos.filter((gr) => gr.length > 1).forEach((gr) => {
    const partes = gr.map((i) => g.querySelector('.nota-g[data-i="' + i + '"]')).filter(Boolean)
      .map((el) => ({ el, hx: +el.dataset.hx, hy: +el.dataset.hy, ref: +el.dataset.ref, cima: el.dataset.cima === '1' }));
    if (partes.length < 2) return;
    const cima = partes[0].cima;
    const xa = partes[0].hx, xb = partes[partes.length - 1].hx;
    let ya = partes[0].hy, yb = partes[partes.length - 1].hy;
    const maxIncl = 0.3 * (xb - xa);
    if (Math.abs(yb - ya) > maxIncl) yb = ya + Math.sign(yb - ya) * maxIncl;
    const naLinha = (x) => ya + (yb - ya) * ((x - xa) / ((xb - xa) || 1));
    // empurra a viga para fora até a haste mais curta ter pelo menos 2,5 espaços
    let ajuste = 0;
    partes.forEach((p) => {
      const minimo = p.ref + (cima ? -5 * H : 5 * H);
      const d = minimo - naLinha(p.hx);
      ajuste = cima ? Math.min(ajuste, d) : Math.max(ajuste, d);
    });
    ya += ajuste; yb += ajuste;
    partes.forEach((p) => { const h = p.el.querySelector('.haste'); if (h) h.setAttribute('y2', naLinha(p.hx)); });
    sv('line', { x1: xa, x2: xb, y1: ya, y2: yb, class: 'viga' }, g);
    const menor = gr.map((i) => notas[i].fig).reduce((a, b) => (VALOR[b] < VALOR[a] ? b : a), 'colcheia');
    const extras = menor === 'fusa' ? 2 : menor === 'semicolcheia' ? 1 : 0;
    for (let k = 1; k <= extras; k++) {
      const d = (cima ? 1 : -1) * k * 17;
      sv('line', { x1: xa, x2: xb, y1: ya + d, y2: yb + d, class: 'viga' }, g);
    }
  });
}

function rotulo(g, x, texto, y) {
  const t = sv('text', { x, y, class: 'nome-nota-pauta', 'text-anchor': 'middle' }, g);
  t.textContent = texto;
}

export function linhasSupl(pos) {
  const r = [];
  if (pos < 0) for (let p = -2; p >= (pos % 2 === 0 ? pos : pos + 1); p -= 2) r.push(p);
  if (pos > 8) for (let p = 10; p <= (pos % 2 === 0 ? pos : pos - 1); p += 2) r.push(p);
  return r;
}

// Agrupa índices de notas que devem compartilhar viga: colcheias (ou menores)
// seguidas, dentro do mesmo tempo da pulsação.
function agruparVigas(notas, dur) {
  const grupos = [];
  let atual = [], t = 0, tInicio = 0;
  notas.forEach((n, i) => {
    const curta = !n.pausa && VALOR[n.fig || 'seminima'] < 1;
    const tempoAtual = Math.floor(t + 1e-9);
    if (curta && (atual.length === 0 || tempoAtual === tInicio)) {
      if (!atual.length) tInicio = tempoAtual;
      atual.push(i);
    } else {
      if (atual.length) grupos.push(atual);
      atual = curta ? [i] : [];
      tInicio = curta ? tempoAtual : -1;
    }
    t += dur[i];
  });
  if (atual.length) grupos.push(atual);
  return grupos;
}

// ---------- utilidades para as aulas ----------
// Monta uma lista de compassos a partir de uma escrita curta:
//   "C4/sem D4 E4 F4 | G4/min A4/min"  →  nota/figura, separadas por espaço, | troca de compasso
// Figuras: sem(ibreve) min(ima) sem(ínima)... usamos abreviações claras:
//   o = semibreve, b = mínima, q = semínima, c = colcheia, s = semicolcheia; ponto com "."
//   z = pausa (z q = pausa de semínima)
const ABREV = { o: 'semibreve', b: 'minima', q: 'seminima', c: 'colcheia', s: 'semicolcheia', f: 'fusa' };
const LETRA_PC = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };

export function midiDe(texto) {
  const m = /^([a-gA-G])([#b]?)(-?\d)$/.exec(texto.trim());
  if (!m) return null;
  const pc = LETRA_PC[m[1].toLowerCase()] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  return (Number(m[3]) + 1) * 12 + pc;
}

export function compassosDe(txt) {
  return txt.split('|').map((parte) => {
    const notas = [];
    parte.trim().split(/\s+/).filter(Boolean).forEach((tok0) => {
      let tok = tok0;
      const lig = tok.endsWith('~');
      if (lig) tok = tok.slice(0, -1);
      const [alt, figAb = 'q'] = tok.split('/');
      const ponto = figAb.endsWith('.');
      const fig = ABREV[figAb.replace('.', '')] || 'seminima';
      if (alt === 'z' || alt === 'Z') { notas.push({ pausa: fig, ponto }); return; }
      if (alt.includes('+')) { notas.push({ midis: alt.split('+').map(midiDe), fig, ponto, lig }); return; }
      const midi = midiDe(alt);
      if (midi !== null) notas.push({ midi, fig, ponto, lig });
    });
    return { notas };
  });
}
