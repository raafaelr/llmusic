// Dicionário de acordes: a folha de 12 acordes de uma qualidade, o acorde
// isolado com as suas formas, e o "Sobre" que explica como ler tudo isso.
//
// Nenhum desenho é digitado. As formas vêm da busca em js/teoria.js e são
// conferidas uma a uma por scripts/conferir-acordes.mjs — 264 acordes, 541
// formas, zero erro. O que esta tela faz é só escolher e mostrar.
import { Config } from '../db.js';
import { botaoIcone } from '../icones.js';
import { diagramaAcorde } from '../musica/diagramas.js';
import { QUALIDADES, formasDoAcorde, nota, nomeNota, cifraNota } from '../teoria.js';
import { nativo, entregarArquivo } from '../nativo.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function sv(tag, attrs = {}) {
  const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}

// As 12 fundamentais nas duas grafias. Dó♯ e Ré♭ são a MESMA casa no violão —
// o acorde é o mesmo, muda só como se escreve. Qual usar depende da
// tonalidade da música, e é por isso que o botão ♯|♭ existe em vez de o app
// escolher por você. A grafia correta sai de nota(), que já é o que o resto
// do curso usa; aqui não há tabela de nomes digitada à mão.
const COM_SUS = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [3, 0], [3, 1], [4, 0], [4, 1], [5, 0], [5, 1], [6, 0]];
const COM_BEM = [[0, 0], [1, -1], [1, 0], [2, -1], [2, 0], [3, 0], [4, -1], [4, 0], [5, -1], [5, 0], [6, -1], [6, 0]];
const NAT = [0, 2, 4, 5, 7, 9, 11];
const raizes = (bemol) => (bemol ? COM_BEM : COM_SUS).map(([letra, acc]) => nota(letra, NAT[letra] + acc));

