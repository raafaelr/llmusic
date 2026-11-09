// Central de Avaliações: estado de domínio por nível, prova de nível
// (questões sorteadas das aulas já estudadas), avaliação prática de nível
// e histórico. Rota #/avaliacoes ou #/avaliacoes/<n>.
//
// Regra do curso: nada é "dominado" por clicar em concluir. A prova de nível
// exige 75% de acerto, e a avaliação prática pede a confirmação item a item
// de critérios observáveis — que o aluno declara, porque o app não finge
// ter escutado a execução.
import { MAPA, carregarNivel } from '../curso/curriculo.js';
import { carregarFichas, progressoDoNivel, progressoDoModulo, estadoDaFicha, NOTA_MINIMA } from '../curso/progresso.js';
import { Avaliacoes, Config } from '../db.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

const C_PROVAS = 'avaliacoes.provas';   // melhor resultado por nível
const C_PRATICA = 'avaliacoes.pratica'; // avaliação prática confirmada por nível

const QUESTOES_PROVA = 12;

// Graus da autoavaliação prática.
//
// Antes aqui havia uma caixa de "consigo / não consigo". Marcar uma caixa é
// fácil demais, e quem estuda sozinho acaba marcando o que quase consegue.
// Com graus, você é obrigado a dizer COMO tocou — e a pergunta já ensina o que
// observar: som limpo, ritmo mantido, andamento. O peso de cada grau entra na
// média, então tocar travando não aprova nível nenhum.
const GRAUS = [
  { id: 'nao', rotulo: 'Ainda não', peso: 0, ajuda: 'Não consigo executar este item hoje.' },
  { id: 'devagar', rotulo: 'Só devagar', peso: 0.35, ajuda: 'Saio do começo ao fim, mas bem devagar e com paradas.' },
  { id: 'ritmo', rotulo: 'No ritmo, com erros', peso: 0.7, ajuda: 'Mantenho a pulsação, erro algumas notas e sigo sem parar.' },
  { id: 'fluido', rotulo: 'Com fluidez', peso: 1, ajuda: 'Som limpo, ritmo firme, sem travar — e consigo repetir.' }
];
const pesoDoGrau = (id) => (GRAUS.find((g) => g.id === id) || { peso: 0 }).peso;

