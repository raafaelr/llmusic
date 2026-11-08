// Grade curricular do LLMusic: 8 níveis, módulos, disciplinas transversais
// e o MAPA de cobertura (todo assunto previsto, com o seu estado).
//
// Como funciona:
//  - MAPA lista, nível por nível e módulo por módulo, TODOS os assuntos previstos.
//    É a lista de referência: a tela de Auditoria compara o que está escrito aqui
//    com o que as aulas realmente ensinam.
//  - O conteúdo de cada nível mora num arquivo próprio (js/curso/niveis/nN.js) e
//    é carregado só quando o aluno abre aquele nível, para o app abrir rápido.
//  - Cada aula declara em "cobre" quais assuntos do MAPA ela ensina.

export const ESTADO_ASSUNTO = {
  planejado: { nome: 'Planejado', cor: 'cinza' },
  desenvolvimento: { nome: 'Em desenvolvimento', cor: 'amarelo' },
  implementado: { nome: 'Implementado', cor: 'azul' },
  validado: { nome: 'Validado', cor: 'verde' }
};

// ---------------------------------------------------------------------------
// Disciplinas transversais: acompanham o aluno do nível 1 ao 8.
// ---------------------------------------------------------------------------
export const DISCIPLINAS = [
  { id: 'teoria', nome: 'Teoria musical', desc: 'A linguagem escrita da música: notas, figuras, compassos, escalas e acordes.' },
  { id: 'percepcao', nome: 'Percepção musical', desc: 'Reconhecer de ouvido alturas, intervalos, acordes e ritmos.' },
  { id: 'solfejo', nome: 'Solfejo', desc: 'Cantar o que está escrito, dizendo o nome das notas no tempo certo.' },
  { id: 'leitura', nome: 'Leitura musical', desc: 'Ler a partitura com fluência e relacionar cada nota com o braço do violão.' },
  { id: 'tecnica', nome: 'Técnica instrumental', desc: 'O que as mãos fazem: apoyando, tirando, arpejos, ligados, pestana, escalas.' },
  { id: 'repertorio', nome: 'Repertório', desc: 'As peças que você aprende a tocar, do estudo simples à obra de concerto.' },
  { id: 'historia', nome: 'História da música', desc: 'De onde vem cada estilo, cada compositor e o próprio violão.' },
  { id: 'harmonia', nome: 'Harmonia', desc: 'Como os acordes se formam, se encadeiam e criam tensão e repouso.' },
  { id: 'contraponto', nome: 'Contraponto', desc: 'Duas ou mais melodias independentes soando ao mesmo tempo.' },
  { id: 'interpretacao', nome: 'Interpretação', desc: 'Dinâmica, timbre, fraseado: transformar notas certas em música.' },
  { id: 'conjunto', nome: 'Prática de conjunto', desc: 'Tocar com outras pessoas, acompanhar e ouvir o todo.' },
  { id: 'postura', nome: 'Educação postural', desc: 'Sentar, segurar e mover-se sem tensão nem lesão.' }
];
export const nomeDisciplina = (id) => (DISCIPLINAS.find((d) => d.id === id) || { nome: id }).nome;

