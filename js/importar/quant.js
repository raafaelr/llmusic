// Quantização: transforma posições (fração do compasso, de 0 a 1) em tempos musicais.
// Usado pelo leitor de ASCII e pelo leitor de PDF. Tablatura em texto/desenho não tem ritmo escrito,
// então o ritmo é deduzido da distância entre as notas e conferido pelo usuário na tela de revisão.
const GRADES = [1, 0.5, 0.25];

export function arred(x) { return Math.round(x * 10000) / 10000; }

// fracs: posições ordenadas (0..1). Devolve tempos (em semínimas) distintos e crescentes dentro de [0, tpc).
export function quantizar(fracs, tpc, grade = 0) {
  if (!fracs.length) return [];
  const erro = (g) => fracs.reduce((s, f) => { const t = f * tpc; return s + Math.abs(t - Math.round(t / g) * g); }, 0) / fracs.length;
  let g = grade;
  if (!g) { g = 0.25; for (const c of GRADES) if (erro(c) <= 0.06 + 0.0001) { g = c; break; } }
  const maxSlot = Math.max(1, Math.round(tpc / g)) - 1;
  const usados = new Set();
  return fracs.map((f) => {
    let s = Math.min(maxSlot, Math.max(0, Math.round((f * tpc) / g)));
    while (usados.has(s) && s < maxSlot) s++;
    usados.add(s);
    return arred(s * g);
  });
}

// Versão para desenhos: procura também o "respiro" (pad) entre a barra de compasso e a primeira nota.
// xs: posições x das notas; ini/fim: barras de compasso; sp: distância entre linhas.
export function quantizarPorX(xs, ini, fim, sp, tpc, grade = 0) {
  if (!xs.length) return [];
  const larg = fim - ini;
  let melhor = null;
  for (const padK of [0.5, 1, 1.5, 2, 2.5]) {
    const pad = padK * sp;
    const util = larg - 2 * pad;
    if (util <= 0) continue;
    const fr = xs.map((x) => Math.min(0.999, Math.max(0, (x - ini - pad) / util)));
    const e = fr.reduce((s, f) => { const t = f * tpc; return s + Math.abs(t - Math.round(t / 0.25) * 0.25); }, 0) / fr.length;
    if (!melhor || e < melhor.e) melhor = { e, fr };
  }
  const fr = melhor ? melhor.fr : xs.map((x) => Math.min(0.999, Math.max(0, (x - ini) / larg)));
  return quantizar(fr, tpc, grade);
}

// Dá a cada evento a duração até o próximo (ou até o fim do compasso).
export function fecharDuracoes(eventos, tpc) {
  eventos.forEach((e, i) => {
    const prox = i + 1 < eventos.length ? eventos[i + 1].t : tpc;
    e.d = arred(Math.max(0.25, Math.min(prox - e.t, tpc - e.t)));
  });
  return eventos;
}
