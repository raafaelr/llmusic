// GERADOR DO SERVICE WORKER
//
// Por que isto existe: o sw.js guarda uma lista escrita à mão dos arquivos do
// app e um número de versão. Se eu criar um arquivo novo e esquecer de pôr na
// lista, o app quebra offline. Se eu mudar um arquivo e esquecer de subir a
// versão, o celular continua servindo o arquivo velho — e aí nem a correção
// chega, porque o cache antigo tem prioridade. Os dois erros são silenciosos:
// no computador tudo parece certo, e só no celular o app "morre".
//
// Este script tira os dois erros da mão humana. Ele varre a pasta do projeto,
// monta a lista sozinho e calcula a versão a partir do conteúdo dos arquivos:
// mudou qualquer byte, muda a versão. Não há etapa de build — o sw.js continua
// sendo um arquivo normal, legível e versionado no git. O script só escreve
// esse arquivo para mim.
//
// Como usar:
//   node scripts/gerar-sw.mjs            escreve o sw.js
//   node scripts/gerar-sw.mjs --conferir  só confere, sem escrever (para o CI)
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative, resolve, sep } from 'node:path';

const RAIZ = resolve(process.argv.find((a) => !a.startsWith('--') && a !== process.argv[0] && a !== process.argv[1]) || process.cwd());
const SO_CONFERIR = process.argv.includes('--conferir');

// Pastas que nunca entram no cache.
const PASTAS_FORA = new Set(['.git', '.github', 'node_modules', 'scripts', 'android', 'docs', 'ferramentas']);
// Extensões que o app precisa ter offline.
const EXTENSOES = new Set(['.html', '.css', '.js', '.mjs', '.woff2', '.svg', '.png', '.webmanifest', '.json']);
// Arquivos soltos que não fazem parte do app.
const ARQUIVOS_FORA = new Set(['sw.js', 'package.json', 'package-lock.json', 'capacitor.config.json']);

function varrer(dir, achados = []) {
  for (const nome of readdirSync(dir).sort()) {
    const caminho = join(dir, nome);
    const rel = relative(RAIZ, caminho).split(sep).join('/');
    if (statSync(caminho).isDirectory()) {
      if (!PASTAS_FORA.has(nome) && !nome.startsWith('.')) varrer(caminho, achados);
      continue;
    }
    if (ARQUIVOS_FORA.has(rel) || nome.startsWith('.')) continue;
    const ponto = nome.lastIndexOf('.');
    if (ponto < 0 || !EXTENSOES.has(nome.slice(ponto))) continue;
    achados.push(rel);
  }
  return achados;
}

// A versão é a impressão digital do conteúdo de todos os arquivos juntos.
// Dois conteúdos iguais dão a mesma versão; um byte diferente dá outra.
function impressaoDigital(arquivos) {
  const h = createHash('sha256');
  for (const rel of arquivos) {
    h.update(rel);
    h.update(readFileSync(join(RAIZ, rel)));
  }
  return h.digest('hex').slice(0, 12);
}

const arquivos = varrer(RAIZ);
const versao = 'llmusic-' + impressaoDigital(arquivos);

// index.html é o que o navegador pede quando você abre o app pela raiz,
// por isso './' entra na lista além do próprio arquivo.
const lista = ['./', ...arquivos.map((r) => './' + r)];

const conteudo = `// Service worker: é o que faz o app funcionar sem internet.
// Na primeira visita ele guarda todos os arquivos abaixo no celular (o "cache").
// Depois disso, o app abre direto do cache, mesmo no modo avião.
//
// ATENÇÃO: este arquivo é GERADO. Não edite a lista nem a versão na mão —
// rode "node scripts/gerar-sw.mjs" depois de mudar qualquer arquivo do app.
// A versão abaixo é a impressão digital do conteúdo: mudou um byte, muda ela,
// e o celular troca o cache velho pelo novo sozinho.
//
// Arquivos no cache: ${lista.length}
const VERSAO = '${versao}';

const ARQUIVOS = [
${lista.map((a) => "  '" + a + "'").join(',\n')}
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
`;

const destino = join(RAIZ, 'sw.js');
const atual = (() => { try { return readFileSync(destino, 'utf8'); } catch { return ''; } })();

if (SO_CONFERIR) {
  if (atual === conteudo) {
    console.log(`sw.js está em dia (${lista.length} arquivos, versão ${versao}).`);
    process.exit(0);
  }
  console.error('sw.js está DESATUALIZADO. Rode: node scripts/gerar-sw.mjs');
  // Mostra o que mudou, para o erro ser útil e não só um "não bate".
  const naLista = new Set((atual.match(/'\.\/[^']*'/g) || []).map((s) => s.slice(1, -1)));
  const novos = lista.filter((a) => !naLista.has(a));
  const sumidos = [...naLista].filter((a) => !lista.includes(a));
  if (novos.length) console.error('  faltam no cache: ' + novos.join(', '));
  if (sumidos.length) console.error('  não existem mais: ' + sumidos.join(', '));
  if (!novos.length && !sumidos.length) console.error('  a lista está certa, mas o conteúdo mudou: falta subir a versão.');
  process.exit(1);
}

writeFileSync(destino, conteudo);
console.log(`sw.js gerado: ${lista.length} arquivos, versão ${versao}.`);