// ---------------------------------------------------------------------------
// MAPA curricular: todos os assuntos previstos nos 8 níveis.
// ---------------------------------------------------------------------------
export const MAPA = [
  {
    n: 1, titulo: 'Fundamentos do violão',
    objetivo: 'Conhecer o instrumento, sentar e segurar o violão sem tensão, entender os primeiros símbolos da música e tocar as primeiras melodias.',
    criterio: 'Você conhece o instrumento, afina o violão, identifica as cordas, compreende os primeiros símbolos musicais e executa pequenas melodias.',
    modulos: [
      { id: '1.1', titulo: 'Conhecendo o violão', assuntos: ['História e origem do violão clássico', 'Anatomia do instrumento', 'Corpo, braço, tampo, cavalete, tarraxas, trastes e cordas', 'Diferenças entre violão clássico, acústico e elétrico', 'Identificação das seis cordas', 'Nomenclatura dos dedos das duas mãos', 'Afinação padrão', 'Utilização do afinador', 'Conservação e cuidados com o instrumento'] },
      { id: '1.2', titulo: 'Postura e posicionamento', assuntos: ['Postura correta sentado', 'Posicionamento do violão', 'Apoio para o pé ou suporte ergonômico', 'Posicionamento da mão direita', 'Posicionamento da mão esquerda', 'Relaxamento e prevenção de tensões'] },
      { id: '1.3', titulo: 'Introdução à teoria musical', assuntos: ['O que é música', 'Som e silêncio', 'Altura, duração, intensidade e timbre', 'Notas musicais: Dó, Ré, Mi, Fá, Sol, Lá e Si', 'Alfabeto musical: C, D, E, F, G, A e B', 'Pentagrama', 'Clave de sol', 'Linhas e espaços', 'Notas naturais', 'Figuras musicais', 'Semibreve, mínima, semínima, colcheia e semicolcheia', 'Pausas musicais', 'Pulsação', 'Andamento', 'Compassos 2/4, 3/4 e 4/4'] },
      { id: '1.4', titulo: 'Primeiros exercícios', assuntos: ['Execução de cordas soltas', 'Dedilhado básico', 'Dedos polegar, indicador, médio e anular', 'Alternância entre indicador e médio', 'Coordenação das duas mãos', 'Produção de som limpo', 'Primeiras melodias', 'Exercícios simples de ritmo'] }
    ]
  },
  {
    n: 2, titulo: 'Leitura musical e técnica básica',
    objetivo: 'Desenvolver a leitura de partituras e a coordenação instrumental.',
    criterio: 'Ler partituras simples e executar melodias com ritmo, postura e dedilhado adequados.',
    modulos: [
      { id: '2.1', titulo: 'Leitura musical', assuntos: ['Leitura de partituras na clave de sol', 'Identificação das notas no pentagrama', 'Valores e subdivisões rítmicas', 'Ponto de aumento', 'Ligadura de prolongamento', 'Ligadura de expressão', 'Sinais de repetição', 'Fórmulas de compasso', 'Barras de compasso', 'Sustenido, bemol e bequadro', 'Tom e semitom', 'Escala cromática', 'Introdução às escalas maiores', 'Introdução aos intervalos'] },
      { id: '2.2', titulo: 'Técnica instrumental', assuntos: ['Localização das notas nas primeiras posições', 'Exercícios cromáticos', 'Independência dos dedos', 'Técnica Apoyando', 'Técnica Tirando', 'Arpejos simples', 'Escalas de uma oitava', 'Mudanças de posição', 'Sincronização entre as mãos', 'Ligados ascendentes e descendentes', 'Controle de intensidade'] },
      { id: '2.3', titulo: 'Repertório inicial', assuntos: ['Melodias populares adaptadas', 'Pequenas peças didáticas', 'Estudos simples', 'Primeiras obras de compositores clássicos'] }
    ]
  },
  {
    n: 3, titulo: 'Formação musical e técnica intermediária',
    objetivo: 'Desenvolver conhecimento de escalas, intervalos, acordes e técnicas intermediárias.',
    criterio: 'Executar escalas e arpejos regularmente, compreender a construção de acordes e tocar peças intermediárias iniciais.',
    modulos: [
      { id: '3.1', titulo: 'Teoria e harmonia', assuntos: ['Escalas maiores', 'Ciclo das quintas', 'Armaduras de clave', 'Escalas menores naturais', 'Escalas menores harmônicas', 'Escalas menores melódicas', 'Intervalos simples e compostos', 'Formação de tríades', 'Acordes maiores e menores', 'Acordes diminutos e aumentados', 'Campo harmônico maior', 'Graus da escala', 'Funções harmônicas', 'Tônica, subdominante e dominante', 'Introdução às cadências', 'Harmonia tonal'] },
      { id: '3.2', titulo: 'Técnica instrumental', assuntos: ['Escalas maiores e menores', 'Escalas em duas oitavas', 'Arpejos com diferentes combinações', 'Ligados ascendentes e descendentes', 'Pestana completa e meia pestana', 'Mudanças de posição', 'Saltos entre posições', 'Independência dos dedos', 'Controle de dinâmica', 'Exercícios com metrônomo', 'Harmônicos naturais', 'Sustentação das notas'] },
      { id: '3.3', titulo: 'Estudos e repertório', assuntos: ['Fernando Sor', 'Matteo Carcassi', 'Ferdinando Carulli', 'Dionisio Aguado', 'Francisco Tárrega'] }
    ]
  },
  {
    n: 4, titulo: 'Desenvolvimento técnico e harmônico',
    objetivo: 'Desenvolver domínio técnico e compreensão de estruturas musicais mais elaboradas.',
    criterio: 'Executar repertório intermediário com domínio técnico e compreender estruturas harmônicas e polifônicas.',
    modulos: [
      { id: '4.1', titulo: 'Harmonia intermediária', assuntos: ['Campo harmônico menor', 'Tríades e inversões', 'Acordes com sétima', 'Tétrades', 'Dominantes secundárias', 'Progressões harmônicas', 'Cadências autênticas, plagais e interrompidas', 'Modulação', 'Tonalidade', 'Centro tonal', 'Análise harmônica', 'Introdução ao contraponto', 'Frases e períodos musicais', 'Motivos musicais', 'Formas musicais'] },
      { id: '4.2', titulo: 'Técnica avançada inicial', assuntos: ['Escalas em três oitavas', 'Arpejos avançados', 'Pestanas e acordes com aberturas maiores', 'Ligados em velocidade', 'Mudanças rápidas de posição', 'Controle de timbre', 'Independência entre melodia e acompanhamento', 'Execução de vozes simultâneas', 'Independência entre polegar e demais dedos', 'Introdução ao tremolo', 'Harmônicos artificiais', 'Técnicas de abafamento', 'Resistência e relaxamento muscular'] },
      { id: '4.3', titulo: 'Repertório', assuntos: ['Estudos de Mauro Giuliani', 'Estudos avançados de Sor', 'Estudos de Carcassi', 'Peças de Tárrega', 'Obras de Johann Sebastian Bach', 'Repertório intermediário'] }
    ]
  },
  {
    n: 5, titulo: 'Interpretação e repertório avançado',
    objetivo: 'Desenvolver maturidade interpretativa e domínio técnico avançado.',
    criterio: 'Interpretar peças complexas, demonstrar domínio técnico e desenvolver expressividade musical.',
    modulos: [
      { id: '5.1', titulo: 'Teoria avançada', assuntos: ['Harmonia tonal avançada', 'Empréstimo modal', 'Modulações', 'Harmonia cromática', 'Acordes de nona, décima primeira e décima terceira', 'Notas de tensão', 'Contraponto a duas, três e quatro vozes', 'Análise formal', 'Forma binária e ternária', 'Rondó', 'Tema e variações', 'Forma-sonata', 'Análise estilística', 'História da música ocidental'] },
      { id: '5.2', titulo: 'Técnica instrumental avançada', assuntos: ['Escalas em diferentes posições', 'Arpejos de alta velocidade', 'Tremolo', 'Rasgueados', 'Harmônicos naturais e artificiais', 'Vibrato', 'Glissando', 'Portamento', 'Controle avançado de timbre', 'Independência de vozes', 'Polifonia', 'Dinâmica em passagens complexas', 'Leitura à primeira vista', 'Memorização', 'Preparação para apresentações'] },
      { id: '5.3', titulo: 'Repertório', assuntos: ['Johann Sebastian Bach', 'Francisco Tárrega', 'Heitor Villa-Lobos', 'Agustín Barrios Mangoré', 'Isaac Albéniz', 'Enrique Granados', 'Fernando Sor', 'Mauro Giuliani'] }
    ]
  },
  {
    n: 6, titulo: 'Especialização e formação avançada',
    objetivo: 'Proporcionar autonomia musical e capacidade de interpretação profissional.',
    criterio: 'Demonstrar autonomia musical, domínio de repertório complexo e maturidade interpretativa.',
    modulos: [
      { id: '6.1', titulo: 'Conhecimento musical avançado', assuntos: ['Contraponto avançado', 'Harmonia não tonal', 'Modos gregos', 'Escalas exóticas', 'Harmonia modal', 'Análise estrutural', 'Análise de estilo e período histórico', 'Orquestração', 'Arranjo', 'Transcrição musical', 'Composição', 'Improvisação', 'Acústica musical', 'História do violão', 'Interpretação historicamente informada'] },
      { id: '6.2', titulo: 'Desenvolvimento instrumental', assuntos: ['Identidade sonora', 'Interpretação de diferentes períodos', 'Controle avançado de articulação', 'Precisão rítmica', 'Controle de timbre', 'Execução polifônica complexa', 'Preparação de recitais', 'Memorização de programas extensos', 'Leitura de partituras complexas', 'Transcrição para violão', 'Gravação e autoavaliação', 'Música de câmara'] },
      { id: '6.3', titulo: 'Repertório de especialização', assuntos: ['Bach: suítes e obras contrapontísticas', 'Villa-Lobos: 12 Estudos e Prelúdios', 'Barrios: La Catedral', 'Manuel Ponce: sonatas e outras obras', 'Joaquín Rodrigo: obras para violão', 'Leo Brouwer: estudos e sonatas'] }
    ]
  },
  {
    n: 7, titulo: 'Formação pedagógica e profissional',
    objetivo: 'Preparar o aluno para atuar como professor, intérprete ou músico profissional.',
    criterio: 'Demonstrar capacidade de ensinar, interpretar e desenvolver projetos musicais.',
    modulos: [
      { id: '7.1', titulo: 'Pedagogia musical', assuntos: ['Metodologia do ensino musical', 'Psicologia da aprendizagem', 'Didática musical', 'Planejamento de aulas', 'Desenvolvimento motor e musical', 'Metodologias de ensino do violão', 'Avaliação de desempenho', 'História da pedagogia musical'] },
      { id: '7.2', titulo: 'Prática profissional', assuntos: ['Ensino de postura e técnica', 'Correção de vícios técnicos', 'Estruturação de exercícios', 'Ensino de leitura musical', 'Seleção de repertório', 'Organização de apresentações', 'Música de conjunto', 'Preparação para provas e concursos', 'Gravação e produção de performances'] }
    ]
  },
  {
    n: 8, titulo: 'Aperfeiçoamento artístico',
    objetivo: 'Desenvolver identidade artística e aprimoramento contínuo.',
    criterio: 'Este nível não tem conclusão: é uma área de aperfeiçoamento permanente.',
    continuo: true,
    modulos: [
      { id: '8.1', titulo: 'Aperfeiçoamento contínuo', assuntos: ['Construção de identidade artística', 'Pesquisa de repertório', 'Estudo aprofundado de compositores', 'Interpretação avançada', 'Desenvolvimento da musicalidade', 'Masterclasses', 'Festivais e concursos', 'Preparação de recitais', 'Gravação de repertório', 'Pesquisa acadêmica', 'Composição e arranjo', 'Desenvolvimento de carreira musical'] }
    ]
  }
];

