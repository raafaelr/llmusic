// Tela de uma aula do curso.
// Mostra o conteúdo (os blocos), o questionário teórico e a avaliação prática,
// e vai guardando o progresso do aluno a cada etapa.
//
// A rota é #/aula/<id>, por exemplo #/aula/n1.1.1.
import { acharAula, carregarNivel, nomeDisciplina } from '../curso/curriculo.js';
import { criarRenderizador } from '../curso/blocos.js';
import { Progresso } from '../db.js';
import { registrarVisita, marcarEstudada, registrarQuiz, registrarAutoavaliacao, estadoDaFicha, estrelasDaFicha, pedeViolao, carregarFichas, liberada, prereqFaltando, ESTADOS, NOTA_MINIMA } from '../curso/progresso.js';
import { rodarQuiz } from '../quizui.js';
import { icone, botaoIcone } from '../icones.js';
import { criarLeitor } from '../leitor.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

export function montar(raiz, ir, arg) {
  let encerrada = false;
  let pararLeitor = null;   // devolvido por criarLeitor; silencia a voz ao sair
  const tela = el('main', 'tela aula-tela');
  raiz.append(tela);
  let render = null;
  let dados = null;

  // Ouvintes presos ao <window>, que a tela precisa soltar ao sair. Como a
  // aula se redesenha (ao voltar do questionário, por exemplo), a lista é
  // esvaziada a cada desenho, senão sobra um ouvinte por visita.
  let limpezas = [];

  function limpar() {
    if (render) { render.fechar(); render = null; }
    limpezas.forEach((f) => f());
    limpezas = [];
  }

  async function carregar() {
    limpar();
    tela.innerHTML = '';
    tela.append(el('p', 'dica', 'Carregando a aula…'));
    dados = await acharAula(arg);
    if (encerrada) return;
    if (!dados) {
      tela.innerHTML = '';
      const topo = el('header', 'topo');
      const v = botaoIcone('botao-texto', 'voltar', 'Curso'); v.onclick = () => ir('curso');
      topo.append(v, el('h1', 'titulo-tela', 'Aula não encontrada'));
      tela.append(topo, el('p', 'texto-bloco', 'Esta aula ainda não existe. Volte à grade curricular e escolha outra.'));
      return;
    }
    const fichas = await carregarFichas();
    if (encerrada) return;
    await registrarVisita(dados.aula.id);
    desenhar(fichas);
  }

  function desenhar(fichas) {
    limpar();
    const { aula, modulo, nivel } = dados;
    render = criarRenderizador({
      aulaId: aula.id, ir,
      ativo: () => !encerrada,
      aoExercicio: () => {}
    });

    tela.innerHTML = '';
    tela.className = 'tela aula-tela';

    // Trilho de leitura: o quanto da aula já passou. É a única informação que
    // interessa de relance enquanto se lê, e fica grudado no alto da tela.
    const trilho = el('div', 'aula-trilho');
    trilho.setAttribute('aria-hidden', 'true');
    const trilhoCheio = document.createElement('i');
    trilho.append(trilhoCheio);
    tela.append(trilho);

    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Módulo ' + modulo.id);
    voltar.onclick = () => ir('curso/' + nivel.n);
    topo.append(voltar, el('h1', 'titulo-tela', aula.titulo));
    tela.append(topo);

    // ---- cabeçalho da aula ----
    const cab = el('div', 'aula-cab');
    const trilha = el('p', 'aula-trilha', 'Nível ' + nivel.n + ' · ' + nivel.titulo + ' · Módulo ' + modulo.id + ' — ' + modulo.titulo);
    const selos = el('div', 'aula-selos');
    selos.append(el('span', 'selo-aula', '⏱ ' + aula.minutos + ' min'));
    (aula.disciplinas || []).forEach((d) => selos.append(el('span', 'selo-aula disc', nomeDisciplina(d))));
    const ficha = fichas[aula.id];
    const est = estadoDaFicha(ficha);
    selos.append(el('span', 'selo-aula estado-' + est, ESTADOS[est].sinal + ' ' + ESTADOS[est].nome));
    cab.append(trilha, selos);
    if (aula.objetivo) {
      const ob = el('div', 'aula-objetivo');
      ob.append(el('strong', '', 'Objetivo desta aula: '), document.createTextNode(aula.objetivo));
      cab.append(ob);
    }

    // pré-requisitos
    const faltam = prereqFaltando(aula, fichas);
    if (faltam.length) {
      const av = el('div', 'aula-prereq');
      av.append(el('strong', '', 'Pré-requisitos: '));
      av.append(document.createTextNode('esta aula fica mais fácil depois de '));
      faltam.forEach((id, i) => {
        const b = el('button', 'link-aula', id);
        b.onclick = () => ir('aula/' + id);
        if (i) av.append(document.createTextNode(', '));
        av.append(b);
      });
      av.append(document.createTextNode('. Você pode continuar mesmo assim.'));
      cab.append(av);
    }
    tela.append(cab);

    // ---- os blocos ----
    const corpo = el('div', 'aula-corpo');

    // Lugar reservado para o leitor em voz alta, logo abaixo do cabeçalho:
    // no fim da aula o botão obrigaria a rolar o texto inteiro para começar
    // a ouvi-lo. Ele só é montado depois dos blocos, porque o texto lido sai
    // do que está desenhado.
    const ondeLeitor = el('div');
    tela.append(ondeLeitor);
    (aula.blocos || []).forEach((b) => {
      try { corpo.append(render.bloco(b)); }
      catch (e) { corpo.append(el('p', 'dica', 'Não consegui mostrar um trecho desta aula.')); }
    });
    tela.append(corpo);

    // Só nas aulas de ler: nas que pedem o violão o conteúdo é diagrama, e
    // ouvir sozinho não ensina.
    if (!pedeViolao(aula)) {
      try { pararLeitor = criarLeitor(ondeLeitor, corpo); } catch { /* sem voz no aparelho */ }
    }

    // ---- fecho: questionário e avaliação prática ----
    const fecho = el('section', 'aula-fecho');
    fecho.append(el('h2', 'rotulo-grupo titulo-bloco', 'Para concluir esta aula'));
    const passos = el('div', 'fecho-passos');

    // 1. li a aula
    const p1 = el('div', 'fecho-passo' + (ficha && ficha.estudada ? ' feito' : ''));
    p1.append(el('span', 'fecho-num', '1'));
    const c1 = el('div');
    c1.append(el('h3', 'subtitulo-bloco', 'Li a aula inteira'));
    c1.append(el('p', 'legenda', 'Marque quando tiver lido e experimentado tudo com o violão na mão.'));
    const b1 = el('button', 'botao-sec', ficha && ficha.estudada ? '✓ Marcada como estudada' : 'Marcar como estudada');
    b1.onclick = async () => {
      await marcarEstudada(aula.id);
      b1.textContent = '✓ Marcada como estudada';
      p1.classList.add('feito');
      atualizarSelo();
    };
    c1.append(b1); p1.append(c1);

    // 3. questionário (fica por último: primeiro o violão na mão, depois a teoria)
    const notaQuiz = ficha && ficha.quiz && ficha.quiz.total ? ficha.quiz.acertos / ficha.quiz.total : null;
    const quizOk = notaQuiz !== null && notaQuiz >= NOTA_MINIMA;
    const p2 = el('div', 'fecho-passo' + (quizOk ? ' feito' : ''));
    p2.append(el('span', 'fecho-num', '3'));
    const c2 = el('div');
    c2.append(el('h3', 'subtitulo-bloco', 'Questionário teórico'));
    c2.append(el('p', 'legenda', (aula.quiz || []).length + ' perguntas. É preciso acertar ' + Math.round(NOTA_MINIMA * 100) + '% para considerar a aula dominada.'
      + (notaQuiz !== null ? ' Seu melhor resultado: ' + ficha.quiz.acertos + ' de ' + ficha.quiz.total + '.' : '')));
    const b2 = el('button', 'botao-principal', notaQuiz === null ? 'Fazer o questionário' : 'Refazer o questionário');
    b2.onclick = () => fazerQuiz();
    c2.append(b2); p2.append(c2);

    // 2. avaliação prática
    const autoOk = !!(ficha && ficha.autoavaliacao);
    const p3 = el('div', 'fecho-passo' + (autoOk ? ' feito' : ''));
    p3.append(el('span', 'fecho-num', '2'));
    const c3 = el('div');
    const pr = aula.pratica || { titulo: 'Avaliação prática', itens: [], criterio: '' };
    c3.append(el('h3', 'subtitulo-bloco', pr.titulo));
    c3.append(el('p', 'legenda', 'O app não consegue julgar sozinho a sua execução no instrumento. Quem avalia é você, com critérios claros. Seja honesto: o curso é seu.'));
    const lista = el('div', 'auto-lista');
    const caixas = [];
    (pr.itens || []).forEach((t, i) => {
      const rot = el('label', 'item-check');
      const cx = document.createElement('input');
      cx.type = 'checkbox';
      cx.checked = autoOk && !!(ficha.autoavaliacao.itens || [])[i];
      cx.onchange = () => conferir();
      caixas.push(cx);
      rot.append(cx, el('span', '', t));
      lista.append(rot);
    });
    c3.append(lista);
    if (pr.criterio) {
      const cr = el('p', 'auto-criterio');
      cr.append(el('strong', '', 'Critério de domínio: '), document.createTextNode(pr.criterio));
      c3.append(cr);
    }
    const b3 = el('button', 'botao-principal', autoOk ? '✓ Avaliação registrada' : 'Confirmar avaliação prática');
    const fb3 = el('p', 'feedback', '');
    function conferir() {
      const todos = caixas.length > 0 && caixas.every((c) => c.checked);
      b3.disabled = !todos;
      fb3.textContent = todos ? '' : 'Marque todos os itens que você já consegue fazer.';
      fb3.className = 'feedback';
    }
    b3.onclick = async () => {
      await registrarAutoavaliacao(aula.id, caixas.map((c) => c.checked), true);
      b3.textContent = '✓ Avaliação registrada';
      p3.classList.add('feito');
      fb3.textContent = quizOk ? 'Aula dominada! Pode seguir para a próxima.' : 'Falta o questionário com ' + Math.round(NOTA_MINIMA * 100) + '% de acerto para a aula ficar dominada.';
      fb3.className = 'feedback ' + (quizOk ? 'certo' : '');
      atualizarSelo();
    };
    conferir();
    c3.append(b3, fb3); p3.append(c3);

    passos.append(p1, p3, p2);

    fecho.append(passos);
    tela.append(fecho);

    // ---- navegação ----
    const acoes = el('div', 'acoes acoes-licao');
    const todas = (modulo.aulas || []);
    const i = todas.findIndex((x) => x.id === aula.id);
    const proximaAula = (i >= 0 && i < todas.length - 1) ? todas[i + 1] : null;
    if (i > 0) { const b = botaoIcone('botao-sec', 'voltar', 'Aula anterior'); b.onclick = () => ir('aula/' + todas[i - 1].id); acoes.append(b); }
    const bm = el('button', 'botao-sec', 'Ver o módulo'); bm.onclick = () => ir('curso/' + nivel.n); acoes.append(bm);
    if (proximaAula) { const b = el('button', 'botao-principal', 'Próxima aula'); b.append(icone('avancar')); b.onclick = () => ir('aula/' + proximaAula.id); acoes.append(b); }
    tela.append(acoes);

    // ---- o que falta, sempre à mão ----
    // Antes era preciso rolar a aula inteira para descobrir o que ainda
    // faltava para concluí-la. Esta barra gruda no rodapé enquanto se lê e
    // diz o passo que falta; o botão leva até ele. Quando não falta nada,
    // vira o caminho para a próxima aula.
    const rodape = el('div', 'aula-rodape');
    const oQueFalta = el('span', 'falta');
    const bIr = el('button', 'botao-principal', 'Ir');
    rodape.append(oQueFalta, bIr);
    tela.append(rodape);

    function atualizarRodape() {
      const f = fichas[aula.id] || {};
      const nota = f.quiz && f.quiz.total ? f.quiz.acertos / f.quiz.total : null;
      const falta = [];
      if (!f.estudada) falta.push('a leitura');
      if (!f.autoavaliacao) falta.push('a prática');
      if (nota === null || nota < NOTA_MINIMA) falta.push('o questionário');

      if (!falta.length) {
        rodape.classList.add('pronta');
        oQueFalta.textContent = 'Aula dominada.';
        bIr.textContent = proximaAula ? 'Próxima aula' : 'Ver o módulo';
        bIr.onclick = () => ir(proximaAula ? 'aula/' + proximaAula.id : 'curso/' + nivel.n);
        return;
      }
      rodape.classList.remove('pronta');
      oQueFalta.textContent = 'Falta ' + falta.join(', ').replace(/,([^,]*)$/, ' e$1') + '.';
      bIr.textContent = 'Concluir';
      bIr.onclick = () => fecho.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    atualizarRodape();

    function atualizarSelo() {
      Progresso.obter(aula.id).then((f) => {
        if (encerrada) return;
        const e = estadoDaFicha(f);
        const s = selos.querySelector('[class*="estado-"]');
        if (s) { s.className = 'selo-aula estado-' + e; s.textContent = ESTADOS[e].sinal + ' ' + ESTADOS[e].nome; }
        // A barra do rodapé lê a mesma ficha: atualiza junto, senão continua
        // pedindo um passo que você acabou de dar.
        fichas[aula.id] = f;
        atualizarRodape();
      });
    }

    // Quanto da página já passou. Em passive, e sem contas no listener além
    // de uma divisão: isto roda a cada quadro de rolagem.
    function aoRolar() {
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      const pct = alto > 0 ? Math.min(100, Math.max(0, (window.scrollY / alto) * 100)) : 0;
      trilhoCheio.style.width = pct.toFixed(1) + '%';
    }
    window.addEventListener('scroll', aoRolar, { passive: true });
    limpezas.push(() => window.removeEventListener('scroll', aoRolar));
    aoRolar();

    // No conteúdo das aulas a resposta certa é sempre a primeira opção, porque assim
    // fica fácil de escrever e de revisar. Aqui elas são embaralhadas, senão o aluno
    // acertaria tudo clicando sempre no primeiro botão.
    function embaralharPergunta(q) {
      const certa = q.opcoes[q.correta];
      const op = [...q.opcoes];
      for (let i = op.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [op[i], op[j]] = [op[j], op[i]];
      }
      return { texto: q.texto, opcoes: op, correta: op.indexOf(certa), explicacao: q.explicacao };
    }

    function fazerQuiz() {
      if (render) render.silenciar();
      const perguntas = (aula.quiz || []).map(embaralharPergunta);
      if (!perguntas.length) return;
      rodarQuiz({
        tela, titulo: 'Questionário: ' + aula.titulo, perguntas,
        textoVoltar: '‹ Aula',
        aoVoltar: () => carregar(),
        aoNovaTentativa: () => fazerQuiz(),
        ativo: () => !encerrada,
        proxima: proximaAula ? { aoAvancar: () => ir('aula/' + proximaAula.id) } : null,
        aoFim: async (acertos, total) => { await registrarQuiz(aula.id, aula.titulo, acertos, total); }
      });
      window.scrollTo(0, 0);
    }

    window.scrollTo(0, 0);
  }

  carregar();

  const aoEsconder = () => { if (document.hidden && render) render.silenciar(); };
  document.addEventListener('visibilitychange', aoEsconder);
  return () => {
    encerrada = true;
    document.removeEventListener('visibilitychange', aoEsconder);
    if (pararLeitor) pararLeitor();
    limpar();
  };
}
