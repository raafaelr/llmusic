// Tablatura em texto (ASCII), no estilo que se vê em sites de cifras:
//   e|--0--3--|
//   B|--1-----|
// Lê o texto, acha os grupos de 6 linhas, separa os compassos pelas barras "|" e deduz o ritmo pela posição das notas.
import { quantizar, fecharDuracoes, arred } from './quant.js';

const CORPO = /^[-0-9hpbrsx\/\\~()<>*^.:|vtTSsMmPpHhBb=_ ]+$/;
function limparLinha(l) { return l.replace(/\t/g, '    ').replace(/[–—−]/g, '-').replace(/\s+$/, ''); }

// Devolve { rotulo, corpo } se a linha parece uma linha de tablatura.
function linhaTab(bruta) {
  const l = limparLinha(bruta);
  const m = l.match(/^\s*([a-gA-G][#b]?)?\s*([|:]?)(.*)$/);
  if (!m) return null;
  const corpo = (m[2] || '') + m[3];
  if (corpo.length < 8) return null;
  if (!CORPO.test(corpo)) return null;
  const tracos = (corpo.match(/-/g) || []).length;
  if (tracos < corpo.length * 0.35 || tracos < 4) return null;
  if (!m[1] && !/^[|:]/.test(corpo) && !/\|\s*$/.test(corpo)) return null;
  return { rotulo: m[1] || '', corpo };
}

// Separa o texto em "sistemas": 6 linhas seguidas de tablatura.
export function acharSistemas(texto) {
  const linhas = texto.split(/\r?\n/);
  const sistemas = [];
  let atual = [];
  const fechar = () => {
    if (atual.length >= 6) {
      for (let i = 0; i + 6 <= atual.length; i += 6) sistemas.push(atual.slice(i, i + 6).map((x) => x.corpo));
    }
    atual = [];
  };
  linhas.forEach((l) => { const t = linhaTab(l); if (t) atual.push(t); else fechar(); });
  fechar();
  return sistemas;
}

export function lerAscii(texto, { compasso = null, bpm = null, grade = 0 } = {}) {
  const avisos = [];
  const sistemas = acharSistemas(texto);
  if (!sistemas.length) return { peca: null, avisos: ['Não achei nenhuma tablatura de 6 linhas neste texto.'] };

  // compasso e andamento escritos no texto (ex.: "3/4", "= 80")
  let comp = compasso;
  if (!comp) {
    const m = texto.match(/(?:^|\s)([2-9]|1[0-6])\s*\/\s*(2|4|8|16)(?=\s|$)/m);
    comp = m ? [parseInt(m[1], 10), parseInt(m[2], 10)] : [4, 4];
  }
  let andamento = bpm;
  if (!andamento) { const m = texto.match(/(?:bpm|tempo|andamento)\s*[:=]?\s*(\d{2,3})|=\s*(\d{2,3})\b/i); if (m) andamento = parseInt(m[1] || m[2], 10); }
  const tpc = comp[0] * 4 / comp[1];

  const compassos = [];
  sistemas.forEach((sis) => {
    const L = Math.max(...sis.map((s) => s.length));
    const cs = sis.map((s) => s.padEnd(L, '-'));
    // colunas com "|" em pelo menos 4 das 6 linhas
    const barras = [];
    for (let c = 0; c < L; c++) if (cs.filter((s) => s[c] === '|').length >= 4) barras.push(c);
    const limites = [];
    let ini = -1;
    const pontos = barras.length && barras[0] === 0 ? barras : [-1, ...barras];
    if (pontos[pontos.length - 1] < L - 1) pontos.push(L);
    for (let i = 0; i + 1 < pontos.length; i++) { ini = pontos[i] + 1; const fim = pontos[i + 1]; if (fim > ini) limites.push([ini, fim]); }
    limites.forEach(([a, b]) => {
      const mapa = new Map();      // coluna -> [[corda, casa]]
      cs.forEach((s, idx) => {
        const trecho = s.slice(a, b);
        const re = /\d+/g; let m;
        while ((m = re.exec(trecho))) {
          const fret = parseInt(m[0], 10);
          if (fret > 24) { avisos.push('Ignorei o número ' + fret + ' (casa maior que 24).'); continue; }
          const col = m.index;
          if (!mapa.has(col)) mapa.set(col, []);
          mapa.get(col).push([idx + 1, fret]);
        }
      });
      const cols = [...mapa.keys()].sort((x, y) => x - y);
      const len = b - a;
      const ts = quantizar(cols.map((c) => c / len), tpc, grade);
      const eventos = cols.map((c, i) => ({ t: ts[i], d: 0.25, n: mapa.get(c).sort((p, q) => q[0] - p[0]) }));
      fecharDuracoes(eventos, tpc);
      compassos.push({ acorde: '', eventos: eventos.length ? eventos : [{ t: 0, d: tpc, n: [], silencio: true }] });
    });
  });
  if (!compassos.length) return { peca: null, avisos: ['Não achei compassos com notas.'] };
  const primeira = texto.split(/\r?\n/).map((l) => l.trim()).find((l) => l && !linhaTab(l) && l.length < 60);
  return {
    peca: {
      id: 'imp-' + Date.now().toString(36),
      titulo: primeira || 'Tablatura importada',
      nivel: 'Importada',
      bpm: Math.max(30, Math.min(240, andamento || 80)),
      compasso: comp,
      dica: 'Importada de um texto. O ritmo foi deduzido da posição das notas: confira e ajuste o andamento.',
      compassos
    },
    avisos
  };
}

// Escreve uma peça como tablatura ASCII (cada passo = 3 colunas), para editar como texto ou exportar.
export function paraAscii(peca, porLinha = 3) {
  const tpc = peca.compasso[0] * 4 / peca.compasso[1];
  const todos = peca.compassos.flatMap((c) => c.eventos.map((e) => e.t));
  let g = 0.25;
  for (const c of [1, 0.5, 0.25]) if (todos.every((t) => Math.abs(t / c - Math.round(t / c)) < 1e-6)) { g = c; break; }
  const passos = Math.max(1, Math.round(tpc / g));
  const nomes = ['e', 'B', 'G', 'D', 'A', 'E'];
  const saida = [];
  if (peca.titulo) saida.push(peca.titulo, '');
  for (let i = 0; i < peca.compassos.length; i += porLinha) {
    const linhas = nomes.map((n) => n + '|');
    for (let m = i; m < Math.min(peca.compassos.length, i + porLinha); m++) {
      const cel = Array.from({ length: 6 }, () => Array.from({ length: passos }, () => '---'));
      peca.compassos[m].eventos.forEach((e) => {
        const s = Math.min(passos - 1, Math.round(e.t / g));
        e.n.forEach(([c, f]) => { cel[c - 1][s] = String(f).padEnd(3, '-'); });
      });
      for (let k = 0; k < 6; k++) linhas[k] += cel[k].join('') + '|';
    }
    saida.push(...linhas, '');
  }
  return saida.join('\n');
}
