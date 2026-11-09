// Gera a galeria de comparação de bibliotecas de ícones.
//
// Por que existe: antes de trocar os ícones do LLMusic, é preciso ver os
// mesmos conceitos lado a lado. Este script lê os pacotes já baixados e
// escreve UMA página com todos os SVGs embutidos — nada é carregado da
// internet quando a página abre.
//
// Esta pasta fica fora do app: scripts/gerar-sw.mjs não varre "ferramentas",
// então nada daqui entra no cache offline nem no APK.
//
// Uso:
//   npm pack @tabler/icons @phosphor-icons/core iconoir media-icons @iconify-json/fad
//   (extrair cada .tgz numa pasta)
//   node gerar.mjs <pasta-com-os-pacotes> > galeria.html
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.argv[2];
if (!BASE) { console.error('uso: node gerar.mjs <pasta-com-os-pacotes-extraidos>'); process.exit(1); }

const LIBS = [
  { id: 'tabler', nome: 'Tabler', versao: '3.51.0', licenca: 'MIT',
    dir: 'tabler-icons-3.51.0/package/icons/outline', traco: '2px, 24×24' },
  { id: 'phosphor', nome: 'Phosphor', versao: '2.1.1', licenca: 'MIT',
    dir: 'phosphor-icons-core-2.1.1/package/assets/regular', traco: '~1.5px, 256×256' },
  { id: 'iconoir', nome: 'Iconoir', versao: '7.12.2', licenca: 'MIT',
    dir: 'iconoir-7.12.2/package/icons/regular', traco: '1.5px, 24×24' },
  { id: 'media', nome: 'Vidstack', versao: '0.10.0', licenca: 'MIT',
    dir: 'media-icons-0.10.0/package/raw', traco: '2px, 32×32' },
  { id: 'fad', nome: 'FontAudio', versao: '1.2.1', licenca: 'CC-BY-4.0',
    iconify: 'iconify-json-fad-1.2.1/package/icons.json', traco: 'preenchido, fonte' }
];

// Os 18 conceitos pedidos. Cada um mapeia para o nome do arquivo em cada
// biblioteca; null quando a biblioteca não tem equivalente — e a lacuna é
// justamente o que a comparação precisa mostrar.
const CONCEITOS = [
  ['Violão clássico',    { tabler: 'guitar-pick', phosphor: 'guitar', iconoir: null, media: null, fad: null }],
  ['Instrumentos',       { tabler: 'piano', phosphor: 'piano-keys', iconoir: null, media: null, fad: 'keyboard' }],
  ['Partitura',          { tabler: 'clef-staff', phosphor: 'file-text', iconoir: 'page', media: null, fad: null }],
  ['Tablatura',          { tabler: 'table-row', phosphor: 'rows', iconoir: 'table-rows', media: null, fad: null }],
  ['Notas musicais',     { tabler: 'music', phosphor: 'music-notes', iconoir: 'music-double-note', media: 'music', fad: null }],
  ['Clave',              { tabler: 'clef', phosphor: null, iconoir: null, media: null, fad: null }],
  ['Acordes',            { tabler: 'grid-dots', phosphor: 'squares-four', iconoir: 'view-grid', media: null, fad: 'arpchord' }],
  ['Escalas',            { tabler: 'stairs', phosphor: 'ladder-simple', iconoir: 'sort', media: null, fad: null }],
  ['Metrônomo',          { tabler: 'metronome', phosphor: 'metronome', iconoir: null, media: null, fad: 'metronome' }],
  ['Afinador',           { tabler: 'wave-sine', phosphor: 'wave-sine', iconoir: 'sine-wave', media: null, fad: 'waveform' }],
  ['Diapasão',           { tabler: null, phosphor: null, iconoir: null, media: null, fad: null }],   // nenhuma biblioteca tem diapasão
  ['Reprodutor',         { tabler: 'player-play', phosphor: 'play-circle', iconoir: 'play', media: 'play', fad: 'play' }],
  ['Biblioteca musical', { tabler: 'books', phosphor: 'books', iconoir: 'bookmark-book', media: 'bookmark', fad: null }],
  ['Compositores',       { tabler: 'users', phosphor: 'users-three', iconoir: 'group', media: 'user', fad: null }],
  ['Exercícios',         { tabler: 'checklist', phosphor: 'list-checks', iconoir: 'task-list', media: null, fad: null }],
  ['Evolução',           { tabler: 'chart-line', phosphor: 'chart-line-up', iconoir: 'graph-up', media: null, fad: null }],
  ['Configurações',      { tabler: 'settings', phosphor: 'gear', iconoir: 'settings', media: 'settings', fad: null }],
  ['Navegação',          { tabler: 'menu-2', phosphor: 'sidebar-simple', iconoir: 'menu', media: 'menu-vertical', fad: null }]
];

