// Tema e aparência do app.
//
// Por padrão o app segue o tema do celular (claro ou escuro). Se você escolher
// um tema em Configurações, a escolha passa a mandar: ela é guardada no banco
// local e aplicada como atributo no <html>, que o CSS lê.
//
//   <html data-tema="claro">    → Conservatório Clássico
//   <html data-tema="escuro">   → Concerto Noturno
//   sem atributo                → segue o sistema operacional
//
// O mesmo vale para o tamanho da letra (data-fonte) e para o movimento.
import { Config } from './db.js';

export const TEMAS = [
  { id: 'sistema', nome: 'Seguir o celular', desc: 'Muda junto com o modo claro ou escuro do aparelho.' },
  { id: 'claro', nome: 'Conservatório Clássico', desc: 'Marfim de partitura, verde floresta e detalhes dourados.' },
  { id: 'escuro', nome: 'Concerto Noturno', desc: 'Verde quase preto, texto em marfim. Bom para estudar à noite.' }
];

export const TAMANHOS = [
  { id: 'normal', nome: 'Normal' },
  { id: 'grande', nome: 'Grande', desc: '+12%' },
  { id: 'maior', nome: 'Maior', desc: '+25%' }
];

// Cor da barra do sistema no Android, para cada tema.
const BARRA = { escuro: '#121714', claro: '#F3EFE3' };

function aplicarTema(id) {
  const raiz = document.documentElement;
  if (id === 'claro' || id === 'escuro') raiz.setAttribute('data-tema', id);
  else raiz.removeAttribute('data-tema');

  const escuroAgora = id === 'escuro'
    || (id !== 'claro' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', escuroAgora ? BARRA.escuro : BARRA.claro);
}

function aplicarTamanho(id) {
  const raiz = document.documentElement;
  if (id === 'grande' || id === 'maior') raiz.setAttribute('data-fonte', id);
  else raiz.removeAttribute('data-fonte');
}

function aplicarMovimento(reduzir) {
  document.documentElement.toggleAttribute('data-sem-animacao', !!reduzir);
}

// Chamado uma vez, no início do app, antes de desenhar a primeira tela.
export async function iniciarTema() {
  const tema = await Config.obter('ui.tema', 'sistema');
  const fonte = await Config.obter('ui.fonte', 'normal');
  const mov = await Config.obter('ui.semAnimacao', false);
  aplicarTema(tema);
  aplicarTamanho(fonte);
  aplicarMovimento(mov);
  // Se o tema segue o celular, acompanha a troca em tempo real.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async () => {
    const atual = await Config.obter('ui.tema', 'sistema');
    if (atual === 'sistema') aplicarTema('sistema');
  });
  return { tema, fonte, semAnimacao: mov };
}

export async function trocarTema(id) {
  await Config.guardar('ui.tema', id);
  aplicarTema(id);
}

export async function trocarTamanho(id) {
  await Config.guardar('ui.fonte', id);
  aplicarTamanho(id);
}

export async function trocarMovimento(reduzir) {
  await Config.guardar('ui.semAnimacao', !!reduzir);
  aplicarMovimento(reduzir);
}

export const lerTema = () => Config.obter('ui.tema', 'sistema');
export const lerTamanho = () => Config.obter('ui.fonte', 'normal');
export const lerMovimento = () => Config.obter('ui.semAnimacao', false);
