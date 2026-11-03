// Curso de CAGED do LLMusic: 12 aulas, prova final e plano de estudo de 4 semanas.
// Cada aula é uma lista de "blocos" que a tela desenha:
//   p/h/dica/lista/tabela = texto;  forma = uma forma no braço;  todas = as formas encadeadas;
//   caixa = escala dentro da forma;  prog = progressão de acordes (com áudio);
//   tocar = exercício com microfone;  check = lista de prática que fica marcada.
// Tonalidades são números: Dó=0, Ré=2, Mi=4, Fá=5, Sol=7, Lá=9, Si♭=10.

const T = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, Bb: 10, B: 11 };

export const AULAS = [
  {
    id: 'a01', titulo: 'O que é o CAGED', resumo: 'A ideia geral: um acorde, vários lugares.',
    quiz: { tipos: ['conceito', 'ordem'], n: 6 },
    blocos: [
      { t: 'p', x: 'Imagine que você precise tocar o acorde de Dó maior (C). Você já sabe tocar na posição aberta, perto do começo do braço. Mas o mesmo acorde, com exatamente as mesmas três notas (Dó, Mi e Sol), pode ser tocado em outros quatro lugares do braço. É isso que o sistema CAGED organiza.' },
      { t: 'p', x: 'CAGED (lê-se "quêiged") são as cinco letras dos acordes abertos mais comuns: C, A, G, E e D. Cada um deles tem um "formato" de mão. Se você põe uma pestana (um dedo apertando todas as cordas) e leva esse formato para frente no braço, ele continua sendo o mesmo tipo de acorde, só que em outra tonalidade.' },
      { t: 'h', x: 'Veja: o acorde de Dó maior em cinco lugares' },
      { t: 'todas', tonica: T.C, qual: 'maior', legenda: 'Cada cor é uma forma. As cinco formas desenham o mesmo acorde (Dó maior) subindo pelo braço: C → A → G → E → D. Depois do D a corrente recomeça no C, doze casas à frente.' },
      { t: 'h', x: 'Por que isso é tão útil?' },
      { t: 'lista', itens: [
        'Você acha qualquer acorde em qualquer lugar do braço, sem decorar centenas de desenhos.',
        'Você consegue trocar de acorde com pouco movimento, ficando na mesma região do braço.',
        'Você enxerga onde estão as notas das escalas, o que é a base para improvisar e criar melodias.',
        'Você entende por que o violão "faz sentido": tudo se repete a cada 12 casas.'
      ] },
      { t: 'dica', x: 'Não tente aprender tudo hoje. Este curso tem 12 aulas curtas. Faça uma por dia, pratique com o violão na mão e só avance quando o quiz da aula te der pelo menos 2 estrelas.' },
      { t: 'h', x: 'O mapa do curso' },
      { t: 'lista', itens: [
        'Aulas 2 e 3: o que é um acorde e as 5 formas abertas.',
        'Aulas 4 a 6: pestana, a corrente das formas e o método para achar qualquer acorde.',
        'Aulas 7 a 9: trocar de forma, acordes menores e acordes com sétima.',
        'Aulas 10 e 11: escalas dentro das formas e pentatônica.',
        'Aula 12: progressões, plano de 4 semanas e prova final.'
      ] }
    ]
  },
  {
    id: 'a02', titulo: 'Acordes por dentro (tríade)', resumo: 'Raiz, terça e quinta: do que o acorde é feito.',
    quiz: { tipos: ['acorde', 'conceito', 'raiz'], n: 6 },
    blocos: [
      { t: 'p', x: 'Um acorde maior simples é feito de três notas, chamadas de tríade: a raiz (R), a terça (3) e a quinta (5). A raiz dá o nome ao acorde: o acorde de Dó maior tem raiz Dó.' },
      { t: 'p', x: 'Em Dó maior as três notas são Dó (R), Mi (3) e Sol (5). Ao tocar uma forma de acorde com as seis cordas você toca essas mesmas três notas, só que repetidas em oitavas diferentes. Por isso o acorde soa "cheio" mas continua sendo as mesmas três.' },
      { t: 'forma', id: 'C', tonica: T.C, qual: 'maior', rotulo: 'graus', legenda: 'Dó maior aberto, com os graus: R (raiz), 3 (terça) e 5 (quinta). A bolinha com contorno mais forte é a raiz.' },
      { t: 'forma', id: 'C', tonica: T.C, qual: 'maior', rotulo: 'notas', legenda: 'A mesma forma mostrando o nome das notas: Dó, Mi e Sol, repetidas.' },
      { t: 'h', x: 'Como saber se é maior ou menor?' },
      { t: 'p', x: 'É a terça que decide. Em Dó maior a terça é Mi. Se baixarmos a terça meio tom (Mi♭), o acorde vira Dó menor (Cm), mais triste. Raiz e quinta ficam iguais.' },
      { t: 'tabela', cab: ['Acorde', 'Fórmula', 'Notas em Dó'], linhas: [
        ['Maior', 'R 3 5', 'Dó Mi Sol'],
        ['Menor', 'R ♭3 5', 'Dó Mi♭ Sol']
      ] },
      { t: 'dica', x: 'Cada letra é um nome: C = Dó, D = Ré, E = Mi, F = Fá, G = Sol, A = Lá, B = Si. Nas cifras (as letras sobre as músicas) é assim que os acordes são escritos.' }
    ]
  },
  {
    id: 'a03', titulo: 'As cinco formas abertas', resumo: 'C, A, G, E e D: aprenda cada formato de mão.',
    quiz: { tipos: ['forma', 'acorde', 'raiz'], n: 8 },
    blocos: [
      { t: 'p', x: 'Estas são as cinco formas que dão nome ao sistema. Aprenda uma por vez. Para cada uma, olhe o desenho, monte a mão devagar e toque corda por corda para conferir se todas soam limpas. Depois use o botão do microfone para o app conferir cada nota.' },
      { t: 'h', x: 'Forma de C (Dó)' },
      { t: 'forma', id: 'C', tonica: T.C, qual: 'maior', rotulo: 'dedos', legenda: 'Forma de C. Raiz na 5ª corda. Não toque a 6ª corda.' },
      { t: 'tocar', id: 'C', tonica: T.C, qual: 'maior' },
      { t: 'h', x: 'Forma de A (Lá)' },
      { t: 'forma', id: 'A', tonica: T.A, qual: 'maior', rotulo: 'dedos', legenda: 'Forma de A. Raiz na 5ª corda solta. Três dedos lado a lado na casa 2. Não toque a 6ª corda.' },
      { t: 'tocar', id: 'A', tonica: T.A, qual: 'maior' },
      { t: 'h', x: 'Forma de G (Sol)' },
      { t: 'forma', id: 'G', tonica: T.G, qual: 'maior', rotulo: 'dedos', legenda: 'Forma de G. Raiz na 6ª corda, casa 3. É a mais esticada: use as pontas dos dedos.' },
      { t: 'tocar', id: 'G', tonica: T.G, qual: 'maior' },
      { t: 'h', x: 'Forma de E (Mi)' },
      { t: 'forma', id: 'E', tonica: T.E, qual: 'maior', rotulo: 'dedos', legenda: 'Forma de E. Raiz na 6ª corda solta. Esta forma é a mais usada com pestana.' },
      { t: 'tocar', id: 'E', tonica: T.E, qual: 'maior' },
      { t: 'h', x: 'Forma de D (Ré)' },
      { t: 'forma', id: 'D', tonica: T.D, qual: 'maior', rotulo: 'dedos', legenda: 'Forma de D. Raiz na 4ª corda solta. Só as quatro cordas finas.' },
      { t: 'tocar', id: 'D', tonica: T.D, qual: 'maior' },
      { t: 'check', chave: 'formas', itens: ['Toquei C, A, G, E e D abertos com todas as cordas soando', 'Consigo trocar de C para G em menos de 3 segundos', 'Consigo trocar de E para A e de A para D sem olhar'] }
    ]
  },
  {
    id: 'a04', titulo: 'Pestana: a forma desliza', resumo: 'Como levar um formato para outra tonalidade.',
    quiz: { tipos: ['casa', 'forma', 'conceito'], n: 7 },
    blocos: [
      { t: 'p', x: 'O acorde de Mi (E) aberto usa cordas soltas. Se você levar o formato inteiro uma casa para frente, as cordas que antes eram soltas passam a ser "a casa 1". Para elas continuarem soando, o dedo indicador deita sobre todas as cordas daquela casa. Isso é a pestana: ela funciona como uma pestana nova, pois faz o papel da pestana do instrumento (a "porta" do braço).' },
      { t: 'forma', id: 'E', tonica: T.E, qual: 'maior', rotulo: 'graus', legenda: 'Mi maior aberto (forma de E).' },
      { t: 'forma', id: 'E', tonica: T.F, qual: 'maior', rotulo: 'graus', legenda: 'A mesma forma uma casa à frente = Fá maior. A faixa tracejada é a pestana do indicador.' },
      { t: 'forma', id: 'E', tonica: T.G, qual: 'maior', rotulo: 'graus', legenda: 'A forma de E na casa 3 é Sol maior. Cada casa que a forma anda sobe um semitom.' },
      { t: 'p', x: 'Regra de ouro: quando o formato anda uma casa para frente, o acorde sobe um semitom. Mi → Fá (1 casa) → Fá# (2 casas) → Sol (3 casas) → e assim por diante.' },
      { t: 'h', x: 'O mesmo vale para a forma de A' },
      { t: 'forma', id: 'A', tonica: T.A, qual: 'maior', rotulo: 'graus', legenda: 'Lá maior aberto.' },
      { t: 'forma', id: 'A', tonica: T.Bb, qual: 'maior', rotulo: 'graus', legenda: 'Forma de A uma casa à frente = Si♭ maior (B♭).' },
      { t: 'forma', id: 'A', tonica: T.C, qual: 'maior', rotulo: 'graus', legenda: 'Forma de A na casa 3 = Dó maior. É o mesmo Dó das outras formas, só que mais à frente no braço.' },
      { t: 'tocar', id: 'E', tonica: T.F, qual: 'maior' },
      { t: 'dica', x: 'A pestana é difícil no começo e cansa a mão: é normal. Treine 1 minuto por dia, aperte perto do traste (não no meio da casa) e use o lado do dedo, não a barriga. Em semanas ela fica fácil.' },
      { t: 'check', chave: 'pestana', itens: ['Fiz a pestana na casa 1 e todas as cordas soaram (Fá maior)', 'Fiz a forma de A na casa 3 (Dó maior)', 'Treinei pestana por 1 minuto em 5 dias'] }
    ]
  },
  {
    id: 'a05', titulo: 'A corrente das cinco formas', resumo: 'Como as formas se encaixam e dão a volta.',
    quiz: { tipos: ['ordem', 'forma', 'casa'], n: 8 },
    blocos: [
      { t: 'p', x: 'As cinco formas de um mesmo acorde não ficam espalhadas ao acaso: elas se encaixam como peças de um quebra-cabeça, sempre na mesma ordem, e cobrem o braço todo. Em Dó maior a ordem subindo é C, A, G, E, D. Depois do D, volta o C doze casas à frente.' },
      { t: 'todas', tonica: T.C, qual: 'maior', legenda: 'Dó maior em toda a extensão: as formas se tocam nas bordas.' },
      { t: 'p', x: 'Em outra tonalidade a ordem das letras é a mesma (C → A → G → E → D → C...), só muda por qual forma você começa. Em Sol maior, por exemplo, a corrente começa em G e segue por E, D, C, A.' },
      { t: 'todas', tonica: T.G, qual: 'maior', legenda: 'Sol maior: o mesmo ciclo de letras, começando em outro ponto.' },
      { t: 'todas', tonica: T.D, qual: 'maior', legenda: 'Ré maior: começa em D, depois C, A, G, E.' },
      { t: 'h', x: 'Uma regra para guardar' },
      { t: 'p', x: 'Pense em um relógio de cinco horas girando para frente: C → A → G → E → D → (volta ao C). Qualquer forma que você escolher, a seguinte no braço é sempre a próxima letra do ciclo.' },
      { t: 'dica', x: 'Truque da memória: "CAGED" é a única palavra que dá certo. Se você decorar "C-A-G-E-D" nessa ordem, já sabe a ordem de qualquer acorde.' }
    ]
  },
  {
    id: 'a06', titulo: 'Achando qualquer acorde (a raiz)', resumo: 'Método passo a passo para qualquer tonalidade.',
    quiz: { tipos: ['raiz', 'casa', 'acorde'], n: 8 },
    blocos: [
      { t: 'p', x: 'Cada forma tem a sua raiz em uma corda específica. Se você sabe onde está a nota do acorde nessa corda, sabe onde colocar a forma. Veja onde fica a raiz de cada forma:' },
      { t: 'tabela', cab: ['Forma', 'Raiz na corda'], linhas: [['C', '5ª'], ['A', '5ª'], ['G', '6ª'], ['E', '6ª'], ['D', '4ª']] },
      { t: 'h', x: 'Notas na 6ª corda (de Mi grave)' },
      { t: 'tabela', cab: ['Nota', 'Casa'], linhas: [['Mi', '0'], ['Fá', '1'], ['Sol', '3'], ['Lá', '5'], ['Si', '7'], ['Dó', '8'], ['Ré', '10']] },
      { t: 'h', x: 'Notas na 5ª corda (de Lá)' },
      { t: 'tabela', cab: ['Nota', 'Casa'], linhas: [['Lá', '0'], ['Si', '2'], ['Dó', '3'], ['Ré', '5'], ['Mi', '7'], ['Fá', '8'], ['Sol', '10']] },
      { t: 'h', x: 'O método' },
      { t: 'lista', itens: [
        '1. Escolha o acorde que você quer (ex.: Ré maior).',
        '2. Escolha uma forma com raiz na 6ª ou 5ª corda (E ou A, as mais fáceis).',
        '3. Ache a nota do acorde nessa corda (Ré na 5ª corda = casa 5; Ré na 6ª corda = casa 10).',
        '4. Monte a forma a partir dessa casa.'
      ] },
      { t: 'forma', id: 'A', tonica: T.D, qual: 'maior', rotulo: 'graus', legenda: 'Ré maior com a forma de A: raiz na 5ª corda, casa 5.' },
      { t: 'forma', id: 'E', tonica: T.D, qual: 'maior', rotulo: 'graus', legenda: 'Ré maior com a forma de E: raiz na 6ª corda, casa 10.' },
      { t: 'forma', id: 'E', tonica: T.A, qual: 'maior', rotulo: 'graus', legenda: 'Lá maior com a forma de E: raiz na 6ª corda, casa 5.' },
      { t: 'dica', x: 'Decore bem as notas das cordas 6 e 5: elas são o "GPS" do sistema. Comece só com as notas naturais (sem sustenido e bemol) e depois aprenda as outras.' },
      { t: 'check', chave: 'raiz', itens: ['Sei dizer qual é a nota em cada casa da 6ª corda (0 a 10)', 'Sei dizer qual é a nota em cada casa da 5ª corda (0 a 10)', 'Toquei Ré, Lá e Si♭ maior usando a forma de E ou A'] }
    ]
  },
  {
    id: 'a07', titulo: 'Trocando de forma sem mudar de acorde', resumo: 'Ficar na mesma região do braço ao tocar progressões.',
    quiz: { tipos: ['ordem', 'acorde', 'casa'], n: 7 },
    blocos: [
      { t: 'p', x: 'Agora o uso real: em vez de pular de um lugar para outro no braço, você escolhe, para cada acorde da música, a forma que fica mais perto da sua mão. Os acordes de uma música simples (I, IV e V) quase sempre têm uma forma vizinha.' },
      { t: 'h', x: 'O mesmo acorde, cinco jeitos' },
      { t: 'prog', legenda: 'Ouça o Dó maior em cada forma, na ordem em que aparecem no braço. É o mesmo acorde com timbres levemente diferentes.', acordes: [
        { id: 'C', tonica: T.C }, { id: 'A', tonica: T.C }, { id: 'G', tonica: T.C }, { id: 'E', tonica: T.C }, { id: 'D', tonica: T.C }] },
      { t: 'h', x: 'Progressão I – IV – V em Dó, pertinho uma da outra' },
      { t: 'prog', legenda: 'Dó (forma de A), Fá (forma de C) e Sol (forma de E): tudo entre as casas 3 e 8. A mão quase não anda.', acordes: [
        { id: 'A', tonica: T.C }, { id: 'C', tonica: T.F }, { id: 'E', tonica: T.G }, { id: 'A', tonica: T.C }] },
      { t: 'h', x: 'A mesma progressão na posição aberta' },
      { t: 'prog', legenda: 'A versão tradicional, com os acordes abertos: C, F (forma de E na casa 1), G.', acordes: [
        { id: 'C', tonica: T.C }, { id: 'E', tonica: T.F }, { id: 'G', tonica: T.G }, { id: 'C', tonica: T.C }] },
      { t: 'p', x: 'Perceba que as duas versões soam como a mesma música, em alturas parecidas. Escolher onde tocar é uma decisão sua: perto do começo soa mais grave e aberto, mais à frente soa mais agudo e brilhante.' },
      { t: 'check', chave: 'trocar', itens: ['Toquei C – F – G – C na posição aberta', 'Toquei C – F – G – C nas formas vizinhas (A, C, E)', 'Troquei de forma sem olhar para a mão'] }
    ]
  },
  {
    id: 'a08', titulo: 'Acordes menores no CAGED', resumo: 'Menor = terça abaixada. Quais formas existem.',
    quiz: { tipos: ['menor', 'forma', 'acorde'], n: 7 },
    blocos: [
      { t: 'p', x: 'No CAGED, cada forma maior tem uma "irmã" menor: o formato muda um dedo, a terça desce meio tom. Nem todas as cinco formas ficam confortáveis como menores: usamos Em (forma de E), Am (forma de A) e Dm (forma de D). As formas de C e G menores não são confortáveis e quase ninguém usa; para elas usamos as outras três.' },
      { t: 'forma', id: 'E', tonica: T.E, qual: 'menor', rotulo: 'graus', legenda: 'Mi menor (Em): é o Mi maior sem o dedo 1. A terça (Sol#) virou ♭3 (Sol).' },
      { t: 'forma', id: 'A', tonica: T.A, qual: 'menor', rotulo: 'graus', legenda: 'Lá menor (Am): igual ao Lá maior, mas o dedo da 2ª corda recua para a casa 1.' },
      { t: 'forma', id: 'D', tonica: T.D, qual: 'menor', rotulo: 'graus', legenda: 'Ré menor (Dm): o dedo 1 aparece na casa 1 da 1ª corda.' },
      { t: 'h', x: 'A corrente menor' },
      { t: 'todas', tonica: T.C, qual: 'menor', legenda: 'Dó menor: três formas (A, E, D) em vez de cinco. As lacunas são normais.' },
      { t: 'tocar', id: 'A', tonica: T.A, qual: 'menor' },
      { t: 'prog', legenda: 'Progressão em Lá menor: Am – Dm – E (maior) – Am. Esta é a famosa cadência menor.', acordes: [
        { id: 'A', tonica: T.A, qual: 'menor' }, { id: 'D', tonica: T.D, qual: 'menor' }, { id: 'E', tonica: T.E, qual: 'maior' }, { id: 'A', tonica: T.A, qual: 'menor' }] },
      { t: 'check', chave: 'menores', itens: ['Toquei Em, Am e Dm', 'Toquei Am – Dm – E – Am sem pausas', 'Toquei Cm usando a forma de A na casa 3'] }
    ]
  },
  {
    id: 'a09', titulo: 'Acordes com sétima', resumo: 'Dominante (7), maior com sétima (maj7), menor com sétima (m7).',
    quiz: { tipos: ['setima', 'forma', 'acorde'], n: 7 },
    blocos: [
      { t: 'p', x: 'Adicionando uma quarta nota à tríade, o acorde ganha cor. A sétima é a nota que fica um passo abaixo da raiz (uma oitava acima).' },
      { t: 'tabela', cab: ['Acorde', 'Fórmula', 'Som'], linhas: [
        ['7 (dominante)', 'R 3 5 ♭7', 'tenso, pede para resolver (blues)'],
        ['maj7 (maior com sétima)', 'R 3 5 7', 'suave, "jazz"'],
        ['m7 (menor com sétima)', 'R ♭3 5 ♭7', 'macio, melancólico']
      ] },
      { t: 'forma', id: 'E', tonica: T.E, qual: '7', rotulo: 'graus', legenda: 'E7 aberto: o Mi maior sem o dedo 3 (a nota ♭7 aparece na 4ª corda, solta).' },
      { t: 'forma', id: 'A', tonica: T.A, qual: '7', rotulo: 'graus', legenda: 'A7 aberto: o dedo 3 da forma de A some.' },
      { t: 'forma', id: 'C', tonica: T.C, qual: 'maj7', rotulo: 'graus', legenda: 'Cmaj7 aberto: o dedo 1 da forma de C sai e a corda 2 solta é a sétima.' },
      { t: 'forma', id: 'A', tonica: T.A, qual: 'm7', rotulo: 'graus', legenda: 'Am7 aberto: o dedo 3 da forma Am some.' },
      { t: 'prog', legenda: 'Ouça a diferença: C, C7, Cmaj7. Mesmo acorde-base, três cores diferentes.', acordes: [
        { id: 'C', tonica: T.C }, { id: 'C', tonica: T.C, qual: '7' }, { id: 'C', tonica: T.C, qual: 'maj7' }] },
      { t: 'check', chave: 'setimas', itens: ['Toquei E7, A7 e D7', 'Toquei Cmaj7 e Am7', 'Toquei Am7 – D7 – Gmaj7 (progressão II–V–I em Sol, jazz suave)'] }
    ]
  },
  {
    id: 'a10', titulo: 'Escala maior dentro das formas', resumo: 'Cada forma de acorde "mora" dentro de uma caixa de escala.',
    quiz: { tipos: ['escala', 'forma', 'conceito'], n: 7 },
    blocos: [
      { t: 'p', x: 'As cinco formas de acorde são também a chave para as escalas. Em volta de cada forma existe uma "caixa" de sete notas da escala maior, que usa as mesmas casas. Assim você sabe sempre onde estão as notas da escala em relação ao acorde que está tocando.' },
      { t: 'caixa', id: 'E', tonica: T.G, tipo: 'maior', legenda: 'Sol maior ao redor da forma de E (casa 3). Os círculos escuros são as notas do acorde; os outros são as outras notas da escala.' },
      { t: 'caixa', id: 'A', tonica: T.C, tipo: 'maior', legenda: 'Dó maior ao redor da forma de A (casa 3).' },
      { t: 'p', x: 'Tente subir e descer a escala, dedo 1 na primeira casa da caixa, dedo 2 na seguinte, e assim por diante. Cada caixa dá a você sete notas em ordem, sem precisar pular para outro lugar.' },
      { t: 'dica', x: 'Toque a escala devagar, 60 bpm, com o metrônomo, e ouça cada nota. Terminar na raiz (a nota do acorde) dá a sensação de "casa".' },
      { t: 'check', chave: 'escalas', itens: ['Toquei a caixa de Dó maior (forma de A) subindo e descendo', 'Toquei a caixa de Sol maior (forma de E)', 'Toquei as duas com o metrônomo a 60 bpm'] }
    ]
  },
  {
    id: 'a11', titulo: 'Pentatônica: o primeiro solo', resumo: 'A escala de 5 notas mais usada no rock e no blues.',
    quiz: { tipos: ['escala', 'conceito', 'forma'], n: 7 },
    blocos: [
      { t: 'p', x: 'A escala pentatônica tem só cinco notas e é a mais fácil de improvisar, porque quase não tem notas "erradas". A pentatônica menor de Lá usa as notas Lá, Dó, Ré, Mi e Sol. Cada caixa dela também mora dentro de uma forma do CAGED.' },
      { t: 'caixa', id: 'A', tonica: T.A, tipo: 'pent-menor', legenda: 'Pentatônica menor de Lá ao redor da forma de A. É a "caixa 1" que todo guitarrista conhece.' },
      { t: 'caixa', id: 'E', tonica: T.E, tipo: 'pent-menor', legenda: 'Pentatônica menor de Mi, ao redor da forma de E, na posição aberta.' },
      { t: 'caixa', id: 'E', tonica: T.C, tipo: 'pent-maior', legenda: 'Pentatônica maior de Dó: soa alegre, como música caipira e country.' },
      { t: 'p', x: 'Dica de ouro: a pentatônica menor de Lá tem as mesmas notas que a pentatônica maior de Dó (a "relativa"). Mudam só o ponto de descanso: se você termina em Lá, soa menor; se termina em Dó, soa maior.' },
      { t: 'p', x: 'Para improvisar: coloque um metrônomo a 70 bpm, toque um acorde de Am por uma ou duas barras e invente uma frase de 3 a 5 notas dentro da caixa. Repita a frase mudando um pouco o ritmo.' },
      { t: 'check', chave: 'penta', itens: ['Toquei a pentatônica menor de Lá subindo e descendo', 'Inventei uma frase de 4 notas', 'Improvisei por 1 minuto sobre um Am (sozinho ou com um áudio)'] }
    ]
  },
  {
    id: 'a12', titulo: 'Progressões e plano de estudo', resumo: 'Colocando tudo em prática, com um plano de 4 semanas.',
    quiz: { tipos: ['forma', 'acorde', 'casa', 'raiz', 'ordem', 'menor', 'setima', 'escala', 'conceito'], n: 10 },
    blocos: [
      { t: 'p', x: 'Você chegou ao fim das aulas. Agora é prática. As progressões abaixo são a base de milhares de músicas; treine cada uma em duas regiões do braço.' },
      { t: 'prog', legenda: 'I – V – vi – IV em Dó (C – G – Am – F): a progressão pop mais famosa do mundo.', acordes: [
        { id: 'C', tonica: T.C }, { id: 'G', tonica: T.G }, { id: 'A', tonica: T.A, qual: 'menor' }, { id: 'E', tonica: T.F }] },
      { t: 'prog', legenda: 'I – IV – V em Sol (G – C – D): folk, rock, sertanejo.', acordes: [
        { id: 'G', tonica: T.G }, { id: 'C', tonica: T.C }, { id: 'D', tonica: T.D }, { id: 'G', tonica: T.G }] },
      { t: 'prog', legenda: 'Blues de 3 acordes em Lá (A7 – D7 – E7).', acordes: [
        { id: 'A', tonica: T.A, qual: '7' }, { id: 'D', tonica: T.D, qual: '7' }, { id: 'E', tonica: T.E, qual: '7' }, { id: 'A', tonica: T.A, qual: '7' }] },
      { t: 'h', x: 'Plano de 4 semanas (15 a 20 minutos por dia)' },
      { t: 'check', chave: 'semana1', titulo: 'Semana 1: as formas abertas', itens: ['Dias 1–2: C, A e G abertos', 'Dias 3–4: E e D abertos', 'Dias 5–6: trocas C→G, E→A, A→D', 'Dia 7: quiz da aula 3'] },
      { t: 'check', chave: 'semana2', titulo: 'Semana 2: pestana e a corrente', itens: ['Pestana na casa 1 (Fá) todos os dias', 'Forma de A na casa 3 (Dó)', 'Tocar os 5 jeitos de Dó maior', 'Quiz das aulas 4 e 5'] },
      { t: 'check', chave: 'semana3', titulo: 'Semana 3: menores, sétimas e progressões', itens: ['Em, Am, Dm e Cm', 'E7, A7, D7 e Cmaj7', 'C – G – Am – F em duas posições', 'Quiz das aulas 8 e 9'] },
      { t: 'check', chave: 'semana4', titulo: 'Semana 4: escalas e improviso', itens: ['Caixas de Dó e Sol maior', 'Pentatônica menor de Lá', 'Improvisar 1 minuto', 'Prova final do curso'] },
      { t: 'dica', x: 'Registre seu tempo no app: o hábito (tela Hábitos) mostra a sua sequência de dias. A constância vale mais que o tempo: 15 minutos por dia ganham de 2 horas por semana.' }
    ]
  }
];

// Prova final: perguntas de todos os tipos.
export const EXAME = { tipos: ['forma', 'acorde', 'casa', 'raiz', 'ordem', 'menor', 'setima', 'escala', 'conceito'], n: 20 };
export const aulaPorId = (id) => AULAS.find((a) => a.id === id);
