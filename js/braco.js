// Lógica pura do braço do violão (sem tela): que nota está em cada casa, onde achar uma nota.
// Convenção: corda 0 = 1ª corda (a mais fina, em cima no desenho), corda 5 = 6ª corda (a mais grave).
import { NOMES_PT } from './pitch.js';

// Afinação padrão, da 1ª para a 6ª corda (número MIDI).
export const CORDAS_PADRAO = [64, 59, 55, 50, 45, 40];

export function midiNaCasa(corda, casa, cordas = CORDAS_PADRAO) {
  return cordas[corda] + casa;
}

// Nome da classe de nota (0 = Dó ... 11 = Si) em português.
export function nomeDaClasse(pc) { return NOMES_PT[((pc % 12) + 12) % 12]; }

// Todas as posições {corda, casa} onde aparece a classe de nota pc, até a casa "maxCasa".
export function posicoesDaNota(pc, maxCasa, cordas = CORDAS_PADRAO) {
  const r = [];
  cordas.forEach((m, corda) => {
    for (let casa = 0; casa <= maxCasa; casa++) {
      if ((((m + casa) % 12) + 12) % 12 === pc) r.push({ corda, casa });
    }
  });
  return r;
}

// Sorteia uma posição, evitando repetir a anterior.
// cordasPermitidas: lista de índices de corda; maxCasa: 0 = só cordas soltas.
export function sortearPosicao(cordasPermitidas, maxCasa, anterior, aleatorio = Math.random) {
  for (let t = 0; t < 50; t++) {
    const corda = cordasPermitidas[Math.floor(aleatorio() * cordasPermitidas.length)];
    const casa = Math.floor(aleatorio() * (maxCasa + 1));
    if (!anterior || anterior.corda !== corda || anterior.casa !== casa) return { corda, casa };
  }
  return { corda: cordasPermitidas[0], casa: 0 };
}

// Julga o que foi tocado. Devolve 'certo' | 'quase' | 'errado'.
// 'quase' = nota certa, mas desafinada entre 25 e 50 cents.
export function julgar(midiAlvo, midiOuvido, centsOuvido) {
  if (midiOuvido !== midiAlvo) return 'errado';
  return Math.abs(centsOuvido) <= 25 ? 'certo' : 'quase';
}
