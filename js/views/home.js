// Tela inicial: lista os módulos do app e mostra quanto você praticou hoje.
import { Pratica } from '../db.js';
import { hojeISO, minutosTexto } from '../pratica.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

// Cada módulo do app. "rota" vazia significa que ainda não existe.
const MODULOS = [
  { nome: 'Curso de violão', desc: '8 níveis, do zero ao avançado: aulas, exercícios e avaliações', rota: 'curso', destaque: true },
  { nome: 'Meu progresso', desc: 'Onde você está, o que já dominou e o que vem agora', rota: 'painel', destaque: true },
  { nome: 'Biblioteca de Técnicas', desc: '23 técnicas do violão, passo a passo, com critérios de avaliação', rota: 'tecnicas', destaque: true },
  { nome: 'Central de Exercícios', desc: 'Exercícios filtráveis por nível, técnica, tempo e objetivo', rota: 'exercicios', destaque: true },
  { nome: 'Metrônomo', desc: 'Cliques sintetizados, compassos e subdivisões', rota: 'metronomo' },
  { nome: 'Afinador', desc: 'Afinação padrão e alternativas', rota: 'afinador' },
  { nome: 'Braço virtual', desc: 'Notas e casas acendendo no braço', rota: 'braco' },
  { nome: 'Teoria', desc: 'Lições curtas com quiz e braço', rota: 'teoria' },
  { nome: 'CAGED', desc: 'Curso de 12 aulas + ferramenta das 5 formas', rota: 'caged' },
  { nome: 'Leitura', desc: 'Partituras infinitas para ler à primeira vista', rota: 'leitura' },
  { nome: 'Ritmo', desc: 'Leia e toque o ritmo no tempo do metrônomo', rota: 'ritmo' },
  { nome: 'Partituras', desc: 'Tocar lendo, com cursor e tablatura', rota: 'partituras' },
  { nome: 'Importar tablatura', desc: 'PDF, Guitar Pro, MusicXML ou texto → Partituras', rota: 'importar' },
  { nome: 'Hábitos', desc: 'Sequência de dias e calendário de estudo', rota: 'habitos' },
  { nome: 'Pacotes', desc: 'Instalar e remover peças extras', rota: 'pacotes' }
];

export function montar(raiz, ir) {
  const tela = el('main', 'tela inicio');

  const topo = el('header', 'marca');
  const logo = document.createElement('img');
  logo.src = 'icons/icon.svg';
  logo.alt = '';
  logo.width = 56;
  logo.height = 56;
  const textos = el('div');
  textos.append(el('h1', 'titulo', 'LLMusic'), el('p', 'sub', 'para a Liz e a Lívia'));
  topo.append(logo, textos);

  const hoje = el('p', 'hoje', 'Praticado hoje: …');
  const grade = el('div', 'grade');

  MODULOS.forEach((m) => {
    const ativo = !!m.rota;
    const cartao = el(ativo ? 'button' : 'div', 'cartao' + (ativo ? '' : ' em-breve') + (m.destaque ? ' cartao-destaque' : ''));
    cartao.append(el('h2', 'cartao-nome', m.nome), el('p', 'cartao-desc', m.desc));
    if (ativo) cartao.onclick = () => ir(m.rota);
    else cartao.append(el('span', 'selo', 'em breve · ' + m.etapa));
    grade.append(cartao);
  });

  tela.append(topo, hoje, grade);
  raiz.append(tela);

  let encerrada = false;
  Pratica.segundosDoDia(hojeISO()).then((s) => {
    if (!encerrada) hoje.textContent = 'Praticado hoje: ' + minutosTexto(s);
  });

  return () => { encerrada = true; };
}
