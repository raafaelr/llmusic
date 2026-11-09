// Renderizador de blocos das aulas.
//
// Uma aula do curso é uma lista de "blocos". Cada bloco é um objeto simples que diz
// o que mostrar: um parágrafo, uma pauta, um diagrama de acorde, um exercício...
// Este arquivo transforma cada bloco num pedaço de tela de verdade, com som,
// microfone e interação quando o bloco pede.
//
// Quem usa: js/views/aula.js (a tela de aula). Para criar um conteúdo novo basta
// escrever os blocos; nenhuma tela precisa ser alterada.

import { Config } from '../db.js';
import { criarTocador, midiDaPosicao, soaComoEscrito, CORDAS_MIDI } from './audio.js';
import { desenharPauta, compassosDe, midiDe, nomeDaNota, VALOR, NOME_FIGURA } from '../musica/notacao.js';
import { desenharTab, eventosDaTab } from '../musica/tablatura.js';
import * as D from '../musica/diagramas.js';
import * as TV from '../musica/teoriavis.js';
import { criarBraco } from '../bracosvg.js';
import { Metronomo, andamento } from '../metronome.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi } from '../pitch.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { botaoIcone } from '../icones.js';

const NS = 'http://www.w3.org/2000/svg';
function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function svgNovo(classe, rotulo) {
  const s = document.createElementNS(NS, 'svg');
  s.setAttribute('class', classe || '');
  s.setAttribute('role', 'img');
  if (rotulo) s.setAttribute('aria-label', rotulo);
  return s;
}
// Diagramas que são notação musical de verdade levam o filete dourado;
// os outros desenhos ficam só com a moldura.
const NOTACAO = new Set(['pauta-svg', 'tab-aula', 'diag-figuras', 'diag-compasso']);

function figura(svg, legenda, extra) {
  const classe = (svg && svg.getAttribute && svg.getAttribute('class')) || '';
  const ehNotacao = classe.split(/\s+/).some((c) => NOTACAO.has(c));
  const f = el('figure', 'bloco-fig emoldurado' + (ehNotacao ? ' notacao' : ''));
  f.append(svg);
  if (extra) f.append(extra);
  if (legenda) f.append(el('figcaption', 'legenda', legenda));
  return f;
}

