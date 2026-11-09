// CONFERE O CONTRASTE DAS CORES, NOS DOIS TEMAS
//
// Contraste não se avalia de olho: a mesma diferença parece maior no escuro
// do que no claro, e o que passa num monitor bom some no celular ao sol.
// Este script lê os tokens de cor do CSS e calcula a razão de contraste pela
// fórmula da WCAG 2.1, que é a mesma que os órgãos de acessibilidade usam.
//
// Alvos:
//   4.5  texto normal (WCAG AA, critério 1.4.3)
//   3.0  texto grande e bordas de controle (critérios 1.4.3 e 1.4.11)
//
// A borda decorativa dos cartões (--linha, --linha-forte) fica de fora de
// propósito: ela não delimita nada que se opere, e exigir 3:1 dela deixaria
// a interface pesada sem ganho de acessibilidade. O que se opera — campo,
// seletor, botão secundário — usa --linha-controle, e essa é conferida.
//
// Uso: node scripts/conferir-contraste.mjs
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

const RAIZ = resolve(process.argv[2] || process.cwd());
const css = readFileSync(join(RAIZ, 'css/style.css'), 'utf8');

function tokensDe(marcador) {
  const i = css.indexOf(marcador);
  if (i < 0) throw new Error('não achei o bloco ' + marcador);
  const j = css.indexOf('}', i);
  const mapa = {};
  for (const m of css.slice(i, j).matchAll(/(--[\w-]+)\s*:\s*(#[0-9A-Fa-f]{3,8})/g)) mapa[m[1]] = m[2];
  return mapa;
}

const escuro = tokensDe(':root {');
const claro = { ...escuro, ...tokensDe(":root[data-tema='claro']") };

function luminancia(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  const canais = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const [r, g, b] = canais.map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function razao(a, b) {
  const la = luminancia(a), lb = luminancia(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

const PARES = [
  ['texto', 'fundo', 'texto principal', 4.5],
  ['texto', 'superficie', 'texto no cartão', 4.5],
  ['texto', 'superficie-2', 'texto no cartão destacado', 4.5],
  ['suave', 'fundo', 'texto secundário', 4.5],
  ['suave', 'superficie', 'texto secundário no cartão', 4.5],
  ['destaque', 'fundo', 'dourado sobre o fundo', 4.5],
  ['destaque', 'superficie', 'dourado no cartão', 4.5],
  ['sobre-acao', 'acao', 'texto do botão principal', 4.5],
  ['ok', 'superficie', 'verde de acerto', 4.5],
  ['ruim', 'superficie', 'vermelho de erro', 4.5],
  ['madeira', 'superficie', 'madeira', 4.5],
  ['linha-controle', 'fundo', 'borda de campo e botão', 3.0],
  ['linha-controle', 'superficie', 'borda de campo no cartão', 3.0],
  ['linha-controle', 'superficie-2', 'borda de campo no cartão destacado', 3.0]
];

// As bolinhas do braço não mudam com o tema, então são conferidas uma vez
// só, todas contra o rótulo escuro. Foi aqui que um rótulo claro sobre cor
// média passou meses com contraste 1,8 no tema claro.
const PONTOS = ['raiz', 'neutro', 'alvo', 'certo', 'errado', 'quase'];
let falhas = 0;
console.log('--- BOLINHAS DO BRAÇO (sem tema) ---');
for (const nome of PONTOS) {
  const fundo = escuro['--pt-' + nome], texto = escuro['--pt-rotulo'];
  if (!fundo || !texto) { console.log(`  ?      falta --pt-${nome} ou --pt-rotulo`); falhas++; continue; }
  const r = razao(texto, fundo);
  if (r < 4.5) falhas++;
  console.log(`  ${r >= 4.5 ? 'ok   ' : 'BAIXO'} ${r.toFixed(2).padStart(5)} (alvo 4.5)  rótulo sobre ${nome}  ${texto} sobre ${fundo}`);
}

for (const [nome, tokens] of [['ESCURO (Concerto Noturno)', escuro], ['CLARO (Conservatório Clássico)', claro]]) {
  console.log('\n--- ' + nome + ' ---');
  for (const [fg, bg, desc, alvo] of PARES) {
    const a = tokens['--' + fg], b = tokens['--' + bg];
    if (!a || !b) { console.log(`  ?      token faltando: --${fg} ou --${bg}`); falhas++; continue; }
    const r = razao(a, b);
    const passa = r >= alvo;
    if (!passa) falhas++;
    console.log(`  ${passa ? 'ok   ' : 'BAIXO'} ${r.toFixed(2).padStart(5)} (alvo ${alvo})  ${desc}  ${a} sobre ${b}`);
  }
}

console.log();
if (falhas) {
  console.error(`${falhas} par(es) abaixo do alvo. Ajuste os tokens em css/style.css.`);
  process.exit(1);
}
console.log('Contraste em dia nos dois temas.');
