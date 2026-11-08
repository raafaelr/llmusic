// Painel do aluno: onde você está, quanto andou e o que fazer agora.
import { carregarTodos, nomeDisciplina, DISCIPLINAS } from '../curso/curriculo.js';
import { carregarFichas, progressoDoNivel, progressoDoModulo, proximaAula, pontosFracos, porDisciplina, estadoDaFicha, ESTADOS } from '../curso/progresso.js';
import { Pratica, Config, Avaliacoes } from '../db.js';
import { hojeISO, minutosTexto } from '../pratica.js';
import { sequenciaAtual, melhorSequencia, totalSegundos, semana } from '../habitos.js';

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
function cartaoNumero(valor, rotulo) {
  const c = el('div', 'num-cartao');
  c.append(el('span', 'num-valor', valor), el('span', 'num-rot', rotulo));
  return c;
}

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela painel-tela');
  raiz.append(tela);

  async function desenhar() {
    tela.innerHTML = '';
    tela.append(el('p', 'dica', 'Montando o seu painel…'));
    const [niveis, fichas, pratica, meta, avaliacoes] = await Promise.all([
      carregarTodos(), carregarFichas(), Pratica.todos(), Config.obter('habitos.meta', 15), Avaliacoes.lista()
    ]);
    if (encerrada) return;

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Meu progresso'));
    tela.append(topo);

    // ---------- onde estou ----------
    const prox = proximaAula(niveis, fichas);
    const agora = el('section', 'painel-agora');
    if (prox) {
      agora.append(el('p', 'painel-rot', 'Continuar de onde parei'));
      agora.append(el('h2', 'painel-aula', prox.aula.titulo));
      agora.append(el('p', 'painel-trilha', 'Nível ' + prox.nivel.n + ' · ' + prox.nivel.titulo + ' · Módulo ' + prox.modulo.id + ' — ' + prox.modulo.titulo));
      agora.append(el('p', 'legenda', prox.aula.resumo || ''));
      const b = el('button', 'botao-principal', prox.estado === 'nova' ? 'Começar esta aula' : 'Retomar esta aula');
      b.onclick = () => ir('aula/' + prox.aula.id);
      agora.append(b);
    } else {
      agora.append(el('h2', 'painel-aula', 'Você dominou todas as aulas já publicadas!'));
      agora.append(el('p', 'legenda', 'Reveja o que quiser ou acompanhe a auditoria curricular para ver o que está sendo preparado.'));
    }
    tela.append(agora);

    // ---------- números ----------
    const geral = niveis.reduce((a, n) => {
      const p = progressoDoNivel(n, fichas);
      return { dom: a.dom + p.dominadas, est: a.est + p.estudadas, tot: a.tot + p.total };
    }, { dom: 0, est: 0, tot: 0 });
    const hoje = hojeISO();
    const nums = el('div', 'num-grade');
    nums.append(cartaoNumero(geral.tot ? Math.round((geral.dom / geral.tot) * 100) + '%' : '0%', 'do curso publicado'));
    nums.append(cartaoNumero(String(geral.dom), 'aulas dominadas'));
    nums.append(cartaoNumero(String(sequenciaAtual(pratica, meta, hoje)), 'dias seguidos'));
    nums.append(cartaoNumero(minutosTexto(totalSegundos(pratica)), 'de estudo no total'));
    nums.append(cartaoNumero(minutosTexto(semana(pratica, hoje)), 'nos últimos 7 dias'));
    nums.append(cartaoNumero(minutosTexto(pratica[hoje] || 0), 'hoje'));
    tela.append(nums);

    // ---------- progresso por nível ----------
    const sec1 = el('section', 'painel-sec');
    sec1.append(el('h2', 'rotulo-grupo', 'Progresso por nível'));
    niveis.forEach((n) => {
      const p = progressoDoNivel(n, fichas);
      const linha = el('div', 'prog-linha');
      const cab = el('div', 'prog-cab');
      cab.append(el('span', 'prog-nome', 'Nível ' + n.n + ' — ' + n.titulo));
      cab.append(el('span', 'prog-val', n.pronto ? p.dominadas + '/' + p.total : 'em preparação'));
      linha.append(cab, barra(p.pct));
      linha.onclick = () => ir('curso/' + n.n);
      linha.style.cursor = 'pointer';
      sec1.append(linha);
    });
    tela.append(sec1);

    // ---------- disciplinas ----------
    const mapa = porDisciplina(niveis, fichas);
    const sec2 = el('section', 'painel-sec');
    sec2.append(el('h2', 'rotulo-grupo', 'Disciplinas'));
    const listaD = el('div', 'disc-lista');
    DISCIPLINAS.forEach((d) => {
      const m = mapa[d.id];
      if (!m || !m.total) return;
      const pct = Math.round((m.dominadas / m.total) * 100);
      const linha = el('div', 'prog-linha');
      const cab = el('div', 'prog-cab');
      cab.append(el('span', 'prog-nome', d.nome));
      cab.append(el('span', 'prog-val', m.dominadas + '/' + m.total));
      linha.append(cab, barra(pct));
      listaD.append(linha);
    });
    if (!listaD.children.length) listaD.append(el('p', 'legenda', 'As disciplinas aparecem aqui conforme você avança nas aulas.'));
    sec2.append(listaD);
    tela.append(sec2);

    // ---------- recomendações ----------
    const fracos = pontosFracos(niveis, fichas, 4);
    const sec3 = el('section', 'painel-sec');
    sec3.append(el('h2', 'rotulo-grupo', 'Recomendações'));
    if (fracos.length) {
      sec3.append(el('p', 'legenda', 'Estes assuntos ficaram abaixo da nota mínima no questionário. Vale revisar antes de avançar.'));
      fracos.forEach((f) => {
        const b = el('button', 'rec-item');
        b.append(el('span', 'rec-tit', f.aula.titulo));
        b.append(el('span', 'rec-mot', 'Nível ' + f.nivel.n + ' · ' + Math.round(f.nota * 100) + '% no questionário'));
        b.onclick = () => ir('aula/' + f.aula.id);
        sec3.append(b);
      });
    } else if (prox) {
      sec3.append(el('p', 'legenda', 'Nenhum ponto fraco detectado. Siga para a próxima aula do seu nível.'));
      const b = el('button', 'rec-item');
      b.append(el('span', 'rec-tit', prox.aula.titulo));
      b.append(el('span', 'rec-mot', 'próxima aula recomendada'));
      b.onclick = () => ir('aula/' + prox.aula.id);
      sec3.append(b);
    }
    tela.append(sec3);

    // ---------- histórico de avaliações ----------
    const sec4 = el('section', 'painel-sec');
    sec4.append(el('h2', 'rotulo-grupo', 'Histórico de avaliações'));
    if (!avaliacoes.length) {
      sec4.append(el('p', 'legenda', 'Ainda não há avaliações registradas. Elas aparecem aqui quando você faz um questionário ou confirma uma avaliação prática.'));
    } else {
      const tb = el('table', 'tabela-int');
      const tr = el('tr');
      ['Quando', 'O quê', 'Resultado'].forEach((c) => tr.append(el('th', '', c)));
      tb.append(tr);
      avaliacoes.slice(0, 15).forEach((a) => {
        const l = el('tr');
        const d = new Date(a.em);
        l.append(el('td', '', d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })));
        l.append(el('td', '', a.titulo || a.alvo));
        l.append(el('td', '', a.tipo === 'pratica' ? (a.acertos ? 'confirmada' : 'pendente') : a.acertos + '/' + a.total));
        tb.append(l);
      });
      const env = el('div', 'tabela-env'); env.append(tb);
      sec4.append(env);
    }
    tela.append(sec4);

    const acoes = el('div', 'linha-botoes');
    const b1 = el('button', 'botao-sec', 'Grade curricular'); b1.onclick = () => ir('curso');
    const b2 = el('button', 'botao-sec', 'Hábitos e calendário'); b2.onclick = () => ir('habitos');
    const b3 = el('button', 'botao-sec', 'Auditoria curricular'); b3.onclick = () => ir('auditoria');
    acoes.append(b1, b2, b3);
    tela.append(acoes);
    window.scrollTo(0, 0);
  }

  desenhar();
  return () => { encerrada = true; };
}