// ---------------------------------------------------------------------------
// Carregamento do conteúdo
// ---------------------------------------------------------------------------
// Cada nível com conteúdo escrito tem um arquivo próprio. O import é dinâmico:
// o navegador só baixa o nível que o aluno abrir (e o service worker guarda tudo
// para funcionar offline depois da primeira visita).
const CARREGADORES = {
  1: () => import('./niveis/n1.js'),
  2: () => import('./niveis/n2.js'),
  3: () => import('./niveis/n3.js'),
  4: () => import('./niveis/n4.js'),
  5: () => import('./niveis/n5.js')
};

const cache = new Map();

// Monta um nível "vazio" a partir do MAPA, para os níveis cujo conteúdo
// ainda está sendo escrito. Nada é inventado: os módulos aparecem com os
// assuntos previstos e o estado 'planejado'.
function esqueleto(meta) {
  return {
    ...meta,
    pronto: false,
    modulos: meta.modulos.map((m) => ({ ...m, objetivo: '', aulas: [] }))
  };
}

export async function carregarNivel(n) {
  if (cache.has(n)) return cache.get(n);
  const meta = MAPA.find((x) => x.n === n);
  if (!meta) return null;
  let nivel;
  if (CARREGADORES[n]) {
    try {
      const mod = await CARREGADORES[n]();
      nivel = { ...meta, ...mod.NIVEL, pronto: true };
    } catch (e) {
      nivel = esqueleto(meta);
    }
  } else {
    nivel = esqueleto(meta);
  }
  cache.set(n, nivel);
  return nivel;
}

