// Ponto de partida do app: escolhe qual tela mostrar e registra o service worker.
// As "rotas" são o que vem depois do # no endereço: #/metronomo mostra o metrônomo.
import * as home from './views/home.js';
import * as metronomo from './views/metronomo.js';
import * as afinador from './views/afinador.js';
import * as braco from './views/braco.js';
import * as leitura from './views/leitura.js';
import * as partituras from './views/partituras.js';
import * as habitos from './views/habitos.js';
import * as pacotes from './views/pacotes.js';
import * as caged from './views/caged.js';
import * as teoria from './views/teoria.js';
import * as ritmo from './views/ritmo.js';
import * as cagedAulas from './views/caged-aulas.js';
import * as importar from './views/importar.js';
import { criarMenu } from './menu.js';
import { nativo } from './nativo.js';

const TELAS = {
  '': home,
  'metronomo': metronomo,
  'afinador': afinador,
  'braco': braco,
  'leitura': leitura,
  'partituras': partituras,
  'habitos': habitos,
  'pacotes': pacotes,
  'caged': caged,
  'teoria': teoria,
  'ritmo': ritmo,
  'caged-aulas': cagedAulas,
  'importar': importar
};

const raiz = document.getElementById('app');
let limpar = null;   // função que desfaz a tela atual (para áudio, remove ouvintes...)

export function ir(rota) {
  location.hash = '#/' + rota;
}

// Pilha das telas visitadas: o botão Voltar do Android volta para a tela anterior.
const pilha = [];
function registrarRota(rota) {
  const n = pilha.length;
  if (n >= 2 && pilha[n - 2] === rota) pilha.pop();          // voltou
  else if (pilha[n - 1] !== rota) { pilha.push(rota); if (pilha.length > 60) pilha.shift(); }
}

function mostrar() {
  const rota = location.hash.replace(/^#\/?/, '');
  const tela = TELAS[rota] || home;
  registrarRota(TELAS[rota] ? rota : '');
  if (limpar) limpar();
  raiz.innerHTML = '';
  limpar = tela.montar(raiz, ir);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', mostrar);
const menu = criarMenu(ir);
mostrar();

// ---- Botão Voltar do Android (só no APK) ----
let ultimoVoltar = 0;
function avisar(texto) {
  const t = document.createElement('div');
  t.className = 'aviso-sair'; t.textContent = texto; t.setAttribute('role', 'status');
  document.body.append(t);
  setTimeout(() => t.remove(), 1800);
}
export function voltar() {
  if (menu.aberto()) { menu.fechar(); return; }
  if (pilha.length > 1) { location.hash = '#/' + pilha[pilha.length - 2]; return; }
  const agora = Date.now();
  if (agora - ultimoVoltar < 2000) {
    const app = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
    if (app && app.exitApp) app.exitApp();
    return;
  }
  ultimoVoltar = agora;
  avisar('Toque em Voltar de novo para sair');
}
if (nativo()) {
  const app = window.Capacitor.Plugins && window.Capacitor.Plugins.App;
  if (app && app.addListener) app.addListener('backButton', () => voltar());
}

// Registra o service worker (funciona offline). Só em endereço seguro (https ou localhost).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => { /* sem offline, mas o app roda */ });
  });
}
