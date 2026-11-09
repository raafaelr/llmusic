// Teoria: lições curtas, demonstração no braço, exercício pelo microfone e quiz com estrelas.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima } from '../pitch.js';
import { criarBraco } from '../bracosvg.js';
import { LICOES } from '../licoes.js';
import { TONICAS, nomeNota, escalaMaior, campoHarmonico, INTERVALOS, demo, gerarQuiz, sequenciaExercicio } from '../teoria.js';
import { CORDAS_MIDI } from '../caged.js';
import { estrelas } from '../leitura.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
const mod12 = (n) => ((n % 12) + 12) % 12;

export function montar(raiz, ir) {
  let encerrada = false;
  let contando = false;
  let motor = null;
  const tela = el('main', 'tela teoria');
  raiz.append(tela);

  function iniciarTempo() { if (!contando) { contando = true; comecarPratica(); } }
  async function pararMotor() { if (motor) { if (motor.ouvindo) motor.parar(); if (motor.ctx) motor.ctx.close().catch(() => {}); motor = null; } }

  // ---------- lista de lições ----------
  async function lista() {
    await pararMotor();
    tela.innerHTML = '';
    tela.className = 'tela teoria';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Teoria'));
    const grade = el('div', 'grade');
    tela.append(topo, el('p', 'dica', 'Lições curtas. Leia, veja no braço, toque e faça o quiz para ganhar estrelas.'), grade);
    for (const [i, l] of LICOES.entries()) {
      const e = await Config.obter('teoria.' + l.id, 0);
      if (encerrada) return;
      const c = el('button', 'cartao');
      c.append(el('h2', 'cartao-nome', (i + 1) + '. ' + l.titulo), el('p', 'cartao-desc', e ? '★'.repeat(e) + '☆'.repeat(3 - e) : 'ainda não feita'));
      c.onclick = () => licao(l);
      grade.append(c);
    }
  }

  // ---------- uma lição ----------
  function licao(l) {
    pararMotor();
    tela.innerHTML = '';
    tela.className = 'tela teoria licao';
    let tonica = TONICAS[0], variante = 'maior';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Lições');
    voltar.onclick = lista;
    topo.append(voltar, el('h1', 'titulo-tela', l.titulo));
    const corpo = el('section', 'texto-licao');
    l.texto.forEach((t) => corpo.append(el('p', '', t)));
    tela.append(topo, corpo);

    if (l.tabela) {
      const tb = el('table', 'tabela-int');
      INTERVALOS.forEach((n, s) => { const tr = el('tr'); tr.append(el('td', '', String(s)), el('td', '', n)); tb.append(tr); });
      const cab = el('tr'); cab.append(el('th', '', 'semitons'), el('th', '', 'intervalo')); tb.prepend(cab);
      tela.append(tb);
    }

    const painel = el('section', 'demo-licao');
    const info = el('p', 'info-demo', '');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'braco-svg'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Braço com as notas da lição');
    const campo = el('div', 'campo-lista');
    const chipsTon = el('div', 'chips');
    const chipsVar = el('div', 'chips');
    if (l.demo !== 'nenhum') {
      painel.append(el('h2', 'rotulo-grupo', 'Escolha a tonalidade'), chipsTon);
      if (l.variantes) painel.append(chipsVar);
      painel.append(info, l.demo === 'campo' ? campo : svg);
    }
    tela.append(painel);

    function desenharDemo() {
      chipsTon.innerHTML = '';
      TONICAS.forEach((t) => {
        const b = el('button', 'chip sm', nomeNota(t));
        b.setAttribute('aria-pressed', String(t === tonica));
        b.onclick = () => { tonica = t; resetarExercicio(); desenharDemo(); };
        chipsTon.append(b);
      });
      chipsVar.innerHTML = '';
      if (l.variantes) ['maior', 'menor'].forEach((v) => {
        const b = el('button', 'chip sm', v === 'maior' ? 'Maior' : 'Menor');
        b.setAttribute('aria-pressed', String(v === variante));
        b.onclick = () => { variante = v; resetarExercicio(); desenharDemo(); };
        chipsVar.append(b);
      });
      if (l.demo === 'campo') {
        campo.innerHTML = '';
        info.textContent = 'Campo harmônico de ' + nomeNota(tonica) + ' maior:';
        campoHarmonico(tonica).forEach((c) => {
          const x = el('div', 'campo-item');
          x.append(el('span', 'campo-grau', c.grau), el('span', 'campo-cifra', c.cifra), el('span', 'campo-notas', c.notas.map(nomeNota).join(' ')));
          campo.append(x);
        });
        return;
      }
      const pcs = demo(l.demo, tonica, variante);
      info.textContent = l.demo === 'nota' ? 'Todas as posições de ' + nomeNota(tonica) + ' no braço (R)'
        : l.demo === 'escala' ? 'Escala de ' + nomeNota(tonica) + ' maior: ' + escalaMaior(tonica).map(nomeNota).join(' ')
        : 'Acorde de ' + nomeNota(tonica) + ' ' + variante + ': ' + sequenciaExercicio('acordes', tonica, variante).map(nomeNota).join(' ');
      const b = criarBraco(svg, { casas: 12 });
      for (let corda = 1; corda <= 6; corda++) for (let casa = 0; casa <= 12; casa++) {
        const pc = mod12(CORDAS_MIDI[corda] + casa);
        const d = pcs.find((x) => x.pc === pc);
        if (d) b.ponto(corda, casa, d.rotulo === 'R' ? 'f-E raiz' : 'neutro', d.rotulo);
      }
    }
    desenharDemo();

    // exercício pelo microfone
    let ex = null;
    if (l.exercicio) {
      ex = el('section', 'exercicio-licao');
      ex.append(el('h2', 'rotulo-grupo', 'No violão: ' + l.exercicio));
    }
    const seqEl = el('p', 'seq-ex', '');
    const feed = el('p', 'feedback', '');
    const bMic = botaoIcone('botao-sec', 'microfone', 'Começar exercício');
    let passo = 0, seq = [], bloqueioPc = -1, bloqueioAte = 0;
    function resetarExercicio() {
      if (!ex) return;
      seq = sequenciaExercicio(l.id, tonica, variante); passo = 0; bloqueioPc = -1;
      pintarSeq();
      feed.textContent = '';
    }
    function pintarSeq() {
      seqEl.innerHTML = '';
      seq.forEach((n, i) => seqEl.append(el('span', 'seq-nota' + (i < passo ? ' feito' : i === passo ? ' atual' : ''), nomeNota(n))));
    }
    function aoOuvir(freq) {
      if (!freq || passo >= seq.length || !motor) return;
      const r = notaMaisProxima(freq);
      const pc = mod12(r.midi);
      if (pc === bloqueioPc && performance.now() < bloqueioAte) return;
      if (pc === seq[passo].pc && Math.abs(r.cents) <= 30) {
        bloqueioPc = pc; bloqueioAte = performance.now() + 1200;
        passo++; pintarSeq();
        feed.textContent = passo >= seq.length ? '✓ Exercício completo!' : '✓'; feed.className = 'feedback certo';
      } else if (pc !== bloqueioPc) {
        feed.textContent = 'Procure ' + nomeNota(seq[passo]) + '.'; feed.className = 'feedback errado';
      }
    }
    if (ex) {
      bMic.onclick = async () => {
        if (motor && motor.ouvindo) { motor.parar(); bMic.textContent = '🎤 Começar exercício'; return; }
        motor = new Afinador(aoOuvir);
        try { await motor.iniciar(); iniciarTempo(); bMic.textContent = '■ Parar'; resetarExercicio(); }
        catch (e) { feed.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações.'; feed.className = 'feedback errado'; motor = null; }
      };
      ex.append(seqEl, feed, bMic);
      tela.append(ex);
      resetarExercicio();
    }

    const acoes = el('div', 'acoes acoes-licao');
    const bQuiz = el('button', 'botao-principal', 'Fazer o quiz');
    bQuiz.onclick = () => quiz(l);
    acoes.append(bQuiz);
    if (l.irPara) { const b = el('button', 'botao-sec', 'Abrir a tela CAGED'); b.onclick = () => ir(l.irPara); acoes.prepend(b); }
    tela.append(acoes);
    window.scrollTo(0, 0);
  }

  // ---------- quiz ----------
  function quiz(l) {
    pararMotor();
    iniciarTempo();
    const perguntas = gerarQuiz(l.id);
    let i = 0, acertos = 0, respondida = false;
    tela.innerHTML = '';
    tela.className = 'tela teoria quiz-tela';
    const topo = el('header', 'topo');
    const sair = botaoIcone('botao-texto', 'voltar', 'Lição');
    sair.onclick = () => licao(l);
    topo.append(sair, el('h1', 'titulo-tela', 'Quiz: ' + l.titulo));
    const prog = el('p', 'dica', '');
    const enun = el('h2', 'enunciado', '');
    enun.setAttribute('role', 'status');
    const opc = el('div', 'opcoes-quiz');
    const feed = el('p', 'feedback', '');
    const prox = el('button', 'botao-principal', 'Continuar');
    prox.hidden = true;
    tela.append(topo, prog, enun, opc, feed, prox);

    function mostrar() {
      respondida = false;
      const q = perguntas[i];
      prog.textContent = 'Pergunta ' + (i + 1) + ' de ' + perguntas.length;
      enun.textContent = q.texto;
      feed.textContent = ''; feed.className = 'feedback';
      prox.hidden = true;
      opc.innerHTML = '';
      q.opcoes.forEach((o, k) => {
        const b = el('button', 'botao-sec opcao', o);
        b.onclick = () => responder(k, b);
        opc.append(b);
      });
    }
    function responder(k, b) {
      if (respondida) return;
      respondida = true;
      const q = perguntas[i];
      const certo = k === q.correta;
      if (certo) acertos++;
      [...opc.children].forEach((x, idx) => { x.disabled = true; if (idx === q.correta) x.classList.add('certa'); });
      if (!certo) b.classList.add('errada');
      feed.textContent = (certo ? '✓ Certo! ' : 'Resposta: ' + q.opcoes[q.correta] + '. ') + (q.explicacao || '');
      feed.className = 'feedback ' + (certo ? 'certo' : 'errado');
      prox.hidden = false;
      prox.textContent = i + 1 >= perguntas.length ? 'Ver resultado' : 'Continuar';
    }
    prox.onclick = () => { i++; if (i >= perguntas.length) fim(); else mostrar(); };
    async function fim() {
      const e = estrelas(acertos, perguntas.length);
      const antes = await Config.obter('teoria.' + l.id, 0);
      if (e > antes) await Config.guardar('teoria.' + l.id, e);
      if (encerrada) return;
      tela.innerHTML = '';
      const topo2 = el('header', 'topo');
      const v = botaoIcone('botao-texto', 'voltar', 'Lições'); v.onclick = lista;
      topo2.append(v, el('h1', 'titulo-tela', 'Resultado'));
      const est = el('p', 'estrelas', '★'.repeat(e) + '☆'.repeat(3 - e));
      est.dataset.estrelas = e;
      est.setAttribute('aria-label', e + ' de 3 estrelas');
      const msg = el('p', 'fim-msg', acertos + ' de ' + perguntas.length + ' certas' + (e > antes ? ' · novo recorde!' : ''));
      const painel = el('div', 'painel-fim');
      const outra = el('button', 'botao-principal', 'Tentar de novo'); outra.onclick = () => quiz(l);
      const volt = el('button', 'botao-sec', 'Voltar às lições'); volt.onclick = lista;
      painel.append(est, msg, outra, volt);
      tela.append(topo2, painel);
    }
    mostrar();
  }

  lista();
  return () => {
    encerrada = true;
    pararMotor();
    if (contando) pararPratica();
  };
}
