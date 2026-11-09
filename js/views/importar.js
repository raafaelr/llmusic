// Importar tablatura: PDF (texto ou desenhada), texto ASCII, Guitar Pro, MusicXML, AlphaTex.
// Depois de ler, você revisa e edita (como texto), ouve e guarda em "Minhas tablaturas".
import { Config } from '../db.js';
import { achatar, tempoPorCompasso, validarPacote } from '../pecas.js';
import { tocarNota } from '../violao.js';
import { minhasPecas, salvarMinha, removerMinha, pacoteDasMinhas, instalarPacote, ID_MINHAS } from '../biblioteca.js';
import { lerAscii, paraAscii } from '../importar/ascii.js';
import { ligar, buscaIMSLP } from '../obrapartitura.js';
import { obraPorId } from '../curso/repertorio.js';
import { montarPosicional } from '../importar/posicional.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function baixar(nome, conteudo, tipo) {
  const url = URL.createObjectURL(new Blob([conteudo], { type: tipo }));
  const a = document.createElement('a'); a.href = url; a.download = nome; document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
const COMPASSOS = [[4, 4], [3, 4], [2, 4], [6, 8], [12, 8], [5, 4], [2, 2]];
const GRADES = [[0, 'Automático'], [1, 'Semínima'], [0.5, 'Colcheia'], [0.25, 'Semicolcheia']];
const MODELO = ['e|--------------------------------|', 'B|--------------------------------|', 'G|--------------------------------|', 'D|--------------------------------|', 'A|--------------------------------|', 'E|--------------------------------|'].join('\n');

