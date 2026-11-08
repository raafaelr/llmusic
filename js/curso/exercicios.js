// Central de Exercícios do LLMusic.
//
// Cada exercício traz: nome, explicação, instruções, digitação, notação quando
// aplicável, velocidade recomendada, uso de metrônomo, objetivo técnico e
// critério de execução correta.
//
// Os filtros da tela usam os campos tipo, nivel, disciplinas, tecnicas,
// dificuldade, minutos e objetivo.

export const TIPOS = [
  { id: 'escalas', nome: 'Escalas' },
  { id: 'arpejos', nome: 'Arpejos' },
  { id: 'cromatismos', nome: 'Cromatismos' },
  { id: 'coordenacao', nome: 'Coordenação' },
  { id: 'independencia', nome: 'Independência dos dedos' },
  { id: 'leitura', nome: 'Leitura' },
  { id: 'ritmo', nome: 'Ritmo' },
  { id: 'solfejo', nome: 'Solfejo' },
  { id: 'percepcao', nome: 'Percepção auditiva' },
  { id: 'harmonia', nome: 'Harmonia' },
  { id: 'memorizacao', nome: 'Memorização' }
];

const tab = (compassos, legenda, bpm) => ({ t: 'tab', compassos, legenda, tocar: true, bpm });
const seq = (n) => ({ pos: [n], fig: 'seminima' });

