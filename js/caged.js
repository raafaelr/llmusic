// Sistema CAGED (sem tela): as 5 formas de acorde maior abertas (C, A, G, E, D) e como elas
// "viajam" pelo braço. Para tocar o mesmo acorde em outra tonalidade, a gente desliza a forma
// para cima: as cordas soltas viram pestana. Ex.: forma de A na casa 3 = Dó maior.
//
// Convenção: "corda" aqui é o número da corda (1 = mais fina, 6 = mais grave).
// As listas de casas vão da 6ª para a 1ª corda; -1 = corda que não toca.

export const CORDAS_MIDI = { 1: 64, 2: 59, 3: 55, 4: 50, 5: 45, 6: 40 };
export const NOMES_TONICA = ['Dó', 'Dó#', 'Ré', 'Mi♭', 'Mi', 'Fá', 'Fá#', 'Sol', 'Lá♭', 'Lá', 'Si♭', 'Si'];
export const nomeAcorde = (pc) => NOMES_TONICA[((pc % 12) + 12) % 12] + ' maior';

export const FORMAS = {
  C: { id: 'C', raizPc: 0, frets: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
  A: { id: 'A', raizPc: 9, frets: [-1, 0, 2, 2, 2, 0], dedos: [null, null, 1, 2, 3, null] },
  G: { id: 'G', raizPc: 7, frets: [3, 2, 0, 0, 0, 3], dedos: [2, 1, null, null, null, 3] },
  E: { id: 'E', raizPc: 4, frets: [0, 2, 2, 1, 0, 0], dedos: [null, 2, 3, 1, null, null] },
  D: { id: 'D', raizPc: 2, frets: [-1, -1, 0, 2, 3, 2], dedos: [null, null, null, 1, 3, 2] }
};
export const ORDEM_CAGED = ['C', 'A', 'G', 'E', 'D'];

// A forma deslizada para a tonalidade "tonicaPc" (0 = Dó ... 11 = Si).
export function formaNaTonalidade(id, tonicaPc) {
  const f = FORMAS[id];
  const k = (((tonicaPc - f.raizPc) % 12) + 12) % 12;
  const notas = [];
  f.frets.forEach((casa, i) => {
    if (casa < 0) return;
    const corda = 6 - i;
    const c = casa + k;
    const midi = CORDAS_MIDI[corda] + c;
    notas.push({ corda, casa: c, midi, tonica: (((midi - tonicaPc) % 12) + 12) % 12 === 0, dedo: f.dedos[i] });
  });
  const mudas = f.frets.map((c, i) => (c < 0 ? 6 - i : 0)).filter(Boolean);
  const maiorCasa = Math.max(...notas.map((n) => n.casa));
  const menorCasa = Math.min(...notas.map((n) => n.casa));
  return { id, k, notas, mudas, tonicaPc, maiorCasa, menorCasa, pestana: k > 0 && f.frets.includes(0) };
}

// As 5 formas na ordem em que aparecem subindo pelo braço, para a tonalidade escolhida.
export function ordemNoBraco(tonicaPc) {
  return ORDEM_CAGED.map((id) => formaNaTonalidade(id, tonicaPc)).sort((a, b) => a.k - b.k);
}

// Notas de uma forma na ordem de "arpejo": da corda mais grave para a mais aguda.
export function arpejoDaForma(forma) {
  return [...forma.notas].sort((a, b) => b.corda - a.corda);
}

// Para o quiz: texto que descreve a posição ("pestana na casa 3" ou "sem pestana, casas abertas").
export function descricaoPosicao(forma) {
  if (forma.k === 0) return 'posição aberta (sem pestana)';
  return forma.pestana ? 'pestana na casa ' + forma.k : 'forma deslizada ' + forma.k + ' casas para cima';
}
