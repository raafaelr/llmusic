// Biblioteca de Repertório: lista filtrável de obras em domínio público,
// com ficha de estudo de cada uma e registro do seu estágio.
// Rota #/repertorio ou #/repertorio/<id>.
import { OBRAS, PERIODOS, TECNICAS_REP, COMPOSITORES, NIVEIS_REP, obraPorId, nomePeriodo, nomeTecnicaRep } from '../curso/repertorio.js';
import { Config } from '../db.js';
import { acharAula } from '../curso/curriculo.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

const CHAVE = 'repertorio.registro';

// Em que ponto do estudo a obra está.
const ESTAGIOS = [
  { id: 'quero', nome: 'Quero tocar', cor: 'disc' },
  { id: 'lendo', nome: 'Lendo', cor: 'disc' },
  { id: 'estudando', nome: 'Estudando', cor: 'disc' },
  { id: 'memorizada', nome: 'Memorizada', cor: 'disc' },
  { id: 'repertorio', nome: 'No meu repertório', cor: 'ok' }
];
const nomeEstagio = (id) => (ESTAGIOS.find((e) => e.id === id) || { nome: '' }).nome;

export function montar(raiz, ir, arg) {
  let encerrada = false;
  const f = { periodo: 'todos', compositor: 'todos', nivel: 0, tecnica: 'todas', estagio: 'todos', busca: '' };
  const tela = el('main', 'tela exerc-tela');
  raiz.append(tela);

  async function lista() {
    const reg = await Config.obter(CHAVE, {});
    if (encerrada) return;
    tela.innerHTML = '';
    tela.className = 'tela exerc-tela';

    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Repertório'));
    tela.append(topo);

    const comEstagio = Object.keys(reg).length;
    const noRepertorio = Object.values(reg).filter((r) => r.estagio === 'repertorio').length;
    tela.append(el('p', 'dica', OBRAS.length + ' obras em domínio público, do Renascimento ao século XX, '
      + 'com ficha de estudo e indicação do que cada uma desenvolve. '
      + 'Você marcou ' + comEstagio + ' obra(s) e tem ' + noRepertorio + ' no seu repertório.'));
    tela.append(el('p', 'legenda', 'Só entram aqui obras de domínio público — autores falecidos há mais de 70 anos. '
      + 'Obras ainda protegidas (Villa-Lobos, Rodrigo, Brouwer e compositores vivos) são estudadas nas aulas de repertório, '
      + 'pela linguagem e pela técnica, com indicação da edição licenciada.'));

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
    filtros.append(chips('Período', [['todos', 'Todos'], ...PERIODOS.map((p) => [p.id, p.nome])], f.periodo, (v) => { f.periodo = v; }));
    filtros.append(chips('Nível', [[0, 'Todos'], ...NIVEIS_REP.map((n) => [n, String(n)])], f.nivel, (v) => { f.nivel = Number(v); }));
    filtros.append(chips('Técnica', [['todas', 'Todas'], ...TECNICAS_REP.filter((t) => OBRAS.some((o) => o.tecnicas.includes(t.id))).map((t) => [t.id, t.nome])], f.tecnica, (v) => { f.tecnica = v; }));
    filtros.append(chips('Compositor', [['todos', 'Todos'], ...COMPOSITORES.map((c) => [c, c.split(' ').slice(-1)[0]])], f.compositor, (v) => { f.compositor = v; }));
    filtros.append(chips('Meu estágio', [['todos', 'Todos'], ...ESTAGIOS.map((e) => [e.id, e.nome])], f.estagio, (v) => { f.estagio = v; }));

    const busca = el('div', 'grupo');
    busca.append(el('h2', 'rotulo-grupo', 'Buscar'));
    const inp = document.createElement('input');
    inp.type = 'search'; inp.className = 'campo-busca'; inp.placeholder = 'Nome da peça, compositor, tonalidade…';
    inp.value = f.busca;
    inp.oninput = () => { f.busca = inp.value; aplicar(); };
    busca.append(inp);
    filtros.append(busca);
    tela.append(filtros);

    const area = el('div', 'exerc-lista');
    tela.append(area);

    function aplicar() {
      const termo = f.busca.trim().toLowerCase();
      const vis = OBRAS.filter((o) => (f.periodo === 'todos' || o.periodo === f.periodo)
        && (!f.nivel || o.nivel === f.nivel)
        && (f.tecnica === 'todas' || o.tecnicas.includes(f.tecnica))
        && (f.compositor === 'todos' || o.compositor === f.compositor)
        && (f.estagio === 'todos' || (reg[o.id] || {}).estagio === f.estagio)
        && (!termo || (o.titulo + ' ' + o.compositor + ' ' + o.tom + ' ' + o.sobre).toLowerCase().includes(termo)));

      area.innerHTML = '';
      if (!vis.length) {
        area.append(el('p', 'texto-bloco', 'Nenhuma obra com esses filtros. Tente afrouxar um deles.'));
        return;
      }
      area.append(el('p', 'legenda', vis.length + ' obra(s)'));
      const grade = el('div', 'grade');
      vis.slice().sort((a, b) => a.nivel - b.nivel || a.titulo.localeCompare(b.titulo)).forEach((o) => {
        const r = reg[o.id];
        const c = el('button', 'cartao exerc-cartao' + (r && r.estagio === 'repertorio' ? ' feito' : ''));
        const cab = el('div', 'tec-cab');
        cab.append(el('h3', 'cartao-nome', o.titulo));
        if (r && r.estagio) cab.append(el('span', 'tec-ok', nomeEstagio(r.estagio)));
        c.append(cab);
        c.append(el('p', 'cartao-desc', o.compositor + ' · ' + o.sobre));
        const selos = el('div', 'aula-selos');
        selos.append(el('span', 'selo-aula', 'Nível ' + o.nivel));
        selos.append(el('span', 'selo-aula disc', nomePeriodo(o.periodo)));
        selos.append(el('span', 'selo-aula disc', o.tom));
        selos.append(el('span', 'selo-aula disc', '⏱ ' + o.minutos + ' min'));
        c.append(selos);
        c.onclick = () => ficha(o.id);
        grade.append(c);
      });
      area.append(grade);
    }
    aplicar();
    window.scrollTo(0, 0);
  }

  async function ficha(id) {
    const o = obraPorId(id);
    if (!o) return lista();
    const reg = await Config.obter(CHAVE, {});
    if (encerrada) return;
    const r = reg[o.id] || { estagio: '', anotacao: '', em: null };

    tela.innerHTML = '';
    tela.className = 'tela exerc-tela aula-tela';
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Repertório');
    voltar.onclick = lista;
    topo.append(voltar, el('h1', 'titulo-tela', o.titulo));
    tela.append(topo);

    const cab = el('div', 'aula-cab');
    cab.append(el('p', 'aula-trilha', o.compositor + ' (falecido em ' + o.morte + ') · ' + nomePeriodo(o.periodo)));
    const selos = el('div', 'aula-selos');
    selos.append(el('span', 'selo-aula', 'Nível ' + o.nivel));
    selos.append(el('span', 'selo-aula disc', o.tom));
    selos.append(el('span', 'selo-aula disc', '⏱ ' + o.minutos + ' min'));
    o.tecnicas.forEach((t) => selos.append(el('span', 'selo-aula disc', nomeTecnicaRep(t))));
    cab.append(selos);
    const dp = el('p', 'aula-prereq');
    dp.append(el('strong', '', 'Domínio público. '));
    dp.append(document.createTextNode('O autor faleceu em ' + o.morte + ', portanto a partitura pode ser procurada, copiada, tocada e gravada livremente. '
      + 'Atenção: uma edição moderna específica pode ter direitos próprios sobre o trabalho editorial.'));
    cab.append(dp);
    tela.append(cab);

    const corpo = el('div', 'aula-corpo');
    corpo.append(el('h2', 'rotulo-grupo titulo-bloco', 'Sobre a obra'));
    corpo.append(el('p', 'texto-bloco', o.sobre));

    const d = el('div', 'def-bloco');
    d.append(el('span', 'def-termo', 'O que ela desenvolve'));
    d.append(el('p', 'def-texto', o.ensina));
    corpo.append(d);

    corpo.append(el('h2', 'rotulo-grupo titulo-bloco', 'Como estudar'));
    const ol = el('ol', 'passos-bloco');
    o.estudar.forEach((p) => ol.append(el('li', '', p)));
    corpo.append(ol);

    if ((o.aulas || []).length) {
      const l = el('p', 'aula-prereq');
      l.append(document.createTextNode('Aulas relacionadas: '));
      o.aulas.forEach(async (aid, i) => {
        if (i) l.append(document.createTextNode(' · '));
        const b = el('button', 'link-aula', aid);
        b.onclick = () => ir('aula/' + aid);
        l.append(b);
        const a = await acharAula(aid);
        if (a && !encerrada) b.textContent = a.titulo;
      });
      corpo.append(l);
    }

    const ferramentas = el('div', 'bloco-botoes');
    const bm = el('button', 'botao-sec', 'Abrir o metrônomo');
    bm.onclick = () => ir('metronomo');
    const be = el('button', 'botao-sec', 'Central de Exercícios');
    be.onclick = () => ir('exercicios');
    const bp = el('button', 'botao-sec', 'Meu Plano de Estudos');
    bp.onclick = () => ir('plano');
    ferramentas.append(bm, be, bp);
    corpo.append(ferramentas);
    tela.append(corpo);

    // ---- registro ----
    const fecho = el('section', 'aula-fecho');
    fecho.append(el('h2', 'rotulo-grupo titulo-bloco', 'Em que ponto estou'));
    const chips = el('div', 'chips');
    ESTAGIOS.forEach((e) => {
      const b = el('button', 'chip' + (r.estagio === e.id ? ' ativo' : ''), e.nome);
      b.onclick = async () => {
        const atual = await Config.obter(CHAVE, {});
        atual[o.id] = { ...(atual[o.id] || {}), estagio: r.estagio === e.id ? '' : e.id, em: new Date().toISOString() };
        await Config.guardar(CHAVE, atual);
        if (!encerrada) ficha(o.id);
      };
      chips.append(b);
    });
    fecho.append(chips);

    fecho.append(el('h3', 'subtitulo-bloco', 'Minhas anotações'));
    const ta = document.createElement('textarea');
    ta.className = 'campo-texto'; ta.rows = 4;
    ta.placeholder = 'Digitação escolhida, trechos difíceis, andamento atingido, decisões de interpretação…';
    ta.value = r.anotacao || '';
    const salvar = el('button', 'botao-principal', 'Salvar anotação');
    const aviso = el('p', 'feedback', '');
    salvar.onclick = async () => {
      const atual = await Config.obter(CHAVE, {});
      atual[o.id] = { ...(atual[o.id] || {}), anotacao: ta.value, em: new Date().toISOString() };
      await Config.guardar(CHAVE, atual);
      if (encerrada) return;
      aviso.textContent = '✓ Anotação salva.';
      aviso.className = 'feedback certo';
    };
    fecho.append(ta, salvar, aviso);
    tela.append(fecho);
    window.scrollTo(0, 0);
  }

  if (arg) ficha(arg); else lista();
  return () => { encerrada = true; };
}
