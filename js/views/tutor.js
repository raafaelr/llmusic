// Tutor pedagógico — baseado em regras, funciona offline.
// Rota #/tutor.
//
// Honestidade sobre o que isto é: não há modelo de linguagem embarcado nem
// chamada a servidor. É um sistema de diagnóstico, glossário, gerador de
// exercícios e recomendador, construído sobre o currículo e o seu progresso
// real. Ele não escuta você tocar.
import { SINTOMAS, GLOSSARIO, COMPETENCIAS, competenciaPorId, montarPlano } from '../curso/tutor.js';
import { MAPA, carregarNivel, carregarTodos, todasAsAulas, acharAula } from '../curso/curriculo.js';
import { carregarFichas, proximaAula, pontosFracos, porDisciplina, estadoDaFicha } from '../curso/progresso.js';
import { DISCIPLINAS } from '../curso/curriculo.js';
import { TECNICAS } from '../curso/tecnicas.js';
import { Config } from '../db.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function fala(texto, classe) {
  const d = el('div', 'tutor-fala' + (classe ? ' ' + classe : ''));
  if (Array.isArray(texto)) texto.forEach((t) => d.append(el('p', 'texto-bloco', t)));
  else d.append(el('p', 'texto-bloco', texto));
  return d;
}

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela tutor-tela');
  raiz.append(tela);

  function cabecalho(titulo, aoVoltar) {
    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', aoVoltar ? 'Tutor' : 'Início');
    voltar.onclick = aoVoltar || (() => ir(''));
    topo.append(voltar, el('h1', 'titulo-tela', titulo));
    tela.append(topo);
  }

  // ------------------------------------------------------------------ menu
  function menu() {
    cabecalho('Tutor pedagógico');
    tela.append(fala([
      'Posso ajudar em quatro coisas: diagnosticar um problema que você está tendo, '
      + 'explicar um conceito, montar um exercício para uma competência específica e recomendar o que estudar agora.'
    ]));
    const aviso = el('div', 'aviso-bloco');
    aviso.append(el('strong', '', 'Como isto funciona: '));
    aviso.append(document.createTextNode('este tutor é baseado em regras e roda inteiramente no seu aparelho, sem internet '
      + 'e sem enviar nada para lugar nenhum. Não é um chat de inteligência artificial e não escuta você tocar. '
      + 'Onde o app confere notas pelo microfone (blocos de conferência das aulas e exercícios), isso está dito na própria tela; '
      + 'postura, som e musicalidade são sempre autoavaliados, com critérios à vista.'));
    tela.append(aviso);

    const opcoes = [
      ['Estou com um problema', 'Diagnóstico a partir do sintoma', diagnostico],
      ['O que eu estudo agora?', 'Recomendação com base no seu progresso', recomendar],
      ['Explique um conceito', 'Glossário e busca nas aulas', explicar],
      ['Monte um exercício para mim', 'Plano concreto com progressão e critério', exercitar],
      ['Como está o meu aprendizado?', 'Pontos fortes e fracos por disciplina', panorama]
    ];
    opcoes.forEach(([t, sub, fn]) => {
      const c = el('button', 'cartao');
      c.append(el('h3', 'cartao-nome', t));
      c.append(el('p', 'cartao-desc', sub));
      c.onclick = fn;
      tela.append(c);
    });
    window.scrollTo(0, 0);
  }

  // ------------------------------------------------------------ diagnóstico
  function diagnostico() {
    cabecalho('Estou com um problema', menu);
    tela.append(fala('Em que área está o problema?'));
    const g = el('div', 'tutor-opcoes');
    SINTOMAS.forEach((s) => {
      const b = el('button', 'botao-sec', s.nome);
      b.onclick = () => sintoma(s);
      g.append(b);
    });
    tela.append(g);
    window.scrollTo(0, 0);
  }

  function sintoma(s) {
    cabecalho(s.nome, diagnostico);
    tela.append(fala('O que descreve melhor o que acontece?'));
    const g = el('div', 'tutor-opcoes');
    s.opcoes.forEach((o) => {
      const b = el('button', 'botao-sec', o.nome);
      b.onclick = () => resposta(s, o);
      g.append(b);
    });
    tela.append(g);
    window.scrollTo(0, 0);
  }

  async function resposta(s, o) {
    cabecalho(o.nome, () => sintoma(s));
    tela.append(fala(o.nome, 'eu'));

    const causa = el('div', 'def-bloco');
    causa.append(el('span', 'def-termo', 'Causa provável'));
    causa.append(el('p', 'def-texto', o.causa));
    tela.append(causa);

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'O que fazer agora'));
    const ol = el('ol', 'passos-bloco');
    o.fazer.forEach((p) => ol.append(el('li', '', p)));
    tela.append(ol);

    if ((o.aulas || []).length) {
      tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Aulas que tratam disso'));
      for (const id of o.aulas) {
        const a = await acharAula(id);
        if (encerrada) return;
        const b = el('button', 'botao-sec', a ? a.titulo : id);
        b.onclick = () => ir('aula/' + id);
        tela.append(b);
      }
    }
    if ((o.tecnicas || []).length) {
      tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Técnicas relacionadas'));
      o.tecnicas.forEach((tid) => {
        const t = TECNICAS.find((x) => x.id === tid);
        const b = el('button', 'botao-sec', t ? t.nome : tid);
        b.onclick = () => ir('tecnicas/' + tid);
        tela.append(b);
      });
    }

    const fim = el('div', 'bloco-botoes');
    const outro = el('button', 'botao-principal', 'Tenho outro problema');
    outro.onclick = diagnostico;
    const vmenu = el('button', 'botao-sec', 'Voltar ao tutor');
    vmenu.onclick = menu;
    fim.append(outro, vmenu);
    tela.append(fim);
    window.scrollTo(0, 0);
  }

  // ------------------------------------------------------------- recomendar
  async function recomendar() {
    cabecalho('O que eu estudo agora?', menu);
    const fichas = await carregarFichas();
    const niveis = [];
    for (const m of MAPA) niveis.push(await carregarNivel(m.n));
    if (encerrada) return;

    const prox = proximaAula(niveis, fichas);
    const fracos = pontosFracos(niveis, fichas, 3);

    if (fracos.length) {
      tela.append(fala('Antes de avançar, vale revisar o que ficou abaixo da nota mínima. '
        + 'Conteúdo mal consolidado trava o que vem depois.'));
      fracos.forEach((f) => {
        const c = el('button', 'cartao');
        c.append(el('h3', 'cartao-nome', 'Revisar: ' + f.aula.titulo));
        c.append(el('p', 'cartao-desc', 'Nível ' + f.nivel.n + ' · ' + f.motivo
          + ' (sua melhor nota: ' + Math.round(f.nota * 100) + '%)'));
        c.onclick = () => ir('aula/' + f.aula.id);
        tela.append(c);
      });
    }

    if (prox) {
      tela.append(fala(fracos.length ? 'Depois disso, a próxima aula liberada é esta:' : 'A próxima aula liberada para você é esta:'));
      const c = el('button', 'cartao');
      c.append(el('h3', 'cartao-nome', prox.aula.titulo));
      c.append(el('p', 'cartao-desc', 'Nível ' + prox.nivel.n + ' · Módulo ' + prox.modulo.id
        + ' · ' + prox.aula.minutos + ' min · ' + (prox.estado === 'nova' ? 'ainda não iniciada' : prox.estado)));
      c.append(el('p', 'cartao-desc', prox.aula.objetivo));
      c.onclick = () => ir('aula/' + prox.aula.id);
      tela.append(c);
    } else {
      tela.append(fala('Você já dominou todas as aulas liberadas. Hora de consolidar: '
        + 'escolha uma obra no Repertório, prepare uma apresentação ou volte ao Nível 8, '
        + 'que é a área de aperfeiçoamento contínuo.'));
    }

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Na sessão de hoje'));
    tela.append(fala('Se você tiver uma hora, siga a rotina completa do Plano de Estudos. '
      + 'Se tiver menos, use a rotina de 30 ou de 20 minutos — regularidade rende mais que sessões longas.'));
    const bts = el('div', 'bloco-botoes');
    const b1 = el('button', 'botao-principal', 'Abrir Meu Plano de Estudos');
    b1.onclick = () => ir('plano');
    const b2 = el('button', 'botao-sec', 'Central de Exercícios');
    b2.onclick = () => ir('exercicios');
    bts.append(b1, b2);
    tela.append(bts);
    window.scrollTo(0, 0);
  }

  // ---------------------------------------------------------------- explicar
  async function explicar() {
    cabecalho('Explique um conceito', menu);
    tela.append(fala('Digite um termo. Procuro no glossário, nos títulos e objetivos das aulas e na Biblioteca de Técnicas.'));

    const inp = document.createElement('input');
    inp.type = 'search'; inp.className = 'campo-busca'; inp.placeholder = 'pestana, cadência, tremolo, modo dórico…';
    tela.append(inp);
    const area = el('div', 'grupo');
    tela.append(area);

    const aulas = todasAsAulas(await carregarTodos());
    if (encerrada) return;

    function buscar() {
      const t = inp.value.trim().toLowerCase();
      area.innerHTML = '';
      if (t.length < 2) {
        area.append(el('h2', 'rotulo-grupo', 'Termos do glossário'));
        const c = el('div', 'chips');
        GLOSSARIO.forEach((g) => {
          const b = el('button', 'chip', g.termo);
          b.onclick = () => { inp.value = g.termo; buscar(); };
          c.append(b);
        });
        area.append(c);
        return;
      }

      const gl = GLOSSARIO.filter((g) => (g.termo + ' ' + g.texto).toLowerCase().includes(t));
      const au = aulas.filter((a) => (a.titulo + ' ' + (a.objetivo || '') + ' ' + (a.cobre || []).join(' ')).toLowerCase().includes(t)).slice(0, 8);
      const te = TECNICAS.filter((x) => (x.nome + ' ' + x.desc).toLowerCase().includes(t)).slice(0, 5);

      if (!gl.length && !au.length && !te.length) {
        area.append(el('p', 'texto-bloco', 'Não encontrei esse termo. Tente uma palavra mais curta, '
          + 'ou procure na grade curricular — o curso tem 167 aulas e o termo pode estar dentro de uma delas.'));
        const b = el('button', 'botao-sec', 'Abrir a grade curricular');
        b.onclick = () => ir('curso');
        area.append(b);
        return;
      }

      if (gl.length) {
        area.append(el('h2', 'rotulo-grupo', 'Glossário'));
        gl.forEach((g) => {
          const d = el('div', 'def-bloco');
          d.append(el('span', 'def-termo', g.termo));
          d.append(el('p', 'def-texto', g.texto));
          if (g.aula) {
            const b = el('button', 'link-aula', 'Aula que desenvolve isso');
            b.onclick = () => ir('aula/' + g.aula);
            d.append(b);
          }
          area.append(d);
        });
      }
      if (au.length) {
        area.append(el('h2', 'rotulo-grupo', 'Aulas sobre o assunto'));
        au.forEach((a) => {
          const c = el('button', 'cartao');
          c.append(el('h3', 'cartao-nome', a.titulo));
          c.append(el('p', 'cartao-desc', a.objetivo || a.resumo || ''));
          c.onclick = () => ir('aula/' + a.id);
          area.append(c);
        });
      }
      if (te.length) {
        area.append(el('h2', 'rotulo-grupo', 'Técnicas'));
        te.forEach((x) => {
          const c = el('button', 'cartao');
          c.append(el('h3', 'cartao-nome', x.nome));
          c.append(el('p', 'cartao-desc', x.desc));
          c.onclick = () => ir('tecnicas/' + x.id);
          area.append(c);
        });
      }
    }
    inp.oninput = buscar;
    buscar();
    inp.focus();
    window.scrollTo(0, 0);
  }

  // -------------------------------------------------------------- exercitar
  function exercitar() {
    cabecalho('Monte um exercício para mim', menu);
    tela.append(fala('Qual competência você quer desenvolver? Monto um plano com isolamento, '
      + 'progressão de andamento, critério de domínio e transferência para a peça — a mesma estrutura ensinada na aula 7.2.3.'));
    const g = el('div', 'tutor-opcoes');
    COMPETENCIAS.forEach((c) => {
      const b = el('button', 'botao-sec', c.nome);
      b.onclick = () => perguntarBpm(c);
      g.append(b);
    });
    tela.append(g);
    window.scrollTo(0, 0);
  }

  async function perguntarBpm(comp) {
    cabecalho(comp.nome, exercitar);
    tela.append(fala('Em que andamento você consegue executar isso hoje, com qualidade? '
      + 'Se não souber, deixe o valor sugerido.'));
    const linha = el('div', 'campo-bpm');
    const inp = document.createElement('input');
    inp.type = 'number'; inp.className = 'campo-num'; inp.min = '30'; inp.max = '200';
    inp.value = String(await Config.obter('tutor.bpm.' + comp.id, comp.bpmBase));
    linha.append(inp, el('span', '', 'BPM (' + comp.notasPorClique + ' nota(s) por clique)'));
    tela.append(linha);
    const b = el('button', 'botao-principal', 'Montar o plano');
    b.onclick = async () => {
      await Config.guardar('tutor.bpm.' + comp.id, Number(inp.value) || comp.bpmBase);
      plano(comp, Number(inp.value) || comp.bpmBase);
    };
    tela.append(b);
    window.scrollTo(0, 0);
  }

  async function plano(comp, bpm) {
    const p = montarPlano(comp, bpm);
    cabecalho('Plano: ' + comp.nome, exercitar);

    const d = el('div', 'def-bloco');
    d.append(el('span', 'def-termo', 'Objetivo'));
    d.append(el('p', 'def-texto', p.objetivo));
    tela.append(d);

    const iso = el('div', 'dica-bloco');
    iso.append(el('strong', '', 'Isolamento: '));
    iso.append(document.createTextNode(p.isolamento));
    tela.append(iso);

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Progressão'));
    const ol = el('ol', 'passos-bloco');
    p.etapas.forEach((e) => ol.append(el('li', '', e)));
    tela.append(ol);

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Escada de andamento'));
    tela.append(el('p', 'texto-bloco', 'De ' + p.inicio + ' a ' + p.meta + ' BPM, '
      + p.notasPorClique + ' nota(s) por clique, subindo de 4 em 4. '
      + 'Condição para subir um degrau: um minuto inteiro sem falha. Estimativa: ' + p.estimativa + '.'));
    const chips = el('div', 'chips');
    p.degraus.forEach((bpmD) => {
      const b = el('button', 'chip', bpmD + ' BPM');
      b.onclick = () => ir('metronomo');
      b.title = 'Abrir o metrônomo';
      chips.append(b);
    });
    tela.append(chips);

    const crit = el('p', 'auto-criterio', 'Critério de domínio: ' + p.criterio);
    tela.append(crit);
    const tr = el('p', 'aula-prereq', 'Transferência: ' + p.transferencia);
    tela.append(tr);

    if ((p.aulas || []).length) {
      tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Aulas de referência'));
      for (const id of p.aulas) {
        const a = await acharAula(id);
        if (encerrada) return;
        const b = el('button', 'botao-sec', a ? a.titulo : id);
        b.onclick = () => ir('aula/' + id);
        tela.append(b);
      }
    }

    const bts = el('div', 'bloco-botoes');
    const b1 = el('button', 'botao-principal', 'Abrir o metrônomo');
    b1.onclick = () => ir('metronomo');
    const b2 = el('button', 'botao-sec', 'Outra competência');
    b2.onclick = exercitar;
    bts.append(b1, b2);
    tela.append(bts);
    window.scrollTo(0, 0);
  }

  // --------------------------------------------------------------- panorama
  async function panorama() {
    cabecalho('Como está o meu aprendizado?', menu);
    const fichas = await carregarFichas();
    const niveis = [];
    for (const m of MAPA) niveis.push(await carregarNivel(m.n));
    if (encerrada) return;

    const disc = porDisciplina(niveis, fichas);
    const linhas = DISCIPLINAS.map((d) => ({ d, p: disc[d.id] || { total: 0, dominadas: 0, estudadas: 0 } }))
      .filter((x) => x.p.total);

    const todas = Object.values(fichas);
    const dominadas = todas.filter((f) => f.dominada).length;
    tela.append(fala('Você tem ' + dominadas + ' aula(s) dominada(s) e ' + todas.length + ' aula(s) abertas até agora.'));

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Por disciplina'));
    linhas.sort((a, b) => (a.p.dominadas / a.p.total) - (b.p.dominadas / b.p.total)).forEach(({ d, p }) => {
      const pct = Math.round((p.dominadas / p.total) * 100);
      const caixa = el('div', 'plano-bloco');
      caixa.append(el('div', 'min', pct + '%'));
      const corpo = el('div', 'corpo');
      corpo.append(el('strong', '', d.nome));
      const barra = el('div', 'plano-barra');
      const s = el('span'); s.style.width = pct + '%';
      barra.append(s);
      corpo.append(barra);
      corpo.append(el('span', 'cartao-desc', p.dominadas + ' de ' + p.total + ' aulas dominadas'));
      caixa.append(corpo);
      tela.append(caixa);
    });

    const fracas = linhas.slice(0, 2).filter((x) => x.p.dominadas / x.p.total < 0.5);
    if (fracas.length) {
      tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Onde investir agora'));
      tela.append(fala('As disciplinas mais atrasadas são ' + fracas.map((x) => x.d.nome).join(' e ')
        + '. Dedique um bloco da sua rotina a elas nesta semana — disciplinas atrasadas travam o que vem depois.'));
    }

    const bts = el('div', 'bloco-botoes');
    const b1 = el('button', 'botao-principal', 'Ver meu progresso completo');
    b1.onclick = () => ir('painel');
    const b2 = el('button', 'botao-sec', 'Central de Avaliações');
    b2.onclick = () => ir('avaliacoes');
    bts.append(b1, b2);
    tela.append(bts);
    window.scrollTo(0, 0);
  }

  menu();
  return () => { encerrada = true; };
}
