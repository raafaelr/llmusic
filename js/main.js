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
import * as curso from './views/curso.js';
import * as aula from './views/aula.js';
import * as painel from './views/painel.js';
import * as auditoria from './views/auditoria.js';
import * as tecnicas from './views/tecnicas.js';
import * as exercicios from './views/exercicios.js';
import * as repertorio from './views/repertorio.js';
import * as plano from './views/plano.js';
import * as avaliacoes from './views/avaliacoes.js';
import * as tutor from './views/tutor.js';
import * as materiais from './views/materiais.js';
import * as config from './views/config.js';
import * as habilidades from './views/habilidades.js';
import * as atualizar from './views/atualizar.js';
import { Config, C_ERROS } from './db.js';
import { criarMenu } from './menu.js';
import { iniciarTema } from './tema.js';
import { criarEstudo } from './estudo.js';
import { nativo } from './nativo.js';
import { reagendarLembretes } from './pratica.js';
import { sincronizarSePuder } from './sinc.js';

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
  'importar': importar,
  'curso': curso,
  'aula': aula,
  'painel': painel,
  'auditoria': auditoria,
  'tecnicas': tecnicas,
  'exercicios': exercicios,
  'repertorio': repertorio,
  'habilidades': habilidades,
  'atualizar': atualizar,
  'plano': plano,
  'avaliacoes': avaliacoes,
  'tutor': tutor,
  'materiais': materiais,
  'config': config
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

// ---- Rede de erro: nada pode falhar em silêncio ----
//
// Até aqui, um erro de JavaScript deixava a tela BRANCA: sem mensagem, sem
// registro, sem nada para contar depois. Quem está estudando perde a sessão e
// não tem o que dizer além de "parou de funcionar". Agora todo erro aparece
// numa barra, com um botão que copia o texto, e os cinco últimos ficam
// guardados para a tela "Atualizar e backup" mostrar.
function guardarErro(texto) {
  // Se o próprio banco for o que está quebrado, resta a barra na tela.
  Config.obter(C_ERROS, [])
    .then((antes) => Config.guardar(C_ERROS, [{ em: new Date().toISOString(), texto }, ...antes].slice(0, 5)))
    .catch(() => {});
}

function mostrarErro(texto) {
  let barra = document.getElementById('barra-erro');
  if (!barra) {
    barra = document.createElement('div');
    barra.id = 'barra-erro'; barra.className = 'barra-erro';
    barra.setAttribute('role', 'alert');
    const corpo = document.createElement('p');
    corpo.className = 'barra-erro-texto';
    const btCopiar = document.createElement('button');
    btCopiar.className = 'botao-sec'; btCopiar.textContent = 'Copiar';
    btCopiar.onclick = () => {
      const t = corpo.textContent;
      // O WebView pode negar a área de transferência; aí seleciona o texto,
      // que dá para copiar à mão. Nunca dizer "copiado" sem ter copiado.
      const ok = () => { btCopiar.textContent = 'Copiado'; };
      const naoDeu = () => { selecionar(corpo); btCopiar.textContent = 'Selecionei: copie à mão'; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(ok).catch(naoDeu);
      } else naoDeu();
    };
    const btFechar = document.createElement('button');
    btFechar.className = 'botao-texto'; btFechar.textContent = 'Fechar';
    btFechar.setAttribute('aria-label', 'Fechar o aviso de erro');
    btFechar.onclick = () => { barra.remove(); document.body.style.paddingTop = ''; };
    const acoes = document.createElement('div');
    acoes.className = 'barra-erro-acoes';
    acoes.append(btCopiar, btFechar);
    barra.append(corpo, acoes);
    document.body.append(barra);
  }
  barra.querySelector('.barra-erro-texto').textContent = texto;
  // A barra é fixa no topo e tapava o cabeçalho da tela — inclusive o botão
  // "Voltar". Em vez de chutar uma altura (ela muda com o tamanho da
  // mensagem), empurro a página pela altura medida da própria barra.
  document.body.style.paddingTop = barra.offsetHeight + 'px';
}

function selecionar(no) {
  const sel = window.getSelection();
  const r = document.createRange();
  r.selectNodeContents(no);
  sel.removeAllRanges(); sel.addRange(r);
}

