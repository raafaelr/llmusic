// Aulas do CAGED: curso em 12 aulas com desenhos, áudio, exercícios no violão, quiz e prova final.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi } from '../pitch.js';
import { criarBraco } from '../bracosvg.js';
import { formaNaTonalidade, ordemNoBraco, arpejoDaForma, caixaDaEscala, cifraAcorde, nomeDaEscala, NOMES_TONICA } from '../caged.js';
import { desenharForma, descrever, criarSom } from '../cagedui.js';
import { gerarPerguntasCaged } from '../caged-quiz.js';
import { rodarQuiz } from '../quizui.js';
import { AULAS, EXAME } from '../aulasCaged.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function novoSvg(rotulo) {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  s.setAttribute('class', 'braco-svg'); s.setAttribute('role', 'img'); s.setAttribute('aria-label', rotulo);
  return s;
}
const estrelasTxt = (n) => (n ? '★'.repeat(n) + '☆'.repeat(3 - n) : 'não feita');

export function montar(raiz, ir) {
  let encerrada = false;
  let contando = false;
  const som = criarSom();
  let motor = null;           // microfone (um só por vez)
  let aoOuvirAtual = null;
  const tela = el('main', 'tela teoria aulas-caged');
  raiz.append(tela);

  function iniciarTempo() { if (!contando) { contando = true; comecarPratica(); } }
  async function pararMotor() {
    aoOuvirAtual = null;
    if (motor) { if (motor.ouvindo) motor.parar(); if (motor.ctx) motor.ctx.close().catch(() => {}); motor = null; }
    if (contando) { contando = false; pararPratica(); }
  }

  // ---------- lista ----------
  async function lista() {
    await pararMotor(); som.parar();
    tela.innerHTML = ''; tela.className = 'tela teoria aulas-caged';
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ CAGED');
    voltar.onclick = () => ir('caged');
    topo.append(voltar, el('h1', 'titulo-tela', 'Aulas do CAGED'));
    const grade = el('div', 'grade');
    const resumo = el('p', 'dica', '');
    tela.append(topo, resumo, grade);
    let feitas = 0;
    for (const [i, a] of AULAS.entries()) {
      const e = await Config.obter('cagedaulas.' + a.id, 0);
      if (encerrada) return;
      if (e) feitas++;
      const c = el('button', 'cartao');
      c.append(el('h2', 'cartao-nome', (i + 1) + '. ' + a.titulo), el('p', 'cartao-desc', a.resumo), el('p', 'cartao-desc', estrelasTxt(e)));
      c.onclick = () => aula(a);
      grade.append(c);
    }
    const ex = await Config.obter('cagedaulas.exame', 0);
    if (encerrada) return;
    resumo.textContent = 'Faça uma aula por dia. Aulas feitas (com quiz): ' + feitas + ' de ' + AULAS.length + '. Prova final: ' + estrelasTxt(ex);
    const cp = el('button', 'cartao cartao-exame');
    cp.append(el('h2', 'cartao-nome', '🎓 Prova final do CAGED'), el('p', 'cartao-desc', EXAME.n + ' perguntas de todas as aulas'), el('p', 'cartao-desc', estrelasTxt(ex)));
    cp.onclick = prova;
    grade.append(cp);
    window.scrollTo(0, 0);
  }

  // ---------- blocos ----------
  function blocoForma(b) {
    const caixa = el('figure', 'bloco-desenho');
    const svg = novoSvg('Forma de acorde no braço');
    const f = formaNaTonalidade(b.id, b.tonica, b.qual || 'maior');
    desenharForma(criarBraco(svg, { casas: 15 }), f, { rotulo: b.rotulo || 'graus' });
    const leg = el('figcaption', 'legenda', b.legenda || '');
    const det = el('p', 'detalhe-forma', descrever(f));
    const ouvir = el('button', 'botao-sec', '▶ Ouvir ' + cifraAcorde(b.tonica, b.qual || 'maior'));
    ouvir.onclick = () => som.acorde(f);
    caixa.append(svg, leg, det, ouvir);
    return caixa;
  }
  function blocoTodas(b) {
    const caixa = el('figure', 'bloco-desenho');
    const svg = novoSvg('As formas do acorde no braço');
    const ord = ordemNoBraco(b.tonica, b.qual || 'maior');
    const desenhar = (i) => {
      const br = criarBraco(svg, { casas: 15 });
      ord.forEach((f, k) => desenharForma(br, f, { rotulo: i < 0 || k === i ? 'raiz' : 'nenhum', fraco: i >= 0 && k !== i }));
    };
    desenhar(-1);
    const leg = el('figcaption', 'legenda', b.legenda || '');
    const det = el('p', 'detalhe-forma', cifraAcorde(b.tonica, b.qual || 'maior') + ': ' + ord.map((f) => f.id + ' (casa ' + f.k + ')').join(' → '));
    const ouvir = el('button', 'botao-sec', '▶ Ouvir as formas em sequência');
    ouvir.onclick = () => som.sequencia(ord, (i) => { desenhar(i); if (i >= 0) det.textContent = 'Tocando a forma de ' + ord[i].id + ' (casa ' + ord[i].k + ')'; }, 1700);
    caixa.append(svg, leg, det, ouvir);
    return caixa;
  }
  function blocoCaixa(b) {
    const caixa = el('figure', 'bloco-desenho');
    const svg = novoSvg('Caixa de escala no braço');
    const f = formaNaTonalidade(b.id, b.tonica, 'maior');
    const cx = caixaDaEscala(f, b.tipo);
    const br = criarBraco(svg, { casas: 15 });
    cx.notas.forEach((n) => br.ponto(n.corda, n.casa, 'neutro' + (n.raiz ? ' raiz' : ''), n.rotulo));
    desenharForma(br, f, { rotulo: 'nenhum' });
    caixa.append(svg, el('figcaption', 'legenda', b.legenda || ''),
      el('p', 'detalhe-forma', nomeDaEscala(b.tipo) + ' · casas ' + cx.de + ' a ' + cx.ate + ' · escala de ' + NOMES_TONICA[cx.raizPc]));
    return caixa;
  }
  function blocoProg(b) {
    const caixa = el('figure', 'bloco-desenho');
    const svg = novoSvg('Progressão de acordes no braço');
    const formas = b.acordes.map((a) => formaNaTonalidade(a.id, a.tonica, a.qual || 'maior'));
    const chips = el('div', 'chips');
    const det = el('p', 'detalhe-forma', '');
    const botoes = [];
    function mostrar(i) {
      const br = criarBraco(svg, { casas: 15 });
      formas.forEach((f, k) => desenharForma(br, f, { rotulo: k === i ? 'graus' : 'nenhum', fraco: i >= 0 && k !== i }));
      botoes.forEach((x, k) => x.setAttribute('aria-pressed', String(k === i)));
      det.textContent = i >= 0 ? cifraAcorde(b.acordes[i].tonica, b.acordes[i].qual || 'maior') + ' com a forma de ' + b.acordes[i].id + ' · casa ' + formas[i].k : 'Toque num acorde para ouvir e ver onde ele fica.';
    }
    b.acordes.forEach((a, i) => {
      const bt = el('button', 'chip sm', cifraAcorde(a.tonica, a.qual || 'maior') + ' (' + a.id + ')');
      bt.onclick = () => { mostrar(i); som.acorde(formas[i]); };
      botoes.push(bt); chips.append(bt);
    });
    mostrar(-1);
    const tudo = el('button', 'botao-sec', '▶ Tocar a progressão');
    tudo.onclick = () => som.sequencia(formas, (i) => mostrar(i), 1800);
    caixa.append(svg, el('figcaption', 'legenda', b.legenda || ''), chips, det, tudo);
    return caixa;
  }
  function blocoTocar(b) {
    const caixa = el('div', 'bloco-tocar');
    const f = formaNaTonalidade(b.id, b.tonica, b.qual || 'maior');
    const seq = arpejoDaForma(f);
    let passo = 0, bloqueioMidi = -1, bloqueioAte = 0;
    const nomeCifra = cifraAcorde(b.tonica, b.qual || 'maior');
    const trilha = el('p', 'seq-ex', '');
    const feed = el('p', 'feedback', '');
    feed.setAttribute('aria-live', 'polite');
    const bt = el('button', 'botao-sec', '🎤 Tocar ' + nomeCifra + ' corda por corda');
    function pintar() {
      trilha.innerHTML = '';
      seq.forEach((n, i) => trilha.append(el('span', 'seq-nota' + (i < passo ? ' feito' : i === passo ? ' atual' : ''), (n.casa === 0 ? '○' : n.casa) + '/' + n.corda + 'ª')));
    }
    function aoOuvir(freq) {
      if (!freq || passo >= seq.length) return;
      const r = notaMaisProxima(freq);
      if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
      const alvo = seq[passo];
      if (r.midi === alvo.midi && Math.abs(r.cents) <= 30) {
        bloqueioMidi = r.midi; bloqueioAte = performance.now() + 1500; passo++; pintar();
        feed.textContent = passo >= seq.length ? '✓ ' + nomeCifra + ' completo! Agora toque as cordas juntas.' : '✓';
        feed.className = 'feedback certo';
      } else if (r.midi !== bloqueioMidi) {
        const n = nomeDoMidi(alvo.midi);
        feed.textContent = 'Procure a ' + alvo.corda + 'ª corda' + (alvo.casa === 0 ? ' solta' : ', casa ' + alvo.casa) + ' (' + n.pt + n.oitava + ').';
        feed.className = 'feedback errado';
      }
    }
    bt.onclick = async () => {
      if (motor && motor.ouvindo && aoOuvirAtual === aoOuvir) { await pararMotor(); bt.textContent = '🎤 Tocar ' + nomeCifra + ' corda por corda'; return; }
      await pararMotor();
      document.querySelectorAll('.bloco-tocar button').forEach((x) => { if (x !== bt) x.textContent = x.dataset.rot || x.textContent; });
      passo = 0; bloqueioMidi = -1; pintar(); feed.textContent = '';
      aoOuvirAtual = aoOuvir;
      motor = new Afinador((fr) => { if (aoOuvirAtual) aoOuvirAtual(fr); });
      try { await motor.iniciar(); iniciarTempo(); bt.textContent = '■ Parar'; }
      catch (e) { feed.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações.'; feed.className = 'feedback errado'; motor = null; aoOuvirAtual = null; }
    };
    bt.dataset.rot = bt.textContent;
    pintar();
    caixa.append(el('p', 'rotulo-grupo', 'No violão: ' + nomeCifra + ' (forma de ' + b.id + ')'), trilha, feed, bt);
    return caixa;
  }
  function blocoCheck(b, aulaId) {
    const caixa = el('fieldset', 'bloco-check');
    caixa.append(el('legend', 'rotulo-grupo', b.titulo || 'Prática desta aula'));
    const chave = 'cagedaulas.check.' + b.chave;
    Config.obter(chave, []).then((marcados) => {
      if (encerrada) return;
      b.itens.forEach((txt, i) => {
        const rot = el('label', 'item-check');
        const cx = document.createElement('input');
        cx.type = 'checkbox'; cx.checked = !!marcados[i];
        cx.onchange = async () => { const m = await Config.obter(chave, []); m[i] = cx.checked; await Config.guardar(chave, m); };
        rot.append(cx, el('span', '', txt));
        caixa.append(rot);
      });
    });
    return caixa;
  }
  function bloco(b, aulaId) {
    switch (b.t) {
      case 'p': return el('p', 'texto-bloco', b.x);
      case 'h': return el('h2', 'rotulo-grupo titulo-bloco', b.x);
      case 'dica': { const d = el('p', 'dica-bloco', ''); d.append(el('strong', '', 'Dica: '), document.createTextNode(b.x)); return d; }
      case 'lista': { const u = el('ul', 'lista-bloco'); b.itens.forEach((t) => u.append(el('li', '', t))); return u; }
      case 'tabela': {
        const tb = el('table', 'tabela-int');
        const cab = el('tr'); b.cab.forEach((c) => cab.append(el('th', '', c))); tb.append(cab);
        b.linhas.forEach((l) => { const tr = el('tr'); l.forEach((c) => tr.append(el('td', '', c))); tb.append(tr); });
        return tb;
      }
      case 'forma': return blocoForma(b);
      case 'todas': return blocoTodas(b);
      case 'caixa': return blocoCaixa(b);
      case 'prog': return blocoProg(b);
      case 'tocar': return blocoTocar(b);
      case 'check': return blocoCheck(b, aulaId);
      default: return el('p', '', '');
    }
  }

  // ---------- uma aula ----------
  function aula(a) {
    pararMotor(); som.parar();
    tela.innerHTML = ''; tela.className = 'tela teoria aulas-caged licao';
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Aulas');
    voltar.onclick = lista;
    topo.append(voltar, el('h1', 'titulo-tela', a.titulo));
    tela.append(topo);
    a.blocos.forEach((b) => tela.append(bloco(b, a.id)));
    const acoes = el('div', 'acoes acoes-licao');
    const q = el('button', 'botao-principal', 'Fazer o quiz da aula');
    q.onclick = () => quiz(a);
    const ferr = el('button', 'botao-sec', 'Abrir a ferramenta CAGED');
    ferr.onclick = () => ir('caged');
    acoes.append(ferr, q);
    const i = AULAS.indexOf(a);
    if (i < AULAS.length - 1) { const pr = el('button', 'botao-sec', 'Próxima aula ›'); pr.onclick = () => aula(AULAS[i + 1]); acoes.append(pr); }
    tela.append(acoes);
    window.scrollTo(0, 0);
  }

  // ---------- quizzes ----------
  function desenhoQuiz(d, s, revelar) {
    const b = criarBraco(s, { casas: 15 });
    desenharForma(b, formaNaTonalidade(d.id, d.tonica, d.qual || 'maior'), { rotulo: d.escondeNome && !revelar ? 'raiz' : 'graus' });
  }
  function quiz(a) {
    pararMotor(); som.parar(); iniciarTempo();
    rodarQuiz({
      tela, titulo: 'Quiz: ' + a.titulo, perguntas: gerarPerguntasCaged(a.quiz.tipos, a.quiz.n),
      chave: 'cagedaulas.' + a.id, textoVoltar: '‹ Aula', aoVoltar: () => { pararMotor(); aula(a); },
      aoDesenhar: desenhoQuiz, aoNovaTentativa: () => quiz(a), ativo: () => !encerrada
    });
  }
  function prova() {
    pararMotor(); som.parar(); iniciarTempo();
    rodarQuiz({
      tela, titulo: 'Prova final do CAGED', perguntas: gerarPerguntasCaged(EXAME.tipos, EXAME.n),
      chave: 'cagedaulas.exame', textoVoltar: '‹ Aulas', aoVoltar: () => { pararMotor(); lista(); },
      aoDesenhar: desenhoQuiz, aoNovaTentativa: prova, ativo: () => !encerrada
    });
  }

  lista();
  const aoEsconder = () => { if (document.hidden) { som.parar(); pararMotor(); } };
  document.addEventListener('visibilitychange', aoEsconder);
  return () => {
    encerrada = true; som.fechar();
    document.removeEventListener('visibilitychange', aoEsconder);
    if (motor) { if (motor.ouvindo) motor.parar(); if (motor.ctx) motor.ctx.close().catch(() => {}); }
    if (contando) pararPratica();
  };
}
