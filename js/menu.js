// Menu.
//
// Duas coisas diferentes, e é importante não confundir:
//
//  1. A RÉGUA é navegação. Cada botão leva direto a uma tela — nada abre, nada
//     se desdobra, você chega onde o nome diz. São as cinco telas em que se
//     passa o tempo, mais o botão que abre a gaveta. No celular é a barra do
//     rodapé, com ícone e nome; em tela larga, a coluna de ícones da lateral.
//  2. A GAVETA é o índice: as 25 telas do app, separadas por área. Chega-se a
//     ela pelo botão "Menu" da régua ou arrastando o dedo da borda esquerda.
//
// Antes, cada botão da régua abria a gaveta no grupo correspondente. Quem
// tocava em "Biblioteca" esperava ir para algum lugar e recebia um menu — a
// régua parecia navegação e era um sumário.
//
// A gaveta fecha tocando fora, em "Fechar", no botão Voltar ou com Esc.
// Fixada (só em tela larga), fica aberta durante a navegação, e a escolha é
// guardada no aparelho.
import { Config } from './db.js';
import { icone } from './icones.js';

const C_FIXADO = 'ui.menuFixo';

// A régua. "menu: true" é o único botão que não navega: abre a gaveta.
// O nome curto é o que cabe embaixo do ícone em 60px de largura; o nome
// inteiro fica no title e no aria-label, para o leitor de tela.
const BARRA = [
  { rota: '', ic: 'inicio', curto: 'Início', nome: 'Início' },
  { rota: 'curso', ic: 'aprendizado', curto: 'Curso', nome: 'Grade curricular' },
  { rota: 'plano', ic: 'relogio', curto: 'Hoje', nome: 'Meu Plano de Estudos' },
  { rota: 'exercicios', ic: 'estudio', curto: 'Exercícios', nome: 'Central de Exercícios' },
  { rota: 'painel', ic: 'evolucao', curto: 'Progresso', nome: 'Meu progresso' },
  { menu: true, ic: 'menu', curto: 'Menu', nome: 'Abrir o menu com todas as telas' }
];

const GRUPOS = [
  ['', [['', 'Início']]],
  ['Aprendizado', [
    ['curso', 'Grade curricular'], ['exercicios', 'Central de Exercícios'],
    ['avaliacoes', 'Avaliações'], ['tutor', 'Tutor pedagógico']
  ]],
  ['Estúdio de prática', [
    ['metronomo', 'Metrônomo'], ['afinador', 'Afinador e diapasão'], ['braco', 'Braço virtual'],
    ['partituras', 'Partituras'], ['leitura', 'Leitura'], ['ritmo', 'Ritmo']
  ]],
  ['Biblioteca', [
    ['repertorio', 'Repertório'], ['tecnicas', 'Biblioteca de Técnicas'],
    ['materiais', 'Biblioteca de Materiais'], ['teoria', 'Teoria'],
    ['caged', 'CAGED (ferramenta)'], ['caged-aulas', 'CAGED (aulas)'],
    ['importar', 'Importar tablatura']
  ]],
  ['Minha evolução', [
    ['painel', 'Meu progresso'],
    ['habilidades', 'Minhas habilidades'], ['plano', 'Meu Plano de Estudos'],
    ['habitos', 'Hábitos'], ['auditoria', 'Auditoria curricular']
  ]],
  ['Ajustes', [['config', 'Configurações'], ['atualizar', 'Atualizar e backup'], ['pacotes', 'Backup e pacotes']]]
];

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

