// NÍVEL 1 · MÓDULO 1.1 — Conhecendo o violão
// Sete aulas: história, anatomia, tipos de violão, as seis cordas, os dedos,
// afinação e cuidados com o instrumento.

export const M11 = {
  id: '1.1',
  titulo: 'Conhecendo o violão',
  objetivo: 'Saber o que você tem nas mãos: de onde veio o violão, como ele é por dentro e por fora, como se chama cada parte, cada corda e cada dedo, e como deixá-lo afinado e bem cuidado.',
  aulas: [

    // ---------------------------------------------------------------- 1.1.1
    {
      id: 'n1.1.1',
      titulo: 'De onde vem o violão',
      resumo: 'A história do instrumento, do alaúde ao violão de hoje.',
      minutos: 12,
      disciplinas: ['historia'],
      prereq: [],
      status: 'implementado',
      cobre: ['História e origem do violão clássico'],
      objetivo: 'Entender que o violão é o resultado de séculos de mudanças, e reconhecer os nomes que aparecerão em todo o resto do curso.',
      blocos: [
        { t: 'p', x: 'Antes de pôr a mão nas cordas, vale saber o que você está segurando. O violão não foi inventado por uma pessoa num dia. Ele é o fim de uma longa fila de instrumentos de corda que foram mudando de forma, de tamanho e de número de cordas durante uns oitocentos anos.' },
        { t: 'h', x: 'Os avós do violão' },
        { t: 'p', x: 'Na Europa medieval já existiam instrumentos com caixa de madeira, braço e cordas dedilhadas. Dois deles aparecem muito nos desenhos da época: a *guitarra latina*, de caixa com cintura, e a *guitarra morisca*, de caixa arredondada, trazida pelos árabes à Península Ibérica.' },
        { t: 'p', x: 'No século XVI, a Espanha tinha a *vihuela*: seis ordens de cordas (pares afinados juntos), afinação muito parecida com a do violão de hoje e um repertório escrito riquíssimo. No resto da Europa, o mesmo papel era do *alaúde*, de caixa em formato de meia pera. Quem compunha para vihuela e alaúde já escrevia em tablatura, exatamente a mesma ideia de notação que você usa hoje no celular.' },
        { t: 'p', x: 'No século XVII veio a *guitarra barroca*, de cinco ordens, muito usada para acompanhar canto e dança. E só no fim do século XVIII o instrumento passou a ter seis cordas simples, uma de cada, como o violão que você tem na mão.' },
        { t: 'h', x: 'O violão moderno nasce na Espanha' },
        { t: 'p', x: 'O salto decisivo foi dado por um luthier andaluz, *Antonio de Torres* (1817–1892). Por volta de 1850 ele aumentou o corpo, afinou a espessura do tampo e inventou o leque de varetas que fica colado por dentro do tampo. O resultado foi um instrumento muito mais sonoro e equilibrado. Praticamente todo violão clássico feito desde então segue o desenho de Torres.' },
        { t: 'p', x: 'A geração anterior a Torres já tinha dado ao violão um repertório sério: *Fernando Sor*, *Dionisio Aguado*, *Mauro Giuliani*, *Ferdinando Carulli* e *Matteo Carcassi* escreveram, entre 1800 e 1850, os estudos que até hoje todo estudante toca. Você vai encontrar todos eles no Nível 3 deste curso.' },
        { t: 'p', x: 'Depois veio *Francisco Tárrega* (1852–1909), que organizou a técnica moderna da mão direita e escreveu peças que se tornaram símbolos do instrumento, como *Recuerdos de la Alhambra*. E no século XX, *Andrés Segovia* (1893–1987) levou o violão para as grandes salas de concerto, convencendo compositores do mundo inteiro a escrever para ele.' },
        { t: 'dica', x: 'As cordas de náilon são recentes. Até a Segunda Guerra, as cordas agudas eram de tripa de animal. O náilon chegou por volta de 1946 e mudou o som, a afinação e a durabilidade do instrumento para sempre.' },
        { t: 'h', x: 'E no Brasil?' },
        { t: 'p', x: 'A palavra *violão* é nossa: é o aumentativo de "viola", ou seja, "viola grande". O instrumento chegou com os portugueses e, aqui, entrou pela porta da rua, no choro, na modinha e na seresta, antes de entrar nos conservatórios.' },
        { t: 'p', x: 'Nomes para guardar: *Heitor Villa-Lobos* (1887–1959), que escreveu os 12 Estudos e os 5 Prelúdios, hoje tocados no mundo inteiro; *João Pernambuco*, *Dilermando Reis*, *Garoto* e, mais tarde, *Baden Powell*. O violão brasileiro é levado a sério em qualquer lugar do planeta.' },
        {
          t: 'tabela',
          cab: ['Quando', 'Instrumento', 'O que mudou'],
          linhas: [
            ['Séc. XIII–XV', 'Guitarra latina e morisca', 'Caixa de madeira, braço e cordas dedilhadas'],
            ['Séc. XVI', 'Vihuela e alaúde', 'Seis ordens de cordas; nasce a tablatura'],
            ['Séc. XVII', 'Guitarra barroca', 'Cinco ordens; acompanhamento de canto e dança'],
            ['Fim do séc. XVIII', 'Guitarra de seis cordas', 'Uma corda por nota, como hoje'],
            ['~1850', 'Violão de Torres', 'Caixa maior, leque interno: muito mais som'],
            ['~1946', 'Cordas de náilon', 'Substituem a tripa; afinação mais estável']
          ],
          legenda: 'Oitocentos anos em seis linhas. Cada etapa deixou alguma coisa no instrumento que você tem hoje.'
        },
        {
          t: 'resumo', itens: [
            'O violão vem de uma longa linhagem: guitarra latina, vihuela, alaúde e guitarra barroca.',
            'Antonio de Torres, por volta de 1850, criou o formato do violão clássico moderno.',
            'Sor, Aguado, Giuliani, Carulli e Carcassi escreveram o repertório de estudo; Tárrega organizou a técnica; Segovia levou o violão ao concerto.',
            'Cordas de náilon só existem desde ~1946.',
            '"Violão" quer dizer "viola grande", e no Brasil o instrumento nasceu na rua antes de chegar à escola.'
          ]
        },
        {
          t: 'check', chave: 'historia', titulo: 'Observe e ouça',
          itens: [
            'Ouvi uma gravação de alaúde ou de vihuela e comparei com o som do violão.',
            'Contei as cordas do meu violão e confirmei que são seis — a herança do século XIX.',
            'Olhei por dentro da boca do violão e vi as barras que sustentam o tampo.',
            'Procurei a etiqueta com o nome do fabricante e o modelo do meu instrumento.'
          ]
        },
      ],
      quiz: [
        { texto: 'Quem criou, por volta de 1850, o formato do violão clássico moderno?', opcoes: ['Antonio de Torres', 'Francisco Tárrega', 'Andrés Segovia', 'Fernando Sor'], correta: 0, explicacao: 'Torres era luthier: aumentou a caixa e criou o leque de varetas do tampo.' },
        { texto: 'O que era a vihuela?', opcoes: ['Um instrumento espanhol do século XVI, com seis ordens de cordas', 'Uma dança da corte francesa', 'O nome antigo do cavalete', 'Uma peça de Villa-Lobos'], correta: 0, explicacao: 'A vihuela tinha afinação parecida com a do violão e um repertório escrito em tablatura.' },
        { texto: 'As cordas agudas do violão eram feitas de que material antes de 1946?', opcoes: ['Tripa de animal', 'Aço', 'Seda', 'Náilon'], correta: 0, explicacao: 'O náilon chegou só depois da Segunda Guerra Mundial.' },
        { texto: 'Quantas cordas tinha a guitarra barroca do século XVII?', opcoes: ['Cinco ordens', 'Seis cordas simples', 'Quatro cordas', 'Doze cordas'], correta: 0, explicacao: 'Só no fim do século XVIII o instrumento passou a ter seis cordas simples.' },
        { texto: 'Quem escreveu os 12 Estudos para violão, hoje tocados no mundo inteiro?', opcoes: ['Heitor Villa-Lobos', 'Baden Powell', 'Dilermando Reis', 'Matteo Carcassi'], correta: 0, explicacao: 'Villa-Lobos escreveu os 12 Estudos e os 5 Prelúdios, pilares do repertório.' },
        { texto: 'De onde vem a palavra "violão"?', opcoes: ['É o aumentativo de "viola"', 'Vem do italiano violone', 'É uma marca antiga de instrumentos', 'Vem do tupi'], correta: 0, explicacao: 'Viola + ão: viola grande.' }
      ],
      pratica: {
        titulo: 'Para fechar a aula',
        itens: [
          'Consigo dizer, com minhas palavras, de onde veio o violão.',
          'Sei quem foi Antonio de Torres e por que ele é importante.',
          'Reconheço pelo menos três compositores citados na aula.'
        ],
        criterio: 'Esta aula é de contexto: basta conseguir contar a história em voz alta para alguém.'
      }
    },

    // ---------------------------------------------------------------- 1.1.2
    {
      id: 'n1.1.2',
      titulo: 'As partes do violão',
      resumo: 'Corpo, tampo, boca, braço, escala, trastes, pestana, cavalete e tarraxas.',
      minutos: 15,
      disciplinas: ['tecnica'],
      prereq: ['n1.1.1'],
      status: 'implementado',
      cobre: ['Anatomia do instrumento', 'Corpo, braço, tampo, cavalete, tarraxas, trastes e cordas'],
      objetivo: 'Nomear corretamente cada parte do violão e entender o caminho que o som faz, da corda até o seu ouvido.',
      blocos: [
        { t: 'p', x: 'Daqui para a frente, o curso inteiro vai usar estes nomes. Quando a aula disser "aperte a 2ª corda na casa 3", você precisa saber exatamente onde isso fica. Vale a pena parar cinco minutos aqui e aprender de vez.' },
        { t: 'violao', legenda: 'O violão inteiro, com o nome de cada parte. Toque no seu instrumento enquanto lê: encontre cada peça de verdade.' },
        { t: 'h', x: 'O caminho do som' },
        { t: 'p', x: 'Entender o caminho do som explica quase toda a anatomia do instrumento. Quando você toca uma corda, ela vibra. Mas uma corda sozinha faz um som fraquíssimo: ela é fina demais para empurrar muito ar.' },
        {
          t: 'passos', itens: [
            'Você põe a corda para vibrar com o dedo da mão direita.',
            'A vibração desce pela corda até o *cavalete*, que está colado no tampo.',
            'O cavalete balança o *tampo*, que é uma tábua fina e grande: ela empurra muito ar.',
            'Parte do som sai direto do tampo; outra parte entra na *caixa*, ressoa lá dentro e sai pela *boca*.',
            'Do outro lado, a vibração para na *pestana* (ou no traste que você estiver apertando). Esses dois pontos marcam o começo e o fim da parte que vibra.'
          ]
        },
        { t: 'dica', x: 'É por isso que o tampo é feito de madeira fina e leve, geralmente abeto ou cedro: ele precisa vibrar. Quanto melhor o tampo, melhor o violão. As laterais e o fundo importam bem menos.' },
        { t: 'h', x: 'Parte por parte' },
        {
          t: 'tabela',
          cab: ['Parte', 'Onde fica', 'Para que serve'],
          linhas: [
            ['Corpo (caixa)', 'A parte larga', 'Amplifica o som; é a caixa de ressonância'],
            ['Tampo', 'A frente do corpo', 'Vibra e produz quase todo o som'],
            ['Boca', 'O buraco redondo', 'Deixa o som da caixa sair'],
            ['Cavalete', 'No tampo, perto da base', 'Prende as cordas e leva a vibração ao tampo'],
            ['Braço', 'A parte comprida', 'Onde a mão esquerda trabalha'],
            ['Escala', 'A madeira escura sobre o braço', 'A superfície onde você aperta as cordas'],
            ['Trastes', 'As barrinhas de metal', 'Definem a altura exata de cada nota'],
            ['Casa', 'O espaço entre dois trastes', 'Cada casa é um semitom'],
            ['Pestana', 'A peça clara no fim do braço', 'Marca onde começa a parte vibrante da corda'],
            ['Mão (cabeça)', 'A ponta do braço', 'Sustenta as tarraxas'],
            ['Tarraxas', 'As engrenagens da cabeça', 'Esticam ou afrouxam cada corda: é com elas que se afina']
          ]
        },
        { t: 'h', x: 'Trastes e casas: cuidado para não confundir' },
        { t: 'p', x: 'O *traste* é a barrinha de metal. A *casa* é o espaço entre duas barrinhas. Quando alguém diz "casa 3", quer dizer o terceiro espaço, contando a partir da pestana. O dedo vai *dentro* da casa, encostado no traste da frente, nunca em cima do metal.' },
        { t: 'braco', casas: 5, notas: [{ corda: 1, casa: 1, rotulo: '1', classe: 'raiz' }, { corda: 1, casa: 2, rotulo: '2', classe: 'raiz' }, { corda: 1, casa: 3, rotulo: '3', classe: 'raiz' }], legenda: 'As três primeiras casas na 1ª corda. Repare que o número da casa é o espaço, não a barrinha.' },
        {
          t: 'erros', itens: [
            { erro: 'Chamar o cavalete de "ponte" e se perder lendo partituras em português.', certo: 'Em português, a peça colada no tampo é o cavalete; o pedacinho branco em cima dela é o rastilho.' },
            { erro: 'Pôr o dedo em cima do traste de metal.', certo: 'O dedo vai dentro da casa, bem perto do traste da frente. Assim a nota sai limpa com pouca força.' },
            { erro: 'Contar as casas a partir do corpo do violão.', certo: 'A casa 1 é a mais próxima da pestana, lá na cabeça.' }
          ]
        },
        {
          t: 'check', chave: 'anatomia', titulo: 'Com o violão na mão, encontre:',
          itens: ['O tampo e a boca', 'O cavalete e o rastilho', 'A pestana', 'A escala e os trastes', 'A casa 1, a casa 3 e a casa 5', 'As seis tarraxas']
        },
        {
          t: 'resumo', itens: [
            'A corda vibra, o cavalete leva a vibração ao tampo, e o tampo faz o som.',
            'A parte vibrante da corda vai da pestana (ou do traste apertado) até o cavalete.',
            'Traste é a barrinha de metal; casa é o espaço entre duas barrinhas.',
            'A casa 1 fica junto à pestana, não junto ao corpo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual parte do violão produz a maior parte do som?', opcoes: ['O tampo', 'O fundo', 'O braço', 'A boca'], correta: 0, explicacao: 'O tampo é a tábua fina da frente: é ela que vibra e empurra o ar.' },
        { texto: 'Para que serve a boca do violão?', opcoes: ['Deixar sair o som que ressoou dentro da caixa', 'Deixar a umidade entrar', 'Afinar o instrumento', 'Prender as cordas'], correta: 0, explicacao: 'A boca é a saída do som da caixa de ressonância.' },
        { texto: 'Qual a diferença entre traste e casa?', opcoes: ['Traste é a barrinha de metal; casa é o espaço entre duas barrinhas', 'São a mesma coisa', 'Traste é a corda; casa é o dedo', 'Casa é a barrinha; traste é o espaço'], correta: 0, explicacao: 'Você aperta a corda dentro da casa, não em cima do traste.' },
        { texto: 'Onde fica a casa 1?', opcoes: ['Junto à pestana, no começo do braço', 'Junto ao corpo do violão', 'No meio do braço', 'No cavalete'], correta: 0, explicacao: 'As casas são contadas a partir da pestana.' },
        { texto: 'O que a tarraxa faz?', opcoes: ['Estica ou afrouxa a corda, mudando a afinação', 'Segura o braço no corpo', 'Amplifica o som', 'Marca a casa 12'], correta: 0, explicacao: 'Afinar é girar tarraxa.' },
        { texto: 'A parte da corda que realmente vibra vai de onde até onde?', opcoes: ['Da pestana (ou do traste apertado) até o cavalete', 'Da tarraxa até o cavalete', 'Da pestana até a boca', 'De uma ponta a outra do braço'], correta: 0, explicacao: 'Por isso, apertando numa casa você encurta a corda e a nota fica mais aguda.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Aponto no meu violão, sem olhar a aula, o tampo, a boca, o cavalete, a pestana, a escala e as tarraxas.',
          'Encontro a casa 1, a casa 5 e a casa 12 sem contar errado.',
          'Explico o caminho do som, da corda ao ouvido.'
        ],
        criterio: 'Você domina quando consegue apontar cada parte no instrumento de verdade, sem consultar o desenho.'
      }
    },

    // ---------------------------------------------------------------- 1.1.3
    {
      id: 'n1.1.3',
      titulo: 'Clássico, acústico ou elétrico?',
      resumo: 'As diferenças reais entre os três e por que elas importam para você.',
      minutos: 10,
      disciplinas: ['tecnica', 'historia'],
      prereq: ['n1.1.2'],
      status: 'implementado',
      cobre: ['Diferenças entre violão clássico, acústico e elétrico'],
      objetivo: 'Saber qual instrumento você tem, o que esperar dele e por que este curso usa o violão clássico como referência.',
      blocos: [
        { t: 'p', x: 'Os três se parecem de longe, mas são instrumentos diferentes, com cordas diferentes, braço diferente e técnica diferente. Escolher errado atrapalha o aprendizado; saber o que você tem evita frustração.' },
        {
          t: 'comparar',
          a: { titulo: 'Violão clássico (nylon)', itens: ['Cordas de náilon nas três agudas e náilon com fio metálico nas três graves', 'Braço largo (uns 5 cm na pestana): os dedos cabem sem esbarrar', 'Corda macia: machuca muito menos no começo', 'Som redondo e doce, feito para dedilhar', 'Tocado com os dedos, sem palheta', 'É o instrumento deste curso'] },
          b: { titulo: 'Violão acústico (aço)', itens: ['Cordas de aço: som mais brilhante e mais alto', 'Braço mais estreito e cordas mais duras', 'Dói mais nos primeiros meses', 'Feito para acompanhar canto e tocar com palheta', 'Tem tirante de aço dentro do braço', 'Serve para o curso, mas exige mais força'] }
        },
        { t: 'h', x: 'E a guitarra elétrica?' },
        { t: 'p', x: 'A guitarra elétrica quase não faz som sozinha: o corpo é maciço e as cordas de aço são lidas por captadores magnéticos que transformam a vibração em sinal elétrico. Sem amplificador, não há música. O braço é fino, as cordas são leves e a técnica de mão direita é outra.' },
        {
          t: 'aviso', titulo: 'Nunca faça isto: ',
          x: 'não ponha cordas de aço num violão clássico. O tampo e o cavalete de um violão de náilon não aguentam a tração do aço: o instrumento empena ou o cavalete descola. O contrário (náilon num violão de aço) não quebra nada, mas soa frouxo e desafinado.'
        },
        {
          t: 'tabela',
          cab: ['', 'Clássico', 'Acústico', 'Elétrica'],
          linhas: [
            ['Cordas', 'Náilon', 'Aço', 'Aço (leves)'],
            ['Largura do braço', '~52 mm', '~43 mm', '~42 mm'],
            ['Dói no começo?', 'Pouco', 'Bastante', 'Médio'],
            ['Precisa de amplificador?', 'Não', 'Não', 'Sim'],
            ['Toca-se com', 'Dedos', 'Palheta ou dedos', 'Palheta ou dedos'],
            ['Serve para este curso', 'Ideal', 'Sim', 'Com limitações']
          ]
        },
        { t: 'p', x: 'Se você tem um violão de aço, pode fazer o curso inteiro. Duas recomendações: use cordas de tensão leve, e espere uns dois meses até os dedos criarem calo. Se puder escolher, comece no clássico: o braço largo ensina a mão esquerda a se posicionar direito, e a corda macia deixa você estudar mais tempo por dia.' },
        {
          t: 'resumo', itens: [
            'Clássico = náilon, braço largo, dedos. É o instrumento de referência do curso.',
            'Acústico = aço, braço estreito, som mais brilhante, machuca mais no começo.',
            'Elétrica = corpo maciço, captadores, precisa de amplificador.',
            'Jamais ponha cordas de aço num violão de náilon.'
          ]
        },
        {
          t: 'check', chave: 'tipos', titulo: 'Compare na prática',
          itens: [
            'Toquei (ou ouvi) um violão de nylon e um de aço e percebi a diferença de timbre.',
            'Senti a diferença de largura entre o braço de um clássico e de um folk.',
            'Identifiquei qual é o tipo do violão que eu tenho.',
            'Toquei uma corda solta com a ponta do dedo e com a unha e comparei o som.'
          ]
        },
      ],
      quiz: [
        { texto: 'Qual a principal diferença entre violão clássico e acústico?', opcoes: ['O material das cordas: náilon contra aço', 'O número de cordas', 'A afinação', 'O número de casas'], correta: 0, explicacao: 'Daí vêm todas as outras diferenças: largura do braço, dureza da corda e timbre.' },
        { texto: 'Por que não se deve pôr cordas de aço num violão clássico?', opcoes: ['A tração é muito maior e pode empenar o braço ou descolar o cavalete', 'Porque o som fica agudo demais', 'Porque enferruja o náilon', 'Porque desafina mais rápido'], correta: 0, explicacao: 'O instrumento não foi construído para essa tensão.' },
        { texto: 'A guitarra elétrica produz som sem amplificador?', opcoes: ['Quase nenhum: o corpo é maciço', 'Sim, igual ao violão', 'Sim, mas só nas cordas graves', 'Sim, se as cordas forem de náilon'], correta: 0, explicacao: 'Os captadores transformam a vibração em sinal elétrico; sem amplificador não há volume.' },
        { texto: 'Qual violão tem o braço mais largo?', opcoes: ['O clássico', 'O acústico', 'A guitarra elétrica', 'Todos têm a mesma largura'], correta: 0, explicacao: 'Cerca de 52 mm na pestana, contra 43 mm do acústico.' },
        { texto: 'Se você só tem um violão de aço, o que fazer?', opcoes: ['Fazer o curso normalmente, de preferência com cordas de tensão leve', 'Desistir até comprar um clássico', 'Trocar por cordas de náilon', 'Tocar só com palheta'], correta: 0, explicacao: 'Tudo o que o curso ensina funciona no aço; só exige um pouco mais de força no início.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: ['Sei dizer que tipo de violão eu tenho e de que material são minhas cordas.', 'Entendo por que a corda de aço não serve no meu instrumento (ou por que serve).'],
        criterio: 'Basta identificar corretamente o seu próprio instrumento.'
      }
    },

    // ---------------------------------------------------------------- 1.1.4
    {
      id: 'n1.1.4',
      titulo: 'As seis cordas',
      resumo: 'Número, nome, grossura e som de cada corda — e por que a 1ª é a de baixo.',
      minutos: 14,
      disciplinas: ['tecnica', 'teoria'],
      prereq: ['n1.1.2'],
      status: 'implementado',
      cobre: ['Identificação das seis cordas', 'Afinação padrão'],
      objetivo: 'Identificar as seis cordas pelo número e pelo nome, de olhos fechados, e saber qual é mais grave e qual é mais aguda.',
      blocos: [
        { t: 'p', x: 'Esta aula é curta e vale ouro. Todo o resto do curso vai dizer coisas como "3ª corda, casa 2". Se o número da corda não estiver automático na sua cabeça, cada exercício vira um quebra-cabeça.' },
        { t: 'h', x: 'A regra de ouro da numeração' },
        {
          t: 'dica', titulo: 'Decore isto: ',
          x: 'a *1ª corda é a mais fina*, aquela que fica embaixo quando você está com o violão no colo. A *6ª é a mais grossa*, a de cima. Parece invertido, mas é assim no mundo inteiro: a numeração segue a altura do som, do mais agudo para o mais grave.'
        },
        {
          t: 'tabela',
          cab: ['Corda', 'Nome', 'Cifra', 'Como é'],
          linhas: [
            ['1ª', 'Mi agudo', 'E', 'A mais fina, a de baixo'],
            ['2ª', 'Si', 'B', 'Fina, de náilon'],
            ['3ª', 'Sol', 'G', 'A mais grossa das de náilon puro'],
            ['4ª', 'Ré', 'D', 'A primeira com fio metálico'],
            ['5ª', 'Lá', 'A', 'Grave'],
            ['6ª', 'Mi grave', 'E', 'A mais grossa, a de cima']
          ],
          legenda: 'As duas pontas são Mi: a 1ª e a 6ª têm o mesmo nome, com duas oitavas de diferença.'
        },
        { t: 'braco', casas: 5, notas: [{ corda: 1, casa: 0, rotulo: 'Mi', classe: 'raiz' }, { corda: 2, casa: 0, rotulo: 'Si', classe: 'neutro' }, { corda: 3, casa: 0, rotulo: 'Sol', classe: 'neutro' }, { corda: 4, casa: 0, rotulo: 'Ré', classe: 'neutro' }, { corda: 5, casa: 0, rotulo: 'Lá', classe: 'neutro' }, { corda: 6, casa: 0, rotulo: 'Mi', classe: 'raiz' }], tocar: true, bpm: 60, rotuloTocar: '▶ Ouvir as seis cordas soltas', legenda: 'As seis cordas soltas, da 1ª (em cima no desenho) à 6ª. Toque o botão e ouça; depois toque você, no seu violão.' },
        { t: 'h', x: 'Como guardar isso na memória' },
        { t: 'p', x: 'Da 6ª para a 1ª, de cima para baixo, lê-se: *Mi, Lá, Ré, Sol, Si, Mi*. Diga em voz alta umas dez vezes, sempre nessa ordem, tocando cada corda. Em dois ou três dias isso fica automático.' },
        { t: 'p', x: 'Muita gente usa frases para decorar, como "*Mi*nha *Lá*grima *Ré*ga *Sol*o *Si*lencioso do *Mi*lho". Use se ajudar, mas o que realmente grava é tocar: olho na corda, dedo na corda, nome em voz alta.' },
        {
          t: 'tocar', titulo: 'Confira no violão (microfone)',
          seq: [[6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0]],
          rotulo: 'Tocar as seis cordas, da 6ª à 1ª',
          x: 'Toque uma corda solta por vez, da mais grossa para a mais fina. O app escuta e confere. Se uma corda não for reconhecida, provavelmente ela está desafinada: a próxima aula resolve isso.',
          fim: 'Você percorreu as seis cordas na ordem.'
        },
        { t: 'exercicio', tipo: 'corda', titulo: 'Qual é esta corda?', rodadas: 10, x: 'O app acende uma corda no braço e você diz o nome dela.' },
        {
          t: 'erros', itens: [
            { erro: 'Achar que a 1ª corda é a de cima, a mais grossa.', certo: 'A 1ª é a mais fina, a de baixo. A 6ª é a mais grossa.' },
            { erro: 'Confundir "corda mais grossa" com "nota mais alta".', certo: 'Quanto mais grossa a corda, mais grave (mais baixo) o som.' },
            { erro: 'Decorar só a frase e nunca tocar.', certo: 'O nome gruda quando o ouvido e o dedo participam.' }
          ]
        },
        {
          t: 'resumo', itens: [
            '1ª corda = a mais fina = Mi agudo. 6ª corda = a mais grossa = Mi grave.',
            'Da 6ª à 1ª: Mi, Lá, Ré, Sol, Si, Mi.',
            'Corda mais grossa produz som mais grave.',
            'A 1ª e a 6ª têm o mesmo nome, com duas oitavas de distância.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a 1ª corda do violão?', opcoes: ['A mais fina', 'A mais grossa', 'A do meio', 'Depende do violão'], correta: 0, explicacao: 'A numeração vai do agudo para o grave.' },
        { texto: 'Qual é o nome da 5ª corda solta?', opcoes: ['Lá', 'Ré', 'Sol', 'Mi'], correta: 0, explicacao: 'Da 6ª à 1ª: Mi, Lá, Ré, Sol, Si, Mi.' },
        { texto: 'Quais cordas têm o mesmo nome?', opcoes: ['A 1ª e a 6ª (ambas Mi)', 'A 2ª e a 5ª', 'A 3ª e a 4ª', 'Nenhuma'], correta: 0, explicacao: 'Com duas oitavas de diferença entre elas.' },
        { texto: 'Quanto mais grossa a corda...', opcoes: ['Mais grave é o som', 'Mais agudo é o som', 'Mais alto é o volume', 'Mais rápido ela desafina'], correta: 0, explicacao: 'Massa maior, vibração mais lenta, som mais grave.' },
        { texto: 'Qual é a cifra da 3ª corda?', opcoes: ['G', 'D', 'A', 'B'], correta: 0, explicacao: 'A 3ª corda é Sol, que em cifra é G.' },
        { texto: 'Numa aula que diz "4ª corda, casa 2", onde você põe o dedo?', opcoes: ['Na corda Ré, no segundo espaço a partir da pestana', 'Na corda Mi grave, no segundo traste', 'Na segunda corda, na quarta casa', 'Na corda Lá, perto do corpo'], correta: 0, explicacao: 'Primeiro o número da corda, depois o número da casa.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco as seis cordas soltas dizendo o nome de cada uma, sem errar.',
          'Começo pela 6ª e desço até a 1ª, e também faço o caminho inverso.',
          'Alguém diz um número de corda e eu toco a certa na hora.'
        ],
        criterio: 'Você domina quando responde sem pensar: o nome da corda tem que vir antes da conta.'
      }
    },

    // ---------------------------------------------------------------- 1.1.5
    {
      id: 'n1.1.5',
      titulo: 'Os dedos das duas mãos',
      resumo: 'p, i, m, a na mão direita; 1, 2, 3, 4 na esquerda.',
      minutos: 12,
      disciplinas: ['tecnica'],
      prereq: ['n1.1.2'],
      status: 'implementado',
      cobre: ['Nomenclatura dos dedos das duas mãos'],
      objetivo: 'Entender a notação de dedilhado que aparece em toda partitura de violão e saber qual dedo faz o quê.',
      blocos: [
        { t: 'p', x: 'As duas mãos fazem trabalhos completamente diferentes, e cada uma tem o seu sistema de nomes. Isso não é decoreba inútil: é a linguagem que as partituras usam para dizer como tocar.' },
        { t: 'h', x: 'Mão direita: p, i, m, a' },
        { t: 'p', x: 'A mão direita é quem faz a corda soar. Os nomes vêm do espanhol, língua do repertório clássico: *p* de pulgar (polegar), *i* de índice (indicador), *m* de medio (médio) e *a* de anular (anelar). O mindinho quase não é usado e, quando aparece, vira *c* ou *e*.' },
        { t: 'mao', lado: 'direita', legenda: 'A mão direita e as letras que você vai ver embaixo das notas nas partituras.' },
        { t: 'p', x: 'Existe uma divisão natural de trabalho: o *polegar cuida das cordas graves* (6ª, 5ª e 4ª), e *i, m e a cuidam das agudas* (3ª, 2ª e 1ª, nessa ordem). Não é uma lei, mas é o padrão que resolve 90% das situações e é o que este curso usa.' },
        {
          t: 'tabela',
          cab: ['Letra', 'Dedo', 'Cordas de costume'],
          linhas: [['p', 'Polegar', '6ª, 5ª e 4ª'], ['i', 'Indicador', '3ª'], ['m', 'Médio', '2ª'], ['a', 'Anelar', '1ª'], ['c', 'Mindinho', 'raríssimo']]
        },
        { t: 'h', x: 'Mão esquerda: 1, 2, 3, 4' },
        { t: 'p', x: 'A mão esquerda aperta as cordas contra a escala. Aqui usamos números: *1* indicador, *2* médio, *3* anelar e *4* mindinho. O polegar da esquerda não recebe número porque ele não aperta corda nenhuma: ele fica atrás do braço, servindo de apoio.' },
        { t: 'mao', lado: 'esquerda', legenda: 'A mão esquerda. O polegar fica escondido atrás do braço do violão.' },
        {
          t: 'aviso', titulo: 'Confusão clássica: ',
          x: 'na mão esquerda, *1 é o indicador*, não o polegar. Quem vem do piano às vezes erra isso. Se a partitura diz "4", é o mindinho.'
        },
        { t: 'h', x: 'Como isso aparece na partitura' },
        {
          t: 'pauta',
          txt: 'g4 b4 e5 b4',
          compassos: null,
          legenda: 'Uma partitura de violão costuma trazer o número do dedo da mão esquerda acima da nota e a letra da mão direita abaixo. Aqui, as quatro notas são de cordas soltas: 3ª com i, 2ª com m, 1ª com a, 2ª com m.',
          tocar: true, bpm: 80
        },
        {
          t: 'tocar', titulo: 'Sinta a divisão de trabalho',
          seq: [{ corda: 3, casa: 0, rotulo: '3ª · i' }, { corda: 2, casa: 0, rotulo: '2ª · m' }, { corda: 1, casa: 0, rotulo: '1ª · a' }, { corda: 6, casa: 0, rotulo: '6ª · p' }],
          rotulo: 'Tocar i, m, a e depois o polegar',
          x: 'Apoie o polegar na 6ª corda e toque, em ordem: 3ª corda com o indicador, 2ª com o médio, 1ª com o anelar e, por fim, a 6ª com o polegar.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar o polegar para tocar as cordas agudas.', certo: 'O polegar cuida da 6ª, 5ª e 4ª. As agudas são de i, m e a.' },
            { erro: 'Tocar tudo com o indicador.', certo: 'Alternar i e m é o que permite tocar rápido mais tarde. Comece certo.' },
            { erro: 'Apertar com o polegar da mão esquerda por cima do braço.', certo: 'O polegar esquerdo fica atrás, no meio do braço, como um apoio.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Mão direita: p (polegar), i (indicador), m (médio), a (anelar).',
            'Mão esquerda: 1 (indicador), 2 (médio), 3 (anelar), 4 (mindinho).',
            'p toca as três cordas graves; i, m e a tocam a 3ª, a 2ª e a 1ª.',
            'O polegar da mão esquerda não aperta corda: ele apoia por trás do braço.'
          ]
        }
      ],
      quiz: [
        { texto: 'Na mão direita, o que significa a letra "a"?', opcoes: ['Anelar', 'Indicador', 'Polegar', 'Médio'], correta: 0, explicacao: 'De "anular", em espanhol.' },
        { texto: 'Na mão esquerda, qual dedo é o número 1?', opcoes: ['Indicador', 'Polegar', 'Médio', 'Mindinho'], correta: 0, explicacao: 'O polegar da esquerda não recebe número.' },
        { texto: 'Qual dedo da mão direita costuma tocar a 5ª corda?', opcoes: ['p (polegar)', 'i (indicador)', 'm (médio)', 'a (anelar)'], correta: 0, explicacao: 'O polegar cuida da 6ª, 5ª e 4ª cordas.' },
        { texto: 'E a 1ª corda, qual dedo toca normalmente?', opcoes: ['a (anelar)', 'p (polegar)', 'i (indicador)', 'c (mindinho)'], correta: 0, explicacao: 'i na 3ª, m na 2ª, a na 1ª.' },
        { texto: 'Onde fica o polegar da mão esquerda?', opcoes: ['Atrás do braço, servindo de apoio', 'Em cima da 6ª corda', 'Apertando a 1ª corda', 'Não se usa'], correta: 0, explicacao: 'Ele é o contrapeso dos outros quatro dedos.' },
        { texto: 'Por que alternar i e m em vez de tocar tudo com o indicador?', opcoes: ['Porque a alternância permite tocar rápido e com som parelho', 'Porque o indicador cansa a mão esquerda', 'Porque é mais bonito', 'Não faz diferença'], correta: 0, explicacao: 'Um dedo sozinho precisa voltar à corda antes do próximo toque; dois dedos se revezam.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Digo em voz alta o nome das letras p, i, m, a apontando os dedos certos.',
          'Digo os números 1, 2, 3, 4 da mão esquerda sem hesitar.',
          'Toco a 3ª, a 2ª e a 1ª corda com i, m e a, cada dedo na sua corda.',
          'Meu polegar esquerdo está atrás do braço, não por cima.'
        ],
        criterio: 'Você domina quando consegue, sem pensar, pôr cada dedo na corda que a notação pede.'
      }
    },

    // ---------------------------------------------------------------- 1.1.6
    {
      id: 'n1.1.6',
      titulo: 'Afinar o violão',
      resumo: 'A afinação padrão, o afinador do app e a afinação de ouvido pela casa 5.',
      minutos: 18,
      disciplinas: ['tecnica', 'percepcao'],
      prereq: ['n1.1.4'],
      status: 'implementado',
      cobre: ['Afinação padrão', 'Utilização do afinador'],
      objetivo: 'Deixar o violão afinado sozinho, com o afinador e também de ouvido, e entender o que a afinação significa.',
      blocos: [
        { t: 'p', x: 'Um violão desafinado atrapalha duas coisas ao mesmo tempo: o som fica feio e o seu ouvido aprende errado. Afinar é a primeira coisa a fazer em todo dia de estudo, sempre. Leva um minuto.' },
        { t: 'h', x: 'O que significa afinar' },
        { t: 'p', x: 'Cada nota é uma velocidade de vibração, medida em hertz (vibrações por segundo). O Lá de referência vibra a *440 Hz*. Afinar é girar a tarraxa até a corda vibrar na velocidade certa: apertando, a corda fica mais tensa e o som sobe; afrouxando, desce.' },
        {
          t: 'tabela',
          cab: ['Corda', 'Nota', 'Frequência'],
          linhas: [['6ª', 'Mi (E2)', '82,41 Hz'], ['5ª', 'Lá (A2)', '110,00 Hz'], ['4ª', 'Ré (D3)', '146,83 Hz'], ['3ª', 'Sol (G3)', '196,00 Hz'], ['2ª', 'Si (B3)', '246,94 Hz'], ['1ª', 'Mi (E4)', '329,63 Hz']],
          legenda: 'Você não precisa decorar estes números. Eles estão aqui para mostrar que afinação é uma medida exata, não uma opinião.'
        },
        { t: 'h', x: 'Com o afinador do app' },
        {
          t: 'passos', itens: [
            'Abra o *Afinador* do LLMusic e permita o uso do microfone.',
            'Toque uma corda solta, sozinha, com força média, e deixe soar.',
            'O app mostra o nome da nota e se ela está baixa ou alta.',
            'Gire a tarraxa devagar, sempre *apertando no fim*: chegue na nota subindo, nunca descendo.',
            'Repita da 6ª até a 1ª corda. Depois volte e confira tudo de novo: afinar uma corda muda um pouco a tensão do braço e desafina as outras.'
          ]
        },
        { t: 'ir', rota: 'afinador', titulo: 'Abrir o afinador', x: 'Afine agora e volte para continuar a aula.' },
        {
          t: 'dica', x: 'Chegar na nota *subindo* é um truque de luthier: a corda escorrega um pouquinho na pestana e na tarraxa. Se você chega por cima, afrouxando, a corda cede sozinha depois e a nota cai.'
        },
        { t: 'h', x: 'Afinar de ouvido: o método da casa 5' },
        { t: 'p', x: 'Vale muito a pena aprender, porque treina o seu ouvido e tira você de qualquer apuro sem celular. A ideia é simples: *a corda apertada na casa 5 dá a mesma nota da corda de baixo solta*. Só a 3ª corda foge à regra, e nela usamos a casa 4.' },
        {
          t: 'tabela',
          cab: ['Toque isto...', '...e deve soar igual a'],
          linhas: [
            ['6ª corda, casa 5', '5ª corda solta (Lá)'],
            ['5ª corda, casa 5', '4ª corda solta (Ré)'],
            ['4ª corda, casa 5', '3ª corda solta (Sol)'],
            ['3ª corda, casa 4', '2ª corda solta (Si)'],
            ['2ª corda, casa 5', '1ª corda solta (Mi)']
          ],
          legenda: 'Repare na exceção: entre a 3ª e a 2ª corda o intervalo é menor, por isso a casa é a 4.'
        },
        { t: 'braco', casas: 7, notas: [{ corda: 6, casa: 5, rotulo: 'Lá', classe: 'raiz' }, { corda: 5, casa: 0, rotulo: 'Lá', classe: 'neutro' }, { corda: 5, casa: 5, rotulo: 'Ré', classe: 'raiz' }, { corda: 4, casa: 0, rotulo: 'Ré', classe: 'neutro' }, { corda: 4, casa: 5, rotulo: 'Sol', classe: 'raiz' }, { corda: 3, casa: 0, rotulo: 'Sol', classe: 'neutro' }, { corda: 3, casa: 4, rotulo: 'Si', classe: 'raiz' }, { corda: 2, casa: 0, rotulo: 'Si', classe: 'neutro' }, { corda: 2, casa: 5, rotulo: 'Mi', classe: 'raiz' }, { corda: 1, casa: 0, rotulo: 'Mi', classe: 'neutro' }], legenda: 'Os cinco pares da afinação de ouvido. Cada par de bolinhas com o mesmo nome deve soar idêntico.' },
        { t: 'p', x: 'Toque as duas notas do par uma depois da outra e preste atenção numa oscilação, um "uou-uou-uou" que aparece quando elas estão quase iguais. Quanto mais lenta a oscilação, mais perto você está. Quando ela some, está afinado.' },
        {
          t: 'tocar', titulo: 'Confira a afinação da 5ª corda',
          seq: [{ corda: 6, casa: 5, rotulo: '6ª/5' }, { corda: 5, casa: 0, rotulo: '5ª solta' }],
          rotulo: 'Tocar o primeiro par',
          x: 'Toque a 6ª corda na casa 5 e depois a 5ª solta. O app confere se as duas estão na mesma nota (Lá).'
        },
        {
          t: 'erros', itens: [
            { erro: 'Girar a tarraxa com força, de uma vez.', certo: 'Gire pouquinho, uns poucos graus por vez, sempre ouvindo. Corda arrebenta quando se gira no escuro.' },
            { erro: 'Afinar a corda errada.', certo: 'Antes de girar, puxe a corda e veja qual tarraxa se mexe junto.' },
            { erro: 'Afinar uma vez e achar que acabou.', certo: 'Afine da 6ª à 1ª e depois confira tudo outra vez. Cordas novas desafinam o dia inteiro.' },
            { erro: 'Usar o afinador num lugar barulhento.', certo: 'O microfone escuta tudo. Procure silêncio ou toque mais perto do telefone.' }
          ]
        },
        {
          t: 'check', chave: 'afinar', titulo: 'Rotina de afinação (faça todo dia)',
          itens: ['Afinei a 6ª corda', 'Afinei a 5ª', 'Afinei a 4ª', 'Afinei a 3ª', 'Afinei a 2ª', 'Afinei a 1ª', 'Confira tudo de novo, da 6ª à 1ª']
        },
        {
          t: 'resumo', itens: [
            'Afinar é ajustar a vibração de cada corda à frequência certa. O Lá de referência é 440 Hz.',
            'Da 6ª à 1ª: Mi, Lá, Ré, Sol, Si, Mi.',
            'Sempre chegue na nota subindo, apertando a tarraxa no fim do ajuste.',
            'De ouvido: casa 5 de cada corda = corda seguinte solta. Exceção: 3ª corda, casa 4.',
            'Afine sempre duas vezes, porque uma corda afeta a outra.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a frequência do Lá de referência?', opcoes: ['440 Hz', '432 Hz', '220 Hz', '110 Hz'], correta: 0, explicacao: 'É o padrão internacional, usado por orquestras e afinadores.' },
        { texto: 'Apertando a tarraxa, o que acontece com a nota?', opcoes: ['Ela sobe (fica mais aguda)', 'Ela desce', 'Não muda', 'Depende da corda'], correta: 0, explicacao: 'Mais tensão, vibração mais rápida, som mais agudo.' },
        { texto: 'Na afinação de ouvido, a 6ª corda na casa 5 deve soar igual a...', opcoes: ['5ª corda solta', '4ª corda solta', '6ª corda solta', '1ª corda solta'], correta: 0, explicacao: 'Cada corda presa na casa 5 dá a nota da corda seguinte solta.' },
        { texto: 'Qual é a exceção da regra da casa 5?', opcoes: ['A 3ª corda, que usa a casa 4', 'A 6ª corda, que usa a casa 7', 'A 1ª corda, que não tem par', 'Não há exceção'], correta: 0, explicacao: 'O intervalo entre a 3ª e a 2ª corda é menor que o das outras.' },
        { texto: 'Por que se deve chegar na nota subindo?', opcoes: ['Porque a corda acomoda e cede depois, fazendo a nota cair', 'Porque é mais rápido', 'Porque protege o microfone', 'Porque o afinador só lê assim'], correta: 0, explicacao: 'Chegando por cima, a afinação não para em pé.' },
        { texto: 'Depois de afinar as seis cordas, o que fazer?', opcoes: ['Conferir tudo de novo, da 6ª à 1ª', 'Guardar o violão', 'Trocar as cordas', 'Nada, já está pronto'], correta: 0, explicacao: 'Mexer na tensão de uma corda muda ligeiramente as outras.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Afino as seis cordas com o afinador do app, sozinho, em menos de dois minutos.',
          'Sei qual tarraxa pertence a cada corda.',
          'Consigo ouvir a oscilação entre duas notas quase iguais.',
          'Fiz pelo menos uma vez a afinação de ouvido pelo método da casa 5.'
        ],
        criterio: 'Você domina quando afina sem ajuda e percebe sozinho, ao tocar, que alguma corda saiu do lugar.'
      }
    },

    // ---------------------------------------------------------------- 1.1.7
    {
      id: 'n1.1.7',
      titulo: 'Cuidar do instrumento',
      resumo: 'Umidade, temperatura, limpeza, troca de cordas e como guardar.',
      minutos: 10,
      disciplinas: ['tecnica'],
      prereq: ['n1.1.2'],
      status: 'implementado',
      cobre: ['Conservação e cuidados com o instrumento'],
      objetivo: 'Conservar o violão em boas condições para que ele dure décadas e continue soando bem.',
      blocos: [
        { t: 'p', x: 'Um violão é uma caixa de madeira fina sob a tensão constante de seis cordas esticadas. Ele reage a tudo: calor, frio, umidade, poeira, suor. Cuidar dele é barato; consertar não.' },
        { t: 'h', x: 'Os dois grandes inimigos' },
        { t: 'p', x: '*Umidade demais* incha a madeira: o tampo estufa, a ação (a altura das cordas) sobe e o som fica abafado. *Umidade de menos* encolhe a madeira e pode rachar o tampo. A faixa boa fica entre 45% e 60% de umidade relativa, com temperatura amena.' },
        {
          t: 'lista', itens: [
            'Nunca deixe o violão dentro do carro, nem no porta-malas, nem por meia hora.',
            'Longe de janela com sol direto, de ar-condicionado e de aquecedor.',
            'Se for viajar de avião, afrouxe um pouco as cordas e leve em case rígido.',
            'Se o ar da sua casa é muito seco, um umidificador de case resolve.'
          ]
        },
        { t: 'h', x: 'Limpeza' },
        {
          t: 'passos', itens: [
            'Depois de tocar, passe um pano seco e macio nas cordas e no tampo. O suor das mãos é ácido e come a corda.',
            'Na escala, um pano levemente úmido tira a sujeira acumulada; seque logo em seguida.',
            'Não use álcool, removedor nem produto de móveis no verniz.',
            'Lave as mãos antes de tocar: as cordas duram o dobro.'
          ]
        },
        { t: 'h', x: 'Quando trocar as cordas' },
        { t: 'p', x: 'Cordas de náilon perdem brilho e param de afinar bem. Sinais de que chegou a hora: a corda fica opaca, desafina sozinha, soa surda ou tem marcas dos trastes. Para quem estuda todo dia, três a quatro meses é um intervalo razoável.' },
        {
          t: 'dica', x: 'Troque uma corda por vez, nunca as seis de uma vez. Assim o braço nunca fica sem tensão e você não força o instrumento. Depois de pôr cordas novas, elas vão desafinar por dois ou três dias: é normal, é a corda acomodando.'
        },
        { t: 'h', x: 'Como guardar' },
        {
          t: 'lista', itens: [
            'O melhor lugar é dentro do case ou da capa, deitado ou em pé num suporte firme.',
            'Encostar o violão na parede é pedir para alguém derrubar.',
            'Para longos períodos sem tocar (meses), afrouxe as cordas cerca de meio tom.',
            'No dia a dia, não é preciso afrouxar nada: o instrumento foi feito para ficar afinado.'
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Deixar o violão no carro.', certo: 'O calor dentro do carro descola cavalete e deforma o braço. É o jeito mais rápido de perder um instrumento.' },
            { erro: 'Limpar o verniz com álcool.', certo: 'Pano seco e macio. Se precisar, um pouco de água e secagem imediata.' },
            { erro: 'Tirar as seis cordas de uma vez para limpar a escala.', certo: 'Uma por vez, ou no máximo três, mantendo tensão no braço.' }
          ]
        },
        {
          t: 'check', chave: 'cuidados', titulo: 'Hábitos para criar',
          itens: ['Lavo as mãos antes de estudar', 'Passo o pano nas cordas ao terminar', 'Guardo no case ou no suporte', 'Não deixo perto de sol, ar-condicionado ou aquecedor']
        },
        {
          t: 'resumo', itens: [
            'Umidade ideal: 45% a 60%; evite extremos e mudanças bruscas.',
            'Nunca deixe o violão no carro.',
            'Pano seco nas cordas depois de tocar; nada de álcool no verniz.',
            'Troque as cordas a cada 3 ou 4 meses, uma de cada vez.',
            'Guarde no case ou num suporte firme.'
          ]
        },
        {
          t: 'violao', destacar: ['corpo', 'braco', 'cordas', 'cavalete'], rotulos: true,
          legenda: 'As regiões que pedem cuidado: o corpo (poeira e suor no tampo), o braço e os trastes (oxidação), as cordas e o cavalete, onde a tensão se concentra.'
        },
        {
          t: 'check', chave: 'cuidados', titulo: 'Rotina de cuidados',
          itens: [
            'Passei um pano seco e macio no violão depois de tocar.',
            'Guardei o violão na capa, longe do sol e de fonte de calor.',
            'Conferi se as cordas estão escuras ou sem brilho (sinal de oxidação).',
            'Lavei e secei as mãos antes de tocar.',
            'Anotei a data da última troca de cordas.'
          ]
        },
      ],
      quiz: [
        { texto: 'Qual é a faixa de umidade relativa ideal para um violão?', opcoes: ['Entre 45% e 60%', 'Entre 10% e 20%', 'Entre 80% e 95%', 'Não faz diferença'], correta: 0, explicacao: 'Seco demais racha; úmido demais incha.' },
        { texto: 'Por que não se deve deixar o violão dentro do carro?', opcoes: ['O calor pode descolar o cavalete e deformar o braço', 'Porque pode ser roubado', 'Porque desafina', 'Porque o case estraga'], correta: 0, explicacao: 'A temperatura dentro de um carro fechado passa facilmente dos 60 °C.' },
        { texto: 'Como se deve limpar o verniz?', opcoes: ['Com pano seco e macio', 'Com álcool', 'Com removedor', 'Com produto de limpar móveis'], correta: 0, explicacao: 'Solventes atacam o verniz e podem deixá-lo opaco para sempre.' },
        { texto: 'Como trocar as cordas?', opcoes: ['Uma de cada vez, mantendo tensão no braço', 'Todas de uma vez', 'Só as três agudas', 'Sempre com o violão afrouxado por um dia antes'], correta: 0, explicacao: 'O braço foi feito para trabalhar sob tensão constante.' },
        { texto: 'Cordas novas desafinam nos primeiros dias?', opcoes: ['Sim, é normal: elas estão se acomodando', 'Não, nunca', 'Só se forem de aço', 'Só se o violão for velho'], correta: 0, explicacao: 'O náilon estica bastante no começo. Afine mais vezes nesses dias.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Sei onde o meu violão fica guardado e por que aquele lugar é seguro.',
          'Passo o pano nas cordas depois de tocar.',
          'Sei reconhecer quando as cordas estão velhas.'
        ],
        criterio: 'Basta ter criado o hábito: guardar bem e limpar depois de tocar.'
      }
    }
  ]
};