// ---------------------------------------------------------------------------
// Fábrica: cria um renderizador ligado a uma tela (com áudio e microfone próprios)
// ---------------------------------------------------------------------------
// ctx = { aulaId, ir, aoResponder(certo), ativo() }
export function criarRenderizador(ctx = {}) {
  const tocador = criarTocador();
  let metro = null;
  let mic = null;
  let aoOuvir = null;
  let contando = false;

  function contarTempo() { if (!contando) { contando = true; comecarPratica(); } }

  async function pararMic() {
    aoOuvir = null;
    if (mic) {
      if (mic.ouvindo) mic.parar();
      if (mic.ctx) mic.ctx.close().catch(() => {});
      mic = null;
    }
  }
  function pararMetro() { if (metro) { metro.parar(); metro = null; } }

  async function fechar() {
    tocador.fechar();
    pararMetro();
    await pararMic();
    if (contando) { contando = false; await pararPratica(); }
  }
  function silenciar() { tocador.parar(); pararMetro(); pararMic(); }

  const chaveCheck = (b) => 'curso.check.' + (ctx.aulaId || 'x') + '.' + (b.chave || b.titulo || '0');

  // -------------------------------------------------------------------------
  // blocos de texto
  // -------------------------------------------------------------------------
  function textoRico(pai, txt) {
    // permite *destaque* dentro do parágrafo, sem usar HTML solto
    String(txt).split(/(\*[^*]+\*)/).forEach((parte) => {
      if (parte.startsWith('*') && parte.endsWith('*') && parte.length > 2) {
        pai.append(el('strong', '', parte.slice(1, -1)));
      } else if (parte) pai.append(document.createTextNode(parte));
    });
    return pai;
  }

  // -------------------------------------------------------------------------
  // pauta com botão de ouvir
  // -------------------------------------------------------------------------
  function blocoPauta(b) {
    const svg = svgNovo('pauta-svg', b.legenda || 'Partitura');
    const compassos = b.txt ? compassosDe(b.txt) : (b.compassos || []);
    const opc = {
      compassos, armadura: b.armadura || 0, formula: b.formula === null ? null : (b.formula || [4, 4]),
      nomes: !!b.nomes, dedos: !!b.dedos, oitavaAbaixo: b.oitavaAbaixo !== false,
      numerar: !!b.numerar, quebrar: b.quebrar || 0, semClave: !!b.semClave
    };
    desenharPauta(svg, opc);
    let botoes = null;
    if (b.tocar !== false) {
      botoes = el('div', 'bloco-botoes');
      const bt = botaoIcone('botao-sec', 'tocar', 'Ouvir');
      const eventos = compassos.flatMap((c) => (c.notas || []).map((n) => ({
        midis: n.pausa ? [] : (n.midis || [n.midi]).map(soaComoEscrito),
        fig: n.fig, ponto: n.ponto, pausa: n.pausa
      })));
      let idx = 0;
      bt.onclick = async () => {
        if (tocador.tocando()) { tocador.parar(); bt.textContent = '▶ Ouvir'; return; }
        silenciar(); contarTempo();
        bt.textContent = '■ Parar';
        idx = 0;
        await tocador.sequencia(eventos, {
          bpm: b.bpm || 72,
          aoTocar: (i) => {
            svg.querySelectorAll('.nota-g.alvo').forEach((n) => n.classList.remove('alvo'));
            if (i < 0) return;
            const todas = svg.querySelectorAll('.nota-g');
            if (todas[i]) todas[i].classList.add('alvo');
          }
        });
        bt.textContent = '▶ Ouvir';
      };
      botoes.append(bt);
      if (b.bpm) botoes.append(el('span', 'bloco-bpm', b.bpm + ' BPM'));
    }
    return figura(svg, b.legenda, botoes);
  }

  // -------------------------------------------------------------------------
  // tablatura
  // -------------------------------------------------------------------------
  function blocoTab(b) {
    const svg = svgNovo('tab-aula', b.legenda || 'Tablatura');
    desenharTab(svg, { compassos: b.compassos || [], numerar: !!b.numerar, quebrar: b.quebrar || 0 });
    let botoes = null;
    if (b.tocar !== false) {
      botoes = el('div', 'bloco-botoes');
      const bt = botaoIcone('botao-sec', 'tocar', 'Ouvir');
      const eventos = eventosDaTab(b.compassos || []);
      bt.onclick = async () => {
        if (tocador.tocando()) { tocador.parar(); bt.textContent = '▶ Ouvir'; return; }
        silenciar(); contarTempo(); bt.textContent = '■ Parar';
        await tocador.sequencia(eventos, {
          bpm: b.bpm || 70,
          aoTocar: (i) => {
            svg.querySelectorAll('.tabl-nota.alvo').forEach((n) => n.classList.remove('alvo'));
            const todas = svg.querySelectorAll('.tabl-nota');
            if (i >= 0 && todas[i]) todas[i].classList.add('alvo');
          }
        });
        bt.textContent = '▶ Ouvir';
      };
      botoes.append(bt);
    }
    return figura(svg, b.legenda, botoes);
  }

  // -------------------------------------------------------------------------
  // braço do violão
  // -------------------------------------------------------------------------
  function blocoBraco(b) {
    const svg = svgNovo('braco-svg', b.legenda || 'Braço do violão');
    const br = criarBraco(svg, { casas: b.casas || 12 });
    (b.mudas || []).forEach((c) => br.marcaMuda(c));
    if (b.pestana) br.barra(b.pestana.casa, b.pestana.de, b.pestana.ate);
    (b.notas || []).forEach((n) => br.ponto(n.corda, n.casa, n.classe || 'neutro', n.rotulo || ''));
    let botoes = null;
    if (b.tocar) {
      botoes = el('div', 'bloco-botoes');
      const bt = botaoIcone('botao-sec', 'tocar', (b.rotuloTocar || 'Ouvir').replace(/^▶ /, ''));
      const ev = (b.notas || []).map((n) => ({ midi: midiDaPosicao(n.corda, n.casa), fig: b.fig || 'seminima' }));
      bt.onclick = () => {
        silenciar(); contarTempo();
        if (b.juntas) tocador.acorde(ev.map((e) => e.midi));
        else tocador.sequencia(ev, { bpm: b.bpm || 90 });
      };
      botoes.append(bt);
    }
    return figura(svg, b.legenda, botoes);
  }

  // -------------------------------------------------------------------------
  // acordes
  // -------------------------------------------------------------------------
  function umAcorde(a) {
    const caixa = el('div', 'acorde-caixa');
    const svg = svgNovo('diag-acorde', 'Acorde ' + (a.nome || ''));
    D.diagramaAcorde(svg, a);
    caixa.append(svg);
    const bt = botaoIcone('botao-sec sm', 'tocar');
    bt.setAttribute('aria-label', 'Ouvir ' + (a.nome || 'o acorde'));
    const midis = (a.cordas || []).map((casa, k) => (casa < 0 ? null : midiDaPosicao(6 - k, casa))).filter((m) => m !== null);
    bt.onclick = () => { silenciar(); contarTempo(); tocador.acorde(midis); };
    caixa.append(bt);
    return caixa;
  }
  function blocoAcorde(b) {
    const lista = b.lista || [b];
    const grade = el('div', 'acordes-grade');
    lista.forEach((a) => grade.append(umAcorde(a)));
    return figura(grade, b.legenda);
  }

  // -------------------------------------------------------------------------
  // metrônomo embutido
  // -------------------------------------------------------------------------
  function blocoMetronomo(b) {
    const caixa = el('div', 'bloco-metro');
    const titulo = el('p', 'rotulo-grupo', b.titulo || 'Metrônomo da aula');
    const info = el('p', 'dica', '');
    const luzes = el('div', 'metro-luzes');
    let bpm = b.bpm || 60;
    const compasso = b.compasso || '4/4';
    const n = Number(compasso.split('/')[0]);
    const pontos = [];
    for (let i = 0; i < n; i++) { const p = el('span', 'metro-luz' + (i === 0 ? ' forte' : '')); pontos.push(p); luzes.append(p); }
    const linha = el('div', 'linha-botoes');
    const menos = botaoIcone('botao-sec sm', 'menos');
    const mais = botaoIcone('botao-sec sm', 'mais');
    const liga = botaoIcone('botao-principal', 'tocar', 'Começar');
    const mostrar = () => { info.textContent = bpm + ' BPM · ' + compasso + ' · ' + andamento(bpm); };
    menos.onclick = () => { bpm = Math.max(30, bpm - 4); mostrar(); if (metro) metro.bpm = bpm; };
    mais.onclick = () => { bpm = Math.min(240, bpm + 4); mostrar(); if (metro) metro.bpm = bpm; };
    liga.onclick = async () => {
      if (metro) { pararMetro(); liga.textContent = '▶ Começar'; pontos.forEach((p) => p.classList.remove('acesa')); return; }
      silenciar(); contarTempo();
      metro = new Metronomo((pulso) => {
        pontos.forEach((p, i) => p.classList.toggle('acesa', i === pulso));
      });
      metro.bpm = bpm; metro.mudarCompasso(compasso);
      try { await metro.iniciar(); liga.textContent = '■ Parar'; }
      catch (e) { info.textContent = 'Não consegui ligar o som.'; metro = null; }
    };
    mostrar();
    linha.append(menos, mais, liga);
    caixa.append(titulo, info, luzes, linha);
    if (b.x) caixa.append(el('p', 'legenda', b.x));
    return caixa;
  }

  // -------------------------------------------------------------------------
  // exercício com microfone: toque estas notas no violão
  // -------------------------------------------------------------------------
  function blocoTocar(b) {
    const caixa = el('div', 'bloco-tocar');
    const seq = (b.seq || []).map((p) => (Array.isArray(p)
      ? { corda: p[0], casa: p[1], midi: midiDaPosicao(p[0], p[1]) }
      : { ...p, midi: p.midi !== undefined ? p.midi : midiDaPosicao(p.corda, p.casa) }));
    let passo = 0, bloqueioMidi = -1, bloqueioAte = 0;
    const trilha = el('p', 'seq-ex', '');
    const feed = el('p', 'feedback', '');
    feed.setAttribute('aria-live', 'polite');
    const bt = botaoIcone('botao-sec', 'microfone', b.rotulo || 'Conferir no violão');

    function pintar() {
      trilha.innerHTML = '';
      seq.forEach((n, i) => {
        const rot = n.rotulo || ((n.casa === 0 ? '○' : n.casa) + '/' + n.corda + 'ª');
        trilha.append(el('span', 'seq-nota' + (i < passo ? ' feito' : i === passo ? ' atual' : ''), rot));
      });
    }
    function ouvir(freq) {
      if (!freq || passo >= seq.length) return;
      const r = notaMaisProxima(freq);
      if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
      const alvo = seq[passo];
      if (r.midi === alvo.midi && Math.abs(r.cents) <= 35) {
        bloqueioMidi = r.midi; bloqueioAte = performance.now() + 1200;
        passo++; pintar();
        if (passo >= seq.length) {
          feed.textContent = '✓ Tudo certo! ' + (b.fim || 'Repita algumas vezes até sair natural.');
          feed.className = 'feedback certo';
          if (ctx.aoResponder) ctx.aoResponder(true, 'tocar');
        } else { feed.textContent = '✓ boa'; feed.className = 'feedback certo'; }
      } else if (r.midi !== bloqueioMidi) {
        const nm = nomeDoMidi(alvo.midi);
        feed.textContent = 'Procure ' + (alvo.descricao || (alvo.corda + 'ª corda' + (alvo.casa === 0 ? ' solta' : ', casa ' + alvo.casa))) + ' (' + nm.pt + nm.oitava + ').';
        feed.className = 'feedback errado';
      }
    }
    bt.onclick = async () => {
      if (mic && aoOuvir === ouvir) { await pararMic(); bt.textContent = '🎤 ' + (b.rotulo || 'Conferir no violão'); return; }
      silenciar(); await pararMic();
      passo = 0; bloqueioMidi = -1; pintar(); feed.textContent = '';
      aoOuvir = ouvir;
      mic = new Afinador((f) => { if (aoOuvir) aoOuvir(f); });
      try { await mic.iniciar(); contarTempo(); bt.textContent = '■ Parar'; }
      catch (e) {
        feed.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações do navegador.';
        feed.className = 'feedback errado'; mic = null; aoOuvir = null;
      }
    };
    pintar();
    caixa.append(el('p', 'rotulo-grupo', b.titulo || 'No violão'), trilha, feed, bt);
    if (b.x) caixa.append(el('p', 'legenda', b.x));
    return caixa;
  }

  // -------------------------------------------------------------------------
  // lista de prática que fica marcada (fica guardada no aparelho)
  // -------------------------------------------------------------------------
  function blocoCheck(b) {
    const caixa = el('fieldset', 'bloco-check');
    caixa.append(el('legend', 'rotulo-grupo', b.titulo || 'Pratique'));
    const chave = chaveCheck(b);
    Config.obter(chave, []).then((marcados) => {
      if (ctx.ativo && !ctx.ativo()) return;
      b.itens.forEach((t, i) => {
        const rot = el('label', 'item-check');
        const cx = document.createElement('input');
        cx.type = 'checkbox'; cx.checked = !!marcados[i];
        cx.onchange = async () => {
          const m = await Config.obter(chave, []);
          m[i] = cx.checked;
          await Config.guardar(chave, m);
          if (ctx.aoMarcar) ctx.aoMarcar();
        };
        rot.append(cx, el('span', '', t));
        caixa.append(rot);
      });
    });
    return caixa;
  }

  // -------------------------------------------------------------------------
  // exercícios interativos
  // -------------------------------------------------------------------------
  // tipos:
  //  'identificar-nota'  → mostra uma nota na pauta, o aluno escolhe o nome
  //  'figura'            → mostra uma figura, o aluno escolhe quantos tempos vale
  //  'ouvido'            → toca um som, o aluno escolhe o que ouviu
  //  'montar'            → arrasta/escolhe as notas pedidas (versão por toque)
  function blocoExercicio(b) {
    const caixa = el('div', 'bloco-exerc');
    caixa.append(el('p', 'rotulo-grupo', b.titulo || 'Exercício'));
    if (b.x) caixa.append(el('p', 'texto-bloco', b.x));
    const area = el('div', 'exerc-area');
    const opc = el('div', 'exerc-opcoes');
    const feed = el('p', 'feedback', '');
    feed.setAttribute('aria-live', 'polite');
    const placar = el('p', 'dica', '');
    caixa.append(area, opc, feed, placar);
    let acertos = 0, total = 0, atual = null, travado = false;
    const alvo = b.rodadas || 8;

    const escolher = (lista) => lista[Math.floor(Math.random() * lista.length)];

    function proxima() {
      travado = false;
      area.innerHTML = ''; opc.innerHTML = ''; feed.textContent = ''; feed.className = 'feedback';
      if (total >= alvo) return fim();
      placar.textContent = 'Acertos: ' + acertos + ' de ' + total + ' · faltam ' + (alvo - total) + (total ? '' : '');

      if (b.tipo === 'identificar-nota') {
        const pool = (b.notas || ['e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5']);
        const alvoTxt = escolher(pool);
        const midi = midiDe(alvoTxt);
        atual = nomeDaNota(midi);
        const svg = svgNovo('pauta-svg', 'Nota para identificar');
        desenharPauta(svg, { compassos: [{ notas: [{ midi, fig: 'semibreve' }] }], formula: null, oitavaAbaixo: true });
        area.append(svg);
        const nomes = [...new Set(pool.map((t) => nomeDaNota(midiDe(t))))];
        responder(nomes, atual);
        return;
      }
      if (b.tipo === 'figura') {
        const figs = b.figuras || ['semibreve', 'minima', 'seminima', 'colcheia'];
        const f = escolher(figs);
        atual = VALOR[f] >= 1 ? (VALOR[f] === 1 ? '1 tempo' : VALOR[f] + ' tempos') : (VALOR[f] === 0.5 ? '½ tempo' : '¼ de tempo');
        const svg = svgNovo('diag-figuras', 'Figura musical');
        svg.setAttribute('viewBox', '0 0 200 130');
        D.figuraSolta(svg, 100, 80, f, { pausa: !!b.pausas });
        area.append(svg);
        responder(['4 tempos', '2 tempos', '1 tempo', '½ tempo', '¼ de tempo'], atual);
        return;
      }
      if (b.tipo === 'nome-figura') {
        const figs = b.figuras || ['semibreve', 'minima', 'seminima', 'colcheia', 'semicolcheia'];
        const f = escolher(figs);
        atual = NOME_FIGURA[f];
        const svg = svgNovo('diag-figuras', 'Figura musical');
        svg.setAttribute('viewBox', '0 0 200 130');
        D.figuraSolta(svg, 100, 80, f, { pausa: !!b.pausas });
        area.append(svg);
        responder(figs.map((x) => NOME_FIGURA[x]), atual);
        return;
      }
      if (b.tipo === 'corda') {
        const cordas = b.cordas || [1, 2, 3, 4, 5, 6];
        const c = escolher(cordas);
        const NOMES = { 1: 'Mi (fina)', 2: 'Si', 3: 'Sol', 4: 'Ré', 5: 'Lá', 6: 'Mi (grossa)' };
        atual = NOMES[c];
        const svg = svgNovo('braco-svg', 'Braço do violão');
        const br = criarBraco(svg, { casas: 5 });
        br.ponto(c, 0, 'alvo', '?');
        area.append(svg);
        responder(cordas.map((x) => NOMES[x]), atual);
        return;
      }
      if (b.tipo === 'ouvido') {
        // toca duas notas e pergunta qual é mais aguda, ou toca um intervalo
        const base = 60 + Math.floor(Math.random() * 8);
        const salto = escolher(b.saltos || [2, 4, 5, 7, 12]);
        const sobe = Math.random() < 0.5;
        const n2 = sobe ? base + salto : base - salto;
        atual = sobe ? 'Subiu' : 'Desceu';
        const bt = el('button', 'botao-principal', '🔊 Ouvir de novo');
        const tocar = () => { silenciar(); contarTempo(); tocador.sequencia([{ midi: base, fig: 'minima' }, { midi: n2, fig: 'minima' }], { bpm: 100 }); };
        bt.onclick = tocar;
        area.append(bt);
        tocar();
        responder(['Subiu', 'Desceu'], atual);
        return;
      }
      if (b.tipo === 'perguntas') {
        const q = b.perguntas[total % b.perguntas.length];
        atual = q.opcoes[q.correta];
        area.append(el('p', 'enunciado', q.texto));
        responder(q.opcoes, atual, q.explicacao);
        return;
      }
      fim();
    }

    function responder(opcoes, certa, explicacao) {
      const lista = [...new Set(opcoes)];
      // embaralha
      for (let i = lista.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [lista[i], lista[j]] = [lista[j], lista[i]]; }
      lista.slice(0, 6).forEach((o) => {
        const bt = el('button', 'botao-sec opcao', o);
        bt.onclick = () => {
          if (travado) return;
          travado = true; total++;
          const certo = o === certa;
          if (certo) acertos++;
          [...opc.children].forEach((x) => { x.disabled = true; if (x.textContent === certa) x.classList.add('certa'); });
          if (!certo) bt.classList.add('errada');
          feed.textContent = (certo ? '✓ Certo. ' : '✗ Era ' + certa + '. ') + (explicacao || '');
          feed.className = 'feedback ' + (certo ? 'certo' : 'errado');
          if (ctx.aoResponder) ctx.aoResponder(certo, b.tipo);
          setTimeout(proxima, certo ? 700 : 1800);
        };
        opc.append(bt);
      });
      if (!lista.includes(certa)) opc.append(el('p', 'dica', ''));
    }

    function fim() {
      area.innerHTML = ''; opc.innerHTML = '';
      const pct = total ? Math.round((acertos / total) * 100) : 0;
      feed.textContent = 'Você acertou ' + acertos + ' de ' + total + ' (' + pct + '%).'
        + (pct >= 80 ? ' Muito bem: pode seguir em frente.' : ' Vale repetir antes de avançar.');
      feed.className = 'feedback ' + (pct >= 80 ? 'certo' : '');
      placar.textContent = '';
      const de = el('button', 'botao-principal', 'Fazer de novo');
      de.onclick = () => { acertos = 0; total = 0; proxima(); };
      opc.append(de);
      if (ctx.aoExercicio) ctx.aoExercicio(b, acertos, total);
    }

    const comecar = el('button', 'botao-principal', 'Começar o exercício');
    comecar.onclick = () => { comecar.remove(); contarTempo(); proxima(); };
    caixa.insertBefore(comecar, area);
    return caixa;
  }

  // -------------------------------------------------------------------------
  // o mapa de blocos
  // -------------------------------------------------------------------------
  function bloco(b) {
    switch (b.t) {
      case 'p': return textoRico(el('p', 'texto-bloco'), b.x);
      case 'h': return el('h2', 'rotulo-grupo titulo-bloco', b.x);
      case 'h3': return el('h3', 'subtitulo-bloco', b.x);
      case 'dica': { const d = el('p', 'dica-bloco'); d.append(el('strong', '', b.titulo || 'Dica: ')); textoRico(d, b.x); return d; }
      case 'aviso': { const d = el('p', 'aviso-bloco'); d.append(el('strong', '', b.titulo || 'Atenção: ')); textoRico(d, b.x); return d; }
      case 'def': {
        const d = el('div', 'def-bloco');
        d.append(el('span', 'def-termo', b.termo));
        d.append(textoRico(el('p', 'def-texto'), b.x));
        return d;
      }
      case 'lista': {
        const u = el('ul', 'lista-bloco');
        (b.itens || []).forEach((t) => u.append(textoRico(el('li'), t)));
        return u;
      }
      case 'passos': {
        const u = el('ol', 'passos-bloco');
        (b.itens || []).forEach((t) => u.append(textoRico(el('li'), t)));
        return u;
      }
      case 'erros': {
        const d = el('div', 'erros-bloco');
        d.append(el('h3', 'subtitulo-bloco', b.titulo || 'Erros comuns'));
        const u = el('ul', 'lista-erros');
        (b.itens || []).forEach((it) => {
          const li = el('li');
          li.append(el('span', 'erro-x', '✗'));
          const c = el('div');
          c.append(el('p', 'erro-txt', typeof it === 'string' ? it : it.erro));
          if (it.certo) c.append(el('p', 'erro-certo', '→ ' + it.certo));
          li.append(c);
          u.append(li);
        });
        d.append(u);
        return d;
      }
      case 'resumo': {
        const d = el('div', 'resumo-bloco');
        d.append(el('h3', 'subtitulo-bloco', b.titulo || 'Resumo da aula'));
        const u = el('ul', 'lista-bloco');
        (b.itens || []).forEach((t) => u.append(textoRico(el('li'), t)));
        d.append(u);
        return d;
      }
      case 'tabela': {
        const env = el('div', 'tabela-env');
        const tb = el('table', 'tabela-int');
        if (b.cab) { const tr = el('tr'); b.cab.forEach((c) => tr.append(el('th', '', c))); tb.append(tr); }
        (b.linhas || []).forEach((l) => { const tr = el('tr'); l.forEach((c) => tr.append(el('td', '', c))); tb.append(tr); });
        env.append(tb);
        if (b.legenda) env.append(el('p', 'legenda', b.legenda));
        return env;
      }
      case 'comparar': {
        const d = el('div', 'comparar-bloco');
        [b.a, b.b].forEach((lado) => {
          if (!lado) return;
          const c = el('div', 'comparar-col');
          c.append(el('h3', 'subtitulo-bloco', lado.titulo));
          const u = el('ul', 'lista-bloco');
          (lado.itens || []).forEach((t) => u.append(textoRico(el('li'), t)));
          c.append(u);
          d.append(c);
        });
        return d;
      }
      case 'pauta': return blocoPauta(b);
      case 'tab': return blocoTab(b);
      case 'braco': return blocoBraco(b);
      case 'acorde': return blocoAcorde(b);
      case 'figuras': { const s = svgNovo('diag-figuras', 'Figuras musicais'); D.tabelaFiguras(s, b); return figura(s, b.legenda); }
      case 'compasso': { const s = svgNovo('diag-compasso', 'Compasso'); D.compassoGrafico(s, b); return figura(s, b.legenda); }
      case 'violao': { const s = svgNovo('diag-violao', 'Partes do violão'); D.anatomiaViolao(s, b); return figura(s, b.legenda); }
      case 'mao': { const s = svgNovo('diag-mao', 'Dedos da mão'); D.diagramaMao(s, b); return figura(s, b.legenda); }
      case 'postura': { const s = svgNovo('diag-postura', 'Postura'); D.diagramaPostura(s, b); return figura(s, b.legenda); }
      case 'teclado': { const s = svgNovo('diag-teclado', 'Teclado'); TV.teclado(s, b); return figura(s, b.legenda); }
      case 'semitons': { const s = svgNovo('diag-teclado', 'Semitons naturais'); TV.tecladoSemitons(s); return figura(s, b.legenda); }
      case 'ciclo': { const s = svgNovo('diag-ciclo', 'Ciclo das quintas'); TV.cicloQuintas(s, b); return figura(s, b.legenda); }
      case 'regua': { const s = svgNovo('diag-regua', 'Régua de semitons'); D.reguaSemitons(s, b); return figura(s, b.legenda); }
      case 'metronomo': return blocoMetronomo(b);
      case 'tocar': return blocoTocar(b);
      case 'check': return blocoCheck(b);
      case 'exercicio': return blocoExercicio(b);
      case 'ouvir': {
        const caixa = el('div', 'bloco-botoes');
        const bt = botaoIcone('botao-sec', 'tocar', b.titulo || 'Ouvir');
        bt.onclick = () => {
          silenciar(); contarTempo();
          if (b.acorde) tocador.acorde(b.acorde);
          else tocador.sequencia((b.notas || []).map((m) => ({ midi: m, fig: b.fig || 'seminima' })), { bpm: b.bpm || 90 });
        };
        caixa.append(bt);
        if (b.x) caixa.append(el('span', 'legenda', b.x));
        return caixa;
      }
      case 'ir': {
        const caixa = el('div', 'bloco-botoes');
        const bt = el('button', 'botao-sec', b.titulo || 'Abrir');
        bt.onclick = () => { if (ctx.ir) ctx.ir(b.rota); };
        caixa.append(bt);
        if (b.x) caixa.append(el('span', 'legenda', b.x));
        return caixa;
      }
      default: return el('p', 'texto-bloco', b.x || '');
    }
  }

  return { bloco, fechar, silenciar, tocador };
}
