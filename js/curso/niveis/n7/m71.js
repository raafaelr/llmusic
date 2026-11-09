// NÍVEL 7 — MÓDULO 7.1: Pedagogia musical
// Como as pessoas aprendem música, como se planeja uma aula e como se avalia
// o progresso de um aluno. Base teórica para quem vai ensinar.

export const M71 = {
  id: '7.1',
  titulo: 'Pedagogia musical',
  resumo: 'O que se sabe sobre como alguém aprende um instrumento — e como transformar esse conhecimento em aula.',
  aulas: [
    {
      id: 'n7.1.1',
      titulo: 'Metodologia do ensino musical e sua história',
      resumo: 'As grandes correntes pedagógicas e o que cada uma deixou de útil.',
      minutos: 22,
      disciplinas: ['teoria', 'historia'],
      prereq: ['n6.2.2'],
      status: 'validado',
      cobre: ['Metodologia do ensino musical', 'História da pedagogia musical'],
      objetivo: 'Conhecer as principais metodologias de educação musical e escolher, com critério, o que aplicar no ensino de violão.',
      blocos: [
        { t: 'p', x: 'Ensinar música não é transmitir o que você sabe: é construir um caminho para que outra pessoa descubra. No século XX, várias escolas tentaram sistematizar esse caminho, e cada uma acertou em alguma coisa. Conhecê-las evita reinventar — e evita adotar uma só como se fosse a verdade.' },
        { t: 'h', x: 'As cinco grandes correntes' },
        {
          t: 'tabela',
          cab: ['Método', 'Ideia central', 'Contribuição duradoura'],
          linhas: [
            ['Dalcroze (1865–1950)', 'O corpo aprende o ritmo antes da cabeça', 'Movimento corporal como base da percepção rítmica'],
            ['Kodály (1882–1967)', 'A voz é o primeiro instrumento; parte-se do folclore', 'Solfejo relativo, manossolfa, canto antes da leitura'],
            ['Orff (1895–1982)', 'Música, palavra e movimento são inseparáveis', 'Improvisação e criação desde o primeiro dia'],
            ['Suzuki (1898–1998)', 'Aprende-se música como se aprende a língua materna', 'Imitação, repetição, participação da família, ouvir muito'],
            ['Willems e Gainza', 'A percepção auditiva precede qualquer notação', 'Ordem: ouvir, cantar, tocar, ler, escrever']
          ]
        },
        {
          t: 'dica', titulo: 'O que todas têm em comum: ',
          x: 'som antes de símbolo. Nenhuma delas começa pela partitura. O aluno ouve, canta, imita e toca; só depois aprende a escrever o que já sabe fazer.'
        },
        { t: 'h', x: 'A sequência que funciona' },
        {
          t: 'passos', itens: [
            '*Ouvir*: o aluno escuta o que vai aprender, várias vezes, antes de tocar.',
            '*Imitar*: reproduz de ouvido, sem partitura, ainda que imperfeitamente.',
            '*Entender*: nomeia o que fez — essa nota é a tônica, esse ritmo é uma síncope.',
            '*Ler*: encontra na partitura o que já sabe tocar.',
            '*Criar*: improvisa ou compõe usando o mesmo material.'
          ]
        },
        { t: 'p', x: 'Essa sequência vale para qualquer conteúdo, em qualquer idade: um acorde novo, uma escala, uma figura rítmica. Inverter a ordem — começar pela notação — é o erro pedagógico mais comum no ensino de violão, e a causa mais frequente de alunos que leem sem compreender.' },
        { t: 'h', x: 'A tradição específica do violão' },
        {
          t: 'tabela',
          cab: ['Método', 'Época', 'Característica'],
          linhas: [
            ['Sor, Método para Guitarra', '1830', 'Reflexivo e analítico; discute o porquê de cada escolha'],
            ['Aguado, Nuevo Método', '1843', 'Sistemático, com progressão técnica rigorosa'],
            ['Carcassi, Método Op. 59', '1836', 'Prático e progressivo; ainda muito usado'],
            ['Carulli, Método Op. 27', '1810', 'Didático, com peças desde as primeiras lições'],
            ['Pujol, Escuela Razonada', '1934', 'Herdeiro de Tárrega; o mais completo do século XX'],
            ['Métodos brasileiros (Henrique Pinto, Isaias Sávio)', 'séc. XX', 'Progressão adaptada à realidade do aluno brasileiro']
          ],
          legenda: 'Os métodos históricos de Sor, Aguado, Carcassi e Carulli estão em domínio público e podem ser usados livremente.'
        },
        {
          t: 'comparar',
          a: { titulo: 'Ensino centrado no método', itens: ['Segue a ordem do livro', 'Mesma sequência para todos', 'Fácil de planejar', 'Risco: aluno desmotivado com conteúdo que não escolheu'] },
          b: { titulo: 'Ensino centrado no aluno', itens: ['Parte do que o aluno quer tocar', 'Sequência adaptada', 'Exige mais preparo do professor', 'Risco: lacunas técnicas se não houver plano'] }
        },
        { t: 'p', x: 'A prática madura combina os dois: o professor tem um mapa técnico completo na cabeça e usa as músicas que o aluno quer tocar como veículo para percorrê-lo.' },
        {
          t: 'check', chave: 'metodologia', titulo: 'Aplique ao seu caso',
          itens: [
            'Identifiquei qual sequência (ouvir–imitar–entender–ler–criar) foi usada comigo.',
            'Escolhi um conteúdo e planejei ensiná-lo nas cinco etapas.',
            'Consultei um método histórico em domínio público.',
            'Listei três músicas que um aluno poderia querer tocar e o que cada uma ensina tecnicamente.',
            'Escrevi, em uma frase, qual é a minha posição entre método e aluno.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Correntes pedagógicas', rodadas: 6,
          perguntas: [
            { texto: 'Qual método parte da ideia de que a música se aprende como a língua materna?', opcoes: ['Suzuki', 'Kodály', 'Orff', 'Dalcroze'], correta: 0, explicacao: 'Imitação, repetição e imersão sonora.' },
            { texto: 'Dalcroze contribuiu sobretudo com:', opcoes: ['O movimento corporal como base do ritmo', 'O solfejo relativo', 'A improvisação', 'O uso do folclore'], correta: 0, explicacao: 'A rítmica corporal é a marca do método.' },
            { texto: 'O que todas as grandes metodologias têm em comum?', opcoes: ['Som antes de símbolo', 'Começar pela partitura', 'Uso de metrônomo', 'Aulas em grupo'], correta: 0, explicacao: 'A notação vem depois da experiência sonora.' },
            { texto: 'Qual é a ordem recomendada para ensinar um conteúdo novo?', opcoes: ['Ouvir, imitar, entender, ler, criar', 'Ler, tocar, ouvir', 'Entender, ler, tocar', 'Criar, ler, ouvir'], correta: 0, explicacao: 'Inverter é o erro mais comum.' },
            { texto: 'Qual método de violão do século XX é herdeiro direto de Tárrega?', opcoes: ['Escuela Razonada, de Pujol', 'Método de Carcassi', 'Nuevo Método, de Aguado', 'Método de Carulli'], correta: 0, explicacao: 'Pujol foi aluno de Tárrega.' },
            { texto: 'A prática madura de ensino:', opcoes: ['Combina mapa técnico do professor com as músicas que o aluno quer tocar', 'Segue só o livro', 'Deixa o aluno escolher tudo', 'Evita repertório popular'], correta: 0, explicacao: 'Estrutura com motivação.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Adotar uma metodologia como verdade única.', certo: 'Cada uma resolve bem um aspecto; combine.' },
            { erro: 'Começar pela leitura da partitura.', certo: 'Som antes de símbolo, sempre.' },
            { erro: 'Ensinar exatamente como você foi ensinado.', certo: 'O que funcionou com você pode não funcionar com o aluno.' },
            { erro: 'Seguir o método página por página sem adaptar.', certo: 'O método é mapa, não trilho.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Dalcroze, Kodály, Orff, Suzuki e Willems são as grandes correntes do século XX.',
            'Todas partem do som, não do símbolo.',
            'Sequência: ouvir, imitar, entender, ler, criar.',
            'A tradição violonística tem métodos próprios, vários em domínio público.',
            'A prática madura combina mapa técnico com repertório escolhido pelo aluno.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual metodologia enfatiza a voz e o folclore como ponto de partida?', opcoes: ['Kodály', 'Suzuki', 'Dalcroze', 'Orff'], correta: 0, explicacao: 'Canto e manossolfa antes do instrumento.' },
        { texto: 'Orff trouxe como contribuição central:', opcoes: ['Improvisação e criação desde o início', 'Solfejo relativo', 'Movimento corporal', 'Participação da família'], correta: 0, explicacao: 'Música, palavra e movimento juntos.' },
        { texto: 'Qual é o erro pedagógico mais comum no ensino de violão?', opcoes: ['Começar pela notação', 'Usar repertório popular', 'Ensinar escalas cedo', 'Usar metrônomo'], correta: 0, explicacao: 'O som precisa vir antes.' },
        { texto: 'A Escuela Razonada é de:', opcoes: ['Emilio Pujol', 'Dionisio Aguado', 'Fernando Sor', 'Matteo Carcassi'], correta: 0, explicacao: 'Obra de referência do século XX.' },
        { texto: 'Métodos de Sor, Aguado, Carcassi e Carulli estão:', opcoes: ['Em domínio público', 'Protegidos', 'Indisponíveis', 'Apenas em edições modernas pagas'], correta: 0, explicacao: 'São do século XIX.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Planejar o ensino de um conteúdo novo usando as cinco etapas.',
          'Demonstrar a etapa "ouvir e imitar" com outra pessoa.',
          'Citar três metodologias e a contribuição central de cada uma.',
          'Escolher uma música popular e listar três conteúdos técnicos que ela ensina.'
        ],
        criterio: 'Você domina quando consegue planejar o ensino de qualquer conteúdo começando pelo som e terminando na criação.'
      }
    },

    {
      id: 'n7.1.2',
      titulo: 'Psicologia da aprendizagem',
      resumo: 'Como a memória, a atenção e a motivação funcionam — e o que isso muda na aula.',
      minutos: 20,
      disciplinas: ['teoria'],
      prereq: ['n7.1.1'],
      status: 'validado',
      cobre: ['Psicologia da aprendizagem'],
      objetivo: 'Aplicar princípios de memória, atenção e motivação ao planejamento do estudo e da aula.',
      blocos: [
        { t: 'p', x: 'Muita coisa que professores fazem por intuição tem explicação, e muita coisa que parece óbvia está errada. Três áreas importam diretamente: como a memória se consolida, como a atenção se esgota e de onde vem a motivação para continuar estudando.' },
        { t: 'h', x: 'Memória: espaçamento e recuperação' },
        {
          t: 'tabela',
          cab: ['Princípio', 'O que diz', 'Aplicação no violão'],
          linhas: [
            ['Prática espaçada', 'Intervalos entre sessões consolidam melhor que blocos longos', 'Trinta minutos diários valem mais que três horas no domingo'],
            ['Prática intercalada', 'Alternar conteúdos supera repetir um só', 'Alternar escalas, peça e leitura na mesma sessão'],
            ['Recuperação ativa', 'Tentar lembrar fixa mais do que reler', 'Tocar de memória antes de olhar a partitura'],
            ['Sono', 'A consolidação acontece dormindo', 'Estudar à noite e revisar de manhã'],
            ['Dificuldade desejável', 'Um pouco de esforço melhora a retenção', 'Estudar logo abaixo do limite, não no conforto']
          ]
        },
        {
          t: 'dica', titulo: 'A descoberta mais contraintuitiva: ',
          x: 'a prática intercalada produz pior desempenho *durante* a sessão e melhor desempenho *na semana seguinte*. Repetir cem vezes a mesma passagem dá a sensação de progresso e retém pouco.'
        },
        { t: 'h', x: 'Atenção: o recurso escasso' },
        {
          t: 'lista', itens: [
            'A atenção plena dura de 20 a 40 minutos num adulto treinado; menos em crianças.',
            'Depois disso, o estudo continua, mas a qualidade cai — e repetição sem atenção fixa erros.',
            'Trocar de tarefa renova a atenção; pausas curtas também.',
            'Tocar com o celular por perto reduz a qualidade da sessão, mesmo sem usá-lo.',
            'Numa aula de uma hora, planeje três ou quatro blocos diferentes.'
          ]
        },
        { t: 'h', x: 'Motivação: por que alguém continua' },
        {
          t: 'tabela',
          cab: ['Tipo', 'Origem', 'Durabilidade', 'Como alimentar'],
          linhas: [
            ['Extrínseca', 'Nota, prova, elogio, cobrança', 'Curta', 'Usar com moderação; serve para começar'],
            ['Intrínseca', 'Prazer de tocar, curiosidade, identidade', 'Longa', 'Repertório significativo, autonomia, progresso visível']
          ]
        },
        {
          t: 'lista', itens: [
            '*Autonomia*: deixar o aluno escolher parte do repertório aumenta muito a persistência.',
            '*Competência*: metas atingíveis e progresso visível. Um aluno que não percebe que melhorou desiste.',
            '*Propósito*: tocar para alguém, numa data marcada, dá sentido ao estudo.',
            'Elogiar o *processo* ("você estudou devagar e funcionou") rende mais que elogiar o talento ("você tem facilidade").'
          ]
        },
        {
          t: 'metronomo', titulo: 'Prática espaçada na sessão', bpm: 60, compasso: '4/4',
          x: 'Use o metrônomo para cronometrar blocos de 10 minutos. Três blocos de conteúdos diferentes rendem mais que 30 minutos no mesmo exercício.'
        },
        {
          t: 'check', chave: 'psicologia', titulo: 'Aplique a si mesmo',
          itens: [
            'Dividi minha sessão de estudo em blocos de conteúdos diferentes.',
            'Toquei um trecho de memória antes de olhar a partitura.',
            'Estudei um trecho à noite e revisei na manhã seguinte.',
            'Planejei uma data para tocar para alguém.',
            'Anotei um progresso concreto da semana.',
            'Estudei 30 minutos por dia em vez de acumular no fim de semana.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Princípios da aprendizagem', rodadas: 6,
          perguntas: [
            { texto: 'O que rende mais: 30 minutos diários ou 3 horas no fim de semana?', opcoes: ['30 minutos diários', '3 horas no fim de semana', 'São equivalentes', 'Depende do nível'], correta: 0, explicacao: 'Prática espaçada consolida melhor.' },
            { texto: 'Prática intercalada significa:', opcoes: ['Alternar conteúdos diferentes na mesma sessão', 'Repetir muito a mesma passagem', 'Estudar sem metrônomo', 'Intercalar estudo e descanso'], correta: 0, explicacao: 'Pior no dia, melhor na semana seguinte.' },
            { texto: 'Recuperação ativa é:', opcoes: ['Tentar lembrar antes de consultar', 'Reler a partitura várias vezes', 'Ouvir gravações', 'Repetir o trecho'], correta: 0, explicacao: 'O esforço de lembrar é o que fixa.' },
            { texto: 'Quanto tempo dura a atenção plena de um adulto treinado?', opcoes: ['20 a 40 minutos', '5 minutos', '2 horas', 'O dia inteiro'], correta: 0, explicacao: 'Depois a qualidade cai.' },
            { texto: 'Qual tipo de motivação sustenta o estudo a longo prazo?', opcoes: ['Intrínseca', 'Extrínseca', 'As duas igualmente', 'Nenhuma'], correta: 0, explicacao: 'Prazer, curiosidade e identidade.' },
            { texto: 'Qual elogio é pedagogicamente mais eficaz?', opcoes: ['Elogiar o processo e o esforço', 'Elogiar o talento', 'Elogiar o resultado apenas', 'Não elogiar'], correta: 0, explicacao: 'Elogiar talento desencoraja diante da dificuldade.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Acumular o estudo da semana num só dia.', certo: 'Sessões curtas e diárias.' },
            { erro: 'Repetir a mesma passagem até cansar.', certo: 'Intercale conteúdos; a sensação engana.' },
            { erro: 'Planejar uma aula de uma hora com um só assunto.', certo: 'Três ou quatro blocos renovam a atenção.' },
            { erro: 'Elogiar o talento do aluno.', certo: 'Elogie o processo: é o que ele controla.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Prática espaçada e intercalada supera blocos longos de repetição.',
            'Recuperação ativa fixa mais que releitura.',
            'A atenção plena dura de 20 a 40 minutos.',
            'Motivação intrínseca sustenta o estudo; autonomia, competência e propósito a alimentam.',
            'Elogie o processo, não o talento.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual prática consolida melhor a aprendizagem?', opcoes: ['Sessões curtas e espaçadas', 'Uma sessão longa por semana', 'Repetição massiva', 'Estudo apenas antes da aula'], correta: 0, explicacao: 'O espaçamento é o fator mais robusto.' },
        { texto: 'Por que a prática intercalada parece pior durante a sessão?', opcoes: ['O desempenho imediato cai, mas a retenção aumenta', 'Ela é realmente pior', 'Cansa mais', 'Exige mais tempo'], correta: 0, explicacao: 'O ganho aparece dias depois.' },
        { texto: 'Onde acontece boa parte da consolidação da memória motora?', opcoes: ['Durante o sono', 'Durante a repetição', 'Na aula', 'Ao ouvir gravações'], correta: 0, explicacao: 'Daí a importância de dormir bem.' },
        { texto: 'Quais são os três alimentos da motivação intrínseca?', opcoes: ['Autonomia, competência e propósito', 'Nota, elogio e prova', 'Talento, tempo e técnica', 'Repertório, método e professor'], correta: 0, explicacao: 'São fatores bem documentados.' },
        { texto: 'Um aluno que não percebe seu progresso tende a:', opcoes: ['Desistir', 'Estudar mais', 'Melhorar sozinho', 'Mudar de repertório'], correta: 0, explicacao: 'Progresso visível é condição de persistência.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Montar um plano de sessão de 40 minutos com prática intercalada.',
          'Demonstrar recuperação ativa tocando um trecho de memória antes de consultar.',
          'Apresentar um registro de progresso semanal.',
          'Explicar como alimentaria a motivação intrínseca de um aluno específico.'
        ],
        criterio: 'Você domina quando organiza o próprio estudo segundo os princípios de espaçamento, intercalação e recuperação ativa, e consegue justificá-los.'
      }
    },

    {
      id: 'n7.1.3',
      titulo: 'Didática musical',
      resumo: 'Como explicar, demonstrar e corrigir de modo que o aluno entenda.',
      minutos: 20,
      disciplinas: ['teoria'],
      prereq: ['n7.1.2'],
      status: 'validado',
      cobre: ['Didática musical'],
      objetivo: 'Usar recursos didáticos concretos — demonstração, analogia, decomposição e feedback — com eficácia.',
      blocos: [
        { t: 'p', x: 'Saber tocar e saber ensinar são habilidades diferentes. A didática é o conjunto de ferramentas que transforma o que você sabe fazer em algo que o aluno consegue executar. Quatro ferramentas resolvem a maior parte das situações.' },
        { t: 'h', x: 'Ferramenta 1 — Demonstração' },
        {
          t: 'lista', itens: [
            'Demonstre *curto*: dois compassos, não a peça inteira.',
            'Demonstre *devagar* primeiro, depois no andamento.',
            'Demonstre o certo e o errado, nessa ordem — e termine sempre pelo certo.',
            'Posicione-se de modo que o aluno veja a sua mão do mesmo ângulo em que vê a dele.',
            'Depois de demonstrar, cale-se e deixe o aluno tentar.'
          ]
        },
        { t: 'h', x: 'Ferramenta 2 — Decomposição' },
        { t: 'p', x: 'Todo problema difícil é um conjunto de problemas fáceis mal separados. Decompor é identificar qual é o componente que falha e isolá-lo.' },
        {
          t: 'tabela',
          cab: ['Problema do aluno', 'Decomposição'],
          linhas: [
            ['"Não consigo esse acorde"', 'Pressão? Posição do polegar? Ângulo dos dedos? Ordem de colocação?'],
            ['"Erro sempre nesse compasso"', 'É mudança de posição? Dedilhado? Leitura? Ritmo?'],
            ['"Minha escala é irregular"', 'Mão direita desigual? Sincronia entre as mãos? Mudança de corda?'],
            ['"Travo quando aumento a velocidade"', 'Amplitude de movimento? Tensão? Preparação antecipada?']
          ]
        },
        { t: 'h', x: 'Ferramenta 3 — Analogia' },
        { t: 'p', x: 'Uma boa analogia faz o aluno sentir o movimento sem pensar nele. "Deixe o dedo cair como uma gota" produz mais resultado que "relaxe o flexor". Analogias funcionam porque acessam a memória corporal, não a compreensão técnica.' },
        {
          t: 'tabela',
          cab: ['Em vez de', 'Diga'],
          linhas: [
            ['"Relaxe a mão"', '"Deixe a mão pesar como se estivesse molhada"'],
            ['"Ataque com mais velocidade"', '"Atravesse a corda como quem passa a mão na água"'],
            ['"Pressione menos"', '"Aperte só o suficiente para a nota não chiar — procure esse ponto"'],
            ['"Toque mais legato"', '"Não deixe buraco entre as notas; uma empurra a outra"'],
            ['"Faça o ritmo direito"', '"Conte comigo em voz alta: 1 e 2 e 3 e 4 e"']
          ]
        },
        { t: 'h', x: 'Ferramenta 4 — Feedback' },
        {
          t: 'passos', itens: [
            'Observe uma coisa por vez. Corrigir cinco problemas de uma vez não corrige nenhum.',
            'Comece pelo que está funcionando — não por educação, mas porque o aluno precisa saber o que manter.',
            'Aponte o problema de forma observável: "o polegar subiu acima do braço", não "está tenso".',
            'Proponha uma ação concreta: o que fazer, não o que evitar.',
            'Peça que ele repita imediatamente e confirme se mudou.'
          ]
        },
        {
          t: 'comparar',
          a: { titulo: 'Feedback que não funciona', itens: ['"Está tenso"', '"Não faça assim"', '"Tem que soar melhor"', 'Cinco correções seguidas', 'Correção sem repetição imediata'] },
          b: { titulo: 'Feedback que funciona', itens: ['"O polegar subiu acima da borda do braço"', '"Deixe o polegar no meio do braço, atrás do dedo 2"', '"Toque de novo e me diga se o som mudou"', 'Uma correção por vez', 'Correção, repetição, confirmação'] }
        },
        {
          t: 'check', chave: 'didatica', titulo: 'Pratique as ferramentas',
          itens: [
            'Demonstrei um movimento curto, devagar e depois no andamento.',
            'Decompus um problema técnico em componentes.',
            'Criei três analogias próprias para movimentos que ensino.',
            'Dei um feedback observável e acionável a alguém.',
            'Corrigi uma coisa por vez e pedi repetição imediata.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Recursos didáticos', rodadas: 5,
          perguntas: [
            { texto: 'Uma demonstração eficaz é:', opcoes: ['Curta, devagar e depois no andamento', 'A peça inteira no andamento', 'Apenas verbal', 'Com o aluno tocando junto'], correta: 0, explicacao: 'Dois compassos bastam.' },
            { texto: 'Decompor um problema significa:', opcoes: ['Identificar e isolar o componente que falha', 'Tocar mais devagar', 'Mudar de exercício', 'Repetir mais vezes'], correta: 0, explicacao: 'Problema difícil é um conjunto mal separado de problemas fáceis.' },
            { texto: 'Por que analogias corporais funcionam?', opcoes: ['Acessam a memória corporal sem exigir compreensão técnica', 'São mais curtas', 'São engraçadas', 'Evitam termos difíceis'], correta: 0, explicacao: 'O corpo entende o que a mente ainda não.' },
            { texto: 'Quantos problemas corrigir por vez?', opcoes: ['Um', 'Três', 'Todos os observados', 'Dois ou três'], correta: 0, explicacao: 'Mais de um não é absorvido.' },
            { texto: 'Um bom feedback é:', opcoes: ['Observável e com ação concreta', 'Encorajador e geral', 'Técnico e completo', 'Dado no fim da aula'], correta: 0, explicacao: '"O polegar subiu" em vez de "está tenso".' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Demonstrar a peça inteira.', certo: 'Dois compassos, devagar.' },
            { erro: 'Dizer "está tenso" sem indicar o quê.', certo: 'Descreva o observável.' },
            { erro: 'Corrigir vários problemas de uma vez.', certo: 'Um por vez, com repetição imediata.' },
            { erro: 'Explicar demais.', certo: 'Demonstre e deixe o aluno tentar.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Quatro ferramentas: demonstração, decomposição, analogia e feedback.',
            'Demonstre curto e devagar; depois cale-se.',
            'Todo problema difícil se decompõe em componentes isoláveis.',
            'Analogias corporais funcionam melhor que explicações anatômicas.',
            'Feedback: observável, acionável, um por vez, com repetição imediata.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a extensão ideal de uma demonstração?', opcoes: ['Dois compassos', 'A peça inteira', 'Uma seção', 'Uma frase longa'], correta: 0, explicacao: 'O aluno precisa reter o que viu.' },
        { texto: 'O que torna um feedback acionável?', opcoes: ['Dizer o que fazer, não o que evitar', 'Ser encorajador', 'Ser técnico', 'Ser escrito'], correta: 0, explicacao: 'Ação concreta e observável.' },
        { texto: 'Diante de "travo quando aumento a velocidade", o professor deve:', opcoes: ['Decompor: amplitude, tensão, preparação', 'Mandar estudar mais', 'Baixar o andamento e pronto', 'Mudar a peça'], correta: 0, explicacao: 'Isolar o componente que falha.' },
        { texto: 'Depois de corrigir, o professor deve:', opcoes: ['Pedir repetição imediata e confirmar a mudança', 'Passar para o próximo ponto', 'Demonstrar de novo', 'Anotar no caderno'], correta: 0, explicacao: 'Sem repetição, a correção não se fixa.' },
        { texto: 'Por que começar o feedback pelo que funciona?', opcoes: ['Para o aluno saber o que manter', 'Por educação', 'Para ganhar tempo', 'Para motivar apenas'], correta: 0, explicacao: 'Também é informação técnica.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Demonstrar um movimento técnico em dois compassos, devagar e no andamento.',
          'Decompor um problema técnico apresentado por outra pessoa.',
          'Apresentar três analogias corporais próprias.',
          'Dar um feedback observável e acionável e confirmar a mudança.'
        ],
        criterio: 'Você domina quando consegue levar outra pessoa a mudar um movimento concreto em menos de cinco minutos.'
      }
    },

    {
      id: 'n7.1.4',
      titulo: 'Planejamento de aulas',
      resumo: 'Plano de aula, plano de semestre e o que fazer quando nada sai como planejado.',
      minutos: 20,
      disciplinas: ['teoria'],
      prereq: ['n7.1.3'],
      status: 'validado',
      cobre: ['Planejamento de aulas'],
      objetivo: 'Elaborar planos de aula e de curso com objetivos, sequência e avaliação definidos.',
      blocos: [
        { t: 'p', x: 'Um plano de aula não é um roteiro rígido: é uma hipótese sobre o que vai funcionar, com objetivos claros o bastante para você perceber quando está errado. Sem plano, a aula vira revisão do que o aluno estudou — útil, mas sem direção.' },
        { t: 'h', x: 'A estrutura de uma aula de 50 minutos' },
        {
          t: 'tabela',
          cab: ['Bloco', 'Tempo', 'Conteúdo'],
          linhas: [
            ['Aquecimento e checagem', '5 min', 'Como foi a semana, quanto estudou, alguma dor ou dificuldade'],
            ['Técnica', '10 min', 'Um exercício, com objetivo claro e medida (andamento, qualidade)'],
            ['Peça em andamento', '20 min', 'Dois ou três pontos de trabalho, nunca a peça inteira repetida'],
            ['Conteúdo novo', '10 min', 'Teoria, leitura ou início de peça nova'],
            ['Fechamento', '5 min', 'O que estudar, como estudar e quanto tempo em cada coisa']
          ],
          legenda: 'O fechamento é o bloco mais negligenciado e o mais importante: é ele que define a semana do aluno.'
        },
        { t: 'h', x: 'O objetivo de aula' },
        {
          t: 'comparar',
          a: { titulo: 'Objetivo vago', itens: ['"Melhorar a peça"', '"Trabalhar técnica"', '"Ver a parte B"', 'Impossível saber se foi atingido'] },
          b: { titulo: 'Objetivo verificável', itens: ['"Tocar os compassos 9 a 16 a 80 BPM sem parar"', '"Fazer a pestana do compasso 12 com as seis cordas soando"', '"Ler os quatro primeiros compassos sem hesitar"', 'No fim da aula, dá para responder sim ou não'] }
        },
        { t: 'h', x: 'O plano de semestre' },
        {
          t: 'passos', itens: [
            'Defina duas ou três competências para o período (por exemplo: pestana limpa, leitura na 2ª posição, uma peça memorizada).',
            'Escolha o repertório que serve a essas competências, com o aluno participando da escolha.',
            'Distribua: o que entra no primeiro mês, no segundo, no terceiro.',
            'Marque uma data de apresentação — interna que seja. Ela organiza tudo.',
            'Reserve 20% do tempo para imprevistos: eles vão acontecer.'
          ]
        },
        { t: 'h', x: 'Quando o plano não funciona' },
        {
          t: 'lista', itens: [
            'Aluno não estudou: não repita a aula anterior. Trabalhe algo que só se faz com professor presente — leitura, percepção, análise.',
            'Aluno travou numa dificuldade: abandone o plano e decomponha o problema. O plano espera.',
            'Aluno chegou desmotivado: pergunte o que ele gostaria de tocar e use a aula para isso. Recuperar o interesse é objetivo legítimo.',
            'Aluno progrediu mais que o esperado: acelere. Subestimar desmotiva tanto quanto sobrecarregar.'
          ]
        },
        {
          t: 'check', chave: 'planejamento', titulo: 'Monte os seus planos',
          itens: [
            'Escrevi um plano de aula de 50 minutos com os cinco blocos.',
            'Formulei três objetivos verificáveis.',
            'Escrevi um plano de semestre com duas competências e repertório.',
            'Marquei uma data de apresentação.',
            'Planejei o que faria se o aluno chegasse sem ter estudado.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Planejar e adaptar', rodadas: 5,
          perguntas: [
            { texto: 'Qual é o bloco mais negligenciado numa aula?', opcoes: ['O fechamento', 'O aquecimento', 'A técnica', 'O conteúdo novo'], correta: 0, explicacao: 'É ele que define como o aluno vai estudar a semana.' },
            { texto: 'Um objetivo de aula bem formulado é:', opcoes: ['Verificável com sim ou não no fim da aula', 'Amplo e ambicioso', 'Focado na peça inteira', 'Definido pelo aluno'], correta: 0, explicacao: '"Tocar os compassos 9 a 16 a 80 BPM sem parar".' },
            { texto: 'Quanto do plano de semestre deve ficar livre para imprevistos?', opcoes: ['Cerca de 20%', 'Nada', '50%', '5%'], correta: 0, explicacao: 'Eles sempre acontecem.' },
            { texto: 'Se o aluno não estudou, o melhor é:', opcoes: ['Trabalhar algo que só se faz com o professor presente', 'Repetir a aula anterior', 'Cancelar a aula', 'Dar bronca'], correta: 0, explicacao: 'Leitura, percepção e análise aproveitam o tempo.' },
            { texto: 'O que organiza um semestre inteiro de estudo?', opcoes: ['Uma data de apresentação', 'O método adotado', 'O número de aulas', 'A quantidade de peças'], correta: 0, explicacao: 'O prazo cria estrutura e sentido.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Planejar a aula inteira e não adaptar.', certo: 'O plano é hipótese; a realidade manda.' },
            { erro: 'Terminar a aula sem combinar como estudar.', certo: 'O fechamento define a semana.' },
            { erro: 'Objetivos vagos como "melhorar a peça".', certo: 'Formule algo verificável.' },
            { erro: 'Repetir a aula anterior quando o aluno não estudou.', certo: 'Mude o tipo de trabalho.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Aula de 50 minutos: aquecimento, técnica, peça, conteúdo novo, fechamento.',
            'O fechamento define como o aluno estuda a semana.',
            'Objetivos precisam ser verificáveis com sim ou não.',
            'Plano de semestre: duas competências, repertório escolhido junto, data de apresentação.',
            'Reserve 20% para imprevistos e adapte sem culpa.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos blocos tem a estrutura de aula proposta?', opcoes: ['Cinco', 'Três', 'Dois', 'Sete'], correta: 0, explicacao: 'Do aquecimento ao fechamento.' },
        { texto: 'Qual é o tempo recomendado para a peça em andamento numa aula de 50 minutos?', opcoes: ['20 minutos', '5 minutos', '40 minutos', '10 minutos'], correta: 0, explicacao: 'Com dois ou três pontos de trabalho.' },
        { texto: 'Um plano de semestre deve definir:', opcoes: ['Duas ou três competências e o repertório que serve a elas', 'Todas as peças do ano', 'Apenas o método', 'A quantidade de aulas'], correta: 0, explicacao: 'Competência orienta a escolha de repertório.' },
        { texto: 'Se o aluno travou numa dificuldade, o professor deve:', opcoes: ['Abandonar o plano e decompor o problema', 'Seguir o plano', 'Passar adiante', 'Mandar estudar em casa'], correta: 0, explicacao: 'A dificuldade é a aula.' },
        { texto: 'Por que marcar uma data de apresentação?', opcoes: ['Ela organiza e dá sentido ao estudo', 'Para avaliar o aluno', 'Por exigência da escola', 'Para preencher o calendário'], correta: 0, explicacao: 'Propósito alimenta a motivação.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Entregar um plano de aula de 50 minutos com objetivos verificáveis.',
          'Entregar um plano de semestre com competências, repertório e data de apresentação.',
          'Descrever como adaptaria a aula em três cenários imprevistos.',
          'Conduzir uma aula seguindo o plano e relatar o que precisou mudar.'
        ],
        criterio: 'Você domina quando consegue dizer, no fim da aula, se cada objetivo foi atingido — e adaptar o plano sem perder a direção.'
      }
    },

    {
      id: 'n7.1.5',
      titulo: 'Desenvolvimento motor e musical',
      resumo: 'O que esperar em cada idade e como ajustar o ensino a isso.',
      minutos: 20,
      disciplinas: ['postura', 'teoria'],
      prereq: ['n7.1.2'],
      status: 'validado',
      cobre: ['Desenvolvimento motor e musical'],
      objetivo: 'Adequar conteúdo, duração e abordagem à etapa de desenvolvimento motor e musical do aluno.',
      blocos: [
        { t: 'p', x: 'Uma criança de seis anos, um adolescente e um adulto de cinquenta aprendem violão de formas diferentes — não por talento, mas por desenvolvimento motor, capacidade de atenção e motivação. Ensinar todos do mesmo jeito prejudica os três.' },
        { t: 'h', x: 'O que esperar em cada faixa' },
        {
          t: 'tabela',
          cab: ['Faixa', 'Motor', 'Atenção', 'Abordagem'],
          linhas: [
            ['4 a 6 anos', 'Coordenação fina em formação; mão pequena', '10 a 15 min', 'Jogos, canto, percussão corporal; violão pequeno ou outro instrumento antes'],
            ['7 a 10 anos', 'Coordenação fina adequada; força ainda limitada', '20 min', 'Violão 3/4; peças curtas; imitação; leitura simples'],
            ['11 a 14 anos', 'Crescimento rápido; descoordenação temporária é normal', '30 min', 'Repertório que eles escolhem; técnica sistemática começa'],
            ['15 a 18 anos', 'Capacidade motora plena', '40 a 60 min', 'Técnica avançada, repertório sério, autonomia de estudo'],
            ['Adulto', 'Plena, mas com mais rigidez articular', '30 a 50 min', 'Explicação do porquê, metas claras, repertório significativo'],
            ['Idoso', 'Força e flexibilidade reduzidas; possível artrite', '20 a 40 min', 'Tensão baixa de cordas, peças acessíveis, foco no prazer']
          ]
        },
        {
          t: 'aviso', x: 'Tamanho de instrumento importa. Uma criança com violão grande demais desenvolve tensão de ombro e má postura que levam anos para corrigir. Violões 1/2 e 3/4 existem exatamente por isso.'
        },
        { t: 'h', x: 'O adolescente em crescimento' },
        { t: 'p', x: 'Entre 11 e 14 anos, braços e mãos crescem mais rápido que o controle motor. É normal que um aluno que tocava bem passe meses desajeitado. O erro é interpretar isso como falta de estudo: é desenvolvimento, e passa. A resposta é reduzir a exigência técnica temporariamente e manter a motivação.' },
        { t: 'h', x: 'O adulto iniciante' },
        {
          t: 'lista', itens: [
            'Aprende *mais rápido* o que é cognitivo: teoria, leitura, análise.',
            'Aprende *mais devagar* o que é motor: a plasticidade é menor, mas existe.',
            'Precisa entender o porquê de cada exercício; obediência sem explicação não funciona.',
            'Tem menos tempo e mais autocrítica: metas realistas evitam desistência.',
            'Costuma ter objetivo claro — tocar determinada música, acompanhar alguém. Use isso.'
          ]
        },
        { t: 'postura', legenda: 'A postura precisa ser ajustada ao corpo de cada aluno: altura do apoio, ângulo do braço e tamanho do instrumento mudam conforme a idade e o porte.' },
        {
          t: 'check', chave: 'desenvolvimento', titulo: 'Adeque o ensino',
          itens: [
            'Identifiquei a faixa de desenvolvimento de um aluno real ou imaginário.',
            'Ajustei a duração da aula à capacidade de atenção da faixa.',
            'Verifiquei se o tamanho do instrumento é adequado.',
            'Planejei o que faria com um adolescente em fase de descoordenação.',
            'Planejei uma primeira aula para um adulto iniciante.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Desenvolvimento e ensino', rodadas: 5,
          perguntas: [
            { texto: 'Quanto tempo de atenção esperar de uma criança de 8 anos?', opcoes: ['Cerca de 20 minutos', '5 minutos', '45 minutos', '1 hora'], correta: 0, explicacao: 'A aula deve ser planejada para isso.' },
            { texto: 'Um adolescente que ficou desajeitado provavelmente:', opcoes: ['Está em fase de crescimento rápido', 'Parou de estudar', 'Perdeu o talento', 'Precisa trocar de professor'], correta: 0, explicacao: 'É desenvolvimento motor, e passa.' },
            { texto: 'O adulto iniciante aprende mais rápido:', opcoes: ['O que é cognitivo: teoria, leitura, análise', 'O que é motor', 'Tudo igualmente', 'Nada mais rápido'], correta: 0, explicacao: 'A plasticidade motora é menor, a cognitiva não.' },
            { texto: 'Por que usar violão 3/4 com crianças?', opcoes: ['Para evitar tensão de ombro e má postura', 'Porque soam melhor', 'Porque são mais baratos', 'Por tradição'], correta: 0, explicacao: 'Instrumento grande demais cria vícios duradouros.' },
            { texto: 'Com alunos idosos, o que ajustar primeiro?', opcoes: ['Tensão das cordas e exigência física', 'O repertório erudito', 'A duração mínima', 'A leitura'], correta: 0, explicacao: 'Conforto físico é condição para continuar.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Ensinar adulto e criança do mesmo jeito.', certo: 'Diferem em motor, atenção e motivação.' },
            { erro: 'Interpretar descoordenação adolescente como falta de estudo.', certo: 'É desenvolvimento; reduza a exigência temporariamente.' },
            { erro: 'Usar violão de tamanho adulto com criança pequena.', certo: '1/2 e 3/4 existem por razões posturais.' },
            { erro: 'Exigir do adulto o mesmo ritmo motor de um jovem.', certo: 'Metas realistas evitam desistência.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cada faixa etária tem capacidade motora, atenção e motivação próprias.',
            'Tamanho de instrumento adequado previne vícios posturais.',
            'Descoordenação na adolescência é normal e temporária.',
            'O adulto aprende rápido o cognitivo e devagar o motor; precisa entender o porquê.',
            'Com idosos, ajuste tensão de cordas e exigência física.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual tamanho de violão é indicado para uma criança de 8 anos?', opcoes: ['3/4 ou menor, conforme o porte', 'Sempre tamanho adulto', '7/8 sempre', 'Qualquer um'], correta: 0, explicacao: 'O porte do aluno decide.' },
        { texto: 'O que acontece tipicamente entre 11 e 14 anos?', opcoes: ['Crescimento rápido com descoordenação temporária', 'Perda de interesse inevitável', 'Pico de capacidade motora', 'Estabilização completa'], correta: 0, explicacao: 'Membros crescem mais rápido que o controle.' },
        { texto: 'O adulto iniciante precisa principalmente de:', opcoes: ['Entender o porquê de cada exercício', 'Mais repetição mecânica', 'Menos teoria', 'Aulas mais longas'], correta: 0, explicacao: 'Compreensão sustenta a persistência.' },
        { texto: 'Qual é a duração de aula adequada para uma criança de 5 anos?', opcoes: ['10 a 15 minutos', '30 minutos', '45 minutos', '1 hora'], correta: 0, explicacao: 'A atenção é o limite.' },
        { texto: 'Com alunos idosos, o foco do ensino deve estar em:', opcoes: ['Prazer de tocar e conforto físico', 'Virtuosismo', 'Preparação para concursos', 'Leitura avançada'], correta: 0, explicacao: 'Adequação ao objetivo e ao corpo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Planejar uma primeira aula para uma criança de 8 anos.',
          'Planejar uma primeira aula para um adulto de 45 anos iniciante.',
          'Explicar as diferenças entre os dois planos.',
          'Verificar e ajustar a postura de outra pessoa ao instrumento.'
        ],
        criterio: 'Você domina quando ajusta conteúdo, duração e linguagem à etapa de desenvolvimento do aluno, justificando cada escolha.'
      }
    },

    {
      id: 'n7.1.6',
      titulo: 'Metodologias de ensino do violão',
      resumo: 'Os métodos de violão, o que cada um faz bem e como combiná-los.',
      minutos: 20,
      disciplinas: ['teoria', 'tecnica'],
      prereq: ['n7.1.1'],
      status: 'validado',
      cobre: ['Metodologias de ensino do violão'],
      objetivo: 'Conhecer os principais métodos de violão e montar um percurso próprio combinando fontes.',
      blocos: [
        { t: 'p', x: 'Nenhum método de violão cobre tudo bem. Alguns têm ótima progressão técnica e repertório fraco; outros têm peças encantadoras e pulam etapas. Um professor experiente conhece vários e monta o percurso do aluno combinando fontes.' },
        { t: 'h', x: 'Os métodos históricos (domínio público)' },
        {
          t: 'tabela',
          cab: ['Método', 'Forte em', 'Fraco em'],
          linhas: [
            ['Carulli, Op. 27', 'Peças agradáveis desde o início; progressão suave', 'Técnica de mão direita pouco detalhada'],
            ['Carcassi, Op. 59', 'Progressão clara; 25 estudos Op. 60 excelentes', 'Pouca explicação de postura'],
            ['Sor, Op. 31 e Op. 60', 'Qualidade musical e condução de vozes', 'Progressão irregular; exige professor'],
            ['Aguado, Nuevo Método', 'Rigor técnico e mecanismo', 'Repertório pouco atraente para iniciantes'],
            ['Giuliani, Op. 1', 'O melhor material de mão direita que existe', 'Não é método completo']
          ]
        },
        { t: 'h', x: 'Os métodos modernos' },
        {
          t: 'lista', itens: [
            '*Pujol, Escuela Razonada*: o mais completo e detalhado; quatro volumes; excelente referência de consulta.',
            '*Abel Carlevaro, Série Didática*: analisa o movimento com rigor quase científico; indispensável para técnica avançada.',
            '*Métodos brasileiros*: adaptam a progressão ao repertório e à realidade local, com cifra, ritmos brasileiros e peças conhecidas.',
            '*Métodos infantis*: usam jogos, figuras e peças curtíssimas; o conteúdo técnico é o mesmo, a embalagem é outra.',
            'Qualquer método é ponto de partida: a ordem pode e deve ser alterada conforme o aluno.'
          ]
        },
        { t: 'h', x: 'Montar um percurso próprio' },
        {
          t: 'passos', itens: [
            'Liste as competências técnicas em ordem: postura, mão direita solta, mão esquerda, acordes, pestana, escalas, ligados, arpejos, polifonia.',
            'Para cada competência, escolha dois ou três exercícios de fontes diferentes.',
            'Para cada competência, escolha duas peças que a apliquem musicalmente.',
            'Monte a sequência e deixe espaço para o repertório que o aluno quiser.',
            'Revise o percurso a cada semestre: o que não funcionou sai.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Competência', 'Exercício (fonte livre)', 'Peça que aplica'],
          linhas: [
            ['Mão direita solta', 'Op. 1 de Giuliani, fórmulas 1 a 10', 'Estudo de Carulli em Dó'],
            ['Acordes básicos', 'Troca cronometrada entre dois acordes', 'Qualquer canção de dois acordes'],
            ['Pestana', 'Pestana parcial e total, 4 casas', 'Estudo Op. 60 nº 7 de Carcassi'],
            ['Escalas', 'Escalas em duas oitavas, 2 notas por clique', 'Estudo de Sor Op. 31'],
            ['Polifonia', 'Trechos a duas vozes sustentadas', 'Bourrée BWV 996']
          ],
          legenda: 'Exemplo de tabela de percurso. Todas as fontes citadas estão em domínio público.'
        },
        {
          t: 'check', chave: 'metodosviolao', titulo: 'Monte o seu percurso',
          itens: [
            'Listei as competências técnicas em ordem de aquisição.',
            'Escolhi exercícios de pelo menos duas fontes diferentes.',
            'Associei uma peça a cada competência.',
            'Deixei espaço para repertório escolhido pelo aluno.',
            'Consultei um método histórico em domínio público.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Métodos de violão', rodadas: 5,
          perguntas: [
            { texto: 'Qual obra é a melhor referência de mão direita?', opcoes: ['Op. 1 de Giuliani', 'Op. 60 de Carcassi', 'Método de Carulli', 'Escuela Razonada'], correta: 0, explicacao: '120 fórmulas de arpejo.' },
            { texto: 'A Escuela Razonada é de:', opcoes: ['Emilio Pujol', 'Abel Carlevaro', 'Dionisio Aguado', 'Isaias Sávio'], correta: 0, explicacao: 'Quatro volumes, muito detalhada.' },
            { texto: 'Carlevaro é conhecido por:', opcoes: ['Análise rigorosa do movimento', 'Peças para crianças', 'Transcrições de Bach', 'Método de leitura'], correta: 0, explicacao: 'A Série Didática é referência técnica.' },
            { texto: 'Qual é a abordagem recomendada quanto aos métodos?', opcoes: ['Combinar fontes conforme a competência a desenvolver', 'Seguir um só do início ao fim', 'Evitar métodos históricos', 'Usar apenas material moderno'], correta: 0, explicacao: 'Nenhum cobre tudo bem.' },
            { texto: 'Os métodos de Carulli, Carcassi, Sor e Aguado estão:', opcoes: ['Em domínio público', 'Protegidos', 'Disponíveis só em edição paga', 'Perdidos'], correta: 0, explicacao: 'São do século XIX.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Seguir um método página por página.', certo: 'Combine fontes conforme a necessidade.' },
            { erro: 'Usar só exercícios, sem peças.', certo: 'Cada competência precisa de aplicação musical.' },
            { erro: 'Descartar métodos históricos por serem antigos.', certo: 'Muitos continuam insuperados e são livres.' },
            { erro: 'Não revisar o percurso.', certo: 'Revise a cada semestre e corte o que não funcionou.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Nenhum método cobre tudo; combine fontes.',
            'Carulli, Carcassi, Sor, Aguado e Giuliani estão em domínio público.',
            'Pujol e Carlevaro são as referências modernas de técnica.',
            'Monte o percurso por competências, com exercício e peça para cada uma.',
            'Deixe espaço para o repertório que o aluno quer tocar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual método tem peças agradáveis desde as primeiras lições?', opcoes: ['Carulli, Op. 27', 'Aguado', 'Carlevaro', 'Pujol'], correta: 0, explicacao: 'Progressão suave e musical.' },
        { texto: 'Os 25 estudos Op. 60 são de:', opcoes: ['Carcassi', 'Sor', 'Giuliani', 'Carulli'], correta: 0, explicacao: 'Material clássico de nível intermediário.' },
        { texto: 'O ponto forte de Aguado é:', opcoes: ['O rigor técnico', 'O repertório', 'A notação moderna', 'As peças infantis'], correta: 0, explicacao: 'Progressão de mecanismo muito cuidada.' },
        { texto: 'Como se monta um percurso próprio?', opcoes: ['Por competências, com exercício e peça para cada uma', 'Seguindo um método', 'Pela ordem das peças', 'Pelo nível de dificuldade apenas'], correta: 0, explicacao: 'A competência é o critério.' },
        { texto: 'Com que frequência revisar o percurso?', opcoes: ['A cada semestre', 'Nunca', 'A cada aula', 'A cada cinco anos'], correta: 0, explicacao: 'O que não funcionou sai.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Entregar uma tabela de percurso com cinco competências, exercícios e peças.',
          'Justificar a escolha de cada fonte.',
          'Demonstrar um exercício de cada uma de duas fontes diferentes.',
          'Indicar onde entra o repertório escolhido pelo aluno.'
        ],
        criterio: 'Você domina quando monta um percurso coerente combinando fontes e consegue justificar cada escolha pela competência que ela desenvolve.'
      }
    },

    {
      id: 'n7.1.7',
      titulo: 'Avaliação de desempenho',
      resumo: 'Avaliar sem desmotivar: critérios, instrumentos e devolutiva.',
      minutos: 20,
      disciplinas: ['teoria'],
      prereq: ['n7.1.4'],
      status: 'validado',
      cobre: ['Avaliação de desempenho'],
      objetivo: 'Construir critérios de avaliação objetivos e dar devolutivas que produzam mudança.',
      blocos: [
        { t: 'p', x: 'Avaliar não é dar nota: é descobrir onde o aluno está para decidir o que vem a seguir. Uma boa avaliação é específica, comparada com o próprio aluno (não com os outros) e sempre acompanhada de uma ação.' },
        { t: 'h', x: 'Três tipos de avaliação' },
        {
          t: 'tabela',
          cab: ['Tipo', 'Quando', 'Para quê'],
          linhas: [
            ['Diagnóstica', 'No início', 'Descobrir o ponto de partida e planejar'],
            ['Formativa', 'Durante', 'Ajustar o percurso; é a mais importante'],
            ['Somativa', 'No fim de um ciclo', 'Registrar o que foi alcançado']
          ]
        },
        { t: 'h', x: 'Critérios observáveis' },
        {
          t: 'tabela',
          cab: ['Dimensão', 'O que observar', 'Como medir'],
          linhas: [
            ['Técnica', 'Postura, economia de movimento, qualidade de som', 'Observação direta e gravação'],
            ['Precisão', 'Notas e ritmo corretos', 'Contagem de erros por execução'],
            ['Pulso', 'Estabilidade do andamento', 'Gravação com metrônomo'],
            ['Musicalidade', 'Fraseado, dinâmica, planos sonoros', 'Escuta crítica, com descritores'],
            ['Autonomia', 'Capacidade de estudar sozinho e resolver problemas', 'Relato do aluno e progresso entre aulas'],
            ['Leitura', 'Fluência à primeira vista no nível esperado', 'Leitura de trecho inédito']
          ],
          legenda: 'Avaliar sem critérios explícitos produz impressões, não informação.'
        },
        {
          t: 'dica', titulo: 'A régua certa: ',
          x: 'compare o aluno com ele mesmo há três meses, não com o colega. Comparação entre alunos informa pouco e desmotiva muito.'
        },
        { t: 'h', x: 'A devolutiva' },
        {
          t: 'passos', itens: [
            'Comece pelo que melhorou, com exemplo concreto.',
            'Aponte um ponto de atenção, descrito de forma observável.',
            'Proponha uma ação específica para a próxima semana.',
            'Pergunte ao aluno como ele avalia a própria execução — a autoavaliação é parte do processo.',
            'Registre por escrito: sem registro, não há comparação futura.'
          ]
        },
        {
          t: 'comparar',
          a: { titulo: 'Devolutiva ineficaz', itens: ['"Está bom, continue"', '"Precisa estudar mais"', '"Ficou melhor que da outra vez"', 'Sem ação definida', 'Sem registro'] },
          b: { titulo: 'Devolutiva eficaz', itens: ['"A pestana do compasso 12 agora soa nas seis cordas"', '"Nos compassos 9 a 12 o andamento acelera cerca de 10 BPM"', '"Esta semana: esses quatro compassos com metrônomo a 60, cinco minutos por dia"', 'Ação clara e mensurável', 'Anotado na ficha do aluno'] }
        },
        { t: 'h', x: 'Instrumentos de registro' },
        {
          t: 'lista', itens: [
            '*Ficha do aluno*: repertório, competências, andamentos atingidos, datas.',
            '*Gravação periódica*: a mesma peça a cada dois meses, nas mesmas condições.',
            '*Autoavaliação*: o aluno preenche a mesma ficha que o professor; comparar as duas é revelador.',
            '*Metas escritas*: combinadas no início do período e revistas no fim.',
            'Em aulas particulares, uma ficha simples basta. O importante é a continuidade do registro.'
          ]
        },
        {
          t: 'check', chave: 'avaliacao7', titulo: 'Monte o seu sistema',
          itens: [
            'Defini as dimensões que vou avaliar.',
            'Escrevi critérios observáveis para cada uma.',
            'Criei uma ficha de registro.',
            'Dei uma devolutiva com elogio concreto, ponto de atenção e ação.',
            'Pedi uma autoavaliação e comparei com a minha.',
            'Combinei metas escritas para o período.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Avaliar bem', rodadas: 5,
          perguntas: [
            { texto: 'Qual tipo de avaliação é o mais importante no dia a dia?', opcoes: ['Formativa', 'Diagnóstica', 'Somativa', 'Comparativa'], correta: 0, explicacao: 'É ela que ajusta o percurso.' },
            { texto: 'Com quem o aluno deve ser comparado?', opcoes: ['Com ele mesmo em momento anterior', 'Com os colegas', 'Com o professor', 'Com gravações profissionais'], correta: 0, explicacao: 'Comparar entre alunos desmotiva e informa pouco.' },
            { texto: 'Uma devolutiva eficaz termina com:', opcoes: ['Uma ação específica para a semana', 'Um elogio', 'Uma nota', 'Uma demonstração'], correta: 0, explicacao: 'Sem ação, não há mudança.' },
            { texto: 'Por que pedir autoavaliação?', opcoes: ['Comparar as duas percepções é revelador e desenvolve autonomia', 'Para economizar tempo', 'Para evitar conflito', 'Por exigência administrativa'], correta: 0, explicacao: 'A diferença entre as percepções é informação.' },
            { texto: 'Sem registro escrito, o que se perde?', opcoes: ['A possibilidade de comparar ao longo do tempo', 'A nota final', 'A relação com o aluno', 'O plano de aula'], correta: 0, explicacao: 'A memória não é confiável para isso.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Avaliar por impressão geral.', certo: 'Defina dimensões e critérios observáveis.' },
            { erro: 'Comparar alunos entre si.', certo: 'Compare cada um consigo mesmo.' },
            { erro: 'Dar devolutiva sem ação concreta.', certo: 'Termine sempre com o que fazer nesta semana.' },
            { erro: 'Não registrar nada.', certo: 'Sem registro não há evidência de progresso.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Três tipos: diagnóstica, formativa e somativa; a formativa é a do dia a dia.',
            'Dimensões: técnica, precisão, pulso, musicalidade, autonomia e leitura.',
            'Compare o aluno com ele mesmo.',
            'Devolutiva: o que melhorou, um ponto de atenção, uma ação.',
            'Registre: ficha, gravação periódica e metas escritas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual avaliação serve para planejar o ponto de partida?', opcoes: ['Diagnóstica', 'Formativa', 'Somativa', 'Final'], correta: 0, explicacao: 'Feita no início.' },
        { texto: 'Avaliar musicalidade exige:', opcoes: ['Descritores explícitos de fraseado, dinâmica e planos', 'Nota subjetiva', 'Comparação com gravações', 'Contagem de erros'], correta: 0, explicacao: 'Sem descritores, vira impressão.' },
        { texto: 'Como medir estabilidade de pulso?', opcoes: ['Gravação com metrônomo', 'Observação direta', 'Pergunta ao aluno', 'Contagem de erros'], correta: 0, explicacao: 'É o único jeito objetivo.' },
        { texto: 'A devolutiva deve começar por:', opcoes: ['O que melhorou, com exemplo concreto', 'O erro principal', 'A nota', 'Uma demonstração'], correta: 0, explicacao: 'O aluno precisa saber o que manter.' },
        { texto: 'Qual instrumento documenta melhor o progresso de longo prazo?', opcoes: ['Gravação periódica nas mesmas condições', 'Prova escrita', 'Nota de aula', 'Relato do aluno'], correta: 0, explicacao: 'Evidência objetiva e comparável.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Criar uma ficha de avaliação com seis dimensões e critérios observáveis.',
          'Avaliar uma execução (sua ou de outra pessoa) usando a ficha.',
          'Dar uma devolutiva com elogio concreto, ponto de atenção e ação definida.',
          'Comparar a sua avaliação com a autoavaliação da pessoa.'
        ],
        criterio: 'Você domina quando a sua avaliação produz uma ação clara para a semana seguinte e pode ser comparada com a de três meses atrás.'
      }
    }
  ]
};
