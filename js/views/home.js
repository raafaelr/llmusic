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
import { carregarTodos, todasAsAulas } from '../curso/curriculo.js';
import { quadroGeral, autoavaliacoes } from '../curso/habilidades.js';
import { EXERCICIOS } from '../curso/exercicios.js';
import { carregarFichas, proximaAula, proximaPratica, pedeViolao, estadoDaFicha, progressoDoNivel } from '../curso/progresso.js';
import { capaNivel } from './curso.js';
import { rotinaPorId, SEMANA_PADRAO, DIAS } from '../curso/plano.js';
import { roseta, clave, ramo, marcaDagua } from '../grafismos.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

// Acesso rápido às ferramentas de prática. O resto da navegação é do menu
// lateral — repetir 17 atalhos aqui só alongava a rolagem do painel.
const FERRAMENTAS = [
  ['metronomo', 'Metrônomo'], ['afinador', 'Afinador'], ['braco', 'Braço'],
  ['partituras', 'Partituras'], ['leitura', 'Leitura'], ['ritmo', 'Ritmo']
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
  marcaDagua(capa, roseta());
  tela.append(capa);

  // ---------------------------------------------------------------- retomar
  const retomar = el('section', 'cartao cartao-destaque retomar');
  retomar.append(el('p', 'rotulo-grupo', 'Continuar de onde parei'));
  const retomarCorpo = el('div', 'retomar-corpo');
  retomarCorpo.append(el('p', 'texto-bloco', 'Procurando a sua próxima aula…'));
  retomar.append(retomarCorpo);
  tela.append(retomar);

  // ---------------------------------------------------------------- rotina
  // A rotina vem antes dos números: é o que você faz hoje. Os números são
  // consequência e ficam mais abaixo, discretos.
  const rotina = el('section', 'grupo');
  rotina.append(el('h2', 'rotulo-grupo', 'A rotina de hoje'));
  const rotinaCorpo = el('div');
  rotina.append(rotinaCorpo);
  tela.append(rotina);

  // ---------------------------------------------------------------- números
  const faixa = el('section', 'faixa-numeros');
  const numeros = {};
  [['hoje', 'Hoje'], ['sequencia', 'Sequência'], ['dominadas', 'Aulas dominadas'], ['habilidades', 'Habilidades']]
    .forEach(([id, rotulo]) => {
      const c = el('div', 'numero');
      const v = el('span', 'numero-valor', '—');
      c.append(v, el('span', 'numero-rotulo', rotulo));
      numeros[id] = v;
      faixa.append(c);
    });
  tela.append(faixa);

  // ---------------------------------------------------------------- áreas
  const ferr = el('section', 'area');
  const cabF = el('div', 'area-cab');
  cabF.append(clave());
  cabF.append(el('h2', 'area-nome', 'Ferramentas'));
  cabF.append(el('p', 'area-desc', 'Para usar com o violão na mão'));
  ferr.append(cabF);
  const chipsF = el('div', 'chips');
  FERRAMENTAS.forEach(([rota, nome]) => {
    const b = el('button', 'chip', nome);
    b.onclick = () => ir(rota);
    chipsF.append(b);
  });
  ferr.append(chipsF);
  tela.append(ferr);

  const rodape = el('footer', 'saguao-rodape');
  rodape.append(ramo());
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
    rotinaCorpo.append(el('p', 'rotina-foco', DIAS[new Date().getDay()] + ' · ' + r.nome + ' — ' + r.minutos + ' min'));
    rotinaCorpo.append(el('p', 'cartao-desc', doDia.foco));
    const barra = el('div', 'plano-barra');
    const pre = el('span');
    pre.style.width = Math.min(100, Math.round((seg / (r.minutos * 60)) * 100)) + '%';
    barra.append(pre);
    rotinaCorpo.append(barra);
    rotinaCorpo.append(el('p', 'cartao-desc', minutosTexto(seg) + ' de ' + r.minutos + ' min'));

    // Os passos do dia, em linhas separadas por fio. Aqui só se lê: marcar o
    // que foi feito é no Plano de Estudos, que é dono desse estado. Mostrar a
    // caixinha nos dois lugares exigiria manter o mesmo dado em duas telas.
    const lista = el('ul', 'rotina-passos');
    (r.blocos || []).forEach((b) => {
      const li = el('li');
      li.append(el('span', 'min', b.min + ' min'));
      li.append(el('span', 'nome', b.titulo));
      lista.append(li);
    });
    if (lista.children.length) rotinaCorpo.append(lista);

    const bp = el('button', 'botao-principal', 'Começar a praticar');
    bp.onclick = () => ir('plano');
    rotinaCorpo.append(bp);
  })().catch(() => {});

  (async () => {
    const fichas = await carregarFichas();
    const niveis = await carregarTodos();
    if (encerrada) return;

    const dominadas = Object.values(fichas).filter((f) => f.dominada).length;
    numeros.dominadas.textContent = String(dominadas);

    const quadros = quadroGeral({
      aulas: todasAsAulas(niveis), fichas, exercicios: EXERCICIOS,
      regExerc: await Config.obter('exercicios.registro', {}),
      autos: await autoavaliacoes()
    });
    if (encerrada) return;
    const dom = quadros.filter((q) => q.estado === 'dominado').length;
    const rev = quadros.filter((q) => q.estado === 'revisao').length;
    numeros.habilidades.textContent = dom + '/' + quadros.length;
    if (rev) {
      const aviso = el('button', 'botao-texto aviso-revisao',
        '⟳ ' + rev + (rev === 1 ? ' habilidade pede' : ' habilidades pedem') + ' revisão hoje');
      aviso.onclick = () => ir('habilidades');
      faixa.after(aviso);
    }


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
    // A capa do nível em que você está: é o livro aberto na sua mão, e leva
    // para a estante naquele nível. O mesmo desenho da grade curricular,
    // montado pela mesma função — dois desenhos iguais viram dois diferentes.
    const capa = capaNivel(prox.nivel, progressoDoNivel(prox.nivel, fichas));
    capa.onclick = () => ir('curso/' + prox.nivel.n);
    retomarCorpo.append(capa);
    retomarCorpo.append(el('p', 'retomar-caminho',
      'Módulo ' + prox.modulo.id + ' · ' + prox.modulo.titulo));
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
