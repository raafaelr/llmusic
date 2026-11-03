// Sistema CAGED (sem tela). As 5 formas de acorde abertas (C, A, G, E, D) viajam pelo braço:
// ao deslizar a forma para cima, as cordas soltas viram pestana. Ex.: a forma de A na casa 3 = Dó maior.
//
// Convenção: "corda" = número da corda (1 = mais fina ... 6 = mais grave).
// As listas de casas vão da 6ª para a 1ª corda; -1 = corda que não toca.

export const CORDAS_MIDI = { 1: 64, 2: 59, 3: 55, 4: 50, 5: 45, 6: 40 };
export const NOMES_TONICA = ['Dó', 'Dó#', 'Ré', 'Mi♭', 'Mi', 'Fá', 'Fá#', 'Sol', 'Lá♭', 'Lá', 'Si♭', 'Si'];
export const CIFRAS_TONICA = ['C', 'C#', 'D', 'E♭', 'E', 'F', 'F#', 'G', 'A♭', 'A', 'B♭', 'B'];
export const ORDEM_CAGED = ['C', 'A', 'G', 'E', 'D'];
// Nota-raiz de cada forma aberta (0 = Dó ... 11 = Si).
export const RAIZ_DA_FORMA = { C: 0, A: 9, G: 7, E: 4, D: 2 };
// Em qual corda fica a raiz da forma (a que usamos para achar a casa).
export const CORDA_DA_RAIZ = { C: 5, A: 5, G: 6, E: 6, D: 4 };

const _ = null;
// Cada qualidade tem as formas abertas disponíveis (casas e dedos, da 6ª para a 1ª corda).
export const QUALIDADES = {
  maior: {
    nome: 'maior', cifra: '', formula: [0, 4, 7], graus: { 0: 'R', 4: '3', 7: '5' },
    formas: {
      C: { frets: [-1, 3, 2, 0, 1, 0], dedos: [_, 3, 2, _, 1, _] },
      A: { frets: [-1, 0, 2, 2, 2, 0], dedos: [_, _, 1, 2, 3, _] },
      G: { frets: [3, 2, 0, 0, 0, 3], dedos: [2, 1, _, _, _, 3] },
      E: { frets: [0, 2, 2, 1, 0, 0], dedos: [_, 2, 3, 1, _, _] },
      D: { frets: [-1, -1, 0, 2, 3, 2], dedos: [_, _, _, 1, 3, 2] }
    }
  },
  menor: {
    nome: 'menor', cifra: 'm', formula: [0, 3, 7], graus: { 0: 'R', 3: '♭3', 7: '5' },
    formas: {
      E: { frets: [0, 2, 2, 0, 0, 0], dedos: [_, 2, 3, _, _, _] },
      A: { frets: [-1, 0, 2, 2, 1, 0], dedos: [_, _, 2, 3, 1, _] },
      D: { frets: [-1, -1, 0, 2, 3, 1], dedos: [_, _, _, 2, 3, 1] }
    }
  },
  '7': {
    nome: 'com sétima (dominante)', cifra: '7', formula: [0, 4, 7, 10], graus: { 0: 'R', 4: '3', 7: '5', 10: '♭7' },
    formas: {
      C: { frets: [-1, 3, 2, 3, 1, 0], dedos: [_, 3, 2, 4, 1, _] },
      A: { frets: [-1, 0, 2, 0, 2, 0], dedos: [_, _, 1, _, 2, _] },
      G: { frets: [3, 2, 0, 0, 0, 1], dedos: [3, 2, _, _, _, 1] },
      E: { frets: [0, 2, 0, 1, 0, 0], dedos: [_, 2, _, 1, _, _] },
      D: { frets: [-1, -1, 0, 2, 1, 2], dedos: [_, _, _, 2, 1, 3] }
    }
  },
  maj7: {
    nome: 'com sétima maior', cifra: 'maj7', formula: [0, 4, 7, 11], graus: { 0: 'R', 4: '3', 7: '5', 11: '7' },
    formas: {
      C: { frets: [-1, 3, 2, 0, 0, 0], dedos: [_, 3, 2, _, _, _] },
      A: { frets: [-1, 0, 2, 1, 2, 0], dedos: [_, _, 2, 1, 3, _] },
      G: { frets: [3, 2, 0, 0, 0, 2], dedos: [3, 1, _, _, _, 2] },
      E: { frets: [0, 2, 1, 1, 0, 0], dedos: [_, 3, 1, 2, _, _] },
      D: { frets: [-1, -1, 0, 2, 2, 2], dedos: [_, _, _, 1, 2, 3] }
    }
  },
  m7: {
    nome: 'menor com sétima', cifra: 'm7', formula: [0, 3, 7, 10], graus: { 0: 'R', 3: '♭3', 7: '5', 10: '♭7' },
    formas: {
      E: { frets: [0, 2, 0, 0, 0, 0], dedos: [_, 2, _, _, _, _] },
      A: { frets: [-1, 0, 2, 0, 1, 0], dedos: [_, _, 2, _, 1, _] },
      D: { frets: [-1, -1, 0, 2, 1, 1], dedos: [_, _, _, 2, 1, 1] }
    }
  }
};
export const ORDEM_QUALIDADES = ['maior', 'menor', '7', 'maj7', 'm7'];

// Compatibilidade: as formas maiores continuam em FORMAS.
export const FORMAS = Object.fromEntries(ORDEM_CAGED.map((id) => [id, { id, raizPc: RAIZ_DA_FORMA[id], ...QUALIDADES.maior.formas[id] }]));

