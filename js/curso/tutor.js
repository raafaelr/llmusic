// Base de conhecimento do tutor pedagógico.
//
// IMPORTANTE, e declarado na tela: isto NÃO é uma inteligência artificial
// conversacional. É um tutor baseado em regras, que funciona offline, sem
// enviar nada para servidor nenhum. Ele faz quatro coisas bem definidas:
//
//   1. diagnostica problemas a partir de um sintoma que você escolhe;
//   2. explica conceitos a partir de um glossário e das aulas do curso;
//   3. monta um plano de exercício concreto para uma competência;
//   4. recomenda o que estudar a seguir, com base no seu progresso real.
//
// Ele não escuta você tocar e não avalia execução por áudio. Onde o app
// confere notas (blocos de microfone nas aulas e exercícios), isso está
// explicitado; o resto é orientação, não avaliação.

// ---------------------------------------------------------------- diagnóstico
// Árvore de sintomas. Cada folha traz causa provável, o que fazer agora,
// aulas e técnicas relacionadas.
export const SINTOMAS = [
  {
    id: 'som',
    nome: 'O som não sai bom',
    opcoes: [
      {
        id: 'chiado', nome: 'A nota chia ou morre',
        causa: 'Quase sempre é o dedo da mão esquerda longe do traste, pressão insuficiente ou o dedo encostando na corda vizinha.',
        fazer: [
          'Ponha o dedo bem junto ao traste — não em cima dele, nem no meio da casa.',
          'Use a ponta do dedo, com a unha curta, e mantenha a junta curvada.',
          'Procure o ponto mínimo de pressão: aperte até parar de chiar e não mais que isso.',
          'Verifique se algum dedo vizinho está encostando na corda.'
        ],
        aulas: ['n1.2.5', 'n2.2.1'], tecnicas: []
      },
      {
        id: 'estalo', nome: 'Há um estalo ou arranhão no ataque',
        causa: 'Unha com rampa mal lixada ou áspera, ou ataque de frente em vez de deslizar.',
        fazer: [
          'Lixe a unha em rampa: o ponto de contato fica de um lado e a corda sai pela ponta.',
          'Polir é obrigatório: lixa 600, depois 1000, depois polidor.',
          'Ataque de lado: a corda deve deslizar pela unha, não bater nela.',
          'Teste na 1ª corda solta, lentamente, até o clique sumir.'
        ],
        aulas: ['n6.2.1'], tecnicas: ['tirando', 'apoyando']
      },
      {
        id: 'fino', nome: 'O som é fino, sem corpo',
        causa: 'Ataque perto demais do cavalete, ou só unha sem polpa.',
        fazer: [
          'Toque entre a boca e o cavalete, no ponto natural.',
          'Deixe a polpa tocar a corda antes da unha: é a polpa que dá corpo.',
          'Experimente cinco pontos de ataque diferentes e ouça a diferença.',
          'Se quiser mais volume, aumente a velocidade do ataque, não a força.'
        ],
        aulas: ['n5.2.7', 'n6.2.1'], tecnicas: ['timbre']
      },
      {
        id: 'desigual', nome: 'Uns dedos soam mais forte que outros',
        causa: 'Unhas de formatos diferentes entre i, m e a, ou ponto de ataque diferente a cada dedo.',
        fazer: [
          'Compare as rampas das três unhas: elas precisam ser compatíveis.',
          'Toque a mesma corda com i, m e a em sequência e grave.',
          'Treine com acentos deslocados: acentue o a, depois o m, depois o i.',
          'Trabalhe o anelar isoladamente; ele costuma ser o mais fraco.'
        ],
        aulas: ['n5.2.2', 'n6.2.1'], tecnicas: []
      }
    ]
  },
  {
    id: 'maoesquerda',
    nome: 'Problema na mão esquerda',
    opcoes: [
      {
        id: 'pestana', nome: 'A pestana não sai limpa',
        causa: 'Dedo chato demais, posição do polegar errada ou pressão excessiva no lugar errado.',
        fazer: [
          'Gire levemente o dedo 1 para o lado de fora: a lateral do dedo é mais dura que a polpa.',
          'Ponha o polegar atrás, na altura do dedo 2, no meio do braço.',
          'Pressione mais perto do traste, não no meio da casa.',
          'Toque corda por corda e descubra qual está abafada; corrija só ela.',
          'Alivie: pestana apertada demais cansa e não melhora o som.'
        ],
        aulas: ['n3.2.4', 'n4.2.3'], tecnicas: ['pestana', 'meia-pestana']
      },
      {
        id: 'troca', nome: 'Demoro para trocar de acorde',
        causa: 'Os dedos saem todos juntos e procuram a forma nova no ar.',
        fazer: [
          'Procure as notas comuns entre os dois acordes e mantenha esses dedos parados.',
          'Monte o acorde novo "no ar" dez vezes, sem tocar, olhando a mão.',
          'Troque no tempo com metrônomo a 50 BPM, um acorde por compasso.',
          'Alivie a pressão antes de mover, sem perder o contato com as cordas.'
        ],
        aulas: ['n2.2.8', 'n3.2.8'], tecnicas: ['mudancas']
      },
      {
        id: 'dedo4', nome: 'O dedo 4 não obedece',
        causa: 'Os dedos 3 e 4 compartilham tendões. É anatomia, não falta de força.',
        fazer: [
          'Faça o exercício do dedo que fica: 1, 2, 3 e 4 em casas seguidas, todos apertados.',
          'Trabalhe o par 3-4 isoladamente, muito devagar, olhando a mão.',
          'Nunca force: independência é controle, não força.',
          'Cinco minutos por dia rendem mais que trinta uma vez por semana.'
        ],
        aulas: ['n3.2.8'], tecnicas: []
      },
      {
        id: 'posicao', nome: 'Atraso quando mudo de posição',
        causa: 'A mudança está sendo feita em três movimentos: soltar, procurar, apertar.',
        fazer: [
          'Use dedo-guia: alivie a pressão e deslize pela corda sem perder o contato.',
          'O polegar sai primeiro e o antebraço leva a mão.',
          'Em saltos grandes, encurte a nota anterior em vez de atrasar a chegada.',
          'Isole as duas notas da mudança e treine só elas, reduzindo o tempo disponível.'
        ],
        aulas: ['n3.2.8', 'n4.2.1'], tecnicas: ['mudancas', 'saltos']
      }
    ]
  },
  {
    id: 'velocidade',
    nome: 'Não consigo acelerar',
    opcoes: [
      {
        id: 'trava', nome: 'Travo quando aumento o andamento',
        causa: 'Amplitude de movimento grande demais e tensão acumulada.',
        fazer: [
          'Filme a mão: se os dedos sobem muito, a velocidade tem teto baixo.',
          'Trabalhe preparação antecipada: o próximo dedo já encostado antes de tocar.',
          'Use ritmos pontuados nas duas direções antes do ritmo regular.',
          'Suba de 4 em 4 BPM, com um minuto perfeito como condição para avançar.'
        ],
        aulas: ['n5.2.2'], tecnicas: []
      },
      {
        id: 'desigualvel', nome: 'Fica rápido mas irregular',
        causa: 'Velocidade construída sem igualdade: o ouvido interno não foi treinado no andamento.',
        fazer: [
          'Volte dois níveis de andamento e busque igualdade absoluta.',
          'Grave e ouça: a desigualdade aparece na gravação, não enquanto você toca.',
          'Treine com clique no contratempo.',
          'Suba só quando um minuto inteiro sair perfeito.'
        ],
        aulas: ['n6.2.3'], tecnicas: []
      },
      {
        id: 'dor', nome: 'Sinto dor ou o antebraço endurece',
        causa: 'Tensão. Isto não é treino: é lesão em formação.',
        fazer: [
          'Pare agora. Dor nunca faz parte do aprendizado.',
          'Volte amanhã num andamento bem menor, com pausas a cada dez minutos.',
          'Revise a postura: altura do violão, ângulo do pulso, pressão da mão esquerda.',
          'Se a dor persistir por dias, procure um médico. O app não substitui avaliação clínica.'
        ],
        aulas: ['n4.2.9', 'n1.2.6'], tecnicas: []
      }
    ]
  },
  {
    id: 'leitura',
    nome: 'Dificuldade com a partitura',
    opcoes: [
      {
        id: 'notas', nome: 'Demoro para reconhecer as notas',
        causa: 'A associação símbolo-nome ainda não é automática.',
        fazer: [
          'Faça o exercício de identificação de notas, dez rodadas por dia.',
          'Diga o nome das notas em voz alta, sem o instrumento, lendo qualquer partitura.',
          'Comece por três notas numa corda só e amplie aos poucos.',
          'Nunca memorize "este símbolo é esta casa": isso trava mais adiante.'
        ],
        aulas: ['n1.3.4', 'n2.1.1'], tecnicas: ['leitura']
      },
      {
        id: 'ritmo', nome: 'Erro o ritmo',
        causa: 'Falta de subdivisão: as notas longas não têm grade de referência.',
        fazer: [
          'Conte em voz alta subdividindo, mesmo nas notas longas.',
          'Bata o ritmo com palmas antes de tocar.',
          'Use o metrônomo com clique no tempo 1 apenas, depois no contratempo.',
          'Em figuras pontuadas, conte sempre em colcheias.'
        ],
        aulas: ['n1.3.8', 'n2.1.4'], tecnicas: []
      },
      {
        id: 'paro', nome: 'Paro toda hora quando leio',
        causa: 'Material difícil demais e hábito de corrigir durante a leitura.',
        fazer: [
          'Leia material em que você acerte cerca de 80% na primeira tentativa.',
          'Não pare: uma nota errada no tempo certo é melhor que a nota certa fora do tempo.',
          'Mantenha os olhos um compasso à frente das mãos.',
          'Material novo todos os dias; nunca repita a mesma peça de leitura na semana.'
        ],
        aulas: ['n5.2.9'], tecnicas: ['leitura']
      }
    ]
  },
  {
    id: 'memoria',
    nome: 'Memória e apresentação',
    opcoes: [
      {
        id: 'esqueco', nome: 'Decoro e esqueço',
        causa: 'A peça foi memorizada só pela memória muscular, que é a mais frágil.',
        fazer: [
          'Memorize também pela análise: escreva a sequência de acordes de cada seção.',
          'Marque pontos de partida a cada oito compassos e treine começar de cada um.',
          'Memorize de trás para frente: comece pelos últimos compassos.',
          'Toque a peça mentalmente, sem o instrumento, do início ao fim.'
        ],
        aulas: ['n5.2.10'], tecnicas: ['memorizacao']
      },
      {
        id: 'nervoso', nome: 'Fico nervoso quando alguém escuta',
        causa: 'A situação de tocar para alguém nunca foi treinada — só a peça foi.',
        fazer: [
          'Ensaie a situação: entrar, sentar, respirar, começar.',
          'Toque para uma pessoa por semana, mesmo que seja alguém de casa.',
          'Combine um plano B: se der branco, siga para o próximo ponto de partida.',
          'Três respirações lentas antes de começar. Nervosismo é universal, não indica despreparo.'
        ],
        aulas: ['n5.2.10', 'n6.2.5'], tecnicas: []
      }
    ]
  },
  {
    id: 'estudo',
    nome: 'Não sei como estudar',
    opcoes: [
      {
        id: 'oque', nome: 'Não sei o que estudar hoje',
        causa: 'Falta de rotina definida.',
        fazer: [
          'Abra Meu Plano de Estudos: há rotinas prontas de 20, 30, 45, 60 e 90 minutos.',
          'Escolha a que cabe no seu tempo de hoje e siga os blocos na ordem.',
          'Marque cada bloco ao terminar e registre a sessão no fim.',
          'Regularidade rende mais que sessões longas: cinco dias curtos vencem um dia longo.'
        ],
        aulas: ['n7.1.2'], tecnicas: []
      },
      {
        id: 'semprogresso', nome: 'Estudo mas não vejo progresso',
        causa: 'Provavelmente repetição sem isolamento, e ausência de registro para comparar.',
        fazer: [
          'Pare de repetir a peça inteira: escolha dois pontos de trabalho por sessão.',
          'Construa um exercício para cada um: isolar, progredir, medir, transferir.',
          'Grave a mesma peça uma vez por mês, nas mesmas condições, e compare.',
          'Anote os andamentos atingidos: é a evidência objetiva do progresso.'
        ],
        aulas: ['n7.2.3', 'n6.2.8'], tecnicas: []
      },
      {
        id: 'trecho', nome: 'Erro sempre no mesmo trecho',
        causa: 'O trecho está sendo estudado dentro do contexto, no andamento, e o erro se consolida.',
        fazer: [
          'Isole o trecho: só os compassos problemáticos, fora da peça.',
          'Descubra o que exatamente falha: mudança de posição? dedilhado? leitura? ritmo?',
          'Trabalhe só esse componente, muito devagar, dez repetições certas seguidas.',
          'Estude de trás para frente: comece pelas últimas notas do trecho.',
          'Só volte ao contexto quando o trecho isolado sair dez vezes seguidas.'
        ],
        aulas: ['n7.2.3'], tecnicas: []
      }
    ]
  },
  {
    id: 'instrumento',
    nome: 'Problema no instrumento',
    opcoes: [
      {
        id: 'desafina', nome: 'O violão desafina rápido',
        causa: 'Cordas novas ainda assentando, mudança de temperatura ou tarraxa escorregando.',
        fazer: [
          'Cordas novas levam alguns dias para estabilizar: estique-as com cuidado após afinar.',
          'Afine sempre subindo até a nota, nunca descendo.',
          'Evite deixar o violão perto de janela, sol ou ar-condicionado.',
          'Se uma corda específica cai sempre, verifique se a tarraxa está folgada.'
        ],
        aulas: ['n1.1.6'], tecnicas: []
      },
      {
        id: 'trasteja', nome: 'Uma corda trasteja',
        causa: 'Ação baixa, traste alto, curvatura do braço ou corda velha.',
        fazer: [
          'Veja se o trastejo acontece em casas específicas: isso aponta traste alto.',
          'Se acontece em todas as casas da corda, pode ser ação baixa demais.',
          'Troque a corda primeiro: é o teste mais barato.',
          'Persistindo, leve a um luthier para regulagem de ação e tensor.'
        ],
        aulas: ['n1.1.7'], tecnicas: []
      },
      {
        id: 'cordas', nome: 'Quando devo trocar as cordas',
        causa: 'Cordas gastas perdem brilho, afinação e harmônicos.',
        fazer: [
          'Sinais: som abafado, afinação instável entre casas, bordões escurecidos ou com sulcos.',
          'Para estudo diário, de dois a três meses é um intervalo razoável.',
          'Troque uma de cada vez se quiser manter a tensão do braço estável.',
          'Depois da troca, espere alguns dias até a afinação assentar.'
        ],
        aulas: ['n1.1.7'], tecnicas: []
      }
    ]
  }
];