export const EXERCICIOS = [

  // ---------------------------------------------------------------- escalas
  {
    id: 'e-do-1oit', nome: 'Dó maior em uma oitava', tipo: 'escalas', nivel: 2,
    disciplinas: ['tecnica', 'teoria'], tecnicas: ['escalas', 'apoyando'], dificuldade: 'básica', minutos: 5,
    objetivo: 'Fixar a digitação da escala de Dó maior na primeira posição e treinar o apoyando.',
    explicacao: 'A escala mais básica do violão: oito notas, da 5ª corda casa 3 até a 2ª corda casa 1. Toda a melodia do repertório inicial está dentro dela.',
    instrucoes: [
      'Toque com apoyando, alternando i e m.',
      'Suba e desça sem parar entre os dois sentidos.',
      'Diga o nome de cada nota em voz alta.',
      'Procure volume igual nas oito notas.'
    ],
    digitacao: 'Mão esquerda: 3 · 0 2 3 · 0 2 · 0 1. Mão direita: i m alternados.',
    bpm: { inicial: 60, meta: 100 }, metronomo: true,
    criterio: 'Subo e desço a 100 BPM, uma nota por clique, com volume parelho e sem nota suja.',
    blocos: [
      { t: 'braco', casas: 5, notas: [
        { corda: 5, casa: 3, rotulo: '1', classe: 'raiz' }, { corda: 4, casa: 0, rotulo: '2' }, { corda: 4, casa: 2, rotulo: '3' }, { corda: 4, casa: 3, rotulo: '4' },
        { corda: 3, casa: 0, rotulo: '5' }, { corda: 3, casa: 2, rotulo: '6' }, { corda: 2, casa: 0, rotulo: '7' }, { corda: 2, casa: 1, rotulo: '8', classe: 'raiz' }
      ], tocar: true, bpm: 96, legenda: 'Dó maior, primeira posição.' },
      tab([
        { notas: [{ pos: [[5, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 3]], fig: 'seminima', dedo: 'm' }] },
        { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }] },
        { notas: [{ pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 3]], fig: 'seminima', dedo: 'm' }] },
        { notas: [{ pos: [[4, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[5, 3]], fig: 'minima', dedo: 'i' }] }
      ], 'Subindo e descendo, com dedilhado.', 84),
      { t: 'tocar', titulo: 'Confira no violão', seq: [{ corda: 5, casa: 3 }, { corda: 4, casa: 0 }, { corda: 4, casa: 2 }, { corda: 4, casa: 3 }, { corda: 3, casa: 0 }, { corda: 3, casa: 2 }, { corda: 2, casa: 0 }, { corda: 2, casa: 1 }], rotulo: 'Tocar a escala subindo' },
      { t: 'metronomo', bpm: 60, compasso: '4/4', x: 'Uma nota por clique. Meta: 100 BPM.' }
    ]
  },
  {
    id: 'e-sol-1oit', nome: 'Sol maior em uma oitava', tipo: 'escalas', nivel: 2,
    disciplinas: ['tecnica', 'teoria'], tecnicas: ['escalas'], dificuldade: 'básica', minutos: 5,
    objetivo: 'Fixar Sol maior e o uso do dedo 4 na casa 4.',
    explicacao: 'A primeira escala com alteração: o Fá♯ aparece na 4ª corda, casa 4, tocado com o mindinho. É também a escala de boa parte do repertório inicial.',
    instrucoes: ['Diga em voz alta "tem Fá sustenido" antes de começar.', 'Apoyando, alternando i e m.', 'Suba e desça.', 'Cuide para o dedo 4 não ficar fraco.'],
    digitacao: 'Mão esquerda: 3 · 0 2 3 · 0 2 4 · 0.',
    bpm: { inicial: 60, meta: 100 }, metronomo: true,
    criterio: 'Toco a 100 BPM com o Fá♯ soando tão limpo quanto as outras notas.',
    blocos: [
      { t: 'braco', casas: 5, notas: [
        { corda: 6, casa: 3, rotulo: '1', classe: 'raiz' }, { corda: 5, casa: 0, rotulo: '2' }, { corda: 5, casa: 2, rotulo: '3' }, { corda: 5, casa: 3, rotulo: '4' },
        { corda: 4, casa: 0, rotulo: '5' }, { corda: 4, casa: 2, rotulo: '6' }, { corda: 4, casa: 4, rotulo: '7' }, { corda: 3, casa: 0, rotulo: '8', classe: 'raiz' }
      ], tocar: true, bpm: 96, legenda: 'Sol maior. O 7º grau (Fá♯) é o dedo 4 na casa 4.' },
      { t: 'pauta', txt: 'g3 a3 b3 c4 | d4 e4 f4 g4', armadura: 1, formula: [4, 4], nomes: true, tocar: true, bpm: 84 },
      { t: 'metronomo', bpm: 60, compasso: '4/4' }
    ]
  },
  {
    id: 'e-la-menor', nome: 'Lá menor natural', tipo: 'escalas', nivel: 2,
    disciplinas: ['tecnica', 'teoria'], tecnicas: ['escalas'], dificuldade: 'básica', minutos: 5,
    objetivo: 'Conhecer o som e a digitação da escala menor natural.',
    explicacao: 'Lá menor usa exatamente as mesmas notas de Dó maior, mas começa no Lá. Essa diferença de ponto de partida muda tudo no caráter: o som fica mais sério, mais melancólico.',
    instrucoes: ['Toque Dó maior e depois Lá menor, uma seguida da outra, e ouça a diferença.', 'Apoyando, i–m.', 'Suba e desça.'],
    digitacao: 'Mão esquerda: 0 · 2 3 · 0 2 3 · 0 1 (começando na 5ª corda solta).',
    bpm: { inicial: 60, meta: 96 }, metronomo: true,
    criterio: 'Toco as duas escalas seguidas e percebo a diferença de caráter.',
    blocos: [
      { t: 'braco', casas: 5, notas: [
        { corda: 5, casa: 0, rotulo: '1', classe: 'raiz' }, { corda: 5, casa: 2, rotulo: '2' }, { corda: 5, casa: 3, rotulo: '3' },
        { corda: 4, casa: 0, rotulo: '4' }, { corda: 4, casa: 2, rotulo: '5' }, { corda: 4, casa: 3, rotulo: '6' },
        { corda: 3, casa: 0, rotulo: '7' }, { corda: 3, casa: 2, rotulo: '8', classe: 'raiz' }
      ], tocar: true, bpm: 96, legenda: 'Lá menor natural, primeira posição.' },
      { t: 'metronomo', bpm: 60, compasso: '4/4' }
    ]
  },

  // ---------------------------------------------------------------- arpejos
  {
    id: 'a-pima', nome: 'Arpejo p-i-m-a em cordas soltas', tipo: 'arpejos', nivel: 1,
    disciplinas: ['tecnica'], tecnicas: ['arpejos', 'tirando'], dificuldade: 'básica', minutos: 4,
    objetivo: 'Construir a regularidade da mão direita sem a interferência da mão esquerda.',
    explicacao: 'O padrão de arpejo mais usado do violão, praticado em cordas soltas para que toda a atenção fique na mão direita.',
    instrucoes: [
      'Mão esquerda parada, sem tocar em nada.',
      'Toque p (5ª), i (3ª), m (2ª), a (1ª).',
      'Prepare cada dedo na corda enquanto a nota anterior soa.',
      'No fim do padrão, as quatro notas devem estar soando juntas.'
    ],
    digitacao: 'p na 5ª ou 6ª corda; i na 3ª; m na 2ª; a na 1ª. Sempre tirando.',
    bpm: { inicial: 60, meta: 120 }, metronomo: true,
    criterio: 'As quatro notas saem com o mesmo volume e espaçamento exato a 120 BPM.',
    blocos: [
      tab([{ notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] }], 'Duas repetições do padrão.', 90),
      { t: 'metronomo', bpm: 60, compasso: '4/4', x: 'Duas notas por clique.' }
    ]
  },
  {
    id: 'a-cinco', nome: 'Os cinco padrões de arpejo', tipo: 'arpejos', nivel: 2,
    disciplinas: ['tecnica'], tecnicas: ['arpejos'], dificuldade: 'intermediária', minutos: 10,
    objetivo: 'Dominar o vocabulário básico de mão direita que cobre a maior parte do repertório.',
    explicacao: 'Cinco padrões que, combinados, resolvem quase todo acompanhamento de violão. Treine um por dia e depois os cinco seguidos.',
    instrucoes: [
      'p-i-m-a (subindo, 4 notas).',
      'p-a-m-i (descendo, 4 notas).',
      'p-i-m-a-m-i (sobe e desce, 6 notas, para 3/4).',
      'p-i-p-m-p-a (baixo entre as agudas, 6 notas).',
      'Baixo alternado: p(6ª) i m a p(4ª) i m a (8 notas).'
    ],
    digitacao: 'Sempre tirando. Acorde de Am ou cordas soltas.',
    bpm: { inicial: 60, meta: 112 }, metronomo: true,
    criterio: 'Toco os cinco seguidos, sem parar entre eles, com regularidade.',
    blocos: [
      tab([{ notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }] }], 'p-i-m-a seguido de p-a-m-i.', 90),
      tab([{ notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] }], 'p-i-p-m-p-a: o baixo aparece entre cada aguda.', 96),
      { t: 'metronomo', bpm: 60, compasso: '4/4' }
    ]
  },
  {
    id: 'a-trocas', nome: 'Arpejo com troca de acorde', tipo: 'arpejos', nivel: 2,
    disciplinas: ['tecnica'], tecnicas: ['arpejos'], dificuldade: 'intermediária', minutos: 8,
    objetivo: 'Manter o arpejo regular enquanto a mão esquerda troca de posição.',
    explicacao: 'O ponto em que quase todo iniciante trava: o arpejo para na hora da troca. A solução é treinar a troca separada da mão direita.',
    instrucoes: [
      'Primeiro, treine só a troca: monte Am, conte 4 tempos, monte Dm. Vinte vezes, sem tocar.',
      'Depois junte o arpejo p-i-m-a.',
      'A mão esquerda muda durante a última nota do compasso anterior.',
      'Se o arpejo parar, volte a treinar só a troca.'
    ],
    digitacao: 'Am (×02210) → Dm (××0231) → E (022100) → Am.',
    bpm: { inicial: 54, meta: 96 }, metronomo: true,
    criterio: 'Toco os quatro compassos sem nenhuma interrupção no arpejo.',
    blocos: [
      { t: 'acorde', lista: [
        { nome: 'Am', cordas: [-1, 0, 2, 2, 1, 0], dedos: [0, 0, 2, 3, 1, 0] },
        { nome: 'Dm', cordas: [-1, -1, 0, 2, 3, 1], dedos: [0, 0, 0, 2, 3, 1] },
        { nome: 'E', cordas: [0, 2, 2, 1, 0, 0], dedos: [0, 2, 3, 1, 0, 0] }
      ] },
      tab([
        { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am' },
        { notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }], acorde: 'Dm' }
      ], 'Am para Dm sem interromper o arpejo.', 76),
      { t: 'metronomo', bpm: 54, compasso: '4/4' }
    ]
  },

  // ---------------------------------------------------------------- cromatismos
  {
    id: 'c-1234', nome: 'Cromático 1-2-3-4', tipo: 'cromatismos', nivel: 1,
    disciplinas: ['tecnica'], tecnicas: ['cromaticas', 'independencia'], dificuldade: 'básica', minutos: 5,
    objetivo: 'Independência, força e precisão dos quatro dedos da mão esquerda.',
    explicacao: 'O exercício mais eficiente que existe para a mão esquerda. Um dedo por casa, nenhum dedo de fora, nenhum atalho possível.',
    instrucoes: [
      'Dedo 1 na casa 1, 2 na casa 2, 3 na casa 3, 4 na casa 4.',
      'Não levante o dedo anterior: deixe-o apoiado.',
      'Alterne i e m na mão direita.',
      'Suba pelas seis cordas e desça.'
    ],
    digitacao: 'Esquerda: 1 2 3 4. Direita: i m i m.',
    bpm: { inicial: 54, meta: 96 }, metronomo: true,
    criterio: 'As quatro notas saem limpas nas seis cordas a 96 BPM, com a mão parada.',
    blocos: [
      tab([
        { notas: [{ pos: [[6, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[6, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 4]], fig: 'seminima', dedo: 'm' }] },
        { notas: [{ pos: [[5, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[5, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 4]], fig: 'seminima', dedo: 'm' }] },
        { notas: [{ pos: [[4, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 4]], fig: 'seminima', dedo: 'm' }] }
      ], 'Cordas 6, 5 e 4. Continue nas cordas 3, 2 e 1.', 72),
      { t: 'tocar', titulo: 'Confira', seq: [{ corda: 6, casa: 1 }, { corda: 6, casa: 2 }, { corda: 6, casa: 3 }, { corda: 6, casa: 4 }], rotulo: 'Cromático na 6ª corda' },
      { t: 'metronomo', bpm: 54, compasso: '4/4' }
    ]
  },
  {
    id: 'c-permuta', nome: 'Permutações cromáticas', tipo: 'cromatismos', nivel: 3,
    disciplinas: ['tecnica'], tecnicas: ['cromaticas', 'independencia'], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Independência entre pares de dedos que normalmente se movem juntos.',
    explicacao: 'O cromático na ordem 1-2-3-4 é confortável. As permutações forçam combinações que não aparecem naturalmente, e é aí que a independência cresce.',
    instrucoes: [
      'Uma permutação por semana. Não tente todas de uma vez.',
      'Ordem sugerida: 4-3-2-1, 1-3-2-4, 2-4-1-3, 1-4-2-3, 3-1-4-2.',
      'Mantenha a regra: não levante o dedo anterior sem necessidade.',
      'Pare se sentir dor.'
    ],
    digitacao: 'Varia por permutação. Direita: i m alternados sempre.',
    bpm: { inicial: 50, meta: 80 }, metronomo: true,
    criterio: 'Toco pelo menos três permutações diferentes com som limpo a 80 BPM.',
    blocos: [
      { t: 'tabela', cab: ['Ordem', 'O que treina'], linhas: [
        ['4-3-2-1', 'Descida: mais difícil do que parece'],
        ['1-3-2-4', 'Cruzamento, independência do 3'],
        ['2-4-1-3', 'Saltos, independência do 4'],
        ['1-4-2-3', 'Abertura entre 1 e 4'],
        ['3-1-4-2', 'A mais difícil de todas']
      ] },
      { t: 'metronomo', bpm: 50, compasso: '4/4' }
    ]
  },

  // ---------------------------------------------------------------- coordenação
  {
    id: 'co-sincronia', nome: 'Sincronia das duas mãos', tipo: 'coordenacao', nivel: 1,
    disciplinas: ['tecnica'], tecnicas: ['cromaticas'], dificuldade: 'básica', minutos: 5,
    objetivo: 'Garantir que a mão esquerda chegue sempre antes da direita.',
    explicacao: 'O ruído mais comum do iniciante vem de a mão direita tocar antes de a esquerda terminar de apertar. Este exercício exagera a preparação até ela virar hábito.',
    instrucoes: [
      'Ponha o dedo na casa e espere um tempo inteiro antes de tocar.',
      'Toque. Espere a nota soar.',
      'Prepare o próximo dedo *durante* a nota que está soando.',
      'Vá reduzindo o tempo de preparo até ele virar instantâneo.'
    ],
    digitacao: 'Esquerda: 1 2 3 4 na 1ª corda. Direita: i m alternados.',
    bpm: { inicial: 50, meta: 90 }, metronomo: true,
    criterio: 'Nenhuma nota sai arranhada ou abafada por falta de preparo.',
    blocos: [
      tab([{ notas: [{ pos: [[1, 1]], fig: 'minima', dedo: 'i' }, { pos: [[1, 2]], fig: 'minima', dedo: 'm' }] },
        { notas: [{ pos: [[1, 3]], fig: 'minima', dedo: 'i' }, { pos: [[1, 4]], fig: 'minima', dedo: 'm' }] }], 'Notas longas dão tempo de sobra para preparar. Use esse tempo.', 60),
      { t: 'metronomo', bpm: 50, compasso: '4/4' }
    ]
  },
  {
    id: 'co-cordas', nome: 'Cruzamento de cordas', tipo: 'coordenacao', nivel: 2,
    disciplinas: ['tecnica'], tecnicas: ['apoyando', 'tirando'], dificuldade: 'intermediária', minutos: 5,
    objetivo: 'Manter a alternância i–m quando a melodia muda de corda.',
    explicacao: 'Alternar i e m numa corda só é fácil. O problema aparece quando a melodia pula de corda: a tentação é repetir o dedo. Este exercício proíbe isso.',
    instrucoes: ['Alterne i e m sem exceção, mesmo mudando de corda.', 'Comece bem devagar.', 'Se repetir o dedo, pare e recomece.'],
    digitacao: 'Direita: i m i m, sem exceção.',
    bpm: { inicial: 54, meta: 96 }, metronomo: true,
    criterio: 'Toco o padrão inteiro sem repetir dedo uma vez sequer.',
    blocos: [
      tab([{ notas: [{ pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }] }], 'A corda muda; a alternância não.', 76),
      { t: 'metronomo', bpm: 54, compasso: '4/4' }
    ]
  },

  // ---------------------------------------------------------------- independência
  {
    id: 'i-dedos-presos', nome: 'Dedos presos', tipo: 'independencia', nivel: 3,
    disciplinas: ['tecnica'], tecnicas: ['independencia'], dificuldade: 'avançada', minutos: 2,
    objetivo: 'Mover um dedo da mão esquerda mantendo os outros três apertados.',
    explicacao: 'Não produz música nenhuma: produz mão. É o exercício mais direto de independência que existe, e também o que mais cansa.',
    instrucoes: [
      'Ponha os quatro dedos na 1ª corda, casas 1, 2, 3 e 4, todos apertando.',
      'Levante só o dedo 3, mantendo os outros. Abaixe.',
      'Levante só o 2. Abaixe. Só o 4. Abaixe.',
      'Dez vezes cada dedo.'
    ],
    digitacao: 'Quatro dedos na mesma corda, casas 1 a 4.',
    bpm: null, metronomo: false,
    criterio: 'Consigo levantar cada dedo sozinho sem que os outros se mexam.',
    blocos: [
      { t: 'aviso', x: 'Máximo de 2 minutos por dia. Pare imediatamente se sentir qualquer dor. Este é o exercício em que mais gente se machuca.' },
      { t: 'braco', casas: 5, notas: [
        { corda: 1, casa: 1, rotulo: '1' }, { corda: 1, casa: 2, rotulo: '2' }, { corda: 1, casa: 3, rotulo: '3', classe: 'raiz' }, { corda: 1, casa: 4, rotulo: '4' }
      ], legenda: 'Os quatro dedos apertando ao mesmo tempo. Levante só o destacado.' }
    ]
  },
  {
    id: 'i-polegar', nome: 'Independência do polegar', tipo: 'independencia', nivel: 2,
    disciplinas: ['tecnica'], tecnicas: ['arpejos'], dificuldade: 'intermediária', minutos: 5,
    objetivo: 'Fazer o polegar trabalhar sem arrastar os outros dedos junto.',
    explicacao: 'O polegar é forte e tende a puxar a mão inteira. Aqui ele toca um ritmo diferente dos outros dedos, o que obriga a separação.',
    instrucoes: [
      'O polegar toca semínimas (uma por tempo) na 5ª corda.',
      'Os dedos i e m tocam colcheias (duas por tempo) nas cordas 3 e 2.',
      'Comece muito devagar até os dois ritmos coexistirem.',
      'A mão não pode balançar.'
    ],
    digitacao: 'p na 5ª; i na 3ª; m na 2ª.',
    bpm: { inicial: 48, meta: 84 }, metronomo: true,
    criterio: 'O polegar mantém o pulso enquanto os dedos fazem o dobro, sem a mão balançar.',
    blocos: [
      tab([{ notas: [{ pos: [[5, 0], [3, 0]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[5, 0], [3, 0]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[5, 0], [3, 0]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[5, 0], [3, 0]], fig: 'colcheia', dedo: 'p+i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }] }], 'O polegar cai no tempo; i e m preenchem.', 72),
      { t: 'metronomo', bpm: 48, compasso: '4/4' }
    ]
  },

  // ---------------------------------------------------------------- leitura
  {
    id: 'l-primeira-posicao', nome: 'Leitura na primeira posição', tipo: 'leitura', nivel: 2,
    disciplinas: ['leitura'], tecnicas: ['primeira-vista'], dificuldade: 'básica', minutos: 10,
    objetivo: 'Reconhecer e localizar qualquer nota natural da primeira posição.',
    explicacao: 'Exercício gerado pelo app: uma nota aparece na pauta e você diz o nome. Depois, toque-a no violão.',
    instrucoes: ['Responda em menos de 2 segundos.', 'Para cada nota, toque-a também no violão.', 'Faça 10 minutos por dia, todo dia.'],
    digitacao: 'As 17 notas naturais da primeira posição.',
    bpm: null, metronomo: false,
    criterio: 'Acerto 90% em menos de 2 segundos por nota.',
    blocos: [
      { t: 'exercicio', tipo: 'identificar-nota', titulo: 'Qual é esta nota?', rodadas: 15, notas: ['e3', 'f3', 'g3', 'a3', 'b3', 'c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5', 'f5', 'g5'] },
      { t: 'ir', rota: 'leitura', titulo: 'Abrir a tela de Leitura', x: 'Lá os exercícios são infinitos e tem opção de responder pelo microfone.' }
    ]
  },
  {
    id: 'l-primeira-vista', nome: 'Primeira vista diária', tipo: 'leitura', nivel: 3,
    disciplinas: ['leitura'], tecnicas: ['primeira-vista'], dificuldade: 'intermediária', minutos: 10,
    objetivo: 'Tocar material novo no tempo, sem parar.',
    explicacao: 'A habilidade que mais acelera o aprendizado de repertório. Precisa de material novo todo dia e material bem abaixo do seu nível técnico.',
    instrucoes: [
      'Escolha uma peça que você nunca tocou, fácil.',
      'Analise 30 segundos: armadura, fórmula, andamento, trechos difíceis.',
      'Escolha o andamento pelo trecho mais difícil.',
      'Toque sem parar, do começo ao fim. Errar é permitido; parar não.',
      'No dia seguinte, outra peça.'
    ],
    digitacao: 'Varia com o material.',
    bpm: null, metronomo: true,
    criterio: 'Toco uma peça nova inteira sem parar, mantendo o tempo.',
    blocos: [
      { t: 'ir', rota: 'partituras', titulo: 'Abrir Partituras', x: 'Escolha uma peça que você nunca tocou.' },
      { t: 'ir', rota: 'importar', titulo: 'Importar uma partitura', x: 'Material novo em PDF, Guitar Pro ou MusicXML.' }
    ]
  },

  // ---------------------------------------------------------------- ritmo
  {
    id: 'r-seis-padroes', nome: 'Os seis padrões rítmicos', tipo: 'ritmo', nivel: 1,
    disciplinas: ['teoria'], tecnicas: [], dificuldade: 'básica', minutos: 8,
    objetivo: 'Executar com precisão as combinações rítmicas mais comuns.',
    explicacao: 'Ritmo se treina melhor separado das notas. Use uma corda solta: toda a atenção vai para o tempo.',
    instrucoes: [
      'Conte um compasso vazio antes de começar.',
      'Conte em voz alta o tempo inteiro.',
      'Toque cada padrão quatro vezes seguidas e passe ao próximo.',
      'Use sempre a mesma corda solta.'
    ],
    digitacao: '1ª corda solta, i e m alternados.',
    bpm: { inicial: 60, meta: 96 }, metronomo: true,
    criterio: 'Toco os seis padrões seguidos a 96 BPM sem perder o tempo.',
    blocos: [
      { t: 'pauta', txt: 'e5 e5 e5 e5', formula: [4, 4], tocar: true, bpm: 80, legenda: '1. Semínimas: "um, dois, três, quatro".' },
      { t: 'pauta', txt: 'e5/b e5/b', formula: [4, 4], tocar: true, bpm: 80, legenda: '2. Mínimas: toque no 1 e no 3.' },
      { t: 'pauta', txt: 'e5/c e5/c e5/c e5/c e5/c e5/c e5/c e5/c', formula: [4, 4], tocar: true, bpm: 80, legenda: '3. Colcheias: "um e, dois e...".' },
      { t: 'pauta', txt: 'e5/b e5/c e5/c e5', formula: [4, 4], tocar: true, bpm: 80, legenda: '4. Misturado.' },
      { t: 'pauta', txt: 'e5 z/q e5 z/q', formula: [4, 4], tocar: true, bpm: 80, legenda: '5. Com pausas: abafe a corda.' },
      { t: 'pauta', txt: 'e5/q. e5/c e5/b', formula: [4, 4], tocar: true, bpm: 80, legenda: '6. Semínima pontuada + colcheia.' },
      { t: 'metronomo', bpm: 60, compasso: '4/4' }
    ]
  },
  {
    id: 'r-subdivisao', nome: 'Subdivisões dentro de um tempo', tipo: 'ritmo', nivel: 2,
    disciplinas: ['teoria'], tecnicas: [], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Encaixar com precisão duas, três e quatro notas dentro de um mesmo tempo.',
    explicacao: 'Todas as combinações duram a mesma coisa: um tempo. O que muda é quantas notas cabem.',
    instrucoes: ['Comece com 1 nota por clique.', 'Depois 2 (colcheias), depois 4 (semicolcheias).', 'Volte para 1 e repita a escada.', 'Fale as sílabas antes de tocar.'],
    digitacao: '1ª corda solta. Direita: i m alternados.',
    bpm: { inicial: 50, meta: 80 }, metronomo: true,
    criterio: 'As quatro semicolcheias saem exatamente iguais entre si.',
    blocos: [
      { t: 'pauta', txt: 'e5 | e5/c e5/c | e5/s e5/s e5/s e5/s | e5/b', formula: [4, 4], tocar: true, bpm: 60, legenda: 'Uma, duas e quatro notas no mesmo tempo.' },
      { t: 'metronomo', bpm: 50, compasso: '4/4' }
    ]
  },

  // ---------------------------------------------------------------- solfejo
  {
    id: 's-cantar-escala', nome: 'Cantar a escala', tipo: 'solfejo', nivel: 2,
    disciplinas: ['solfejo', 'percepcao'], tecnicas: [], dificuldade: 'básica', minutos: 5,
    objetivo: 'Ligar o que você vê ao que você ouve e ao que você canta.',
    explicacao: 'Solfejo é cantar dizendo o nome das notas. É o atalho mais rápido para afinar o ouvido e ler melhor — e não exige ter boa voz.',
    instrucoes: [
      'Toque a tônica no violão para se situar.',
      'Cante a escala subindo, dizendo "dó, ré, mi...".',
      'Cante descendo.',
      'Depois cante sem tocar antes, e confira a afinação no violão no fim.'
    ],
    digitacao: 'Qualquer escala conhecida. Comece com Dó maior.',
    bpm: { inicial: 60, meta: 80 }, metronomo: false,
    criterio: 'Canto a escala inteira e termino na mesma altura do começo, uma oitava acima.',
    blocos: [
      { t: 'pauta', txt: 'c4 d4 e4 f4 | g4 a4 b4 c5', formula: [4, 4], nomes: true, tocar: true, bpm: 70, legenda: 'Toque, depois cante junto, depois cante sozinho.' },
      { t: 'dica', x: 'Se a sua voz não alcança, cante uma oitava abaixo. O que importa é o intervalo, não a altura absoluta.' }
    ]
  },
  {
    id: 's-cantar-melodia', nome: 'Cantar antes de tocar', tipo: 'solfejo', nivel: 3,
    disciplinas: ['solfejo', 'leitura'], tecnicas: ['memorizacao'], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Ouvir a música na cabeça antes de os dedos a executarem.',
    explicacao: 'Quem canta a melodia antes de tocar erra muito menos, porque o ouvido já sabe o que esperar e avisa quando sai diferente.',
    instrucoes: [
      'Pegue uma peça que você está estudando.',
      'Cante a melodia inteira, dizendo os nomes das notas, sem o violão.',
      'Onde travar, é exatamente onde você não entendeu a música.',
      'Depois toque: você vai notar que fica mais fácil.'
    ],
    digitacao: 'Sem instrumento.',
    bpm: null, metronomo: false,
    criterio: 'Canto a melodia inteira de uma peça, com os nomes das notas, sem o violão.',
    blocos: [
      { t: 'p', x: 'Este exercício é feito sem o instrumento. Pode ser no ônibus, na fila, antes de dormir.' }
    ]
  },

  // ---------------------------------------------------------------- percepção
  {
    id: 'p-subiu-desceu', nome: 'Subiu ou desceu?', tipo: 'percepcao', nivel: 1,
    disciplinas: ['percepcao'], tecnicas: [], dificuldade: 'básica', minutos: 5,
    objetivo: 'Perceber a direção do movimento melódico.',
    explicacao: 'O primeiro passo da percepção musical. Parece óbvio, mas em intervalos pequenos e rápidos muita gente erra.',
    instrucoes: ['O app toca duas notas.', 'Diga se a segunda subiu ou desceu.', 'Acerte 8 de 10 antes de avançar.'],
    digitacao: 'Sem instrumento.',
    bpm: null, metronomo: false,
    criterio: 'Acerto pelo menos 9 de 10.',
    blocos: [{ t: 'exercicio', tipo: 'ouvido', titulo: 'Subiu ou desceu?', rodadas: 10, saltos: [1, 2, 3, 4, 5, 7] }]
  },
  {
    id: 'p-intervalos', nome: 'Reconhecer intervalos', tipo: 'percepcao', nivel: 3,
    disciplinas: ['percepcao', 'teoria'], tecnicas: [], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Identificar de ouvido os intervalos mais comuns.',
    explicacao: 'O método que funciona é associar cada intervalo ao começo de uma música que você conhece muito bem.',
    instrucoes: [
      'Escolha uma música sua para cada intervalo.',
      'Toque o intervalo no violão e cante junto.',
      'Depois peça para alguém tocar e tente identificar.',
      'Comece com três: 3ª maior, 5ª justa e oitava.'
    ],
    digitacao: 'Cordas soltas e primeira posição.',
    bpm: null, metronomo: false,
    criterio: 'Identifico 3ª maior, 3ª menor, 5ª justa e oitava de ouvido.',
    blocos: [
      { t: 'ouvir', titulo: 'Terça maior', notas: [60, 64], fig: 'minima', bpm: 60 },
      { t: 'ouvir', titulo: 'Terça menor', notas: [60, 63], fig: 'minima', bpm: 60 },
      { t: 'ouvir', titulo: 'Quinta justa', notas: [60, 67], fig: 'minima', bpm: 60 },
      { t: 'ouvir', titulo: 'Oitava', notas: [60, 72], fig: 'minima', bpm: 60 },
      { t: 'exercicio', tipo: 'ouvido', titulo: 'Treino', rodadas: 10, saltos: [3, 4, 7, 12] }
    ]
  },

  // ---------------------------------------------------------------- harmonia
  {
    id: 'h-triades', nome: 'Montar tríades', tipo: 'harmonia', nivel: 3,
    disciplinas: ['harmonia', 'teoria'], tecnicas: [], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Construir qualquer acorde maior ou menor a partir dos intervalos.',
    explicacao: 'Acorde maior = tônica + 3ª maior (4 semitons) + 5ª justa (7 semitons). Menor = tônica + 3ª menor (3 semitons) + 5ª justa. Só isso.',
    instrucoes: [
      'Escolha uma nota qualquer.',
      'Conte 4 semitons: essa é a terça maior.',
      'Conte mais 3 semitons: essa é a quinta justa.',
      'Diga as três notas em voz alta.',
      'Para o menor, baixe a terça um semitom.'
    ],
    digitacao: 'Conta mental; depois confira no braço.',
    bpm: null, metronomo: false,
    criterio: 'Monto qualquer tríade maior ou menor de cabeça, em menos de 10 segundos.',
    blocos: [
      { t: 'regua', de: 0, ate: 7, nomes: ['Dó', '', 'Ré', '', 'Mi', 'Fá', '', 'Sol', '', 'Lá', '', 'Si', 'Dó'], legenda: 'Dó maior: Dó (0), Mi (4) e Sol (7).' },
      { t: 'exercicio', tipo: 'perguntas', titulo: 'Fixação', rodadas: 6, perguntas: [
        { texto: 'Quais notas formam Dó maior?', opcoes: ['Dó, Mi, Sol', 'Dó, Mi♭, Sol', 'Dó, Fá, Sol', 'Dó, Ré, Mi'], correta: 0, explicacao: 'Tônica, 3ª maior (4 semitons) e 5ª justa (7).' },
        { texto: 'E Lá menor?', opcoes: ['Lá, Dó, Mi', 'Lá, Dó♯, Mi', 'Lá, Ré, Mi', 'Lá, Si, Dó'], correta: 0, explicacao: 'A terça menor fica 3 semitons acima.' },
        { texto: 'Quantos semitons tem a 3ª maior?', opcoes: ['4', '3', '5', '7'], correta: 0, explicacao: 'A menor tem 3.' },
        { texto: 'Quantos semitons tem a 5ª justa?', opcoes: ['7', '5', '6', '8'], correta: 0, explicacao: 'O intervalo mais estável.' },
        { texto: 'Quais notas formam Sol maior?', opcoes: ['Sol, Si, Ré', 'Sol, Si♭, Ré', 'Sol, Dó, Ré', 'Sol, Lá, Si'], correta: 0, explicacao: 'Sol + 4 semitons = Si; Si + 3 = Ré.' },
        { texto: 'O que diferencia um acorde maior de um menor?', opcoes: ['A terça: menor é um semitom mais baixa', 'A quinta', 'A tônica', 'A oitava'], correta: 0, explicacao: 'É a terça que dá a cor.' }
      ] }
    ]
  },
  {
    id: 'h-campo', nome: 'Campo harmônico maior', tipo: 'harmonia', nivel: 3,
    disciplinas: ['harmonia'], tecnicas: [], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Saber quais acordes pertencem a uma tonalidade.',
    explicacao: 'Montando uma tríade sobre cada grau da escala maior, usando só as notas dela, surgem os sete acordes do campo harmônico. O padrão de qualidade é sempre o mesmo.',
    instrucoes: ['Decore o padrão: I maior, ii menor, iii menor, IV maior, V maior, vi menor, vii diminuto.', 'Aplique em Dó: C, Dm, Em, F, G, Am, Bdim.', 'Depois em Sol e em Ré.'],
    digitacao: 'Acordes abertos da primeira posição.',
    bpm: null, metronomo: false,
    criterio: 'Digo os sete acordes de qualquer tonalidade maior em menos de 20 segundos.',
    blocos: [
      { t: 'tabela', cab: ['Grau', 'Qualidade', 'Em Dó', 'Em Sol'], linhas: [
        ['I', 'maior', 'C', 'G'], ['ii', 'menor', 'Dm', 'Am'], ['iii', 'menor', 'Em', 'Bm'],
        ['IV', 'maior', 'F', 'C'], ['V', 'maior', 'G', 'D'], ['vi', 'menor', 'Am', 'Em'], ['vii°', 'diminuto', 'Bdim', 'F♯dim']
      ] },
      { t: 'ir', rota: 'teoria', titulo: 'Abrir Teoria', x: 'A lição de campo harmônico tem quiz e braço interativo.' }
    ]
  },

  // ---------------------------------------------------------------- memorização
  {
    id: 'm-pontos-partida', nome: 'Pontos de partida', tipo: 'memorizacao', nivel: 3,
    disciplinas: ['interpretacao'], tecnicas: ['memorizacao'], dificuldade: 'intermediária', minutos: 8,
    objetivo: 'Memorizar uma peça de forma segura, não só muscular.',
    explicacao: 'Memória muscular sozinha falha na primeira distração. Ter pontos de partida espalhados dá de onde recomeçar.',
    instrucoes: [
      'Escolha de 5 a 8 lugares da peça, espalhados.',
      'Treine começar de cada um deles, sem tocar o que vem antes.',
      'Faça em ordem aleatória.',
      'Teste num dia diferente, sem aquecer.'
    ],
    digitacao: 'Varia com a peça.',
    bpm: null, metronomo: false,
    criterio: 'Começo de 5 pontos diferentes da peça sem hesitar.',
    blocos: [
      { t: 'dica', x: 'O teste definitivo: consegue começar do compasso 17 sem tocar os 16 anteriores? Se não, a peça está memorizada só na memória muscular.' }
    ]
  },
  {
    id: 'm-mental', nome: 'Estudo mental', tipo: 'memorizacao', nivel: 4,
    disciplinas: ['interpretacao'], tecnicas: ['memorizacao'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Tocar a peça inteira na cabeça, sem o instrumento.',
    explicacao: 'Parece esotérico, mas é uma das ferramentas mais usadas por músicos profissionais. Quem consegue tocar uma peça mentalmente a conhece de verdade.',
    instrucoes: [
      'Sem o violão, feche os olhos.',
      'Imagine a peça do começo ao fim: o som, a partitura e o movimento das mãos.',
      'Onde a imagem ficar borrada, é onde a peça não está memorizada.',
      'Volte ao instrumento e trabalhe exatamente esses trechos.'
    ],
    digitacao: 'Sem instrumento.',
    bpm: null, metronomo: false,
    criterio: 'Percorro a peça inteira mentalmente sem lacunas.',
    blocos: [
      { t: 'p', x: 'Faça este exercício longe do violão. Cinco minutos de estudo mental valem mais que vinte de repetição distraída.' }
    ]
  }
];

export const exercicioPorId = (id) => EXERCICIOS.find((e) => e.id === id) || null;
export const DIFICULDADES_EX = ['básica', 'intermediária', 'avançada'];
export const FAIXAS_TEMPO = [
  { id: 'curto', nome: 'Até 5 min', teste: (e) => e.minutos <= 5 },
  { id: 'medio', nome: '6 a 10 min', teste: (e) => e.minutos > 5 && e.minutos <= 10 },
  { id: 'longo', nome: 'Mais de 10 min', teste: (e) => e.minutos > 10 }
];
