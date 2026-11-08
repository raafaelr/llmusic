// NÍVEL 2 · MÓDULO 2.1 — Leitura musical
// Oito aulas: ler na clave de sol, valores e subdivisões, ponto, ligaduras,
// barras e repetições, acidentes, tom e semitom, escala cromática,
// introdução às escalas maiores e aos intervalos.

export const M21 = {
  id: '2.1',
  titulo: 'Leitura musical',
  objetivo: 'Ler uma partitura de verdade: reconhecer as notas sem contar, entender as durações e os sinais que organizam a leitura, e começar a enxergar escalas e intervalos no papel.',
  aulas: [

    // ---------------------------------------------------------------- 2.1.1
    {
      id: 'n2.1.1',
      titulo: 'Ler de verdade na clave de sol',
      resumo: 'Do reconhecimento lento ao reconhecimento imediato.',
      minutos: 18,
      disciplinas: ['leitura'],
      prereq: ['n1.3.5'],
      status: 'implementado',
      cobre: ['Leitura de partituras na clave de sol', 'Identificação das notas no pentagrama'],
      objetivo: 'Transformar a leitura de um cálculo em um reconhecimento automático, como ler uma palavra.',
      blocos: [
        { t: 'p', x: 'No Nível 1 você aprendeu a *descobrir* o nome de uma nota. Agora o objetivo é outro: *reconhecer* na hora, sem contar. A diferença entre as duas coisas é a mesma que existe entre soletrar e ler.' },
        { t: 'h', x: 'Por que contar não funciona a longo prazo' },
        { t: 'p', x: 'Se você conta "Mi, Fá, Sol..." a partir da linha de baixo, a leitura nunca passa de uma nota por segundo. Uma música simples tem duas ou três notas por segundo. A conta não acompanha.' },
        { t: 'p', x: 'A saída não é contar mais rápido: é trocar o método. Em vez de nove posições isoladas, você aprende *âncoras* e *intervalos a partir delas*.' },
        { t: 'h', x: 'As três âncoras' },
        {
          t: 'pauta',
          compassos: [{ notas: [{ midi: 67, fig: 'semibreve', texto: 'Sol' }] }, { notas: [{ midi: 71, fig: 'semibreve', texto: 'Si' }] }, { notas: [{ midi: 72, fig: 'semibreve', texto: 'Dó' }] }],
          formula: null, tocar: true, bpm: 60,
          legenda: 'Sol na 2ª linha (onde a clave enrola), Si na 3ª linha (bem no meio da pauta) e Dó no 3º espaço, logo acima.'
        },
        { t: 'p', x: 'Decore só estas três. Elas estão espalhadas pela pauta de um jeito que qualquer outra nota fica a um ou dois degraus de distância de alguma delas.' },
        {
          t: 'tabela',
          cab: ['Se a nota está...', 'A partir da âncora', 'Ela é'],
          linhas: [
            ['um degrau acima do Sol', 'Sol (2ª linha)', 'Lá'],
            ['um degrau abaixo do Sol', 'Sol (2ª linha)', 'Fá'],
            ['um degrau acima do Si', 'Si (3ª linha)', 'Dó'],
            ['um degrau abaixo do Si', 'Si (3ª linha)', 'Lá'],
            ['um degrau acima do Dó', 'Dó (3º espaço)', 'Ré'],
            ['dois degraus acima do Dó', 'Dó (3º espaço)', 'Mi']
          ]
        },
        { t: 'h', x: 'Leitura por desenho: subiu, desceu, repetiu' },
        { t: 'p', x: 'O segundo truque é ainda mais poderoso: *não leia nota por nota*. Leia o desenho. Uma melodia quase sempre anda de grau em grau; os saltos são a exceção e chamam atenção sozinhos.' },
        { t: 'pauta', txt: 'g4 a4 b4 c5 | d5 c5 b4 a4 | g4/b b4/b | g4/o', formula: [4, 4], tocar: true, bpm: 80, legenda: 'Leia assim: "sobe quatro, desce quatro, salta uma terça, volta". Você só precisa saber *onde começa*.' },
        {
          t: 'dica', titulo: 'Exercício dos 30 segundos: ',
          x: 'pegue qualquer partitura e, sem tocar nada, percorra com o dedo dizendo em voz alta só "sobe, sobe, desce, repete, salta". Em meio minuto você vai entender a forma da melodia. Depois disso, ler as notas fica fácil.'
        },
        { t: 'h', x: 'As notas das seis cordas na primeira posição' },
        { t: 'p', x: 'No Nível 1 você viu as notas das cordas 1, 2 e 3. Agora entram as três graves, que usam linhas suplementares abaixo da pauta.' },
        {
          t: 'pauta',
          compassos: [
            { notas: [{ midi: 52, fig: 'seminima', texto: '6ª solta' }, { midi: 53, fig: 'seminima', texto: '6ª/1' }, { midi: 55, fig: 'seminima', texto: '6ª/3' }, { midi: 57, fig: 'seminima', texto: '5ª solta' }] },
            { notas: [{ midi: 59, fig: 'seminima', texto: '5ª/2' }, { midi: 60, fig: 'seminima', texto: '5ª/3' }, { midi: 62, fig: 'seminima', texto: '4ª solta' }, { midi: 64, fig: 'seminima', texto: '4ª/2' }] },
            { notas: [{ midi: 65, fig: 'seminima', texto: '4ª/3' }, { midi: 67, fig: 'seminima', texto: '3ª solta' }, { midi: 69, fig: 'seminima', texto: '3ª/2' }, { midi: 71, fig: 'seminima', texto: '2ª solta' }] },
            { notas: [{ midi: 72, fig: 'seminima', texto: '2ª/1' }, { midi: 74, fig: 'seminima', texto: '2ª/3' }, { midi: 76, fig: 'seminima', texto: '1ª solta' }, { midi: 77, fig: 'seminima', texto: '1ª/1' }] }
          ],
          nomes: true, tocar: true, bpm: 90,
          legenda: 'Todas as notas naturais da primeira posição, da 6ª corda até a 1ª. Este é o seu alfabeto de leitura no Nível 2.'
        },
        { t: 'braco', casas: 5, notas: [
          { corda: 6, casa: 0, rotulo: 'Mi' }, { corda: 6, casa: 1, rotulo: 'Fá' }, { corda: 6, casa: 3, rotulo: 'Sol', classe: 'raiz' },
          { corda: 5, casa: 0, rotulo: 'Lá' }, { corda: 5, casa: 2, rotulo: 'Si' }, { corda: 5, casa: 3, rotulo: 'Dó', classe: 'raiz' },
          { corda: 4, casa: 0, rotulo: 'Ré' }, { corda: 4, casa: 2, rotulo: 'Mi' }, { corda: 4, casa: 3, rotulo: 'Fá' },
          { corda: 3, casa: 0, rotulo: 'Sol', classe: 'raiz' }, { corda: 3, casa: 2, rotulo: 'Lá' },
          { corda: 2, casa: 0, rotulo: 'Si' }, { corda: 2, casa: 1, rotulo: 'Dó', classe: 'raiz' }, { corda: 2, casa: 3, rotulo: 'Ré' },
          { corda: 1, casa: 0, rotulo: 'Mi' }, { corda: 1, casa: 1, rotulo: 'Fá' }, { corda: 1, casa: 3, rotulo: 'Sol', classe: 'raiz' }
        ], legenda: 'O mesmo mapa no braço. As bolinhas destacadas são os três Sol/Dó que servem de âncora também aqui.' },
        { t: 'exercicio', tipo: 'identificar-nota', titulo: 'Reconhecimento rápido', rodadas: 15, notas: ['e3', 'g3', 'a3', 'c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5', 'f5', 'g5'], x: 'Agora com todas as notas da primeira posição, graves inclusive. Procure responder em menos de 2 segundos.' },
        { t: 'ir', rota: 'leitura', titulo: 'Treinar na tela de Leitura', x: 'Use o Nível 3 de lá, que inclui as cordas graves. Faça 5 minutos por dia.' },
        {
          t: 'erros', itens: [
            { erro: 'Escrever o nome das notas em cima da partitura.', certo: 'Faz você ler as letras, não a música. Se precisar, escreva a lápis e apague em dois dias.' },
            { erro: 'Ler nota por nota, isoladamente.', certo: 'Leia o desenho: sobe, desce, salta. O contorno carrega metade da informação.' },
            { erro: 'Treinar leitura só quando estuda uma peça nova.', certo: 'Cinco minutos por dia, todo dia, numa partitura fácil. É assim que a leitura vira automática.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Reconhecer é diferente de calcular: o objetivo é ler sem contar.',
            'Três âncoras: Sol (2ª linha), Si (3ª linha), Dó (3º espaço).',
            'Leia o desenho da melodia antes de ler as notas.',
            'As notas graves usam linhas suplementares abaixo da pauta.',
            'Cinco minutos de leitura por dia valem mais que uma hora por semana.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as três âncoras de leitura recomendadas?', opcoes: ['Sol na 2ª linha, Si na 3ª linha e Dó no 3º espaço', 'Mi, Fá e Sol', 'As notas das cordas soltas', 'Dó, Ré e Mi'], correta: 0, explicacao: 'A partir delas qualquer nota fica a um ou dois degraus.' },
        { texto: 'Por que contar a partir da linha de baixo não funciona?', opcoes: ['Porque a leitura nunca passa de uma nota por segundo', 'Porque dá o nome errado', 'Porque não serve para as graves', 'Porque é proibido'], correta: 0, explicacao: 'Música simples tem duas ou três notas por segundo.' },
        { texto: 'O que significa "ler o desenho" da melodia?', opcoes: ['Perceber se ela sobe, desce, repete ou salta antes de nomear cada nota', 'Olhar a figura rítmica', 'Decorar a forma do compasso', 'Ver a armadura'], correta: 0, explicacao: 'O contorno carrega metade da informação.' },
        { texto: 'Onde fica o Mi grave da 6ª corda solta na pauta?', opcoes: ['Abaixo da pauta, com linhas suplementares', 'Na 1ª linha', 'No 1º espaço', 'Acima da pauta'], correta: 0, explicacao: 'As três cordas graves ficam abaixo das cinco linhas.' },
        { texto: 'Qual é a prática recomendada de leitura?', opcoes: ['Cinco minutos por dia, todo dia', 'Uma hora por semana', 'Só quando estuda peça nova', 'Trinta minutos a cada dois dias'], correta: 0, explicacao: 'Leitura é hábito diário, não maratona.' },
        { texto: 'Escrever o nome das notas em cima da partitura...', opcoes: ['Atrapalha: você passa a ler as letras, não a música', 'Ajuda sempre', 'É obrigatório no começo', 'Não muda nada'], correta: 0, explicacao: 'Se usar, apague em poucos dias.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Reconheço as três âncoras instantaneamente.',
          'Nomeio qualquer nota natural da primeira posição em menos de 2 segundos.',
          'Sei a corda e a casa de cada uma delas.',
          'Consigo descrever o desenho de uma melodia antes de tocá-la.'
        ],
        criterio: 'Você domina quando lê uma linha de partitura fácil tocando junto, sem parar para pensar no nome das notas.'
      }
    },

    // ---------------------------------------------------------------- 2.1.2
    {
      id: 'n2.1.2',
      titulo: 'Valores, subdivisões e o ponto',
      resumo: 'Dividir o tempo em partes iguais e desiguais.',
      minutos: 16,
      disciplinas: ['teoria', 'leitura'],
      prereq: ['n1.3.6'],
      status: 'implementado',
      cobre: ['Valores e subdivisões rítmicas', 'Ponto de aumento'],
      objetivo: 'Executar com precisão qualquer combinação de figuras dentro de um tempo.',
      blocos: [
        { t: 'p', x: 'Você já sabe quanto vale cada figura. Agora vem a parte que realmente se usa: *como as figuras se encaixam dentro de um mesmo tempo*.' },
        { t: 'h', x: 'A árvore das subdivisões' },
        {
          t: 'tabela',
          cab: ['Dentro de 1 tempo cabem', 'Como se conta'],
          linhas: [
            ['1 semínima', '"um"'],
            ['2 colcheias', '"um e"'],
            ['4 semicolcheias', '"um e lé fó" (ou "1 e 2 e")'],
            ['1 colcheia + 2 semicolcheias', '"um — e lé"'],
            ['2 semicolcheias + 1 colcheia', '"um lé — e"'],
            ['1 colcheia pontuada + 1 semicolcheia', '"uuum — ia"']
          ],
          legenda: 'Todas essas combinações duram exatamente a mesma coisa: um tempo.'
        },
        { t: 'pauta', txt: 'g4 | g4/c g4/c | g4/s g4/s g4/s g4/s | g4/c g4/s g4/s', formula: [4, 4], semClave: false, tocar: true, bpm: 60, legenda: 'Quatro jeitos de preencher um tempo. Ouça devagar e conte junto.' },
        { t: 'h', x: 'O ponto de aumento, de novo e com calma' },
        { t: 'p', x: 'O ponto aumenta a figura em *metade do valor dela*. É sempre metade da figura que ele acompanha, nunca "meio tempo" fixo.' },
        {
          t: 'tabela',
          cab: ['Figura', 'Sozinha vale', 'Com ponto vale'],
          linhas: [
            ['Semibreve', '4 tempos', '6 tempos'],
            ['Mínima', '2 tempos', '3 tempos'],
            ['Semínima', '1 tempo', '1 tempo e meio'],
            ['Colcheia', '½ tempo', '¾ de tempo']
          ]
        },
        { t: 'h', x: 'A dupla mais importante do ritmo: pontuada + curta' },
        { t: 'p', x: 'Uma semínima pontuada seguida de colcheia soma 2 tempos. É um dos padrões mais comuns da música, e também um dos mais errados por iniciantes, que costumam encurtar a nota longa.' },
        { t: 'pauta', txt: 'g4/q. a4/c b4/b | c5/q. b4/c a4/b', formula: [4, 4], tocar: true, bpm: 72, legenda: 'Conte "um, dois e": a colcheia entra exatamente no "e" do segundo tempo.' },
        { t: 'metronomo', titulo: 'Treine a pontuada', bpm: 60, compasso: '4/4', x: 'Toque a 1ª corda solta no clique 1, segure, e toque de novo no "e" do clique 2. Depois repita no 3 e no "e" do 4.' },
        { t: 'h', x: 'Colcheia pontuada e semicolcheia' },
        { t: 'p', x: 'A mesma ideia, dentro de um único tempo: a primeira nota ocupa três quartos do tempo e a segunda, um quarto. Dá aquele ritmo "galopante" de marcha.' },
        { t: 'pauta', txt: 'g4/c. g4/s g4/c. g4/s | g4/c. g4/s g4/b', formula: [4, 4], tocar: true, bpm: 66, legenda: 'Ritmo pontuado curto. Fale "tááá-ti" antes de tocar.' },
        { t: 'exercicio', tipo: 'figura', titulo: 'Quantos tempos vale?', rodadas: 10, figuras: ['semibreve', 'minima', 'seminima', 'colcheia', 'semicolcheia'], x: 'Revisão rápida dos valores.' },
        {
          t: 'erros', itens: [
            { erro: 'Encurtar a nota pontuada.', certo: 'Conte o "e" em voz alta. A nota curta entra no "e", não antes.' },
            { erro: 'Tocar as quatro semicolcheias desiguais.', certo: 'Elas são exatamente iguais. Toque bem devagar até ficarem parelhas.' },
            { erro: 'Achar que o ponto vale sempre meio tempo.', certo: 'O ponto vale metade da figura em que está. Numa mínima, vale um tempo inteiro.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Dentro de um tempo cabem combinações diferentes, todas com a mesma duração total.',
            'O ponto acrescenta metade do valor da própria figura.',
            'Semínima pontuada + colcheia = 2 tempos; é o padrão mais comum e o mais errado.',
            'Conte o "e" em voz alta: é ele que posiciona a nota curta.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas semicolcheias cabem em um tempo (em 4/4)?', opcoes: ['Quatro', 'Duas', 'Oito', 'Uma'], correta: 0, explicacao: 'Cada semínima vale quatro semicolcheias.' },
        { texto: 'Quanto vale uma semibreve pontuada?', opcoes: ['6 tempos', '5 tempos', '8 tempos', '4 tempos e meio'], correta: 0, explicacao: '4 + metade de 4.' },
        { texto: 'Semínima pontuada seguida de colcheia soma quantos tempos?', opcoes: ['2', '1 e meio', '3', '2 e meio'], correta: 0, explicacao: '1,5 + 0,5 = 2.' },
        { texto: 'Quanto vale uma colcheia pontuada?', opcoes: ['¾ de tempo', '1 tempo', '½ tempo', '1 tempo e meio'], correta: 0, explicacao: '0,5 + metade de 0,5.' },
        { texto: 'Onde entra a colcheia depois de uma semínima pontuada?', opcoes: ['No "e" do segundo tempo', 'No segundo tempo', 'No "e" do primeiro tempo', 'No terceiro tempo'], correta: 0, explicacao: 'Por isso é essencial contar o "e".' },
        { texto: 'O ponto de aumento vale...', opcoes: ['Metade do valor da figura em que está', 'Sempre meio tempo', 'Sempre um tempo', 'O dobro da figura'], correta: 0, explicacao: 'Numa mínima vale 1 tempo; numa colcheia vale ¼ de tempo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco quatro semicolcheias parelhas num tempo.',
          'Toco semínima pontuada + colcheia sem encurtar a longa.',
          'Toco colcheia pontuada + semicolcheia.',
          'Faço tudo isso com o metrônomo a 60 BPM.'
        ],
        criterio: 'Você domina quando grava e, ao ouvir, as subdivisões estão exatas.'
      }
    },

    // ---------------------------------------------------------------- 2.1.3
    {
      id: 'n2.1.3',
      titulo: 'Ligaduras',
      resumo: 'O arco que soma durações e o arco que une notas diferentes.',
      minutos: 14,
      disciplinas: ['leitura', 'tecnica'],
      prereq: ['n2.1.2'],
      status: 'implementado',
      cobre: ['Ligadura de prolongamento', 'Ligadura de expressão'],
      objetivo: 'Distinguir os dois tipos de ligadura e executar cada um corretamente no violão.',
      blocos: [
        { t: 'p', x: 'A ligadura é um arco que une duas notas. Dependendo do que ela une, ela quer dizer duas coisas completamente diferentes. Confundir as duas é um dos erros mais comuns de quem está começando a ler.' },
        { t: 'h', x: '1. Ligadura de prolongamento (tie)' },
        { t: 'p', x: 'Une duas notas *da mesma altura*. Significa: toque a primeira e *deixe soar* pelo tempo das duas somadas. A segunda não é tocada.' },
        { t: 'pauta', txt: 'g4/b~ g4/b | c5/q~ c5/o', formula: [4, 4], tocar: true, bpm: 70, legenda: 'A mínima ligada à mínima dura 4 tempos. A semínima ligada à semibreve dura 5. Ouça: só há dois ataques.' },
        { t: 'p', x: 'Para que serve? Para escrever durações que não cabem numa figura só, ou que atravessam a barra de compasso. Uma nota de 5 tempos não existe como figura única: escreve-se com ligadura.' },
        { t: 'h', x: '2. Ligadura de expressão (slur)' },
        { t: 'p', x: 'Une notas *de alturas diferentes*. Em instrumentos de sopro significa "não respire entre elas"; no violão tem um significado técnico muito concreto: *toque só a primeira nota com a mão direita; as seguintes são produzidas pela mão esquerda*.' },
        { t: 'pauta', txt: 'g4~ a4 b4~ c5 | d5~ c5 b4~ a4', formula: [4, 4], tocar: true, bpm: 76, legenda: 'Pares ligados. No violão, a mão direita toca só a primeira de cada par.' },
        {
          t: 'comparar',
          a: { titulo: 'Ligado ascendente', itens: ['A segunda nota é mais aguda', 'Técnica: *martelo* — o dedo cai com força na casa, fazendo a corda soar', 'Em inglês: hammer-on'] },
          b: { titulo: 'Ligado descendente', itens: ['A segunda nota é mais grave', 'Técnica: *arrancado* — o dedo puxa a corda de lado ao sair', 'Em inglês: pull-off'] }
        },
        { t: 'p', x: 'A técnica dos ligados tem uma aula só para ela no Módulo 2.2. Aqui o importante é reconhecer o sinal e saber o que ele pede.' },
        { t: 'h', x: 'Como não confundir' },
        {
          t: 'dica', x: 'A regra é simples e não tem exceção: *mesma altura = prolongamento; alturas diferentes = expressão*. Olhe as cabeças das notas: se estão na mesma linha ou no mesmo espaço, é prolongamento.'
        },
        { t: 'pauta', txt: 'g4~ g4 a4~ b4 | c5~ c5 b4~ a4', formula: [4, 4], tocar: true, bpm: 76, legenda: 'Os quatro arcos desta linha: o 1º e o 3º são de prolongamento (mesma nota); o 2º e o 4º são de expressão.' },
        {
          t: 'tocar', titulo: 'Experimente o ligado ascendente',
          seq: [{ corda: 1, casa: 0, rotulo: 'Mi (toque)' }, { corda: 1, casa: 1, rotulo: 'Fá (martelo)' }, { corda: 1, casa: 3, rotulo: 'Sol (martelo)' }],
          rotulo: 'Mi, Fá, Sol com ligados',
          x: 'Toque a 1ª corda solta com a mão direita. Depois, sem tocar de novo, deixe o dedo 1 cair na casa 1 e, em seguida, o dedo 3 na casa 3. O som deve continuar.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar as duas notas de uma ligadura de prolongamento.', certo: 'Só a primeira é tocada; a segunda é a continuação do som.' },
            { erro: 'Achar que toda ligadura significa "não tocar".', certo: 'Com alturas diferentes, as notas seguintes soam — mas produzidas pela mão esquerda.' },
            { erro: 'Confundir ligadura com viga.', certo: 'A viga é uma barra reta que liga hastes. A ligadura é um arco que liga cabeças de nota.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Mesma altura: ligadura de prolongamento. Toca-se a primeira, soma-se a duração.',
            'Alturas diferentes: ligadura de expressão. No violão, só a primeira é tocada pela mão direita.',
            'Ligado ascendente = martelo. Ligado descendente = arrancado.',
            'A ligadura liga cabeças de nota; a viga liga hastes.'
          ]
        }
      ],
      quiz: [
        { texto: 'Duas notas de mesma altura unidas por um arco significam o quê?', opcoes: ['Toque a primeira e some as durações', 'Toque as duas', 'Toque a segunda', 'Faça um ligado de mão esquerda'], correta: 0, explicacao: 'É a ligadura de prolongamento.' },
        { texto: 'E duas notas de alturas diferentes unidas por um arco?', opcoes: ['Toque só a primeira com a direita; as outras saem da mão esquerda', 'Toque todas com a direita', 'Não toque nenhuma', 'Repita a primeira'], correta: 0, explicacao: 'É a ligadura de expressão, que no violão vira ligado.' },
        { texto: 'Como se chama o ligado ascendente?', opcoes: ['Martelo (hammer-on)', 'Arrancado (pull-off)', 'Glissando', 'Vibrato'], correta: 0, explicacao: 'O dedo cai com força e faz a corda soar.' },
        { texto: 'Uma semínima ligada a uma semibreve dura quantos tempos?', opcoes: ['5', '4', '6', '2'], correta: 0, explicacao: '1 + 4.' },
        { texto: 'Para que serve a ligadura de prolongamento?', opcoes: ['Escrever durações que não cabem numa figura só ou que atravessam a barra', 'Ligar vozes diferentes', 'Marcar a repetição', 'Indicar o dedilhado'], correta: 0, explicacao: 'Uma nota de 5 tempos não tem figura própria.' },
        { texto: 'Qual a diferença entre ligadura e viga?', opcoes: ['A ligadura é um arco entre cabeças; a viga é uma barra reta entre hastes', 'São a mesma coisa', 'A viga liga compassos', 'A ligadura só aparece em 3/4'], correta: 0, explicacao: 'São sinais completamente diferentes.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Identifico, numa partitura, se cada arco é de prolongamento ou de expressão.',
          'Toco uma ligadura de prolongamento com um único ataque.',
          'Consigo fazer um martelo simples (Mi solta para Fá na casa 1) com som audível.'
        ],
        criterio: 'Você domina quando lê um trecho com os dois tipos de arco e executa cada um corretamente.'
      }
    },

    // ---------------------------------------------------------------- 2.1.4
    {
      id: 'n2.1.4',
      titulo: 'Barras, fórmulas e repetições',
      resumo: 'Os sinais que dizem por onde a leitura caminha.',
      minutos: 14,
      disciplinas: ['leitura'],
      prereq: ['n1.3.8'],
      status: 'implementado',
      cobre: ['Sinais de repetição', 'Fórmulas de compasso', 'Barras de compasso'],
      objetivo: 'Seguir o caminho de leitura de uma partitura sem se perder.',
      blocos: [
        { t: 'p', x: 'Uma partitura não se lê sempre da esquerda para a direita até o fim. Existem sinais que mandam voltar, pular e repetir. Quem não conhece esses sinais toca a música errada mesmo lendo todas as notas certas.' },
        { t: 'h', x: 'As barras' },
        {
          t: 'tabela',
          cab: ['Barra', 'Aparência', 'Significa'],
          linhas: [
            ['Simples', 'uma linha fina', 'Fim de um compasso'],
            ['Dupla', 'duas linhas finas', 'Fim de uma seção, ou mudança de armadura/fórmula'],
            ['Final', 'uma fina e uma grossa', 'Fim da música'],
            ['De repetição', 'barra grossa com dois pontos', 'Volte ao começo ou ao sinal correspondente']
          ]
        },
        { t: 'h', x: 'Repetição simples' },
        { t: 'p', x: 'Dois pontos *antes* de uma barra grossa mandam voltar. Se houver dois pontos *depois* de uma barra grossa em algum ponto anterior, você volta até ali; se não houver, volta ao começo da música.' },
        {
          t: 'pauta',
          compassos: [
            { notas: [{ midi: 67, fig: 'seminima' }, { midi: 69, fig: 'seminima' }, { midi: 71, fig: 'seminima' }, { midi: 72, fig: 'seminima' }], repetir: 'inicio' },
            { notas: [{ midi: 74, fig: 'seminima' }, { midi: 72, fig: 'seminima' }, { midi: 71, fig: 'minima' }], repetir: 'fim' }
          ],
          formula: [4, 4], tocar: true, bpm: 80,
          legenda: 'Os dois compassos são tocados duas vezes: toca 1-2, volta, toca 1-2 de novo.'
        },
        { t: 'h', x: 'Casa 1 e casa 2' },
        { t: 'p', x: 'Muitas músicas repetem um trecho, mas terminam diferente na segunda vez. Para isso existem as *casas de final*: um colchete com "1." e outro com "2.". Na primeira vez você toca a casa 1 e volta; na segunda, pula a casa 1 e toca a casa 2.' },
        {
          t: 'pauta',
          compassos: [
            { notas: [{ midi: 67, fig: 'seminima' }, { midi: 69, fig: 'seminima' }, { midi: 71, fig: 'minima' }], repetir: 'inicio' },
            { notas: [{ midi: 72, fig: 'seminima' }, { midi: 71, fig: 'seminima' }, { midi: 69, fig: 'minima' }] },
            { notas: [{ midi: 67, fig: 'semibreve' }], casa: 1, repetir: 'fim' },
            { notas: [{ midi: 71, fig: 'semibreve' }], casa: 2 }
          ],
          formula: [4, 4], tocar: false,
          legenda: 'Ordem de leitura: compassos 1, 2, 3 (casa 1) → volta → 1, 2, 4 (casa 2). O compasso 3 só é tocado uma vez.'
        },
        {
          t: 'dica', titulo: 'Como conferir se você entendeu: ',
          x: 'antes de tocar, percorra a peça com o dedo dizendo a ordem dos compassos em voz alta: "um, dois, três, volta, um, dois, quatro". Se a ordem sair certa na voz, sai certa no violão.'
        },
        { t: 'h', x: 'Outros sinais de navegação' },
        {
          t: 'tabela',
          cab: ['Sinal', 'Nome', 'O que fazer'],
          linhas: [
            ['D.C.', 'Da Capo', 'Volte ao começo da música'],
            ['D.S.', 'Dal Segno', 'Volte ao sinal 𝄋'],
            ['Fine', 'Fine', 'Aqui é o fim, quando você voltar'],
            ['⊕ Coda', 'Coda', 'Pule para a seção final'],
            ['D.C. al Fine', '—', 'Volte ao começo e toque até onde está escrito Fine']
          ],
          legenda: 'Estes sinais economizam páginas. Eles são muito comuns em canções e em peças com forma A-B-A.'
        },
        { t: 'h', x: 'Mudança de fórmula no meio da peça' },
        { t: 'p', x: 'Quando a fórmula de compasso muda, ela é escrita de novo, logo depois de uma barra dupla. A partir dali, a contagem muda. Isso é comum em peças que alternam 4/4 e 3/4.' },
        {
          t: 'erros', itens: [
            { erro: 'Ignorar os sinais de repetição e tocar tudo uma vez só.', certo: 'A forma da música depende deles. Mapeie a ordem antes de tocar.' },
            { erro: 'Tocar a casa 1 nas duas vezes.', certo: 'Na segunda vez você pula a casa 1.' },
            { erro: 'Não perceber uma mudança de fórmula no meio da peça.', certo: 'Procure barras duplas: elas quase sempre avisam que algo muda.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Barra simples fecha compasso; dupla fecha seção; final fecha a música.',
            'Dois pontos antes da barra grossa mandam voltar.',
            'Casa 1 toca-se na primeira vez; casa 2, na segunda.',
            'D.C., D.S., Fine e Coda mandam saltar pela partitura.',
            'Mapeie a ordem dos compassos em voz alta antes de tocar.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que significam dois pontos antes de uma barra grossa?', opcoes: ['Volte e repita o trecho', 'Fim da música', 'Mudança de andamento', 'Toque mais forte'], correta: 0, explicacao: 'É o sinal de repetição.' },
        { texto: 'Numa repetição com casa 1 e casa 2, o que acontece na segunda vez?', opcoes: ['Pula-se a casa 1 e toca-se a casa 2', 'Toca-se a casa 1 de novo', 'Toca-se as duas', 'Volta-se ao começo'], correta: 0, explicacao: 'A casa 1 só é tocada uma vez.' },
        { texto: 'O que quer dizer D.C. al Fine?', opcoes: ['Volte ao começo e toque até a palavra Fine', 'Vá para a coda', 'Repita o último compasso', 'Toque até o fim da página'], correta: 0, explicacao: 'Da Capo = do começo.' },
        { texto: 'Para que serve a barra dupla?', opcoes: ['Marcar o fim de uma seção ou avisar uma mudança', 'Marcar o fim da música', 'Indicar repetição', 'Separar as vozes'], correta: 0, explicacao: 'Costuma vir antes de uma mudança de armadura ou de fórmula.' },
        { texto: 'Qual é o melhor jeito de não se perder nas repetições?', opcoes: ['Dizer a ordem dos compassos em voz alta antes de tocar', 'Tocar rápido', 'Decorar a peça', 'Ignorar os sinais'], correta: 0, explicacao: 'Se a ordem sai certa na voz, sai certa no violão.' },
        { texto: 'O sinal D.S. manda voltar para onde?', opcoes: ['Para o sinal 𝄋', 'Para o começo', 'Para a coda', 'Para o compasso anterior'], correta: 0, explicacao: 'Dal Segno = do sinal.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Reconheço os quatro tipos de barra.',
          'Leio corretamente a ordem dos compassos numa peça com casa 1 e casa 2.',
          'Sei o que fazer ao encontrar D.C., D.S., Fine e Coda.'
        ],
        criterio: 'Você domina quando consegue narrar a ordem de leitura de qualquer partitura com repetições antes de tocá-la.'
      }
    },

    // ---------------------------------------------------------------- 2.1.5
    {
      id: 'n2.1.5',
      titulo: 'Sustenido, bemol e bequadro',
      resumo: 'Os três sinais que alteram a altura das notas.',
      minutos: 14,
      disciplinas: ['teoria', 'leitura'],
      prereq: ['n2.1.1'],
      status: 'implementado',
      cobre: ['Sustenido, bemol e bequadro'],
      objetivo: 'Ler e executar notas alteradas, e entender até onde a alteração vale.',
      blocos: [
        { t: 'p', x: 'As sete notas naturais não dão conta de toda a música. Entre a maioria delas existe um som no meio, e os *acidentes* são os sinais que nos levam até lá.' },
        {
          t: 'tabela',
          cab: ['Sinal', 'Nome', 'O que faz', 'No violão'],
          linhas: [
            ['♯', 'sustenido', 'Sobe a nota um semitom', 'uma casa para a frente'],
            ['♭', 'bemol', 'Desce a nota um semitom', 'uma casa para trás'],
            ['♮', 'bequadro', 'Cancela o sustenido ou o bemol', 'volta à casa natural']
          ]
        },
        {
          t: 'pauta',
          compassos: [{ notas: [{ midi: 65, fig: 'seminima' }, { midi: 66, fig: 'seminima', acc: 1 }, { midi: 65, fig: 'seminima', bequadro: true }, { midi: 64, fig: 'seminima' }] }],
          formula: [4, 4], tocar: true, bpm: 70,
          legenda: 'Fá, Fá sustenido, Fá bequadro (de volta ao natural) e Mi. Ouça a diferença de um semitom.'
        },
        { t: 'h', x: 'A regra de validade: até o fim do compasso' },
        { t: 'p', x: 'Esta é a regra que mais confunde: um acidente escrito na frente de uma nota vale *para aquela nota, naquela altura, até o fim do compasso*. Depois da barra de compasso, ele deixa de valer.' },
        {
          t: 'pauta',
          compassos: [
            { notas: [{ midi: 66, fig: 'seminima', acc: 1 }, { midi: 66, fig: 'seminima' }, { midi: 66, fig: 'seminima' }, { midi: 65, fig: 'seminima', bequadro: true }] },
            { notas: [{ midi: 65, fig: 'seminima' }, { midi: 65, fig: 'seminima' }, { midi: 65, fig: 'minima' }] }
          ],
          formula: [4, 4], tocar: true, bpm: 70,
          legenda: 'O sustenido do 1º tempo vale também no 2º e no 3º. No 4º, o bequadro cancela. No compasso seguinte, tudo recomeça natural.'
        },
        {
          t: 'dica', x: 'Quando o compositor quer deixar claro que a nota voltou ao natural logo depois da barra, ele escreve um bequadro mesmo sem precisar. Chama-se *acidente de cortesia*, e existe só para facilitar a sua vida.'
        },
        { t: 'h', x: 'Enarmonia: o mesmo som, dois nomes' },
        { t: 'p', x: 'Fá♯ e Sol♭ são a *mesma casa do violão* e o mesmo som. Chamamos isso de notas *enarmônicas*. Qual nome usar depende da tonalidade da música, e você vai entender melhor quando estudar armaduras no Nível 3.' },
        { t: 'teclado', oitavas: 1, destacar: [{ pc: 6, rotulo: 'F♯/G♭' }], legenda: 'A tecla preta entre Fá e Sol tem dois nomes: Fá sustenido (subindo do Fá) ou Sol bemol (descendo do Sol).' },
        { t: 'h', x: 'Onde ficam os acidentes no braço' },
        { t: 'braco', casas: 5, notas: [
          { corda: 1, casa: 0, rotulo: 'Mi' }, { corda: 1, casa: 1, rotulo: 'Fá' }, { corda: 1, casa: 2, rotulo: 'Fá♯', classe: 'raiz' }, { corda: 1, casa: 3, rotulo: 'Sol' }, { corda: 1, casa: 4, rotulo: 'Sol♯', classe: 'raiz' },
          { corda: 2, casa: 0, rotulo: 'Si' }, { corda: 2, casa: 1, rotulo: 'Dó' }, { corda: 2, casa: 2, rotulo: 'Dó♯', classe: 'raiz' }, { corda: 2, casa: 3, rotulo: 'Ré' }, { corda: 2, casa: 4, rotulo: 'Ré♯', classe: 'raiz' }
        ], tocar: true, bpm: 100, legenda: 'Nas cordas 1 e 2, casa por casa. As destacadas são as alteradas. Repare: entre Mi e Fá não há casa no meio.' },
        {
          t: 'tocar', titulo: 'Toque uma escala cromática curta',
          seq: [{ corda: 1, casa: 0 }, { corda: 1, casa: 1 }, { corda: 1, casa: 2 }, { corda: 1, casa: 3 }, { corda: 1, casa: 4 }],
          rotulo: 'Mi, Fá, Fá♯, Sol, Sol♯',
          x: 'Casa por casa na 1ª corda, com os dedos 1, 2, 3 e 4.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Achar que o acidente vale só para aquela nota.', certo: 'Vale até o fim do compasso, para a mesma nota na mesma altura.' },
            { erro: 'Aplicar o acidente na mesma nota em outra oitava.', certo: 'Vale só naquela altura específica. Um Fá♯ agudo não altera o Fá grave.' },
            { erro: 'Esquecer que entre Mi–Fá e Si–Dó não existe nota no meio.', certo: 'Por isso Mi♯ é a mesma casa do Fá, e Fá♭ é a mesma do Mi.' }
          ]
        },
        {
          t: 'resumo', itens: [
            '♯ sobe um semitom (uma casa); ♭ desce um semitom; ♮ cancela.',
            'O acidente vale até o fim do compasso, naquela altura.',
            'Notas enarmônicas: o mesmo som com dois nomes (Fá♯ = Sol♭).',
            'Entre Mi–Fá e Si–Dó não há casa intermediária.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que o sustenido faz?', opcoes: ['Sobe a nota um semitom', 'Desce a nota um semitom', 'Cancela o bemol', 'Dobra a duração'], correta: 0, explicacao: 'Uma casa para a frente no violão.' },
        { texto: 'Até onde vale um acidente escrito na frente de uma nota?', opcoes: ['Até o fim do compasso, naquela altura', 'Só para aquela nota', 'Até o fim da música', 'Até a próxima linha'], correta: 0, explicacao: 'Depois da barra, ele deixa de valer.' },
        { texto: 'Para que serve o bequadro?', opcoes: ['Cancelar um sustenido ou um bemol', 'Subir meio tom', 'Descer meio tom', 'Repetir a nota'], correta: 0, explicacao: 'Devolve a nota ao estado natural.' },
        { texto: 'Fá♯ e Sol♭ são...', opcoes: ['A mesma casa do violão, com nomes diferentes', 'Notas a um tom de distância', 'Notas a uma oitava de distância', 'Nomes errados'], correta: 0, explicacao: 'Chamam-se notas enarmônicas.' },
        { texto: 'Entre Mi e Fá existe alguma casa intermediária?', opcoes: ['Não: eles já estão a um semitom', 'Sim, Mi sustenido', 'Sim, Fá bemol', 'Depende do violão'], correta: 0, explicacao: 'O mesmo vale entre Si e Dó.' },
        { texto: 'Se um Fá♯ aparece no compasso, o Fá da oitava abaixo também fica sustenido?', opcoes: ['Não: o acidente vale só naquela altura', 'Sim, sempre', 'Sim, se estiver no mesmo tempo', 'Só se houver bequadro'], correta: 0, explicacao: 'Por isso compositores costumam repetir o sinal por segurança.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Leio uma linha com acidentes e toco as notas certas.',
          'Aplico corretamente a regra "vale até o fim do compasso".',
          'Toco Mi, Fá, Fá♯, Sol, Sol♯ na 1ª corda com os dedos 1 a 4.'
        ],
        criterio: 'Você domina quando não erra mais nenhuma nota alterada por esquecer a regra do compasso.'
      }
    },

    // ---------------------------------------------------------------- 2.1.6
    {
      id: 'n2.1.6',
      titulo: 'Tom, semitom e a escala cromática',
      resumo: 'A menor distância da música e a escala que usa todas as notas.',
      minutos: 14,
      disciplinas: ['teoria'],
      prereq: ['n2.1.5'],
      status: 'implementado',
      cobre: ['Tom e semitom', 'Escala cromática'],
      objetivo: 'Medir distâncias entre notas e tocar a escala cromática no braço.',
      blocos: [
        { t: 'p', x: 'Toda a teoria musical ocidental é construída sobre uma única unidade de medida: o *semitom*. Se você entender bem esta aula, escalas, acordes e harmonia deixam de ser decoreba e viram contas simples.' },
        { t: 'h', x: 'As duas distâncias' },
        {
          t: 'def', termo: 'Semitom',
          x: 'A menor distância entre duas notas na música ocidental. No violão, *uma casa*. No teclado, duas teclas vizinhas, contando as pretas.'
        },
        {
          t: 'def', termo: 'Tom',
          x: 'Dois semitons. No violão, *duas casas*.'
        },
        { t: 'semitons', legenda: 'No teclado fica evidente: entre Mi e Fá e entre Si e Dó não existe tecla preta. Esses são os dois semitons naturais.' },
        {
          t: 'tabela',
          cab: ['De', 'Para', 'Distância'],
          linhas: [['Dó', 'Ré', '1 tom'], ['Ré', 'Mi', '1 tom'], ['Mi', 'Fá', '1 semitom'], ['Fá', 'Sol', '1 tom'], ['Sol', 'Lá', '1 tom'], ['Lá', 'Si', '1 tom'], ['Si', 'Dó', '1 semitom']],
          legenda: 'Guarde as duas exceções: Mi–Fá e Si–Dó. Todas as outras vizinhas naturais estão a um tom.'
        },
        { t: 'regua', de: 0, ate: 2, nomes: ['Dó', 'Dó♯', 'Ré', 'Ré♯', 'Mi', 'Fá', 'Fá♯', 'Sol', 'Sol♯', 'Lá', 'Lá♯', 'Si', 'Dó'], legenda: 'A régua das 12 notas. De Dó a Ré são 2 semitons: um tom.' },
        { t: 'h', x: 'A escala cromática' },
        { t: 'p', x: 'Tocar todas as 12 notas em sequência, de semitom em semitom, é a *escala cromática*. Ela não tem tônica nem caráter: é só a lista completa dos sons disponíveis.' },
        {
          t: 'pauta',
          compassos: [
            { notas: [{ midi: 60, fig: 'colcheia' }, { midi: 61, fig: 'colcheia', acc: 1 }, { midi: 62, fig: 'colcheia' }, { midi: 63, fig: 'colcheia', acc: 1 }, { midi: 64, fig: 'colcheia' }, { midi: 65, fig: 'colcheia' }, { midi: 66, fig: 'colcheia', acc: 1 }, { midi: 67, fig: 'colcheia' }] },
            { notas: [{ midi: 68, fig: 'colcheia', acc: 1 }, { midi: 69, fig: 'colcheia' }, { midi: 70, fig: 'colcheia', acc: 1 }, { midi: 71, fig: 'colcheia' }, { midi: 72, fig: 'minima' }] }
          ],
          formula: [4, 4], tocar: true, bpm: 72,
          legenda: 'A escala cromática de Dó a Dó, subindo. Doze passos iguais.'
        },
        { t: 'h', x: 'No violão: casa por casa' },
        { t: 'p', x: 'A escala cromática no violão é o exercício técnico mais útil que existe, porque obriga os quatro dedos a trabalharem em sequência. Você já fez uma versão dele no Nível 1.' },
        { t: 'braco', casas: 5, notas: [
          { corda: 6, casa: 0, rotulo: '0' }, { corda: 6, casa: 1, rotulo: '1', classe: 'raiz' }, { corda: 6, casa: 2, rotulo: '2', classe: 'raiz' }, { corda: 6, casa: 3, rotulo: '3', classe: 'raiz' }, { corda: 6, casa: 4, rotulo: '4', classe: 'raiz' },
          { corda: 5, casa: 0, rotulo: '0' }, { corda: 5, casa: 1, rotulo: '1', classe: 'raiz' }, { corda: 5, casa: 2, rotulo: '2', classe: 'raiz' }, { corda: 5, casa: 3, rotulo: '3', classe: 'raiz' }, { corda: 5, casa: 4, rotulo: '4', classe: 'raiz' }
        ], tocar: true, bpm: 110, legenda: 'Cromático nas cordas 6 e 5: corda solta e depois os dedos 1, 2, 3 e 4. Continue nas outras quatro cordas.' },
        { t: 'metronomo', titulo: 'Cromático com metrônomo', bpm: 60, compasso: '4/4', x: 'Suba e desça o cromático nas seis cordas, uma nota por clique. Meta deste módulo: 90 BPM com som limpo.' },
        {
          t: 'tocar', titulo: 'Confira o cromático',
          seq: [{ corda: 5, casa: 0 }, { corda: 5, casa: 1 }, { corda: 5, casa: 2 }, { corda: 5, casa: 3 }, { corda: 5, casa: 4 }],
          rotulo: 'Cromático na 5ª corda',
          x: 'Lá, Lá♯, Si, Dó, Dó♯. Dedos 1, 2, 3 e 4 nas casas 1 a 4.'
        },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Fixação: tons e semitons', rodadas: 6, perguntas: [
          { texto: 'Quantos semitons há entre Mi e Fá?', opcoes: ['1', '2', '3', '0'], correta: 0, explicacao: 'É um dos dois semitons naturais.' },
          { texto: 'Quantos semitons há entre Sol e Lá?', opcoes: ['2', '1', '3', '4'], correta: 0, explicacao: 'Um tom = dois semitons = duas casas.' },
          { texto: 'Um tom equivale a quantas casas no violão?', opcoes: ['2', '1', '3', '4'], correta: 0, explicacao: 'Cada casa é um semitom.' },
          { texto: 'Quantas notas diferentes tem a escala cromática?', opcoes: ['12', '7', '8', '5'], correta: 0, explicacao: 'Todas as notas disponíveis, de semitom em semitom.' },
          { texto: 'Entre quais notas naturais NÃO há nota intermediária?', opcoes: ['Mi–Fá e Si–Dó', 'Dó–Ré e Fá–Sol', 'Sol–Lá e Lá–Si', 'Ré–Mi e Dó–Ré'], correta: 0, explicacao: 'São os dois semitons naturais.' },
          { texto: 'Quantos semitons há entre Dó e Mi?', opcoes: ['4', '3', '2', '5'], correta: 0, explicacao: 'Dó–Ré é um tom, Ré–Mi é outro: 4 semitons.' }
        ] },
        {
          t: 'resumo', itens: [
            'Semitom = uma casa. Tom = duas casas.',
            'Mi–Fá e Si–Dó são os dois semitons naturais; todas as outras vizinhas naturais estão a um tom.',
            'A escala cromática usa as 12 notas, de semitom em semitom.',
            'O cromático no braço é o melhor exercício de independência dos dedos.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas casas do violão correspondem a um tom?', opcoes: ['Duas', 'Uma', 'Três', 'Quatro'], correta: 0, explicacao: 'Cada casa é um semitom.' },
        { texto: 'Entre quais notas naturais existe apenas um semitom?', opcoes: ['Mi–Fá e Si–Dó', 'Dó–Ré e Ré–Mi', 'Fá–Sol e Sol–Lá', 'Lá–Si e Si–Dó'], correta: 0, explicacao: 'São as duas exceções que você precisa decorar.' },
        { texto: 'Quantas notas tem a escala cromática?', opcoes: ['12', '7', '8', '5'], correta: 0, explicacao: 'Todas as notas, de semitom em semitom.' },
        { texto: 'Quantos semitons há de Dó a Sol?', opcoes: ['7', '5', '6', '8'], correta: 0, explicacao: 'Dó-Ré-Mi-Fá-Sol: 2+2+1+2 = 7.' },
        { texto: 'A escala cromática tem tônica?', opcoes: ['Não: ela é só a lista de todos os sons', 'Sim, sempre Dó', 'Sim, a primeira nota tocada', 'Depende da música'], correta: 0, explicacao: 'Por isso ela não tem "cara" própria.' },
        { texto: 'Por que o cromático é um bom exercício técnico?', opcoes: ['Porque obriga os quatro dedos a trabalharem em sequência', 'Porque é bonito', 'Porque é rápido', 'Porque usa só o indicador'], correta: 0, explicacao: 'Um dedo por casa, sem exceção.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Calculo a distância em tons e semitons entre duas notas naturais quaisquer.',
          'Toco a escala cromática subindo e descendo nas seis cordas.',
          'Consigo 72 BPM com uma nota por clique e som limpo.'
        ],
        criterio: 'Você domina quando o cromático sai parelho e você calcula distâncias sem olhar a tabela.'
      }
    },

    // ---------------------------------------------------------------- 2.1.7
    {
      id: 'n2.1.7',
      titulo: 'Introdução às escalas maiores',
      resumo: 'A fórmula T-T-S-T-T-T-S e a escala de Dó no violão.',
      minutos: 16,
      disciplinas: ['teoria', 'tecnica'],
      prereq: ['n2.1.6'],
      status: 'implementado',
      cobre: ['Introdução às escalas maiores'],
      objetivo: 'Construir qualquer escala maior a partir da fórmula, e tocar a de Dó e a de Sol no braço.',
      blocos: [
        { t: 'p', x: 'Das 12 notas da escala cromática, a música escolhe *sete* e monta uma escala. A escolha não é aleatória: é um padrão fixo de distâncias. Mude a nota de partida mantendo o padrão e você tem a mesma escala em outra tonalidade.' },
        { t: 'h', x: 'A fórmula da escala maior' },
        {
          t: 'dica', titulo: 'Decore isto e você sabe todas as escalas maiores: ',
          x: '*Tom – Tom – Semitom – Tom – Tom – Tom – Semitom*. Ou, em casas do violão: 2 – 2 – 1 – 2 – 2 – 2 – 1.'
        },
        { t: 'teclado', oitavas: 1, destacar: [0, 2, 4, 5, 7, 9, 11].map((pc, i) => ({ pc, rotulo: String(i + 1), classe: i ? '' : 'raiz' })), legenda: 'A escala de Dó maior usa só teclas brancas. Repare onde os semitons caem: entre os graus 3–4 e 7–8.' },
        {
          t: 'tabela',
          cab: ['Grau', 'Nota em Dó', 'Distância da anterior'],
          linhas: [
            ['1 (tônica)', 'Dó', '—'], ['2', 'Ré', 'tom'], ['3', 'Mi', 'tom'], ['4', 'Fá', 'semitom'],
            ['5', 'Sol', 'tom'], ['6', 'Lá', 'tom'], ['7', 'Si', 'tom'], ['8 (oitava)', 'Dó', 'semitom']
          ]
        },
        { t: 'h', x: 'Montando outra escala com a mesma fórmula' },
        { t: 'p', x: 'Vamos montar Sol maior. Começamos no Sol e aplicamos 2–2–1–2–2–2–1 em casas:' },
        {
          t: 'passos', itens: [
            'Sol. Sobe 2 casas → *Lá*.',
            'Lá. Sobe 2 casas → *Si*.',
            'Si. Sobe 1 casa → *Dó*.',
            'Dó. Sobe 2 casas → *Ré*.',
            'Ré. Sobe 2 casas → *Mi*.',
            'Mi. Sobe 2 casas → *Fá♯* (e não Fá: de Mi a Fá é só 1 casa).',
            'Fá♯. Sobe 1 casa → *Sol*. Fechou a oitava.'
          ]
        },
        { t: 'p', x: 'Resultado: *Sol, Lá, Si, Dó, Ré, Mi, Fá♯*. A escala de Sol maior tem um sustenido, e ele é o Fá. Isso não foi escolha de ninguém: foi consequência da fórmula.' },
        {
          t: 'pauta',
          txt: 'g4 a4 b4 c5 | d5 e5 f5 g5',
          armadura: 1, formula: [4, 4], nomes: true, tocar: true, bpm: 84,
          legenda: 'Escala de Sol maior. O sustenido aparece na armadura, logo depois da clave: assim não é preciso escrevê-lo em cada Fá.'
        },
        { t: 'h', x: 'A escala de Dó maior no violão' },
        { t: 'braco', casas: 5, notas: [
          { corda: 5, casa: 3, rotulo: '1', classe: 'raiz' }, { corda: 4, casa: 0, rotulo: '2' }, { corda: 4, casa: 2, rotulo: '3' }, { corda: 4, casa: 3, rotulo: '4' },
          { corda: 3, casa: 0, rotulo: '5' }, { corda: 3, casa: 2, rotulo: '6' }, { corda: 2, casa: 0, rotulo: '7' }, { corda: 2, casa: 1, rotulo: '8', classe: 'raiz' }
        ], tocar: true, bpm: 90, legenda: 'Dó maior em uma oitava, na primeira posição. Dedos: 3 na 5ª/3; depois 0-2-3 na 4ª; 0-2 na 3ª; 0-1 na 2ª.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 3]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 3]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[4, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[5, 3]], fig: 'minima', dedo: 'i' }] }
          ],
          legenda: 'Dó maior subindo e descendo, com alternância i–m na mão direita.',
          tocar: true, bpm: 84
        },
        {
          t: 'tocar', titulo: 'Confira a escala de Dó',
          seq: [{ corda: 5, casa: 3 }, { corda: 4, casa: 0 }, { corda: 4, casa: 2 }, { corda: 4, casa: 3 }, { corda: 3, casa: 0 }, { corda: 3, casa: 2 }, { corda: 2, casa: 0 }, { corda: 2, casa: 1 }],
          rotulo: 'Tocar Dó maior, uma oitava',
          x: 'Suba a escala nota por nota. O app confere cada uma.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Decorar as notas de cada escala uma a uma.', certo: 'Decore a fórmula 2-2-1-2-2-2-1 e construa qualquer escala na hora.' },
            { erro: 'Escrever Sol maior com Sol♭ em vez de Fá♯.', certo: 'Cada letra aparece uma única vez na escala. Já há um Sol: a sétima tem que ser alguma forma de Fá.' },
            { erro: 'Tocar a escala sem alternar i e m.', certo: 'A alternância é o que vai permitir velocidade depois.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Escala maior = T T S T T T S, ou 2-2-1-2-2-2-1 casas.',
            'Os semitons caem entre os graus 3–4 e 7–8.',
            'Sol maior tem Fá♯; isso é consequência da fórmula, não convenção.',
            'Cada letra de nota aparece uma única vez na escala.',
            'A armadura evita escrever o acidente em cada nota.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a fórmula da escala maior?', opcoes: ['T T S T T T S', 'T S T T S T T', 'S T T S T T T', 'T T T S T T S'], correta: 0, explicacao: 'Tom, tom, semitom, tom, tom, tom, semitom.' },
        { texto: 'Entre quais graus da escala maior caem os semitons?', opcoes: ['3–4 e 7–8', '1–2 e 5–6', '2–3 e 6–7', '4–5 e 7–8'], correta: 0, explicacao: 'Em Dó: Mi–Fá e Si–Dó.' },
        { texto: 'Quantos sustenidos tem a escala de Sol maior?', opcoes: ['Um (Fá♯)', 'Nenhum', 'Dois', 'Três'], correta: 0, explicacao: 'A fórmula exige um semitom entre o 7º e o 8º grau.' },
        { texto: 'Por que Sol maior usa Fá♯ e não Sol♭?', opcoes: ['Porque cada letra aparece uma vez só na escala, e Sol já é a tônica', 'Porque soa melhor', 'Por convenção dos violonistas', 'Porque Sol♭ não existe'], correta: 0, explicacao: 'A sétima tem que ser alguma forma de Fá.' },
        { texto: 'Em casas do violão, a fórmula da escala maior é...', opcoes: ['2-2-1-2-2-2-1', '1-2-2-1-2-2-2', '2-1-2-2-1-2-2', '2-2-2-1-2-2-1'], correta: 0, explicacao: 'Cada casa é um semitom.' },
        { texto: 'Para que serve a armadura de clave?', opcoes: ['Evitar escrever o mesmo acidente em cada nota', 'Marcar o andamento', 'Indicar o compasso', 'Separar as seções'], correta: 0, explicacao: 'Ela vale para a peça inteira.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Construo a escala maior de qualquer nota usando a fórmula.',
          'Toco a escala de Dó maior em uma oitava, subindo e descendo.',
          'Mantenho a alternância i–m.',
          'Consigo 84 BPM com uma nota por clique.'
        ],
        criterio: 'Você domina quando constrói a escala no papel e toca a de Dó sem olhar o diagrama.'
      }
    },

    // ---------------------------------------------------------------- 2.1.8
    {
      id: 'n2.1.8',
      titulo: 'Introdução aos intervalos',
      resumo: 'Medir a distância entre duas notas e reconhecê-la de ouvido.',
      minutos: 16,
      disciplinas: ['teoria', 'percepcao'],
      prereq: ['n2.1.7'],
      status: 'implementado',
      cobre: ['Introdução aos intervalos'],
      objetivo: 'Nomear intervalos simples, contá-los em semitons e começar a reconhecê-los de ouvido.',
      blocos: [
        { t: 'p', x: 'Intervalo é a distância entre duas notas. É o conceito que liga escalas a acordes: um acorde nada mais é do que um empilhamento de intervalos.' },
        { t: 'h', x: 'Contar o número: sempre pelas letras' },
        { t: 'p', x: 'O *número* do intervalo vem da contagem das letras, incluindo as duas pontas. De Dó a Mi: Dó(1), Ré(2), Mi(3) — é uma *terça*. De Dó a Sol: Dó, Ré, Mi, Fá, Sol — uma *quinta*.' },
        {
          t: 'aviso', x: 'Conte sempre incluindo as duas notas. De Dó a Ré é uma *segunda*, não uma primeira. Esse é o erro mais comum de quem está começando.'
        },
        { t: 'h', x: 'Contar a qualidade: pelos semitons' },
        { t: 'p', x: 'O número sozinho não basta: de Dó a Mi são 4 semitons, mas de Ré a Fá também são 3 letras (uma terça) e apenas 3 semitons. São duas terças diferentes. A *qualidade* resolve isso.' },
        {
          t: 'tabela',
          cab: ['Intervalo', 'Semitons', 'Exemplo em Dó'],
          linhas: [
            ['Uníssono', '0', 'Dó – Dó'],
            ['2ª menor', '1', 'Dó – Ré♭'],
            ['2ª maior', '2', 'Dó – Ré'],
            ['3ª menor', '3', 'Dó – Mi♭'],
            ['3ª maior', '4', 'Dó – Mi'],
            ['4ª justa', '5', 'Dó – Fá'],
            ['Trítono', '6', 'Dó – Fá♯'],
            ['5ª justa', '7', 'Dó – Sol'],
            ['6ª menor', '8', 'Dó – Lá♭'],
            ['6ª maior', '9', 'Dó – Lá'],
            ['7ª menor', '10', 'Dó – Si♭'],
            ['7ª maior', '11', 'Dó – Si'],
            ['Oitava', '12', 'Dó – Dó']
          ],
          legenda: 'Não decore a tabela inteira de uma vez. Comece por três: 3ª maior = 4, 3ª menor = 3, 5ª justa = 7. Com essas três você já monta todos os acordes básicos.'
        },
        { t: 'regua', de: 0, ate: 4, nomes: ['Dó', '', 'Ré', '', 'Mi', 'Fá', '', 'Sol', '', 'Lá', '', 'Si', 'Dó'], legenda: 'Dó a Mi: quatro semitons, uma terça maior.' },
        { t: 'regua', de: 0, ate: 7, nomes: ['Dó', '', 'Ré', '', 'Mi', 'Fá', '', 'Sol', '', 'Lá', '', 'Si', 'Dó'], legenda: 'Dó a Sol: sete semitons, uma quinta justa. É o intervalo mais estável da música.' },
        { t: 'h', x: 'Justos, maiores e menores' },
        {
          t: 'comparar',
          a: { titulo: 'Podem ser justos', itens: ['4ª, 5ª e oitava (e o uníssono)', 'Soam "neutros", sem cor maior ou menor', 'Se aumentam ou diminuem um semitom, viram aumentados ou diminutos'] },
          b: { titulo: 'Podem ser maiores ou menores', itens: ['2ª, 3ª, 6ª e 7ª', 'O menor tem um semitom a menos que o maior', 'É a 3ª que define se um acorde é maior ou menor'] }
        },
        { t: 'h', x: 'No violão: onde os intervalos aparecem' },
        { t: 'p', x: 'Uma vantagem enorme do violão: o mesmo intervalo tem sempre o *mesmo desenho* no braço, não importa onde você esteja. Vale a pena decorar as formas.' },
        { t: 'braco', casas: 7, notas: [
          { corda: 5, casa: 3, rotulo: 'R', classe: 'raiz' },
          { corda: 4, casa: 2, rotulo: '3ª' },
          { corda: 4, casa: 5, rotulo: '5ª' },
          { corda: 3, casa: 5, rotulo: '8ª' }
        ], tocar: true, bpm: 80, legenda: 'Raiz Dó na 5ª corda, casa 3. A 3ª maior (Mi) fica uma corda acima e uma casa atrás; a 5ª justa (Sol), uma corda acima e duas casas à frente; a oitava (Dó), duas cordas acima e duas casas à frente. Esse desenho é o mesmo em qualquer lugar do braço.' },
        { t: 'h', x: 'Reconhecer de ouvido' },
        { t: 'p', x: 'O jeito clássico de aprender a reconhecer intervalos é associar cada um ao começo de uma música conhecida:' },
        {
          t: 'tabela',
          cab: ['Intervalo', 'Música que começa assim'],
          linhas: [
            ['2ª maior', '"Parabéns pra você" (pa-ra)'],
            ['3ª maior', '"Brilha, brilha estrelinha" (3ª descendo na 2ª frase)'],
            ['4ª justa', 'Hino nacional brasileiro (Ou-vi-ram)'],
            ['5ª justa', '"Brilha, brilha estrelinha" (bri-lha → bri-lha)'],
            ['6ª maior', '"My Bonnie" / abertura de muitas valsas'],
            ['Oitava', '"Somewhere over the rainbow" (some-where)']
          ],
          legenda: 'Escolha uma música que VOCÊ conhece bem para cada intervalo. Funciona melhor do que qualquer lista pronta.'
        },
        { t: 'ouvir', titulo: 'Ouvir uma 5ª justa', notas: [60, 67], fig: 'minima', bpm: 60, x: 'Dó e Sol.' },
        { t: 'ouvir', titulo: 'Ouvir uma 3ª maior', notas: [60, 64], fig: 'minima', bpm: 60, x: 'Dó e Mi.' },
        { t: 'ouvir', titulo: 'Ouvir uma 3ª menor', notas: [60, 63], fig: 'minima', bpm: 60, x: 'Dó e Mi♭. Compare com a anterior: a diferença é de um semitom só.' },
        { t: 'exercicio', tipo: 'ouvido', titulo: 'Treino de ouvido', rodadas: 10, saltos: [3, 4, 5, 7, 12], x: 'Diga se a segunda nota subiu ou desceu. É o primeiro passo da percepção de intervalos.' },
        { t: 'ir', rota: 'teoria', titulo: 'Abrir Teoria', x: 'A tela de Teoria tem uma lição de intervalos com quiz e braço interativo.' },
        {
          t: 'erros', itens: [
            { erro: 'Contar o intervalo sem incluir a nota de partida.', certo: 'De Dó a Ré são duas letras: segunda.' },
            { erro: 'Dizer só "terça" sem a qualidade.', certo: 'Terça maior (4 semitons) e terça menor (3) são intervalos diferentes.' },
            { erro: 'Tentar decorar os 13 intervalos de uma vez.', certo: 'Comece com 3ª maior = 4, 3ª menor = 3 e 5ª justa = 7.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O número do intervalo vem da contagem das letras, incluindo as duas pontas.',
            'A qualidade vem da contagem dos semitons.',
            '4ª, 5ª e oitava são justas; 2ª, 3ª, 6ª e 7ª são maiores ou menores.',
            'Três para decorar primeiro: 3ª maior = 4, 3ª menor = 3, 5ª justa = 7.',
            'No violão, cada intervalo tem sempre o mesmo desenho no braço.'
          ]
        }
      ],
      quiz: [
        { texto: 'De Dó a Mi, que intervalo é?', opcoes: ['Terça maior', 'Terça menor', 'Segunda maior', 'Quarta justa'], correta: 0, explicacao: 'Três letras e quatro semitons.' },
        { texto: 'Quantos semitons tem uma quinta justa?', opcoes: ['7', '5', '6', '8'], correta: 0, explicacao: 'De Dó a Sol.' },
        { texto: 'De Dó a Ré, que intervalo é?', opcoes: ['Segunda maior', 'Primeira', 'Terça menor', 'Uníssono'], correta: 0, explicacao: 'Conta-se incluindo as duas notas.' },
        { texto: 'Quais intervalos podem ser "justos"?', opcoes: ['4ª, 5ª e oitava', '2ª, 3ª e 6ª', 'Todos', '3ª e 7ª'], correta: 0, explicacao: 'Os outros são maiores ou menores.' },
        { texto: 'Qual é a diferença entre terça maior e terça menor?', opcoes: ['Um semitom', 'Um tom', 'Uma oitava', 'Nenhuma'], correta: 0, explicacao: '4 semitons contra 3.' },
        { texto: 'Qual intervalo define se um acorde é maior ou menor?', opcoes: ['A terça', 'A quinta', 'A oitava', 'A sétima'], correta: 0, explicacao: 'Por isso a terça é o intervalo mais importante da harmonia.' },
        { texto: 'Quantos semitons tem o trítono?', opcoes: ['6', '5', '7', '4'], correta: 0, explicacao: 'Fica exatamente no meio da oitava.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Nomeio o número de qualquer intervalo contando as letras.',
          'Sei de cabeça: 3ª maior = 4 semitons, 3ª menor = 3, 5ª justa = 7.',
          'Toco uma 3ª maior, uma 3ª menor e uma 5ª justa no violão.',
          'Acerto pelo menos 8 de 10 no exercício de ouvido.'
        ],
        criterio: 'Você domina quando identifica os três intervalos básicos no papel e no instrumento, sem consultar.'
      }
    }
  ]
};
