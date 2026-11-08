// NÍVEL 8 — MÓDULO 8.1: Aperfeiçoamento contínuo
// Este nível não se conclui: é a área de trabalho permanente de quem já
// domina o instrumento. Identidade artística, pesquisa, carreira e estudo
// que não termina.

export const M81 = {
  id: '8.1',
  titulo: 'Aperfeiçoamento contínuo',
  resumo: 'O que se faz depois de aprender a tocar: construir uma voz própria e sustentá-la ao longo da vida.',
  aulas: [
    {
      id: 'n8.1.1',
      titulo: 'Construção de identidade artística',
      resumo: 'Descobrir o que você tem a dizer com o instrumento.',
      minutos: 22,
      disciplinas: ['interpretacao'],
      prereq: ['n6.2.1'],
      status: 'implementado',
      cobre: ['Construção de identidade artística'],
      objetivo: 'Definir uma identidade artística própria a partir de repertório, som e escolhas interpretativas.',
      blocos: [
        { t: 'p', x: 'Chega um ponto em que a técnica deixa de ser o problema. A pergunta passa a ser outra: *por que você toca, e o que você tem a dizer que outra pessoa não diria?* Identidade artística não é um estilo que se escolhe num catálogo; é o resultado acumulado de escolhas conscientes.' },
        { t: 'h', x: 'Os quatro eixos da identidade' },
        {
          t: 'tabela',
          cab: ['Eixo', 'Pergunta', 'Como se constrói'],
          linhas: [
            ['Repertório', 'O que você escolhe tocar e por quê?', 'Repetição de escolhas ao longo dos anos'],
            ['Som', 'Como o seu violão soa quando você toca?', 'Decisões técnicas consistentes (unha, ataque, timbre)'],
            ['Interpretação', 'Que decisões você toma onde outros tomam outras?', 'Análise, estudo de estilo, convicção'],
            ['Propósito', 'Para quem e para quê você toca?', 'Clareza sobre o papel da música na sua vida']
          ]
        },
        {
          t: 'dica', titulo: 'Identidade não é originalidade forçada: ',
          x: 'tocar diferente só para não parecer com os outros produz excentricidade, não identidade. A originalidade aparece como consequência de escolhas honestas e bem fundamentadas, não como objetivo.'
        },
        { t: 'h', x: 'O exercício das três listas' },
        {
          t: 'passos', itens: [
            '*Lista 1 — o que me emociona*: dez peças que você ouviria mesmo que nunca pudesse tocá-las. Não precisa ser violão.',
            '*Lista 2 — o que eu toco bem*: as peças em que você se sente mais à vontade e soa melhor.',
            '*Lista 3 — o que ninguém está tocando*: repertório pouco frequentado que você acha que merece ser ouvido.',
            'Procure a interseção: ela aponta para onde a sua identidade está.',
            'Refaça o exercício a cada ano. Ele muda — e essa mudança é informação.'
          ]
        },
        { t: 'h', x: 'A questão do repertório brasileiro' },
        { t: 'p', x: 'Para um violonista brasileiro, há uma pergunta inescapável: qual é a sua relação com o repertório do próprio país? O violão brasileiro tem uma tradição própria — Villa-Lobos, Garoto, Dilermando Reis, Radamés Gnattali, Guinga, Egberto Gismonti, o choro, a modinha — que forma uma identidade disponível e pouco explorada fora daqui. Isso não é obrigação; é oportunidade.' },
        {
          t: 'lista', itens: [
            'Repertório em domínio público: Dilermando Reis morreu em 1977, portanto ainda protegido; João Pernambuco (m. 1947) e Ernesto Nazareth (m. 1934) estão em domínio público.',
            'A modinha e o choro do século XIX são livres e pouco tocados no violão de concerto.',
            'Transcrever um choro de Nazareth para violão solo é um projeto artístico legítimo e legalmente seguro.',
            'Obras de compositores vivos exigem licença, mas também permitem contato direto: muitos autorizam com facilidade.'
          ]
        },
        {
          t: 'pauta', bpm: 72, numerar: true, quebrar: 4,
          txt: 'e4/c g4/c b4/c e5/c d5/c b4/c g4/c e4/c | a4/c c5/c e5/c a5/c g5/c e5/c c5/c a4/c | b4/c d5/c f#5/c b5/c a5/c f#5/c d5/c b4/c | e5/b z/b',
          legenda: 'Exercício original em linguagem brasileira: arpejo com síncope implícita e movimento por acordes, no espírito do choro. Use-o como ponto de partida para encontrar a sua própria escrita.'
        },
        { t: 'h', x: 'Como saber que a identidade está se formando' },
        {
          t: 'lista', itens: [
            'Pessoas reconhecem o seu som em gravações, sem ver o nome.',
            'Você consegue justificar cada decisão interpretativa importante.',
            'Você recusa repertório que não lhe interessa, mesmo quando é prestigioso.',
            'Suas escolhas de programa têm uma lógica que você consegue explicar em uma frase.',
            'Você tem projetos, não apenas peças.'
          ]
        },
        {
          t: 'check', chave: 'identidade8', titulo: 'Trabalhe a sua identidade',
          itens: [
            'Fiz as três listas.',
            'Identifiquei a interseção entre elas.',
            'Descrevi o meu som em três adjetivos e verifiquei numa gravação.',
            'Escrevi, em uma frase, por que eu toco.',
            'Explorei um repertório brasileiro em domínio público.',
            'Montei um projeto, e não apenas uma lista de peças.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Identidade artística', rodadas: 5,
          perguntas: [
            { texto: 'Identidade artística se constrói por:', opcoes: ['Escolhas conscientes repetidas ao longo do tempo', 'Escolha de um estilo', 'Imitação de um mestre', 'Originalidade deliberada'], correta: 0, explicacao: 'É consequência, não ponto de partida.' },
            { texto: 'Tocar diferente só para se distinguir produz:', opcoes: ['Excentricidade, não identidade', 'Originalidade', 'Reconhecimento', 'Uma escola'], correta: 0, explicacao: 'A honestidade das escolhas é o que sustenta.' },
            { texto: 'Quais são os quatro eixos da identidade?', opcoes: ['Repertório, som, interpretação e propósito', 'Técnica, leitura, memória e som', 'Estilo, época, país e formação', 'Repertório, técnica, público e carreira'], correta: 0, explicacao: 'Cada um se constrói de um jeito.' },
            { texto: 'Ernesto Nazareth está em domínio público?', opcoes: ['Sim', 'Não', 'Apenas as gravações', 'Apenas no Rio de Janeiro'], correta: 0, explicacao: 'Morreu em 1934.' },
            { texto: 'Um sinal de identidade formada é:', opcoes: ['Pessoas reconhecerem o seu som sem ver o nome', 'Tocar muito rápido', 'Ter grande repertório', 'Tocar repertório raro'], correta: 0, explicacao: 'Consistência reconhecível.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Buscar originalidade antes de ter domínio.', certo: 'Identidade se constrói sobre competência.' },
            { erro: 'Copiar integralmente um intérprete admirado.', certo: 'Use referências para descobrir o que você gosta.' },
            { erro: 'Aceitar todo repertório indiscriminadamente.', certo: 'Recusar faz parte da construção.' },
            { erro: 'Tratar identidade como algo que se decide num dia.', certo: 'É acúmulo de escolhas ao longo de anos.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Quatro eixos: repertório, som, interpretação e propósito.',
            'Identidade é consequência de escolhas honestas, não de originalidade deliberada.',
            'O exercício das três listas aponta a direção.',
            'O repertório brasileiro é uma identidade disponível e pouco explorada.',
            'Sinal de identidade: seu som é reconhecível e suas escolhas são justificáveis.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que não constrói identidade artística?', opcoes: ['Tocar diferente só para se distinguir', 'Escolhas consistentes de repertório', 'Som pessoal trabalhado', 'Decisões interpretativas justificadas'], correta: 0, explicacao: 'Isso produz excentricidade.' },
        { texto: 'O exercício das três listas serve para:', opcoes: ['Encontrar a interseção entre o que emociona, o que você toca bem e o que falta ser tocado', 'Montar um recital', 'Escolher professor', 'Avaliar a técnica'], correta: 0, explicacao: 'A interseção aponta a direção.' },
        { texto: 'João Pernambuco e Ernesto Nazareth estão:', opcoes: ['Em domínio público', 'Protegidos', 'Sem partituras', 'Fora do repertório violonístico'], correta: 0, explicacao: 'Morreram em 1947 e 1934.' },
        { texto: 'Ter projetos, e não apenas peças, indica:', opcoes: ['Identidade artística em formação', 'Falta de foco', 'Excesso de ambição', 'Nada em especial'], correta: 0, explicacao: 'Projetos têm lógica própria.' },
        { texto: 'Com que frequência refazer o exercício das três listas?', opcoes: ['A cada ano', 'Uma vez na vida', 'A cada mês', 'A cada recital'], correta: 0, explicacao: 'As mudanças são informação.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Entregar as três listas e a interseção identificada.',
          'Descrever o próprio som em três adjetivos e demonstrá-lo numa gravação.',
          'Apresentar um projeto artístico com lógica declarada.',
          'Tocar uma peça do repertório brasileiro em domínio público.'
        ],
        criterio: 'Você domina quando consegue explicar, em uma frase, o que você faz de diferente e demonstrar isso tocando.'
      }
    },

    {
      id: 'n8.1.2',
      titulo: 'Pesquisa de repertório e estudo de compositores',
      resumo: 'Encontrar obras que ninguém toca e conhecer a fundo quem as escreveu.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia'],
      prereq: ['n6.1.10'],
      status: 'implementado',
      cobre: ['Pesquisa de repertório', 'Estudo aprofundado de compositores'],
      objetivo: 'Pesquisar repertório em fontes confiáveis e estudar um compositor em profundidade.',
      blocos: [
        { t: 'p', x: 'O repertório de violão que circula em concertos é uma fração minúscula do que existe. Pesquisar é o que permite construir programas que não são a repetição do que todo mundo toca — e, no caminho, encontrar obras que combinam com a sua identidade.' },
        { t: 'h', x: 'Onde procurar' },
        {
          t: 'tabela',
          cab: ['Fonte', 'O que oferece', 'Observação'],
          linhas: [
            ['Bibliotecas digitais de partitura', 'Obras em domínio público, muitas em fac-símile', 'Verifique a data de morte do autor e a edição'],
            ['Acervos de conservatórios e universidades', 'Teses, edições críticas, manuscritos', 'Muitos digitalizados e de acesso livre'],
            ['Catálogos de editoras', 'Obras recentes e licenciadas', 'A ficha costuma trazer nível e duração'],
            ['Gravações integrais', 'Obras raras já registradas', 'Ouvir antes de procurar a partitura economiza tempo'],
            ['Compositores vivos', 'Obras inéditas e dedicatórias', 'Escrever diretamente funciona mais do que se imagina'],
            ['Arquivos nacionais', 'Repertório local esquecido', 'No Brasil, há muito material do século XIX e início do XX']
          ]
        },
        {
          t: 'aviso', x: 'Antes de adotar uma obra, confirme a situação de direitos: no Brasil, a proteção vai até 70 anos após o 1º de janeiro seguinte à morte do autor. Edições modernas podem ter direitos próprios mesmo de obras em domínio público — o que é livre é o texto musical, não necessariamente aquela edição.'
        },
        { t: 'h', x: 'Estudar um compositor a fundo' },
        {
          t: 'passos', itens: [
            'Leia uma biografia confiável e situe a obra na vida dele.',
            'Levante o catálogo completo para violão, com datas.',
            'Ouça tudo o que estiver gravado, em ordem cronológica.',
            'Identifique as fases e o que muda entre elas.',
            'Escolha três obras representativas de fases diferentes e analise-as.',
            'Procure escritos do próprio compositor: cartas, prefácios, entrevistas.',
            'Escreva um texto de duas páginas sintetizando o que aprendeu.'
          ]
        },
        {
          t: 'dica', titulo: 'O teste do conhecimento real: ',
          x: 'você consegue ouvir uma obra que não conhece e reconhecer o compositor? Se sim, você entendeu a linguagem dele. Se não, ainda está no nível das informações.'
        },
        { t: 'h', x: 'Montar um projeto de repertório' },
        {
          t: 'tabela',
          cab: ['Tipo de projeto', 'Exemplo', 'Vantagem'],
          linhas: [
            ['Monográfico', 'Um recital só com obras de um compositor', 'Profundidade e coerência'],
            ['Temático', 'Música de dança no violão, de Sanz a Brouwer', 'Narrativa clara para o público'],
            ['Geográfico', 'Violão brasileiro do século XIX', 'Repertório pouco tocado'],
            ['Cronológico', 'Quatro séculos de violão em uma hora', 'Mostra a evolução do instrumento'],
            ['Resgate', 'Obras esquecidas de um período', 'Contribuição real ao repertório']
          ]
        },
        {
          t: 'check', chave: 'pesquisa8', titulo: 'Pesquise',
          itens: [
            'Procurei repertório em pelo menos duas fontes diferentes.',
            'Verifiquei a situação de direitos de três obras.',
            'Escolhi um compositor e levantei o catálogo dele para violão.',
            'Ouvi as obras em ordem cronológica.',
            'Identifiquei as fases da obra dele.',
            'Escrevi uma síntese de duas páginas.',
            'Esbocei um projeto de repertório.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Pesquisar repertório', rodadas: 5,
          perguntas: [
            { texto: 'No Brasil, a proteção autoral dura:', opcoes: ['70 anos após o 1º de janeiro seguinte à morte do autor', '50 anos após a publicação', 'Para sempre', '30 anos'], correta: 0, explicacao: 'É o prazo da lei brasileira.' },
            { texto: 'Uma edição moderna de obra em domínio público:', opcoes: ['Pode ter direitos próprios sobre aquela edição', 'É sempre livre', 'É sempre protegida', 'Não pode ser usada'], correta: 0, explicacao: 'O texto musical é livre; o trabalho editorial pode não ser.' },
            { texto: 'Qual é o teste de que você entendeu a linguagem de um compositor?', opcoes: ['Reconhecê-lo ao ouvir uma obra desconhecida', 'Saber as datas', 'Tocar três peças dele', 'Ler a biografia'], correta: 0, explicacao: 'Informação não é compreensão.' },
            { texto: 'Um projeto monográfico é:', opcoes: ['Um programa com obras de um só compositor', 'Um programa cronológico', 'Um programa temático', 'Um recital de estreias'], correta: 0, explicacao: 'Oferece profundidade e coerência.' },
            { texto: 'Entrar em contato com compositores vivos:', opcoes: ['Funciona mais do que se imagina', 'É inútil', 'Exige intermediários', 'É proibido'], correta: 0, explicacao: 'Muitos respondem e autorizam com facilidade.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar partitura encontrada na internet sem verificar direitos.', certo: 'Confirme autor, data de morte e edição.' },
            { erro: 'Estudar um compositor só pelas obras famosas.', certo: 'O catálogo completo revela as fases.' },
            { erro: 'Confundir informação biográfica com compreensão da linguagem.', certo: 'O teste é reconhecer uma obra desconhecida.' },
            { erro: 'Montar programa sem lógica.', certo: 'Um projeto precisa de uma ideia declarável.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O repertório que circula é uma fração do que existe.',
            'Fontes: bibliotecas digitais, acervos acadêmicos, editoras, gravações, compositores vivos, arquivos nacionais.',
            'No Brasil, a proteção vai até 70 anos após a morte; edições modernas podem ter direitos próprios.',
            'Estudar um compositor: biografia, catálogo, audição cronológica, fases, análise, escritos, síntese.',
            'Projetos: monográfico, temático, geográfico, cronológico ou de resgate.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que verificar antes de adotar uma obra?', opcoes: ['A situação de direitos da obra e da edição', 'A duração', 'A dificuldade', 'A popularidade'], correta: 0, explicacao: 'São duas verificações distintas.' },
        { texto: 'Qual tipo de projeto resgata obras esquecidas?', opcoes: ['Projeto de resgate', 'Monográfico', 'Cronológico', 'Temático'], correta: 0, explicacao: 'É contribuição real ao repertório.' },
        { texto: 'Ouvir a obra de um compositor em ordem cronológica serve para:', opcoes: ['Identificar as fases e o que muda entre elas', 'Memorizar datas', 'Escolher a mais fácil', 'Comparar gravações'], correta: 0, explicacao: 'A evolução fica audível.' },
        { texto: 'Escritos do próprio compositor (cartas, prefácios) servem para:', opcoes: ['Entender as intenções e o contexto', 'Nada em especial', 'Verificar direitos', 'Encontrar partituras'], correta: 0, explicacao: 'São fonte primária.' },
        { texto: 'Arquivos nacionais brasileiros oferecem:', opcoes: ['Repertório local esquecido dos séculos XIX e XX', 'Apenas obras estrangeiras', 'Somente gravações', 'Nada relevante para violão'], correta: 0, explicacao: 'Há muito material pouco explorado.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar o catálogo levantado de um compositor para violão.',
          'Entregar a síntese escrita de duas páginas.',
          'Demonstrar o reconhecimento da linguagem ouvindo uma obra desconhecida dele.',
          'Esboçar um projeto de repertório com justificativa.'
        ],
        criterio: 'Você domina quando consegue montar um programa coerente a partir de pesquisa própria, com a situação de direitos verificada.'
      }
    },

    {
      id: 'n8.1.3',
      titulo: 'Interpretação avançada e desenvolvimento da musicalidade',
      resumo: 'Depois da técnica e do estilo: as decisões que fazem uma execução ser memorável.',
      minutos: 22,
      disciplinas: ['interpretacao'],
      prereq: ['n6.2.2'],
      status: 'implementado',
      cobre: ['Interpretação avançada', 'Desenvolvimento da musicalidade'],
      objetivo: 'Construir uma interpretação pessoal e fundamentada, com arquitetura de longo prazo.',
      blocos: [
        { t: 'p', x: 'Duas execuções podem ser igualmente corretas — notas certas, estilo adequado, som bonito — e uma ser esquecível e a outra, inesquecível. A diferença está em três coisas: arquitetura, direção e risco.' },
        { t: 'h', x: 'Arquitetura: a peça como um todo' },
        { t: 'p', x: 'Toda peça tem um ponto de maior intensidade — nem sempre o mais alto ou o mais forte. Identificá-lo e construir tudo em relação a ele é o que transforma uma sucessão de compassos numa obra. Sem esse plano, a execução é plana mesmo com dinâmica variada.' },
        {
          t: 'passos', itens: [
            'Ouça ou toque a peça inteira e marque, por intuição, o ponto de maior intensidade.',
            'Verifique na partitura: o que acontece ali? Harmonia mais tensa? Registro mais agudo? Densidade maior?',
            'Divida a peça em duas grandes partes: a que leva até lá e a que vem depois.',
            'Defina um nível de intensidade para cada seção, numa escala de 1 a 10.',
            'Verifique: há crescimento perceptível até o ponto alto? Há repouso depois?',
            'Toque seguindo esse plano, mesmo que ele contrarie o seu impulso momentâneo.'
          ]
        },
        {
          t: 'pauta', bpm: 56, numerar: true, quebrar: 4,
          txt: 'e4/b g4/b | a4/b b4/b | c5/b e5/b | d5/o | c5/b b4/b | a4/b g4/b | e4/o | e4/o',
          legenda: 'Exercício de arquitetura: oito compassos com um ponto alto evidente no Mi agudo (compasso 6). Toque construindo até lá e relaxando depois — e depois tente deslocar o ponto alto para outro lugar e compare.'
        },
        { t: 'h', x: 'Direção: para onde cada nota aponta' },
        {
          t: 'lista', itens: [
            'Nenhuma nota é estática: ela vai em direção à próxima ou repousa de uma anterior.',
            'Numa frase ascendente, a tendência é crescer; numa descendente, relaxar — mas o contrário, usado conscientemente, é expressivo.',
            'A nota mais longa de uma frase costuma ser o seu centro de gravidade.',
            'Toda frase tem uma respiração no fim, por menor que seja.',
            'Cantar a frase antes de tocá-la revela a direção natural em segundos.'
          ]
        },
        { t: 'h', x: 'Risco: o que separa o correto do memorável' },
        { t: 'p', x: 'Execuções seguras demais são previsíveis. Risco, aqui, não significa tocar além da capacidade: significa tomar decisões que poderiam não funcionar — um pianíssimo muito baixo, um rubato longo, um silêncio mais longo que o confortável. O intérprete maduro calcula esse risco e o assume.' },
        {
          t: 'comparar',
          a: { titulo: 'Execução correta', itens: ['Notas certas e pulso estável', 'Dinâmica dentro do esperado', 'Andamento uniforme', 'Nenhum momento desconfortável', 'O ouvinte não se lembra depois'] },
          b: { titulo: 'Execução memorável', itens: ['Arquitetura audível', 'Contrastes que surpreendem', 'Silêncios que pesam', 'Momentos de risco calculado', 'O ouvinte lembra de um momento específico'] }
        },
        { t: 'h', x: 'Desenvolver musicalidade (sim, dá para treinar)' },
        {
          t: 'lista', itens: [
            '*Cantar*: tudo o que você consegue cantar com expressão, consegue tocar com expressão.',
            '*Ouvir fora do violão*: ópera, quarteto de cordas, canção. O fraseado vem do canto e das cordas, não do violão.',
            '*Comparar gravações*: três intérpretes da mesma obra, anotando as diferenças de escolha.',
            '*Tocar com outras pessoas*: música de câmara ensina fraseado mais rápido que qualquer exercício.',
            '*Tocar para pessoas*: a presença de ouvintes revela o que é comunicativo e o que não é.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira o ponto alto do exercício',
          seq: [[1, 0], [1, 3], [1, 5], [1, 7], [1, 8], [1, 12]],
          rotulo: 'Conferir as notas',
          fim: 'O Mi agudo é o ponto alto. Toque a frase inteira construindo até ele.',
          x: 'Toque Mi, Sol, Lá, Si, Dó e Mi na 1ª corda, uma nota por vez.'
        },
        {
          t: 'check', chave: 'interp8', titulo: 'Construa uma interpretação',
          itens: [
            'Identifiquei o ponto de maior intensidade de uma peça.',
            'Atribuí níveis de intensidade de 1 a 10 a cada seção.',
            'Cantei uma frase antes de tocá-la e segui a direção encontrada.',
            'Comparei três gravações da mesma obra e anotei as diferenças.',
            'Assumi um risco interpretativo conscientemente numa execução.',
            'Toquei para outra pessoa e observei o que comunicou.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Interpretação avançada', rodadas: 5,
          perguntas: [
            { texto: 'O que é arquitetura numa interpretação?', opcoes: ['O plano de intensidade da peça inteira em relação ao ponto alto', 'A forma musical', 'A estrutura harmônica', 'A digitação'], correta: 0, explicacao: 'Sem ela, a execução é plana.' },
            { texto: 'Qual é o jeito mais rápido de encontrar a direção de uma frase?', opcoes: ['Cantá-la', 'Analisá-la', 'Tocá-la devagar', 'Ouvir uma gravação'], correta: 0, explicacao: 'O canto revela a direção natural.' },
            { texto: 'Risco interpretativo significa:', opcoes: ['Decisões que poderiam não funcionar, assumidas conscientemente', 'Tocar além da capacidade técnica', 'Improvisar', 'Mudar o texto'], correta: 0, explicacao: 'É calculado, não imprudente.' },
            { texto: 'Onde está o centro de gravidade de uma frase?', opcoes: ['Normalmente na nota mais longa', 'Na primeira nota', 'Na mais aguda', 'Na última'], correta: 0, explicacao: 'A duração concentra o peso.' },
            { texto: 'O que desenvolve musicalidade mais rápido?', opcoes: ['Cantar e tocar com outras pessoas', 'Mais horas de técnica', 'Mais repertório', 'Metrônomo'], correta: 0, explicacao: 'Fraseado vem do canto e da escuta mútua.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar sem plano de intensidade.', certo: 'Defina o ponto alto e construa em relação a ele.' },
            { erro: 'Fazer dinâmica compasso a compasso, sem direção longa.', certo: 'A arquitetura é de peça inteira.' },
            { erro: 'Evitar qualquer risco.', certo: 'Execução sem risco é previsível.' },
            { erro: 'Buscar musicalidade só no violão.', certo: 'Ouça canto e cordas; é de lá que vem o fraseado.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Três elementos: arquitetura, direção e risco.',
            'Arquitetura é o plano de intensidade em relação ao ponto alto da peça.',
            'Direção se descobre cantando a frase.',
            'Risco calculado separa o correto do memorável.',
            'Musicalidade se desenvolve cantando, ouvindo fora do violão e tocando com e para pessoas.'
          ]
        }
      ],
      quiz: [
        { texto: 'O ponto de maior intensidade de uma peça é:', opcoes: ['Nem sempre o mais alto ou o mais forte', 'Sempre a nota mais aguda', 'Sempre o fim', 'Sempre o centro exato'], correta: 0, explicacao: 'Pode ser um silêncio ou uma dissonância.' },
        { texto: 'Numa escala de 1 a 10, o que se atribui a cada seção?', opcoes: ['Um nível de intensidade', 'Uma dinâmica fixa', 'Um andamento', 'Uma nota'], correta: 0, explicacao: 'O plano precisa ser explícito.' },
        { texto: 'Cantar a frase antes de tocar revela:', opcoes: ['A direção natural dela', 'A digitação', 'O andamento', 'A harmonia'], correta: 0, explicacao: 'Em segundos.' },
        { texto: 'O que caracteriza uma execução memorável?', opcoes: ['Arquitetura audível e momentos de risco', 'Ausência de erros', 'Velocidade', 'Volume'], correta: 0, explicacao: 'Correção não basta.' },
        { texto: 'De onde vem o fraseado violonístico?', opcoes: ['Do canto e das cordas friccionadas', 'Do próprio violão', 'Do piano', 'Da percussão'], correta: 0, explicacao: 'Por isso se ouve ópera e quarteto.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar o plano de arquitetura de uma peça, com níveis por seção.',
          'Tocar a peça seguindo o plano, de forma audível em gravação.',
          'Demonstrar a mesma frase com duas direções diferentes.',
          'Assumir e justificar um risco interpretativo.'
        ],
        criterio: 'Você domina quando um ouvinte consegue apontar o ponto alto da peça só ouvindo você tocar.'
      }
    },

    {
      id: 'n8.1.4',
      titulo: 'Masterclasses',
      resumo: 'Como aproveitar uma aula pública — e como sobreviver a ela.',
      minutos: 18,
      disciplinas: ['interpretacao'],
      prereq: ['n6.2.5'],
      status: 'implementado',
      cobre: ['Masterclasses'],
      objetivo: 'Preparar-se para participar de masterclasses de forma produtiva, como executante e como ouvinte.',
      blocos: [
        { t: 'p', x: 'Uma masterclass é uma aula pública: você toca, um professor convidado comenta, e dezenas de pessoas assistem. É uma das experiências mais úteis e mais desconfortáveis da formação — e o desconforto diminui muito com preparação.' },
        { t: 'h', x: 'Antes' },
        {
          t: 'passos', itens: [
            'Escolha uma peça que você toque com folga e que esteja memorizada há pelo menos um mês.',
            'Pesquise o professor: o que ele toca, o que escreveu, qual escola representa. Isso antecipa o tipo de comentário.',
            'Leve a partitura, mesmo tocando de memória — ele vai querer apontar compassos.',
            'Prepare uma pergunta específica. "O que acha?" rende pouco; "como o senhor pensa a articulação dos compassos 9 a 16?" rende muito.',
            'Toque a peça inteira para alguém na véspera.'
          ]
        },
        { t: 'h', x: 'Durante' },
        {
          t: 'comparar',
          a: { titulo: 'Quem aproveita', itens: ['Toca a peça inteira sem se desculpar antes', 'Experimenta cada sugestão na hora', 'Faz uma pergunta específica', 'Registra tudo', 'Agradece e sai com tarefas'] },
          b: { titulo: 'Quem desperdiça', itens: ['Explica por que não estudou', 'Defende as próprias escolhas', 'Pergunta "o que o senhor achou?"', 'Confia na memória', 'Sai com a sensação de ter sido avaliado'] }
        },
        {
          t: 'lista', itens: [
            'Toque a peça inteira sem parar, a menos que peçam para interromper.',
            'Ouça sem se defender. Explicar por que você fez algo consome o tempo da aula.',
            'Experimente o que for sugerido *na hora*, mesmo que discorde. Avaliar vem depois.',
            'Anote — ou peça para alguém anotar, ou grave. Você não vai lembrar de metade.',
            'Se não entendeu, pergunte. Ninguém espera que você entenda tudo de imediato.',
            'Agradeça no fim, independentemente de como foi.'
          ]
        },
        {
          t: 'dica', titulo: 'Sobre discordar: ',
          x: 'você não é obrigado a adotar nada. Mas teste tudo antes de descartar. Muita sugestão que parece errada na hora faz sentido um mês depois — e algumas continuam erradas, o que também é informação sobre a sua identidade.'
        },
        { t: 'h', x: 'Depois' },
        {
          t: 'passos', itens: [
            'No mesmo dia, escreva tudo o que lembrar, mesmo em tópicos soltos.',
            'Em uma semana, revise as anotações e separe: adoto, testo mais, descarto.',
            'Para cada item em "adoto", crie um exercício ou uma marcação na partitura.',
            'Grave a peça de novo em um mês e compare com antes.',
            'Se foi dura, dê tempo: comentários duros costumam fazer mais sentido depois que o orgulho assenta.'
          ]
        },
        { t: 'h', x: 'Assistir também é participar' },
        {
          t: 'lista', itens: [
            'Assistir a uma masterclass inteira ensina quase tanto quanto tocar nela.',
            'Anote os comentários que se repetem entre alunos: são princípios, não correções pontuais.',
            'Observe *como* o professor ensina, não só o que ele diz — é aula de pedagogia de graça.',
            'Tente prever o comentário antes que ele venha. Quando você começa a acertar, está entendendo.',
            'Depois, aplique em você o que foi dito a outro.'
          ]
        },
        {
          t: 'check', chave: 'masterclass', titulo: 'Prepare uma participação',
          itens: [
            'Escolhi uma peça com folga, memorizada há mais de um mês.',
            'Pesquisei o professor convidado.',
            'Preparei uma pergunta específica.',
            'Toquei a peça inteira para alguém na véspera.',
            'Combinei como vou registrar os comentários.',
            'Planejei a revisão das anotações em uma semana.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Aproveitar uma masterclass', rodadas: 5,
          perguntas: [
            { texto: 'Que peça levar a uma masterclass?', opcoes: ['Uma que você toque com folga e esteja memorizada há tempo', 'A mais difícil do repertório', 'Uma recém-aprendida', 'A que o professor toca'], correta: 0, explicacao: 'O objetivo é aprender, não impressionar.' },
            { texto: 'Diante de uma sugestão com a qual você discorda:', opcoes: ['Experimente na hora e avalie depois', 'Explique por que discorda', 'Ignore', 'Discuta'], correta: 0, explicacao: 'Defender-se consome o tempo da aula.' },
            { texto: 'Por que preparar uma pergunta específica?', opcoes: ['Perguntas genéricas rendem respostas genéricas', 'Para impressionar', 'Para preencher o tempo', 'Por educação'], correta: 0, explicacao: 'Especificidade produz conteúdo útil.' },
            { texto: 'Quando revisar as anotações?', opcoes: ['No mesmo dia e de novo em uma semana', 'Só no mesmo dia', 'Um mês depois', 'Nunca'], correta: 0, explicacao: 'Registro imediato, triagem depois.' },
            { texto: 'Comentários que se repetem entre vários alunos indicam:', opcoes: ['Princípios, não correções pontuais', 'Falta de preparo da turma', 'Vício do professor', 'Coincidência'], correta: 0, explicacao: 'São os mais valiosos.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Levar a peça mais difícil que você toca.', certo: 'Leve a que você domina.' },
            { erro: 'Defender as próprias escolhas durante a aula.', certo: 'Experimente agora, avalie depois.' },
            { erro: 'Não registrar nada.', certo: 'Você esquece metade no mesmo dia.' },
            { erro: 'Descartar imediatamente o que não gostou.', certo: 'Teste antes; algumas sugestões fazem sentido meses depois.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Leve uma peça dominada e memorizada há pelo menos um mês.',
            'Pesquise o professor e prepare uma pergunta específica.',
            'Experimente tudo na hora; avalie depois.',
            'Registre: você não lembra de metade.',
            'Triagem em uma semana: adoto, testo mais, descarto.',
            'Assistir ensina quase tanto quanto tocar.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que levar a uma masterclass?', opcoes: ['Peça dominada, partitura e uma pergunta específica', 'A peça mais difícil', 'Só o instrumento', 'Uma peça nova'], correta: 0, explicacao: 'Preparação define o aproveitamento.' },
        { texto: 'Durante a aula, o aluno deve:', opcoes: ['Experimentar as sugestões imediatamente', 'Justificar suas escolhas', 'Tocar só trechos', 'Fazer muitas perguntas'], correta: 0, explicacao: 'Avaliar vem depois.' },
        { texto: 'Por que levar a partitura mesmo tocando de memória?', opcoes: ['O professor vai apontar compassos', 'Por segurança', 'Por exigência', 'Para ler'], correta: 0, explicacao: 'Facilita a comunicação.' },
        { texto: 'Assistir a uma masterclass sem tocar:', opcoes: ['Ensina quase tanto quanto participar', 'Não vale a pena', 'Serve só para conhecer o professor', 'É perda de tempo'], correta: 0, explicacao: 'Especialmente os comentários que se repetem.' },
        { texto: 'O que fazer com sugestões que continuam parecendo erradas depois de testadas?', opcoes: ['Descartar; isso também informa sobre a sua identidade', 'Adotar mesmo assim', 'Pedir nova opinião', 'Abandonar a peça'], correta: 0, explicacao: 'Discordar fundamentado faz parte.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar a preparação completa para uma masterclass: peça, pesquisa e pergunta.',
          'Simular a situação tocando para uma pessoa que dará comentários.',
          'Experimentar na hora duas sugestões recebidas.',
          'Entregar a triagem das anotações em três categorias.'
        ],
        criterio: 'Você domina quando sai de uma aula pública com anotações organizadas e pelo menos uma mudança concreta já em prática.'
      }
    },

    {
      id: 'n8.1.5',
      titulo: 'Festivais e concursos',
      resumo: 'Onde encontrar, como escolher e o que esperar.',
      minutos: 18,
      disciplinas: ['repertorio', 'interpretacao'],
      prereq: ['n7.2.8'],
      status: 'implementado',
      cobre: ['Festivais e concursos'],
      objetivo: 'Selecionar e participar de festivais e concursos com objetivos claros e expectativas realistas.',
      blocos: [
        { t: 'p', x: 'Festivais e concursos cumprem funções diferentes. Festival é imersão: aulas, convivência, contatos e muitas horas de música em poucos dias. Concurso é avaliação comparativa, com prêmio e exposição. Confundir os dois leva a frustração.' },
        { t: 'h', x: 'Festival: o que buscar' },
        {
          t: 'tabela',
          cab: ['Aspecto', 'O que avaliar antes de se inscrever'],
          linhas: [
            ['Professores', 'Quem dá aula e quantas aulas individuais você terá'],
            ['Formato', 'Masterclasses públicas, aulas individuais, oficinas, concertos'],
            ['Nível', 'Festival de iniciantes e de profissionais são experiências muito diferentes'],
            ['Duração', 'De três dias a três semanas; a imersão longa rende mais'],
            ['Custo', 'Inscrição, hospedagem, transporte; muitos oferecem bolsas'],
            ['Convivência', 'Tocar com e ouvir outros alunos é metade do valor']
          ]
        },
        {
          t: 'dica', titulo: 'O que mais rende num festival: ',
          x: 'não são as aulas, e sim as horas entre elas — ouvir os outros alunos, tocar junto, conversar. Quem fica no quarto estudando perde o que o festival tem de insubstituível.'
        },
        { t: 'h', x: 'Concurso: decidir se vale a pena' },
        {
          t: 'comparar',
          a: { titulo: 'Boas razões para concorrer', itens: ['Ter um prazo e um padrão externo', 'Preparar um programa grande com disciplina', 'Receber devolutiva de uma banca', 'Conhecer outros violonistas', 'Exposição e contatos'] },
          b: { titulo: 'Razões ruins', itens: ['Provar valor a si mesmo', 'Comparar-se com colegas', 'Ganhar dinheiro (raramente compensa)', 'Pressão de professor ou família', 'Buscar validação externa para continuar'] }
        },
        { t: 'h', x: 'A realidade dos resultados' },
        {
          t: 'lista', itens: [
            'Bancas discordam entre si. O mesmo candidato pode ser primeiro num concurso e não passar da triagem em outro.',
            'O resultado mede o desempenho daquele dia, comparado àquele grupo, segundo aqueles jurados.',
            'Não passar não é informação sobre o seu valor como músico; é informação sobre aquela apresentação.',
            'O ganho real está na preparação: um programa grande, memorizado e estabilizado, fica com você para sempre.',
            'Peça a devolutiva escrita, se houver. É o item mais valioso e o menos solicitado.'
          ]
        },
        { t: 'h', x: 'Preparação específica' },
        {
          t: 'passos', itens: [
            'Leia o regulamento inteiro, inclusive as regras de repertório por fase.',
            'Monte o programa das fases com antecedência: muitos concursos exigem obras diferentes em cada uma.',
            'Prepare todas as fases, inclusive a final. Chegar lá sem programa pronto acontece.',
            'Faça simulados de cada fase separadamente.',
            'Planeje logística: viagem, hospedagem, horário de chegada, local para aquecer.',
            'Leve cordas, afinador e apoio reserva.'
          ]
        },
        {
          t: 'check', chave: 'festivais', titulo: 'Planeje a participação',
          itens: [
            'Pesquisei três festivais ou concursos e comparei os formatos.',
            'Defini qual é o meu objetivo em participar.',
            'Li um regulamento completo.',
            'Montei o programa de todas as fases.',
            'Planejei a logística de viagem e aquecimento.',
            'Defini como vou aproveitar as horas entre as atividades.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Festivais e concursos', rodadas: 5,
          perguntas: [
            { texto: 'Qual é a função principal de um festival?', opcoes: ['Imersão: aulas, convivência e muita música', 'Avaliação comparativa', 'Premiação', 'Gravação'], correta: 0, explicacao: 'Concurso é que avalia.' },
            { texto: 'O que mais rende num festival?', opcoes: ['As horas entre as atividades', 'As aulas individuais', 'Os concertos', 'As oficinas'], correta: 0, explicacao: 'Ouvir e tocar com outros alunos.' },
            { texto: 'O resultado de um concurso mede:', opcoes: ['O desempenho daquele dia para aqueles jurados', 'O valor do músico', 'O nível técnico absoluto', 'O futuro profissional'], correta: 0, explicacao: 'Bancas discordam entre si.' },
            { texto: 'Qual é o ganho real de concorrer?', opcoes: ['A preparação: um programa grande e estabilizado', 'O prêmio', 'A exposição', 'A nota'], correta: 0, explicacao: 'Isso fica com você independentemente do resultado.' },
            { texto: 'O item mais valioso e menos solicitado em concursos é:', opcoes: ['A devolutiva escrita da banca', 'O certificado', 'A gravação', 'O programa impresso'], correta: 0, explicacao: 'Peça sempre que houver.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Preparar só a primeira fase.', certo: 'Prepare todas, inclusive a final.' },
            { erro: 'Ficar estudando no quarto durante o festival.', certo: 'A convivência é metade do valor.' },
            { erro: 'Tratar o resultado como medida do próprio valor.', certo: 'Ele mede uma apresentação, não um músico.' },
            { erro: 'Concorrer por pressão externa.', certo: 'Defina o seu objetivo antes de se inscrever.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Festival é imersão; concurso é avaliação comparativa.',
            'O maior valor de um festival está nas horas entre as atividades.',
            'Bancas discordam: o resultado mede aquele dia, não o seu valor.',
            'O ganho real do concurso é a preparação.',
            'Prepare todas as fases e peça a devolutiva escrita.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a diferença central entre festival e concurso?', opcoes: ['Imersão formativa contra avaliação comparativa', 'Duração', 'Custo', 'Nível exigido'], correta: 0, explicacao: 'Confundi-los leva a frustração.' },
        { texto: 'Por que bancas de concursos diferentes chegam a resultados diferentes?', opcoes: ['Critérios e preferências variam entre jurados', 'Erro de avaliação', 'Falta de regulamento', 'Sorte'], correta: 0, explicacao: 'É inerente ao formato.' },
        { texto: 'Quantas fases preparar?', opcoes: ['Todas, inclusive a final', 'Só a primeira', 'As duas primeiras', 'Depende do nível'], correta: 0, explicacao: 'Chegar à final sem programa acontece.' },
        { texto: 'O que pedir ao fim de um concurso?', opcoes: ['A devolutiva escrita da banca', 'A gravação', 'O certificado', 'A nota detalhada do público'], correta: 0, explicacao: 'É o retorno mais útil.' },
        { texto: 'Não passar numa seleção significa:', opcoes: ['Informação sobre aquela apresentação', 'Que você não tem talento', 'Que deve parar', 'Que o repertório estava errado'], correta: 0, explicacao: 'É um recorte, não um veredito.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Comparar três festivais ou concursos e justificar a escolha de um.',
          'Declarar o objetivo da participação em uma frase.',
          'Montar o programa completo de todas as fases.',
          'Apresentar o plano de logística e aquecimento.'
        ],
        criterio: 'Você domina quando escolhe eventos por objetivos claros e chega com todas as fases preparadas.'
      }
    },

    {
      id: 'n8.1.6',
      titulo: 'Preparação de recitais no nível profissional',
      resumo: 'Um programa inteiro, repetido em várias apresentações, com qualidade estável.',
      minutos: 20,
      disciplinas: ['interpretacao'],
      prereq: ['n6.2.5'],
      status: 'implementado',
      cobre: ['Preparação de recitais'],
      objetivo: 'Preparar e sustentar um programa de recital completo ao longo de uma temporada.',
      blocos: [
        { t: 'p', x: 'No Nível 6 você preparou um recital. Aqui o problema é outro: manter um programa vivo ao longo de uma temporada — tocá-lo cinco, dez vezes, em salas diferentes, mantendo a qualidade e evitando que a repetição o esvazie.' },
        { t: 'h', x: 'Construir um programa que se sustenta' },
        {
          t: 'tabela',
          cab: ['Critério', 'Detalhe'],
          linhas: [
            ['Duração', '50 a 70 minutos de música, com intervalo se passar de 60'],
            ['Arco narrativo', 'O programa inteiro deve ter um ponto alto, como uma peça tem'],
            ['Variedade', 'Períodos, caracteres e densidades alternados'],
            ['Resistência', 'A peça mais exigente fisicamente não pode ser a última'],
            ['Tonalidades', 'Evitar peças seguidas no mesmo tom; planejar as relações'],
            ['Fala', 'Decidir se vai falar com o público e o que dizer — no máximo um minuto por bloco']
          ]
        },
        {
          t: 'dica', titulo: 'Sobre falar com o público: ',
          x: 'uma frase bem escolhida sobre a peça aumenta muito a escuta. Uma aula de cinco minutos esvazia a sala. Prepare o texto, cronometre e mantenha-o abaixo de um minuto.'
        },
        { t: 'h', x: 'Manter o programa ao longo da temporada' },
        {
          t: 'passos', itens: [
            'Depois da primeira apresentação, escolha dois ou três pontos a melhorar e trabalhe só neles.',
            'Entre apresentações, mantenha uma execução completa a cada dois dias.',
            'Reestude trechos com partitura periodicamente: a memória se deforma com a repetição.',
            'Grave uma apresentação a cada três; compare com a primeira.',
            'Se o programa começar a soar automático, mude alguma coisa: andamento, articulação, ordem interna.',
            'Depois da última apresentação, descanse o programa por semanas antes de retomá-lo.'
          ]
        },
        {
          t: 'aviso', x: 'A deformação da memória é real: trechos decorados mudam com o tempo e tendem a simplificar-se — ornamentos somem, ritmos arredondam. A única prevenção é voltar à partitura regularmente, mesmo em peças que você toca há anos.'
        },
        { t: 'h', x: 'A logística de cada apresentação' },
        {
          t: 'tabela',
          cab: ['Item', 'Cuidado'],
          linhas: [
            ['Sala', 'Chegar cedo; tocar no local; ajustar articulação à acústica'],
            ['Cadeira e apoio', 'Levar os seus; cadeira errada estraga a postura'],
            ['Afinação', 'Afinar no local, no ambiente em que vai tocar; conferir no intervalo'],
            ['Iluminação', 'Se tocar de memória, luz baixa é confortável; se ler, confira a luz'],
            ['Temperatura', 'Mãos frias e madeira fria mudam a resposta do instrumento'],
            ['Programa impresso', 'Com durações, para o público se situar']
          ]
        },
        {
          t: 'pauta', bpm: 54, numerar: true,
          txt: 'c4/b e4/b | g4/b c5/b | b4/o | g4/b e4/b | c4/o',
          legenda: 'Aquecimento de temporada: notas longas em região média, atenção total ao som. Cinco minutos antes de cada apresentação, sempre o mesmo — a rotina estabiliza o estado mental.'
        },
        {
          t: 'tocar', titulo: 'Confira o aquecimento',
          seq: [[2, 1], [1, 0], [1, 3], [1, 8]],
          rotulo: 'Conferir as notas',
          fim: 'Mantenha essa mesma rotina antes de toda apresentação da temporada.',
          x: 'Toque Dó, Mi, Sol e Dó, uma nota por vez, com som pleno.'
        },
        {
          t: 'check', chave: 'recital8', titulo: 'Sustente uma temporada',
          itens: [
            'Montei um programa de 50 a 70 minutos com arco narrativo.',
            'Defini se vou falar com o público e cronometrei o texto.',
            'Estabeleci uma rotina fixa de aquecimento.',
            'Planejei execuções completas a cada dois dias entre apresentações.',
            'Marquei datas para reestudo com partitura.',
            'Gravei uma apresentação e comparei com a primeira.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Recital profissional', rodadas: 5,
          perguntas: [
            { texto: 'Qual é a duração recomendada de um recital?', opcoes: ['50 a 70 minutos de música', '2 horas', '30 minutos', 'Sem limite'], correta: 0, explicacao: 'Com intervalo se passar de 60.' },
            { texto: 'O que acontece com a memória de peças tocadas por muito tempo?', opcoes: ['Ela se deforma e tende a simplificar', 'Fica mais precisa', 'Não muda', 'Desaparece'], correta: 0, explicacao: 'Voltar à partitura é a única prevenção.' },
            { texto: 'Falar com o público deve durar:', opcoes: ['No máximo um minuto por bloco', 'Cinco minutos', 'O tempo necessário', 'Nada: nunca se fala'], correta: 0, explicacao: 'Uma frase boa aumenta a escuta.' },
            { texto: 'Onde não colocar a peça mais exigente fisicamente?', opcoes: ['No fim do programa', 'No começo', 'Antes do intervalo', 'Depois do intervalo'], correta: 0, explicacao: 'O cansaço compromete.' },
            { texto: 'Se o programa começa a soar automático:', opcoes: ['Mude algo: andamento, articulação, ordem interna', 'Toque mais vezes', 'Troque de programa', 'Reduza os ensaios'], correta: 0, explicacao: 'A variação reativa a atenção.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Não voltar à partitura depois de memorizar.', certo: 'A memória se deforma; reestude periodicamente.' },
            { erro: 'Falar demais entre as peças.', certo: 'Prepare e cronometre; menos de um minuto.' },
            { erro: 'Pôr a peça mais pesada no fim.', certo: 'O cansaço compromete o fecho do programa.' },
            { erro: 'Usar a cadeira que houver no local.', certo: 'Leve a sua ou confira antes.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Programa de 50 a 70 minutos, com arco narrativo próprio.',
            'A memória se deforma: reestude com partitura periodicamente.',
            'Execução completa a cada dois dias entre apresentações.',
            'Rotina fixa de aquecimento estabiliza o estado mental.',
            'Logística: sala, cadeira, afinação, luz, temperatura e programa impresso.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que é o arco narrativo de um programa?', opcoes: ['O programa inteiro tem um ponto alto, como uma peça', 'A ordem cronológica', 'A sequência de tonalidades', 'A duração total'], correta: 0, explicacao: 'Dá direção ao recital inteiro.' },
        { texto: 'Com que frequência fazer execução completa entre apresentações?', opcoes: ['A cada dois dias', 'Diariamente', 'Semanalmente', 'Só na véspera'], correta: 0, explicacao: 'Mantém o condicionamento.' },
        { texto: 'Por que voltar à partitura em peças antigas?', opcoes: ['A memória simplifica detalhes com o tempo', 'Para decorar de novo', 'Para mudar a digitação', 'Por exigência do edital'], correta: 0, explicacao: 'Ornamentos somem, ritmos arredondam.' },
        { texto: 'A afinação deve ser conferida:', opcoes: ['No local, no ambiente de execução, e no intervalo', 'Só em casa', 'Uma vez antes de começar', 'Depois do recital'], correta: 0, explicacao: 'Temperatura e umidade mudam tudo.' },
        { texto: 'Depois da última apresentação da temporada, o recomendado é:', opcoes: ['Descansar o programa por semanas', 'Começar outro imediatamente', 'Gravá-lo', 'Repeti-lo mais'], correta: 0, explicacao: 'O distanciamento renova a interpretação.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Montar um programa completo com arco narrativo e justificar a ordem.',
          'Executar o programa inteiro, cronometrado.',
          'Apresentar a rotina fixa de aquecimento.',
          'Comparar duas gravações do mesmo programa em datas diferentes.'
        ],
        criterio: 'Você domina quando sustenta a qualidade de um programa inteiro em apresentações sucessivas, sem que a repetição o esvazie.'
      }
    },

    {
      id: 'n8.1.7',
      titulo: 'Gravação de repertório',
      resumo: 'Produzir um registro de qualidade duradoura: álbum, vídeo ou portfólio.',
      minutos: 20,
      disciplinas: ['interpretacao', 'tecnica'],
      prereq: ['n7.2.9'],
      status: 'implementado',
      cobre: ['Gravação de repertório'],
      objetivo: 'Planejar e executar um projeto de gravação de repertório, do conceito à publicação.',
      blocos: [
        { t: 'p', x: 'Gravar um conjunto de obras é diferente de gravar uma peça. Envolve conceito, resistência, decisões de produção e uma disciplina específica: a de tocar bem em condições que não são as de um concerto, sem público e com a possibilidade de repetir — que é, paradoxalmente, o que mais atrapalha.' },
        { t: 'h', x: 'O conceito' },
        {
          t: 'lista', itens: [
            'Um registro precisa de uma ideia: monográfico, temático, de resgate, de estreia.',
            'A ideia orienta a ordem das faixas, que não é a mesma de um recital — o ouvinte pode parar e voltar.',
            'Duração total: entre 45 e 70 minutos funciona bem para um álbum.',
            'Verifique a situação de direitos de cada obra e de cada edição usada.',
            'Para obras protegidas, o licenciamento é necessário antes da publicação.'
          ]
        },
        { t: 'h', x: 'O cronograma de um projeto' },
        {
          t: 'tabela',
          cab: ['Fase', 'Duração típica', 'Conteúdo'],
          linhas: [
            ['Conceito e repertório', '1 a 2 meses', 'Definir ideia, obras, direitos e ordem'],
            ['Preparação', '4 a 8 meses', 'Repertório no nível de gravação, que é acima do de concerto'],
            ['Pré-produção', '1 mês', 'Testes de sala, microfone, cordas; gravações de ensaio'],
            ['Gravação', '2 a 5 dias', 'Sessões de 3 a 4 horas, no máximo'],
            ['Edição e mixagem', '2 a 4 semanas', 'Seleção de tomadas, cortes, equalização'],
            ['Finalização', '2 a 4 semanas', 'Masterização, capa, textos, créditos']
          ]
        },
        {
          t: 'dica', titulo: 'O nível de gravação: ',
          x: 'o microfone registra o que o público não ouve. Um pequeno ruído de dedo, uma nota levemente abafada, uma desigualdade de arpejo — tudo aparece. Prepare o repertório acima do nível de concerto: o que passa despercebido ao vivo não passa na gravação.'
        },
        { t: 'h', x: 'A disciplina da sessão' },
        {
          t: 'passos', itens: [
            'Comece pela peça mais difícil, com a mão descansada.',
            'Faça três tomadas inteiras seguidas antes de ouvir qualquer coisa.',
            'Não ouça durante a sessão mais do que o necessário: analisar enquanto grava destrói a execução.',
            'Grave trechos de segurança depois das tomadas inteiras, para eventuais cortes.',
            'Pare quando a qualidade cair, mesmo que falte tempo. Tomada ruim não se aproveita.',
            'Sessão de no máximo quatro horas, com pausas a cada cinquenta minutos.'
          ]
        },
        {
          t: 'aviso', x: 'A possibilidade de repetir é o maior inimigo da gravação. Saber que dá para fazer de novo reduz o compromisso com a tomada atual, e o resultado é dezenas de tomadas mornas. Toque cada tomada como se fosse a única.'
        },
        { t: 'h', x: 'Publicar' },
        {
          t: 'tabela',
          cab: ['Destino', 'Exigências'],
          linhas: [
            ['Plataformas de streaming', 'Distribuidora digital, metadados completos, licenciamento das obras'],
            ['Vídeo em plataforma pública', 'Direitos de obra e edição; as plataformas identificam automaticamente'],
            ['Portfólio pessoal ou candidaturas', 'Formato exigido pelo edital; normalmente sem cortes'],
            ['Mídia física', 'Ficha técnica completa, ISRC, créditos de todos os envolvidos']
          ],
          legenda: 'Em qualquer destino, creditar compositor, edição usada, técnico e local de gravação é prática profissional mínima.'
        },
        {
          t: 'check', chave: 'gravacao8', titulo: 'Planeje um registro',
          itens: [
            'Defini o conceito do projeto em uma frase.',
            'Escolhi o repertório e verifiquei os direitos de cada obra e edição.',
            'Montei o cronograma das seis fases.',
            'Fiz uma gravação de teste completa em pré-produção.',
            'Planejei as sessões com limite de quatro horas.',
            'Defini o destino da publicação e as exigências dele.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Projeto de gravação', rodadas: 5,
          perguntas: [
            { texto: 'Por que preparar o repertório acima do nível de concerto?', opcoes: ['O microfone registra o que o público não ouve', 'Porque a gravação é mais longa', 'Por exigência das plataformas', 'Para tocar mais rápido'], correta: 0, explicacao: 'Detalhes imperceptíveis ao vivo aparecem.' },
            { texto: 'Qual é o maior inimigo da sessão de gravação?', opcoes: ['A possibilidade de repetir', 'O ruído da sala', 'O microfone', 'O cansaço'], correta: 0, explicacao: 'Reduz o compromisso com cada tomada.' },
            { texto: 'Por qual peça começar a sessão?', opcoes: ['A mais difícil, com a mão descansada', 'A mais fácil', 'A primeira do álbum', 'A mais curta'], correta: 0, explicacao: 'Energia e frescor vão para onde mais importa.' },
            { texto: 'Qual é a duração máxima recomendada de uma sessão?', opcoes: ['Quatro horas, com pausas', 'Oito horas', 'Duas horas', 'O dia inteiro'], correta: 0, explicacao: 'Depois disso a qualidade cai.' },
            { texto: 'O que creditar numa publicação profissional?', opcoes: ['Compositor, edição usada, técnico e local', 'Apenas o intérprete', 'Apenas o compositor', 'Nada é obrigatório'], correta: 0, explicacao: 'É prática mínima.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Ouvir cada tomada logo depois de gravá-la.', certo: 'Três tomadas antes de ouvir qualquer coisa.' },
            { erro: 'Gravar oito horas seguidas.', certo: 'Quatro horas no máximo, com pausas.' },
            { erro: 'Tratar a tomada como descartável.', certo: 'Toque cada uma como se fosse a única.' },
            { erro: 'Publicar sem verificar direitos da edição.', certo: 'Obra e edição são verificações separadas.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Um registro precisa de conceito, não apenas de boas peças.',
            'Seis fases, do conceito à finalização; preparação de 4 a 8 meses.',
            'O nível de gravação é acima do nível de concerto.',
            'Comece pela peça mais difícil; três tomadas antes de ouvir.',
            'A possibilidade de repetir é o maior inimigo: toque cada tomada como única.',
            'Verifique direitos de obra e de edição; credite todos os envolvidos.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a duração usual de um álbum?', opcoes: ['45 a 70 minutos', '20 minutos', '90 minutos', '2 horas'], correta: 0, explicacao: 'Funciona bem para a escuta.' },
        { texto: 'Quanto tempo de preparação para um projeto de gravação?', opcoes: ['4 a 8 meses', 'Duas semanas', 'Um mês', 'Dois anos'], correta: 0, explicacao: 'O nível exigido é alto.' },
        { texto: 'Quantas tomadas inteiras fazer antes de ouvir?', opcoes: ['Três', 'Uma', 'Dez', 'Até acertar'], correta: 0, explicacao: 'Ouvir no meio destrói a execução.' },
        { texto: 'Trechos de segurança servem para:', opcoes: ['Eventuais cortes na edição', 'Aquecimento', 'Teste de som', 'Substituir tomadas inteiras'], correta: 0, explicacao: 'Gravados depois das tomadas completas.' },
        { texto: 'Antes de publicar, é preciso verificar os direitos:', opcoes: ['Da obra e da edição usada', 'Só da obra', 'Só da edição', 'Nenhum, se for domínio público'], correta: 0, explicacao: 'São duas coisas diferentes.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar o conceito e o repertório de um projeto, com direitos verificados.',
          'Entregar o cronograma completo das seis fases.',
          'Realizar uma sessão de teste com três tomadas inteiras.',
          'Apresentar a seleção da melhor tomada com justificativa.'
        ],
        criterio: 'Você domina quando conclui uma gravação de pelo menos três peças com qualidade publicável e direitos resolvidos.'
      }
    },

    {
      id: 'n8.1.8',
      titulo: 'Pesquisa acadêmica em música',
      resumo: 'Investigar com método e escrever o que você descobriu.',
      minutos: 20,
      disciplinas: ['historia', 'teoria'],
      prereq: ['n8.1.2'],
      status: 'implementado',
      cobre: ['Pesquisa acadêmica'],
      objetivo: 'Formular uma pergunta de pesquisa em música e conduzir uma investigação com método e fontes confiáveis.',
      blocos: [
        { t: 'p', x: 'Pesquisa acadêmica em música não é só para quem faz mestrado. Qualquer violonista que queira editar uma obra, resgatar um repertório ou entender a fundo uma prática histórica acaba fazendo pesquisa — e fazer com método produz resultado confiável em vez de opinião.' },
        { t: 'h', x: 'Tipos de pesquisa em música' },
        {
          t: 'tabela',
          cab: ['Tipo', 'Pergunta típica', 'Produto'],
          linhas: [
            ['Histórica', 'Como se tocava esta música em 1750?', 'Artigo, edição informada'],
            ['Analítica', 'Como esta obra é construída?', 'Análise publicada'],
            ['Edição crítica', 'Qual é o texto mais confiável desta obra?', 'Partitura com relatório de fontes'],
            ['Performance (prática como pesquisa)', 'O que descubro ao preparar esta obra?', 'Gravação comentada, texto reflexivo'],
            ['Pedagógica', 'Este método funciona melhor que aquele?', 'Estudo com dados de alunos'],
            ['Etnomusicológica', 'Como esta prática funciona nesta comunidade?', 'Trabalho de campo documentado']
          ]
        },
        { t: 'h', x: 'A pergunta de pesquisa' },
        {
          t: 'comparar',
          a: { titulo: 'Pergunta ruim', itens: ['"A vida de Tárrega"', 'Ampla demais', 'Já respondida', 'Sem recorte', 'Não dá para concluir nada'] },
          b: { titulo: 'Pergunta boa', itens: ['"Que indicações de dedilhado Tárrega deixou em manuscritos, e como diferem das edições póstumas?"', 'Recortada', 'Verificável', 'Com fontes acessíveis', 'Leva a uma conclusão'] }
        },
        { t: 'h', x: 'Fontes: primárias e secundárias' },
        {
          t: 'tabela',
          cab: ['Tipo', 'Exemplos', 'Papel'],
          linhas: [
            ['Primária', 'Manuscrito, primeira edição, carta, tratado da época, gravação histórica', 'A evidência'],
            ['Secundária', 'Biografia, artigo, tese, livro de análise', 'A interpretação de outros'],
            ['Terciária', 'Enciclopédia, verbete, resumo', 'Ponto de partida apenas']
          ],
          legenda: 'Uma pesquisa que só usa fontes secundárias repete o que já foi dito. A contribuição vem do contato com as primárias.'
        },
        { t: 'h', x: 'O processo' },
        {
          t: 'passos', itens: [
            'Formule a pergunta e verifique se já foi respondida: procure teses, artigos e edições existentes.',
            'Levante as fontes primárias disponíveis e onde estão.',
            'Leia a bibliografia secundária relevante, anotando o que cada autor afirma e com que evidência.',
            'Examine as fontes primárias e registre sistematicamente o que encontrar.',
            'Compare: o que as fontes mostram e o que a literatura afirma coincidem?',
            'Escreva: pergunta, método, evidências, discussão, conclusão e limitações.',
            'Cite tudo. Afirmação sem fonte é opinião.'
          ]
        },
        {
          t: 'dica', titulo: 'A seção mais valiosa e mais esquecida: ',
          x: 'as limitações. Dizer o que a sua pesquisa *não* conseguiu estabelecer aumenta a confiabilidade de tudo o que ela estabelece. Trabalhos que afirmam demais são os menos confiáveis.'
        },
        {
          t: 'check', chave: 'pesquisaacad', titulo: 'Conduza uma investigação',
          itens: [
            'Formulei uma pergunta recortada e verificável.',
            'Verifiquei se ela já foi respondida.',
            'Localizei pelo menos uma fonte primária.',
            'Li três fontes secundárias e anotei suas afirmações e evidências.',
            'Comparei fontes primárias e literatura.',
            'Escrevi um texto com pergunta, método, evidências, conclusão e limitações.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Método de pesquisa', rodadas: 5,
          perguntas: [
            { texto: 'O que é uma fonte primária em musicologia?', opcoes: ['Manuscrito, primeira edição, carta ou tratado da época', 'Uma biografia', 'Um artigo acadêmico', 'Uma enciclopédia'], correta: 0, explicacao: 'É a evidência direta.' },
            { texto: 'Uma boa pergunta de pesquisa é:', opcoes: ['Recortada, verificável e com fontes acessíveis', 'Ampla e ambiciosa', 'Sobre um grande compositor', 'Original acima de tudo'], correta: 0, explicacao: 'Precisa levar a uma conclusão.' },
            { texto: 'Pesquisa que usa só fontes secundárias:', opcoes: ['Repete o que já foi dito', 'É mais confiável', 'É mais rápida e igualmente válida', 'Não é pesquisa'], correta: 0, explicacao: 'A contribuição vem das primárias.' },
            { texto: 'Por que incluir uma seção de limitações?', opcoes: ['Aumenta a confiabilidade do que foi estabelecido', 'Por exigência formal', 'Para encurtar o texto', 'Para evitar críticas'], correta: 0, explicacao: 'Afirmar demais reduz a credibilidade.' },
            { texto: 'O que é "prática como pesquisa"?', opcoes: ['Investigar a partir do processo de preparar e executar uma obra', 'Tocar muito', 'Ensaiar com método', 'Gravar e publicar'], correta: 0, explicacao: 'O produto inclui gravação comentada e texto reflexivo.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Começar a escrever antes de levantar fontes.', certo: 'A evidência vem primeiro.' },
            { erro: 'Afirmar sem citar.', certo: 'Afirmação sem fonte é opinião.' },
            { erro: 'Escolher uma pergunta ampla demais.', certo: 'Recorte até caber no tempo e nas fontes disponíveis.' },
            { erro: 'Omitir as limitações.', certo: 'Elas aumentam a confiabilidade do trabalho.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Seis tipos de pesquisa em música, da histórica à prática como pesquisa.',
            'Boa pergunta: recortada, verificável, com fontes acessíveis.',
            'Fontes primárias são a evidência; secundárias, a interpretação de outros.',
            'Processo: pergunta, levantamento, leitura, exame das fontes, comparação, escrita.',
            'Cite tudo e declare as limitações.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual destas é uma fonte primária?', opcoes: ['A primeira edição de uma obra', 'Uma biografia moderna', 'Um verbete de enciclopédia', 'Uma tese sobre o compositor'], correta: 0, explicacao: 'Evidência direta da época.' },
        { texto: 'Qual pergunta é mais adequada a uma pesquisa?', opcoes: ['Como os dedilhados de Tárrega em manuscrito diferem das edições póstumas?', 'A vida de Tárrega', 'O violão espanhol', 'A história da música'], correta: 0, explicacao: 'Recortada e verificável.' },
        { texto: 'Uma edição crítica produz:', opcoes: ['Partitura acompanhada de relatório de fontes', 'Uma gravação', 'Um artigo histórico', 'Um método'], correta: 0, explicacao: 'O relatório justifica cada decisão.' },
        { texto: 'Afirmação sem fonte é:', opcoes: ['Opinião', 'Hipótese', 'Conclusão', 'Evidência'], correta: 0, explicacao: 'Por isso se cita tudo.' },
        { texto: 'A seção de limitações serve para:', opcoes: ['Delimitar o que não foi estabelecido', 'Desculpar falhas', 'Reduzir o texto', 'Agradecer'], correta: 0, explicacao: 'Fortalece o que foi estabelecido.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Formular uma pergunta de pesquisa recortada e verificável.',
          'Localizar e descrever ao menos uma fonte primária.',
          'Resumir três fontes secundárias com suas evidências.',
          'Escrever um texto curto com método, evidências, conclusão e limitações.'
        ],
        criterio: 'Você domina quando produz um texto em que cada afirmação está apoiada numa fonte identificável.'
      }
    },

    {
      id: 'n8.1.9',
      titulo: 'Composição e arranjo continuados',
      resumo: 'Escrever regularmente, não só quando dá vontade.',
      minutos: 20,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n6.1.7'],
      status: 'implementado',
      cobre: ['Composição e arranjo'],
      objetivo: 'Manter uma prática regular de composição e arranjo, com método de trabalho e revisão.',
      blocos: [
        { t: 'p', x: 'No Nível 6 você aprendeu um método para compor uma peça. Aqui o assunto é manter a prática — escrever com regularidade, acumular material, revisar e eventualmente publicar. A diferença entre quem compôs uma peça e quem é compositor é a continuidade.' },
        { t: 'h', x: 'A rotina de escrita' },
        {
          t: 'lista', itens: [
            'Horário fixo, mesmo que curto: trinta minutos três vezes por semana vence quatro horas esporádicas.',
            'Caderno de ideias: anote motivos, progressões, texturas que aparecerem. A maior parte não vai servir, e tudo bem.',
            'Comece sempre com uma restrição: forma, duração, técnica, tonalidade. A folha em branco paralisa.',
            'Termine o que começa, mesmo mal. Peça terminada ruim ensina mais que esboço bonito.',
            'Separe escrita de julgamento: escreva primeiro, avalie depois. Julgar enquanto escreve trava.'
          ]
        },
        {
          t: 'dica', titulo: 'A regra do rascunho feio: ',
          x: 'o primeiro rascunho só precisa existir. Coerência, equilíbrio e elegância são trabalho de revisão. Compositores que exigem perfeição no primeiro jato escrevem pouquíssimo.'
        },
        { t: 'h', x: 'Arranjar como prática contínua' },
        {
          t: 'tabela',
          cab: ['Projeto de arranjo', 'O que desenvolve', 'Dificuldade'],
          linhas: [
            ['Canção popular para violão solo', 'Textura, densidade, condução de baixo', 'Média'],
            ['Peça de outro instrumento para violão', 'Transcrição, decisões de oitava e omissão', 'Média a alta'],
            ['Peça própria para dois violões', 'Divisão de material, equilíbrio entre partes', 'Média'],
            ['Arranjo para conjunto de níveis mistos', 'Adequação de dificuldade por parte', 'Alta (pedagogicamente)'],
            ['Variações sobre tema próprio', 'Técnica de variação e forma', 'Alta']
          ]
        },
        {
          t: 'pauta', bpm: 66, numerar: true, quebrar: 4,
          txt: 'd4/c f4/c a4/c d5/c c5/c a4/c f4/c d4/c | c4/c e4/c g4/c c5/c bb4/c g4/c e4/c c4/c | bb3/c d4/c f4/c bb4/c a4/c f4/c d4/c bb3/c | a3+e4+a4/o',
          legenda: 'Material de partida: uma progressão em Ré menor com arpejo contínuo. Use-a como base para escrever quatro variações, cada uma mudando uma só coisa.'
        },
        { t: 'h', x: 'Revisar' },
        {
          t: 'passos', itens: [
            'Deixe a peça descansar pelo menos uma semana.',
            'Toque-a inteira e marque onde hesita: hesitação indica escrita confusa.',
            'Verifique a economia: tudo deriva do material inicial? O que não deriva precisa justificar-se.',
            'Verifique a execução: há passagem impossível ou desconfortável sem motivo musical?',
            'Peça a outro violonista para ler. O que ele estranhar provavelmente precisa mudar.',
            'Escreva a versão final limpa, com dedilhado, dinâmica e indicações de posição.'
          ]
        },
        { t: 'h', x: 'Publicar o que você escreve' },
        {
          t: 'lista', itens: [
            'A obra é sua desde que é criada; o registro apenas facilita a prova de autoria.',
            'Partituras bem diagramadas, com dedilhado completo, são usadas; rascunhos não.',
            'Gravar a própria peça é a melhor forma de fazê-la circular.',
            'Se arranjar obra protegida, a publicação do arranjo exige autorização do titular.',
            'Arranjos de obras em domínio público podem ser publicados livremente, e o seu trabalho de arranjo é seu.'
          ]
        },
        {
          t: 'check', chave: 'composicao8', titulo: 'Mantenha a prática',
          itens: [
            'Defini um horário fixo de escrita na semana.',
            'Comecei um caderno de ideias.',
            'Escrevi uma peça curta do começo ao fim, mesmo imperfeita.',
            'Revisei uma peça depois de uma semana de descanso.',
            'Pedi a outro violonista para ler algo meu.',
            'Produzi uma partitura final limpa, com dedilhado.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Prática continuada', rodadas: 5,
          perguntas: [
            { texto: 'O que diferencia quem compôs uma peça de quem é compositor?', opcoes: ['A continuidade da prática', 'O talento', 'A formação', 'A publicação'], correta: 0, explicacao: 'Regularidade acima de inspiração.' },
            { texto: 'Qual é a função da restrição inicial?', opcoes: ['Evitar a paralisia da folha em branco', 'Limitar a criatividade', 'Facilitar a execução', 'Reduzir o tempo'], correta: 0, explicacao: 'Ela dá um ponto de partida.' },
            { texto: 'O primeiro rascunho precisa ser:', opcoes: ['Existir', 'Perfeito', 'Curto', 'Tocável'], correta: 0, explicacao: 'Qualidade é trabalho de revisão.' },
            { texto: 'Hesitar ao tocar a própria peça indica:', opcoes: ['Escrita confusa naquele ponto', 'Falta de estudo', 'Andamento errado', 'Dificuldade técnica normal'], correta: 0, explicacao: 'Revise em vez de insistir.' },
            { texto: 'Publicar um arranjo de obra protegida:', opcoes: ['Exige autorização do titular', 'É livre', 'Depende da duração', 'Só exige crédito'], correta: 0, explicacao: 'O arranjo é obra derivada.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Esperar inspiração.', certo: 'Horário fixo e restrição inicial.' },
            { erro: 'Julgar enquanto escreve.', certo: 'Escreva primeiro, avalie depois.' },
            { erro: 'Abandonar esboços sem terminar.', certo: 'Peça terminada ruim ensina mais que esboço bonito.' },
            { erro: 'Distribuir rascunhos ilegíveis.', certo: 'Partitura limpa e com dedilhado é o que circula.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Regularidade vence inspiração: horário fixo, mesmo curto.',
            'Caderno de ideias e restrição inicial resolvem a folha em branco.',
            'Termine o que começa; o primeiro rascunho só precisa existir.',
            'Revise depois de descansar, verificando economia e execução.',
            'Partitura limpa com dedilhado é o que circula; gravar faz a peça existir.',
            'Arranjo de obra protegida exige autorização para publicar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual rotina produz mais resultado?', opcoes: ['Trinta minutos três vezes por semana', 'Quatro horas uma vez por mês', 'Escrever quando houver inspiração', 'Um dia inteiro por semestre'], correta: 0, explicacao: 'Regularidade acumula.' },
        { texto: 'Para que serve o caderno de ideias?', opcoes: ['Acumular material que mais tarde pode virar peça', 'Registrar aulas', 'Anotar repertório', 'Planejar estudos'], correta: 0, explicacao: 'A maior parte não serve, e tudo bem.' },
        { texto: 'Quanto tempo deixar a peça descansar antes de revisar?', opcoes: ['Pelo menos uma semana', 'Um dia', 'Um mês', 'Nenhum'], correta: 0, explicacao: 'O distanciamento revela problemas.' },
        { texto: 'Por que pedir a outro violonista para ler sua peça?', opcoes: ['O que ele estranhar provavelmente precisa mudar', 'Para elogios', 'Para divulgação', 'Para copiar a digitação'], correta: 0, explicacao: 'Leitura externa expõe o que você não vê.' },
        { texto: 'Arranjo de obra em domínio público:', opcoes: ['Pode ser publicado livremente, e o trabalho de arranjo é seu', 'Exige autorização', 'Não pode ser publicado', 'Pertence ao domínio público automaticamente'], correta: 0, explicacao: 'A obra base é livre; o seu arranjo é obra sua.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Apresentar uma rotina de escrita em funcionamento há pelo menos um mês.',
          'Entregar uma peça curta terminada e revisada.',
          'Entregar um arranjo próprio, com dedilhado completo.',
          'Tocar as duas e explicar as decisões de revisão.'
        ],
        criterio: 'Você domina quando mantém uma prática regular de escrita e produz partituras limpas que outro violonista consegue tocar.'
      }
    },

    {
      id: 'n8.1.10',
      titulo: 'Desenvolvimento de carreira musical',
      resumo: 'Como se sustenta uma vida em torno do violão.',
      minutos: 22,
      disciplinas: ['conjunto', 'interpretacao'],
      prereq: ['n7.2.6', 'n8.1.1'],
      status: 'implementado',
      cobre: ['Desenvolvimento de carreira musical'],
      objetivo: 'Mapear as formas de atuação profissional em música e construir um plano realista de carreira.',
      blocos: [
        { t: 'p', x: 'Quase nenhum músico vive de uma coisa só. A carreira típica é um mosaico: aulas, apresentações, gravações, arranjos, projetos. Entender isso cedo evita a frustração de medir o sucesso por um único critério — normalmente o de concertista, que é o mais raro de todos.' },
        { t: 'h', x: 'As formas de atuação' },
        {
          t: 'tabela',
          cab: ['Atividade', 'Estabilidade', 'O que exige além de tocar'],
          linhas: [
            ['Ensino particular', 'Alta', 'Didática, organização, relacionamento'],
            ['Ensino institucional', 'Alta', 'Formação acadêmica, concursos, titulação'],
            ['Concertos solo', 'Baixa', 'Repertório grande, rede de contatos, produção'],
            ['Música de câmara e conjunto', 'Média', 'Convívio, flexibilidade, ensaios'],
            ['Acompanhamento', 'Média', 'Leitura, versatilidade, pontualidade'],
            ['Gravação e trilhas', 'Variável', 'Leitura rápida, estúdio, prazos'],
            ['Arranjo e composição por encomenda', 'Variável', 'Prazos, software de notação, comunicação'],
            ['Produção e curadoria', 'Média', 'Organização, captação, relacionamento']
          ]
        },
        {
          t: 'dica', titulo: 'A combinação mais comum: ',
          x: 'ensino como base estável, apresentações e projetos como atividade artística, e trabalhos eventuais de arranjo ou gravação. Não é concessão: é o arranjo que permite escolher o que tocar.'
        },
        { t: 'h', x: 'O que é preciso além de tocar' },
        {
          t: 'lista', itens: [
            '*Material de apresentação*: biografia curta, foto, duas ou três gravações em vídeo, repertório disponível.',
            '*Presença localizável*: uma página simples que exista quando alguém procurar seu nome.',
            '*Rede*: colegas, ex-professores, alunos, produtores. A maior parte do trabalho vem de indicação.',
            '*Organização financeira*: preço por aula e por apresentação definidos, controle de receitas e despesas.',
            '*Pontualidade e palavra*: a reputação profissional se constrói com isso mais do que com virtuosismo.'
          ]
        },
        { t: 'h', x: 'Precificar o próprio trabalho' },
        {
          t: 'passos', itens: [
            'Levante o que se pratica na sua cidade, conversando com colegas.',
            'Calcule o custo real da hora: deslocamento, preparação, impostos, material, horas não pagas.',
            'Defina um preço e mantenha-o: descontos pontuais tudo bem, preço variável por cliente não.',
            'Para apresentações, considere repertório novo, ensaios e deslocamento, não só o tempo no palco.',
            'Contratos simples por escrito, mesmo informais, evitam a maior parte dos problemas.'
          ]
        },
        {
          t: 'aviso', x: 'Tocar de graça tem lugar — projetos sociais, começo de carreira, causas em que você acredita. O problema é tocar de graça para quem tem orçamento, porque isso desvaloriza o trabalho de todos. A pergunta útil é: existe orçamento neste evento? Se existe e não é para o músico, há um problema.'
        },
        { t: 'h', x: 'Sustentar a carreira ao longo do tempo' },
        {
          t: 'lista', itens: [
            '*Saúde física*: lesão por esforço repetitivo encerra carreiras. Pausas, postura e limites não são opcionais.',
            '*Saúde mental*: a profissão tem instabilidade, comparação constante e avaliação pública. Rede de apoio importa.',
            '*Estudo continuado*: quem para de estudar estagnou, mesmo tocando bem.',
            '*Diversificação*: ter duas ou três fontes de renda protege de crises em qualquer uma.',
            '*Prazo longo*: carreiras em música se constroem em décadas, não em anos.'
          ]
        },
        {
          t: 'check', chave: 'carreira', titulo: 'Construa o seu plano',
          itens: [
            'Mapeei as formas de atuação que combinam comigo.',
            'Escrevi uma biografia curta.',
            'Gravei duas apresentações em vídeo.',
            'Defini preços de aula e de apresentação.',
            'Listei dez pessoas da minha rede profissional.',
            'Escrevi um plano de três anos com metas concretas.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Carreira em música', rodadas: 6,
          perguntas: [
            { texto: 'Qual é a configuração típica de carreira em música?', opcoes: ['Um mosaico de várias atividades', 'Apenas concertos', 'Apenas ensino', 'Apenas gravação'], correta: 0, explicacao: 'Quase ninguém vive de uma coisa só.' },
            { texto: 'Qual atividade oferece mais estabilidade?', opcoes: ['Ensino', 'Concertos solo', 'Trilhas', 'Produção'], correta: 0, explicacao: 'Por isso costuma ser a base.' },
            { texto: 'De onde vem a maior parte do trabalho?', opcoes: ['Indicação da rede de contatos', 'Editais', 'Redes sociais', 'Agências'], correta: 0, explicacao: 'Relacionamento profissional é decisivo.' },
            { texto: 'Ao precificar, o que considerar além do tempo no palco?', opcoes: ['Preparação, ensaios, deslocamento e impostos', 'Apenas a duração', 'O prestígio do evento', 'O público esperado'], correta: 0, explicacao: 'O custo real da hora é maior do que parece.' },
            { texto: 'Qual é a pergunta útil diante de um convite sem cachê?', opcoes: ['Existe orçamento no evento?', 'Quem mais vai tocar?', 'Quantas pessoas virão?', 'Haverá gravação?'], correta: 0, explicacao: 'Se há orçamento e não é para o músico, há um problema.' },
            { texto: 'O que mais encerra carreiras precocemente?', opcoes: ['Lesão por esforço repetitivo', 'Falta de talento', 'Concorrência', 'Mudança de repertório'], correta: 0, explicacao: 'Postura, pausas e limites são essenciais.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Medir o sucesso só pelo critério de concertista.', certo: 'É o caminho mais raro; há muitos outros.' },
            { erro: 'Preço variável conforme o cliente.', certo: 'Defina e mantenha; descontos pontuais tudo bem.' },
            { erro: 'Ignorar dor e cansaço.', certo: 'Lesão encerra carreira.' },
            { erro: 'Esperar resultados em dois anos.', certo: 'Carreiras em música se constroem em décadas.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'A carreira típica é um mosaico: ensino, apresentações, gravações, arranjos, projetos.',
            'O ensino costuma ser a base estável que permite escolher o que tocar.',
            'Além de tocar: material de apresentação, presença localizável, rede, organização e palavra.',
            'Precifique pelo custo real da hora e mantenha o preço.',
            'Saúde física e mental, estudo continuado e diversificação sustentam a carreira.',
            'O prazo é de décadas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual combinação de atividades é a mais comum?', opcoes: ['Ensino como base, apresentações e projetos como atividade artística', 'Só concertos', 'Só gravações', 'Só arranjos'], correta: 0, explicacao: 'Estabilidade mais liberdade artística.' },
        { texto: 'O que compõe o material mínimo de apresentação?', opcoes: ['Biografia curta, foto, vídeos e lista de repertório', 'Currículo acadêmico', 'Diploma', 'Cartão de visita'], correta: 0, explicacao: 'É o que as pessoas pedem.' },
        { texto: 'Ao calcular o preço da hora de aula, inclui-se:', opcoes: ['Deslocamento, preparação, impostos e horas não pagas', 'Apenas o tempo da aula', 'O preço do colega', 'O valor do instrumento'], correta: 0, explicacao: 'O custo real é maior que a hora em si.' },
        { texto: 'Tocar de graça é problemático quando:', opcoes: ['O evento tem orçamento que não contempla o músico', 'É um projeto social', 'É o começo da carreira', 'É uma causa em que você acredita'], correta: 0, explicacao: 'Aí desvaloriza o trabalho de todos.' },
        { texto: 'Em que prazo se constroem carreiras em música?', opcoes: ['Décadas', 'Dois anos', 'Cinco anos', 'Seis meses'], correta: 0, explicacao: 'Paciência faz parte do ofício.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Entregar biografia curta, duas gravações em vídeo e lista de repertório.',
          'Apresentar a precificação de aula e de apresentação, com o cálculo.',
          'Mapear dez contatos da rede profissional e como cada um se relaciona com o seu trabalho.',
          'Escrever um plano de três anos com metas concretas e verificáveis.'
        ],
        criterio: 'Você domina quando tem material de apresentação pronto, preços definidos e um plano com metas que você consegue verificar daqui a um ano.'
      }
    }
  ]
};
