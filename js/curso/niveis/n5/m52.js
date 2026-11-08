// NÍVEL 5 — MÓDULO 5.2: Técnica instrumental avançada
// Escalas por todo o braço, velocidade, tremolo, rasgueado, harmônicos,
// vibrato e portamento, timbre e dinâmica, polifonia, leitura à primeira
// vista, memorização e preparação para tocar em público.

export const M52 = {
  id: '5.2',
  titulo: 'Técnica instrumental avançada',
  resumo: 'O braço inteiro à disposição: velocidade, cor, polifonia e as competências que transformam estudo em apresentação.',
  aulas: [
    {
      id: 'n5.2.1',
      titulo: 'Escalas em diferentes posições',
      resumo: 'A mesma escala em cinco lugares do braço — e por que escolher um deles.',
      minutos: 20,
      disciplinas: ['tecnica', 'leitura'],
      prereq: ['n4.2.1'],
      status: 'implementado',
      cobre: ['Escalas em diferentes posições'],
      objetivo: 'Tocar uma escala maior em pelo menos três posições diferentes e escolher a posição certa em função da passagem musical.',
      blocos: [
        { t: 'p', x: 'Uma escala não mora num lugar só. Dó maior pode ser tocada na 1ª posição, na 2ª, na 5ª, na 7ª e na 9ª — cada uma com um dedilhado, um timbre e uma dificuldade diferentes. Saber todas é o que permite escolher a mais fácil para cada trecho de música.' },
        { t: 'h', x: 'Dó maior em três posições' },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 5, casa: 3, classe: 'tonica', rotulo: 'C' },
            { corda: 4, casa: 0, rotulo: 'D' }, { corda: 4, casa: 2, rotulo: 'E' }, { corda: 4, casa: 3, rotulo: 'F' },
            { corda: 3, casa: 0, rotulo: 'G' }, { corda: 3, casa: 2, rotulo: 'A' },
            { corda: 2, casa: 0, rotulo: 'B' }, { corda: 2, casa: 1, classe: 'tonica', rotulo: 'C' },
            { corda: 1, casa: 0, rotulo: 'E' }
          ],
          legenda: 'Dó maior na 1ª posição (com cordas soltas). É a mais fácil e a mais limitada: só uma oitava e pouco controle de timbre.',
          tocar: true, bpm: 80
        },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 5, casa: 3, classe: 'tonica', rotulo: '1' }, { corda: 5, casa: 5, rotulo: '3' },
            { corda: 4, casa: 2, rotulo: '1' }, { corda: 4, casa: 3, rotulo: '2' }, { corda: 4, casa: 5, rotulo: '4' },
            { corda: 3, casa: 2, rotulo: '1' }, { corda: 3, casa: 4, rotulo: '3' }, { corda: 3, casa: 5, rotulo: '4' },
            { corda: 2, casa: 3, rotulo: '1' }, { corda: 2, casa: 5, rotulo: '3' },
            { corda: 1, casa: 3, rotulo: '1' }, { corda: 1, casa: 5, rotulo: '3' }
          ],
          legenda: 'Dó maior na 2ª posição, sem cordas soltas. Duas oitavas, timbre uniforme e possibilidade de vibrato em qualquer nota.',
          tocar: true, bpm: 80
        },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 6, casa: 8, classe: 'tonica', rotulo: '1' }, { corda: 6, casa: 10, rotulo: '3' },
            { corda: 5, casa: 7, rotulo: '1' }, { corda: 5, casa: 8, rotulo: '2' }, { corda: 5, casa: 10, rotulo: '4' },
            { corda: 4, casa: 7, rotulo: '1' }, { corda: 4, casa: 9, rotulo: '3' }, { corda: 4, casa: 10, rotulo: '4' },
            { corda: 3, casa: 7, rotulo: '1' }, { corda: 3, casa: 9, rotulo: '3' },
            { corda: 2, casa: 8, rotulo: '1' }, { corda: 2, casa: 10, rotulo: '3' },
            { corda: 1, casa: 8, classe: 'tonica', rotulo: '1' }
          ],
          legenda: 'Dó maior na 8ª posição, forma com raiz na 6ª corda. Timbre mais encorpado e acesso direto ao registro agudo.',
          tocar: true, bpm: 80
        },
        { t: 'h', x: 'Como escolher a posição' },
        {
          t: 'tabela',
          cab: ['Situação', 'Posição recomendada', 'Por quê'],
          linhas: [
            ['Passagem rápida e legato', 'Posição fechada, sem soltas', 'Timbre uniforme e ligados possíveis'],
            ['Melodia cantabile', 'Cordas 1 e 2 em posição alta', 'Som mais denso e vibrato disponível'],
            ['Acompanhamento com baixo', '1ª e 2ª posição', 'Cordas soltas liberam dedos para o baixo'],
            ['Escala em três oitavas', 'Começar na 6ª corda, subir por posições', 'Caminho mais curto'],
            ['Trecho com nota pedal', 'Posição que mantenha a pedal solta', 'Economia de dedos']
          ]
        },
        {
          t: 'dica', titulo: 'Critério de ouro: ',
          x: 'escolha a posição que exige menos mudanças de mão. Entre duas digitações possíveis, a melhor é quase sempre a que mantém a mão parada por mais tempo.'
        },
        { t: 'h', x: 'A rotina das cinco posições' },
        {
          t: 'passos', itens: [
            'Escolha um tom. Toque a escala na posição mais grave possível, duas oitavas, subindo e descendo.',
            'Suba para a posição seguinte (normalmente dois ou três trastes acima) e repita.',
            'Faça isso até a quinta forma, que já estará perto da casa 12.',
            'Depois, toque a escala *atravessando* as posições: suba numa forma e desça em outra.',
            'Por fim, toque a escala em uma só corda, da casa 0 à 12, para ouvir a escala como linha.'
          ]
        },
        { t: 'metronomo', titulo: 'Escalas com clique', bpm: 60, compasso: '4/4', x: 'Duas notas por clique na primeira semana; quatro notas por clique na segunda. Suba 4 BPM só quando sair perfeito.' },
        {
          t: 'tocar', titulo: 'Confira Dó maior na 2ª posição',
          seq: [[5, 3], [5, 5], [4, 2], [4, 3], [4, 5], [3, 2], [3, 4], [3, 5]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora faça a mesma escala descendo, e depois na 8ª posição.',
          x: 'Toque devagar, uma nota por vez: Dó, Ré, Mi, Fá, Sol, Lá, Si, Dó.'
        },
        {
          t: 'check', chave: 'posicoes', titulo: 'Rotina da semana',
          itens: [
            'Toquei Dó maior em três posições diferentes.',
            'Toquei a mesma escala subindo numa posição e descendo em outra.',
            'Toquei a escala inteira numa corda só.',
            'Escolhi, numa peça que estudo, uma passagem e testei duas digitações diferentes.',
            'Anotei na partitura a posição escolhida para cada trecho.'
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Decorar apenas uma forma de escala.', certo: 'Uma forma só limita o repertório e a escolha de timbre.' },
            { erro: 'Usar cordas soltas em passagens rápidas e ligadas.', certo: 'A corda solta tem timbre diferente e quebra a uniformidade.' },
            { erro: 'Mudar de posição no meio de uma ligadura.', certo: 'Planeje a mudança para um ponto de respiração.' },
            { erro: 'Escolher a digitação pelo que é fácil agora.', certo: 'Escolha pela que terá menos mudanças no andamento final.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'A mesma escala existe em várias posições, com timbres e dificuldades diferentes.',
            'Posição fechada (sem soltas) dá uniformidade e permite vibrato.',
            'Cordas soltas liberam dedos, mas quebram o timbre.',
            'Escolha a digitação com menos mudanças de posição.',
            'Treine atravessando posições, não só dentro de uma forma.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a principal vantagem de tocar uma escala em posição fechada?', opcoes: ['Timbre uniforme e vibrato disponível', 'Menos esforço', 'Mais volume', 'Afinação mais precisa'], correta: 0, explicacao: 'Sem cordas soltas, todas as notas têm o mesmo caráter.' },
        { texto: 'Numa passagem rápida e ligada, deve-se evitar:', opcoes: ['Cordas soltas', 'Pestana', 'Posição alta', 'Apoyando'], correta: 0, explicacao: 'O timbre da corda solta destoa e ligados ficam impossíveis.' },
        { texto: 'Qual é o melhor critério para escolher uma digitação?', opcoes: ['A que exige menos mudanças de posição', 'A que usa mais cordas soltas', 'A que fica mais grave', 'A que usa menos o dedo 4'], correta: 0, explicacao: 'Mãos paradas erram menos.' },
        { texto: 'Em que situação as cordas soltas ajudam?', opcoes: ['Quando é preciso liberar dedos para o baixo', 'Em escalas rápidas', 'Em melodias com vibrato', 'Em trechos ligados'], correta: 0, explicacao: 'A mão esquerda fica livre para outra voz.' },
        { texto: 'Tocar a escala numa corda só serve para:', opcoes: ['Ouvir a escala como linha e aprender o braço', 'Ganhar volume', 'Treinar pestana', 'Afinar o instrumento'], correta: 0, explicacao: 'É o melhor exercício de mapa do braço.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar Dó maior em três posições, duas oitavas cada, a 80 BPM com duas notas por clique.',
          'Subir numa posição e descer em outra, sem interromper o pulso.',
          'Tocar a escala inteira na 2ª corda, da casa 1 à 13.',
          'Apresentar duas digitações possíveis para uma passagem do seu repertório e justificar a escolha.'
        ],
        criterio: 'Você domina quando consegue tocar a mesma escala em três lugares do braço e justificar, por motivos musicais, qual deles usaria em cada contexto.'
      }
    },

    {
      id: 'n5.2.2',
      titulo: 'Arpejos de alta velocidade',
      resumo: 'Como a mão direita ganha velocidade sem perder igualdade.',
      minutos: 20,
      disciplinas: ['tecnica'],
      prereq: ['n4.2.2'],
      status: 'implementado',
      cobre: ['Arpejos de alta velocidade'],
      objetivo: 'Construir velocidade em arpejos por meio de preparação antecipada, economia de movimento e trabalho rítmico.',
      blocos: [
        { t: 'p', x: 'Velocidade em arpejo não vem de mover os dedos mais rápido: vem de movê-los *menos*. Três princípios resolvem quase tudo: preparação antecipada, amplitude mínima e relaxamento entre os ataques.' },
        { t: 'h', x: '1. Preparação antecipada' },
        { t: 'p', x: 'O dedo que vai tocar deve já estar *encostado na corda* enquanto o dedo anterior ainda soa. Assim o ataque não tem distância a percorrer. Em velocidade, essa é a diferença entre um arpejo limpo e uma sequência de tropeços.' },
        {
          t: 'passos', itens: [
            'Toque p-i-m-a muito devagar, parando depois de cada nota.',
            'Em cada parada, coloque o próximo dedo em contato com a corda antes de tocá-lo.',
            'Repita 20 vezes com essa pausa. O movimento vai ficando automático.',
            'Diminua a pausa até ela desaparecer. A preparação permanece.'
          ]
        },
        { t: 'mao', lado: 'direita', destacar: ['i', 'm', 'a'], legenda: 'Os três dedos que fazem o arpejo rápido. Cada um volta ao ponto de contato imediatamente depois de tocar.' },
        { t: 'h', x: '2. Amplitude mínima' },
        { t: 'p', x: 'Depois de tocar, o dedo tende a se afastar da corda. Quanto maior esse afastamento, mais tempo ele leva para voltar. Filme a sua mão: se os dedos sobem muito, a velocidade tem um teto baixo.' },
        {
          t: 'tabela',
          cab: ['Velocidade', 'Movimento necessário', 'O que observar'],
          linhas: [
            ['Até 80 BPM (4 notas/clique)', 'Livre', 'Som e igualdade'],
            ['80 a 110', 'Dedo volta logo à corda', 'Preparação antecipada'],
            ['110 a 140', 'Amplitude mínima', 'Articulação só na junta da base'],
            ['Acima de 140', 'Quase sem afastamento', 'Relaxamento total entre notas']
          ]
        },
        { t: 'h', x: '3. Trabalho rítmico: o truque que mais rende' },
        { t: 'p', x: 'Em vez de repetir o arpejo mais rápido, toque-o com *ritmos desiguais*. Isso obriga cada par de dedos a passar por momentos de velocidade máxima, e ao voltar ao ritmo regular tudo parece mais fácil.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }] }
          ],
          legenda: 'Ritmo pontuado: longa-curta, longa-curta. Depois inverta — curta-longa — e por fim volte ao regular.',
          tocar: true, bpm: 80
        },
        { t: 'h', x: 'Os padrões que valem o treino' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'i' }] },
            { notas: [{ pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'a' }] }
          ],
          legenda: 'Dois padrões de ida e volta. O segundo usa a ordem invertida (a antes de m), que é a que mais resiste à velocidade.',
          tocar: true, bpm: 92
        },
        { t: 'metronomo', titulo: 'Escada de velocidade', bpm: 72, compasso: '4/4', x: 'Quatro notas por clique. Um minuto perfeito antes de subir 4 BPM. Se errar, desça um degrau.' },
        {
          t: 'aviso', x: 'Dor é sinal de parada imediata. Velocidade construída com tensão produz lesão, não técnica. Se o antebraço endurecer, pare e volte no dia seguinte num andamento menor.'
        },
        {
          t: 'check', chave: 'arpejorapido', titulo: 'Rotina diária de 10 minutos',
          itens: [
            'Dois minutos de p-i-m-a com preparação antecipada, muito devagar.',
            'Dois minutos de ritmos pontuados (longa-curta e curta-longa).',
            'Três minutos de escada de velocidade com metrônomo.',
            'Dois minutos do padrão invertido (p-a-m-i).',
            'Um minuto tocando o arpejo de uma peça real, no andamento dela.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Princípios da velocidade', rodadas: 5,
          perguntas: [
            { texto: 'O que é preparação antecipada?', opcoes: ['Encostar o dedo na corda antes de tocá-la', 'Aquecer antes de estudar', 'Estudar a peça antes de ler', 'Afinar o violão'], correta: 0, explicacao: 'O dedo já está no ponto quando chega a sua vez.' },
            { texto: 'Por que a amplitude do movimento limita a velocidade?', opcoes: ['Quanto mais longe o dedo vai, mais tempo leva para voltar', 'Porque cansa mais', 'Porque desafina', 'Porque muda o timbre'], correta: 0, explicacao: 'É uma questão de distância percorrida.' },
            { texto: 'Para que servem os ritmos pontuados no estudo de arpejos?', opcoes: ['Obrigar cada par de dedos a atingir velocidade máxima', 'Treinar leitura rítmica', 'Melhorar a afinação', 'Aumentar o volume'], correta: 0, explicacao: 'Cada par passa pelo trecho rápido isoladamente.' },
            { texto: 'Qual padrão costuma ser mais difícil em velocidade?', opcoes: ['p-a-m-i (ordem invertida)', 'p-i-m-a', 'p-m-i', 'i-m alternado'], correta: 0, explicacao: 'O anelar atacando primeiro é menos natural.' },
            { texto: 'Diante de dor no antebraço, o correto é:', opcoes: ['Parar imediatamente', 'Diminuir o volume', 'Trocar de dedo', 'Continuar mais devagar'], correta: 0, explicacao: 'Dor nunca é parte do treino.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Subir o andamento sem igualdade de som.', certo: 'Igualdade primeiro; velocidade é consequência.' },
            { erro: 'Levantar muito os dedos.', certo: 'O dedo volta à corda imediatamente depois de tocar.' },
            { erro: 'Apertar o polegar contra o braço para "ter apoio".', certo: 'Tensão na mão esquerda trava a direita também.' },
            { erro: 'Estudar sempre o mesmo padrão.', certo: 'Alterne p-i-m-a, p-a-m-i e padrões com repetição de corda.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Velocidade vem de economia de movimento, não de esforço.',
            'Preparação antecipada: o dedo já encostado antes de tocar.',
            'Amplitude mínima acima de 110 BPM.',
            'Ritmos pontuados são o atalho mais eficiente.',
            'Dor significa parar, não insistir.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o princípio central da velocidade em arpejos?', opcoes: ['Economia de movimento', 'Força nos dedos', 'Unhas mais longas', 'Tensão controlada'], correta: 0, explicacao: 'Mover menos é mover mais rápido.' },
        { texto: 'Preparação antecipada significa:', opcoes: ['O próximo dedo já está em contato com a corda', 'Estudar antes da aula', 'Tocar mais forte', 'Usar apoyando'], correta: 0, explicacao: 'Elimina a distância a percorrer.' },
        { texto: 'Os ritmos pontuados servem para:', opcoes: ['Treinar velocidade máxima em pares de notas', 'Melhorar a leitura', 'Aumentar o volume', 'Firmar a pestana'], correta: 0, explicacao: 'Cada par de dedos passa pelo movimento rápido.' },
        { texto: 'Acima de 140 BPM com quatro notas por clique, o que é indispensável?', opcoes: ['Relaxamento total entre as notas', 'Apoyando', 'Unha longa', 'Pestana'], correta: 0, explicacao: 'Sem relaxar, a mão trava.' },
        { texto: 'Qual é a resposta correta à dor no antebraço?', opcoes: ['Parar imediatamente', 'Alongar e continuar', 'Diminuir a velocidade', 'Mudar de dedilhado'], correta: 0, explicacao: 'Dor indica lesão em formação.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'p-i-m-a a 120 BPM (quatro notas por clique) com som igual entre os dedos.',
          'p-a-m-i a 100 BPM com a mesma igualdade.',
          'O mesmo arpejo em ritmo pontuado nas duas direções.',
          'Um trecho real de repertório em arpejo, no andamento da peça, sem tensão no antebraço.'
        ],
        criterio: 'Você domina quando mantém a igualdade de som e de volume entre os quatro dedos no andamento alvo, sem endurecer o antebraço.'
      }
    },

    {
      id: 'n5.2.3',
      titulo: 'Tremolo',
      resumo: 'Três ataques e um baixo criando a ilusão de uma nota contínua.',
      minutos: 22,
      disciplinas: ['tecnica'],
      prereq: ['n4.2.7'],
      status: 'implementado',
      cobre: ['Tremolo'],
      objetivo: 'Desenvolver um tremolo regular, com os três ataques iguais em volume e espaçamento.',
      blocos: [
        { t: 'p', x: 'O tremolo clássico é p-a-m-i: o polegar toca o baixo e os três dedos repetem a mesma nota aguda. Bem feito, o ouvinte não escuta quatro ataques — escuta uma melodia contínua sobre um acompanhamento. Mal feito, escuta exatamente quatro ataques desiguais.' },
        { t: 'h', x: 'O problema, em uma frase' },
        { t: 'p', x: 'O dedo *a* é o mais fraco e o primeiro a tocar depois do polegar, no momento em que a mão ainda está se reorganizando. Por isso o defeito mais comum é o tremolo "manco": p forte, a fraco, m e i normais. Todo o estudo gira em torno de igualar esses três ataques.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }] },
            { notas: [{ pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }] }
          ],
          legenda: 'A célula básica: p no baixo, depois a-m-i na mesma corda aguda. Quatro semicolcheias por tempo.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'A escada de estudo do tremolo' },
        {
          t: 'passos', itens: [
            '*Sem polegar*: toque só a-m-i na 1ª corda solta, devagar, ouvindo se os três têm o mesmo volume.',
            '*Invertido*: toque i-m-a. Isso expõe desigualdades que a ordem habitual esconde.',
            '*Com acentos deslocados*: acentue o a, depois o m, depois o i. Cada acento obriga o controle individual.',
            '*Com polegar, em quatro tempos*: p-a-m-i com uma pausa longa depois do i.',
            '*Contínuo e lento*: 50 BPM, quatro notas por clique, por um minuto inteiro sem falhar.',
            '*Subida gradual*: 4 BPM por vez, sempre com o minuto perfeito como condição.'
          ]
        },
        { t: 'metronomo', titulo: 'Tremolo com clique', bpm: 50, compasso: '4/4', x: 'Quatro notas por clique. O objetivo final é entre 100 e 120 BPM, mas a igualdade importa mais que o número.' },
        { t: 'h', x: 'Detalhes que decidem' },
        {
          t: 'lista', itens: [
            '*O polegar não acentua*: ele toca o baixo com som redondo, não com estalo. Se o p for forte demais, a melodia some.',
            '*Mesmo ponto de ataque*: os três dedos devem tocar o mesmo ponto da corda, senão o timbre muda a cada nota.',
            '*Unhas iguais*: diferenças de comprimento ou de forma entre a, m e i aparecem como diferença de volume.',
            '*Pulso imóvel*: todo o movimento vem das juntas dos dedos.',
            '*Respiração*: tremolo é a técnica onde mais se prende a respiração. Conte em voz alta para evitar isso.'
          ]
        },
        {
          t: 'dica', titulo: 'O teste da gravação: ',
          x: 'grave trinta segundos de tremolo com o celular e ouça de olhos fechados. Você vai escutar as desigualdades que não percebe enquanto toca.'
        },
        { t: 'h', x: 'Quando usar' },
        { t: 'p', x: 'O tremolo é o recurso de peças como Recuerdos de la Alhambra, de Tárrega, e Una limosna por el amor de Dios, de Barrios — as duas em domínio público. Mas ele também aparece em trechos curtos de muitas peças, e vale a pena tê-lo disponível mesmo sem tocar o repertório clássico de tremolo.' },
        {
          t: 'tocar', titulo: 'Confira as notas do tremolo',
          seq: [[5, 0], [1, 0], [4, 0], [1, 0]],
          rotulo: 'Conferir baixo e melodia',
          fim: 'Agora toque a célula completa de tremolo mantendo essas mesmas alturas.',
          x: 'Toque, em separado, Lá (5ª solta), Mi (1ª solta), Ré (4ª solta) e Mi de novo. São os sons que compõem a célula do exercício.'
        },
        {
          t: 'check', chave: 'tremolo5', titulo: 'Rotina diária de 8 minutos',
          itens: [
            'Dois minutos de a-m-i sem polegar, muito devagar.',
            'Um minuto de i-m-a invertido.',
            'Um minuto com acentos deslocados.',
            'Três minutos de tremolo completo com metrônomo.',
            'Gravei trinta segundos e ouvi criticamente.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Entender o tremolo', rodadas: 5,
          perguntas: [
            { texto: 'Qual é a ordem do tremolo clássico?', opcoes: ['p-a-m-i', 'p-i-m-a', 'i-m-a-p', 'p-m-i-a'], correta: 0, explicacao: 'Polegar no baixo, depois anelar, médio e indicador.' },
            { texto: 'Qual dedo costuma soar mais fraco?', opcoes: ['O anelar (a)', 'O indicador (i)', 'O médio (m)', 'O polegar (p)'], correta: 0, explicacao: 'Ele é o menos independente e o primeiro depois do baixo.' },
            { texto: 'Por que estudar i-m-a invertido?', opcoes: ['Expõe desigualdades escondidas pela ordem habitual', 'É mais rápido', 'Prepara a pestana', 'É mais fácil'], correta: 0, explicacao: 'Quebrar o automatismo revela os defeitos.' },
            { texto: 'O polegar, no tremolo, deve:', opcoes: ['Tocar o baixo sem acentuar', 'Marcar o tempo com força', 'Abafar as cordas', 'Tocar junto com o a'], correta: 0, explicacao: 'Se ele domina, a melodia desaparece.' },
            { texto: 'O que mais revela os defeitos do tremolo?', opcoes: ['Gravar e ouvir', 'Tocar mais rápido', 'Usar metrônomo mais alto', 'Trocar as cordas'], correta: 0, explicacao: 'Ouvindo de fora, as desigualdades ficam evidentes.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Buscar velocidade antes de igualdade.', certo: 'Um tremolo lento e igual soa muito melhor que um rápido e manco.' },
            { erro: 'Polegar mais forte que a melodia.', certo: 'O baixo acompanha; a melodia canta.' },
            { erro: 'Os três dedos tocando em pontos diferentes da corda.', certo: 'Mesmo ponto, mesmo timbre.' },
            { erro: 'Mover o pulso.', certo: 'O movimento é das juntas dos dedos; o pulso fica estável.' },
            { erro: 'Estudar tremolo por 30 minutos seguidos.', certo: 'Oito a dez minutos diários rendem mais e não machucam.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tremolo clássico é p-a-m-i, quatro notas por tempo.',
            'O objetivo é a igualdade dos três ataques, não a velocidade.',
            'Estudar sem polegar, invertido e com acentos deslocados.',
            'O polegar toca o baixo sem acentuar.',
            'Gravar e ouvir é o melhor diagnóstico.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas notas por tempo tem o tremolo clássico?', opcoes: ['Quatro', 'Três', 'Duas', 'Seis'], correta: 0, explicacao: 'Baixo mais três ataques.' },
        { texto: 'Qual é o principal objetivo no estudo do tremolo?', opcoes: ['Igualdade entre os ataques', 'Velocidade máxima', 'Volume', 'Vibrato'], correta: 0, explicacao: 'A ilusão de continuidade depende da igualdade.' },
        { texto: 'Estudar o tremolo sem o polegar serve para:', opcoes: ['Isolar e igualar a-m-i', 'Descansar a mão', 'Aumentar o volume', 'Treinar o baixo'], correta: 0, explicacao: 'O problema está nos três dedos.' },
        { texto: 'Qual peça em domínio público é o exemplo clássico de tremolo?', opcoes: ['Recuerdos de la Alhambra, de Tárrega', 'Asturias, de Albéniz', 'Prelúdio nº 1, de Villa-Lobos', 'Estudo nº 1, de Brouwer'], correta: 0, explicacao: 'É a peça de tremolo mais conhecida do repertório.' },
        { texto: 'Onde deve estar o movimento no tremolo?', opcoes: ['Nas juntas dos dedos, com o pulso estável', 'No pulso', 'No cotovelo', 'No ombro'], correta: 0, explicacao: 'Movimento grande impede a velocidade.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Um minuto contínuo de tremolo a 60 BPM (quatro notas por clique) sem falha.',
          'Os três ataques com o mesmo volume, verificado em gravação.',
          'Tremolo com mudança de baixo a cada compasso, sem interromper a melodia.',
          'Tremolo invertido (i-m-a) a 60 BPM.'
        ],
        criterio: 'Você domina quando, numa gravação ouvida de olhos fechados, não é possível identificar qual dedo tocou cada nota.'
      }
    },

    {
      id: 'n5.2.4',
      titulo: 'Rasgueados',
      resumo: 'A técnica flamenca de percussão e acento que o violão clássico adotou.',
      minutos: 18,
      disciplinas: ['tecnica'],
      prereq: ['n4.2.6'],
      status: 'implementado',
      cobre: ['Rasgueados'],
      objetivo: 'Executar os rasgueados básicos com som limpo e ritmo controlado, sem tensão no pulso.',
      blocos: [
        { t: 'p', x: 'O rasgueado é um ataque em que os dedos se abrem sobre as cordas em sequência rápida, produzindo um som cheio e percussivo. Nasceu no flamenco e entrou no repertório clássico por Albéniz, Granados, Turina, Villa-Lobos e Brouwer — qualquer peça de sotaque espanhol ou brasileiro pode pedir um.' },
        { t: 'h', x: 'A mecânica' },
        {
          t: 'passos', itens: [
            'Feche a mão suavemente, como se segurasse uma laranja pequena. Os dedos ficam curvos, não em punho.',
            'Apoie o polegar na 6ª corda (ou no tampo) para dar referência à mão.',
            'Abra os dedos um a um, de dentro para fora, deixando que a unha raspe as cordas.',
            'O movimento vem da junta da base de cada dedo, nunca do pulso.',
            'Depois do golpe, a mão volta à posição fechada sem pressa.'
          ]
        },
        { t: 'mao', lado: 'direita', destacar: ['a', 'm', 'i'], legenda: 'No rasgueado de três dedos, a ordem é a–m–i: o anelar sai primeiro, e cada dedo se abre a partir da junta da base.' },
        { t: 'h', x: 'Os quatro rasgueados essenciais' },
        {
          t: 'tabela',
          cab: ['Nome', 'Dedos', 'Som', 'Onde se usa'],
          linhas: [
            ['Simples (abanico curto)', 'a-m-i para baixo', 'Um acorde "rasgado" em três ataques', 'Acento em tempo forte'],
            ['De quatro dedos', 'c(mínimo)-a-m-i', 'Mais longo e denso', 'Finais, momentos de clímax'],
            ['Ida e volta', 'i para baixo, i para cima', 'Pulso contínuo', 'Acompanhamento rítmico'],
            ['Abanico (p-i-p)', 'polegar desce, i sobe, polegar desce', 'Triplo acento', 'Padrões flamencos e brasileiros']
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'seminima' }, { pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'colcheia' }, { pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'colcheia' }] },
            { notas: [{ pos: [[6, 0], [5, 2], [4, 2], [3, 1], [2, 0], [1, 0]], fig: 'seminima' }, { pos: [[6, 0], [5, 2], [4, 2], [3, 1], [2, 0], [1, 0]], fig: 'minima' }] }
          ],
          legenda: 'Am e Em em rasgueado. Cada acorde escrito aqui como um bloco é, na prática, três ataques rapidíssimos que caem juntos no tempo.',
          tocar: true, bpm: 84
        },
        {
          t: 'aviso', x: 'O rasgueado *termina* no tempo, não começa nele. Os três ataques acontecem um pouco antes, de modo que o último caia exatamente no pulso. Quem começa no tempo soa sempre atrasado.'
        },
        { t: 'h', x: 'Som limpo: três cuidados' },
        {
          t: 'lista', itens: [
            'A unha raspa de lado, não de frente: evita o som de "arranhão".',
            'A mão esquerda precisa estar firme, ou o rasgueado expõe cordas mal apertadas.',
            'Abafe as cordas que não fazem parte do acorde com o dedo que faz a pestana.',
            'Comece pelo rasgueado lento e separado; só depois junte os ataques.'
          ]
        },
        { t: 'metronomo', titulo: 'Rasgueado no tempo', bpm: 72, compasso: '4/4', x: 'Um rasgueado por clique. O último ataque cai exatamente no clique. Suba até 120 BPM.' },
        {
          t: 'check', chave: 'rasgueado', titulo: 'Pratique os quatro tipos',
          itens: [
            'Fiz o rasgueado simples (a-m-i) em Am, lento e separado.',
            'Fiz o de quatro dedos em Em.',
            'Fiz o ida e volta com o indicador, em colcheias contínuas.',
            'Fiz o abanico p-i-p.',
            'Toquei quatro compassos com rasgueado no tempo 1 e dedilhado nos outros.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Rasgueado na prática', rodadas: 5,
          perguntas: [
            { texto: 'De onde vem o movimento do rasgueado?', opcoes: ['Da junta da base de cada dedo', 'Do pulso', 'Do cotovelo', 'Do ombro'], correta: 0, explicacao: 'Movimento de pulso cria tensão e perde definição.' },
            { texto: 'Em relação ao pulso, o rasgueado deve:', opcoes: ['Terminar no tempo', 'Começar no tempo', 'Ficar centrado no tempo', 'Vir depois do tempo'], correta: 0, explicacao: 'O último ataque coincide com o clique.' },
            { texto: 'Qual é a ordem do rasgueado simples de três dedos?', opcoes: ['a-m-i', 'i-m-a', 'p-i-m', 'm-i-a'], correta: 0, explicacao: 'O anelar abre primeiro.' },
            { texto: 'Para evitar som de arranhão, a unha deve:', opcoes: ['Raspar de lado', 'Bater de frente', 'Estar bem curta', 'Tocar com a polpa'], correta: 0, explicacao: 'O ângulo lateral produz som cheio.' },
            { texto: 'O rasgueado expõe qual defeito da mão esquerda?', opcoes: ['Cordas mal apertadas', 'Vibrato irregular', 'Posição alta', 'Ligados fracos'], correta: 0, explicacao: 'Todas as cordas soam ao mesmo tempo e qualquer falha aparece.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Fazer o rasgueado com o pulso.', certo: 'O pulso fica estável; os dedos abrem a partir da base.' },
            { erro: 'Começar o rasgueado no tempo.', certo: 'Ele termina no tempo.' },
            { erro: 'Tensionar a mão em punho fechado.', certo: 'A mão fica suavemente curva, como segurando uma fruta.' },
            { erro: 'Usar rasgueado em peça barroca.', certo: 'É recurso de música espanhola e latino-americana.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Rasgueado é um ataque em sequência rápida com os dedos abrindo.',
            'O movimento nasce na junta da base, nunca no pulso.',
            'O último ataque cai no tempo.',
            'Quatro tipos essenciais: simples, de quatro dedos, ida e volta e abanico.',
            'A limpeza depende tanto da mão esquerda quanto da direita.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a origem histórica do rasgueado?', opcoes: ['O flamenco', 'O barroco alemão', 'O choro brasileiro', 'A música renascentista'], correta: 0, explicacao: 'Entrou no repertório clássico pela música espanhola.' },
        { texto: 'O rasgueado de quatro dedos usa:', opcoes: ['Mínimo, anelar, médio e indicador', 'Polegar e três dedos', 'Só indicador e médio', 'Polegar e mínimo'], correta: 0, explicacao: 'Começa pelo mínimo (c) e termina no indicador.' },
        { texto: 'Onde deve cair o último ataque do rasgueado?', opcoes: ['Exatamente no tempo', 'Depois do tempo', 'Antes do tempo', 'Em qualquer ponto'], correta: 0, explicacao: 'Por isso o gesto começa antes.' },
        { texto: 'Qual peça do repertório clássico costuma pedir rasgueados?', opcoes: ['Obras de sotaque espanhol, como as de Albéniz transcritas', 'Suítes de Bach', 'Estudos de Carcassi', 'Minuetos de Sor'], correta: 0, explicacao: 'O recurso é idiomático da música espanhola.' },
        { texto: 'Um rasgueado mal executado revela principalmente:', opcoes: ['Falhas na mão esquerda', 'Unhas compridas', 'Afinação baixa', 'Cordas novas'], correta: 0, explicacao: 'Todas as cordas soam juntas, e qualquer corda abafada aparece.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Rasgueado simples em Am e Em, a 100 BPM, com o último ataque exatamente no clique.',
          'Rasgueado de quatro dedos com som limpo e sem arranhão.',
          'Oito compassos alternando rasgueado no tempo 1 e dedilhado nos demais.',
          'O mesmo trecho tocado sem tensão perceptível no pulso.'
        ],
        criterio: 'Você domina quando o rasgueado soa cheio e rítmico, cai exatamente no tempo e você consegue repeti-lo trinta vezes seguidas sem endurecer a mão.'
      }
    },

    {
      id: 'n5.2.5',
      titulo: 'Harmônicos naturais e artificiais',
      resumo: 'As duas famílias de harmônicos e como usá-las com segurança em concerto.',
      minutos: 18,
      disciplinas: ['tecnica'],
      prereq: ['n4.2.8'],
      status: 'implementado',
      cobre: ['Harmônicos naturais e artificiais'],
      objetivo: 'Produzir harmônicos naturais e artificiais com confiabilidade e saber que nota cada um produz.',
      blocos: [
        { t: 'p', x: 'Harmônico é o som que se obtém tocando a corda enquanto um dedo apenas encosta num ponto exato, sem apertar. A corda deixa de vibrar inteira e passa a vibrar em partes, produzindo uma nota mais aguda e com timbre de sino. Há duas famílias: *naturais*, sobre cordas soltas, e *artificiais*, sobre notas pisadas.' },
        { t: 'h', x: 'Harmônicos naturais: onde estão' },
        {
          t: 'tabela',
          cab: ['Traste', 'Divide a corda em', 'Soa', 'Clareza'],
          linhas: [
            ['12', '2 partes', 'Uma oitava acima da corda solta', 'Máxima'],
            ['7 (e 19)', '3 partes', 'Oitava + quinta', 'Muito boa'],
            ['5 (e 24)', '4 partes', 'Duas oitavas acima', 'Boa'],
            ['4 (e 9)', '5 partes', 'Duas oitavas + terça maior', 'Mais difícil'],
            ['3', '6 partes', 'Duas oitavas + quinta', 'Fraca; exige ataque firme']
          ]
        },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 6, casa: 12, classe: 'alvo', rotulo: '8ª' }, { corda: 5, casa: 12, classe: 'alvo', rotulo: '8ª' },
            { corda: 4, casa: 7, classe: 'tonica', rotulo: '12ª' }, { corda: 3, casa: 7, classe: 'tonica', rotulo: '12ª' },
            { corda: 2, casa: 5, rotulo: '15ª' }, { corda: 1, casa: 5, rotulo: '15ª' }
          ],
          legenda: 'Os três pontos mais usados: casa 12 (oitava), casa 7 (oitava mais quinta) e casa 5 (duas oitavas). O dedo encosta *sobre o traste*, não atrás dele.'
        },
        { t: 'h', x: 'Harmônicos artificiais (oitavados)' },
        { t: 'p', x: 'Permitem obter harmônico de *qualquer* nota, inclusive pisada. A mão esquerda aperta a nota normalmente; a mão direita faz os dois papéis: o indicador encosta doze trastes acima da nota pisada e o anelar (ou o polegar) ataca a corda.' },
        {
          t: 'passos', itens: [
            'Pise a nota desejada com a mão esquerda — por exemplo, 1ª corda casa 3 (Sol).',
            'Com o indicador da mão direita, encoste levemente sobre o traste 15 (3 + 12) dessa mesma corda.',
            'Com o anelar da mão direita, toque a corda. Alguns preferem usar o polegar.',
            'Solte o indicador no mesmo instante do ataque.',
            'O resultado é o Sol uma oitava acima, com timbre de sino.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 12]], fig: 'seminima' }, { pos: [[2, 12]], fig: 'seminima' }, { pos: [[3, 12]], fig: 'seminima' }, { pos: [[4, 12]], fig: 'seminima' }] },
            { notas: [{ pos: [[1, 7]], fig: 'seminima' }, { pos: [[2, 7]], fig: 'seminima' }, { pos: [[3, 7]], fig: 'seminima' }, { pos: [[4, 7]], fig: 'minima' }] }
          ],
          legenda: 'Sequência de harmônicos naturais: primeiro a casa 12 em quatro cordas, depois a casa 7. A tablatura indica o traste onde o dedo encosta.',
          tocar: true, bpm: 66
        },
        { t: 'h', x: 'O que faz o harmônico falhar' },
        {
          t: 'erros', itens: [
            { erro: 'Encostar o dedo atrás do traste, como numa nota normal.', certo: 'O dedo fica exatamente *sobre* o traste.' },
            { erro: 'Apertar a corda.', certo: 'É um toque leve; a corda não encosta no traste.' },
            { erro: 'Demorar a soltar o dedo depois do ataque.', certo: 'Solte imediatamente, ou o som morre.' },
            { erro: 'Atacar perto da boca.', certo: 'Harmônico pede ataque mais perto do cavalete, onde a corda é mais tensa.' },
            { erro: 'Culpar a técnica quando a corda está velha.', certo: 'Cordas gastas produzem harmônicos abafados: é limitação física, não erro de execução.' }
          ]
        },
        { t: 'h', x: 'Usos musicais' },
        {
          t: 'lista', itens: [
            'Finais suspensos: um acorde de harmônicos deixa a peça no ar.',
            'Imitação de sinos e de caixinha de música (Tárrega e Barrios usam muito).',
            'Contraste de timbre numa repetição: toque a frase normal e repita em harmônicos.',
            'Harmônicos artificiais em melodia completa — recurso virtuosístico, usado em transcrições.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira seus harmônicos naturais',
          seq: [[6, 12], [5, 12], [4, 12], [3, 12], [2, 12], [1, 12]],
          rotulo: 'Conferir as seis cordas na casa 12',
          fim: 'Se o app reconheceu as seis, seu toque está confiável. Tente agora a casa 7.',
          x: 'Toque o harmônico de cada corda na casa 12, da mais grave para a mais aguda.'
        },
        {
          t: 'check', chave: 'harmonicos5', titulo: 'Rotina de cinco minutos',
          itens: [
            'Toquei os harmônicos da casa 12 nas seis cordas.',
            'Toquei os da casa 7 nas seis cordas.',
            'Toquei os da casa 5 nas três primeiras cordas.',
            'Fiz cinco harmônicos artificiais em notas pisadas diferentes.',
            'Toquei uma frase simples inteira em harmônicos artificiais.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Entender os harmônicos', rodadas: 5,
          perguntas: [
            { texto: 'O harmônico da casa 12 soa:', opcoes: ['Uma oitava acima da corda solta', 'Uma quinta acima', 'Duas oitavas acima', 'Igual à corda solta'], correta: 0, explicacao: 'A corda vibra em duas metades.' },
            { texto: 'O harmônico da casa 7 soa:', opcoes: ['Uma oitava e uma quinta acima', 'Uma oitava acima', 'Uma quarta acima', 'Duas oitavas acima'], correta: 0, explicacao: 'A corda vibra em três partes.' },
            { texto: 'Onde o dedo deve encostar?', opcoes: ['Exatamente sobre o traste', 'Atrás do traste', 'No meio da casa', 'Na frente do traste'], correta: 0, explicacao: 'É o ponto nodal exato.' },
            { texto: 'No harmônico artificial, a que distância da nota pisada fica o dedo da mão direita?', opcoes: ['Doze trastes acima', 'Sete trastes acima', 'Cinco trastes acima', 'Na mesma casa'], correta: 0, explicacao: 'Doze trastes = uma oitava.' },
            { texto: 'Para o harmônico soar melhor, o ataque deve ser:', opcoes: ['Mais perto do cavalete', 'Mais perto da boca', 'Sobre o braço', 'Com a polpa do dedo'], correta: 0, explicacao: 'Ali a corda é mais tensa e o harmônico responde melhor.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Harmônico natural: dedo sobre o traste de uma corda solta.',
            'Casa 12 = oitava; casa 7 = oitava e quinta; casa 5 = duas oitavas.',
            'Harmônico artificial: nota pisada mais indicador da direita doze trastes acima.',
            'O dedo encosta sem apertar e sai imediatamente após o ataque.',
            'Ataque perto do cavalete e cordas em bom estado são condições práticas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas partes vibram na corda no harmônico da casa 7?', opcoes: ['Três', 'Duas', 'Quatro', 'Cinco'], correta: 0, explicacao: 'Daí o som de oitava mais quinta.' },
        { texto: 'Para fazer harmônico artificial da nota da 2ª corda, casa 5, o indicador da direita encosta no traste:', opcoes: ['17', '12', '10', '7'], correta: 0, explicacao: '5 + 12 = 17.' },
        { texto: 'Qual é o erro mais comum no harmônico natural?', opcoes: ['Encostar atrás do traste em vez de sobre ele', 'Tocar forte demais', 'Usar a unha', 'Tocar na casa errada'], correta: 0, explicacao: 'O ponto nodal fica exatamente sobre o traste.' },
        { texto: 'Depois do ataque, o dedo que encosta deve:', opcoes: ['Sair imediatamente', 'Permanecer até o fim da nota', 'Apertar a corda', 'Deslizar'], correta: 0, explicacao: 'Se ficar, abafa o som.' },
        { texto: 'Harmônicos saem piores quando:', opcoes: ['As cordas estão velhas', 'O violão está afinado', 'Se toca perto do cavalete', 'A unha está polida'], correta: 0, explicacao: 'Cordas gastas perdem os parciais agudos.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Harmônicos naturais da casa 12 nas seis cordas, todos soando limpos.',
          'Harmônicos da casa 7 nas seis cordas.',
          'Cinco harmônicos artificiais em notas pisadas diferentes.',
          'Uma frase de quatro notas inteiramente em harmônicos artificiais, no tempo.'
        ],
        criterio: 'Você domina quando consegue produzir dez harmônicos seguidos sem nenhuma falha, naturais e artificiais, e sabe de antemão que nota cada um vai soar.'
      }
    },

    {
      id: 'n5.2.6',
      titulo: 'Vibrato, glissando e portamento',
      resumo: 'Os três recursos que dão vida à nota depois que ela já soou.',
      minutos: 18,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n5.2.1'],
      status: 'implementado',
      cobre: ['Vibrato', 'Glissando', 'Portamento'],
      objetivo: 'Produzir vibrato controlado e distinguir glissando de portamento, usando cada um no lugar certo.',
      blocos: [
        { t: 'p', x: 'Depois que a corda é atacada, o violonista ainda tem três recursos para moldar o som: fazer a nota oscilar (vibrato), ligar duas notas deslizando e ouvindo o caminho (glissando) ou deslizar como expressão, chegando na nota de destino (portamento). São detalhes pequenos que mudam completamente o resultado.' },
        { t: 'h', x: 'Vibrato: como funciona' },
        { t: 'p', x: 'No violão, o vibrato é longitudinal: a mão oscila *no sentido do braço*, não para cima e para baixo como no violino. O dedo mantém a pressão e o antebraço faz um movimento de vaivém. A nota oscila em afinação muito levemente e ganha sustentação.' },
        {
          t: 'passos', itens: [
            'Pise uma nota na 1ª corda, casa 7, com o dedo 3.',
            'Mantenha a pressão constante e deixe o pulso solto.',
            'Oscile o antebraço no sentido do braço do violão: para a pestana e de volta.',
            'Comece lento e amplo, depois reduza a amplitude e aumente a frequência.',
            'Experimente o vibrato com cada dedo: com o 1 é mais difícil, porque ele tem menos liberdade.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Parâmetro', 'Vibrato lento e amplo', 'Vibrato rápido e estreito'],
          linhas: [
            ['Caráter', 'Romântico, expressivo', 'Intenso, brilhante'],
            ['Onde cabe', 'Notas longas, finais de frase', 'Clímax, notas agudas'],
            ['Risco', 'Soar lamuriento', 'Soar nervoso'],
            ['Repertório', 'Tárrega, Barrios', 'Peças modernas, momentos de tensão']
          ]
        },
        {
          t: 'aviso', x: 'Vibrato não funciona em notas curtas nem em cordas soltas (nelas não há como variar a tensão com a mão esquerda). Se a peça pede vibrato numa nota que você está tocando solta, troque a digitação para uma nota pisada.'
        },
        { t: 'h', x: 'Glissando' },
        { t: 'p', x: 'O dedo desliza de uma nota a outra *com a corda soando*, e o ouvinte escuta as notas intermediárias. É um efeito, e aparece escrito na partitura com uma linha reta entre as duas notas.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 3]], fig: 'seminima' }, { pos: [[1, 7]], fig: 'minima' }, { pos: [[1, 7]], fig: 'seminima' }] },
            { notas: [{ pos: [[2, 5]], fig: 'seminima' }, { pos: [[2, 10]], fig: 'minima' }, { pos: [[2, 10]], fig: 'seminima' }] }
          ],
          legenda: 'Dois glissandos: 1ª corda da casa 3 à 7, e 2ª corda da casa 5 à 10. Ataque só a primeira nota e deixe o dedo deslizar.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Portamento' },
        { t: 'p', x: 'Parecido, mas com intenção diferente: o portamento é uma *forma de mudar de posição* em que se permite ouvir discretamente o caminho. Não é um efeito exibido, e sim a assinatura expressiva de quem toca. É típico do estilo romântico e de intérpretes como Segovia.' },
        {
          t: 'comparar',
          a: { titulo: 'Glissando', itens: ['É um efeito escrito na partitura', 'O caminho é audível de propósito', 'Pode ser rápido e marcante', 'Geralmente mesma corda, distância grande'] },
          b: { titulo: 'Portamento', itens: ['É uma escolha do intérprete', 'O caminho é apenas insinuado', 'Suave, quase imperceptível', 'Serve para mudar de posição com expressão'] }
        },
        { t: 'h', x: 'Quanto usar' },
        {
          t: 'lista', itens: [
            'No barroco: vibrato pontual, raríssimo portamento.',
            'No clássico (Sor, Giuliani): vibrato discreto em notas longas.',
            'No romântico (Tárrega, Barrios): vibrato e portamento são linguagem.',
            'No século XX: depende da peça; em Brouwer, siga as indicações.',
            'Regra geral: se você percebe o efeito antes de perceber a música, é demais.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira as notas do glissando',
          seq: [[1, 3], [1, 7], [2, 5], [2, 10]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora faça o mesmo caminho deslizando, sem atacar a segunda nota.',
          x: 'Toque as quatro notas separadamente: Sol, Si, Mi e Lá. Depois faça os dois glissandos.'
        },
        {
          t: 'check', chave: 'vibrato', titulo: 'Pratique os três recursos',
          itens: [
            'Fiz vibrato com os dedos 1, 2, 3 e 4, em notas longas.',
            'Fiz vibrato lento e amplo, depois rápido e estreito, na mesma nota.',
            'Fiz um glissando ascendente e um descendente.',
            'Usei um portamento numa mudança de posição de uma peça minha.',
            'Toquei a mesma frase com e sem vibrato e escolhi qual prefiro.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Vibrato, glissando e portamento', rodadas: 5,
          perguntas: [
            { texto: 'No violão, o vibrato é feito:', opcoes: ['No sentido do braço (longitudinal)', 'De cima para baixo', 'Girando o pulso', 'Pressionando mais forte'], correta: 0, explicacao: 'Diferente do violino, aqui o movimento é paralelo às cordas.' },
            { texto: 'É possível fazer vibrato numa corda solta?', opcoes: ['Não', 'Sim, com o polegar', 'Sim, apertando mais', 'Sim, na casa 12'], correta: 0, explicacao: 'Não há como variar a tensão com a mão esquerda.' },
            { texto: 'A diferença entre glissando e portamento é:', opcoes: ['O glissando é efeito escrito; o portamento é escolha expressiva', 'O glissando é mais lento', 'O portamento é mais rápido', 'São sinônimos'], correta: 0, explicacao: 'Diferem na intenção e na escrita.' },
            { texto: 'Em que período o vibrato contínuo é inadequado?', opcoes: ['Barroco', 'Romântico', 'Moderno', 'Contemporâneo'], correta: 0, explicacao: 'No barroco ele é ornamento ocasional.' },
            { texto: 'Como saber se o vibrato está excessivo?', opcoes: ['Quando se percebe o efeito antes da música', 'Quando a nota é longa', 'Quando se usa o dedo 4', 'Quando a corda é grave'], correta: 0, explicacao: 'O recurso deve servir à frase, não chamar atenção.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Vibrar com o pulso rígido.', certo: 'O movimento vem do antebraço, com o pulso solto.' },
            { erro: 'Variar a pressão do dedo durante o vibrato.', certo: 'A pressão fica constante; só a posição oscila.' },
            { erro: 'Usar vibrato em notas curtas.', certo: 'Não há tempo: o resultado é só um tremor no ataque.' },
            { erro: 'Exagerar o portamento.', certo: 'Ele deve ser insinuado, não exibido.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O vibrato do violão é longitudinal, com pressão constante.',
            'Lento e amplo é romântico; rápido e estreito é intenso.',
            'Não há vibrato em corda solta nem em nota curta.',
            'Glissando é efeito escrito; portamento é escolha expressiva.',
            'A dose depende do estilo da peça.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em que direção se faz o vibrato no violão?', opcoes: ['No sentido do braço', 'Perpendicular às cordas', 'Em círculos', 'Para baixo'], correta: 0, explicacao: 'Longitudinal, variando a tensão da corda.' },
        { texto: 'De onde vem o movimento do vibrato?', opcoes: ['Do antebraço, com o pulso solto', 'Dos dedos', 'Do ombro', 'Do polegar'], correta: 0, explicacao: 'O antebraço oscila e leva a mão junto.' },
        { texto: 'Glissando se escreve na partitura como:', opcoes: ['Uma linha reta entre as duas notas', 'Um ponto sobre a nota', 'Uma ligadura curva', 'Um acento'], correta: 0, explicacao: 'Às vezes acompanhada da abreviação gliss.' },
        { texto: 'Portamento é principalmente:', opcoes: ['Uma escolha expressiva do intérprete', 'Um efeito obrigatório', 'Um tipo de ligado', 'Um ornamento barroco'], correta: 0, explicacao: 'Não costuma estar escrito.' },
        { texto: 'Em que repertório o vibrato é parte da linguagem?', opcoes: ['Romântico', 'Barroco', 'Renascentista', 'Medieval'], correta: 0, explicacao: 'Tárrega e Barrios o usam constantemente.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Vibrato audível e regular com os quatro dedos, em notas de quatro tempos.',
          'A mesma nota com vibrato lento e amplo e depois rápido e estreito.',
          'Dois glissandos limpos, um ascendente e um descendente.',
          'Uma mudança de posição com portamento discreto, dentro de uma peça.'
        ],
        criterio: 'Você domina quando o vibrato soa contínuo e sem variação de volume, e quando usa portamento sem que ele chame atenção para si.'
      }
    },

    {
      id: 'n5.2.7',
      titulo: 'Timbre e dinâmica em passagens complexas',
      resumo: 'Controlar cor e volume quando a passagem já é difícil por si só.',
      minutos: 18,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n4.2.6'],
      status: 'implementado',
      cobre: ['Controle avançado de timbre', 'Dinâmica em passagens complexas'],
      objetivo: 'Manter o controle de timbre e de dinâmica em trechos tecnicamente exigentes, planejando-os de antemão.',
      blocos: [
        { t: 'p', x: 'É fácil controlar o timbre numa nota longa. O desafio é mantê-lo numa escala rápida, num arpejo cheio ou numa passagem com pestana. A solução não é "prestar mais atenção": é *planejar* a passagem de modo que o controle seja possível.' },
        { t: 'h', x: 'O mapa do timbre' },
        {
          t: 'tabela',
          cab: ['Ponto de ataque', 'Nome', 'Timbre', 'Uso'],
          linhas: [
            ['Sobre a boca', 'Dolce / tasto', 'Redondo, escuro, sem brilho', 'Trechos líricos, repetições suaves'],
            ['Entre boca e cavalete', 'Natural', 'Equilibrado', 'Padrão'],
            ['Perto do cavalete', 'Metálico / ponticello', 'Brilhante, cortante, com menos corpo', 'Clímax, contraste, imitação de outros instrumentos'],
            ['Ângulo da unha', '—', 'Mais polpa = mais escuro; mais unha = mais brilho', 'Ajuste fino dentro de qualquer região']
          ]
        },
        { t: 'h', x: 'Dinâmica no violão: de onde ela vem' },
        {
          t: 'lista', itens: [
            '*Velocidade do ataque*, não força: o dedo que atravessa a corda mais rápido produz som mais forte.',
            '*Quantidade de corda deslocada*: afundar mais o dedo antes de soltar aumenta o volume.',
            '*Ponto de ataque*: perto do cavalete projeta mais, mesmo com menos esforço.',
            '*Apoyando* produz naturalmente mais volume que *tirando*.',
            'Em passagens rápidas, a dinâmica vem principalmente do ponto de ataque, porque não há tempo para mudar o resto.'
          ]
        },
        {
          t: 'dica', titulo: 'A regra prática: ',
          x: 'em trecho difícil, não tente mudar de dinâmica *durante* a passagem. Decida o timbre antes de entrar nela e faça a mudança nos pontos de respiração.'
        },
        { t: 'h', x: 'Planejar uma passagem em quatro etapas' },
        {
          t: 'passos', itens: [
            'Marque na partitura onde a frase respira — fim de frase, pausa, mudança de harmonia.',
            'Atribua um timbre e um nível de dinâmica a cada segmento entre respirações.',
            'Posicione as mudanças de ponto de ataque exatamente nas respirações.',
            'Estude a passagem já com essas decisões: nunca "primeiro as notas, depois a música".'
          ]
        },
        {
          t: 'pauta', bpm: 72, numerar: true, quebrar: 4,
          txt: 'e4/c g4/c b4/c e5/c b4/c g4/c e4/c g4/c | a4/c c5/c e5/c a5/c e5/c c5/c a4/c c5/c | b4/c d5/c g5/c b5/c g5/c d5/c b4/c g4/c | e5/b z/b',
          legenda: 'Três compassos de arpejo ascendente. Plano sugerido: compasso 1 dolce, compasso 2 natural, compasso 3 ponticello crescendo, resolução em natural.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 5]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 7]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 8]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[1, 12]], fig: 'minima' }, { pos: [[1, 12]], fig: 'minima' }] }
          ],
          legenda: 'Uma subida que atravessa quatro cordas. Toque-a três vezes: toda em tasto, toda em ponticello e com transição gradual de uma região para a outra.',
          tocar: true, bpm: 84
        },
        { t: 'h', x: 'Dinâmica dentro de um acorde' },
        { t: 'p', x: 'Num acorde, cada dedo pode tocar com volume diferente. É assim que a melodia se destaca do acompanhamento sem que o volume geral mude. O dedo que toca a melodia ataca com mais velocidade e um pouco mais de unha; os outros tocam com mais polpa.' },
        {
          t: 'tocar', titulo: 'Confira a passagem no braço',
          seq: [[1, 3], [1, 5], [1, 7], [1, 8], [1, 12]],
          rotulo: 'Conferir as notas da subida',
          fim: 'Agora toque a mesma subida duas vezes: a primeira dolce, a segunda ponticello.',
          x: 'Toque Sol, Lá, Si, Dó e Mi na 1ª corda, devagar, uma nota por vez.'
        },
        {
          t: 'check', chave: 'timbre5', titulo: 'Exercícios de controle',
          itens: [
            'Toquei uma escala inteira em tasto e depois inteira em ponticello.',
            'Toquei a mesma escala com transição gradual de uma região à outra.',
            'Toquei um acorde destacando a melodia, depois destacando o baixo.',
            'Planejei numa peça minha o timbre de cada seção e anotei na partitura.',
            'Toquei uma passagem difícil com crescendo, mudando o ponto de ataque só nas respirações.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Timbre e dinâmica', rodadas: 5,
          perguntas: [
            { texto: 'Tocar perto do cavalete produz som:', opcoes: ['Brilhante e cortante', 'Redondo e escuro', 'Mais grave', 'Mais afinado'], correta: 0, explicacao: 'É o ponticello.' },
            { texto: 'A dinâmica no violão vem principalmente de:', opcoes: ['Velocidade do ataque', 'Força do braço', 'Tamanho da unha', 'Altura do violão'], correta: 0, explicacao: 'O dedo atravessa a corda mais depressa.' },
            { texto: 'Em passagens rápidas, qual recurso de dinâmica é mais prático?', opcoes: ['Mudar o ponto de ataque', 'Mudar a digitação', 'Usar vibrato', 'Mudar o andamento'], correta: 0, explicacao: 'É a mudança mais rápida de executar.' },
            { texto: 'Onde devem acontecer as mudanças de timbre?', opcoes: ['Nos pontos de respiração da frase', 'No meio de uma escala', 'Em qualquer lugar', 'Só no fim da peça'], correta: 0, explicacao: 'Assim a mudança soa musical, e não acidental.' },
            { texto: 'Como destacar a melodia dentro de um acorde?', opcoes: ['O dedo da melodia ataca com mais velocidade e mais unha', 'Tocando o acorde mais forte', 'Omitindo o baixo', 'Usando pestana'], correta: 0, explicacao: 'O controle é por dedo, não por acorde.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tentar fazer crescendo apertando mais a mão esquerda.', certo: 'Volume é mão direita; a esquerda só precisa apertar o suficiente.' },
            { erro: 'Mudar o ponto de ataque no meio de uma passagem rápida.', certo: 'Mude nas respirações.' },
            { erro: 'Tocar tudo em ponticello para "projetar mais".', certo: 'Sem contraste, o som cansa o ouvinte.' },
            { erro: 'Deixar as decisões de timbre para o fim do estudo.', certo: 'Estude já com o plano: o gesto técnico é diferente.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O timbre depende do ponto de ataque e do ângulo da unha.',
            'A dinâmica vem da velocidade do ataque, não da força.',
            'Em passagens rápidas, o ponto de ataque é o recurso principal.',
            'Mudanças de timbre acontecem nas respirações da frase.',
            'Dentro de um acorde, cada dedo pode ter um volume próprio.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que é tocar "sul tasto" ou dolce?', opcoes: ['Tocar sobre a boca, com som escuro', 'Tocar perto do cavalete', 'Tocar com apoyando', 'Tocar com a unha'], correta: 0, explicacao: 'Som redondo e sem brilho.' },
        { texto: 'Para aumentar o volume, o que muda no ataque?', opcoes: ['A velocidade do dedo atravessando a corda', 'A força do braço', 'A pressão da mão esquerda', 'A altura do pulso'], correta: 0, explicacao: 'Velocidade, não força.' },
        { texto: 'Qual técnica de mão direita produz naturalmente mais volume?', opcoes: ['Apoyando', 'Tirando', 'Rasgueado', 'Tremolo'], correta: 0, explicacao: 'O dedo descansa na corda seguinte e desloca mais a corda.' },
        { texto: 'Onde planejar as mudanças de timbre?', opcoes: ['Nos pontos de respiração da frase', 'Em todo compasso', 'Nas cordas soltas', 'Nas mudanças de posição'], correta: 0, explicacao: 'A frase define o lugar musical da mudança.' },
        { texto: 'Para destacar a melodia num acorde, o dedo correspondente deve:', opcoes: ['Atacar mais rápido e com mais unha', 'Atacar depois dos outros', 'Usar só polpa', 'Tocar sobre a boca'], correta: 0, explicacao: 'Mais velocidade e mais brilho destacam a voz.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Uma escala de duas oitavas tocada inteira em tasto e depois inteira em ponticello.',
          'A mesma escala com transição gradual entre as duas regiões.',
          'Um acorde de quatro notas com a melodia claramente destacada.',
          'Uma passagem difícil do seu repertório com plano de timbre anotado e executado.'
        ],
        criterio: 'Você domina quando consegue sustentar um plano de timbre e dinâmica numa passagem tecnicamente difícil, sem que o controle se perca quando o andamento sobe.'
      }
    },

    {
      id: 'n5.2.8',
      titulo: 'Polifonia e independência de vozes',
      resumo: 'Fazer duas ou três melodias soarem em planos diferentes nas mesmas seis cordas.',
      minutos: 20,
      disciplinas: ['tecnica', 'contraponto'],
      prereq: ['n4.2.5', 'n5.1.6'],
      status: 'implementado',
      cobre: ['Independência de vozes', 'Polifonia'],
      objetivo: 'Executar textura polifônica com cada voz num plano sonoro distinto e com a duração correta.',
      blocos: [
        { t: 'p', x: 'Polifonia no violão é um problema de dois lados: a *mão esquerda* precisa sustentar cada nota pelo valor escrito, e a *mão direita* precisa dar a cada voz um volume diferente. O resultado bem-feito é o que faz uma fuga de Bach soar como três instrumentos.' },
        { t: 'h', x: 'Lado 1: a mão esquerda sustenta' },
        { t: 'p', x: 'O erro mais comum em polifonia não é tocar errado: é *soltar cedo*. Uma mínima no baixo precisa soar dois tempos inteiros, mesmo que a melodia tenha se movido quatro vezes nesse intervalo. Isso exige que o dedo do baixo fique apoiado enquanto os outros trabalham.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'seminima' }, { pos: [[2, 3]], fig: 'seminima' }, { pos: [[1, 0]], fig: 'seminima' }, { pos: [[1, 1]], fig: 'seminima' }] },
            { notas: [{ pos: [[6, 3], [1, 0]], fig: 'seminima' }, { pos: [[2, 3]], fig: 'seminima' }, { pos: [[2, 1]], fig: 'seminima' }, { pos: [[3, 0]], fig: 'seminima' }] }
          ],
          legenda: 'O baixo soa no primeiro tempo e deve durar o compasso inteiro, enquanto a melodia se move quatro vezes acima dele. Confira se o dedo do baixo não levanta.',
          tocar: true, bpm: 60
        },
        {
          t: 'passos', itens: [
            'Toque o compasso e, na última nota, pare *sem levantar nenhum dedo*.',
            'Olhe a mão: o dedo do baixo ainda está apoiado? Se não, repita.',
            'Toque de novo mais devagar, com o único objetivo de manter o baixo.',
            'Depois acrescente o andamento, sempre conferindo a sustentação.'
          ]
        },
        { t: 'h', x: 'Lado 2: a mão direita separa os planos' },
        { t: 'p', x: 'Três vozes precisam de três volumes. A regra usual: melodia em primeiro plano, baixo em segundo e vozes internas em terceiro. Isso se obtém atacando cada voz com velocidade diferente — e, em alguns casos, com dedos diferentes (o polegar naturalmente tem mais massa).' },
        {
          t: 'tabela',
          cab: ['Voz', 'Dedo típico', 'Plano', 'Como conseguir'],
          linhas: [
            ['Melodia (aguda)', 'a ou m', 'Primeiro', 'Ataque rápido, mais unha, às vezes apoyando'],
            ['Baixo', 'p', 'Segundo', 'Som redondo, polpa, sem estalo'],
            ['Voz interna', 'i ou m', 'Terceiro', 'Ataque suave, mais polpa, perto da boca']
          ]
        },
        {
          t: 'dica', titulo: 'Exercício que resolve: ',
          x: 'toque o mesmo trecho três vezes, destacando uma voz diferente a cada vez. Quando conseguir destacar qualquer uma das três à vontade, o controle está estabelecido.'
        },
        { t: 'h', x: 'Ler polifonia' },
        { t: 'p', x: 'Na partitura de violão, as vozes se distinguem pela *direção das hastes*: hastes para cima são a voz superior, para baixo são a inferior. Quando há três vozes, a do meio costuma aparecer com haste para baixo junto ao baixo, ou com haste própria.' },
        {
          t: 'pauta', bpm: 56, numerar: true,
          txt: 'c3+e4/q c3+f4/q c3+g4/q c3+a4/q | g3+b4/b g3+g4/b | a3+a4/q a3+g4/q a3+f4/q a3+e4/q | c3+e4/o',
          legenda: 'Duas vozes independentes: o baixo em semínimas e mínimas, a melodia caminhando acima. Cante a melodia enquanto toca o baixo.'
        },
        {
          t: 'tocar', titulo: 'Confira as duas vozes',
          seq: [[5, 3], [2, 5], [5, 3], [2, 8]],
          rotulo: 'Conferir baixo e melodia',
          fim: 'Agora toque as duas juntas, com a melodia mais forte que o baixo.',
          x: 'Toque, separadamente, Dó (5ª corda casa 3), Mi (2ª corda casa 5), Dó de novo e Sol (2ª corda casa 8).'
        },
        {
          t: 'check', chave: 'polifonia', titulo: 'Rotina de estudo polifônico',
          itens: [
            'Toquei só a voz do baixo de um trecho, no tempo.',
            'Toquei só a melodia, no mesmo tempo.',
            'Juntei as duas, conferindo se o baixo dura o valor escrito.',
            'Toquei o trecho destacando cada voz, uma de cada vez.',
            'Cantei a melodia enquanto tocava o baixo.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Polifonia no violão', rodadas: 5,
          perguntas: [
            { texto: 'Qual é o erro mais comum ao tocar polifonia?', opcoes: ['Soltar as notas antes do valor escrito', 'Tocar rápido demais', 'Errar a afinação', 'Usar pestana'], correta: 0, explicacao: 'A sustentação é o que cria a sensação de vozes.' },
            { texto: 'Na partitura, como se distinguem as vozes?', opcoes: ['Pela direção das hastes', 'Pela cor', 'Pelo tamanho das notas', 'Pela armadura'], correta: 0, explicacao: 'Hastes para cima: voz superior.' },
            { texto: 'Qual voz costuma ficar em primeiro plano?', opcoes: ['A melodia', 'O baixo', 'A voz interna', 'Todas iguais'], correta: 0, explicacao: 'Exceto quando a melodia está no baixo.' },
            { texto: 'Como se verifica a sustentação do baixo?', opcoes: ['Parando no fim do compasso sem levantar os dedos', 'Tocando mais forte', 'Usando metrônomo', 'Olhando a partitura'], correta: 0, explicacao: 'A inspeção visual da mão é o teste direto.' },
            { texto: 'Qual exercício estabelece o controle de planos sonoros?', opcoes: ['Tocar o trecho destacando cada voz por vez', 'Tocar mais rápido', 'Tocar com apoyando sempre', 'Mudar a digitação'], correta: 0, explicacao: 'Se você escolhe qual voz destacar, tem controle.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar todas as vozes com o mesmo volume.', certo: 'Sem planos sonoros, a polifonia vira acorde quebrado.' },
            { erro: 'Levantar o dedo do baixo ao mudar a melodia.', certo: 'O baixo dura o valor escrito.' },
            { erro: 'Estudar as vozes sempre juntas.', certo: 'Estude cada voz sozinha antes de juntar.' },
            { erro: 'Escolher digitação pensando só na melodia.', certo: 'A digitação precisa permitir que o baixo se sustente.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Polifonia exige sustentação (mão esquerda) e planos sonoros (mão direita).',
            'O erro mais comum é soltar o baixo antes do tempo.',
            'Melodia em primeiro plano, baixo em segundo, vozes internas em terceiro.',
            'A direção das hastes indica a voz na partitura.',
            'Estude cada voz sozinha e depois destaque uma de cada vez.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que cria a sensação de vozes independentes no violão?', opcoes: ['Sustentação correta e volumes diferentes', 'Velocidade', 'Vibrato', 'Uso de pestana'], correta: 0, explicacao: 'Duração escrita mais plano sonoro distinto.' },
        { texto: 'Hastes para cima na partitura indicam:', opcoes: ['A voz superior', 'A voz do baixo', 'Notas mais fortes', 'Cordas soltas'], correta: 0, explicacao: 'É a convenção da escrita polifônica.' },
        { texto: 'Qual dedo normalmente toca o baixo?', opcoes: ['O polegar', 'O indicador', 'O médio', 'O anelar'], correta: 0, explicacao: 'Ele tem mais massa e som mais redondo.' },
        { texto: 'Como se testa se o baixo foi sustentado?', opcoes: ['Parando sem levantar os dedos e olhando a mão', 'Ouvindo o metrônomo', 'Tocando mais forte', 'Contando em voz alta'], correta: 0, explicacao: 'A inspeção visual é imediata.' },
        { texto: 'Qual é a ordem de planos sonoros mais comum?', opcoes: ['Melodia, baixo, vozes internas', 'Baixo, melodia, vozes internas', 'Vozes internas, melodia, baixo', 'Todos iguais'], correta: 0, explicacao: 'Salvo quando a melodia está no grave.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar um trecho a duas vozes com o baixo sustentado pelo valor escrito.',
          'Tocar o mesmo trecho destacando a melodia e depois destacando o baixo.',
          'Cantar a melodia enquanto toca apenas o baixo.',
          'Tocar um trecho a três vozes com os três planos distinguíveis numa gravação.'
        ],
        criterio: 'Você domina quando um ouvinte consegue seguir qualquer uma das vozes separadamente ao escutar você tocar.'
      }
    },

    {
      id: 'n5.2.9',
      titulo: 'Leitura à primeira vista',
      resumo: 'Tocar uma partitura nova na hora — uma habilidade que se treina com método.',
      minutos: 18,
      disciplinas: ['leitura'],
      prereq: ['n4.2.1'],
      status: 'implementado',
      cobre: ['Leitura à primeira vista'],
      objetivo: 'Desenvolver uma rotina confiável de leitura à primeira vista, mantendo o pulso mesmo com erros.',
      blocos: [
        { t: 'p', x: 'Ler à primeira vista não é ler rápido: é *não parar*. O objetivo é manter o pulso do começo ao fim, aceitando erros, porque é assim que se toca em conjunto, em aula e em prova. A habilidade se desenvolve com material fácil e muita quantidade, não com material difícil e muita repetição.' },
        { t: 'h', x: 'Os trinta segundos antes de começar' },
        {
          t: 'passos', itens: [
            'Leia a armadura e diga em voz alta quais notas são alteradas.',
            'Leia a fórmula de compasso e defina o andamento — sempre mais lento do que você gostaria.',
            'Percorra a peça com os olhos procurando o trecho mais difícil; é ele que define o andamento de tudo.',
            'Identifique a nota mais grave e a mais aguda: isso diz em que região do braço você vai tocar.',
            'Procure repetições: trechos iguais são tempo ganho.'
          ]
        },
        { t: 'h', x: 'As quatro regras durante a leitura' },
        {
          t: 'lista', itens: [
            '*Não pare*. Um erro é um erro; uma parada estraga a leitura inteira.',
            '*Olhe à frente*. Os olhos devem estar um compasso adiante das mãos.',
            '*Não olhe para o braço*. Se precisar olhar, o andamento está alto demais.',
            '*Priorize o ritmo*. Uma nota errada no tempo certo é melhor que a nota certa fora do tempo.'
          ]
        },
        {
          t: 'dica', titulo: 'A regra dos 80%: ',
          x: 'escolha material em que você acerte cerca de 80% das notas na primeira tentativa. Mais fácil não treina; mais difícil frustra e ensina a parar.'
        },
        { t: 'h', x: 'Leitura por padrões, não por notas' },
        { t: 'p', x: 'O leitor experiente não lê nota por nota: reconhece *formas*. Um arpejo ascendente de Dó, uma escala por graus conjuntos, um acorde em bloco — cada um é lido como uma unidade. Treinar esses padrões é o que separa quem lê devagar de quem lê fluentemente.' },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'c4/q e4/q g4/q e4/q | d4/q f4/q a4/q f4/q | e4/q g4/q b4/q g4/q | c5/b z/b | c4/c d4/c e4/c f4/c g4/q e4/q | f4/c g4/c a4/c b4/c c5/b | g4/q e4/q c4/q e4/q | c4/o',
          legenda: 'Oito compassos de leitura: os quatro primeiros são arpejos (forma), os quatro últimos são escalas por graus conjuntos. Reconheça o padrão antes de ler as notas.'
        },
        { t: 'h', x: 'A rotina semanal' },
        {
          t: 'tabela',
          cab: ['Dia', 'Material', 'Duração'],
          linhas: [
            ['Todo dia', 'Uma peça nova, fácil, lida uma única vez', '5 minutos'],
            ['Duas vezes por semana', 'Um estudo de Carcassi ou Sor em andamento muito lento', '10 minutos'],
            ['Uma vez por semana', 'Leitura com metrônomo, sem parar, gravando', '10 minutos'],
            ['Sempre', 'Nunca repetir a mesma peça de leitura na mesma semana', '—']
          ],
          legenda: 'Quantidade vence repetição: o segredo é ver material novo todos os dias.'
        },
        { t: 'metronomo', titulo: 'Leitura com pulso', bpm: 50, compasso: '4/4', x: 'Comece muito lento. O metrônomo é o juiz: se você parou, a leitura falhou, mesmo que todas as notas estivessem certas.' },
        {
          t: 'exercicio', tipo: 'identificar-nota', titulo: 'Velocidade de reconhecimento', rodadas: 10,
          notas: ['e4', 'g4', 'b4', 'd5', 'f5', 'c4', 'a4', 'f4', 'd4', 'e5'],
          x: 'Responda o mais rápido que conseguir. Reconhecer a nota em menos de um segundo é o que permite ler no tempo.'
        },
        {
          t: 'check', chave: 'primeiravista', titulo: 'Rotina da semana',
          itens: [
            'Li uma peça nova por dia, uma única vez cada.',
            'Fiz a leitura prévia de trinta segundos antes de cada peça.',
            'Mantive o pulso do começo ao fim em pelo menos três leituras.',
            'Gravei uma leitura e ouvi onde parei.',
            'Li um trecho sem olhar para o braço.'
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Parar para corrigir um erro.', certo: 'Siga em frente. Corrigir é estudo, não leitura.' },
            { erro: 'Escolher andamento pelo primeiro compasso.', certo: 'O andamento é definido pelo compasso mais difícil.' },
            { erro: 'Olhar para a mão esquerda.', certo: 'Se precisa olhar, está rápido demais.' },
            { erro: 'Repetir a mesma peça de leitura todos os dias.', certo: 'Material novo é o que treina a habilidade.' },
            { erro: 'Escolher peças difíceis para "render mais".', certo: 'A regra dos 80% existe para manter o pulso possível.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Ler à primeira vista é não parar, não é ler rápido.',
            'Trinta segundos de leitura prévia definem armadura, compasso, andamento e região.',
            'Olhos um compasso à frente das mãos.',
            'Ritmo tem prioridade sobre altura.',
            'Material novo todos os dias, na dificuldade dos 80% de acerto.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o objetivo principal da leitura à primeira vista?', opcoes: ['Manter o pulso sem parar', 'Acertar todas as notas', 'Tocar rápido', 'Decorar a peça'], correta: 0, explicacao: 'A continuidade é o que se treina.' },
        { texto: 'O andamento da leitura deve ser definido por:', opcoes: ['O compasso mais difícil', 'O primeiro compasso', 'A indicação da partitura', 'O metrônomo no máximo'], correta: 0, explicacao: 'Senão você trava no meio.' },
        { texto: 'Onde devem estar os olhos durante a leitura?', opcoes: ['Um compasso à frente das mãos', 'Na nota que está sendo tocada', 'No braço do violão', 'No metrônomo'], correta: 0, explicacao: 'A antecipação é o que dá fluência.' },
        { texto: 'Qual material é ideal para treinar leitura?', opcoes: ['Peças em que você acerta cerca de 80% na primeira vez', 'Peças muito difíceis', 'Peças já conhecidas', 'Escalas'], correta: 0, explicacao: 'É a faixa que treina sem frustrar.' },
        { texto: 'Entre a nota certa fora do tempo e a nota errada no tempo, o que é preferível na leitura?', opcoes: ['A nota errada no tempo', 'A nota certa fora do tempo', 'Parar e corrigir', 'Recomeçar'], correta: 0, explicacao: 'O ritmo sustenta a música em conjunto.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Ler uma peça nova de 16 compassos sem parar, com metrônomo a 50 BPM.',
          'Fazer a leitura prévia em trinta segundos e declarar armadura, compasso, andamento e região.',
          'Ler um trecho inteiro sem olhar para a mão esquerda.',
          'Repetir a leitura com uma peça diferente, no mesmo dia, mantendo o pulso.'
        ],
        criterio: 'Você domina quando consegue atravessar uma peça desconhecida do seu nível sem nenhuma parada, mesmo com notas erradas pelo caminho.'
      }
    },

    {
      id: 'n5.2.10',
      titulo: 'Memorização e preparação para apresentações',
      resumo: 'Quatro tipos de memória e um plano para tocar em público sem depender da sorte.',
      minutos: 20,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n5.1.7', 'n5.2.9'],
      status: 'implementado',
      cobre: ['Memorização', 'Preparação para apresentações'],
      objetivo: 'Memorizar uma peça por mais de um caminho e montar um plano de preparação para tocar em público.',
      blocos: [
        { t: 'p', x: 'Quase todo branco de memória em palco tem a mesma causa: a peça foi memorizada por um caminho só — o dos dedos. Quando a tensão interrompe esse automatismo, não sobra nada. A solução é memorizar por quatro caminhos diferentes, de modo que qualquer um deles possa resgatar os outros.' },
        { t: 'h', x: 'Os quatro tipos de memória' },
        {
          t: 'tabela',
          cab: ['Tipo', 'O que é', 'Como treinar', 'Risco se for a única'],
          linhas: [
            ['Muscular', 'Os dedos sabem o caminho', 'Repetição', 'Some sob tensão; é a mais frágil'],
            ['Auditiva', 'Você ouve a peça por dentro', 'Cantar a peça inteira sem o violão', 'Depende de ouvido treinado'],
            ['Visual', 'Você vê a partitura ou o braço', 'Fechar os olhos e visualizar a página', 'Pode falhar com nervosismo'],
            ['Analítica', 'Você sabe a estrutura e a harmonia', 'Analisar forma e acordes', 'Nenhum: é a mais confiável']
          ]
        },
        {
          t: 'dica', titulo: 'O teste definitivo: ',
          x: 'consegue escrever de memória a sequência de acordes da peça, seção por seção, sem o violão na mão? Se sim, sua memória analítica está formada.'
        },
        { t: 'h', x: 'O método de memorização em cinco passos' },
        {
          t: 'passos', itens: [
            'Divida a peça em seções pequenas, usando a análise formal (A, B, A).',
            'Memorize cada seção de trás para frente: comece pelos últimos quatro compassos. Assim você sempre caminha em direção a terreno conhecido.',
            'Marque *pontos de partida*: lugares a partir dos quais você consegue recomeçar sem precisar do começo. Um a cada oito compassos, no mínimo.',
            'Toque a peça mentalmente, sem instrumento, do começo ao fim, ouvindo cada nota.',
            'Teste: toque começando de cada ponto de partida, em ordem aleatória.'
          ]
        },
        { t: 'h', x: 'A preparação para apresentação' },
        {
          t: 'tabela',
          cab: ['Prazo', 'O que fazer'],
          linhas: [
            ['4 semanas antes', 'Peça memorizada e estável. Nada de mudar digitação a partir daqui.'],
            ['3 semanas', 'Tocar a peça inteira uma vez por dia, sem parar, gravando.'],
            ['2 semanas', 'Tocar para alguém — qualquer pessoa. Simular a situação é o treino principal.'],
            ['1 semana', 'Tocar com roupa e calçado de apresentação; ensaiar entrar, sentar, afinar e começar.'],
            ['No dia', 'Aquecimento leve, nada de estudar trechos novos. Chegar cedo e tocar uma vez no local, se possível.']
          ]
        },
        { t: 'h', x: 'O que fazer quando dá branco' },
        {
          t: 'lista', itens: [
            'Não pare e não volte ao começo: vá para o próximo ponto de partida.',
            'Se a mão congelar, continue a harmonia por improvisação até reencontrar a melodia.',
            'Respire. A maior parte dos brancos dura menos de dois segundos e o público não percebe.',
            'Nunca faça cara de erro: a reação do intérprete é o que o público percebe, não a nota.'
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'c4/q e4/q g4/q c5/q | b4/q g4/q e4/q c4/q | f4/q a4/q c5/q f5/q | e5/q c5/q a4/q f4/q | g4/q b4/q d5/q g5/q | f5/q d5/q b4/q g4/q | c5/q g4/q e4/q c4/q | c4/o',
          legenda: 'Oito compassos para o exercício de pontos de partida: marque o compasso 1, o 3, o 5 e o 7 e pratique começar de cada um deles.'
        },
        {
          t: 'tocar', titulo: 'Confira um ponto de partida',
          seq: [[4, 3], [3, 2], [2, 1], [1, 1]],
          rotulo: 'Conferir o compasso 3',
          fim: 'Agora toque a partir daí até o fim, sem voltar ao começo.',
          x: 'Toque as quatro notas iniciais do compasso 3: Fá, Lá, Dó e Fá.'
        },
        {
          t: 'check', chave: 'memoria', titulo: 'Plano de memorização',
          itens: [
            'Dividi a peça em seções e anotei o esquema formal.',
            'Memorizei pelo menos uma seção de trás para frente.',
            'Marquei pontos de partida a cada oito compassos.',
            'Toquei a peça mentalmente, sem o instrumento, do início ao fim.',
            'Escrevi de memória a sequência de acordes de uma seção.',
            'Toquei a peça inteira para outra pessoa.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Memória e palco', rodadas: 6,
          perguntas: [
            { texto: 'Qual tipo de memória é o mais frágil sob tensão?', opcoes: ['Muscular', 'Analítica', 'Auditiva', 'Visual'], correta: 0, explicacao: 'O automatismo se interrompe com o nervosismo.' },
            { texto: 'Qual é a memória mais confiável?', opcoes: ['Analítica', 'Muscular', 'Visual', 'Nenhuma'], correta: 0, explicacao: 'Saber a estrutura permite reconstruir a peça.' },
            { texto: 'Por que memorizar de trás para frente?', opcoes: ['Você sempre caminha para terreno conhecido', 'É mais rápido', 'Treina o ritmo', 'Facilita a leitura'], correta: 0, explicacao: 'O fim fica mais seguro que o começo, e não o contrário.' },
            { texto: 'O que é um ponto de partida?', opcoes: ['Um lugar da peça a partir do qual você consegue recomeçar', 'O primeiro compasso', 'A primeira nota de cada seção', 'A cadência final'], correta: 0, explicacao: 'Deve haver vários, espalhados pela peça.' },
            { texto: 'Diante de um branco em apresentação, o correto é:', opcoes: ['Ir para o próximo ponto de partida', 'Voltar ao começo', 'Parar e recomeçar', 'Pedir desculpa ao público'], correta: 0, explicacao: 'Seguir em frente é quase sempre imperceptível.' },
            { texto: 'Quando se deve parar de mudar a digitação de uma peça?', opcoes: ['Pelo menos quatro semanas antes da apresentação', 'Na véspera', 'No dia', 'Uma semana antes'], correta: 0, explicacao: 'A memória muscular precisa de tempo para estabilizar.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Memorizar só repetindo.', certo: 'Repetição forma apenas memória muscular.' },
            { erro: 'Começar sempre do início ao estudar.', certo: 'O começo fica forte e o fim, frágil. Varie o ponto de partida.' },
            { erro: 'Nunca tocar para ninguém antes da apresentação.', certo: 'Tocar para uma pessoa é o treino mais eficaz que existe.' },
            { erro: 'Estudar trechos difíceis no dia da apresentação.', certo: 'No dia, só aquecimento leve.' },
            { erro: 'Demonstrar o erro com expressão facial.', certo: 'O público percebe a reação, não a nota.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Quatro memórias: muscular, auditiva, visual e analítica.',
            'A analítica é a mais confiável; a muscular, a mais frágil.',
            'Memorize de trás para frente e marque pontos de partida.',
            'Toque a peça mentalmente, sem o instrumento.',
            'Prepare a apresentação por quatro semanas e toque para alguém antes.',
            'Em caso de branco: siga para o próximo ponto de partida, sem demonstrar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos tipos de memória são trabalhados nesta aula?', opcoes: ['Quatro', 'Dois', 'Três', 'Cinco'], correta: 0, explicacao: 'Muscular, auditiva, visual e analítica.' },
        { texto: 'Qual memória permite reconstruir a peça depois de um branco?', opcoes: ['Analítica', 'Muscular', 'Visual', 'Auditiva'], correta: 0, explicacao: 'Conhecer harmonia e forma permite retomar.' },
        { texto: 'Pontos de partida devem existir, no mínimo, a cada:', opcoes: ['Oito compassos', 'Dois compassos', 'Vinte compassos', 'Seção'], correta: 0, explicacao: 'Assim nenhum trecho fica sem saída.' },
        { texto: 'Quanto tempo antes da apresentação a peça deve estar memorizada?', opcoes: ['Quatro semanas', 'Uma semana', 'Dois dias', 'No dia'], correta: 0, explicacao: 'Tempo para estabilizar e para simular a situação.' },
        { texto: 'Tocar mentalmente, sem o instrumento, treina qual memória?', opcoes: ['Auditiva e analítica', 'Apenas muscular', 'Apenas visual', 'Nenhuma'], correta: 0, explicacao: 'É o exercício que mais revela buracos na memória.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar uma peça memorizada a partir de quatro pontos de partida diferentes, escolhidos ao acaso.',
          'Escrever de memória a sequência de acordes de uma seção inteira.',
          'Tocar a peça mentalmente, do início ao fim, sem instrumento.',
          'Tocar a peça inteira para outra pessoa, sem parar.'
        ],
        criterio: 'Você domina quando consegue recomeçar a peça de qualquer ponto de partida e descrever sua harmonia sem o violão na mão.'
      }
    }
  ]
};
