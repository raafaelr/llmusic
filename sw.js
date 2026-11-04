// Service worker: é o que faz o app funcionar sem internet.
// Na primeira visita ele guarda todos os arquivos abaixo no celular (o "cache").
// Depois disso, o app abre direto do cache, mesmo no modo avião.
//
// IMPORTANTE: quando você mudar qualquer arquivo do app, aumente o número da VERSAO.
// Assim o celular joga fora o cache velho e baixa os arquivos novos.
const VERSAO = 'llmusic-v14';

const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './js/main.js',
  './js/db.js',
  './js/pratica.js',
  './js/metronome.js',
  './js/pitch.js',
  './js/tuner.js',
  './js/braco.js',
  './js/leitura.js',
  './js/pecas.js',
  './js/violao.js',
  './js/habitos.js',
  './js/nativo.js',
  './js/menu.js',
  './js/caged.js',
  './js/caged-quiz.js',
  './js/cagedui.js',
  './js/quizui.js',
  './js/aulasCaged.js',
  './js/bracosvg.js',
  './js/teoria.js',
  './js/licoes.js',
  './js/ritmo.js',
  './js/biblioteca.js',
  './pacotes/exemplo.json',
  './js/views/home.js',
  './js/views/metronomo.js',
  './js/views/afinador.js',
  './js/views/braco.js',
  './js/views/leitura.js',
  './js/views/partituras.js',
  './js/views/habitos.js',
  './js/views/pacotes.js',
  './js/views/caged.js',
  './js/views/caged-aulas.js',
  './js/views/importar.js',
  './js/importar/gp.js',
  './js/importar/ascii.js',
  './js/importar/quant.js',
  './js/importar/posicional.js',
  './js/importar/pdf.js',
  './js/vendor/alphaTab.core.min.mjs',
  './js/vendor/pdf.min.js',
  './js/vendor/pdf.worker.min.js',
  './js/views/teoria.js',
  './js/views/ritmo.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(VERSAO)
      .then((cache) => cache.addAll(ARQUIVOS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Para cada pedido de arquivo: primeiro procura no cache; se não achar, vai à internet.
self.addEventListener('fetch', (evento) => {
  if (evento.request.method !== 'GET') return;
  evento.respondWith(
    caches.match(evento.request, { ignoreSearch: true }).then((guardado) => {
      if (guardado) return guardado;
      return fetch(evento.request).catch(() => {
        if (evento.request.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      });
    })
  );
});
