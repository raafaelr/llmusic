// CONFERÊNCIA DE POSTURA E ESPELHO
//
// Por que isto existe: o maior risco de estudar violão clássico sozinho não é
// errar nota — é consolidar um vício de postura. Polegar esquerdo abraçando o
// braço, pulso direito quebrado, ombros levantados. Esses erros não doem no
// primeiro mês; doem no segundo ano, e aí já viraram automatismo (e às vezes
// tendinite). Um professor corrige isso olhando. Sozinho, ninguém olha.
//
// Então o app faz as duas únicas coisas honestas que pode fazer:
//
//  1. Lembra. Uma conferência de cinco segundos antes de cada sessão de
//     estudo, com desenho do que observar.
//  2. Deixa você olhar. O "espelho" abre a câmera frontal ao lado do desenho
//     de referência. O app NÃO analisa a imagem, não grava e não envia nada:
//     quem compara é você. Isso é dito na tela, porque fingir uma análise que
//     não existe seria pior do que não ter espelho nenhum.
import { Config } from './db.js';
import { botaoIcone } from './icones.js';

const C_MOSTRAR = 'postura.conferir';   // mostrar a conferência ao entrar no Modo Estudo

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function svg(d, titulo) {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  s.setAttribute('viewBox', '0 0 64 58');
  s.setAttribute('class', 'postura-fig');
  s.setAttribute('role', 'img');
  s.setAttribute('aria-label', titulo);
  s.innerHTML = d;
  return s;
}

// Desenhos esquemáticos. Não são ilustrações anatômicas: são lembretes
// visuais, do tipo que você entende de relance com o violão já na mão.
const TRACO = 'fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"';
const FINO = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.5"';

// Nos itens em que o erro é o ponto da lição, o desenho mostra os dois:
// o errado à esquerda, riscado, e o certo à direita. É assim que um professor
// explica — "não assim, assim" — e é o que faz a figura ensinar em vez de
// enfeitar.
function par(errado, certo) {
  return `<g transform="translate(0,2)">${errado}</g>
    <g transform="translate(34,2)">${certo}</g>
    <path d="M6 4l10 10M16 4L6 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
    <path d="M40 10l3 4 7-9" fill="none" stroke="currentColor" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
    <path d="M31 6v48" stroke="currentColor" stroke-width="1" opacity="0.25"/>`;
}

const ITENS = [
  {
    id: 'sentar',
    titulo: 'Sentado na ponta da cadeira',
    o_que: 'Costas livres do encosto, os dois pés no chão, o pé esquerdo no banquinho. O peso nos ísquios, não na lombar.',
    // errado: encostado e escorrido · certo: tronco ereto na ponta
    fig: par(
      `<circle cx="14" cy="22" r="4" ${TRACO}/><path ${TRACO} d="M14 26l4 14"/>
       <path ${TRACO} d="M18 40h8"/><path ${FINO} d="M24 20v22"/><path ${FINO} d="M6 50h22"/>`,
      `<circle cx="14" cy="18" r="4" ${TRACO}/><path ${TRACO} d="M14 22v16"/>
       <path ${TRACO} d="M14 38l-5 8M14 38l7 6"/><path ${FINO} d="M4 50h24"/>
       <path ${FINO} d="M5 44h8v6H5z"/>`
    )
  },
  {
    id: 'ombros',
    titulo: 'Ombros soltos',
    o_que: 'Se subiram, pare, solte o ar e recomece. Ombro tenso não toca nem piano nem forte.',
    fig: par(
      `<circle cx="14" cy="20" r="4" ${TRACO}/><path ${TRACO} d="M5 26c3-6 15-6 18 0"/>
       <path ${FINO} d="M4 20l-2-4M24 20l2-4"/>`,
      `<circle cx="14" cy="18" r="4" ${TRACO}/><path ${TRACO} d="M3 32c4-6 18-6 22 0"/>
       <path ${FINO} d="M2 38c5-3 17-3 24 0"/>`
    )
  },
  {
    id: 'polegar',
    titulo: 'Polegar esquerdo no meio do braço',
    o_que: 'Atrás do braço, apontando para cima. Nunca abraçando por cima, como no violão popular.',
    // braço do violão em corte: o polegar por cima (errado) e atrás (certo)
    fig: par(
      `<rect x="4" y="24" width="22" height="14" rx="3" ${TRACO}/>
       <path ${FINO} d="M11 24v14M18 24v14"/>
       <path ${TRACO} d="M6 24c0-6 8-9 12-5"/>`,
      `<rect x="4" y="24" width="22" height="14" rx="3" ${TRACO}/>
       <path ${FINO} d="M11 24v14M18 24v14"/>
       <path ${TRACO} d="M15 38v10"/>`
    )
  },
  {
    id: 'pulso',
    titulo: 'Pulso direito reto',
    o_que: 'Linha contínua do antebraço à mão. Pulso quebrado é o caminho curto para a tendinite.',
    fig: par(
      `<path ${TRACO} d="M4 26h14"/><path ${TRACO} d="M18 26c6 0 8 6 8 12"/>
       <path ${FINO} d="M26 38v6"/>`,
      `<path ${TRACO} d="M4 28h22"/><path ${FINO} d="M26 28l-2 8"/>`
    )
  },
  {
    id: 'unhas',
    titulo: 'Unhas lisas e respiração',
    o_que: 'Unha da mão direita sem fio nem degrau: o fio engancha e estala. E respire — prender o ar na passagem difícil endurece tudo.',
    fig: par(
      `<path ${TRACO} d="M8 40c0-10 4-16 8-16s8 6 8 16"/>
       <path ${TRACO} d="M16 24l3 4-4 2 3 3" opacity="0.9"/>`,
      `<path ${TRACO} d="M8 40c0-10 4-16 8-16s8 6 8 16"/>
       <path ${FINO} d="M11 30c2-4 8-4 10 0"/>`
    )
  }
];

