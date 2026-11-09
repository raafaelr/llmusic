// Menu lateral: uma aba na borda esquerda abre uma gaveta com todas as telas do app.
// Também abre arrastando o dedo da borda esquerda para a direita. Fecha tocando fora, em "Fechar" ou no botão Voltar.
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
  GRUPOS.forEach(([titulo, lista]) => {
    if (titulo) gaveta.append(el('p', 'menu-grupo', titulo));
    lista.forEach(([rota, texto]) => {
      const b = el('button', 'menu-item', texto);
      b.dataset.rota = rota;
      b.onclick = () => { fecharMenu(); if (rotaAtual() !== rota) ir(rota); };
      itens.push(b); gaveta.append(b);
    });
  });

  const rotaAtual = () => location.hash.replace(/^#\/?/, '');
  function marcar() {
    const r = rotaAtual();
    itens.forEach((b) => { if (b.dataset.rota === r) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  }
  function abrir() {
    marcar();
    gaveta.hidden = false; veu.hidden = false;
    requestAnimationFrame(() => { gaveta.classList.add('aberta'); veu.classList.add('aberta'); });
    aba.setAttribute('aria-expanded', 'true');
    const atual = itens.find((b) => b.getAttribute('aria-current')) || itens[0];
    atual.focus({ preventScroll: true });
  }
  function fecharMenu() {
    if (gaveta.hidden) return false;
    gaveta.classList.remove('aberta'); veu.classList.remove('aberta');
    aba.setAttribute('aria-expanded', 'false');
    setTimeout(() => { if (!gaveta.classList.contains('aberta')) { gaveta.hidden = true; veu.hidden = true; } }, 220);
    aba.focus({ preventScroll: true });
    return true;
  }
  aba.onclick = abrir;
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
  window.addEventListener('hashchange', () => { if (!gaveta.hidden) marcar(); });

  document.body.append(aba, veu, gaveta);
  return { aberto: () => !gaveta.hidden, fechar: fecharMenu };
}
