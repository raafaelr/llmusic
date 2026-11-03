// Tablatura desenhada (PDF feito por Guitar Pro, MuseScore, etc.): temos as posições dos números e das linhas.
// Entrada (tudo em pixels, y cresce para baixo):
//   pautas:  [{ linhas: [y1..y6] (1 = corda mais fina, de cima), x0, x1, barras: [x...] }]
//   numeros: [{ x, y, s }]  s = texto do número
import { quantizarPorX, fecharDuracoes } from './quant.js';

export function montarPosicional({ pautas, numeros }, { compasso = null, bpm = null, grade = 0, titulo = '' } = {}) {
  const avisos = [];
  const comp = compasso || [4, 4];
  const tpc = comp[0] * 4 / comp[1];
  const compassos = [];
  let semBarras = 0;
  pautas.forEach((p) => {
    const sp = (p.linhas[5] - p.linhas[0]) / 5;
    const topo = p.linhas[0] - sp, base = p.linhas[5] + sp;
    const dela = numeros.filter((n) => n.y >= topo && n.y <= base && n.x >= p.x0 - 2 && n.x <= p.x1 + 2);
    const notas = [];
    dela.forEach((n) => {
      let melhor = 0, dist = Infinity;
      p.linhas.forEach((ly, i) => { const d = Math.abs(ly - n.y); if (d < dist) { dist = d; melhor = i; } });
      const fret = parseInt(n.s, 10);
      if (dist > sp * 0.6 || !(fret >= 0 && fret <= 24)) return;
      notas.push({ x: n.x, corda: melhor + 1, fret });
    });
    // limites dos compassos
    let bs = [...p.barras].filter((x) => x > p.x0 + sp && x < p.x1 - sp).sort((a, b) => a - b);
    const lim = [p.x0, ...bs, p.x1];
    if (!bs.length) semBarras++;
    for (let i = 0; i + 1 < lim.length; i++) {
      const a = lim[i], b = lim[i + 1];
      if (b - a < sp * 2) continue;
      const aqui = notas.filter((n) => n.x >= a && n.x < b).sort((u, v) => u.x - v.x);
      // junta notas na mesma coluna (x parecido) = acorde
      const colunas = [];
      aqui.forEach((n) => {
        const c = colunas[colunas.length - 1];
        if (c && Math.abs(n.x - c.x) < sp * 0.55) { c.n.push([n.corda, n.fret]); c.x = (c.x * (c.n.length - 1) + n.x) / c.n.length; }
        else colunas.push({ x: n.x, n: [[n.corda, n.fret]] });
      });
      const ts = quantizarPorX(colunas.map((c) => c.x), a, b, sp, tpc, grade);
      const eventos = colunas.map((c, k) => ({ t: ts[k], d: 0.25, n: c.n.sort((u, v) => v[0] - u[0]) }));
      fecharDuracoes(eventos, tpc);
      compassos.push({ acorde: '', eventos: eventos.length ? eventos : [{ t: 0, d: tpc, n: [], silencio: true }] });
    }
  });
  if (semBarras) avisos.push('Em ' + semBarras + ' linha(s) não achei as barras de compasso; tratei a linha toda como um compasso. Confira na revisão.');
  if (!compassos.length || compassos.every((c) => c.eventos[0].silencio)) return { peca: null, avisos: ['Achei as linhas da tablatura, mas nenhum número de casa em cima delas.'] };
  return {
    peca: {
      id: 'imp-' + Date.now().toString(36),
      titulo: titulo || 'Tablatura importada',
      nivel: 'Importada',
      bpm: Math.max(30, Math.min(240, bpm || 80)),
      compasso: comp,
      dica: 'Importada de um PDF. O ritmo foi deduzido da posição dos números: confira e ajuste o andamento.',
      compassos
    },
    avisos
  };
}

// Procura, em imagem em tons de cinza, grupos de 6 linhas horizontais igualmente espaçadas.
// gray: Uint8ClampedArray (0..255), w x h. Devolve [{linhas, x0, x1, barras}].
export function acharPautas(gray, w, h) {
  const escuro = (i) => gray[i] < 200;
  // 1) linhas horizontais: corridas escuras longas
  const cand = [];     // {y, x0, x1}
  for (let y = 0; y < h; y++) {
    let n = 0, primeiro = -1, ultimo = -1;
    for (let x = 0; x < w; x++) if (escuro(y * w + x)) { n++; if (primeiro < 0) primeiro = x; ultimo = x; }
    // a linha pode estar "cortada" por números e barras: conta o total de pontos escuros na fileira
    if (n > w * 0.25 && n > (ultimo - primeiro) * 0.6) cand.push({ y, x0: primeiro, x1: ultimo });
  }
  // 2) junta linhas de espessura > 1 pixel
  const finas = [];
  cand.forEach((c) => {
    const u = finas[finas.length - 1];
    if (u && c.y - u.fim <= 1) { u.fim = c.y; u.x0 = Math.min(u.x0, c.x0); u.x1 = Math.max(u.x1, c.x1); }
    else finas.push({ ini: c.y, fim: c.y, x0: c.x0, x1: c.x1 });
  });
  const ls = finas.map((f) => ({ y: (f.ini + f.fim) / 2, x0: f.x0, x1: f.x1 }));
  // 3) grupos de 6 com espaçamento parecido
  const pautas = [];
  for (let i = 0; i + 5 < ls.length;) {
    const g = ls.slice(i, i + 6);
    const sp = (g[5].y - g[0].y) / 5;
    const regular = g.every((l, k) => k === 0 || Math.abs(l.y - g[k - 1].y - sp) <= sp * 0.25);
    if (regular && sp >= 4) {
      const x0 = Math.min(...g.map((l) => l.x0)), x1 = Math.max(...g.map((l) => l.x1));
      // 4) barras de compasso: colunas escuras entre a 1ª e a 6ª linha
      const barras = [];
      let ult = -10;
      for (let x = x0; x <= x1; x++) {
        let esc = 0, tot = 0;
        for (let y = Math.ceil(g[0].y + 2); y <= g[5].y - 2; y++) { tot++; if (escuro(y * w + x)) esc++; }
        if (tot && esc / tot > 0.9) { if (x - ult > 3) barras.push(x); else barras[barras.length - 1] = (barras[barras.length - 1] + x) / 2; ult = x; }
      }
      pautas.push({ linhas: g.map((l) => l.y), x0, x1, barras });
      i += 6;
    } else i++;
  }
  return pautas;
}
