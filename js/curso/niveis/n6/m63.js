// NÍVEL 6 — MÓDULO 6.3: Repertório de especialização
// Obras em domínio público (Bach, Barrios, Ponce) trazem exemplos musicais.
// Obras ainda protegidas (Villa-Lobos, Rodrigo, Brouwer) são estudadas pela
// linguagem e preparadas com exercícios originais, sem reprodução de partitura.

export const M63 = {
  id: '6.3',
  titulo: 'Repertório de especialização',
  resumo: 'Os conjuntos de obras que definem um violonista de nível profissional, e como preparar cada um deles.',
  aulas: [
    {
      id: 'n6.3.1',
      titulo: 'Bach: suítes e obras contrapontísticas',
      resumo: 'Do prelúdio à fuga: o repertório mais exigente do instrumento.',
      minutos: 24,
      disciplinas: ['repertorio', 'contraponto', 'interpretacao'],
      prereq: ['n5.3.1', 'n6.1.1'],
      status: 'implementado',
      cobre: ['Bach: suítes e obras contrapontísticas'],
      objetivo: 'Conhecer as suítes e obras contrapontísticas de Bach tocadas no violão e preparar tecnicamente a execução de uma delas.',
      blocos: [
        { t: 'p', x: 'No Nível 5 você estudou os critérios de execução de Bach. Aqui o assunto é o *repertório*: quais obras, em que ordem, e o que cada uma exige. Todo o material é de domínio público e existe em edições livres.' },
        { t: 'h', x: 'O mapa das obras' },
        {
          t: 'tabela',
          cab: ['Obra', 'BWV', 'Origem', 'Dificuldade', 'Exigência central'],
          linhas: [
            ['Suíte em Mi menor', '996', 'Alaúde', 'Intermediária a avançada', 'Articulação e duas vozes; a Bourrée é a porta de entrada'],
            ['Prelúdio em Ré menor', '999', 'Alaúde', 'Intermediária', 'Arpejo contínuo e condução harmônica'],
            ['Suíte em Sol menor', '995', 'Alaúde (de BWV 1011)', 'Avançada', 'Peça longa; Prelúdio com seção fugada'],
            ['Suíte em Mi maior', '1006a', 'Alaúde (de BWV 1006)', 'Avançada', 'Leveza, velocidade e clareza'],
            ['Fuga em Lá menor', '1000', 'Alaúde (de BWV 1001)', 'Muito avançada', 'Três vozes reais do começo ao fim'],
            ['Chaconne', '1004', 'Violino solo', 'Extrema', 'Resistência, polifonia e arquitetura de 15 minutos'],
            ['Suítes para violoncelo', '1007-1012', 'Violoncelo', 'Variada', 'Linha única com harmonia implícita']
          ]
        },
        { t: 'h', x: 'Os movimentos de uma suíte' },
        {
          t: 'tabela',
          cab: ['Dança', 'Compasso', 'Caráter', 'Problema típico no violão'],
          linhas: [
            ['Prelúdio', 'Livre', 'Introdutório, muitas vezes em arpejo', 'Resistência e condução'],
            ['Allemande', '4/4', 'Fluente, com anacruse de semicolcheia', 'Vozes sustentadas em movimento contínuo'],
            ['Courante', '3/4 ou 3/2', 'Corrida, com hemíolas', 'Precisão rítmica e ambiguidade métrica'],
            ['Sarabande', '3/4 lento', 'Peso no segundo tempo', 'Som sustentado e ornamentação'],
            ['Menuet / Bourrée / Gavotte', 'Variado', 'Danças leves, em pares', 'Articulação e repetição com variação'],
            ['Gigue', '6/8 ou 12/8', 'Rápida, muitas vezes fugada', 'Velocidade com clareza polifônica']
          ]
        },
        {
          t: 'dica', titulo: 'Sobre as repetições nas danças: ',
          x: 'cada seção se repete. Tocar a repetição exatamente igual é oportunidade perdida. No barroco, espera-se variação: mude a articulação, o timbre, acrescente ornamentos. É prática histórica, não licença pessoal.'
        },
        { t: 'h', x: 'Preparação técnica, por exigência' },
        {
          t: 'tabela',
          cab: ['Exigência', 'Exercício preparatório'],
          linhas: [
            ['Sustentação de vozes', 'Trechos a três vozes parando sem levantar dedos'],
            ['Arpejo contínuo', 'Op. 1 de Giuliani, 20 fórmulas por dia a 100 BPM'],
            ['Ornamentação com ligados', 'Trinados de 8 notas em cada dedo, com metrônomo'],
            ['Articulação variada', 'Escala tocada em quatro articulações diferentes'],
            ['Resistência', 'Execução completa diária de um movimento inteiro']
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'e3+b3+e4/q e3+b3+g4/q e3+b3+f#4/q e3+b3+e4/q | a3+c4+e4/q a3+c4+a4/q a3+c4+g4/q a3+c4+e4/q | b2+f#3+d4/q b2+f#3+b3/q b2+f#3+a3/q b2+f#3+g3/q | e3+b3+e4/b z/b',
          legenda: 'Exercício original no estilo do Prelúdio BWV 999: duas vozes graves sustentadas e uma voz superior em movimento. Conferir se as graves soam o compasso inteiro.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 2]], fig: 'colcheia', dedo: 'p' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 2]], fig: 'colcheia', dedo: 'p' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'i' }] },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'minima', dedo: 'p' }] }
          ],
          legenda: 'Padrão de arpejo barroco para resistência: a mesma figura de mão direita sobre harmonias que mudam. Comece a 60 BPM e chegue a 100.',
          tocar: true, bpm: 76
        },
        { t: 'h', x: 'Escolher a edição' },
        {
          t: 'lista', itens: [
            'Prefira edições que indiquem claramente o que é do autógrafo e o que é acréscimo editorial.',
            'Uma edição *Urtext* traz o texto sem dedilhado: é a referência para decidir por conta própria.',
            'Edições com dedilhado de grandes intérpretes são úteis como sugestão, não como lei.',
            'Compare pelo menos duas edições antes de fixar as suas decisões.',
            'As fontes de Bach estão em domínio público e disponíveis em arquivos livres de partitura.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira o arpejo barroco',
          seq: [[5, 2], [4, 2], [3, 1], [2, 0]],
          rotulo: 'Conferir as notas',
          fim: 'Agora toque o padrão completo, sustentando o baixo durante todo o compasso.',
          x: 'Toque Si, Mi, Sol sustenido e Si, uma nota por vez.'
        },
        {
          t: 'check', chave: 'bach6', titulo: 'Preparação para uma suíte',
          itens: [
            'Escolhi uma obra e consegui pelo menos duas edições diferentes.',
            'Comparei as edições e anotei as divergências.',
            'Toquei o padrão de arpejo por dois minutos sem perda de qualidade.',
            'Toquei um trecho a três vozes com sustentação verificada.',
            'Defini a articulação de cada grupo de notas de uma seção.',
            'Planejei a variação da repetição de uma dança.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Repertório de Bach', rodadas: 6,
          perguntas: [
            { texto: 'Qual obra costuma ser a porta de entrada no Bach violonístico?', opcoes: ['A Bourrée da Suíte BWV 996', 'A Chaconne', 'A Fuga BWV 1000', 'A Suíte BWV 995'], correta: 0, explicacao: 'Duas vozes e extensão curta.' },
            { texto: 'Qual é o caráter da sarabanda?', opcoes: ['Lenta, em 3/4, com peso no segundo tempo', 'Rápida, em 6/8', 'Fluente, em 4/4', 'Em compasso livre'], correta: 0, explicacao: 'É o movimento mais expressivo da suíte.' },
            { texto: 'A Chaconne vem de qual obra original?', opcoes: ['A Partita BWV 1004, para violino solo', 'Uma suíte para alaúde', 'Uma suíte para violoncelo', 'Uma cantata'], correta: 0, explicacao: 'É o último movimento da Partita nº 2.' },
            { texto: 'O que se espera na repetição de uma seção de dança barroca?', opcoes: ['Variação de articulação, timbre e ornamentos', 'Repetição idêntica', 'Andamento mais rápido', 'Omitir notas'], correta: 0, explicacao: 'É prática histórica.' },
            { texto: 'O que é uma edição Urtext?', opcoes: ['Traz o texto sem acréscimos editoriais', 'Traz dedilhado completo', 'É a edição mais barata', 'É uma transcrição livre'], correta: 0, explicacao: 'Permite decidir por conta própria.' },
            { texto: 'Qual é a exigência central da Fuga BWV 1000?', opcoes: ['Três vozes reais sustentadas do começo ao fim', 'Velocidade', 'Rasgueado', 'Harmônicos'], correta: 0, explicacao: 'É o limite da polifonia violonística.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Começar por uma suíte inteira.', certo: 'Um movimento por vez, começando pelos mais curtos.' },
            { erro: 'Repetir a seção exatamente igual.', certo: 'Varie articulação, timbre e ornamentos.' },
            { erro: 'Seguir o dedilhado da edição sem questionar.', certo: 'Ele é sugestão; compare edições.' },
            { erro: 'Priorizar velocidade na gigue.', certo: 'Clareza polifônica primeiro; a velocidade vem depois.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'As suítes para alaúde (995, 996, 1006a) e o Prelúdio 999 são o repertório central.',
            'A Fuga BWV 1000 e a Chaconne são o topo da dificuldade.',
            'Cada dança tem caráter e problema técnico próprios.',
            'Repetições pedem variação: é prática histórica.',
            'Compare edições e prefira as que distinguem autógrafo de acréscimo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual suíte de Bach é a mais acessível ao violonista?', opcoes: ['BWV 996, em Mi menor', 'BWV 995', 'BWV 1006a', 'BWV 1011'], correta: 0, explicacao: 'A Bourrée dela é a entrada usual.' },
        { texto: 'Em que compasso costuma estar a gigue?', opcoes: ['6/8 ou 12/8', '4/4', '3/4', '2/2'], correta: 0, explicacao: 'Compasso composto e caráter rápido.' },
        { texto: 'O peso da sarabanda recai sobre qual tempo?', opcoes: ['O segundo', 'O primeiro', 'O terceiro', 'Nenhum em especial'], correta: 0, explicacao: 'É a marca rítmica da dança.' },
        { texto: 'As suítes para violoncelo exigem do violonista:', opcoes: ['Realizar a harmonia implícita numa linha única', 'Tocar quatro vozes', 'Usar afinação alternativa sempre', 'Rasgueado'], correta: 0, explicacao: 'A harmonia está sugerida, não escrita.' },
        { texto: 'As obras de Bach estão:', opcoes: ['Em domínio público', 'Protegidas até 2050', 'Disponíveis só em edição paga', 'Protegidas na Alemanha'], correta: 0, explicacao: 'Edições modernas podem ter direitos próprios, mas o texto é livre.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar um movimento completo de uma suíte, de memória.',
          'Apresentar a repetição de uma seção com variação planejada.',
          'Tocar o padrão de arpejo barroco por dois minutos a 100 BPM.',
          'Justificar três divergências entre duas edições e a sua escolha.'
        ],
        criterio: 'Você domina quando toca um movimento inteiro com as vozes audíveis, articulação decidida e repetições variadas conscientemente.'
      }
    },

    {
      id: 'n6.3.2',
      titulo: 'Villa-Lobos: os Doze Estudos e os Prelúdios',
      resumo: 'O conjunto mais importante do século XX e o que ele exige.',
      minutos: 22,
      disciplinas: ['repertorio', 'historia'],
      prereq: ['n5.3.4'],
      status: 'implementado',
      cobre: ['Villa-Lobos: 12 Estudos e Prelúdios'],
      objetivo: 'Conhecer estudo a estudo o conjunto de 1929 e preparar tecnicamente cada exigência com material livre.',
      blocos: [
        {
          t: 'aviso', titulo: 'Direitos autorais: ',
          x: 'as obras de Villa-Lobos continuam protegidas no Brasil até 70 anos após a morte do autor. Esta aula descreve as obras e prepara a técnica com exercícios originais, sem reproduzir partitura. Para tocar, use a edição licenciada (Max Eschig).'
        },
        { t: 'p', x: 'Os Doze Estudos, de 1929, fizeram pelo violão do século XX o que o Op. 1 de Giuliani fez pelo século XIX: criaram um catálogo técnico completo. A diferença é que os de Villa-Lobos são, ao mesmo tempo, peças de concerto.' },
        { t: 'h', x: 'O catálogo técnico dos Doze Estudos' },
        {
          t: 'tabela',
          cab: ['Estudo', 'Técnica central', 'Preparação com material livre'],
          linhas: [
            ['nº 1', 'Arpejo de seis cordas com forma fixa de mão direita', 'Op. 1 de Giuliani, fórmulas de 6 cordas, 120 BPM'],
            ['nº 2', 'Arpejo rápido com deslocamentos', 'Arpejos com mudança de posição a cada compasso'],
            ['nº 3', 'Ligados e extensões', 'Ligados em velocidade; aberturas de quatro casas'],
            ['nº 4', 'Acordes repetidos e harmonias paralelas', 'Formas fixas deslocadas pelo braço'],
            ['nº 5', 'Melodia cantabile com acompanhamento', 'Planos sonoros e polifonia a duas vozes'],
            ['nº 6', 'Síncope brasileira e baixos alternados', 'Padrões rítmicos de choro com metrônomo'],
            ['nº 7', 'Escalas em velocidade por todo o braço', 'Escalas em três oitavas, 140 BPM'],
            ['nº 8', 'Cromatismo e ligados combinados', 'Exercícios cromáticos com ligados em cada dedo'],
            ['nº 9', 'Legato e condução de vozes lenta', 'Trechos a três vozes sustentadas'],
            ['nº 10', 'Arpejos amplos com saltos de mão direita', 'Arpejos de seis cordas com salto de p'],
            ['nº 11', 'Textura livre, grandes extensões e mudanças bruscas', 'Pestanas longas e aberturas'],
            ['nº 12', 'Virtuosismo combinado, escalas e acordes', 'Execução completa de todos os anteriores']
          ]
        },
        { t: 'h', x: 'Os Cinco Prelúdios' },
        {
          t: 'tabela',
          cab: ['Prelúdio', 'Caráter', 'Exigência'],
          linhas: [
            ['nº 1', 'Melodia nos graves, lírica e cantada ("ao sertanejo")', 'Som pleno na 6ª e 5ª cordas; seção central rápida'],
            ['nº 2', 'Caráter de choro, malandro', 'Arpejos e síncope; escalas na seção central'],
            ['nº 3', 'Evocação a Bach', 'Arpejo contínuo e acordes sustentados'],
            ['nº 4', 'Harmônicos e atmosfera', 'Controle de harmônicos e de timbre'],
            ['nº 5', 'Valsa de salão', 'Fraseado e equilíbrio de vozes']
          ],
          legenda: 'O Prelúdio nº 1 é a obra de Villa-Lobos mais tocada e costuma ser a primeira do conjunto a ser estudada.'
        },
        { t: 'h', x: 'Exercício original: arpejo de seis cordas com forma fixa' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[5, 2]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'i' }] },
            { notas: [{ pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[5, 4]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[4, 4]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[3, 3]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 3]], fig: 'semicolcheia', dedo: 'i' }] }
          ],
          legenda: 'Exercício original: mesma figura de mão direita, forma da esquerda subindo dois trastes, cordas Mi soltas como pedal. Meta: 120 BPM com quatro notas por clique.',
          tocar: true, bpm: 84
        },
        { t: 'metronomo', titulo: 'Escada do arpejo de seis cordas', bpm: 72, compasso: '4/4', x: 'Quatro notas por clique. Um minuto perfeito antes de subir 4 BPM, até 120.' },
        { t: 'h', x: 'A ordem de estudo recomendada' },
        {
          t: 'passos', itens: [
            'Comece pelo Prelúdio nº 1: é lírico, relativamente acessível e ensina som pleno nos graves.',
            'Siga para a Suíte Popular Brasileira (Mazurca-Chôro ou Valsa-Chôro).',
            'Entre nos Estudos pelo nº 1, que é essencialmente um exercício de mão direita.',
            'Depois os estudos nº 5 e nº 9, mais líricos e menos exigentes fisicamente.',
            'Só então os virtuosísticos: nº 7, nº 2, nº 10 e nº 12.',
            'O nº 11 por último: ele exige maturidade interpretativa, não só técnica.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a forma deslocada',
          seq: [[5, 2], [4, 2], [3, 1], [5, 4], [4, 4], [3, 3]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora toque o exercício completo, deixando as duas cordas Mi soltas soarem.',
          x: 'Toque as notas da forma nas duas posições: Si, Mi, Sol sustenido, Dó sustenido, Fá sustenido e Si bemol.'
        },
        {
          t: 'check', chave: 'villa6', titulo: 'Preparação sistemática',
          itens: [
            'Toquei o exercício de arpejo de seis cordas a 100 BPM.',
            'Toquei a forma deslocada ao longo de todo o braço.',
            'Ouvi gravações de pelo menos cinco dos Doze Estudos.',
            'Identifiquei qual técnica cada um trabalha.',
            'Escolhi a primeira obra do conjunto para estudar e obtive edição licenciada.',
            'Montei um plano de preparação técnica com material em domínio público.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Os Doze Estudos', rodadas: 5,
          perguntas: [
            { texto: 'Em que ano foram escritos os Doze Estudos?', opcoes: ['1929', '1908', '1940', '1951'], correta: 0, explicacao: 'Dedicados a Andrés Segovia.' },
            { texto: 'Qual estudo é essencialmente um exercício de mão direita?', opcoes: ['O nº 1', 'O nº 7', 'O nº 11', 'O nº 12'], correta: 0, explicacao: 'Arpejo de seis cordas com forma fixa.' },
            { texto: 'Qual é a obra mais tocada de Villa-Lobos para violão?', opcoes: ['Prelúdio nº 1', 'Estudo nº 12', 'Choros nº 1', 'Prelúdio nº 4'], correta: 0, explicacao: 'Melodia cantada nos graves.' },
            { texto: 'Qual estudo trabalha escalas em velocidade?', opcoes: ['O nº 7', 'O nº 5', 'O nº 9', 'O nº 1'], correta: 0, explicacao: 'Percorre o braço inteiro.' },
            { texto: 'Por que esta aula não traz partituras dessas obras?', opcoes: ['Elas ainda estão protegidas por direito autoral', 'Elas se perderam', 'São improvisadas', 'Não existem edições'], correta: 0, explicacao: 'A proteção vale até 70 anos após a morte do autor.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Começar pelos estudos virtuosísticos.', certo: 'Prelúdio nº 1 e Estudo nº 1 primeiro.' },
            { erro: 'Tocar sem o atrito das cordas soltas.', certo: 'Esse atrito é parte da linguagem.' },
            { erro: 'Ignorar a síncope brasileira.', certo: 'O ritmo é estrutural na obra dele.' },
            { erro: 'Usar partituras de origem duvidosa.', certo: 'As obras estão protegidas: use edição licenciada.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Os Doze Estudos (1929) formam um catálogo técnico completo e são peças de concerto.',
            'Cada estudo tem uma técnica central, preparável com material em domínio público.',
            'Os Cinco Prelúdios (1940) são mais acessíveis; o nº 1 é a porta de entrada.',
            'A ordem de estudo começa pelos líricos e termina nos virtuosísticos.',
            'As obras seguem protegidas: use edições licenciadas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos estudos para violão Villa-Lobos escreveu?', opcoes: ['Doze', 'Cinco', 'Vinte', 'Seis'], correta: 0, explicacao: 'Publicados em 1929.' },
        { texto: 'A quem foram dedicados os Doze Estudos?', opcoes: ['Andrés Segovia', 'Francisco Tárrega', 'Julian Bream', 'Turíbio Santos'], correta: 0, explicacao: 'Segovia foi o grande difusor.' },
        { texto: 'O Prelúdio nº 1 tem a melodia principal:', opcoes: ['Nas cordas graves', 'Na 1ª corda', 'Em harmônicos', 'No tremolo'], correta: 0, explicacao: 'Daí a necessidade de som pleno nos graves.' },
        { texto: 'Qual exercício prepara melhor o Estudo nº 1?', opcoes: ['Arpejos de seis cordas do Op. 1 de Giuliani', 'Escalas em três oitavas', 'Tremolo', 'Pestanas'], correta: 0, explicacao: 'A exigência é de mão direita.' },
        { texto: 'Qual estudo é recomendado por último?', opcoes: ['O nº 11', 'O nº 1', 'O nº 5', 'O nº 7'], correta: 0, explicacao: 'Exige maturidade interpretativa.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar o exercício de arpejo de seis cordas a 110 BPM, com igualdade.',
          'Deslocar a forma fixa por cinco posições com as cordas soltas limpas.',
          'Nomear a técnica central de pelo menos oito dos Doze Estudos.',
          'Apresentar um plano de preparação técnica para o estudo escolhido.'
        ],
        criterio: 'Você domina quando mantém o arpejo de seis cordas igual por dois minutos a 110 BPM e sabe qual exercício prepara cada estudo.'
      }
    },

    {
      id: 'n6.3.3',
      titulo: 'Barrios: La Catedral e as grandes obras',
      resumo: 'A obra-síntese do violonista-compositor americano, movimento a movimento.',
      minutos: 22,
      disciplinas: ['repertorio', 'interpretacao'],
      prereq: ['n5.3.5'],
      status: 'implementado',
      cobre: ['Barrios: La Catedral'],
      objetivo: 'Preparar e interpretar La Catedral, entendendo as exigências específicas de cada movimento.',
      blocos: [
        { t: 'p', x: 'La Catedral é a obra mais conhecida de Barrios e uma das peças centrais do repertório de concerto. Está em domínio público. São três movimentos muito diferentes entre si, e a dificuldade de cada um é de natureza distinta — o que faz dela uma espécie de exame completo.' },
        { t: 'h', x: 'Os três movimentos' },
        {
          t: 'tabela',
          cab: ['Movimento', 'Caráter', 'Exigência técnica', 'Exigência musical'],
          linhas: [
            ['I. Preludio (Saudade)', 'Lírico e livre; escrito depois dos outros dois', 'Arpejos amplos, rubato, extensões', 'Construção de uma única frase longa'],
            ['II. Andante religioso', 'Coral de órgão', 'Sustentação de acordes, condução de vozes, pestanas', 'Solenidade sem rigidez; respiração de coral'],
            ['III. Allegro solemne', 'Movimento perpétuo em arpejo', 'Resistência, igualdade, velocidade', 'Arquitetura: manter a direção por páginas']
          ]
        },
        { t: 'h', x: 'O Andante religioso: sustentação' },
        { t: 'p', x: 'A dificuldade aqui não é mover os dedos, e sim mantê-los. Cada acorde precisa durar o valor escrito, e a mudança para o acorde seguinte deve ser silenciosa. Qualquer corda que escape quebra a ilusão do órgão.' },
        {
          t: 'pauta', bpm: 50, numerar: true, quebrar: 2,
          txt: 'b2+f#3+b3+d4/b e3+b3+e4+g4/b | a2+e3+a3+c#4/b d3+a3+d4+f#4/b | g2+d3+g3+b3/b a2+e3+a3+c#4/b | d3+a3+d4+f#4/o',
          legenda: 'Exercício original de coral, no estilo do segundo movimento: quatro vozes em acordes sustentados. Mantenha cada acorde pelos dois tempos inteiros.'
        },
        {
          t: 'passos', itens: [
            'Toque o primeiro acorde e conte dois tempos sem soltar nada.',
            'Prepare a mudança: veja qual dedo pode ficar e qual precisa sair.',
            'Mude no último instante possível, não no primeiro.',
            'Verifique se não há ruído de deslocamento nas cordas graves.',
            'Repita até a cadeia inteira soar contínua.'
          ]
        },
        { t: 'h', x: 'O Allegro solemne: resistência' },
        { t: 'p', x: 'Páginas inteiras do mesmo padrão de arpejo. O problema não é tocar o padrão: é tocá-lo igual na quarta página. A preparação é de condicionamento — execuções completas, cronometradas, com atenção ao momento em que a qualidade cai.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[2, 2]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 2]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'i' }] },
            { notas: [{ pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'i' }] }
          ],
          legenda: 'Padrão de resistência no estilo do terceiro movimento (exercício original). Meta: cinco minutos contínuos a 100 BPM sem queda de igualdade.',
          tocar: true, bpm: 88
        },
        { t: 'metronomo', titulo: 'Teste de resistência', bpm: 88, compasso: '4/4', x: 'Quatro notas por clique, cinco minutos sem parar. Anote em que minuto a qualidade começa a cair — é esse o ponto a trabalhar.' },
        { t: 'h', x: 'As outras grandes obras' },
        {
          t: 'tabela',
          cab: ['Obra', 'Exigência'],
          linhas: [
            ['Una limosna por el amor de Dios', 'Tremolo contínuo com crescendo longo e dinâmica extrema'],
            ['Julia Florida (Barcarola)', 'Melodia cantabile sobre acompanhamento ondulante'],
            ['Vals Op. 8 nº 3 e nº 4', 'Fraseado de valsa, virtuosismo leve'],
            ['Danza Paraguaya', 'Ritmo folclórico, articulação e acentuação'],
            ['Estudio de Concierto / Las Abejas', 'Velocidade e igualdade em escalas e arpejos'],
            ['Choro de Saudade', 'Lirismo brasileiro, rubato, condução de vozes']
          ],
          legenda: 'Toda a obra de Barrios está em domínio público.'
        },
        {
          t: 'tocar', titulo: 'Confira o coral',
          seq: [[5, 2], [4, 4], [3, 4], [2, 3]],
          rotulo: 'Conferir as notas',
          fim: 'Agora toque os acordes completos, sustentando cada um pelos dois tempos.',
          x: 'Toque Si, Fá sustenido, Si e Ré, uma nota por vez.'
        },
        {
          t: 'check', chave: 'catedral', titulo: 'Preparação de La Catedral',
          itens: [
            'Toquei o exercício de coral sustentando todos os acordes.',
            'Verifiquei que não há ruído de deslocamento entre acordes.',
            'Toquei o padrão de resistência por cinco minutos e anotei quando a qualidade caiu.',
            'Ouvi três gravações diferentes da obra e comparei as escolhas.',
            'Defini as adaptações necessárias para as extensões grandes.',
            'Estudei o Andante religioso completo, separado dos outros movimentos.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'La Catedral', rodadas: 5,
          perguntas: [
            { texto: 'Qual movimento de La Catedral foi composto por último?', opcoes: ['O Preludio (Saudade)', 'O Andante religioso', 'O Allegro solemne', 'Nenhum: foram simultâneos'], correta: 0, explicacao: 'Foi acrescentado anos depois dos outros dois.' },
            { texto: 'A dificuldade central do Andante religioso é:', opcoes: ['Sustentar os acordes pelo valor escrito', 'A velocidade', 'O tremolo', 'Os harmônicos'], correta: 0, explicacao: 'É o que cria a ilusão de órgão.' },
            { texto: 'A dificuldade central do Allegro solemne é:', opcoes: ['Resistência e igualdade por páginas inteiras', 'Extensões grandes', 'Leitura', 'Rubato'], correta: 0, explicacao: 'É um movimento perpétuo.' },
            { texto: 'A obra de Barrios está em domínio público?', opcoes: ['Sim', 'Não', 'Apenas no Paraguai', 'Apenas as gravações'], correta: 0, explicacao: 'Ele morreu em 1944.' },
            { texto: 'Como se diagnostica o limite de resistência?', opcoes: ['Anotando em que minuto a qualidade começa a cair', 'Tocando até errar', 'Medindo a frequência cardíaca', 'Aumentando o andamento'], correta: 0, explicacao: 'É esse o ponto a trabalhar.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Estudar os três movimentos ao mesmo tempo.', certo: 'Cada um tem natureza diferente: estude-os separadamente antes de juntar.' },
            { erro: 'Soltar acordes do Andante antes do tempo.', certo: 'A sustentação é a peça.' },
            { erro: 'Tocar o Allegro sempre do começo.', certo: 'Comece pelas últimas páginas, onde a resistência falha.' },
            { erro: 'Forçar extensões grandes.', certo: 'Adapte com honestidade.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'La Catedral tem três movimentos de dificuldade de naturezas diferentes.',
            'Andante religioso: sustentação e mudanças silenciosas.',
            'Allegro solemne: resistência e igualdade por páginas.',
            'Preludio: construção de uma frase longa, com rubato.',
            'Toda a obra de Barrios é de domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos movimentos tem La Catedral?', opcoes: ['Três', 'Dois', 'Quatro', 'Um'], correta: 0, explicacao: 'Preludio, Andante religioso e Allegro solemne.' },
        { texto: 'O Andante religioso imita:', opcoes: ['Um coral de órgão', 'Uma dança', 'Um choro', 'Um tremolo'], correta: 0, explicacao: 'Daí a exigência de sustentação.' },
        { texto: 'Como preparar o Allegro solemne?', opcoes: ['Com execuções longas do padrão, cronometradas', 'Com escalas rápidas', 'Com tremolo', 'Com leitura à primeira vista'], correta: 0, explicacao: 'O problema é condicionamento.' },
        { texto: 'Qual obra de Barrios exige tremolo contínuo?', opcoes: ['Una limosna por el amor de Dios', 'Danza Paraguaya', 'Julia Florida', 'Choro de Saudade'], correta: 0, explicacao: 'É o grande teste de tremolo do repertório.' },
        { texto: 'Diante de uma extensão impossível em Barrios, o correto é:', opcoes: ['Adaptar', 'Forçar', 'Pular o trecho', 'Mudar de obra'], correta: 0, explicacao: 'A adaptação preserva a mão.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar o exercício de coral com todos os acordes sustentados e mudanças silenciosas.',
          'Sustentar o padrão de resistência por cinco minutos a 100 BPM.',
          'Tocar um movimento completo de La Catedral.',
          'Apresentar as adaptações feitas e justificá-las.'
        ],
        criterio: 'Você domina quando toca um movimento inteiro sem queda de qualidade da primeira à última página.'
      }
    },

    {
      id: 'n6.3.4',
      titulo: 'Manuel Ponce: sonatas e outras obras',
      resumo: 'O compositor mexicano que escreveu para Segovia — e uma vez assinou como Weiss.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia'],
      prereq: ['n5.3.1', 'n5.1.8'],
      status: 'implementado',
      cobre: ['Manuel Ponce: sonatas e outras obras'],
      objetivo: 'Conhecer a obra violonística de Ponce e preparar a execução de uma sonata ou conjunto de variações.',
      blocos: [
        { t: 'p', x: 'Manuel Ponce (1882–1948) foi o compositor que Segovia mais procurou. Escreveu sonatas, variações, prelúdios e um concerto, transitando entre o neoclassicismo, o romantismo e o folclore mexicano. Sua obra está em domínio público no Brasil.' },
        { t: 'h', x: 'O catálogo' },
        {
          t: 'tabela',
          cab: ['Obra', 'Caráter', 'Dificuldade'],
          linhas: [
            ['Sonata Mexicana', 'Folclore mexicano em forma clássica', 'Avançada'],
            ['Sonata III', 'Neoclássica, a mais tocada das sonatas', 'Avançada'],
            ['Sonata Romântica (hommage à Schubert)', 'Romantismo explícito, quatro movimentos', 'Muito avançada'],
            ['Sonata Clásica (hommage à Sor)', 'Classicismo, forma e clareza', 'Avançada'],
            ['Variations sur Folia de España et Fugue', 'Vinte variações e uma fuga; obra monumental', 'Muito avançada'],
            ['Suite en La menor ("de Weiss")', 'Pastiche barroco atribuído por Segovia a Weiss', 'Intermediária a avançada'],
            ['24 Prelúdios', 'Peças curtas, excelentes para estudo', 'Intermediária'],
            ['Thème varié et Finale', 'Tema com variações, concisa', 'Avançada']
          ]
        },
        {
          t: 'dica', titulo: 'A história da Suite en La menor: ',
          x: 'Ponce a escreveu no estilo barroco a pedido de Segovia, que a apresentou durante anos como obra inédita de Silvius Leopold Weiss. A brincadeira só foi revelada depois. A suíte é um excelente estudo de estilo barroco com escrita idiomática moderna.'
        },
        { t: 'h', x: 'O que a música de Ponce exige' },
        {
          t: 'lista', itens: [
            '*Clareza formal*: as sonatas seguem forma clássica; saber onde está cada seção é indispensável.',
            '*Leitura harmônica*: a harmonia é rica, com cromatismo e empréstimos constantes.',
            '*Escrita pianística adaptada*: Ponce era pianista; algumas passagens pedem decisões de redistribuição.',
            '*Variedade de estilo*: cada obra pede uma linguagem diferente, do barroco ao romântico.',
            '*Resistência*: as sonatas têm três ou quatro movimentos e duram de 15 a 25 minutos.'
          ]
        },
        { t: 'h', x: 'As Variações sobre a Folia' },
        { t: 'p', x: 'A Folia de España é um tema antigo — uma progressão harmônica usada por dezenas de compositores desde o século XVI. Ponce escreveu vinte variações sobre ela, mais uma fuga. A obra percorre praticamente todas as técnicas do instrumento e é considerada uma das maiores do repertório.' },
        {
          t: 'pauta', bpm: 56, numerar: true, quebrar: 4,
          txt: 'd3+a3+d4/b a2+e3+c#4/b | d3+a3+d4/b c3+g3+c4/b | f2+c3+a3/b c3+g3+c4/b | d3+a3+d4/b a2+e3+c#4/o',
          legenda: 'A progressão da Folia: i – V – i – VII – III – VII – i – V. Esse esqueleto harmônico sustenta as vinte variações. O tema é anônimo e de domínio público.'
        },
        {
          t: 'acorde', legenda: 'A Folia em Ré menor, acorde a acorde. Toque a sequência várias vezes: é sobre ela que as variações acontecem.',
          lista: [
            { nome: 'Dm (i)', cordas: [-1, -1, 0, 2, 3, 1], dedos: [null, null, null, 2, 3, 1] },
            { nome: 'A (V)', cordas: [-1, 0, 2, 2, 2, 0], dedos: [null, null, 1, 2, 3, null] },
            { nome: 'C (VII)', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
            { nome: 'F (III)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } }
          ]
        },
        { t: 'h', x: 'Caminho de estudo' },
        {
          t: 'passos', itens: [
            'Comece pelos 24 Prelúdios: são curtos e cobrem muitas situações técnicas.',
            'Depois a Suite en La menor, pelo menos o Prelúdio e a Allemande.',
            'Em seguida, a Sonata Clásica ou a Sonata III, um movimento por vez.',
            'A Folia e a Sonata Romântica ficam para o fim: são obras de recital inteiro.',
            'Em todas, analise a forma antes de estudar as notas.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a progressão da Folia',
          seq: [[4, 0], [5, 0], [5, 3], [6, 1]],
          rotulo: 'Conferir os baixos',
          fim: 'Esses são os quatro baixos principais da Folia: Ré, Lá, Dó e Fá.',
          x: 'Toque os baixos, um por vez, devagar.'
        },
        {
          t: 'check', chave: 'ponce', titulo: 'Entrada na obra de Ponce',
          itens: [
            'Toquei a progressão da Folia até memorizá-la.',
            'Li um dos 24 Prelúdios à primeira vista.',
            'Ouvi a Sonata III e a Sonata Romântica completas.',
            'Analisei a forma de um movimento de sonata antes de estudar as notas.',
            'Escolhi a primeira obra de Ponce para estudar.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Ponce e seu repertório', rodadas: 5,
          perguntas: [
            { texto: 'Para quem Ponce escreveu a maior parte da sua obra para violão?', opcoes: ['Andrés Segovia', 'Francisco Tárrega', 'Agustín Barrios', 'Julian Bream'], correta: 0, explicacao: 'Foram amigos e colaboradores por décadas.' },
            { texto: 'O que é a Suite en La menor "de Weiss"?', opcoes: ['Um pastiche barroco de Ponce apresentado por Segovia como obra de Weiss', 'Uma transcrição de Weiss', 'Uma obra anônima', 'Uma suíte de Bach'], correta: 0, explicacao: 'A autoria só foi revelada depois.' },
            { texto: 'A Folia de España é:', opcoes: ['Um tema e progressão antigos, usados por muitos compositores', 'Uma composição de Ponce', 'Uma dança mexicana', 'Uma peça de Segovia'], correta: 0, explicacao: 'Circula desde o século XVI.' },
            { texto: 'Quantas variações tem a obra de Ponce sobre a Folia?', opcoes: ['Vinte, mais uma fuga', 'Dez', 'Doze', 'Trinta'], correta: 0, explicacao: 'É uma obra monumental.' },
            { texto: 'Por onde se recomenda começar em Ponce?', opcoes: ['Pelos 24 Prelúdios', 'Pela Folia', 'Pela Sonata Romântica', 'Pelo Concerto del Sur'], correta: 0, explicacao: 'São curtos e variados.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Estudar uma sonata sem analisar a forma.', certo: 'Sem o mapa, a peça vira uma fila de notas.' },
            { erro: 'Tocar a Suite "de Weiss" com linguagem romântica.', certo: 'Ela é um pastiche barroco: articule como barroco.' },
            { erro: 'Começar pela Folia.', certo: 'É obra de recital inteiro; deixe para depois.' },
            { erro: 'Ignorar a origem pianística de certas passagens.', certo: 'Algumas pedem redistribuição entre as cordas.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Ponce (1882–1948) escreveu o maior corpo de obras para Segovia; está em domínio público.',
            'Sonatas, 24 Prelúdios, Variações sobre a Folia e a Suite "de Weiss" são o núcleo.',
            'Cada obra pede uma linguagem diferente, do barroco ao romântico.',
            'A Folia é um tema antigo com progressão fixa; Ponce escreveu vinte variações e uma fuga.',
            'Comece pelos Prelúdios e pela Suite; a Folia fica por último.'
          ]
        }
      ],
      quiz: [
        { texto: 'De que país era Manuel Ponce?', opcoes: ['México', 'Espanha', 'Argentina', 'Cuba'], correta: 0, explicacao: 'Foi uma figura central da música mexicana.' },
        { texto: 'Qual sonata de Ponce é uma homenagem a Sor?', opcoes: ['Sonata Clásica', 'Sonata Romântica', 'Sonata Mexicana', 'Sonata III'], correta: 0, explicacao: 'A Romântica homenageia Schubert.' },
        { texto: 'A Folia de España é, essencialmente:', opcoes: ['Uma progressão harmônica antiga', 'Uma dança flamenca', 'Uma obra de Ponce', 'Um movimento de sonata'], correta: 0, explicacao: 'Dezenas de compositores escreveram sobre ela.' },
        { texto: 'A Suite en La menor foi apresentada por Segovia como obra de:', opcoes: ['Silvius Leopold Weiss', 'Bach', 'Sor', 'Giuliani'], correta: 0, explicacao: 'A autoria de Ponce só foi revelada depois.' },
        { texto: 'Qual é o conjunto de Ponce mais indicado para começar?', opcoes: ['Os 24 Prelúdios', 'As sonatas', 'A Folia', 'O concerto'], correta: 0, explicacao: 'Peças curtas e variadas.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar a progressão da Folia de memória, com baixo e acordes.',
          'Tocar dois dos 24 Prelúdios completos.',
          'Apresentar a análise formal de um movimento de sonata.',
          'Tocar um movimento ou um conjunto de três variações, de memória.'
        ],
        criterio: 'Você domina quando executa um movimento de sonata com a forma clara na interpretação e com a linguagem adequada à obra escolhida.'
      }
    },

    {
      id: 'n6.3.5',
      titulo: 'Joaquín Rodrigo: obras para violão',
      resumo: 'O compositor do Concierto de Aranjuez e a sua linguagem espanhola do século XX.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia'],
      prereq: ['n5.3.6'],
      status: 'implementado',
      cobre: ['Joaquín Rodrigo: obras para violão'],
      objetivo: 'Conhecer a obra violonística de Rodrigo e preparar os recursos técnicos que ela exige.',
      blocos: [
        {
          t: 'aviso', titulo: 'Direitos autorais: ',
          x: 'Joaquín Rodrigo morreu em 1999, de modo que suas obras seguem protegidas por décadas. Esta aula descreve a linguagem e prepara a técnica com exercícios originais, sem reproduzir partitura. Para tocar, use edições licenciadas (Ediciones Joaquín Rodrigo / Schott).'
        },
        { t: 'p', x: 'Rodrigo (1901–1999) ficou cego aos três anos e compôs ao piano, em braille, ditando as partituras. Sem ser violonista, escreveu as obras mais conhecidas do instrumento no século XX — e conseguiu um idiomatismo notável ao estudar o violão de fora, junto com os intérpretes.' },
        { t: 'h', x: 'As obras' },
        {
          t: 'tabela',
          cab: ['Obra', 'Ano', 'Formação', 'Observação'],
          linhas: [
            ['Concierto de Aranjuez', '1939', 'Violão e orquestra', 'A obra mais famosa do repertório; o Adagio é célebre'],
            ['Fantasía para un gentilhombre', '1954', 'Violão e orquestra', 'Sobre danças de Gaspar Sanz; escrita para Segovia'],
            ['Tres Piezas Españolas', '1954', 'Violão solo', 'Fandango, Passacaglia e Zapateado; obra maior do solo'],
            ['Invocación y Danza', '1961', 'Violão solo', 'Homenagem a Falla; uma das peças mais exigentes'],
            ['En los trigales', '1938', 'Violão solo', 'Curta e acessível; porta de entrada'],
            ['Junto al Generalife', '1959', 'Violão solo', 'Evocação impressionista, com tremolo'],
            ['Concierto Madrigal', '1966', 'Dois violões e orquestra', 'Formação rara e brilhante']
          ]
        },
        { t: 'h', x: 'A linguagem de Rodrigo' },
        {
          t: 'lista', itens: [
            '*Modalismo espanhol*: cadência andaluza e modo frígio como material básico.',
            '*Harmonia neoclássica*: acordes de quartas, politonalidade leve e dissonâncias que não resolvem.',
            '*Ritmo de dança*: fandango, zapateado, seguidilla — cada peça tem um ritmo de base identificável.',
            '*Rasgueado e golpe*: recursos flamencos incorporados à escrita de concerto.',
            '*Contraste extremo de registro*: trechos muito graves seguidos de trechos muito agudos.'
          ]
        },
        { t: 'h', x: 'Preparação técnica com material livre' },
        {
          t: 'tabela',
          cab: ['Recurso de Rodrigo', 'Exercício preparatório'],
          linhas: [
            ['Rasgueado em padrões rítmicos', 'Rasgueado simples e de quatro dedos, com metrônomo a 120'],
            ['Acordes por quartas', 'Sequências de quartas deslocadas pelo braço'],
            ['Escalas rápidas com mudança de registro', 'Escalas em três oitavas, 140 BPM'],
            ['Cadência andaluza e modo frígio', 'Improvisação em Mi frígio sobre pedal'],
            ['Contraste dinâmico amplo', 'Mesma frase em pianíssimo e fortíssimo, alternando']
          ]
        },
        {
          t: 'acorde', legenda: 'A cadência andaluza em Mi, base modal de boa parte da escrita espanhola de concerto. Toque-a com rasgueado.',
          lista: [
            { nome: 'Am (iv)', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
            { nome: 'G (III)', cordas: [3, 2, 0, 0, 0, 3], dedos: [2, 1, null, null, null, 3] },
            { nome: 'F (II)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } },
            { nome: 'E (i frígio)', cordas: [0, 2, 2, 1, 0, 0], dedos: [null, 2, 3, 1, null, null] }
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0], [5, 2], [4, 2], [3, 1], [2, 0], [1, 0]], fig: 'colcheia' }, { pos: [[6, 0], [5, 2], [4, 2], [3, 1], [2, 0], [1, 0]], fig: 'colcheia' }, { pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'seminima' }, { pos: [[6, 1], [5, 3], [4, 3], [3, 2], [2, 1], [1, 1]], fig: 'seminima' }] },
            { notas: [{ pos: [[6, 0], [5, 2], [4, 2], [3, 1], [2, 0], [1, 0]], fig: 'minima' }, { pos: [[6, 0], [5, 2], [4, 2], [3, 1], [2, 0], [1, 0]], fig: 'minima' }] }
          ],
          legenda: 'Exercício original de rasgueado sobre a cadência andaluza. Cada acorde é rasgueado; o último ataque cai no tempo.',
          tocar: true, bpm: 92
        },
        { t: 'metronomo', titulo: 'Rasgueado rítmico', bpm: 96, compasso: '3/4', x: 'Acentue o primeiro e o terceiro tempos, como num fandango. Suba até 132 BPM.' },
        {
          t: 'tocar', titulo: 'Confira os baixos da cadência',
          seq: [[5, 0], [6, 3], [6, 1], [6, 0]],
          rotulo: 'Conferir no microfone',
          fim: 'Esses são os baixos da cadência andaluza em Mi: Lá, Sol, Fá e Mi.',
          x: 'Toque os quatro baixos, um por vez, devagar.'
        },
        {
          t: 'check', chave: 'rodrigo', titulo: 'Preparação para Rodrigo',
          itens: [
            'Toquei a cadência andaluza com rasgueado, no tempo.',
            'Toquei acordes por quartas em cinco posições.',
            'Improvisei em Mi frígio sobre pedal.',
            'Toquei a mesma frase em pianíssimo e em fortíssimo.',
            'Ouvi o Concierto de Aranjuez e as Tres Piezas Españolas.',
            'Obtive edição licenciada da obra que quero estudar.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Rodrigo e sua linguagem', rodadas: 5,
          perguntas: [
            { texto: 'Rodrigo era violonista?', opcoes: ['Não: compunha ao piano, em braille', 'Sim, concertista', 'Sim, mas amador', 'Sim, aluno de Segovia'], correta: 0, explicacao: 'Ficou cego aos três anos e ditava as partituras.' },
            { texto: 'Em que ano foi composto o Concierto de Aranjuez?', opcoes: ['1939', '1954', '1961', '1920'], correta: 0, explicacao: 'Estreou em 1940.' },
            { texto: 'A Fantasía para un gentilhombre é baseada em danças de:', opcoes: ['Gaspar Sanz', 'Luis de Narváez', 'Francisco Tárrega', 'Isaac Albéniz'], correta: 0, explicacao: 'Música do século XVII espanhol.' },
            { texto: 'Qual peça solo de Rodrigo é a porta de entrada?', opcoes: ['En los trigales', 'Invocación y Danza', 'Tres Piezas Españolas', 'Junto al Generalife'], correta: 0, explicacao: 'Curta e relativamente acessível.' },
            { texto: 'Por que esta aula não traz partituras de Rodrigo?', opcoes: ['As obras seguem protegidas por direito autoral', 'Foram perdidas', 'Só existem em braille', 'São improvisadas'], correta: 0, explicacao: 'Ele morreu em 1999.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar Rodrigo sem o sotaque rítmico de dança.', certo: 'Fandango, zapateado e seguidilla estruturam as peças.' },
            { erro: 'Resolver a cadência andaluza como se fosse tonal.', certo: 'No modo frígio, a chegada é o próprio acorde final.' },
            { erro: 'Achatar o contraste dinâmico.', certo: 'A escrita pede extremos.' },
            { erro: 'Usar partitura não licenciada.', certo: 'As obras estão protegidas.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Rodrigo (1901–1999) não era violonista, mas escreveu as obras mais conhecidas do instrumento.',
            'Concierto de Aranjuez, Fantasía, Tres Piezas Españolas e Invocación y Danza são o núcleo.',
            'A linguagem combina modalismo espanhol, harmonia neoclássica e ritmos de dança.',
            'A preparação técnica pode ser feita com rasgueado, quartas, escalas e improviso modal.',
            'As obras continuam protegidas: use edição licenciada.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a obra mais famosa de Rodrigo?', opcoes: ['Concierto de Aranjuez', 'Invocación y Danza', 'En los trigales', 'Concierto Madrigal'], correta: 0, explicacao: 'Seu Adagio é a página mais conhecida do repertório.' },
        { texto: 'Quais são os três movimentos das Tres Piezas Españolas?', opcoes: ['Fandango, Passacaglia e Zapateado', 'Prelúdio, Dança e Final', 'Adagio, Allegro e Coda', 'Fandango, Seguidilla e Bolero'], correta: 0, explicacao: 'Obra central do repertório solo.' },
        { texto: 'Invocación y Danza é uma homenagem a:', opcoes: ['Manuel de Falla', 'Tárrega', 'Albéniz', 'Granados'], correta: 0, explicacao: 'Usa material evocativo de Falla.' },
        { texto: 'Como Rodrigo compunha?', opcoes: ['Ao piano, em braille, ditando as partituras', 'Diretamente no violão', 'Em computador', 'De memória, sem escrever'], correta: 0, explicacao: 'Era cego desde os três anos.' },
        { texto: 'A cadência andaluza termina em:', opcoes: ['A dominante, que soa como repouso no modo frígio', 'A tônica maior', 'O relativo menor', 'A subdominante'], correta: 0, explicacao: 'É harmonia modal.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar a cadência andaluza com rasgueado a 120 BPM, com o último ataque no tempo.',
          'Tocar acordes por quartas deslocados por cinco posições.',
          'Improvisar oito compassos em Mi frígio com sotaque de dança.',
          'Demonstrar a mesma frase em pianíssimo e em fortíssimo.'
        ],
        criterio: 'Você domina quando executa os recursos espanhóis — rasgueado no tempo, modo frígio e contraste dinâmico amplo — de forma convincente.'
      }
    },

    {
      id: 'n6.3.6',
      titulo: 'Leo Brouwer: estudos e sonatas',
      resumo: 'O violão contemporâneo: dos Estudos Simples à linguagem de vanguarda.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia'],
      prereq: ['n6.1.3'],
      status: 'implementado',
      cobre: ['Leo Brouwer: estudos e sonatas'],
      objetivo: 'Conhecer as fases da obra de Brouwer e preparar os recursos técnicos contemporâneos que ela exige.',
      blocos: [
        {
          t: 'aviso', titulo: 'Direitos autorais: ',
          x: 'Leo Brouwer é um compositor vivo e suas obras estão protegidas. Esta aula descreve a linguagem e prepara a técnica com exercícios originais, sem reproduzir partitura. Para tocar, use edições licenciadas (Eschig, Chester, Ediciones Espiral Eterna).'
        },
        { t: 'p', x: 'Leo Brouwer (Cuba, 1939) é o compositor vivo mais importante para o violão. Violonista de formação, escreveu obras em três fases muito distintas — e seus Estudos Simples são, hoje, material didático em conservatórios do mundo inteiro.' },
        { t: 'h', x: 'As três fases' },
        {
          t: 'tabela',
          cab: ['Fase', 'Período', 'Linguagem', 'Obras'],
          linhas: [
            ['Nacionalista', 'anos 1950-60', 'Folclore cubano, modalismo, forma clara', 'Estudos Simples, Danza Característica, Elogio de la Danza'],
            ['Vanguarda', 'anos 1960-70', 'Aleatoriedade, notação gráfica, técnicas estendidas', 'La Espiral Eterna, Canticum, Parábola'],
            ['Nova simplicidade', 'anos 1980 em diante', 'Minimalismo, tonalidade recuperada, lirismo', 'El Decamerón Negro, Sonata, Hika, Paisaje Cubano']
          ]
        },
        { t: 'h', x: 'Os Estudos Simples' },
        { t: 'p', x: 'São vinte estudos curtos, escritos entre 1959 e 2001, agrupados em quatro séries. Cada um isola um problema técnico e, ao mesmo tempo, apresenta uma ideia musical — é o Giuliani do século XX. Vão de nível iniciante avançado até intermediário, o que os torna acessíveis muito antes das obras grandes.' },
        {
          t: 'tabela',
          cab: ['Série', 'Estudos', 'Foco'],
          linhas: [
            ['1ª', '1 a 5', 'Arpejos simples, cordas soltas, mão direita'],
            ['2ª', '6 a 10', 'Ligados, escalas, independência'],
            ['3ª', '11 a 15', 'Pestana, polifonia, contraste'],
            ['4ª', '16 a 20', 'Recursos contemporâneos e virtuosismo']
          ]
        },
        { t: 'h', x: 'Técnicas estendidas: o vocabulário contemporâneo' },
        {
          t: 'tabela',
          cab: ['Técnica', 'Como se faz', 'Notação usual'],
          linhas: [
            ['Tambora', 'Bater com o lado do polegar nas cordas junto ao cavalete', '"tamb." sobre a nota'],
            ['Golpe', 'Percutir o tampo com os dedos ou a unha', '"golpe" ou símbolo de X'],
            ['Pizzicato Bartók', 'Puxar a corda para cima e soltar, batendo no braço', 'Círculo com haste'],
            ['Pizzicato (abafado)', 'Abafar com a borda da mão junto ao cavalete e tocar com o polegar', '"pizz."'],
            ['Som percussivo sem altura', 'Abafar todas as cordas e tocar', 'Cabeça de nota em X'],
            ['Glissando com acorde inteiro', 'Deslizar uma forma inteira pelo braço', 'Linha diagonal entre acordes']
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0], [5, 2], [4, 2], [3, 1]], fig: 'seminima' }, { pos: [[6, 0], [5, 2], [4, 2], [3, 1]], fig: 'seminima' }, { pos: [[6, 5], [5, 7], [4, 7], [3, 6]], fig: 'minima' }] },
            { notas: [{ pos: [[6, 7], [5, 9], [4, 9], [3, 8]], fig: 'seminima' }, { pos: [[6, 5], [5, 7], [4, 7], [3, 6]], fig: 'seminima' }, { pos: [[6, 0], [5, 2], [4, 2], [3, 1]], fig: 'minima' }] }
          ],
          legenda: 'Exercício original: a mesma forma deslizando pelo braço, recurso frequente na escrita contemporânea. Toque com glissando entre os acordes e, no último, use tambora.',
          tocar: true, bpm: 60
        },
        {
          t: 'passos', itens: [
            'Tambora: deixe o polegar relaxado e bata com a lateral, perto do cavalete. O som é um tambor com altura vaga.',
            'Golpe: use a unha do anelar ou do médio no tampo, nunca com força — o verniz marca.',
            'Pizzicato abafado: a borda da mão direita repousa sobre as cordas junto ao cavalete, e o polegar toca.',
            'Bartók pizz.: puxe a corda perpendicularmente e solte; é um efeito de impacto, usado com parcimônia.',
            'Pratique cada um isoladamente dez vezes antes de aplicá-los numa peça.'
          ]
        },
        {
          t: 'aviso', x: 'Golpe no tampo pode danificar o instrumento se feito com força ou com unha afiada. Em violões valiosos, usa-se uma proteção adesiva transparente (golpeador). Nunca percuta sobre a região do cavalete.'
        },
        {
          t: 'tocar', titulo: 'Confira a forma deslizada',
          seq: [[6, 0], [5, 2], [6, 5], [5, 7]],
          rotulo: 'Conferir as notas',
          fim: 'Agora toque o exercício completo, deslizando a forma pelo braço.',
          x: 'Toque Mi, Si, Lá e Mi, uma nota por vez.'
        },
        {
          t: 'check', chave: 'brouwer', titulo: 'Vocabulário contemporâneo',
          itens: [
            'Pratiquei tambora dez vezes, com som limpo.',
            'Pratiquei golpe no tampo com segurança.',
            'Fiz pizzicato abafado numa escala inteira.',
            'Toquei o exercício de forma deslizada com glissando.',
            'Ouvi um estudo de cada fase de Brouwer.',
            'Obtive edição licenciada do estudo que quero tocar.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Brouwer e o contemporâneo', rodadas: 5,
          perguntas: [
            { texto: 'Quantos Estudos Simples Brouwer escreveu?', opcoes: ['Vinte', 'Doze', 'Vinte e quatro', 'Dez'], correta: 0, explicacao: 'Em quatro séries de cinco.' },
            { texto: 'O que é a tambora?', opcoes: ['Bater com o lado do polegar nas cordas junto ao cavalete', 'Percutir o tampo', 'Puxar a corda', 'Abafar com a palma'], correta: 0, explicacao: 'Produz som de tambor com altura vaga.' },
            { texto: 'A fase de vanguarda de Brouwer se caracteriza por:', opcoes: ['Aleatoriedade e notação gráfica', 'Folclore cubano', 'Minimalismo', 'Tonalidade clara'], correta: 0, explicacao: 'La Espiral Eterna é o exemplo típico.' },
            { texto: 'O que é preciso cuidar ao fazer golpe no tampo?', opcoes: ['Não usar força nem unha afiada; proteger o verniz', 'Usar sempre o polegar', 'Fazer junto à boca', 'Afinar antes'], correta: 0, explicacao: 'O tampo pode marcar.' },
            { texto: 'Por que esta aula não traz partituras de Brouwer?', opcoes: ['Ele é um compositor vivo e suas obras estão protegidas', 'As obras são improvisadas', 'Não existem edições', 'São notação gráfica apenas'], correta: 0, explicacao: 'Use edições licenciadas.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar técnicas estendidas sem praticá-las isoladamente.', certo: 'Dez repetições de cada uma antes de aplicar.' },
            { erro: 'Percutir o tampo com força.', certo: 'Som vem de precisão, não de impacto.' },
            { erro: 'Tocar a fase de vanguarda com fraseado romântico.', certo: 'A notação indica gesto e timbre, não melodia.' },
            { erro: 'Achar os Estudos Simples fáceis pelo nome.', certo: '"Simples" refere-se à concisão, não à facilidade.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Brouwer tem três fases: nacionalista, de vanguarda e de nova simplicidade.',
            'Os vinte Estudos Simples são o material didático contemporâneo de referência.',
            'Técnicas estendidas: tambora, golpe, pizzicato, Bartók pizz. e glissando de forma inteira.',
            'Cada técnica se pratica isoladamente antes de entrar na peça.',
            'Golpe exige cuidado com o instrumento.',
            'As obras estão protegidas: use edições licenciadas.'
          ]
        }
      ],
      quiz: [
        { texto: 'De que país é Leo Brouwer?', opcoes: ['Cuba', 'México', 'Espanha', 'Brasil'], correta: 0, explicacao: 'Nasceu em Havana em 1939.' },
        { texto: 'Em quantas séries estão agrupados os Estudos Simples?', opcoes: ['Quatro', 'Duas', 'Cinco', 'Três'], correta: 0, explicacao: 'Cinco estudos em cada série.' },
        { texto: 'Qual obra representa a fase de vanguarda?', opcoes: ['La Espiral Eterna', 'Elogio de la Danza', 'El Decamerón Negro', 'Paisaje Cubano'], correta: 0, explicacao: 'Notação gráfica e aleatoriedade.' },
        { texto: 'Pizzicato Bartók consiste em:', opcoes: ['Puxar a corda para que ela bata no braço', 'Abafar com a palma', 'Percutir o tampo', 'Tocar com a unha'], correta: 0, explicacao: 'É um efeito de impacto.' },
        { texto: 'As obras de Brouwer estão:', opcoes: ['Protegidas por direito autoral', 'Em domínio público', 'Disponíveis livremente', 'Sem edição'], correta: 0, explicacao: 'Ele é um compositor vivo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Executar tambora, golpe e pizzicato abafado com som limpo e sem risco ao instrumento.',
          'Tocar o exercício de forma deslizada com glissando audível e controlado.',
          'Descrever as três fases de Brouwer e citar uma obra de cada.',
          'Apresentar um plano de estudo de um Estudo Simples com edição licenciada.'
        ],
        criterio: 'Você domina quando executa as técnicas estendidas com controle e consegue inseri-las numa peça sem que soem como acidentes.'
      }
    }
  ]
};
