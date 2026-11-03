// Ponto de partida do app: escolhe qual tela mostrar e registra o service worker.
// As "rotas" são o que vem depois do # no endereço: #/metronomo mostra o metrônomo.
import * as home from './views/home.js';
import * as metronomo from './views/metronomo.js';
import * as afinador from './views/afinador.js';
import * as braco from './views/braco.js';
import * as leitura from './views/leitura.js';
import * as partituras from './views/partituras.js';

const TELAS = {
  '': home,
  'metronomo': metronomo,
  'afinador': afinador,
  'braco': braco,
  'leitura': leitura,
  'partituras': partituras
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
