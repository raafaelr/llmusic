// Tela do metrônomo.
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Metronomo, COMPASSOS, SUBDIVISOES, BPM_MIN, BPM_MAX, limitarBpm, andamento } from '../metronome.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

export function montar(raiz, ir) {
  const metro = new Metronomo((pulso) => acender(pulso));
  let batidas = [];
  let travaTela = null;
  let toques = [];
  let encerrada = false;

  // ---------- estrutura da tela ----------
  const tela = el('main', 'tela metronomo');

  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Metrônomo'));

  const colEsq = el('section', 'coluna');
  const nomeAndamento = el('p', 'andamento');
  const bpmNum = el('div', 'bpm-num');
  bpmNum.setAttribute('role', 'status');
  bpmNum.setAttribute('aria-live', 'off');
  const bpmRot = el('p', 'rotulo', 'batidas por minuto');
  const ajustes = el('div', 'linha-botoes');
  [['−5', -5], ['−1', -1], ['+1', 1], ['+5', 5]].forEach(([txt, passo]) => {
    const b = el('button', 'botao-passo', txt);
    b.setAttribute('aria-label', (passo > 0 ? 'Aumentar ' : 'Diminuir ') + Math.abs(passo) + ' BPM');
    b.onclick = () => mudarBpm(metro.bpm + passo);
    ajustes.append(b);
  });
  const deslizante = document.createElement('input');
  deslizante.type = 'range';
  deslizante.min = BPM_MIN;
  deslizante.max = BPM_MAX;
  deslizante.setAttribute('aria-label', 'Andamento em BPM');
  deslizante.oninput = () => mudarBpm(+deslizante.value);
  colEsq.append(nomeAndamento, bpmNum, bpmRot, ajustes, deslizante);

  const colDir = el('section', 'coluna');
  const trilho = el('div', 'batidas');
  trilho.setAttribute('aria-hidden', 'true');

  const gCompasso = el('div', 'grupo');
  gCompasso.append(el('h2', 'rotulo-grupo', 'Compasso'));
  const chipsCompasso = el('div', 'chips');
  gCompasso.append(chipsCompasso);

  const gSub = el('div', 'grupo');
  gSub.append(el('h2', 'rotulo-grupo', 'Subdivisão'));
  const chipsSub = el('div', 'chips');
  gSub.append(chipsSub);

  const acoes = el('div', 'acoes');
  const tap = el('button', 'botao-sec', 'Marcar tempo (tap)');
  const play = el('button', 'botao-principal', '▶ Iniciar');
  acoes.append(tap, play);

  const dica = el('p', 'dica', 'O número de batidas é contado na figura do compasso: semínima em 2/4, 3/4 e 4/4, colcheia em 6/8.');

  colDir.append(trilho, gCompasso, gSub, acoes);
  tela.append(topo, colEsq, colDir, dica);
  raiz.append(tela);

  // ---------- funções da tela ----------
  function desenharBatidas() {
    const c = COMPASSOS[metro.compasso];
    trilho.innerHTML = '';
    batidas = [];
    for (let i = 0; i < c.pulsos; i++) {
      const b = el('span', 'batida' + (i === 0 ? ' forte' : c.medios.includes(i) ? ' media' : ''));
      trilho.append(b);
      batidas.push(b);
    }
  }
  function acender(pulso) {
    batidas.forEach((b, i) => b.classList.toggle('ativa', i === pulso));
  }
  function desenharChips() {
    chipsCompasso.innerHTML = '';
    Object.keys(COMPASSOS).forEach((nome) => {
      const b = el('button', 'chip', nome);
      b.setAttribute('aria-pressed', nome === metro.compasso ? 'true' : 'false');
      b.onclick = () => {
        metro.mudarCompasso(nome);
        Config.guardar('metro.compasso', nome);
        desenharBatidas();
        desenharChips();
      };
      chipsCompasso.append(b);
    });
    chipsSub.innerHTML = '';
    SUBDIVISOES.forEach((s) => {
      const b = el('button', 'chip', s.nome);
      b.setAttribute('aria-pressed', s.valor === metro.subdivisao ? 'true' : 'false');
      b.onclick = () => {
        metro.subdivisao = s.valor;
        Config.guardar('metro.subdivisao', s.valor);
        desenharChips();
      };
      chipsSub.append(b);
    });
  }
  function mudarBpm(n) {
    metro.bpm = limitarBpm(n);
    bpmNum.textContent = metro.bpm;
    nomeAndamento.textContent = andamento(metro.bpm);
    deslizante.value = metro.bpm;
    Config.guardar('metro.bpm', metro.bpm);
  }

  async function pedirTelaLigada() {
    try {
      if ('wakeLock' in navigator && !travaTela) {
        travaTela = await navigator.wakeLock.request('screen');
        travaTela.addEventListener('release', () => { travaTela = null; });
      }
    } catch (e) { /* sem problema: a tela só pode apagar sozinha */ }
  }
  async function iniciar() {
    await metro.iniciar();
    comecarPratica();
    pedirTelaLigada();
    play.textContent = '■ Parar';
    play.classList.add('ligado');
  }
  async function parar() {
    metro.parar();
    acender(-1);
    await pararPratica();
    if (travaTela) { travaTela.release(); travaTela = null; }
    play.textContent = '▶ Iniciar';
    play.classList.remove('ligado');
  }
  play.onclick = () => (metro.rodando ? parar() : iniciar());

  // Tap tempo: você toca no ritmo e o app calcula o BPM pela média dos intervalos.
  tap.onclick = () => {
    const agora = performance.now();
    if (toques.length && agora - toques[toques.length - 1] > 2000) toques = [];
    toques.push(agora);
    toques = toques.slice(-5);
    if (toques.length >= 2) {
      const soma = toques[toques.length - 1] - toques[0];
      const media = soma / (toques.length - 1);
      mudarBpm(60000 / media);
    }
  };

  // Se você sair do app com o metrônomo ligado, ele para e o tempo é salvo.
  function aoEsconder() { if (document.hidden && metro.rodando) parar(); }
  document.addEventListener('visibilitychange', aoEsconder);

  // ---------- começo: carrega o que estava salvo ----------
  (async () => {
    metro.bpm = limitarBpm(await Config.obter('metro.bpm', 80));
    const comp = await Config.obter('metro.compasso', '4/4');
    metro.mudarCompasso(COMPASSOS[comp] ? comp : '4/4');
    const sub = await Config.obter('metro.subdivisao', 1);
    metro.subdivisao = SUBDIVISOES.some((s) => s.valor === sub) ? sub : 1;
    if (encerrada) return;
    mudarBpm(metro.bpm);
    desenharBatidas();
    desenharChips();
  })();

  // Função de limpeza: o roteador chama quando você sai desta tela.
  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    if (metro.rodando) parar();
  };
}
