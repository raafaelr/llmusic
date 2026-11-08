// NÍVEL 6 — MÓDULO 6.1: Conhecimento musical avançado
// Contraponto avançado, modalismo, escalas exóticas, análise, arranjo,
// transcrição, composição, improvisação, acústica e história do violão.

export const M61 = {
  id: '6.1',
  titulo: 'Conhecimento musical avançado',
  resumo: 'Da análise à criação: as ferramentas que transformam um intérprete em um músico autônomo.',
  aulas: [
    {
      id: 'n6.1.1',
      titulo: 'Contraponto avançado',
      resumo: 'Imitação, cânone, fuga e os procedimentos que organizam a polifonia.',
      minutos: 24,
      disciplinas: ['contraponto', 'teoria'],
      prereq: ['n5.1.6'],
      status: 'implementado',
      cobre: ['Contraponto avançado'],
      objetivo: 'Reconhecer e aplicar imitação, inversão, aumentação e os elementos de uma fuga.',
      blocos: [
        { t: 'p', x: 'O contraponto das cinco espécies ensina a escrever duas vozes que soam bem juntas. O contraponto avançado faz outra pergunta: como *derivar* uma voz da outra, de modo que a peça inteira cresça de um único material? As respostas são procedimentos — imitação, inversão, aumentação, diminuição e estreito — e a forma que os reúne é a fuga.' },
        { t: 'h', x: 'Os cinco procedimentos' },
        {
          t: 'tabela',
          cab: ['Procedimento', 'O que faz', 'Efeito'],
          linhas: [
            ['Imitação', 'A segunda voz repete o desenho da primeira, depois de um intervalo de tempo', 'Unidade e diálogo'],
            ['Inversão', 'O desenho é espelhado: o que subia, desce', 'Variedade com o mesmo material'],
            ['Aumentação', 'Os valores dobram: semínimas viram mínimas', 'Grandiosidade, ponto de chegada'],
            ['Diminuição', 'Os valores reduzem à metade', 'Aceleração, tensão'],
            ['Retrógrado', 'O tema é lido de trás para frente', 'Raro e intelectual; mais visível que audível']
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'c4/q e4/q g4/q e4/q | f4/q d4/q c4/b | z/q c4/q e4/q g4/q | e4/q f4/q d4/q c4/q',
          legenda: 'Imitação à distância de um compasso: a segunda voz entra com o mesmo desenho, um tempo depois. É o núcleo do cânone.'
        },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'c4/q e4/q g4/q e4/q | c4/q a3/q f3/q a3/q',
          legenda: 'Em cima o tema; embaixo o mesmo tema invertido — cada intervalo que subia agora desce na mesma medida.'
        },
        { t: 'h', x: 'Cânone' },
        { t: 'p', x: 'Uma voz imita a outra do começo ao fim, em intervalo e distância fixos. O violão consegue cânones a duas vozes com facilidade e a três com dificuldade. É o melhor exercício de independência que existe, porque qualquer descuido na sustentação apaga uma das vozes.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[4, 0]], fig: 'seminima' }, { pos: [[3, 2]], fig: 'seminima' }, { pos: [[2, 0], [4, 0]], fig: 'seminima' }, { pos: [[2, 1], [3, 2]], fig: 'seminima' }] },
            { notas: [{ pos: [[1, 0], [2, 0]], fig: 'seminima' }, { pos: [[1, 1], [2, 1]], fig: 'seminima' }, { pos: [[1, 0], [2, 3]], fig: 'seminima' }, { pos: [[4, 0], [2, 1]], fig: 'minima' }] }
          ],
          legenda: 'Cânone a duas vozes à oitava, com distância de dois tempos. Toque devagar e verifique se as duas vozes duram o valor escrito.',
          tocar: true, bpm: 56
        },
        { t: 'h', x: 'A anatomia de uma fuga' },
        {
          t: 'lista', itens: [
            '*Sujeito*: o tema, apresentado sozinho na primeira voz.',
            '*Resposta*: o sujeito repetido na segunda voz, na dominante. Se for adaptada para caber na harmonia, chama-se resposta tonal.',
            '*Contrassujeito*: a melodia que a primeira voz toca enquanto a segunda apresenta a resposta.',
            '*Episódio*: trecho de ligação, feito com fragmentos do sujeito, que modula.',
            '*Estreito (stretto)*: as entradas do sujeito se sobrepõem, cada vez mais próximas. É o clímax.',
            '*Pedal final*: uma nota longa no baixo sustenta a última seção.'
          ]
        },
        {
          t: 'dica', titulo: 'Como estudar uma fuga no violão: ',
          x: 'marque cada entrada do sujeito com uma cor na partitura. Depois toque só o sujeito, cada vez que ele aparecer, pulando o resto. Quando você souber onde ele está, a fuga deixa de ser uma massa de notas.'
        },
        { t: 'h', x: 'No violão' },
        { t: 'p', x: 'Com quatro dedos na mão esquerda, três vozes reais são o limite prático e a quarta entra e sai. A Fuga BWV 1000 (transcrição da fuga da Sonata BWV 1001, em domínio público) é a peça de referência: três vozes do começo ao fim, com estreito e pedal final.' },
        {
          t: 'tocar', titulo: 'Confira o sujeito do exercício',
          seq: [[4, 0], [3, 2], [2, 0], [2, 1]],
          rotulo: 'Conferir as notas do sujeito',
          fim: 'Agora toque o cânone completo, mantendo as duas vozes sustentadas.',
          x: 'Toque Ré, Lá, Si e Dó, uma nota por vez.'
        },
        {
          t: 'check', chave: 'contrapontoav', titulo: 'Pratique os procedimentos',
          itens: [
            'Escrevi um tema de quatro compassos e o imitei à distância de um compasso.',
            'Inverti o mesmo tema e toquei as duas versões em sequência.',
            'Escrevi o tema em aumentação (valores dobrados).',
            'Toquei o cânone a duas vozes mantendo a sustentação.',
            'Marquei com cores as entradas do sujeito numa fuga e toquei só elas.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Fuga e procedimentos', rodadas: 6,
          perguntas: [
            { texto: 'O que é o sujeito de uma fuga?', opcoes: ['O tema, apresentado sozinho na primeira voz', 'O acompanhamento', 'A seção final', 'A modulação central'], correta: 0, explicacao: 'Tudo na fuga deriva dele.' },
            { texto: 'Em que tom costuma entrar a resposta?', opcoes: ['Na dominante', 'Na tônica', 'No relativo menor', 'Na subdominante'], correta: 0, explicacao: 'Daí vem a necessidade de resposta tonal em alguns casos.' },
            { texto: 'O que é inversão?', opcoes: ['O desenho melódico espelhado', 'O tema de trás para frente', 'Valores dobrados', 'A segunda voz mais grave'], correta: 0, explicacao: 'O que subia, desce, na mesma medida.' },
            { texto: 'Aumentação significa:', opcoes: ['Dobrar os valores das notas', 'Tocar mais forte', 'Subir uma oitava', 'Acrescentar vozes'], correta: 0, explicacao: 'Costuma marcar um ponto de chegada.' },
            { texto: 'O estreito (stretto) é:', opcoes: ['A sobreposição das entradas do sujeito', 'O episódio final', 'Uma pausa geral', 'A inversão do tema'], correta: 0, explicacao: 'É o momento de maior densidade.' },
            { texto: 'Quantas vozes reais o violão sustenta confortavelmente?', opcoes: ['Três', 'Duas', 'Quatro', 'Cinco'], correta: 0, explicacao: 'A quarta entra e sai, o que é prática normal.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar fuga sem saber onde está o sujeito.', certo: 'Marque todas as entradas antes de começar a estudar as notas.' },
            { erro: 'Dar o mesmo volume às três vozes.', certo: 'A voz que apresenta o sujeito vem à frente.' },
            { erro: 'Soltar o pedal final cedo.', certo: 'Ele sustenta a seção inteira; escolha digitação que permita mantê-lo.' },
            { erro: 'Confundir inversão com retrógrado.', certo: 'Inversão espelha a direção; retrógrado lê de trás para frente.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Procedimentos: imitação, inversão, aumentação, diminuição e retrógrado.',
            'O cânone é imitação integral e o melhor exercício de independência.',
            'A fuga tem sujeito, resposta, contrassujeito, episódios, estreito e pedal final.',
            'No violão, três vozes reais são o limite prático.',
            'Estude a fuga marcando e isolando as entradas do sujeito.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual procedimento espelha a direção dos intervalos?', opcoes: ['Inversão', 'Aumentação', 'Diminuição', 'Imitação'], correta: 0, explicacao: 'O que subia passa a descer.' },
        { texto: 'O contrassujeito é:', opcoes: ['O que a primeira voz toca durante a resposta', 'O segundo tema da fuga', 'O baixo', 'Uma modulação'], correta: 0, explicacao: 'Costuma reaparecer sempre junto do sujeito.' },
        { texto: 'Qual seção de uma fuga serve de ligação e modula?', opcoes: ['O episódio', 'O estreito', 'A exposição', 'O pedal'], correta: 0, explicacao: 'Feito com fragmentos do sujeito.' },
        { texto: 'Qual obra é a fuga de referência no violão?', opcoes: ['BWV 1000', 'BWV 996', 'BWV 999', 'BWV 1007'], correta: 0, explicacao: 'Transcrição da fuga da Sonata BWV 1001.' },
        { texto: 'Qual é o primeiro passo para estudar uma fuga?', opcoes: ['Marcar todas as entradas do sujeito', 'Decorar o baixo', 'Definir o andamento', 'Escolher a digitação'], correta: 0, explicacao: 'A estrutura orienta todo o resto.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar o cânone a duas vozes com ambas sustentadas pelo valor escrito.',
          'Apresentar um tema próprio e sua inversão.',
          'Marcar as entradas do sujeito numa fuga e tocar apenas elas, em sequência.',
          'Tocar um trecho de fuga a três vozes com a voz do sujeito destacada.'
        ],
        criterio: 'Você domina quando, diante de uma fuga, consegue apontar cada entrada do sujeito e destacá-la ao tocar.'
      }
    },

    {
      id: 'n6.1.2',
      titulo: 'Modos gregos e harmonia modal',
      resumo: 'Sete cores a partir das mesmas sete notas — e como sustentá-las na harmonia.',
      minutos: 22,
      disciplinas: ['teoria', 'harmonia'],
      prereq: ['n5.1.1'],
      status: 'implementado',
      cobre: ['Modos gregos', 'Harmonia modal'],
      objetivo: 'Construir, reconhecer e harmonizar os sete modos, distinguindo música modal de música tonal.',
      blocos: [
        { t: 'p', x: 'Toque as notas de Dó maior começando em Ré e terminando em Ré: as notas são as mesmas, mas o som é outro. Isso é um *modo*. Os sete modos são as sete maneiras de ouvir a mesma escala, cada uma com um centro e uma cor própria.' },
        {
          t: 'tabela',
          cab: ['Modo', 'Começa em (em Dó)', 'Nota característica', 'Cor'],
          linhas: [
            ['Jônio', 'Dó', '— (é a escala maior)', 'Luminoso, estável'],
            ['Dórico', 'Ré', 'Sexta maior num contexto menor', 'Menor, mas com esperança'],
            ['Frígio', 'Mi', 'Segunda menor', 'Espanhol, tenso, sombrio'],
            ['Lídio', 'Fá', 'Quarta aumentada', 'Flutuante, luminoso, cinematográfico'],
            ['Mixolídio', 'Sol', 'Sétima menor', 'Maior, mas sem puxar para a tônica'],
            ['Eólio', 'Lá', '— (é a menor natural)', 'Melancólico'],
            ['Lócrio', 'Si', 'Quinta diminuta', 'Instável; raro como centro']
          ]
        },
        { t: 'teclado', destacar: [62, 64, 65, 67, 69, 71, 72, 74], legenda: 'Ré dórico no teclado: as teclas brancas de Ré a Ré. A sexta maior (Si) é o que o distingue do Ré menor natural.' },
        { t: 'h', x: 'O problema da harmonia modal' },
        { t: 'p', x: 'Para que um modo se afirme, é preciso evitar o que puxa para a tônica maior: a cadência V – I com sensível. A harmonia modal substitui essa força por outras — pedal, oscilação entre dois acordes e destaque da nota característica.' },
        {
          t: 'lista', itens: [
            '*Pedal*: uma nota grave constante ancora o modo. No violão, uma corda solta faz isso naturalmente.',
            '*Oscilação de dois acordes*: Dm – G em Ré dórico; Em – F em Mi frígio; G – F em Sol mixolídio.',
            '*Destaque da nota característica*: ela precisa aparecer na melodia e na harmonia, ou o modo não se ouve.',
            '*Evitar a dominante com sensível*: um A7 em Ré dórico transforma tudo em Ré menor tonal.'
          ]
        },
        {
          t: 'acorde', legenda: 'Os pares que sustentam três modos no violão. Toque cada par várias vezes, sem resolver em outro lugar.',
          lista: [
            { nome: 'Dm (dórico)', cordas: [-1, -1, 0, 2, 3, 1], dedos: [null, null, null, 2, 3, 1] },
            { nome: 'G (dórico)', cordas: [3, 2, 0, 0, 0, 3], dedos: [2, 1, null, null, null, 3] },
            { nome: 'Em (frígio)', cordas: [0, 2, 2, 0, 0, 0], dedos: [null, 2, 3, null, null, null] },
            { nome: 'F (frígio)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } }
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'd4/q f4/q a4/q b4/q | a4/q f4/q e4/q d4/q | g4/q b4/q a4/q g4/q | f4/q e4/q d4/b',
          legenda: 'Melodia em Ré dórico. O Si natural (compasso 1 e 3) é a nota característica: sem ele, isso seria Ré menor comum.'
        },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 4, casa: 0, classe: 'tonica', rotulo: 'D' }, { corda: 4, casa: 3, rotulo: 'F' },
            { corda: 3, casa: 0, rotulo: 'G' }, { corda: 3, casa: 2, rotulo: 'A' },
            { corda: 2, casa: 0, classe: 'alvo', rotulo: 'B' }, { corda: 2, casa: 1, rotulo: 'C' },
            { corda: 2, casa: 3, classe: 'tonica', rotulo: 'D' }
          ],
          legenda: 'Ré dórico no braço, em posição aberta. O Si (destacado) é a nota que define o modo.',
          tocar: true, bpm: 72
        },
        { t: 'h', x: 'Onde o modalismo aparece' },
        {
          t: 'lista', itens: [
            'Música antiga: todo o repertório renascentista é modal.',
            'Música espanhola: o frígio é a base do flamenco e da cadência andaluza.',
            'Música brasileira: o mixolídio e o lídio estruturam baião, xote e muito da música nordestina.',
            'Século XX: Villa-Lobos, Brouwer, Bartók e o jazz modal usam modos como material principal.',
            'Trilhas sonoras: o lídio é o modo das cenas de encantamento.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Reconhecer modos', rodadas: 6,
          perguntas: [
            { texto: 'Qual modo começa no segundo grau da escala maior?', opcoes: ['Dórico', 'Frígio', 'Lídio', 'Mixolídio'], correta: 0, explicacao: 'Em Dó maior, começa em Ré.' },
            { texto: 'A nota característica do lídio é:', opcoes: ['A quarta aumentada', 'A sétima menor', 'A segunda menor', 'A sexta maior'], correta: 0, explicacao: 'Em Fá lídio, o Si natural.' },
            { texto: 'Qual modo é a base do flamenco?', opcoes: ['Frígio', 'Dórico', 'Eólio', 'Lócrio'], correta: 0, explicacao: 'A segunda menor dá o sabor espanhol.' },
            { texto: 'O mixolídio difere da escala maior por:', opcoes: ['Ter a sétima menor', 'Ter a terça menor', 'Ter a quarta aumentada', 'Ter a sexta menor'], correta: 0, explicacao: 'Sem sensível, não puxa para a tônica.' },
            { texto: 'O que destrói o caráter modal de uma peça?', opcoes: ['Usar a dominante com sensível', 'Usar pedal', 'Repetir dois acordes', 'Destacar a nota característica'], correta: 0, explicacao: 'A cadência V–I impõe o sistema tonal.' },
            { texto: 'Qual modo equivale à escala menor natural?', opcoes: ['Eólio', 'Dórico', 'Frígio', 'Lócrio'], correta: 0, explicacao: 'Começa no sexto grau da maior.' }
          ]
        },
        {
          t: 'check', chave: 'modos', titulo: 'Toque os sete modos',
          itens: [
            'Toquei os sete modos a partir das notas de Dó maior, um por vez.',
            'Toquei Ré dórico sobre um pedal de Ré (4ª corda solta).',
            'Toquei Mi frígio sobre a 6ª corda solta.',
            'Improvisei quatro compassos em mixolídio sobre G – F.',
            'Identifiquei o modo de uma música que eu já conheço.'
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar o modo sem destacar a nota característica.', certo: 'Sem ela, o ouvido reinterpreta tudo como maior ou menor.' },
            { erro: 'Usar dominante com sensível em contexto modal.', certo: 'Prefira oscilação de dois acordes e pedal.' },
            { erro: 'Pensar modo como "escala diferente".', certo: 'São as mesmas notas, com outro centro.' },
            { erro: 'Resolver sempre na tônica maior.', certo: 'No modal, a chegada é o próprio acorde modal.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Sete modos são sete maneiras de ouvir a mesma escala.',
            'Cada modo tem uma nota característica que precisa aparecer.',
            'A harmonia modal evita a dominante com sensível.',
            'Pedal e oscilação de dois acordes sustentam o modo.',
            'Frígio é o modo espanhol; mixolídio e lídio aparecem muito na música brasileira.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos modos gregos existem a partir da escala maior?', opcoes: ['Sete', 'Cinco', 'Doze', 'Três'], correta: 0, explicacao: 'Um para cada grau.' },
        { texto: 'Qual é a nota característica do dórico?', opcoes: ['A sexta maior', 'A segunda menor', 'A quarta aumentada', 'A sétima maior'], correta: 0, explicacao: 'É o que o distingue do menor natural.' },
        { texto: 'Em Mi frígio, qual é a segunda nota?', opcoes: ['Fá natural', 'Fá sustenido', 'Sol', 'Mi bemol'], correta: 0, explicacao: 'A segunda menor é a marca do modo.' },
        { texto: 'O que ancora um modo na ausência da cadência tonal?', opcoes: ['Pedal e oscilação de dois acordes', 'Modulação', 'Cromatismo', 'Rubato'], correta: 0, explicacao: 'Repetição e ancoragem substituem a força da dominante.' },
        { texto: 'Qual modo é instável demais para servir de centro?', opcoes: ['Lócrio', 'Lídio', 'Eólio', 'Jônio'], correta: 0, explicacao: 'A quinta diminuta impede o repouso.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar os sete modos a partir de Dó, dizendo em voz alta a nota característica de cada um.',
          'Improvisar oito compassos em Ré dórico sobre pedal de Ré.',
          'Improvisar oito compassos em Mi frígio sobre a 6ª corda solta.',
          'Identificar de ouvido o modo de três trechos diferentes.'
        ],
        criterio: 'Você domina quando consegue improvisar mantendo o caráter modal, sem que o resultado escorregue para maior ou menor.'
      }
    },

    {
      id: 'n6.1.3',
      titulo: 'Escalas exóticas e harmonia não tonal',
      resumo: 'Fora do sistema maior-menor: simetria, cor e organização sem tônica.',
      minutos: 22,
      disciplinas: ['teoria', 'harmonia'],
      prereq: ['n6.1.2'],
      status: 'implementado',
      cobre: ['Escalas exóticas', 'Harmonia não tonal'],
      objetivo: 'Conhecer as escalas simétricas e artificiais mais usadas e entender como a música se organiza sem centro tonal.',
      blocos: [
        { t: 'p', x: 'A partir do fim do século XIX, compositores começaram a procurar materiais fora da escala maior. Duas estratégias apareceram: usar escalas *simétricas* (que dividem a oitava em partes iguais, apagando a tônica) e usar escalas *artificiais* vindas de outras culturas ou inventadas.' },
        { t: 'h', x: 'As escalas simétricas' },
        {
          t: 'tabela',
          cab: ['Escala', 'Construção', 'Notas em Dó', 'Efeito'],
          linhas: [
            ['Cromática', 'Só semitons', 'Todas as doze', 'Nenhum centro'],
            ['Tons inteiros', 'Só tons', 'Dó Ré Mi Fá♯ Sol♯ Lá♯', 'Flutuante, onírico (Debussy)'],
            ['Diminuta (octatônica)', 'Tom-semitom alternados', 'Dó Ré Mi♭ Fá Fá♯ Sol♯ Lá Si', 'Tensa, usada sobre acordes diminutos'],
            ['Aumentada', 'Terça menor e semitom alternados', 'Dó Mi♭ Mi Sol Lá♭ Si', 'Instável e brilhante']
          ],
          legenda: 'Simétrica significa que o padrão se repete: por isso qualquer nota pode soar como tônica — ou seja, nenhuma soa.'
        },
        { t: 'semitons', legenda: 'A régua dos doze semitons. As escalas simétricas dividem essa régua em partes iguais; as tonais, em partes desiguais — e é a desigualdade que cria a tônica.' },
        { t: 'h', x: 'As escalas de cor' },
        {
          t: 'tabela',
          cab: ['Escala', 'Notas em Dó', 'Onde aparece'],
          linhas: [
            ['Menor harmônica', 'Dó Ré Mi♭ Fá Sol Lá♭ Si', 'Música europeia e do Leste'],
            ['Frígia dominante', 'Dó Ré♭ Mi Fá Sol Lá♭ Si♭', 'Flamenco, música árabe e judaica'],
            ['Húngara (cigana)', 'Dó Ré Mi♭ Fá♯ Sol Lá♭ Si', 'Música da Europa Central'],
            ['Pentatônica maior', 'Dó Ré Mi Sol Lá', 'Música folclórica do mundo inteiro'],
            ['Blues', 'Dó Mi♭ Fá Fá♯ Sol Si♭', 'Blues, jazz, rock']
          ]
        },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 5, casa: 3, classe: 'tonica', rotulo: 'C' }, { corda: 5, casa: 4, rotulo: 'D♭' },
            { corda: 4, casa: 2, rotulo: 'E' }, { corda: 4, casa: 3, rotulo: 'F' },
            { corda: 4, casa: 5, rotulo: 'G' }, { corda: 3, casa: 1, rotulo: 'A♭' },
            { corda: 3, casa: 3, rotulo: 'B♭' }, { corda: 3, casa: 5, classe: 'tonica', rotulo: 'C' }
          ],
          legenda: 'Dó frígio dominante no braço: a escala do flamenco. A segunda menor (Ré bemol) junto com a terça maior (Mi) é o que cria o sabor.',
          tocar: true, bpm: 72
        },
        { t: 'h', x: 'Harmonia não tonal: três caminhos' },
        {
          t: 'lista', itens: [
            '*Harmonia por intervalos*: os acordes deixam de ser terças empilhadas e passam a ser construídos por quartas, quintas ou segundas. No violão, acordes por quartas são fáceis e soam modernos.',
            '*Harmonia por simetria*: acordes derivados de escalas simétricas, sem função definida. O acorde não resolve: ele desliza.',
            '*Centro por insistência*: sem tônica funcional, o centro é criado por repetição — a nota que mais aparece vira referência.'
          ]
        },
        {
          t: 'acorde', legenda: 'Acordes por quartas no violão: três formas que soam modernas e não pedem resolução.',
          lista: [
            { nome: 'Quartas em 5ª corda', cordas: [-1, 3, 3, 2, 1, -1], dedos: [null, 3, 4, 2, 1, null] },
            { nome: 'Quartas em 6ª corda', cordas: [5, 5, 5, -1, -1, -1], dedos: [1, 1, 1, null, null, null] },
            { nome: 'Quintas abertas', cordas: [5, 7, 7, -1, -1, -1], dedos: [1, 3, 4, null, null, null], casaInicial: 5 }
          ]
        },
        {
          t: 'pauta', bpm: 56, numerar: true,
          txt: 'c4+d4+e4/b d4+e4+f#4/b | e4+f#4+g#4/b f#4+g#4+a#4/b | c4+d4+e4/o',
          legenda: 'Blocos paralelos sobre a escala de tons inteiros: nada resolve, tudo desliza. É a sonoridade impressionista.'
        },
        {
          t: 'tocar', titulo: 'Confira a escala frígia dominante',
          seq: [[5, 3], [5, 4], [4, 2], [4, 3], [4, 5], [3, 1], [3, 3], [3, 5]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora improvise quatro compassos com essas notas sobre um pedal de Dó.',
          x: 'Toque devagar: Dó, Ré bemol, Mi, Fá, Sol, Lá bemol, Si bemol, Dó.'
        },
        {
          t: 'check', chave: 'exoticas', titulo: 'Explore os materiais',
          itens: [
            'Toquei a escala de tons inteiros em duas posições.',
            'Toquei a escala diminuta (tom-semitom) a partir de duas notas diferentes.',
            'Toquei a frígia dominante e improvisei sobre pedal.',
            'Toquei acordes por quartas em três posições.',
            'Compus quatro compassos sem usar nenhuma cadência tonal.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Material não tonal', rodadas: 5,
          perguntas: [
            { texto: 'Por que a escala de tons inteiros não tem tônica clara?', opcoes: ['Porque é simétrica: o padrão é igual a partir de qualquer nota', 'Porque tem poucas notas', 'Porque não tem terça', 'Porque é cromática'], correta: 0, explicacao: 'Sem desigualdade de intervalos, não há hierarquia.' },
            { texto: 'A escala diminuta alterna:', opcoes: ['Tom e semitom', 'Dois tons', 'Terças', 'Quartas'], correta: 0, explicacao: 'Daí o nome octatônica: oito notas.' },
            { texto: 'A frígia dominante aparece sobretudo em:', opcoes: ['Flamenco e música do Oriente Médio', 'Música barroca', 'Jazz modal', 'Música renascentista'], correta: 0, explicacao: 'Segunda menor com terça maior.' },
            { texto: 'Na harmonia por quartas, os acordes são construídos:', opcoes: ['Empilhando quartas em vez de terças', 'Com cinco notas', 'Só com cordas soltas', 'Sempre com pestana'], correta: 0, explicacao: 'O resultado não pede resolução.' },
            { texto: 'Sem tônica funcional, o que cria o centro?', opcoes: ['A repetição e a insistência numa nota', 'A armadura', 'O andamento', 'A dinâmica'], correta: 0, explicacao: 'O ouvido adota como referência o que mais ouve.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar escala exótica sobre harmonia tonal comum.', certo: 'A harmonia precisa acompanhar, ou a escala soa como erro.' },
            { erro: 'Achar que música não tonal é música sem organização.', certo: 'Ela tem regras próprias, só não são as da tonalidade.' },
            { erro: 'Tocar tons inteiros e esperar resolução.', certo: 'Nada resolve: é esse o efeito.' },
            { erro: 'Confundir frígio com frígia dominante.', certo: 'A dominante tem terça maior; o frígio modal tem terça menor.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Escalas simétricas dividem a oitava em partes iguais e apagam a tônica.',
            'Tons inteiros, diminuta e aumentada são as três simétricas principais.',
            'Frígia dominante, húngara, pentatônica e blues são escalas de cor.',
            'Harmonia não tonal usa intervalos (quartas, quintas), simetria ou insistência.',
            'Escala e harmonia precisam andar juntas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas notas tem a escala de tons inteiros?', opcoes: ['Seis', 'Sete', 'Oito', 'Cinco'], correta: 0, explicacao: 'Seis tons dividem a oitava igualmente.' },
        { texto: 'Qual escala é também chamada de octatônica?', opcoes: ['Diminuta', 'Aumentada', 'Cromática', 'Pentatônica'], correta: 0, explicacao: 'Alterna tom e semitom em oito notas.' },
        { texto: 'A escala frígia dominante tem:', opcoes: ['Segunda menor e terça maior', 'Segunda maior e terça menor', 'Quarta aumentada', 'Sétima maior'], correta: 0, explicacao: 'É a escala do flamenco.' },
        { texto: 'Acordes por quartas soam:', opcoes: ['Abertos e sem exigir resolução', 'Tensos e instáveis', 'Iguais a tríades', 'Dissonantes e errados'], correta: 0, explicacao: 'Por isso são usados no jazz modal e na música do século XX.' },
        { texto: 'Numa peça sem tônica funcional, o centro se estabelece por:', opcoes: ['Insistência', 'Cadência', 'Armadura', 'Modulação'], correta: 0, explicacao: 'A repetição cria referência.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar a escala de tons inteiros em duas posições, duas oitavas.',
          'Tocar a escala diminuta a partir de duas notas diferentes.',
          'Improvisar oito compassos em frígia dominante sobre pedal.',
          'Tocar uma sequência de quatro acordes por quartas, deslizando pelo braço.'
        ],
        criterio: 'Você domina quando improvisa com material não tonal sem que o resultado soe como erro, e sabe explicar por que a escala escolhida combina com a harmonia usada.'
      }
    },

    {
      id: 'n6.1.4',
      titulo: 'Análise estrutural e de estilo',
      resumo: 'Um método completo de análise, do primeiro olhar à decisão interpretativa.',
      minutos: 22,
      disciplinas: ['teoria', 'historia', 'interpretacao'],
      prereq: ['n5.1.8', 'n5.1.9'],
      status: 'implementado',
      cobre: ['Análise estrutural', 'Análise de estilo e período histórico'],
      objetivo: 'Aplicar um roteiro completo de análise a qualquer peça e converter o resultado em decisões de execução.',
      blocos: [
        { t: 'p', x: 'Analisar não é classificar: é descobrir o que a peça faz e por quê, para então decidir como tocá-la. Este é o roteiro completo — cinco camadas, da superfície à estrutura — que serve tanto para uma gavota de Bach quanto para um estudo de Brouwer.' },
        { t: 'h', x: 'Camada 1 — Dados externos' },
        {
          t: 'lista', itens: [
            'Compositor, data e período histórico.',
            'Gênero ou forma declarada no título (prelúdio, estudo, valsa, sarabanda).',
            'Instrumento original, se for transcrição.',
            'Edição: quem editou, o que acrescentou, se há autógrafo disponível.'
          ]
        },
        { t: 'h', x: 'Camada 2 — Estrutura' },
        {
          t: 'passos', itens: [
            'Encontre as cadências conclusivas e marque-as.',
            'Delimite as seções a partir delas e nomeie (A, B, A′, coda).',
            'Anote o tom em que cada seção começa e termina.',
            'Identifique a forma: binária, ternária, rondó, variações, sonata ou livre.',
            'Conte os compassos de cada seção: assimetrias revelam intenção.'
          ]
        },
        { t: 'h', x: 'Camada 3 — Harmonia' },
        {
          t: 'lista', itens: [
            'Cifre os acordes por grau (algarismos romanos), não por letra.',
            'Marque as modulações e o tipo de cada uma.',
            'Circule os acordes de fora do tom e identifique a função: empréstimo, dominante secundária, cromático de passagem.',
            'Siga a linha do baixo: ela costuma ser a chave da condução.'
          ]
        },
        {
          t: 'pauta', bpm: 56, numerar: true, quebrar: 4,
          txt: 'c3+e4/q c3+g4/q g2+d4/q g2+b4/q | a2+c4/q a2+e4/q e3+g#4/q e3+b4/q | f2+a3/q f2+c4/q g2+b3/q g2+d4/q | c3+e4/b c3+c4/b',
          legenda: 'Trecho para analisar: cifre por grau, marque a dominante secundária do terceiro tempo do compasso 2 e observe o baixo descendo Dó–Sol–Lá–Mi–Fá–Sol–Dó.'
        },
        { t: 'h', x: 'Camada 4 — Motivo e desenvolvimento' },
        { t: 'p', x: 'Encontre a menor unidade reconhecível — o motivo — e rastreie todas as suas aparições: transposto, invertido, aumentado, fragmentado. Peças boas são economia: muito material derivado de pouca coisa.' },
        { t: 'h', x: 'Camada 5 — Estilo e decisão' },
        {
          t: 'tabela',
          cab: ['O que a análise mostrou', 'Decisão de execução'],
          linhas: [
            ['Peça barroca, textura polifônica', 'Articulação variada, pulso estável, ornamentos no tempo'],
            ['Peça clássica, frases de 4 compassos', 'Dinâmica em degraus, respiração ao fim de cada frase'],
            ['Modulação à dominante no meio da seção A', 'Marcar a chegada com pequeno alargamento'],
            ['Motivo que reaparece em aumentação', 'Destacar a aparição: é um ponto estrutural'],
            ['Cadência de engano', 'Não antecipar: tocar como se a resolução fosse acontecer']
          ]
        },
        {
          t: 'dica', titulo: 'A prova de que a análise funcionou: ',
          x: 'ela deve mudar alguma coisa no jeito que você toca. Se depois de analisar nada mudou, você classificou, mas não analisou.'
        },
        {
          t: 'tocar', titulo: 'Confira a linha do baixo do trecho',
          seq: [[5, 3], [6, 3], [5, 0], [6, 0], [6, 1], [6, 3], [5, 3]],
          rotulo: 'Conferir os baixos',
          fim: 'Esse é o esqueleto harmônico do trecho: Dó, Sol, Lá, Mi, Fá, Sol, Dó.',
          x: 'Toque apenas os baixos, devagar, uma nota por vez.'
        },
        {
          t: 'check', chave: 'analise6', titulo: 'Analise uma peça inteira',
          itens: [
            'Escrevi os dados externos no alto da partitura.',
            'Marquei as cadências e delimitei as seções.',
            'Cifrei a harmonia por graus e marquei as modulações.',
            'Identifiquei o motivo principal e rastreei suas aparições.',
            'Escrevi três decisões de execução derivadas da análise.',
            'Toquei a peça aplicando essas três decisões.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Método de análise', rodadas: 5,
          perguntas: [
            { texto: 'Qual é o primeiro passo da análise estrutural?', opcoes: ['Encontrar as cadências conclusivas', 'Cifrar todos os acordes', 'Definir o andamento', 'Marcar o dedilhado'], correta: 0, explicacao: 'Elas delimitam as seções.' },
            { texto: 'Por que cifrar por graus e não por letras?', opcoes: ['Os graus mostram função e permitem comparar tonalidades', 'É mais rápido', 'É o padrão das editoras', 'Letras não existem na música clássica'], correta: 0, explicacao: 'A função é o que interessa à análise.' },
            { texto: 'O que é um motivo?', opcoes: ['A menor unidade musical reconhecível', 'A primeira frase', 'O tema principal', 'A seção A'], correta: 0, explicacao: 'Dele deriva o resto da peça.' },
            { texto: 'Como se sabe que a análise foi útil?', opcoes: ['Ela muda algo na execução', 'Ela preenche a ficha', 'Ela identifica o período', 'Ela nomeia a forma'], correta: 0, explicacao: 'Classificar não é analisar.' },
            { texto: 'Numa transcrição, o que também precisa ser analisado?', opcoes: ['O instrumento original e as escolhas do transcritor', 'Apenas a harmonia', 'Apenas o ritmo', 'Nada de diferente'], correta: 0, explicacao: 'As decisões do transcritor podem ser revistas.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Analisar compasso a compasso sem ver a estrutura.', certo: 'Comece pelo todo e desça ao detalhe.' },
            { erro: 'Parar a análise na identificação da forma.', certo: 'A análise só termina em decisões de execução.' },
            { erro: 'Aceitar a edição como texto definitivo.', certo: 'Verifique o que é do compositor e o que é do editor.' },
            { erro: 'Ignorar a linha do baixo.', certo: 'Ela costuma ser o mapa mais claro da harmonia.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cinco camadas: dados externos, estrutura, harmonia, motivo e estilo.',
            'Cadências delimitam seções; graus revelam função.',
            'O motivo é a economia da peça: rastreie suas transformações.',
            'Cada conclusão da análise vira uma decisão de execução.',
            'Análise que não muda a execução é apenas classificação.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas camadas tem o roteiro de análise desta aula?', opcoes: ['Cinco', 'Três', 'Sete', 'Duas'], correta: 0, explicacao: 'Dados, estrutura, harmonia, motivo e estilo.' },
        { texto: 'O que delimita as seções de uma peça?', opcoes: ['As cadências conclusivas', 'As mudanças de dedilhado', 'As linhas da pauta', 'As pausas'], correta: 0, explicacao: 'Normalmente acompanhadas de barra de repetição.' },
        { texto: 'Cifrar por graus permite:', opcoes: ['Comparar peças em tonalidades diferentes', 'Tocar mais rápido', 'Dispensar a partitura', 'Escolher o dedilhado'], correta: 0, explicacao: 'A função é independente do tom.' },
        { texto: 'Rastrear o motivo revela:', opcoes: ['Como a peça deriva muito material de pouca coisa', 'A tonalidade', 'O andamento', 'A dinâmica'], correta: 0, explicacao: 'É o princípio de economia da composição.' },
        { texto: 'A análise termina quando:', opcoes: ['Produz decisões de execução', 'A forma é identificada', 'Todos os acordes estão cifrados', 'O período histórico é nomeado'], correta: 0, explicacao: 'Esse é o objetivo prático.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Analisar uma peça inteira aplicando as cinco camadas e entregar a partitura anotada.',
          'Cifrar por graus pelo menos dezesseis compassos.',
          'Rastrear o motivo principal e apontar três transformações dele.',
          'Tocar a peça aplicando três decisões derivadas da análise, explicando cada uma.'
        ],
        criterio: 'Você domina quando a sua execução muda de forma audível depois da análise, e você consegue justificar cada mudança pelo que encontrou na partitura.'
      }
    },

    {
      id: 'n6.1.5',
      titulo: 'Arranjo e orquestração no violão',
      resumo: 'Distribuir uma música entre seis cordas como quem distribui entre instrumentos.',
      minutos: 22,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n5.2.8'],
      status: 'implementado',
      cobre: ['Orquestração', 'Arranjo'],
      objetivo: 'Arranjar uma canção para violão solo, decidindo registro, textura e densidade com critério orquestral.',
      blocos: [
        { t: 'p', x: 'Orquestrar é escolher quem toca o quê. No violão solo, a "orquestra" tem seis cordas e quatro regiões de registro, e o arranjador decide o tempo todo: esta nota é baixo ou melodia? este acorde é cheio ou é só o essencial? Pensar em instrumentos imaginários ajuda a tomar essas decisões.' },
        { t: 'h', x: 'As quatro regiões do violão' },
        {
          t: 'tabela',
          cab: ['Região', 'Onde', 'Equivale a', 'Função típica'],
          linhas: [
            ['Grave', '6ª e 5ª cordas, casas 0–5', 'Contrabaixo e violoncelo', 'Fundamento harmônico'],
            ['Médio-grave', '4ª e 3ª cordas', 'Viola', 'Vozes internas, acompanhamento'],
            ['Médio-agudo', '2ª corda e 1ª até a casa 5', 'Violino', 'Melodia principal'],
            ['Agudo', '1ª corda acima da casa 7', 'Flauta', 'Clímax, brilho, melodia destacada']
          ],
          legenda: 'Um arranjo equilibrado usa as quatro regiões. Um arranjo amador fica preso no meio.'
        },
        { t: 'h', x: 'Os cinco passos de um arranjo' },
        {
          t: 'passos', itens: [
            'Escolha a tonalidade pensando no violão: a que deixa a melodia confortável e aproveita cordas soltas como baixo e pedal.',
            'Escreva primeiro a melodia sozinha, na região onde ela canta melhor.',
            'Acrescente o baixo, no tempo forte, respeitando a harmonia.',
            'Preencha o meio apenas onde houver espaço e tempo — vozes internas são tempero, não obrigação.',
            'Revise tocando: tudo o que for impossível de tocar ou feio de ouvir sai.'
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'e4/q g4/q a4/q g4/q | e4/q d4/q c4/b | d4/q e4/q g4/q e4/q | d4/b c4/b',
          legenda: 'Etapa 1: a melodia sozinha, numa região confortável. Oito compassos de uma canção imaginária.'
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'c3+e4/q c3+g4/q a2+a4/q a2+g4/q | f2+e4/q f2+d4/q c3+c4/b | g2+d4/q g2+e4/q g2+g4/q c3+e4/q | g2+d4/b c3+c4/b',
          legenda: 'Etapa 2: a mesma melodia com baixo. Repare que o baixo entra só no tempo forte e sustenta a harmonia.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [3, 2]], fig: 'seminima' }, { pos: [[2, 0]], fig: 'seminima' }, { pos: [[6, 0], [3, 2]], fig: 'seminima' }, { pos: [[2, 0]], fig: 'seminima' }] },
            { notas: [{ pos: [[6, 1], [3, 1]], fig: 'seminima' }, { pos: [[2, 3]], fig: 'seminima' }, { pos: [[5, 3], [3, 0]], fig: 'minima' }] }
          ],
          legenda: 'Etapa 3: com vozes internas nas 3ª e 4ª cordas. Elas entram só onde há espaço e não disputam com a melodia.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Densidade: a decisão mais importante' },
        {
          t: 'lista', itens: [
            'Nem todo tempo precisa de acorde completo. Baixo e melodia bastam na maior parte do tempo.',
            'Acordes cheios funcionam como acentos: use-os no começo das frases e nas cadências.',
            'Em trecho rápido, reduza a densidade — o ouvido completa o que falta.',
            'Em trecho lento, aumente: há tempo para ouvir cada voz.',
            'Se um arranjo soa confuso, quase sempre o problema é excesso, não falta.'
          ]
        },
        {
          t: 'dica', titulo: 'O teste do arranjo: ',
          x: 'toque só a melodia e só o baixo. Se esses dois sozinhos já contam a música, o arranjo está bem construído e o resto é enfeite. Se não contam, nenhum preenchimento vai salvar.'
        },
        {
          t: 'tocar', titulo: 'Confira a melodia do arranjo',
          seq: [[2, 5], [3, 0], [3, 2], [3, 0], [2, 5], [2, 3], [2, 1]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora toque a versão com baixo e depois a versão com vozes internas.',
          x: 'Toque a melodia: Mi, Sol, Lá, Sol, Mi, Ré, Dó.'
        },
        {
          t: 'check', chave: 'arranjo', titulo: 'Faça o seu arranjo',
          itens: [
            'Escolhi uma canção simples e defini a tonalidade pensando no violão.',
            'Escrevi a melodia sozinha, na região onde ela canta melhor.',
            'Acrescentei os baixos nos tempos fortes.',
            'Acrescentei vozes internas apenas onde havia espaço.',
            'Fiz o teste: toquei só melodia e baixo e verifiquei se a música se sustenta.',
            'Toquei o arranjo inteiro e cortei o que era impossível ou feio.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Decisões de arranjo', rodadas: 5,
          perguntas: [
            { texto: 'Qual é o primeiro passo de um arranjo para violão?', opcoes: ['Escolher a tonalidade pensando no instrumento', 'Escrever os acordes', 'Definir o andamento', 'Escolher o dedilhado'], correta: 0, explicacao: 'A tonalidade decide quase tudo depois.' },
            { texto: 'A região aguda da 1ª corda equivale, em caráter, a:', opcoes: ['Uma flauta', 'Um contrabaixo', 'Uma viola', 'Um trombone'], correta: 0, explicacao: 'Brilho e projeção.' },
            { texto: 'Em trecho rápido, a densidade deve:', opcoes: ['Diminuir', 'Aumentar', 'Permanecer igual', 'Dobrar'], correta: 0, explicacao: 'Não há tempo para ouvir muitas vozes.' },
            { texto: 'Qual é o teste de um bom arranjo?', opcoes: ['Melodia e baixo sozinhos já contam a música', 'Todos os acordes estão completos', 'Usa as seis cordas o tempo todo', 'Não tem cordas soltas'], correta: 0, explicacao: 'O resto é ornamento.' },
            { texto: 'Quando um arranjo soa confuso, o problema costuma ser:', opcoes: ['Excesso de notas', 'Falta de notas', 'Andamento', 'Afinação'], correta: 0, explicacao: 'Cortar quase sempre melhora.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Encher todos os tempos com acordes completos.', certo: 'Densidade é recurso expressivo, não obrigação.' },
            { erro: 'Arranjar no papel sem tocar.', certo: 'Teste cada compasso no instrumento.' },
            { erro: 'Manter a tonalidade original por fidelidade.', certo: 'Transpor para aproveitar cordas soltas é prática normal.' },
            { erro: 'Pôr a melodia numa região em que ela não projeta.', certo: 'A melodia precisa estar acima do acompanhamento, em tessitura e em volume.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O violão solo tem quatro regiões, que funcionam como naipes de uma orquestra.',
            'A tonalidade se escolhe pensando no instrumento, não na partitura original.',
            'Melodia primeiro, baixo depois, vozes internas por último.',
            'Densidade variável é o que dá relevo ao arranjo.',
            'Se melodia e baixo sozinhos contam a música, o arranjo funciona.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas regiões de registro o violão oferece ao arranjador?', opcoes: ['Quatro', 'Duas', 'Seis', 'Três'], correta: 0, explicacao: 'Grave, médio-grave, médio-agudo e agudo.' },
        { texto: 'Qual é a ordem recomendada ao arranjar?', opcoes: ['Melodia, baixo, vozes internas', 'Acordes, melodia, baixo', 'Baixo, acordes, melodia', 'Tudo ao mesmo tempo'], correta: 0, explicacao: 'As vozes internas são a última camada.' },
        { texto: 'Transpor a música original para outro tom é:', opcoes: ['Prática normal, para aproveitar o instrumento', 'Infidelidade ao compositor', 'Proibido', 'Só permitido em música popular'], correta: 0, explicacao: 'Cordas soltas e tessitura mandam.' },
        { texto: 'Acordes completos funcionam melhor:', opcoes: ['Como acentos, em começos de frase e cadências', 'Em todos os tempos', 'Só no agudo', 'Só em trechos rápidos'], correta: 0, explicacao: 'Usados o tempo todo, perdem efeito.' },
        { texto: 'O que indica que um arranjo tem excesso?', opcoes: ['Ele soa confuso', 'Ele soa vazio', 'Ele é difícil de ler', 'Ele usa cordas soltas'], correta: 0, explicacao: 'Cortar costuma resolver.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Arranjar uma canção simples de 16 compassos para violão solo.',
          'Tocar a versão só com melodia e baixo e demonstrar que a música se sustenta.',
          'Tocar a versão completa, com vozes internas onde couberem.',
          'Justificar a escolha de tonalidade e duas decisões de densidade.'
        ],
        criterio: 'Você domina quando o seu arranjo é tocável, usa pelo menos três regiões do instrumento e a melodia permanece audível do começo ao fim.'
      }
    },

    {
      id: 'n6.1.6',
      titulo: 'Transcrição musical',
      resumo: 'Trazer para o violão música escrita para outro instrumento, com método e honestidade.',
      minutos: 20,
      disciplinas: ['teoria', 'repertorio'],
      prereq: ['n6.1.5'],
      status: 'implementado',
      cobre: ['Transcrição musical'],
      objetivo: 'Transcrever uma peça de outro instrumento para violão tomando decisões justificadas de tom, oitava e textura.',
      blocos: [
        { t: 'p', x: 'Transcrever é diferente de arranjar. No arranjo, você cria uma versão; na transcrição, você tenta *realizar* uma obra existente em outro instrumento, preservando o que é essencial e adaptando o que é impossível. Boa parte do repertório de violão é transcrição — e saber fazê-la é saber lê-la criticamente.' },
        { t: 'h', x: 'O que se preserva e o que se adapta' },
        {
          t: 'comparar',
          a: { titulo: 'Preservar sempre', itens: ['A melodia e seu contorno', 'A estrutura harmônica', 'O ritmo e a métrica', 'A forma e as repetições', 'As relações de tensão e repouso'] },
          b: { titulo: 'Adaptar quando preciso', itens: ['A tonalidade', 'A oitava de trechos específicos', 'O número de vozes simultâneas', 'A duração de notas longas impossíveis', 'A dinâmica, dentro do que o violão alcança'] }
        },
        { t: 'h', x: 'Escolher a tonalidade' },
        {
          t: 'tabela',
          cab: ['Tom original', 'Tom usual no violão', 'Por quê'],
          linhas: [
            ['Dó maior (piano)', 'Sol ou Ré maior', 'Aproveita cordas soltas como baixo e pedal'],
            ['Sol menor', 'Lá menor ou Mi menor', 'Baixos em cordas soltas'],
            ['Si bemol maior', 'Lá ou Dó maior', 'Evita pestanas constantes'],
            ['Mi bemol maior', 'Ré ou Mi maior', 'Tessitura mais confortável']
          ],
          legenda: 'A regra prática: escolha o tom cuja tônica e dominante existam como cordas soltas.'
        },
        { t: 'h', x: 'Os cinco problemas clássicos e suas soluções' },
        {
          t: 'tabela',
          cab: ['Problema', 'Solução'],
          linhas: [
            ['Acorde de cinco notas impossível', 'Omitir a quinta; se ainda for impossível, arpejar'],
            ['Nota longa que o violão não sustenta', 'Repetir discretamente, ou aceitar a decadência natural'],
            ['Duas vozes na mesma corda', 'Mudar uma de oitava ou redistribuir entre cordas'],
            ['Trecho abaixo do Mi grave', 'Subir uma oitava, ou afinar a 6ª corda em Ré'],
            ['Salto rápido impossível', 'Redistribuir entre cordas: quase sempre existe outro caminho']
          ]
        },
        {
          t: 'pauta', bpm: 56, numerar: true,
          txt: 'c3+g3+c4+e4+g4/o | d3+a3+d4+f4+a4/o',
          legenda: 'Dois acordes de cinco notas, como um pianista escreveria. No violão, a solução é omitir a quinta e redistribuir.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [4, 2], [2, 1], [1, 0]], fig: 'semibreve' }] },
            { notas: [{ pos: [[4, 0], [3, 2], [2, 3], [1, 1]], fig: 'semibreve' }] }
          ],
          legenda: 'Os mesmos dois acordes realizados no violão: quatro notas, com a quinta omitida no primeiro. A harmonia continua completa.',
          tocar: true, bpm: 50
        },
        { t: 'h', x: 'Afinações alternativas' },
        { t: 'p', x: 'Baixar a 6ª corda de Mi para Ré (drop D) é o recurso mais comum e resolve a maior parte dos problemas de baixo. Também se usa a 6ª em Dó e, em transcrições de alaúde, a 3ª corda em Fá sustenido, que reproduz a afinação histórica do instrumento.' },
        {
          t: 'aviso', x: 'Qualquer mudança de afinação precisa ser anotada no início da partitura, com o desenho das cordas alteradas. Quem for tocar depois precisa saber.'
        },
        {
          t: 'tocar', titulo: 'Confira o acorde transcrito',
          seq: [[5, 3], [4, 2], [2, 1], [1, 0]],
          rotulo: 'Conferir as notas',
          fim: 'Essas quatro notas realizam o acorde de cinco do original.',
          x: 'Toque Dó, Mi, Dó e Mi, uma nota por vez.'
        },
        {
          t: 'check', chave: 'transcricao', titulo: 'Faça uma transcrição',
          itens: [
            'Escolhi uma peça curta de outro instrumento em domínio público.',
            'Testei duas tonalidades diferentes e escolhi a melhor para o violão.',
            'Resolvi pelo menos dois acordes impossíveis por omissão ou redistribuição.',
            'Anotei a afinação usada, se diferente da padrão.',
            'Toquei a transcrição inteira e revisei o que não funcionou.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Decisões de transcrição', rodadas: 5,
          perguntas: [
            { texto: 'Qual é a diferença entre arranjo e transcrição?', opcoes: ['A transcrição busca realizar a obra existente; o arranjo cria uma versão', 'Não há diferença', 'Transcrição é só para violão', 'Arranjo é sempre mais fiel'], correta: 0, explicacao: 'A intenção é diferente.' },
            { texto: 'Numa transcrição, o que se preserva sempre?', opcoes: ['Melodia, harmonia, ritmo e forma', 'A tonalidade', 'A oitava', 'O número de vozes'], correta: 0, explicacao: 'O resto se adapta.' },
            { texto: 'Diante de um acorde de cinco notas impossível, o que se faz primeiro?', opcoes: ['Omitir a quinta', 'Omitir a terça', 'Mudar a harmonia', 'Pular o acorde'], correta: 0, explicacao: 'A quinta é a nota menos definidora.' },
            { texto: 'Para que serve a afinação drop D?', opcoes: ['Resolver problemas de baixo abaixo do Mi grave', 'Facilitar pestanas', 'Aumentar o volume', 'Afinar mais rápido'], correta: 0, explicacao: 'Estende a extensão grave em dois semitons.' },
            { texto: 'Qual é o critério para escolher o tom de uma transcrição?', opcoes: ['Tônica e dominante disponíveis como cordas soltas', 'Manter o tom original', 'Evitar sustenidos', 'Usar o tom mais agudo'], correta: 0, explicacao: 'Ressonância e facilidade.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Manter o tom original por fidelidade.', certo: 'O violão tem outra tessitura; transpor é parte do ofício.' },
            { erro: 'Forçar todas as notas do original.', certo: 'Omitir com critério é melhor que tocar mal.' },
            { erro: 'Não anotar a afinação alterada.', certo: 'A indicação é obrigatória no início da partitura.' },
            { erro: 'Transcrever obra protegida e publicar.', certo: 'Verifique o domínio público antes de divulgar qualquer transcrição.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Transcrição realiza a obra; arranjo cria uma versão.',
            'Preserve melodia, harmonia, ritmo e forma; adapte tom, oitava e textura.',
            'Escolha o tom cuja tônica e dominante sejam cordas soltas.',
            'Omitir a quinta é a primeira solução para acordes impossíveis.',
            'Drop D resolve a maior parte dos problemas de baixo e precisa ser anotado.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que diferencia transcrição de arranjo?', opcoes: ['A intenção de realizar a obra existente', 'O número de vozes', 'O instrumento de destino', 'A tonalidade'], correta: 0, explicacao: 'O arranjo assume mais liberdade criativa.' },
        { texto: 'Qual nota se omite primeiro num acorde grande?', opcoes: ['A quinta', 'A terça', 'A fundamental', 'A sétima'], correta: 0, explicacao: 'Ela não define a qualidade do acorde.' },
        { texto: 'Drop D significa:', opcoes: ['Afinar a 6ª corda em Ré', 'Afinar a 1ª corda em Ré', 'Usar capotraste na casa 2', 'Transpor a peça para Ré'], correta: 0, explicacao: 'Estende o grave em um tom.' },
        { texto: 'Por que transpor uma transcrição?', opcoes: ['Para aproveitar cordas soltas e tessitura', 'Para facilitar a leitura', 'Para mudar o caráter', 'Por exigência das editoras'], correta: 0, explicacao: 'O instrumento tem suas próprias ressonâncias.' },
        { texto: 'Antes de divulgar uma transcrição, é preciso verificar:', opcoes: ['Se a obra está em domínio público', 'A afinação', 'O andamento', 'A edição usada'], correta: 0, explicacao: 'Obras protegidas exigem autorização.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Transcrever 16 compassos de uma peça em domínio público de outro instrumento.',
          'Justificar a tonalidade escolhida.',
          'Apresentar duas soluções para acordes ou trechos impossíveis.',
          'Tocar a transcrição inteira sem adaptações improvisadas na hora.'
        ],
        criterio: 'Você domina quando a sua transcrição é tocável como escrita e preserva melodia, harmonia e forma do original.'
      }
    },

    {
      id: 'n6.1.7',
      titulo: 'Composição para violão',
      resumo: 'Escrever música própria usando o que o instrumento faz bem.',
      minutos: 22,
      disciplinas: ['teoria', 'harmonia'],
      prereq: ['n6.1.5', 'n5.1.8'],
      status: 'implementado',
      cobre: ['Composição'],
      objetivo: 'Compor uma peça curta para violão com motivo, forma definida e escrita idiomática.',
      blocos: [
        { t: 'p', x: 'Compor não começa com inspiração: começa com uma *restrição*. Escolha uma forma, um material e uma limitação técnica, e a peça aparece. Esta aula dá um método que produz uma peça curta e coerente em poucas sessões.' },
        { t: 'h', x: 'Passo 1 — O motivo' },
        { t: 'p', x: 'Invente uma célula de três a cinco notas. Ela precisa de identidade rítmica, não só melódica: se você bater o ritmo na mesa e alguém reconhecer, o motivo é bom.' },
        {
          t: 'pauta', bpm: 72, numerar: true,
          txt: 'e4/c g4/c a4/q. z/c | e4/c g4/c b4/q. z/c',
          legenda: 'Um motivo e sua primeira transformação: as mesmas duas primeiras notas, terceira nota diferente. Identidade rítmica preservada.'
        },
        { t: 'h', x: 'Passo 2 — As transformações' },
        {
          t: 'lista', itens: [
            '*Transposição*: o mesmo desenho em outra altura.',
            '*Inversão*: o desenho espelhado.',
            '*Aumentação e diminuição*: valores dobrados ou reduzidos.',
            '*Fragmentação*: só as duas primeiras notas, repetidas.',
            '*Extensão*: o motivo continua além do que terminava.'
          ]
        },
        { t: 'h', x: 'Passo 3 — A forma' },
        { t: 'p', x: 'Escolha antes de escrever. Para uma primeira peça, a forma ternária A B A é a mais segura: oito compassos de A, oito de B em outro tom ou outro caráter, e a volta de A, eventualmente ornamentada.' },
        {
          t: 'tabela',
          cab: ['Seção', 'Material', 'Tom', 'Caráter'],
          linhas: [
            ['A (8 compassos)', 'Motivo e suas transformações', 'Tônica', 'Apresentação'],
            ['B (8 compassos)', 'Material novo ou motivo invertido', 'Relativo ou dominante', 'Contraste'],
            ['A (8 compassos)', 'Retorno, com pequena variação', 'Tônica', 'Resolução'],
            ['Coda (2 a 4 compassos)', 'Fragmento do motivo', 'Tônica', 'Fechamento']
          ]
        },
        { t: 'h', x: 'Passo 4 — Escrever para o violão, não para o papel' },
        {
          t: 'lista', itens: [
            'Aproveite cordas soltas como pedal: é o recurso mais idiomático que existe.',
            'Prefira formas de mão que se deslocam a formas que se desmontam a cada acorde.',
            'Escreva o baixo em cordas graves e a melodia nas duas primeiras: é o que o violão faz melhor.',
            'Teste cada compasso no instrumento antes de passar para o próximo.',
            'Se um trecho só funciona num andamento que você não consegue tocar, ele está errado — não você.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0], [2, 0]], fig: 'colcheia' }, { pos: [[3, 0]], fig: 'colcheia' }, { pos: [[2, 1]], fig: 'colcheia' }, { pos: [[3, 0]], fig: 'colcheia' }, { pos: [[6, 0], [2, 3]], fig: 'colcheia' }, { pos: [[3, 0]], fig: 'colcheia' }, { pos: [[2, 1]], fig: 'colcheia' }, { pos: [[3, 0]], fig: 'colcheia' }] },
            { notas: [{ pos: [[6, 0], [2, 0]], fig: 'colcheia' }, { pos: [[3, 2]], fig: 'colcheia' }, { pos: [[2, 1]], fig: 'colcheia' }, { pos: [[3, 2]], fig: 'colcheia' }, { pos: [[6, 0], [1, 0]], fig: 'minima' }] }
          ],
          legenda: 'Escrita idiomática: a 6ª corda solta como pedal, a 3ª corda alternando e a melodia na 2ª. A mão quase não se move.',
          tocar: true, bpm: 84
        },
        { t: 'h', x: 'Passo 5 — Revisar' },
        {
          t: 'passos', itens: [
            'Deixe a peça descansar um ou dois dias antes de revisar.',
            'Toque-a inteira e marque todo lugar onde você hesita: hesitação é sinal de escrita confusa.',
            'Verifique se o motivo aparece em todas as seções, nem que seja fragmentado.',
            'Corte tudo o que não deriva do material principal.',
            'Escreva a versão final limpa, com dedilhado e dinâmica.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira o exemplo idiomático',
          seq: [[6, 0], [3, 0], [2, 1], [2, 3]],
          rotulo: 'Conferir as notas',
          fim: 'Agora toque o padrão completo e componha dois compassos no mesmo molde.',
          x: 'Toque Mi, Sol, Dó e Ré, uma nota por vez.'
        },
        {
          t: 'check', chave: 'composicao', titulo: 'Componha a sua peça',
          itens: [
            'Inventei um motivo de três a cinco notas com identidade rítmica.',
            'Produzi três transformações diferentes dele.',
            'Escolhi a forma antes de escrever e anotei o plano.',
            'Escrevi a seção A usando cordas soltas como pedal.',
            'Escrevi a seção B com contraste de tom ou de caráter.',
            'Revisei depois de um dia e cortei o que não derivava do motivo.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Método de composição', rodadas: 5,
          perguntas: [
            { texto: 'Por onde começa o método desta aula?', opcoes: ['Por um motivo curto com identidade rítmica', 'Pela harmonia', 'Pela forma', 'Pelo título'], correta: 0, explicacao: 'O motivo é a semente de tudo.' },
            { texto: 'Qual forma é a mais segura para uma primeira peça?', opcoes: ['Ternária A B A', 'Forma-sonata', 'Rondó', 'Livre'], correta: 0, explicacao: 'Fácil de ouvir e de construir.' },
            { texto: 'O que torna a escrita idiomática no violão?', opcoes: ['Aproveitar cordas soltas e formas que se deslocam', 'Usar muitas notas', 'Evitar cordas soltas', 'Escrever em tom difícil'], correta: 0, explicacao: 'O instrumento tem recursos próprios.' },
            { texto: 'Hesitar ao tocar a própria peça indica:', opcoes: ['Escrita confusa naquele ponto', 'Falta de estudo', 'Andamento errado', 'Afinação ruim'], correta: 0, explicacao: 'Revise a passagem em vez de insistir.' },
            { texto: 'O que deve ser cortado na revisão?', opcoes: ['Tudo o que não deriva do material principal', 'As repetições', 'As cordas soltas', 'A coda'], correta: 0, explicacao: 'Coerência é economia.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Esperar a inspiração.', certo: 'Comece com uma restrição: forma, material e limitação técnica.' },
            { erro: 'Compor no papel sem o violão.', certo: 'Teste cada compasso no instrumento.' },
            { erro: 'Acumular material novo em cada seção.', certo: 'Transforme o que já existe.' },
            { erro: 'Escrever acima da própria técnica.', certo: 'Uma peça que você não toca não é uma peça: é um rascunho.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Composição começa com restrição, não com inspiração.',
            'Motivo curto com identidade rítmica é a semente.',
            'Cinco transformações: transposição, inversão, aumentação, fragmentação e extensão.',
            'Escolha a forma antes de escrever; A B A é a mais segura.',
            'Escrita idiomática: cordas soltas como pedal e formas que se deslocam.',
            'Revise depois de descansar e corte o que não deriva do motivo.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que faz um bom motivo?', opcoes: ['Identidade rítmica reconhecível', 'Muitas notas', 'Tonalidade difícil', 'Grande extensão'], correta: 0, explicacao: 'Se o ritmo sozinho é reconhecível, o motivo funciona.' },
        { texto: 'Numa forma A B A, a seção B costuma:', opcoes: ['Contrastar em tom ou caráter', 'Repetir o A', 'Ser a mais longa', 'Usar o mesmo motivo sem mudança'], correta: 0, explicacao: 'O contraste justifica o retorno.' },
        { texto: 'Qual recurso é o mais idiomático do violão?', opcoes: ['Cordas soltas como pedal', 'Acordes de cinco notas', 'Saltos grandes', 'Notas muito longas'], correta: 0, explicacao: 'Elas soam sem ocupar dedos.' },
        { texto: 'Quando se deve revisar a peça?', opcoes: ['Depois de um ou dois dias de descanso', 'Imediatamente', 'Nunca', 'Só se alguém pedir'], correta: 0, explicacao: 'O distanciamento revela problemas.' },
        { texto: 'Uma peça que o compositor não consegue tocar é:', opcoes: ['Um rascunho que precisa de revisão', 'Uma obra virtuosística', 'Normal', 'Prova de ambição'], correta: 0, explicacao: 'Escreva dentro do que você executa.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar um motivo próprio e três transformações.',
          'Entregar uma peça curta em forma A B A, escrita e tocável.',
          'Tocar a peça inteira sem hesitação.',
          'Explicar onde o motivo aparece em cada seção.'
        ],
        criterio: 'Você domina quando entrega uma peça de pelo menos 24 compassos, derivada de um único motivo, tocável por você e escrita de forma idiomática.'
      }
    },

    {
      id: 'n6.1.8',
      titulo: 'Improvisação',
      resumo: 'Criar no instante com material organizado — uma habilidade que se treina.',
      minutos: 20,
      disciplinas: ['harmonia', 'percepcao'],
      prereq: ['n6.1.2'],
      status: 'implementado',
      cobre: ['Improvisação'],
      objetivo: 'Improvisar sobre harmonias simples usando motivos, escalas adequadas e construção de frase.',
      blocos: [
        { t: 'p', x: 'Improvisar não é tocar qualquer coisa rápido: é compor em tempo real com um vocabulário preparado. Quem improvisa bem tem poucas ideias muito bem desenvolvidas, não muitas ideias soltas. A disciplina é a mesma da composição, só que sem borracha.' },
        { t: 'h', x: 'O vocabulário mínimo' },
        {
          t: 'lista', itens: [
            'As notas do acorde (arpejo) — sempre funcionam.',
            'A escala do tom — conecta os arpejos.',
            'Duas ou três notas de aproximação cromática.',
            'Um ou dois motivos rítmicos de sua preferência.',
            'O silêncio: a ferramenta mais subestimada de todas.'
          ]
        },
        { t: 'h', x: 'A escada de treino' },
        {
          t: 'passos', itens: [
            '*Só o arpejo*: sobre um acorde, toque apenas as notas dele, variando a ordem e o ritmo. Dois minutos.',
            '*Arpejo mais uma nota da escala*: acrescente uma nota de passagem por vez.',
            '*Escala inteira*: improvise livremente, mas terminando cada frase numa nota do acorde.',
            '*Motivo fixo*: escolha um desenho rítmico e repita-o durante toda a improvisação, mudando só as alturas.',
            '*Pergunta e resposta*: duas frases, a primeira terminando em suspensão e a segunda em repouso.'
          ]
        },
        {
          t: 'acorde', legenda: 'Base de treino: Am – Dm – E – Am. Grave esses quatro acordes e improvise por cima.',
          lista: [
            { nome: 'Am', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
            { nome: 'Dm', cordas: [-1, -1, 0, 2, 3, 1], dedos: [null, null, null, 2, 3, 1] },
            { nome: 'E', cordas: [0, 2, 2, 1, 0, 0], dedos: [null, 2, 3, 1, null, null] },
            { nome: 'Am', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] }
          ]
        },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 5, casa: 0, classe: 'tonica', rotulo: 'A' }, { corda: 5, casa: 2, rotulo: 'B' }, { corda: 5, casa: 3, rotulo: 'C' },
            { corda: 4, casa: 0, rotulo: 'D' }, { corda: 4, casa: 2, rotulo: 'E' }, { corda: 4, casa: 3, rotulo: 'F' },
            { corda: 3, casa: 0, rotulo: 'G' }, { corda: 3, casa: 2, classe: 'tonica', rotulo: 'A' },
            { corda: 2, casa: 0, rotulo: 'B' }, { corda: 2, casa: 1, rotulo: 'C' },
            { corda: 1, casa: 0, rotulo: 'E' }
          ],
          legenda: 'Lá menor natural em posição aberta: o campo de notas para improvisar sobre a base Am – Dm – E – Am.',
          tocar: true, bpm: 80
        },
        { t: 'h', x: 'Construir uma frase' },
        { t: 'p', x: 'Uma improvisação sem forma cansa em trinta segundos. A estrutura mais simples e eficaz é a *pergunta e resposta*: uma frase que sobe e termina em nota de tensão, outra que desce e termina em nota do acorde. Duas frases formam um período; quatro formam uma seção.' },
        {
          t: 'pauta', bpm: 72, numerar: true, quebrar: 4,
          txt: 'a3/c c4/c e4/c a4/c b4/q. z/c | g4/c e4/c c4/c a3/c a3/q. z/c | d4/c f4/c a4/c d5/c c5/q. z/c | b4/c g4/c e4/c c4/c a3/b',
          legenda: 'Pergunta e resposta em Lá menor: a frase 1 sobe e para no Si (tensão); a frase 2 desce e fecha no Lá. As frases 3 e 4 repetem o desenho uma terça acima.'
        },
        {
          t: 'dica', titulo: 'A regra do silêncio: ',
          x: 'deixe pelo menos um tempo de silêncio ao fim de cada frase. O ouvinte precisa de espaço para processar o que ouviu, e você precisa de espaço para pensar no que vem.'
        },
        { t: 'metronomo', titulo: 'Improvisar com pulso', bpm: 72, compasso: '4/4', x: 'Dois compassos de frase, dois de silêncio. Depois inverta: improvise nos compassos em que ficou calado.' },
        {
          t: 'tocar', titulo: 'Confira a frase de resposta',
          seq: [[3, 0], [2, 0], [2, 1], [3, 2]],
          rotulo: 'Conferir as notas',
          fim: 'Agora improvise três respostas diferentes para a mesma pergunta.',
          x: 'Toque Sol, Si, Dó e Lá, uma nota por vez.'
        },
        {
          t: 'check', chave: 'improviso', titulo: 'Rotina de improvisação',
          itens: [
            'Improvisei dois minutos usando só notas do arpejo.',
            'Improvisei dois minutos com a escala, terminando as frases em notas do acorde.',
            'Improvisei mantendo um motivo rítmico fixo.',
            'Fiz pergunta e resposta por oito compassos.',
            'Deixei um tempo inteiro de silêncio ao fim de cada frase.',
            'Gravei dois minutos e ouvi criticamente.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Improvisar com método', rodadas: 5,
          perguntas: [
            { texto: 'Qual é a base mais segura para improvisar sobre um acorde?', opcoes: ['As notas do próprio acorde', 'A escala cromática', 'Qualquer nota', 'As notas da melodia original'], correta: 0, explicacao: 'O arpejo nunca soa errado.' },
            { texto: 'Onde deve terminar uma frase de resposta?', opcoes: ['Numa nota do acorde', 'Numa nota de tensão', 'No silêncio', 'Na nota mais aguda'], correta: 0, explicacao: 'É o que cria a sensação de repouso.' },
            { texto: 'Manter um motivo rítmico fixo serve para:', opcoes: ['Dar coerência à improvisação', 'Aumentar a velocidade', 'Treinar leitura', 'Facilitar a harmonia'], correta: 0, explicacao: 'Poucas ideias bem desenvolvidas.' },
            { texto: 'Qual é a função do silêncio na improvisação?', opcoes: ['Dar espaço ao ouvinte e tempo para pensar', 'Disfarçar erros', 'Marcar o fim', 'Descansar a mão'], correta: 0, explicacao: 'É parte da frase, não ausência dela.' },
            { texto: 'Improvisar bem depende principalmente de:', opcoes: ['Vocabulário preparado', 'Velocidade', 'Talento natural', 'Conhecer muitas escalas'], correta: 0, explicacao: 'Preparação transforma improviso em composição instantânea.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar sem parar do começo ao fim.', certo: 'Frases precisam de respiração.' },
            { erro: 'Mudar de ideia a cada compasso.', certo: 'Desenvolva um motivo antes de abandoná-lo.' },
            { erro: 'Improvisar sem saber a harmonia.', certo: 'Saiba qual acorde está soando em cada compasso.' },
            { erro: 'Buscar notas difíceis para impressionar.', certo: 'Uma frase simples e bem construída vale mais.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Improvisar é compor em tempo real com vocabulário preparado.',
            'Comece pelo arpejo e acrescente notas da escala aos poucos.',
            'Termine as frases em notas do acorde.',
            'Um motivo rítmico fixo dá coerência.',
            'Pergunta e resposta é a estrutura mais eficaz.',
            'Silêncio é parte da frase.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual material nunca soa errado sobre um acorde?', opcoes: ['As notas do próprio acorde', 'A escala cromática', 'A escala de tons inteiros', 'As notas da escala menor harmônica'], correta: 0, explicacao: 'O arpejo é a base segura.' },
        { texto: 'A estrutura de pergunta e resposta consiste em:', opcoes: ['Uma frase suspensa e outra conclusiva', 'Duas frases iguais', 'Uma frase longa', 'Alternância de dinâmica'], correta: 0, explicacao: 'É o período musical mais simples.' },
        { texto: 'O que dá coerência a uma improvisação?', opcoes: ['Desenvolver poucos motivos', 'Usar muitas escalas', 'Tocar rápido', 'Mudar de tom'], correta: 0, explicacao: 'Economia de material.' },
        { texto: 'Qual é o papel do silêncio?', opcoes: ['Faz parte da frase e dá espaço ao ouvinte', 'Serve para descansar', 'Indica o fim', 'Esconde erros'], correta: 0, explicacao: 'Improvisação sem silêncio cansa.' },
        { texto: 'Para improvisar sobre Am – Dm – E – Am, qual escala serve de base?', opcoes: ['Lá menor natural (com Sol sustenido sobre o E)', 'Dó maior apenas', 'Tons inteiros', 'Cromática'], correta: 0, explicacao: 'O acorde de E pede a sensível.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Improvisar dois minutos usando só notas dos arpejos da base Am – Dm – E – Am.',
          'Improvisar oito compassos em pergunta e resposta, com silêncio entre as frases.',
          'Improvisar mantendo um motivo rítmico fixo por toda a passagem.',
          'Gravar dois minutos e apontar dois acertos e dois problemas na própria execução.'
        ],
        criterio: 'Você domina quando consegue improvisar um minuto inteiro com frases que começam e terminam claramente, sem tocar ininterruptamente.'
      }
    },

    {
      id: 'n6.1.9',
      titulo: 'Acústica musical',
      resumo: 'Por que o violão soa como soa: harmônicos, ressonância, madeira e sala.',
      minutos: 20,
      disciplinas: ['teoria'],
      prereq: ['n5.2.5'],
      status: 'implementado',
      cobre: ['Acústica musical'],
      objetivo: 'Entender a física do som do violão e usar esse conhecimento para escolher cordas, posição de ataque e lugar de tocar.',
      blocos: [
        { t: 'p', x: 'Som é vibração do ar. No violão, a corda vibra, transmite a vibração ao cavalete, o cavalete move o tampo e o tampo move o ar — dentro e fora da caixa. Entender essa cadeia explica quase tudo: por que um violão projeta mais que outro, por que o timbre muda conforme o ponto de ataque e por que uma sala pode fazer você soar melhor.' },
        { t: 'h', x: 'A série harmônica' },
        { t: 'p', x: 'Uma corda nunca vibra só inteira: ela vibra ao mesmo tempo em metades, terços, quartos e assim por diante. Cada divisão produz uma frequência, e o conjunto delas é a *série harmônica*. A nota que ouvimos é a fundamental; o timbre é a receita de intensidades dos harmônicos acima dela.' },
        {
          t: 'tabela',
          cab: ['Harmônico', 'Divisões da corda', 'Intervalo acima da fundamental', 'Nota (se a corda for Dó)'],
          linhas: [
            ['1º (fundamental)', '1', 'Uníssono', 'Dó'],
            ['2º', '2', 'Oitava', 'Dó'],
            ['3º', '3', 'Oitava + quinta', 'Sol'],
            ['4º', '4', 'Duas oitavas', 'Dó'],
            ['5º', '5', 'Duas oitavas + terça maior', 'Mi'],
            ['6º', '6', 'Duas oitavas + quinta', 'Sol']
          ],
          legenda: 'A série harmônica explica a consonância: oitava, quinta e terça aparecem primeiro, e por isso soam naturais ao ouvido.'
        },
        { t: 'h', x: 'Por que o ponto de ataque muda o timbre' },
        { t: 'p', x: 'Ao tocar perto do cavalete, você excita mais os harmônicos agudos — o som fica brilhante e fino. Perto da boca, excita mais a fundamental — o som fica redondo e escuro. Não é opinião: é a física de onde você injeta energia na corda.' },
        { t: 'regua', legenda: 'A mesma corda, pontos de ataque diferentes, timbres diferentes. O ponto de ataque decide quais harmônicos ganham força.' },
        { t: 'h', x: 'A caixa e a madeira' },
        {
          t: 'lista', itens: [
            '*Tampo*: é ele que produz quase todo o som. Abeto dá ataque rápido e brilho; cedro dá som mais quente e resposta imediata.',
            '*Leque de barras*: controla como o tampo vibra. É o segredo guardado de cada luthier.',
            '*Boca e caixa*: funcionam como um ressonador de Helmholtz, reforçando os graves em torno de uma frequência específica (perto de Sol ou Lá graves, na maioria dos violões).',
            '*Fundo e laterais*: jacarandá projeta e dá brilho; mogno é mais contido e seco.',
            '*Maciço contra laminado*: madeira maciça vibra melhor e melhora com os anos; laminado é mais estável e mais barato.'
          ]
        },
        { t: 'violao', destacar: ['corpo', 'boca', 'cavalete'], rotulos: true, legenda: 'O caminho do som: corda, cavalete, tampo, caixa e boca. Cada etapa filtra e amplifica frequências diferentes.' },
        { t: 'h', x: 'Cordas: tensão, material e timbre' },
        {
          t: 'tabela',
          cab: ['Variável', 'Efeito'],
          linhas: [
            ['Tensão alta', 'Mais volume e projeção, ataque mais duro, menos sustain percebido'],
            ['Tensão média', 'Equilíbrio; o padrão da maioria'],
            ['Tensão baixa', 'Toque leve, menos volume, mais facilidade para ligados'],
            ['Nylon retificado', 'Menos ruído de dedo, timbre levemente mais escuro'],
            ['Carbono (fluorcarbono)', 'Mais brilho e projeção nas agudas, diâmetro menor'],
            ['Bordões prateados', 'Mais brilho inicial; oxidam mais rápido que os de bronze']
          ]
        },
        { t: 'h', x: 'A sala' },
        { t: 'p', x: 'A mesma execução soa diferente em salas diferentes. Sala com reverberação longa perdoa articulação imprecisa e embola passagens rápidas; sala seca exige mais do intérprete e revela tudo. A regra prática: em sala reverberante, toque mais devagar e mais articulado; em sala seca, use mais legato e mais vibrato para preencher.' },
        {
          t: 'tocar', titulo: 'Ouça a série harmônica',
          seq: [[5, 12], [5, 7], [5, 5], [5, 4]],
          rotulo: 'Conferir os harmônicos',
          fim: 'Esses são os harmônicos 2, 3, 4 e 5 da 5ª corda. Eles estão todos presentes quando você toca a corda solta.',
          x: 'Toque os harmônicos nas casas 12, 7, 5 e 4 da 5ª corda.'
        },
        {
          t: 'check', chave: 'acustica', titulo: 'Experimente a física',
          itens: [
            'Toquei a mesma nota em cinco pontos de ataque diferentes e descrevi o timbre de cada um.',
            'Toquei os harmônicos 2, 3, 4 e 5 de uma corda e identifiquei os intervalos.',
            'Comparei o som do meu violão em dois cômodos diferentes.',
            'Verifiquei de que madeira é o tampo do meu violão.',
            'Toquei uma passagem rápida numa sala reverberante e ajustei a articulação.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Física do som', rodadas: 5,
          perguntas: [
            { texto: 'O terceiro harmônico soa a que intervalo da fundamental?', opcoes: ['Oitava mais quinta', 'Oitava', 'Duas oitavas', 'Terça maior'], correta: 0, explicacao: 'A corda vibra em três partes.' },
            { texto: 'Tocar perto do cavalete produz som brilhante porque:', opcoes: ['Excita mais os harmônicos agudos', 'A corda fica mais curta', 'A tensão aumenta', 'A caixa ressoa mais'], correta: 0, explicacao: 'O ponto de excitação decide a receita de harmônicos.' },
            { texto: 'Qual parte do violão produz a maior parte do som?', opcoes: ['O tampo', 'O fundo', 'O braço', 'As tarraxas'], correta: 0, explicacao: 'Ele é movido pelo cavalete e move o ar.' },
            { texto: 'Cordas de tensão alta oferecem:', opcoes: ['Mais volume e ataque mais duro', 'Mais facilidade para ligados', 'Menos projeção', 'Timbre mais escuro'], correta: 0, explicacao: 'E exigem mais da mão esquerda.' },
            { texto: 'Numa sala muito reverberante, o recomendado é:', opcoes: ['Tocar mais devagar e mais articulado', 'Tocar mais rápido', 'Usar mais legato', 'Aumentar o vibrato'], correta: 0, explicacao: 'A reverberação já preenche o espaço.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Atribuir ao instrumento o que é ponto de ataque.', certo: 'Antes de trocar de violão, teste os pontos de ataque.' },
            { erro: 'Escolher cordas pela marca, não pela tensão.', certo: 'Tensão e material é o que muda o resultado.' },
            { erro: 'Tocar igual em qualquer sala.', certo: 'Articulação e andamento se ajustam à acústica.' },
            { erro: 'Achar que harmônico é truque.', certo: 'Eles estão presentes em toda nota tocada; o "harmônico" só isola um deles.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Toda corda vibra em várias divisões ao mesmo tempo: é a série harmônica.',
            'O timbre é a receita de intensidade dos harmônicos.',
            'O ponto de ataque decide quais harmônicos ganham força.',
            'O tampo produz quase todo o som; a caixa reforça os graves.',
            'Tensão e material das cordas mudam volume, timbre e facilidade.',
            'A sala faz parte do instrumento: ajuste articulação e andamento a ela.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que é a série harmônica?', opcoes: ['O conjunto de frequências que uma corda produz ao vibrar', 'Uma escala musical', 'Uma afinação alternativa', 'Um tipo de acorde'], correta: 0, explicacao: 'A corda vibra inteira e em divisões ao mesmo tempo.' },
        { texto: 'O que define o timbre de um som?', opcoes: ['A intensidade relativa dos harmônicos', 'A frequência fundamental', 'O volume', 'A duração'], correta: 0, explicacao: 'Mesma nota, receitas diferentes.' },
        { texto: 'Qual madeira de tampo costuma dar som mais quente e resposta imediata?', opcoes: ['Cedro', 'Abeto', 'Jacarandá', 'Mogno'], correta: 0, explicacao: 'O abeto dá mais ataque e brilho.' },
        { texto: 'A caixa do violão funciona como:', opcoes: ['Um ressonador que reforça os graves', 'Um amplificador elétrico', 'Um filtro de agudos', 'Um apoio estrutural apenas'], correta: 0, explicacao: 'É um ressonador de Helmholtz.' },
        { texto: 'Em sala seca, o recomendado é:', opcoes: ['Usar mais legato e vibrato para preencher', 'Tocar mais staccato', 'Tocar mais rápido', 'Reduzir o volume'], correta: 0, explicacao: 'Sem reverberação, o intérprete sustenta o som.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar a mesma nota em cinco pontos de ataque e descrever o timbre de cada um.',
          'Produzir e identificar os harmônicos 2, 3, 4 e 5 de uma corda.',
          'Explicar a diferença de som entre dois cômodos onde você tocou.',
          'Justificar a escolha de tensão de corda do seu violão.'
        ],
        criterio: 'Você domina quando consegue mudar deliberadamente o timbre de uma frase e explicar fisicamente por que ela mudou.'
      }
    },

    {
      id: 'n6.1.10',
      titulo: 'História do violão e interpretação historicamente informada',
      resumo: 'Do alaúde ao violão moderno, e o que isso muda na hora de tocar.',
      minutos: 22,
      disciplinas: ['historia', 'interpretacao'],
      prereq: ['n5.1.9'],
      status: 'implementado',
      cobre: ['História do violão', 'Interpretação historicamente informada'],
      objetivo: 'Conhecer a história do instrumento e aplicar critérios de interpretação informada a cada período.',
      blocos: [
        { t: 'p', x: 'O violão que você toca tem pouco mais de 150 anos. Antes dele, existiram instrumentos diferentes, com outras cordas, outras afinações e outro som — e a música escrita para eles pressupunha essas diferenças. Conhecer essa história é a base da interpretação historicamente informada.' },
        { t: 'h', x: 'A linha do tempo' },
        {
          t: 'tabela',
          cab: ['Época', 'Instrumento', 'Características', 'Repertório'],
          linhas: [
            ['Séc. XVI', 'Vihuela e alaúde renascentista', 'Seis ordens de cordas duplas, afinação com terça entre a 3ª e a 4ª', 'Narváez, Mudarra, Milán, Dowland'],
            ['Séc. XVII', 'Guitarra barroca', 'Cinco ordens, muito rasgueado, cordas de tripa', 'Sanz, De Visée, Corbetta'],
            ['Séc. XVIII', 'Alaúde barroco / transição', 'Até treze ordens; começa o violão de seis cordas simples', 'Weiss, Bach (via alaúde)'],
            ['c. 1800', 'Violão romântico', 'Seis cordas simples, caixa pequena, som leve e claro', 'Sor, Giuliani, Carulli, Aguado'],
            ['c. 1850', 'Violão Torres', 'Caixa maior, leque de barras, escala de 65 cm', 'Tárrega e toda a escola moderna'],
            ['1946 em diante', 'Violão moderno com náilon', 'Cordas sintéticas, maior estabilidade de afinação', 'Segovia, Villa-Lobos, Brouwer']
          ]
        },
        { t: 'h', x: 'O que muda de instrumento para instrumento' },
        {
          t: 'lista', itens: [
            '*Sustain*: os instrumentos antigos sustentam menos. Música escrita para eles pressupõe som mais curto — tocá-la com sustain moderno pode engrossar demais a textura.',
            '*Volume*: eram instrumentos de sala pequena. Dinâmicas extremas não faziam parte da linguagem.',
            '*Afinação*: a vihuela tinha terça entre 3ª e 4ª cordas, como a afinação de alaúde; transcrever exige ajustar.',
            '*Cordas de tripa*: ataque mais suave, menos brilho. O repertório antigo soa melhor com toque mais leve.',
            '*Tamanho da mão esquerda*: escalas menores (60 a 63 cm) permitiam extensões que no violão moderno são difíceis.'
          ]
        },
        { t: 'h', x: 'Interpretação historicamente informada: três níveis' },
        {
          t: 'tabela',
          cab: ['Nível', 'O que envolve', 'Para quem'],
          linhas: [
            ['1 — Conhecimento', 'Saber as convenções do período e aplicá-las no violão moderno', 'Todo estudante avançado'],
            ['2 — Adaptação', 'Ajustar toque, articulação e ornamentação ao estilo, mesmo sem instrumento de época', 'Intérprete em formação'],
            ['3 — Instrumento de época', 'Tocar em cópia histórica, com cordas de tripa e afinação do período', 'Especialista']
          ],
          legenda: 'O nível 2 é o alvo realista: você não precisa de outro violão para tocar música antiga com propriedade.'
        },
        {
          t: 'passos', itens: [
            'Descubra para qual instrumento a peça foi escrita.',
            'Pesquise as convenções do período: ornamentação, articulação, dinâmica e andamento.',
            'Compare duas gravações, uma em instrumento moderno e uma em instrumento de época.',
            'Decida o que você adota e o que não adota — e por quê.',
            'Anote as decisões na partitura, para não mudá-las a cada estudo.'
          ]
        },
        {
          t: 'pauta', bpm: 66, numerar: true, quebrar: 4,
          txt: 'g3/q b3/q d4/q g4/q | f#4/q e4/q d4/b | e4/q d4/q c4/q b3/q | a3/q b3/q g3/b',
          legenda: 'Melodia no estilo renascentista (exercício original): âmbito pequeno, movimento por grau, ritmo regular. Toque-a com toque leve, pouco vibrato e articulação clara.'
        },
        { t: 'ciclo', legenda: 'A música modal anterior ao século XVII não usa o ciclo das quintas como motor. Essa é a diferença estrutural mais importante entre o repertório antigo e o tonal.' },
        {
          t: 'tocar', titulo: 'Confira a melodia renascentista',
          seq: [[3, 0], [2, 0], [2, 3], [3, 0]],
          rotulo: 'Conferir as notas',
          fim: 'Agora toque a melodia inteira com toque leve, imitando a corda de tripa.',
          x: 'Toque Sol, Si, Ré e Sol, uma nota por vez.'
        },
        {
          t: 'check', chave: 'historico', titulo: 'Aplique ao seu repertório',
          itens: [
            'Descobri para qual instrumento foi escrita cada peça do meu repertório.',
            'Comparei uma gravação moderna e uma histórica da mesma peça.',
            'Toquei uma peça renascentista com toque leve e pouco vibrato.',
            'Anotei na partitura as decisões de ornamentação e articulação.',
            'Expliquei, em uma frase, por que adotei ou não cada convenção.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'História do instrumento', rodadas: 6,
          perguntas: [
            { texto: 'Quantas ordens de cordas tinha a vihuela?', opcoes: ['Seis', 'Cinco', 'Quatro', 'Doze'], correta: 0, explicacao: 'Cordas duplas, afinação próxima à do alaúde.' },
            { texto: 'Quem criou o formato do violão clássico moderno?', opcoes: ['Antonio de Torres, por volta de 1850', 'Francisco Tárrega', 'Andrés Segovia', 'Gaspar Sanz'], correta: 0, explicacao: 'Caixa maior e leque de barras.' },
            { texto: 'A guitarra barroca tinha:', opcoes: ['Cinco ordens e muito rasgueado', 'Seis cordas simples', 'Quatro cordas', 'Treze ordens'], correta: 0, explicacao: 'Sanz e De Visée escreveram para ela.' },
            { texto: 'Quando surgiram as cordas de náilon?', opcoes: ['Em 1946', 'Em 1850', 'Em 1900', 'Em 1800'], correta: 0, explicacao: 'Depois da Segunda Guerra Mundial.' },
            { texto: 'Qual é o nível realista de interpretação historicamente informada para um estudante avançado?', opcoes: ['Adaptar toque e articulação ao estilo no violão moderno', 'Comprar um instrumento de época', 'Ignorar as convenções', 'Tocar sempre com cordas de tripa'], correta: 0, explicacao: 'O nível 2 não exige outro instrumento.' },
            { texto: 'Por que música antiga pode soar pesada no violão moderno?', opcoes: ['O sustain maior engrossa a textura', 'A afinação é diferente', 'Faltam cordas', 'O volume é menor'], correta: 0, explicacao: 'Toque mais leve resolve boa parte disso.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar música renascentista com o mesmo peso de uma peça romântica.', certo: 'Toque mais leve, imitando a resposta da corda de tripa.' },
            { erro: 'Achar que interpretação informada exige instrumento de época.', certo: 'O nível de conhecimento e adaptação já muda muito o resultado.' },
            { erro: 'Adotar todas as convenções sem decidir.', certo: 'Interpretação informada é escolha consciente, não obediência.' },
            { erro: 'Ignorar a origem instrumental da peça.', certo: 'Ela explica a escrita e sugere o toque.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Vihuela e alaúde no século XVI; guitarra barroca no XVII; violão de seis cordas simples por volta de 1800.',
            'Torres criou o violão moderno por volta de 1850; o náilon chegou em 1946.',
            'Instrumentos antigos tinham menos sustain, menos volume e outra afinação.',
            'Interpretação informada tem três níveis; o segundo é o alvo realista.',
            'Informar-se não obriga a obedecer: obriga a escolher conscientemente.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quando surgiu o violão de seis cordas simples?', opcoes: ['Por volta de 1800', 'No século XVI', 'Em 1850', 'Em 1946'], correta: 0, explicacao: 'A guitarra barroca de cinco ordens veio antes.' },
        { texto: 'Qual luthier definiu o violão clássico moderno?', opcoes: ['Antonio de Torres', 'Hermann Hauser', 'Ignacio Fleta', 'José Ramírez'], correta: 0, explicacao: 'Por volta de 1850.' },
        { texto: 'As cordas de tripa produzem:', opcoes: ['Ataque mais suave e menos brilho', 'Mais volume', 'Mais sustain', 'Afinação mais estável'], correta: 0, explicacao: 'Daí o toque mais leve no repertório antigo.' },
        { texto: 'Interpretação historicamente informada significa:', opcoes: ['Conhecer as convenções do período e escolher conscientemente', 'Tocar sempre em instrumento de época', 'Seguir a edição ao pé da letra', 'Evitar ornamentos'], correta: 0, explicacao: 'Informação a serviço da escolha.' },
        { texto: 'Por que a música para vihuela exige adaptação no violão?', opcoes: ['A afinação original tinha terça entre a 3ª e a 4ª cordas', 'Não existe partitura', 'Era modal', 'Usava rasgueado'], correta: 0, explicacao: 'A transcrição precisa reposicionar as notas.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Situar historicamente três peças do seu repertório, nomeando o instrumento original de cada uma.',
          'Tocar uma peça renascentista com toque leve, articulação clara e pouco vibrato.',
          'Comparar duas gravações de períodos de execução diferentes e listar três diferenças.',
          'Apresentar a partitura de uma peça com as decisões interpretativas anotadas e justificadas.'
        ],
        criterio: 'Você domina quando consegue justificar historicamente cada decisão de execução numa peça anterior a 1800.'
      }
    }
  ]
};
