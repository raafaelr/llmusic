// Tela inicial: o saguão do conservatório.
//
// Não é uma grade de atalhos: é um painel que responde a uma pergunta só —
// "o que eu estudo agora?". Primeiro vem a retomada do estudo, depois o
// panorama da semana, e só então os atalhos, agrupados por área.
//
// A tela desenha na hora com o que já tem e vai preenchendo conforme o banco
// e o currículo respondem, para não ficar em branco esperando.
import { Pratica, Config } from '../db.js';
import { hojeISO, minutosTexto } from '../pratica.js';
import { sequenciaAtual } from '../habitos.js';
import { MAPA, carregarTodos } from '../curso/curriculo.js';
import { carregarFichas, proximaAula, proximaPratica, pedeViolao, progressoDoNivel, estadoDaFicha } from '../curso/progresso.js';
import { rotinaPorId, SEMANA_PADRAO, DIAS } from '../curso/plano.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

// Atalhos, agrupados nas cinco áreas da plataforma.
const AREAS = [
  {
    nome: 'Aprendizado', desc: 'O curso, do zero ao aperfeiçoamento',
    itens: [
      ['curso', 'Grade curricular', '8 níveis, 167 aulas'],
      ['exercicios', 'Exercícios', '49 exercícios com critério'],
      ['avaliacoes', 'Avaliações', 'Provas e avaliação prática'],
      ['tutor', 'Tutor', 'Diagnóstico e recomendações']
    ]
  },
  {
    nome: 'Estúdio de prática', desc: 'As ferramentas para usar com o violão na mão',
    itens: [
      ['metronomo', 'Metrônomo', 'Compassos e subdivisões'],
      ['afinador', 'Afinador', 'Microfone e diapasão'],
      ['braco', 'Braço virtual', 'Notas no braço'],
      ['partituras', 'Partituras', 'Tocar lendo, com cursor'],
      ['leitura', 'Leitura', 'Primeira vista infinita'],
      ['ritmo', 'Ritmo', 'Leitura rítmica no tempo']
    ]
  },
  {
    nome: 'Biblioteca', desc: 'Repertório, técnicas e referência',
    itens: [
      ['repertorio', 'Repertório', '44 obras em domínio público'],
      ['tecnicas', 'Técnicas', '23 técnicas do violão'],
      ['materiais', 'Materiais', 'Tabelas, métodos e direitos'],
      ['teoria', 'Teoria', 'Lições curtas com quiz'],
      ['caged', 'CAGED', 'Ferramenta e aulas'],
      ['importar', 'Importar tablatura', 'PDF, Guitar Pro, texto']
    ]
  },
  {
    nome: 'Minha evolução', desc: 'Onde você está e o que já dominou',
    itens: [
      ['painel', 'Meu progresso', 'Níveis, disciplinas e pontos fracos'],
      ['habilidades', 'Minhas habilidades', '17 habilidades e o que revisar hoje'],
      ['plano', 'Plano de estudos', 'Rotina, metas e sessões'],
      ['habitos', 'Hábitos', 'Sequência de dias'],
      ['auditoria', 'Auditoria curricular', 'Cobertura do curso'],
      ['config', 'Configurações', 'Tema, letra e acessibilidade'],
      ['atualizar', 'Atualizar e backup', 'Versão do app e cópia do progresso']
    ]
  }
];