function embaralhar(lista) {
  const a = lista.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function montar(raiz, ir, arg) {
  let encerrada = false;
  const tela = el('main', 'tela aval-tela');
  raiz.append(tela);

  async function painel() {
    const fichas = await carregarFichas();
    const provas = await Config.obter(C_PROVAS, {});
    const praticas = await Config.obter(C_PRATICA, {});
    const historico = await Avaliacoes.lista();
    if (encerrada) return;

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Avaliações'));
    tela.append(topo);

    tela.append(el('p', 'dica', 'Aqui você verifica o que já domina de verdade. '
      + 'Cada nível tem uma prova teórica, sorteada entre as perguntas das aulas, e uma avaliação prática '
      + 'com critérios observáveis. A nota mínima é ' + Math.round(NOTA_MINIMA * 100) + '%.'));
    tela.append(el('p', 'legenda', 'O app não avalia a sua execução por áudio, exceto quando o microfone confere as notas '
      + 'nos exercícios de conferência. Postura, som e musicalidade são autoavaliados com critérios na frente — '
      + 'e é assim que está declarado, sem fingir o que não existe.'));

    for (const meta of MAPA) {
      const nivel = await carregarNivel(meta.n);
      if (encerrada) return;
      const p = progressoDoNivel(nivel, fichas);
      const prova = provas[meta.n];
      const pratica = praticas[meta.n];

      const c = el('section', 'cartao aval-nivel');
      const cab = el('div', 'tec-cab');
      cab.append(el('h2', 'cartao-nome', 'Nível ' + meta.n + ' — ' + nivel.titulo));
      const estado = (prova && prova.aprovado && pratica && pratica.aprovado) ? '✓ aprovado' : (p.pct + '%');
      cab.append(el('span', 'tec-ok', estado));
      c.append(cab);

      const barra = el('div', 'plano-barra');
      const s = el('span'); s.style.width = p.pct + '%';
      barra.append(s);
      c.append(barra);
      c.append(el('p', 'legenda', p.dominadas + ' de ' + p.total + ' aulas dominadas · '
        + p.estudadas + ' estudadas'));

      const linha = el('div', 'aula-selos');
      linha.append(el('span', 'selo-aula' + (prova && prova.aprovado ? '' : ' disc'),
        'Prova teórica: ' + (prova ? Math.round((prova.acertos / prova.total) * 100) + '%' : 'não feita')));
      linha.append(el('span', 'selo-aula' + (pratica && pratica.aprovado ? '' : ' disc'),
        'Avaliação prática: ' + (pratica && pratica.aprovado ? 'confirmada' : 'pendente')));
      c.append(linha);

      const bts = el('div', 'bloco-botoes');
      const b1 = el('button', 'botao-sec', 'Fazer a prova do nível ' + meta.n);
      b1.onclick = () => prepararProva(meta.n);
      const b2 = el('button', 'botao-sec', 'Avaliação prática');
      b2.onclick = () => avaliacaoPratica(meta.n);
      bts.append(b1, b2);
      c.append(bts);
      c.append(el('p', 'auto-criterio', nivel.criterio));
      tela.append(c);
    }

    // ---------------- histórico
    const h = el('section', 'grupo');
    h.append(el('h2', 'rotulo-grupo', 'Histórico'));
    if (!historico.length) {
      h.append(el('p', 'legenda', 'Nenhuma avaliação registrada ainda.'));
    } else {
      h.append(el('p', 'legenda', historico.length + ' registro(s). Mostrando os 20 mais recentes.'));
      historico.slice(0, 20).forEach((a) => {
        const caixa = el('div', 'plano-bloco');
        caixa.append(el('div', 'min', (a.em || '').slice(8, 10) + '/' + (a.em || '').slice(5, 7)));
        const corpo = el('div', 'corpo');
        const pct = a.total ? Math.round((a.acertos / a.total) * 100) : 0;
        corpo.append(el('strong', '', (a.titulo || a.alvo) + ' — ' + pct + '%'));
        corpo.append(el('span', 'cartao-desc', (a.tipo === 'questionario' ? 'Questionário de aula'
          : a.tipo === 'pratica' ? 'Avaliação prática' : a.tipo === 'prova-nivel' ? 'Prova de nível'
          : a.tipo) + ' · ' + (a.alvo || '')));
        caixa.append(corpo);
        h.append(caixa);
      });
    }
    tela.append(h);
    window.scrollTo(0, 0);
  }

  // ------------------------------------------------------------- prova de nível
  async function prepararProva(n) {
    const nivel = await carregarNivel(n);
    const fichas = await carregarFichas();
    if (encerrada) return;

    // Só entram perguntas de aulas que o aluno já estudou: a prova verifica
    // o que foi visto, não adivinhação.
    const banco = [];
    (nivel.modulos || []).forEach((m) => (m.aulas || []).forEach((a) => {
      const e = estadoDaFicha(fichas[a.id]);
      if (e === 'estudada' || e === 'dominada') {
        (a.quiz || []).forEach((q, i) => banco.push({ ...q, aula: a.id, aulaTitulo: a.titulo, chave: a.id + '.' + i }));
      }
    }));

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Avaliações');
    voltar.onclick = painel;
    topo.append(voltar, el('h1', 'titulo-tela', 'Prova do Nível ' + n));
    tela.append(topo);

    if (banco.length < 6) {
      tela.append(el('p', 'texto-bloco', 'Ainda não há perguntas suficientes para montar a prova deste nível. '
        + 'A prova só usa questões das aulas que você já estudou, e por enquanto são ' + banco.length + '. '
        + 'Estude mais algumas aulas do nível e volte aqui.'));
      const b = el('button', 'botao-principal', 'Ir para a grade curricular');
      b.onclick = () => ir('curso');
      tela.append(b);
      return;
    }

    tela.append(el('p', 'dica', 'A prova sorteia ' + Math.min(QUESTOES_PROVA, banco.length)
      + ' perguntas entre as ' + banco.length + ' das aulas que você já estudou neste nível. '
      + 'A nota mínima é ' + Math.round(NOTA_MINIMA * 100) + '%. Você pode refazer quantas vezes quiser; '
      + 'cada tentativa sorteia perguntas de novo.'));
    const b = el('button', 'botao-principal', 'Começar a prova');
    b.onclick = () => rodarProva(n, embaralhar(banco).slice(0, Math.min(QUESTOES_PROVA, banco.length)));
    tela.append(b);
    window.scrollTo(0, 0);
  }

  function rodarProva(n, perguntas) {
    let i = 0, acertos = 0;
    const erradas = [];

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const sair = botaoIcone('botao-texto', 'voltar', 'Sair da prova');
    sair.onclick = painel;
    topo.append(sair, el('h1', 'titulo-tela', 'Prova do Nível ' + n));
    tela.append(topo);

    const placar = el('p', 'dica', '');
    const enunciado = el('p', 'enunciado', '');
    const opcoes = el('div', 'exerc-opcoes');
    const feed = el('p', 'feedback', '');
    feed.setAttribute('aria-live', 'polite');
    tela.append(placar, enunciado, opcoes, feed);

    function proxima() {
      feed.textContent = ''; feed.className = 'feedback';
      opcoes.innerHTML = '';
      if (i >= perguntas.length) return fim();
      const q = perguntas[i];
      placar.textContent = 'Pergunta ' + (i + 1) + ' de ' + perguntas.length + ' · acertos: ' + acertos;
      enunciado.textContent = q.texto;
      const certa = q.opcoes[q.correta];
      embaralhar(q.opcoes).forEach((o) => {
        const bt = el('button', 'botao-sec opcao', o);
        bt.onclick = () => {
          [...opcoes.children].forEach((x) => { x.disabled = true; if (x.textContent === certa) x.classList.add('certa'); });
          const certo = o === certa;
          if (certo) acertos++; else { bt.classList.add('errada'); erradas.push(q); }
          feed.textContent = (certo ? '✓ Certo. ' : '✗ Era: ' + certa + '. ') + (q.explicacao || '');
          feed.className = 'feedback ' + (certo ? 'certo' : 'errado');
          i++;
          setTimeout(proxima, certo ? 900 : 2200);
        };
        opcoes.append(bt);
      });
    }

    async function fim() {
      const pct = acertos / perguntas.length;
      const aprovado = pct >= NOTA_MINIMA;
      placar.textContent = '';
      enunciado.textContent = 'Resultado: ' + acertos + ' de ' + perguntas.length + ' (' + Math.round(pct * 100) + '%)';
      feed.textContent = aprovado
        ? '✓ Aprovado na prova teórica do nível ' + n + '. Falta a avaliação prática para fechar o nível.'
        : '✗ Abaixo de ' + Math.round(NOTA_MINIMA * 100) + '%. Reveja as aulas das perguntas que você errou e tente de novo.';
      feed.className = 'feedback ' + (aprovado ? 'certo' : 'errado');

      await Avaliacoes.registrar({ tipo: 'prova-nivel', alvo: 'n' + n, titulo: 'Prova do Nível ' + n, acertos, total: perguntas.length });
      const provas = await Config.obter(C_PROVAS, {});
      const antes = provas[n];
      if (!antes || (acertos / perguntas.length) > (antes.acertos / antes.total)) {
        provas[n] = { acertos, total: perguntas.length, aprovado, em: new Date().toISOString() };
        await Config.guardar(C_PROVAS, provas);
      }
      if (encerrada) return;

      if (erradas.length) {
        tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Reveja estas aulas'));
        const vistas = new Set();
        erradas.forEach((q) => {
          if (vistas.has(q.aula)) return;
          vistas.add(q.aula);
          const b = el('button', 'botao-sec', q.aulaTitulo);
          b.onclick = () => ir('aula/' + q.aula);
          tela.append(b);
        });
      }
      const bts = el('div', 'bloco-botoes');
      const outra = el('button', 'botao-principal', 'Fazer de novo');
      outra.onclick = () => prepararProva(n);
      const volta = el('button', 'botao-sec', 'Voltar às avaliações');
      volta.onclick = painel;
      bts.append(outra, volta);
      tela.append(bts);
      window.scrollTo(0, document.body.scrollHeight);
    }

    proxima();
    window.scrollTo(0, 0);
  }

  // ------------------------------------------------------------- avaliação prática
  async function avaliacaoPratica(n) {
    const nivel = await carregarNivel(n);
    const praticas = await Config.obter(C_PRATICA, {});
    const fichas = await carregarFichas();
    if (encerrada) return;

    // A avaliação prática do nível reúne o critério de cada módulo e uma
    // amostra dos itens práticos das aulas dominadas ou estudadas.
    const itens = [];
    (nivel.modulos || []).forEach((m) => {
      const estudadas = (m.aulas || []).filter((a) => ['estudada', 'dominada'].includes(estadoDaFicha(fichas[a.id])));
      const fonte = estudadas.length ? estudadas : (m.aulas || []).slice(0, 3);
      fonte.slice(0, 4).forEach((a) => {
        if (a.pratica && a.pratica.itens && a.pratica.itens.length) {
          itens.push({ modulo: m.id, aula: a.id, titulo: a.titulo, texto: a.pratica.itens[0], criterio: a.pratica.criterio });
        }
      });
    });

    const salvo = praticas[n] || { marcados: {}, aprovado: false };

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Avaliações');
    voltar.onclick = painel;
    topo.append(voltar, el('h1', 'titulo-tela', 'Avaliação prática — Nível ' + n));
    tela.append(topo);

    tela.append(el('p', 'dica', 'Esta é uma autoavaliação orientada: o app não escuta você tocar. '
      + 'Toque cada item com o violão na mão e diga como saiu, segundo o critério descrito. '
      + 'Responder melhor do que a verdade só engana você mesmo — o nível fica marcado como concluído sem estar.'));
    tela.append(el('p', 'auto-criterio', 'Critério do nível: ' + nivel.criterio));

    if (!itens.length) {
      tela.append(el('p', 'texto-bloco', 'Estude pelo menos uma aula deste nível para montar a avaliação prática.'));
      return;
    }

    // Versões antigas guardavam "true" (marquei / não marquei). Agora cada
    // item tem grau, então um "true" antigo vira o grau mais alto.
    const marcados = {};
    Object.entries(salvo.marcados || {}).forEach(([id, v]) => {
      marcados[id] = (v === true ? 'fluido' : v);
    });

    const lista = el('div', 'grupo');
    itens.forEach((it) => {
      const caixa = el('div', 'plano-bloco auto-item');
      const corpo = el('div', 'corpo');
      corpo.append(el('strong', '', it.texto));
      corpo.append(el('span', 'cartao-desc', 'Módulo ' + it.modulo + ' · ' + it.titulo));
      if (it.criterio) corpo.append(el('span', 'cartao-desc', 'Critério: ' + it.criterio));

      const graus = el('div', 'chips auto-graus');
      graus.setAttribute('role', 'radiogroup');
      graus.setAttribute('aria-label', it.texto);
      GRAUS.forEach((g) => {
        const b = el('button', 'chip grau-' + g.id, g.rotulo);
        const marcar = () => {
          marcados[it.aula] = g.id;
          [...graus.children].forEach((c) => {
            const ativo = c === b;
            c.classList.toggle('ativo', ativo);
            c.setAttribute('aria-checked', String(ativo));
          });
          atualizar();
        };
        b.setAttribute('role', 'radio');
        b.setAttribute('aria-checked', String(marcados[it.aula] === g.id));
        if (marcados[it.aula] === g.id) b.classList.add('ativo');
        b.title = g.ajuda;
        b.onclick = marcar;
        graus.append(b);
      });
      corpo.append(graus);

      const abrir = el('button', 'link-aula', 'Abrir a aula');
      abrir.onclick = () => ir('aula/' + it.aula);
      corpo.append(abrir);
      caixa.append(corpo);
      lista.append(caixa);
    });
    tela.append(lista);

    const resumo = el('p', 'legenda', '');
    const salvar = el('button', 'botao-principal', 'Registrar a avaliação prática');
    const fb = el('p', 'feedback', '');

    // A nota é a média do quanto você consegue executar, não a contagem de
    // caixas marcadas: tocar devagar e travando vale menos que tocar fluido.
    function media() {
      const soma = itens.reduce((s, it) => s + pesoDoGrau(marcados[it.aula]), 0);
      return itens.length ? soma / itens.length : 0;
    }
    function atualizar() {
      const respondidos = itens.filter((it) => marcados[it.aula]).length;
      const m = media();
      resumo.textContent = respondidos + ' de ' + itens.length + ' itens avaliados · '
        + 'domínio médio ' + Math.round(m * 100) + '%. '
        + 'Mínimo para aprovação: ' + Math.round(NOTA_MINIMA * 100) + '%.';
    }
    atualizar();
    salvar.onclick = async () => {
      const m = media();
      const feitos = itens.filter((it) => marcados[it.aula] === 'fluido').length;
      const aprovado = m >= NOTA_MINIMA;
      const atual = await Config.obter(C_PRATICA, {});
      atual[n] = { marcados, aprovado, total: itens.length, feitos, media: m, em: new Date().toISOString() };
      await Config.guardar(C_PRATICA, atual);
      await Avaliacoes.registrar({ tipo: 'pratica-nivel', alvo: 'n' + n, titulo: 'Avaliação prática do Nível ' + n, acertos: feitos, total: itens.length });
      if (encerrada) return;
      fb.textContent = aprovado
        ? '✓ Avaliação prática do nível ' + n + ' registrada como aprovada.'
        : 'Registrado. Ainda abaixo do mínimo: continue trabalhando os itens que faltam.';
      fb.className = 'feedback ' + (aprovado ? 'certo' : '');
    };
    tela.append(resumo, salvar, fb);
    window.scrollTo(0, 0);
  }

  if (arg && /^\d$/.test(arg)) prepararProva(Number(arg)); else painel();
  return () => { encerrada = true; };
}
