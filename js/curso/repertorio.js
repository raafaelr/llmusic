// Biblioteca de Repertório — obras em DOMÍNIO PÚBLICO.
//
// Só entram aqui obras cujo autor morreu há mais de 70 anos (regra brasileira),
// de modo que a partitura pode ser procurada, copiada, tocada e gravada
// livremente. Obras ainda protegidas (Villa-Lobos, Rodrigo, Brouwer, Ponce
// em alguns países, compositores vivos) NÃO entram nesta lista: elas são
// estudadas nas aulas de repertório, pela linguagem e pela técnica.
//
// Campos de cada obra:
//   id, titulo, compositor, morte (ano), periodo, nivel (1 a 8),
//   tom, minutos (duração aproximada), tecnicas (slugs da lista abaixo),
//   sobre (o que é a peça), ensina (o que ela desenvolve),
//   estudar (passos concretos de estudo), aulas (ids de aulas relacionadas)

export const PERIODOS = [
  { id: 'renascimento', nome: 'Renascimento', anos: '1400–1600' },
  { id: 'barroco', nome: 'Barroco', anos: '1600–1750' },
  { id: 'classico', nome: 'Clássico', anos: '1750–1820' },
  { id: 'romantico', nome: 'Romântico', anos: '1820–1900' },
  { id: 'moderno', nome: 'Moderno', anos: '1900–1950' }
];

export const TECNICAS_REP = [
  { id: 'arpejo', nome: 'Arpejo' },
  { id: 'escala', nome: 'Escalas' },
  { id: 'pestana', nome: 'Pestana' },
  { id: 'ligado', nome: 'Ligados' },
  { id: 'polifonia', nome: 'Polifonia' },
  { id: 'melodia', nome: 'Melodia cantabile' },
  { id: 'tremolo', nome: 'Tremolo' },
  { id: 'harmonicos', nome: 'Harmônicos' },
  { id: 'rasgueado', nome: 'Rasgueado' },
  { id: 'posicao', nome: 'Mudanças de posição' },
  { id: 'ritmo', nome: 'Ritmo e dança' },
  { id: 'acordes', nome: 'Acordes e acompanhamento' }
];