export async function carregarTodos() {
  return Promise.all(MAPA.map((m) => carregarNivel(m.n)));
}

export function todasAsAulas(niveis) {
  return niveis.flatMap((n) => (n.modulos || []).flatMap((m) => (m.aulas || []).map((a) => ({ ...a, nivel: n, modulo: m }))));
}

export async function acharAula(id) {
  const n = Number(String(id).replace(/^n(\d+).*/, '$1'));
  const nivel = await carregarNivel(n);
  if (!nivel) return null;
  for (const m of nivel.modulos || []) {
    const a = (m.aulas || []).find((x) => x.id === id);
    if (a) return { aula: a, modulo: m, nivel };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Auditoria de cobertura curricular
// ---------------------------------------------------------------------------
// Para cada assunto do MAPA, descobre se alguma aula o ensina e em que estado.
export function auditar(niveis) {
  const porNivel = MAPA.map((meta) => {
    const carregado = niveis.find((x) => x && x.n === meta.n) || esqueleto(meta);
    const modulos = meta.modulos.map((m) => {
      const mod = (carregado.modulos || []).find((x) => x.id === m.id) || { aulas: [] };
      const assuntos = m.assuntos.map((nome) => {
        const aulas = (mod.aulas || []).filter((a) => (a.cobre || []).includes(nome));
        let estado = 'planejado';
        if (aulas.length) estado = aulas.every((a) => a.status === 'validado') ? 'validado' : 'implementado';
        else if ((mod.aulas || []).length) estado = 'desenvolvimento';
        return { nome, estado, aulas: aulas.map((a) => ({ id: a.id, titulo: a.titulo })) };
      });
      return { ...m, aulas: mod.aulas || [], assuntos };
    });
    const todos = modulos.flatMap((m) => m.assuntos);
    const feitos = todos.filter((a) => a.estado === 'implementado' || a.estado === 'validado').length;
    return { n: meta.n, titulo: meta.titulo, modulos, total: todos.length, feitos, pct: todos.length ? Math.round((feitos / todos.length) * 100) : 0 };
  });
  const total = porNivel.reduce((a, b) => a + b.total, 0);
  const feitos = porNivel.reduce((a, b) => a + b.feitos, 0);
  return { porNivel, total, feitos, pct: total ? Math.round((feitos / total) * 100) : 0 };
}
