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
  E: [0, 2, 2, 1, 0, 0],
  D: [-1, -1, 0, 2, 3, 2],
  Dm: [-1, -1, 0, 2, 3, 1],
  Fmaj7: [-1, -1, 3, 2, 1, 0],
  Am7: [-1, 0, 2, 0, 1, 0],
  Cmaj7: [-1, 3, 2, 0, 0, 0],
  G7: [3, 2, 0, 0, 0, 1]
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

// Arpejo de seis colcheias com um padrão de cordas à escolha (a 1ª entrada é o baixo).
function arpejoPadrao(acorde, baixo, padrao) {
  const cordas = padrao.map((c) => (c === 0 ? baixo : c));
  return { acorde, eventos: cordas.map((c, k) => ({ t: k * 0.5, d: 0.5, n: [[c, casaDe(acorde, c)]] })) };
}
// Arpejo de oito colcheias em 4/4.
function arpejo44(acorde, baixo) {
  const cordas = [baixo, 3, 2, 1, 3, 2, 3, 2];
  return { acorde, eventos: cordas.map((c, k) => ({ t: k * 0.5, d: 0.5, n: [[c, casaDe(acorde, c)]] })) };
}
// Valsa: baixo no 1º tempo e as três cordas agudas juntas nos tempos 2 e 3.
function valsa(acorde, baixo) {
  const agudas = [3, 2, 1].map((c) => [c, casaDe(acorde, c)]);
  return { acorde, eventos: [
    { t: 0, d: 1, n: [[baixo, casaDe(acorde, baixo)]] },
    { t: 1, d: 1, n: agudas },
    { t: 2, d: 1, n: agudas }
  ] };
}
// Melodia nas cordas agudas com o baixo do acorde nos tempos 1 e 3.
function comBaixo(acorde, baixo, lista) {
  let t = 0;
  const eventos = lista.map(([c, f, d]) => {
    const n = [[c, f]];
    if (t === 0 || t === 2) n.unshift([baixo, casaDe(acorde, baixo)]);
    const e = { t, d, n }; t += d; return e;
  });
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
    id: 'estrelinha',
    titulo: 'Estrelinha da Liz',
    nivel: 'Iniciante · 3/4 · acordes G, C e D',
    bpm: 60,
    compasso: [3, 4],
    dica: 'O mesmo arpejo p-i-m-a-m-i do primeiro ninar, agora com três acordes novos: G, C e D. No acorde D o polegar toca a 4ª corda (a de baixo é a 4ª, nunca a 5ª ou a 6ª). Conte 1-2-3 devagar, como se estivesse balançando o berço.',
    compassos: [
      arpejo34('G', 6), arpejo34('C', 5), arpejo34('G', 6), arpejo34('D', 4),
      arpejo34('G', 6), arpejo34('C', 5), arpejo34('D', 4), acordeFinal('G', 3)
    ]
  },
  {
    id: 'valsa',
    titulo: 'Valsa do sono da Lívia',
    nivel: 'Iniciante · 3/4 · baixo e acorde',
    bpm: 72,
    compasso: [3, 4],
    dica: 'Um jeito diferente de acompanhar: o polegar toca o baixo no tempo 1 e os dedos i, m e a tocam as três cordas agudas juntas nos tempos 2 e 3 ("BUM-tchá-tchá", como uma valsa). Fica bonito com a mão direita leve. Acordes: Am, E e Dm.',
    compassos: [
      valsa('Am', 5), valsa('E', 6), valsa('Am', 5), valsa('Dm', 4),
      valsa('Am', 5), valsa('Dm', 4), valsa('E', 6), acordeFinal('Am', 3)
    ]
  },
  {
    id: 'berco',
    titulo: 'Berço de lã',
    nivel: 'Fácil · melodia com baixo',
    bpm: 60,
    compasso: [4, 4],
    dica: 'Agora você toca a melodia (cordas 1 e 2) e o baixo do acorde juntos, nos tempos 1 e 3. Toque os dois ao mesmo tempo com o polegar e o dedo a (ou m). Acordes: C, Am, Fmaj7 e G. Se for difícil, toque só a melodia primeiro.',
    compassos: [
      comBaixo('C', 5, [[1, 0, 1], [1, 3, 1], [1, 0, 1], [2, 3, 1]]),
      comBaixo('Am', 5, [[2, 1, 1], [1, 0, 1], [2, 1, 1], [2, 0, 1]]),
      comBaixo('Fmaj7', 4, [[1, 1, 1], [1, 0, 1], [2, 1, 1], [3, 2, 1]]),
      comBaixo('G', 6, [[1, 3, 1], [2, 3, 1], [2, 0, 1], [2, 3, 1]]),
      comBaixo('C', 5, [[1, 0, 2], [1, 3, 2]]),
      comBaixo('Am', 5, [[2, 1, 1], [2, 3, 1], [1, 0, 2]]),
      comBaixo('G', 6, [[2, 3, 1], [2, 0, 1], [3, 0, 2]]),
      acordeFinal('C', 4)
    ]
  },
  {
    id: 'lua',
    titulo: 'Lua de algodão',
    nivel: 'Fácil · 6/8 · balanço',
    bpm: 54,
    compasso: [6, 8],
    dica: 'Compasso 6/8: seis colcheias em dois grupos de três (UM-dois-três, QUA-tro-cinco). O arpejo vai p-i-m-i-a-i. Dê um pouquinho mais de força no 1º e no 4º toque, como um balanço. Acordes: Em, C, G e D.',
    compassos: [
      arpejoPadrao('Em', 6, [0, 3, 2, 3, 1, 3]), arpejoPadrao('C', 5, [0, 3, 2, 3, 1, 3]),
      arpejoPadrao('G', 6, [0, 3, 2, 3, 1, 3]), arpejoPadrao('D', 4, [0, 3, 2, 3, 1, 3]),
      arpejoPadrao('Em', 6, [0, 3, 2, 3, 1, 3]), arpejoPadrao('C', 5, [0, 3, 2, 3, 1, 3]),
      arpejoPadrao('D', 4, [0, 3, 2, 3, 1, 3]), acordeFinal('Em', 3)
    ]
  },
  {
    id: 'dorme',
    titulo: 'Dorme, pequena',
    nivel: 'Médio · 4/4 · acordes com sétima',
    bpm: 56,
    compasso: [4, 4],
    dica: 'Arpejo de oito colcheias, devagar. Usa os acordes de sétima que você viu nas aulas do CAGED: Cmaj7, Am7, Dm e G7. Deixe cada nota soar: no violão de nylon e de aço isso dá um som de caixinha de música.',
    compassos: [
      arpejo44('Cmaj7', 5), arpejo44('Am7', 5), arpejo44('Dm', 4), arpejo44('G7', 6),
      arpejo44('Cmaj7', 5), arpejo44('Am7', 5), arpejo44('Dm', 4), acordeFinal('Cmaj7', 4)
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

// ---------- Pacotes (peças extras que você instala por arquivo .json) ----------
// Um pacote é um arquivo: { "formato": "llmusic-pacote", "versao": 1, "id": "...", "nome": "...", "pecas": [ ...peças no mesmo formato acima... ] }
// Esta função confere tudo antes de aceitar, para um arquivo errado nunca quebrar o app.
export function validarPacote(obj) {
  const erro = (m) => ({ ok: false, erro: m });
  if (!obj || obj.formato !== 'llmusic-pacote' || obj.versao !== 1) return erro('Este arquivo não é um pacote do LLMusic.');
  if (typeof obj.id !== 'string' || !/^[a-z0-9-]{2,40}$/.test(obj.id)) return erro('O pacote precisa de um "id" com letras minúsculas, números e hífen.');
  if (typeof obj.nome !== 'string' || !obj.nome.trim()) return erro('O pacote precisa de um "nome".');
  if (!Array.isArray(obj.pecas) || !obj.pecas.length || obj.pecas.length > 50) return erro('O pacote precisa ter de 1 a 50 peças.');
  const ids = new Set();
  for (const p of obj.pecas) {
    const nome = 'Peça "' + (p && p.titulo) + '": ';
    if (!p || typeof p.id !== 'string' || typeof p.titulo !== 'string') return erro('Toda peça precisa de "id" e "titulo".');
    if (ids.has(p.id)) return erro('Peça repetida: ' + p.id);
    ids.add(p.id);
    if (!Number.isFinite(p.bpm) || p.bpm < 30 || p.bpm > 240) return erro(nome + 'bpm deve estar entre 30 e 240.');
    if (!Array.isArray(p.compasso) || !Number.isInteger(p.compasso[0]) || p.compasso[0] < 1 || p.compasso[0] > 16 || ![2, 4, 8, 16].includes(p.compasso[1])) return erro(nome + 'compasso inválido.');
    if (!Array.isArray(p.compassos) || !p.compassos.length || p.compassos.length > 400) return erro(nome + 'precisa de 1 a 400 compassos.');
    const tpc = tempoPorCompasso(p);
    for (let m = 0; m < p.compassos.length; m++) {
      const c = p.compassos[m];
      if (!c || !Array.isArray(c.eventos) || !c.eventos.length) return erro(nome + 'compasso ' + (m + 1) + ' vazio.');
      let fim = 0;
      for (const e of c.eventos) {
        if (!Number.isFinite(e.t) || !Number.isFinite(e.d) || e.d <= 0 || e.t < 0) return erro(nome + 'compasso ' + (m + 1) + ' tem tempo inválido.');
        if (!Array.isArray(e.n) || (!e.n.length && !e.silencio)) return erro(nome + 'compasso ' + (m + 1) + ' tem evento sem notas.');
        for (const nota of e.n) {
          if (!Array.isArray(nota) || !Number.isInteger(nota[0]) || nota[0] < 1 || nota[0] > 6 || !Number.isInteger(nota[1]) || nota[1] < 0 || nota[1] > 24)
            return erro(nome + 'compasso ' + (m + 1) + ' tem corda/casa inválida (corda 1 a 6, casa 0 a 24).');
        }
        fim = Math.max(fim, e.t + e.d);
      }
      if (fim > tpc + 1e-9) return erro(nome + 'compasso ' + (m + 1) + ' passa do tempo do compasso.');
    }
  }
  return { ok: true };
}