function saudacao() {
  const h = new Date().getHours();
  if (h < 5) return 'Boa madrugada de estudo';
  if (h < 12) return 'Bom dia';
  if (h < 18) return 'Boa tarde';
  return 'Boa noite';
}

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela inicio');

  // ---------------------------------------------------------------- cabeçalho
  const capa = el('header', 'saguao');
  const marca = el('div', 'saguao-marca');
  const logo = document.createElement('img');
  logo.src = 'icons/icon.svg'; logo.alt = ''; logo.width = 44; logo.height = 44;
  const nomes = el('div');
  nomes.append(el('p', 'saguao-nome', 'LLMusic'));
  nomes.append(el('p', 'saguao-sub', 'Academia de violão clássico · para a Liz e a Lívia'));
  marca.append(logo, nomes);
  capa.append(marca);
  capa.append(el('p', 'saguao-ola', saudacao() + '. Pronto para estudar?'));
  tela.append(capa);

  // ---------------------------------------------------------------- retomar
  const retomar = el('section', 'cartao cartao-destaque retomar');
  retomar.append(el('p', 'rotulo-grupo', 'Continuar de onde parei'));
  const retomarCorpo = el('div', 'retomar-corpo');
  retomarCorpo.append(el('p', 'texto-bloco', 'Procurando a sua próxima aula…'));
  retomar.append(retomarCorpo);
  tela.append(retomar);

  // ---------------------------------------------------------------- números
  const faixa = el('section', 'faixa-numeros');
  const numeros = {};
  [['hoje', 'Hoje'], ['sequencia', 'Sequência'], ['nivel', 'Nível'], ['dominadas', 'Aulas dominadas']]
    .forEach(([id, rotulo]) => {
      const c = el('div', 'numero');
      const v = el('span', 'numero-valor', '—');
      c.append(v, el('span', 'numero-rotulo', rotulo));
      numeros[id] = v;
      faixa.append(c);
    });
  tela.append(faixa);

  tela.append(Object.assign(document.createElement('hr'), { className: 'pauta-divisor' }));

  // ---------------------------------------------------------------- rotina
  const rotina = el('section', 'grupo');
  rotina.append(el('h2', 'rotulo-grupo', 'A rotina de hoje'));
  const rotinaCorpo = el('div');
  rotina.append(rotinaCorpo);
  tela.append(rotina);

  // ---------------------------------------------------------------- áreas
  AREAS.forEach((area) => {
    const sec = el('section', 'area');
    const cab = el('div', 'area-cab');
    cab.append(el('h2', 'area-nome', area.nome));
    cab.append(el('p', 'area-desc', area.desc));
    sec.append(cab);
    const grade = el('div', 'grade grade-atalhos');
    area.itens.forEach(([rota, nome, desc]) => {
      const c = el('button', 'cartao atalho');
      c.append(el('h3', 'cartao-nome', nome));
      c.append(el('p', 'cartao-desc', desc));
      c.onclick = () => ir(rota);
      grade.append(c);
    });
    sec.append(grade);
    tela.append(sec);
  });

  const rodape = el('footer', 'saguao-rodape');
  rodape.append(el('p', 'citacao', 'Trinta minutos hoje valem mais que três horas no domingo.'));
  tela.append(rodape);

  raiz.append(tela);

  // ------------------------------------------------------------ preenchendo
  (async () => {
    const pratica = await Pratica.todos();
    if (encerrada) return;
    const seg = pratica[hojeISO()] || 0;
    const meta = await Config.obter('habitos.meta', 15);
    if (encerrada) return;
    numeros.hoje.textContent = minutosTexto(seg).replace(' min', '′');
    const seq = sequenciaAtual(pratica, meta, hojeISO());
    numeros.sequencia.textContent = seq + (seq === 1 ? ' dia' : ' dias');

    // rotina do dia, vinda do Plano de Estudos
    const semana = await Config.obter('plano.semana', SEMANA_PADRAO);
    if (encerrada) return;
    const doDia = semana[new Date().getDay()] || SEMANA_PADRAO[new Date().getDay()];
    const r = rotinaPorId(doDia.rotina);
    rotinaCorpo.innerHTML = '';
    const cr = el('button', 'cartao');
    cr.append(el('h3', 'cartao-nome', DIAS[new Date().getDay()] + ' · ' + r.nome));
    cr.append(el('p', 'cartao-desc', doDia.foco));
    const barra = el('div', 'plano-barra');
    const pre = el('span');
    pre.style.width = Math.min(100, Math.round((seg / (r.minutos * 60)) * 100)) + '%';
    barra.append(pre);
    cr.append(barra);
    cr.append(el('p', 'cartao-desc', minutosTexto(seg) + ' de ' + r.minutos + ' min'));
    cr.onclick = () => ir('plano');
    rotinaCorpo.append(cr);
  })().catch(() => {});

  (async () => {
    const fichas = await carregarFichas();
    const niveis = await carregarTodos();
    if (encerrada) return;

    const dominadas = Object.values(fichas).filter((f) => f.dominada).length;
    numeros.dominadas.textContent = String(dominadas);

    // nível atual: o primeiro que ainda não está 100%
    let atual = niveis[0];
    for (const n of niveis) {
      const p = progressoDoNivel(n, fichas);
      if (p.pct < 100) { atual = n; break; }
    }
    numeros.nivel.textContent = 'N' + atual.n;

    const prox = proximaAula(niveis, fichas);
    retomarCorpo.innerHTML = '';
    if (!prox) {
      retomarCorpo.append(el('p', 'texto-bloco', 'Você dominou todas as aulas liberadas. '
        + 'Escolha uma obra no Repertório ou prepare uma apresentação.'));
      const b = el('button', 'botao-principal', 'Abrir o Repertório');
      b.onclick = () => ir('repertorio');
      retomarCorpo.append(b);
      return;
    }
    const estado = estadoDaFicha(fichas[prox.aula.id]);
    retomarCorpo.append(el('p', 'retomar-caminho',
      'Nível ' + prox.nivel.n + ' · Módulo ' + prox.modulo.id + ' · ' + prox.modulo.titulo));
    retomarCorpo.append(el('h2', 'retomar-titulo', prox.aula.titulo));
    retomarCorpo.append(el('p', 'cartao-desc', prox.aula.objetivo || prox.aula.resumo || ''));
    const selos = el('div', 'aula-selos');
    selos.append(el('span', 'selo-aula', '⏱ ' + prox.aula.minutos + ' min'));
    selos.append(el('span', 'selo-aula disc', estado === 'nova' ? 'ainda não iniciada'
      : estado === 'em-andamento' ? 'em andamento' : 'estudada — falta dominar'));
    retomarCorpo.append(selos);
    const acoes = el('div', 'bloco-botoes');
    const b1 = el('button', 'botao-principal', estado === 'nova' ? 'Começar a aula' : 'Continuar a aula');
    b1.onclick = () => ir('aula/' + prox.aula.id);
    const b2 = el('button', 'botao-sec', 'Ver a grade');
    b2.onclick = () => ir('curso');
    acoes.append(b1, b2);
    retomarCorpo.append(acoes);

    // Se a próxima aula é de papel e lápis, oferece também a próxima em que se
    // toca. As duas estão liberadas: os pré-requisitos do curso não são uma
    // fila única, e quem estuda sozinho não deve passar duas horas lendo antes
    // de encostar no instrumento.
    if (!pedeViolao(prox.aula)) {
      const pratica = proximaPratica(niveis, fichas);
      if (pratica && pratica.aula.id !== prox.aula.id) {
        const atalho = el('div', 'retomar-alternativa');
        atalho.append(el('p', 'rotulo-grupo', 'Ou pegue o violão agora'));
        const bp = el('button', 'botao-texto', '♪ ' + pratica.aula.titulo
          + ' · ' + pratica.aula.minutos + ' min');
        bp.onclick = () => ir('aula/' + pratica.aula.id);
        atalho.append(bp);
        retomarCorpo.append(atalho);
      }
    }
  })().catch(() => {
    if (encerrada) return;
    retomarCorpo.innerHTML = '';
    retomarCorpo.append(el('p', 'texto-bloco', 'Não consegui ler o seu progresso agora.'));
    const b = el('button', 'botao-principal', 'Abrir a grade curricular');
    b.onclick = () => ir('curso');
    retomarCorpo.append(b);
  });

  return () => { encerrada = true; };
}