// --------------------------------------------------------------- o espelho
//
// Abre a câmera frontal numa camada, ao lado do desenho de referência.
// Nada é analisado, gravado nem enviado — a imagem só aparece na tela.
function abrirEspelho() {
  const capa = el('div', 'espelho-capa');
  const caixa = el('div', 'espelho-caixa');

  const cab = el('header', 'espelho-cab');
  cab.append(el('h2', 'espelho-titulo', 'Espelho'));
  const fechar = botaoIcone('botao-texto', 'fechar', 'Fechar');
  cab.append(fechar);
  caixa.append(cab);

  caixa.append(el('p', 'dica', 'A imagem fica só nesta tela: o app não analisa, não grava e não envia nada. '
    + 'Quem compara com a referência é você.'));

  const palco = el('div', 'espelho-palco');
  const video = document.createElement('video');
  video.setAttribute('playsinline', ''); video.muted = true; video.autoplay = true;
  video.className = 'espelho-video';
  const lado = el('div', 'espelho-ref');
  lado.append(svg(ITENS[0].fig, ITENS[0].titulo));
  lado.append(el('p', 'cartao-desc', ITENS[0].o_que));
  palco.append(video, lado);
  caixa.append(palco);

  const aviso = el('p', 'feedback', '');
  caixa.append(aviso);

  let fluxo = null;
  function encerrar() {
    if (fluxo) fluxo.getTracks().forEach((t) => t.stop());
    capa.remove();
    document.removeEventListener('keydown', aoTeclar);
  }
  function aoTeclar(ev) { if (ev.key === 'Escape') encerrar(); }
  fechar.onclick = encerrar;
  capa.onclick = (ev) => { if (ev.target === capa) encerrar(); };
  document.addEventListener('keydown', aoTeclar);

  document.body.append(capa);
  capa.append(caixa);

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
    .then((f) => { fluxo = f; video.srcObject = f; })
    .catch((e) => {
      palco.remove();
      aviso.className = 'feedback errado';
      aviso.textContent = e && e.name === 'NotAllowedError'
        ? 'Você não autorizou a câmera. Se mudar de ideia, autorize nas permissões do site e abra o espelho de novo.'
        : 'Não consegui abrir a câmera neste aparelho. Um espelho de verdade na frente do violão resolve igual.';
    });

  fechar.focus();
}

// -------------------------------------------------------- a conferência
//
// Devolve uma Promise que resolve quando a pessoa confirma ou pula.
export function conferirPostura() {
  return new Promise((resolve) => {
    const capa = el('div', 'postura-capa');
    const caixa = el('div', 'postura-caixa');

    caixa.append(el('h2', 'postura-titulo', 'Antes de tocar'));
    caixa.append(el('p', 'dica', 'Cinco segundos. É o que um professor olharia primeiro.'));

    const lista = el('div', 'postura-lista');
    ITENS.forEach((it) => {
      const linha = el('div', 'postura-item');
      linha.append(svg(it.fig, it.titulo));
      const txt = el('div');
      txt.append(el('strong', '', it.titulo));
      txt.append(el('span', 'cartao-desc', it.o_que));
      linha.append(txt);
      lista.append(linha);
    });
    caixa.append(lista);

    const acoes = el('div', 'bloco-botoes');
    const ok = el('button', 'botao-principal', 'Conferi, vamos tocar');
    const espelho = botaoIcone('botao-sec', 'camera', 'Abrir o espelho');
    acoes.append(ok, espelho);
    caixa.append(acoes);

    const nunca = el('label', 'config-linha');
    const cx = document.createElement('input');
    cx.type = 'checkbox';
    const t = el('div');
    t.append(el('strong', '', 'Não conferir toda vez'));
    t.append(el('span', 'cartao-desc', 'Dá para ligar de novo em Configurações.'));
    nunca.append(cx, t);
    caixa.append(nunca);

    function fechar() {
      capa.remove();
      document.removeEventListener('keydown', aoTeclar);
      if (cx.checked) Config.guardar(C_MOSTRAR, false).catch(() => {});
      resolve();
    }
    // Esc fecha a conferência — mas se o espelho estiver aberto por cima,
    // o Esc é dele: fecha só o espelho e a conferência continua na tela.
    function aoTeclar(ev) {
      if (ev.key !== 'Escape') return;
      if (document.querySelector('.espelho-capa')) return;
      fechar();
    }
    ok.onclick = fechar;
    espelho.onclick = abrirEspelho;
    document.addEventListener('keydown', aoTeclar);

    capa.append(caixa);
    document.body.append(capa);
    ok.focus();
  });
}

export const deveConferir = () => Config.obter(C_MOSTRAR, true);
export const ligarConferencia = (v) => Config.guardar(C_MOSTRAR, !!v);
export { abrirEspelho };
