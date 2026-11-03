// Braço virtual: dois exercícios com feedback em cores.
//  - "Achar": o app diz uma nota e você toca na tela onde ela está.
//  - "Tocar": o app marca uma casa no braço e você toca a nota no violão (usa o microfone).
// Cores: verde = certo, vermelho = errado, amarelo = quase (nota certa, mas desafinada).
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi } from '../pitch.js';
import { CORDAS_PADRAO, midiNaCasa, nomeDaClasse, posicoesDaNota, sortearPosicao, julgar } from '../braco.js';

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

const L = 1000, A = 244, X0 = 60, NCASAS = 12, PASSO = (L - X0 - 10) / NCASAS, Y0 = 28, DY = 35;
const xCasa = (c) => (c === 0 ? X0 - 28 : X0 + (c - 0.5) * PASSO);   // centro da bolinha
const yCorda = (s) => Y0 + s * DY;

export function montar(raiz, ir) {
  let modo = 'achar';          // 'achar' | 'tocar'
  let alcance = 5;             // maior casa usada: 0, 5 ou 12
  let cordaSel = -1;           // -1 = todas
  let alvo = null;             // {corda, casa}
  let acertos = 0, tentativas = 0, sequencia = 0;
  let travado = false;         // durante o feedback
  let bloqueioMidi = -1, bloqueioAte = 0;  // ignora a nota anterior enquanto ela ainda ressoa
  let encerrada = false;
  const motor = new Afinador((f) => aoOuvir(f));

  const tela = el('main', 'tela braco');
  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Braço virtual'));

  const area = el('section', 'coluna braco-area');
  const pergunta = el('p', 'pergunta', '');
  pergunta.setAttribute('role', 'status');
  const svg = sv('svg', { viewBox: `0 0 ${L} ${A}`, class: 'braco-svg', role: 'img', 'aria-label': 'Braço do violão com 12 casas' });
  const feedback = el('p', 'feedback', '');
  feedback.setAttribute('aria-live', 'polite');
  const placar = el('p', 'placar', '');
  area.append(pergunta, svg, feedback, placar);

  const opcoes = el('section', 'braco-opcoes');
  const gModo = el('div', 'grupo');   gModo.append(el('h2', 'rotulo-grupo', 'Exercício'));
  const chipsModo = el('div', 'chips'); gModo.append(chipsModo);
  const gAlc = el('div', 'grupo');    gAlc.append(el('h2', 'rotulo-grupo', 'Casas'));
  const chipsAlc = el('div', 'chips'); gAlc.append(chipsAlc);
  const gCor = el('div', 'grupo');    gCor.append(el('h2', 'rotulo-grupo', 'Corda'));
  const chipsCor = el('div', 'chips'); gCor.append(chipsCor);
  const botMic = el('button', 'botao-sec', '🎤 Ligar microfone');
  botMic.hidden = true;
  const botPular = el('button', 'botao-sec', 'Pular');
  const linha = el('div', 'acoes'); linha.append(botPular, botMic);
  opcoes.append(gModo, gAlc, gCor, linha);

  tela.append(topo, area, opcoes);
  raiz.append(tela);

  // ---------- desenho do braço ----------
  let celulas = {};   // "corda,casa" -> círculo
  function desenhar() {
    svg.innerHTML = '';
    celulas = {};
    sv('rect', { x: X0, y: Y0 - 14, width: L - X0 - 10, height: DY * 5 + 28, rx: 6, class: 'madeira' }, svg);
    for (let c = 1; c <= NCASAS; c++) {
      const x = X0 + c * PASSO;
      sv('line', { x1: x, x2: x, y1: Y0 - 14, y2: Y0 + DY * 5 + 14, class: 'traste' }, svg);
      const t = sv('text', { x: X0 + (c - 0.5) * PASSO, y: A - 8, class: 'num-casa', 'text-anchor': 'middle' }, svg);
      t.textContent = c;
    }
    sv('line', { x1: X0, x2: X0, y1: Y0 - 14, y2: Y0 + DY * 5 + 14, class: 'pestana' }, svg);
    [3, 5, 7, 9].forEach((c) => sv('circle', { cx: X0 + (c - 0.5) * PASSO, cy: Y0 + DY * 2.5, r: 6, class: 'marca-casa' }, svg));
    sv('circle', { cx: X0 + 11.5 * PASSO, cy: Y0 + DY * 1.5, r: 6, class: 'marca-casa' }, svg);
    sv('circle', { cx: X0 + 11.5 * PASSO, cy: Y0 + DY * 3.5, r: 6, class: 'marca-casa' }, svg);
    for (let s = 0; s < 6; s++) {
      sv('line', { x1: X0, x2: L - 10, y1: yCorda(s), y2: yCorda(s), class: 'corda-svg', 'stroke-width': 1 + s * 0.45 }, svg);
      const n = sv('text', { x: 12, y: yCorda(s) + 5, class: 'num-corda' }, svg);
      n.textContent = s + 1;
    }
    for (let s = 0; s < 6; s++) {
      for (let c = 0; c <= NCASAS; c++) {
        const ativa = c <= alcance && (cordaSel < 0 || cordaSel === s);
        const g = sv('g', { class: 'celula' + (ativa ? '' : ' fora'), 'data-corda': s, 'data-casa': c }, svg);
        sv('rect', c === 0 ? { x: 2, y: yCorda(s) - DY / 2, width: X0 - 4, height: DY, class: 'toque' } : { x: xCasa(c) - PASSO / 2, y: yCorda(s) - DY / 2, width: PASSO, height: DY, class: 'toque' }, g);
        celulas[s + ',' + c] = sv('circle', { cx: xCasa(c), cy: yCorda(s), r: 12, class: 'ponto' }, g);
        const t = sv('text', { x: xCasa(c), y: yCorda(s) + 4, class: 'ponto-txt', 'text-anchor': 'middle' }, g);
        t.textContent = '';
        g.__t = t;
        g.onclick = () => aoToque(s, c);
      }
    }
  }
  function limparPontos() {
    Object.values(celulas).forEach((c) => { c.setAttribute('class', 'ponto'); c.parentNode.__t.textContent = ''; });
  }
  function pintar(pos, cor, texto) {
    const c = celulas[pos.corda + ',' + pos.casa];
    if (!c) return;
    c.setAttribute('class', 'ponto ' + cor);
    c.parentNode.__t.textContent = texto || '';
  }

  // ---------- exercício ----------
  function novoAlvo() {
    const cordas = cordaSel < 0 ? [0, 1, 2, 3, 4, 5] : [cordaSel];
    alvo = sortearPosicao(cordas, alcance, alvo);
    travado = false;
    limparPontos();
    feedback.textContent = '';
    feedback.className = 'feedback';
    const nomeAlvo = nomeDaClasse(midiNaCasa(alvo.corda, alvo.casa));
    if (modo === 'achar') {
      pergunta.textContent = 'Onde está ' + nomeAlvo + '?' + (cordaSel >= 0 ? ' (corda ' + (cordaSel + 1) + ')' : '');
    } else {
      pintar(alvo, 'alvo', nomeAlvo);
      pergunta.textContent = 'Toque ' + nomeAlvo + ' (corda ' + (alvo.corda + 1) + ', ' + (alvo.casa === 0 ? 'solta' : 'casa ' + alvo.casa) + ')';
    }
    placar.textContent = acertos + ' de ' + tentativas + ' · sequência ' + sequencia;
    pergunta.dataset.alvo = nomeAlvo;
  }
  function resultado(certo) {
    tentativas++;
    if (certo) { acertos++; sequencia++; } else sequencia = 0;
    placar.textContent = acertos + ' de ' + tentativas + ' · sequência ' + sequencia;
  }

  function aoToque(corda, casa) {
    if (modo !== 'achar' || travado || casa > alcance || (cordaSel >= 0 && corda !== cordaSel)) return;
    const pc = ((midiNaCasa(alvo.corda, alvo.casa) % 12) + 12) % 12;
    const clicada = ((midiNaCasa(corda, casa) % 12) + 12) % 12;
    travado = true;
    if (clicada === pc) {
      pintar({ corda, casa }, 'certo', nomeDaClasse(pc));
      feedback.textContent = '✓ Isso mesmo!';
      feedback.className = 'feedback certo';
      resultado(true);
      setTimeout(() => { if (!encerrada) novoAlvo(); }, 900);
    } else {
      pintar({ corda, casa }, 'errado', nomeDaClasse(clicada));
      posicoesDaNota(pc, alcance).filter((p) => cordaSel < 0 || p.corda === cordaSel)
        .forEach((p) => pintar(p, 'quase', nomeDaClasse(pc)));
      feedback.textContent = 'Aqui é ' + nomeDaClasse(clicada) + '. As posições de ' + nomeDaClasse(pc) + ' estão em amarelo.';
      feedback.className = 'feedback errado';
      resultado(false);
      setTimeout(() => { if (!encerrada) novoAlvo(); }, 2200);
    }
  }

  function aoOuvir(freq) {
    if (modo !== 'tocar' || encerrada || !alvo) return;
    if (!freq || travado) return;
    if (motor.ctx && motor.ctx.currentTime < motor.mudoAte) return;
    const r = notaMaisProxima(freq);
    const alvoMidi = midiNaCasa(alvo.corda, alvo.casa);
    if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
    const v = julgar(alvoMidi, r.midi, r.cents);
    const n = nomeDoMidi(r.midi);
    if (v === 'certo') {
      travado = true;
      bloqueioMidi = alvoMidi; bloqueioAte = performance.now() + 3000;
      pintar(alvo, 'certo', n.pt);
      feedback.textContent = '✓ ' + n.pt + n.oitava + ' certinho!';
      feedback.className = 'feedback certo';
      resultado(true);
      setTimeout(() => { if (!encerrada) novoAlvo(); }, 1200);
    } else if (v === 'quase') {
      pintar(alvo, 'quase', n.pt);
      feedback.textContent = 'Quase! ' + (r.cents > 0 ? 'Um pouco aguda' : 'Um pouco grave') + ' — ajuste.';
      feedback.className = 'feedback quase';
    } else {
      pintar(alvo, 'errado', n.pt);
      feedback.textContent = 'Você tocou ' + n.pt + n.oitava + '. Procure ' + nomeDaClasse(alvoMidi) + '.';
      feedback.className = 'feedback errado';
    }
  }

  // ---------- controles ----------
  function chips() {
    chipsModo.innerHTML = '';
    [['achar', 'Achar a nota'], ['tocar', 'Tocar a nota']].forEach(([id, nome]) => {
      const b = el('button', 'chip', nome);
      b.setAttribute('aria-pressed', String(id === modo));
      b.onclick = async () => {
        if (modo === 'tocar' && id !== 'tocar' && motor.ouvindo) await desligarMic();
        modo = id; Config.guardar('braco.modo', id); botMic.hidden = id !== 'tocar';
        chips(); novoAlvo();
      };
      chipsModo.append(b);
    });
    chipsAlc.innerHTML = '';
    [[0, 'Soltas'], [5, 'Até a 5ª'], [12, 'Até a 12ª']].forEach(([v, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(v === alcance));
      b.onclick = () => { alcance = v; Config.guardar('braco.alcance', v); chips(); desenhar(); novoAlvo(); };
      chipsAlc.append(b);
    });
    chipsCor.innerHTML = '';
    [[-1, 'Todas'], [0, '1'], [1, '2'], [2, '3'], [3, '4'], [4, '5'], [5, '6']].forEach(([v, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(v === cordaSel));
      b.setAttribute('aria-label', v < 0 ? 'Todas as cordas' : 'Corda ' + nome);
      b.onclick = () => { cordaSel = v; chips(); desenhar(); novoAlvo(); };
      chipsCor.append(b);
    });
  }
  botPular.onclick = () => { sequencia = 0; novoAlvo(); };

  async function ligarMic() {
    try {
      await motor.iniciar();
      comecarPratica();
      botMic.textContent = '■ Parar microfone';
    } catch (e) {
      feedback.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações do navegador.';
      feedback.className = 'feedback errado';
    }
  }
  async function desligarMic() {
    motor.parar();
    await pararPratica();
    botMic.textContent = '🎤 Ligar microfone';
  }
  botMic.onclick = () => (motor.ouvindo ? desligarMic() : ligarMic());

  function aoEsconder() { if (document.hidden && motor.ouvindo) desligarMic(); }
  document.addEventListener('visibilitychange', aoEsconder);

  (async () => {
    const m = await Config.obter('braco.modo', 'achar');
    const a = await Config.obter('braco.alcance', 5);
    if (encerrada) return;
    modo = m === 'tocar' ? 'tocar' : 'achar';
    alcance = [0, 5, 12].includes(a) ? a : 5;
    botMic.hidden = modo !== 'tocar';
    chips(); desenhar(); novoAlvo();
  })();

  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    if (motor.ouvindo) { motor.parar(); pararPratica(); }
    if (motor.ctx) motor.ctx.close().catch(() => {});
  };
}
