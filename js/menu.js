// Menu lateral.
//
// Duas formas da mesma coisa, conforme a largura da tela:
//  - celular: uma aba na borda abre a gaveta por cima do conteúdo;
//  - tela larga: uma régua de ícones fica sempre visível e, ao tocar num
//    ícone, a gaveta se abre por cima — sem deslocar nem redimensionar a
//    página — já no grupo escolhido.
//
// Fecha tocando fora, em "Fechar", no botão Voltar ou com Esc. Também abre
// arrastando o dedo da borda esquerda. Fixada, fica aberta durante a
// navegação, e a escolha é guardada no aparelho.
import { Config } from './db.js';

const C_FIXADO = 'ui.menuFixo';

// Um ícone por grupo, para a régua. São glifos, não arquivos: a régua não
// vale um conjunto de imagens novo.
const ICONES = ['⌂', '♪', '𝄞', '▤', '◴', '⚙'];

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
  const aba = el('button', 'menu-aba', '›');
  aba.setAttribute('aria-label', 'Abrir menu');
  aba.setAttribute('aria-expanded', 'false');
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
  const fechar = el('button', 'menu-fechar', '‹ Fechar');
  fechar.setAttribute('aria-label', 'Fechar menu');
  cab.append(img, nome, fechar);
  gaveta.append(cab);

  const itens = [];
  const cabecalhos = [];   // o título de cada grupo, para a régua rolar até ele
  GRUPOS.forEach(([titulo, lista], g) => {
    const marca = el('p', 'menu-grupo', titulo || 'Início');
    if (!titulo) marca.hidden = true;
    gaveta.append(marca);
    cabecalhos[g] = marca;
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
  regua.setAttribute('aria-label', 'Áreas do app');
  const botoesRegua = GRUPOS.map(([titulo], g) => {
    const nome = titulo || 'Início';
    const b = el('button', 'regua-bt', ICONES[g] || '•');
    b.title = nome;                      // tooltip quando recolhida
    b.setAttribute('aria-label', nome);
    b.dataset.grupo = String(g);
    // Início é uma tela só: vai direto, sem abrir a gaveta para um item.
    b.onclick = () => { if (!titulo) { if (!fixado) fecharMenu(); ir(''); } else abrir(g); };
    regua.append(b);
    return b;
  });

  const bFixar = el('button', 'regua-bt regua-fixar', '⇥');
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

  const rotaAtual = () => location.hash.replace(/^#\/?/, '');
  function marcar() {
    const r = rotaAtual();
    itens.forEach((b) => { if (b.dataset.rota === r) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  }
  function marcarRegua() {
    const r = rotaAtual();
    const dela = itens.find((b) => b.dataset.rota === r);
    const g = dela ? dela.dataset.grupo : null;
    botoesRegua.forEach((b) => b.classList.toggle('ativo', b.dataset.grupo === g));
  }

  // grupo: índice na régua. Sem ele, abre como antes.
  function abrir(grupo) {
    marcar();
    gaveta.hidden = false;
    veu.hidden = fixado;
    requestAnimationFrame(() => { gaveta.classList.add('aberta'); veu.classList.add('aberta'); });
    aba.setAttribute('aria-expanded', 'true');
    const doGrupo = grupo !== undefined && itens.find((b) => b.dataset.grupo === String(grupo));
    const atual = doGrupo || itens.find((b) => b.getAttribute('aria-current')) || itens[0];
    if (doGrupo && cabecalhos[grupo]) cabecalhos[grupo].scrollIntoView({ block: 'start' });
    atual.focus({ preventScroll: true });
  }
  function fecharMenu() {
    if (fixado) return false;
    if (gaveta.hidden) return false;
    gaveta.classList.remove('aberta'); veu.classList.remove('aberta');
    aba.setAttribute('aria-expanded', 'false');
    setTimeout(() => { if (!gaveta.classList.contains('aberta')) { gaveta.hidden = true; veu.hidden = true; } }, 220);
    aba.focus({ preventScroll: true });
    return true;
  }
  aba.onclick = () => abrir();
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

  document.body.append(aba, regua, veu, gaveta);
  return { aberto: () => !gaveta.hidden, fechar: fecharMenu };
}
