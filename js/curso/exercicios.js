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
    disciplinas: ['tecnica'], tecnicas: ['cromaticas'], dificuldade: 'básica', minutos: 5,
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
    disciplinas: ['tecnica'], tecnicas: ['cromaticas'], dificuldade: 'intermediária', minutos: 6,
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
    disciplinas: ['tecnica'], tecnicas: ['vozes'], dificuldade: 'avançada', minutos: 2,
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
  },

  // ============================================================
  // EXERCÍCIOS DOS NÍVEIS 4 A 8
  // ============================================================

  {
    id: 'e-tres-oitavas', nome: 'Escala em três oitavas', tipo: 'escalas', nivel: 5,
    disciplinas: ['tecnica'], tecnicas: ['escalas', 'mudanca'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Percorrer o braço inteiro numa escala, com mudanças de posição silenciosas e som uniforme.',
    explicacao: 'A escala de três oitavas sai da 6ª corda e chega ao agudo da 1ª, atravessando quatro ou cinco posições. O desafio não é a digitação: é fazer as mudanças de posição sem que elas apareçam no som.',
    instrucoes: [
      'Toque só as notas de mudança de posição: as duas que ficam em volta de cada deslocamento.',
      'Use dedo-guia em todas as mudanças: alivie a pressão e deslize sem perder o contato.',
      'Depois toque a escala inteira, duas notas por clique.',
      'Suba de 4 em 4 BPM, com um minuto perfeito como condição.',
      'Evite cordas soltas: elas quebram a uniformidade do timbre.'
    ],
    digitacao: 'Sol maior em três oitavas, começando na 6ª corda casa 3 (dedo 2). Mudanças na 4ª e na 2ª corda.',
    bpm: { inicial: 60, meta: 132 }, metronomo: true,
    criterio: 'Três oitavas subindo e descendo a 132 BPM, duas notas por clique, sem ouvir as mudanças de posição.',
    blocos: [
      { t: 'braco', casas: 12, notas: [
        { corda: 6, casa: 3, rotulo: '2', classe: 'raiz' }, { corda: 6, casa: 5, rotulo: '4' },
        { corda: 5, casa: 2, rotulo: '1' }, { corda: 5, casa: 3, rotulo: '2' }, { corda: 5, casa: 5, rotulo: '4' },
        { corda: 4, casa: 2, rotulo: '1' }, { corda: 4, casa: 4, rotulo: '3' }, { corda: 4, casa: 5, rotulo: '4' },
        { corda: 3, casa: 2, rotulo: '1' }, { corda: 3, casa: 4, rotulo: '3' },
        { corda: 2, casa: 3, rotulo: '1' }, { corda: 2, casa: 5, rotulo: '3' },
        { corda: 1, casa: 3, rotulo: '1' }, { corda: 1, casa: 5, rotulo: '3' }, { corda: 1, casa: 7, rotulo: '4' }
      ], tocar: true, bpm: 100, legenda: 'Sol maior subindo pelo braço. Os números são os dedos da mão esquerda.' },
      { t: 'tocar', titulo: 'Confira as notas de mudança', seq: [[5, 5], [4, 2], [3, 4], [2, 3]], rotulo: 'Conferir no microfone',
        x: 'Essas quatro notas ficam nos pontos de mudança de posição. Toque-as isoladamente antes da escala inteira.' },
      { t: 'metronomo', bpm: 60, compasso: '4/4', x: 'Duas notas por clique. Meta: 132 BPM.' }
    ]
  },

  {
    id: 'e-posicoes', nome: 'A mesma escala em cinco posições', tipo: 'escalas', nivel: 5,
    disciplinas: ['tecnica'], tecnicas: ['escalas'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Conhecer o braço inteiro tocando uma só escala em todas as regiões.',
    explicacao: 'Uma escala não mora num lugar só. Tocá-la em cinco posições diferentes é o que permite escolher, numa peça, a digitação que exige menos mudanças.',
    instrucoes: [
      'Toque a escala na posição mais grave possível, duas oitavas.',
      'Suba para a posição seguinte e repita, sem olhar o braço.',
      'Faça isso nas cinco formas, até perto da casa 12.',
      'Depois atravesse: suba numa posição e desça em outra.',
      'Por fim, toque a escala inteira numa corda só, da casa 0 à 12.'
    ],
    digitacao: 'Dó maior: 1ª posição (com soltas), 2ª, 5ª, 7ª e 9ª posições, sem soltas.',
    bpm: { inicial: 72, meta: 120 }, metronomo: true,
    criterio: 'Toco a escala em três posições diferentes de memória e explico qual eu usaria em cada contexto.',
    blocos: [
      { t: 'braco', casas: 12, notas: [
        { corda: 5, casa: 3, rotulo: '1', classe: 'raiz' }, { corda: 5, casa: 5, rotulo: '3' },
        { corda: 4, casa: 2, rotulo: '1' }, { corda: 4, casa: 3, rotulo: '2' }, { corda: 4, casa: 5, rotulo: '4' },
        { corda: 3, casa: 2, rotulo: '1' }, { corda: 3, casa: 4, rotulo: '3' }, { corda: 3, casa: 5, rotulo: '4' },
        { corda: 2, casa: 3, rotulo: '1' }, { corda: 2, casa: 5, rotulo: '3' }
      ], tocar: true, bpm: 96, legenda: 'Dó maior na 2ª posição, sem cordas soltas: timbre uniforme e vibrato disponível.' },
      { t: 'metronomo', bpm: 72, compasso: '4/4', x: 'Duas notas por clique em cada posição.' }
    ]
  },

  {
    id: 'a-alta-velocidade', nome: 'Arpejo em alta velocidade', tipo: 'arpejos', nivel: 5,
    disciplinas: ['tecnica'], tecnicas: ['arpejos'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Construir velocidade de mão direita por economia de movimento, não por esforço.',
    explicacao: 'Velocidade em arpejo vem de mover menos: preparação antecipada, amplitude mínima e relaxamento entre os ataques. Ritmos pontuados são o atalho mais eficiente.',
    instrucoes: [
      'p-i-m-a muito devagar, colocando o próximo dedo na corda antes de tocá-lo.',
      'Repita em ritmo pontuado: longa-curta, longa-curta.',
      'Inverta: curta-longa.',
      'Volte ao regular e suba 4 BPM.',
      'Faça o mesmo com a ordem invertida p-a-m-i, que é a que mais resiste à velocidade.',
      'Pare imediatamente se o antebraço endurecer.'
    ],
    digitacao: 'Mão direita p (5ª corda), i (3ª), m (2ª), a (1ª). Mão esquerda parada num acorde de Am.',
    bpm: { inicial: 72, meta: 132 }, metronomo: true,
    criterio: 'Quatro notas por clique a 132 BPM, com os quatro dedos iguais em volume numa gravação, sem tensão.',
    blocos: [
      tab([
        { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }] }
      ], 'Ritmo pontuado sobre Am: longa-curta. Depois inverta.', 84),
      tab([
        { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }] }
      ], 'Ordem invertida p-a-m-i: mais difícil e mais rendosa.', 96),
      { t: 'metronomo', bpm: 72, compasso: '4/4', x: 'Quatro notas por clique. Suba 4 BPM a cada minuto perfeito.' }
    ]
  },

  {
    id: 'a-tremolo', nome: 'Tremolo p-a-m-i', tipo: 'arpejos', nivel: 6,
    disciplinas: ['tecnica'], tecnicas: ['tremolo'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Produzir tremolo com os três ataques iguais em volume e espaçamento.',
    explicacao: 'O dedo a é o mais fraco e o primeiro depois do polegar: é ele que faz o tremolo soar manco. Todo o estudo gira em torno de igualar os três ataques — velocidade vem depois.',
    instrucoes: [
      'Dois minutos de a-m-i sem polegar, na 1ª corda solta, muito devagar.',
      'Um minuto de i-m-a invertido: expõe o que a ordem habitual esconde.',
      'Um minuto com acentos deslocados: acentue o a, depois o m, depois o i.',
      'Três minutos de p-a-m-i completo, com metrônomo.',
      'Grave trinta segundos e ouça de olhos fechados.'
    ],
    digitacao: 'p no baixo (5ª ou 4ª corda), a-m-i repetindo a mesma nota na 1ª corda.',
    bpm: { inicial: 50, meta: 112 }, metronomo: true,
    criterio: 'Um minuto contínuo a 112 BPM sem falha; numa gravação, não se distingue qual dedo tocou cada nota.',
    blocos: [
      tab([
        { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }] },
        { notas: [{ pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }] }
      ], 'A célula básica, com troca de baixo no segundo compasso.', 60),
      { t: 'metronomo', bpm: 50, compasso: '4/4', x: 'Quatro notas por clique. A igualdade importa mais que o número.' }
    ]
  },

  {
    id: 'a-rasgueado', nome: 'Rasgueado no tempo', tipo: 'arpejos', nivel: 6,
    disciplinas: ['tecnica'], tecnicas: ['dinamica'], dificuldade: 'intermediária', minutos: 8,
    objetivo: 'Executar rasgueado com som limpo e o último ataque caindo exatamente no tempo.',
    explicacao: 'O rasgueado termina no tempo, não começa nele. Os ataques acontecem um pouco antes, de modo que o último coincida com o pulso. O movimento nasce na junta da base de cada dedo, nunca no pulso.',
    instrucoes: [
      'Feche a mão suavemente, como se segurasse uma fruta pequena.',
      'Abra os dedos um a um, de dentro para fora: a, depois m, depois i.',
      'Faça o movimento lento e separado dez vezes, ouvindo cada ataque.',
      'Junte os três ataques num gesto só, com o último no clique.',
      'Acrescente o de quatro dedos: mínimo, a, m, i.'
    ],
    digitacao: 'Mão direita: polegar apoiado na 6ª corda; a, m e i abrindo em sequência.',
    bpm: { inicial: 72, meta: 120 }, metronomo: true,
    criterio: 'Trinta rasgueados seguidos a 120 BPM, com o último ataque no clique e sem endurecer o pulso.',
    blocos: [
      { t: 'acorde', legenda: 'Os dois acordes do exercício. O rasgueado expõe qualquer corda mal apertada.', lista: [
        { nome: 'Am', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
        { nome: 'E', cordas: [0, 2, 2, 1, 0, 0], dedos: [null, 2, 3, 1, null, null] }
      ] },
      { t: 'metronomo', bpm: 72, compasso: '3/4', x: 'Um rasgueado por tempo. O último ataque cai no clique.' }
    ]
  },

  {
    id: 'i-harmonicos', nome: 'Harmônicos naturais e artificiais', tipo: 'independencia', nivel: 5,
    disciplinas: ['tecnica'], tecnicas: ['harm-naturais', 'harm-artificiais'], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Produzir harmônicos com confiabilidade, sabendo de antemão que nota vai soar.',
    explicacao: 'O dedo encosta exatamente sobre o traste, sem apertar, e sai no mesmo instante do ataque. Casa 12 soa uma oitava acima; casa 7, oitava e quinta; casa 5, duas oitavas.',
    instrucoes: [
      'Harmônicos da casa 12 nas seis cordas, um por vez.',
      'Depois a casa 7, depois a casa 5.',
      'Ataque mais perto do cavalete: ali a corda é mais tensa e o harmônico responde melhor.',
      'Para o artificial: pise a nota, encoste o indicador da direita doze trastes acima e toque com o anelar.',
      'Se os harmônicos saírem abafados, confira a idade das cordas antes de culpar a técnica.'
    ],
    digitacao: 'Dedo da mão esquerda sobre o traste, sem pressão. Mão direita perto do cavalete.',
    bpm: null, metronomo: false,
    criterio: 'Dez harmônicos seguidos sem nenhuma falha, naturais e artificiais, sabendo a nota de cada um.',
    blocos: [
      { t: 'braco', casas: 12, notas: [
        { corda: 6, casa: 12, rotulo: '8ª', classe: 'raiz' }, { corda: 5, casa: 12, rotulo: '8ª', classe: 'raiz' },
        { corda: 4, casa: 7, rotulo: '12ª' }, { corda: 3, casa: 7, rotulo: '12ª' },
        { corda: 2, casa: 5, rotulo: '15ª' }, { corda: 1, casa: 5, rotulo: '15ª' }
      ], legenda: 'Os três pontos mais usados. O dedo encosta sobre o traste, não atrás dele.' },
      { t: 'tocar', titulo: 'Confira os harmônicos da casa 12', seq: [[6, 12], [5, 12], [4, 12], [3, 12], [2, 12], [1, 12]], rotulo: 'Conferir no microfone',
        x: 'Toque o harmônico de cada corda na casa 12. O app confere a nota.' }
    ]
  },

  {
    id: 'i-pestana-longa', nome: 'Pestana sustentada', tipo: 'independencia', nivel: 4,
    disciplinas: ['tecnica'], tecnicas: ['pestana'], dificuldade: 'intermediária', minutos: 8,
    objetivo: 'Manter pestana limpa por vários compassos, sem tensão, com os outros dedos livres.',
    explicacao: 'A pestana falha por três motivos: dedo chato demais, polegar fora de posição e pressão no lugar errado. A lateral do dedo é mais dura que a polpa e resolve a maior parte dos casos.',
    instrucoes: [
      'Gire levemente o dedo 1 para fora, apoiando na lateral.',
      'Polegar atrás, na altura do dedo 2, no meio do braço.',
      'Toque corda por corda e descubra qual está abafada; corrija só ela.',
      'Alivie até o limite: pestana apertada demais cansa e não melhora o som.',
      'Mantenha a pestana por quatro compassos enquanto os outros dedos se movem.'
    ],
    digitacao: 'Pestana na casa 1 (Fá) e na casa 5 (Lá menor com pestana). Comece pelas casas altas, que são mais fáceis.',
    bpm: { inicial: 50, meta: 90 }, metronomo: true,
    criterio: 'Pestana na casa 1 com as seis cordas soando, mantida por quatro compassos, sem dor.',
    blocos: [
      { t: 'acorde', legenda: 'Três pestanas, da mais fácil para a mais difícil: casa 5, casa 3, casa 1.', lista: [
        { nome: 'Am (pestana casa 5)', cordas: [-1, 5, 7, 7, 5, 5], dedos: [null, 1, 3, 4, 1, 1], casaInicial: 5, pestana: { casa: 5, de: 5, ate: 1 } },
        { nome: 'G (pestana casa 3)', cordas: [3, 5, 5, 4, 3, 3], dedos: [1, 3, 4, 2, 1, 1], casaInicial: 3, pestana: { casa: 3, de: 6, ate: 1 } },
        { nome: 'F (pestana casa 1)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } }
      ] },
      { t: 'metronomo', bpm: 50, compasso: '4/4', x: 'Entrar e sair da pestana no tempo, um compasso cada.' }
    ]
  },

  {
    id: 'i-ligados-velocidade', nome: 'Ligados em velocidade', tipo: 'independencia', nivel: 5,
    disciplinas: ['tecnica'], tecnicas: ['ligado-asc', 'ligado-desc'], dificuldade: 'avançada', minutos: 8,
    objetivo: 'Ligados com o mesmo volume da nota atacada, em qualquer par de dedos.',
    explicacao: 'No ligado ascendente o dedo cai com energia, de perto. No descendente, ele puxa levemente a corda para o lado antes de sair. O erro mais comum é a segunda nota soar mais fraca que a primeira.',
    instrucoes: [
      'Ascendente 1-2, dez repetições, comparando o volume das duas notas.',
      'Pares 2-3 e 3-4: o 3-4 é o mais difícil.',
      'Descendentes: puxe a corda para o lado, não para baixo.',
      'Combine: 1-2-1, depois 1-3-1 e 1-4-1.',
      'Suba de andamento só quando a segunda nota tiver o mesmo volume da primeira.'
    ],
    digitacao: 'Na 1ª corda, 5ª posição: dedos 1, 2, 3 e 4 nas casas 5, 6, 7 e 8.',
    bpm: { inicial: 54, meta: 120 }, metronomo: true,
    criterio: 'A nota ligada soa com o mesmo volume da atacada, em todos os pares, a 120 BPM.',
    blocos: [
      tab([
        { notas: [{ pos: [[1, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 7]], fig: 'colcheia' }, { pos: [[1, 5]], fig: 'colcheia' }, { pos: [[1, 8]], fig: 'colcheia' }, { pos: [[1, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 7]], fig: 'colcheia' }, { pos: [[1, 5]], fig: 'colcheia' }, { pos: [[1, 8]], fig: 'colcheia' }] },
        { notas: [{ pos: [[1, 7]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 8]], fig: 'colcheia' }, { pos: [[1, 7]], fig: 'colcheia' }, { pos: [[1, 8]], fig: 'colcheia' }, { pos: [[1, 5]], fig: 'minima', dedo: 'i' }] }
      ], 'Só a primeira nota de cada grupo é atacada pela mão direita.', 76),
      { t: 'metronomo', bpm: 54, compasso: '4/4', x: 'Duas notas por clique. Meta: 120 BPM.' }
    ]
  },

  {
    id: 'i-polifonia-planos', nome: 'Três vozes em planos sonoros', tipo: 'independencia', nivel: 6,
    disciplinas: ['tecnica', 'contraponto'], tecnicas: ['vozes'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Tocar três vozes com volumes e cores distintos, cada uma com a duração escrita.',
    explicacao: 'Polifonia exige duas coisas ao mesmo tempo: a mão esquerda sustenta cada nota pelo valor escrito e a mão direita dá a cada voz um plano sonoro próprio. Melodia à frente, baixo em segundo, voz interna em terceiro.',
    instrucoes: [
      'Toque cada voz sozinha, no tempo, com o som que ela terá no final.',
      'Junte duas a duas: baixo e melodia, melodia e voz interna, baixo e voz interna.',
      'Toque as três com a melodia em primeiro plano.',
      'Repita destacando o baixo, depois a voz interna.',
      'Pare no fim de cada compasso sem levantar dedos: confira a sustentação.'
    ],
    digitacao: 'Baixo com p; voz interna com i; melodia com m ou a, às vezes em apoyando.',
    bpm: { inicial: 50, meta: 88 }, metronomo: true,
    criterio: 'Numa gravação, um ouvinte consegue seguir qualquer uma das três vozes do começo ao fim.',
    blocos: [
      tab([
        { notas: [{ pos: [[5, 3], [3, 0], [2, 1]], fig: 'seminima' }, { pos: [[3, 0], [2, 3]], fig: 'seminima' }, { pos: [[5, 2], [3, 0], [1, 0]], fig: 'seminima' }, { pos: [[3, 0], [1, 1]], fig: 'seminima' }] },
        { notas: [{ pos: [[5, 0], [3, 2], [1, 3]], fig: 'seminima' }, { pos: [[3, 2], [1, 1]], fig: 'seminima' }, { pos: [[6, 3], [3, 0], [1, 0]], fig: 'minima' }] }
      ], 'Baixo nas cordas graves, pedal de Sol na 3ª corda e melodia nas cordas 1 e 2.', 60),
      { t: 'metronomo', bpm: 50, compasso: '4/4', x: 'Uma nota por clique. A sustentação importa mais que a velocidade.' }
    ]
  },

  {
    id: 'co-timbre', nome: 'Mapa de timbre', tipo: 'coordenacao', nivel: 5,
    disciplinas: ['tecnica', 'interpretacao'], tecnicas: ['timbre'], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Produzir deliberadamente cinco timbres diferentes e sustentá-los numa frase.',
    explicacao: 'O timbre depende de onde o dedo ataca a corda e de quanto de unha entra no toque. Perto do cavalete o som é brilhante; sobre a boca, redondo e escuro. Essa escolha é tão expressiva quanto a dinâmica.',
    instrucoes: [
      'Toque a mesma nota em cinco pontos: sobre a boca, entre boca e cavalete, no meio, perto do cavalete e bem no cavalete.',
      'Descreva cada som em voz alta antes de passar ao próximo.',
      'Toque uma escala inteira em tasto e depois inteira em ponticello.',
      'Faça a mesma escala com transição gradual de uma região à outra.',
      'Por fim, toque um acorde destacando a melodia e depois destacando o baixo.'
    ],
    digitacao: 'Mão direita variando o ponto de ataque; ângulo da unha mais aberto para som mais escuro.',
    bpm: null, metronomo: false,
    criterio: 'Produzo dois timbres nitidamente distintos na mesma frase e sei explicar como cheguei a cada um.',
    blocos: [
      { t: 'p', x: 'Grave as cinco versões e ouça em sequência: a diferença é maior do que parece enquanto se toca.' },
      { t: 'tocar', titulo: 'Confira as notas da frase', seq: [[1, 0], [1, 3], [1, 5], [1, 7]], rotulo: 'Conferir no microfone',
        x: 'Toque Mi, Sol, Lá e Si na 1ª corda. Depois repita a frase em cada ponto de ataque.' }
    ]
  },

  {
    id: 'co-vibrato', nome: 'Vibrato controlado', tipo: 'coordenacao', nivel: 5,
    disciplinas: ['tecnica', 'interpretacao'], tecnicas: ['vibrato'], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Produzir vibrato regular com os quatro dedos, variando amplitude e frequência.',
    explicacao: 'No violão o vibrato é longitudinal: a mão oscila no sentido do braço, com pressão constante. O movimento vem do antebraço, com o pulso solto. Não funciona em corda solta nem em nota curta.',
    instrucoes: [
      'Pise a 1ª corda na casa 7 com o dedo 3 e deixe o pulso solto.',
      'Oscile o antebraço na direção da pestana e de volta, lentamente.',
      'Reduza a amplitude e aumente a frequência aos poucos.',
      'Repita com os dedos 1, 2 e 4: com o 1 é mais difícil.',
      'Toque uma nota de quatro tempos com vibrato contínuo e volume estável.'
    ],
    digitacao: 'Pressão constante; movimento do antebraço, não dos dedos.',
    bpm: null, metronomo: false,
    criterio: 'Vibrato audível e regular com os quatro dedos, sem variação de volume durante a nota.',
    blocos: [
      { t: 'mao', lado: 'esquerda', legenda: 'A pressão do dedo não muda durante o vibrato: só a posição oscila.' },
      { t: 'tocar', titulo: 'Confira a nota do exercício', seq: [[1, 7]], rotulo: 'Conferir no microfone',
        x: 'Si na 1ª corda, casa 7. Depois faça o vibrato sobre ela.' }
    ]
  },

  {
    id: 'l-primeira-vista-avancada', nome: 'Primeira vista com métrica variável', tipo: 'leitura', nivel: 6,
    disciplinas: ['leitura'], tecnicas: ['primeira-vista'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Atravessar sem parar uma página com mudanças de compasso e duas vozes.',
    explicacao: 'Partitura complexa se lê em camadas: estrutura, vozes, ritmo, símbolos. Tentar ler tudo de uma vez é o que faz uma página parecer impossível.',
    instrucoes: [
      'Trinta segundos de leitura prévia: vozes, compassos, extensão, símbolos desconhecidos.',
      'Conte em voz alta os agrupamentos dos compassos irregulares (7/8 costuma ser 2+2+3).',
      'Leia cada voz separadamente, do começo ao fim.',
      'Junte as vozes no andamento mais lento que você consiga manter sem parar.',
      'Não pare para corrigir: continuidade é o que se treina aqui.'
    ],
    digitacao: 'Livre: escolha a posição que exigir menos mudanças.',
    bpm: { inicial: 44, meta: 72 }, metronomo: true,
    criterio: 'Uma página desconhecida atravessada sem nenhuma parada, mesmo lentamente.',
    blocos: [
      { t: 'pauta', bpm: 56, numerar: true, quebrar: 2,
        txt: 'c4/c d4/c e4/c d4/c c4/c | e4/c f4/c g4/c | c3+e4/q c3+g4/q | g2+d4/b',
        legenda: 'Alternância de agrupamentos e entrada de segunda voz. Conte em voz alta antes de tocar.' },
      { t: 'metronomo', bpm: 44, compasso: '4/4', x: 'O metrônomo é o juiz: se você parou, a leitura falhou.' }
    ]
  },

  {
    id: 'h-tetrades', nome: 'Montar tétrades', tipo: 'harmonia', nivel: 4,
    disciplinas: ['harmonia', 'teoria'], tecnicas: [], dificuldade: 'intermediária', minutos: 8,
    objetivo: 'Construir e reconhecer acordes de quatro notas a partir da fundamental.',
    explicacao: 'Tétrade é a tríade mais uma sétima. Cinco tipos cobrem quase tudo: maior com sétima maior, dominante, menor com sétima, meio-diminuto e diminuto.',
    instrucoes: [
      'Escolha uma fundamental e diga em voz alta as quatro notas de cada tipo.',
      'Toque a tétrade no braço, omitindo a quinta quando não couber.',
      'Compare os cinco tipos sobre a mesma fundamental.',
      'Depois faça o caminho inverso: ouça um acorde e diga de que tipo é.',
      'Monte o campo harmônico de Dó maior inteiro em tétrades.'
    ],
    digitacao: 'Formas com raiz na 5ª e na 6ª corda. A quinta é a primeira nota a sair.',
    bpm: null, metronomo: false,
    criterio: 'Monto qualquer tétrade no braço sem decorar a forma: escolhendo fundamental, terça, sétima e tensão.',
    blocos: [
      { t: 'acorde', legenda: 'Os cinco tipos sobre Dó. Toque em sequência e ouça a diferença.', lista: [
        { nome: 'Cmaj7', cordas: [-1, 3, 2, 0, 0, 0], dedos: [null, 3, 2, null, null, null] },
        { nome: 'C7', cordas: [-1, 3, 2, 3, 1, 0], dedos: [null, 3, 2, 4, 1, null] },
        { nome: 'Cm7', cordas: [-1, 3, 5, 3, 4, 3], dedos: [null, 1, 3, 1, 2, 1], casaInicial: 3, pestana: { casa: 3, de: 5, ate: 1 } },
        { nome: 'Cm7(♭5)', cordas: [-1, 3, 4, 3, 4, -1], dedos: [null, 1, 3, 2, 4, null], casaInicial: 3 },
        { nome: 'C°7', cordas: [-1, 3, 4, 2, 4, -1], dedos: [null, 2, 4, 1, 3, null], casaInicial: 2 }
      ] },
      { t: 'exercicio', tipo: 'perguntas', titulo: 'Reconhecer tétrades', rodadas: 5, perguntas: [
        { texto: 'Quais notas formam o G7?', opcoes: ['Sol Si Ré Fá', 'Sol Si Ré Fá♯', 'Sol Si♭ Ré Fá', 'Sol Si Ré♯ Fá'], correta: 0, explicacao: 'Tríade maior mais sétima menor.' },
        { texto: 'Qual é a diferença entre Cmaj7 e C7?', opcoes: ['A sétima: maior no primeiro, menor no segundo', 'A terça', 'A quinta', 'A fundamental'], correta: 0, explicacao: 'Si natural contra Si bemol.' },
        { texto: 'Um acorde meio-diminuto tem:', opcoes: ['Terça menor, quinta diminuta e sétima menor', 'Terça maior e sétima maior', 'Terça menor e sétima maior', 'Quinta aumentada'], correta: 0, explicacao: 'É o vii do campo maior.' },
        { texto: 'Qual nota se omite primeiro numa tétrade no violão?', opcoes: ['A quinta', 'A terça', 'A sétima', 'A fundamental'], correta: 0, explicacao: 'Ela não define a qualidade do acorde.' },
        { texto: 'O diminuto com sétima é simétrico porque:', opcoes: ['É formado só por terças menores', 'Tem quatro notas', 'Não tem quinta', 'Tem sétima maior'], correta: 0, explicacao: 'Por isso resolve em quatro tons diferentes.' }
      ] }
    ]
  },

  {
    id: 'h-campo-menor', nome: 'Campo harmônico menor', tipo: 'harmonia', nivel: 4,
    disciplinas: ['harmonia'], tecnicas: [], dificuldade: 'intermediária', minutos: 8,
    objetivo: 'Construir os acordes do tom menor nas três formas da escala.',
    explicacao: 'O tom menor tem três escalas, e por isso três campos harmônicos possíveis. Na prática, a harmonia menor usa a menor harmônica para a dominante (que fica maior) e a natural para o resto.',
    instrucoes: [
      'Monte o campo de Lá menor natural: Am, Bdim, C, Dm, Em, F, G.',
      'Troque o Em por E (ou E7): é a dominante da menor harmônica.',
      'Toque as duas versões em sequência e ouça a diferença no fecho.',
      'Faça o mesmo em Mi menor e em Ré menor.',
      'Harmonize uma melodia menor usando i, iv e V.'
    ],
    digitacao: 'Posição aberta em Lá menor e Mi menor; Ré menor com pestana no Si bemol.',
    bpm: null, metronomo: false,
    criterio: 'Escrevo e toco de memória o campo harmônico menor de qualquer tom, com a dominante maior.',
    blocos: [
      { t: 'acorde', legenda: 'A cadência menor com dominante maior: é o Sol sustenido do E que fecha a frase.', lista: [
        { nome: 'Am (i)', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
        { nome: 'Dm (iv)', cordas: [-1, -1, 0, 2, 3, 1], dedos: [null, null, null, 2, 3, 1] },
        { nome: 'E7 (V7)', cordas: [0, 2, 0, 1, 0, 0], dedos: [null, 2, null, 1, null, null] },
        { nome: 'Am (i)', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] }
      ] },
      { t: 'tocar', titulo: 'Confira os baixos da cadência', seq: [[5, 0], [4, 0], [6, 0], [5, 0]], rotulo: 'Conferir no microfone',
        x: 'Lá, Ré, Mi e Lá: o esqueleto i – iv – V – i.' }
    ]
  },

  {
    id: 'h-modos', nome: 'Os sete modos no braço', tipo: 'harmonia', nivel: 6,
    disciplinas: ['harmonia', 'teoria'], tecnicas: ['escalas'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Tocar e reconhecer os sete modos, destacando a nota característica de cada um.',
    explicacao: 'São as mesmas sete notas ouvidas a partir de centros diferentes. O que define o modo é a nota característica: a sexta maior do dórico, a segunda menor do frígio, a quarta aumentada do lídio, a sétima menor do mixolídio.',
    instrucoes: [
      'Toque as notas de Dó maior começando e terminando em cada grau, um por vez.',
      'Em cada modo, toque a nota característica duas vezes.',
      'Depois toque cada modo sobre um pedal: corda solta correspondente.',
      'Improvise quatro compassos em dórico e quatro em mixolídio.',
      'Evite a dominante com sensível: ela desfaz o modo.'
    ],
    digitacao: 'Em posição aberta, usando cordas soltas como pedal sempre que possível.',
    bpm: { inicial: 72, meta: 108 }, metronomo: true,
    criterio: 'Improviso mantendo o caráter modal, sem o resultado escorregar para maior ou menor.',
    blocos: [
      { t: 'braco', casas: 12, notas: [
        { corda: 4, casa: 0, rotulo: 'D', classe: 'raiz' }, { corda: 4, casa: 3, rotulo: 'F' },
        { corda: 3, casa: 0, rotulo: 'G' }, { corda: 3, casa: 2, rotulo: 'A' },
        { corda: 2, casa: 0, rotulo: 'B' }, { corda: 2, casa: 1, rotulo: 'C' }, { corda: 2, casa: 3, rotulo: 'D', classe: 'raiz' }
      ], tocar: true, bpm: 84, legenda: 'Ré dórico: o Si natural é a nota que define o modo.' },
      { t: 'metronomo', bpm: 72, compasso: '4/4', x: 'Uma nota por clique em cada modo.' }
    ]
  },

  {
    id: 'p-acordes', nome: 'Reconhecer tipos de acorde', tipo: 'percepcao', nivel: 4,
    disciplinas: ['percepcao', 'harmonia'], tecnicas: [], dificuldade: 'intermediária', minutos: 6,
    objetivo: 'Distinguir de ouvido maior, menor, diminuto, aumentado e dominante.',
    explicacao: 'Antes de nomear intervalos isolados, treine a cor do acorde inteiro. É essa percepção que permite tirar música de ouvido.',
    instrucoes: [
      'Ouça cada tipo tocado em bloco e descreva a sensação em uma palavra.',
      'Depois responda sem olhar: maior ou menor?',
      'Acrescente o diminuto, que soa instável.',
      'Por fim, inclua o dominante, que pede resolução.',
      'Toque cada acorde no violão depois de acertar: ouvir e fazer juntos fixam mais.'
    ],
    digitacao: 'Formas abertas de C, Cm, C°, C+ e C7.',
    bpm: null, metronomo: false,
    criterio: 'Acerto oito de dez acordes tocados sem olhar, entre os cinco tipos.',
    blocos: [
      { t: 'exercicio', tipo: 'ouvido', titulo: 'Qual é o tipo de acorde?', rodadas: 10 },
      { t: 'acorde', legenda: 'Os cinco tipos, para conferir depois de responder.', lista: [
        { nome: 'C', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
        { nome: 'Cm', cordas: [-1, 3, 5, 5, 4, 3], dedos: [null, 1, 3, 4, 2, 1], casaInicial: 3, pestana: { casa: 3, de: 5, ate: 1 } },
        { nome: 'C7', cordas: [-1, 3, 2, 3, 1, 0], dedos: [null, 3, 2, 4, 1, null] }
      ] }
    ]
  },

  {
    id: 'p-cadencias', nome: 'Reconhecer cadências', tipo: 'percepcao', nivel: 5,
    disciplinas: ['percepcao', 'harmonia'], tecnicas: [], dificuldade: 'avançada', minutos: 6,
    objetivo: 'Identificar de ouvido as quatro cadências principais.',
    explicacao: 'A cadência é a pontuação da música. Autêntica fecha, plagal confirma com suavidade, de engano surpreende e a suspensiva deixa a frase no ar.',
    instrucoes: [
      'Toque as quatro cadências em Dó e descreva cada uma em uma palavra.',
      'Peça a alguém para tocar uma delas sem dizer qual, e identifique.',
      'Depois faça o mesmo em Sol e em Lá menor.',
      'Procure cadências nas peças que você estuda e marque na partitura.'
    ],
    digitacao: 'Autêntica G7–C, plagal F–C, de engano G7–Am, suspensiva C–G.',
    bpm: null, metronomo: false,
    criterio: 'Identifico as quatro cadências de ouvido em qualquer tonalidade, oito acertos em dez.',
    blocos: [
      { t: 'acorde', legenda: 'As quatro cadências em Dó maior. Toque cada par e compare o efeito.', lista: [
        { nome: 'G7', cordas: [3, 2, 0, 0, 0, 1], dedos: [3, 2, null, null, null, 1] },
        { nome: 'C (autêntica)', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
        { nome: 'F (plagal)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } },
        { nome: 'Am (engano)', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] }
      ] }
    ]
  },

  {
    id: 'r-sincope', nome: 'Síncope brasileira', tipo: 'ritmo', nivel: 5,
    disciplinas: ['tecnica'], tecnicas: [], dificuldade: 'intermediária', minutos: 8,
    objetivo: 'Executar a síncope característica do choro e do samba com pulso estável.',
    explicacao: 'A síncope acentua o que vem entre os tempos. Ela só funciona sobre um pulso firme: sem isso, soa como erro de ritmo e não como balanço.',
    instrucoes: [
      'Bata o padrão com as mãos antes de tocar, contando em voz alta.',
      'Toque só o baixo, no tempo, com o metrônomo.',
      'Acrescente a síncope por cima, mantendo o baixo imperturbável.',
      'Grave e confira se o baixo não foi arrastado pela síncope.',
      'Suba o andamento mantendo a clareza dos acentos.'
    ],
    digitacao: 'Polegar no baixo, i e m na síncope.',
    bpm: { inicial: 66, meta: 120 }, metronomo: true,
    criterio: 'Toco o padrão a 120 BPM com o baixo estável e os acentos nítidos.',
    blocos: [
      tab([
        { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[3, 2], [2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }] }
      ], 'O padrão de síncope: baixo no tempo, acordes entre os tempos.', 84),
      { t: 'metronomo', bpm: 66, compasso: '2/4', x: 'Dois tempos por compasso, como no choro.' }
    ]
  },

  {
    id: 'm-pontos-aleatorios', nome: 'Começar de qualquer ponto', tipo: 'memorizacao', nivel: 6,
    disciplinas: ['interpretacao'], tecnicas: ['memorizacao'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Recomeçar a peça de qualquer ponto de partida, sem precisar do começo.',
    explicacao: 'Quem só sabe começar do início tem uma memória frágil: na apresentação, um branco vira parada. Pontos de partida espalhados pela peça são a rede de segurança.',
    instrucoes: [
      'Marque um ponto de partida a cada oito compassos.',
      'Sorteie um deles e comece dali, sem olhar a partitura.',
      'Repita com todos os pontos, em ordem aleatória.',
      'Depois, toque a peça mentalmente, sem o instrumento, do início ao fim.',
      'Escreva de memória a sequência de acordes de uma seção.'
    ],
    digitacao: 'Sem digitação específica: vale para qualquer peça do seu repertório.',
    bpm: null, metronomo: false,
    criterio: 'Começo a peça de qualquer ponto marcado, sem hesitar, e descrevo a harmonia sem o violão na mão.',
    blocos: [
      { t: 'p', x: 'Este exercício se faz com a peça que você está preparando. Marque os pontos na partitura a lápis e use um sorteio qualquer para escolher por onde começar.' },
      { t: 'ir', rota: 'repertorio', titulo: 'Escolher a peça no Repertório', x: 'Anote os pontos de partida na ficha da obra.' }
    ]
  },

  {
    id: 's-solfejo-intervalos', nome: 'Cantar intervalos', tipo: 'solfejo', nivel: 5,
    disciplinas: ['percepcao'], tecnicas: [], dificuldade: 'avançada', minutos: 6,
    objetivo: 'Cantar qualquer intervalo a partir de uma nota dada e conferir no instrumento.',
    explicacao: 'Cantar o intervalo antes de tocá-lo é o que liga o ouvido interno ao instrumento. Quem canta afinado erra menos ao tocar.',
    instrucoes: [
      'Toque uma nota no violão e cante a terça maior acima. Confira.',
      'Repita com quarta justa, quinta justa, sexta maior e oitava.',
      'Depois faça descendo.',
      'Por fim, cante a melodia de uma peça antes de tocá-la.'
    ],
    digitacao: 'Qualquer nota de referência; confira no braço.',
    bpm: null, metronomo: false,
    criterio: 'Canto os intervalos até a oitava com afinação confirmada pelo instrumento, oito em dez.',
    blocos: [
      { t: 'tocar', titulo: 'Confira a referência', seq: [[3, 0], [3, 4], [2, 1], [2, 3]], rotulo: 'Conferir no microfone',
        x: 'Sol, Si, Dó e Ré. Cante cada intervalo antes de tocar a segunda nota.' }
    ]
  },

  {
    id: 'co-resistencia', nome: 'Resistência em arpejo contínuo', tipo: 'coordenacao', nivel: 7,
    disciplinas: ['tecnica'], tecnicas: ['arpejos'], dificuldade: 'avançada', minutos: 10,
    objetivo: 'Sustentar qualidade de som e igualdade por cinco minutos sem interrupção.',
    explicacao: 'Peças como o Allegro solemne de La Catedral ou o Estudo nº 1 de Villa-Lobos repetem o mesmo padrão por páginas. O problema não é tocar o padrão: é tocá-lo igual na quarta página.',
    instrucoes: [
      'Escolha um padrão de arpejo de seis cordas e um andamento confortável.',
      'Toque sem parar por cinco minutos, cronometrados.',
      'Anote em que minuto a qualidade começou a cair: é esse o ponto a trabalhar.',
      'Na sessão seguinte, pare trinta segundos antes desse ponto e vá estendendo.',
      'Qualquer endurecimento do antebraço significa parar.'
    ],
    digitacao: 'p nas cordas 6, 5 e 4; i, m e a nas cordas 3, 2 e 1.',
    bpm: { inicial: 76, meta: 112 }, metronomo: true,
    criterio: 'Cinco minutos contínuos a 100 BPM sem queda audível de igualdade e sem tensão.',
    blocos: [
      tab([
        { notas: [{ pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'p' }] }
      ], 'Padrão de seis cordas, ida e volta. Repita sem parar.', 88),
      { t: 'metronomo', bpm: 76, compasso: '4/4', x: 'Quatro notas por clique, cinco minutos sem parar.' }
    ]
  },

  {
    id: 'co-gravacao', nome: 'Gravar e avaliar', tipo: 'coordenacao', nivel: 6,
    disciplinas: ['interpretacao'], tecnicas: [], dificuldade: 'intermediária', minutos: 10,
    objetivo: 'Diagnosticar a própria execução com critérios objetivos.',
    explicacao: 'Enquanto toca, você não ouve o que o público ouve. A gravação é o professor mais honesto que existe, e o mais barato.',
    instrucoes: [
      'Grave uma peça inteira com o celular a cerca de um metro, na altura da boca do violão.',
      'Ouça uma vez sem anotar nada: só impressão geral.',
      'Ouça de novo com a partitura e marque cada problema.',
      'Classifique: técnico, musical ou de memória.',
      'Escolha dois para trabalhar nesta semana e volte a gravar em sete dias.'
    ],
    digitacao: 'Sem digitação: vale para qualquer peça.',
    bpm: null, metronomo: false,
    criterio: 'Aponto problemas concretos e acionáveis na própria gravação, em vez de impressões vagas.',
    blocos: [
      { t: 'tabela', cab: ['Critério', 'O que perguntar'], linhas: [
        ['Pulso', 'O andamento se manteve? Houve aceleração?'],
        ['Precisão', 'Quantas notas erradas ou abafadas?'],
        ['Som', 'O timbre é consistente? Há cliques?'],
        ['Planos', 'A melodia está acima do acompanhamento?'],
        ['Fraseado', 'As frases respiram? Há direção?'],
        ['Dinâmica', 'Há variação real de volume?'],
        ['Continuidade', 'Houve paradas ou hesitações?']
      ], legenda: 'Preencha antes de ouvir pela segunda vez.' },
      { t: 'ir', rota: 'avaliacoes', titulo: 'Registrar na Central de Avaliações' }
    ]
  },

  {
    id: 'l-transcrever', nome: 'Tirar de ouvido', tipo: 'leitura', nivel: 7,
    disciplinas: ['percepcao', 'harmonia'], tecnicas: [], dificuldade: 'avançada', minutos: 15,
    objetivo: 'Transcrever uma música curta de ouvido, na ordem que funciona.',
    explicacao: 'Quase todo mundo tenta tirar a melodia primeiro e trava na harmonia. Tirando o baixo primeiro, a harmonia aparece sozinha e a melodia se encaixa quase sem esforço.',
    instrucoes: [
      'Descubra a tonalidade: cante a nota que soa como repouso e ache-a no braço.',
      'Tire a linha de baixo, compasso a compasso.',
      'Deduza a harmonia a partir do baixo e do caráter maior ou menor.',
      'Tire a melodia por último.',
      'Escreva o que tirou: o que não está escrito se perde.'
    ],
    digitacao: 'Livre. Use reprodução em velocidade reduzida nos trechos rápidos.',
    bpm: null, metronomo: false,
    criterio: 'Transcrevo dezesseis compassos de uma música simples, com baixo, harmonia e melodia escritos.',
    blocos: [
      { t: 'pauta', bpm: 56, numerar: true, quebrar: 4,
        txt: 'c3/b g2/b | a2/b e2/b | f2/b c3/b | g2/b g2/b | c3/o',
        legenda: 'Exemplo: só com esta linha de baixo já dá para nomear os acordes — C, G, Am, Em, F, C, G, C.' },
      { t: 'ir', rota: 'importar', titulo: 'Importar o que você escreveu', x: 'O importador aceita texto, MusicXML, Guitar Pro e PDF.' }
    ]
  },

  {
    id: 'i-aula-simulada', nome: 'Planejar e dar uma aula', tipo: 'independencia', nivel: 7,
    disciplinas: ['teoria'], tecnicas: [], dificuldade: 'avançada', minutos: 15,
    objetivo: 'Planejar uma aula de 50 minutos com objetivos verificáveis e conduzi-la.',
    explicacao: 'Ensinar é a melhor forma de descobrir o que você realmente entendeu. Um plano de aula é uma hipótese com objetivos claros o bastante para você perceber quando errou.',
    instrucoes: [
      'Escolha um conteúdo e escreva um objetivo verificável: dá para responder sim ou não no fim.',
      'Monte os cinco blocos: aquecimento, técnica, peça, conteúdo novo e fechamento.',
      'Dê a aula para alguém — nem que seja uma pessoa da família com o violão na mão.',
      'Use uma correção por vez, descrita de forma observável, com repetição imediata.',
      'No fim, responda: o objetivo foi atingido?'
    ],
    digitacao: 'Sem digitação.',
    bpm: null, metronomo: false,
    criterio: 'Conduzo uma aula inteira e consigo dizer, com evidência, se o objetivo foi atingido.',
    blocos: [
      { t: 'tabela', cab: ['Bloco', 'Tempo', 'Conteúdo'], linhas: [
        ['Aquecimento e checagem', '5 min', 'Como foi a semana, quanto estudou, alguma dor'],
        ['Técnica', '10 min', 'Um exercício com objetivo e medida'],
        ['Peça em andamento', '20 min', 'Dois ou três pontos de trabalho'],
        ['Conteúdo novo', '10 min', 'Teoria, leitura ou início de peça'],
        ['Fechamento', '5 min', 'O que estudar, como e por quanto tempo']
      ], legenda: 'O fechamento é o bloco mais negligenciado e o mais importante.' },
      { t: 'ir', rota: 'aula/n7.1.4', titulo: 'Aula sobre planejamento' }
    ]
  },

  {
    id: 'm-programa', nome: 'Rotação de programa', tipo: 'memorizacao', nivel: 8,
    disciplinas: ['interpretacao'], tecnicas: ['memorizacao'], dificuldade: 'avançada', minutos: 15,
    objetivo: 'Manter várias peças vivas ao mesmo tempo, com qualidade estável.',
    explicacao: 'Memorizar uma peça é um problema resolvido. Manter dez ao mesmo tempo é outro: exige rotação, execução completa diária e reestudo periódico com partitura.',
    instrucoes: [
      'Divida o programa em três grupos.',
      'A cada dia, um grupo recebe estudo detalhado por trechos.',
      'Os outros dois recebem apenas uma execução completa, sem parar.',
      'Uma vez por semana, execute o programa inteiro na ordem, cronometrando.',
      'A cada mês, volte à partitura: a memória se deforma e tende a simplificar.'
    ],
    digitacao: 'Sem digitação: vale para o seu programa inteiro.',
    bpm: null, metronomo: false,
    criterio: 'Toco o programa inteiro de memória, sem parar, duas vezes em dias diferentes.',
    blocos: [
      { t: 'p', x: 'A deformação da memória é real: ornamentos somem e ritmos arredondam com o tempo. A única prevenção é voltar à partitura regularmente, mesmo em peças que você toca há anos.' },
      { t: 'ir', rota: 'plano', titulo: 'Montar a rotação no Plano de Estudos' }
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