// ---------------------------------------------------------------- glossário
// Termos explicados de forma curta, com link para a aula que desenvolve.
export const GLOSSARIO = [
  { termo: 'Apoyando', texto: 'Toque em que o dedo, depois de tocar a corda, descansa na corda vizinha. Produz som mais cheio e é usado em melodias.', aula: 'n1.4.2' },
  { termo: 'Tirando', texto: 'Toque em que o dedo recolhe para dentro da mão sem encostar na corda vizinha. É o toque dos arpejos.', aula: 'n1.4.1' },
  { termo: 'Pestana', texto: 'O dedo 1 pressiona várias cordas ao mesmo tempo, funcionando como uma pestana móvel.', aula: 'n3.2.4' },
  { termo: 'Campo harmônico', texto: 'Os sete acordes formados sobre os graus de uma escala. Em Dó maior: C, Dm, Em, F, G, Am e Bdim.', aula: 'n3.1.6' },
  { termo: 'Cadência', texto: 'Fórmula harmônica que encerra uma frase. As principais são a autêntica (V–I), a plagal (IV–I) e a de engano (V–vi).', aula: 'n4.1.4' },
  { termo: 'Dominante secundária', texto: 'Acorde de sétima que funciona como dominante de um grau que não é a tônica. Em Dó, o A7 é a dominante de Dm.', aula: 'n4.1.5' },
  { termo: 'Empréstimo modal', texto: 'Uso de um acorde do modo paralelo dentro de uma tonalidade, sem modular. Em Dó maior, o Fm é o caso mais comum.', aula: 'n5.1.2' },
  { termo: 'Modulação', texto: 'Mudança de centro tonal. Pode ser feita por pivô, por dominante direta, por cromatismo ou por enarmonia.', aula: 'n5.1.3' },
  { termo: 'Substituição de trítono', texto: 'Trocar um acorde dominante por outro a um trítono de distância: os dois compartilham o mesmo trítono.', aula: 'n5.1.4' },
  { termo: 'Modos gregos', texto: 'As sete maneiras de ouvir a mesma escala, cada uma com um centro próprio: jônio, dórico, frígio, lídio, mixolídio, eólio e lócrio.', aula: 'n6.1.2' },
  { termo: 'Cadência andaluza', texto: 'Descida i – VII – VI – V, típica da música espanhola. Termina na dominante, que soa como repouso no modo frígio.', aula: 'n5.3.6' },
  { termo: 'Tremolo', texto: 'Técnica em que três dedos repetem rapidamente a mesma nota aguda sobre um baixo tocado pelo polegar (p-a-m-i).', aula: 'n5.2.3' },
  { termo: 'Rasgueado', texto: 'Ataque em que os dedos se abrem em sequência rápida sobre as cordas. O último ataque cai no tempo.', aula: 'n5.2.4' },
  { termo: 'Harmônico natural', texto: 'Som obtido encostando o dedo sobre o traste de uma corda solta. Na casa 12 soa uma oitava acima.', aula: 'n5.2.5' },
  { termo: 'Harmônico artificial', texto: 'Harmônico de uma nota pisada: o indicador da mão direita encosta doze trastes acima e outro dedo ataca.', aula: 'n5.2.5' },
  { termo: 'Vibrato', texto: 'No violão é longitudinal: a mão oscila no sentido do braço, com pressão constante.', aula: 'n5.2.6' },
  { termo: 'Portamento', texto: 'Deslizar entre posições deixando o caminho discretamente audível. É escolha expressiva, não efeito escrito.', aula: 'n5.2.6' },
  { termo: 'Glissando', texto: 'Deslizar entre duas notas com a corda soando, de modo que o caminho seja ouvido. Vem escrito na partitura.', aula: 'n5.2.6' },
  { termo: 'Ponticello', texto: 'Tocar perto do cavalete: som brilhante e cortante.', aula: 'n5.2.7' },
  { termo: 'Tasto (dolce)', texto: 'Tocar sobre a boca: som redondo e escuro.', aula: 'n5.2.7' },
  { termo: 'Forma-sonata', texto: 'Exposição, desenvolvimento e reexposição. O conflito é de tonalidades: o segundo tema sai na dominante e volta na tônica.', aula: 'n5.1.8' },
  { termo: 'Rondó', texto: 'Forma com refrão que volta sempre, intercalado com episódios diferentes: A B A C A.', aula: 'n5.1.7' },
  { termo: 'Contraponto', texto: 'Arte de combinar melodias independentes. Os movimentos são contrário, oblíquo, direto e paralelo.', aula: 'n5.1.6' },
  { termo: 'Fuga', texto: 'Forma contrapontística com sujeito, resposta, contrassujeito, episódios, estreito e pedal final.', aula: 'n6.1.1' },
  { termo: 'Série harmônica', texto: 'Conjunto de frequências que uma corda produz ao vibrar inteira e em divisões. É o que define o timbre.', aula: 'n6.1.9' },
  { termo: 'Rubato', texto: 'Tempo roubado de uma nota e devolvido em seguida. Se não for devolvido, é andamento irregular.', aula: 'n5.3.3' },
  { termo: 'Dedo-guia', texto: 'Dedo que desliza pela corda numa mudança de posição, sem perder o contato, mantendo a referência de distância.', aula: 'n3.2.8' },
  { termo: 'Prática intercalada', texto: 'Alternar conteúdos diferentes na mesma sessão. Rende pior no dia e muito melhor na semana seguinte.', aula: 'n7.1.2' },
  { termo: 'Domínio público', texto: 'Obra cujo prazo de proteção acabou. No Brasil, 70 anos após o 1º de janeiro seguinte à morte do autor.', aula: 'n8.1.2' }
];

