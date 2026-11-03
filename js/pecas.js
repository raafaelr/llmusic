// Peças do LLMusic. Todas são ORIGINAIS, escritas para este app (nada copiado de livros).
// Formato de uma peça:
//   compassos: lista de compassos; cada compasso tem "acorde" (nome) e "eventos".
//   evento: { t: início em tempos (1 = semínima), d: duração em tempos, n: [[corda, casa], ...] }
//   corda: 1 a 6 (1 = a mais fina). casa: 0 = corda solta.
// Para ficar legível, os compassos são gerados por pequenas funções abaixo.

export const CORDAS_SOLTAS = { 1: 64, 2: 59, 3: 55, 4: 50, 5: 45, 6: 40 };   // MIDI de cada corda solta

// Formas de acorde: casa de cada corda, da 6ª para a 1ª (-1 = não toca).
const FORMAS = {
  Am: [-1, 0, 2, 2, 1, 0],
  C: [-1, 3, 2, 0, 1, 0],
  G: [3, 2, 0, 0, 0, 3],
  Em: [0, 2, 2, 0, 0, 0],
  E: [0, 2, 2, 1, 0, 0]
};
const casaDe = (acorde, corda) => FORMAS[acorde][6 - corda];

// Dedo da mão direita usual no fingerstyle: p (polegar) nas graves, i, m, a nas 3ª, 2ª, 1ª.
export function dedoDaCorda(c) { return c >= 4 ? 'p' : c === 3 ? 'i' : c === 2 ? 'm' : 'a'; }

// Arpejo em 3/4: p i m a m i (seis colcheias por compasso).
function arpejo34(acorde, baixo) {
  const cordas = [baixo, 3, 2, 1, 2, 3];
  return { acorde, eventos: cordas.map((c, k) => ({ t: k * 0.5, d: 0.5, n: [[c, casaDe(acorde, c)]] })) };
}
// Acorde inteiro ("dedilhado" de baixo para cima) que dura o compasso todo.
function acordeFinal(acorde, tempos) {
  const cordas = [6, 5, 4, 3, 2, 1].filter((c) => casaDe(acorde, c) >= 0);
  return { acorde, eventos: [{ t: 0, d: tempos, n: cordas.map((c) => [c, casaDe(acorde, c)]) }] };
}
// Compasso de semínimas (ou outras figuras) a partir de uma lista [corda, casa, duração].
function melodia(acorde, lista) {
  let t = 0;
  const eventos = lista.map(([c, f, d]) => { const e = { t, d, n: [[c, f]] }; t += d; return e; });
  return { acorde, eventos };
}

export const PECAS = [
  {
    id: 'soltas',
    titulo: 'Passeio pelas cordas soltas',
    nivel: 'Iniciante',
    bpm: 70,
    compasso: [4, 4],
    dica: 'Toque cada corda solta com o polegar (p) nas três graves e com o indicador (i) nas outras. Deixe a nota soar e ouça até o fim antes da próxima.',
    compassos: [
      melodia('', [[6, 0, 1], [5, 0, 1], [4, 0, 1], [3, 0, 1]]),
      melodia('', [[2, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1]]),
      melodia('', [[4, 0, 1], [5, 0, 1], [6, 0, 1], [5, 0, 1]]),
      melodia('', [[4, 0, 2], [6, 0, 2]])
    ]
  },
  {
    id: 'ninar',
    titulo: 'Ninar da Liz e da Lívia',
    nivel: 'Iniciante · fingerstyle',
    bpm: 66,
    compasso: [3, 4],
    dica: 'Arpejo p-i-m-a-m-i. O polegar (p) toca a nota grave do acorde; i, m e a tocam as cordas 3, 2 e 1. Segure a forma do acorde durante todo o compasso e toque bem devagar.',
    compassos: [
      arpejo34('Am', 5), arpejo34('C', 5), arpejo34('G', 6), arpejo34('Em', 6),
      arpejo34('Am', 5), arpejo34('C', 5), arpejo34('E', 6), acordeFinal('Am', 3)
    ]
  },
  {
    id: 'passeio',
    titulo: 'Melodia do passeio (escala de Dó)',
    nivel: 'Iniciante · melodia',
    bpm: 80,
    compasso: [4, 4],
    dica: 'Só as cordas 2 e 1. Use um dedo por casa: dedo 1 na casa 1, dedo 3 na casa 3. Toque com o dedo i e m, alternando.',
    compassos: [
      melodia('C', [[2, 0, 1], [2, 1, 1], [2, 3, 1], [1, 0, 1]]),
      melodia('G', [[2, 3, 1], [2, 1, 1], [2, 0, 2]]),
      melodia('C', [[1, 0, 1], [1, 1, 1], [1, 3, 1], [1, 1, 1]]),
      melodia('C', [[1, 0, 1], [2, 3, 1], [2, 1, 1], [2, 0, 1]]),
      melodia('G', [[1, 3, 1], [1, 1, 1], [1, 0, 1], [2, 3, 1]]),
      melodia('C', [[2, 0, 2], [2, 1, 2]])
    ]
  }
];

export function tempoPorCompasso(peca) { return peca.compasso[0] * 4 / peca.compasso[1]; }

// Lista "achatada" de todos os eventos com o tempo absoluto (em tempos), compasso e notas MIDI que soam.
export function achatar(peca) {
  const tpc = tempoPorCompasso(peca);
  const lista = [];
  peca.compassos.forEach((comp, m) => {
    comp.eventos.forEach((e) => {
      lista.push({
        compasso: m,
        t: m * tpc + e.t,
        d: e.d,
        notas: e.n,
        midis: e.n.map(([c, f]) => CORDAS_SOLTAS[c] + f)
      });
    });
  });
  return lista;
}
