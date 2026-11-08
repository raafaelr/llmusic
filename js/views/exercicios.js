// Central de Exercícios: lista filtrável e ficha de cada exercício,
// com registro de quantas vezes você fez e em que andamento chegou.
// Rota #/exercicios ou #/exercicios/<id>.
import { EXERCICIOS, TIPOS, exercicioPorId, DIFICULDADES_EX, FAIXAS_TEMPO } from '../curso/exercicios.js';
import { DISCIPLINAS, nomeDisciplina } from '../curso/curriculo.js';
import { tecnicaPorId } from '../curso/tecnicas.js';
import { criarRenderizador } from '../curso/blocos.js';
import { Config } from '../db.js';
import { hojeISO } from '../pratica.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

const CHAVE = 'exercicios.registro';

export function montar(raiz, ir, arg) {
  let encerrada = false;
  let render = null;
  const f = { tipo: 'todos', nivel: 0, disciplina: 'todas', dificuldade: 'todas', tempo: 'todos', objetivo: '' };
  const tela = el('main', 'tela exerc-tela');
  raiz.append(tela);

  function limpar() { if (render) { render.fechar(); render = null; } }

  async function lista() {
    limpar();
    const reg = await Config.obter(CHAVE, {});
    if (encerrada) return;
    tela.innerHTML = '';
    tela.className = 'tela exerc-tela';

    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Central de Exercícios'));
    tela.append(topo);

    const totalFeitos = Object.values(reg).reduce((a, r) => a + (r.vezes || 0), 0);
    const distintos = Object.keys(reg).length;
    tela.append(el('p', 'dica', EXERCICIOS.length + ' exercícios, de escalas a percepção auditiva. '
      + 'Cada um com instruções, digitação, velocidade recomendada e critério de execução correta. '
      + 'Você já praticou ' + distintos + ' exercícios diferentes, ' + totalFeitos + ' vezes no total.'));

    // ---- filtros ----
    const filtros = el('div', 'tec-filtros');
    function chips(titulo, opcoes, atual, aoEscolher) {
      const g = el('div', 'grupo');
      g.append(el('h2', 'rotulo-grupo', titulo));
      const c = el('div', 'chips');
      opcoes.forEach(([v, nome]) => {
        const b = el('button', 'chip' + (String(atual) === String(v) ? ' ativo' : ''), nome);
        b.setAttribute('aria-pressed', String(String(atual) === String(v)));
        b.onclick = () => { aoEscolher(v); lista(); };
        c.append(b);
      });
      g.append(c);
      return g;
    }
    filtros.append(chips('Tipo', [['todos', 'Todos'], ...TIPOS.map((t) => [t.id, t.nome])], f.tipo, (v) => { f.tipo = v; }));
    filtros.append(chips('Nível', [[0, 'Todos'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']], f.nivel, (v) => { f.nivel = Number(v); }));
    filtros.append(chips('Disciplina', [['todas', 'Todas'], ...DISCIPLINAS.filter((d) => EXERCICIOS.some((e) => (e.disciplinas || []).includes(d.id))).map((d) => [d.id, d.nome])], f.disciplina, (v) => { f.disciplina = v; }));
    filtros.append(chips('Dificuldade', [['todas', 'Todas'], ...DIFICULDADES_EX.map((d) => [d, d])], f.dificuldade, (v) => { f.dificuldade = v; }));
    filtros.append(chips('Tempo', [['todos', 'Qualquer'], ...FAIXAS_TEMPO.map((t) => [t.id, t.nome])], f.tempo, (v) => { f.tempo = v; }));

    const busca = el('div', 'grupo');
    busca.append(el('h2', 'rotulo-grupo', 'Objetivo'));
    const inp = document.createElement('input');
    inp.type = 'search'; inp.className = 'campo-busca'; inp.placeholder = 'Ex.: independência, afinação, leitura…';
    inp.value = f.objetivo;
    inp.oninput = () => { f.objetivo = inp.value; aplicar(); };
    busca.append(inp);
    filtros.append(busca);
    tela.append(filtros);

    const area = el('div', 'exerc-lista');
    tela.append(area);

    function aplicar() {
      const termo = f.objetivo.trim().toLowerCase();
      const visiveis = EXERCICIOS.filter((e) => (f.tipo === 'todos' || e.tipo === f.tipo)
        && (!f.nivel || e.nivel === f.nivel)
        && (f.disciplina === 'todas' || (e.disciplinas || []).includes(f.disciplina))
        && (f.dificuldade === 'todas' || e.dificuldade === f.dificuldade)
        && (f.tempo === 'todos' || (FAIXAS_TEMPO.find((t) => t.id === f.tempo) || { teste: () => true }).teste(e))
        && (!termo || (e.objetivo + ' ' + e.nome + ' ' + e.explicacao).toLowerCase().includes(termo)));

      area.innerHTML = '';
      if (!visiveis.length) {
        area.append(el('p', 'texto-bloco', 'Nenhum exercício com esses filtros. Tente afrouxar um deles.'));
        return;
      }
      area.append(el('p', 'legenda', visiveis.length + ' exercício(s)'));
      const grade = el('div', 'grade');
      visiveis.forEach((e) => {
        const r = reg[e.id];
        const c = el('button', 'cartao exerc-cartao' + (r ? ' feito' : ''));
        const cab = el('div', 'tec-cab');
        cab.append(el('h3', 'cartao-nome', e.nome));
        if (r) cab.append(el('span', 'tec-ok', '✓ ' + r.vezes + '×'));
        c.append(cab);
        c.append(el('p', 'cartao-desc', e.objetivo));
        const selos = el('div', 'aula-selos');
        selos.append(el('span', 'selo-aula', 'Nível ' + e.nivel));
        selos.append(el('span', 'selo-aula disc', e.dificuldade));
        selos.append(el('span', 'selo-aula disc', '⏱ ' + e.minutos + ' min'));
        if (e.bpm) selos.append(el('span', 'selo-aula disc', e.bpm.inicial + '→' + e.bpm.meta + ' BPM'));
        c.append(selos);
        c.onclick = () => ficha(e.id);
        grade.append(c);
      });
      area.append(grade);
    }
    aplicar();
    window.scrollTo(0, 0);
  }

  async function ficha(id) {
    const e = exercicioPorId(id);
    if (!e) return lista();
    limpar();
    const reg = await Config.obter(CHAVE, {});
    if (encerrada) return;
    render = criarRenderizador({ aulaId: 'ex.' + e.id, ir, ativo: () => !encerrada });

    tela.innerHTML = '';
    tela.className = 'tela exerc-tela aula-tela';
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Exercícios');
    voltar.onclick = lista;
    topo.append(voltar, el('h1', 'titulo-tela', e.nome));
    tela.append(topo);

    const cab = el('div', 'aula-cab');
    const selos = el('div', 'aula-selos');
    selos.append(el('span', 'selo-aula', 'Nível ' + e.nivel));
    selos.append(el('span', 'selo-aula disc', e.dificuldade));
    selos.append(el('span', 'selo-aula disc', '⏱ ' + e.minutos + ' min'));
    (e.disciplinas || []).forEach((d) => selos.append(el('span', 'selo-aula disc', nomeDisciplina(d))));
    cab.append(selos);
    const ob = el('div', 'aula-objetivo');
    ob.append(el('strong', '', 'Objetivo técnico: '), document.createTextNode(e.objetivo));
    cab.append(ob);
    if ((e.tecnicas || []).length) {
      const l = el('p', 'aula-prereq');
      l.append(document.createTextNode('Técnicas envolvidas: '));
      e.tecnicas.forEach((tid, i) => {
        const t = tecnicaPorId(tid);
        if (!t) return;
        if (i) l.append(document.createTextNode(' · '));
        const b = el('button', 'link-aula', t.nome);
        b.onclick = () => ir('tecnicas/' + t.id);
        l.append(b);
      });
      cab.append(l);
    }
    tela.append(cab);

    const corpo = el('div', 'aula-corpo');
    corpo.append(el('p', 'texto-bloco', e.explicacao));

    corpo.append(render.bloco({ t: 'h', x: 'Instruções' }));
    corpo.append(render.bloco({ t: 'passos', itens: e.instrucoes || [] }));

    if (e.digitacao) {
      const d = el('div', 'def-bloco');
      d.append(el('span', 'def-termo', 'Digitação'));
      d.append(el('p', 'def-texto', e.digitacao));
      corpo.append(d);
    }
    if (e.bpm) {
      const d = el('div', 'def-bloco');
      d.append(el('span', 'def-termo', 'Velocidade recomendada'));
      d.append(el('p', 'def-texto', 'Comece em ' + e.bpm.inicial + ' BPM e trabalhe até ' + e.bpm.meta + ' BPM. '
        + 'Suba de 4 em 4 ou de 6 em 6, só depois de um minuto inteiro sem erro.'
        + (e.metronomo ? ' Use o metrônomo sempre neste exercício.' : '')));
      corpo.append(d);
    }

    (e.blocos || []).forEach((b) => {
      try { corpo.append(render.bloco(b)); }
      catch (err) { corpo.append(el('p', 'dica', 'Não consegui mostrar um trecho deste exercício.')); }
    });
    tela.append(corpo);

    // ---- registro ----
    const fecho = el('section', 'aula-fecho');
    fecho.append(el('h2', 'rotulo-grupo titulo-bloco', 'Registrar a prática'));
    const cr = el('p', 'auto-criterio');
    cr.append(el('strong', '', 'Critério de execução correta: '), document.createTextNode(e.criterio || ''));
    fecho.append(cr);

    const r = reg[e.id] || { vezes: 0, bpm: e.bpm ? e.bpm.inicial : null, ultimo: null };
    const hist = el('p', 'legenda', r.vezes
      ? 'Você já fez este exercício ' + r.vezes + ' vez(es). Última: ' + (r.ultimo || '—') + (r.bpm ? ' · melhor andamento: ' + r.bpm + ' BPM' : '')
      : 'Você ainda não registrou este exercício.');
    fecho.append(hist);

    const linha = el('div', 'linha-botoes');
    if (e.bpm) {
      const rot = el('label', 'campo-bpm');
      rot.append(el('span', '', 'Andamento de hoje (BPM): '));
      const inp = document.createElement('input');
      inp.type = 'number'; inp.min = 30; inp.max = 240; inp.step = 2;
      inp.value = r.bpm || e.bpm.inicial;
      inp.className = 'campo-num';
      rot.append(inp);
      linha.append(rot);
      linha.dataset.temBpm = '1';
      linha.__inp = inp;
    }
    const bt = el('button', 'botao-principal', '✓ Registrar que pratiquei');
    const fb = el('p', 'feedback', '');
    bt.onclick = async () => {
      const atual = await Config.obter(CHAVE, {});
      const antes = atual[e.id] || { vezes: 0, bpm: null };
      const novoBpm = linha.__inp ? Number(linha.__inp.value) : null;
      atual[e.id] = {
        vezes: (antes.vezes || 0) + 1,
        ultimo: hojeISO(),
        bpm: novoBpm !== null ? Math.max(antes.bpm || 0, novoBpm) : antes.bpm || null
      };
      await Config.guardar(CHAVE, atual);
      hist.textContent = 'Você já fez este exercício ' + atual[e.id].vezes + ' vez(es). Última: hoje'
        + (atual[e.id].bpm ? ' · melhor andamento: ' + atual[e.id].bpm + ' BPM' : '');
      fb.textContent = '✓ Prática registrada.' + (e.bpm && novoBpm >= e.bpm.meta ? ' Você atingiu a meta de andamento deste exercício!' : '');
      fb.className = 'feedback certo';
    };
    linha.append(bt);
    fecho.append(linha, fb);
    tela.append(fecho);

    const acoes = el('div', 'acoes acoes-licao');
    const i = EXERCICIOS.indexOf(e);
    if (i > 0) { const b = el('button', 'botao-sec', '‹ ' + EXERCICIOS[i - 1].nome); b.onclick = () => ficha(EXERCICIOS[i - 1].id); acoes.append(b); }
    if (i < EXERCICIOS.length - 1) { const b = el('button', 'botao-sec', EXERCICIOS[i + 1].nome + ' ›'); b.onclick = () => ficha(EXERCICIOS[i + 1].id); acoes.append(b); }
    tela.append(acoes);
    window.scrollTo(0, 0);
  }

  if (arg && exercicioPorId(arg)) ficha(arg); else lista();

  const aoEsconder = () => { if (document.hidden && render) render.silenciar(); };
  document.addEventListener('visibilitychange', aoEsconder);
  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    limpar();
  };
}