export function criarMenu(ir) {
  const veu = el('div', 'menu-veu');
  const gaveta = el('nav', 'menu-gaveta');
  gaveta.setAttribute('aria-label', 'Menu principal');
  gaveta.setAttribute('role', 'dialog');
  gaveta.setAttribute('aria-modal', 'true');
  gaveta.hidden = true;
  veu.hidden = true;

  const cab = el('div', 'menu-cab');
  const img = document.createElement('img');
  img.src = 'icons/icon.svg'; img.alt = ''; img.width = 36; img.height = 36;
  const nome = el('span', 'menu-nome', 'LLMusic');
  const fechar = el('button', 'menu-fechar');
  fechar.append(icone('voltar'), document.createTextNode(' Fechar'));
  fechar.setAttribute('aria-label', 'Fechar menu');
  cab.append(img, nome, fechar);
  gaveta.append(cab);

  const itens = [];
  GRUPOS.forEach(([titulo, lista], g) => {
    const marca = el('p', 'menu-grupo', titulo || 'Início');
    if (!titulo) marca.hidden = true;
    gaveta.append(marca);
    lista.forEach(([rota, texto]) => {
      const b = el('button', 'menu-item', texto);
      b.dataset.rota = rota;
      b.dataset.grupo = String(g);
      b.onclick = () => { if (!fixado) fecharMenu(); if (rotaAtual() !== rota) ir(rota); };
      itens.push(b); gaveta.append(b);
    });
  });

  // ------------------------------------------------------------- a régua
  const regua = el('nav', 'menu-regua');
  regua.setAttribute('aria-label', 'Navegação principal');
  let btMenu = null;
  const botoesRegua = BARRA.map((d) => {
    const b = el('button', 'regua-bt');
    b.append(icone(d.ic), el('span', 'regua-txt', d.curto));
    b.title = d.nome;                    // tooltip quando só o ícone aparece
    b.setAttribute('aria-label', d.nome);
    if (d.menu) {
      btMenu = b;
      b.setAttribute('aria-expanded', 'false');
      // Só abre: com a gaveta aberta, o véu cobre a barra e quem fecha é ele.
      b.onclick = () => abrir();
    } else {
      b.dataset.rota = d.rota;
      b.onclick = () => {
        if (!fixado) fecharMenu();
        if (rotaAtual() !== d.rota) ir(d.rota);
      };
    }
    regua.append(b);
    return b;
  });

  const bFixar = el('button', 'regua-bt regua-fixar');
  bFixar.append(icone('fixar'));
  bFixar.title = 'Fixar o menu aberto';
  bFixar.setAttribute('aria-label', 'Fixar o menu aberto');
  bFixar.setAttribute('aria-pressed', 'false');
  regua.append(bFixar);

  let fixado = false;
  function aplicarFixado() {
    bFixar.setAttribute('aria-pressed', String(fixado));
    bFixar.classList.toggle('ativo', fixado);
    bFixar.title = fixado ? 'Desafixar o menu' : 'Fixar o menu aberto';
    bFixar.setAttribute('aria-label', bFixar.title);
    veu.hidden = fixado || gaveta.hidden;   // fixada não escurece o conteúdo
  }
  bFixar.onclick = async () => {
    fixado = !fixado;
    aplicarFixado();
    if (fixado) abrir(); else fecharMenu();
    await Config.guardar(C_FIXADO, fixado).catch(() => {});
  };
  Config.obter(C_FIXADO, false).then((v) => {
    fixado = !!v;
    aplicarFixado();
    if (fixado) abrir();
  }).catch(() => {});

  // Só o botão "Menu" abre alguma coisa, então só ele conta o estado da gaveta.
  function anunciarAberta(sim) {
    if (btMenu) btMenu.setAttribute('aria-expanded', String(sim));
  }

  const rotaAtual = () => location.hash.replace(/^#\/?/, '');
  function marcar() {
    const r = rotaAtual();
    itens.forEach((b) => { if (b.dataset.rota === r) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  }
  // A régua marca a tela em que você está, e só ela: a rota tem de bater com a
  // do botão. Numa tela que não está na régua (o afinador, por exemplo),
  // nenhum botão fica aceso — é melhor do que acender o errado.
  function marcarRegua() {
    const r = rotaAtual();
    botoesRegua.forEach((b) => {
      const dele = b.dataset.rota !== undefined && b.dataset.rota === r;
      b.classList.toggle('ativo', dele);
      if (dele) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
  }

  function abrir() {
    marcar();
    gaveta.hidden = false;
    veu.hidden = fixado;
    requestAnimationFrame(() => { gaveta.classList.add('aberta'); veu.classList.add('aberta'); });
    anunciarAberta(true);
    const atual = itens.find((b) => b.getAttribute('aria-current')) || itens[0];
    atual.focus({ preventScroll: true });
  }
  function fecharMenu() {
    if (fixado) return false;
    if (gaveta.hidden) return false;
    gaveta.classList.remove('aberta'); veu.classList.remove('aberta');
    anunciarAberta(false);
    setTimeout(() => { if (!gaveta.classList.contains('aberta')) { gaveta.hidden = true; veu.hidden = true; } }, 220);
    // O foco volta para quem abriu a gaveta: o botão "Menu".
    (btMenu || botoesRegua[0]).focus({ preventScroll: true });
    return true;
  }
  fechar.onclick = fecharMenu;
  veu.onclick = fecharMenu;
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharMenu(); });

  // arrastar da borda esquerda abre; arrastar a gaveta para a esquerda fecha
  let x0 = null, y0 = 0, modo = '';
  document.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    if (gaveta.hidden && t.clientX < 18) { x0 = t.clientX; y0 = t.clientY; modo = 'abrir'; }
    else if (!gaveta.hidden) { x0 = t.clientX; y0 = t.clientY; modo = 'fechar'; }
    else x0 = null;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - x0, dy = Math.abs(t.clientY - y0);
    if (modo === 'abrir' && dx > 50 && dy < 60) abrir();
    if (modo === 'fechar' && dx < -50 && dy < 60) fecharMenu();
    x0 = null;
  }, { passive: true });
  window.addEventListener('hashchange', () => { if (!gaveta.hidden) marcar(); marcarRegua(); });
  marcarRegua();

  document.body.append(regua, veu, gaveta);
  return { aberto: () => !gaveta.hidden, fechar: fecharMenu };
}
