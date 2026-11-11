// Grade curricular: os 8 níveis, com módulos, aulas e progresso.
// Rota #/curso mostra os níveis; #/curso/3 abre o nível 3 já aberto.
import { MAPA, carregarNivel, carregarTodos, DISCIPLINAS, nomeDisciplina } from '../curso/curriculo.js';
import { carregarFichas, estadoDaFicha, progressoDoModulo, progressoDoNivel, liberada, ESTADOS } from '../curso/progresso.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
// Os oito níveis em algarismo romano. São oito e param no VIII: uma tabela
// resolve, e uma função de conversão geral seria código para um caso que não
// existe. O romano é só para a capa; o número continua escrito por extenso
// logo ao lado, porque nem todo mundo lê VII de relance.
const ROMANOS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

// A capa do nível: algarismo, título, objetivo e o quanto já foi dominado.
// O verde escurece do nível 1 ao 8 (classe .capa-nN, em css/style.css).
export function capaNivel(n, prog) {
  const capa = el('button', 'capa-nivel capa-n' + n.n + (n.pronto ? '' : ' futuro'));
  capa.append(el('span', 'capa-romano', ROMANOS[n.n] || String(n.n)));
  capa.append(el('span', 'capa-titulo', n.titulo));
  if (n.objetivo) capa.append(el('span', 'capa-obj', n.objetivo));
  if (n.pronto && prog) {
    capa.append(el('span', 'capa-conta', 'Nível ' + n.n + ' · ' + prog.dominadas + ' de ' + prog.total + ' aulas dominadas'));
    const t = el('div', 'capa-trilho');
    const i = document.createElement('i');
    i.style.width = Math.max(0, Math.min(100, prog.pct)) + '%';
    t.append(i);
    capa.append(t);
  } else {
    capa.append(el('span', 'capa-conta', 'Nível ' + n.n + ' · conteúdo em preparação'));
  }
  return capa;
}

