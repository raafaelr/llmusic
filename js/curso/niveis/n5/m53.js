// NÍVEL 5 — MÓDULO 5.3: Repertório avançado
// Os compositores centrais do violão de concerto. Todos os exemplos musicais
// escritos aqui são de obras em domínio público ou exercícios originais
// criados para o curso. Obras ainda protegidas por direito autoral (caso de
// Villa-Lobos no Brasil) são estudadas pelo estilo e pela técnica, sem
// reprodução de partitura.

export const M53 = {
  id: '5.3',
  titulo: 'Repertório',
  resumo: 'Oito compositores que definiram o que é tocar violão de concerto, e o que cada um exige de quem os toca.',
  aulas: [
    {
      id: 'n5.3.1',
      titulo: 'Johann Sebastian Bach no violão',
      resumo: 'Transcrever, articular e sustentar vozes na música mais exigente do repertório.',
      minutos: 24,
      disciplinas: ['repertorio', 'contraponto', 'interpretacao'],
      prereq: ['n4.3.5', 'n5.2.8'],
      status: 'validado',
      cobre: ['Johann Sebastian Bach'],
      objetivo: 'Entender o que muda ao transcrever Bach para o violão e aplicar critérios de articulação, ornamentação e sustentação.',
      blocos: [
        { t: 'p', x: 'Bach (1685–1750) não escreveu uma única nota para violão — o instrumento não existia. Tudo o que tocamos é transcrição: das suítes para alaúde, das sonatas e partitas para violino solo, das suítes para violoncelo. Isso faz do violonista um coautor da versão que toca, com decisões a tomar em cada compasso.' },
        { t: 'h', x: 'O que é preciso decidir numa transcrição' },
        {
          t: 'tabela',
          cab: ['Decisão', 'Critério'],
          linhas: [
            ['Tonalidade', 'Escolher o tom que melhor aproveita as cordas soltas. Ré menor e Mi menor costumam ser os destinos naturais.'],
            ['Oitavas', 'Baixos podem descer uma oitava para ganhar ressonância; melodias podem subir para não colidir.'],
            ['Baixos acrescentados', 'Onde o violino não podia sustentar, o violão pode. Acrescentar é legítimo, mas com parcimônia.'],
            ['Articulação', 'O violino tem arco; o violão, não. Ligados e staccatos precisam ser repensados.'],
            ['Ornamentos', 'Trinados começam na nota superior e no tempo. No violão, muitos são feitos com ligados.']
          ]
        },
        { t: 'h', x: 'A primeira exigência: sustentar as vozes' },
        { t: 'p', x: 'Em Bach, uma nota que termina antes do valor escrito não é uma imprecisão: é uma voz que desaparece. A disciplina da mão esquerda é o que separa uma execução boa de uma apenas correta.' },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'd3+a3+d4/q d3+a3+f4/q d3+a3+e4/q d3+a3+d4/q | c3+g3+e4/q c3+g3+g4/q c3+g3+f4/q c3+g3+e4/q | bb2+f3+d4/q bb2+f3+f4/q bb2+f3+e4/q bb2+f3+d4/q | a2+e3+c#4/b a2+e3+e4/b',
          legenda: 'Textura típica de prelúdio barroco: baixo e voz interna sustentados, melodia caminhando acima. Exercício original para o curso, no estilo.'
        },
        { t: 'h', x: 'Articulação: o arco que não existe' },
        { t: 'p', x: 'No violino, o arco separa naturalmente as notas. No violão, se nada for feito, tudo soa igualmente destacado. A solução é escolher: quais notas ficam ligadas, quais são separadas, e onde a frase respira. Essa escolha é a parte interpretativa mais importante na execução de Bach.' },
        {
          t: 'comparar',
          a: { titulo: 'Articulação em Bach', itens: ['Notas repetidas tendem a ser separadas', 'Graus conjuntos tendem a ser ligados', 'Saltos grandes pedem separação', 'A nota longa no fim da frase respira depois'] },
          b: { titulo: 'O que evitar', itens: ['Legato uniforme do começo ao fim', 'Rubato romântico', 'Vibrato contínuo', 'Crescendos longos de concerto romântico'] }
        },
        { t: 'h', x: 'Ornamentação barroca' },
        {
          t: 'lista', itens: [
            '*Trinado (tr)*: começa na nota superior, no tempo. No violão, costuma ser executado com ligados.',
            '*Mordente*: nota principal, nota inferior, nota principal — rapidíssimo.',
            '*Apogiatura*: a nota de ornamento recebe parte do valor da principal e cai no tempo.',
            '*Regra geral*: no barroco, o ornamento é *dentro* do tempo, não antes dele.',
            'Numa edição moderna, os ornamentos realizados em notas pequenas foram escolhidos pelo editor — você pode discordar.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[2, 3]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'semicolcheia' }, { pos: [[2, 3]], fig: 'semicolcheia' }, { pos: [[2, 1]], fig: 'semicolcheia' }, { pos: [[2, 0]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[1, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'semicolcheia' }, { pos: [[1, 1]], fig: 'semicolcheia' }, { pos: [[1, 0]], fig: 'semicolcheia' }, { pos: [[1, 0]], fig: 'minima' }] }
          ],
          legenda: 'Trinado realizado com ligados: só a primeira nota é atacada pela mão direita; as outras saem da mão esquerda. Comece na nota superior.',
          tocar: true, bpm: 66
        },
        { t: 'h', x: 'Por onde começar' },
        {
          t: 'tabela',
          cab: ['Obra', 'Origem', 'Dificuldade', 'O que ensina'],
          linhas: [
            ['Bourrée (Suíte BWV 996)', 'Alaúde', 'Intermediária', 'Articulação e duas vozes claras'],
            ['Prelúdio (Suíte BWV 999)', 'Alaúde', 'Intermediária', 'Arpejo contínuo e condução harmônica'],
            ['Sarabanda (Suíte BWV 995 ou 1007)', 'Alaúde / violoncelo', 'Intermediária a avançada', 'Sustentação, respiração e ornamentação'],
            ['Giga (BWV 996)', 'Alaúde', 'Avançada', 'Velocidade com clareza polifônica'],
            ['Fuga (BWV 1000)', 'Alaúde / violino', 'Muito avançada', 'Três vozes reais ao mesmo tempo']
          ],
          legenda: 'Todas em domínio público. O caminho usual começa pela Bourrée e pelo Prelúdio BWV 999.'
        },
        {
          t: 'tocar', titulo: 'Confira a textura a três vozes',
          seq: [[4, 0], [3, 2], [2, 3], [1, 2]],
          rotulo: 'Conferir as notas do exercício',
          fim: 'Agora toque as quatro juntas como acorde e sustente o baixo enquanto a melodia se move.',
          x: 'Toque Ré, Lá, Ré e Fá sustenido, uma nota por vez, devagar.'
        },
        {
          t: 'check', chave: 'bach5', titulo: 'Rotina de estudo de Bach',
          itens: [
            'Toquei um trecho só com a voz do baixo, no tempo.',
            'Toquei só a melodia, no mesmo tempo.',
            'Juntei as vozes conferindo a sustentação de cada valor.',
            'Decidi e marquei na partitura quais notas são ligadas e quais são separadas.',
            'Realizei um trinado começando pela nota superior, dentro do tempo.',
            'Toquei o trecho sem vibrato e sem rubato, com pulso estável.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Bach no violão', rodadas: 6,
          perguntas: [
            { texto: 'Bach escreveu para violão?', opcoes: ['Não: tudo o que tocamos é transcrição', 'Sim, várias suítes', 'Sim, apenas a Chaconne', 'Sim, no fim da vida'], correta: 0, explicacao: 'O violão de seis cordas simples surgiu depois.' },
            { texto: 'Um trinado barroco começa:', opcoes: ['Na nota superior e no tempo', 'Na nota principal', 'Antes do tempo', 'Na nota inferior'], correta: 0, explicacao: 'É a convenção da época.' },
            { texto: 'Qual recurso é inadequado em Bach?', opcoes: ['Vibrato contínuo', 'Articulação variada', 'Pulso estável', 'Ligados'], correta: 0, explicacao: 'No barroco o vibrato é ornamento pontual.' },
            { texto: 'Por que se pode acrescentar baixos numa transcrição?', opcoes: ['Porque o violão sustenta o que o violino não podia', 'Porque a partitura está errada', 'Porque é mais fácil', 'Porque Bach pedia'], correta: 0, explicacao: 'A harmonia estava implícita; o violão pode realizá-la.' },
            { texto: 'Qual obra costuma ser a porta de entrada em Bach no violão?', opcoes: ['A Bourrée da BWV 996', 'A Chaconne', 'A Fuga BWV 1000', 'A Giga BWV 996'], correta: 0, explicacao: 'Duas vozes claras e extensão curta.' },
            { texto: 'Qual é a disciplina técnica central em Bach?', opcoes: ['Sustentar cada voz pelo valor escrito', 'Tocar rápido', 'Usar rasgueado', 'Fazer harmônicos'], correta: 0, explicacao: 'Sem isso, a polifonia desaparece.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar tudo ligado, do começo ao fim.', certo: 'Decida a articulação de cada grupo de notas.' },
            { erro: 'Usar rubato romântico.', certo: 'O pulso barroco é estável; a expressão vem da articulação.' },
            { erro: 'Aceitar sem questionar os dedilhados da edição.', certo: 'São escolhas do editor, não de Bach.' },
            { erro: 'Soltar o baixo para alcançar a melodia.', certo: 'Reveja a digitação: quase sempre existe uma que permite sustentar.' },
            { erro: 'Começar por uma peça grande demais.', certo: 'Bourrée e Prelúdio BWV 999 primeiro.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Todo Bach no violão é transcrição, e transcrever envolve decisões.',
            'Sustentar as vozes pelo valor escrito é a exigência central.',
            'A articulação substitui o arco: escolha o que liga e o que separa.',
            'Ornamentos barrocos caem dentro do tempo e começam na nota superior.',
            'Comece pela Bourrée BWV 996 e pelo Prelúdio BWV 999.'
          ]
        }
      ],
      quiz: [
        { texto: 'Para quais instrumentos Bach escreveu as obras que tocamos no violão?', opcoes: ['Alaúde, violino e violoncelo', 'Violão e alaúde', 'Cravo apenas', 'Órgão apenas'], correta: 0, explicacao: 'As transcrições vêm sobretudo dessas três fontes.' },
        { texto: 'Qual é a prioridade técnica ao tocar Bach?', opcoes: ['Sustentação das vozes', 'Velocidade', 'Vibrato', 'Rasgueado'], correta: 0, explicacao: 'A polifonia depende da duração correta.' },
        { texto: 'No barroco, o ornamento cai:', opcoes: ['Dentro do tempo', 'Antes do tempo', 'Depois do tempo', 'Fora do compasso'], correta: 0, explicacao: 'Diferente da prática romântica.' },
        { texto: 'Por que escolher o tom da transcrição com cuidado?', opcoes: ['Para aproveitar as cordas soltas e a ressonância', 'Para facilitar a leitura', 'Para ficar mais agudo', 'Por exigência do editor'], correta: 0, explicacao: 'Ré menor e Mi menor costumam funcionar melhor.' },
        { texto: 'O que substitui o arco do violino na execução violonística de Bach?', opcoes: ['A articulação escolhida pelo intérprete', 'O vibrato', 'A pestana', 'O rasgueado'], correta: 0, explicacao: 'Ligar e separar é decisão de interpretação.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar oito compassos de textura barroca com todas as vozes sustentadas pelo valor escrito.',
          'Executar um trinado com ligados, começando na nota superior e dentro do tempo.',
          'Apresentar um trecho com articulação marcada na partitura e executada como marcada.',
          'Tocar a Bourrée BWV 996 (ou trecho equivalente) com as duas vozes audíveis.'
        ],
        criterio: 'Você domina quando as vozes permanecem audíveis do começo ao fim do trecho e a articulação é uma escolha consciente, não um acaso.'
      }
    },

    {
      id: 'n5.3.2',
      titulo: 'Sor e Giuliani no nível avançado',
      resumo: 'Os dois pilares clássicos revisitados: elegância de escrita e brilho de concerto.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n4.3.1', 'n4.3.2'],
      status: 'validado',
      cobre: ['Fernando Sor', 'Mauro Giuliani'],
      objetivo: 'Distinguir os estilos de Sor e Giuliani e escolher o repertório avançado adequado de cada um.',
      blocos: [
        { t: 'p', x: 'Sor (1778–1839) e Giuliani (1781–1829) foram contemporâneos e rivais amistosos. Os dois deram ao violão um lugar nas salas de concerto da Europa, mas por caminhos opostos: Sor escrevia como um compositor de música de câmara que por acaso tocava violão; Giuliani, como um virtuose que compunha para brilhar.' },
        {
          t: 'comparar',
          a: { titulo: 'Fernando Sor', itens: ['Escrita polifônica e condução de vozes impecável', 'Melodia e acompanhamento sempre bem distinguidos', 'Harmonia refinada, com modulações elegantes', 'Dificuldade escondida: parece simples e não é', 'Obras-chave: Estudos Op. 6, 29, 31 e 35; Variações sobre um tema de Mozart Op. 9; Fantasia Op. 7'] },
          b: { titulo: 'Mauro Giuliani', itens: ['Escrita idiomática e brilhante', 'Arpejos, escalas rápidas e efeitos de orquestra', 'Harmonia mais simples, melodia cantabile de ópera italiana', 'Dificuldade exposta: parece difícil e é', 'Obras-chave: 120 arpejos Op. 1; Estudos Op. 48 e 111; Grande Ouverture Op. 61; Rossinianas'] }
        },
        { t: 'h', x: 'Sor: o que exige de você' },
        { t: 'p', x: 'Em Sor, o desafio é musical antes de ser técnico. Uma melodia de quatro notas precisa cantar acima de um acompanhamento que não pode atrapalhar, e as vozes internas têm vida própria. Quem toca Sor "só com as notas certas" soa pobre; a peça exige equilíbrio de planos e fraseado.' },
        {
          t: 'pauta', bpm: 66, numerar: true, quebrar: 4,
          txt: 'c3+e4/q c3+g4/q c3+e4/q c3+c5/q | g2+d4/q g2+b4/q g2+d4/q g2+g4/q | a2+c4/q a2+e4/q a2+c4/q a2+a4/q | e3+b3/b e3+e4/b',
          legenda: 'Textura clássica no estilo de Sor (exercício original): baixo no tempo forte, melodia nas notas agudas, acompanhamento no meio. Exercite destacando apenas a voz superior.'
        },
        { t: 'h', x: 'Giuliani: o que exige de você' },
        { t: 'p', x: 'Em Giuliani, o desafio é físico e de resistência. Escalas de duas e três oitavas em velocidade, arpejos longos sem queda de qualidade, saltos de posição em andamento rápido e finais que exigem fôlego. A melodia é mais simples porque a mão está ocupada.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }] },
            { notas: [{ pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'semicolcheia', dedo: 'i' }] }
          ],
          legenda: 'Padrão no estilo dos 120 arpejos do Op. 1 (obra em domínio público): o mesmo desenho de mão direita sobre harmonias que mudam. Meta: 120 BPM com quatro notas por clique.',
          tocar: true, bpm: 88
        },
        { t: 'h', x: 'Roteiro de repertório avançado' },
        {
          t: 'tabela',
          cab: ['Obra', 'Autor', 'O que desenvolve'],
          linhas: [
            ['Estudo Op. 6 nº 11 (Lento)', 'Sor', 'Condução de vozes e legato'],
            ['Estudo Op. 29 nº 13', 'Sor', 'Polifonia a três vozes'],
            ['Variações sobre um tema de Mozart Op. 9', 'Sor', 'Forma, variação e virtuosismo controlado'],
            ['Estudo Op. 48 nº 5', 'Giuliani', 'Escalas rápidas com igualdade'],
            ['Grande Ouverture Op. 61', 'Giuliani', 'Resistência, contraste e efeitos orquestrais'],
            ['Rossiniana nº 1 Op. 119', 'Giuliani', 'Repertório de concerto completo']
          ],
          legenda: 'Todas em domínio público, disponíveis em edições livres.'
        },
        {
          t: 'tocar', titulo: 'Confira o padrão de arpejo',
          seq: [[5, 0], [3, 2], [2, 1], [1, 0]],
          rotulo: 'Conferir as notas do arpejo',
          fim: 'Agora toque o padrão completo no andamento do exercício.',
          x: 'Toque Lá, Lá, Dó e Mi — as quatro notas do primeiro grupo — uma por vez.'
        },
        { t: 'metronomo', titulo: 'Escada do Op. 1', bpm: 72, compasso: '4/4', x: 'Quatro notas por clique. Suba de 4 em 4 BPM, com um minuto perfeito como condição, até 120.' },
        {
          t: 'check', chave: 'sorgiuliani', titulo: 'Compare os dois estilos',
          itens: [
            'Toquei um trecho de Sor destacando apenas a melodia.',
            'Toquei o mesmo trecho destacando o baixo e percebi a diferença.',
            'Toquei um padrão de arpejo do Op. 1 de Giuliani a 100 BPM.',
            'Ouvi uma gravação de cada compositor e anotei três diferenças.',
            'Escolhi uma obra de cada um para estudar nos próximos meses.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Sor e Giuliani', rodadas: 5,
          perguntas: [
            { texto: 'Qual dos dois escreve com polifonia mais refinada?', opcoes: ['Sor', 'Giuliani', 'Os dois igualmente', 'Nenhum'], correta: 0, explicacao: 'Sor escrevia como compositor de música de câmara.' },
            { texto: 'A que corresponde o Op. 1 de Giuliani?', opcoes: ['120 estudos de arpejo para a mão direita', 'Uma sonata', 'Um concerto', 'Um método de leitura'], correta: 0, explicacao: 'É o manual de mão direita mais usado até hoje.' },
            { texto: 'A dificuldade em Sor costuma ser:', opcoes: ['Escondida: parece simples e exige equilíbrio de planos', 'Exposta em escalas rápidas', 'Rítmica', 'De leitura'], correta: 0, explicacao: 'O desafio é musical antes de ser físico.' },
            { texto: 'A influência melódica de Giuliani vem de:', opcoes: ['A ópera italiana', 'O coral luterano', 'A música folclórica espanhola', 'O jazz'], correta: 0, explicacao: 'Ele viveu em Viena e Roma, no auge do belcanto.' },
            { texto: 'Qual obra de Sor é um conjunto de variações sobre tema de ópera?', opcoes: ['Op. 9, sobre tema de Mozart', 'Op. 6', 'Op. 31', 'Op. 60'], correta: 0, explicacao: 'Sobre um tema de A Flauta Mágica.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar Sor sem destacar a melodia.', certo: 'Sem planos sonoros, a escrita perde o sentido.' },
            { erro: 'Tocar Giuliani devagar e sem brilho.', certo: 'A escrita dele pede energia e projeção.' },
            { erro: 'Usar rubato romântico nos dois.', certo: 'São compositores clássicos: o pulso é estável.' },
            { erro: 'Começar pelas obras de concerto.', certo: 'Estudos primeiro: Op. 6 e Op. 29 em Sor, Op. 1 e Op. 48 em Giuliani.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Sor: polifonia, elegância e dificuldade escondida.',
            'Giuliani: virtuosismo, brilho e melodia operística.',
            'O Op. 1 de Giuliani é o manual de mão direita de referência.',
            'Os dois são clássicos: pulso estável, dinâmica em degraus, pouco vibrato.',
            'O caminho começa pelos estudos e termina nas obras de concerto.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em que período viveram Sor e Giuliani?', opcoes: ['Clássico, entre os séculos XVIII e XIX', 'Barroco', 'Romântico tardio', 'Século XX'], correta: 0, explicacao: 'Foram contemporâneos de Beethoven.' },
        { texto: 'O Op. 1 de Giuliani trata de:', opcoes: ['Arpejos de mão direita', 'Leitura de partitura', 'Escalas', 'Pestanas'], correta: 0, explicacao: 'São 120 fórmulas sobre a mesma harmonia.' },
        { texto: 'Qual é a marca da escrita de Sor?', opcoes: ['Condução de vozes refinada', 'Velocidade extrema', 'Rasgueados', 'Harmônicos'], correta: 0, explicacao: 'Escrita quase de quarteto.' },
        { texto: 'As Rossinianas de Giuliani são baseadas em:', opcoes: ['Temas de óperas de Rossini', 'Danças folclóricas', 'Corais de Bach', 'Temas próprios'], correta: 0, explicacao: 'São fantasias sobre temas operísticos.' },
        { texto: 'Que recurso interpretativo não combina com esses dois compositores?', opcoes: ['Rubato romântico constante', 'Pulso estável', 'Articulação variada', 'Dinâmica em degraus'], correta: 0, explicacao: 'São compositores do classicismo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar um trecho no estilo de Sor com a melodia nitidamente destacada.',
          'Tocar um padrão de arpejo do Op. 1 a 100 BPM com quatro notas por clique.',
          'Apresentar um estudo completo de Sor memorizado.',
          'Explicar, em três frases, a diferença de escrita entre os dois compositores.'
        ],
        criterio: 'Você domina quando toca um estudo de cada compositor com a abordagem correspondente — equilíbrio de vozes em Sor, brilho e regularidade em Giuliani.'
      }
    },

    {
      id: 'n5.3.3',
      titulo: 'Francisco Tárrega',
      resumo: 'O compositor que definiu o som do violão moderno e a técnica que o sustenta.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n4.3.4', 'n5.2.3'],
      status: 'validado',
      cobre: ['Francisco Tárrega'],
      objetivo: 'Interpretar Tárrega com o rubato, o timbre e o legato que a escrita dele exige.',
      blocos: [
        { t: 'p', x: 'Tárrega (1852–1909) é o ponto de virada do violão. Ele organizou a técnica moderna, criou um repertório próprio e formou a escola que, por meio de seus alunos, chegou a Segovia. Quem estuda violão clássico hoje usa, sem saber, as soluções que ele estabeleceu.' },
        { t: 'h', x: 'O que Tárrega estabeleceu' },
        {
          t: 'lista', itens: [
            'A posição de mão direita com as unhas em ângulo e o pulso levemente arqueado.',
            'O apoyando como recurso de melodia, e não como regra geral.',
            'A pestana como técnica cotidiana, não como exceção.',
            'O uso sistemático de harmônicos, portamento e mudanças de timbre.',
            'As transcrições que criaram o repertório: Albéniz, Granados, Chopin, Bach.'
          ]
        },
        { t: 'h', x: 'As obras e o que cada uma ensina' },
        {
          t: 'tabela',
          cab: ['Obra', 'Dificuldade', 'O que desenvolve'],
          linhas: [
            ['Lágrima', 'Intermediária', 'Legato, melodia cantabile, forma ternária'],
            ['Adelita', 'Intermediária', 'Rubato, ornamentação, contraste maior/menor'],
            ['Marieta', 'Intermediária', 'Fraseado de valsa e condução de vozes'],
            ['Estudo em Mi maior (Pavana)', 'Intermediária', 'Pestana sustentada e polifonia'],
            ['Capricho Árabe', 'Avançada', 'Portamento, timbre e grande arco expressivo'],
            ['Recuerdos de la Alhambra', 'Avançada', 'Tremolo contínuo com melodia'],
            ['Gran Vals', 'Avançada', 'Virtuosismo leve e fraseado de salão']
          ],
          legenda: 'Todas em domínio público. Lágrima e Adelita são o par mais comum de entrada no repertório de Tárrega.'
        },
        { t: 'h', x: 'Como se toca Tárrega' },
        {
          t: 'passos', itens: [
            'Encontre a melodia e marque-a com caneta na partitura. Tudo o mais é acompanhamento.',
            'Toque só a melodia, cantando junto, até ela respirar naturalmente.',
            'Acrescente o baixo, muito mais suave.',
            'Acrescente as vozes do meio, mais suaves ainda.',
            'Só então pense em rubato: ele é a respiração da melodia, não um atraso genérico.'
          ]
        },
        {
          t: 'pauta', bpm: 58, numerar: true, quebrar: 4,
          txt: 'a3+e4/q. a3+f#4/c a3+e4/q a3+c#4/q | d3+d4/q. d3+e4/c d3+f#4/q d3+a4/q | e3+g#4/q. e3+a4/c e3+b4/q e3+g#4/q | a3+a4/b a3+e4/b',
          legenda: 'Melodia cantabile sobre baixo sustentado, no estilo das peças de salão de Tárrega (exercício original). A melodia são as notas agudas; o baixo é pedal.'
        },
        {
          t: 'dica', titulo: 'Sobre o rubato: ',
          x: 'rubato quer dizer "roubado". O tempo que você alonga numa nota precisa ser devolvido logo adiante. Se não for devolvido, não é rubato — é andamento irregular.'
        },
        { t: 'h', x: 'Timbre e portamento' },
        { t: 'p', x: 'Tárrega usa a mudança de timbre como dramaturgia: uma frase tocada perto da boca e repetida perto do cavalete conta uma história. O portamento, por sua vez, é a assinatura expressiva da escola espanhola — deslizar de uma posição a outra deixando o caminho discretamente audível.' },
        {
          t: 'tocar', titulo: 'Confira a melodia do exercício',
          seq: [[1, 0], [1, 2], [1, 0], [2, 2]],
          rotulo: 'Conferir as notas da melodia',
          fim: 'Agora toque a mesma frase duas vezes: a primeira perto da boca, a segunda perto do cavalete.',
          x: 'Toque Mi, Fá sustenido, Mi e Dó sustenido, uma nota por vez.'
        },
        {
          t: 'check', chave: 'tarrega5', titulo: 'Estudo de uma peça de Tárrega',
          itens: [
            'Marquei a melodia na partitura com caneta.',
            'Toquei só a melodia, cantando junto.',
            'Acrescentei o baixo em volume claramente menor.',
            'Apliquei rubato devolvendo o tempo roubado.',
            'Toquei uma frase repetida com dois timbres diferentes.',
            'Usei um portamento numa mudança de posição.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Tárrega e sua escola', rodadas: 5,
          perguntas: [
            { texto: 'Qual peça de Tárrega é o exemplo clássico de tremolo?', opcoes: ['Recuerdos de la Alhambra', 'Lágrima', 'Adelita', 'Capricho Árabe'], correta: 0, explicacao: 'Tremolo contínuo do início ao fim.' },
            { texto: 'O que significa rubato?', opcoes: ['Tempo roubado que deve ser devolvido', 'Tocar mais devagar', 'Tocar sem metrônomo', 'Acelerar no fim'], correta: 0, explicacao: 'O equilíbrio geral do pulso se mantém.' },
            { texto: 'Qual é o par de peças mais comum para entrar no repertório de Tárrega?', opcoes: ['Lágrima e Adelita', 'Capricho Árabe e Gran Vals', 'Recuerdos e Gran Vals', 'Pavana e Recuerdos'], correta: 0, explicacao: 'São curtas e de dificuldade intermediária.' },
            { texto: 'Tárrega é importante também por:', opcoes: ['Suas transcrições, que criaram o repertório moderno', 'Ter inventado o violão', 'Ter escrito concertos', 'Ter criado o rasgueado'], correta: 0, explicacao: 'Albéniz, Granados, Chopin e Bach chegaram ao violão por ele.' },
            { texto: 'Qual é o primeiro passo ao estudar uma peça de Tárrega?', opcoes: ['Identificar e marcar a melodia', 'Decorar o baixo', 'Definir o andamento', 'Escolher a digitação do acompanhamento'], correta: 0, explicacao: 'Tudo o mais é acompanhamento.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar melodia e acompanhamento com o mesmo volume.', certo: 'Melodia em primeiro plano, sempre.' },
            { erro: 'Fazer rubato sem devolver o tempo.', certo: 'Rubato é empréstimo, não desaceleração.' },
            { erro: 'Usar um timbre só na peça inteira.', certo: 'A mudança de cor é parte da linguagem.' },
            { erro: 'Começar por Recuerdos de la Alhambra.', certo: 'O tremolo contínuo exige meses de preparação específica.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tárrega organizou a técnica moderna do violão e formou a escola espanhola.',
            'Melodia em primeiro plano é a regra básica em toda a obra dele.',
            'Rubato é tempo roubado e devolvido.',
            'Timbre e portamento são recursos expressivos centrais.',
            'Lágrima e Adelita primeiro; Recuerdos e Capricho Árabe depois.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em que anos viveu Tárrega?', opcoes: ['1852–1909', '1778–1839', '1685–1750', '1887–1959'], correta: 0, explicacao: 'Segunda metade do século XIX.' },
        { texto: 'Qual técnica Tárrega estabeleceu como recurso de melodia?', opcoes: ['Apoyando', 'Rasgueado', 'Tambora', 'Golpe'], correta: 0, explicacao: 'Para destacar a voz superior.' },
        { texto: 'Capricho Árabe exige principalmente:', opcoes: ['Portamento, timbre e grande arco expressivo', 'Tremolo contínuo', 'Rasgueado', 'Leitura à primeira vista'], correta: 0, explicacao: 'É uma peça de dramaturgia sonora.' },
        { texto: 'O que é portamento na escola de Tárrega?', opcoes: ['Deslizar entre posições deixando o caminho discretamente audível', 'Um tipo de ligado', 'Um ornamento barroco', 'Um ataque percussivo'], correta: 0, explicacao: 'É a assinatura expressiva da escola espanhola.' },
        { texto: 'Por que Tárrega é central para o repertório moderno?', opcoes: ['Suas transcrições e sua escola formaram a tradição atual', 'Ele inventou as cordas de náilon', 'Ele construiu violões', 'Ele escreveu o primeiro método'], correta: 0, explicacao: 'A linhagem chega até Segovia por seus alunos.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar uma peça de Tárrega com a melodia claramente destacada do acompanhamento.',
          'Aplicar rubato numa frase e devolver o tempo dentro do mesmo período.',
          'Repetir uma frase com dois timbres distintos.',
          'Executar um portamento numa mudança de posição, sem exagero.'
        ],
        criterio: 'Você domina quando a melodia canta acima de tudo e o rubato não altera o andamento geral da peça.'
      }
    },

    {
      id: 'n5.3.4',
      titulo: 'Heitor Villa-Lobos',
      resumo: 'O violão brasileiro no concerto: escrita idiomática, formas abertas e harmonia própria.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia'],
      prereq: ['n5.1.9'],
      status: 'validado',
      cobre: ['Heitor Villa-Lobos'],
      objetivo: 'Compreender a linguagem violonística de Villa-Lobos e preparar tecnicamente os recursos que ela exige.',
      blocos: [
        { t: 'p', x: 'Villa-Lobos (1887–1959) é o compositor brasileiro mais importante para o violão, e um dos mais importantes do instrumento em qualquer país. Ele tocava violão desde menino, conviveu com chorões no Rio, e escreveu para o instrumento de dentro dele — não para um violão imaginado no piano.' },
        {
          t: 'aviso', titulo: 'Direitos autorais: ',
          x: 'as obras de Villa-Lobos ainda estão protegidas no Brasil (a proteção vai até 70 anos após a morte do autor). Por isso esta aula estuda a *linguagem* e prepara a *técnica* com exercícios originais, sem reproduzir partituras. Para tocar as obras, use edições licenciadas — a edição Max Eschig é a referência.'
        },
        { t: 'h', x: 'O catálogo para violão' },
        {
          t: 'tabela',
          cab: ['Conjunto', 'Ano', 'Caráter'],
          linhas: [
            ['Suíte Popular Brasileira', '1908–1923', 'Cinco peças em formas de salão: mazurca, schottish, valsa, gavota e chorinho'],
            ['Doze Estudos', '1929', 'O conjunto de estudos mais importante do século XX para violão'],
            ['Cinco Prelúdios', '1940', 'Peças de concerto, líricas e acessíveis; o nº 1 é o mais tocado'],
            ['Concerto para violão e pequena orquestra', '1951', 'Escrito para Segovia; inclui uma cadência famosa'],
            ['Choros nº 1', '1920', 'Homenagem ao choro carioca, dedicado a Ernesto Nazareth']
          ]
        },
        { t: 'h', x: 'A linguagem: cinco marcas' },
        {
          t: 'lista', itens: [
            '*Formas fixas deslocadas*: a mão esquerda mantém a mesma forma e desliza pelo braço, produzindo harmonias inesperadas. É o recurso mais característico dele.',
            '*Cordas soltas como pedal*: enquanto a forma se desloca, as cordas soltas continuam soando e criam atrito e cor.',
            '*Arpejos amplos*: abrangendo as seis cordas, muitas vezes com saltos grandes na mão direita.',
            '*Ritmo brasileiro*: síncope de choro, acentos deslocados, levada de modinha.',
            '*Escrita idiomática extrema*: muitas passagens são difíceis de ler e fáceis de tocar, porque nasceram da mão no braço.'
          ]
        },
        { t: 'h', x: 'Exercício original: forma fixa deslocada' },
        { t: 'p', x: 'A técnica central de Villa-Lobos pode ser preparada com um exercício simples: mantenha uma forma e desloque-a pelo braço, deixando as cordas soltas soarem. Ouça as harmonias que aparecem.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0], [4, 2], [3, 3], [1, 0]], fig: 'minima' }, { pos: [[6, 0], [4, 4], [3, 5], [1, 0]], fig: 'minima' }] },
            { notas: [{ pos: [[6, 0], [4, 6], [3, 7], [1, 0]], fig: 'minima' }, { pos: [[6, 0], [4, 8], [3, 9], [1, 0]], fig: 'minima' }] },
            { notas: [{ pos: [[6, 0], [4, 9], [3, 10], [1, 0]], fig: 'semibreve' }] }
          ],
          legenda: 'Exercício original no estilo: a forma dos dedos 1 e 2 sobe pelo braço enquanto a 6ª e a 1ª cordas ficam soltas, soando Mi em duas oitavas. Cada deslocamento gera uma harmonia nova.',
          tocar: true, bpm: 52
        },
        {
          t: 'braco', casas: 12,
          notas: [
            { corda: 6, casa: 0, classe: 'tonica', rotulo: 'solta' },
            { corda: 4, casa: 2, rotulo: '1' }, { corda: 3, casa: 3, rotulo: '2' },
            { corda: 1, casa: 0, classe: 'tonica', rotulo: 'solta' }
          ],
          legenda: 'A forma inicial. As duas cordas Mi ficam soltas e funcionam como pedal; os dedos 1 e 2 mantêm a distância e sobem juntos.'
        },
        { t: 'h', x: 'Preparação técnica para os Doze Estudos' },
        {
          t: 'tabela',
          cab: ['Estudo', 'Recurso dominante', 'Como preparar'],
          linhas: [
            ['nº 1', 'Arpejo contínuo de seis cordas com a mesma forma de mão direita', 'Op. 1 de Giuliani a 120 BPM'],
            ['nº 2', 'Arpejo rápido com mudanças de posição', 'Escalas em posições e saltos preparados'],
            ['nº 5', 'Melodia cantabile com acompanhamento', 'Polifonia e planos sonoros'],
            ['nº 7', 'Escalas em velocidade', 'Escalas em três oitavas com metrônomo'],
            ['nº 8', 'Ligados e cromatismo', 'Ligados em velocidade, mão esquerda independente'],
            ['nº 11', 'Textura livre, grandes extensões', 'Aberturas de mão e pestanas longas']
          ],
          legenda: 'A preparação técnica pode ser feita integralmente com material em domínio público antes de chegar aos estudos.'
        },
        {
          t: 'tocar', titulo: 'Confira as notas da forma deslocada',
          seq: [[4, 2], [3, 3], [4, 4], [3, 5]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora toque o exercício completo deixando as cordas Mi soltas soarem junto.',
          x: 'Toque Mi, Si bemol, Fá sustenido e Dó — as notas da forma nas duas primeiras posições.'
        },
        {
          t: 'check', chave: 'villa', titulo: 'Preparação para Villa-Lobos',
          itens: [
            'Toquei o exercício de forma fixa deslocada ao longo de todo o braço.',
            'Ouvi e descrevi as harmonias que apareceram.',
            'Toquei um arpejo de seis cordas com a mesma forma de mão direita.',
            'Ouvi uma gravação dos Cinco Prelúdios e identifiquei formas deslocadas.',
            'Escolhi uma edição licenciada da obra que quero estudar.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Villa-Lobos e o violão', rodadas: 5,
          perguntas: [
            { texto: 'Qual é o recurso mais característico da escrita de Villa-Lobos para violão?', opcoes: ['Forma fixa da mão esquerda deslocada pelo braço', 'Rasgueado flamenco', 'Tremolo', 'Contraponto a quatro vozes'], correta: 0, explicacao: 'A forma se mantém e a harmonia muda.' },
            { texto: 'O que as cordas soltas fazem nessa escrita?', opcoes: ['Funcionam como pedal, criando atrito e cor', 'Marcam o tempo', 'Substituem o baixo', 'Servem de afinação'], correta: 0, explicacao: 'É o que dá o som inconfundível.' },
            { texto: 'Para quem foi escrito o Concerto para violão de Villa-Lobos?', opcoes: ['Andrés Segovia', 'Francisco Tárrega', 'Julian Bream', 'Agustín Barrios'], correta: 0, explicacao: 'Composto em 1951, com cadência acrescentada depois.' },
            { texto: 'Quantos estudos Villa-Lobos escreveu para violão?', opcoes: ['Doze', 'Cinco', 'Vinte e quatro', 'Seis'], correta: 0, explicacao: 'Os Doze Estudos de 1929.' },
            { texto: 'Por que esta aula não traz partituras de Villa-Lobos?', opcoes: ['Porque as obras ainda estão protegidas por direito autoral', 'Porque não existem edições', 'Porque são muito difíceis', 'Porque são improvisadas'], correta: 0, explicacao: 'A proteção vai até 70 anos após a morte do autor.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar Villa-Lobos com sonoridade europeia e uniforme.', certo: 'O atrito das cordas soltas é parte do som.' },
            { erro: 'Ignorar a síncope brasileira.', certo: 'O ritmo de choro e modinha é estrutural, não decorativo.' },
            { erro: 'Começar pelos Doze Estudos.', certo: 'A Suíte Popular Brasileira e o Prelúdio nº 1 vêm antes.' },
            { erro: 'Usar partituras de origem duvidosa.', certo: 'Use edições licenciadas; as obras estão protegidas.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Villa-Lobos escreveu de dentro do instrumento, como violonista.',
            'Forma fixa deslocada com cordas soltas é a marca central.',
            'Os Doze Estudos são o conjunto mais importante do século XX.',
            'A técnica necessária pode ser preparada com material em domínio público.',
            'As obras ainda estão protegidas: use edições licenciadas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em que anos viveu Villa-Lobos?', opcoes: ['1887–1959', '1852–1909', '1778–1839', '1885–1944'], correta: 0, explicacao: 'Ele é o principal compositor brasileiro para violão.' },
        { texto: 'A Suíte Popular Brasileira é composta de:', opcoes: ['Cinco peças em formas de salão', 'Doze estudos', 'Três prelúdios', 'Um concerto'], correta: 0, explicacao: 'Mazurca, schottish, valsa, gavota e chorinho.' },
        { texto: 'O que caracteriza a harmonia resultante da forma deslocada?', opcoes: ['Acordes inesperados gerados pelo atrito com as cordas soltas', 'Harmonia modal pura', 'Acordes de sétima dominante', 'Ausência de harmonia'], correta: 0, explicacao: 'A forma é constante; o contexto muda.' },
        { texto: 'Qual prelúdio de Villa-Lobos é o mais tocado?', opcoes: ['O nº 1', 'O nº 3', 'O nº 5', 'O nº 4'], correta: 0, explicacao: 'Melodia cantabile nos graves, de grande apelo.' },
        { texto: 'Como esta aula aborda as obras protegidas?', opcoes: ['Estudando linguagem e técnica com exercícios originais', 'Reproduzindo trechos curtos', 'Ignorando o compositor', 'Usando transcrições livres'], correta: 0, explicacao: 'Sem reprodução de partitura protegida.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar o exercício de forma fixa deslocada em cinco posições, com as cordas soltas soando.',
          'Descrever de ouvido duas das harmonias geradas pelo deslocamento.',
          'Tocar um arpejo de seis cordas com forma constante de mão direita, a 100 BPM.',
          'Identificar, numa gravação dos Prelúdios, uma passagem de forma deslocada.'
        ],
        criterio: 'Você domina quando consegue manter a forma da mão esquerda estável ao longo de todo o braço, com as cordas soltas ressoando limpas em cada posição.'
      }
    },

    {
      id: 'n5.3.5',
      titulo: 'Agustín Barrios Mangoré',
      resumo: 'O violonista-compositor paraguaio: romantismo tardio, folclore e virtuosismo.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n5.2.3', 'n5.3.3'],
      status: 'validado',
      cobre: ['Agustín Barrios Mangoré'],
      objetivo: 'Conhecer a obra de Barrios e preparar os recursos técnicos que ela exige — tremolo, polifonia e grandes extensões.',
      blocos: [
        { t: 'p', x: 'Barrios (1885–1944) foi o primeiro grande violonista-compositor das Américas e o primeiro a gravar discos de violão clássico. Escreveu mais de trezentas peças reunindo três mundos: o romantismo europeu, o barroco de Bach e a música folclórica paraguaia e guarani. Sua obra está em domínio público.' },
        { t: 'h', x: 'Três famílias de obras' },
        {
          t: 'tabela',
          cab: ['Família', 'Exemplos', 'Caráter'],
          linhas: [
            ['Religiosa e lírica', 'Una limosna por el amor de Dios (La Última Canción), Julia Florida', 'Tremolo, melodia cantabile, grande arco expressivo'],
            ['Folclórica americana', 'Danza Paraguaya, Aire de Zamba, Maxixe', 'Ritmo de dança, síncope, caráter popular'],
            ['Neobarroca e de concerto', 'La Catedral, Vals Op. 8 nº 3, Estudio de Concierto', 'Polifonia, arpejo contínuo, virtuosismo']
          ]
        },
        { t: 'h', x: 'La Catedral: a obra-síntese' },
        { t: 'p', x: 'Três movimentos. O Preludio (Saudade) é lírico e livre; o Andante religioso imita um coral de órgão com acordes sustentados; o Allegro solemne é um arpejo contínuo de seis cordas, exigente e brilhante. Juntos, resumem tudo o que Barrios sabia fazer.' },
        {
          t: 'pauta', bpm: 58, numerar: true, quebrar: 4,
          txt: 'b2+d4+f#4/b b2+e4+g4/b | e3+e4+g#4/b e3+d4+b4/b | a2+c#4+e4/b a2+e4+a4/b | d3+d4+f#4/o',
          legenda: 'Textura de coral no estilo do Andante religioso (exercício original): acordes sustentados, vozes caminhando por grau, pouca movimentação. Mantenha cada nota pelo valor inteiro.'
        },
        { t: 'h', x: 'O que a obra exige tecnicamente' },
        {
          t: 'lista', itens: [
            '*Tremolo de nível avançado*: Una limosna é, com Recuerdos, o teste máximo dessa técnica.',
            '*Arpejo contínuo de seis cordas* sem queda de qualidade por páginas inteiras.',
            '*Extensões grandes de mão esquerda*: Barrios tinha mãos grandes e escreveu para elas. Algumas passagens pedem adaptação honesta.',
            '*Polifonia a três e quatro vozes* com sustentação rigorosa.',
            '*Rubato romântico* com retorno ao pulso — a expressividade é central, mas o andamento geral se mantém.'
          ]
        },
        {
          t: 'dica', titulo: 'Sobre adaptações: ',
          x: 'se uma extensão é fisicamente impossível para a sua mão, adaptar é legítimo — arpejar o acorde, omitir uma nota dobrada ou mudar a oitava de uma voz interna. Forçar a mão produz lesão, não música.'
        },
        { t: 'h', x: 'Roteiro de estudo' },
        {
          t: 'tabela',
          cab: ['Ordem', 'Obra', 'Por quê'],
          linhas: [
            ['1', 'Vals Op. 8 nº 3 (primeira seção)', 'Fraseado e condução, dificuldade moderada'],
            ['2', 'Danza Paraguaya', 'Ritmo e articulação; popular e gratificante'],
            ['3', 'Julia Florida (Barcarola)', 'Melodia cantabile e acompanhamento ondulante'],
            ['4', 'La Catedral — Andante religioso', 'Sustentação e acordes'],
            ['5', 'La Catedral — Allegro solemne', 'Resistência em arpejo'],
            ['6', 'Una limosna por el amor de Dios', 'Tremolo avançado']
          ]
        },
        {
          t: 'tocar', titulo: 'Confira o coral',
          seq: [[5, 2], [2, 3], [1, 2], [6, 0]],
          rotulo: 'Conferir as notas do exercício',
          fim: 'Agora toque os acordes completos, sustentando cada um pelos dois tempos.',
          x: 'Toque Si, Ré, Fá sustenido e Mi, uma nota por vez, devagar.'
        },
        {
          t: 'check', chave: 'barrios', titulo: 'Preparação para Barrios',
          itens: [
            'Toquei o exercício de coral sustentando todas as vozes.',
            'Toquei um arpejo de seis cordas por dois minutos sem perda de qualidade.',
            'Medi a extensão máxima confortável da minha mão esquerda.',
            'Ouvi gravações das três famílias de obras.',
            'Escolhi a primeira peça de Barrios para estudar.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Barrios Mangoré', rodadas: 5,
          perguntas: [
            { texto: 'Quantos movimentos tem La Catedral?', opcoes: ['Três', 'Dois', 'Quatro', 'Um'], correta: 0, explicacao: 'Preludio, Andante religioso e Allegro solemne.' },
            { texto: 'Qual obra de Barrios é o grande teste de tremolo?', opcoes: ['Una limosna por el amor de Dios', 'Danza Paraguaya', 'Julia Florida', 'Vals Op. 8 nº 3'], correta: 0, explicacao: 'Também conhecida como La Última Canción.' },
            { texto: 'Barrios foi pioneiro em:', opcoes: ['Gravar discos de violão clássico', 'Usar cordas de náilon', 'Escrever concertos', 'Inventar o tremolo'], correta: 0, explicacao: 'Suas gravações começaram nos anos 1910.' },
            { texto: 'Diante de uma extensão impossível para a sua mão, o correto é:', opcoes: ['Adaptar a passagem', 'Forçar até alcançar', 'Pular a peça', 'Mudar o violão'], correta: 0, explicacao: 'Adaptação honesta é prática comum e legítima.' },
            { texto: 'Que três influências se reúnem na obra de Barrios?', opcoes: ['Romantismo europeu, Bach e folclore paraguaio', 'Jazz, choro e flamenco', 'Barroco, serialismo e tango', 'Ópera, samba e bossa'], correta: 0, explicacao: 'Essa mistura é a marca dele.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Forçar extensões grandes.', certo: 'Adapte: arpeje o acorde ou omita uma dobra.' },
            { erro: 'Tocar as peças folclóricas sem o ritmo de dança.', certo: 'A síncope é estrutural.' },
            { erro: 'Rubato sem retorno ao pulso.', certo: 'O tempo roubado volta.' },
            { erro: 'Começar por Una limosna.', certo: 'O tremolo exige preparação longa e específica.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Barrios (1885–1944) foi o primeiro grande violonista-compositor das Américas.',
            'Três famílias: lírico-religiosa, folclórica e neobarroca.',
            'La Catedral é a obra-síntese, em três movimentos.',
            'Exige tremolo, arpejo contínuo, polifonia e extensões grandes.',
            'Adaptar passagens impossíveis é legítimo; forçar é lesão.'
          ]
        }
      ],
      quiz: [
        { texto: 'De que país era Barrios?', opcoes: ['Paraguai', 'Argentina', 'Brasil', 'Espanha'], correta: 0, explicacao: 'Adotou o nome artístico Mangoré, de um cacique guarani.' },
        { texto: 'Qual movimento de La Catedral imita um coral de órgão?', opcoes: ['Andante religioso', 'Preludio', 'Allegro solemne', 'Nenhum'], correta: 0, explicacao: 'Acordes sustentados e condução de vozes.' },
        { texto: 'A obra de Barrios está em domínio público?', opcoes: ['Sim', 'Não', 'Apenas as gravações', 'Apenas no Paraguai'], correta: 0, explicacao: 'Ele morreu em 1944.' },
        { texto: 'Qual peça folclórica dele é a mais tocada?', opcoes: ['Danza Paraguaya', 'Julia Florida', 'La Catedral', 'Vals Op. 8 nº 4'], correta: 0, explicacao: 'Ritmo de dança e caráter popular.' },
        { texto: 'Qual é a recomendação diante de uma extensão fisicamente impossível?', opcoes: ['Adaptar a passagem', 'Alongar os dedos diariamente até conseguir', 'Tocar mais devagar', 'Usar capotraste'], correta: 0, explicacao: 'A adaptação preserva a mão e a música.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar o exercício de coral com todas as vozes sustentadas pelo valor inteiro.',
          'Sustentar um arpejo de seis cordas por dois minutos sem perda de igualdade.',
          'Tocar a primeira seção de uma peça de Barrios escolhida por você.',
          'Demonstrar uma adaptação honesta de uma passagem de extensão grande.'
        ],
        criterio: 'Você domina quando mantém a qualidade do arpejo e da sustentação ao longo de uma página inteira, sem tensão e sem forçar extensões.'
      }
    },

    {
      id: 'n5.3.6',
      titulo: 'Albéniz e Granados: a Espanha transcrita',
      resumo: 'Música escrita para piano que virou repertório essencial do violão.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n5.2.4', 'n5.3.3'],
      status: 'validado',
      cobre: ['Isaac Albéniz', 'Enrique Granados'],
      objetivo: 'Entender o processo de transcrição do piano para o violão e os recursos de sotaque espanhol que ela exige.',
      blocos: [
        { t: 'p', x: 'Isaac Albéniz (1860–1909) e Enrique Granados (1867–1916) escreveram para piano, mas pensaram como violonistas: imitaram o rasgueado, o punteado e a cadência flamenca no teclado. Quando Tárrega e seus sucessores trouxeram essa música de volta ao violão, ela soou mais natural do que no instrumento original — e Albéniz chegou a dizer isso.' },
        { t: 'h', x: 'O que se ganha e o que se perde na transcrição' },
        {
          t: 'comparar',
          a: { titulo: 'O violão ganha', itens: ['O rasgueado volta a ser rasgueado de verdade', 'O timbre de corda dedilhada é o som original imaginado', 'Harmônicos e ressonâncias de cordas soltas acrescentam cor', 'A articulação fica mais idiomática'] },
          b: { titulo: 'O violão perde', itens: ['Extensão: trechos precisam mudar de oitava', 'Polifonia densa: vozes precisam ser reduzidas', 'Sustentação longa de acordes', 'Dinâmica extrema de contraste'] }
        },
        { t: 'h', x: 'As obras centrais' },
        {
          t: 'tabela',
          cab: ['Obra', 'Autor', 'Origem', 'O que exige'],
          linhas: [
            ['Asturias (Leyenda)', 'Albéniz', 'Suite Española', 'Alternância polegar/dedos em velocidade; pedal de corda solta'],
            ['Granada', 'Albéniz', 'Suite Española', 'Melodia cantabile e acompanhamento arpejado'],
            ['Sevilla', 'Albéniz', 'Suite Española', 'Ritmo de sevilhana e contraste de seções'],
            ['Córdoba', 'Albéniz', 'Cantos de España', 'Coral inicial e seção lírica com melodia nos graves'],
            ['Danza Española nº 5 (Andaluza)', 'Granados', 'Danzas Españolas', 'Rasgueado, rubato e cor flamenca'],
            ['Danza Española nº 10 (Melancólica)', 'Granados', 'Danzas Españolas', 'Polifonia e fraseado longo']
          ],
          legenda: 'Todas em domínio público. Asturias e a Danza nº 5 são as duas transcrições mais tocadas do repertório.'
        },
        { t: 'h', x: 'Dois recursos de sotaque' },
        { t: 'p', x: 'A música espanhola de concerto imita o flamenco de duas maneiras que o violonista precisa dominar: o *rasgueado*, já estudado, e a *cadência andaluza* — a descida Am – G – F – E, que é a assinatura harmônica do estilo. Ela não é uma cadência tonal comum: termina na dominante e soa resolvida assim mesmo, porque vem do modo frígio.' },
        {
          t: 'acorde', legenda: 'A cadência andaluza em Lá menor: i – VII – VI – V. Toque devagar e ouça como o Mi soa como chegada, e não como tensão.',
          lista: [
            { nome: 'Am (i)', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
            { nome: 'G (VII)', cordas: [3, 2, 0, 0, 0, 3], dedos: [2, 1, null, null, null, 3] },
            { nome: 'F (VI)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 6, ate: 1 } },
            { nome: 'E (V)', cordas: [0, 2, 2, 1, 0, 0], dedos: [null, 2, 3, 1, null, null] }
          ]
        },
        {
          t: 'pauta', bpm: 64, numerar: true,
          txt: 'a2+c4+e4/b g2+b3+d4/b | f2+a3+c4/b e2+g#3+b3/b | e2+g#3+b3/o',
          legenda: 'A mesma cadência escrita: Am – G – F – E. A última nota não pede continuação: no modo frígio, a dominante é o repouso.'
        },
        { t: 'h', x: 'O caso de Asturias' },
        { t: 'p', x: 'A peça mais tocada do repertório espanhol alterna uma nota pedal (Si, na 3ª corda solta ou na 2ª corda) com notas graves atacadas pelo polegar. O desafio é de resistência e de igualdade: a mesma figura repetida por páginas, sem que o pedal perca definição nem o baixo perca peso.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }] },
            { notas: [{ pos: [[6, 3]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[6, 3]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[6, 2]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[6, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 4]], fig: 'semicolcheia', dedo: 'i' }] }
          ],
          legenda: 'O mecanismo de Asturias, em exercício preparatório: polegar alternando com o indicador sobre uma nota repetida. Comece a 60 BPM e chegue a 120.',
          tocar: true, bpm: 80
        },
        { t: 'metronomo', titulo: 'Resistência do pedal', bpm: 60, compasso: '4/4', x: 'Quatro notas por clique, dois minutos sem parar. O baixo mantém o peso; o pedal mantém a definição.' },
        {
          t: 'check', chave: 'espanha', titulo: 'Preparação espanhola',
          itens: [
            'Toquei a cadência andaluza Am – G – F – E e ouvi o Mi como chegada.',
            'Toquei o exercício de polegar alternado por dois minutos sem parar.',
            'Fiz um rasgueado no fim de uma frase da cadência.',
            'Ouvi Asturias e a Danza nº 5 em versão de piano e em versão de violão.',
            'Anotei três diferenças entre as duas versões.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'A Espanha no violão', rodadas: 5,
          perguntas: [
            { texto: 'Para qual instrumento Albéniz escreveu Asturias?', opcoes: ['Piano', 'Violão', 'Órgão', 'Violino'], correta: 0, explicacao: 'Faz parte da Suite Española, para piano.' },
            { texto: 'Qual é a cadência andaluza em Lá menor?', opcoes: ['Am – G – F – E', 'Am – Dm – E – Am', 'Am – F – C – G', 'Am – E – Am – E'], correta: 0, explicacao: 'Descida por grau até a dominante.' },
            { texto: 'Por que o Mi final soa resolvido na cadência andaluza?', opcoes: ['Porque vem do modo frígio, onde a dominante é repouso', 'Porque é o acorde mais grave', 'Porque é maior', 'Porque tem sétima'], correta: 0, explicacao: 'É harmonia modal, não tonal.' },
            { texto: 'O desafio técnico central de Asturias é:', opcoes: ['Resistência e igualdade na alternância polegar/indicador', 'Tremolo', 'Harmônicos', 'Leitura'], correta: 0, explicacao: 'A mesma figura se repete por páginas.' },
            { texto: 'O que o violão ganha nas transcrições de Albéniz?', opcoes: ['O rasgueado e o timbre originalmente imaginados', 'Mais extensão', 'Mais sustentação', 'Mais vozes'], correta: 0, explicacao: 'A música foi pensada imitando o violão.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar a cadência andaluza como se o Mi pedisse resolução.', certo: 'No modo frígio, ela é a chegada.' },
            { erro: 'Acelerar o pedal de Asturias.', certo: 'A igualdade vale mais que a velocidade.' },
            { erro: 'Tocar as danças de Granados sem rubato.', certo: 'O rubato faz parte do sotaque.' },
            { erro: 'Usar a mesma transcrição sem questioná-la.', certo: 'Existem várias versões; compare e escolha a que serve à sua mão.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Albéniz e Granados escreveram para piano imitando o violão.',
            'As transcrições são repertório essencial e estão em domínio público.',
            'A cadência andaluza (i – VII – VI – V) é a assinatura harmônica do estilo.',
            'Em Asturias, o desafio é resistência e igualdade no polegar alternado.',
            'Rasgueado e rubato fazem parte do sotaque espanhol.'
          ]
        }
      ],
      quiz: [
        { texto: 'A Suite Española foi escrita originalmente para:', opcoes: ['Piano', 'Violão', 'Orquestra', 'Voz e piano'], correta: 0, explicacao: 'Albéniz era pianista.' },
        { texto: 'Qual é a sequência da cadência andaluza?', opcoes: ['i – VII – VI – V', 'ii – V – I', 'I – IV – V – I', 'i – iv – V – i'], correta: 0, explicacao: 'Descida por grau até a dominante.' },
        { texto: 'A Danza Española nº 5 é de:', opcoes: ['Granados', 'Albéniz', 'Tárrega', 'Falla'], correta: 0, explicacao: 'Também chamada Andaluza.' },
        { texto: 'O que o violão perde nas transcrições de piano?', opcoes: ['Extensão e densidade polifônica', 'Timbre', 'Ritmo', 'Articulação'], correta: 0, explicacao: 'Trechos precisam mudar de oitava e reduzir vozes.' },
        { texto: 'Qual violonista foi o pioneiro dessas transcrições?', opcoes: ['Tárrega', 'Segovia', 'Barrios', 'Sor'], correta: 0, explicacao: 'Ele criou o repertório moderno do instrumento.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Tocar a cadência andaluza com rasgueado no último acorde.',
          'Executar o exercício de polegar alternado por dois minutos a 100 BPM, com igualdade.',
          'Tocar a primeira seção de uma transcrição espanhola à sua escolha.',
          'Comparar duas transcrições diferentes da mesma peça e justificar a escolha de uma.'
        ],
        criterio: 'Você domina quando mantém a figura de Asturias igual por dois minutos e executa a cadência andaluza com o fraseado e o acento certos.'
      }
    }
  ]
};
