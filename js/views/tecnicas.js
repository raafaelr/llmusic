// Biblioteca de Técnicas: lista filtrável e ficha completa de cada técnica.
// Rota #/tecnicas, ou #/tecnicas/apoyando para abrir uma direto.
import { TECNICAS, GRUPOS_TECNICA, tecnicaPorId, DIFICULDADES } from '../curso/tecnicas.js';
import { criarRenderizador } from '../curso/blocos.js';
import { Config } from '../db.js';
import { icone, botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

const CHAVE = 'tecnicas.dominadas';

export function montar(raiz, ir, arg) {
  let encerrada = false;
  let render = null;
  let filtroGrupo = 'todos';
  let filtroNivel = 0;
  let filtroDif = 'todas';
  const tela = el('main', 'tela tecnicas-tela');
  raiz.append(tela);

  function limpar() { if (render) { render.fechar(); render = null; } }

  async function lista() {
    limpar();
    const dominadas = await Config.obter(CHAVE, {});
    if (encerrada) return;
    tela.innerHTML = '';
    tela.className = 'tela tecnicas-tela';

    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Biblioteca de Técnicas'));
    tela.append(topo);

    const feitas = Object.values(dominadas).filter(Boolean).length;
    tela.append(el('p', 'dica', TECNICAS.length + ' técnicas do violão clássico, da mais básica à mais avançada. '
      + 'Cada uma com passo a passo, digitação, exercícios, erros comuns e critérios para você avaliar a sua execução. '
      + 'Dominadas: ' + feitas + ' de ' + TECNICAS.length + '.'));

    // ---- filtros ----
    const filtros = el('div', 'tec-filtros');
    function grupoChips(titulo, opcoes, atual, aoEscolher) {
      const g = el('div', 'grupo');
      g.append(el('h2', 'rotulo-grupo', titulo));
      const c = el('div', 'chips');
      opcoes.forEach(([v, nome]) => {
        const b = el('button', 'chip' + (atual === v ? ' ativo' : ''), nome);
        b.setAttribute('aria-pressed', String(atual === v));
        b.onclick = () => { aoEscolher(v); lista(); };
        c.append(b);
      });
      g.append(c);
      return g;
    }
    filtros.append(grupoChips('Grupo', [['todos', 'Todos'], ...GRUPOS_TECNICA.map((g) => [g.id, g.nome])], filtroGrupo, (v) => { filtroGrupo = v; }));
    filtros.append(grupoChips('Nível', [[0, 'Todos'], [1, 'Nível 1'], [2, 'Nível 2'], [3, 'Nível 3'], [4, 'Nível 4'], [5, 'Nível 5']], filtroNivel, (v) => { filtroNivel = Number(v); }));
    filtros.append(grupoChips('Dificuldade', [['todas', 'Todas'], ...DIFICULDADES.map((d) => [d, d])], filtroDif, (v) => { filtroDif = v; }));
    tela.append(filtros);

    const visiveis = TECNICAS.filter((t) => (filtroGrupo === 'todos' || t.grupo === filtroGrupo)
      && (!filtroNivel || t.nivel === filtroNivel)
      && (filtroDif === 'todas' || t.dificuldade === filtroDif));

    if (!visiveis.length) {
      tela.append(el('p', 'texto-bloco', 'Nenhuma técnica com esses filtros. Tente afrouxar um deles.'));
      return;
    }

    GRUPOS_TECNICA.forEach((g) => {
      const doGrupo = visiveis.filter((t) => t.grupo === g.id);
      if (!doGrupo.length) return;
      const sec = el('section', 'tec-grupo');
      sec.append(el('h2', 'rotulo-grupo titulo-bloco', g.nome));
      sec.append(el('p', 'legenda', g.desc));
      const grade = el('div', 'grade');
      doGrupo.forEach((t) => {
        const c = el('button', 'cartao tec-cartao' + (dominadas[t.id] ? ' dominada' : ''));
        const cab = el('div', 'tec-cab');
        cab.append(el('h3', 'cartao-nome', t.nome));
        if (dominadas[t.id]) cab.append(el('span', 'tec-ok', '✓'));
        c.append(cab);
        c.append(el('p', 'cartao-desc', t.desc));
        const selos = el('div', 'aula-selos');
        selos.append(el('span', 'selo-aula', 'Nível ' + t.nivel));
        selos.append(el('span', 'selo-aula disc', t.dificuldade));
        c.append(selos);
        c.onclick = () => ficha(t.id);
        grade.append(c);
      });
      sec.append(grade);
      tela.append(sec);
    });
    window.scrollTo(0, 0);
  }

  async function ficha(id) {
    const t = tecnicaPorId(id);
    if (!t) return lista();
    limpar();
    const dominadas = await Config.obter(CHAVE, {});
    if (encerrada) return;
    render = criarRenderizador({ aulaId: 'tec.' + t.id, ir, ativo: () => !encerrada });

    tela.innerHTML = '';
    tela.className = 'tela tecnicas-tela aula-tela';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Técnicas');
    voltar.onclick = lista;
    topo.append(voltar, el('h1', 'titulo-tela', t.nome));
    tela.append(topo);

    const cab = el('div', 'aula-cab');
    const selos = el('div', 'aula-selos');
    selos.append(el('span', 'selo-aula', 'Nível ' + t.nivel));
    selos.append(el('span', 'selo-aula disc', t.dificuldade));
    selos.append(el('span', 'selo-aula disc', (GRUPOS_TECNICA.find((g) => g.id === t.grupo) || {}).nome || ''));
    cab.append(selos);
    const d = el('p', 'texto-bloco', t.desc);
    const ob = el('div', 'aula-objetivo');
    ob.append(el('strong', '', 'Objetivo: '), document.createTextNode(t.objetivo));
    cab.append(d, ob);
    if (t.aula) {
      const linha = el('p', 'aula-prereq');
      linha.append(document.createTextNode('Esta técnica é ensinada em detalhe na aula '));
      const b = el('button', 'link-aula', t.aula);
      b.onclick = () => ir('aula/' + t.aula);
      linha.append(b, document.createTextNode(' do curso.'));
      cab.append(linha);
    }
    tela.append(cab);

    const corpo = el('div', 'aula-corpo');
    (t.blocos || []).forEach((b) => {
      try { corpo.append(render.bloco(b)); }
      catch (e) { corpo.append(el('p', 'dica', 'Não consegui mostrar um trecho desta técnica.')); }
    });
    tela.append(corpo);

    // erros comuns
    if (t.erros && t.erros.length) {
      tela.append(render.bloco({ t: 'erros', itens: t.erros }));
    }

    // exercícios relacionados
    if (t.exercicios && t.exercicios.length) {
      const sec = el('div', 'resumo-bloco');
      sec.append(el('h3', 'subtitulo-bloco', 'Exercícios relacionados'));
      const u = el('ul', 'lista-bloco');
      t.exercicios.forEach((x) => u.append(el('li', '', x)));
      sec.append(u);
      tela.append(sec);
    }

    // critérios de avaliação + marcar como dominada
    const aval = el('section', 'aula-fecho');
    aval.append(el('h2', 'rotulo-grupo titulo-bloco', 'Como avaliar a sua execução'));
    aval.append(el('p', 'legenda', 'Marque cada critério que você já cumpre. Seja honesto: ninguém está olhando, e o curso é seu.'));
    const caixas = [];
    const lis = el('div', 'auto-lista');
    (t.criterios || []).forEach((c, i) => {
      const rot = el('label', 'item-check');
      const cx = document.createElement('input');
      cx.type = 'checkbox';
      cx.checked = !!(dominadas[t.id] && dominadas[t.id][i]);
      cx.onchange = conferir;
      caixas.push(cx);
      rot.append(cx, el('span', '', c));
      lis.append(rot);
    });
    aval.append(lis);
    const bt = el('button', 'botao-principal', 'Marcar técnica como dominada');
    const fb = el('p', 'feedback', '');
    function conferir() {
      const todos = caixas.length > 0 && caixas.every((c) => c.checked);
      bt.disabled = !todos;
      fb.textContent = todos ? '' : 'Marque todos os critérios para considerar a técnica dominada.';
      fb.className = 'feedback';
    }
    bt.onclick = async () => {
      const atual = await Config.obter(CHAVE, {});
      atual[t.id] = caixas.map((c) => c.checked);
      await Config.guardar(CHAVE, atual);
      fb.textContent = '✓ Técnica marcada como dominada.';
      fb.className = 'feedback certo';
    };
    conferir();
    aval.append(bt, fb);
    tela.append(aval);

    // navegação entre técnicas
    const acoes = el('div', 'acoes acoes-licao');
    const i = TECNICAS.indexOf(t);
    if (i > 0) { const b = botaoIcone('botao-sec', 'voltar', TECNICAS[i - 1].nome); b.onclick = () => ficha(TECNICAS[i - 1].id); acoes.append(b); }
    if (i < TECNICAS.length - 1) { const b = el('button', 'botao-sec', TECNICAS[i + 1].nome); b.append(icone('avancar')); b.onclick = () => ficha(TECNICAS[i + 1].id); acoes.append(b); }
    tela.append(acoes);
    window.scrollTo(0, 0);
  }

  if (arg && tecnicaPorId(arg)) ficha(arg); else lista();

  const aoEsconder = () => { if (document.hidden && render) render.silenciar(); };
  document.addEventListener('visibilitychange', aoEsconder);
  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    limpar();
  };
}