export function montar(raiz, ir, arg) {
  let encerrada = false;
  let aba = 'folha';
  let bemol = false;
  let qual = 'maior';
  let raizSel = 0;
  // A rota aceita #/dicionario/m7 para abrir direto numa qualidade: assim uma
  // aula pode mandar a pessoa para a folha certa em vez de "procure lá".
  if (arg && QUALIDADES.some((q) => q.id === arg)) qual = arg;

  const tela = el('main', 'tela dicionario');
  const topo = el('header', 'topo');
  const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Dicionário de acordes'));

  const abas = el('div', 'dic-abas');
  abas.setAttribute('role', 'tablist');
  const corpo = el('div', 'coluna');
  tela.append(topo, abas, corpo);

  // ---------------------------------------------------------------- seletores
  const gQual = el('section', 'grupo');
  gQual.append(el('h2', 'rotulo-grupo', 'Qualidade do acorde'));
  const chipsQual = el('div', 'chips');
  gQual.append(chipsQual);

  const gNota = el('section', 'grupo');
  gNota.append(el('h2', 'rotulo-grupo', 'Nota'));
  const chipsNota = el('div', 'chips dic-notas');
  gNota.append(chipsNota);

  const gGrafia = el('section', 'grupo grupo-linha');
  gGrafia.append(el('h2', 'rotulo-grupo', 'Notação'));
  const chipsGrafia = el('div', 'chips');
  gGrafia.append(chipsGrafia);

  const folha = el('section', 'dic-folha');
  const umAcorde = el('section', 'coluna');
  const sobre = el('section', 'coluna dic-sobre');

  const acoes = el('div', 'bloco-botoes');
  const btSaida = el('button', 'botao-sec', nativo() ? 'Salvar a folha' : 'Imprimir');
  const fbSaida = el('p', 'feedback', '');
  fbSaida.setAttribute('aria-live', 'polite');
  acoes.append(btSaida);

  // ---------------------------------------------------------------- desenhos
  // Um cartão: o nome do acorde, o diagrama e os botões 1, 2, 3 das formas.
  // O estado de qual forma está à mostra é por cartão, e não global, para a
  // folha poder mostrar o Dó na forma 1 e o Fá na 2 ao mesmo tempo.
  function cartao(pc, qualidade, variante) {
    const formas = formasDoAcorde(pc, qualidade.id);
    const n = raizes(bemol)[pc];
    const c = el('article', 'dic-cartao');
    const titulo = el('h3', 'dic-nome', nomeNota(n) + (qualidade.cifra ? ' ' + qualidade.nome : ' Maior'));
    const cifra = el('p', 'dic-cifra', cifraNota(n) + qualidade.cifra);
    c.append(titulo, cifra);
    if (!formas.length) {
      c.append(el('p', 'dica', 'Sem forma tradicional de violão para este acorde.'));
      return c;
    }
    const i = Math.min(variante, formas.length - 1);
    const svg = sv('svg', { class: 'diag-acorde', role: 'img' });
    const f = formas[i];
    svg.setAttribute('aria-label', cifraNota(n) + qualidade.cifra + ', forma ' + (i + 1)
      + ': ' + f.cordas.map((x, k) => (6 - k) + 'ª ' + (x < 0 ? 'não tocada' : x === 0 ? 'solta' : 'casa ' + x)).join(', '));
    diagramaAcorde(svg, { cordas: f.cordas, dedos: f.dedos, casaInicial: f.casaInicial, pestana: f.pestana });
    c.append(svg);
    const linha = el('div', 'dic-variantes');
    formas.forEach((_, k) => {
      const b = el('button', 'chip sm', String(k + 1));
      b.setAttribute('aria-pressed', String(k === i));
      b.setAttribute('aria-label', 'Forma ' + (k + 1) + ' de ' + formas.length);
      b.onclick = () => { c.replaceWith(cartao(pc, qualidade, k)); };
      linha.append(b);
    });
    c.append(linha, el('p', 'dic-tipo', f.tipo));
    c.append(el('p', 'dic-tab', f.cordas.map((x) => (x < 0 ? '×' : x)).join(' ')));
    return c;
  }

  let variante = 0;
  function desenharFolha() {
    const q = QUALIDADES.find((x) => x.id === qual);
    folha.innerHTML = '';
    raizes(bemol).forEach((_, pc) => folha.append(cartao(pc, q, variante)));
  }

  function desenharUm() {
    const q = QUALIDADES.find((x) => x.id === qual);
    umAcorde.innerHTML = '';
    umAcorde.append(gNota);
    const formas = formasDoAcorde(raizSel, q.id);
    const n = raizes(bemol)[raizSel];
    const cab = el('div', 'dic-cab');
    cab.append(el('span', 'dic-cab-cifra', cifraNota(n) + q.cifra));
    cab.append(el('span', 'dic-cab-nome', nomeNota(n) + ' ' + q.nome + ' · '
      + formas.length + (formas.length === 1 ? ' forma' : ' formas')));
    umAcorde.append(cab);
    const grade = el('div', 'dic-folha');
    formas.forEach((f, i) => {
      const c = el('article', 'dic-cartao');
      const svg = sv('svg', { class: 'diag-acorde', role: 'img' });
      svg.setAttribute('aria-label', 'Forma ' + (i + 1) + ': '
        + f.cordas.map((x, k) => (6 - k) + 'ª ' + (x < 0 ? 'não tocada' : x === 0 ? 'solta' : 'casa ' + x)).join(', '));
      diagramaAcorde(svg, { cordas: f.cordas, dedos: f.dedos, casaInicial: f.casaInicial, pestana: f.pestana });
      c.append(svg, el('p', 'dic-tipo', f.tipo),
        el('p', 'dic-tab', f.cordas.map((x) => (x < 0 ? '×' : x)).join(' ')),
        el('p', 'dic-dedos', 'Dedos: ' + f.dedos.map((d) => d || '×').join(' ')));
      grade.append(c);
    });
    umAcorde.append(grade, legenda());
  }

  function legenda() {
    return el('p', 'dica', 'Bolinha com número = dedo da mão esquerda (1 indicador, 2 médio, '
      + '3 anelar, 4 mínimo). × = corda não tocada, ○ = corda solta. A barra arredondada é pestana.');
  }

  // ---------------------------------------------------------------- chips
  function chips() {
    chipsQual.innerHTML = '';
    QUALIDADES.forEach((q) => {
      const b = el('button', 'chip dic-chip-q');
      b.append(el('span', 'dic-chip-cifra', q.cifra || 'maior'));
      b.append(el('span', 'dic-chip-nome', q.nome));
      b.setAttribute('aria-pressed', String(q.id === qual));
      b.onclick = () => { qual = q.id; Config.guardar('dic.qual', q.id); render(); };
      chipsQual.append(b);
    });
    chipsNota.innerHTML = '';
    raizes(bemol).forEach((n, pc) => {
      const b = el('button', 'chip dic-chip-n');
      b.append(el('span', 'dic-chip-cifra', cifraNota(n)));
      b.append(el('span', 'dic-chip-nome', nomeNota(n)));
      b.setAttribute('aria-pressed', String(pc === raizSel));
      b.onclick = () => { raizSel = pc; render(); };
      chipsNota.append(b);
    });
    chipsGrafia.innerHTML = '';
    [[false, '♯'], [true, '♭']].forEach(([v, t]) => {
      const b = el('button', 'chip sm', t);
      b.setAttribute('aria-pressed', String(v === bemol));
      b.setAttribute('aria-label', v ? 'Escrever com bemol' : 'Escrever com sustenido');
      b.onclick = () => { bemol = v; Config.guardar('dic.bemol', v); render(); };
      chipsGrafia.append(b);
    });
  }

  function chipsAbas() {
    abas.innerHTML = '';
    [['folha', 'Folha'], ['acorde', 'Acorde'], ['sobre', 'Sobre']].forEach(([id, nome]) => {
      const b = el('button', 'dic-aba' + (id === aba ? ' ativa' : ''), nome);
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(id === aba));
      b.onclick = () => { aba = id; Config.guardar('dic.aba', id); render(); };
      abas.append(b);
    });
  }

  // ---------------------------------------------------------------- "Sobre"
  function montarSobre() {
    sobre.innerHTML = '';
    sobre.append(el('h2', 'rotulo-grupo', 'Sobre a folha de acordes'));
    [
      'Escolha uma qualidade (maior, menor, com sétima, diminuto, com nona, treze e outras) e '
      + 'veja os 12 acordes numa folha, como a das aulas.',
      'Cada acorde tem até 3 formas: use os botões 1, 2, 3 abaixo do desenho. A primeira é a '
      + 'principal, a mais usada e mais fácil de começar. As outras mostram se pedem pestana ou não.',
      'As formas são as tradicionais de violão: abertas, sem pestana e com pestana (fundamental na '
      + '6ª ou na 5ª corda). Em acordes com cinco notas, como os de nona e treze, a quinta costuma '
      + 'ficar de fora, e é assim mesmo que se toca na prática.',
      'A bolinha com número é o dedo da mão esquerda. Use o botão ♯ | ♭ para trocar a escrita das '
      + 'notas (Dó♯ e Ré♭ são o mesmo acorde no violão) e '
      + (nativo() ? 'Salvar a folha para levá-la para a aula.' : 'Imprimir para levar a folha para a aula.')
    ].forEach((t) => sobre.append(el('p', 'texto-bloco', t)));
    const n = el('p', 'dica');
    n.textContent = 'Como isto é feito: as formas não são digitadas, são calculadas a partir da '
      + 'fórmula de cada acorde e conferidas uma a uma por um programa que soma a casa à corda '
      + 'solta e compara as notas que soam com a fórmula. São 264 acordes e 541 formas, e o CI '
      + 'não deixa passar uma forma que soe uma nota de fora ou que esqueça a terça ou a sétima.';
    sobre.append(n);
  }

  // ---------------------------------------------------------------- saída
  btSaida.onclick = async () => {
    if (!nativo()) { window.print(); return; }
    // No APK, window.print() não faz nada: o WebView do Android não tem
    // diálogo de impressão. Em vez de um botão que não funciona, a folha sai
    // como arquivo HTML, que o próprio celular abre e imprime.
    fbSaida.textContent = 'Preparando…'; fbSaida.className = 'feedback';
    try {
      const q = QUALIDADES.find((x) => x.id === qual);
      const nome = 'LLMusic-acordes-' + q.id.replace(/[^\w]/g, '') + '.html';
      const r = await entregarArquivo(nome, folhaHTML(q), 'text/html');
      if (encerrada) return;
      fbSaida.textContent = r.modo === 'arquivo' ? '✓ Salvo em: ' + r.caminho
        : r.modo === 'compartilhado' ? '✓ Abri o compartilhamento.' : '✓ ' + nome + ' salvo.';
      fbSaida.className = 'feedback certo';
    } catch (e) {
      if (encerrada) return;
      fbSaida.textContent = 'Não consegui salvar: ' + (e && e.message ? e.message : e);
      fbSaida.className = 'feedback errado';
    }
  };

  // A folha como arquivo solto: cores escritas, porque fora do app não existe
  // a folha de estilo dele.
  function folhaHTML(q) {
    const partes = raizes(bemol).map((n, pc) => {
      const f = formasDoAcorde(pc, q.id)[0];
      if (!f) return '<article><h3>' + cifraNota(n) + q.cifra + '</h3><p>sem forma</p></article>';
      const s = sv('svg', { class: 'diag-acorde', xmlns: 'http://www.w3.org/2000/svg', width: '150', height: '200' });
      diagramaAcorde(s, { cordas: f.cordas, dedos: f.dedos, casaInicial: f.casaInicial, pestana: f.pestana });
      return '<article><h3>' + cifraNota(n) + q.cifra + '</h3><p class="n">' + nomeNota(n) + ' ' + q.nome + '</p>'
        + new XMLSerializer().serializeToString(s)
        + '<p class="t">' + f.cordas.map((x) => (x < 0 ? '×' : x)).join(' ') + '</p></article>';
    });
    return '<!doctype html><html lang="pt-BR"><meta charset="utf-8">'
      + '<title>Acordes ' + q.nome + ' — LLMusic</title>'
      + '<style>body{font-family:Georgia,serif;color:#292D2A;background:#F3EFE3;margin:16px}'
      + 'h1{font-size:22px;margin:0 0 4px}h2{font-size:14px;font-weight:400;color:#496D5B;margin:0 0 16px}'
      + 'main{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}'
      + 'article{border:1px solid #879989;border-radius:8px;padding:8px;text-align:center;break-inside:avoid}'
      + 'h3{margin:0;font-size:20px;color:#263F35}.n{margin:0;font-size:11px;color:#496D5B}'
      + '.t{margin:4px 0 0;font-family:monospace;font-size:12px}'
      + '.diag-traste,.diag-corda{stroke:#292D2A;stroke-width:1;fill:none}'
      + '.diag-pestana{fill:#292D2A}.diag-dedo{fill:#B3242E}.diag-barra{fill:#263F35}'
      + '.diag-dedo-num{fill:#F3EFE3;font-size:10px;text-anchor:middle;font-family:sans-serif}'
      + '.diag-solta{fill:none;stroke:#292D2A;stroke-width:1.2}'
      + '.diag-x,.diag-casa-num,.diag-corda-num{fill:#292D2A;font-size:11px;text-anchor:middle;font-family:sans-serif}'
      + '</style><h1>Acordes — ' + q.nome + '</h1>'
      + '<h2>Forma principal de cada uma das 12 notas · LLMusic</h2><main>' + partes.join('') + '</main></html>';
  }

  // ---------------------------------------------------------------- render
  function render() {
    chipsAbas();
    chips();
    corpo.innerHTML = '';
    if (aba === 'sobre') { montarSobre(); corpo.append(sobre); return; }
    corpo.append(gGrafia, gQual);
    if (aba === 'folha') {
      desenharFolha();
      const q = QUALIDADES.find((x) => x.id === qual);
      corpo.append(el('h2', 'rotulo-grupo', q.nome + ' · 12 acordes'), folha, legenda(), acoes, fbSaida);
    } else {
      desenharUm();
      corpo.append(umAcorde);
    }
  }

  (async () => {
    const [a, b, g] = await Promise.all([
      Config.obter('dic.aba', 'folha'), Config.obter('dic.bemol', false), Config.obter('dic.qual', 'maior')
    ]);
    if (encerrada) return;
    if (['folha', 'acorde', 'sobre'].includes(a)) aba = a;
    bemol = !!b;
    if (!arg && QUALIDADES.some((x) => x.id === g)) qual = g;
    render();
  })().catch(() => render());

  raiz.append(tela);
  return () => { encerrada = true; };
}
