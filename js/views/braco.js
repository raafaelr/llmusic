// Braço virtual: quatro exercícios para mapear as notas no braço.
//
//  - "Achar"   — o app diz a nota, você toca na tela onde ela está.
//  - "Nomear"  — o app marca uma casa, você diz que nota é. É o inverso do
//                "Achar", e é o que falta para a memória funcionar nos dois
//                sentidos: saber onde fica Fá não é o mesmo que olhar para a
//                1ª casa da 1ª corda e saber que ali é Fá.
//  - "Tocar"   — o app diz a nota e você a toca no violão (microfone). O app
//                NÃO mostra onde ela fica: achar é parte do exercício.
//  - "Oitavas" — o app diz a nota e você toca na tela TODAS as casas onde ela
//                aparece. É o exercício que transforma notas soltas em mapa.
//
// Cores: verde = certo, vermelho = errado, amarelo = quase (nota certa, mas
// desafinada) ou, quando se erra, onde a resposta certa estava.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi, NOMES_PT } from '../pitch.js';
import { CORDAS_PADRAO, midiNaCasa, nomeDaClasse, posicoesDaNota, posicoesDoMidi, midisAceitos, sortearPosicao, julgar } from '../braco.js';
import { botaoIcone } from '../icones.js';

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
  let aceitos = [];            // no "Tocar": os MIDIs que valem como resposta
  let faltam = [];             // nas "Oitavas": as posições que ainda não foram achadas
  let erroNaRodada = false;    // nas "Oitavas": a rodada só conta como acerto se for limpa
  let acertos = 0, tentativas = 0, sequencia = 0;
  let travado = false;         // durante o feedback
  let bloqueioMidi = -1, bloqueioAte = 0;  // ignora a nota anterior enquanto ela ainda ressoa
  let encerrada = false;
  const motor = new Afinador((f) => aoOuvir(f));

  const tela = el('main', 'tela braco');
  const topo = el('header', 'topo');
  const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Braço virtual'));

  const area = el('section', 'coluna braco-area');
  const pergunta = el('p', 'pergunta', '');
  pergunta.setAttribute('role', 'status');
  const svg = sv('svg', { viewBox: `0 0 ${L} ${A}`, class: 'braco-svg', role: 'img', 'aria-label': 'Braço do violão com 12 casas' });
  const feedback = el('p', 'feedback', '');
  feedback.setAttribute('aria-live', 'polite');
  const placar = el('p', 'placar', '');
  // O braço rola na horizontal dentro desta caixa: assim ele mantém o
  // tamanho legível sem fazer a página inteira rolar de lado.
  const caixaBraco = document.createElement('div');
  caixaBraco.className = 'rola-h';
  caixaBraco.append(svg);
  // Teclado de nomes do "Nomear": só aparece nesse exercício. Fica logo abaixo
  // do braço, perto de onde o olho está, e não lá embaixo com as opções.
  const nomes = el('div', 'nomes-nota');
  nomes.hidden = true;
  NOMES_PT.forEach((nome, pc) => {
    const b = el('button', 'chip sm', nome);
    b.onclick = () => aoNome(pc);
    nomes.append(b);
  });

  area.append(pergunta, caixaBraco, nomes, feedback, placar);

  const opcoes = el('section', 'braco-opcoes');
  const gModo = el('div', 'grupo');   gModo.append(el('h2', 'rotulo-grupo', 'Exercício'));
  const chipsModo = el('div', 'chips'); gModo.append(chipsModo);
  const gAlc = el('div', 'grupo');    gAlc.append(el('h2', 'rotulo-grupo', 'Casas'));
  const chipsAlc = el('div', 'chips'); gAlc.append(chipsAlc);
  const gCor = el('div', 'grupo');    gCor.append(el('h2', 'rotulo-grupo', 'Corda'));
  const chipsCor = el('div', 'chips'); gCor.append(chipsCor);
  const botMic = botaoIcone('botao-sec', 'microfone', 'Ligar microfone');
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
  const cordasAtivas = () => (cordaSel < 0 ? [0, 1, 2, 3, 4, 5] : [cordaSel]);
  const naCorda = () => (cordaSel >= 0 ? ' na corda ' + (cordaSel + 1) : '');

  function novoAlvo() {
    const cordas = cordasAtivas();
    alvo = sortearPosicao(cordas, alcance, alvo);
    travado = false;
    erroNaRodada = false;
    limparPontos();
    feedback.textContent = '';
    feedback.className = 'feedback';
    nomes.hidden = modo !== 'nomear';
    const pc = ((midiNaCasa(alvo.corda, alvo.casa) % 12) + 12) % 12;
    const nomeAlvo = nomeDaClasse(pc);

    if (modo === 'achar') {
      pergunta.textContent = 'Onde está ' + nomeAlvo + '?' + (cordaSel >= 0 ? ' (corda ' + (cordaSel + 1) + ')' : '');
    } else if (modo === 'nomear') {
      // A casa é marcada com "?" — quem responde é o teclado de nomes.
      pintar(alvo, 'alvo', '?');
      pergunta.textContent = 'Que nota é esta?';
    } else if (modo === 'tocar') {
      // Nada é pintado e a posição não é dita: achar a nota no braço é o
      // exercício. Vale qualquer posição daquela nota dentro das opções
      // escolhidas — o microfone ouve a altura, não a corda.
      aceitos = midisAceitos(pc, alcance, cordas);
      pergunta.textContent = 'Toque ' + nomeAlvo + naCorda();
    } else {
      faltam = posicoesDaNota(pc, alcance).filter((p) => cordas.includes(p.corda));
      pergunta.textContent = 'Toque todas as casas onde está ' + nomeAlvo + naCorda();
    }
    atualizarPlacar();
    pergunta.dataset.alvo = nomeAlvo;
  }

  function atualizarPlacar() {
    const base = acertos + ' de ' + tentativas + ' · sequência ' + sequencia;
    placar.textContent = modo === 'oitavas' && alvo
      ? base + ' · faltam ' + faltam.length
      : base;
  }
  function resultado(certo) {
    tentativas++;
    if (certo) { acertos++; sequencia++; } else sequencia = 0;
    atualizarPlacar();
  }

  // Resposta do teclado de nomes, no "Nomear".
  function aoNome(pc) {
    if (modo !== 'nomear' || travado || !alvo) return;
    const certa = ((midiNaCasa(alvo.corda, alvo.casa) % 12) + 12) % 12;
    travado = true;
    if (pc === certa) {
      pintar(alvo, 'certo', nomeDaClasse(certa));
      feedback.textContent = '✓ Isso mesmo!';
      feedback.className = 'feedback certo';
      resultado(true);
      setTimeout(() => { if (!encerrada) novoAlvo(); }, 900);
    } else {
      pintar(alvo, 'errado', nomeDaClasse(certa));
      feedback.textContent = 'Era ' + nomeDaClasse(certa) + ', não ' + nomeDaClasse(pc) + '.';
      feedback.className = 'feedback errado';
      resultado(false);
      setTimeout(() => { if (!encerrada) novoAlvo(); }, 2000);
    }
  }

  // Toque na tela, nas "Oitavas": vai marcando as casas achadas até completar.
  function aoToqueOitavas(corda, casa) {
    const pc = ((midiNaCasa(alvo.corda, alvo.casa) % 12) + 12) % 12;
    const clicada = ((midiNaCasa(corda, casa) % 12) + 12) % 12;
    const i = faltam.findIndex((p) => p.corda === corda && p.casa === casa);
    if (i >= 0) {
      faltam.splice(i, 1);
      pintar({ corda, casa }, 'certo', nomeDaClasse(pc));
      if (!faltam.length) {
        travado = true;
        feedback.textContent = erroNaRodada ? 'Completou — mas com tropeços.' : '✓ Todas! O mapa de ' + nomeDaClasse(pc) + ' é esse.';
        feedback.className = 'feedback ' + (erroNaRodada ? 'quase' : 'certo');
        resultado(!erroNaRodada);
        setTimeout(() => { if (!encerrada) novoAlvo(); }, 1600);
        return;
      }
      feedback.textContent = '';
      feedback.className = 'feedback';
      atualizarPlacar();
      return;
    }
    // Já marcada antes não conta como erro; casa errada, sim.
    if (clicada === pc) return;
    erroNaRodada = true;
    pintar({ corda, casa }, 'errado', nomeDaClasse(clicada));
    feedback.textContent = 'Aqui é ' + nomeDaClasse(clicada) + '. Procure ' + nomeDaClasse(pc) + '.';
    feedback.className = 'feedback errado';
    atualizarPlacar();
    setTimeout(() => {
      if (encerrada || travado) return;
      const c = celulas[corda + ',' + casa];
      if (c) { c.setAttribute('class', 'ponto'); c.parentNode.__t.textContent = ''; }
      if (feedback.classList.contains('errado')) { feedback.textContent = ''; feedback.className = 'feedback'; }
    }, 1400);
  }

  function aoToque(corda, casa) {
    if (travado || !alvo || casa > alcance || (cordaSel >= 0 && corda !== cordaSel)) return;
    if (modo === 'oitavas') { aoToqueOitavas(corda, casa); return; }
    if (modo !== 'achar') return;
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
    const pcAlvo = ((midiNaCasa(alvo.corda, alvo.casa) % 12) + 12) % 12;
    if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
    // Vale qualquer posição da nota pedida dentro das opções escolhidas, em
    // qualquer oitava: o aluno é quem decide onde tocá-la.
    const v = julgar(aceitos, r.midi, r.cents);
    const n = nomeDoMidi(r.midi);
    const ondeToquei = posicoesDoMidi(r.midi, alcance).filter((p) => cordaSel < 0 || p.corda === cordaSel);
    if (v === 'certo') {
      travado = true;
      bloqueioMidi = r.midi; bloqueioAte = performance.now() + 3000;
      // Só agora o braço revela onde a nota estava. Como a mesma altura cabe
      // em mais de uma corda, acendem todas as casas que soam esse som.
      ondeToquei.forEach((p) => pintar(p, 'certo', n.pt));
      feedback.textContent = '✓ ' + n.pt + n.oitava + ' certinho!'
        + (ondeToquei.length > 1 ? ' (acende em mais de uma corda porque soam igual)' : '');
      feedback.className = 'feedback certo';
      resultado(true);
      setTimeout(() => { if (!encerrada) novoAlvo(); }, 1400);
    } else if (v === 'quase') {
      ondeToquei.forEach((p) => pintar(p, 'quase', n.pt));
      feedback.textContent = 'Quase! ' + (r.cents > 0 ? 'Um pouco aguda' : 'Um pouco grave') + ' — ajuste.';
      feedback.className = 'feedback quase';
    } else {
      // Errou: mostra onde ele tocou e, em amarelo, onde a nota pedida está.
      ondeToquei.forEach((p) => pintar(p, 'errado', n.pt));
      posicoesDaNota(pcAlvo, alcance).filter((p) => cordaSel < 0 || p.corda === cordaSel)
        .forEach((p) => pintar(p, 'quase', nomeDaClasse(pcAlvo)));
      feedback.textContent = 'Você tocou ' + n.pt + n.oitava + '. ' + nomeDaClasse(pcAlvo) + ' está em amarelo.';
      feedback.className = 'feedback errado';
    }
  }

  // ---------- controles ----------
  function chips() {
    chipsModo.innerHTML = '';
    [['achar', 'Achar a nota'], ['nomear', 'Nomear a casa'],
     ['tocar', 'Tocar a nota'], ['oitavas', 'Todas as posições']].forEach(([id, nome]) => {
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
    modo = ['achar', 'nomear', 'tocar', 'oitavas'].includes(m) ? m : 'achar';
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
