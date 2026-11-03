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

function mostrar() {
  const rota = location.hash.replace(/^#\/?/, '');
  const tela = TELAS[rota] || home;
  if (limpar) limpar();
  raiz.innerHTML = '';
  limpar = tela.montar(raiz, ir);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', mostrar);
mostrar();

// Registra o service worker (funciona offline). Só em endereço seguro (https ou localhost).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => { /* sem offline, mas o app roda */ });
  });
}
