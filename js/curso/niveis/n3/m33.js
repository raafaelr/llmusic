// NÍVEL 3 · MÓDULO 3.3 — Estudos e repertório
// Cinco aulas, uma por compositor: Sor, Carcassi, Carulli, Aguado e Tárrega.
//
// Os estudos tocáveis incluídos aqui são composições originais do LLMusic,
// escritas no estilo e com o problema técnico de cada compositor. As obras
// históricas, todas em domínio público, são apresentadas com contexto,
// ordem de estudo e onde encontrar as partituras.

export const M33 = {
  id: '3.3',
  titulo: 'Estudos e repertório',
  objetivo: 'Conhecer os cinco compositores que formaram o violão e trabalhar o problema técnico central de cada um.',
  aulas: [

    // ---------------------------------------------------------------- 3.3.1
    {
      id: 'n3.3.1',
      titulo: 'Fernando Sor',
      resumo: 'O mais musical dos pedagogos.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n2.3.4'],
      status: 'validado',
      cobre: ['Fernando Sor'],
      objetivo: 'Entender a escrita de Sor e trabalhar o equilíbrio entre melodia e acompanhamento.',
      blocos: [
        { t: 'p', x: '*Fernando Sor* (Barcelona, 1778 — Paris, 1839) é considerado por muitos o maior compositor da história do violão. Ele não era um violonista que escrevia estudos: era um *compositor*, formado na tradição clássica, que por acaso escolheu o violão.' },
        { t: 'h', x: 'Quem foi' },
        { t: 'p', x: 'Sor estudou música no mosteiro de Montserrat, escreveu óperas, sinfonias e balés. Morou em Paris, Londres, Moscou. Seu balé *Cendrillon* foi um sucesso europeu. E, ao longo de tudo isso, escreveu para violão uma obra que até hoje nenhum estudante pode ignorar.' },
        { t: 'p', x: 'O que diferencia Sor dos outros: suas peças *são música*, não exercícios disfarçados. Um estudo dele pode ser tocado num concerto sem constrangimento. A escrita é limpa, as vozes são conduzidas com rigor, e há sempre uma ideia musical por trás do problema técnico.' },
        { t: 'h', x: 'O problema técnico central: equilíbrio de vozes' },
        { t: 'p', x: 'Em Sor, quase sempre há uma melodia clara e um acompanhamento. O desafio não é tocar as notas: é fazer a melodia *cantar* acima do acompanhamento, com a mesma mão. Quem resolve isso em Sor resolve em Bach depois.' },
        {
          t: 'passos', itens: [
            'Toque *só a melodia*, com apoyando, até ela estar na sua cabeça.',
            'Toque *só o acompanhamento*, bem fraco, com tirando.',
            'Junte, com a melodia claramente mais forte.',
            'Confira: grave e ouça. A melodia aparece sozinha?'
          ]
        },
        { t: 'h', x: 'Estudo no estilo de Sor (original do LLMusic)' },
        { t: 'p', x: 'Em Dó maior, 4/4. A melodia está sempre na nota mais aguda; o acompanhamento são as duas notas de baixo. Toque a melodia com o anelar, em apoyando quando possível.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [3, 0], [1, 0]], fig: 'seminima', dedo: 'p i a' }, { pos: [[3, 0], [1, 3]], fig: 'seminima', dedo: 'i a' }, { pos: [[5, 3], [3, 0], [1, 1]], fig: 'seminima', dedo: 'p i a' }, { pos: [[3, 0], [1, 0]], fig: 'seminima', dedo: 'i a' }], acorde: 'C' },
            { notas: [{ pos: [[4, 0], [3, 2], [2, 3]], fig: 'seminima', dedo: 'p i m' }, { pos: [[3, 2], [2, 1]], fig: 'seminima', dedo: 'i m' }, { pos: [[4, 0], [3, 2], [2, 0]], fig: 'seminima', dedo: 'p i m' }, { pos: [[3, 2], [2, 1]], fig: 'seminima', dedo: 'i m' }], acorde: 'Dm' },
            { notas: [{ pos: [[6, 3], [3, 0], [2, 0]], fig: 'seminima', dedo: 'p i m' }, { pos: [[3, 0], [1, 3]], fig: 'seminima', dedo: 'i a' }, { pos: [[6, 3], [3, 0], [1, 1]], fig: 'seminima', dedo: 'p i a' }, { pos: [[3, 0], [1, 0]], fig: 'seminima', dedo: 'i a' }], acorde: 'G' },
            { notas: [{ pos: [[5, 3], [3, 0], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'C' }
          ],
          quebrar: 2,
          legenda: 'Estudo no estilo de Sor. A melodia são as notas da 1ª e da 2ª corda; o resto é acompanhamento.',
          tocar: true, bpm: 72
        },
        {
          t: 'tocar', titulo: 'Toque só a melodia',
          seq: [{ corda: 1, casa: 0 }, { corda: 1, casa: 3 }, { corda: 1, casa: 1 }, { corda: 1, casa: 0 }],
          rotulo: 'Mi, Sol, Fá, Mi',
          x: 'A linha superior do primeiro compasso. Decore o som dela antes de juntar o acompanhamento.'
        },
        { t: 'h', x: 'As obras históricas, em domínio público' },
        {
          t: 'tabela',
          cab: ['Obra', 'O que é', 'Quando estudar'],
          linhas: [
            ['Op. 60 — Introdução ao estudo do violão', '25 peças muito curtas, da mais simples em diante', 'Agora: as primeiras são perfeitas para este nível'],
            ['Op. 31 — 24 lições progressivas', 'Peças curtas, mais elaboradas', 'Depois das primeiras do Op. 60'],
            ['Op. 35 — 24 estudos', 'Inclui o famoso nº 22, em Si menor', 'Nível 4'],
            ['Op. 6 e Op. 29 — Estudos', 'Repertório de concerto', 'Nível 5'],
            ['Op. 9 — Variações sobre um tema de Mozart', 'Sua obra mais conhecida', 'Nível 5 ou 6']
          ],
          legenda: 'Sor morreu em 1839: toda a sua obra está em domínio público e pode ser baixada gratuitamente em acervos como o IMSLP.'
        },
        {
          t: 'dica', x: 'Comece pelo *Op. 60, nº 1*. São oito compassos. Parece simples demais, e é justamente por isso que funciona: toda a sua atenção pode ir para o som, o equilíbrio e o fraseado.'
        },
        { t: 'ir', rota: 'importar', titulo: 'Importar uma partitura', x: 'Baixe um Op. 60 em PDF ou MusicXML e importe aqui para estudar com o cursor do app.' },
        {
          t: 'erros', itens: [
            { erro: 'Tocar Sor como se fosse exercício.', certo: 'São peças musicais. Pense em frases, não em notas.' },
            { erro: 'Melodia e acompanhamento no mesmo volume.', certo: 'É o problema central da escrita dele. Separe os planos.' },
            { erro: 'Começar pelos estudos famosos.', certo: 'Op. 60 nº 1 primeiro. A ordem numérica é a ordem de dificuldade.' },
            { erro: 'Ignorar as indicações de dedilhado originais.', certo: 'Sor escreveu digitações pensadas. Teste as dele antes de inventar.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Sor (1778–1839) foi compositor antes de ser pedagogo: as peças dele são música de verdade.',
            'O problema técnico central é o equilíbrio entre melodia e acompanhamento.',
            'Método: melodia sozinha, acompanhamento sozinho, depois juntos com a melodia acima.',
            'Comece pelo Op. 60, em ordem numérica. Tudo em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em que ano morreu Fernando Sor?', opcoes: ['1839', '1909', '1780', '1853'], correta: 0, explicacao: 'Por isso sua obra está em domínio público.' },
        { texto: 'O que diferencia os estudos de Sor dos de outros pedagogos?', opcoes: ['São peças musicais completas, não exercícios disfarçados', 'São mais curtos', 'São mais difíceis', 'Usam só cordas soltas'], correta: 0, explicacao: 'Podem ser tocados em concerto.' },
        { texto: 'Qual é o problema técnico central na escrita de Sor?', opcoes: ['Equilíbrio entre melodia e acompanhamento', 'Velocidade', 'Pestana', 'Harmônicos'], correta: 0, explicacao: 'A melodia precisa cantar acima do resto.' },
        { texto: 'Por qual obra começar?', opcoes: ['Op. 60, nº 1', 'Op. 9', 'Op. 35, nº 22', 'Op. 6'], correta: 0, explicacao: 'Oito compassos; a ordem numérica é a de dificuldade.' },
        { texto: 'Além de violão, o que Sor compôs?', opcoes: ['Óperas, sinfonias e balés', 'Só música para violão', 'Música religiosa apenas', 'Nada além de estudos'], correta: 0, explicacao: 'O balé Cendrillon foi um sucesso europeu.' },
        { texto: 'Como estudar o equilíbrio de vozes?', opcoes: ['Melodia sozinha, acompanhamento sozinho, depois juntos', 'Tudo junto, devagar', 'Só a melodia', 'Com metrônomo rápido'], correta: 0, explicacao: 'Cada plano precisa estar claro antes de somar.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o estudo no estilo de Sor com a melodia claramente acima.',
          'Consigo tocar a melodia sozinha, de memória.',
          'Gravei e, ao ouvir, a melodia aparece sozinha.',
          'Sei qual obra de Sor procurar para começar.'
        ],
        criterio: 'Você domina quando alguém que ouve consegue cantar a melodia depois de você tocar.'
      }
    },

    // ---------------------------------------------------------------- 3.3.2
    {
      id: 'n3.3.2',
      titulo: 'Matteo Carcassi',
      resumo: 'O método que atravessou dois séculos.',
      minutos: 18,
      disciplinas: ['repertorio', 'historia', 'tecnica'],
      prereq: ['n3.3.1'],
      status: 'validado',
      cobre: ['Matteo Carcassi'],
      objetivo: 'Trabalhar arpejos regulares e deslocamentos, o núcleo técnico de Carcassi.',
      blocos: [
        { t: 'p', x: '*Matteo Carcassi* (Florença, 1792 — Paris, 1853) escreveu o método de violão mais usado da história. O *Op. 59* e, principalmente, os *25 Estudos Op. 60* estão em praticamente todo currículo de conservatório desde 1840.' },
        { t: 'h', x: 'Quem foi' },
        { t: 'p', x: 'Carcassi era um virtuose de carreira internacional, baseado em Paris. Ao contrário de Sor, que era compositor, Carcassi era antes de tudo *professor e intérprete*. Isso se nota na escrita: cada estudo ataca um problema técnico muito preciso e o repete até ele ficar resolvido.' },
        {
          t: 'comparar',
          a: { titulo: 'Sor', itens: ['Compositor primeiro', 'Música com problema técnico embutido', 'Vozes conduzidas com rigor', 'Mais sutil e menos brilhante'] },
          b: { titulo: 'Carcassi', itens: ['Professor e virtuose primeiro', 'Problema técnico com música bem-feita em volta', 'Padrões repetidos sistematicamente', 'Mais brilhante e imediato'] }
        },
        { t: 'h', x: 'O problema técnico central: padrões de mão direita' },
        { t: 'p', x: 'Os estudos de Carcassi quase sempre funcionam assim: um padrão fixo de mão direita, repetido do começo ao fim, sobre uma harmonia que muda. A técnica se constrói pela repetição do padrão; a música acontece na harmonia.' },
        { t: 'h', x: 'Estudo no estilo de Carcassi (original do LLMusic)' },
        { t: 'p', x: 'Em Lá menor, 4/4, padrão p-i-m-a-m-i fixo, com a harmonia mudando a cada compasso. Objetivo: o padrão não pode hesitar nunca, nem nas trocas.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am' },
            { notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Dm' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }], acorde: 'E' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am' },
            { notas: [{ pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }], acorde: 'C' },
            { notas: [{ pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }], acorde: 'G' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }], acorde: 'E' },
            { notas: [{ pos: [[5, 0], [3, 2], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'Am' }
          ],
          quebrar: 2,
          legenda: 'Estudo no estilo de Carcassi. Oito compassos, um padrão só, sete trocas de acorde.',
          tocar: true, bpm: 84
        },
        {
          t: 'dica', x: 'Como Carcassi mandaria estudar: toque os oito compassos *só com o polegar*, uma nota por compasso, trocando o acorde. Depois só i-m-a. Depois junte. É o jeito mais rápido de resolver as trocas.'
        },
        { t: 'metronomo', titulo: 'Escada de velocidade', bpm: 60, compasso: '4/4', x: 'Duas notas por clique. Meta: 100 BPM sem hesitação nas trocas.' },
        { t: 'h', x: 'As obras históricas' },
        {
          t: 'tabela',
          cab: ['Obra', 'O que é', 'Quando estudar'],
          linhas: [
            ['Op. 59 — Método completo', 'Método em três partes, com exercícios progressivos', 'Agora: a parte 1 serve para este nível'],
            ['Op. 60 — 25 Estudos, nº 1 a 5', 'Arpejos e padrões de mão direita', 'Agora'],
            ['Op. 60 — nº 7 (Lá maior)', 'O mais famoso; arpejos rápidos', 'Nível 4'],
            ['Op. 60 — nº 3 e nº 19', 'Melodia e acompanhamento, ligados', 'Nível 4'],
            ['Op. 26 — Caprichos', 'Repertório de concerto', 'Nível 5']
          ],
          legenda: 'Carcassi morreu em 1853: obra em domínio público. Os 25 Estudos Op. 60 são, provavelmente, a coleção mais estudada da história do violão.'
        },
        {
          t: 'erros', itens: [
            { erro: 'O padrão de mão direita hesitar na troca de acorde.', certo: 'Treine o polegar sozinho e os dedos sozinhos antes de juntar.' },
            { erro: 'Tocar os estudos sempre no mesmo andamento.', certo: 'Use a escada de velocidade: é para isso que eles existem.' },
            { erro: 'Pular para o nº 7 porque é o famoso.', certo: 'A ordem numérica é a de dificuldade. Comece no nº 1.' },
            { erro: 'Tratar Carcassi como exercício seco.', certo: 'Há música boa ali. Faça fraseado e dinâmica.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Carcassi (1792–1853) foi professor e virtuose; seu método é o mais usado da história.',
            'Seus estudos usam um padrão fixo de mão direita sobre harmonia variável.',
            'Método de estudo: polegar sozinho, dedos sozinhos, depois juntos.',
            'Comece pelos Op. 60 nº 1 a 5, em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a obra mais estudada de Carcassi?', opcoes: ['25 Estudos Op. 60', 'Op. 9', 'Op. 1', 'Op. 35'], correta: 0, explicacao: 'Em praticamente todo conservatório desde 1840.' },
        { texto: 'Como funcionam tipicamente os estudos de Carcassi?', opcoes: ['Um padrão fixo de mão direita sobre harmonia que muda', 'Melodia solo', 'Só acordes', 'Só escalas'], correta: 0, explicacao: 'A técnica vem da repetição do padrão.' },
        { texto: 'Qual a diferença entre Sor e Carcassi?', opcoes: ['Sor era compositor; Carcassi era professor e virtuose', 'Sor era mais moderno', 'Carcassi escreveu óperas', 'Nenhuma'], correta: 0, explicacao: 'Isso se nota na escrita de cada um.' },
        { texto: 'Como resolver a hesitação nas trocas de acorde?', opcoes: ['Treinar o polegar sozinho e os dedos sozinhos antes de juntar', 'Tocar mais rápido', 'Mudar o padrão', 'Simplificar o acorde'], correta: 0, explicacao: 'Isolar o problema sempre é mais rápido.' },
        { texto: 'Por qual estudo do Op. 60 começar?', opcoes: ['Pelo nº 1', 'Pelo nº 7', 'Pelo nº 19', 'Pelo nº 25'], correta: 0, explicacao: 'A ordem numérica é a de dificuldade.' },
        { texto: 'Em que ano morreu Carcassi?', opcoes: ['1853', '1839', '1909', '1792'], correta: 0, explicacao: 'Obra em domínio público.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o estudo no estilo de Carcassi sem hesitar em nenhuma das sete trocas.',
          'Fiz o exercício do polegar sozinho e dos dedos sozinhos.',
          'Chego a 100 BPM com duas notas por clique.',
          'Faço dinâmica: o estudo não soa mecânico.'
        ],
        criterio: 'Você domina quando o padrão se mantém absolutamente regular do primeiro ao último compasso.'
      }
    },

    // ---------------------------------------------------------------- 3.3.3
    {
      id: 'n3.3.3',
      titulo: 'Ferdinando Carulli',
      resumo: 'O começo mais suave do repertório.',
      minutos: 16,
      disciplinas: ['repertorio', 'historia'],
      prereq: ['n3.3.2'],
      status: 'validado',
      cobre: ['Ferdinando Carulli'],
      objetivo: 'Trabalhar baixo e melodia simultâneos num repertório acessível.',
      blocos: [
        { t: 'p', x: '*Ferdinando Carulli* (Nápoles, 1770 — Paris, 1841) foi o mais prolífico dos clássicos do violão: publicou mais de 400 obras. Se existe um compositor cujas peças mais fáceis realmente são fáceis, é ele.' },
        { t: 'h', x: 'Quem foi' },
        { t: 'p', x: 'Carulli era autodidata no violão — estudou violoncelo primeiro — e foi um dos responsáveis por tornar o instrumento popular em Paris no começo do século XIX. Seu método *Op. 27* foi um best-seller europeu e teve dezenas de edições.' },
        { t: 'p', x: 'A crítica histórica a Carulli é que sua música é "fácil demais" e às vezes previsível. Mas é exatamente isso que a torna perfeita para este momento: você pode tocar música de verdade, em forma completa, sem que a técnica atrapalhe.' },
        { t: 'h', x: 'O problema técnico central: baixo e melodia' },
        { t: 'p', x: 'Carulli escreve quase sempre a duas vozes bem separadas: uma melodia simples em cima e um baixo caminhante embaixo, no polegar. O desafio é fazer as duas soarem como linhas independentes, não como um acorde quebrado.' },
        { t: 'h', x: 'Andantino no estilo de Carulli (original do LLMusic)' },
        { t: 'p', x: 'Em Sol maior, 3/4. Melodia na voz superior, baixo no polegar, acompanhamento no meio. Forma A–B–A.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 3], [3, 0]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'a' }], acorde: 'G' },
            { notas: [{ pos: [[6, 3], [3, 0]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 2]], fig: 'seminima', dedo: 'a' }], acorde: 'G' },
            { notas: [{ pos: [[5, 0], [3, 2]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[4, 0], [3, 2]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 2]], fig: 'minima', dedo: 'a' }], acorde: 'D' },
            { notas: [{ pos: [[6, 3], [3, 0]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'a' }], acorde: 'G' },
            { notas: [{ pos: [[5, 3], [3, 0]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[4, 0], [3, 2]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 2]], fig: 'seminima', dedo: 'a' }], acorde: 'D' },
            { notas: [{ pos: [[6, 3], [3, 0], [2, 0], [1, 3]], fig: 'minima', ponto: true, dedo: 'p i m a' }], acorde: 'G' }
          ],
          quebrar: 4,
          legenda: 'Andantino no estilo de Carulli, parte A. O polegar marca o primeiro tempo de cada compasso: é a valsa.',
          tocar: true, bpm: 100
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [3, 0]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[5, 3], [3, 0]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[4, 0], [3, 2]], fig: 'seminima', dedo: 'p+i' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 2]], fig: 'seminima', dedo: 'a' }], acorde: 'D' },
            { notas: [{ pos: [[6, 3], [3, 0], [2, 0], [1, 3]], fig: 'minima', ponto: true, dedo: 'p i m a' }], acorde: 'G' }
          ],
          quebrar: 4,
          legenda: 'Parte B. Depois dela, volte à parte A, mais suave.',
          tocar: true, bpm: 100
        },
        {
          t: 'tocar', titulo: 'Só a melodia',
          seq: [{ corda: 1, casa: 3 }, { corda: 1, casa: 2 }, { corda: 1, casa: 0 }, { corda: 1, casa: 2 }],
          rotulo: 'Sol, Fá♯, Mi, Fá♯',
          x: 'A linha da melodia dos quatro primeiros compassos. Toque-a sozinha antes de juntar.'
        },
        { t: 'h', x: 'As obras históricas' },
        {
          t: 'tabela',
          cab: ['Obra', 'O que é', 'Quando estudar'],
          linhas: [
            ['Op. 241 — Método para principiantes', 'Peças curtíssimas, quase todas na primeira posição', 'Agora'],
            ['Op. 27 — Método completo', 'O best-seller; exercícios e peças progressivas', 'Agora'],
            ['Op. 121 — 24 Prelúdios', 'Um em cada tonalidade', 'Nível 4'],
            ['Op. 333 — Estudos', 'Mais elaborados', 'Nível 4'],
            ['Concerto em Lá maior Op. 8a', 'Com orquestra', 'Nível 6']
          ],
          legenda: 'Carulli morreu em 1841: obra em domínio público.'
        },
        {
          t: 'dica', x: 'Carulli é o compositor ideal para *leitura à primeira vista*. As peças do Op. 241 são curtas, previsíveis e bem escritas: perfeitas para ler uma por dia.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar baixo e melodia como um acorde quebrado.', certo: 'São duas linhas independentes. Toque cada uma sozinha primeiro.' },
            { erro: 'O baixo some.', certo: 'O polegar precisa de volume próprio. Use apoio.' },
            { erro: 'Desprezar Carulli por ser fácil.', certo: 'É exatamente por ser acessível que ele serve: você toca música completa agora.' },
            { erro: 'Repetir a parte A igual na volta.', certo: 'Mais suave: é um reencontro.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Carulli (1770–1841) publicou mais de 400 obras e o método mais vendido da época.',
            'Escreve a duas vozes bem separadas: melodia em cima, baixo no polegar.',
            'É o compositor ideal para leitura à primeira vista diária.',
            'Comece pelo Op. 241, em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual obra de Carulli é indicada para começar?', opcoes: ['Op. 241', 'Op. 121', 'Concerto Op. 8a', 'Op. 333'], correta: 0, explicacao: 'Peças curtíssimas, quase todas na primeira posição.' },
        { texto: 'Qual é a característica da escrita de Carulli?', opcoes: ['Duas vozes bem separadas: melodia em cima, baixo no polegar', 'Acordes densos', 'Escalas rápidas', 'Harmônicos'], correta: 0, explicacao: 'O desafio é mantê-las independentes.' },
        { texto: 'Por que Carulli é bom para leitura à primeira vista?', opcoes: ['Porque as peças são curtas, previsíveis e bem escritas', 'Porque são difíceis', 'Porque são longas', 'Porque têm muitas alterações'], correta: 0, explicacao: 'Uma por dia funciona muito bem.' },
        { texto: 'Qual instrumento Carulli estudou antes do violão?', opcoes: ['Violoncelo', 'Piano', 'Violino', 'Flauta'], correta: 0, explicacao: 'No violão ele foi autodidata.' },
        { texto: 'Quantas obras Carulli publicou aproximadamente?', opcoes: ['Mais de 400', 'Cerca de 60', 'Cerca de 100', 'Mais de 1000'], correta: 0, explicacao: 'Foi o mais prolífico dos clássicos do violão.' },
        { texto: 'Como evitar que baixo e melodia soem como acorde quebrado?', opcoes: ['Tocar cada linha sozinha antes de juntar', 'Tocar mais rápido', 'Usar só o polegar', 'Tocar mais forte'], correta: 0, explicacao: 'Cada voz precisa ter identidade própria.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o Andantino inteiro na forma A–B–A.',
          'O baixo e a melodia soam como duas linhas independentes.',
          'Toco a parte A mais suave na volta.',
          'Consigo tocar a melodia sozinha, de memória.'
        ],
        criterio: 'Você domina quando as duas vozes são distinguíveis ao ouvir a gravação.'
      }
    },

    // ---------------------------------------------------------------- 3.3.4
    {
      id: 'n3.3.4',
      titulo: 'Dionisio Aguado',
      resumo: 'O cientista da mão direita.',
      minutos: 16,
      disciplinas: ['repertorio', 'historia', 'tecnica'],
      prereq: ['n3.3.3'],
      status: 'validado',
      cobre: ['Dionisio Aguado'],
      objetivo: 'Trabalhar a precisão e a clareza da mão direita, a obsessão de Aguado.',
      blocos: [
        { t: 'p', x: '*Dionisio Aguado* (Madri, 1784 — 1849) foi contemporâneo e amigo de Sor — os dois moraram juntos em Paris e chegaram a tocar duetos. Mas as ideias técnicas deles eram opostas, e essa divergência é uma das mais interessantes da história do violão.' },
        { t: 'h', x: 'A divergência com Sor' },
        {
          t: 'comparar',
          a: { titulo: 'Sor defendia', itens: ['Tocar com a polpa dos dedos, sem unhas', 'Som mais redondo e doce', 'Prioridade à qualidade do som'] },
          b: { titulo: 'Aguado defendia', itens: ['Tocar com unhas', 'Som mais claro e definido', 'Prioridade à clareza e à agilidade'] }
        },
        { t: 'p', x: 'A história deu razão a Aguado: o violão clássico moderno usa unhas. Mas o debate continua vivo, e muitos violonistas excelentes tocam só com polpa. O importante é entender que a escolha tem consequências sonoras concretas.' },
        { t: 'h', x: 'O método de Aguado' },
        { t: 'p', x: 'O *Método para guitarra* de Aguado (1825, revisado em 1843) é o mais sistemático da época. Ele analisa cada movimento da mão direita com uma precisão quase científica, e os exercícios são organizados por problema, não por peça.' },
        { t: 'p', x: 'Aguado também inventou o *tripodison*, um tripé que sustentava o violão para que o corpo do músico não o tocasse — segundo ele, o instrumento vibrava mais livre assim. A ideia não pegou, mas mostra o grau de obsessão dele com o som.' },
        { t: 'h', x: 'O problema técnico central: clareza da mão direita' },
        { t: 'p', x: 'Nos exercícios de Aguado, cada nota precisa sair com ataque definido, volume igual e duração exata. Não há onde se esconder: a escrita é transparente e qualquer irregularidade aparece.' },
        { t: 'h', x: 'Estudo no estilo de Aguado (original do LLMusic)' },
        { t: 'p', x: 'Um estudo de mão direita puro: a mão esquerda segura dois acordes simples e toda a dificuldade está na direita. Padrões diferentes a cada dois compassos.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am · p-i-m-a / p-a-m-i' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am · cruzamento p-m-i-a' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }], acorde: 'E · polegar intercalado' },
            { notas: [{ pos: [[6, 0], [3, 1], [2, 0], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'E' }
          ],
          quebrar: 2,
          legenda: 'Estudo no estilo de Aguado: três padrões de mão direita sobre dois acordes. Toda a dificuldade está na direita.',
          tocar: true, bpm: 76
        },
        {
          t: 'dica', titulo: 'O teste de Aguado: ',
          x: 'grave-se tocando o estudo e ouça só o *ataque* de cada nota. Todos têm a mesma qualidade? Algum dedo produz um som diferente dos outros? É isso que o método dele trabalha.'
        },
        { t: 'metronomo', titulo: 'Metrônomo para a clareza', bpm: 60, compasso: '4/4', x: 'Duas notas por clique. Prioridade absoluta à regularidade, não à velocidade.' },
        { t: 'h', x: 'As obras históricas' },
        {
          t: 'tabela',
          cab: ['Obra', 'O que é', 'Quando estudar'],
          linhas: [
            ['Método para guitarra (1843)', 'Exercícios sistemáticos de mão direita e esquerda', 'Agora: as primeiras lições'],
            ['Estudos do Método, nº 1 a 10', 'Curtos, focados num problema cada', 'Agora'],
            ['Op. 2 — Doze valsas', 'Peças agradáveis e acessíveis', 'Nível 4'],
            ['Op. 6 — Le Fandango Variado', 'Sua obra mais conhecida', 'Nível 5']
          ],
          legenda: 'Aguado morreu em 1849: obra em domínio público.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Buscar velocidade antes de clareza.', certo: 'Em Aguado, clareza vem primeiro. Sempre.' },
            { erro: 'Um dedo soar diferente dos outros.', certo: 'Grave-se e iguale o ataque dos quatro dedos.' },
            { erro: 'Ignorar o debate unha x polpa.', certo: 'Experimente os dois. A escolha muda o seu som.' },
            { erro: 'Achar que exercício de mão direita é chato demais.', certo: 'É o que define o seu som. Três minutos por dia bastam.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Aguado (1784–1849) foi o mais sistemático dos pedagogos do violão.',
            'Defendia o uso de unhas; Sor defendia só a polpa. A história deu razão a Aguado.',
            'O problema central da escrita dele é a clareza e a igualdade da mão direita.',
            'Comece pelas primeiras lições do Método, em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual era a divergência entre Sor e Aguado?', opcoes: ['Sor defendia tocar sem unhas; Aguado, com unhas', 'Sor preferia 4/4; Aguado, 3/4', 'Sor era professor; Aguado, compositor', 'Não havia divergência'], correta: 0, explicacao: 'Os dois eram amigos e tocavam duetos.' },
        { texto: 'O que é o tripodison?', opcoes: ['Um tripé inventado por Aguado para sustentar o violão', 'Um tipo de corda', 'Um exercício', 'Um acorde'], correta: 0, explicacao: 'A ideia era deixar o instrumento vibrar mais livre.' },
        { texto: 'Qual é o foco dos exercícios de Aguado?', opcoes: ['Clareza e igualdade da mão direita', 'Velocidade da mão esquerda', 'Pestana', 'Harmônicos'], correta: 0, explicacao: 'A escrita é transparente: qualquer irregularidade aparece.' },
        { texto: 'Em Aguado, o que vem primeiro: velocidade ou clareza?', opcoes: ['Clareza, sempre', 'Velocidade', 'Os dois juntos', 'Depende do estudo'], correta: 0, explicacao: 'A velocidade é consequência.' },
        { texto: 'Qual é a obra mais conhecida de Aguado?', opcoes: ['Le Fandango Variado, Op. 6', 'As Doze valsas', 'O Concerto', 'Os 25 Estudos'], correta: 0, explicacao: 'Repertório de concerto, para o Nível 5.' },
        { texto: 'Como testar a igualdade da mão direita?', opcoes: ['Gravando-se e ouvindo o ataque de cada nota', 'Tocando mais rápido', 'Usando metrônomo só', 'Tocando mais forte'], correta: 0, explicacao: 'O ouvido ao vivo não percebe sozinho no começo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco os três padrões do estudo com ataque igual nos quatro dedos.',
          'Gravei e conferi: nenhum dedo soa diferente dos outros.',
          'A duração das notas é regular.',
          'Experimentei tocar com unha e com polpa e percebo a diferença.'
        ],
        criterio: 'Você domina quando, na gravação, não dá para dizer qual dedo tocou qual nota.'
      }
    },

    // ---------------------------------------------------------------- 3.3.5
    {
      id: 'n3.3.5',
      titulo: 'Francisco Tárrega',
      resumo: 'O pai do violão moderno.',
      minutos: 18,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n3.3.4'],
      status: 'validado',
      cobre: ['Francisco Tárrega'],
      objetivo: 'Entender a virada técnica e expressiva que Tárrega provocou, e trabalhar som e fraseado.',
      blocos: [
        { t: 'p', x: '*Francisco Tárrega* (Villarreal, 1852 — Barcelona, 1909) é a ponte entre o violão clássico do século XIX e o violão moderno. Quase tudo o que você aprendeu neste curso sobre postura, posição das mãos e produção de som passa, de algum modo, por ele.' },
        { t: 'h', x: 'O que Tárrega mudou' },
        {
          t: 'lista', itens: [
            'Sistematizou a *postura clássica* com apoio de pé e o violão na perna esquerda.',
            'Definiu a posição da mão direita que usamos hoje, com o punho em cúpula e o polegar à frente.',
            'Popularizou o violão de *Antonio de Torres*, mais sonoro, que virou o padrão moderno.',
            'Explorou sistematicamente o *timbre*: ponticello, tasto, harmônicos.',
            'Transcreveu para violão obras de Bach, Beethoven, Chopin, Albéniz e Granados, ampliando enormemente o repertório.',
            'Formou uma geração de alunos que levou tudo isso adiante.'
          ]
        },
        { t: 'p', x: 'Curiosamente, Tárrega publicou muito pouco em vida. Seu ensino era oral, e boa parte do que sabemos vem de alunos como Emilio Pujol e Miguel Llobet.' },
        { t: 'h', x: 'O problema técnico central: som e expressão' },
        { t: 'p', x: 'Com Tárrega, o foco se desloca. Não é mais "conseguir tocar as notas" — isso se pressupõe. É *que som* você produz, *como* a frase respira, *que cor* você escolhe para cada seção. É por isso que ele vem depois dos outros quatro.' },
        { t: 'h', x: 'Prelúdio no estilo de Tárrega (original do LLMusic)' },
        { t: 'p', x: 'Em Mi menor, 3/4, bem livre. A melodia está na voz superior e deve cantar. Use tasto (perto do braço) na primeira metade e natural na segunda, para criar duas cores.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0], [3, 0]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'a' }], acorde: 'Em' },
            { notas: [{ pos: [[6, 0], [3, 0]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'minima', dedo: 'a' }], acorde: 'Em' },
            { notas: [{ pos: [[5, 0], [3, 2]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 5]], fig: 'minima', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[6, 0], [3, 1]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'minima', dedo: 'a' }], acorde: 'E' },
            { notas: [{ pos: [[6, 0], [3, 0]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 7]], fig: 'minima', dedo: 'a' }], acorde: 'Em' },
            { notas: [{ pos: [[4, 0], [3, 2]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 5]], fig: 'minima', dedo: 'a' }], acorde: 'D' },
            { notas: [{ pos: [[5, 0], [3, 2]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'minima', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[6, 0], [3, 0], [2, 0], [1, 0]], fig: 'minima', ponto: true, dedo: 'p i m a' }], acorde: 'Em' }
          ],
          quebrar: 4,
          legenda: 'Prelúdio no estilo de Tárrega. A melodia sobe até a casa 7 da 1ª corda e volta. Faça crescendo na subida.',
          tocar: true, bpm: 88
        },
        {
          t: 'passos', itens: [
            'Compassos 1 a 4: toque em *tasto*, perto do braço, som doce, dinâmica *p*.',
            'Compassos 5 a 7: mude para a posição *natural*, sobre a boca, e faça crescendo até o compasso 6.',
            'Compasso 8: diminuendo, e deixe o acorde final soar até morrer.',
            'Faça um pequeno *rubato*: alargue um pouco o compasso 6, o ponto mais alto da melodia.'
          ]
        },
        { t: 'h', x: 'As obras históricas' },
        {
          t: 'tabela',
          cab: ['Obra', 'O que é', 'Quando estudar'],
          linhas: [
            ['Prelúdios (vários)', 'Peças curtas, algumas bem acessíveis', 'Agora: experimente os mais curtos'],
            ['Lágrima', 'Pequena peça em Mi maior; um clássico absoluto', 'Nível 4'],
            ['Adelita', 'Mazurca curta', 'Nível 4'],
            ['Marieta', 'Mazurca', 'Nível 4'],
            ['Capricho Árabe', 'Peça de concerto', 'Nível 5'],
            ['Recuerdos de la Alhambra', 'Tremolo; a peça mais famosa do violão', 'Nível 5 ou 6']
          ],
          legenda: 'Tárrega morreu em 1909: obra em domínio público.'
        },
        {
          t: 'dica', x: '*Lágrima* é o portal de entrada em Tárrega. Tecnicamente é acessível, musicalmente é profunda, e cabe inteira dentro do que você já sabe. Quando o Nível 4 chegar, comece por ela.'
        },
        { t: 'ir', rota: 'tecnicas/timbre', titulo: 'Técnica: controle de timbre', x: 'A ferramenta central para tocar Tárrega.' },
        {
          t: 'erros', itens: [
            { erro: 'Tocar Tárrega como exercício.', certo: 'Aqui a técnica é pressuposta. O trabalho é de som e expressão.' },
            { erro: 'A peça inteira no mesmo timbre.', certo: 'Mude o ponto de ataque entre as seções: é marca registrada dele.' },
            { erro: 'Rubato exagerado.', certo: 'Pequenas elasticidades, não paradas. O pulso continua existindo por baixo.' },
            { erro: 'Começar por Recuerdos de la Alhambra.', certo: 'O tremolo exige anos. Comece por Lágrima.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tárrega (1852–1909) sistematizou a postura e a técnica do violão moderno.',
            'Explorou o timbre e transcreveu grandes obras para o instrumento.',
            'O foco da música dele é som, cor e fraseado, não dificuldade técnica.',
            'Comece pelos prelúdios curtos; depois Lágrima. Tudo em domínio público.'
          ]
        },
        {
          t: 'check', chave: 'tarrega', titulo: 'Conheça o som de Tárrega',
          itens: [
            'Ouvi uma gravação de Lágrima e uma de Recuerdos de la Alhambra.',
            'Toquei os primeiros compassos de Lágrima devagar, com a melodia cantando acima do baixo.',
            'Identifiquei, numa gravação, um trecho em que o intérprete usa rubato.',
            'Toquei a mesma frase com dois timbres diferentes (mais perto do cavalete e mais perto da boca).'
          ]
        },
      ],
      quiz: [
        { texto: 'Qual foi a principal contribuição de Tárrega?', opcoes: ['Sistematizou a postura e a técnica do violão moderno', 'Inventou o violão', 'Criou a tablatura', 'Escreveu o primeiro método'], correta: 0, explicacao: 'Quase tudo o que se ensina hoje passa por ele.' },
        { texto: 'Qual é a peça mais famosa de Tárrega?', opcoes: ['Recuerdos de la Alhambra', 'Lágrima', 'Adelita', 'Capricho Árabe'], correta: 0, explicacao: 'É a peça do tremolo, para um nível bem avançado.' },
        { texto: 'Por qual peça de Tárrega começar?', opcoes: ['Lágrima', 'Recuerdos de la Alhambra', 'Capricho Árabe', 'Grande Jota'], correta: 0, explicacao: 'Tecnicamente acessível e musicalmente profunda.' },
        { texto: 'Qual é o foco da música de Tárrega?', opcoes: ['Som, cor e fraseado', 'Velocidade', 'Pestana', 'Leitura'], correta: 0, explicacao: 'A técnica é pressuposta.' },
        { texto: 'Por que Tárrega publicou pouco em vida?', opcoes: ['Seu ensino era principalmente oral', 'Morreu muito jovem', 'Não escrevia partituras', 'Não tinha editor'], correta: 0, explicacao: 'Muito do que sabemos vem de alunos como Pujol e Llobet.' },
        { texto: 'Qual luthier Tárrega ajudou a popularizar?', opcoes: ['Antonio de Torres', 'Stradivari', 'Ramírez', 'Fleta'], correta: 0, explicacao: 'O violão de Torres virou o padrão moderno.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o prelúdio com a melodia cantando acima do acompanhamento.',
          'Faço duas cores de timbre distintas entre as seções.',
          'Faço crescendo na subida da melodia e diminuendo no fim.',
          'Uso um pequeno rubato no ponto mais alto, sem perder o pulso.'
        ],
        criterio: 'Você domina quando a peça soa como música expressiva, e não como um exercício bem executado.'
      }
    }
  ]
};