export function montar(raiz, ir, arg) {
  let encerrada = false;
  const tela = el('main', 'tela importar');
  raiz.append(tela);
  // Quando se chega aqui pela ficha de uma obra (#/importar/sor-op60-1), a
  // tela sabe qual obra é: mostra de qual partitura estamos falando e, ao
  // guardar, liga o arquivo àquela obra sozinho.
  const obra = arg ? obraPorId(arg) : null;
  let ctx = null, saida = null, timers = [];

  function pararSom() { timers.forEach(clearTimeout); timers = []; if (ctx) { ctx.close().catch(() => {}); ctx = null; } }
  async function ouvir(peca, aoFim) {
    pararSom();
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC(); saida = ctx.createGain(); saida.gain.value = 0.8; saida.connect(ctx.destination);
    if (ctx.state === 'suspended') await ctx.resume();
    const seg = 60 / peca.bpm;
    const evs = achatar(peca);
    const t0 = ctx.currentTime + 0.1;
    evs.forEach((e) => e.midis.forEach((m, k) => tocarNota(ctx, saida, m, t0 + e.t * seg + k * 0.018, 0.5)));
    const total = peca.compassos.length * tempoPorCompasso(peca) * seg + 1.5;
    timers.push(setTimeout(() => { pararSom(); aoFim && aoFim(); }, total * 1000));
  }

  // ---------- tela inicial ----------
  async function inicio(msg = '') {
    pararSom();
    tela.innerHTML = ''; tela.className = 'tela importar';
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Partituras');
    voltar.onclick = () => ir('partituras');
    topo.append(voltar, el('h1', 'titulo-tela', 'Importar tablatura'));
    const intro = el('section', 'coluna');
    // Chegou pela ficha de uma obra: diz qual é, e lembra onde achar o arquivo.
    if (obra) {
      voltar.textContent = '‹ ' + obra.titulo;
      voltar.onclick = () => ir('repertorio/' + obra.id);
      const faixa = el('div', 'cartao cartao-destaque importar-obra');
      faixa.append(el('p', 'rotulo-grupo', 'Importando a partitura de'));
      faixa.append(el('h2', 'cartao-nome', obra.titulo));
      faixa.append(el('p', 'cartao-desc', obra.compositor + ' · ' + obra.tom
        + ' · domínio público (autor falecido em ' + obra.morte + ')'));
      faixa.append(el('p', 'cartao-desc', 'Ao guardar, o arquivo fica ligado a esta obra: '
        + 'abrir a obra no Repertório passa a abrir a partitura.'));
      const lk = el('a', 'botao-sec', '↗ Procurar no IMSLP');
      lk.href = buscaIMSLP(obra); lk.target = '_blank'; lk.rel = 'noopener noreferrer';
      faixa.append(lk);
      intro.append(faixa);
    }
    intro.append(el('p', 'dica', 'Escolha um arquivo e o app converte para a tela Partituras, onde você ouve e toca junto. Tudo é feito no seu celular, sem internet.'));
    const lista = el('ul', 'lista-bloco');
    [
      'PDF com tablatura em texto (e|--0--3--|): lê as notas e deduz o ritmo.',
      'PDF feito por Guitar Pro, MuseScore e similares (números sobre 6 linhas): lê as casas e deduz o ritmo.',
      'Arquivos Guitar Pro (.gp3 .gp4 .gp5 .gpx .gp), MusicXML (.xml .musicxml .mxl) e AlphaTex (.tex): leitura completa, com ritmo exato.',
      'Arquivo de texto (.txt) ou texto colado da internet.',
      'PDF só de imagem (digitalizado ou foto): não dá para ler os números sozinho. O app mostra a imagem ao lado de um editor para você copiar.'
    ].forEach((t) => lista.append(el('li', '', t)));
    intro.append(lista);
    const arq = document.createElement('input');
    arq.type = 'file'; arq.hidden = true;
    arq.accept = '.pdf,.txt,.text,.gp,.gp3,.gp4,.gp5,.gpx,.xml,.musicxml,.mxl,.tex,.alphatex,.json';
    const bArq = el('button', 'botao-principal', '📂 Escolher arquivo');
    bArq.onclick = () => arq.click();
    arq.onchange = async () => { const f = arq.files[0]; if (f) await lerArquivo(f); arq.value = ''; };
    const status = el('p', 'dica', msg);
    status.setAttribute('aria-live', 'polite');
    status.id = 'status-importar';
    const ta = el('textarea', 'area-tab');
    ta.rows = 6; ta.placeholder = 'Ou cole aqui uma tablatura em texto...'; ta.setAttribute('aria-label', 'Tablatura em texto');
    ta.spellcheck = false;
    const acoes = el('div', 'acoes');
    const bTxt = el('button', 'botao-sec', 'Ler o texto colado');
    bTxt.onclick = () => {
      const r = lerAscii(ta.value);
      if (!r.peca) { status.textContent = r.avisos.join(' '); return; }
      revisao({ tipo: 'ascii', texto: ta.value, peca: r.peca, avisos: r.avisos });
    };
    const bNovo = el('button', 'botao-sec', '✍ Criar do zero');
    bNovo.onclick = () => revisao({ tipo: 'ascii', texto: 'Minha tablatura\n\n' + MODELO + '\n', peca: lerAscii('Minha tablatura\n\n' + MODELO + '\n').peca || { id: 'imp-' + Date.now().toString(36), titulo: 'Minha tablatura', nivel: 'Criada por mim', bpm: 80, compasso: [4, 4], dica: '', compassos: [{ acorde: '', eventos: [{ t: 0, d: 4, n: [], silencio: true }] }] }, avisos: [], novo: true });
    acoes.append(bTxt, bNovo);
    intro.append(bArq, arq, status, ta, acoes);
    tela.append(topo, intro);

    const sec = el('section', 'coluna');
    sec.append(el('h2', 'rotulo-grupo', 'Minhas tablaturas'));
    const minhas = await minhasPecas();
    if (encerrada) return;
    if (!minhas.length) sec.append(el('p', 'vazio', 'Nada ainda. Importe um arquivo acima.'));
    minhas.forEach((p) => {
      const c = el('div', 'cartao pacote');
      const info = el('div');
      info.append(el('h2', 'cartao-nome', p.titulo), el('p', 'cartao-desc', p.compassos.length + ' compassos · ' + p.bpm + ' BPM · ' + p.compasso.join('/')));
      const bt = el('div', 'acoes-cartao');
      const tocar = el('button', 'botao-sec', '▶ Partituras');
      tocar.onclick = async () => { await Config.guardar('part.peca', ID_MINHAS + ':' + p.id); ir('partituras'); };
      const ed = el('button', 'botao-sec', 'Editar');
      ed.onclick = () => revisao({ tipo: 'ascii', texto: paraAscii(p), peca: p, avisos: [], edicao: true });
      const ex = el('button', 'botao-sec', 'Exportar');
      ex.onclick = () => baixar((p.titulo || 'tablatura').replace(/[^\w\-]+/g, '_') + '.json', JSON.stringify(pacoteDasMinhas([p]), null, 1), 'application/json');
      const rm = el('button', 'botao-sec remover', 'Excluir');
      rm.setAttribute('aria-label', 'Excluir ' + p.titulo);
      rm.onclick = async () => { await removerMinha(p.id); inicio('Excluída: ' + p.titulo); };
      bt.append(tocar, ed, ex, rm);
      c.append(info, bt);
      sec.append(c);
    });
    tela.append(sec);
    window.scrollTo(0, 0);
  }

  // ---------- leitura de arquivos ----------
  async function lerArquivo(f) {
    const st = document.getElementById('status-importar');
    const dizer = (t) => { if (st) st.textContent = t; };
    const nome = f.name || '';
    dizer('Lendo ' + nome + '...');
    try {
      const bytes = new Uint8Array(await f.arrayBuffer());
      if (/\.pdf$/i.test(nome)) {
        const { lerPdf } = await import('../importar/pdf.js');
        const r = await lerPdf(bytes);
        if (r.tipo === 'imagem') return revisao({ tipo: 'imagem', imagens: r.imagens, avisos: r.avisos, texto: 'Minha tablatura\n\n' + MODELO + '\n', peca: lerAscii('Minha tablatura\n\n' + MODELO + '\n').peca });
        return revisao(r);
      }
      if (/\.(txt|text)$/i.test(nome)) {
        const texto = new TextDecoder().decode(bytes);
        const r = lerAscii(texto);
        if (!r.peca) return dizer(r.avisos.join(' '));
        return revisao({ tipo: 'ascii', texto, peca: r.peca, avisos: r.avisos });
      }
      if (/\.json$/i.test(nome)) {
        const obj = JSON.parse(new TextDecoder().decode(bytes));
        const n = await instalarPacote(obj);
        return inicio('✓ Pacote instalado (' + n + (n === 1 ? ' peça' : ' peças') + '). Veja em Partituras.');
      }
      const gp = await import('../importar/gp.js');
      const score = await gp.lerPartitura(bytes, nome);
      const faixas = gp.faixasTocaveis(score);
      if (!faixas.length) return dizer('Este arquivo não tem nenhuma faixa de violão de 6 cordas.');
      const conv = (i) => gp.faixaParaPeca(score, i);
      const { peca, avisos } = conv(faixas[0].indice);
      revisao({ tipo: 'gp', score, faixas, faixa: faixas[0].indice, conv, peca, avisos });
    } catch (e) {
      dizer('Não consegui ler este arquivo: ' + (e && e.message ? e.message : 'formato inválido') + '.');
    }
  }

  // ---------- revisão e edição ----------
  function revisao(fonte) {
    pararSom();
    tela.innerHTML = ''; tela.className = 'tela importar revisao';
    let { peca } = fonte;
    let avisos = fonte.avisos || [];
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Cancelar');
    voltar.onclick = () => inicio();
    topo.append(voltar, el('h1', 'titulo-tela', fonte.novo ? 'Nova tablatura' : fonte.edicao ? 'Editar' : 'Revisar'));
    tela.append(topo);

    if (fonte.tipo === 'imagem') {
      const box = el('section', 'imagens-pdf');
      box.append(el('p', 'dica', 'Não consigo ler os números desta imagem sozinho. Veja a página abaixo e copie as notas no editor (uma linha por corda, de cima para baixo: e B G D A E).'));
      (fonte.imagens || []).forEach((src, i) => { const im = el('img', 'pagina-pdf'); im.src = src; im.alt = 'Página ' + (i + 1) + ' do PDF'; box.append(im); });
      tela.append(box);
    }

    const avisoEl = el('ul', 'avisos');
    const dr = () => { avisoEl.innerHTML = ''; avisos.forEach((a) => avisoEl.append(el('li', '', a))); };
    dr();
    tela.append(avisoEl);

    const cmp = el('section', 'form-revisao');
    const campo = (rot, c) => { const l = el('label', 'campo'); l.append(el('span', 'rot-campo', rot), c); return l; };
    const inTit = el('input'); inTit.type = 'text'; inTit.value = peca.titulo; inTit.maxLength = 80;
    const inBpm = el('input'); inBpm.type = 'number'; inBpm.min = 30; inBpm.max = 240; inBpm.value = peca.bpm; inBpm.inputMode = 'numeric';
    const seCmp = el('select');
    COMPASSOS.forEach(([a, b]) => { const o = el('option', '', a + '/' + b); o.value = a + '/' + b; if (peca.compasso[0] === a && peca.compasso[1] === b) o.selected = true; seCmp.append(o); });
    if (![...seCmp.options].some((o) => o.selected)) { const o = el('option', '', peca.compasso.join('/')); o.value = peca.compasso.join('/'); o.selected = true; seCmp.append(o); }
    const seGrade = el('select');
    GRADES.forEach(([v, n]) => { const o = el('option', '', n); o.value = v; seGrade.append(o); });
    cmp.append(campo('Título', inTit), campo('Andamento (BPM)', inBpm));
    if (fonte.tipo !== 'gp') cmp.append(campo('Compasso', seCmp), campo('Ritmo das notas', seGrade));
    if (fonte.tipo === 'gp' && fonte.faixas.length > 1) {
      const seF = el('select');
      fonte.faixas.forEach((f) => { const o = el('option', '', f.nome); o.value = f.indice; if (f.indice === fonte.faixa) o.selected = true; seF.append(o); });
      seF.onchange = () => { fonte.faixa = parseInt(seF.value, 10); const r = fonte.conv(fonte.faixa); peca = r.peca; avisos = r.avisos; inTit.value = peca.titulo; inBpm.value = peca.bpm; atualizarTexto(); dr(); };
      cmp.append(campo('Faixa', seF));
    }
    tela.append(cmp);

    const ta = el('textarea', 'area-tab');
    ta.rows = 14; ta.spellcheck = false; ta.setAttribute('aria-label', 'Tablatura em texto (editável)');
    const msg = el('p', 'dica', '');
    msg.setAttribute('aria-live', 'polite');
    function atualizarTexto() { ta.value = fonte.tipo === 'gp' || fonte.edicao ? paraAscii(peca) : (fonte.texto || paraAscii(peca)); }
    atualizarTexto();
    tela.append(el('h2', 'rotulo-grupo', 'Tablatura (você pode editar o texto)'), el('p', 'dica', 'Cada linha é uma corda (e B G D A E). Cada 3 caracteres = um passo de tempo. Mude os números e toque em "Aplicar".'), ta, msg);

    let editado = false;
    ta.oninput = () => { editado = true; };
    function reler(origem) {
      if (origem === 'texto' && !editado && (fonte.tipo === 'gp' || fonte.edicao)) {
        // nada foi editado: mantém o ritmo exato do original, só aplica título e andamento
        peca.titulo = inTit.value.trim() || peca.titulo;
        peca.bpm = Math.max(30, Math.min(240, parseInt(inBpm.value, 10) || peca.bpm));
        msg.textContent = '✓ ' + peca.compassos.length + ' compassos.';
        return true;
      }
      if (origem === 'texto' && !editado && fonte.tipo === 'posicional') origem = 'entrada';
      const c = seCmp.value.split('/').map((x) => parseInt(x, 10));
      const opc = { compasso: c, bpm: parseInt(inBpm.value, 10) || peca.bpm, grade: parseFloat(seGrade.value) || 0 };
      let r;
      if (origem === 'texto' || fonte.tipo === 'ascii' || fonte.tipo === 'imagem' || fonte.tipo === 'gp') { if (origem === 'texto') fonte.edicao = true; r = lerAscii(ta.value, opc); }
      else r = montarPosicional(fonte.entrada, { ...opc, titulo: inTit.value });
      if (!r.peca) { msg.textContent = r.avisos.join(' '); return false; }
      r.peca.id = peca.id; r.peca.titulo = inTit.value.trim() || r.peca.titulo;
      r.peca.nivel = peca.nivel || 'Importada';
      peca = r.peca; avisos = r.avisos; dr();
      msg.textContent = '✓ Aplicado: ' + peca.compassos.length + ' compassos.';
      return true;
    }
    const acoes = el('div', 'acoes');
    const bAp = el('button', 'botao-sec', 'Aplicar');
    bAp.onclick = () => { reler('texto'); };
    [seCmp, seGrade].forEach((s) => { s.onchange = () => { if (fonte.tipo === 'posicional') { reler('entrada'); atualizarTexto(); } else if (reler('texto')) {/* mantém o texto */} }; });
    inBpm.onchange = () => { const b = Math.max(30, Math.min(240, parseInt(inBpm.value, 10) || peca.bpm)); inBpm.value = b; peca.bpm = b; };
    const bOuvir = el('button', 'botao-sec', '▶ Ouvir');
    let tocando = false;
    bOuvir.onclick = () => {
      if (tocando) { pararSom(); tocando = false; bOuvir.textContent = '▶ Ouvir'; return; }
      if (!reler('texto')) return;
      tocando = true; bOuvir.textContent = '■ Parar';
      ouvir(peca, () => { tocando = false; bOuvir.textContent = '▶ Ouvir'; });
    };
    const bTxt = el('button', 'botao-sec', 'Baixar como texto');
    bTxt.onclick = () => baixar((inTit.value || 'tablatura').replace(/[^\w\-]+/g, '_') + '.txt', ta.value, 'text/plain');
    acoes.append(bAp, bOuvir, bTxt);
    tela.append(acoes);

    const fim = el('div', 'acoes acoes-licao');
    async function guardar(ir_) {
      if (!reler('texto')) return;
      peca.titulo = inTit.value.trim() || 'Tablatura sem nome';
      peca.bpm = Math.max(30, Math.min(240, parseInt(inBpm.value, 10) || 80));
      if (fonte.novo || fonte.tipo === 'imagem') peca.nivel = 'Criada por mim';
      const v = validarPacote({ formato: 'llmusic-pacote', versao: 1, id: 'minhas', nome: 'x', pecas: [peca] });
      if (!v.ok) { msg.textContent = 'Não dá para guardar: ' + v.erro; return; }
      try {
        const idCompleto = await salvarMinha(peca);
        if (obra) await ligar(obra.id, idCompleto);
        if (ir_) { await Config.guardar('part.peca', idCompleto); ir('partituras'); }
        else if (obra) inicio('✓ Guardada e ligada à obra "' + obra.titulo + '".');
        else inicio('✓ Guardada em Minhas tablaturas: ' + peca.titulo);
      } catch (e) { msg.textContent = 'Não consegui guardar: ' + e.message; }
    }
    const bG = el('button', 'botao-sec', 'Guardar');
    bG.onclick = () => guardar(false);
    const bGT = el('button', 'botao-principal', 'Guardar e tocar');
    bGT.onclick = () => guardar(true);
    fim.append(bG, bGT);
    tela.append(fim);
    window.scrollTo(0, 0);
  }

  inicio();
  return () => { encerrada = true; pararSom(); };
}
