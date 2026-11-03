// Leitura à primeira vista: o app mostra 8 notas na pauta e você identifica uma por uma.
// Responder: tocando nos botões com o nome da nota, ou tocando a nota no violão (microfone).
// No fim, ganha de 0 a 3 estrelas pelo número de notas acertadas de primeira.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi } from '../pitch.js';
import { NIVEIS, NOMES_NATURAIS, gerarExercicio, posicaoNaPauta, linhasSuplementares, nomeDaNota, midiQueSoa, estrelas, escreverNota, nomeCompleto } from '../leitura.js';

const NS = 'http://www.w3.org/2000/svg';
function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function sv(tag, attrs, pai) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (pai) pai.append(e);
  return e;
}
const PC = [0, 2, 4, 5, 7, 9, 11];
const TOTAL = 8;
const H = 12;                         // meia distância entre linhas da pauta
const yPos = (pos) => 200 - pos * H;  // y da posição na pauta (0 = linha de baixo)

export function montar(raiz, ir) {
  let nivel = 1;
  let entrada = 'botoes';      // 'botoes' | 'mic'
  let notas = [], idx = 0, erroNoAtual = false, deprimeira = 0;
  let estado = [];             // por nota: '', 'ok', 'erro'
  let bloqueioMidi = -1, bloqueioAte = 0, travado = false;
  let modAcc = 0;               // sustenido (+1), bemol (-1) ou nenhum (0) escolhido nos botões
  let encerrada = false;
  const motor = new Afinador((f) => aoOuvir(f));

  const tela = el('main', 'tela leitura');
  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Leitura'));

  const area = el('section', 'coluna');
  const instr = el('p', 'pergunta pergunta-leitura', '');
  instr.setAttribute('role', 'status');
  const svg = sv('svg', { class: 'pauta-svg', role: 'img', 'aria-label': 'Pauta com notas para ler' });
  const feedback = el('p', 'feedback', '');
  feedback.setAttribute('aria-live', 'polite');
  area.append(instr, svg, feedback);

  const botoes = el('div', 'notas-botoes');
  const painelFim = el('div', 'painel-fim');
  painelFim.hidden = true;

  const opcoes = el('div', 'leitura-opcoes');
  const gNiv = el('div', 'grupo'); gNiv.append(el('h2', 'rotulo-grupo', 'Nível'));
  const chipsNiv = el('div', 'chips'); gNiv.append(chipsNiv);
  const gEnt = el('div', 'grupo'); gEnt.append(el('h2', 'rotulo-grupo', 'Responder'));
  const chipsEnt = el('div', 'chips'); gEnt.append(chipsEnt);
  const botMic = el('button', 'botao-sec', '🎤 Ligar microfone');
  botMic.hidden = true;
  opcoes.append(gNiv, gEnt, botMic);

  tela.append(topo, area, botoes, painelFim, opcoes);
  raiz.append(tela);

  // ---------- pauta ----------
  const xNota = (i) => 170 + i * 100;
  function desenharPauta() {
    svg.innerHTML = '';
    const poss = notas.map((n) => posicaoNaPauta(n.base));
    const minP = Math.min(0, ...poss), maxP = Math.max(8, ...poss);
    const topoY = yPos(maxP) - 36, baixoY = yPos(minP) + 36;
    svg.setAttribute('viewBox', `0 ${topoY} 1000 ${baixoY - topoY}`);
    svg.dataset.notas = notas.map((n) => n.midi).join(',');
    svg.dataset.acc = notas.map((n) => n.acc).join(',');
    for (let l = 0; l < 5; l++) sv('line', { x1: 20, x2: 985, y1: yPos(l * 2), y2: yPos(l * 2), class: 'linha-pauta' }, svg);
    const clave = sv('text', { x: 40, y: yPos(2) + 34, class: 'clave' }, svg);
    clave.textContent = 'G';
    const sub = sv('text', { x: 40, y: yPos(0) + 30, class: 'clave-sub' }, svg);
    sub.textContent = 'clave de Sol';
    notas.forEach((nt, i) => {
      const pos = posicaoNaPauta(nt.base), x = xNota(i), y = yPos(pos);
      const g = sv('g', { class: 'nota-g ' + (estado[i] || '') + (i === idx && !travado ? ' atual' : ''), 'data-i': i }, svg);
      linhasSuplementares(pos).forEach((p) => sv('line', { x1: x - 26, x2: x + 26, y1: yPos(p), y2: yPos(p), class: 'linha-pauta' }, g));
      if (nt.acc) { const ac = sv('text', { x: x - 38, y: y + 9, class: 'acidente', 'text-anchor': 'middle' }, g); ac.textContent = nt.acc > 0 ? '♯' : '♭'; }
      sv('ellipse', { cx: x, cy: y, rx: 15, ry: 11, class: 'cabeca', transform: `rotate(-18 ${x} ${y})` }, g);
      if (pos < 4) sv('line', { x1: x + 14, x2: x + 14, y1: y, y2: y - 7 * H, class: 'haste' }, g);
      else sv('line', { x1: x - 14, x2: x - 14, y1: y, y2: y + 7 * H, class: 'haste' }, g);
      if (estado[i]) {
        const t = sv('text', { x, y: baixoY - 8, 'text-anchor': 'middle', class: 'nome-nota' }, g);
        t.textContent = nomeCompleto(nt);
      }
    });
  }

  // ---------- exercício ----------
  function novo() {
    notas = gerarExercicio(nivel, TOTAL).map((m) => escreverNota(m));
    idx = 0; erroNoAtual = false; deprimeira = 0; travado = false;
    estado = notas.map(() => '');
    painelFim.hidden = true;
    modAcc = 0; pintarAcc();
    botoes.hidden = entrada !== 'botoes';
    feedback.textContent = ''; feedback.className = 'feedback';
    instr.textContent = entrada === 'botoes' ? 'Qual é a nota marcada?' : 'Toque a nota marcada no violão';
    desenharPauta();
  }
  function acertou() {
    if (!erroNoAtual) deprimeira++;
    estado[idx] = erroNoAtual ? 'erro' : 'ok';
    erroNoAtual = false;
    idx++;
    if (idx >= TOTAL) return fim();
    feedback.textContent = '✓'; feedback.className = 'feedback certo';
    desenharPauta();
  }
  function errou(msg, quase) {
    erroNoAtual = true;
    feedback.textContent = msg;
    feedback.className = 'feedback ' + (quase ? 'quase' : 'errado');
  }
  async function fim() {
    travado = true;
    desenharPauta();
    const e = estrelas(deprimeira, TOTAL);
    const chave = 'leitura.melhor.' + nivel;
    const antes = await Config.obter(chave, 0);
    const recorde = e > antes;
    if (recorde) await Config.guardar(chave, e);
    const n = await Config.obter('leitura.exercicios', 0);
    await Config.guardar('leitura.exercicios', n + 1);
    if (encerrada) return;
    painelFim.innerHTML = '';
    const est = el('p', 'estrelas', '★'.repeat(e) + '☆'.repeat(3 - e));
    est.setAttribute('aria-label', e + ' de 3 estrelas');
    est.dataset.estrelas = e;
    const msg = el('p', 'fim-msg', deprimeira + ' de ' + TOTAL + ' de primeira' + (recorde ? ' · novo recorde!' : ''));
    const outro = el('button', 'botao-principal', 'Novo exercício');
    outro.onclick = novo;
    painelFim.append(est, msg, outro);
    botoes.hidden = true;
    painelFim.hidden = false;
    instr.textContent = e === 3 ? 'Excelente!' : e === 2 ? 'Muito bem!' : e === 1 ? 'Bom começo!' : 'Vamos de novo, com calma.';
    feedback.textContent = ''; feedback.className = 'feedback';
  }

  // Resposta pelos botões: só o nome da nota (não dá para informar a oitava).
  function responderNome(nome) {
    if (travado || entrada !== 'botoes') return;
    const acc = nivel >= 4 ? modAcc : 0;
    modAcc = 0; pintarAcc();
    if (nome === nomeDaNota(notas[idx].base) && acc === notas[idx].acc) acertou();
    else errou('Não é ' + nome + (acc > 0 ? '#' : acc < 0 ? '♭' : '') + '. Tente de novo.');
  }
  const botSus = el('button', 'botao-passo nota-btn acid', '♯'); botSus.setAttribute('aria-label', 'Sustenido'); botSus.setAttribute('aria-pressed', 'false');
  const botBem = el('button', 'botao-passo nota-btn acid', '♭'); botBem.setAttribute('aria-label', 'Bemol'); botBem.setAttribute('aria-pressed', 'false');
  function pintarAcc() { botSus.setAttribute('aria-pressed', String(modAcc === 1)); botBem.setAttribute('aria-pressed', String(modAcc === -1)); botoes.classList.toggle('com-acid', nivel >= 4); }
  botSus.onclick = () => { modAcc = modAcc === 1 ? 0 : 1; pintarAcc(); };
  botBem.onclick = () => { modAcc = modAcc === -1 ? 0 : -1; pintarAcc(); };
  NOMES_NATURAIS.forEach((n) => {
    const b = el('button', 'botao-passo nota-btn', n);
    b.onclick = () => responderNome(n);
    botoes.append(b);
  });
  botoes.append(botSus, botBem);

  // Resposta pelo microfone: a nota que SOA precisa ser exatamente a certa.
  function aoOuvir(freq) {
    if (entrada !== 'mic' || encerrada || travado || !freq || !notas.length) return;
    if (motor.ctx && motor.ctx.currentTime < motor.mudoAte) return;
    const r = notaMaisProxima(freq);
    if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
    const alvo = midiQueSoa(notas[idx].midi);
    const n = nomeDoMidi(r.midi);
    if (r.midi === alvo) {
      if (Math.abs(r.cents) <= 25) {
        bloqueioMidi = alvo; bloqueioAte = performance.now() + 2500;
        acertou();
      } else errou('Nota certa, mas desafinada: ajuste.', true);
    } else errou('Você tocou ' + n.pt + n.oitava + '. Procure ' + nomeCompleto(notas[idx]) + ' (soa ' + nomeDoMidi(alvo).pt + nomeDoMidi(alvo).oitava + ').');
  }

  // ---------- controles ----------
  function chips() {
    chipsNiv.innerHTML = '';
    NIVEIS.forEach((n) => {
      const b = el('button', 'chip sm', n.nome);
      b.title = n.desc;
      b.setAttribute('aria-pressed', String(n.id === nivel));
      b.onclick = () => { nivel = n.id; Config.guardar('leitura.nivel', nivel); chips(); novo(); };
      chipsNiv.append(b);
    });
    chipsEnt.innerHTML = '';
    [['botoes', 'Botões'], ['mic', 'Violão (mic)']].forEach(([id, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(id === entrada));
      b.onclick = async () => {
        if (entrada === 'mic' && id !== 'mic' && motor.ouvindo) await desligarMic();
        entrada = id; Config.guardar('leitura.entrada', id); botMic.hidden = id !== 'mic';
        chips(); novo();
      };
      chipsEnt.append(b);
    });
  }
  async function ligarMic() {
    try {
      await motor.iniciar(); comecarPratica();
      botMic.textContent = '■ Parar microfone';
    } catch (e) {
      feedback.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações.';
      feedback.className = 'feedback errado';
    }
  }
  async function desligarMic() {
    motor.parar(); await pararPratica();
    botMic.textContent = '🎤 Ligar microfone';
  }
  botMic.onclick = () => (motor.ouvindo ? desligarMic() : ligarMic());
  function aoEsconder() { if (document.hidden && motor.ouvindo) desligarMic(); }
  document.addEventListener('visibilitychange', aoEsconder);

  // O tempo de prática também conta quando se responde pelos botões.
  let contando = false;
  function iniciarTempo() { if (!contando && entrada === 'botoes') { contando = true; comecarPratica(); } }
  botoes.addEventListener('click', iniciarTempo, { once: true });

  (async () => {
    const nv = await Config.obter('leitura.nivel', 1);
    const en = await Config.obter('leitura.entrada', 'botoes');
    if (encerrada) return;
    nivel = NIVEIS.some((n) => n.id === nv) ? nv : 1;
    entrada = en === 'mic' ? 'mic' : 'botoes';
    botMic.hidden = entrada !== 'mic';
    chips(); novo();
  })();

  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    if (motor.ouvindo) motor.parar();
    if (contando || motor.ouvindo) pararPratica();
    if (motor.ctx) motor.ctx.close().catch(() => {});
  };
}
