// Biblioteca de Técnicas do LLMusic.
//
// Cada técnica traz: nome, descrição, objetivo, nível recomendado, explicação
// passo a passo, digitação, exercícios, ilustrações, erros comuns e critérios
// para avaliar a própria execução.
//
// O campo "blocos" usa o mesmo formato das aulas (js/curso/blocos.js), então a
// tela de técnicas desenha diagramas, toca exemplos e liga o microfone sem
// nenhum código novo.

export const GRUPOS_TECNICA = [
  { id: 'direita', nome: 'Mão direita', desc: 'Como a corda é posta para vibrar.' },
  { id: 'esquerda', nome: 'Mão esquerda', desc: 'Como as notas são presas e ligadas.' },
  { id: 'expressao', nome: 'Expressão', desc: 'O que transforma notas certas em música.' },
  { id: 'musical', nome: 'Habilidades musicais', desc: 'O que acontece antes e depois do instrumento.' }
];

export const TECNICAS = [

  // ===================== MÃO DIREITA =====================
  {
    id: 'tirando', nome: 'Tirando (toque livre)', grupo: 'direita', nivel: 1, dificuldade: 'básica',
    aula: 'n1.4.1',
    desc: 'O dedo toca a corda e recolhe para dentro da mão, passando por cima da corda vizinha sem encostar nela.',
    objetivo: 'Produzir som limpo deixando todas as outras cordas livres para continuar vibrando. É o toque de todo arpejo e de todo acompanhamento.',
    blocos: [
      { t: 'p', x: 'O tirando é o primeiro toque que se aprende e o mais usado. A corda é posta para vibrar e o dedo sai do caminho, sem tocar em mais nada.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Mão flutuando sobre a boca, punho em cúpula, antebraço apoiado na borda do tampo.',
        'Encoste a *polpa* do dedo na corda, com o dedo curvado.',
        'Flexione a partir da junta grande (a que liga o dedo à mão), empurrando a corda levemente *para dentro*, na direção do tampo.',
        'Deixe a corda escapar: ela desliza pela polpa e sai pela unha.',
        'O dedo termina recolhido *na direção da palma*, acima da corda vizinha, sem encostá-la.'
      ] },
      { t: 'h', x: 'Digitação' },
      { t: 'tabela', cab: ['Dedo', 'Corda de costume'], linhas: [['p', '6ª, 5ª e 4ª'], ['i', '3ª'], ['m', '2ª'], ['a', '1ª']] },
      { t: 'h', x: 'Exercício' },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] }
      ], legenda: 'Arpejo p-i-m-a com tirando. As quatro notas devem continuar soando juntas no fim do compasso.', tocar: true, bpm: 80 },
      { t: 'tocar', titulo: 'Confira o seu tirando', seq: [[3, 0], [2, 0], [1, 0], [3, 0], [2, 0], [1, 0]], rotulo: 'i, m, a — duas vezes', x: 'Toque i, m e a. Nenhuma corda pode parar de soar quando a seguinte é tocada.' }
    ],
    erros: [
      { erro: 'O dedo sai para cima e esbarra na corda de cima.', certo: 'Recolha na direção da palma, não para cima.' },
      { erro: 'Dedo esticado, batendo de raspão.', certo: 'Dedo curvado: a corda precisa encontrar a polpa antes da unha.' },
      { erro: 'Movimento nascendo na ponta do dedo.', certo: 'O movimento nasce na junta grande.' },
      { erro: 'Apoiar o mindinho no tampo.', certo: 'A mão flutua. Apoiar trava os outros dedos.' }
    ],
    criterios: [
      'A nota sai sem clique e sem zumbido.',
      'Nenhuma corda vizinha é abafada.',
      'Dez toques seguidos com o mesmo volume.',
      'A mão fica parada: só os dedos se movem.'
    ],
    exercicios: ['Cordas soltas p-i-m-a', 'Arpejos simples', 'Acordes dedilhados']
  },

  {
    id: 'apoyando', nome: 'Apoyando (toque apoiado)', grupo: 'direita', nivel: 2, dificuldade: 'básica',
    aula: 'n2.2.2',
    desc: 'O dedo atravessa a corda e pára apoiado na corda vizinha mais grave.',
    objetivo: 'Dar volume e corpo a uma nota. É o toque das melodias, das escalas e de qualquer linha que precise se destacar.',
    blocos: [
      { t: 'p', x: 'O apoyando é o toque que faz o violão clássico "cantar". A corda é deslocada com mais massa e o apoio no fim do movimento dá firmeza ao ataque.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'O dedo fica um pouco mais esticado do que no tirando.',
        'Encoste a polpa na corda e empurre *para dentro*, na direção do tampo, num movimento mais horizontal.',
        'Siga em frente: o dedo atravessa a corda.',
        'Pouse na corda vizinha mais grave e *pare ali* por um instante.',
        'Volte preparando o próximo toque, sem pressa.'
      ] },
      { t: 'aviso', x: 'O apoyando *abafa* a corda em que o dedo pousa. Por isso ele nunca é usado em arpejos: a corda que estava soando pararia.' },
      { t: 'h', x: 'Exercício' },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }] },
        { notas: [{ pos: [[2, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 3]], fig: 'minima', dedo: 'm' }] }
      ], legenda: 'Escala de Sol em apoyando, alternando i e m. Cada dedo pousa na corda vizinha.', tocar: true, bpm: 76 },
      { t: 'tocar', titulo: 'Confira o seu apoyando', seq: [[1, 0], [1, 1], [1, 3], [1, 0]], rotulo: 'Quatro notas apoiadas na 1ª corda', x: 'Toque com apoyando. O som deve sair visivelmente mais forte que no tirando.' }
    ],
    erros: [
      { erro: 'O dedo bate na corda vizinha com barulho.', certo: 'O dedo pousa, não bate. Movimento contínuo e término suave.' },
      { erro: 'Usar apoyando em arpejo.', certo: 'Abafa a corda vizinha. Em arpejo, use tirando.' },
      { erro: 'Dedo muito curvado.', certo: 'No apoyando o dedo fica mais esticado e o movimento é mais horizontal.' },
      { erro: 'Fazer força para soar forte.', certo: 'O volume vem da massa deslocada e do apoio, não da tensão.' }
    ],
    criterios: [
      'O som é audivelmente mais forte e mais cheio que o do tirando.',
      'O dedo pousa sem ruído na corda vizinha.',
      'Oito notas seguidas com o mesmo volume.',
      'Não há tensão no antebraço.'
    ],
    exercicios: ['Escalas de uma oitava', 'Melodias do repertório inicial', 'Escada de velocidade com metrônomo']
  },

  {
    id: 'arpejos', nome: 'Arpejos', grupo: 'direita', nivel: 2, dificuldade: 'básica',
    aula: 'n2.2.4',
    desc: 'Tocar as notas de um acorde uma de cada vez, em sequência, deixando todas soarem juntas.',
    objetivo: 'Produzir acompanhamento e textura. É a técnica mais característica do violão e a base de quase todo o repertório.',
    blocos: [
      { t: 'p', x: 'Arpejo é um acorde "desdobrado" no tempo. O segredo não está nos dedos que tocam: está na *preparação* do dedo seguinte.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Monte o acorde com a mão esquerda e mantenha-o preso durante todo o arpejo.',
        'Use sempre *tirando*.',
        'Toque a primeira nota. Enquanto ela soa, *encoste o dedo seguinte na corda dele*.',
        'Toque a segunda. Prepare a terceira. E assim por diante.',
        'No fim do padrão, todas as notas devem estar soando juntas.'
      ] },
      { t: 'h', x: 'Os padrões básicos' },
      { t: 'tabela', cab: ['Padrão', 'Notas', 'Onde aparece'], linhas: [
        ['p-i-m-a', '4', 'o mais comum; acompanhamento em 4/4'],
        ['p-a-m-i', '4', 'descendo; mais difícil, o "a" ataca primeiro'],
        ['p-i-m-a-m-i', '6', 'valsa, 3/4 e 6/8'],
        ['p-i-p-m-p-a', '6', 'baixo marcado entre as agudas'],
        ['p (6ª) i m a p (4ª) i m a', '8', 'baixo alternado']
      ] },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am' }
      ], legenda: 'Padrão p-i-m-a-m-i em Lá menor.', tocar: true, bpm: 96 }
    ],
    erros: [
      { erro: 'Esperar a nota acabar para preparar o próximo dedo.', certo: 'Prepare durante. O dedo seguinte já está na corda.' },
      { erro: 'O anelar sai mais fraco.', certo: 'Trabalhe o "a" em separado, lentamente, até igualar.' },
      { erro: 'A mão balança junto com os dedos.', certo: 'A mão é a plataforma: só os dedos se movem.' },
      { erro: 'O arpejo para quando a esquerda troca de acorde.', certo: 'Treine a troca sem a mão direita.' }
    ],
    criterios: [
      'As notas saem com volume parelho.',
      'O espaçamento entre elas é exato (confira com metrônomo).',
      'Todas as notas do acorde continuam soando no fim do padrão.',
      'O padrão não interrompe nas trocas de acorde.'
    ],
    exercicios: ['Os 5 padrões nas cordas soltas', 'Am–E–Dm–E com p-i-m-a', 'Giuliani Op. 1 (120 arpejos, domínio público)']
  },

  {
    id: 'tremolo', nome: 'Tremolo', grupo: 'direita', nivel: 5, dificuldade: 'avançada',
    aula: null,
    desc: 'Repetição muito rápida da mesma nota aguda com os dedos a, m e i, enquanto o polegar toca o baixo e a melodia.',
    objetivo: 'Criar a ilusão de uma nota longa e contínua no violão, que é um instrumento de som que decai rápido.',
    blocos: [
      { t: 'p', x: 'O tremolo é a técnica mais famosa do violão clássico, e a mais exigente em regularidade. O padrão é sempre o mesmo: *p–a–m–i*, quatro notas por tempo, em que p toca o baixo e a, m, i repetem a mesma nota aguda.' },
      { t: 'p', x: 'Quando sai bem, o ouvinte não ouve quatro ataques: ouve uma melodia sustentada sobre um acompanhamento. É o efeito de *Recuerdos de la Alhambra*, de Tárrega (domínio público), a peça que definiu a técnica.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Comece *muito* devagar: 40 BPM, uma nota por clique. Sim, assim mesmo.',
        'O polegar toca o baixo e sai; não se apoie nele para se orientar.',
        'a, m e i tocam a *mesma corda*, com tirando, sem mexer a mão.',
        'A regularidade é mais importante que a velocidade. Um tremolo irregular é pior do que nenhum.',
        'Suba 4 BPM por semana, não por dia.',
        'Treine também o padrão invertido p–i–m–a: ele revela desigualdades que o padrão normal esconde.'
      ] },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }] }
      ], legenda: 'O padrão p-a-m-i, duas vezes. Em andamento real soa como uma nota contínua.', tocar: true, bpm: 60 },
      { t: 'metronomo', titulo: 'Metrônomo para o tremolo', bpm: 40, compasso: '4/4', x: 'Uma nota por clique no começo. Só suba quando quatro minutos seguidos saírem perfeitamente regulares.' }
    ],
    erros: [
      { erro: 'Tentar velocidade antes de regularidade.', certo: 'Tremolo rápido e irregular não engana ninguém. Devagar e parelho primeiro.' },
      { erro: 'Mover a mão ou o punho.', certo: 'Só os dedos. A mão é uma plataforma imóvel.' },
      { erro: 'O "a" sai mais fraco e cria um soluço.', certo: 'Treine a-m-i sem o polegar, ouvindo só a regularidade.' },
      { erro: 'Polegar pesado demais.', certo: 'O baixo sustenta; a melodia é a nota repetida.' }
    ],
    criterios: [
      'Os quatro ataques estão exatamente equidistantes (grave e confira).',
      'As três notas de a, m e i têm o mesmo volume.',
      'O polegar não atrasa nem adianta.',
      'O conjunto soa como uma linha contínua, não como quatro notas.'
    ],
    exercicios: ['p-a-m-i em cordas soltas a 40 BPM', 'Padrão invertido p-i-m-a', 'Tárrega, Recuerdos de la Alhambra (domínio público)']
  },

  {
    id: 'abafamento', nome: 'Abafamentos', grupo: 'direita', nivel: 2, dificuldade: 'básica',
    aula: 'n1.3.7',
    desc: 'Parar deliberadamente a vibração de uma corda para produzir silêncio ou encurtar uma nota.',
    objetivo: 'Fazer as pausas soarem de verdade e limpar baixos que ficaram soando quando não deviam.',
    blocos: [
      { t: 'p', x: 'No violão, soltar o dedo não produz silêncio: a corda continua vibrando. Fazer silêncio é uma ação, e ela tem técnica própria.' },
      { t: 'h', x: 'Os quatro abafamentos' },
      { t: 'tabela', cab: ['Situação', 'Como abafar'], linhas: [
        ['Corda solta soando', 'Encoste a polpa do dedo que vai tocar em seguida (ou o polegar) sobre ela'],
        ['Nota presa pela esquerda', 'Alivie a pressão do dedo sem tirá-lo da corda: a nota morre na hora'],
        ['Baixo que precisa ser curto', 'O polegar volta e pousa na corda que acabou de tocar'],
        ['Fim de peça, tudo de uma vez', 'Apoie a lateral da mão direita sobre todas as cordas']
      ] },
      { t: 'h', x: 'Passo a passo do abafamento do polegar' },
      { t: 'passos', itens: [
        'Toque a 6ª corda com o polegar.',
        'Toque a 5ª corda com o polegar e, no mesmo movimento, deixe-o *pousar de volta* na 6ª.',
        'A 6ª para de soar exatamente quando a 5ª começa.',
        'Isso é o que mantém a linha de baixo limpa em música com harmonia que muda rápido.'
      ] },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 0]], fig: 'seminima', texto: 'abafa' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 0]], fig: 'seminima', texto: 'abafa' }] }
      ], legenda: 'Nota e silêncio alternados. O silêncio tem que ser silêncio.', tocar: true, bpm: 70 }
    ],
    erros: [
      { erro: 'Ignorar as pausas e deixar tudo soando.', certo: 'Conte a pausa como se fosse uma nota muda e abafe no tempo.' },
      { erro: 'Abafar levantando o dedo da esquerda.', certo: 'Alivie a pressão sem tirar o dedo: é mais limpo e mais silencioso.' },
      { erro: 'Abafamento com estalo.', certo: 'Encoste, não bata. A polpa, não a unha.' }
    ],
    criterios: [
      'A pausa é silêncio completo, sem corda zumbindo.',
      'O abafamento acontece exatamente no tempo escrito.',
      'Não há estalo nem ruído no abafamento.'
    ],
    exercicios: ['Nota e pausa alternadas com metrônomo', 'Baixo abafado pelo polegar', 'Final de peça com a lateral da mão']
  },

  // ===================== MÃO ESQUERDA =====================
  {
    id: 'ligado-asc', nome: 'Ligado ascendente (martelo)', grupo: 'esquerda', nivel: 2, dificuldade: 'intermediária',
    aula: 'n2.2.7',
    desc: 'O dedo da mão esquerda cai sobre a corda já vibrando e produz uma nota mais aguda, sem ataque da mão direita.',
    objetivo: 'Tocar passagens rápidas, ligar o som e economizar movimento da mão direita.',
    blocos: [
      { t: 'p', x: 'Também chamado de *hammer-on*. A corda já está vibrando; o dedo que cai apenas encurta o comprimento vibrante, e a nota sobe sem interrupção.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Toque a nota de partida com a mão direita (corda solta ou presa).',
        'Levante bem o dedo que vai martelar: a altura da queda é o que dá volume.',
        'Deixe-o cair *de cima*, rápido e firme, na ponta, bem perto do traste da frente.',
        'O dedo fica lá, apertando apenas o necessário.',
        'A força vem da velocidade da queda, não da pressão depois.'
      ] },
      { t: 'h', x: 'Digitação' },
      { t: 'p', x: 'Os pares mais comuns são 1→2, 1→3, 2→4 e 0→1. O par 3→4 é o mais difícil e merece treino separado.' },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 1]], fig: 'seminima', texto: 'mart' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 3]], fig: 'seminima', texto: 'mart' }] },
        { notas: [{ pos: [[1, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 3]], fig: 'seminima', texto: 'mart' }, { pos: [[1, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 4]], fig: 'seminima', texto: 'mart' }] }
      ], legenda: 'Quatro martelos: 0→1, 0→3, 1→3 e 2→4.', tocar: true, bpm: 66 },
      { t: 'tocar', titulo: 'Confira o martelo', seq: [{ corda: 1, casa: 0 }, { corda: 1, casa: 1 }, { corda: 1, casa: 3 }], rotulo: 'Mi, Fá (martelo), Sol (martelo)', x: 'Um ataque só da mão direita. O app só reconhece as notas se o martelo soar de verdade.' }
    ],
    erros: [
      { erro: 'O martelo sai fraco.', certo: 'Levante mais o dedo antes de bater. É velocidade, não pressão.' },
      { erro: 'A nota sai abafada.', certo: 'O dedo caiu longe do traste ou deitado. Na ponta, perto do traste.' },
      { erro: 'A corda para de vibrar.', certo: 'O dedo encostou de leve antes de bater. Caia direto, sem roçar.' },
      { erro: 'Treinar muito tempo seguido.', certo: 'Cansa a mão esquerda rápido. 3 a 4 minutos por dia.' }
    ],
    criterios: [
      'A nota do martelo tem volume próximo ao da nota tocada.',
      'O som não é interrompido entre as duas notas.',
      'Funciona nas seis cordas.',
      'Funciona no par 3→4, que é o mais difícil.'
    ],
    exercicios: ['0→1 e 0→3 em todas as cordas', 'Pares 1→2, 2→3, 3→4', 'Sequências de 8 notas com um ataque']
  },

  {
    id: 'ligado-desc', nome: 'Ligado descendente (arrancado)', grupo: 'esquerda', nivel: 2, dificuldade: 'intermediária',
    aula: 'n2.2.7',
    desc: 'O dedo da mão esquerda puxa a corda de lado ao sair, produzindo uma nota mais grave.',
    objetivo: 'Descer rapidamente sem ataque da mão direita, com som ligado.',
    blocos: [
      { t: 'p', x: 'Também chamado de *pull-off*. O erro universal aqui é achar que basta levantar o dedo. Levantar não produz som: é preciso *arrancar* a corda.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        '*Prepare os dois dedos ao mesmo tempo*: o que vai tocar e o da nota de destino.',
        'Toque com a mão direita: soa a nota do dedo mais agudo.',
        'Puxe esse dedo *para baixo e para fora*, arrancando a corda de lado.',
        'A corda, ainda vibrando, encontra o dedo de destino e soa a nota mais grave.',
        'Se o dedo de destino não estiver lá, sai a corda solta: erro mais comum.'
      ] },
      { t: 'aviso', x: 'O dedo de destino tem que estar na corda *antes* de você arrancar. Não dá para preparar depois.' },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[1, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 1]], fig: 'seminima', texto: 'arr' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', texto: 'arr' }] }
      ], legenda: 'Arrancados 3→1 e 3→0.', tocar: true, bpm: 66 }
    ],
    erros: [
      { erro: 'Só levantar o dedo.', certo: 'Puxe a corda de lado ao sair.' },
      { erro: 'Sai a corda solta em vez da nota.', certo: 'O dedo de destino não estava preparado.' },
      { erro: 'A corda vizinha soa junto.', certo: 'O dedo arrancou para fora demais. Puxe na direção da palma.' },
      { erro: 'O arrancado sai mais fraco que o martelo.', certo: 'Normal. Treine-o separado até igualar.' }
    ],
    criterios: [
      'A nota de destino sai com volume próximo à nota tocada.',
      'Nenhuma corda vizinha soa junto.',
      'O dedo de destino está sempre preparado antes.',
      'Funciona nas seis cordas e nos pares 4→3, 3→2, 2→1.'
    ],
    exercicios: ['3→1 e 3→0 em todas as cordas', 'Cadeias: 4→3→2→1', 'Combinado com martelo: 8 notas num ataque']
  },

  {
    id: 'pestana', nome: 'Pestana completa', grupo: 'esquerda', nivel: 3, dificuldade: 'intermediária',
    aula: null,
    desc: 'O dedo 1 deitado sobre todas as seis cordas numa mesma casa, funcionando como uma pestana móvel.',
    objetivo: 'Tocar acordes em qualquer região do braço e abrir o caminho para o sistema CAGED.',
    blocos: [
      { t: 'p', x: 'A pestana assusta todo iniciante e trava muita gente por meses. A causa quase nunca é falta de força: é posicionamento.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Deite o dedo 1 ao longo da casa, *bem perto do traste da frente*.',
        'Role o dedo ligeiramente para o lado de fora, usando a *lateral* dele, não a polpa macia do meio. A lateral é mais dura e tem menos dobras.',
        'Posicione o dedo de modo que as linhas das articulações *não* fiquem em cima de uma corda: são elas que deixam a corda abafada.',
        'O polegar fica atrás, no meio do braço, apontando para cima, mais ou menos atrás do dedo 1.',
        'A força não vem do polegar apertando: vem do *peso do braço* puxando o braço do violão para trás.',
        'Monte os outros dedos *antes* de fechar a pestana.'
      ] },
      { t: 'dica', x: 'Teste diagnóstico: faça a pestana e toque corda por corda. Anote quais falham. Quase sempre são a 2ª ou a 3ª, porque caem em cima de uma articulação. Role o dedo um pouco e teste de novo.' },
      { t: 'acorde', lista: [
        { nome: 'F', desc: 'Fá maior — pestana na casa 1', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], casaInicial: 1, pestana: { casa: 1, de: 1, ate: 6 } },
        { nome: 'Bm', desc: 'Si menor — pestana na casa 2', cordas: [-1, 2, 4, 4, 3, 2], dedos: [0, 1, 3, 4, 2, 1], casaInicial: 2, pestana: { casa: 2, de: 1, ate: 5 } }
      ], legenda: 'Dois acordes clássicos de pestana. Comece pelo Fá na casa 1; se doer muito, experimente a mesma forma na casa 5, onde as cordas estão menos tensas.' },
      { t: 'dica', x: 'Truque de aprendizado: treine a forma de Fá na *casa 5* primeiro. A tensão da corda é menor e o espaçamento é mais confortável. Depois desça casa por casa até a 1.' }
    ],
    erros: [
      { erro: 'Usar a polpa macia do meio do dedo.', certo: 'Role para a lateral: ela é mais dura e tem menos dobras.' },
      { erro: 'Pestana no meio da casa.', certo: 'Bem perto do traste da frente. Exige metade da força.' },
      { erro: 'Apertar com o polegar.', certo: 'A força vem do peso do braço, não da pinça. Apertar com o polegar causa lesão.' },
      { erro: 'Treinar pestana 20 minutos seguidos.', certo: 'Três minutos, várias vezes ao dia. A mão precisa de tempo para se adaptar.' },
      { erro: 'Fechar a pestana antes dos outros dedos.', certo: 'Monte os outros dedos primeiro; a pestana fecha por último.' }
    ],
    criterios: [
      'As seis cordas soam limpas, uma por uma.',
      'O acorde inteiro soa sem nenhuma corda abafada.',
      'Consigo manter a pestana por 4 compassos sem dor.',
      'Consigo trocar de um acorde aberto para a pestana no tempo.'
    ],
    exercicios: ['Pestana solta na casa 5, corda por corda', 'Forma de Fá descendo da casa 5 até a 1', 'Troca Am → F → C → G']
  },

  {
    id: 'meia-pestana', nome: 'Meia pestana', grupo: 'esquerda', nivel: 3, dificuldade: 'intermediária',
    aula: null,
    desc: 'O dedo 1 cobrindo apenas duas ou três cordas, em vez das seis.',
    objetivo: 'Resolver passagens que exigem o dedo 1 em mais de uma corda sem o esforço da pestana completa.',
    blocos: [
      { t: 'p', x: 'Muito mais frequente no repertório do que a pestana completa, e muito menos cansativa. Em boa parte das peças de Sor e Carcassi é dela que se trata.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Deite o dedo 1 cobrindo só as cordas necessárias, normalmente a 1ª e a 2ª (ou a 1ª, 2ª e 3ª).',
        'A ponta do dedo fica *solta*, pendurada sobre a 3ª corda: não encoste nela.',
        'Use a lateral do dedo, perto do traste.',
        'Como são menos cordas, a força necessária é bem menor: aproveite isso e relaxe o resto da mão.'
      ] },
      { t: 'braco', casas: 5, pestana: { casa: 2, de: 1, ate: 2 }, notas: [
        { corda: 1, casa: 2, rotulo: '1' }, { corda: 2, casa: 2, rotulo: '1' }, { corda: 3, casa: 3, rotulo: '3', classe: 'raiz' }
      ], legenda: 'Meia pestana na casa 2, cobrindo só a 1ª e a 2ª cordas, com o dedo 3 na 3ª corda.' },
      { t: 'dica', x: 'Sempre que uma passagem pedir pestana completa mas só duas ou três cordas soarem de fato, use meia pestana. Economiza esforço e deixa a mão mais livre.' }
    ],
    erros: [
      { erro: 'Fazer pestana completa quando a meia bastaria.', certo: 'Olhe quais cordas realmente soam. Cubra só essas.' },
      { erro: 'A ponta do dedo encosta na corda de baixo e a abafa.', certo: 'Deixe a ponta pendurada, sem encostar.' },
      { erro: 'Manter a mesma força da pestana completa.', certo: 'Menos cordas, menos força. Relaxe.' }
    ],
    criterios: [
      'As cordas cobertas soam limpas.',
      'A corda logo abaixo da ponta não é abafada.',
      'Consigo alternar entre meia pestana e posição normal sem travar.'
    ],
    exercicios: ['Meia pestana nas casas 2, 5 e 7', 'Alternância com acordes abertos', 'Trechos de estudos de Carcassi']
  },

  {
    id: 'mudanca', nome: 'Mudanças de posição', grupo: 'esquerda', nivel: 2, dificuldade: 'intermediária',
    aula: 'n2.2.6',
    desc: 'Deslocar a mão esquerda inteira para outra região do braço.',
    objetivo: 'Alcançar qualquer nota do braço mantendo o tempo e a afinação.',
    blocos: [
      { t: 'p', x: 'A posição é definida pela casa em que o dedo 1 trabalha. Mudar de posição é mover a mão inteira — e o polegar vai junto.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Identifique o *dedo-guia*: um dedo que já está na corda certa e pode deslizar até a nova casa.',
        '*Alivie a pressão* desse dedo, mantendo o contato leve com a corda.',
        'Desloque a mão inteira, com o polegar iniciando o movimento.',
        'A mudança acontece *durante o valor da nota anterior*, não depois dela.',
        'Chegue e aperte só o necessário para a nota nova.'
      ] },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[1, 1]], fig: 'minima', dedo: 'i' }, { pos: [[1, 5]], fig: 'minima', dedo: 'm' }] },
        { notas: [{ pos: [[1, 5]], fig: 'minima', dedo: 'i' }, { pos: [[1, 1]], fig: 'minima', dedo: 'm' }] }
      ], legenda: 'Deslize entre as casas 1 e 5 com o dedo 1.', tocar: true, bpm: 60 }
    ],
    erros: [
      { erro: 'Levantar a mão e "pular".', certo: 'Deslize mantendo contato leve: é mais preciso e mais rápido.' },
      { erro: 'Polegar fica para trás.', certo: 'Ele vai junto, e inicia o movimento.' },
      { erro: 'Chiado alto.', certo: 'Pressão demais durante o deslize.' },
      { erro: 'Fazer a mudança depois da nota.', certo: 'Durante a nota anterior.' }
    ],
    criterios: [
      'A nota nova sai afinada na primeira tentativa.',
      'Não há buraco no tempo.',
      'O chiado é leve, não forte.',
      'O polegar acompanha a mão.'
    ],
    exercicios: ['Deslizes 1↔5 em todas as cordas', 'Escada de posições até a casa 9', 'Escalas de duas oitavas (Nível 3)']
  },

  {
    id: 'saltos', nome: 'Saltos', grupo: 'esquerda', nivel: 4, dificuldade: 'avançada',
    aula: null,
    desc: 'Mudanças de posição grandes e rápidas, em que não há dedo-guia nem tempo para deslizar.',
    objetivo: 'Atingir uma posição distante com precisão, no tempo, sem olhar.',
    blocos: [
      { t: 'p', x: 'Quando a distância é grande e o tempo é curto, não dá para deslizar. O salto exige outra habilidade: *memória de distância*, que é muscular e visual ao mesmo tempo.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Pratique o salto *sem tocar*: só a mão indo e voltando, dez vezes, sentindo a distância.',
        'Use um *ponto de referência visual*: as marcas do braço (casas 5, 7, 9, 12) existem exatamente para isso.',
        'Solte completamente a pressão antes de saltar. Mão tensa não salta com precisão.',
        'Pratique o salto *rápido com espera*: salte na velocidade final, mas espere no destino. Isso treina a velocidade sem exigir o tempo da música ainda.',
        'Só depois, encaixe no andamento.'
      ] },
      { t: 'dica', x: 'O princípio-chave: a velocidade do salto é sempre a mesma, rápida. O que muda é *quando* você sai. Se a passagem está lenta, saia mais tarde — nunca salte devagar.' },
      { t: 'braco', casas: 12, notas: [
        { corda: 1, casa: 1, rotulo: '1' }, { corda: 1, casa: 9, rotulo: '1', classe: 'raiz' }
      ], legenda: 'Um salto da 1ª para a 9ª posição. A marca da casa 9 é a referência visual.' }
    ],
    erros: [
      { erro: 'Saltar devagar.', certo: 'O salto é sempre rápido; o que muda é o momento da saída.' },
      { erro: 'Manter a pressão durante o salto.', certo: 'Solte completamente antes de sair.' },
      { erro: 'Procurar a casa com o olho depois de chegar.', certo: 'Olhe o destino *antes* de sair.' },
      { erro: 'Praticar só dentro da música.', certo: 'Isole o salto e faça dez repetições secas.' }
    ],
    criterios: [
      'Acerto a posição 9 de 10 vezes sem corrigir.',
      'O salto não atrasa o tempo.',
      'Consigo fazer sem olhar depois de 20 repetições.'
    ],
    exercicios: ['Salto seco 1→5, 1→7, 1→9', 'Rápido com espera', 'Trechos de repertório isolados']
  },

  {
    id: 'cromaticas', nome: 'Escalas cromáticas', grupo: 'esquerda', nivel: 2, dificuldade: 'básica',
    aula: 'n2.1.6',
    desc: 'Tocar todas as notas de semitom em semitom, um dedo por casa.',
    objetivo: 'Construir independência, força e precisão dos quatro dedos da mão esquerda.',
    blocos: [
      { t: 'p', x: 'É o exercício mais eficiente que existe para a mão esquerda, porque não deixa nenhum dedo de fora e não permite atalhos.' },
      { t: 'passos', itens: [
        'Um dedo por casa: 1 na casa 1, 2 na casa 2, 3 na casa 3, 4 na casa 4.',
        'Não levante o dedo anterior: deixe-o apoiado.',
        'Alterne i e m na mão direita.',
        'Suba pelas seis cordas e desça.',
        'Depois faça as permutações: 4-3-2-1, 1-3-2-4, 2-4-1-3, 1-4-2-3, 3-1-4-2.'
      ] },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[6, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[6, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 4]], fig: 'seminima', dedo: 'm' }] },
        { notas: [{ pos: [[5, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[5, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 4]], fig: 'seminima', dedo: 'm' }] }
      ], legenda: 'Cromático 1-2-3-4 nas cordas 6 e 5.', tocar: true, bpm: 72 },
      { t: 'metronomo', titulo: 'Escada de velocidade', bpm: 60, compasso: '4/4', x: 'Uma nota por clique. Suba 6 BPM só depois de um minuto perfeito.' }
    ],
    erros: [
      { erro: 'Levantar o dedo anterior.', certo: 'Deixe apoiado: é a restrição que gera independência.' },
      { erro: 'Mover a mão para alcançar a casa 4.', certo: 'Ajuste o polegar e o ângulo do braço do violão.' },
      { erro: 'Fazer rápido e sujo.', certo: 'Devagar e limpo. Cromático sujo ensina a sujeira.' }
    ],
    criterios: [
      'As quatro notas saem limpas nas seis cordas.',
      'A mão não se desloca.',
      'Os dedos anteriores ficam apoiados.',
      '80 BPM com uma nota por clique.'
    ],
    exercicios: ['1-2-3-4 nas seis cordas', 'As seis permutações', 'Cromático com mudança de corda']
  },

  {
    id: 'escalas', nome: 'Escalas maiores e menores', grupo: 'esquerda', nivel: 2, dificuldade: 'intermediária',
    aula: 'n2.2.5',
    desc: 'Tocar as sete notas de uma tonalidade em sequência, com digitação fixa.',
    objetivo: 'Construir vocabulário melódico, afinação, velocidade e conhecimento do braço.',
    blocos: [
      { t: 'p', x: 'Escalas não são castigo: são o vocabulário. Quase toda melodia é feita de pedaços de escala, e quem treina escalas lê mais rápido e erra menos.' },
      { t: 'passos', itens: [
        'Primeiro só a mão esquerda, sem tocar, conferindo a digitação.',
        'Depois devagar, com *apoyando* e alternância i–m.',
        'Diga o nome das notas em voz alta.',
        'Suba e desça: descer é sempre mais difícil.',
        'Só então ligue o metrônomo e suba em degraus.'
      ] },
      { t: 'tabela', cab: ['Escala', 'Alterações', 'Começa em'], linhas: [
        ['Dó maior', 'nenhuma', '5ª corda, casa 3'],
        ['Sol maior', 'Fá♯', '6ª corda, casa 3'],
        ['Ré maior', 'Fá♯, Dó♯', '4ª corda solta'],
        ['Lá maior', 'Fá♯, Dó♯, Sol♯', '5ª corda solta'],
        ['Lá menor natural', 'nenhuma', '5ª corda solta'],
        ['Mi menor natural', 'Fá♯', '6ª corda solta']
      ] },
      { t: 'braco', casas: 5, notas: [
        { corda: 5, casa: 3, rotulo: '1', classe: 'raiz' }, { corda: 4, casa: 0, rotulo: '2' }, { corda: 4, casa: 2, rotulo: '3' }, { corda: 4, casa: 3, rotulo: '4' },
        { corda: 3, casa: 0, rotulo: '5' }, { corda: 3, casa: 2, rotulo: '6' }, { corda: 2, casa: 0, rotulo: '7' }, { corda: 2, casa: 1, rotulo: '8', classe: 'raiz' }
      ], tocar: true, bpm: 96, legenda: 'Dó maior em uma oitava, primeira posição.' }
    ],
    erros: [
      { erro: 'Tocar só subindo.', certo: 'Descer é onde os erros aparecem.' },
      { erro: 'Esquecer as alterações da armadura.', certo: 'Diga em voz alta quais notas são alteradas antes de começar.' },
      { erro: 'Treinar sem metrônomo.', certo: 'Escala desigual não serve para nada.' },
      { erro: 'Usar tirando.', certo: 'Escalas pedem apoyando.' }
    ],
    criterios: [
      'Subo e desço sem erro de nota.',
      'Volume parelho em todas as notas.',
      'Alternância i–m mantida.',
      '88 BPM com uma nota por clique.'
    ],
    exercicios: ['Dó, Sol, Ré e Lá maiores em uma oitava', 'Lá e Mi menores', 'Escalas em duas oitavas (Nível 3)']
  },

  {
    id: 'harm-naturais', nome: 'Harmônicos naturais', grupo: 'esquerda', nivel: 3, dificuldade: 'intermediária',
    aula: null,
    desc: 'Tocar uma corda enquanto o dedo da mão esquerda apenas encosta sobre certos pontos, produzindo um som cristalino, de sino.',
    objetivo: 'Obter um timbre completamente diferente, muito usado como efeito e como ferramenta de afinação.',
    blocos: [
      { t: 'p', x: 'Uma corda não vibra só inteira: ela vibra também em metades, terços, quartos. Encostando o dedo exatamente num ponto de divisão, você *cancela* a vibração principal e deixa só a parcial — que soa aguda e cristalina.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'Encoste a polpa do dedo *em cima do traste*, não dentro da casa. Esta é a única técnica em que isso é certo.',
        'Encoste *de leve*: não aperte. O dedo só toca a corda.',
        'Toque a corda com a mão direita, um pouco mais perto do cavalete que o normal.',
        '*Imediatamente* depois do ataque, tire o dedo da corda.',
        'Se não sair, confira: dedo exatamente sobre o traste e pressão zero.'
      ] },
      { t: 'tabela', cab: ['Traste', 'Divisão', 'Resultado'], linhas: [
        ['12', 'metade da corda', 'uma oitava acima da corda solta'],
        ['7', 'um terço', 'uma oitava e uma quinta acima'],
        ['5', 'um quarto', 'duas oitavas acima'],
        ['4 e 9', 'um quinto / dois quintos', 'duas oitavas e uma terça acima (mais fraco)']
      ], legenda: 'Os harmônicos das casas 12, 7 e 5 são os mais fáceis e os mais usados.' },
      { t: 'braco', casas: 12, notas: [
        { corda: 1, casa: 12, rotulo: '12', classe: 'raiz' }, { corda: 2, casa: 12, rotulo: '12', classe: 'raiz' }, { corda: 3, casa: 12, rotulo: '12', classe: 'raiz' },
        { corda: 4, casa: 7, rotulo: '7' }, { corda: 5, casa: 7, rotulo: '7' }, { corda: 6, casa: 5, rotulo: '5' }
      ], legenda: 'Os três pontos principais. Encoste exatamente sobre a barrinha de metal.' },
      { t: 'dica', x: 'Uso prático: os harmônicos servem para afinar com muita precisão. O harmônico da casa 5 da 6ª corda e o da casa 7 da 5ª corda dão a mesma nota — se baterem, está afinado.' }
    ],
    erros: [
      { erro: 'Pôr o dedo dentro da casa.', certo: 'Exatamente em cima do traste.' },
      { erro: 'Apertar a corda.', certo: 'Pressão zero: só encoste.' },
      { erro: 'Deixar o dedo na corda depois do ataque.', certo: 'Tire imediatamente, senão o harmônico morre.' },
      { erro: 'Tocar perto do braço.', certo: 'Toque mais perto do cavalete: o harmônico sai mais claro.' }
    ],
    criterios: [
      'O harmônico da casa 12 sai limpo nas seis cordas.',
      'O da casa 7 e o da casa 5 também saem.',
      'O som é cristalino, sem a nota fundamental junto.',
      'Consigo usar harmônicos para conferir a afinação.'
    ],
    exercicios: ['Casa 12 nas seis cordas', 'Casas 7 e 5', 'Afinação por harmônicos (6ª/5 com 5ª/7)']
  },

  {
    id: 'harm-artificiais', nome: 'Harmônicos artificiais', grupo: 'esquerda', nivel: 4, dificuldade: 'avançada',
    aula: null,
    desc: 'Harmônico produzido em qualquer nota: a mão esquerda prende a casa, e a mão direita faz o papel de encostar e tocar.',
    objetivo: 'Tocar melodias inteiras em timbre de harmônico, não só as poucas notas dos harmônicos naturais.',
    blocos: [
      { t: 'p', x: 'Nos harmônicos naturais você só consegue as notas que caem nos pontos de divisão da corda solta. Nos artificiais, a mão esquerda "cria" uma nova corda solta ao prender uma casa, e a mão direita faz o resto.' },
      { t: 'h', x: 'Passo a passo' },
      { t: 'passos', itens: [
        'A mão esquerda prende a nota normalmente, por exemplo a 1ª corda na casa 3 (Sol).',
        'Conte *doze casas acima*: casa 15.',
        'Encoste o *indicador da mão direita* exatamente sobre o traste 15, de leve.',
        'Com o *anelar* (ou o polegar) da mesma mão, toque a corda.',
        'Tire o indicador imediatamente.',
        'Sai o Sol uma oitava acima, em timbre de sino.'
      ] },
      { t: 'dica', x: 'A conta é sempre a mesma: *casa presa + 12*. Se a esquerda prende a casa 5, o indicador direito vai na casa 17. Para os harmônicos de 12ª, some 7 em vez de 12 (mais difícil e mais fraco).' },
      { t: 'braco', casas: 15, notas: [
        { corda: 1, casa: 3, rotulo: 'esq', classe: 'raiz' }, { corda: 1, casa: 15, rotulo: 'dir' }
      ], legenda: 'Mão esquerda prende a casa 3; o indicador da direita encosta na casa 15 (3 + 12).' }
    ],
    erros: [
      { erro: 'Errar a distância de 12 casas.', certo: 'Conte sempre: casa presa + 12.' },
      { erro: 'Apertar com o indicador direito.', certo: 'Só encoste, exatamente sobre o traste.' },
      { erro: 'Tocar com o indicador que está encostando.', certo: 'Quem toca é o anelar ou o polegar.' },
      { erro: 'Deixar o indicador na corda.', certo: 'Tire na hora do ataque.' }
    ],
    criterios: [
      'O harmônico sai limpo em pelo menos três notas diferentes.',
      'Consigo fazer uma escala curta só com harmônicos artificiais.',
      'O som é cristalino, sem fundamental junto.'
    ],
    exercicios: ['Harmônico artificial em cada casa de 1 a 5 da 1ª corda', 'Escala de Dó em harmônicos', 'Trechos de repertório com harmônicos']
  },

  // ===================== EXPRESSÃO =====================
  {
    id: 'vibrato', nome: 'Vibrato', grupo: 'expressao', nivel: 4, dificuldade: 'intermediária',
    aula: null,
    desc: 'Oscilação controlada da altura de uma nota longa, feita pelo movimento do dedo da mão esquerda.',
    objetivo: 'Dar vida e sustentação a notas longas, que no violão decaem rápido.',
    blocos: [
      { t: 'p', x: 'O violão tem um problema físico: a nota começa forte e morre rápido. O vibrato cria movimento dentro da nota e faz o ouvido perceber que ela continua viva.' },
      { t: 'h', x: 'O vibrato clássico é longitudinal' },
      { t: 'p', x: 'Diferente da guitarra elétrica, onde o dedo empurra a corda para cima e para baixo, no violão clássico o vibrato é feito *ao longo da corda*: a mão balança na direção do braço, para a frente e para trás, esticando levemente a corda nos dois sentidos.' },
      { t: 'passos', itens: [
        'Prenda a nota normalmente, na ponta do dedo, perto do traste.',
        'Mantenha a pressão constante.',
        'Balance o *antebraço inteiro* na direção do braço do violão, para a frente e para trás.',
        'O dedo não desliza: ele fica preso no mesmo ponto e a corda estica e relaxa.',
        'Comece devagar e amplo; depois reduza a amplitude e aumente a velocidade.',
        'O vibrato começa *depois* do ataque, nunca junto com ele.'
      ] },
      { t: 'dica', x: 'Regra de bom gosto: vibrato é tempero. Use em notas longas e importantes, não em todas. Vibrato constante cansa o ouvido e esconde o fraseado.' }
    ],
    erros: [
      { erro: 'Mover só o dedo.', certo: 'O movimento vem do antebraço; o dedo fica firme.' },
      { erro: 'Empurrar a corda para cima e para baixo.', certo: 'Isso é vibrato de guitarra elétrica. No clássico é ao longo da corda.' },
      { erro: 'Começar o vibrato junto com o ataque.', certo: 'Deixe a nota falar primeiro; o vibrato entra depois.' },
      { erro: 'Vibrato em tudo.', certo: 'Só em notas longas e expressivas.' }
    ],
    criterios: [
      'A oscilação é regular, não aos solavancos.',
      'Consigo controlar a velocidade e a amplitude.',
      'A nota soa mais sustentada com vibrato do que sem.',
      'Uso vibrato por escolha, não por hábito.'
    ],
    exercicios: ['Vibrato lento e amplo na casa 7', 'Variar velocidade mantendo a amplitude', 'Aplicar numa nota longa de uma peça']
  },

  {
    id: 'glissando', nome: 'Glissando', grupo: 'expressao', nivel: 4, dificuldade: 'intermediária',
    aula: null,
    desc: 'Deslizar o dedo pela corda fazendo soar as notas intermediárias.',
    objetivo: 'Criar um efeito de ligação contínua entre duas notas; é um recurso expressivo, não só um deslocamento.',
    blocos: [
      { t: 'p', x: 'No glissando, o *caminho é o efeito*: você quer que o ouvinte ouça a subida ou a descida pelas casas. A corda é tocada uma vez e o dedo desliza mantendo pressão.' },
      { t: 'passos', itens: [
        'Toque a nota de partida com a mão direita.',
        'Mantenha a *pressão* enquanto desliza: é ela que faz as notas do caminho soarem.',
        'Deslize no tempo escrito: um glissando tem duração.',
        'Chegue na nota de destino exatamente no tempo dela.',
        'Se a nota de destino precisar de novo ataque, a partitura indica.'
      ] },
      { t: 'tab', compassos: [
        { notas: [{ pos: [[3, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 7]], fig: 'minima', texto: 'gliss' }, { pos: [[3, 2]], fig: 'seminima', texto: 'gliss' }] }
      ], legenda: 'Glissando da casa 2 à casa 7 e de volta, na 3ª corda.', tocar: true, bpm: 60 }
    ],
    erros: [
      { erro: 'Aliviar a pressão durante o deslize.', certo: 'Aí vira mudança de posição, não glissando: as notas do caminho somem.' },
      { erro: 'Deslizar rápido demais.', certo: 'O glissando tem duração escrita. Distribua pelo tempo.' },
      { erro: 'Chegar depois do tempo.', certo: 'Comece mais cedo; chegue no tempo.' }
    ],
    criterios: [
      'As notas do caminho são audíveis.',
      'O glissando chega exatamente no tempo da nota de destino.',
      'A pressão se mantém durante todo o deslize.'
    ],
    exercicios: ['Glissando 2→7 em todas as cordas', 'Glissando descendente', 'Aplicar em trechos de repertório']
  },

  {
    id: 'portamento', nome: 'Portamento', grupo: 'expressao', nivel: 4, dificuldade: 'intermediária',
    aula: null,
    desc: 'Deslizar entre duas notas mantendo um contato leve, de modo que a ligação seja sentida mas o caminho não seja o protagonista.',
    objetivo: 'Ligar duas notas de frases diferentes com naturalidade, imitando a voz humana.',
    blocos: [
      { t: 'p', x: 'Portamento e glissando são parentes, e muita gente usa os dois nomes como sinônimos. A diferença prática é de intenção e de pressão.' },
      { t: 'comparar',
        a: { titulo: 'Glissando', itens: ['Pressão mantida', 'As notas do caminho são o efeito', 'Está escrito como efeito', 'Chama atenção'] },
        b: { titulo: 'Portamento', itens: ['Pressão aliviada, contato leve', 'O caminho é discreto, quase um sussurro', 'Serve à expressão da frase', 'Imita o canto'] }
      },
      { t: 'passos', itens: [
        'Toque a nota de partida.',
        'Alivie a pressão até quase soltar, mantendo o contato.',
        'Deslize no tempo da respiração da frase, não mecanicamente.',
        'Chegue e aperte de novo na nota de destino.',
        'Geralmente a nota de destino é tocada de novo pela mão direita.'
      ] },
      { t: 'dica', x: 'Portamento é um dos recursos mais pessoais do violonista. Use com parcimônia: duas ou três vezes numa peça inteira já é bastante.' }
    ],
    erros: [
      { erro: 'Usar portamento em toda mudança de posição.', certo: 'Vira maneirismo. Use por escolha expressiva.' },
      { erro: 'Pressão demais.', certo: 'Vira glissando e chama atenção demais.' },
      { erro: 'Portamento mecânico, sempre igual.', certo: 'Ele acompanha a respiração da frase.' }
    ],
    criterios: [
      'O deslize é discreto, mas audível.',
      'A frase soa mais conectada com ele do que sem.',
      'Uso no máximo duas ou três vezes por peça.'
    ],
    exercicios: ['Portamento entre duas notas de uma frase cantável', 'Comparar com glissando na mesma passagem']
  },

  {
    id: 'dinamica', nome: 'Controle de dinâmica', grupo: 'expressao', nivel: 2, dificuldade: 'intermediária',
    aula: 'n2.2.8',
    desc: 'Controlar o volume de cada nota conscientemente.',
    objetivo: 'Dar forma às frases e separar melodia de acompanhamento.',
    blocos: [
      { t: 'p', x: 'Um iniciante toca tudo no mesmo volume. Um músico decide o volume de cada nota. É a maior diferença audível entre os dois.' },
      { t: 'passos', itens: [
        'Treine cinco níveis definidos: pp, p, mf, f e ff.',
        'O volume vem da *velocidade do dedo* na corda, não da força.',
        'Apoyando dá mais volume que tirando: use isso a seu favor.',
        'Crescendo e diminuendo são rampas: distribua a mudança por todas as notas.',
        'Na textura com melodia e acompanhamento, toque a melodia claramente acima.'
      ] },
      { t: 'pauta', txt: 'c4 d4 e4 f4 | g4 a4 b4 c5 | c5 b4 a4 g4 | f4 e4 d4 c4', formula: [4, 4], tocar: true, bpm: 80, legenda: 'Escala com crescendo na subida e diminuendo na descida.' }
    ],
    erros: [
      { erro: 'Aumentar o volume com a mão esquerda.', certo: 'A esquerda não controla volume nenhum.' },
      { erro: 'Tocar forte com força estática.', certo: 'Som duro e mão cansada. Velocidade, não tensão.' },
      { erro: 'Crescendo em degraus.', certo: 'Rampa: distribua por todas as notas.' },
      { erro: 'Melodia no mesmo volume do acompanhamento.', certo: 'A melodia precisa estar acima.' }
    ],
    criterios: [
      'Cinco níveis distintos e reproduzíveis.',
      'Crescendo de oito notas sem degraus.',
      'Melodia audivelmente acima do acompanhamento numa gravação.'
    ],
    exercicios: ['Escada de cinco volumes', 'Crescendo e diminuendo numa escala', 'Arpejo com melodia destacada']
  },

  {
    id: 'timbre', nome: 'Controle de timbre', grupo: 'expressao', nivel: 3, dificuldade: 'intermediária',
    aula: null,
    desc: 'Mudar a cor do som alterando o ponto e o ângulo de ataque da mão direita.',
    objetivo: 'Dar cores diferentes a seções diferentes de uma peça; é um dos maiores recursos expressivos do violão.',
    blocos: [
      { t: 'p', x: 'O violão tem uma vantagem sobre quase todos os instrumentos: o timbre muda radicalmente conforme *onde* a corda é tocada. E isso está inteiramente sob o seu controle.' },
      { t: 'tabela', cab: ['Nome', 'Onde tocar', 'Som'], linhas: [
        ['Ponticello', 'bem perto do cavalete', 'Metálico, nasal, brilhante, cortante'],
        ['Natural', 'sobre a boca', 'Cheio, equilibrado: o padrão'],
        ['Tasto / dolce', 'sobre o fim do braço', 'Doce, aveludado, escuro, suave']
      ] },
      { t: 'h', x: 'Outros controles de timbre' },
      { t: 'passos', itens: [
        '*Ângulo da unha*: ataque mais perpendicular dá som mais duro; mais oblíquo, mais doce.',
        '*Proporção unha/polpa*: mais polpa, som mais redondo; mais unha, mais definido.',
        '*Apoyando ou tirando*: o apoyando é naturalmente mais escuro e cheio.',
        '*Velocidade de ataque*: ataque rápido traz mais agudos.'
      ] },
      { t: 'dica', x: 'Exercício de consciência: toque a mesma frase três vezes — ponticello, natural e tasto — gravando. Ao ouvir, você vai se surpreender com o quanto o mesmo violão pode soar diferente.' }
    ],
    erros: [
      { erro: 'Tocar a peça inteira no mesmo ponto.', certo: 'Seções diferentes pedem cores diferentes.' },
      { erro: 'Mudar o timbre sem intenção, por acaso.', certo: 'Decida e marque na partitura onde muda.' },
      { erro: 'Exagerar no ponticello.', certo: 'Muito perto do cavalete o som vira apenas fino, não brilhante.' }
    ],
    criterios: [
      'Consigo três timbres claramente distintos na mesma nota.',
      'Mudo de timbre sem interromper o fluxo da música.',
      'Marco na partitura onde cada cor é usada.'
    ],
    exercicios: ['A mesma frase em três timbres', 'Mudança de cor entre seções A e B', 'Melodia em tasto sobre acompanhamento natural']
  },

  {
    id: 'vozes', nome: 'Independência de vozes', grupo: 'expressao', nivel: 4, dificuldade: 'avançada',
    aula: null,
    desc: 'Tocar duas ou mais linhas melódicas ao mesmo tempo, cada uma com o seu volume, articulação e caráter.',
    objetivo: 'Executar música polifônica — Bach, Sor, repertório renascentista — como ela foi escrita.',
    blocos: [
      { t: 'p', x: 'O violão é um instrumento polifônico: ele toca várias vozes ao mesmo tempo, como um coro pequeno. A dificuldade é que *uma única mão* faz todas elas.' },
      { t: 'h', x: 'Método de estudo' },
      { t: 'passos', itens: [
        'Identifique as vozes na partitura. Normalmente as hastes para cima são uma voz e para baixo, outra.',
        '*Toque cada voz sozinha*, como se fosse uma peça independente. Decore o som de cada uma.',
        'Toque duas vozes juntas, mas com uma bem mais forte que a outra. Depois inverta.',
        'Preste atenção às *durações*: numa voz, a nota longa precisa continuar soando enquanto a outra se move. É aqui que quase todo mundo falha.',
        'Só então toque tudo junto, com o equilíbrio final.'
      ] },
      { t: 'aviso', x: 'O erro mais comum em polifonia é soltar a nota longa cedo demais, porque o dedo precisou sair para fazer outra coisa. Procure digitações que permitam sustentar.' },
      { t: 'pauta', compassos: [
        { notas: [{ midis: [48, 76], fig: 'minima' }, { midis: [48, 74], fig: 'minima' }] },
        { notas: [{ midis: [53, 72], fig: 'minima' }, { midis: [55, 71], fig: 'minima' }] }
      ], formula: [4, 4], tocar: true, bpm: 60, legenda: 'Duas vozes: a de cima se move, a de baixo sustenta. Cada uma precisa ser ouvida.' }
    ],
    erros: [
      { erro: 'Tocar tudo como se fosse um acorde arpejado.', certo: 'Cada voz tem a sua linha. Toque-as separadas primeiro.' },
      { erro: 'Soltar a nota longa antes do tempo.', certo: 'Escolha digitação que permita sustentar.' },
      { erro: 'Todas as vozes no mesmo volume.', certo: 'A voz principal precisa estar acima das outras.' }
    ],
    criterios: [
      'Consigo tocar cada voz sozinha, de memória.',
      'A voz principal se destaca na gravação.',
      'As notas longas duram o tempo escrito.',
      'Consigo inverter o destaque entre as vozes.'
    ],
    exercicios: ['Cada voz separada', 'Duas vozes com uma destacada, depois invertida', 'Estudo nº 2 do Nível 2 (baixo caminhante)']
  },

  // ===================== HABILIDADES MUSICAIS =====================
  {
    id: 'primeira-vista', nome: 'Leitura à primeira vista', grupo: 'musical', nivel: 3, dificuldade: 'intermediária',
    aula: 'n2.1.1',
    desc: 'Tocar uma partitura nunca vista antes, no tempo, sem parar.',
    objetivo: 'Aprender repertório muito mais rápido, tocar em conjunto e ganhar autonomia musical.',
    blocos: [
      { t: 'p', x: 'A leitura à primeira vista é uma habilidade separada da leitura comum. Ela se treina de um jeito próprio e melhora rapidamente — mas só se você praticar *material novo todos os dias*.' },
      { t: 'h', x: 'As cinco regras' },
      { t: 'passos', itens: [
        '*Nunca pare.* Errar uma nota é aceitável; parar não é. Siga no tempo, custe o que custar.',
        '*Olhe à frente.* Enquanto toca um compasso, os olhos já estão no próximo.',
        '*Escolha material fácil.* Primeira vista se treina com música bem abaixo do seu nível técnico.',
        '*Analise 30 segundos antes*: armadura, fórmula, andamento, desenho geral, trechos difíceis.',
        '*Toque devagar o bastante* para que o trecho mais difícil saia. O andamento é ditado pela parte difícil.'
      ] },
      { t: 'dica', x: 'Rotina que funciona: 10 minutos por dia com material novo, sempre fácil. Nunca repita a mesma peça no dia seguinte — o objetivo é ler, não decorar.' },
      { t: 'ir', rota: 'leitura', titulo: 'Treinar leitura', x: 'A tela de Leitura gera exercícios infinitos de identificação de notas.' },
      { t: 'ir', rota: 'partituras', titulo: 'Abrir Partituras', x: 'Na tela de Partituras, escolha uma peça que você nunca tocou e leia com o cursor.' }
    ],
    erros: [
      { erro: 'Parar para corrigir o erro.', certo: 'Nunca pare. O tempo é mais importante que a nota.' },
      { erro: 'Ler material difícil demais.', certo: 'Primeira vista se treina bem abaixo do seu nível.' },
      { erro: 'Começar sem olhar a armadura.', certo: 'Trinta segundos de análise antes economizam o resto.' },
      { erro: 'Repetir a mesma peça.', certo: 'Material novo todo dia: o objetivo é ler, não decorar.' }
    ],
    criterios: [
      'Leio uma peça nova sem parar, do começo ao fim.',
      'Mantenho o tempo mesmo errando notas.',
      'Meus olhos estão sempre um compasso à frente.',
      'Analiso armadura, fórmula e desenho antes de começar.'
    ],
    exercicios: ['10 minutos de material novo por dia', 'Ler só o ritmo, batendo palma', 'Ler sem o violão, cantando']
  },

  {
    id: 'memorizacao', nome: 'Memorização', grupo: 'musical', nivel: 3, dificuldade: 'intermediária',
    aula: null,
    desc: 'Guardar uma peça de forma segura, usando mais de um tipo de memória.',
    objetivo: 'Tocar sem partitura, com segurança suficiente para se apresentar.',
    blocos: [
      { t: 'p', x: 'Memória muscular sozinha é traiçoeira: ela funciona perfeitamente até o dia em que um nervosismo interrompe a sequência — e aí não há de onde recomeçar. A solução é usar *quatro* memórias ao mesmo tempo.' },
      { t: 'tabela', cab: ['Memória', 'O que é', 'Como treinar'], linhas: [
        ['Muscular', 'Os dedos sabem o caminho', 'Repetição lenta e correta'],
        ['Auditiva', 'Você sabe como soa', 'Cantar a peça inteira sem o violão'],
        ['Visual', 'Você vê a partitura e o braço', 'Fechar os olhos e "ver" a página; olhar o braço conscientemente'],
        ['Analítica', 'Você entende a estrutura', 'Saber as seções, os acordes, as modulações']
      ] },
      { t: 'h', x: 'Método que funciona' },
      { t: 'passos', itens: [
        'Memorize *por seções*, não do começo ao fim.',
        'Crie *pontos de partida*: escolha de 5 a 8 lugares da peça e treine começar de cada um deles.',
        'Toque cada seção *sem o violão*, imaginando o som e o movimento.',
        'Cante a melodia inteira de memória, sem o instrumento.',
        'Saiba dizer, para cada seção, em que tonalidade está e quais são os acordes.',
        'Teste: toque de memória num dia diferente, sem aquecer.'
      ] },
      { t: 'dica', x: 'O teste definitivo: consegue começar do compasso 17 sem tocar os 16 anteriores? Se não, a peça está memorizada só na memória muscular.' }
    ],
    erros: [
      { erro: 'Confiar só na memória muscular.', certo: 'Use as quatro memórias.' },
      { erro: 'Memorizar sempre começando do início.', certo: 'Crie pontos de partida espalhados.' },
      { erro: 'Nunca testar fora do contexto de estudo.', certo: 'Toque de memória em outro dia, sem aquecer, em outro lugar.' },
      { erro: 'Memorizar antes de a peça estar tecnicamente pronta.', certo: 'Memorizar erro é pior do que não memorizar.' }
    ],
    criterios: [
      'Consigo começar de 5 pontos diferentes da peça.',
      'Canto a melodia inteira sem o violão.',
      'Sei dizer a estrutura e os acordes de cada seção.',
      'Toco de memória num dia diferente, sem aquecer.'
    ],
    exercicios: ['Memorização por seções', 'Pontos de partida', 'Estudo mental sem o instrumento']
  }
];

export const porGrupo = (grupo) => TECNICAS.filter((t) => t.grupo === grupo);
export const tecnicaPorId = (id) => TECNICAS.find((t) => t.id === id) || null;
export const NIVEIS_TECNICA = [...new Set(TECNICAS.map((t) => t.nivel))].sort((a, b) => a - b);
export const DIFICULDADES = ['básica', 'intermediária', 'avançada'];
