// Lê tablaturas de PDF. Três caminhos, nesta ordem:
//  1) texto em ASCII (e|--0--3--|)  2) números desenhados sobre 6 linhas (PDF de programas de partitura)
//  3) PDF só de imagem (digitalizado): não dá para ler os números; devolvemos as páginas como imagem para você copiar à mão.
import { lerAscii, acharSistemas } from './ascii.js';
import { montarPosicional, acharPautas } from './posicional.js';

let carregando = null;
function carregarPdfjs() {
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if (!carregando) carregando = new Promise((ok, falha) => {
    const s = document.createElement('script');
    s.src = new URL('../vendor/pdf.min.js', import.meta.url).href;
    s.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('../vendor/pdf.worker.min.js', import.meta.url).href;
      ok(window.pdfjsLib);
    };
    s.onerror = () => falha(new Error('Não consegui carregar o leitor de PDF.'));
    document.head.append(s);
  });
  return carregando;
}

// Texto da página, mantendo as colunas (espaços proporcionais à distância).
function textoDaPagina(itens) {
  const linhas = [];
  itens.filter((i) => i.str && i.str.trim() !== '' || i.str === ' ').forEach((i) => {
    const y = i.transform[5];
    let l = linhas.find((x) => Math.abs(x.y - y) < 2);
    if (!l) { l = { y, it: [] }; linhas.push(l); }
    l.it.push(i);
  });
  linhas.sort((a, b) => b.y - a.y);
  return linhas.map((l) => {
    l.it.sort((a, b) => a.transform[4] - b.transform[4]);
    let s = '', x = null;
    const larg = l.it.reduce((m, i) => (i.str.length ? Math.max(m, i.width / i.str.length) : m), 0) || 5;
    l.it.forEach((i) => {
      const x0 = i.transform[4];
      if (x !== null) s += ' '.repeat(Math.max(0, Math.round((x0 - x) / larg)));
      s += i.str; x = x0 + i.width;
    });
    return s;
  }).join('\n');
}

export async function lerPdf(bytes, opcoes = {}) {
  const lib = await carregarPdfjs();
  const doc = await lib.getDocument({ data: bytes.slice(0) }).promise;
  const avisos = [];
  const paginas = [];
  let textoTudo = '';
  const esc = 2;
  for (let p = 1; p <= doc.numPages && p <= 40; p++) {
    const pag = await doc.getPage(p);
    const tc = await pag.getTextContent();
    paginas.push({ pag, itens: tc.items });
    textoTudo += textoDaPagina(tc.items) + '\n\n';
  }
  // 1) ASCII
  if (acharSistemas(textoTudo).length) {
    const r = lerAscii(textoTudo, opcoes);
    if (r.peca) return { tipo: 'ascii', texto: textoTudo, ...r, avisos: r.avisos };
  }
  // 2) números sobre linhas desenhadas
  const pautas = [], numeros = [];
  let ofs = 0;
  let temTexto = false;
  const imagens = [];
  for (const { pag, itens } of paginas) {
    const vp = pag.getViewport({ scale: esc });
    const cv = document.createElement('canvas');
    cv.width = Math.ceil(vp.width); cv.height = Math.ceil(vp.height);
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height);
    await pag.render({ canvasContext: ctx, viewport: vp }).promise;
    const dados = ctx.getImageData(0, 0, cv.width, cv.height).data;
    const gray = new Uint8ClampedArray(cv.width * cv.height);
    for (let i = 0; i < gray.length; i++) gray[i] = (dados[i * 4] * 0.3 + dados[i * 4 + 1] * 0.59 + dados[i * 4 + 2] * 0.11) | 0;
    const ps = acharPautas(gray, cv.width, cv.height);
    ps.forEach((x) => pautas.push({ ...x, linhas: x.linhas.map((y) => y + ofs), pagina: 0 }));
    itens.forEach((i) => {
      const s = (i.str || '').trim();
      if (!/^\d+(\s+\d+)*$/.test(s)) return;
      temTexto = true;
      const partes = s.split(/\s+/);
      const [px, py] = vp.convertToViewportPoint(i.transform[4], i.transform[5]);
      const h = (i.height || Math.abs(i.transform[3])) * esc;
      const larg = (i.width || 0) * esc;
      partes.forEach((t, k) => {
        const cx = px + (larg * (k + 0.5)) / partes.length;
        numeros.push({ x: partes.length === 1 ? px + larg / 2 : cx, y: py - h * 0.35 + ofs, s: t });
      });
    });
    if (!ps.length) imagens.push(cv.toDataURL('image/jpeg', 0.7));
    ofs += cv.height + 100;
    cv.width = cv.height = 0;
  }
  // as pautas de cada página ficam separadas por "ofs": ajustar x/y já feito acima (y), x é por página
  if (pautas.length && temTexto) {
    const r = montarPosicional({ pautas, numeros }, opcoes);
    if (r.peca) return { tipo: 'posicional', entrada: { pautas, numeros }, ...r, avisos: [...avisos, ...r.avisos] };
    avisos.push(...r.avisos);
  }
  // 3) sem como ler
  const pgImgs = [];
  for (let p = 1; p <= Math.min(doc.numPages, 6); p++) {
    const pag = await doc.getPage(p);
    const vp = pag.getViewport({ scale: 1.5 });
    const cv = document.createElement('canvas'); cv.width = Math.ceil(vp.width); cv.height = Math.ceil(vp.height);
    await pag.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
    pgImgs.push(cv.toDataURL('image/jpeg', 0.7));
  }
  avisos.push(pautas.length
    ? 'Achei as linhas da tablatura, mas o PDF não tem números como texto (é uma imagem). Não consigo ler os números automaticamente.'
    : 'Este PDF não tem tablatura em texto nem linhas que eu consiga ler (parece digitalizado ou é só imagem).');
  return { tipo: 'imagem', peca: null, avisos, imagens: pgImgs };
}
