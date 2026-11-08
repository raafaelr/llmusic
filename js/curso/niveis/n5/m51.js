// NÍVEL 5 — MÓDULO 5.1: Teoria avançada
// Harmonia tonal avançada, empréstimo modal, modulação, cromatismo, acordes
// estendidos, contraponto a várias vozes, formas musicais e história.
//
// Cada aula segue a mesma anatomia:
//   blocos  → a aula em si (teoria + representação visual + prática)
//   quiz    → verificação de compreensão (nota mínima 75%)
//   pratica → avaliação prática com critério de domínio

export const M51 = {
  id: '5.1',
  titulo: 'Teoria avançada',
  resumo: 'A harmonia depois do campo harmônico: empréstimos, cromatismo, tensões, contraponto e as formas que organizam uma peça inteira.',
  aulas: [
    {
      id: 'n5.1.1',
      titulo: 'Harmonia tonal avançada',
      resumo: 'Funções, regiões e o mapa inteiro de um tom.',
      minutos: 20,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n4.1.4', 'n4.1.7'],
      status: 'implementado',
      cobre: ['Harmonia tonal avançada'],
      objetivo: 'Enxergar uma tonalidade como um território com regiões e caminhos, e não como uma lista de sete acordes.',
      blocos: [
        { t: 'p', x: 'Até aqui a tonalidade foi uma lista: sete acordes, numerados de I a vii. Isso funciona para harmonizar uma melodia simples, mas não explica por que uma peça de Sor soa como Sor e uma de Bach soa como Bach. A harmonia tonal avançada troca a lista por um *mapa*.' },
        { t: 'h', x: 'Três funções, não sete acordes' },
        { t: 'p', x: 'Todo acorde de um tom cumpre uma de três funções: *tônica* (repouso), *subdominante* (afastamento) e *dominante* (tensão que pede volta). Acordes diferentes podem cumprir a mesma função — e é por isso que se pode trocar um pelo outro sem destruir a frase.' },
        {
          t: 'tabela',
          cab: ['Função', 'Graus em Dó maior', 'O que faz'],
          linhas: [
            ['Tônica', 'C (I), Am (vi), Em (iii)', 'Repouso. Em (iii) é o mais ambíguo: serve de ponte para a dominante.'],
            ['Subdominante', 'F (IV), Dm (ii)', 'Afasta do centro sem criar tensão forte. Prepara a dominante.'],
            ['Dominante', 'G (V), Bdim (vii°)', 'Tensão máxima. O trítono Si–Fá pede resolução em Dó–Mi.']
          ],
          legenda: 'Substituir um acorde por outro da mesma função é a primeira ferramenta do arranjador.'
        },
        { t: 'h', x: 'O ciclo que organiza tudo' },
        { t: 'p', x: 'A harmonia tonal tem uma direção preferida: as raízes caminham de *quinta em quinta descendente*. Em Dó maior: Em → Am → Dm → G → C. Esse é o esqueleto de milhares de peças, e cada link soa "certo" porque a fundamental de um acorde vira a quinta do seguinte.' },
        { t: 'ciclo', legenda: 'No ciclo das quintas, caminhar no sentido anti-horário (Mi → Lá → Ré → Sol → Dó) é o movimento harmônico mais forte que existe.' },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'e4+g4+b4/o | a3+c4+e4/o | d4+f4+a4/o | g3+b3+d4/o | c4+e4+g4/o',
          legenda: 'Em – Am – Dm – G – C: o ciclo de quintas dentro do tom. Ouça como cada acorde parece empurrar o seguinte.'
        },
        {
          t: 'acorde', legenda: 'O mesmo ciclo no violão. Toque na ordem e repare que a mão quase não muda de região.',
          lista: [
            { nome: 'Em (iii)', cordas: [0, 2, 2, 0, 0, 0], dedos: [null, 2, 3, null, null, null] },
            { nome: 'Am (vi)', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
            { nome: 'Dm (ii)', cordas: [-1, -1, 0, 2, 3, 1], dedos: [null, null, null, 2, 3, 1] },
            { nome: 'G (V)', cordas: [3, 2, 0, 0, 0, 3], dedos: [2, 1, null, null, null, 3] },
            { nome: 'C (I)', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] }
          ]
        },
        { t: 'h', x: 'Regiões: tons vizinhos' },
        { t: 'p', x: 'Uma peça tonal raramente fica no mesmo tom do começo ao fim. Ela visita *regiões* vizinhas — tons que compartilham quase todas as notas com o principal. Quanto mais próximo no ciclo das quintas, mais natural é a viagem.' },
        {
          t: 'lista', itens: [
            '*Relativa menor* (Am em Dó maior): as mesmas sete notas. A viagem mais curta que existe.',
            '*Dominante* (Sol): uma alteração de diferença (Fá sustenido). Para onde quase toda peça maior vai na primeira parte.',
            '*Subdominante* (Fá): uma alteração (Si bemol). Soa como relaxamento, não como tensão.',
            '*Relativas das vizinhas* (Em, Dm): dois passos de distância, ainda confortáveis.',
            'Tons distantes (Fá sustenido maior, por exemplo) existem, mas pedem preparação — é assunto da aula de harmonia cromática.'
          ]
        },
        { t: 'h', x: 'Encadeamento: a condução de vozes' },
        { t: 'p', x: 'O que faz um encadeamento soar bem não é a sequência de letras, e sim como cada *voz* se move. Três regras resolvem a maior parte dos casos: mantenha a nota comum, mova as outras pela menor distância possível e deixe o baixo caminhar com personalidade própria.' },
        {
          t: 'pauta', bpm: 56, numerar: true,
          txt: 'c4+e4+g4/b | c4+f4+a4/b | b3+f4+g4/b | c4+e4+g4/b',
          legenda: 'C – F – G – C com condução cuidada: o Dó se mantém no primeiro par, o Fá se mantém no segundo e o Si sobe meio tom para o Dó final.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Pensar em acordes como letras isoladas.', certo: 'Pense em funções: tônica, subdominante, dominante.' },
            { erro: 'Fazer todas as vozes saltarem juntas.', certo: 'Mantenha as notas comuns e mova o resto por grau.' },
            { erro: 'Tratar vi e iii como "menores quaisquer".', certo: 'Os dois têm função de tônica: servem para adiar o repouso sem quebrá-lo.' },
            { erro: 'Achar que mudar de tom é sair da peça.', certo: 'Visitar a dominante é parte da forma, não um desvio.' }
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Funções e regiões', rodadas: 6,
          perguntas: [
            { texto: 'Em Dó maior, qual par de acordes tem função de tônica junto com o I?', opcoes: ['Am e Em', 'F e Dm', 'G e Bdim', 'Dm e G'], correta: 0, explicacao: 'vi e iii compartilham notas com o I e servem de repouso adiado.' },
            { texto: 'Qual é o movimento de raiz mais forte da harmonia tonal?', opcoes: ['Quinta descendente', 'Segunda ascendente', 'Terça descendente', 'Sétima ascendente'], correta: 0, explicacao: 'É o movimento V → I, repetido em cadeia no ciclo.' },
            { texto: 'A região mais próxima de Dó maior é:', opcoes: ['Lá menor', 'Fá sustenido maior', 'Mi bemol maior', 'Si maior'], correta: 0, explicacao: 'A relativa menor usa exatamente as mesmas sete notas.' },
            { texto: 'Qual intervalo dá ao V7 a sua tensão característica?', opcoes: ['O trítono entre a terça e a sétima', 'A oitava justa', 'A quinta justa', 'A segunda maior'], correta: 0, explicacao: 'Em G7, Si e Fá formam o trítono que resolve em Dó e Mi.' },
            { texto: 'Numa boa condução de vozes, o que se faz com a nota comum entre dois acordes?', opcoes: ['Mantém-se na mesma voz', 'Dobra-se na oitava', 'Omite-se', 'Transfere-se para o baixo'], correta: 0, explicacao: 'Manter a nota comum é o que torna a passagem suave.' },
            { texto: 'O grau IV cumpre qual função?', opcoes: ['Subdominante', 'Tônica', 'Dominante', 'Nenhuma'], correta: 0, explicacao: 'Afasta do centro e prepara a dominante.' }
          ]
        },
        {
          t: 'check', chave: 'funcoes', titulo: 'Leve para o instrumento',
          itens: [
            'Toquei o ciclo Em–Am–Dm–G–C em Dó e depois em Sol.',
            'Substituí o I por vi no fim de uma frase e ouvi a diferença.',
            'Encadeei C–F–G–C mantendo as notas comuns.',
            'Encontrei, numa peça que estudo, o momento em que ela vai para a dominante.'
          ]
        },
        {
          t: 'resumo', itens: [
            'Três funções organizam os sete graus: tônica, subdominante e dominante.',
            'Acordes da mesma função se substituem entre si.',
            'O movimento de quinta descendente é o motor da harmonia tonal.',
            'Regiões vizinhas são tons que compartilham quase todas as notas.',
            'A qualidade de um encadeamento está na condução das vozes, não nas letras.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as três funções da harmonia tonal?', opcoes: ['Tônica, subdominante e dominante', 'Maior, menor e diminuta', 'Grave, média e aguda', 'Melodia, harmonia e ritmo'], correta: 0, explicacao: 'Toda a lógica tonal se resume a repouso, afastamento e tensão.' },
        { texto: 'Em Dó maior, trocar o acorde final C por Am produz:', opcoes: ['Uma cadência de engano', 'Uma modulação', 'Uma cadência perfeita', 'Uma suspensão'], correta: 0, explicacao: 'O ouvido espera a tônica e recebe outro acorde da mesma função.' },
        { texto: 'Por que Em → Am soa natural?', opcoes: ['A raiz desce uma quinta', 'Os dois são menores', 'Compartilham o baixo', 'Estão na mesma posição do braço'], correta: 0, explicacao: 'Mi é a quinta de Lá: é o mesmo movimento de V para I.' },
        { texto: 'Visitar a região da dominante numa peça em Dó significa ir para:', opcoes: ['Sol maior', 'Fá maior', 'Lá menor', 'Ré menor'], correta: 0, explicacao: 'A dominante de Dó é Sol.' },
        { texto: 'O que caracteriza uma boa condução de vozes?', opcoes: ['Notas comuns mantidas e movimento por grau', 'Saltos grandes em todas as vozes', 'Todas as vozes na mesma direção', 'Dobrar sempre a terça'], correta: 0, explicacao: 'Menor movimento possível em cada voz.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar o ciclo Em–Am–Dm–G–C em Dó maior e transposto para Sol maior.',
          'Harmonizar uma melodia simples usando apenas I, IV e V, e depois refazer com substituições de mesma função.',
          'Encadear C–F–G–C mantendo as notas comuns e com o baixo caminhando.',
          'Apontar, numa peça do seu repertório, onde está a região da dominante.'
        ],
        criterio: 'Você domina quando consegue, diante de uma cifra, dizer a função de cada acorde e propor uma substituição que mantenha o sentido da frase.'
      }
    },

    {
      id: 'n5.1.2',
      titulo: 'Empréstimo modal',
      resumo: 'Pegar acordes emprestados do tom menor paralelo — a cor mais usada da música popular e romântica.',
      minutos: 18,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n5.1.1'],
      status: 'implementado',
      cobre: ['Empréstimo modal'],
      objetivo: 'Reconhecer, usar e ouvir acordes emprestados do modo menor dentro de uma peça em maior.',
      blocos: [
        { t: 'p', x: 'Dó maior e Dó menor têm a mesma tônica e escalas diferentes: são *paralelos*. O empréstimo modal consiste em tocar uma peça em Dó maior e, num momento escolhido, usar um acorde que pertence a Dó menor. O centro tonal não muda — muda a cor.' },
        {
          t: 'def', termo: 'Empréstimo modal',
          x: 'Uso de um acorde do modo paralelo (geralmente o menor) dentro de uma tonalidade maior, sem modular. Também chamado de *mistura modal*.'
        },
        { t: 'h', x: 'Os acordes emprestados mais usados' },
        {
          t: 'tabela',
          cab: ['Acorde em Dó maior', 'Vem de', 'Som característico'],
          linhas: [
            ['Fm (iv menor)', 'Dó menor', 'O mais famoso. Melancolia imediata depois do IV maior.'],
            ['A♭ (♭VI)', 'Dó menor', 'Grandioso, cinematográfico. Antecede muito bem o G.'],
            ['B♭ (♭VII)', 'Dó menor', 'Soa popular e aberto. Base de milhares de canções.'],
            ['E♭ (♭III)', 'Dó menor', 'Surpresa luminosa e sombria ao mesmo tempo.'],
            ['Dm7(♭5) (ii meio-diminuto)', 'Dó menor', 'Prepara o G7 com muito mais tensão que o Dm7.'],
            ['Cm (i menor)', 'Dó menor', 'A própria tônica escurecida, normalmente no fim de uma seção.']
          ]
        },
        {
          t: 'acorde', legenda: 'Os cinco empréstimos mais úteis no violão, em Dó maior. Toque C antes e depois de cada um para sentir a cor.',
          lista: [
            { nome: 'Fm (iv)', cordas: [1, 3, 3, 1, 1, 1], dedos: [1, 3, 4, 1, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } },
            { nome: 'A♭ (♭VI)', cordas: [4, 6, 6, 5, 4, 4], dedos: [1, 3, 4, 2, 1, 1], casaInicial: 4 },
            { nome: 'B♭ (♭VII)', cordas: [-1, 1, 3, 3, 3, 1], dedos: [null, 1, 2, 3, 4, 1] },
            { nome: 'E♭ (♭III)', cordas: [-1, 6, 5, 3, 4, 3], dedos: [null, 4, 3, 1, 2, 1], casaInicial: 3 },
            { nome: 'Dm7(♭5)', cordas: [-1, -1, 0, 1, 1, 1], dedos: [null, null, null, 1, 2, 3] }
          ]
        },
        { t: 'h', x: 'A fórmula que nunca falha: IV → iv → I' },
        { t: 'p', x: 'Toque F, depois Fm, depois C. O Lá do acorde de Fá desce meio tom para Lá bemol e depois meio tom para Sol: essa linha descendente é a razão do efeito. O ouvido segue a voz que desce, não o nome do acorde.' },
        {
          t: 'pauta', bpm: 54, numerar: true,
          txt: 'f3+a3+c4/b | f3+ab3+c4/b | e3+g3+c4/o',
          legenda: 'F – Fm – C. A voz do meio desce Lá → Lá bemol → Sol. É esse meio tom que emociona.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[4, 3], [3, 2], [2, 1], [1, 1]], fig: 'minima' }, { pos: [[4, 3], [3, 1], [2, 1], [1, 1]], fig: 'minima' }] },
            { notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'semibreve' }] }
          ],
          legenda: 'A mesma passagem no braço: F (forma de pestana reduzida), Fm e C. Só um dedo muda entre os dois primeiros acordes.',
          tocar: true, bpm: 54
        },
        { t: 'h', x: 'Onde isso aparece' },
        {
          t: 'lista', itens: [
            'No violão romântico: Tárrega usa iv menor e ♭VI o tempo todo para colorir cadências.',
            'Em Villa-Lobos e Barrios: o empréstimo é parte da linguagem, muitas vezes junto com cromatismo.',
            'Na música popular brasileira: a passagem IV → ivm é quase um clichê de bossa e de samba-canção.',
            'No cinema: ♭VI → ♭VII → I é a progressão "épica" por excelência.'
          ]
        },
        { t: 'ouvir', titulo: 'Ouvir F – Fm – C', acorde: [41, 45, 48, 53], x: 'Primeiro o Fá maior. Depois toque de novo o botão do bloco anterior para comparar com o Fá menor.' },
        {
          t: 'check', chave: 'emprestimo', titulo: 'Experimente no violão',
          itens: [
            'Toquei C – F – Fm – C e ouvi a voz descer por meio tom.',
            'Toquei C – A♭ – B♭ – C (a progressão épica).',
            'Troquei o Dm7 por Dm7(♭5) antes do G7 e comparei a tensão.',
            'Terminei uma peça em Dó maior com um acorde de Dó menor.',
            'Encontrei um empréstimo modal numa música que eu já toco.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Reconhecer o empréstimo', rodadas: 5,
          perguntas: [
            { texto: 'Em Dó maior, o acorde de Lá bemol maior é:', opcoes: ['♭VI emprestado do modo menor', 'O IV do tom', 'Uma dominante secundária', 'Um acorde diminuto'], correta: 0, explicacao: 'Lá bemol é a sexta rebaixada de Dó.' },
            { texto: 'A passagem IV → iv funciona porque:', opcoes: ['Uma voz desce meio tom', 'O baixo salta uma quinta', 'Os dois acordes são maiores', 'Há uma modulação'], correta: 0, explicacao: 'Em F → Fm, o Lá vira Lá bemol.' },
            { texto: 'Empréstimo modal é o mesmo que modular?', opcoes: ['Não: o centro tonal continua o mesmo', 'Sim, sempre', 'Sim, se durar mais de um compasso', 'Só em tom menor'], correta: 0, explicacao: 'O empréstimo colore; a modulação muda o centro.' },
            { texto: 'Qual acorde emprestado prepara o G7 com mais tensão que o Dm7?', opcoes: ['Dm7(♭5)', 'Em7', 'Fmaj7', 'Am7'], correta: 0, explicacao: 'O meio-diminuto vem do modo menor e aperta a cadência.' },
            { texto: 'A progressão ♭VI – ♭VII – I em Dó maior é:', opcoes: ['A♭ – B♭ – C', 'F – G – C', 'Am – Bdim – C', 'A – B – C'], correta: 0, explicacao: 'Sexta e sétima rebaixadas vindas de Dó menor.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Chamar de modulação qualquer acorde estranho ao tom.', certo: 'Se a tônica continua sendo a mesma, foi empréstimo.' },
            { erro: 'Usar o iv menor em todo lugar.', certo: 'O efeito depende da raridade. Reserve-o para um ponto de chegada.' },
            { erro: 'Tocar F e Fm com formas completamente diferentes.', certo: 'Use formas vizinhas: o efeito é a voz que desce meio tom, e ela precisa ser audível.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Empréstimo modal é usar acordes do modo paralelo sem mudar de tom.',
            'Os mais comuns em maior: iv, ♭VI, ♭VII, ♭III e ii meio-diminuto.',
            'IV → iv → I funciona por causa de uma voz que desce meio tom.',
            '♭VI – ♭VII – I é a progressão grandiosa do cinema.',
            'A cor depende do uso parcimonioso.'
          ]
        }
      ],
      quiz: [
        { texto: 'De onde vêm os acordes do empréstimo modal numa peça em maior?', opcoes: ['Do tom menor paralelo', 'Do tom relativo', 'Da dominante', 'Do tom vizinho superior'], correta: 0, explicacao: 'Mesma tônica, escala menor.' },
        { texto: 'Em Sol maior, qual seria o iv emprestado?', opcoes: ['Dó menor', 'Dó maior', 'Ré menor', 'Mi menor'], correta: 0, explicacao: 'O IV de Sol é Dó; emprestado, vira Dó menor.' },
        { texto: 'Qual é o efeito típico do ♭VI?', opcoes: ['Grandioso e cinematográfico', 'Cômico', 'Tenso e dissonante', 'Neutro'], correta: 0, explicacao: 'É a cor de abertura das trilhas épicas.' },
        { texto: 'O empréstimo modal muda o centro tonal da peça?', opcoes: ['Não', 'Sim, sempre', 'Só quando usado no fim', 'Só em compasso ternário'], correta: 0, explicacao: 'Ele colore sem modular.' },
        { texto: 'Em Dó maior, Dm7(♭5) é um acorde emprestado de:', opcoes: ['Dó menor', 'Ré menor', 'Sol maior', 'Fá maior'], correta: 0, explicacao: 'O ii do modo menor é meio-diminuto.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar C – F – Fm – C com a voz descendente audível.',
          'Tocar C – A♭ – B♭ – C limpo, com as pestanas afinadas.',
          'Substituir o Dm7 por Dm7(♭5) numa cadência ii–V–I e comparar.',
          'Reharmonizar quatro compassos de uma peça sua usando um empréstimo.'
        ],
        criterio: 'Você domina quando identifica de ouvido a entrada de um acorde emprestado e consegue aplicá-lo em uma peça sem quebrar a tonalidade.'
      }
    },

    {
      id: 'n5.1.3',
      titulo: 'Modulações',
      resumo: 'Sair de um tom e chegar em outro sem que o ouvinte perceba a costura.',
      minutos: 20,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n4.1.6', 'n5.1.1'],
      status: 'implementado',
      cobre: ['Modulações'],
      objetivo: 'Conhecer os quatro tipos principais de modulação e aplicá-los ao violão.',
      blocos: [
        { t: 'p', x: 'Modular é mudar de centro tonal: a peça passa a ouvir outra nota como "casa". No Nível 4 você viu o conceito; aqui vêm as *técnicas*. Há quatro formas clássicas de fazer a passagem, da mais suave à mais abrupta.' },
        { t: 'h', x: '1. Modulação por acorde pivô' },
        { t: 'p', x: 'A mais usada. Escolhe-se um acorde que exista nos dois tons e, a partir dele, lê-se tudo no tom novo. O ouvinte entra no tom novo sem perceber a porta.' },
        {
          t: 'tabela',
          cab: ['Acorde', 'Em Dó maior', 'Em Sol maior'],
          linhas: [
            ['C', 'I', 'IV'],
            ['Am', 'vi', 'ii'],
            ['Em', 'iii', 'vi'],
            ['G', 'V', 'I']
          ],
          legenda: 'Quatro pivôs possíveis entre Dó e Sol. Qualquer um deles serve de dobradiça.'
        },
        {
          t: 'pauta', bpm: 56, numerar: true,
          txt: 'c4+e4+g4/b | a3+c4+e4/b | a3+c#4+e4/b | d4+f#4+a4/b | g3+b3+d4/o',
          legenda: 'C – Am (pivô) – A7 – D7 – G. O Am é lido como vi de Dó e vira ii de Sol; o Dó sustenido anuncia o tom novo.'
        },
        { t: 'h', x: '2. Modulação por dominante direta' },
        { t: 'p', x: 'Mais rápida e mais audível: toca-se o V7 do tom de destino e resolve-se. Funciona sempre, mas deixa a costura à mostra. É o recurso dos finais de música popular que sobem meio tom.' },
        {
          t: 'acorde', legenda: 'Para ir a Ré maior, toque o A7 e resolva: a dominante define o tom novo em dois acordes.',
          lista: [
            { nome: 'C (tom antigo)', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
            { nome: 'A7 (V7 do novo)', cordas: [-1, 0, 2, 0, 2, 0], dedos: [null, null, 2, null, 3, null] },
            { nome: 'D (tom novo)', cordas: [-1, -1, 0, 2, 3, 2], dedos: [null, null, null, 1, 3, 2] }
          ]
        },
        { t: 'h', x: '3. Modulação cromática' },
        { t: 'p', x: 'Uma ou mais vozes caminham por meio tom até o acorde novo, sem pivô e sem dominante preparada. É a modulação de Chopin e de boa parte do violão romântico: suave, porque o ouvido segue a voz, e surpreendente, porque o acorde de chegada é inesperado.' },
        {
          t: 'pauta', bpm: 52, numerar: true,
          txt: 'c4+e4+g4/b | c4+eb4+g4/b | bb3+eb4+g4/b | eb4+g4+bb4/o',
          legenda: 'De Dó maior para Mi bemol maior por cromatismo: o Mi desce para Mi bemol e o Dó desce para Si bemol. Nenhum acorde de dominante foi usado.'
        },
        { t: 'h', x: '4. Modulação por enarmonia' },
        { t: 'p', x: 'Um acorde é reinterpretado: o mesmo som recebe outro nome e outra função. O caso clássico é o diminuto, que pode resolver em quatro tons diferentes, e o acorde de sexta aumentada. É a modulação mais dramática e a mais usada por Bach e Beethoven para ir longe depressa.' },
        {
          t: 'acorde', legenda: 'O mesmo acorde diminuto, lido de quatro maneiras. Cada leitura leva a um tom diferente.',
          lista: [
            { nome: 'B°7', cordas: [-1, 2, 3, 1, 3, 1], dedos: [null, 2, 4, 1, 3, 1] },
            { nome: 'resolve em C', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
            { nome: 'ou em E♭', cordas: [-1, 6, 5, 3, 4, 3], dedos: [null, 4, 3, 1, 2, 1], casaInicial: 3 },
            { nome: 'ou em A', cordas: [-1, 0, 2, 2, 2, 0], dedos: [null, null, 1, 2, 3, null] }
          ]
        },
        { t: 'h', x: 'Como reconhecer que houve modulação' },
        {
          t: 'passos', itens: [
            'Procure alterações novas que se repetem: um Fá sustenido isolado é cromatismo; três seguidos são Sol maior.',
            'Veja onde as frases terminam: se as cadências passam a fechar em outro acorde, o centro mudou.',
            'Confira o baixo: o novo centro costuma aparecer no tempo forte.',
            'Escute: cante a tônica antiga enquanto toca. Se ela começar a soar errada, você modulou.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a modulação no violão',
          seq: [[5, 3], [5, 0], [4, 0], [3, 0]],
          rotulo: 'Conferir os baixos C – A – D – G',
          fim: 'Esses quatro baixos são o esqueleto de uma modulação de Dó para Sol passando por Ré.',
          x: 'Toque só os baixos, devagar. O app confere Dó, Lá, Ré e Sol.'
        },
        {
          t: 'check', chave: 'modulacao', titulo: 'Pratique as quatro técnicas',
          itens: [
            'Modulei de Dó para Sol usando o Am como pivô.',
            'Modulei de Dó para Ré com dominante direta (A7).',
            'Modulei de Dó para Mi bemol por cromatismo.',
            'Toquei um diminuto e o resolvi em dois tons diferentes.',
            'Encontrei, numa peça que estudo, onde ela modula e para onde.'
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Confundir empréstimo modal com modulação.', certo: 'Se a tônica continua a mesma, não houve modulação.' },
            { erro: 'Modular sem preparar a chegada.', certo: 'Pelo menos uma cadência no tom novo é necessária para o ouvido aceitar.' },
            { erro: 'Usar sempre a dominante direta.', certo: 'É a mais fácil e a mais óbvia. O pivô soa muito melhor.' },
            { erro: 'Esquecer de ajustar a digitação no tom novo.', certo: 'Modulação no papel é fácil; no violão, exige repensar posições.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Modular é mudar o centro tonal; empréstimo apenas colore.',
            'Pivô: um acorde comum aos dois tons serve de dobradiça.',
            'Dominante direta: rápido e audível.',
            'Cromática: vozes caminham por meio tom.',
            'Enarmônica: o mesmo acorde é relido com outra função — o diminuto é o rei disso.',
            'Houve modulação quando as cadências passam a fechar em outro acorde.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que é um acorde pivô?', opcoes: ['Um acorde que pertence aos dois tons', 'O acorde mais grave da peça', 'A dominante do tom novo', 'Um acorde diminuto'], correta: 0, explicacao: 'Ele é lido com uma função no tom antigo e outra no novo.' },
        { texto: 'Em Dó maior, Am pode servir de pivô para Sol maior porque:', opcoes: ['É vi em Dó e ii em Sol', 'É o relativo de Dó', 'Tem a mesma fundamental', 'É um acorde emprestado'], correta: 0, explicacao: 'Existe nos dois campos harmônicos.' },
        { texto: 'Qual tipo de modulação é o mais abrupto e audível?', opcoes: ['Dominante direta', 'Pivô', 'Cromática', 'Por pedal'], correta: 0, explicacao: 'O V7 do tom novo anuncia a mudança sem disfarce.' },
        { texto: 'O acorde diminuto permite modulação enarmônica porque:', opcoes: ['Pode ser relido como dominante de quatro tons diferentes', 'Tem só três notas', 'É sempre consonante', 'Não tem terça'], correta: 0, explicacao: 'É simétrico: todas as suas inversões soam iguais.' },
        { texto: 'Como se confirma que a peça realmente modulou?', opcoes: ['As cadências passam a fechar no novo centro', 'Aparece um acorde estranho', 'A melodia sobe', 'O andamento muda'], correta: 0, explicacao: 'Uma cadência no tom novo é a prova.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar uma modulação por pivô de Dó para Sol, com cadência de confirmação.',
          'Tocar uma modulação por dominante direta de Dó para Ré.',
          'Tocar a sequência cromática de Dó para Mi bemol com as vozes audíveis.',
          'Analisar uma peça do repertório e marcar na partitura onde ela modula.'
        ],
        criterio: 'Você domina quando consegue sair de qualquer tom e chegar num tom vizinho de três maneiras diferentes, e quando identifica na partitura o momento exato da modulação.'
      }
    },

    {
      id: 'n5.1.4',
      titulo: 'Harmonia cromática',
      resumo: 'Acordes de fora do tom que não quebram o tom: diminutos de passagem, sextas aumentadas e dominantes substitutas.',
      minutos: 20,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n5.1.3'],
      status: 'implementado',
      cobre: ['Harmonia cromática'],
      objetivo: 'Usar notas e acordes cromáticos como ornamento e como força de condução, sem perder o centro tonal.',
      blocos: [
        { t: 'p', x: 'Cromatismo é tudo o que está fora das sete notas do tom. Usado sem critério, destrói a tonalidade. Usado como *condução*, é o que dá sofisticação à harmonia romântica e à música brasileira. A regra que organiza tudo: o acorde cromático existe para ligar dois acordes diatônicos por meio tom.' },
        { t: 'regua', legenda: 'A régua de semitons: entre dois acordes vizinhos sempre cabe um passo cromático. É esse passo que a harmonia cromática ocupa.' },
        { t: 'h', x: 'Diminutos de passagem' },
        { t: 'p', x: 'O acorde diminuto com sétima é o conectivo mais útil que existe. Entre C e Dm, cabe um C♯°7; entre Dm e Em, um D♯°7. Ele não tem tom próprio: serve de ponte, e o baixo sobe cromaticamente.' },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'c4+e4+g4/b | c#4+e4+g4/b | d4+f4+a4/b | d#4+f#4+a4/b | e4+g4+b4/o',
          legenda: 'C – C♯°7 – Dm – D♯°7 – Em. O baixo sobe meio tom de cada vez: Dó, Dó sustenido, Ré, Ré sustenido, Mi.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 1]], fig: 'minima' }, { pos: [[5, 4], [4, 2], [3, 0], [2, 2]], fig: 'minima' }] },
            { notas: [{ pos: [[4, 0], [3, 2], [2, 3], [1, 1]], fig: 'minima' }, { pos: [[4, 1], [3, 2], [2, 3], [1, 2]], fig: 'minima' }] },
            { notas: [{ pos: [[5, 2], [4, 2], [3, 0], [2, 0], [1, 0]], fig: 'semibreve' }] }
          ],
          legenda: 'A mesma cadeia no braço. Repare que entre um acorde e o diminuto seguinte quase nada muda: um ou dois dedos.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Dominantes substitutas (o trítono)' },
        { t: 'p', x: 'G7 e D♭7 compartilham o mesmo trítono (Si/Dó bemol e Fá). Por isso D♭7 pode substituir G7 e resolver em C. O resultado é um baixo que desce meio tom — Ré bemol para Dó — em vez de saltar uma quinta. É o som do choro e da bossa.' },
        {
          t: 'acorde', legenda: 'G7 e D♭7 têm o mesmo trítono e resolvem no mesmo lugar. Toque os dois antes de C e compare.',
          lista: [
            { nome: 'G7', cordas: [3, 2, 0, 0, 0, 1], dedos: [3, 2, null, null, null, 1] },
            { nome: 'D♭7 (subV)', cordas: [-1, 4, 3, 4, 2, -1], dedos: [null, 3, 2, 4, 1, null], casaInicial: 2 },
            { nome: 'C', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] }
          ]
        },
        { t: 'h', x: 'Sexta aumentada' },
        { t: 'p', x: 'Um acorde construído sobre a sexta rebaixada que contém o intervalo de sexta aumentada (Lá bemol e Fá sustenido em Dó maior). As duas notas se abrem por meio tom em direções opostas e caem na quinta do tom. Existem três sabores — italiana, francesa e alemã —, distinguidos pela nota do meio.' },
        {
          t: 'tabela',
          cab: ['Tipo', 'Notas em Dó maior', 'Resolve em'],
          linhas: [
            ['Italiana', 'Lá♭ – Dó – Fá♯', 'Sol (V)'],
            ['Francesa', 'Lá♭ – Dó – Ré – Fá♯', 'Sol (V)'],
            ['Alemã', 'Lá♭ – Dó – Mi♭ – Fá♯', 'Sol, normalmente via C/G']
          ],
          legenda: 'A alemã soa igual a um A♭7 — e é justamente essa ambiguidade que Beethoven explora.'
        },
        {
          t: 'pauta', bpm: 50, numerar: true,
          txt: 'ab3+c4+f#4/b | g3+b3+d4/o',
          legenda: 'Sexta aumentada italiana resolvendo no V. Lá bemol desce e Fá sustenido sobe: as duas vozes se abrem até o Sol.'
        },
        { t: 'h', x: 'Linha de baixo cromática' },
        { t: 'p', x: 'Boa parte do cromatismo no violão nasce de uma linha de baixo descendo meio tom a meio tom. Sobre ela, os acordes se acomodam: C – C/B – Am – Am/G – F – Fm – C. O ouvido segue o baixo e aceita tudo.' },
        {
          t: 'tocar', titulo: 'Confira a linha de baixo cromática',
          seq: [[5, 3], [5, 2], [5, 0], [6, 3], [6, 1], [6, 1], [5, 3]],
          rotulo: 'Conferir os baixos',
          fim: 'Essa é a espinha dorsal de centenas de peças: o baixo desce, a harmonia acompanha.',
          x: 'Toque só os baixos: Dó, Si, Lá, Sol, Fá, Fá e Dó. Devagar, uma nota por vez.'
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Cromatismo com função', rodadas: 5,
          perguntas: [
            { texto: 'Para que serve um diminuto de passagem?', opcoes: ['Ligar dois acordes diatônicos por meio tom', 'Modular para um tom distante', 'Substituir a tônica', 'Criar um pedal'], correta: 0, explicacao: 'É uma ponte, não um destino.' },
            { texto: 'Por que D♭7 pode substituir G7?', opcoes: ['Os dois têm o mesmo trítono', 'Têm a mesma fundamental', 'Soam igual', 'Pertencem ao mesmo campo harmônico'], correta: 0, explicacao: 'Si/Dó bemol e Fá estão nos dois acordes.' },
            { texto: 'Na substituição de trítono, o baixo:', opcoes: ['Desce meio tom até a tônica', 'Salta uma quinta', 'Fica parado', 'Sobe uma terça'], correta: 0, explicacao: 'Ré bemol → Dó.' },
            { texto: 'A sexta aumentada resolve tipicamente em:', opcoes: ['No acorde de dominante', 'Na tônica', 'No IV grau', 'No relativo menor'], correta: 0, explicacao: 'As duas vozes se abrem até a quinta do tom.' },
            { texto: 'O que torna aceitável uma sequência cheia de acordes de fora do tom?', opcoes: ['A condução por meio tom entre as vozes', 'O andamento lento', 'O uso de pestana', 'A repetição'], correta: 0, explicacao: 'O ouvido segue o movimento das vozes.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar acordes cromáticos sem conectar nada.', certo: 'Todo cromático deve ligar dois acordes do tom.' },
            { erro: 'Resolver o diminuto no lugar errado.', certo: 'Ele sobe meio tom para o acorde seguinte.' },
            { erro: 'Escrever o subV como C♯7 em Dó maior.', certo: 'A grafia correta é D♭7: a fundamental desce para Dó.' },
            { erro: 'Tocar a linha de baixo cromática sem destacar o baixo.', certo: 'O polegar precisa soar mais que o resto; é ele que conduz.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cromatismo com função é condução por meio tom.',
            'Diminutos de passagem ligam acordes vizinhos; o baixo sobe meio tom.',
            'D♭7 substitui G7 porque compartilham o trítono; o baixo desce meio tom.',
            'A sexta aumentada abre duas vozes por meio tom até a dominante.',
            'Linhas de baixo descendentes sustentam quase todo cromatismo no violão.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em Dó maior, qual acorde liga C e Dm cromaticamente?', opcoes: ['C♯°7', 'E7', 'B♭', 'Fm'], correta: 0, explicacao: 'O baixo sobe Dó – Dó sustenido – Ré.' },
        { texto: 'O que G7 e D♭7 têm em comum?', opcoes: ['O trítono', 'A fundamental', 'A quinta', 'A armadura'], correta: 0, explicacao: 'Si e Fá aparecem nos dois.' },
        { texto: 'A sexta aumentada alemã soa igual a:', opcoes: ['Um acorde de sétima dominante sobre a sexta rebaixada', 'Um acorde diminuto', 'Um acorde menor', 'Um acorde suspenso'], correta: 0, explicacao: 'Em Dó maior, soa como A♭7.' },
        { texto: 'Qual é a condição para o cromatismo não destruir a tonalidade?', opcoes: ['Que ele conecte acordes diatônicos', 'Que seja tocado devagar', 'Que apareça só no fim', 'Que use pestana'], correta: 0, explicacao: 'Ele precisa ter função de passagem.' },
        { texto: 'Numa linha de baixo cromática descendente em Dó, qual acorde costuma vir depois de C?', opcoes: ['C/B', 'G/D', 'F/A', 'Am/E'], correta: 0, explicacao: 'O baixo desce Dó – Si – Lá.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar a cadeia C – C♯°7 – Dm – D♯°7 – Em com o baixo subindo limpo.',
          'Tocar uma cadência ii–V–I e repeti-la com substituição de trítono.',
          'Tocar a linha de baixo cromática C – C/B – Am – Am/G – F – Fm – C.',
          'Localizar uma passagem cromática numa peça que você estuda e explicar a função de cada acorde.'
        ],
        criterio: 'Você domina quando consegue inserir um diminuto de passagem ou uma substituição de trítono numa peça sua e justificar, em uma frase, por que aquele acorde cabe ali.'
      }
    },

    {
      id: 'n5.1.5',
      titulo: 'Acordes estendidos e notas de tensão',
      resumo: 'Nona, décima primeira e décima terceira: o que cada uma acrescenta e quais podem soar juntas.',
      minutos: 18,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n4.1.3'],
      status: 'implementado',
      cobre: ['Acordes de nona, décima primeira e décima terceira', 'Notas de tensão'],
      objetivo: 'Construir e usar acordes de nona, décima primeira e décima terceira no violão, sabendo quais notas omitir.',
      blocos: [
        { t: 'p', x: 'Empilhando terças sobre uma tétrade, chega-se à nona, à décima primeira e à décima terceira. No piano elas cabem todas; no violão, com seis cordas e quatro dedos, é preciso *escolher*. Esta aula ensina o que acrescentar e, sobretudo, o que jogar fora.' },
        { t: 'h', x: 'A pilha de terças' },
        {
          t: 'tabela',
          cab: ['Nota', 'Em Dó', 'Equivale a', 'Efeito'],
          linhas: [
            ['Nona (9)', 'Ré', 'A segunda, uma oitava acima', 'Brilho, abertura. A mais fácil de usar.'],
            ['Décima primeira (11)', 'Fá', 'A quarta, uma oitava acima', 'Choca com a terça maior; em acordes maiores, usa-se #11.'],
            ['Décima terceira (13)', 'Lá', 'A sexta, uma oitava acima', 'Suave e sofisticada. Combina bem com a sétima.']
          ]
        },
        { t: 'teclado', destacar: [60, 62, 64, 65, 67, 69, 71], legenda: 'A pilha completa de Dó: Dó, Mi, Sol, Si, Ré, Fá, Lá. Cada terça acrescentada é uma nota da escala, uma oitava acima.' },
        { t: 'h', x: 'O que se pode omitir' },
        {
          t: 'lista', itens: [
            'A *quinta* é a primeira a sair: ela não define nada (salvo se for alterada).',
            'A *fundamental* pode sair quando o baixo já a toca, ou num contexto de conjunto.',
            'A *terça* e a *sétima* ficam sempre: são elas que dizem se o acorde é maior, menor ou dominante.',
            'Num acorde de 13, a 11 normalmente sai: as duas juntas embolam.',
            'Em acordes maiores, a 11 justa é evitada — ela briga com a terça. Use #11.'
          ]
        },
        {
          t: 'acorde', legenda: 'Cinco estendidos práticos no violão, todos com raiz na 5ª corda. Toque em sequência: C – Cmaj9 – C9 – C11 – C13.',
          lista: [
            { nome: 'C', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
            { nome: 'Cmaj9', cordas: [-1, 3, 2, 4, 3, 0], dedos: [null, 2, 1, 4, 3, null] },
            { nome: 'C9', cordas: [-1, 3, 2, 3, 3, 3], dedos: [null, 2, 1, 3, 3, 3] },
            { nome: 'C11', cordas: [-1, 3, 3, 3, 3, 3], dedos: [null, 1, 1, 1, 1, 1], pestana: { casa: 3, de: 5, ate: 1 } },
            { nome: 'C13', cordas: [-1, 3, 2, 3, 3, 5], dedos: [null, 2, 1, 3, 3, 4] }
          ]
        },
        { t: 'h', x: 'Tensões disponíveis e tensões proibidas' },
        { t: 'p', x: 'Uma tensão é *disponível* quando não fica a meio tom acima de uma nota essencial do acorde. O Fá natural sobre um Cmaj7 é proibido porque fica meio tom acima do Mi, e esse atrito soa como erro. Sobre um C7, o mesmo Fá é aceitável como 11 em contexto suspenso.' },
        {
          t: 'tabela',
          cab: ['Acorde', 'Tensões boas', 'Evitar'],
          linhas: [
            ['Cmaj7', '9, #11, 13', '11 justa'],
            ['C7 (dominante)', '9, ♭9, #9, #11, 13, ♭13', '—'],
            ['Cm7', '9, 11', '13 (em contexto menor natural)'],
            ['Cm7(♭5)', '11, ♭13', '9']
          ],
          legenda: 'A regra do meio tom acima de nota essencial resolve quase todos os casos.'
        },
        { t: 'h', x: 'No violão: tensões como melodia' },
        { t: 'p', x: 'O jeito mais musical de usar tensões no violão não é empilhar notas, e sim deixar a tensão aparecer como *nota mais aguda* do acorde — ela vira melodia. Compare: um C comum e um Cadd9 têm a mesma função, mas o segundo canta.' },
        {
          t: 'pauta', bpm: 54, numerar: true,
          txt: 'c4+e4+g4+c5/o | c4+e4+g4+d5/o | c4+e4+g4+e5/o | c4+e4+g4+a4/o',
          legenda: 'O mesmo Dó maior com quatro notas diferentes no topo: oitava, nona, terça dobrada e sexta. A harmonia é a mesma; a cor muda completamente.'
        },
        {
          t: 'check', chave: 'tensoes', titulo: 'Ouça cada cor',
          itens: [
            'Toquei C, Cmaj9, C9, C11 e C13 em sequência.',
            'Toquei Cmaj7 com Fá natural no topo e entendi por que soa errado.',
            'Troquei o C de uma música minha por Cadd9 e comparei.',
            'Toquei um ii–V–I com Dm9 – G13 – Cmaj9.',
            'Toquei a mesma progressão só com tríades e percebi a diferença de densidade.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Montar estendidos', rodadas: 5,
          perguntas: [
            { texto: 'A nona de Dó é:', opcoes: ['Ré', 'Mi', 'Fá', 'Lá'], correta: 0, explicacao: 'É a segunda nota da escala, uma oitava acima.' },
            { texto: 'Qual nota se omite primeiro num acorde estendido de violão?', opcoes: ['A quinta', 'A terça', 'A sétima', 'A nona'], correta: 0, explicacao: 'A quinta não define a qualidade do acorde.' },
            { texto: 'Por que a 11 justa é evitada sobre um acorde maior com sétima?', opcoes: ['Fica meio tom acima da terça', 'É muito grave', 'Não existe no campo harmônico', 'Duplica a fundamental'], correta: 0, explicacao: 'Fá contra Mi gera um atrito que soa como erro.' },
            { texto: 'A décima terceira de Dó é:', opcoes: ['Lá', 'Si', 'Sol', 'Ré'], correta: 0, explicacao: 'É a sexta, uma oitava acima.' },
            { texto: 'Quais notas nunca se omitem numa tétrade estendida?', opcoes: ['Terça e sétima', 'Fundamental e quinta', 'Quinta e nona', 'Fundamental e oitava'], correta: 0, explicacao: 'São elas que definem o tipo do acorde.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tentar tocar todas as notas da pilha.', certo: 'Quatro notas bem escolhidas dizem mais que seis empilhadas.' },
            { erro: 'Usar 11 justa sobre acorde maior.', certo: 'Troque por #11 ou deixe a 11 só nos dominantes suspensos.' },
            { erro: 'Pôr a tensão no grave.', certo: 'Tensão soa melhor acima da terça e da sétima, perto do topo.' },
            { erro: 'Usar estendidos o tempo todo.', certo: 'A tríade simples é o repouso; sem ela, as tensões perdem efeito.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Estendidos continuam a pilha de terças: 9, 11 e 13.',
            'No violão, omite-se primeiro a quinta e, se preciso, a fundamental.',
            'Terça e sétima permanecem sempre.',
            'Uma tensão é proibida quando fica meio tom acima de uma nota essencial.',
            'A tensão soa melhor como nota mais aguda, funcionando como melodia.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a nona de Sol?', opcoes: ['Lá', 'Si', 'Dó', 'Ré'], correta: 0, explicacao: 'A segunda de Sol, uma oitava acima.' },
        { texto: 'Num Cmaj7, qual tensão é proibida?', opcoes: ['11 justa', '9', '13', '#11'], correta: 0, explicacao: 'O Fá fica meio tom acima do Mi.' },
        { texto: 'Qual nota se sacrifica primeiro para caber um estendido no violão?', opcoes: ['A quinta', 'A sétima', 'A terça', 'A nona'], correta: 0, explicacao: 'Ela não define a qualidade do acorde.' },
        { texto: 'Cadd9 difere de C9 porque:', opcoes: ['O add9 não tem sétima', 'O add9 não tem terça', 'São o mesmo acorde', 'O add9 é menor'], correta: 0, explicacao: 'C9 implica a sétima; Cadd9 é a tríade mais a nona.' },
        { texto: 'Onde a tensão soa melhor numa voicing de violão?', opcoes: ['Na nota mais aguda', 'No baixo', 'Dobrada em duas oitavas', 'Entre a fundamental e a terça'], correta: 0, explicacao: 'No topo ela vira melodia.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar C, Cmaj9, C9, C11 e C13 limpos, sem cordas abafadas.',
          'Tocar um ii–V–I estendido: Dm9 – G13 – Cmaj9.',
          'Reharmonizar quatro compassos de uma peça sua trocando tríades por estendidos.',
          'Explicar, para cada acorde usado, qual nota foi omitida e por quê.'
        ],
        criterio: 'Você domina quando monta um acorde estendido no braço sem decorar a forma: escolhendo terça, sétima e a tensão desejada.'
      }
    },

    {
      id: 'n5.1.6',
      titulo: 'Contraponto a duas, três e quatro vozes',
      resumo: 'Melodias independentes que soam bem juntas — a base de Bach e da polifonia no violão.',
      minutos: 22,
      disciplinas: ['contraponto', 'teoria'],
      prereq: ['n4.1.9'],
      status: 'implementado',
      cobre: ['Contraponto a duas, três e quatro vozes'],
      objetivo: 'Escrever e tocar contraponto simples a duas e três vozes, reconhecendo os movimentos permitidos e os proibidos.',
      blocos: [
        { t: 'p', x: 'No Nível 4 você conheceu o contraponto. Aqui ele vira ferramenta: regras concretas, exemplos no braço e a passagem de duas para três e quatro vozes — que no violão é o limite prático, porque são quatro dedos na mão esquerda e quatro na direita.' },
        { t: 'h', x: 'Os quatro movimentos entre duas vozes' },
        {
          t: 'tabela',
          cab: ['Movimento', 'O que acontece', 'Uso'],
          linhas: [
            ['Contrário', 'Uma sobe, a outra desce', 'O melhor. Garante independência.'],
            ['Oblíquo', 'Uma se move, a outra fica parada', 'Excelente. Muito usado em violão (notas pedais).'],
            ['Direto', 'As duas na mesma direção, distâncias diferentes', 'Aceitável com cuidado.'],
            ['Paralelo', 'As duas na mesma direção, mesmo intervalo', 'Perigoso em quintas e oitavas; lindo em terças e sextas.']
          ]
        },
        {
          t: 'pauta', bpm: 54, numerar: true,
          txt: 'c4+e4/q d4+f4/q e4+g4/q f4+a4/q | g4+b4/q a4+c5/q g4+b4/q f4+a4/q | e4+g4/b c4+e4/b',
          legenda: 'Duas vozes em terças paralelas: doce e fácil, mas as vozes não são independentes — elas andam de mãos dadas.'
        },
        {
          t: 'pauta', bpm: 54, numerar: true,
          txt: 'c4+c5/q d4+b4/q e4+a4/q f4+g4/q | g4+f4/q a4+e4/q b4+d4/q c5+c4/b',
          legenda: 'As mesmas notas em movimento contrário: as vozes se afastam e se cruzam. Agora são duas melodias de verdade.'
        },
        { t: 'h', x: 'As duas proibições clássicas' },
        {
          t: 'lista', itens: [
            '*Quintas paralelas*: duas vozes separadas por uma quinta que se movem juntas. O ouvido funde as duas numa só e a independência desaparece.',
            '*Oitavas paralelas*: mesmo problema, ainda mais evidente.',
            'Nos dois casos a solução é a mesma: troque a direção de uma das vozes, ou use movimento oblíquo.',
            'Terças e sextas paralelas, ao contrário, são a base do belo canto — pode usar à vontade.'
          ]
        },
        { t: 'h', x: 'As cinco espécies' },
        {
          t: 'tabela',
          cab: ['Espécie', 'Relação', 'O que se aprende'],
          linhas: [
            ['1ª', 'Nota contra nota', 'Intervalos consonantes e movimento contrário'],
            ['2ª', 'Duas notas contra uma', 'Notas de passagem'],
            ['3ª', 'Quatro contra uma', 'Fluência e bordaduras'],
            ['4ª', 'Síncope', 'Suspensões e resoluções'],
            ['5ª', 'Florido: mistura de todas', 'Escrita livre']
          ]
        },
        { t: 'h', x: 'Três e quatro vozes no violão' },
        { t: 'p', x: 'Com três vozes, a do meio é sempre a mais difícil: ela tem pouco espaço e tende a ficar parada. Use isso a favor — a voz interna parada funciona como pedal. Com quatro vozes, o violão chega ao limite: normalmente uma delas só aparece em alguns tempos, e isso é perfeitamente aceitável na escrita idiomática.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [3, 0], [2, 1]], fig: 'seminima' }, { pos: [[5, 2], [3, 0], [2, 3]], fig: 'seminima' }, { pos: [[5, 0], [3, 0], [2, 1]], fig: 'seminima' }, { pos: [[6, 3], [3, 0], [2, 0]], fig: 'seminima' }] },
            { notas: [{ pos: [[6, 1], [3, 2], [2, 1]], fig: 'seminima' }, { pos: [[5, 3], [3, 0], [2, 1]], fig: 'seminima' }, { pos: [[5, 2], [3, 0], [2, 0]], fig: 'seminima' }, { pos: [[5, 3], [3, 0], [2, 1]], fig: 'minima' }] }
          ],
          legenda: 'Três vozes: baixo caminhando, voz do meio parada no Sol (3ª corda solta) e melodia na 2ª corda. O pedal interno sustenta tudo.',
          tocar: true, bpm: 66
        },
        {
          t: 'passos', itens: [
            'Toque só o baixo, contando em voz alta.',
            'Toque só a melodia, com o mesmo andamento.',
            'Junte baixo e melodia, deixando a voz do meio de fora.',
            'Acrescente a voz do meio por último, com o polegar ou com o indicador, conforme a corda.',
            'Toque tudo em três volumes diferentes: melodia forte, baixo médio, voz do meio suave.'
          ]
        },
        {
          t: 'dica', titulo: 'O teste da independência: ',
          x: 'cante uma das vozes enquanto toca as outras. Se não conseguir, provavelmente elas não são independentes de verdade.'
        },
        {
          t: 'check', chave: 'contraponto5', titulo: 'Pratique as espécies',
          itens: [
            'Escrevi oito notas contra uma melodia dada, nota contra nota (1ª espécie).',
            'Refiz usando duas notas contra uma (2ª espécie).',
            'Toquei um trecho a três vozes com a voz do meio parada.',
            'Verifiquei se há quintas ou oitavas paralelas no que escrevi.',
            'Cantei a voz do baixo enquanto tocava as outras duas.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Movimentos e proibições', rodadas: 6,
          perguntas: [
            { texto: 'Qual movimento garante mais independência entre duas vozes?', opcoes: ['Contrário', 'Paralelo', 'Direto', 'Nenhum'], correta: 0, explicacao: 'Uma sobe, a outra desce.' },
            { texto: 'Quintas paralelas são evitadas porque:', opcoes: ['O ouvido funde as duas vozes numa só', 'Soam desafinadas', 'São difíceis de tocar', 'Não existem no campo harmônico'], correta: 0, explicacao: 'A independência desaparece.' },
            { texto: 'Terças paralelas são:', opcoes: ['Permitidas e muito usadas', 'Proibidas', 'Permitidas só no baixo', 'Exclusivas do contraponto moderno'], correta: 0, explicacao: 'São a base do canto a duas vozes.' },
            { texto: 'Movimento oblíquo é quando:', opcoes: ['Uma voz se move e a outra fica parada', 'As duas sobem', 'As duas descem', 'As duas ficam paradas'], correta: 0, explicacao: 'Muito usado com notas pedais no violão.' },
            { texto: 'Na segunda espécie, a relação é:', opcoes: ['Duas notas contra uma', 'Nota contra nota', 'Quatro contra uma', 'Síncope'], correta: 0, explicacao: 'É onde entram as notas de passagem.' },
            { texto: 'No violão, a quarta voz costuma:', opcoes: ['Aparecer só em alguns tempos', 'Soar o tempo todo', 'Ficar no agudo', 'Ser tocada com o polegar'], correta: 0, explicacao: 'É escrita idiomática: a voz entra e sai.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Escrever duas vozes que fazem sempre o mesmo desenho.', certo: 'Use movimento contrário em pelo menos metade dos compassos.' },
            { erro: 'Deixar a voz do meio saltando.', certo: 'A voz interna anda por grau ou fica parada.' },
            { erro: 'Tocar as três vozes com o mesmo volume.', certo: 'A melodia precisa estar acima; isso é controle de dedo, não de acorde.' },
            { erro: 'Soltar o baixo antes do tempo.', certo: 'O baixo sustenta a harmonia: mantenha o dedo apoiado o valor inteiro.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Quatro movimentos: contrário, oblíquo, direto e paralelo.',
            'Quintas e oitavas paralelas apagam a independência; terças e sextas não.',
            'As cinco espécies são uma escada de dificuldade, não regras de composição.',
            'Com três vozes, a do meio costuma ficar parada e vira pedal.',
            'No violão, a quarta voz entra e sai — é escrita idiomática, não defeito.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o movimento mais valorizado no contraponto?', opcoes: ['Contrário', 'Paralelo', 'Direto', 'Unísono'], correta: 0, explicacao: 'Garante que cada voz tenha vida própria.' },
        { texto: 'O que são quintas paralelas?', opcoes: ['Duas vozes separadas por quinta movendo-se juntas', 'Duas quintas tocadas ao mesmo tempo', 'Um acorde sem terça', 'Um tipo de cadência'], correta: 0, explicacao: 'Elas fundem as vozes num timbre só.' },
        { texto: 'Na quarta espécie, o recurso principal é:', opcoes: ['A suspensão', 'A nota de passagem', 'O salto', 'O cromatismo'], correta: 0, explicacao: 'A síncope cria a dissonância preparada.' },
        { texto: 'No violão, qual voz costuma funcionar como pedal numa textura a três?', opcoes: ['A voz do meio', 'A melodia', 'O baixo', 'Nenhuma'], correta: 0, explicacao: 'Ela tem pouco espaço e se acomoda numa nota repetida.' },
        { texto: 'Como se testa a independência das vozes?', opcoes: ['Cantando uma enquanto se tocam as outras', 'Tocando mais rápido', 'Usando metrônomo', 'Olhando a armadura'], correta: 0, explicacao: 'Se a voz não se sustenta sozinha, ela não é uma voz.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar o exemplo a três vozes mantendo a voz do meio sustentada.',
          'Tocar a mesma passagem com a melodia claramente mais forte que as outras vozes.',
          'Escrever e tocar oito compassos de primeira espécie sobre um baixo dado.',
          'Cantar o baixo enquanto toca as outras duas vozes.'
        ],
        criterio: 'Você domina quando as três vozes soam em planos sonoros distintos e você consegue cantar qualquer uma delas separadamente.'
      }
    },

    {
      id: 'n5.1.7',
      titulo: 'Análise formal: binária, ternária e rondó',
      resumo: 'Como uma peça é construída por fora: seções, repetições e retornos.',
      minutos: 18,
      disciplinas: ['teoria', 'historia'],
      prereq: ['n4.1.8'],
      status: 'implementado',
      cobre: ['Análise formal', 'Forma binária e ternária', 'Rondó'],
      objetivo: 'Identificar a forma de uma peça ouvindo e lendo, e usar essa informação para estudar e memorizar melhor.',
      blocos: [
        { t: 'p', x: 'Antes de decorar uma peça nota por nota, vale saber como ela é *construída*. Praticamente todo o repertório de violão até o século XIX usa três ou quatro formas, e reconhecê-las reduz pela metade o trabalho de memorização: você passa a decorar seções, não compassos.' },
        { t: 'h', x: 'Forma binária: A B' },
        { t: 'p', x: 'Duas seções, cada uma normalmente repetida: ||: A :|| ||: B :||. A primeira sai do tom principal e termina na dominante (ou no relativo, se a peça for menor); a segunda volta. É a forma das danças barrocas e de quase todos os estudos simples de Sor e Carulli.' },
        {
          t: 'tabela',
          cab: ['Seção', 'Onde começa', 'Onde termina', 'Tamanho típico'],
          linhas: [
            ['A', 'Tônica', 'Dominante (ou relativo maior)', '8 ou 16 compassos'],
            ['B', 'Dominante', 'Tônica', '8 a 24 compassos']
          ],
          legenda: 'Na binária "arredondada", o começo do A reaparece no fim do B — é o caso mais comum no violão.'
        },
        {
          t: 'pauta', bpm: 72, numerar: true, quebrar: 4,
          txt: 'c4/q e4/q g4/q e4/q | f4/q d4/q g4/q b3/q | c4/q e4/q d4/q f4/q | g4/b z/b | d4/q g4/q b4/q g4/q | c5/q a4/q d5/q f#4/q | g4/q b4/q a4/q c5/q | b4/b g4/b',
          legenda: 'Quatro compassos de A (terminando em Sol, a dominante) e quatro de B (começando em Sol e caminhando de volta). Esse é o esqueleto binário.'
        },
        { t: 'h', x: 'Forma ternária: A B A' },
        { t: 'p', x: 'Três seções, com a primeira retornando. O B costuma mudar de tom (quase sempre para o relativo ou para a subdominante) e de caráter. É a forma dos minuetos, dos valses e de muita peça romântica — inclusive de Lágrima, de Tárrega.' },
        {
          t: 'comparar',
          a: { titulo: 'Binária (A B)', itens: ['Duas seções', 'A termina fora da tônica', 'B retorna e fecha', 'Danças barrocas, estudos curtos'] },
          b: { titulo: 'Ternária (A B A)', itens: ['Três seções', 'B contrasta em tom e caráter', 'A volta inteiro, muitas vezes sem repetição', 'Minuetos, valses, peças de salão'] }
        },
        { t: 'h', x: 'Rondó: A B A C A' },
        { t: 'p', x: 'Um refrão (A) que volta sempre, intercalado com episódios diferentes (B, C, às vezes D). É alegre e fácil de seguir, e por isso aparece como último movimento de sonatas e em peças de caráter popular. No violão, Sor e Giuliani escreveram muitos rondós.' },
        {
          t: 'lista', itens: [
            'O refrão volta sempre no tom principal.',
            'Cada episódio muda de tom: o primeiro costuma ir à dominante, o segundo ao relativo menor ou à subdominante.',
            'O retorno do refrão pode vir ornamentado — não é obrigatório repetir idêntico.',
            'A coda final normalmente usa material do refrão.'
          ]
        },
        { t: 'h', x: 'Como analisar uma peça em cinco minutos' },
        {
          t: 'passos', itens: [
            'Procure as barras de repetição: elas delimitam seções.',
            'Veja onde estão as cadências fortes (acorde da tônica em tempo forte, com a melodia caindo na tônica).',
            'Marque o tom de cada cadência: se mudou, você está no fim de uma seção.',
            'Compare o começo das seções: se o material do começo volta, há retorno (forma ternária ou rondó).',
            'Escreva o esquema na primeira página da partitura: A(1-8) B(9-16) A(17-24).'
          ]
        },
        {
          t: 'dica', titulo: 'Por que isso acelera o estudo: ',
          x: 'se A aparece três vezes, você estuda A uma vez e revisa duas. E, num branco de memória em apresentação, saber a forma permite pular para o início da seção seguinte em vez de parar.'
        },
        {
          t: 'check', chave: 'forma', titulo: 'Analise o que você toca',
          itens: [
            'Peguei uma peça do meu repertório e marquei as seções na partitura.',
            'Escrevi o esquema formal no alto da primeira página.',
            'Identifiquei o tom em que cada seção termina.',
            'Toquei apenas os quatro primeiros compassos de cada seção, em sequência.',
            'Reconheci de ouvido o retorno do A numa gravação.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Reconhecer formas', rodadas: 5,
          perguntas: [
            { texto: 'Na forma binária, onde normalmente termina a seção A?', opcoes: ['Na dominante', 'Na tônica', 'No relativo menor', 'Em qualquer acorde'], correta: 0, explicacao: 'A primeira seção se afasta e deixa a volta para o B.' },
            { texto: 'O que caracteriza a forma ternária?', opcoes: ['O retorno integral da seção A', 'Duas seções repetidas', 'Um refrão que volta várias vezes', 'A ausência de repetições'], correta: 0, explicacao: 'A B A: a primeira seção retorna.' },
            { texto: 'No rondó, o que volta sempre?', opcoes: ['O refrão, no tom principal', 'O episódio B', 'A coda', 'A introdução'], correta: 0, explicacao: 'O A é o elemento fixo da forma.' },
            { texto: 'Qual pista mais confiável marca o fim de uma seção?', opcoes: ['Uma cadência forte, muitas vezes com barra de repetição', 'Uma mudança de dedilhado', 'O número do compasso', 'Uma pausa curta'], correta: 0, explicacao: 'Cadência e barra de repetição andam juntas.' },
            { texto: 'Para que serve conhecer a forma ao decorar uma peça?', opcoes: ['Permite decorar seções e recuperar-se de um branco', 'Deixa a peça mais rápida', 'Melhora a afinação', 'Facilita a pestana'], correta: 0, explicacao: 'Você memoriza a estrutura, não uma fila de notas.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Analisar compasso a compasso sem olhar o todo.', certo: 'Comece pelas repetições e cadências; o detalhe vem depois.' },
            { erro: 'Confundir repetição com nova seção.', certo: 'Repetir o A não cria um B.' },
            { erro: 'Achar que forma é assunto de prova.', certo: 'É a ferramenta mais prática que existe para memorizar.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Binária: A B, com o A terminando fora da tônica.',
            'Ternária: A B A, com o A voltando inteiro.',
            'Rondó: A B A C A, refrão fixo e episódios variados.',
            'Cadências e barras de repetição marcam os limites das seções.',
            'Analisar a forma reduz o trabalho de memorização e salva apresentações.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o esquema da forma binária?', opcoes: ['A B', 'A B A', 'A B A C A', 'A A B B'], correta: 0, explicacao: 'Duas seções, cada uma normalmente repetida.' },
        { texto: 'Em que forma a seção A retorna integralmente depois de um contraste?', opcoes: ['Ternária', 'Binária', 'Rondó', 'Tema e variações'], correta: 0, explicacao: 'A B A.' },
        { texto: 'Num rondó, os episódios:', opcoes: ['Mudam de tom e de material', 'Repetem o refrão', 'São sempre iguais entre si', 'Ficam no mesmo tom do refrão'], correta: 0, explicacao: 'O contraste é o que justifica o retorno do refrão.' },
        { texto: 'Qual é a pista mais forte do fim de uma seção?', opcoes: ['Uma cadência conclusiva', 'Uma pausa', 'Uma ligadura', 'Uma mudança de dedilhado'], correta: 0, explicacao: 'Quase sempre acompanhada de barra de repetição.' },
        { texto: 'Numa peça em Dó maior na forma binária, a seção A costuma terminar em:', opcoes: ['Sol maior', 'Fá maior', 'Lá menor', 'Dó maior'], correta: 0, explicacao: 'Na dominante.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Analisar uma peça do seu repertório e escrever o esquema formal com os números de compasso.',
          'Tocar apenas o primeiro compasso de cada seção, em sequência, sem olhar a partitura.',
          'Identificar, de ouvido, a forma de uma peça que você não conhece.',
          'Recomeçar uma peça a partir do início da segunda seção, sem hesitar.'
        ],
        criterio: 'Você domina quando consegue, diante de uma partitura nova, escrever o esquema formal em menos de cinco minutos e usá-lo para organizar o estudo.'
      }
    },

    {
      id: 'n5.1.8',
      titulo: 'Tema e variações e forma-sonata',
      resumo: 'As duas formas grandes: uma que transforma um tema, outra que o coloca em conflito.',
      minutos: 20,
      disciplinas: ['teoria', 'historia'],
      prereq: ['n5.1.7'],
      status: 'implementado',
      cobre: ['Tema e variações', 'Forma-sonata'],
      objetivo: 'Entender as duas formas que organizam as peças longas do repertório de violão e saber ouvir cada seção.',
      blocos: [
        { t: 'p', x: 'Binária, ternária e rondó organizam peças curtas. Para peças longas existem duas soluções: variar um tema até esgotá-lo ou colocar dois temas em conflito e resolvê-lo. A primeira é o *tema e variações*; a segunda, a *forma-sonata*. As duas aparecem muito no violão — Sor e Giuliani escreveram variações célebres, e as sonatas de Giuliani e Diabelli são repertório corrente.' },
        { t: 'h', x: 'Tema e variações' },
        { t: 'p', x: 'Apresenta-se um tema simples, geralmente em forma binária, e depois ele retorna transformado várias vezes. O que se mantém é a *estrutura harmônica e o número de compassos*; o que muda é a superfície.' },
        {
          t: 'tabela',
          cab: ['Tipo de variação', 'O que muda', 'Exemplo típico'],
          linhas: [
            ['Figurativa', 'O ritmo e a ornamentação da melodia', 'Tema em semínimas vira colcheias e semicolcheias'],
            ['De modo', 'Maior vira menor (ou o contrário)', 'Normalmente a penúltima variação'],
            ['De textura', 'Muda quem toca a melodia', 'A melodia passa para o baixo'],
            ['De caráter', 'Andamento e compasso', 'Uma variação em 3/4 depois de todas em 2/4'],
            ['Final', 'Virtuosismo e coda', 'Última variação, mais rápida, com coda própria']
          ]
        },
        {
          t: 'pauta', bpm: 66, numerar: true, quebrar: 4,
          txt: 'c4/q e4/q g4/q e4/q | f4/q a4/q g4/q e4/q | d4/q f4/q e4/q g4/q | c4/b z/b | c4/c d4/c e4/c f4/c g4/c f4/c e4/c d4/c | f4/c g4/c a4/c g4/c g4/c f4/c e4/c d4/c | d4/c e4/c f4/c e4/c e4/c f4/c g4/c f4/c | e4/c d4/c c4/b z/q',
          legenda: 'Em cima, o tema em semínimas. Embaixo, a mesma harmonia em colcheias: é a variação figurativa mais simples que existe.'
        },
        { t: 'h', x: 'Forma-sonata' },
        { t: 'p', x: 'Três grandes seções — exposição, desenvolvimento e reexposição — organizadas por um conflito de *tonalidades*. Dois temas são apresentados em tons diferentes; o desenvolvimento os fragmenta e instabiliza; a reexposição traz os dois no mesmo tom, resolvendo o conflito.' },
        {
          t: 'tabela',
          cab: ['Seção', 'O que acontece', 'Tonalidade'],
          linhas: [
            ['Exposição — tema A', 'Primeiro tema, afirmativo', 'Tônica'],
            ['Ponte', 'Modulação', 'Em trânsito'],
            ['Exposição — tema B', 'Segundo tema, contrastante', 'Dominante (ou relativo maior)'],
            ['Desenvolvimento', 'Fragmentos dos temas, modulações rápidas', 'Instável'],
            ['Reexposição — tema A', 'Volta do primeiro tema', 'Tônica'],
            ['Reexposição — tema B', 'Segundo tema, agora sem conflito', 'Tônica'],
            ['Coda', 'Fechamento', 'Tônica']
          ],
          legenda: 'A forma-sonata é, antes de tudo, um drama de tonalidades: sair, brigar e voltar.'
        },
        { t: 'h3', x: 'O que ouvir em cada seção' },
        {
          t: 'lista', itens: [
            '*Exposição*: dois temas nitidamente diferentes, muitas vezes com repetição da seção inteira.',
            '*Desenvolvimento*: você reconhece pedaços dos temas, mas nunca inteiros, e o tom não para quieto.',
            '*Reexposição*: o primeiro tema volta exatamente como no começo — esse é o momento mais fácil de identificar de ouvido.',
            '*Coda*: insistência na tônica, muitas vezes com aceleração.'
          ]
        },
        { t: 'ciclo', legenda: 'O conflito da forma-sonata acontece quase sempre entre tons vizinhos no ciclo das quintas: tônica e dominante, ou tônica e relativo maior.' },
        {
          t: 'tocar', titulo: 'Ouça o conflito de tons',
          seq: [[5, 3], [6, 3], [5, 3]],
          rotulo: 'Conferir Dó – Sol – Dó',
          fim: 'Esses três baixos são, em miniatura, o enredo inteiro de uma forma-sonata.',
          x: 'Toque os três baixos devagar: tônica, dominante, tônica.'
        },
        {
          t: 'check', chave: 'sonata', titulo: 'Escute com o mapa na mão',
          itens: [
            'Ouvi um primeiro movimento de sonata com o esquema na frente e marquei onde começa cada seção.',
            'Identifiquei de ouvido o retorno do tema A na reexposição.',
            'Ouvi um tema com variações e nomeei o tipo de cada variação.',
            'Toquei um tema simples e inventei uma variação figurativa minha.',
            'Comparei o tema B na exposição e na reexposição e percebi a mudança de tom.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'As formas grandes', rodadas: 5,
          perguntas: [
            { texto: 'O que se mantém constante num tema com variações?', opcoes: ['A estrutura harmônica e o número de compassos', 'A melodia exata', 'O andamento', 'A dinâmica'], correta: 0, explicacao: 'O esqueleto permanece; a superfície muda.' },
            { texto: 'Na exposição de uma forma-sonata em Dó maior, o tema B normalmente está em:', opcoes: ['Sol maior', 'Dó maior', 'Fá maior', 'Lá bemol maior'], correta: 0, explicacao: 'Na dominante.' },
            { texto: 'O que acontece com os temas no desenvolvimento?', opcoes: ['São fragmentados e levados por vários tons', 'São repetidos inteiros', 'Desaparecem', 'São tocados mais devagar'], correta: 0, explicacao: 'É a seção instável do drama.' },
            { texto: 'Na reexposição, o tema B aparece em qual tom?', opcoes: ['Na tônica', 'Na dominante', 'No relativo menor', 'Em qualquer tom'], correta: 0, explicacao: 'É assim que o conflito se resolve.' },
            { texto: 'Qual seção é a mais fácil de reconhecer de ouvido?', opcoes: ['A volta do tema A na reexposição', 'A ponte', 'O desenvolvimento', 'A coda'], correta: 0, explicacao: 'O material inicial retorna igual.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Achar que variação é tocar o tema mais rápido.', certo: 'Variação muda a superfície mantendo a harmonia e o tamanho.' },
            { erro: 'Procurar os dois temas da sonata pela melodia apenas.', certo: 'O que define a seção é o tom, não só o desenho melódico.' },
            { erro: 'Pular o desenvolvimento no estudo por ser difícil.', certo: 'É ali que a peça é testada; estude-o primeiro.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tema e variações: estrutura harmônica fixa, superfície transformada.',
            'Tipos de variação: figurativa, de modo, de textura, de caráter e final.',
            'Forma-sonata: exposição, desenvolvimento e reexposição.',
            'O conflito é de tonalidades: o tema B sai na dominante e volta na tônica.',
            'A reexposição é o ponto de referência mais audível da forma.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as três grandes seções da forma-sonata?', opcoes: ['Exposição, desenvolvimento e reexposição', 'A, B e A', 'Refrão, episódio e coda', 'Tema, variação e final'], correta: 0, explicacao: 'Nessa ordem, mais a coda opcional.' },
        { texto: 'Num tema com variações, o que não muda?', opcoes: ['A estrutura harmônica', 'O ritmo', 'A textura', 'O modo'], correta: 0, explicacao: 'É o esqueleto que permite reconhecer o tema.' },
        { texto: 'Em Lá menor, o tema B de uma sonata costuma aparecer em:', opcoes: ['Dó maior, o relativo', 'Lá maior', 'Mi menor', 'Ré menor'], correta: 0, explicacao: 'Nas sonatas em tom menor, o relativo maior é o destino usual.' },
        { texto: 'O desenvolvimento se caracteriza por:', opcoes: ['Fragmentação dos temas e instabilidade tonal', 'Repetição literal', 'Ausência de harmonia', 'Andamento lento'], correta: 0, explicacao: 'É a seção de conflito.' },
        { texto: 'Qual variação costuma mudar o modo da peça?', opcoes: ['Geralmente a penúltima', 'Sempre a primeira', 'Nenhuma', 'Todas'], correta: 0, explicacao: 'É um recurso clássico de contraste antes do final.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar um tema de oito compassos e uma variação figurativa criada por você.',
          'Marcar numa partitura de sonata o início de cada seção.',
          'Identificar de ouvido, numa gravação, o momento da reexposição.',
          'Explicar, em duas frases, qual é o conflito tonal da peça analisada.'
        ],
        criterio: 'Você domina quando consegue ouvir uma peça longa e dizer em que seção está, sem partitura na mão.'
      }
    },

    {
      id: 'n5.1.9',
      titulo: 'História da música ocidental e análise estilística',
      resumo: 'Seis períodos, o que muda em cada um e como isso decide o jeito de tocar.',
      minutos: 22,
      disciplinas: ['historia', 'interpretacao'],
      prereq: ['n5.1.7'],
      status: 'implementado',
      cobre: ['História da música ocidental', 'Análise estilística'],
      objetivo: 'Situar qualquer peça do repertório num período histórico e extrair daí decisões concretas de interpretação.',
      blocos: [
        { t: 'p', x: 'Saber que Bach é barroco não é informação de prova: é uma instrução de execução. Cada período tem convenções próprias sobre andamento, ornamentação, dinâmica e vibrato, e tocar uma gavota como se fosse um noturno é um erro tão audível quanto uma nota errada.' },
        { t: 'h', x: 'Os seis períodos' },
        {
          t: 'tabela',
          cab: ['Período', 'Anos', 'Marcas', 'No violão'],
          linhas: [
            ['Renascimento', '1400–1600', 'Polifonia vocal, modos, ritmo regular', 'Vihuela: Narváez, Mudarra, Milán'],
            ['Barroco', '1600–1750', 'Baixo contínuo, ornamentação, terraced dynamics', 'Alaúde e guitarra barroca: Bach (transcrições), Sanz, Weiss'],
            ['Clássico', '1750–1820', 'Frases simétricas, forma-sonata, clareza', 'Sor, Giuliani, Carulli, Carcassi, Aguado'],
            ['Romântico', '1820–1900', 'Rubato, cromatismo, expressão pessoal', 'Tárrega, Coste, Mertz, Regondi'],
            ['Moderno', '1900–1950', 'Nacionalismo, novas escalas, dissonância', 'Villa-Lobos, Barrios, Ponce, Turina'],
            ['Contemporâneo', '1950–hoje', 'Técnicas estendidas, novas notações', 'Brouwer, Takemitsu, Assad']
          ]
        },
        { t: 'h', x: 'O que muda na hora de tocar' },
        {
          t: 'comparar',
          a: { titulo: 'Barroco e clássico', itens: ['Pulso estável; rubato muito discreto', 'Dinâmica em degraus (forte/piano), não em rampas longas', 'Vibrato é ornamento ocasional, não contínuo', 'Ornamentos (trinados, mordentes) começam na nota superior, no tempo', 'Articulação variada: nem tudo ligado'] },
          b: { titulo: 'Romântico e moderno', itens: ['Rubato é parte da linguagem', 'Crescendos longos e contínuos', 'Vibrato como cor expressiva constante', 'Ornamentos mais livres', 'Timbre varia muito dentro da mesma peça'] }
        },
        { t: 'h', x: 'Análise estilística em cinco perguntas' },
        {
          t: 'passos', itens: [
            'Qual é a textura? Polifônica (barroco), melodia com acompanhamento (clássico/romântico) ou blocos de cor (moderno)?',
            'Como são as frases? Simétricas de quatro em quatro (clássico) ou irregulares (romântico, moderno)?',
            'Como é a harmonia? Diatônica com dominantes (clássico), cromática (romântico) ou modal/escalas exóticas (moderno)?',
            'Há indicações de dinâmica e andamento na partitura? Quanto mais indicações, mais tarde a peça.',
            'Qual é o ritmo? Dança identificável (barroco), compasso regular com cadências (clássico) ou ritmo folclórico e assimétrico (moderno)?'
          ]
        },
        {
          t: 'pauta', bpm: 76, numerar: true, quebrar: 4,
          txt: 'g3/c b3/c d4/c g4/c b4/c d5/c b4/c g4/c | c4/c e4/c g4/c c5/c e5/c c5/c g4/c e4/c | d4/c f#4/c a4/c d5/c f#5/c d5/c a4/c f#4/c | g4/c b4/c d5/c g5/c b4/b',
          legenda: 'Escrita barroca típica: um arpejo contínuo em semicolcheias que desenha a harmonia. A melodia está implícita nas notas agudas.'
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'b4/q. a4/c g4/q e4/q | a4/b. z/q | g4/q. f#4/c e4/q d4/q | e4/o',
          legenda: 'Escrita romântica: melodia cantabile, ritmo com pontos, frase irregular. Aqui o rubato é esperado.'
        },
        { t: 'h', x: 'O caso do violão' },
        { t: 'p', x: 'O violão de seis cordas simples só existe desde cerca de 1800. Tudo o que tocamos de antes disso é *transcrição*: Bach escreveu para alaúde, violino ou violoncelo; a música de vihuela foi escrita em tablatura para um instrumento com outra afinação. Isso dá liberdade — e responsabilidade — ao intérprete, que precisa escolher oitavas, acrescentar baixos e decidir ornamentos.' },
        {
          t: 'dica', titulo: 'Uma regra prática: ',
          x: 'quanto mais antiga a peça, menos a partitura diz e mais o intérprete decide. Numa peça de Brouwer, siga a partitura ao pé da letra; numa suíte de Bach, a partitura é o começo da conversa.'
        },
        {
          t: 'check', chave: 'estilo', titulo: 'Aplique ao seu repertório',
          itens: [
            'Classifiquei cada peça que estudo num período histórico.',
            'Para uma peça barroca, decidi onde usar vibrato e onde não usar.',
            'Toquei uma frase clássica com dinâmica em degraus e depois em rampa, e comparei.',
            'Ouvi duas gravações diferentes da mesma peça e identifiquei as escolhas de estilo de cada intérprete.',
            'Escrevi, em uma frase, qual é a "regra de ouro" estilística de cada peça do meu repertório.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Situar o estilo', rodadas: 6,
          perguntas: [
            { texto: 'Sor e Giuliani pertencem a qual período?', opcoes: ['Clássico', 'Barroco', 'Romântico', 'Moderno'], correta: 0, explicacao: 'Escreveram entre o fim do século XVIII e o começo do XIX.' },
            { texto: 'Dinâmica em degraus (forte/piano alternados) é típica de:', opcoes: ['Barroco', 'Romantismo', 'Século XX', 'Contemporâneo'], correta: 0, explicacao: 'O cravo não fazia crescendo: a dinâmica mudava por blocos.' },
            { texto: 'Rubato constante é característico de qual período?', opcoes: ['Romântico', 'Renascimento', 'Barroco', 'Clássico'], correta: 0, explicacao: 'A expressão pessoal é o valor central do romantismo.' },
            { texto: 'Villa-Lobos e Barrios pertencem a qual período?', opcoes: ['Moderno', 'Romântico', 'Clássico', 'Contemporâneo'], correta: 0, explicacao: 'Primeira metade do século XX, com forte sotaque nacional.' },
            { texto: 'Por que tocar Bach no violão envolve decisões extras?', opcoes: ['Porque é transcrição de outro instrumento', 'Porque não há partituras', 'Porque é música modal', 'Porque não tem harmonia'], correta: 0, explicacao: 'É preciso escolher oitavas, baixos e ornamentos.' },
            { texto: 'Quanto mais indicações de dinâmica e andamento uma partitura tem:', opcoes: ['Mais recente ela tende a ser', 'Mais antiga ela tende a ser', 'Mais difícil ela é', 'Mais livre é o intérprete'], correta: 0, explicacao: 'A notação foi ficando mais detalhada com o tempo.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar vibrato contínuo em música barroca.', certo: 'No barroco, o vibrato é ornamento pontual.' },
            { erro: 'Tocar uma peça clássica com rubato romântico.', certo: 'O pulso é o valor central no classicismo.' },
            { erro: 'Seguir uma edição moderna de Bach como se fosse autógrafo.', certo: 'Dedilhados e dinâmicas foram acrescentados pelo editor; questione-os.' },
            { erro: 'Achar que estilo é gosto pessoal.', certo: 'É informação histórica. A liberdade vem depois de conhecê-la.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Seis períodos, cada um com convenções próprias de execução.',
            'Barroco e clássico: pulso firme, dinâmica em degraus, vibrato pontual.',
            'Romântico e moderno: rubato, rampas de dinâmica, vibrato expressivo.',
            'Cinco perguntas (textura, frase, harmonia, indicações, ritmo) situam qualquer peça.',
            'Tudo anterior a 1800 é transcrição: o intérprete decide mais.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual período vai de 1750 a 1820?', opcoes: ['Clássico', 'Barroco', 'Romântico', 'Renascimento'], correta: 0, explicacao: 'É o período de Sor, Giuliani e Carulli.' },
        { texto: 'A dinâmica "em degraus" é típica de qual período?', opcoes: ['Barroco', 'Romântico', 'Moderno', 'Contemporâneo'], correta: 0, explicacao: 'Herança dos instrumentos de teclado da época.' },
        { texto: 'Narváez e Mudarra escreveram para qual instrumento?', opcoes: ['Vihuela', 'Violão de seis cordas', 'Alaúde barroco', 'Guitarra elétrica'], correta: 0, explicacao: 'Renascimento espanhol.' },
        { texto: 'Qual é a marca interpretativa central do romantismo?', opcoes: ['Rubato e expressão pessoal', 'Pulso rígido', 'Ausência de dinâmica', 'Improvisação modal'], correta: 0, explicacao: 'O tempo flexiona a serviço da expressão.' },
        { texto: 'O violão de seis cordas simples surgiu por volta de:', opcoes: ['1800', '1600', '1700', '1900'], correta: 0, explicacao: 'Antes disso, guitarra barroca e vihuela.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Classificar três peças do seu repertório por período e justificar em uma frase cada uma.',
          'Tocar uma frase com estilo barroco (pulso firme, pouco vibrato) e a mesma frase com estilo romântico.',
          'Comparar duas gravações da mesma peça e listar três diferenças de estilo.',
          'Escolher, numa peça barroca sua, onde entram os ornamentos e justificar.'
        ],
        criterio: 'Você domina quando, diante de uma partitura desconhecida, consegue deduzir o período e tomar três decisões concretas de execução a partir disso.'
      }
    }
  ]
};