const mod12 = (n) => ((n % 12) + 12) % 12;
export const formasDisponiveis = (qual = 'maior') => ORDEM_CAGED.filter((id) => QUALIDADES[qual].formas[id]);

export function nomeAcorde(pc, qual = 'maior') {
  const n = NOMES_TONICA[mod12(pc)];
  return qual === 'maior' ? n + ' maior' : qual === 'menor' ? n + ' menor' : qual === '7' ? n + ' com sétima (' + n + '7)' : qual === 'maj7' ? n + ' com sétima maior' : n + ' menor com sétima';
}
export const cifraAcorde = (pc, qual = 'maior') => CIFRAS_TONICA[mod12(pc)] + QUALIDADES[qual].cifra;

// A forma deslizada para a tonalidade "tonicaPc" (0 = Dó ... 11 = Si).
export function formaNaTonalidade(id, tonicaPc, qual = 'maior') {
  const q = QUALIDADES[qual];
  const base = q.formas[id];
  if (!base) throw new Error('A forma ' + id + ' não existe para o acorde ' + qual);
  const k = mod12(tonicaPc - RAIZ_DA_FORMA[id]);
  const notas = [];
  base.frets.forEach((casa, i) => {
    if (casa < 0) return;
    const corda = 6 - i;
    const c = casa + k;
    const midi = CORDAS_MIDI[corda] + c;
    const semitons = mod12(midi - tonicaPc);
    let dedo = base.dedos[i];
    if (k > 0) dedo = casa === 0 ? 1 : Math.min(4, (dedo || 0) + 1);
    notas.push({ corda, casa: c, midi, tonica: semitons === 0, grau: q.graus[semitons] || '?', dedo });
  });
  const mudas = base.frets.map((c, i) => (c < 0 ? 6 - i : 0)).filter(Boolean);
  const casas = notas.map((n) => n.casa);
  const temAberta = base.frets.includes(0);
  const cordasPestana = notas.filter((n) => base.frets[6 - n.corda] === 0).map((n) => n.corda);
  return {
    id, qual, k, notas, mudas, tonicaPc, maiorCasa: Math.max(...casas), menorCasa: Math.min(...casas),
    pestana: k > 0 && temAberta, cordasPestana: k > 0 ? cordasPestana : []
  };
}

// As formas na ordem em que aparecem subindo pelo braço (só as que existem para a qualidade).
export function ordemNoBraco(tonicaPc, qual = 'maior') {
  return formasDisponiveis(qual).map((id) => formaNaTonalidade(id, tonicaPc, qual)).sort((a, b) => a.k - b.k);
}

export function arpejoDaForma(forma) { return [...forma.notas].sort((a, b) => b.corda - a.corda); }

// Corda de cima para baixo da forma para o "ouvir": do grave ao agudo.
export function midisDoAcorde(forma) { return arpejoDaForma(forma).map((n) => n.midi); }

export function descricaoPosicao(forma) {
  if (forma.k === 0) return 'posição aberta (sem pestana)';
  return forma.pestana ? 'pestana na casa ' + forma.k : 'forma deslizada ' + forma.k + ' casas para cima';
}

// Em que corda e casa está a raiz usada para "achar" a forma (a regra prática do CAGED).
// Nas formas de C e G a raiz da forma aberta já está na casa 3; nas outras, na casa 0.
const CASA_BASE_DA_RAIZ = { C: 3, A: 0, G: 3, E: 0, D: 0 };
export function raizDeReferencia(id, tonicaPc) {
  const corda = CORDA_DA_RAIZ[id], base = CASA_BASE_DA_RAIZ[id];
  const r = mod12(tonicaPc - (CORDAS_MIDI[corda] % 12));
  return { corda, casa: mod12(r - base) + base };
}

// Nota (0 a 11) em uma corda e casa.
export const pcNaCasa = (corda, casa) => mod12(CORDAS_MIDI[corda] + casa);

// ---------- Caixas de escala (posições da escala em volta de cada forma) ----------
const ESCALAS = {
  maior: { nome: 'Escala maior', offsets: [0, 2, 4, 5, 7, 9, 11], graus: ['R', '2', '3', '4', '5', '6', '7'] },
  'pent-maior': { nome: 'Pentatônica maior', offsets: [0, 2, 4, 7, 9], graus: ['R', '2', '3', '5', '6'] },
  'pent-menor': { nome: 'Pentatônica menor (relativa)', offsets: [0, 3, 5, 7, 10], graus: ['R', '♭3', '4', '5', '♭7'], deslocamento: 9 }
};
export const TIPOS_ESCALA = Object.keys(ESCALAS);
export const nomeDaEscala = (tipo) => ESCALAS[tipo].nome;

// Notas da escala da tonalidade (maior) que cabem na "caixa" ao redor da forma de acorde.
// Para a pentatônica menor usamos a relativa: a mesma altura de notas da pentatônica maior, raiz 3 semitons abaixo (a tônica menor).
export function caixaDaEscala(forma, tipo) {
  const e = ESCALAS[tipo];
  const raiz = mod12(forma.tonicaPc + (e.deslocamento || 0));
  const lo = Math.max(0, forma.menorCasa - 1), hi = forma.maiorCasa + 1;
  const notas = [];
  for (let corda = 1; corda <= 6; corda++) {
    for (let casa = lo; casa <= hi; casa++) {
      const grau = e.offsets.indexOf(mod12(pcNaCasa(corda, casa) - raiz));
      if (grau >= 0) notas.push({ corda, casa, rotulo: e.graus[grau], raiz: grau === 0 });
    }
  }
  return { notas, de: lo, ate: hi, raizPc: raiz };
}
