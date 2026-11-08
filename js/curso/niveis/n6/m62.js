// NÍVEL 6 — MÓDULO 6.2: Desenvolvimento instrumental
// Identidade sonora, interpretação por período, articulação e ritmo, timbre e
// polifonia complexa, recitais e memorização de programas, leitura de
// partituras complexas, transcrição prática, gravação e música de câmara.

export const M62 = {
  id: '6.2',
  titulo: 'Desenvolvimento instrumental',
  resumo: 'O que separa quem toca bem de quem tem voz própria: som, critério e capacidade de sustentar um programa inteiro.',
  aulas: [
    {
      id: 'n6.2.1',
      titulo: 'Identidade sonora',
      resumo: 'Construir um som reconhecível — a assinatura de um intérprete.',
      minutos: 20,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n5.2.7'],
      status: 'implementado',
      cobre: ['Identidade sonora'],
      objetivo: 'Identificar os componentes que formam o som pessoal e trabalhar cada um deliberadamente.',
      blocos: [
        { t: 'p', x: 'Dois violonistas tocando a mesma peça no mesmo instrumento soam diferente. A diferença não é mágica: é a soma de decisões concretas — unha, ângulo, ponto de ataque, equilíbrio de vozes, uso de vibrato. Identidade sonora é o nome que se dá ao conjunto dessas decisões quando elas se tornam consistentes.' },
        { t: 'h', x: 'Os sete componentes do seu som' },
        {
          t: 'tabela',
          cab: ['Componente', 'O que decide', 'Como trabalhar'],
          linhas: [
            ['Formato da unha', 'Brilho, ataque e ruído', 'Lixar e testar formatos por semanas'],
            ['Ângulo de ataque', 'Cheiro do som: redondo ou cortante', 'Variar o ângulo do pulso e ouvir'],
            ['Ponto de ataque padrão', 'Timbre de base', 'Escolher um ponto e torná-lo referência'],
            ['Proporção unha/polpa', 'Definição e calor', 'Buscar o ponto em que a polpa toca antes da unha'],
            ['Equilíbrio de vozes', 'Clareza da textura', 'Estudar destacando cada voz'],
            ['Uso de vibrato', 'Expressividade', 'Decidir onde usa e onde não usa'],
            ['Respiração e rubato', 'Fraseado', 'Cantar a frase antes de tocá-la']
          ]
        },
        { t: 'h', x: 'A unha: o detalhe que mais muda o som' },
        {
          t: 'passos', itens: [
            'Deixe a unha crescer até ultrapassar ligeiramente a ponta do dedo — cerca de um milímetro.',
            'Lixe uma rampa: o ponto de contato fica do lado esquerdo da unha (para a mão direita), e a corda desliza até sair pela ponta.',
            'Polir é obrigatório: lixa 600, depois 1000, depois um polidor. Unha áspera produz ruído.',
            'Teste tocando a 1ª corda solta lentamente. Se houver clique no ataque, a rampa está errada.',
            'Ajuste ao longo de semanas: pequenas mudanças produzem grandes diferenças.'
          ]
        },
        { t: 'mao', lado: 'direita', destacar: ['i', 'm', 'a'], legenda: 'Os três dedos cuja unha define o som. A rampa de cada um precisa ser compatível com a dos outros, ou a escala sai desigual.' },
        {
          t: 'aviso', x: 'Não existe formato de unha universal. Ele depende do formato do seu dedo, da curvatura natural da unha e do ângulo em que a sua mão encosta na corda. Copiar o formato de outro violonista raramente funciona.'
        },
        { t: 'h', x: 'O método de descoberta' },
        {
          t: 'passos', itens: [
            'Grave trinta segundos de uma frase lenta, no seu som atual. Essa é a referência.',
            'Mude *um* componente — por exemplo, o ponto de ataque — e grave de novo.',
            'Compare as duas gravações de olhos fechados.',
            'Guarde a versão preferida e mude o componente seguinte.',
            'Depois de passar por todos, você terá um som escolhido, e não herdado.'
          ]
        },
        {
          t: 'pauta', bpm: 52, numerar: true,
          txt: 'e4/b g4/b | a4/b. b4/c | c5/o | b4/b a4/b | g4/o',
          legenda: 'Frase de referência para os testes de som: lenta, simples e na região mais exposta do instrumento.'
        },
        {
          t: 'tocar', titulo: 'Confira a frase de referência',
          seq: [[1, 0], [1, 3], [1, 5], [1, 7], [1, 8]],
          rotulo: 'Conferir as notas',
          fim: 'Agora grave essa frase cinco vezes, mudando um componente do som a cada vez.',
          x: 'Toque Mi, Sol, Lá, Si e Dó na 1ª corda, uma nota por vez.'
        },
        {
          t: 'check', chave: 'identidade', titulo: 'Construa o seu som',
          itens: [
            'Gravei a frase de referência no meu som atual.',
            'Testei três pontos de ataque diferentes e escolhi um padrão.',
            'Ajustei a rampa da unha de um dedo e comparei antes e depois.',
            'Poli as unhas com lixa fina e polidor.',
            'Escolhi conscientemente onde uso vibrato e onde não uso.',
            'Ouvi três violonistas diferentes e descrevi o som de cada um em uma frase.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Componentes do som', rodadas: 5,
          perguntas: [
            { texto: 'Qual detalhe físico mais influencia o timbre da mão direita?', opcoes: ['O formato e o polimento da unha', 'O comprimento do braço', 'A altura do banquinho', 'A marca das cordas'], correta: 0, explicacao: 'É o ponto de contato entre corpo e corda.' },
            { texto: 'Um clique no ataque indica:', opcoes: ['Rampa de unha mal feita ou unha áspera', 'Corda velha', 'Violão desafinado', 'Tensão alta'], correta: 0, explicacao: 'A corda deve deslizar, não bater.' },
            { texto: 'Por que copiar o formato de unha de outro violonista raramente funciona?', opcoes: ['Depende do formato do dedo e do ângulo da mão', 'Porque é segredo', 'Porque muda com as cordas', 'Porque é ilegal'], correta: 0, explicacao: 'Cada mão tem geometria própria.' },
            { texto: 'Qual é o método para descobrir o próprio som?', opcoes: ['Gravar, mudar um componente por vez e comparar', 'Imitar um ídolo', 'Trocar de violão', 'Estudar mais horas'], correta: 0, explicacao: 'Isolar variáveis é o que permite escolher.' },
            { texto: 'Identidade sonora é:', opcoes: ['Um conjunto consistente de decisões técnicas', 'Um dom natural', 'Resultado do instrumento', 'Questão de repertório'], correta: 0, explicacao: 'Consistência é o que torna o som reconhecível.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Mudar vários componentes ao mesmo tempo.', certo: 'Um por vez, com gravação antes e depois.' },
            { erro: 'Deixar as unhas sem polir.', certo: 'Lixa fina e polidor eliminam o ruído de ataque.' },
            { erro: 'Buscar o som de outro intérprete.', certo: 'Use referências para saber o que você gosta, não para imitar.' },
            { erro: 'Achar que som depende do violão.', certo: 'O instrumento importa, mas a mão decide mais.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Sete componentes formam o som: unha, ângulo, ponto de ataque, proporção unha/polpa, equilíbrio, vibrato e respiração.',
            'A unha é o detalhe físico mais decisivo; rampa e polimento são obrigatórios.',
            'Não há formato universal: ele depende da sua mão.',
            'O método é isolar uma variável por vez e gravar.',
            'Identidade sonora é consistência de decisões, não talento.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos componentes formam a identidade sonora, segundo esta aula?', opcoes: ['Sete', 'Três', 'Cinco', 'Dez'], correta: 0, explicacao: 'De unha a respiração.' },
        { texto: 'O que é a rampa da unha?', opcoes: ['O perfil lixado por onde a corda desliza até sair', 'A espessura da unha', 'O comprimento total', 'O brilho do esmalte'], correta: 0, explicacao: 'Ela determina o ataque.' },
        { texto: 'Unha áspera produz:', opcoes: ['Ruído no ataque', 'Som mais quente', 'Mais volume', 'Menos projeção'], correta: 0, explicacao: 'Por isso o polimento é obrigatório.' },
        { texto: 'Qual é o primeiro passo do método de descoberta do som?', opcoes: ['Gravar uma frase no som atual, como referência', 'Lixar as unhas', 'Trocar as cordas', 'Mudar o ponto de ataque'], correta: 0, explicacao: 'Sem referência não há comparação.' },
        { texto: 'Identidade sonora depende principalmente de:', opcoes: ['Decisões técnicas consistentes', 'Instrumento caro', 'Cordas importadas', 'Talento inato'], correta: 0, explicacao: 'É construída, não herdada.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar duas gravações da mesma frase com um componente de som alterado e explicar a diferença.',
          'Tocar uma escala com som igual entre i, m e a, demonstrando unhas compatíveis.',
          'Tocar a frase de referência com três pontos de ataque e descrever cada resultado.',
          'Declarar, em três frases, quais escolhas definem o seu som.'
        ],
        criterio: 'Você domina quando consegue produzir deliberadamente dois sons distintos e reconhecíveis e explicar como chegou a cada um.'
      }
    },

    {
      id: 'n6.2.2',
      titulo: 'Interpretação de diferentes períodos',
      resumo: 'Um mesmo violonista, cinco linguagens diferentes num mesmo recital.',
      minutos: 20,
      disciplinas: ['interpretacao', 'historia'],
      prereq: ['n6.1.10'],
      status: 'implementado',
      cobre: ['Interpretação de diferentes períodos'],
      objetivo: 'Executar peças de períodos diferentes com as convenções próprias de cada um, de forma consistente.',
      blocos: [
        { t: 'p', x: 'Um recital de violão costuma atravessar quatrocentos anos de música. O risco é tocar tudo igual — com o mesmo peso, o mesmo vibrato e o mesmo rubato. A marca do intérprete maduro é fazer o ouvinte perceber a mudança de século sem precisar ler o programa.' },
        { t: 'h', x: 'O quadro de decisões' },
        {
          t: 'tabela',
          cab: ['Parâmetro', 'Renascimento', 'Barroco', 'Clássico', 'Romântico', 'Século XX'],
          linhas: [
            ['Pulso', 'Muito estável', 'Estável, com respiração', 'Estável', 'Flexível (rubato)', 'Depende da obra'],
            ['Vibrato', 'Quase nenhum', 'Ornamento pontual', 'Discreto', 'Constante e expressivo', 'Variável'],
            ['Dinâmica', 'Plana, por seções', 'Em degraus', 'Em degraus com nuance', 'Rampas longas', 'Ampla e indicada'],
            ['Articulação', 'Clara e destacada', 'Variada e decisiva', 'Leve e precisa', 'Legato predominante', 'Conforme indicado'],
            ['Ornamentação', 'Improvisada', 'Esperada e codificada', 'Escrita', 'Escrita', 'Rara'],
            ['Timbre', 'Uniforme e leve', 'Mudanças por seção', 'Natural', 'Muitas cores', 'Técnicas estendidas']
          ],
          legenda: 'Este quadro resolve a maior parte das dúvidas práticas de um programa misto.'
        },
        { t: 'h', x: 'A mesma frase em três estilos' },
        {
          t: 'pauta', bpm: 66, numerar: true,
          txt: 'e4/q g4/q b4/q g4/q | a4/q f#4/q e4/b',
          legenda: 'Frase neutra para o exercício. Toque-a três vezes: barroca (articulada, sem vibrato, pulso firme), romântica (legato, vibrato, rubato) e moderna (seca, contrastada).'
        },
        {
          t: 'comparar',
          a: { titulo: 'Versão barroca', itens: ['Separar notas repetidas e saltos', 'Pulso rigoroso', 'Sem vibrato', 'Dinâmica em dois planos: forte e piano', 'Pequena respiração ao fim da frase'] },
          b: { titulo: 'Versão romântica', itens: ['Legato contínuo', 'Rubato na subida e na chegada', 'Vibrato nas notas longas', 'Crescendo até o ponto alto', 'Timbre mais escuro no começo, brilhante no ápice'] }
        },
        { t: 'h', x: 'Como montar um programa coerente' },
        {
          t: 'lista', itens: [
            'Ordem cronológica funciona, mas não é obrigatória: contraste é mais importante que cronologia.',
            'Evite duas peças seguidas no mesmo tom.',
            'Alterne densidade: uma peça polifônica, uma melódica, uma rítmica.',
            'A peça mais difícil fica na primeira metade, quando a mão está fresca e a cabeça, concentrada.',
            'Termine com algo brilhante ou com algo muito belo — nunca com algo morno.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a frase neutra',
          seq: [[1, 0], [1, 3], [2, 0], [1, 2]],
          rotulo: 'Conferir as notas',
          fim: 'Agora toque a frase três vezes, uma em cada estilo.',
          x: 'Toque Mi, Sol, Si e Fá sustenido, uma nota por vez.'
        },
        {
          t: 'check', chave: 'periodos', titulo: 'Pratique a mudança de linguagem',
          itens: [
            'Toquei a frase neutra em versão barroca.',
            'Toquei a mesma frase em versão romântica.',
            'Gravei as duas e verifiquei se a diferença é audível.',
            'Montei um programa de quatro peças de períodos diferentes.',
            'Toquei as quatro em sequência, mudando a linguagem em cada uma.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Linguagem por período', rodadas: 6,
          perguntas: [
            { texto: 'Em qual período a dinâmica é feita em degraus?', opcoes: ['Barroco', 'Romântico', 'Século XX', 'Renascimento'], correta: 0, explicacao: 'Herança dos instrumentos de teclado da época.' },
            { texto: 'Rubato constante pertence a qual linguagem?', opcoes: ['Romântica', 'Barroca', 'Clássica', 'Renascentista'], correta: 0, explicacao: 'A expressão pessoal é o valor central.' },
            { texto: 'No Renascimento, a ornamentação era:', opcoes: ['Improvisada pelo intérprete', 'Totalmente escrita', 'Proibida', 'Rara'], correta: 0, explicacao: 'Cabia ao executante acrescentá-la.' },
            { texto: 'Qual peça deve ficar na primeira metade do programa?', opcoes: ['A mais difícil', 'A mais curta', 'A mais conhecida', 'A mais lenta'], correta: 0, explicacao: 'Mão fresca e concentração alta.' },
            { texto: 'O que se deve evitar ao montar um programa?', opcoes: ['Duas peças seguidas no mesmo tom', 'Ordem cronológica', 'Peças longas', 'Repertório moderno'], correta: 0, explicacao: 'O contraste sustenta a atenção do público.' },
            { texto: 'Qual é a marca de um intérprete maduro num programa misto?', opcoes: ['O ouvinte percebe a mudança de período sem ler o programa', 'Toca tudo igual', 'Usa vibrato sempre', 'Toca tudo rápido'], correta: 0, explicacao: 'Cada linguagem soa diferente.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar o mesmo vibrato em todas as peças.', certo: 'Vibrato é parâmetro de estilo, não de gosto pessoal.' },
            { erro: 'Aplicar rubato romântico em Bach.', certo: 'Pulso estável e expressão pela articulação.' },
            { erro: 'Montar o programa pela ordem de dificuldade crescente.', certo: 'A peça mais difícil vai antes do cansaço.' },
            { erro: 'Terminar o recital com a peça mais fraca.', certo: 'O fim é o que fica na memória do público.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cada período tem convenções próprias de pulso, vibrato, dinâmica, articulação e ornamentação.',
            'O quadro de decisões resolve a maior parte das dúvidas práticas.',
            'A mesma frase pode e deve soar diferente conforme o estilo.',
            'Programa: contraste de tom, densidade e caráter.',
            'A peça mais difícil na primeira metade; a mais forte no fim.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual parâmetro mais distingue a execução barroca da romântica?', opcoes: ['A flexibilidade do pulso', 'A afinação', 'O volume', 'A digitação'], correta: 0, explicacao: 'Rubato é linguagem romântica.' },
        { texto: 'No barroco, a expressão vem sobretudo de:', opcoes: ['Articulação', 'Vibrato', 'Rubato', 'Dinâmica em rampa'], correta: 0, explicacao: 'Ligar e separar substitui o arco.' },
        { texto: 'Ornamentação improvisada é prática de qual período?', opcoes: ['Renascimento e barroco', 'Clássico', 'Romântico', 'Século XX'], correta: 0, explicacao: 'Depois ela passou a ser escrita.' },
        { texto: 'Como organizar um programa de recital?', opcoes: ['Por contraste de tom, densidade e caráter', 'Por ordem alfabética', 'Da mais fácil à mais difícil', 'Por duração'], correta: 0, explicacao: 'O contraste mantém a atenção.' },
        { texto: 'Onde colocar a peça tecnicamente mais exigente?', opcoes: ['Na primeira metade', 'No fim', 'No bis', 'No meio exato'], correta: 0, explicacao: 'Antes do cansaço físico e mental.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar a mesma frase em versão barroca e em versão romântica, com diferença audível em gravação.',
          'Apresentar um programa de quatro peças de períodos diferentes, justificando a ordem.',
          'Tocar duas dessas peças em sequência, mudando a linguagem.',
          'Explicar, para cada peça, três decisões de estilo.'
        ],
        criterio: 'Você domina quando um ouvinte identifica a mudança de período apenas ouvindo você tocar.'
      }
    },

    {
      id: 'n6.2.3',
      titulo: 'Articulação avançada e precisão rítmica',
      resumo: 'Controlar o começo e o fim de cada nota, e colocá-las exatamente onde devem estar.',
      minutos: 20,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n5.2.7'],
      status: 'implementado',
      cobre: ['Controle avançado de articulação', 'Precisão rítmica'],
      objetivo: 'Dominar os recursos de articulação do violão e corrigir imprecisões rítmicas com método.',
      blocos: [
        { t: 'p', x: 'Articulação é o controle do *começo* e do *fim* de cada nota. No violão, o começo depende da mão direita; o fim, quase sempre, de abafar — com um dedo da direita, com a esquerda ou com o polegar. Quem não controla o fim das notas só tem um tipo de articulação: legato acidental.' },
        { t: 'h', x: 'Os recursos de articulação' },
        {
          t: 'tabela',
          cab: ['Articulação', 'Como se faz', 'Onde se usa'],
          linhas: [
            ['Legato', 'A nota soa até a seguinte começar', 'Melodias cantabile'],
            ['Staccato', 'Abafar a corda logo após o ataque, com o dedo que vai tocar de novo', 'Música clássica leve, trechos rítmicos'],
            ['Portato', 'Separar levemente sem cortar', 'Frases barrocas com notas repetidas'],
            ['Acento', 'Ataque mais rápido, sem mudar a duração', 'Tempos fortes, síncopes'],
            ['Tenuto', 'Nota com duração plena e leve peso', 'Pontos de chegada'],
            ['Abafamento com polegar', 'O polegar encosta nas cordas graves após tocá-las', 'Controlar baixos que não devem continuar soando']
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'a' }] }
          ],
          legenda: 'Exercício de articulação: toque o primeiro compasso todo em staccato (abafando cada nota com o dedo seguinte) e o segundo em legato pleno.',
          tocar: true, bpm: 76
        },
        { t: 'h', x: 'Precisão rítmica: os quatro defeitos clássicos' },
        {
          t: 'tabela',
          cab: ['Defeito', 'Como aparece', 'Correção'],
          linhas: [
            ['Antecipar o tempo forte', 'A nota chega antes do clique', 'Estudar com clique só no tempo 1'],
            ['Atrasar depois de salto', 'A mão não chegou a tempo', 'Encurtar a nota anterior ao salto'],
            ['Acelerar em trecho fácil', 'O andamento sobe sem perceber', 'Gravar e conferir com metrônomo'],
            ['Alongar a nota longa', 'Semínima pontuada vira quase duas', 'Subdividir mentalmente em colcheias']
          ]
        },
        {
          t: 'dica', titulo: 'O diagnóstico definitivo: ',
          x: 'grave-se com metrônomo e ouça depois *sem* o metrônomo. Os desvios que você não percebe ao tocar ficam evidentes na gravação.'
        },
        { t: 'metronomo', titulo: 'Clique deslocado', bpm: 60, compasso: '4/4', x: 'Toque imaginando que o clique é o contratempo (o "e" entre os tempos). Esse é o exercício que mais firma o pulso interno.' },
        { t: 'h', x: 'Subdivisão: a ferramenta de precisão' },
        { t: 'p', x: 'A maior parte dos erros rítmicos vem de não subdividir. Se o compasso é 4/4 e há colcheias, conte "1 e 2 e 3 e 4 e" mentalmente, mesmo nas notas longas. A subdivisão transforma o tempo numa grade, e a nota passa a ter um lugar exato para cair.' },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'c4/q. d4/c e4/q. f4/c | g4/b. z/q | g4/c f4/c e4/c d4/c c4/b | c4/o',
          legenda: 'Trecho com figuras pontuadas, o maior causador de imprecisão. Conte em colcheias do começo ao fim e as pontuadas se resolvem sozinhas.'
        },
        {
          t: 'tocar', titulo: 'Confira as notas do trecho',
          seq: [[2, 1], [2, 3], [1, 0], [1, 1], [1, 3]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora toque o trecho inteiro contando em colcheias.',
          x: 'Toque Dó, Ré, Mi, Fá e Sol, uma nota por vez.'
        },
        {
          t: 'check', chave: 'articulacao6', titulo: 'Rotina de controle',
          itens: [
            'Toquei uma escala inteira em staccato, abafando cada nota.',
            'Toquei a mesma escala em legato pleno.',
            'Pratiquei com o clique no contratempo por dois minutos.',
            'Gravei um trecho com metrônomo e ouvi sem ele.',
            'Contei em colcheias um trecho com figuras pontuadas.',
            'Abafei os baixos com o polegar numa passagem em que eles não deviam continuar soando.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Articulação e ritmo', rodadas: 6,
          perguntas: [
            { texto: 'No violão, o fim de uma nota é controlado por:', opcoes: ['Abafamento', 'Volume', 'Vibrato', 'Ponto de ataque'], correta: 0, explicacao: 'Sem abafar, a nota soa até a corda parar sozinha.' },
            { texto: 'Como se faz staccato numa melodia de mão direita?', opcoes: ['Abafando com o dedo que vai tocar a nota seguinte', 'Tocando mais forte', 'Soltando a mão esquerda', 'Usando apoyando'], correta: 0, explicacao: 'O dedo já em posição corta o som.' },
            { texto: 'Qual é a causa mais comum de atraso depois de um salto?', opcoes: ['A mão não chegou a tempo', 'A corda estava desafinada', 'O metrônomo está errado', 'A nota é longa'], correta: 0, explicacao: 'A solução é encurtar a nota anterior.' },
            { texto: 'O que é acento no violão?', opcoes: ['Ataque mais rápido, sem mudar a duração', 'Nota mais longa', 'Nota mais curta', 'Nota com vibrato'], correta: 0, explicacao: 'Volume vem da velocidade do ataque.' },
            { texto: 'Qual exercício firma mais o pulso interno?', opcoes: ['Clique no contratempo', 'Clique em colcheias', 'Clique em todos os tempos', 'Tocar sem metrônomo'], correta: 0, explicacao: 'Você precisa manter o tempo sozinho.' },
            { texto: 'Figuras pontuadas se resolvem quando:', opcoes: ['Você conta subdividindo', 'Você toca mais devagar', 'Você usa legato', 'Você muda a digitação'], correta: 0, explicacao: 'A subdivisão dá lugar exato a cada nota.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Deixar todas as notas soando até a corda parar.', certo: 'Abafe o que não deve continuar.' },
            { erro: 'Tocar sem subdividir mentalmente.', certo: 'Conte em colcheias, mesmo nas notas longas.' },
            { erro: 'Estudar só com clique em todos os tempos.', certo: 'Alterne com clique no tempo 1 e no contratempo.' },
            { erro: 'Confiar na própria percepção de pulso.', certo: 'Grave e ouça: a sensação engana.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Articulação é o controle do começo e do fim da nota.',
            'No violão, o fim se controla abafando.',
            'Staccato, portato, acento, tenuto e abafamento de polegar são os recursos básicos.',
            'Os quatro defeitos rítmicos clássicos têm correções específicas.',
            'Subdividir é a ferramenta central de precisão.',
            'Gravar com metrônomo e ouvir sem ele é o diagnóstico definitivo.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que define articulação?', opcoes: ['O controle do começo e do fim da nota', 'O volume', 'A afinação', 'A velocidade'], correta: 0, explicacao: 'Ataque e abafamento.' },
        { texto: 'Para tocar staccato, o violonista:', opcoes: ['Abafa a corda logo após o ataque', 'Toca mais forte', 'Usa vibrato curto', 'Reduz a pressão da esquerda'], correta: 0, explicacao: 'Normalmente com o dedo que vai tocar em seguida.' },
        { texto: 'Como corrigir atraso depois de um salto?', opcoes: ['Encurtando a nota anterior', 'Alongando a nota de chegada', 'Tocando mais forte', 'Mudando o andamento'], correta: 0, explicacao: 'Rouba-se tempo de antes.' },
        { texto: 'Qual é a função da subdivisão?', opcoes: ['Dar lugar exato a cada nota dentro do tempo', 'Aumentar a velocidade', 'Melhorar o timbre', 'Facilitar a leitura'], correta: 0, explicacao: 'O tempo vira uma grade.' },
        { texto: 'O exercício do clique no contratempo serve para:', opcoes: ['Firmar o pulso interno', 'Treinar leitura', 'Aumentar o volume', 'Melhorar o legato'], correta: 0, explicacao: 'Você mantém o tempo sem apoio no tempo forte.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar uma escala de duas oitavas inteiramente em staccato e depois em legato.',
          'Tocar um trecho com figuras pontuadas, no tempo, verificado em gravação.',
          'Tocar dois minutos com o clique no contratempo sem perder o pulso.',
          'Demonstrar abafamento de baixo com o polegar numa passagem real.'
        ],
        criterio: 'Você domina quando controla deliberadamente a duração de cada nota e a gravação com metrônomo não mostra desvios audíveis.'
      }
    },

    {
      id: 'n6.2.4',
      titulo: 'Timbre e execução polifônica complexa',
      resumo: 'Quatro vozes, quatro cores, um par de mãos.',
      minutos: 22,
      disciplinas: ['tecnica', 'interpretacao', 'contraponto'],
      prereq: ['n5.2.8', 'n6.1.1'],
      status: 'implementado',
      cobre: ['Controle de timbre', 'Execução polifônica complexa'],
      objetivo: 'Executar textura a três e quatro vozes com planos sonoros e cores distintas entre elas.',
      blocos: [
        { t: 'p', x: 'Na polifonia simples, basta que a melodia esteja à frente. Na polifonia complexa — uma fuga, um trecho de Bach a três vozes reais — cada voz precisa ter *cor própria*, não só volume próprio. É assim que o ouvinte consegue seguir qualquer uma delas.' },
        { t: 'h', x: 'Dar cor a uma voz' },
        {
          t: 'tabela',
          cab: ['Recurso', 'Efeito na voz', 'Observação'],
          linhas: [
            ['Ponto de ataque', 'Voz perto do cavalete fica brilhante e se destaca', 'O recurso mais poderoso'],
            ['Proporção unha/polpa', 'Mais polpa escurece e afasta', 'Bom para vozes internas'],
            ['Apoyando', 'Dá peso e corpo', 'Reservado à melodia'],
            ['Velocidade do ataque', 'Define volume', 'Independente do ponto de ataque'],
            ['Vibrato', 'Individualiza uma voz longa', 'Usar com parcimônia na polifonia']
          ]
        },
        {
          t: 'dica', titulo: 'A combinação mais útil: ',
          x: 'melodia com apoyando e ataque perto do cavalete; baixo com polpa do polegar, som redondo; voz interna com ataque leve perto da boca. Três cores, três planos, uma textura clara.'
        },
        { t: 'h', x: 'O método das camadas' },
        {
          t: 'passos', itens: [
            'Toque cada voz sozinha, no tempo, com o som que ela terá na versão final.',
            'Junte duas vozes por vez: baixo e melodia, depois melodia e voz interna, depois baixo e voz interna.',
            'Junte as três com a melodia em primeiro plano.',
            'Repita destacando o baixo e depois a voz interna.',
            'Volte ao equilíbrio final. Agora ele é uma escolha, não um acaso.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [3, 0], [2, 1]], fig: 'seminima' }, { pos: [[3, 0], [2, 3]], fig: 'seminima' }, { pos: [[5, 2], [3, 0], [1, 0]], fig: 'seminima' }, { pos: [[3, 0], [1, 1]], fig: 'seminima' }] },
            { notas: [{ pos: [[5, 0], [3, 2], [1, 3]], fig: 'seminima' }, { pos: [[3, 2], [1, 1]], fig: 'seminima' }, { pos: [[6, 3], [3, 0], [1, 0]], fig: 'minima' }] }
          ],
          legenda: 'Três vozes: baixo nas cordas graves, voz interna fixa na 3ª corda (pedal de Sol) e melodia nas cordas 1 e 2. Dê a cada uma a sua cor.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Quando há quatro vozes' },
        {
          t: 'lista', itens: [
            'Aceite que uma delas vai entrar e sair: isso é escrita idiomática, não falha.',
            'Priorize a voz que carrega o sujeito ou a melodia naquele momento — ela pode mudar de registro.',
            'As vozes internas podem ser reduzidas a notas pontuais sem prejuízo audível.',
            'Se a digitação não permite sustentar as quatro, escolha qual soltar e faça isso sempre no mesmo lugar.',
            'Marque na partitura qual voz é prioritária em cada compasso.'
          ]
        },
        {
          t: 'pauta', bpm: 54, numerar: true,
          txt: 'c3+g3+e4+g4/b c3+g3+e4+a4/b | d3+a3+f#4+a4/b d3+a3+f#4+d5/b | g2+g3+d4+b4/o',
          legenda: 'Quatro vozes escritas. Na execução, a voz do tenor (segunda de baixo para cima) pode soar apenas no primeiro tempo de cada compasso sem que a textura se perca.'
        },
        {
          t: 'tocar', titulo: 'Confira as três vozes',
          seq: [[5, 3], [3, 0], [2, 1], [5, 2]],
          rotulo: 'Conferir as notas',
          fim: 'Agora toque o trecho completo com a melodia perto do cavalete e o baixo com polpa.',
          x: 'Toque Dó, Sol, Dó e Si, uma nota por vez.'
        },
        {
          t: 'check', chave: 'polifonia6', titulo: 'Rotina das camadas',
          itens: [
            'Toquei cada voz sozinha, com o som que ela terá no final.',
            'Juntei as vozes duas a duas.',
            'Toquei as três com a melodia em primeiro plano.',
            'Toquei as três destacando o baixo.',
            'Toquei as três destacando a voz interna.',
            'Gravei e verifiquei se consigo seguir cada voz separadamente ao ouvir.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Polifonia complexa', rodadas: 5,
          perguntas: [
            { texto: 'O que distingue polifonia complexa de polifonia simples?', opcoes: ['Cada voz precisa de cor própria, não só volume', 'O número de notas', 'A velocidade', 'A tonalidade'], correta: 0, explicacao: 'Sem cor, as vozes se confundem.' },
            { texto: 'Qual recurso mais individualiza uma voz?', opcoes: ['O ponto de ataque', 'O vibrato', 'A digitação', 'A pestana'], correta: 0, explicacao: 'Perto do cavalete, a voz brilha e se separa.' },
            { texto: 'Qual é a cor recomendada para a voz interna?', opcoes: ['Ataque leve, mais polpa, perto da boca', 'Apoyando perto do cavalete', 'Vibrato constante', 'Volume máximo'], correta: 0, explicacao: 'Ela deve ficar no terceiro plano.' },
            { texto: 'Quando há quatro vozes no violão, o normal é:', opcoes: ['Uma delas entrar e sair', 'Todas soarem o tempo todo', 'Omitir o baixo', 'Usar capotraste'], correta: 0, explicacao: 'É escrita idiomática.' },
            { texto: 'Qual é o teste final da clareza polifônica?', opcoes: ['Conseguir seguir cada voz na gravação', 'Tocar sem erro', 'Tocar no andamento', 'Memorizar'], correta: 0, explicacao: 'O ouvinte precisa poder escolher que voz seguir.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Diferenciar vozes só pelo volume.', certo: 'Volume e cor juntos é o que separa os planos.' },
            { erro: 'Usar apoyando em todas as vozes.', certo: 'Reserve-o para a melodia.' },
            { erro: 'Mudar a cada estudo qual voz se solta.', certo: 'Decida e mantenha; a inconsistência é o que soa como erro.' },
            { erro: 'Estudar as vozes sempre juntas.', certo: 'O método das camadas é o que constrói o controle.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cada voz precisa de cor própria, não só de volume próprio.',
            'Ponto de ataque é o recurso mais poderoso de individualização.',
            'Melodia com apoyando perto do cavalete; baixo com polpa; voz interna leve.',
            'Método das camadas: sozinha, duas a duas, todas, destacando cada uma.',
            'Com quatro vozes, uma entra e sai — mas sempre no mesmo lugar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual recurso mais individualiza uma voz numa textura polifônica?', opcoes: ['O ponto de ataque', 'A velocidade', 'A pestana', 'A afinação'], correta: 0, explicacao: 'Ele muda a cor, não só o volume.' },
        { texto: 'A melodia numa textura a três vozes costuma usar:', opcoes: ['Apoyando e ataque perto do cavalete', 'Polpa perto da boca', 'Ataque leve', 'Abafamento'], correta: 0, explicacao: 'Peso e brilho a colocam à frente.' },
        { texto: 'Numa textura a quatro vozes no violão:', opcoes: ['É normal que uma entre e saia', 'Todas devem soar sempre', 'Usa-se afinação alternativa', 'Reduz-se a duas'], correta: 0, explicacao: 'Escrita idiomática.' },
        { texto: 'O método das camadas começa por:', opcoes: ['Tocar cada voz sozinha com o som final', 'Juntar tudo devagar', 'Memorizar', 'Definir a digitação'], correta: 0, explicacao: 'Depois se combinam duas a duas.' },
        { texto: 'Qual é o teste da clareza polifônica?', opcoes: ['Conseguir seguir qualquer voz ao ouvir a gravação', 'Tocar no andamento', 'Não errar notas', 'Usar metrônomo'], correta: 0, explicacao: 'Esse é o objetivo musical.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar um trecho a três vozes com cores distintas, verificável em gravação.',
          'Tocar o mesmo trecho destacando cada uma das três vozes, por vez.',
          'Executar um trecho a quatro vozes com decisão consistente sobre qual voz se solta.',
          'Apresentar a partitura com a voz prioritária marcada em cada compasso.'
        ],
        criterio: 'Você domina quando um ouvinte consegue acompanhar qualquer uma das vozes do começo ao fim do trecho.'
      }
    },

    {
      id: 'n6.2.5',
      titulo: 'Preparação de recitais e memorização de programas extensos',
      resumo: 'Da escolha das peças ao último minuto antes de entrar no palco.',
      minutos: 22,
      disciplinas: ['interpretacao', 'tecnica'],
      prereq: ['n5.2.10', 'n6.2.2'],
      status: 'implementado',
      cobre: ['Preparação de recitais', 'Memorização de programas extensos'],
      objetivo: 'Planejar e executar a preparação de um recital completo, com um programa memorizado de 30 a 45 minutos.',
      blocos: [
        { t: 'p', x: 'Memorizar uma peça é um problema resolvido no Nível 5. Memorizar *um programa inteiro* é outro problema: envolve gestão de tempo, rotação de repertório e resistência física e mental. Esta aula é um plano de trabalho, não uma lista de conselhos.' },
        { t: 'h', x: 'O calendário de seis meses' },
        {
          t: 'tabela',
          cab: ['Prazo', 'Objetivo', 'Indicador de que está no caminho'],
          linhas: [
            ['6 meses antes', 'Programa escolhido e digitações definidas', 'Nenhuma peça sem dedilhado completo'],
            ['5 meses', 'Todas as peças lidas e estudadas por seções', 'Você toca qualquer seção isolada'],
            ['4 meses', 'Metade do programa memorizada', 'Pontos de partida marcados'],
            ['3 meses', 'Programa inteiro memorizado', 'Você toca tudo sem partitura, mesmo com erros'],
            ['2 meses', 'Peças em andamento final; primeira execução para alguém', 'Uma pessoa já ouviu o programa inteiro'],
            ['1 mês', 'Três execuções completas por semana, gravadas', 'Nenhuma parada em duas execuções seguidas'],
            ['1 semana', 'Ensaio com roupa, no local se possível; só manutenção', 'Nenhum trecho novo sendo estudado'],
            ['No dia', 'Aquecimento leve, chegada cedo, silêncio', 'Você não estudou nada novo hoje']
          ]
        },
        { t: 'h', x: 'Rotação: como manter dez peças vivas' },
        {
          t: 'passos', itens: [
            'Divida o programa em três grupos.',
            'Cada dia, um grupo recebe estudo detalhado (trechos, andamento, correções).',
            'Os outros dois grupos recebem apenas uma execução completa, sem parar.',
            'Assim cada peça é estudada em profundidade a cada três dias e tocada inteira todos os dias.',
            'Uma vez por semana, execute o programa inteiro na ordem, sem interrupção, cronometrando.'
          ]
        },
        {
          t: 'dica', titulo: 'A regra da execução completa: ',
          x: 'tocar uma peça inteira sem parar é uma habilidade diferente de tocá-la bem em trechos. Se você só estuda trechos, no palco vai descobrir que nunca treinou o que realmente vai fazer.'
        },
        { t: 'h', x: 'Resistência' },
        {
          t: 'lista', itens: [
            'Um recital de 40 minutos exige condicionamento: faça execuções completas, não só estudo fragmentado.',
            'Monte o programa com alternância de exigência física: não ponha três peças exaustivas seguidas.',
            'Planeje as respirações entre peças: afinar, ajustar o banquinho e respirar fazem parte do programa.',
            'Beba água antes, não durante. Evite cafeína em excesso no dia.',
            'Se as mãos esfriarem, aqueça-as com movimento, não com alongamento forçado.'
          ]
        },
        { t: 'h', x: 'O roteiro do dia' },
        {
          t: 'tabela',
          cab: ['Momento', 'O que fazer', 'O que não fazer'],
          linhas: [
            ['Manhã', 'Aquecimento leve, uma execução tranquila do programa', 'Estudar trechos difíceis'],
            ['Tarde', 'Descanso, refeição leve, revisão mental sem instrumento', 'Ensaiar exaustivamente'],
            ['2h antes', 'Chegar ao local, testar acústica, afinar', 'Mudar digitações'],
            ['30 min antes', 'Aquecimento curto, escalas lentas', 'Tocar o programa inteiro'],
            ['5 min antes', 'Respiração, silêncio, revisão dos primeiros compassos', 'Conversar sobre a peça']
          ]
        },
        {
          t: 'pauta', bpm: 56, numerar: true,
          txt: 'c4/b e4/b | g4/b e4/b | f4/b d4/b | c4/o',
          legenda: 'Aquecimento de palco: notas longas, som pleno, atenção ao contato do dedo. Nada de velocidade antes de tocar.'
        },
        {
          t: 'tocar', titulo: 'Confira o aquecimento',
          seq: [[2, 1], [1, 0], [1, 3], [1, 0]],
          rotulo: 'Conferir as notas',
          fim: 'Toque essas notas lentamente, cuidando do som, cinco minutos antes de entrar.',
          x: 'Toque Dó, Mi, Sol e Mi, uma nota por vez.'
        },
        {
          t: 'check', chave: 'recital', titulo: 'Plano de recital',
          itens: [
            'Escolhi o programa e estimei a duração total.',
            'Dividi as peças em três grupos de rotação.',
            'Marquei pontos de partida em todas as peças.',
            'Fiz uma execução completa do programa, cronometrada.',
            'Toquei o programa inteiro para pelo menos uma pessoa.',
            'Escrevi o roteiro do dia da apresentação.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Preparação de recital', rodadas: 5,
          perguntas: [
            { texto: 'Com quanta antecedência o programa deve estar memorizado?', opcoes: ['Três meses', 'Uma semana', 'Um mês', 'No dia'], correta: 0, explicacao: 'Depois disso o trabalho é de estabilização.' },
            { texto: 'Como manter dez peças vivas ao mesmo tempo?', opcoes: ['Rotação: estudo detalhado por grupos e execução completa diária', 'Estudando uma por dia', 'Tocando só as difíceis', 'Revisando só no fim'], correta: 0, explicacao: 'Profundidade a cada três dias, execução todo dia.' },
            { texto: 'Por que fazer execuções completas?', opcoes: ['Tocar inteiro é uma habilidade diferente de tocar em trechos', 'Para economizar tempo', 'Para decorar mais rápido', 'Para aquecer'], correta: 0, explicacao: 'É o que você realmente vai fazer no palco.' },
            { texto: 'O que não se deve fazer no dia da apresentação?', opcoes: ['Estudar trechos difíceis', 'Chegar cedo', 'Aquecer levemente', 'Descansar'], correta: 0, explicacao: 'Mudanças de última hora desestabilizam a memória.' },
            { texto: 'Como se deve montar a ordem do programa quanto à exigência física?', opcoes: ['Alternando peças exaustivas com peças mais leves', 'Do mais fácil ao mais difícil', 'Todas as difíceis no começo', 'Em ordem cronológica estrita'], correta: 0, explicacao: 'A mão precisa se recuperar.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Estudar só por trechos até a véspera.', certo: 'Execuções completas desde dois meses antes.' },
            { erro: 'Mudar digitação no último mês.', certo: 'A partir de quatro semanas, só manutenção.' },
            { erro: 'Nunca tocar o programa para ninguém.', certo: 'A simulação é o treino mais valioso.' },
            { erro: 'Ignorar a resistência física.', certo: 'Quarenta minutos de concentração e esforço precisam de condicionamento.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Seis meses é o prazo confortável para um recital; três meses é o limite para memorizar.',
            'Rotação em três grupos mantém todas as peças vivas.',
            'Execução completa diária é obrigatória: tocar inteiro é outra habilidade.',
            'Alterne exigência física na ordem do programa.',
            'No dia: aquecimento leve, nada novo, chegada cedo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o prazo recomendado para ter o programa memorizado?', opcoes: ['Três meses antes', 'Uma semana antes', 'Dois dias antes', 'No dia'], correta: 0, explicacao: 'Sobra tempo para estabilizar e simular.' },
        { texto: 'Em quantos grupos se divide o programa na rotação?', opcoes: ['Três', 'Dois', 'Cinco', 'Um por peça'], correta: 0, explicacao: 'Cada peça recebe estudo profundo a cada três dias.' },
        { texto: 'Por que a execução completa é indispensável?', opcoes: ['É a habilidade que será usada no palco', 'Economiza tempo', 'Substitui o estudo de trechos', 'Melhora a leitura'], correta: 0, explicacao: 'Tocar inteiro exige continuidade e resistência.' },
        { texto: 'A partir de quando não se muda mais digitação?', opcoes: ['Quatro semanas antes', 'Na véspera', 'Dois meses antes', 'Nunca se fixa'], correta: 0, explicacao: 'A memória muscular precisa estabilizar.' },
        { texto: 'No dia da apresentação, o aquecimento deve ser:', opcoes: ['Leve e curto, com notas longas', 'Longo e intenso', 'O programa inteiro', 'Escalas rápidas'], correta: 0, explicacao: 'Preservar a mão e a concentração.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar um plano escrito de recital com calendário e grupos de rotação.',
          'Executar o programa completo, cronometrado, sem parar.',
          'Tocar o programa inteiro para pelo menos uma pessoa.',
          'Entregar a gravação de uma execução completa com autoavaliação escrita.'
        ],
        criterio: 'Você domina quando consegue tocar um programa de 30 a 45 minutos de memória, sem parar, duas vezes seguidas em dias diferentes.'
      }
    },

    {
      id: 'n6.2.6',
      titulo: 'Leitura de partituras complexas',
      resumo: 'Polifonia, mudanças de compasso e notações modernas lidas com método.',
      minutos: 20,
      disciplinas: ['leitura'],
      prereq: ['n5.2.9'],
      status: 'implementado',
      cobre: ['Leitura de partituras complexas'],
      objetivo: 'Ler partituras polifônicas, com métrica variável e notação contemporânea, decodificando-as sistematicamente.',
      blocos: [
        { t: 'p', x: 'Uma partitura complexa não se lê mais rápido: lê-se em *camadas*. Primeiro a estrutura, depois cada voz, depois o ritmo, depois os símbolos especiais. Tentar ler tudo de uma vez é o que faz uma página de Brouwer parecer impossível.' },
        { t: 'h', x: 'Camada 1 — Reconhecimento' },
        {
          t: 'passos', itens: [
            'Conte quantas vozes há, olhando a direção das hastes.',
            'Verifique se o compasso muda ao longo da peça e onde.',
            'Procure símbolos que você não conhece e resolva-os antes de tocar.',
            'Veja a extensão: a nota mais grave e a mais aguda definem as posições necessárias.',
            'Identifique repetições e seções: o que se repete é tempo ganho.'
          ]
        },
        { t: 'h', x: 'Camada 2 — Vozes separadas' },
        { t: 'p', x: 'Leia e toque cada voz sozinha, do começo ao fim. Isso parece lento, mas é mais rápido do que tentar ler tudo junto e travar a cada compasso. Em partitura polifônica, ler voz por voz é o método padrão, não um atalho para iniciantes.' },
        {
          t: 'pauta', bpm: 52, numerar: true, quebrar: 2,
          txt: 'c3+e4+g4/q c3+f4+a4/q | d3+d4+f#4/q d3+e4+g4/q | g2+d4+b4/b | c3+e4+g4/b',
          legenda: 'Três vozes escritas no mesmo pentagrama. Leia primeiro só a linha de baixo, depois só a superior, depois a do meio.'
        },
        { t: 'h', x: 'Camada 3 — Métrica variável' },
        {
          t: 'tabela',
          cab: ['Situação', 'Como ler'],
          linhas: [
            ['Compasso muda a cada poucos compassos', 'Marque a unidade de tempo: se ela não muda, só o número de tempos varia'],
            ['Compassos irregulares (5/8, 7/8)', 'Agrupe: 7/8 costuma ser 2+2+3 ou 3+2+2; o compositor indica'],
            ['Quiálteras complexas', 'Conte a subdivisão em voz alta antes de tocar'],
            ['Sem barras de compasso', 'Procure a respiração natural da frase e marque a lápis'],
            ['Notação proporcional (espacial)', 'A distância no papel indica a duração; leia com cronômetro na primeira vez']
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'c4/c d4/c e4/c d4/c c4/c | e4/c f4/c g4/c | c4/c d4/c e4/c d4/c c4/c',
          legenda: 'Alternância de 5/8 e 3/8 (as barras aqui marcam os grupos). Conte 1-2-3-4-5, 1-2-3, 1-2-3-4-5 em voz alta antes de tocar.',
          formula: null
        },
        { t: 'h', x: 'Camada 4 — Notação contemporânea' },
        {
          t: 'tabela',
          cab: ['Símbolo comum', 'Significado'],
          linhas: [
            ['Nota em losango', 'Harmônico natural ou artificial'],
            ['X no lugar da cabeça', 'Som percussivo, sem altura definida'],
            ['Seta para cima ou para baixo', 'Microtom: um quarto de tom'],
            ['Caixa retangular com instrução', 'Trecho a repetir livremente'],
            ['Linha ondulada vertical', 'Arpejar o acorde'],
            ['"tamb." ou "golpe"', 'Percussão no tampo'],
            ['"Bartók pizz."', 'Puxar a corda para que ela bata no braço']
          ],
          legenda: 'Cada compositor pode criar símbolos próprios: a legenda no início da partitura é parte obrigatória da leitura.'
        },
        {
          t: 'aviso', x: 'Numa partitura contemporânea, ler a página de legenda antes de tocar não é opcional. Muitos símbolos não são padronizados, e tocar sem conferir leva a executar outra peça.'
        },
        {
          t: 'tocar', titulo: 'Confira a voz superior',
          seq: [[1, 3], [1, 5], [1, 2], [1, 3]],
          rotulo: 'Conferir as notas',
          fim: 'Agora leia a voz do baixo e depois junte as duas.',
          x: 'Toque Sol, Lá, Fá sustenido e Sol, uma nota por vez.'
        },
        {
          t: 'check', chave: 'leitura6', titulo: 'Rotina de leitura complexa',
          itens: [
            'Contei as vozes pela direção das hastes.',
            'Li e toquei cada voz separadamente, do começo ao fim.',
            'Resolvi todos os símbolos desconhecidos antes de tocar.',
            'Contei em voz alta um trecho de métrica variável.',
            'Li a página de legenda de uma partitura contemporânea.',
            'Toquei a página inteira sem parar, aceitando erros.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Decodificar a página', rodadas: 5,
          perguntas: [
            { texto: 'Qual é o método para ler partitura polifônica?', opcoes: ['Ler e tocar cada voz separadamente primeiro', 'Ler tudo junto devagar', 'Começar pelo meio', 'Ler só a melodia'], correta: 0, explicacao: 'É o padrão, não um atalho.' },
            { texto: 'Em 7/8, o agrupamento mais comum é:', opcoes: ['2+2+3 ou 3+2+2', '7 tempos iguais', '4+3 sempre', '1+6'], correta: 0, explicacao: 'O compositor costuma indicar.' },
            { texto: 'Uma nota em losango normalmente indica:', opcoes: ['Harmônico', 'Nota percussiva', 'Microtom', 'Nota opcional'], correta: 0, explicacao: 'Natural ou artificial, conforme o contexto.' },
            { texto: 'O que é obrigatório antes de tocar uma partitura contemporânea?', opcoes: ['Ler a página de legenda dos símbolos', 'Decorar o ritmo', 'Definir a digitação', 'Afinar diferente'], correta: 0, explicacao: 'Muitos símbolos não são padronizados.' },
            { texto: 'Na notação proporcional, a duração é dada por:', opcoes: ['A distância entre as notas no papel', 'A forma das cabeças', 'O número de hastes', 'A armadura'], correta: 0, explicacao: 'O espaço representa o tempo.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tentar ler todas as vozes de uma vez.', certo: 'Camada por camada, voz por voz.' },
            { erro: 'Ignorar símbolos desconhecidos e "tocar assim mesmo".', certo: 'Resolva antes; eles mudam a peça.' },
            { erro: 'Contar métrica irregular só mentalmente.', certo: 'Conte em voz alta até o agrupamento ficar automático.' },
            { erro: 'Começar pelo trecho mais difícil.', certo: 'Reconheça a estrutura primeiro.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Partitura complexa se lê em camadas: estrutura, vozes, ritmo, símbolos.',
            'Ler voz por voz é o método padrão na polifonia.',
            'Métrica irregular se resolve agrupando e contando em voz alta.',
            'Notação contemporânea exige ler a legenda antes de tocar.',
            'Símbolos desconhecidos se resolvem antes, nunca durante.'
          ]
        }
      ],
      quiz: [
        { texto: 'Como se identificam as vozes numa partitura polifônica?', opcoes: ['Pela direção das hastes', 'Pelo tamanho das notas', 'Pela posição na pauta', 'Pela cor'], correta: 0, explicacao: 'Hastes para cima: voz superior.' },
        { texto: 'Qual é o primeiro passo ao ler uma página complexa?', opcoes: ['Reconhecer estrutura, vozes e símbolos', 'Tocar do começo', 'Definir o andamento', 'Marcar o dedilhado'], correta: 0, explicacao: 'A leitura começa antes de tocar.' },
        { texto: 'Nota com cabeça em X significa normalmente:', opcoes: ['Som percussivo sem altura definida', 'Harmônico', 'Nota opcional', 'Microtom'], correta: 0, explicacao: 'Comum em peças contemporâneas.' },
        { texto: 'Em compassos irregulares, o que resolve a leitura?', opcoes: ['Agrupar e contar em voz alta', 'Tocar mais devagar', 'Ignorar a fórmula', 'Usar metrônomo mais rápido'], correta: 0, explicacao: '7/8 vira 2+2+3, por exemplo.' },
        { texto: 'Por que a legenda de uma partitura contemporânea é obrigatória?', opcoes: ['Porque muitos símbolos não são padronizados', 'Porque é bonita', 'Porque traz o dedilhado', 'Porque indica o andamento'], correta: 0, explicacao: 'Cada compositor pode criar os seus.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Ler uma página polifônica voz por voz e depois junta, sem parar.',
          'Ler um trecho de métrica variável contando em voz alta.',
          'Identificar corretamente cinco símbolos de notação contemporânea.',
          'Apresentar uma partitura complexa com as camadas marcadas a lápis.'
        ],
        criterio: 'Você domina quando consegue decodificar uma página desconhecida de música contemporânea e tocá-la sem interromper, mesmo lentamente.'
      }
    },

    {
      id: 'n6.2.7',
      titulo: 'Transcrição para violão na prática',
      resumo: 'Do áudio ou da partitura original até a versão tocável, passo a passo.',
      minutos: 20,
      disciplinas: ['leitura', 'repertorio'],
      prereq: ['n6.1.6'],
      status: 'implementado',
      cobre: ['Transcrição para violão'],
      objetivo: 'Executar o processo completo de transcrição, incluindo tirar de ouvido e finalizar uma partitura legível.',
      blocos: [
        { t: 'p', x: 'A aula anterior tratou dos critérios. Esta trata do *processo*: o que fazer, em que ordem, desde a escolha da obra até a partitura pronta — inclusive quando não existe partitura original e é preciso tirar de ouvido.' },
        { t: 'h', x: 'Caminho A — Há partitura original' },
        {
          t: 'passos', itens: [
            'Obtenha a melhor fonte possível: autógrafo ou primeira edição, se estiverem em domínio público.',
            'Analise antes de transcrever: forma, harmonia, vozes. Transcrever sem analisar produz erros de prioridade.',
            'Escolha a tonalidade testando duas ou três no violão.',
            'Transcreva seção por seção, tocando cada compasso antes de passar adiante.',
            'Marque digitação de mão esquerda e direita desde o começo — ela faz parte da transcrição.',
            'Revise depois de alguns dias e simplifique o que ficou impraticável.'
          ]
        },
        { t: 'h', x: 'Caminho B — Tirar de ouvido' },
        {
          t: 'passos', itens: [
            'Descubra a tonalidade: cante a nota que soa como repouso e encontre-a no braço.',
            'Tire primeiro o *baixo*, compasso a compasso. Ele revela a harmonia.',
            'Tire a *harmonia*: com o baixo e o caráter maior/menor, os acordes aparecem.',
            'Tire a *melodia* por último — com harmonia e baixo prontos, ela se encaixa quase sozinha.',
            'Use reprodução em velocidade reduzida para trechos rápidos, sem alterar o tom.',
            'Escreva o que tirou: o que não está escrito se perde.'
          ]
        },
        {
          t: 'dica', titulo: 'Ordem importa: ',
          x: 'quase todo mundo tenta tirar a melodia primeiro e trava na harmonia. Tirando o baixo primeiro, a harmonia aparece sozinha e a melodia fica fácil.'
        },
        {
          t: 'pauta', bpm: 56, numerar: true, quebrar: 4,
          txt: 'c3/b g2/b | a2/b e2/b | f2/b c3/b | g2/b g2/b | c3/o',
          legenda: 'A linha de baixo de uma progressão conhecida. Só com ela, você já consegue nomear os acordes: C – G – Am – Em – F – C – G – G – C.'
        },
        {
          t: 'acorde', legenda: 'A harmonia que aquele baixo revela. Toque a sequência e confira se bate com o que você ouviu.',
          lista: [
            { nome: 'C', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
            { nome: 'G', cordas: [3, 2, 0, 0, 0, 3], dedos: [2, 1, null, null, null, 3] },
            { nome: 'Am', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
            { nome: 'Em', cordas: [0, 2, 2, 0, 0, 0], dedos: [null, 2, 3, null, null, null] },
            { nome: 'F', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } }
          ]
        },
        { t: 'h', x: 'Finalizar a partitura' },
        {
          t: 'lista', itens: [
            'Indique a afinação, se for diferente da padrão, com o desenho das cordas.',
            'Numere os compassos de cinco em cinco.',
            'Marque digitação de mão esquerda (1 a 4), de mão direita (p i m a) e cordas (números em círculo).',
            'Indique posições com algarismos romanos.',
            'Escreva o nome do compositor, da obra original e do instrumento de origem. Transcrição sem crédito é apropriação.',
            'Se a obra estiver protegida, a transcrição é uso privado: não distribua.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a linha de baixo',
          seq: [[5, 3], [6, 3], [5, 0], [6, 0], [6, 1], [5, 3]],
          rotulo: 'Conferir os baixos',
          fim: 'Com esses baixos você consegue reconstruir a harmonia inteira.',
          x: 'Toque Dó, Sol, Lá, Mi, Fá e Dó, uma nota por vez.'
        },
        {
          t: 'check', chave: 'transcrever', titulo: 'Faça o processo completo',
          itens: [
            'Escolhi uma peça curta e verifiquei se está em domínio público.',
            'Tirei a linha de baixo inteira de ouvido.',
            'Deduzi a harmonia a partir do baixo.',
            'Tirei a melodia por último.',
            'Escrevi a partitura com digitação completa.',
            'Creditei compositor, obra e instrumento original.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Processo de transcrição', rodadas: 5,
          perguntas: [
            { texto: 'Ao tirar de ouvido, o que se tira primeiro?', opcoes: ['A linha de baixo', 'A melodia', 'O ritmo', 'A dinâmica'], correta: 0, explicacao: 'Ela revela a harmonia.' },
            { texto: 'Por que analisar antes de transcrever?', opcoes: ['Para saber o que priorizar quando algo for impossível', 'Para ganhar tempo', 'Para escolher o andamento', 'Para decorar'], correta: 0, explicacao: 'Sem análise, corta-se o que não devia.' },
            { texto: 'A digitação faz parte da transcrição?', opcoes: ['Sim: ela define se a versão é tocável', 'Não, é escolha do intérprete', 'Só em música moderna', 'Só no primeiro compasso'], correta: 0, explicacao: 'Uma transcrição sem digitação está incompleta.' },
            { texto: 'O que se deve sempre creditar numa transcrição?', opcoes: ['Compositor, obra e instrumento original', 'Apenas o compositor', 'Apenas o transcritor', 'Nada'], correta: 0, explicacao: 'Transcrição sem crédito é apropriação.' },
            { texto: 'Transcrever obra ainda protegida é permitido:', opcoes: ['Para uso privado, sem distribuição', 'Em qualquer caso', 'Nunca', 'Se o crédito for dado'], correta: 0, explicacao: 'A distribuição exige autorização.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tirar a melodia primeiro.', certo: 'Baixo, harmonia, melodia — nessa ordem.' },
            { erro: 'Transcrever sem tocar cada compasso.', certo: 'O teste é no instrumento, não no papel.' },
            { erro: 'Deixar a digitação para depois.', certo: 'Ela faz parte das decisões de transcrição.' },
            { erro: 'Distribuir transcrição de obra protegida.', certo: 'Uso privado é permitido; distribuição exige autorização.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Com partitura: fonte, análise, tonalidade, transcrição por seções, digitação, revisão.',
            'De ouvido: tonalidade, baixo, harmonia, melodia — nessa ordem.',
            'Toque cada compasso antes de passar adiante.',
            'A digitação faz parte da transcrição.',
            'Credite sempre; distribua apenas obras em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a ordem correta ao tirar de ouvido?', opcoes: ['Baixo, harmonia, melodia', 'Melodia, baixo, harmonia', 'Harmonia, melodia, baixo', 'Ritmo, melodia, baixo'], correta: 0, explicacao: 'O baixo revela a harmonia e a melodia se encaixa.' },
        { texto: 'O que deve constar numa transcrição finalizada?', opcoes: ['Digitação, posições, afinação e créditos', 'Apenas as notas', 'Apenas a melodia', 'Apenas a cifra'], correta: 0, explicacao: 'Ela precisa ser utilizável por outra pessoa.' },
        { texto: 'Transcrição de obra protegida pode ser:', opcoes: ['Usada em privado, sem distribuição', 'Publicada livremente', 'Vendida', 'Distribuída com crédito'], correta: 0, explicacao: 'A distribuição depende de autorização.' },
        { texto: 'Por que tocar cada compasso durante a transcrição?', opcoes: ['Porque o papel aceita o que a mão não toca', 'Para memorizar', 'Para afinar', 'Para medir o tempo'], correta: 0, explicacao: 'O teste é físico.' },
        { texto: 'Para trechos rápidos ao tirar de ouvido, usa-se:', opcoes: ['Reprodução em velocidade reduzida sem mudar o tom', 'Transposição', 'Metrônomo', 'Partitura de outro instrumento'], correta: 0, explicacao: 'É o recurso padrão hoje.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tirar de ouvido a linha de baixo e a harmonia de uma peça curta.',
          'Tirar a melodia e escrever a transcrição completa.',
          'Marcar digitação de ambas as mãos e indicações de posição.',
          'Tocar a transcrição inteira como escrita, sem adaptações na hora.'
        ],
        criterio: 'Você domina quando entrega uma transcrição que outra pessoa conseguiria tocar a partir do seu papel, sem perguntar nada.'
      }
    },

    {
      id: 'n6.2.8',
      titulo: 'Gravação e autoavaliação',
      resumo: 'Ouvir-se de fora: o professor mais honesto que existe.',
      minutos: 18,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n6.2.1'],
      status: 'implementado',
      cobre: ['Gravação e autoavaliação'],
      objetivo: 'Montar uma rotina de gravação e avaliar a própria execução com critérios objetivos.',
      blocos: [
        { t: 'p', x: 'Enquanto toca, você não ouve o que o público ouve: parte da sua atenção está nas mãos, parte na memória, e o som chega à sua orelha de um ângulo que ninguém mais tem. A gravação resolve isso. É a ferramenta de estudo mais subutilizada que existe, e a mais barata.' },
        { t: 'h', x: 'Como gravar sem equipamento caro' },
        {
          t: 'lista', itens: [
            'O celular basta. Posicione-o a cerca de um metro, na altura da boca do violão, levemente de lado.',
            'Desligue qualquer redução de ruído ou processamento automático, se o aplicativo permitir.',
            'Grave sempre no mesmo lugar e na mesma posição: comparar só funciona se as condições forem iguais.',
            'Grave sem fone. Depois, ouça com fone: o detalhe aparece.',
            'Guarde os arquivos com data e nome da peça. O arquivo de três meses atrás é a melhor prova de progresso que existe.'
          ]
        },
        { t: 'h', x: 'A ficha de autoavaliação' },
        {
          t: 'tabela',
          cab: ['Critério', 'Pergunta', 'Nota de 1 a 5'],
          linhas: [
            ['Pulso', 'O andamento se manteve? Houve acelerações?', '—'],
            ['Precisão', 'Quantas notas erradas ou abafadas?', '—'],
            ['Som', 'O timbre é consistente? Há cliques ou ruídos?', '—'],
            ['Planos', 'A melodia está acima do acompanhamento?', '—'],
            ['Fraseado', 'As frases respiram? Há direção?', '—'],
            ['Dinâmica', 'Há variação real de volume?', '—'],
            ['Continuidade', 'Houve paradas ou hesitações?', '—']
          ],
          legenda: 'Preencha a ficha antes de ouvir pela segunda vez. A primeira audição é para impressão geral; a segunda, para diagnóstico.'
        },
        {
          t: 'passos', itens: [
            'Ouça a gravação inteira uma vez, sem anotar nada. Só impressão geral.',
            'Ouça de novo com a partitura na mão e marque cada problema.',
            'Classifique os problemas: técnicos, musicais ou de memória.',
            'Escolha *dois* para trabalhar nesta semana. Mais que dois dispersa.',
            'Grave de novo em uma semana e compare.'
          ]
        },
        {
          t: 'dica', titulo: 'A regra das 24 horas: ',
          x: 'não avalie uma gravação no mesmo dia em que ela foi feita. A frustração do momento distorce o julgamento. Um dia depois, você ouve o que realmente está lá.'
        },
        { t: 'h', x: 'O que a gravação revela que o ouvido não percebe' },
        {
          t: 'lista', itens: [
            'Acelerações em trechos fáceis.',
            'Notas que você acha que estão soando e estão abafadas.',
            'Desigualdade de volume entre os dedos.',
            'Ruídos de deslocamento da mão esquerda nas cordas graves.',
            'Rubato que você acha discreto e na verdade é exagerado.',
            'Falta de contraste dinâmico: quase todo mundo toca mais uniforme do que pensa.'
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'e4/q g4/q b4/q g4/q | a4/b f#4/b | e4/q d4/q c4/q b3/q | e4/o',
          legenda: 'Trecho de teste para a rotina de gravação: longo o bastante para revelar problemas, curto o bastante para repetir toda semana.'
        },
        {
          t: 'tocar', titulo: 'Confira o trecho de teste',
          seq: [[1, 0], [1, 3], [2, 0], [1, 2], [1, 0]],
          rotulo: 'Conferir as notas',
          fim: 'Agora grave esse trecho e preencha a ficha de autoavaliação.',
          x: 'Toque Mi, Sol, Si, Fá sustenido e Mi, uma nota por vez.'
        },
        {
          t: 'check', chave: 'gravacao', titulo: 'Rotina semanal de gravação',
          itens: [
            'Gravei uma peça inteira esta semana.',
            'Ouvi uma vez para impressão geral.',
            'Ouvi de novo com a partitura e marquei os problemas.',
            'Preenchi a ficha com os sete critérios.',
            'Escolhi dois problemas para trabalhar.',
            'Comparei com a gravação da semana passada.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Autoavaliação', rodadas: 5,
          perguntas: [
            { texto: 'Por que o intérprete não ouve o que o público ouve?', opcoes: ['Atenção dividida e ângulo de escuta diferente', 'Porque o violão é baixo', 'Por causa da sala', 'Por nervosismo'], correta: 0, explicacao: 'Parte da atenção está nas mãos e na memória.' },
            { texto: 'Quantos problemas se deve escolher para trabalhar por semana?', opcoes: ['Dois', 'Todos', 'Cinco', 'Nenhum'], correta: 0, explicacao: 'Mais que dois dispersa o esforço.' },
            { texto: 'Quando avaliar uma gravação?', opcoes: ['Pelo menos 24 horas depois', 'Imediatamente', 'Uma semana depois', 'Nunca'], correta: 0, explicacao: 'A frustração do momento distorce o julgamento.' },
            { texto: 'Qual defeito a gravação mais costuma revelar?', opcoes: ['Aceleração em trechos fáceis', 'Afinação do instrumento', 'Postura', 'Tamanho da unha'], correta: 0, explicacao: 'O ouvido do intérprete compensa automaticamente.' },
            { texto: 'Para comparar gravações, é preciso:', opcoes: ['Manter as mesmas condições de captação', 'Usar equipamento profissional', 'Gravar em estúdio', 'Tocar a mesma velocidade'], correta: 0, explicacao: 'Mesmo lugar, mesma posição, mesmo aparelho.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Gravar só quando a peça está pronta.', certo: 'Grave durante o processo: é aí que a gravação ensina.' },
            { erro: 'Ouvir uma vez e tirar conclusões.', certo: 'Primeira audição é impressão; segunda é diagnóstico.' },
            { erro: 'Tentar corrigir tudo de uma vez.', certo: 'Dois problemas por semana.' },
            { erro: 'Apagar as gravações antigas.', certo: 'Elas são a prova objetiva do progresso.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'A gravação mostra o que o intérprete não consegue ouvir enquanto toca.',
            'Celular basta, desde que as condições sejam sempre as mesmas.',
            'Primeira audição: impressão. Segunda: diagnóstico com partitura.',
            'Sete critérios: pulso, precisão, som, planos, fraseado, dinâmica e continuidade.',
            'Dois problemas por semana; comparação semanal.',
            'Avalie só depois de 24 horas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o principal valor da gravação no estudo?', opcoes: ['Revelar o que o intérprete não ouve enquanto toca', 'Documentar o repertório', 'Compartilhar com amigos', 'Medir a duração'], correta: 0, explicacao: 'É um ouvido externo gratuito.' },
        { texto: 'Quantas audições a rotina de autoavaliação pede?', opcoes: ['Duas: impressão e diagnóstico', 'Uma', 'Três', 'Quantas forem necessárias'], correta: 0, explicacao: 'A segunda é feita com a partitura.' },
        { texto: 'Quantos problemas trabalhar por semana?', opcoes: ['Dois', 'Um', 'Cinco', 'Todos os encontrados'], correta: 0, explicacao: 'Foco produz resultado.' },
        { texto: 'Por que esperar 24 horas antes de avaliar?', opcoes: ['A frustração imediata distorce o julgamento', 'O arquivo precisa processar', 'Para esquecer a peça', 'Para comparar com outra'], correta: 0, explicacao: 'Distanciamento melhora a análise.' },
        { texto: 'O que torna duas gravações comparáveis?', opcoes: ['Mesmas condições de captação', 'Mesmo andamento', 'Mesmo dia', 'Mesmo equipamento profissional'], correta: 0, explicacao: 'Posição, lugar e aparelho iguais.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Gravar uma peça inteira e entregar a ficha de autoavaliação preenchida.',
          'Apontar dois problemas escolhidos e o plano de trabalho para cada um.',
          'Apresentar duas gravações da mesma peça com um mês de diferença.',
          'Descrever, em três frases, o que mudou entre elas.'
        ],
        criterio: 'Você domina quando consegue ouvir a própria gravação e apontar problemas concretos e acionáveis, em vez de impressões vagas.'
      }
    },

    {
      id: 'n6.2.9',
      titulo: 'Música de câmara',
      resumo: 'Tocar com outras pessoas: ouvir mais do que se toca.',
      minutos: 20,
      disciplinas: ['conjunto', 'interpretacao'],
      prereq: ['n6.2.3'],
      status: 'implementado',
      cobre: ['Música de câmara'],
      objetivo: 'Participar de um grupo de câmara com as competências próprias: entrada, equilíbrio, escuta e ensaio.',
      blocos: [
        { t: 'p', x: 'Tocar sozinho e tocar em grupo são habilidades diferentes. No solo, você decide tudo; na câmara, você negocia tudo. O violão tem uma dificuldade adicional: é um instrumento de pouco volume, e equilibrar-se com flauta, violino ou voz exige escolhas específicas.' },
        { t: 'h', x: 'As quatro competências de conjunto' },
        {
          t: 'tabela',
          cab: ['Competência', 'O que envolve'],
          linhas: [
            ['Entrada', 'Dar e receber a respiração que inicia a peça; olhar, respirar e mover juntos'],
            ['Pulso compartilhado', 'Nem seguir nem puxar: construir um pulso comum e sustentá-lo'],
            ['Equilíbrio', 'Saber a cada momento quem tem a melodia e ceder espaço'],
            ['Escuta ativa', 'Ouvir o conjunto, não a própria parte']
          ]
        },
        { t: 'h', x: 'A entrada' },
        {
          t: 'passos', itens: [
            'Combine quem dá a entrada antes de começar.',
            'Quem dá respira no andamento da peça: a respiração é o metrônomo.',
            'O movimento do corpo acompanha a respiração, para que todos vejam.',
            'Olhe para o grupo, não para o braço do violão.',
            'Ensaiem a entrada isoladamente, dez vezes, antes de ensaiar a peça.'
          ]
        },
        {
          t: 'dica', titulo: 'A entrada é metade do ensaio: ',
          x: 'grupos amadores passam horas em trechos difíceis e nunca ensaiam a primeira nota. Em apresentação, é a entrada que costuma falhar.'
        },
        { t: 'h', x: 'Equilíbrio: o problema do violão' },
        {
          t: 'lista', itens: [
            'Com flauta ou violino, o violão quase sempre acompanha: toque mais perto do cavalete para ganhar projeção sem forçar.',
            'Com voz, o violão precisa ficar abaixo: use mais polpa e ataque mais lento.',
            'Com outro violão, defina quem é primeiro e quem é segundo em cada seção, e anote na partitura.',
            'Em dúvida, toque menos: o excesso de volume do acompanhamento é o erro mais comum.',
            'Peça a alguém para ouvir de longe e dizer o que está soando demais.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [3, 0], [2, 1]], fig: 'seminima' }, { pos: [[4, 2], [3, 0], [2, 1]], fig: 'seminima' }, { pos: [[5, 2], [3, 0], [2, 0]], fig: 'seminima' }, { pos: [[5, 0], [3, 1], [2, 1]], fig: 'seminima' }] },
            { notas: [{ pos: [[6, 3], [4, 0], [3, 0]], fig: 'seminima' }, { pos: [[6, 1], [4, 2], [3, 1]], fig: 'seminima' }, { pos: [[5, 3], [3, 0], [2, 1]], fig: 'minima' }] }
          ],
          legenda: 'Parte de acompanhamento típica: harmonia simples, sem melodia, com o baixo marcando. Toque-a com volume reduzido, imaginando uma flauta por cima.',
          tocar: true, bpm: 72
        },
        { t: 'h', x: 'Como ensaiar' },
        {
          t: 'tabela',
          cab: ['Etapa', 'Duração típica', 'O que fazer'],
          linhas: [
            ['Afinação conjunta', '5 min', 'Afinar juntos, com a mesma referência'],
            ['Leitura corrida', '10 min', 'Tocar do começo ao fim sem parar, para mapear problemas'],
            ['Trabalho de trechos', '30 min', 'Dois ou três pontos, não mais'],
            ['Entradas e finais', '10 min', 'Ensaiar isoladamente'],
            ['Execução final', '10 min', 'Tocar inteiro de novo, aplicando o que foi trabalhado']
          ],
          legenda: 'Ensaio sem plano vira repetição do começo ao fim. Chegue com os pontos de trabalho já escolhidos.'
        },
        { t: 'h', x: 'Repertório para começar' },
        {
          t: 'lista', itens: [
            'Dois violões: duos de Carulli, Giuliani e Sor (domínio público); arranjos de peças simples.',
            'Violão e flauta: as serenatas e os duos de Giuliani e Carulli.',
            'Violão e voz: canções populares e lieder transcritos.',
            'Violão em conjunto maior: orquestra de violões, com partes de dificuldade variada.',
            'Comece sempre por material mais fácil do que o seu nível solo: a atenção dividida cobra seu preço.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a parte de acompanhamento',
          seq: [[5, 3], [4, 2], [5, 2], [5, 0]],
          rotulo: 'Conferir os baixos',
          fim: 'Agora toque o acompanhamento inteiro, em volume reduzido.',
          x: 'Toque Dó, Mi, Si e Lá, uma nota por vez.'
        },
        {
          t: 'check', chave: 'camara', titulo: 'Prática de conjunto',
          itens: [
            'Ensaiei a entrada de uma peça dez vezes isoladamente.',
            'Toquei uma parte de acompanhamento em volume reduzido.',
            'Marquei na partitura quem tem a melodia em cada seção.',
            'Pedi a alguém para ouvir de longe e avaliar o equilíbrio.',
            'Fiz um ensaio com plano escrito, nas cinco etapas.',
            'Toquei uma peça de conjunto inteira sem parar.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Tocar em grupo', rodadas: 5,
          perguntas: [
            { texto: 'O que costuma falhar em apresentações de grupos amadores?', opcoes: ['A entrada', 'O trecho mais difícil', 'A afinação', 'O final'], correta: 0, explicacao: 'Quase nunca é ensaiada.' },
            { texto: 'Como se dá uma entrada?', opcoes: ['Respirando no andamento da peça, com movimento visível', 'Contando em voz alta', 'Batendo o pé', 'Olhando o metrônomo'], correta: 0, explicacao: 'A respiração é o metrônomo do grupo.' },
            { texto: 'Com flauta ou violino, o violão deve:', opcoes: ['Projetar sem forçar, tocando mais perto do cavalete', 'Tocar o mais forte possível', 'Tocar sempre a melodia', 'Usar apoyando sempre'], correta: 0, explicacao: 'Brilho projeta mais que força.' },
            { texto: 'Qual é o erro de equilíbrio mais comum?', opcoes: ['Acompanhamento alto demais', 'Melodia alta demais', 'Baixo fraco', 'Vibrato excessivo'], correta: 0, explicacao: 'Em dúvida, toque menos.' },
            { texto: 'Quantos pontos de trabalho num ensaio de uma hora?', opcoes: ['Dois ou três', 'Dez', 'Todos os problemas', 'Nenhum: tocar inteiro'], correta: 0, explicacao: 'Ensaio precisa de plano e foco.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar olhando só para o próprio braço.', certo: 'Olhe para o grupo; a comunicação é visual.' },
            { erro: 'Seguir o outro músico em vez de construir pulso comum.', certo: 'Seguir produz atraso constante.' },
            { erro: 'Escolher repertório do mesmo nível do seu solo.', certo: 'A atenção dividida exige material mais fácil.' },
            { erro: 'Ensaiar do começo ao fim repetidamente.', certo: 'Ensaio tem etapas e pontos escolhidos.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Quatro competências: entrada, pulso compartilhado, equilíbrio e escuta ativa.',
            'A entrada se ensaia isoladamente; é o que mais falha.',
            'O violão quase sempre precisa ceder volume — projete com brilho, não com força.',
            'Ensaio eficiente tem cinco etapas e dois ou três pontos de trabalho.',
            'Comece com repertório mais fácil que o seu nível solo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as quatro competências de música de câmara?', opcoes: ['Entrada, pulso compartilhado, equilíbrio e escuta ativa', 'Técnica, leitura, memória e som', 'Afinação, ritmo, dinâmica e timbre', 'Postura, respiração, olhar e pulso'], correta: 0, explicacao: 'São habilidades distintas das de solo.' },
        { texto: 'Como o violão ganha projeção sem forçar?', opcoes: ['Tocando mais perto do cavalete', 'Tocando mais forte', 'Usando cordas novas', 'Afinando mais alto'], correta: 0, explicacao: 'Brilho atravessa a textura.' },
        { texto: 'A respiração de quem dá a entrada funciona como:', opcoes: ['O metrônomo do grupo', 'Um sinal de atenção', 'Um gesto decorativo', 'Um compasso de espera'], correta: 0, explicacao: 'Ela define o andamento.' },
        { texto: 'Numa hora de ensaio, quantos pontos trabalhar?', opcoes: ['Dois ou três', 'Oito', 'Todos', 'Nenhum'], correta: 0, explicacao: 'Com plano definido antes.' },
        { texto: 'Ao escolher repertório de conjunto, deve-se:', opcoes: ['Escolher material mais fácil que o nível solo', 'Escolher o mais difícil possível', 'Escolher o mesmo nível', 'Evitar domínio público'], correta: 0, explicacao: 'A atenção fica dividida.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Executar a entrada de uma peça em duo, dez vezes seguidas, sempre junto.',
          'Tocar uma parte de acompanhamento com equilíbrio adequado, confirmado por um ouvinte.',
          'Conduzir um ensaio de uma hora seguindo as cinco etapas.',
          'Tocar uma peça de conjunto inteira sem parar.'
        ],
        criterio: 'Você domina quando entra junto sem contagem verbal, mantém o pulso comum e cede espaço sonoro quando não tem a melodia.'
      }
    }
  ]
};
