// Lógica pura da leitura à primeira vista: sorteio de notas, posição na pauta e estrelas.
//
// Detalhe importante: a partitura de violão é escrita UMA OITAVA ACIMA do som real.
// As cordas soltas (soando Mi2 Lá2 Ré3 Sol3 Si3 Mi4) são escritas Mi3 Lá3 Ré4 Sol4 Si4 Mi5.
// Neste arquivo, "escrito" é o número MIDI da nota na pauta e "soa" é escrito - 12.

export const NOMES_NATURAIS = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
const PC_NATURAIS = [0, 2, 4, 5, 7, 9, 11];

// Notas escritas (MIDI) disponíveis por nível. Só notas naturais (teclas brancas).
function naturaisEntre(min, max) {
  const r = [];
  for (let m = min; m <= max; m++) if (PC_NATURAIS.includes(((m % 12) + 12) % 12)) r.push(m);
  return r;
}
function cromaticasEntre(min, max) { const r = []; for (let m = min; m <= max; m++) r.push(m); return r; }
export const NIVEIS = [
  { id: 1, nome: 'Nível 1', desc: 'Si a Mi (cordas 2 e 1)', notas: naturaisEntre(71, 76) },
  { id: 2, nome: 'Nível 2', desc: 'Sol a Sol (cordas 3, 2 e 1)', notas: naturaisEntre(67, 79) },
  { id: 3, nome: 'Nível 3', desc: 'Todas as cordas (Mi grave a Lá agudo)', notas: naturaisEntre(52, 81) },
  { id: 4, nome: 'Nível 4', desc: 'Com sustenidos e bemóis (Mi a Sol agudo)', notas: cromaticasEntre(64, 79) }
];

// Sorteia n notas, sem repetir a mesma duas vezes seguidas e com saltos pequenos na maioria das vezes
// (melodias com saltos pequenos são mais fáceis de ler e mais musicais).
export function gerarExercicio(nivel, n = 8, aleatorio = Math.random) {
  const pool = NIVEIS.find((x) => x.id === nivel).notas;
  const r = [];
  let i = Math.floor(aleatorio() * pool.length);
  for (let k = 0; k < n; k++) {
    r.push(pool[i]);
    for (let t = 0; t < 20; t++) {
      const salto = Math.floor(aleatorio() * 5) - 2;               // -2..+2 posições
      const j = aleatorio() < 0.2 ? Math.floor(aleatorio() * pool.length) : i + salto;
      if (j >= 0 && j < pool.length && j !== i) { i = j; break; }
    }
  }
  return r;
}

// Posição na pauta: 0 = linha de baixo (Mi4), 1 = primeiro espaço (Fá4), 2 = 2ª linha (Sol4)... 8 = linha de cima (Fá5).
// Negativos e maiores que 8 pedem linhas suplementares.
function diatonico(midi) {
  const pc = ((midi % 12) + 12) % 12;
  return Math.floor(midi / 12) * 7 + PC_NATURAIS.indexOf(pc);
}
export function posicaoNaPauta(midiEscrito) {
  return diatonico(midiEscrito) - diatonico(64);
}

// Linhas suplementares necessárias para uma nota (posições pares fora de 0..8, até a nota).
export function linhasSuplementares(pos) {
  const r = [];
  if (pos < 0) for (let p = -2; p >= (pos % 2 === 0 ? pos : pos + 1); p -= 2) r.push(p);
  if (pos > 8) for (let p = 10; p <= (pos % 2 === 0 ? pos : pos - 1); p += 2) r.push(p);
  return r;
}

export function nomeDaNota(midiEscrito) {
  return NOMES_NATURAIS[PC_NATURAIS.indexOf(((midiEscrito % 12) + 12) % 12)];
}
export function midiQueSoa(midiEscrito) { return midiEscrito - 12; }

// Estrelas pelo aproveitamento (acertos de primeira / total).
export function estrelas(acertosDePrimeira, total) {
  const a = total ? acertosDePrimeira / total : 0;
  return a >= 0.9 ? 3 : a >= 0.7 ? 2 : a >= 0.5 ? 1 : 0;
}

// Nota escrita (MIDI) com sustenido ou bemol: devolve { midi, base, acc }.
// "base" é a nota natural em que ela é desenhada na pauta; "acc" é +1 (sustenido), -1 (bemol) ou 0.
export function escreverNota(midi, aleatorio = Math.random) {
  const pc = ((midi % 12) + 12) % 12;
  if (PC_NATURAIS.includes(pc)) return { midi, base: midi, acc: 0 };
  return aleatorio() < 0.5 ? { midi, base: midi - 1, acc: 1 } : { midi, base: midi + 1, acc: -1 };
}
export function nomeCompleto(n) { return nomeDaNota(n.base) + (n.acc > 0 ? '#' : n.acc < 0 ? '♭' : ''); }
