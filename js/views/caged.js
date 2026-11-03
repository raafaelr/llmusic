// Tela do sistema CAGED: veja as 5 formas no braço, treine reconhecê-las e toque cada forma no violão.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi } from '../pitch.js';
import { criarBraco } from '../bracosvg.js';
import { ORDEM_CAGED, NOMES_TONICA, nomeAcorde, formaNaTonalidade, ordemNoBraco, arpejoDaForma, descricaoPosicao } from '../caged.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

export function montar(raiz, ir) {
  let modo = 'ver';          // 'ver' | 'quiz' | 'tocar'
  let tonica = 0;            // 0 = Dó
  let formaSel = 'todas';    // 'todas' ou C/A/G/E/D
  let quiz = { forma: null, tonica: 0, respondido: false, certas: 0, total: 0 };
  let seq = [], passo = 0, tocando = false;
  let bloqueioMidi = -1, bloqueioAte = 0;
  let encerrada = false;
  const motor = new Afinador((f) => aoOuvir(f));

  const tela = el('main', 'tela caged');
  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'CAGED'));

  const area = el('section', 'coluna');
  const info = el('p', 'pergunta info-caged', '');
  info.setAttribute('role', 'status');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'braco-svg');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Braço do violão com a forma de acorde');
  const feedback = el('p', 'feedback', '');
  feedback.setAttribute('aria-live', 'polite');
  area.append(info, svg, feedback);

  const respostas = el('div', 'respostas-caged');
  respostas.hidden = true;

  const opcoes = el('section', 'caged-opcoes');
  const gModo = el('div', 'grupo'); gModo.append(el('h2', 'rotulo-grupo', 'Exercício'));
  const chipsModo = el('div', 'chips'); gModo.append(chipsModo);
  const gTon = el('div', 'grupo'); gTon.append(el('h2', 'rotulo-grupo', 'Tonalidade (acorde maior)'));
  const chipsTon = el('div', 'chips'); gTon.append(chipsTon);
  const gForma = el('div', 'grupo'); gForma.append(el('h2', 'rotulo-grupo', 'Forma'));
  const chipsForma = el('div', 'chips'); gForma.append(chipsForma);
  const botMic = el('button', 'botao-sec', '🎤 Ligar microfone');
  botMic.hidden = true;
  const botNovo = el('button', 'botao-sec', 'Próxima');
  botNovo.hidden = true;
  const acoes = el('div', 'acoes'); acoes.append(botNovo, botMic);
  opcoes.append(gModo, gTon, gForma, acoes);

  tela.append(topo, area, respostas, opcoes);
  raiz.append(tela);

  let braco = null;
  function novoBraco(opts) { braco = criarBraco(svg, { casas: 15, ...opts }); return braco; }

  // ---------- desenho ----------
  function desenharForma(f, { texto = true, fraco = false } = {}) {
    f.notas.forEach((n) => braco.ponto(n.corda, n.casa, 'f-' + f.id + (n.tonica ? ' raiz' : '') + (fraco ? ' fraco' : ''), texto ? (n.tonica ? 'R' : '') : ''));
    f.mudas.forEach((c) => braco.marcaMuda(c));
  }
  function mostrar() {
    novoBraco();
    feedback.textContent = ''; feedback.className = 'feedback';
    if (formaSel === 'todas') {
      const ord = ordemNoBraco(tonica);
      ord.forEach((f) => desenharForma(f, { fraco: false }));
      info.textContent = nomeAcorde(tonica) + ': as 5 formas, em ordem subindo pelo braço: ' + ord.map((f) => f.id).join(' → ');
    } else {
      const f = formaNaTonalidade(formaSel, tonica);
      desenharForma(f);
      info.textContent = 'Forma de ' + formaSel + ' = ' + nomeAcorde(tonica) + ' · ' + descricaoPosicao(f) + ' · R = nota raiz';
    }
  }

  // ---------- quiz: qual forma é esta? ----------
  function novaPergunta() {
    let id;
    do { id = ORDEM_CAGED[Math.floor(Math.random() * 5)]; } while (id === quiz.forma && Math.random() < 0.8);
    quiz.forma = id;
    quiz.tonica = Math.floor(Math.random() * 12);
    quiz.respondido = false;
    const f = formaNaTonalidade(id, quiz.tonica);
    novoBraco();
    desenharForma(f, { texto: false });
    f.notas.forEach((n) => braco.ponto(n.corda, n.casa, 'neutro' + (n.tonica ? ' raiz' : ''), n.tonica ? 'R' : ''));
    info.textContent = 'Acorde de ' + nomeAcorde(quiz.tonica) + '. De qual forma (C, A, G, E ou D) é este desenho?';
    feedback.textContent = ''; feedback.className = 'feedback';
    info.dataset.forma = id;
    botNovo.hidden = true;
    [...respostas.children].forEach((b) => { b.disabled = false; b.className = 'botao-passo nota-btn'; });
  }
  ORDEM_CAGED.forEach((id) => {
    const b = el('button', 'botao-passo nota-btn', id);
    b.setAttribute('aria-label', 'Forma de ' + id);
    b.onclick = () => responderQuiz(id, b);
    respostas.append(b);
  });
  function responderQuiz(id, b) {
    if (quiz.respondido) return;
    quiz.respondido = true; quiz.total++;
    const certo = id === quiz.forma;
    if (certo) quiz.certas++;
    b.classList.add(certo ? 'certa' : 'errada');
    [...respostas.children].forEach((x) => { if (x.textContent === quiz.forma) x.classList.add('certa'); x.disabled = true; });
    feedback.textContent = (certo ? '✓ Isso! ' : 'Era a forma de ' + quiz.forma + '. ') + 'Placar: ' + quiz.certas + ' de ' + quiz.total;
    feedback.className = 'feedback ' + (certo ? 'certo' : 'errado');
    const f = formaNaTonalidade(quiz.forma, quiz.tonica);
    novoBraco(); desenharForma(f);
    botNovo.hidden = false;
    setTimeout(() => { if (!encerrada && modo === 'quiz' && quiz.respondido && certo) novaPergunta(); }, 1600);
  }

  // ---------- tocar a forma no violão ----------
  function comecarSequencia() {
    const f = formaNaTonalidade(formaSel === 'todas' ? 'E' : formaSel, tonica);
    seq = arpejoDaForma(f); passo = 0; tocando = true;
    bloqueioMidi = -1;
    desenharSequencia(f);
  }
  function desenharSequencia(f) {
    novoBraco();
    f.mudas.forEach((c) => braco.marcaMuda(c));
    seq.forEach((n, i) => {
      if (i < passo) braco.ponto(n.corda, n.casa, 'certo', nomeDoMidi(n.midi).pt);
      else if (i === passo) braco.ponto(n.corda, n.casa, 'alvo', nomeDoMidi(n.midi).pt);
      else braco.ponto(n.corda, n.casa, 'neutro fraco', '');
    });
    if (passo < seq.length) {
      const n = seq[passo];
      info.textContent = 'Toque a corda ' + n.corda + (n.casa === 0 ? ' solta' : ', casa ' + n.casa) + ' (' + nomeDoMidi(n.midi).pt + ') · ' + (passo + 1) + ' de ' + seq.length;
    }
  }
  function aoOuvir(freq) {
    if (modo !== 'tocar' || !tocando || !freq || encerrada) return;
    const r = notaMaisProxima(freq);
    if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
    const alvo = seq[passo];
    if (r.midi === alvo.midi) {
      if (Math.abs(r.cents) > 25) { feedback.textContent = 'Quase! Nota certa, mas desafinada: ajuste.'; feedback.className = 'feedback quase'; return; }
      bloqueioMidi = alvo.midi; bloqueioAte = performance.now() + 1500;
      passo++;
      feedback.textContent = '✓'; feedback.className = 'feedback certo';
      const f = formaNaTonalidade(formaSel === 'todas' ? 'E' : formaSel, tonica);
      if (passo >= seq.length) {
        tocando = false;
        desenharSequencia(f);
        info.textContent = '✓ Forma completa! ' + nomeAcorde(tonica) + '. Agora toque as cordas juntas.';
        feedback.textContent = 'Parabéns!'; feedback.className = 'feedback certo';
      } else desenharSequencia(f);
    } else {
      const n = nomeDoMidi(r.midi);
      feedback.textContent = 'Você tocou ' + n.pt + n.oitava + '. Procure ' + nomeDoMidi(alvo.midi).pt + nomeDoMidi(alvo.midi).oitava + '.';
      feedback.className = 'feedback errado';
    }
  }

  // ---------- controles ----------
  function atualizarTudo() {
    respostas.hidden = modo !== 'quiz';
    gForma.hidden = modo === 'quiz';
    gTon.hidden = modo === 'quiz';
    botMic.hidden = modo !== 'tocar';
    botNovo.hidden = true;
    if (modo === 'ver') mostrar();
    else if (modo === 'quiz') novaPergunta();
    else { if (formaSel === 'todas') formaSel = 'E'; chips(); comecarSequencia(); }
  }
  function chips() {
    chipsModo.innerHTML = '';
    [['ver', 'Ver formas'], ['quiz', 'Qual forma?'], ['tocar', 'Tocar a forma']].forEach(([id, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(id === modo));
      b.onclick = async () => {
        if (modo === 'tocar' && id !== 'tocar' && motor.ouvindo) await desligarMic();
        modo = id; Config.guardar('caged.modo', id); chips(); atualizarTudo();
      };
      chipsModo.append(b);
    });
    chipsTon.innerHTML = '';
    NOMES_TONICA.forEach((n, pc) => {
      const b = el('button', 'chip sm', n);
      b.setAttribute('aria-pressed', String(pc === tonica));
      b.setAttribute('aria-label', 'Acorde de ' + n + ' maior');
      b.onclick = () => { tonica = pc; Config.guardar('caged.tonica', pc); chips(); atualizarTudo(); };
      chipsTon.append(b);
    });
    chipsForma.innerHTML = '';
    const lista = modo === 'ver' ? [['todas', 'Todas'], ...ORDEM_CAGED.map((c) => [c, c])] : ORDEM_CAGED.map((c) => [c, c]);
    lista.forEach(([id, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(id === formaSel));
      b.setAttribute('aria-label', id === 'todas' ? 'Todas as formas' : 'Forma de ' + id);
      b.onclick = () => { formaSel = id; Config.guardar('caged.forma', id); chips(); atualizarTudo(); };
      chipsForma.append(b);
    });
  }
  botNovo.onclick = () => novaPergunta();
  async function ligarMic() {
    try { await motor.iniciar(); comecarPratica(); botMic.textContent = '■ Parar microfone'; }
    catch (e) { feedback.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações.'; feedback.className = 'feedback errado'; }
  }
  async function desligarMic() { motor.parar(); await pararPratica(); botMic.textContent = '🎤 Ligar microfone'; }
  botMic.onclick = () => (motor.ouvindo ? desligarMic() : ligarMic());
  function aoEsconder() { if (document.hidden && motor.ouvindo) desligarMic(); }
  document.addEventListener('visibilitychange', aoEsconder);

  // O quiz também conta como prática.
  let contando = false;
  respostas.addEventListener('click', () => { if (!contando) { contando = true; comecarPratica(); } }, { once: true });

  (async () => {
    const m = await Config.obter('caged.modo', 'ver');
    const t = await Config.obter('caged.tonica', 0);
    const f = await Config.obter('caged.forma', 'todas');
    if (encerrada) return;
    modo = ['ver', 'quiz', 'tocar'].includes(m) ? m : 'ver';
    tonica = Number.isInteger(t) && t >= 0 && t < 12 ? t : 0;
    formaSel = f === 'todas' || ORDEM_CAGED.includes(f) ? f : 'todas';
    chips(); atualizarTudo();
  })();

  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    if (motor.ouvindo) motor.parar();
    if (contando || motor.ouvindo) pararPratica();
    if (motor.ctx) motor.ctx.close().catch(() => {});
  };
}