// Pesos e preenchimento, para comparar espessura de traço no mesmo desenho.
const PESOS = [
  ['Phosphor thin',    'phosphor-icons-core-2.1.1/package/assets/thin/music-notes-thin.svg'],
  ['Phosphor light',   'phosphor-icons-core-2.1.1/package/assets/light/music-notes-light.svg'],
  ['Phosphor regular', 'phosphor-icons-core-2.1.1/package/assets/regular/music-notes.svg'],
  ['Phosphor bold',    'phosphor-icons-core-2.1.1/package/assets/bold/music-notes-bold.svg'],
  ['Phosphor fill',    'phosphor-icons-core-2.1.1/package/assets/fill/music-notes-fill.svg'],
  ['Phosphor duotone', 'phosphor-icons-core-2.1.1/package/assets/duotone/music-notes-duotone.svg'],
  ['Tabler outline',   'tabler-icons-3.51.0/package/icons/outline/music.svg'],
  ['Tabler filled',    'tabler-icons-3.51.0/package/icons/filled/playlist.svg'],
  ['Iconoir regular',  'iconoir-7.12.2/package/icons/regular/music-double-note.svg'],
  ['Iconoir solid',    'iconoir-7.12.2/package/icons/solid/music-note.svg'],
  ['Vidstack',         'media-icons-0.10.0/package/raw/music.svg'],
  ['FontAudio',        'fad:waveform']
];

const fad = JSON.parse(readFileSync(join(BASE, LIBS.find((l) => l.id === 'fad').iconify), 'utf8'));

// Limpa cor e tamanho fixos para o SVG herdar currentColor e o tamanho do CSS.
function normalizar(svg) {
  return svg
    .replace(/\s(width|height)="[^"]*"/g, '')
    .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="currentColor"')
    .replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"')
    .replace(/<svg /, '<svg ');
}

function pegar(lib, nome) {
  if (!nome) return null;
  if (lib.id === 'fad') {
    const ic = fad.icons[nome];
    if (!ic) return null;
    const w = ic.width || fad.width || 16, h = ic.height || fad.height || 16;
    return `<svg viewBox="0 0 ${w} ${h}" fill="currentColor">${ic.body}</svg>`;
  }
  const caminho = join(BASE, lib.dir, nome + '.svg');
  if (!existsSync(caminho)) return null;
  return normalizar(readFileSync(caminho, 'utf8'));
}

const faltando = [];
const linhas = CONCEITOS.map(([conceito, mapa]) => {
  const celulas = LIBS.map((lib) => {
    const svg = pegar(lib, mapa[lib.id]);
    if (!svg) { faltando.push(conceito + ' / ' + lib.nome); return `<td class="vazio" title="sem equivalente">—</td>`; }
    return `<td><span class="ic">${svg}</span><span class="nome">${mapa[lib.id]}</span></td>`;
  }).join('');
  return `<tr><th scope="row">${conceito}</th>${celulas}</tr>`;
}).join('\n');

const pesos = PESOS.map(([rotulo, caminho]) => {
  const svg = caminho.startsWith('fad:')
    ? pegar(LIBS.find((l) => l.id === 'fad'), caminho.slice(4))
    : (existsSync(join(BASE, caminho)) ? normalizar(readFileSync(join(BASE, caminho), 'utf8')) : null);
  if (!svg) { console.error('peso sem arquivo: ' + caminho); return ''; }
  return `<figure><span class="ic grande">${svg}</span><figcaption>${rotulo}</figcaption></figure>`;
}).filter(Boolean).join('\n');

const licencas = LIBS.map((l) =>
  `<tr><th scope="row">${l.nome}</th><td>${l.versao}</td><td>${l.licenca}</td><td>${l.traco}</td></tr>`).join('\n');

