// Tela do afinador.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi, centsAteAlvo, cordaMaisProxima, AFINACOES } from '../pitch.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

export function montar(raiz, ir) {
  let modo = 'violao';           // 'violao' ou 'cromatico'
  let afinacao = AFINACOES[0];
  let a4 = 440;
  let corda = -1;                // corda escolhida para afinar (-1 = automático)
  let encerrada = false;

  const motor = new Afinador((freq) => atualizar(freq));

  // ---------- estrutura ----------
  const tela = el('main', 'tela afinador');
  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Afinador'));

  const colEsq = el('section', 'coluna');
  const nota = el('div', 'nota-grande', '–');
  nota.setAttribute('role', 'status');
  const detalhe = el('p', 'rotulo nota-detalhe', 'Toque uma corda');
  const medidor = el('div', 'medidor');
  medidor.setAttribute('aria-hidden', 'true');
  const zonaCerta = el('span', 'medidor-centro');
  const ponteiro = el('span', 'ponteiro');
  medidor.append(zonaCerta, ponteiro);
  const escala = el('div', 'escala');
  escala.setAttribute('aria-hidden', 'true');
  ['−50', '0', '+50'].forEach((t) => escala.append(el('span', '', t)));
  const dica = el('p', 'andamento dica-afinar', '');
  colEsq.append(nota, detalhe, medidor, escala, dica);

  const colDir = el('section', 'coluna');
  const gModo = el('div', 'grupo');
  gModo.append(el('h2', 'rotulo-grupo', 'Modo'));
  const chipsModo = el('div', 'chips');
  gModo.append(chipsModo);

  const gAf = el('div', 'grupo');
  gAf.append(el('h2', 'rotulo-grupo', 'Afinação'));
  const chipsAf = el('div', 'chips');
  gAf.append(chipsAf);

  const gCordas = el('div', 'grupo');
  gCordas.append(el('h2', 'rotulo-grupo', 'Cordas (toque para ouvir a nota)'));
  const cordas = el('div', 'cordas');
  gCordas.append(cordas);

  const gA4 = el('div', 'grupo');
  gA4.append(el('h2', 'rotulo-grupo', 'Referência do Lá (A4)'));
  const linhaA4 = el('div', 'linha-a4');
  const menos = el('button', 'botao-passo', '−');
  const valA4 = el('span', 'valor-a4', '440 Hz');
  const mais = el('button', 'botao-passo', '+');
  menos.setAttribute('aria-label', 'Diminuir 1 Hz');
  mais.setAttribute('aria-label', 'Aumentar 1 Hz');
  linhaA4.append(menos, valA4, mais);
  gA4.append(linhaA4);

  const botao = el('button', 'botao-principal', '🎤 Ligar microfone');
  const aviso = el('p', 'dica aviso-mic', 'Use em lugar silencioso, com o celular perto do violão.');

  colDir.append(gModo, gAf, gCordas, gA4, botao, aviso);
  tela.append(topo, colEsq, colDir);
  raiz.append(tela);

  // ---------- desenho ----------
  function desenharChips() {
    chipsModo.innerHTML = '';
    [['violao', 'Violão'], ['cromatico', 'Cromático']].forEach(([id, nome]) => {
      const b = el('button', 'chip', nome);
      b.setAttribute('aria-pressed', id === modo ? 'true' : 'false');
      b.onclick = () => { modo = id; corda = -1; Config.guardar('afin.modo', id); desenharChips(); resetar(); };
      chipsModo.append(b);
    });
    gAf.hidden = modo !== 'violao';
    chipsAf.innerHTML = '';
    AFINACOES.forEach((a) => {
      const b = el('button', 'chip sm', a.nome);
      b.setAttribute('aria-pressed', a === afinacao ? 'true' : 'false');
      b.onclick = () => { afinacao = a; corda = -1; Config.guardar('afin.afinacao', a.id); desenharChips(); resetar(); };
      chipsAf.append(b);
    });
    cordas.innerHTML = '';
    afinacao.midis.forEach((m, i) => {
      const n = nomeDoMidi(m);
      const b = el('button', 'corda');
      b.append(el('span', 'corda-num', String(6 - i)), el('span', 'corda-nome', afinacao.nomes[i]), el('span', 'corda-oit', String(n.oitava)));
      b.setAttribute('aria-label', 'Corda ' + (6 - i) + ', ' + afinacao.nomes[i] + n.oitava + '. Tocar nota de referência');
      b.onclick = () => { corda = i; motor.tocarReferencia(m, a4); marcarCorda(i, false); };
      cordas.append(b);
    });
  }
  function marcarCorda(i, detectada) {
    [...cordas.children].forEach((b, k) => {
      b.classList.toggle('detectada', detectada && k === i);
      b.classList.toggle('escolhida', !detectada && k === i);
    });
  }
  function resetar() {
    nota.textContent = '–';
    nota.className = 'nota-grande';
    detalhe.textContent = motor.ouvindo ? 'Toque uma corda' : 'Ligue o microfone ou toque uma corda para ouvir';
    ponteiro.style.left = '50%';
    ponteiro.className = 'ponteiro';
    dica.textContent = '';
    [...cordas.children].forEach((b) => b.classList.remove('detectada'));
  }

  // Recebe a frequência ouvida (ou null) e atualiza nota, medidor e dica.
  function atualizar(freq) {
    if (encerrada) return;
    if (!freq) {
      if (motor.ouvindo && !(motor.ctx && motor.ctx.currentTime < motor.mudoAte)) resetar();
      return;
    }
    let midi, cents, alvoNome;
    if (modo === 'violao') {
      const i = corda >= 0 && motor.ctx.currentTime > motor.mudoAte + 0.5 && Math.abs(centsAteAlvo(freq, afinacao.midis[corda], a4)) < 100
        ? corda : cordaMaisProxima(freq, afinacao.midis, a4);
      midi = afinacao.midis[i];
      cents = centsAteAlvo(freq, midi, a4);
      alvoNome = afinacao.nomes[i];
      marcarCorda(i, true);
    } else {
      const r = notaMaisProxima(freq, a4);
      midi = r.midi; cents = r.cents;
      alvoNome = nomeDoMidi(midi).pt;
    }
    const n = nomeDoMidi(midi);
    const c = Math.max(-50, Math.min(50, cents));
    const abs = Math.abs(cents);
    const estado = abs <= 5 ? 'certo' : abs <= 15 ? 'perto' : 'longe';
    nota.textContent = alvoNome;
    nota.className = 'nota-grande ' + estado;
    detalhe.textContent = n.pt + n.oitava + ' (' + n.en + n.oitava + ') · ' + freq.toFixed(1).replace('.', ',') + ' Hz · ' +
      (cents >= 0 ? '+' : '−') + Math.abs(cents).toFixed(0) + ' cents';
    ponteiro.style.left = (50 + c) + '%';
    ponteiro.className = 'ponteiro ' + estado;
    dica.textContent = estado === 'certo' ? '✓ Afinada!' : cents > 0 ? 'Muito aguda: afrouxe' : 'Muito grave: aperte';
  }

  function mudarA4(v) {
    a4 = Math.max(430, Math.min(450, v));
    valA4.textContent = a4 + ' Hz';
    Config.guardar('afin.a4', a4);
  }
  menos.onclick = () => mudarA4(a4 - 1);
  mais.onclick = () => mudarA4(a4 + 1);

  async function ligar() {
    aviso.textContent = '';
    try {
      await motor.iniciar();
      comecarPratica();
      botao.textContent = '■ Parar microfone';
      botao.classList.add('ligado');
      aviso.textContent = 'Ouvindo… toque uma corda solta.';
      resetar();
    } catch (e) {
      const negou = e && (e.name === 'NotAllowedError' || e.name === 'SecurityError');
      aviso.textContent = negou
        ? 'O microfone foi bloqueado. Toque no cadeado ao lado do endereço (ou nas configurações do app) e permita o microfone.'
        : 'Não consegui usar o microfone neste aparelho.';
    }
  }
  async function desligar() {
    motor.parar();
    await pararPratica();
    botao.textContent = '🎤 Ligar microfone';
    botao.classList.remove('ligado');
    aviso.textContent = 'Use em lugar silencioso, com o celular perto do violão.';
    resetar();
  }
  botao.onclick = () => (motor.ouvindo ? desligar() : ligar());

  function aoEsconder() { if (document.hidden && motor.ouvindo) desligar(); }
  document.addEventListener('visibilitychange', aoEsconder);

  // ---------- começo ----------
  (async () => {
    const m = await Config.obter('afin.modo', 'violao');
    const id = await Config.obter('afin.afinacao', 'padrao');
    const ref = await Config.obter('afin.a4', 440);
    if (encerrada) return;
    modo = m === 'cromatico' ? 'cromatico' : 'violao';
    afinacao = AFINACOES.find((a) => a.id === id) || AFINACOES[0];
    mudarA4(typeof ref === 'number' ? ref : 440);
    desenharChips();
    resetar();
  })();

  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    if (motor.ouvindo) { motor.parar(); pararPratica(); }
    if (motor.ctx) motor.ctx.close().catch(() => {});
  };
}