function anotar(texto) {
  mostrarErro(texto);
  guardarErro(texto);
}

window.addEventListener('error', (ev) => {
  const onde = ev.filename ? ' (' + String(ev.filename).split('/').pop() + ':' + ev.lineno + ')' : '';
  anotar((ev.message || 'Erro') + onde);
});
// Promessa rejeitada sem catch: é o caso mais comum neste app, porque quase
// tudo que lê o banco é assíncrono.
window.addEventListener('unhandledrejection', (ev) => {
  const r = ev.reason;
  anotar('Falha não tratada: ' + (r && r.message ? r.message : String(r)));
});

function mostrar() {
  // A rota pode ter um argumento depois da barra: #/aula/n1.1.1 abre a aula n1.1.1.
  const inteira = location.hash.replace(/^#\/?/, '');
  const corte = inteira.indexOf('/');
  const rota = corte < 0 ? inteira : inteira.slice(0, corte);
  const arg = corte < 0 ? '' : inteira.slice(corte + 1);
  const tela = TELAS[rota] || home;
  registrarRota(TELAS[rota] ? inteira : '');
  if (limpar) limpar();
  raiz.innerHTML = '';
  // Uma tela que estoura ao montar não pode levar o app com ela: sem este
  // try, raiz fica vazia e a pessoa olha uma página branca.
  try {
    limpar = tela.montar(raiz, ir, arg);
  } catch (e) {
    limpar = null;
    anotar('A tela "' + (rota || 'Início') + '" não abriu: ' + (e && e.message ? e.message : e));
    raiz.innerHTML = '';
    const aviso = document.createElement('main');
    aviso.className = 'tela';
    const p = document.createElement('p');
    p.className = 'texto-bloco';
    p.textContent = 'Esta tela não conseguiu abrir. O erro está na barra vermelha — '
      + 'use "Copiar" para guardar o texto. O resto do app continua funcionando.';
    const b = document.createElement('button');
    b.className = 'botao-principal'; b.textContent = 'Voltar ao início';
    b.onclick = () => ir('');
    aviso.append(p, b);
    raiz.append(aviso);
  }
  // O Modo Estudo não é uma tela: é uma camada que aparece nas telas de prática.
  if (estudo) estudo.aplicar(TELAS[rota] ? rota : '', arg);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', mostrar);
const menu = criarMenu(ir);
const estudo = criarEstudo(ir);
// O tema preferido entra antes da primeira pintura; se ainda não carregou,
// vale o tema do sistema operacional, que é o padrão do CSS.
iniciarTema().catch(() => {});
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

// ---- Toque numa notificação de lembrete ----
//
// A notificação carrega a rota no "extra" (ver Lembretes, em js/nativo.js).
// Aqui ela vira navegação: o roteador é por hash, então basta trocar o hash
// e a tela certa aparece. Sem isto, tocar no lembrete só abria o app na tela
// onde ele estava, que era o que acontecia antes.
if (nativo()) {
  const ln = window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications;
  if (ln && ln.addListener) {
    ln.addListener('localNotificationActionPerformed', (ev) => {
      const rota = ev && ev.notification && ev.notification.extra && ev.notification.extra.rota;
      if (rota) ir(rota);
    });
  }
}

// Reagenda os lembretes dos próximos dias a cada abertura, para o texto
// continuar combinando com o rodízio de exercícios. Silencioso: se não der,
// o app abre do mesmo jeito.
reagendarLembretes().catch(() => {});

// Sincronização entre aparelhos, quando configurada.
//
// O APK não roda em segundo plano, então só existem dois momentos: ao abrir e
// ao sair. Ambos são silenciosos — sincronizar é pano de fundo e não pode
// atrapalhar quem está estudando. Quem quiser ver o que aconteceu, e os erros,
// tem a tela "Atualizar e backup".
sincronizarSePuder();
document.addEventListener('visibilitychange', () => {
  if (document.hidden) sincronizarSePuder({ forcar: true });
});

// Registra o service worker (funciona offline). Só em endereço seguro (https ou localhost).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => { /* sem offline, mas o app roda */ });
  });
}