export const OBRAS = [
  // ---------------------------------------------------------------- Renascimento
  {
    id: 'milan-pavana1', titulo: 'Pavana nº 1', compositor: 'Luis de Milán', morte: 1561,
    periodo: 'renascimento', nivel: 3, tom: 'Mi menor', minutos: 2,
    tecnicas: ['acordes', 'ritmo'],
    sobre: 'Dança de corte espanhola do século XVI, escrita originalmente para vihuela. Acordes em blocos com uma melodia simples no topo.',
    ensina: 'Leitura de acordes em bloco, pulso estável e articulação clara — a base do estilo renascentista.',
    estudar: [
      'Toque só a voz superior, cantando junto: ela é a melodia.',
      'Acrescente os acordes, atacando todas as notas exatamente juntas.',
      'Use toque leve, imitando a corda de tripa; nada de vibrato.',
      'Mantenha o pulso rigorosamente estável, como numa dança.'
    ],
    aulas: ['n6.1.10']
  },
  {
    id: 'narvaez-guardame', titulo: 'Diferencias sobre Guárdame las vacas', compositor: 'Luys de Narváez', morte: 1549,
    periodo: 'renascimento', nivel: 4, tom: 'Dó maior', minutos: 3,
    tecnicas: ['escala', 'polifonia'],
    sobre: 'Conjunto de variações sobre a progressão da romanesca, prima da Folia. Uma das obras mais tocadas do repertório renascentista.',
    ensina: 'Técnica de variação, escalas em duas vozes e clareza polifônica.',
    estudar: [
      'Toque só o baixo das quatro primeiras variações: a progressão é sempre a mesma.',
      'Estude cada variação isoladamente, no mesmo andamento.',
      'Monte a sequência aumentando ligeiramente a intensidade a cada variação.',
      'Não acelere: a variação já cria a sensação de movimento.'
    ],
    aulas: ['n5.1.8', 'n6.1.10']
  },
  {
    id: 'mudarra-fantasia10', titulo: 'Fantasía que contrahaze la harpa', compositor: 'Alonso Mudarra', morte: 1580,
    periodo: 'renascimento', nivel: 5, tom: 'Ré maior', minutos: 3,
    tecnicas: ['escala', 'acordes', 'ritmo'],
    sobre: 'Imita uma harpa do século XVI, inclusive as dissonâncias propositais do final, que o próprio Mudarra avisa na partitura que "soam mal, mas são assim mesmo".',
    ensina: 'Contraste de textura, escalas rápidas e coragem interpretativa.',
    estudar: [
      'Separe as seções: blocos de acordes e passagens de escala.',
      'Trabalhe as escalas com metrônomo, dois níveis abaixo do andamento final.',
      'No trecho dissonante final, toque com convicção: a estranheza é intencional.',
      'Alterne timbres entre seções para marcar o contraste.'
    ],
    aulas: ['n6.1.10']
  },

  // ---------------------------------------------------------------- Barroco
  {
    id: 'sanz-canarios', titulo: 'Canarios', compositor: 'Gaspar Sanz', morte: 1710,
    periodo: 'barroco', nivel: 4, tom: 'Ré maior', minutos: 2,
    tecnicas: ['ritmo', 'rasgueado', 'acordes'],
    sobre: 'Dança espanhola de ritmo vivo, com alternância característica entre 6/8 e 3/4.',
    ensina: 'Hemíola, acentuação de dança e rasgueado no contexto barroco.',
    estudar: [
      'Conte em voz alta a alternância 6/8 e 3/4 antes de tocar.',
      'Bata o ritmo sem o instrumento até ele ficar automático.',
      'Toque com acentos claros; sem eles, a peça perde a identidade.',
      'Acrescente rasgueado apenas nos pontos de chegada.'
    ],
    aulas: ['n5.2.4', 'n6.1.10']
  },
  {
    id: 'bach-bwv996-bourree', titulo: 'Bourrée (Suíte BWV 996)', compositor: 'Johann Sebastian Bach', morte: 1750,
    periodo: 'barroco', nivel: 4, tom: 'Mi menor', minutos: 2,
    tecnicas: ['polifonia', 'ligado'],
    sobre: 'A porta de entrada no Bach violonístico: duas vozes claras, forma binária e extensão curta.',
    ensina: 'Independência de duas vozes, articulação barroca e sustentação do baixo.',
    estudar: [
      'Toque só a voz do baixo, no tempo, até sair sem hesitar.',
      'Toque só a melodia, com a mesma firmeza.',
      'Junte as duas conferindo se o baixo dura o valor escrito.',
      'Decida e marque a articulação: o que liga e o que separa.',
      'Na repetição de cada seção, mude a articulação ou o timbre.'
    ],
    aulas: ['n5.3.1', 'n6.3.1']
  },
  {
    id: 'bach-bwv999', titulo: 'Prelúdio BWV 999', compositor: 'Johann Sebastian Bach', morte: 1750,
    periodo: 'barroco', nivel: 5, tom: 'Ré menor', minutos: 3,
    tecnicas: ['arpejo', 'polifonia'],
    sobre: 'Prelúdio em arpejo contínuo escrito para alaúde. A harmonia inteira está contida num único padrão de mão direita.',
    ensina: 'Resistência em arpejo, condução harmônica e sustentação das vozes graves.',
    estudar: [
      'Toque só os baixos, um por compasso: eles são o mapa harmônico.',
      'Toque o padrão de arpejo numa harmonia só, por dois minutos, com metrônomo.',
      'Junte: a mão direita não muda; só a esquerda troca de forma.',
      'Construa um plano de intensidade: a peça precisa de um ponto alto.'
    ],
    aulas: ['n5.3.1', 'n6.3.1']
  },
  {
    id: 'bach-bwv1007-prelude', titulo: 'Prelúdio da Suíte nº 1 BWV 1007', compositor: 'Johann Sebastian Bach', morte: 1750,
    periodo: 'barroco', nivel: 5, tom: 'Ré maior (transcrição)', minutos: 3,
    tecnicas: ['arpejo', 'posicao'],
    sobre: 'Originalmente para violoncelo. No violão costuma ser tocado em Ré maior, aproveitando as cordas soltas.',
    ensina: 'Linha única com harmonia implícita, condução por arpejo e fraseado longo.',
    estudar: [
      'Identifique a harmonia de cada compasso e escreva-a na partitura.',
      'Toque só a primeira nota de cada compasso: é a linha de baixo implícita.',
      'Depois toque tudo, mantendo essa linha audível.',
      'Planeje a grande subida do trecho final como um único arco.'
    ],
    aulas: ['n6.3.1']
  },
  {
    id: 'bach-bwv997-sarabande', titulo: 'Sarabanda (Suíte BWV 997)', compositor: 'Johann Sebastian Bach', morte: 1750,
    periodo: 'barroco', nivel: 6, tom: 'Lá menor', minutos: 4,
    tecnicas: ['polifonia', 'melodia'],
    sobre: 'Sarabanda lenta e ornamentada, de grande densidade harmônica.',
    ensina: 'Sustentação, ornamentação barroca e peso no segundo tempo.',
    estudar: [
      'Marque o segundo tempo de cada compasso: é onde está o peso da sarabanda.',
      'Estude as vozes separadamente antes de juntar.',
      'Realize os ornamentos com ligados, começando na nota superior.',
      'Na repetição, acrescente ornamentos novos.'
    ],
    aulas: ['n6.3.1']
  },
  {
    id: 'bach-bwv1000-fuga', titulo: 'Fuga BWV 1000', compositor: 'Johann Sebastian Bach', morte: 1750,
    periodo: 'barroco', nivel: 8, tom: 'Lá menor', minutos: 8,
    tecnicas: ['polifonia', 'pestana', 'posicao'],
    sobre: 'Transcrição para alaúde da fuga da Sonata BWV 1001. Três vozes reais do começo ao fim, com estreito e pedal final.',
    ensina: 'O limite da polifonia violonística: sustentação, planos sonoros e resistência.',
    estudar: [
      'Marque com cores todas as entradas do sujeito antes de estudar as notas.',
      'Toque apenas as entradas do sujeito, em sequência, pulando o resto.',
      'Estude cada voz separadamente, página por página.',
      'Trabalhe o estreito e o pedal final isoladamente: são os pontos críticos.'
    ],
    aulas: ['n6.1.1', 'n6.3.1']
  },
  {
    id: 'weiss-fantasia', titulo: 'Fantasia em Mi menor', compositor: 'Silvius Leopold Weiss', morte: 1750,
    periodo: 'barroco', nivel: 6, tom: 'Mi menor', minutos: 5,
    tecnicas: ['polifonia', 'melodia', 'posicao'],
    sobre: 'Weiss foi o maior alaudista do barroco tardio e contemporâneo de Bach. Sua música passa muito bem para o violão.',
    ensina: 'Escrita idiomática de alaúde, fraseado livre e condução de vozes.',
    estudar: [
      'Identifique onde a peça é livre e onde é métrica: a fantasia alterna os dois.',
      'Nos trechos livres, construa o fraseado como uma improvisação.',
      'Sustente as vozes graves nos trechos polifônicos.',
      'Compare duas transcrições diferentes antes de fixar a sua digitação.'
    ],
    aulas: ['n6.1.10', 'n6.3.1']
  },
  {
    id: 'devisee-sarabande', titulo: 'Sarabanda em Ré menor', compositor: 'Robert de Visée', morte: 1733,
    periodo: 'barroco', nivel: 3, tom: 'Ré menor', minutos: 2,
    tecnicas: ['acordes', 'melodia'],
    sobre: 'Peça curta e expressiva da guitarra barroca francesa, muito usada como primeira incursão no repertório barroco.',
    ensina: 'Caráter de sarabanda, ornamentação simples e acordes sustentados.',
    estudar: [
      'Conte em três, com peso no segundo tempo.',
      'Mantenha cada acorde pelo valor escrito, sem levantar os dedos cedo.',
      'Acrescente os ornamentos só depois que as notas estiverem seguras.',
      'Toque devagar: a peça não ganha nada com velocidade.'
    ],
    aulas: ['n6.1.10']
  },

  // ---------------------------------------------------------------- Clássico
  {
    id: 'carulli-op27-1', titulo: 'Estudo em Dó maior (Op. 27)', compositor: 'Ferdinando Carulli', morte: 1841,
    periodo: 'classico', nivel: 2, tom: 'Dó maior', minutos: 1,
    tecnicas: ['arpejo', 'acordes'],
    sobre: 'Um dos primeiros estudos do método de Carulli: arpejo simples sobre harmonia básica.',
    ensina: 'Arpejo de mão direita, troca de acordes no tempo e leitura em primeira posição.',
    estudar: [
      'Toque só os acordes em bloco, para memorizar as formas.',
      'Depois arpeje, mantendo todos os dedos da esquerda apoiados.',
      'Use metrônomo desde o começo: duas notas por clique.',
      'Objetivo: trocar de acorde sem interromper o arpejo.'
    ],
    aulas: ['n4.3.1']
  },
  {
    id: 'carcassi-op60-1', titulo: 'Estudo nº 1 (Op. 60)', compositor: 'Matteo Carcassi', morte: 1853,
    periodo: 'classico', nivel: 4, tom: 'Dó maior', minutos: 2,
    tecnicas: ['arpejo', 'posicao'],
    sobre: 'O primeiro dos 25 estudos melódicos e progressivos, o conjunto mais usado no ensino intermediário.',
    ensina: 'Arpejo com melodia no topo e mudanças de posição suaves.',
    estudar: [
      'Toque só as notas agudas de cada arpejo: elas formam a melodia.',
      'Depois toque tudo, mantendo essa melodia mais forte.',
      'Planeje as mudanças de posição com dedo-guia.',
      'Meta: 100 BPM com quatro notas por clique, sem perder a melodia.'
    ],
    aulas: ['n4.3.3']
  },
  {
    id: 'carcassi-op60-3', titulo: 'Estudo nº 3 (Op. 60)', compositor: 'Matteo Carcassi', morte: 1853,
    periodo: 'classico', nivel: 4, tom: 'Lá maior', minutos: 2,
    tecnicas: ['arpejo', 'pestana'],
    sobre: 'Estudo em arpejo com pestanas frequentes, muito usado para consolidar a mão esquerda.',
    ensina: 'Pestana sustentada dentro de um arpejo contínuo.',
    estudar: [
      'Isole cada pestana e verifique se as seis cordas soam.',
      'Trabalhe a troca entre pestana e posição aberta, lentamente.',
      'Alivie a pressão: pestana apertada demais cansa e não melhora o som.',
      'Só então junte ao arpejo.'
    ],
    aulas: ['n4.2.3', 'n4.3.3']
  },
  {
    id: 'sor-op60-14', titulo: 'Estudo nº 14 (Op. 60)', compositor: 'Fernando Sor', morte: 1839,
    periodo: 'classico', nivel: 3, tom: 'Dó maior', minutos: 1,
    tecnicas: ['melodia', 'acordes'],
    sobre: 'Estudo curto e elegante, típico da escrita de Sor: melodia simples sobre acompanhamento discreto.',
    ensina: 'Equilíbrio entre melodia e acompanhamento — a lição central de Sor.',
    estudar: [
      'Marque a melodia na partitura com caneta.',
      'Toque só a melodia, cantando junto.',
      'Acrescente o acompanhamento em volume claramente menor.',
      'Teste gravando: a melodia precisa estar nitidamente à frente.'
    ],
    aulas: ['n4.3.2', 'n5.3.2']
  },
  {
    id: 'sor-op31-20', titulo: 'Estudo nº 20 (Op. 31)', compositor: 'Fernando Sor', morte: 1839,
    periodo: 'classico', nivel: 5, tom: 'Lá maior', minutos: 2,
    tecnicas: ['polifonia', 'ligado'],
    sobre: 'Estudo de escrita polifônica, com vozes bem definidas e condução cuidadosa.',
    ensina: 'Independência de vozes e sustentação em escrita clássica.',
    estudar: [
      'Separe as vozes e toque cada uma sozinha.',
      'Junte duas a duas antes de tocar tudo.',
      'Confira a sustentação parando no fim de cada compasso sem levantar dedos.',
      'Dê cores diferentes às vozes: melodia mais brilhante, acompanhamento mais escuro.'
    ],
    aulas: ['n5.2.8', 'n5.3.2']
  },
  {
    id: 'sor-op35-22', titulo: 'Estudo nº 22 (Op. 35) — "Lição"', compositor: 'Fernando Sor', morte: 1839,
    periodo: 'classico', nivel: 5, tom: 'Si menor', minutos: 3,
    tecnicas: ['melodia', 'arpejo', 'pestana'],
    sobre: 'Um dos estudos mais tocados de Sor, lírico e de grande apelo musical.',
    ensina: 'Cantabile, pestana em contexto musical e fraseado longo.',
    estudar: [
      'Cante a melodia inteira antes de tocá-la.',
      'Defina o ponto alto da peça e construa em direção a ele.',
      'Trabalhe as pestanas isoladamente.',
      'Mantenha o acompanhamento constante e discreto.'
    ],
    aulas: ['n5.3.2']
  },
  {
    id: 'sor-op9-mozart', titulo: 'Variações sobre um tema de Mozart, Op. 9', compositor: 'Fernando Sor', morte: 1839,
    periodo: 'classico', nivel: 7, tom: 'Mi maior', minutos: 9,
    tecnicas: ['escala', 'arpejo', 'ligado', 'posicao'],
    sobre: 'A obra-prima de Sor e uma das peças mais tocadas do repertório de concerto. Introdução, tema de A Flauta Mágica, cinco variações e coda.',
    ensina: 'Virtuosismo controlado, técnica de variação e arquitetura de peça longa.',
    estudar: [
      'Estude cada variação como uma peça independente.',
      'Trabalhe as escalas da variação rápida com metrônomo, subindo de 4 em 4 BPM.',
      'Monte o plano de intensidade do conjunto: cada variação tem um nível.',
      'Só junte tudo quando cada parte estiver estável separadamente.'
    ],
    aulas: ['n5.1.8', 'n5.3.2']
  },
  {
    id: 'giuliani-op1', titulo: '120 Arpejos, Op. 1', compositor: 'Mauro Giuliani', morte: 1829,
    periodo: 'classico', nivel: 3, tom: 'Dó maior / Sol maior', minutos: 15,
    tecnicas: ['arpejo'],
    sobre: 'Cento e vinte fórmulas de mão direita sobre a mesma progressão de dois compassos. O material de mão direita mais usado no mundo.',
    ensina: 'Todas as combinações possíveis de p, i, m e a.',
    estudar: [
      'Dez fórmulas por dia, dez repetições cada.',
      'Comece pelas fórmulas 1 a 20 e só avance quando estiverem iguais.',
      'Use metrônomo sempre; anote o andamento máximo de cada grupo.',
      'Repita o ciclo inteiro a cada dois meses, em andamento maior.'
    ],
    aulas: ['n4.2.2', 'n5.2.2', 'n5.3.2']
  },
  {
    id: 'giuliani-op48-5', titulo: 'Estudo nº 5 (Op. 48)', compositor: 'Mauro Giuliani', morte: 1829,
    periodo: 'classico', nivel: 5, tom: 'Dó maior', minutos: 2,
    tecnicas: ['escala', 'posicao'],
    sobre: 'Estudo de escalas rápidas, com mudanças de posição frequentes.',
    ensina: 'Igualdade de escala em velocidade e sincronia entre as mãos.',
    estudar: [
      'Toque a escala em ritmos pontuados antes do ritmo regular.',
      'Isole as mudanças de posição e trabalhe-as separadamente.',
      'Suba o andamento de 4 em 4 BPM, com um minuto perfeito como condição.',
      'Verifique a sincronia gravando: mão direita e esquerda precisam coincidir.'
    ],
    aulas: ['n5.2.1', 'n5.3.2']
  },
  {
    id: 'aguado-op6-estudo', titulo: 'Estudo em Lá menor (Op. 6)', compositor: 'Dionisio Aguado', morte: 1849,
    periodo: 'classico', nivel: 4, tom: 'Lá menor', minutos: 2,
    tecnicas: ['arpejo', 'ligado'],
    sobre: 'Estudo do método de Aguado, com progressão técnica rigorosa.',
    ensina: 'Mecanismo de mão esquerda e regularidade de arpejo.',
    estudar: [
      'Atenção à digitação original: Aguado escolhia cada dedo com propósito.',
      'Trabalhe os ligados isoladamente antes de inseri-los.',
      'Mantenha o pulso absolutamente estável.',
      'Grave e confira a igualdade entre os dedos.'
    ],
    aulas: ['n4.2.4']
  },
  {
    id: 'coste-op38-barcarolle', titulo: 'Barcarolle (Op. 51)', compositor: 'Napoléon Coste', morte: 1883,
    periodo: 'romantico', nivel: 6, tom: 'Lá maior', minutos: 4,
    tecnicas: ['melodia', 'arpejo'],
    sobre: 'Coste foi o maior violonista francês do século XIX e aluno de Sor. Esta barcarola tem o balanço característico do gênero.',
    ensina: 'Acompanhamento ondulante com melodia cantada acima.',
    estudar: [
      'Estabeleça o balanço do acompanhamento antes de acrescentar a melodia.',
      'Cante a melodia sobre o acompanhamento, sem tocá-la.',
      'Depois toque as duas camadas com volumes nitidamente diferentes.',
      'Use rubato discreto, devolvendo sempre o tempo roubado.'
    ],
    aulas: ['n5.3.3']
  },

  // ---------------------------------------------------------------- Romântico
  {
    id: 'tarrega-lagrima', titulo: 'Lágrima', compositor: 'Francisco Tárrega', morte: 1909,
    periodo: 'romantico', nivel: 4, tom: 'Mi maior / Mi menor', minutos: 2,
    tecnicas: ['melodia', 'posicao'],
    sobre: 'Prelúdio curto em forma ternária, com a seção central em menor. Uma das peças mais queridas do repertório.',
    ensina: 'Legato, melodia cantabile e contraste de modo.',
    estudar: [
      'Toque só a melodia, cantando junto.',
      'Trabalhe a mudança para a seção menor com dedo-guia.',
      'Use rubato na chegada de cada frase, devolvendo o tempo.',
      'Mude o timbre entre a seção maior e a menor.'
    ],
    aulas: ['n4.3.4', 'n5.3.3']
  },
  {
    id: 'tarrega-adelita', titulo: 'Adelita', compositor: 'Francisco Tárrega', morte: 1909,
    periodo: 'romantico', nivel: 4, tom: 'Mi menor / Mi maior', minutos: 2,
    tecnicas: ['melodia', 'ligado'],
    sobre: 'Mazurca curta, par natural de Lágrima no estudo do repertório de Tárrega.',
    ensina: 'Fraseado de mazurca, rubato e ornamentação romântica.',
    estudar: [
      'Marque o acento característico da mazurca no segundo ou terceiro tempo.',
      'Toque a melodia sozinha até ela respirar naturalmente.',
      'Realize os ornamentos com ligados leves.',
      'Contraste claramente as seções menor e maior.'
    ],
    aulas: ['n4.3.4', 'n5.3.3']
  },
  {
    id: 'tarrega-pavana', titulo: 'Estudo em Mi maior (Pavana)', compositor: 'Francisco Tárrega', morte: 1909,
    periodo: 'romantico', nivel: 5, tom: 'Mi maior', minutos: 3,
    tecnicas: ['pestana', 'polifonia'],
    sobre: 'Estudo de caráter nobre, com pestanas longas e condução de vozes.',
    ensina: 'Pestana sustentada com vozes independentes acima dela.',
    estudar: [
      'Isole as pestanas longas e meça quanto tempo consegue mantê-las sem tensão.',
      'Alivie a pressão: a pestana exige menos força do que parece.',
      'Toque as vozes separadamente antes de juntar.',
      'Mantenha o andamento estável; a peça não pede rubato intenso.'
    ],
    aulas: ['n4.2.3', 'n5.3.3']
  },
  {
    id: 'tarrega-capricho', titulo: 'Capricho Árabe', compositor: 'Francisco Tárrega', morte: 1909,
    periodo: 'romantico', nivel: 7, tom: 'Ré menor', minutos: 5,
    tecnicas: ['melodia', 'posicao', 'harmonicos'],
    sobre: 'Peça de grande arco expressivo, com evocação andaluza e uma introdução livre memorável.',
    ensina: 'Portamento, controle de timbre e construção de uma frase muito longa.',
    estudar: [
      'Trate a introdução como recitativo: livre, mas com direção.',
      'Marque na partitura onde entra cada mudança de timbre.',
      'Use portamento discreto nas mudanças de posição expressivas.',
      'Construa o plano de intensidade da peça inteira antes de decorar.'
    ],
    aulas: ['n5.2.6', 'n5.3.3']
  },
  {
    id: 'tarrega-recuerdos', titulo: 'Recuerdos de la Alhambra', compositor: 'Francisco Tárrega', morte: 1909,
    periodo: 'romantico', nivel: 8, tom: 'Lá menor / Lá maior', minutos: 4,
    tecnicas: ['tremolo', 'melodia'],
    sobre: 'A peça de tremolo mais conhecida do repertório. Melodia contínua sobre acompanhamento de baixo arpejado.',
    ensina: 'Tremolo regular com melodia cantada e controle de dinâmica em textura constante.',
    estudar: [
      'Prepare o tremolo isoladamente por meses antes de abrir a partitura.',
      'Estude a melodia sozinha, sem tremolo, com fraseado completo.',
      'Acrescente o tremolo mantendo a melodia audível acima do baixo.',
      'Grave e confira: nenhum dos três ataques pode se destacar dos outros.'
    ],
    aulas: ['n5.2.3', 'n5.3.3']
  },
  {
    id: 'mertz-romanze', titulo: 'Romanze (Bardenklänge)', compositor: 'Johann Kaspar Mertz', morte: 1856,
    periodo: 'romantico', nivel: 6, tom: 'Mi maior', minutos: 4,
    tecnicas: ['melodia', 'arpejo', 'posicao'],
    sobre: 'Mertz escreveu o repertório romântico mais pianístico do violão. Esta romanza é lírica e de grande extensão de registro.',
    ensina: 'Melodia expressiva em registro agudo e acompanhamento amplo.',
    estudar: [
      'Resolva primeiro as extensões grandes de mão esquerda; adapte se necessário.',
      'Toque a melodia sozinha com todo o fraseado.',
      'Mantenha o acompanhamento bem abaixo em volume.',
      'Rubato é esperado, mas sempre com retorno ao pulso.'
    ],
    aulas: ['n5.3.3']
  },
  {
    id: 'albeniz-asturias', titulo: 'Asturias (Leyenda)', compositor: 'Isaac Albéniz', morte: 1909,
    periodo: 'romantico', nivel: 7, tom: 'Mi menor', minutos: 6,
    tecnicas: ['ritmo', 'posicao', 'escala'],
    sobre: 'Originalmente para piano, virou a peça espanhola mais tocada no violão. Alterna pedal rápido com uma seção central lírica.',
    ensina: 'Resistência na alternância polegar/indicador, igualdade e contraste de seções.',
    estudar: [
      'Trabalhe o mecanismo de polegar alternado isoladamente, por dois minutos contínuos.',
      'Suba o andamento só quando a igualdade estiver estável.',
      'Estude a seção central como peça independente: ela é lírica, não rítmica.',
      'Planeje a volta ao tema com um crescendo longo.'
    ],
    aulas: ['n5.3.6']
  },
  {
    id: 'albeniz-granada', titulo: 'Granada (Suite Española)', compositor: 'Isaac Albéniz', morte: 1909,
    periodo: 'romantico', nivel: 6, tom: 'Mi maior', minutos: 5,
    tecnicas: ['melodia', 'arpejo'],
    sobre: 'Serenata de melodia longa sobre acompanhamento arpejado, com sabor andaluz.',
    ensina: 'Melodia cantabile sustentada e acompanhamento discreto em arpejo.',
    estudar: [
      'Cante a melodia inteira antes de tocar.',
      'Estude o acompanhamento até ele ficar automático.',
      'Junte as camadas com volumes muito diferentes.',
      'Use rubato nas chegadas de frase, como um cantor faria.'
    ],
    aulas: ['n5.3.6']
  },
  {
    id: 'granados-danza5', titulo: 'Danza Española nº 5 (Andaluza)', compositor: 'Enrique Granados', morte: 1916,
    periodo: 'romantico', nivel: 6, tom: 'Mi menor / Mi maior', minutos: 5,
    tecnicas: ['rasgueado', 'melodia', 'ritmo'],
    sobre: 'Transcrição clássica do repertório pianístico espanhol. Alterna seções rítmicas com uma seção central cantada.',
    ensina: 'Rasgueado em contexto de concerto, rubato e contraste de caráter.',
    estudar: [
      'Trabalhe o rasgueado isoladamente, com o último ataque caindo no tempo.',
      'A seção central é outra peça: estude-a separadamente, com fraseado livre.',
      'Marque a diferença de timbre entre as seções.',
      'Mantenha a dança firme; sem acento, ela perde a identidade.'
    ],
    aulas: ['n5.2.4', 'n5.3.6']
  },
  {
    id: 'nazareth-odeon', titulo: 'Odeon (tango brasileiro)', compositor: 'Ernesto Nazareth', morte: 1934,
    periodo: 'moderno', nivel: 5, tom: 'Dó maior', minutos: 3,
    tecnicas: ['ritmo', 'acordes', 'melodia'],
    sobre: 'Um dos tangos brasileiros mais famosos de Nazareth, escrito para piano e amplamente transcrito para violão.',
    ensina: 'Síncope brasileira, baixos alternados e condução melódica no estilo do choro.',
    estudar: [
      'Estabeleça a levada de baixo antes de acrescentar a melodia.',
      'Conte a síncope em voz alta até ela ficar automática.',
      'Mantenha o pulso firme: a síncope só funciona sobre tempo estável.',
      'Toque a melodia com leveza; o tango brasileiro não é pesado.'
    ],
    aulas: ['n8.1.1']
  },
  {
    id: 'pernambuco-sons', titulo: 'Sons de Carrilhões', compositor: 'João Pernambuco', morte: 1947,
    periodo: 'moderno', nivel: 4, tom: 'Mi maior', minutos: 3,
    tecnicas: ['arpejo', 'melodia'],
    sobre: 'Choro-maxixe de João Pernambuco, uma das peças mais conhecidas do violão brasileiro.',
    ensina: 'Arpejo contínuo com melodia emergindo das notas agudas, no idioma do choro.',
    estudar: [
      'Toque só as notas agudas de cada arpejo: elas imitam o carrilhão.',
      'Depois toque tudo, mantendo essas notas mais brilhantes.',
      'Mantenha o andamento constante; a peça não pede rubato.',
      'Trabalhe a seção central separadamente.'
    ],
    aulas: ['n8.1.1']
  },
  {
    id: 'pernambuco-interrogando', titulo: 'Interrogando', compositor: 'João Pernambuco', morte: 1947,
    periodo: 'moderno', nivel: 6, tom: 'Lá menor', minutos: 3,
    tecnicas: ['escala', 'ritmo', 'posicao'],
    sobre: 'Choro virtuosístico com escalas rápidas e caráter de pergunta e resposta.',
    ensina: 'Escalas em velocidade no idioma brasileiro e articulação de choro.',
    estudar: [
      'Trabalhe as escalas em ritmos pontuados antes do ritmo regular.',
      'Mantenha a articulação do choro: nem tudo ligado.',
      'Marque as respirações entre as frases de pergunta e resposta.',
      'Suba o andamento gradualmente, sempre com metrônomo.'
    ],
    aulas: ['n8.1.1']
  },

  // ---------------------------------------------------------------- Moderno (domínio público)
  {
    id: 'barrios-danza', titulo: 'Danza Paraguaya', compositor: 'Agustín Barrios Mangoré', morte: 1944,
    periodo: 'moderno', nivel: 6, tom: 'Sol maior', minutos: 3,
    tecnicas: ['ritmo', 'arpejo', 'melodia'],
    sobre: 'A peça folclórica mais conhecida de Barrios, com o balanço característico da polca paraguaia.',
    ensina: 'Ritmo de dança latino-americana, articulação e acentuação.',
    estudar: [
      'Bata o ritmo antes de tocar: ele é a identidade da peça.',
      'Mantenha o baixo firme no tempo; a melodia flutua sobre ele.',
      'Articule com leveza: a peça perde se for tocada pesada.',
      'Trabalhe a seção central separadamente.'
    ],
    aulas: ['n5.3.5']
  },
  {
    id: 'barrios-julia', titulo: 'Julia Florida (Barcarola)', compositor: 'Agustín Barrios Mangoré', morte: 1944,
    periodo: 'moderno', nivel: 6, tom: 'Ré maior', minutos: 4,
    tecnicas: ['melodia', 'arpejo'],
    sobre: 'Barcarola lírica, com acompanhamento ondulante e melodia longa.',
    ensina: 'Cantabile sustentado e equilíbrio entre melodia e acompanhamento.',
    estudar: [
      'Estabeleça o balanço do acompanhamento primeiro.',
      'Cante a melodia sobre ele antes de tocá-la.',
      'Mantenha o acompanhamento constante mesmo nas frases mais expressivas.',
      'Rubato discreto, sempre devolvido.'
    ],
    aulas: ['n5.3.5']
  },
  {
    id: 'barrios-vals3', titulo: 'Vals Op. 8 nº 3', compositor: 'Agustín Barrios Mangoré', morte: 1944,
    periodo: 'moderno', nivel: 7, tom: 'Si menor / Ré maior', minutos: 5,
    tecnicas: ['arpejo', 'escala', 'melodia'],
    sobre: 'Valsa de concerto com três seções e grande variedade técnica.',
    ensina: 'Fraseado de valsa, virtuosismo leve e condução de vozes.',
    estudar: [
      'Estude cada seção como peça independente.',
      'Marque o fraseado de valsa: o primeiro tempo não é sempre o mais forte.',
      'Trabalhe as escalas e arpejos rápidos com metrônomo.',
      'Monte o plano de intensidade do conjunto.'
    ],
    aulas: ['n5.3.5']
  },
  {
    id: 'barrios-catedral', titulo: 'La Catedral', compositor: 'Agustín Barrios Mangoré', morte: 1944,
    periodo: 'moderno', nivel: 8, tom: 'Si menor', minutos: 8,
    tecnicas: ['arpejo', 'polifonia', 'pestana'],
    sobre: 'Obra em três movimentos: Preludio (Saudade), Andante religioso e Allegro solemne. A obra-síntese de Barrios.',
    ensina: 'Sustentação de acordes, resistência em arpejo contínuo e arquitetura de obra longa.',
    estudar: [
      'Estude os três movimentos separadamente: a natureza da dificuldade é diferente em cada um.',
      'No Andante, pare no fim de cada compasso sem levantar dedos, para conferir a sustentação.',
      'No Allegro, comece o estudo pelas últimas páginas, onde a resistência falha.',
      'Faça execuções completas cronometradas, anotando quando a qualidade cai.'
    ],
    aulas: ['n5.3.5', 'n6.3.3']
  },
  {
    id: 'barrios-limosna', titulo: 'Una limosna por el amor de Dios', compositor: 'Agustín Barrios Mangoré', morte: 1944,
    periodo: 'moderno', nivel: 8, tom: 'Si menor', minutos: 5,
    tecnicas: ['tremolo', 'melodia'],
    sobre: 'Também conhecida como La Última Canción. Tremolo contínuo com um crescendo longo e um final em pianíssimo.',
    ensina: 'Tremolo avançado com dinâmica extrema e controle de arco longo.',
    estudar: [
      'Prepare o tremolo por meses antes de iniciar a peça.',
      'Construa o crescendo em etapas marcadas na partitura.',
      'Trabalhe o final em pianíssimo separadamente: é o trecho mais difícil.',
      'Grave e confira a igualdade dos três ataques ao longo da peça inteira.'
    ],
    aulas: ['n5.2.3', 'n5.3.5']
  },
  {
    id: 'barrios-choro', titulo: 'Choro de Saudade', compositor: 'Agustín Barrios Mangoré', morte: 1944,
    periodo: 'moderno', nivel: 7, tom: 'Lá menor', minutos: 5,
    tecnicas: ['melodia', 'ritmo', 'posicao'],
    sobre: 'Homenagem de Barrios ao choro brasileiro, com lirismo e virtuosismo alternados.',
    ensina: 'Rubato expressivo com retorno ao pulso e articulação brasileira.',
    estudar: [
      'Identifique onde a peça é cantada e onde é rítmica.',
      'Nos trechos líricos, cante antes de tocar.',
      'Nos rítmicos, mantenha o pulso firme.',
      'Planeje as transições entre os dois caracteres.'
    ],
    aulas: ['n5.3.5']
  },
  {
    id: 'barrios-abejas', titulo: 'Las Abejas', compositor: 'Agustín Barrios Mangoré', morte: 1944,
    periodo: 'moderno', nivel: 7, tom: 'Lá maior', minutos: 2,
    tecnicas: ['escala', 'ligado'],
    sobre: 'Estudo de concerto em movimento perpétuo, que imita o zumbido de abelhas.',
    ensina: 'Velocidade, igualdade e resistência em escalas contínuas.',
    estudar: [
      'Trabalhe em ritmos pontuados nas duas direções.',
      'Divida a peça em grupos de quatro compassos e domine cada um.',
      'Suba o andamento de 4 em 4 BPM com um minuto perfeito como condição.',
      'Nunca estude em velocidade com tensão no antebraço.'
    ],
    aulas: ['n5.2.1', 'n5.3.5']
  },
  {
    id: 'ponce-preludio1', titulo: 'Prelúdio nº 1 (24 Prelúdios)', compositor: 'Manuel Ponce', morte: 1948,
    periodo: 'moderno', nivel: 4, tom: 'Dó maior', minutos: 1,
    tecnicas: ['arpejo', 'acordes'],
    sobre: 'Primeiro dos 24 prelúdios curtos de Ponce, excelentes para estudo e para programa.',
    ensina: 'Arpejo com harmonia cromática e condução de vozes.',
    estudar: [
      'Cifre a harmonia antes de estudar as notas.',
      'Toque só os baixos para ouvir a condução.',
      'Mantenha o arpejo regular enquanto a harmonia muda.',
      'Peça curta: toque-a inteira todos os dias.'
    ],
    aulas: ['n6.3.4']
  },
  {
    id: 'ponce-folia', titulo: 'Variations sur Folia de España et Fugue', compositor: 'Manuel Ponce', morte: 1948,
    periodo: 'moderno', nivel: 8, tom: 'Ré menor', minutos: 25,
    tecnicas: ['escala', 'arpejo', 'polifonia', 'pestana'],
    sobre: 'Vinte variações sobre a Folia de España seguidas de uma fuga. Uma das maiores obras do repertório violonístico.',
    ensina: 'Praticamente todas as técnicas do instrumento, mais resistência e arquitetura de obra de recital inteiro.',
    estudar: [
      'Memorize a progressão da Folia antes de qualquer coisa.',
      'Estude as variações em grupos de três ou quatro.',
      'Trate a fuga como obra à parte, marcando as entradas do sujeito.',
      'Monte o plano de intensidade do conjunto: vinte variações precisam de arco.'
    ],
    aulas: ['n6.1.1', 'n6.3.4']
  },
  {
    id: 'ponce-suite-la', titulo: 'Suite en La menor ("de Weiss")', compositor: 'Manuel Ponce', morte: 1948,
    periodo: 'moderno', nivel: 6, tom: 'Lá menor', minutos: 12,
    tecnicas: ['polifonia', 'arpejo', 'ritmo'],
    sobre: 'Pastiche barroco que Ponce escreveu a pedido de Segovia, apresentado durante anos como obra inédita de Weiss.',
    ensina: 'Estilo barroco com escrita idiomática moderna; articulação e sustentação.',
    estudar: [
      'Toque com linguagem barroca: pulso firme, articulação variada, pouco vibrato.',
      'Comece pelo Prelúdio e pela Allemande.',
      'Sustente as vozes pelo valor escrito.',
      'Na repetição das danças, varie a articulação.'
    ],
    aulas: ['n6.1.10', 'n6.3.4']
  }
];

export const obraPorId = (id) => OBRAS.find((o) => o.id === id) || null;
export const COMPOSITORES = [...new Set(OBRAS.map((o) => o.compositor))].sort();
export const NIVEIS_REP = [...new Set(OBRAS.map((o) => o.nivel))].sort((a, b) => a - b);
export const nomePeriodo = (id) => (PERIODOS.find((p) => p.id === id) || { nome: id }).nome;
export const nomeTecnicaRep = (id) => (TECNICAS_REP.find((t) => t.id === id) || { nome: id }).nome;