export function montar(raiz, ir, arg) {
  let encerrada = false;
  const tela = el('main', 'tela curso-tela');
  raiz.append(tela);
  const abertos = new Set(arg ? [Number(arg)] : []);

  async function desenhar() {
    tela.innerHTML = '';
    tela.append(el('p', 'dica', 'Carregando a grade curricular…'));
    const [niveis, fichas] = await Promise.all([carregarTodos(), carregarFichas()]);
    if (encerrada) return;

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Grade curricular'));
    tela.append(topo);

    const geral = niveis.reduce((a, n) => {
      const p = progressoDoNivel(n, fichas);
      return { dom: a.dom + p.dominadas, tot: a.tot + p.total };
    }, { dom: 0, tot: 0 });
    const resumo = el('p', 'dica', 'Oito níveis, do zero ao aperfeiçoamento. '
      + (geral.tot ? 'Aulas dominadas: ' + geral.dom + ' de ' + geral.tot + ' já escritas.' : ''));
    tela.append(resumo);

    const acoes = el('div', 'linha-botoes curso-acoes');
    const bp = el('button', 'botao-sec', 'Meu painel'); bp.onclick = () => ir('painel');
    const bd = el('button', 'botao-sec', 'Disciplinas'); bd.onclick = () => verDisciplinas();
    const ba = el('button', 'botao-sec', 'Auditoria curricular'); ba.onclick = () => ir('auditoria');
    acoes.append(bp, bd, ba);
    tela.append(acoes);

    // A estante: as oito lombadas, cada uma enchendo de dourado conforme o
    // nível avança. Serve para ver de longe onde se está e para pular direto,
    // sem rolar oito capas. O dourado fica aqui, e não na capa: sobre a capa
    // ele daria 2,00 de contraste no nível 1; sobre a superfície da página,
    // passa. (Conferido em scripts/conferir-contraste.mjs.)
    const estante = el('nav', 'estante');
    estante.setAttribute('aria-label', 'Os oito níveis');
    niveis.forEach((n) => {
      const p = progressoDoNivel(n, fichas);
      const l = el('button', 'lombada');
      const cheio = document.createElement('i');
      cheio.style.height = (n.pronto ? Math.max(0, Math.min(100, p.pct)) : 0) + '%';
      l.append(cheio, el('span', '', ROMANOS[n.n] || String(n.n)));
      l.title = 'Nível ' + n.n + ' — ' + n.titulo;
      l.setAttribute('aria-label', l.title + (n.pronto ? ': ' + p.pct + '% dominado' : ': em preparação'));
      if (abertos.has(n.n)) l.setAttribute('aria-current', 'page');
      l.onclick = () => { abertos.clear(); abertos.add(n.n); desenhar(); };
      estante.append(l);
    });
    tela.append(estante);

    niveis.forEach((n) => {
      const prog = progressoDoNivel(n, fichas);
      const cartao = el('section', 'nivel-cartao' + (n.pronto ? '' : ' nivel-futuro'));
      const cab = capaNivel(n, prog);
      cab.setAttribute('aria-expanded', String(abertos.has(n.n)));
      cab.onclick = () => { if (abertos.has(n.n)) abertos.delete(n.n); else abertos.add(n.n); desenhar(); };
      cartao.append(cab);

      if (abertos.has(n.n)) {
        const corpo = el('div', 'nivel-corpo');
        (n.modulos || []).forEach((m) => {
          const bloco = el('div', 'modulo-bloco');
          const pm = progressoDoModulo(m, fichas);
          const mh = el('div', 'modulo-cab');
          mh.append(el('h3', 'modulo-titulo', 'Módulo ' + m.id + ' — ' + m.titulo));
          if ((m.aulas || []).length) mh.append(el('span', 'modulo-pct', pm.dominadas + '/' + pm.total));
          bloco.append(mh);
          if (m.objetivo) bloco.append(el('p', 'modulo-obj', m.objetivo));

          if ((m.aulas || []).length) {
            const lista = el('ul', 'aula-lista');
            m.aulas.forEach((a, i) => {
              const est = estadoDaFicha(fichas[a.id]);
              const livre = liberada(a, fichas);
              const li = el('li', 'aula-item estado-' + est + (livre ? '' : ' travada'));
              const bt = el('button', 'aula-botao');
              bt.append(el('span', 'aula-sinal', ESTADOS[est].sinal));
              const txt = el('div', 'aula-txt');
              txt.append(el('span', 'aula-nome', (i + 1) + '. ' + a.titulo));
              txt.append(el('span', 'aula-res', a.resumo || ''));
              bt.append(txt);
              bt.append(el('span', 'aula-min', a.minutos + ' min'));
              bt.onclick = () => ir('aula/' + a.id);
              li.append(bt);
              lista.append(li);
            });
            bloco.append(lista);
          } else {
            // módulo ainda sem aulas escritas: mostramos os assuntos previstos
            const lista = el('ul', 'assunto-lista');
            (m.assuntos || []).forEach((t) => lista.append(el('li', 'assunto-item', t)));
            bloco.append(el('p', 'legenda', 'Assuntos previstos para este módulo:'));
            bloco.append(lista);
          }
          corpo.append(bloco);
        });
        if (n.criterio) {
          const cr = el('p', 'nivel-criterio');
          cr.append(el('strong', '', 'Para concluir o nível: '), document.createTextNode(n.criterio));
          corpo.append(cr);
        }
        cartao.append(corpo);
      }
      tela.append(cartao);
    });
    window.scrollTo(0, 0);
  }

  function verDisciplinas() {
    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const v = botaoIcone('botao-texto', 'voltar', 'Grade'); v.onclick = desenhar;
    topo.append(v, el('h1', 'titulo-tela', 'Disciplinas'));
    tela.append(topo);
    tela.append(el('p', 'dica', 'Doze disciplinas acompanham o aluno do Nível 1 ao 8. Cada aula do curso pertence a uma ou mais delas.'));
    const grade = el('div', 'grade');
    DISCIPLINAS.forEach((d) => {
      const c = el('div', 'cartao');
      c.append(el('h2', 'cartao-nome', d.nome), el('p', 'cartao-desc', d.desc));
      grade.append(c);
    });
    tela.append(grade);
    window.scrollTo(0, 0);
  }

  desenhar();
  return () => { encerrada = true; };
}