// ---------------------------------------------------------------- gerador de exercício
// Para cada competência, o tutor monta um plano concreto seguindo a mesma
// estrutura ensinada na aula 7.2.3: objetivo, isolamento, progressão, medida,
// critério de domínio e transferência.
export const COMPETENCIAS = [
  {
    id: 'arpejo', nome: 'Arpejo de mão direita', bpmBase: 60, bpmMeta: 120, notasPorClique: 4,
    objetivo: 'Tocar p-i-m-a com som igual entre os dedos no andamento alvo, sem tensão.',
    isolamento: 'Uma harmonia só, mão esquerda parada. O problema é só da mão direita.',
    progressao: [
      'p-i-m-a com pausa entre cada nota, colocando o próximo dedo na corda antes de tocar.',
      'Sem pausa, no andamento inicial, por um minuto inteiro.',
      'Em ritmo pontuado (longa-curta) e depois invertido (curta-longa).',
      'Na ordem invertida p-a-m-i, no mesmo andamento.',
      'De volta ao regular, subindo 4 BPM por vez.'
    ],
    criterio: 'Um minuto contínuo no andamento alvo, com os quatro dedos iguais em volume numa gravação.',
    transferencia: 'O arpejo da peça que você estuda, no andamento dela.',
    aulas: ['n4.2.2', 'n5.2.2']
  },
  {
    id: 'escala', nome: 'Escalas', bpmBase: 60, bpmMeta: 132, notasPorClique: 2,
    objetivo: 'Escala de duas oitavas com igualdade de som e sincronia entre as mãos.',
    isolamento: 'Uma posição só, sem cordas soltas, sem mudanças de posição.',
    progressao: [
      'Duas notas por clique, atenção à sincronia entre as mãos.',
      'Ritmos pontuados nas duas direções.',
      'Quatro notas por clique no andamento inicial.',
      'Mesma escala em outra posição do braço.',
      'Subindo numa posição e descendo em outra.'
    ],
    criterio: 'Duas oitavas no andamento alvo, subindo e descendo, sem nenhuma nota abafada.',
    transferencia: 'A passagem de escala da sua peça.',
    aulas: ['n5.2.1']
  },
  {
    id: 'pestana', nome: 'Pestana', bpmBase: 50, bpmMeta: 90, notasPorClique: 1,
    objetivo: 'Pestana com as seis cordas soando, sem tensão, entrando e saindo no tempo.',
    isolamento: 'Uma forma de pestana só, sem contexto musical.',
    progressao: [
      'Pestana parada: toque corda por corda e corrija a que estiver abafada.',
      'Pestana na casa 1, depois 3, 5 e 7 — as casas altas são mais fáceis.',
      'Entrar e sair da pestana no tempo, um compasso cada.',
      'Alternar pestana e acorde aberto a cada compasso.',
      'Pestana durante quatro compassos seguidos sem perder notas.'
    ],
    criterio: 'Seis cordas soando na casa 1, entrando no tempo, sem dor e sem endurecer o antebraço.',
    transferencia: 'O trecho com pestana da sua peça.',
    aulas: ['n3.2.4', 'n4.2.3']
  },
  {
    id: 'ligado', nome: 'Ligados', bpmBase: 54, bpmMeta: 120, notasPorClique: 2,
    objetivo: 'Ligados ascendentes e descendentes com o mesmo volume da nota atacada.',
    isolamento: 'Dois dedos, uma corda, sem mão direita entre as notas.',
    progressao: [
      'Ligado ascendente 1-2, dez repetições, ouvindo o volume da segunda nota.',
      'Os pares 2-3 e 3-4.',
      'Ligados descendentes, puxando a corda levemente para o lado.',
      'Ascendente e descendente combinados (1-2-1).',
      'Em todas as cordas, subindo o andamento.'
    ],
    criterio: 'A nota ligada soa com o mesmo volume da atacada, em qualquer par de dedos.',
    transferencia: 'Os ligados da sua peça.',
    aulas: ['n4.2.4']
  },
  {
    id: 'tremolo', nome: 'Tremolo', bpmBase: 50, bpmMeta: 110, notasPorClique: 4,
    objetivo: 'Três ataques iguais em volume e espaçamento, com o polegar sem acentuar.',
    isolamento: 'Só a-m-i na 1ª corda solta, sem polegar.',
    progressao: [
      'a-m-i sem polegar, muito devagar, ouvindo a igualdade.',
      'Invertido: i-m-a — expõe o que a ordem habitual esconde.',
      'Com acentos deslocados: acentue o a, depois o m, depois o i.',
      'Com polegar, p-a-m-i, com pausa longa entre as células.',
      'Contínuo, um minuto inteiro, subindo 4 BPM por vez.'
    ],
    criterio: 'Um minuto contínuo no andamento alvo; numa gravação ouvida de olhos fechados, não se distingue qual dedo tocou cada nota.',
    transferencia: 'A peça de tremolo do seu repertório.',
    aulas: ['n5.2.3']
  },
  {
    id: 'posicao', nome: 'Mudanças de posição', bpmBase: 54, bpmMeta: 112, notasPorClique: 1,
    objetivo: 'Chegar na posição nova exatamente no tempo, sem interromper o som.',
    isolamento: 'Duas notas: a última antes e a primeira depois da mudança.',
    progressao: [
      'Quatro tempos entre as duas notas, com dedo-guia deslizando.',
      'Dois tempos.',
      'Um tempo.',
      'Direto, no tempo, sem intervalo.',
      'Com as notas ao redor, de volta ao contexto.'
    ],
    criterio: 'Dez repetições seguidas chegando no tempo, sem olhar para o braço.',
    transferencia: 'A mudança de posição da sua peça.',
    aulas: ['n3.2.8', 'n4.2.1']
  },
  {
    id: 'leitura', nome: 'Leitura à primeira vista', bpmBase: 44, bpmMeta: 72, notasPorClique: 1,
    objetivo: 'Atravessar uma peça desconhecida sem parar.',
    isolamento: 'Material em que você acerte cerca de 80% na primeira tentativa.',
    progressao: [
      'Leitura prévia de trinta segundos: armadura, compasso, andamento, região, repetições.',
      'Ler só o ritmo, batendo palmas.',
      'Ler as alturas sem ritmo, dizendo os nomes.',
      'Ler tudo, no andamento mais lento que você conseguir manter sem parar.',
      'Peça nova no dia seguinte: quantidade vence repetição.'
    ],
    criterio: 'Uma peça nova de 16 compassos atravessada sem nenhuma parada, com metrônomo.',
    transferencia: 'Qualquer partitura nova que apareça.',
    aulas: ['n5.2.9']
  },
  {
    id: 'polifonia', nome: 'Polifonia', bpmBase: 50, bpmMeta: 88, notasPorClique: 1,
    objetivo: 'Duas ou três vozes em planos sonoros distintos, com a duração escrita respeitada.',
    isolamento: 'Cada voz sozinha, no tempo, com o som que ela terá no final.',
    progressao: [
      'Cada voz separadamente, do começo ao fim.',
      'Duas a duas: baixo e melodia, melodia e voz interna, baixo e voz interna.',
      'Todas, com a melodia em primeiro plano.',
      'Todas, destacando o baixo; depois, destacando a voz interna.',
      'De volta ao equilíbrio escolhido.'
    ],
    criterio: 'Numa gravação, um ouvinte consegue seguir qualquer uma das vozes do começo ao fim.',
    transferencia: 'O trecho polifônico da sua peça.',
    aulas: ['n5.2.8', 'n6.2.4']
  }
];

export const competenciaPorId = (id) => COMPETENCIAS.find((c) => c.id === id) || null;

// Monta o plano concreto, já com os andamentos calculados.
export function montarPlano(comp, bpmAtual) {
  const inicio = Math.max(30, Math.min(bpmAtual || comp.bpmBase, comp.bpmMeta));
  const degraus = [];
  for (let b = inicio; b <= comp.bpmMeta; b += 4) degraus.push(b);
  if (degraus[degraus.length - 1] !== comp.bpmMeta) degraus.push(comp.bpmMeta);
  const semanas = Math.max(1, Math.ceil(degraus.length / 6));
  return {
    objetivo: comp.objetivo,
    isolamento: comp.isolamento,
    etapas: comp.progressao,
    degraus,
    inicio,
    meta: comp.bpmMeta,
    notasPorClique: comp.notasPorClique,
    criterio: comp.criterio,
    transferencia: comp.transferencia,
    estimativa: semanas === 1 ? 'cerca de uma semana' : 'cerca de ' + semanas + ' semanas',
    aulas: comp.aulas
  };
}
