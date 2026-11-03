// Conta o tempo que você passa praticando e soma no dia de hoje.
// Qualquer tela do app pode chamar comecarPratica() e pararPratica().
// O tempo é salvo a cada 10 segundos, para não se perder se o app fechar de repente.
import { Pratica } from './db.js';

// Data de hoje no formato "2026-11-04", usando a hora do seu celular.
export function hojeISO(data = new Date()) {
  const dois = (n) => String(n).padStart(2, '0');
  return data.getFullYear() + '-' + dois(data.getMonth() + 1) + '-' + dois(data.getDate());
}

let ultimo = null;   // até que instante (em ms) o tempo já foi salvo
let relogio = null;

async function guardar() {
  if (ultimo === null) return;
  const segundos = Math.floor((Date.now() - ultimo) / 1000);
  if (segundos > 0) {
    ultimo += segundos * 1000; // avança só os segundos inteiros que foram salvos
    await Pratica.somar(hojeISO(), segundos);
  }
}

export function comecarPratica() {
  if (ultimo !== null) return;
  ultimo = Date.now();
  relogio = setInterval(guardar, 10000);
}

export async function pararPratica() {
  if (ultimo === null) return;
  clearInterval(relogio);
  await guardar();
  ultimo = null;
}

export function minutosTexto(segundos) {
  const min = Math.floor(segundos / 60);
  if (min < 1) return segundos < 10 ? '0 min' : 'menos de 1 min';
  return min + ' min';
}
