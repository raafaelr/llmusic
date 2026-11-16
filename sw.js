// Service worker: é o que faz o app funcionar sem internet.
// Na primeira visita ele guarda todos os arquivos abaixo no celular (o "cache").
// Depois disso, o app abre direto do cache, mesmo no modo avião.
//
// ATENÇÃO: este arquivo é GERADO. Não edite a lista nem a versão na mão —
// rode "node scripts/gerar-sw.mjs" depois de mudar qualquer arquivo do app.
// A versão abaixo é a impressão digital do conteúdo: mudou um byte, muda ela,
// e o celular troca o cache velho pelo novo sozinho.
//
// Arquivos no cache: 125 na instalação + 3 sob demanda
const VERSAO = 'llmusic-8e4d84c30331';

const ARQUIVOS = [
  './',
  './css/style.css',
  './fonts/cormorant-garamond-latin-400-normal.woff2',
  './fonts/cormorant-garamond-latin-600-normal.woff2',
  './fonts/cormorant-garamond-latin-700-normal.woff2',
  './fonts/inter-latin-400-normal.woff2',
  './fonts/inter-latin-500-normal.woff2',
  './fonts/inter-latin-600-normal.woff2',
  './fonts/inter-latin-700-normal.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/icon.svg',
  './index.html',
  './js/aulasCaged.js',
  './js/biblioteca.js',
  './js/braco.js',
  './js/bracosvg.js',
  './js/caged-quiz.js',
  './js/caged.js',
  './js/cagedui.js',
  './js/curso/audio.js',
  './js/curso/blocos.js',
  './js/curso/curriculo.js',
  './js/curso/exercicios.js',
  './js/curso/habilidades.js',
  './js/curso/niveis/n1/m11.js',
  './js/curso/niveis/n1/m12.js',
  './js/curso/niveis/n1/m13.js',
  './js/curso/niveis/n1/m14.js',
  './js/curso/niveis/n1.js',
  './js/curso/niveis/n2/m21.js',
  './js/curso/niveis/n2/m22.js',
  './js/curso/niveis/n2/m23.js',
  './js/curso/niveis/n2.js',
  './js/curso/niveis/n3/m31.js',
  './js/curso/niveis/n3/m32.js',
  './js/curso/niveis/n3/m33.js',
  './js/curso/niveis/n3.js',
  './js/curso/niveis/n4/m41.js',
  './js/curso/niveis/n4/m42.js',
  './js/curso/niveis/n4/m43.js',
  './js/curso/niveis/n4.js',
  './js/curso/niveis/n5/m51.js',
  './js/curso/niveis/n5/m52.js',
  './js/curso/niveis/n5/m53.js',
  './js/curso/niveis/n5.js',
  './js/curso/niveis/n6/m61.js',
  './js/curso/niveis/n6/m62.js',
  './js/curso/niveis/n6/m63.js',
  './js/curso/niveis/n6.js',
  './js/curso/niveis/n7/m71.js',
  './js/curso/niveis/n7/m72.js',
  './js/curso/niveis/n7.js',
  './js/curso/niveis/n8/m81.js',
  './js/curso/niveis/n8.js',
  './js/curso/plano.js',
  './js/curso/progresso.js',
  './js/curso/repertorio.js',
  './js/curso/tecnicas.js',
  './js/curso/tutor.js',
  './js/db.js',
  './js/estudo.js',
  './js/grafismos.js',
  './js/habitos.js',
  './js/icones.js',
  './js/importar/ascii.js',
  './js/importar/gp.js',
  './js/importar/pdf.js',
  './js/importar/posicional.js',
  './js/importar/quant.js',
  './js/leitor.js',
  './js/leitura.js',
  './js/licoes.js',
  './js/main.js',
  './js/menu.js',
  './js/metronome.js',
  './js/musica/diagramas.js',
  './js/musica/notacao.js',
  './js/musica/tablatura.js',
  './js/musica/teoriavis.js',
  './js/nativo.js',
  './js/obrapartitura.js',
  './js/pecas.js',
  './js/pitch.js',
  './js/postura.js',
  './js/pratica.js',
  './js/quizui.js',
  './js/ritmo.js',
  './js/sinc.js',
  './js/tema.js',
  './js/teoria.js',
  './js/tuner.js',
  './js/versao.js',
  './js/views/afinador.js',
  './js/views/atualizar.js',
  './js/views/auditoria.js',
  './js/views/aula.js',
  './js/views/avaliacoes.js',
  './js/views/braco.js',
  './js/views/caged-aulas.js',
  './js/views/caged.js',
  './js/views/config.js',
  './js/views/curso.js',
  './js/views/exercicios.js',
  './js/views/habilidades.js',
  './js/views/habitos.js',
  './js/views/home.js',
  './js/views/importar.js',
  './js/views/leitura.js',
  './js/views/materiais.js',
  './js/views/metronomo.js',
  './js/views/pacotes.js',
  './js/views/painel.js',
  './js/views/partituras.js',
  './js/views/plano.js',
  './js/views/repertorio.js',
  './js/views/ritmo.js',
  './js/views/tecnicas.js',
  './js/views/teoria.js',
  './js/views/tutor.js',
  './js/violao.js',
  './manifest.webmanifest',
  './pacotes/exemplo.json',
  './versao.json'
];

// Estes NÃO são baixados na instalação: são pesados e servem só à tela de
// importar partitura. O service worker guarda cada um na primeira vez que ele
// é pedido de verdade. Por isso a primeira importação precisa de internet.
const SOB_DEMANDA = [
  './js/vendor/alphaTab.core.min.mjs',
  './js/vendor/pdf.min.js',
  './js/vendor/pdf.worker.min.js'
];
const ehSobDemanda = (url) => SOB_DEMANDA.some((a) => url.endsWith(a.slice(1)));

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
      return fetch(evento.request).then((resposta) => {
        // Guarda os pesados na primeira vez que forem realmente usados, para
        // a segunda importação já funcionar offline. Só o que veio inteiro e
        // sem erro: meia biblioteca no cache é pior do que nenhuma.
        if (resposta && resposta.ok && ehSobDemanda(evento.request.url)) {
          const copia = resposta.clone();
          caches.open(VERSAO).then((cache) => cache.put(evento.request, copia)).catch(() => {});
        }
        return resposta;
      }).catch(() => {
        if (evento.request.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      });
    })
  );
});
