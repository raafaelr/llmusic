// Service worker: é o que faz o app funcionar sem internet.
// Na primeira visita ele guarda todos os arquivos abaixo no celular (o "cache").
// Depois disso, o app abre direto do cache, mesmo no modo avião.
//
// IMPORTANTE: quando você mudar qualquer arquivo do app, aumente o número da VERSAO.
// Assim o celular joga fora o cache velho e baixa os arquivos novos.
const VERSAO = 'llmusic-v19';

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
  './js/musica/notacao.js',
  './js/musica/diagramas.js',
  './js/musica/teoriavis.js',
  './js/musica/tablatura.js',
  './js/curso/audio.js',
  './js/curso/blocos.js',
  './js/curso/progresso.js',
  './js/curso/curriculo.js',
  './js/curso/niveis/n1.js',
  './js/curso/niveis/n1/m11.js',
  './js/curso/niveis/n1/m12.js',
  './js/curso/niveis/n1/m13.js',
  './js/curso/niveis/n1/m14.js',
  './js/curso/niveis/n2.js',
  './js/curso/niveis/n2/m21.js',
  './js/curso/niveis/n2/m22.js',
  './js/curso/niveis/n2/m23.js',
  './js/curso/niveis/n3.js',
  './js/curso/niveis/n3/m31.js',
  './js/curso/niveis/n3/m32.js',
  './js/curso/niveis/n3/m33.js',
  './js/curso/niveis/n4.js',
  './js/curso/niveis/n5.js',
  './js/curso/niveis/n5/m51.js',
  './js/curso/niveis/n5/m52.js',
  './js/curso/niveis/n5/m53.js',
  './js/curso/niveis/n6.js',
  './js/curso/niveis/n6/m61.js',
  './js/curso/niveis/n6/m62.js',
  './js/curso/niveis/n6/m63.js',
  './js/curso/niveis/n7.js',
  './js/curso/niveis/n7/m71.js',
  './js/curso/niveis/n7/m72.js',
  './js/curso/niveis/n8.js',
  './js/curso/niveis/n8/m81.js',
  './js/curso/niveis/n4/m41.js',
  './js/curso/niveis/n4/m42.js',
  './js/curso/niveis/n4/m43.js',
  './js/curso/tecnicas.js',
  './js/curso/exercicios.js',
  './js/views/tecnicas.js',
  './js/views/exercicios.js',
  './js/views/curso.js',
  './js/views/aula.js',
  './js/views/painel.js',
  './js/views/auditoria.js',
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
