// Leitura rítmica (sem tela): sorteia ritmos em compasso 4/4 e avalia os toques do usuário.
// Tempos são medidos em "tempos" (1 = semínima, 0.5 = colcheia, 2 = mínima).
import { estrelas } from './leitura.js';

export const NIVEIS_RITMO = [
  { id: 1, nome: 'Nível 1', desc: 'Semínimas, mínimas e pausas' },
  { id: 2, nome: 'Nível 2', desc: '+ colcheias' },
  { id: 3, nome: 'Nível 3', desc: '+ pausas de colcheia' }
];

const N = (d) => ({ d, tipo: 'nota' }), P = (d) => ({ d, tipo: 'pausa' });
const FICHAS = {
  semi: { d: 1, itens: [N(1)] },
  pausa: { d: 1, itens: [P(1)] },
  minima: { d: 2, itens: [N(2)] },
  colcheias: { d: 1, itens: [N(0.5), N(0.5)] },
  colPausa: { d: 1, itens: [N(0.5), P(0.5)] },
  pausaCol: { d: 1, itens: [P(0.5), N(0.5)] }
};
function fichasDoNivel(nivel) {
  const l = [['semi', 4], ['pausa', 1], ['minima', 2]];
  if (nivel >= 2) l.push(['colcheias', 4]);
  if (nivel >= 3) l.push(['colPausa', 2], ['pausaCol', 2]);
  return l;
}

function compasso(nivel, r) {
  for (let tentativa = 0; tentativa < 100; tentativa++) {
    const itens = [];
    let resta = 4, pausas = 0;
    const lista = fichasDoNivel(nivel);
    while (resta > 1e-9) {
      const ok = lista.filter(([id]) => FICHAS[id].d <= resta + 1e-9 && !(id === 'pausa' && (itens.length === 0 || pausas >= 1)));
      const total = ok.reduce((a, [, w]) => a + w, 0);
      let x = r() * total, esc = ok[0][0];
      for (const [id, w] of ok) { if (x < w) { esc = id; break; } x -= w; }
      if (esc === 'pausa') pausas++;
      itens.push(...FICHAS[esc].itens);
      resta -= FICHAS[esc].d;
    }
    if (itens[0].tipo === 'nota' && itens.filter((i) => i.tipo === 'nota').length >= 2) return itens;
  }
  return [N(1), N(1), N(1), N(1)];
}

// Exercício com vários compassos: lista de { t, d, tipo, compasso } em tempos absolutos.
export function gerarRitmo(nivel, compassos = 2, r = Math.random) {
  const ev = [];
  for (let c = 0; c < compassos; c++) {
    let t = c * 4;
    compasso(nivel, r).forEach((i) => { ev.push({ t, d: i.d, tipo: i.tipo, compasso: c }); t += i.d; });
  }
  return ev;
}
export const onsets = (ev) => ev.filter((e) => e.tipo === 'nota').map((e) => e.t);

// Compara os toques (em tempos) com os inícios esperados. "tol" = tolerância em tempos.
export function avaliarToques(esperados, toques, tol = 0.25) {
  const usado = new Array(toques.length).fill(false);
  const desvios = [];
  let acertos = 0;
  for (const e of esperados) {
    let melhor = -1, dist = Infinity;
    toques.forEach((t, i) => { const d = Math.abs(t - e); if (!usado[i] && d <= tol && d < dist) { dist = d; melhor = i; } });
    if (melhor >= 0) { usado[melhor] = true; acertos++; desvios.push(toques[melhor] - e); } else desvios.push(null);
  }
  const extras = usado.filter((u) => !u).length;
  return { acertos, perdidas: esperados.length - acertos, extras, desvios };
}
// Estrelas: toque extra desconta meio acerto.
export function estrelasDoRitmo(av, total) {
  const pontos = Math.max(0, av.acertos - 0.5 * av.extras);
  return { estrelas: estrelas(pontos, total), pontos };
}