process.stdout.write(`<!doctype html>
<html lang="pt-BR" data-tema="escuro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Galeria de ícones — LLMusic</title>
<style>
  :root {
    --fundo: #121714; --superficie: #1B2420; --texto: #F3EFE3; --suave: #A3B3A7;
    --linha: #33443A; --destaque: #C9A86B; --acao: #5C8570;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  :root[data-tema='claro'] {
    --fundo: #F3EFE3; --superficie: #FCFAF4; --texto: #292D2A; --suave: #5B6A5F;
    --linha: #D9D4C8; --destaque: #86682F; --acao: #496D5B;
  }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 24px 16px 64px; background: var(--fundo); color: var(--texto); line-height: 1.5; }
  main { max-width: 1000px; margin: 0 auto; }
  h1 { font-size: 26px; margin: 0 0 4px; }
  h2 { font-size: 19px; margin: 40px 0 8px; padding-top: 12px; border-top: 1px solid var(--linha); }
  p { color: var(--suave); margin: 0 0 12px; }
  .barra { display: flex; gap: 8px; flex-wrap: wrap; margin: 16px 0 8px; }
  button { min-height: 40px; padding: 0 14px; border: 1px solid var(--linha); border-radius: 999px;
           background: var(--superficie); color: var(--texto); font: inherit; font-size: 14px; cursor: pointer; }
  button[aria-pressed='true'] { background: var(--acao); border-color: var(--acao); color: var(--fundo); }
  .rolar { overflow-x: auto; }
  table { border-collapse: collapse; width: 100%; min-width: 620px; }
  th, td { border: 1px solid var(--linha); padding: 10px 8px; text-align: center; vertical-align: middle; }
  thead th { background: var(--superficie); font-size: 13px; }
  thead th small { display: block; color: var(--suave); font-weight: 400; font-size: 11px; }
  tbody th { text-align: left; font-size: 14px; font-weight: 600; white-space: nowrap; }
  td.vazio { color: var(--suave); opacity: 0.5; }
  .ic { display: block; margin: 0 auto; width: var(--tam, 28px); height: var(--tam, 28px); color: var(--texto); }
  .ic svg { width: 100%; height: 100%; display: block; }
  .ic.grande { --tam: 48px; }
  .nome { display: block; margin-top: 6px; font-size: 10px; color: var(--suave); word-break: break-all; }
  body.sem-nomes .nome { display: none; }
  .pesos { display: flex; flex-wrap: wrap; gap: 18px; }
  figure { margin: 0; text-align: center; }
  figcaption { margin-top: 6px; font-size: 11px; color: var(--suave); }
  .aviso { border-left: 3px solid var(--destaque); padding: 10px 14px; background: var(--superficie); border-radius: 0 8px 8px 0; }
  .aviso strong { color: var(--destaque); }
  @media (max-width: 640px) { .nome { display: none; } th, td { padding: 8px 4px; } }
</style>
</head>
<body>
<main>
  <h1>Galeria de ícones</h1>
  <p>Os mesmos 18 conceitos do LLMusic, nas bibliotecas que dá para usar offline.
     Nada é carregado da internet: todos os SVGs estão embutidos nesta página.</p>

  <div class="barra">
    <button id="tema" aria-pressed="false">Tema claro</button>
    <button id="tam" aria-pressed="false">Ícones grandes</button>
    <button id="nomes" aria-pressed="true">Mostrar nomes</button>
  </div>

  <h2>Conceito por biblioteca</h2>
  <div class="rolar">
  <table>
    <thead><tr><th>Conceito</th>${LIBS.map((l) => `<th>${l.nome}<small>${l.traco}</small></th>`).join('')}</tr></thead>
    <tbody>
${linhas}
    </tbody>
  </table>
  </div>

  <h2>Espessura e preenchimento</h2>
  <p>O mesmo desenho — nota musical — em todos os pesos disponíveis.</p>
  <div class="pesos">
${pesos}
  </div>

  <h2>Licenças</h2>
  <div class="rolar">
  <table>
    <thead><tr><th>Biblioteca</th><th>Versão</th><th>Licença</th><th>Traço</th></tr></thead>
    <tbody>
${licencas}
    </tbody>
  </table>
  </div>
  <p class="aviso"><strong>FontAudio</strong> é a única que não é MIT: a embalagem usada
  (<code>@iconify-json/fad</code>) declara <strong>CC-BY-4.0</strong>, que exige crédito visível
  ao autor. Usá-la obriga a pôr a atribuição no app.<br>
  <strong>SVG Repo</strong> ficou de fora: o site não é alcançável deste ambiente, e a coleção
  tem licença por ícone, não por coleção — não dá para garantir o uso sem conferir um a um.</p>

  <h2>Lacunas encontradas</h2>
  <p>${faltando.length} combinações sem equivalente, de ${CONCEITOS.length * LIBS.length} possíveis.</p>
</main>
<script>
  const b = document.body, r = document.documentElement;
  const alterna = (bt, aoLigar, aoDesligar) => {
    bt.onclick = () => {
      const ligado = bt.getAttribute('aria-pressed') === 'true';
      bt.setAttribute('aria-pressed', String(!ligado));
      (ligado ? aoDesligar : aoLigar)();
    };
  };
  alterna(tema, () => r.setAttribute('data-tema', 'claro'), () => r.setAttribute('data-tema', 'escuro'));
  alterna(tam, () => r.style.setProperty('--tam', '44px'), () => r.style.removeProperty('--tam'));
  alterna(nomes, () => b.classList.remove('sem-nomes'), () => b.classList.add('sem-nomes'));
</script>
</body>
</html>
`);
