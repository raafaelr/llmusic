// Auditoria de cobertura curricular.
// Mostra, assunto por assunto, se o conteúdo pedagógico já existe no app.
// Estados: Planejado · Em desenvolvimento · Implementado · Validado.
import { auditar, carregarTodos, ESTADO_ASSUNTO } from '../curso/curriculo.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function barra(pct) {
  const b = el('div', 'barra-prog');
  const f = el('div', 'barra-prog-fill');
  f.style.width = Math.max(2, pct) + '%';
  b.append(f);
  return b;
}

export function montar(raiz, ir, arg) {
  let encerrada = false;
  const tela = el('main', 'tela auditoria-tela');
  raiz.append(tela);
  const abertos = new Set(arg ? [Number(arg)] : [1]);
  let filtro = 'todos';

  async function desenhar() {
    tela.innerHTML = '';
    tela.append(el('p', 'dica', 'Conferindo a cobertura curricular…'));
    const niveis = await carregarTodos();
    if (encerrada) return;
    const r = auditar(niveis);

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const v = el('button', 'botao-texto', '‹ Curso'); v.onclick = () => ir('curso');
    topo.append(v, el('h1', 'titulo-tela', 'Auditoria curricular'));
    tela.append(topo);

    tela.append(el('p', 'texto-bloco', 'Esta tela lista todos os assuntos previstos na grade dos 8 níveis e mostra quais já têm aula escrita no app. Nada é marcado como pronto sem material pedagógico correspondente.'));

    const geral = el('div', 'aud-geral');
    geral.append(el('span', 'aud-pct', r.pct + '%'));
    geral.append(el('span', 'aud-txt', r.feitos + ' de ' + r.total + ' assuntos com conteúdo publicado'));
    tela.append(geral, barra(r.pct));

    const legenda = el('div', 'aud-legenda');
    Object.entries(ESTADO_ASSUNTO).forEach(([k, v]) => {
      const s = el('span', 'aud-selo est-' + k, v.nome);
      legenda.append(s);
    });
    tela.append(legenda);
    tela.append(el('p', 'legenda', 'O que cada estado significa neste app: '
      + 'Planejado — assunto previsto na grade, sem aula escrita. '
      + 'Em desenvolvimento — aula começada, ainda incompleta. '
      + 'Implementado — a aula existe com teoria, representação visual, atividade prática, '
      + 'questionário e avaliação prática. '
      + 'Validado — além disso, a aula passou no validador automático do repositório '
      + '(scripts/validar-curso.mjs) e foi aberta na tela sem erro, sem estouro de layout e com todos os blocos desenhados.'));

    const chips = el('div', 'chips');
    [['todos', 'Todos'], ['planejado', 'Só planejados'], ['implementado', 'Só implementados']].forEach(([k, nome]) => {
      const c = el('button', 'chip' + (filtro === k ? ' ativo' : ''), nome);
      c.setAttribute('aria-pressed', String(filtro === k));
      c.onclick = () => { filtro = k; desenhar(); };
      chips.append(c);
    });
    tela.append(chips);

    r.porNivel.forEach((n) => {
      const cartao = el('section', 'nivel-cartao');
      const cab = el('button', 'nivel-cab');
      const info = el('div', 'nivel-info');
      info.append(el('span', 'nivel-num', 'Nível ' + n.n));
      info.append(el('h2', 'nivel-titulo', n.titulo));
      const lado = el('div', 'nivel-lado');
      lado.append(el('span', 'nivel-pct', n.pct + '%'));
      lado.append(el('span', 'nivel-cont', n.feitos + '/' + n.total + ' assuntos'));
      cab.append(info, lado);
      cab.onclick = () => { if (abertos.has(n.n)) abertos.delete(n.n); else abertos.add(n.n); desenhar(); };
      cartao.append(cab, barra(n.pct));

      if (abertos.has(n.n)) {
        const corpo = el('div', 'nivel-corpo');
        n.modulos.forEach((m) => {
          const assuntos = m.assuntos.filter((a) => filtro === 'todos'
            || (filtro === 'planejado' && (a.estado === 'planejado' || a.estado === 'desenvolvimento'))
            || (filtro === 'implementado' && (a.estado === 'implementado' || a.estado === 'validado')));
          if (!assuntos.length) return;
          const bloco = el('div', 'modulo-bloco');
          bloco.append(el('h3', 'modulo-titulo', 'Módulo ' + m.id + ' — ' + m.titulo));
          const lista = el('ul', 'aud-lista');
          assuntos.forEach((a) => {
            const li = el('li', 'aud-item');
            li.append(el('span', 'aud-selo est-' + a.estado, ESTADO_ASSUNTO[a.estado].nome));
            const t = el('div', 'aud-texto');
            t.append(el('span', 'aud-nome', a.nome));
            if (a.aulas.length) {
              const link = el('button', 'link-aula', '→ ' + a.aulas.map((x) => x.titulo).join(' · '));
              link.onclick = () => ir('aula/' + a.aulas[0].id);
              t.append(link);
            }
            li.append(t);
            lista.append(li);
          });
          bloco.append(lista);
          corpo.append(bloco);
        });
        cartao.append(corpo);
      }
      tela.append(cartao);
    });
    window.scrollTo(0, 0);
  }

  desenhar();
  return () => { encerrada = true; };
}
