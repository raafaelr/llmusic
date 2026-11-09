// NÍVEL 1 · MÓDULO 1.3 — Introdução à teoria musical
// Oito aulas: do que é som até o compasso, passando pelo pentagrama e pelas figuras.

export const M13 = {
  id: '1.3',
  titulo: 'Introdução à teoria musical',
  objetivo: 'Entender a linguagem escrita da música: o que é som, como se chamam as notas, como elas são desenhadas na pauta e como o tempo é organizado em figuras e compassos.',
  aulas: [

    // ---------------------------------------------------------------- 1.3.1
    {
      id: 'n1.3.1',
      titulo: 'O que é música: som e silêncio',
      resumo: 'A matéria-prima da música e por que o silêncio conta tanto quanto o som.',
      minutos: 10,
      disciplinas: ['teoria'],
      prereq: [],
      status: 'validado',
      cobre: ['O que é música', 'Som e silêncio'],
      objetivo: 'Entender que música é som e silêncio organizados no tempo, e que a partitura escreve os dois.',
      blocos: [
        { t: 'p', x: 'Música é *som e silêncio organizados no tempo*. Esta definição parece simples demais, mas ela contém tudo: se não houver organização, é ruído; se não houver tempo, não existe música; e se não houver silêncio, só existe barulho contínuo.' },
        { t: 'h', x: 'O que é som, fisicamente' },
        { t: 'p', x: 'Som é ar em movimento. Quando a corda do violão vibra, ela empurra o ar para a frente e para trás, muitas vezes por segundo. Essas ondas chegam ao seu tímpano, que vibra junto, e o cérebro interpreta aquilo como som.' },
        { t: 'p', x: 'O número de vibrações por segundo é a *frequência*, medida em hertz (Hz). Uma corda que vibra 110 vezes por segundo produz o Lá da 5ª corda do violão. Quanto mais vibrações por segundo, mais agudo o som.' },
        { t: 'ouvir', titulo: 'Ouvir um som grave e um agudo', notas: [40, 64], fig: 'minima', bpm: 60, x: 'Primeiro a 6ª corda solta (82 Hz), depois a 1ª corda solta (330 Hz). Quatro vezes mais vibrações por segundo.' },
        { t: 'h', x: 'Ruído e som musical' },
        { t: 'p', x: 'Nem toda vibração vira música. Quando a vibração é *regular e periódica*, o ouvido reconhece uma altura definida: é uma nota. Quando a vibração é caótica, ouvimos ruído, sem altura clara. Bater na madeira do violão é ruído; tocar a corda é som musical.' },
        { t: 'p', x: 'Isso não quer dizer que ruído não sirva para a música: palmas, surdina e percussão no tampo do violão são recursos legítimos. Mas a espinha dorsal da música ocidental é construída com sons de altura definida.' },
        { t: 'h', x: 'O silêncio é parte da música' },
        { t: 'p', x: 'Um erro comum de iniciante é achar que as pausas são "tempo perdido". É o contrário: o silêncio *organiza* o som. É ele que separa as frases, que cria expectativa, que faz uma nota soar forte por vir depois do nada.' },
        { t: 'pauta', txt: 'g4 g4 a4/b | g4 c5 b4/b', legenda: 'Uma frase sem pausas: tudo encostado.', tocar: true, bpm: 80 },
        { t: 'pauta', txt: 'g4 g4 a4 z/q | g4 c5 b4/b', legenda: 'A mesma frase com uma pausa no fim do primeiro compasso. Repare como ela respira. Ouça as duas em seguida.', tocar: true, bpm: 80 },
        { t: 'p', x: 'A partitura escreve as duas coisas. Para cada figura que marca um som, existe uma *pausa* equivalente que marca o silêncio com a mesma duração. Você vai ver isso em detalhe na aula sobre pausas.' },
        {
          t: 'dica', x: 'Quando estiver estudando uma peça e ela soar "atropelada", procure as pausas: quase sempre elas estão sendo comidas. Tocar o silêncio é tão importante quanto tocar a nota.'
        },
        {
          t: 'resumo', itens: [
            'Música é som e silêncio organizados no tempo.',
            'Som é vibração do ar; a frequência (Hz) determina se é grave ou agudo.',
            'Vibração regular = nota com altura definida. Vibração caótica = ruído.',
            'A partitura escreve o silêncio com o mesmo cuidado que escreve o som.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é uma boa definição de música?', opcoes: ['Som e silêncio organizados no tempo', 'Qualquer som agradável', 'Notas tocadas em sequência', 'Som produzido por instrumentos'], correta: 0, explicacao: 'A organização no tempo é o que separa música de ruído.' },
        { texto: 'O que é frequência?', opcoes: ['O número de vibrações por segundo', 'O volume do som', 'A duração da nota', 'O timbre do instrumento'], correta: 0, explicacao: 'Medida em hertz (Hz).' },
        { texto: 'Quanto maior a frequência...', opcoes: ['Mais agudo o som', 'Mais grave o som', 'Mais alto o volume', 'Mais longa a nota'], correta: 0, explicacao: 'A 1ª corda vibra quatro vezes mais rápido que a 6ª e soa duas oitavas acima.' },
        { texto: 'O que diferencia uma nota de um ruído?', opcoes: ['A nota tem vibração regular e altura definida', 'A nota é mais alta', 'O ruído é mais curto', 'Não há diferença'], correta: 0, explicacao: 'Bater na madeira é ruído; tocar a corda é nota.' },
        { texto: 'Qual é o papel do silêncio na música?', opcoes: ['Organizar o som, separar frases e criar expectativa', 'Nenhum: é tempo perdido', 'Apenas descansar o músico', 'Marcar o fim da peça'], correta: 0, explicacao: 'Por isso a partitura escreve as pausas com precisão.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: ['Sei explicar por que uma corda vibrando produz som.', 'Percebo a diferença entre a frase com pausa e a sem pausa.'],
        criterio: 'Aula conceitual: basta conseguir explicar com as próprias palavras.'
      }
    },

    // ---------------------------------------------------------------- 1.3.2
    {
      id: 'n1.3.2',
      titulo: 'As quatro qualidades do som',
      resumo: 'Altura, duração, intensidade e timbre.',
      minutos: 12,
      disciplinas: ['teoria', 'percepcao'],
      prereq: ['n1.3.1'],
      status: 'validado',
      cobre: ['Altura, duração, intensidade e timbre'],
      objetivo: 'Separar as quatro coisas que você pode controlar em cada nota que toca.',
      blocos: [
        { t: 'p', x: 'Todo som musical tem quatro qualidades. Elas são independentes: você pode mudar uma sem mexer nas outras. Entender essa separação é o que permite falar de música com precisão e, mais à frente, interpretar.' },
        { t: 'h', x: '1. Altura: grave ou agudo' },
        { t: 'p', x: 'É a frequência da vibração. No violão, a altura muda de três jeitos: escolhendo outra corda, apertando outra casa, ou girando a tarraxa (o que seria desafinar).' },
        { t: 'ouvir', titulo: 'Mesma duração, alturas diferentes', notas: [50, 55, 59, 64], bpm: 90, x: '4ª, 3ª, 2ª e 1ª cordas soltas: só a altura muda.' },
        { t: 'h', x: '2. Duração: curto ou longo' },
        { t: 'p', x: 'É quanto tempo a nota dura. Na partitura, a duração é escrita pelo *formato* da figura: a semibreve é longa, a semicolcheia é curtíssima. Você vai estudar isso em detalhe na aula das figuras.' },
        { t: 'pauta', txt: 'g4/o | g4/b g4/b | g4 g4 g4 g4 | g4/c g4/c g4/c g4/c g4/c g4/c g4/c g4/c', legenda: 'A mesma altura (Sol) com quatro durações diferentes. Ouça: nada muda além do tempo que cada nota dura.', tocar: true, bpm: 80 },
        { t: 'h', x: '3. Intensidade: forte ou fraco' },
        { t: 'p', x: 'É o volume. Na partitura, aparece com siglas italianas: *pp* (pianissimo, muito fraco), *p* (piano, fraco), *mf* (mezzo-forte, meio forte), *f* (forte) e *ff* (fortissimo). No violão, você controla a intensidade pela velocidade com que o dedo atravessa a corda, não pela força com que aperta.' },
        {
          t: 'tabela',
          cab: ['Sigla', 'Nome', 'Quer dizer'],
          linhas: [['pp', 'pianissimo', 'muito fraco'], ['p', 'piano', 'fraco'], ['mp', 'mezzo-piano', 'meio fraco'], ['mf', 'mezzo-forte', 'meio forte'], ['f', 'forte', 'forte'], ['ff', 'fortissimo', 'muito forte']],
          legenda: 'Cuidado com a armadilha: na música, "piano" significa fraco. O instrumento piano se chama assim porque, ao contrário do cravo, podia tocar forte e fraco.'
        },
        { t: 'h', x: '4. Timbre: a cor do som' },
        { t: 'p', x: 'É o que faz você reconhecer que um Lá tocado no violão é diferente do mesmo Lá tocado num piano ou cantado. Mesma altura, mesma duração, mesma intensidade: só o timbre muda.' },
        { t: 'p', x: 'O timbre vem dos *harmônicos*: junto com a vibração principal, a corda vibra também em pedaços menores, produzindo sons mais agudos que se misturam. A proporção entre eles é a impressão digital de cada instrumento.' },
        { t: 'p', x: 'No violão você controla o timbre com a mão direita: perto do cavalete sai metálico, perto do braço sai doce. Esse controle é uma das grandes riquezas do instrumento, e é o que você vai usar lá no Nível 5 para interpretar.' },
        {
          t: 'tabela',
          cab: ['Qualidade', 'O que é', 'No violão, muda com'],
          linhas: [
            ['Altura', 'Grave ou agudo', 'Corda e casa escolhidas'],
            ['Duração', 'Curto ou longo', 'Quanto tempo você deixa a nota soar'],
            ['Intensidade', 'Forte ou fraco', 'Velocidade do dedo na corda'],
            ['Timbre', 'A cor do som', 'Onde a mão direita toca; unha ou polpa']
          ]
        },
        { t: 'exercicio', tipo: 'ouvido', titulo: 'Treine a altura', rodadas: 8, saltos: [2, 4, 5, 7, 12], x: 'O app toca duas notas. Diga se a segunda subiu ou desceu.' },
        {
          t: 'resumo', itens: [
            'Altura: grave ou agudo (frequência).',
            'Duração: curto ou longo (tempo).',
            'Intensidade: forte ou fraco (volume), escrita com p, mf, f...',
            'Timbre: a cor do som, que vem dos harmônicos.',
            'No violão você controla todas as quatro; o timbre, principalmente com o lugar onde a mão direita toca.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as quatro qualidades do som?', opcoes: ['Altura, duração, intensidade e timbre', 'Altura, volume, ritmo e melodia', 'Grave, agudo, forte e fraco', 'Nota, pausa, compasso e andamento'], correta: 0, explicacao: 'Todas independentes entre si.' },
        { texto: 'O que significa "piano" numa partitura?', opcoes: ['Toque fraco', 'Toque forte', 'Toque devagar', 'Toque no piano'], correta: 0, explicacao: 'p = piano = fraco. É intensidade, não andamento.' },
        { texto: 'O que faz um violão soar diferente de um piano na mesma nota?', opcoes: ['O timbre', 'A altura', 'A duração', 'A intensidade'], correta: 0, explicacao: 'Timbre é a proporção dos harmônicos de cada instrumento.' },
        { texto: 'No violão, a intensidade de uma nota depende principalmente de quê?', opcoes: ['Da velocidade com que o dedo atravessa a corda', 'Da força da mão esquerda', 'Da corda escolhida', 'Do andamento'], correta: 0, explicacao: 'Apertar mais com a esquerda não aumenta volume: só cansa.' },
        { texto: 'Qual sigla indica o som mais forte?', opcoes: ['ff', 'pp', 'mf', 'p'], correta: 0, explicacao: 'ff = fortissimo.' },
        { texto: 'De onde vem o timbre?', opcoes: ['Dos harmônicos que soam junto com a nota principal', 'Da duração da nota', 'Do volume', 'Do andamento'], correta: 0, explicacao: 'A corda vibra inteira e também em pedaços menores, ao mesmo tempo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco a mesma nota forte e fraca, controlando pela velocidade do dedo.',
          'Toco a mesma nota perto do cavalete e perto do braço e ouço a diferença de timbre.',
          'Sei nomear as quatro qualidades do som.'
        ],
        criterio: 'Você domina quando consegue mudar uma qualidade de propósito, mantendo as outras.'
      }
    },

    // ---------------------------------------------------------------- 1.3.3
    {
      id: 'n1.3.3',
      titulo: 'As sete notas e o alfabeto musical',
      resumo: 'Dó Ré Mi Fá Sol Lá Si, as cifras C D E F G A B e por que são sete.',
      minutos: 14,
      disciplinas: ['teoria'],
      prereq: ['n1.3.1'],
      status: 'validado',
      cobre: ['Notas musicais: Dó, Ré, Mi, Fá, Sol, Lá e Si', 'Alfabeto musical: C, D, E, F, G, A e B', 'Notas naturais'],
      objetivo: 'Saber os dois nomes de cada nota, a ordem delas e o que é uma oitava.',
      blocos: [
        { t: 'p', x: 'A música ocidental usa sete nomes de nota que se repetem para sempre: *Dó, Ré, Mi, Fá, Sol, Lá, Si* — e depois do Si volta o Dó, mais agudo. São as chamadas *notas naturais*.' },
        { t: 'teclado', oitavas: 1, destacar: [{ pc: 0, rotulo: 'Dó' }], legenda: 'As teclas brancas de um piano são exatamente as sete notas naturais. O violão não mostra isso tão claramente, por isso usamos o teclado para explicar.' },
        { t: 'h', x: 'De onde vêm esses nomes' },
        { t: 'p', x: 'No século XI, o monge italiano *Guido d\'Arezzo* precisava de um jeito de ensinar os cantores a ler melodias. Ele usou um hino a São João Batista em que cada verso começava um grau acima do anterior, e batizou as notas com a primeira sílaba de cada verso: *Ut, Re, Mi, Fa, Sol, La*. O "Ut" virou "Dó" séculos depois, e o "Si" foi acrescentado no fim.' },
        { t: 'h', x: 'O alfabeto musical: as cifras' },
        { t: 'p', x: 'Países de língua inglesa e alemã nunca adotaram os nomes de Guido: lá se usam letras. Esse sistema, chamado de *cifra*, é o que aparece acima das músicas em qualquer songbook, inclusive brasileiro.' },
        {
          t: 'tabela',
          cab: ['Nome', 'Cifra'],
          linhas: [['Dó', 'C'], ['Ré', 'D'], ['Mi', 'E'], ['Fá', 'F'], ['Sol', 'G'], ['Lá', 'A'], ['Si', 'B']],
          legenda: 'O truque para decorar: o alfabeto começa no Lá (A), não no Dó. A = Lá, B = Si, C = Dó, D = Ré, E = Mi, F = Fá, G = Sol.'
        },
        {
          t: 'dica', x: 'Por que o alfabeto começa em Lá? Porque, na Idade Média, a nota de referência era o Lá, e as letras foram atribuídas a partir dela. Guardando "A = Lá", todo o resto sai de cabeça.'
        },
        { t: 'h', x: 'A oitava' },
        { t: 'p', x: 'Depois do Si vem outro Dó. Esse novo Dó tem exatamente o *dobro* da frequência do anterior: se o primeiro vibra 130,8 vezes por segundo, o próximo vibra 261,6. Por isso os dois soam "a mesma nota", só que um mais alto que o outro. A distância entre eles é a *oitava* (oito graus contando as duas pontas: Dó-Ré-Mi-Fá-Sol-Lá-Si-Dó).' },
        { t: 'teclado', oitavas: 1, destacar: [{ pc: 0, rotulo: 'Dó', classe: 'raiz' }], nomes: true, legenda: 'As duas teclas marcadas são Dó. A segunda vibra o dobro da primeira: é a oitava.' },
        { t: 'ouvir', titulo: 'Ouvir uma oitava', notas: [52, 64], fig: 'minima', bpm: 60, x: 'Mi grave e Mi agudo. Repare como soam "a mesma nota".' },
        { t: 'h', x: 'No violão' },
        { t: 'p', x: 'A oitava no violão tem uma marca visual: a *casa 12*. Qualquer corda apertada na casa 12 dá a mesma nota da corda solta, uma oitava acima. É exatamente o meio da corda. Por isso a casa 12 costuma ter um marcador duplo no braço.' },
        { t: 'braco', casas: 12, notas: [{ corda: 1, casa: 0, rotulo: 'Mi', classe: 'raiz' }, { corda: 1, casa: 12, rotulo: 'Mi', classe: 'raiz' }, { corda: 5, casa: 0, rotulo: 'Lá', classe: 'neutro' }, { corda: 5, casa: 12, rotulo: 'Lá', classe: 'neutro' }], tocar: true, bpm: 70, legenda: 'Corda solta e casa 12: a mesma nota, uma oitava acima. Ouça o botão e depois faça no seu violão.' },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Fixação: nome e cifra', rodadas: 7, perguntas: [
          { texto: 'Qual é a cifra de Lá?', opcoes: ['A', 'L', 'C', 'G'], correta: 0, explicacao: 'O alfabeto musical começa no Lá.' },
          { texto: 'Qual é a cifra de Dó?', opcoes: ['C', 'D', 'A', 'E'], correta: 0, explicacao: 'A=Lá, B=Si, C=Dó.' },
          { texto: 'Qual nota é a cifra G?', opcoes: ['Sol', 'Sal', 'Si', 'Lá'], correta: 0, explicacao: 'A, B, C, D, E, F, G = Lá, Si, Dó, Ré, Mi, Fá, Sol.' },
          { texto: 'Qual nota vem depois do Si?', opcoes: ['Dó', 'Lá', 'Ré', 'Mi'], correta: 0, explicacao: 'E recomeça a sequência, uma oitava acima.' },
          { texto: 'Qual nota é a cifra E?', opcoes: ['Mi', 'Ré', 'Mi bemol', 'Si'], correta: 0, explicacao: 'E = Mi. É a nota da 1ª e da 6ª corda soltas.' },
          { texto: 'Qual nota vem antes do Fá?', opcoes: ['Mi', 'Sol', 'Ré', 'Si'], correta: 0, explicacao: 'Dó, Ré, Mi, Fá...' },
          { texto: 'Qual é a cifra de Si?', opcoes: ['B', 'S', 'C', 'A'], correta: 0, explicacao: 'B = Si. Cuidado: em alemão, B significa Si bemol.' }
        ] },
        {
          t: 'erros', itens: [
            { erro: 'Achar que o alfabeto musical começa no Dó, com A = Dó.', certo: 'A = Lá. C = Dó.' },
            { erro: 'Confundir B com Si bemol.', certo: 'Na cifra usada no Brasil e nos países de língua inglesa, B = Si. Só na notação alemã B significa Si bemol.' },
            { erro: 'Contar a oitava como sete notas.', certo: 'A oitava tem oito graus porque se conta a nota de partida e a de chegada.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Sete notas naturais: Dó, Ré, Mi, Fá, Sol, Lá, Si. Depois recomeça.',
            'Cifra: A = Lá, B = Si, C = Dó, D = Ré, E = Mi, F = Fá, G = Sol.',
            'A oitava é a distância até a nota de mesmo nome, com o dobro da frequência.',
            'No violão, a casa 12 de qualquer corda dá a oitava da corda solta.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a cifra da nota Lá?', opcoes: ['A', 'L', 'G', 'C'], correta: 0, explicacao: 'O alfabeto musical começa no Lá.' },
        { texto: 'Qual nota corresponde à cifra F?', opcoes: ['Fá', 'Sol', 'Mi', 'Si'], correta: 0, explicacao: 'A=Lá, B=Si, C=Dó, D=Ré, E=Mi, F=Fá, G=Sol.' },
        { texto: 'O que é uma oitava?', opcoes: ['A distância até a nota de mesmo nome, com o dobro da frequência', 'Um grupo de oito compassos', 'A oitava casa do violão', 'Uma figura musical'], correta: 0, explicacao: 'Dó a Dó, Ré a Ré, e assim por diante.' },
        { texto: 'Em que casa do violão a corda dá a oitava da corda solta?', opcoes: ['Casa 12', 'Casa 7', 'Casa 5', 'Casa 10'], correta: 0, explicacao: 'A casa 12 é o meio exato da corda.' },
        { texto: 'Quem batizou as notas Ut, Re, Mi, Fa, Sol, La?', opcoes: ['Guido d\'Arezzo, no século XI', 'Bach, no século XVIII', 'Pitágoras', 'Antonio de Torres'], correta: 0, explicacao: 'Ele usou as sílabas iniciais dos versos de um hino.' },
        { texto: 'Quantas notas naturais existem?', opcoes: ['Sete', 'Oito', 'Doze', 'Cinco'], correta: 0, explicacao: 'Sete nomes que se repetem oitava após oitava.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Digo as sete notas na ordem, para a frente e para trás.',
          'Converto qualquer nota para cifra e qualquer cifra para nota, na hora.',
          'Toco uma corda solta e a mesma corda na casa 12 e reconheço a oitava.'
        ],
        criterio: 'Você domina quando a conversão nome ↔ cifra sai sem pensar.'
      }
    },

    // ---------------------------------------------------------------- 1.3.4
    {
      id: 'n1.3.4',
      titulo: 'O pentagrama e a clave de sol',
      resumo: 'As cinco linhas, os quatro espaços e o sinal que dá nome a tudo.',
      minutos: 12,
      disciplinas: ['leitura', 'teoria'],
      prereq: ['n1.3.3'],
      status: 'validado',
      cobre: ['Pentagrama', 'Clave de sol'],
      objetivo: 'Entender como a altura das notas é desenhada e por que a clave é indispensável.',
      blocos: [
        { t: 'p', x: 'A partitura resolve um problema simples: como desenhar no papel se uma nota é mais grave ou mais aguda que a outra. A resposta é um gráfico: *quanto mais alto no papel, mais agudo o som*.' },
        { t: 'h', x: 'O pentagrama' },
        { t: 'p', x: 'O *pentagrama* (ou pauta) são cinco linhas paralelas e os quatro espaços entre elas. Cada linha e cada espaço é um degrau: uma nota. Subindo linha-espaço-linha-espaço você sobe Dó-Ré-Mi-Fá e assim por diante.' },
        { t: 'pauta', txt: 'e4 f4 g4 a4 | b4 c5 d5 e5', nomes: true, formula: null, legenda: 'Cada degrau é uma nota: linha, espaço, linha, espaço. Da linha de baixo até a de cima, nove degraus.' },
        {
          t: 'dica', x: 'Pentagrama vem do grego: *penta* (cinco) + *gramma* (linha). As linhas são contadas *de baixo para cima*: a 1ª linha é a de baixo.'
        },
        { t: 'h', x: 'Por que a clave existe' },
        { t: 'p', x: 'Cinco linhas, sozinhas, não dizem nada. Elas só mostram que uma nota é mais alta que a outra, não *qual* nota é. A *clave* resolve isso: ela é um sinal no começo da pauta que fixa a identidade de uma linha. Sabendo uma, você descobre todas as outras.' },
        { t: 'p', x: 'A *clave de sol* é um G estilizado. A espiral dela, aquela voltinha do meio, enrola exatamente em volta da *segunda linha de baixo para cima*. Isso quer dizer: "esta linha é o Sol". É tudo o que você precisa saber para ler tudo o mais.' },
        { t: 'pauta', txt: 'g4/o', nomes: true, formula: null, legenda: 'A nota na segunda linha é Sol. A espiral da clave aponta exatamente para ela.' },
        { t: 'h', x: 'Existem outras claves' },
        { t: 'p', x: 'Sim: clave de fá (usada por baixo, violoncelo, mão esquerda do piano) e clave de dó (viola). O violão usa *só a clave de sol*, então você não precisa se preocupar com as outras neste curso.' },
        { t: 'h', x: 'O oito embaixo da clave' },
        { t: 'p', x: 'Numa partitura de violão você costuma ver um pequeno *8* pendurado embaixo da clave de sol. Ele avisa de uma particularidade do nosso instrumento: *a música de violão soa uma oitava abaixo do que está escrito*.' },
        { t: 'p', x: 'Isso existe por conveniência. Se o violão fosse escrito na altura real, a maior parte das notas ficaria bem abaixo da pauta, cheia de linhas suplementares. Escrevendo uma oitava acima, quase tudo cabe nas cinco linhas.' },
        {
          t: 'aviso', x: 'Não confunda: o *nome* da nota é o mesmo. Se está escrito Mi, você toca o Mi do violão. O "8" só explica por que aquele Mi soa mais grave do que o mesmo desenho soaria num piano.'
        },
        { t: 'h', x: 'As notas das cordas soltas, na pauta' },
        {
          t: 'pauta',
          compassos: [{ notas: [{ midi: 52, fig: 'minima', texto: '6ª' }, { midi: 57, fig: 'minima', texto: '5ª' }] }, { notas: [{ midi: 62, fig: 'minima', texto: '4ª' }, { midi: 67, fig: 'minima', texto: '3ª' }] }, { notas: [{ midi: 71, fig: 'minima', texto: '2ª' }, { midi: 76, fig: 'minima', texto: '1ª' }] }],
          nomes: true, formula: null, tocar: true, bpm: 70,
          legenda: 'As seis cordas soltas escritas na pauta. Repare que a 6ª e a 5ª precisam de linhas suplementares embaixo: são graves demais para caber nas cinco linhas.'
        },
        {
          t: 'resumo', itens: [
            'Pentagrama = cinco linhas e quatro espaços. Mais alto no papel = mais agudo.',
            'As linhas são contadas de baixo para cima.',
            'A clave fixa a identidade de uma linha; a clave de sol marca a 2ª linha como Sol.',
            'O violão usa só a clave de sol.',
            'O 8 embaixo da clave avisa que o violão soa uma oitava abaixo do escrito.'
          ]
        },
        {
          t: 'exercicio', tipo: 'identificar-nota', titulo: 'Qual é a nota na pauta?', rodadas: 8,
          notas: ['e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5'],
          x: 'Clave de sol. Lembre do apoio: as linhas, de baixo para cima, são Mi, Sol, Si, Ré, Fá; os espaços são Fá, Lá, Dó, Mi.'
        },
      ],
      quiz: [
        { texto: 'Quantas linhas tem o pentagrama?', opcoes: ['Cinco', 'Quatro', 'Seis', 'Sete'], correta: 0, explicacao: 'Penta = cinco. E quatro espaços entre elas.' },
        { texto: 'Qual linha a clave de sol marca?', opcoes: ['A segunda, de baixo para cima', 'A primeira', 'A do meio', 'A de cima'], correta: 0, explicacao: 'A espiral da clave enrola nessa linha.' },
        { texto: 'As linhas do pentagrama são contadas...', opcoes: ['De baixo para cima', 'De cima para baixo', 'Da esquerda para a direita', 'Não são numeradas'], correta: 0, explicacao: 'A 1ª linha é a de baixo.' },
        { texto: 'O que significa o "8" embaixo da clave de sol?', opcoes: ['Que a música soa uma oitava abaixo do escrito', 'Que há oito compassos', 'Que a música está em 8/8', 'Que se toca na casa 8'], correta: 0, explicacao: 'É a convenção da partitura de violão.' },
        { texto: 'Para que serve a clave?', opcoes: ['Para fixar que nota é uma determinada linha', 'Para marcar o andamento', 'Para indicar o volume', 'Para separar os compassos'], correta: 0, explicacao: 'Sem clave, as cinco linhas não dizem qual nota é qual.' },
        { texto: 'Quanto mais alta a nota no papel...', opcoes: ['Mais aguda ela soa', 'Mais grave ela soa', 'Mais longa ela dura', 'Mais forte ela é'], correta: 0, explicacao: 'A pauta é um gráfico de altura.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: ['Aponto a 2ª linha do pentagrama e digo que ela é Sol.', 'Sei explicar o que é o 8 embaixo da clave.', 'Reconheço na pauta as notas das seis cordas soltas.'],
        criterio: 'Você domina quando identifica a linha do Sol instantaneamente, em qualquer partitura.'
      }
    },

    // ---------------------------------------------------------------- 1.3.5
    {
      id: 'n1.3.5',
      titulo: 'Linhas e espaços: onde fica cada nota',
      resumo: 'Decorar as notas da pauta e achar cada uma no violão.',
      minutos: 18,
      disciplinas: ['leitura'],
      prereq: ['n1.3.4'],
      status: 'validado',
      cobre: ['Linhas e espaços', 'Identificação das notas no pentagrama'],
      objetivo: 'Nomear qualquer nota da pauta sem contar degrau por degrau.',
      blocos: [
        { t: 'p', x: 'Esta é a aula que transforma desenho em música. Leva alguns dias para ficar automático, mas o método abaixo encurta muito o caminho.' },
        { t: 'h', x: 'As notas nos espaços' },
        { t: 'p', x: 'Comece pelos quatro espaços, de baixo para cima: *Fá, Lá, Dó, Mi*. As iniciais formam a palavra FALADOMI, que não quer dizer nada mas gruda. Em inglês é ainda mais fácil: F, A, C, E (FACE).' },
        { t: 'pauta', txt: 'f4/b a4/b | c5/b e5/b', nomes: true, formula: null, legenda: 'Os quatro espaços, de baixo para cima: Fá, Lá, Dó, Mi.' },
        { t: 'h', x: 'As notas nas linhas' },
        { t: 'p', x: 'Agora as cinco linhas, também de baixo para cima: *Mi, Sol, Si, Ré, Fá*.' },
        { t: 'pauta', txt: 'e4/b g4/b | b4/b d5/b | f5/b z/b', nomes: true, formula: null, legenda: 'As cinco linhas: Mi, Sol, Si, Ré, Fá.' },
        {
          t: 'tabela',
          cab: ['Posição', 'De baixo para cima'],
          linhas: [['Espaços', 'Fá · Lá · Dó · Mi'], ['Linhas', 'Mi · Sol · Si · Ré · Fá']],
          legenda: 'Repare: alternando linha e espaço, de baixo para cima, você lê Mi-Fá-Sol-Lá-Si-Dó-Ré-Mi-Fá. É só a escala subindo.'
        },
        {
          t: 'dica', titulo: 'O jeito mais rápido: ',
          x: 'não decore as nove posições isoladas. Decore *três pontos de apoio* e conte a partir deles: a 2ª linha é *Sol* (a clave mostra), a 3ª linha é *Si*, e o 3º espaço é *Dó*. De qualquer um deles você chega em uma ou duas contagens.'
        },
        { t: 'h', x: 'Linhas suplementares' },
        { t: 'p', x: 'Quando a nota é grave ou aguda demais para caber nas cinco linhas, ela ganha uma linhazinha só para ela: a *linha suplementar*. O *Dó central* (Dó3 no som do violão) fica na primeira linha suplementar abaixo da pauta.' },
        { t: 'pauta', txt: 'c4/b e4/b | g5/b a5/b', nomes: true, formula: null, legenda: 'Dó embaixo da pauta e Lá acima: as duas com linha suplementar.' },
        { t: 'h', x: 'Da pauta para o violão' },
        { t: 'p', x: 'Saber o nome não basta: é preciso saber onde a nota mora no braço. Comece pelas notas da *primeira posição* (casas 0 a 3), que é onde quase todo o repertório inicial acontece.' },
        {
          t: 'tabela',
          cab: ['Nota escrita', 'Corda', 'Casa'],
          linhas: [
            ['Mi (1ª linha)', '4ª corda', 'casa 2'],
            ['Fá (1º espaço)', '4ª corda', 'casa 3'],
            ['Sol (2ª linha)', '3ª corda', 'solta'],
            ['Lá (2º espaço)', '3ª corda', 'casa 2'],
            ['Si (3ª linha)', '2ª corda', 'solta'],
            ['Dó (3º espaço)', '2ª corda', 'casa 1'],
            ['Ré (4ª linha)', '2ª corda', 'casa 3'],
            ['Mi (4º espaço)', '1ª corda', 'solta'],
            ['Fá (5ª linha)', '1ª corda', 'casa 1'],
            ['Sol (acima da 5ª linha)', '1ª corda', 'casa 3']
          ],
          legenda: 'As dez notas da primeira posição nas três cordas agudas. Este é o alfabeto do repertório inicial.'
        },
        { t: 'braco', casas: 5, notas: [{ corda: 3, casa: 0, rotulo: 'Sol', classe: 'raiz' }, { corda: 3, casa: 2, rotulo: 'Lá', classe: 'neutro' }, { corda: 2, casa: 0, rotulo: 'Si', classe: 'neutro' }, { corda: 2, casa: 1, rotulo: 'Dó', classe: 'raiz' }, { corda: 2, casa: 3, rotulo: 'Ré', classe: 'neutro' }, { corda: 1, casa: 0, rotulo: 'Mi', classe: 'neutro' }, { corda: 1, casa: 1, rotulo: 'Fá', classe: 'neutro' }, { corda: 1, casa: 3, rotulo: 'Sol', classe: 'raiz' }], tocar: true, bpm: 90, legenda: 'As notas da primeira posição nas cordas 1, 2 e 3. Ouça subindo e depois procure cada uma no seu violão.' },
        { t: 'exercicio', tipo: 'identificar-nota', titulo: 'Qual é esta nota?', rodadas: 12, notas: ['e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5', 'f5'], x: 'O app desenha uma nota na pauta e você diz o nome.' },
        { t: 'ir', rota: 'leitura', titulo: 'Abrir a tela de Leitura', x: 'A tela de Leitura gera exercícios infinitos de leitura à primeira vista, com microfone opcional.' },
        {
          t: 'erros', itens: [
            { erro: 'Contar desde a linha de baixo toda vez.', certo: 'Use pontos de apoio: Sol na 2ª linha, Si na 3ª, Dó no 3º espaço.' },
            { erro: 'Confundir o Mi da 1ª linha com o Mi do 4º espaço.', certo: 'São o mesmo nome em oitavas diferentes: o primeiro é a 4ª corda casa 2; o segundo é a 1ª corda solta.' },
            { erro: 'Ler o nome mas não saber onde tocar.', certo: 'Sempre associe: nome da nota + corda + casa. Leia e toque juntos.' }
          ]
        },
        {
          t: 'check', chave: 'leitura1', titulo: 'Plano de 5 dias',
          itens: ['Dia 1: decorei os quatro espaços (FALADOMI)', 'Dia 2: decorei as cinco linhas (Mi Sol Si Ré Fá)', 'Dia 3: encontrei as 10 notas da primeira posição no violão', 'Dia 4: fiz 20 identificações no exercício do app', 'Dia 5: li e toquei ao mesmo tempo, devagar']
        },
        {
          t: 'resumo', itens: [
            'Espaços, de baixo para cima: Fá, Lá, Dó, Mi.',
            'Linhas, de baixo para cima: Mi, Sol, Si, Ré, Fá.',
            'Pontos de apoio: Sol na 2ª linha, Si na 3ª linha, Dó no 3º espaço.',
            'Linhas suplementares servem para as notas que não cabem na pauta.',
            'Ler é saber o nome e, ao mesmo tempo, onde a nota fica no braço.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as notas dos quatro espaços, de baixo para cima?', opcoes: ['Fá, Lá, Dó, Mi', 'Mi, Sol, Si, Ré', 'Dó, Ré, Mi, Fá', 'Sol, Si, Ré, Fá'], correta: 0, explicacao: 'FALADOMI — ou FACE, em cifra.' },
        { texto: 'Quais são as notas das cinco linhas, de baixo para cima?', opcoes: ['Mi, Sol, Si, Ré, Fá', 'Fá, Lá, Dó, Mi, Sol', 'Dó, Mi, Sol, Si, Ré', 'Sol, Si, Ré, Fá, Lá'], correta: 0, explicacao: 'A 2ª delas é o Sol que a clave marca.' },
        { texto: 'A nota no 3º espaço é...', opcoes: ['Dó', 'Si', 'Lá', 'Ré'], correta: 0, explicacao: 'Fá, Lá, Dó, Mi: o terceiro é Dó.' },
        { texto: 'No violão, o Si da 3ª linha é tocado onde?', opcoes: ['2ª corda solta', '3ª corda solta', '2ª corda casa 1', '1ª corda solta'], correta: 0, explicacao: 'A 2ª corda solta é justamente Si.' },
        { texto: 'Para que serve uma linha suplementar?', opcoes: ['Para escrever notas que não cabem nas cinco linhas', 'Para marcar o compasso', 'Para indicar repetição', 'Para separar vozes'], correta: 0, explicacao: 'Uma linhazinha curta, só para aquela nota.' },
        { texto: 'O Sol da 2ª linha corresponde a que posição no violão?', opcoes: ['3ª corda solta', '1ª corda casa 3', '2ª corda casa 3', '4ª corda solta'], correta: 0, explicacao: 'A 3ª corda solta é Sol.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Nomeio qualquer nota entre o Mi da 1ª linha e o Sol acima da pauta em menos de 2 segundos.',
          'Para cada uma dessas notas, sei a corda e a casa.',
          'Fiz pelo menos 20 identificações no exercício do app com 80% de acerto.',
          'Li uma linha de partitura tocando ao mesmo tempo, devagar.'
        ],
        criterio: 'Você domina quando lê sem contar degraus e já sabe onde pôr o dedo.'
      }
    },

    // ---------------------------------------------------------------- 1.3.6
    {
      id: 'n1.3.6',
      titulo: 'As figuras musicais',
      resumo: 'Semibreve, mínima, semínima, colcheia e semicolcheia: quanto cada uma dura.',
      minutos: 16,
      disciplinas: ['teoria', 'leitura'],
      prereq: ['n1.3.4'],
      status: 'validado',
      cobre: ['Figuras musicais', 'Semibreve, mínima, semínima, colcheia e semicolcheia'],
      objetivo: 'Entender o sistema de durações e saber, olhando uma figura, quantos tempos ela vale.',
      blocos: [
        { t: 'p', x: 'A posição da nota na pauta diz *qual* som tocar. O *formato* da nota diz *por quanto tempo*. Esse formato é a figura musical.' },
        { t: 'h', x: 'O sistema é de metades' },
        { t: 'p', x: 'Todo o sistema de durações é construído dividindo por dois. Começando pela figura mais longa de uso comum, a *semibreve*, cada figura seguinte vale metade da anterior. Isso é tudo: não há exceção.' },
        { t: 'figuras', comPausa: false, legenda: 'Da esquerda para a direita, cada figura vale metade da anterior.' },
        {
          t: 'tabela',
          cab: ['Figura', 'Desenho', 'Vale', 'Em 4/4'],
          linhas: [
            ['Semibreve', 'cabeça vazia, sem haste', '4 tempos', 'o compasso inteiro'],
            ['Mínima', 'cabeça vazia com haste', '2 tempos', 'meio compasso'],
            ['Semínima', 'cabeça cheia com haste', '1 tempo', 'um quarto'],
            ['Colcheia', 'cabeça cheia, haste e 1 gancho', '½ tempo', 'um oitavo'],
            ['Semicolcheia', 'cabeça cheia, haste e 2 ganchos', '¼ de tempo', 'um dezesseis avos']
          ],
          legenda: 'Atenção: "vale 1 tempo" depende da fórmula de compasso. Em 4/4, que é o caso quase sempre, a semínima vale 1 tempo.'
        },
        { t: 'h', x: 'Como reconhecer de olho' },
        {
          t: 'passos', itens: [
            'A cabeça está *vazia* (só o contorno)? Então é longa: semibreve ou mínima.',
            'Se está vazia e *não tem haste*, é semibreve (4 tempos).',
            'Se está vazia e *tem haste*, é mínima (2 tempos).',
            'A cabeça está *cheia* (preenchida)? Então conte os ganchos.',
            'Nenhum gancho: semínima (1 tempo). Um gancho: colcheia (½). Dois ganchos: semicolcheia (¼).'
          ]
        },
        { t: 'h', x: 'A viga' },
        { t: 'p', x: 'Quando duas ou mais colcheias aparecem juntas, os ganchos são substituídos por uma barra que liga as hastes: a *viga*. Não muda nada no som, só deixa a leitura mais limpa e mostra como as notas se agrupam dentro do tempo.' },
        { t: 'pauta', txt: 'g4/c g4/c a4/c a4/c b4/c b4/c c5/c c5/c', formula: [4, 4], legenda: 'Oito colcheias em 4/4, vigadas de duas em duas: cada par é um tempo.', tocar: true, bpm: 80 },
        { t: 'h', x: 'A mesma frase em durações diferentes' },
        { t: 'pauta', txt: 'c5/o | g4/b a4/b | c5 b4 a4 g4 | g4/c a4/c b4/c c5/c b4/c a4/c g4/c g4/c', legenda: 'Quatro compassos. Em cada um cabem exatamente 4 tempos, mas com números diferentes de notas. Ouça: o pulso é o mesmo.', tocar: true, bpm: 80 },
        { t: 'h', x: 'O ponto de aumento' },
        { t: 'p', x: 'Um ponto à direita da cabeça da nota aumenta a duração dela em *metade do seu valor*. Uma mínima pontuada vale 2 + 1 = 3 tempos. Uma semínima pontuada vale 1 + ½ = 1 tempo e meio.' },
        { t: 'pauta', txt: 'g4/b. c5 | a4/q. b4/c c5/b', formula: [4, 4], legenda: 'Mínima pontuada (3 tempos) seguida de semínima; depois semínima pontuada com colcheia.', tocar: true, bpm: 80 },
        { t: 'exercicio', tipo: 'nome-figura', titulo: 'Que figura é esta?', rodadas: 10, x: 'O app desenha uma figura e você diz o nome dela.' },
        { t: 'exercicio', tipo: 'figura', titulo: 'Quantos tempos vale?', rodadas: 10, x: 'Agora o valor em tempos, considerando o compasso 4/4.' },
        {
          t: 'erros', itens: [
            { erro: 'Achar que a semínima sempre vale 1 segundo.', certo: 'Ela vale 1 *tempo*. Quanto dura um tempo depende do andamento.' },
            { erro: 'Confundir mínima com semibreve.', certo: 'As duas têm cabeça vazia; a mínima tem haste, a semibreve não.' },
            { erro: 'Esquecer o ponto de aumento.', certo: 'Um pontinho discreto à direita da cabeça muda a conta inteira do compasso.' },
            { erro: 'Achar que a viga muda o som.', certo: 'Viga é só um jeito mais limpo de escrever colcheias juntas.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cada figura vale metade da anterior: semibreve, mínima, semínima, colcheia, semicolcheia.',
            'Em 4/4: 4, 2, 1, ½ e ¼ de tempo.',
            'Cabeça vazia = longa; cabeça cheia = curta; conte os ganchos.',
            'A viga substitui os ganchos quando as notas estão juntas.',
            'O ponto de aumento acrescenta metade do valor da figura.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos tempos vale uma semínima em 4/4?', opcoes: ['1', '2', '4', '½'], correta: 0, explicacao: 'É a figura que normalmente marca o pulso.' },
        { texto: 'Qual figura tem cabeça vazia e não tem haste?', opcoes: ['Semibreve', 'Mínima', 'Semínima', 'Colcheia'], correta: 0, explicacao: 'Vale 4 tempos: o compasso inteiro em 4/4.' },
        { texto: 'Quantas colcheias cabem em uma semínima?', opcoes: ['Duas', 'Quatro', 'Uma', 'Oito'], correta: 0, explicacao: 'Cada figura vale metade da anterior.' },
        { texto: 'Quantos tempos vale uma mínima pontuada?', opcoes: ['3', '2', '4', '2 e meio'], correta: 0, explicacao: '2 + metade de 2 = 3.' },
        { texto: 'Quantos ganchos tem a semicolcheia?', opcoes: ['Dois', 'Um', 'Nenhum', 'Três'], correta: 0, explicacao: 'Um gancho é colcheia; dois é semicolcheia.' },
        { texto: 'O que a viga faz?', opcoes: ['Liga as hastes de colcheias vizinhas, substituindo os ganchos', 'Aumenta a duração', 'Indica repetição', 'Marca o compasso'], correta: 0, explicacao: 'Só muda a aparência, não o som.' },
        { texto: 'Quantas semicolcheias cabem em uma semibreve?', opcoes: ['16', '8', '4', '32'], correta: 0, explicacao: '4 semínimas × 4 semicolcheias cada.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Reconheço as cinco figuras de olho, sem hesitar.',
          'Digo quantos tempos cada uma vale em 4/4.',
          'Sei calcular o valor de uma figura pontuada.',
          'Acertei pelo menos 8 de 10 nos dois exercícios do app.'
        ],
        criterio: 'Você domina quando bate o olho na figura e já sabe quanto ela dura.'
      }
    },

    // ---------------------------------------------------------------- 1.3.7
    {
      id: 'n1.3.7',
      titulo: 'As pausas',
      resumo: 'O silêncio escrito: uma pausa para cada figura.',
      minutos: 12,
      disciplinas: ['teoria', 'leitura'],
      prereq: ['n1.3.6'],
      status: 'validado',
      cobre: ['Pausas musicais'],
      objetivo: 'Reconhecer cada pausa, saber quanto ela dura e aprender a executá-la de verdade no violão.',
      blocos: [
        { t: 'p', x: 'Para cada figura de nota existe uma *pausa* de mesma duração. A pausa não é uma falta de informação: é uma ordem. Ela diz "fique em silêncio por exatamente este tempo".' },
        { t: 'figuras', comPausa: true, legenda: 'Em cima, a nota. Embaixo, a pausa de mesmo valor.' },
        {
          t: 'tabela',
          cab: ['Pausa de', 'Como é desenhada', 'Vale'],
          linhas: [
            ['Semibreve', 'Retângulo pendurado abaixo da 4ª linha', '4 tempos'],
            ['Mínima', 'Retângulo apoiado sobre a 3ª linha', '2 tempos'],
            ['Semínima', 'Um ziguezague vertical', '1 tempo'],
            ['Colcheia', 'Uma haste com 1 bolinha e gancho', '½ tempo'],
            ['Semicolcheia', 'Uma haste com 2 bolinhas e ganchos', '¼ de tempo']
          ]
        },
        {
          t: 'dica', titulo: 'Como não confundir as duas primeiras: ',
          x: 'a pausa de semibreve *pendura* abaixo da linha (é pesada, cai); a de mínima *senta* em cima da linha (é mais leve, fica). Pendura = 4, senta = 2.'
        },
        { t: 'h', x: 'Pausar no violão exige ação' },
        { t: 'p', x: 'No piano, para fazer silêncio basta soltar a tecla. No violão não: a corda continua vibrando depois que você tira o dedo da mão direita. Para fazer silêncio de verdade, é preciso *abafar*.' },
        {
          t: 'passos', itens: [
            'Se a nota é de *corda solta*: encoste a polpa do dedo que vai tocar em seguida (ou o polegar) na corda que está soando.',
            'Se a nota é *presa*: basta aliviar a pressão do dedo da mão esquerda, sem tirá-lo da corda. A nota morre na hora.',
            'Para abafar tudo de uma vez (fim de peça), apoie a lateral da mão direita sobre todas as cordas.'
          ]
        },
        { t: 'pauta', txt: 'g4 z/q g4 z/q | g4/c g4/c z/c g4/c g4/b', formula: [4, 4], legenda: 'Notas e pausas alternadas. Toque junto com o áudio e procure fazer o silêncio de verdade.', tocar: true, bpm: 70 },
        { t: 'metronomo', titulo: 'Pratique com o metrônomo', bpm: 60, compasso: '4/4', x: 'Toque a 1ª corda solta nos tempos 1 e 3, e abafe nos tempos 2 e 4. Conte em voz alta: "toca, abafa, toca, abafa".' },
        {
          t: 'tocar', titulo: 'Som e silêncio',
          seq: [{ corda: 1, casa: 0, rotulo: 'toca' }, { corda: 1, casa: 0, rotulo: 'toca' }, { corda: 1, casa: 0, rotulo: 'toca' }, { corda: 1, casa: 0, rotulo: 'toca' }],
          rotulo: 'Quatro notas com silêncio entre elas',
          x: 'Toque a 1ª corda solta quatro vezes, abafando entre uma e outra. O app confirma cada ataque.'
        },
        { t: 'h', x: 'A pausa de compasso inteiro' },
        { t: 'p', x: 'Quando um compasso inteiro é de silêncio, usa-se sempre a pausa de semibreve, *qualquer que seja a fórmula de compasso*. Num compasso 3/4, por exemplo, a pausa de semibreve ali não vale 4 tempos: vale o compasso inteiro, 3 tempos.' },
        {
          t: 'erros', itens: [
            { erro: 'Ignorar as pausas e tocar tudo ligado.', certo: 'Conte a pausa em voz alta, como se fosse uma nota muda.' },
            { erro: 'Deixar a corda soando durante a pausa.', certo: 'Abafe: encoste o dedo na corda ou alivie a pressão da esquerda.' },
            { erro: 'Confundir a pausa de semibreve com a de mínima.', certo: 'A de semibreve pendura abaixo da linha; a de mínima senta em cima.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cada figura tem uma pausa de duração igual.',
            'Pausa de semibreve pendura abaixo da linha; a de mínima senta em cima.',
            'No violão, pausar exige abafar a corda: ela não para sozinha.',
            'Um compasso inteiro de silêncio usa sempre a pausa de semibreve.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quanto vale uma pausa de semínima?', opcoes: ['1 tempo', '2 tempos', '4 tempos', '½ tempo'], correta: 0, explicacao: 'Cada pausa vale o mesmo que a nota correspondente.' },
        { texto: 'Como se diferencia a pausa de semibreve da pausa de mínima?', opcoes: ['A de semibreve pendura abaixo da linha; a de mínima senta em cima', 'A de semibreve é maior', 'A de mínima tem haste', 'São iguais'], correta: 0, explicacao: 'Pendura = 4 tempos; senta = 2 tempos.' },
        { texto: 'Por que no violão é preciso abafar para fazer silêncio?', opcoes: ['Porque a corda continua vibrando depois do toque', 'Porque o som ecoa na sala', 'Porque o microfone capta', 'Não é preciso abafar'], correta: 0, explicacao: 'Diferente do piano, onde soltar a tecla já para o som.' },
        { texto: 'Como abafar uma nota presa pela mão esquerda?', opcoes: ['Aliviando a pressão do dedo sem tirá-lo da corda', 'Tirando o dedo rapidamente', 'Encostando o polegar direito', 'Batendo no tampo'], correta: 0, explicacao: 'É o jeito mais limpo e silencioso.' },
        { texto: 'Num compasso 3/4, o que indica um compasso inteiro de silêncio?', opcoes: ['A pausa de semibreve', 'Três pausas de semínima', 'A pausa de mínima pontuada', 'Nada: deixa-se vazio'], correta: 0, explicacao: 'A pausa de semibreve vale o compasso inteiro, qualquer que seja a fórmula.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Reconheço as cinco pausas e sei quanto cada uma vale.',
          'Consigo abafar uma corda solta no tempo certo.',
          'Toquei o exemplo de notas e pausas com o metrônomo, fazendo o silêncio de verdade.'
        ],
        criterio: 'Você domina quando o silêncio aparece no tempo exato, sem corda zumbindo.'
      }
    },

    // ---------------------------------------------------------------- 1.3.8
    {
      id: 'n1.3.8',
      titulo: 'Pulsação, andamento e compasso',
      resumo: 'O tempo da música: o pulso, a velocidade e como os tempos se agrupam.',
      minutos: 18,
      disciplinas: ['teoria', 'leitura'],
      prereq: ['n1.3.6'],
      status: 'validado',
      cobre: ['Pulsação', 'Andamento', 'Compassos 2/4, 3/4 e 4/4'],
      objetivo: 'Sentir o pulso, entender a fórmula de compasso e tocar junto com o metrônomo.',
      blocos: [
        { t: 'p', x: 'Até agora você viu quais notas tocar e por quanto tempo. Falta a terceira peça: o *tempo que corre por baixo de tudo*.' },
        { t: 'h', x: 'Pulsação: o coração da música' },
        { t: 'p', x: 'A *pulsação* (ou pulso) é a batida regular que você sente numa música e que faz o pé bater sozinho. Ela não está escrita em lugar nenhum da partitura: ela é o que você sente.' },
        { t: 'p', x: 'Todo o resto da notação é medido em relação a ela. Quando dizemos que a semínima "vale 1 tempo", estamos dizendo que ela dura exatamente um pulso.' },
        { t: 'metronomo', titulo: 'Sinta o pulso', bpm: 72, compasso: '4/4', x: 'Ligue e bata o pé junto. Não toque nada ainda: só sinta. Faça isso por um minuto inteiro.' },
        { t: 'h', x: 'Andamento: a velocidade do pulso' },
        { t: 'p', x: 'O *andamento* é a velocidade do pulso, medida em *BPM* (batidas por minuto). 60 BPM é um pulso por segundo. 120 BPM é dois por segundo.' },
        {
          t: 'tabela',
          cab: ['Termo italiano', 'BPM aproximado', 'Sensação'],
          linhas: [
            ['Largo', '40 a 60', 'muito lento, solene'],
            ['Adagio', '66 a 76', 'lento, tranquilo'],
            ['Andante', '76 a 108', 'andando, passo de caminhada'],
            ['Moderato', '108 a 120', 'moderado'],
            ['Allegro', '120 a 168', 'alegre, rápido'],
            ['Presto', '168 a 200', 'muito rápido']
          ],
          legenda: 'Na partitura, o andamento aparece como um desses termos ou como uma marca de metrônomo: ♩ = 72 quer dizer "72 semínimas por minuto".'
        },
        {
          t: 'dica', x: 'A regra de ouro do estudo: *comece sempre mais devagar do que você acha que precisa*. Tocar certo devagar é o que constrói velocidade; tocar errado rápido só constrói o erro.'
        },
        { t: 'h', x: 'Compasso: agrupar os pulsos' },
        { t: 'p', x: 'Os pulsos não são todos iguais. Uns soam mais fortes que outros, e isso cria grupos. Esse agrupamento é o *compasso*. Na partitura, cada grupo é separado por uma barra vertical, a *barra de compasso*.' },
        { t: 'compasso', formula: [4, 4], rotulo: 'o mais comum de todos', legenda: 'Compasso 4/4: quatro tempos, o primeiro forte, o terceiro meio forte.' },
        { t: 'compasso', formula: [3, 4], rotulo: 'valsa', legenda: 'Compasso 3/4: três tempos, o primeiro forte. É o compasso da valsa.' },
        { t: 'compasso', formula: [2, 4], rotulo: 'marcha, polca, baião', legenda: 'Compasso 2/4: dois tempos, forte e fraco. É o compasso do andar.' },
        { t: 'h', x: 'Lendo a fórmula de compasso' },
        { t: 'p', x: 'Os dois números no começo da pauta não são uma fração. Leia de baixo para cima:' },
        {
          t: 'passos', itens: [
            'O número *de baixo* diz *qual figura vale um tempo*. 4 = semínima, 2 = mínima, 8 = colcheia.',
            'O número *de cima* diz *quantos desses tempos cabem em cada compasso*.',
            'Então 3/4 significa: três semínimas por compasso. E 2/4: duas semínimas por compasso.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Fórmula', 'Lê-se', 'Exemplos'],
          linhas: [
            ['4/4', 'Quatro semínimas por compasso', 'Quase todo pop, rock, samba, bossa'],
            ['3/4', 'Três semínimas por compasso', 'Valsa, minueto'],
            ['2/4', 'Duas semínimas por compasso', 'Marcha, polca, baião, frevo'],
            ['6/8', 'Seis colcheias por compasso', 'Barcarola, acalanto, muita música celta']
          ]
        },
        { t: 'h', x: 'A mesma melodia em compassos diferentes' },
        { t: 'pauta', txt: 'g4 g4 g4 g4 | g4 g4 g4 g4', formula: [4, 4], legenda: 'Em 4/4: conte 1-2-3-4, 1-2-3-4. O primeiro de cada grupo é mais forte.', tocar: true, bpm: 90 },
        { t: 'pauta', txt: 'g4 g4 g4 | g4 g4 g4', formula: [3, 4], legenda: 'Em 3/4: conte 1-2-3, 1-2-3. Mesmas notas, outra sensação.', tocar: true, bpm: 90 },
        { t: 'h', x: 'Contar em voz alta' },
        { t: 'p', x: 'O jeito mais eficiente de aprender ritmo é *contar em voz alta enquanto toca*. Em 4/4, conte "um, dois, três, quatro". Quando aparecerem colcheias, conte "um e, dois e, três e, quatro e": o "e" é a metade do tempo.' },
        { t: 'pauta', txt: 'g4/c g4/c a4/c a4/c | b4/c b4/c c5/b', formula: [4, 4], legenda: 'Conte: "um e, dois e, três e, quatro". Toque junto com o áudio e, depois, com o metrônomo.', tocar: true, bpm: 80 },
        { t: 'metronomo', titulo: 'Tocar no tempo', bpm: 60, compasso: '4/4', x: 'Toque a 1ª corda solta exatamente em cada clique, contando em voz alta. Depois toque duas notas por clique (colcheias).' },
        {
          t: 'erros', itens: [
            { erro: 'Ler a fórmula de compasso como fração.', certo: '4/4 não é "quatro quartos": é "quatro semínimas por compasso".' },
            { erro: 'Acelerar nas partes fáceis e desacelerar nas difíceis.', certo: 'O pulso não muda. Escolha um andamento em que até a parte difícil saia certa.' },
            { erro: 'Usar o metrônomo só de vez em quando.', certo: 'Use em todo exercício técnico. É o único jeito de saber se o tempo está firme.' },
            { erro: 'Contar mentalmente.', certo: 'Conte em voz alta no começo. A voz denuncia o que a cabeça disfarça.' }
          ]
        },
        { t: 'ir', rota: 'ritmo', titulo: 'Abrir a tela de Ritmo', x: 'Lá você lê um ritmo e toca junto com o metrônomo, com correção automática.' },
        {
          t: 'check', chave: 'pulso', titulo: 'Treino de pulso (5 minutos por dia)',
          itens: ['Bati o pé com o metrônomo a 60 BPM por 1 minuto', 'Toquei uma nota por clique', 'Toquei duas notas por clique (colcheias)', 'Contei em voz alta o tempo inteiro', 'Fiz o mesmo em 3/4']
        },
        {
          t: 'resumo', itens: [
            'Pulsação é a batida regular que você sente; tudo é medido por ela.',
            'Andamento é a velocidade do pulso, em BPM.',
            'Compasso é o agrupamento dos pulsos, separado por barras de compasso.',
            'Na fórmula, o número de baixo diz qual figura vale um tempo; o de cima, quantos tempos cabem no compasso.',
            '4/4, 3/4 e 2/4 são os compassos do Nível 1. Conte sempre em voz alta.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que significa 3/4?', opcoes: ['Três semínimas por compasso', 'Três quartos de um compasso', 'Três compassos de quatro tempos', 'Três colcheias por compasso'], correta: 0, explicacao: 'O 4 de baixo indica a semínima; o 3 de cima, quantas cabem.' },
        { texto: 'O que é BPM?', opcoes: ['Batidas por minuto: a velocidade do pulso', 'Barras por minuto', 'Bemóis por medida', 'Batidas por compasso'], correta: 0, explicacao: '60 BPM é um pulso por segundo.' },
        { texto: 'Qual compasso é o da valsa?', opcoes: ['3/4', '4/4', '2/4', '6/8'], correta: 0, explicacao: 'Três tempos, com o primeiro forte.' },
        { texto: 'Num compasso 2/4, qual tempo é o forte?', opcoes: ['O primeiro', 'O segundo', 'Os dois igualmente', 'Nenhum'], correta: 0, explicacao: 'O primeiro tempo de qualquer compasso é o mais forte.' },
        { texto: 'Andante quer dizer mais ou menos quantos BPM?', opcoes: ['76 a 108', '40 a 60', '120 a 168', '168 a 200'], correta: 0, explicacao: 'É o andamento de quem caminha.' },
        { texto: 'Se o número de baixo da fórmula for 8, qual figura vale um tempo?', opcoes: ['A colcheia', 'A semínima', 'A mínima', 'A semibreve'], correta: 0, explicacao: '2 = mínima, 4 = semínima, 8 = colcheia, 16 = semicolcheia.' },
        { texto: 'Qual é a melhor forma de estudar uma passagem difícil?', opcoes: ['Devagar, com o metrônomo, até sair certa', 'Repetir rápido muitas vezes', 'Pular a passagem', 'Tocar sem contar'], correta: 0, explicacao: 'Velocidade é consequência de precisão, não o contrário.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Bato o pé no pulso do metrônomo sem perder o tempo por 1 minuto.',
          'Toco uma nota por clique a 60 BPM, bem no tempo.',
          'Toco duas notas por clique (colcheias), parelhas.',
          'Conto em voz alta em 4/4 e em 3/4.',
          'Sei explicar o que significam os dois números da fórmula de compasso.'
        ],
        criterio: 'Você domina quando consegue tocar com o metrônomo sem correr nem atrasar durante um minuto inteiro.'
      }
    }
  ]
};
