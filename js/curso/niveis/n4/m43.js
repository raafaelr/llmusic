// NÍVEL 4 · MÓDULO 4.3 — Repertório
// Seis aulas: Giuliani, Sor avançado, Carcassi, Tárrega, Bach e como montar um
// programa intermediário. Todas as obras citadas estão em domínio público; os
// trechos escritos aqui são incipits curtos e reduções didáticas feitas para o app.

export const M43 = {
  id: '4.3',
  titulo: 'Repertório',
  objetivo: 'Conhecer, escolher e estudar o repertório intermediário do violão clássico com método: saber o que cada obra pede, por onde começar e como preparar.',
  aulas: [

    // ---------------------------------------------------------------- 4.3.1
    {
      id: 'n4.3.1',
      titulo: 'Mauro Giuliani: arpejo e canto',
      resumo: 'O violonista que escrevia como um cantor de ópera.',
      minutos: 18,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n4.2.2'],
      status: 'implementado',
      cobre: ['Estudos de Mauro Giuliani'],
      objetivo: 'Entender o estilo de Giuliani e estudar os seus estudos de arpejo e de melodia acompanhada.',
      blocos: [
        { t: 'p', x: 'Mauro Giuliani (1781–1829) foi italiano, viveu em Viena no auge do classicismo e tocou com músicos da órbita de Beethoven. Isso explica o som dele: o violão de Giuliani *canta*. A melodia tem respiração de ária de ópera, e o acompanhamento é um tapete regular embaixo.' },
        { t: 'h', x: 'As três obras que importam para você agora' },
        {
          t: 'tabela',
          cab: ['Obra', 'O que treina', 'Dificuldade'],
          linhas: [
            ['Op. 1 — 120 estudos para a mão direita', 'todas as fórmulas de arpejo, uma por estudo', 'da 1ª à 5ª: fácil; depois cresce'],
            ['Op. 48 — 24 Prelúdios (ou "Estudos")', 'melodia acompanhada, mudanças de posição', 'intermediária'],
            ['Op. 50 — "Le Papillon" (32 peças fáceis)', 'frases curtas, forma clara, leitura', 'fácil a intermediária'],
            ['Op. 30 — Sonata em Dó', 'forma-sonata, repertório de concerto', 'avançada (Nível 5)']
          ]
        },
        { t: 'h', x: 'Op. 1: como usar os 120 estudos' },
        { t: 'p', x: 'O Op. 1 não é música de concerto: é um ginásio. Cada estudo tem a mesma harmonia simples (em geral C e G7) e muda apenas a fórmula de arpejo. A proposta de Giuliani é que a mão direita aprenda os padrões até eles ficarem automáticos.' },
        {
          t: 'tab', bpm: 72, legenda: 'Op. 1, nº 1 (redução didática): a fórmula mais simples, p-i-m-a, sobre C e G7. Toque dez vezes seguidas, sem parar entre os compassos.',
          compassos: [
            { acorde: 'C', notas: [{ pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] },
            { acorde: 'G7', notas: [{ pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }] }
          ]
        },
        {
          t: 'dica', titulo: 'Como atravessar os 120 sem desistir: ',
          x: 'não toque em ordem. Escolha cinco estudos com fórmulas diferentes e trabalhe-os por duas semanas. Depois troque. O objetivo é cobrir *famílias* de arpejo, não cumprir uma lista.'
        },
        { t: 'h', x: 'Op. 48: o violão que canta' },
        { t: 'p', x: 'Aqui a melodia vem para a frente. O estudo nº 1 do Op. 48 é a porta de entrada: melodia na primeira corda, acompanhamento em acordes, e uma frase que termina com uma suspensão clássica.' },
        {
          t: 'pauta', bpm: 66, numerar: true, quebrar: 2,
          txt: 'g4/q e4/c f4/c g4/q c5/q | b4/q a4/c g4/c f4/b | e4/q g4/c f4/c e4/q d4/q | c4/b z/b',
          legenda: 'Incipit no estilo do Op. 48 (redução didática). A melodia tem desenho vocal: sobe, atinge o ponto alto no Dó e desce para repousar.'
        },
        {
          t: 'passos', itens: [
            'Toque só a melodia, cantando junto. Decida onde está o ponto alto da frase.',
            'Toque só o acompanhamento, fraco e regular.',
            'Junte, com a melodia em apoyando e o acompanhamento em tirando.',
            'Faça um pequeno crescendo até o ponto alto e um diminuendo até o fim.',
            'Grave e ouça: a melodia aparece? A frase tem forma de arco?'
          ]
        },
        { t: 'tocar', titulo: 'Confira a melodia', seq: [[1, 3], [1, 0], [1, 1], [1, 3], [1, 8]], rotulo: 'Tocar a melodia do incipit', x: 'Sol, Mi, Fá, Sol, Dó na primeira corda. Cante junto enquanto toca.' },
        { t: 'h', x: 'O que Giuliani ensina que mais ninguém ensina tão bem' },
        {
          t: 'lista', itens: [
            '*Respiração de frase*: as melodias dele pedem pequenos atrasos e acelerações naturais, como um cantor que respira.',
            '*Acompanhamento invisível*: o tapete de arpejo tem de ser absolutamente regular e discreto.',
            '*Terminações femininas*: muitas frases terminam em tempo fraco, o que exige diminuir o volume na última nota, não acentuá-la.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Giuliani', rodadas: 6,
          perguntas: [
            { texto: 'Em que cidade Giuliani fez carreira?', opcoes: ['Viena', 'Paris', 'Madri', 'Londres'], correta: 0, explicacao: 'No círculo musical de Beethoven.' },
            { texto: 'O Op. 1 de Giuliani é uma coleção de:', opcoes: ['120 estudos de arpejo para a mão direita', '24 prelúdios', 'Sonatas', 'Transcrições'], correta: 0, explicacao: 'Material padrão de arpejo.' },
            { texto: 'O estilo melódico de Giuliani é influenciado por:', opcoes: ['A ópera italiana', 'O flamenco', 'O choro', 'A música renascentista'], correta: 0, explicacao: 'Melodia vocal, com respiração.' },
            { texto: 'Qual é a melhor forma de estudar o Op. 1?', opcoes: ['Escolher estudos de famílias diferentes de arpejo', 'Tocar em ordem do 1 ao 120', 'Tocar só os finais', 'Tocar sem metrônomo'], correta: 0, explicacao: 'Cobrir famílias, não cumprir lista.' },
            { texto: 'No Op. 48, a melodia costuma estar:', opcoes: ['Na primeira corda, acima do acompanhamento', 'No baixo', 'No meio', 'Em harmônicos'], correta: 0, explicacao: 'Canto acompanhado.' },
            { texto: 'Uma terminação em tempo fraco deve ser tocada:', opcoes: ['Mais fraca', 'Mais forte', 'Mais rápida', 'Com acento'], correta: 0, explicacao: 'É a "terminação feminina".' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar os estudos do Op. 1 como música, com rubato.', certo: 'Eles são exercício: regularidade mecânica e metrônomo.' },
            { erro: 'Tocar o Op. 48 com o acompanhamento no mesmo volume da melodia.', certo: 'O acompanhamento é tapete; a melodia canta.' },
            { erro: 'Acentuar a última nota de uma frase que cai em tempo fraco.', certo: 'Diminua: a frase termina, não ataca.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Giuliani: italiano em Viena, melodia de ópera no violão.',
            'Op. 1 = ginásio de arpejos; Op. 48 = melodia acompanhada; Op. 50 = peças curtas.',
            'Estude o Op. 1 por famílias de arpejo, não em ordem.',
            'Frase com arco, acompanhamento invisível, terminações fracas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Giuliani viveu entre:', opcoes: ['1781 e 1829', '1700 e 1750', '1850 e 1900', '1900 e 1950'], correta: 0, explicacao: 'Período clássico.' },
        { texto: 'O Op. 48 treina principalmente:', opcoes: ['Melodia acompanhada', 'Pestana', 'Tremolo', 'Harmônicos'], correta: 0, explicacao: 'Canto com acompanhamento.' },
        { texto: '"Le Papillon" Op. 50 é uma coleção de:', opcoes: ['Peças curtas e fáceis', 'Sonatas', 'Estudos de velocidade', 'Transcrições de Bach'], correta: 0, explicacao: '32 peças pequenas.' },
        { texto: 'Nos estudos do Op. 1, a harmonia é:', opcoes: ['Simples e repetida, para focar na mão direita', 'Complexa e modulante', 'Atonal', 'Sempre menor'], correta: 0, explicacao: 'O foco é o arpejo.' },
        { texto: 'Para a melodia aparecer, use:', opcoes: ['Apoyando na melodia e tirando no acompanhamento', 'Apoyando em tudo', 'Tirando em tudo', 'Palheta'], correta: 0, explicacao: 'Separação de toque.' },
        { texto: 'Giuliani compôs também:', opcoes: ['Sonatas e concertos para violão', 'Óperas completas', 'Sinfonias', 'Missas'], correta: 0, explicacao: 'Repertório de concerto, estudado no Nível 5.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o arpejo do Op. 1 nº 1 dez vezes seguidas, regular, a 80 BPM.',
          'Toco o incipit do Op. 48 com a melodia claramente à frente.',
          'Faço o arco de dinâmica da frase (crescendo até o ponto alto).',
          'Gravei e a melodia aparece sem esforço.'
        ],
        criterio: 'Você domina quando toca um estudo de Giuliani com acompanhamento regular e melodia cantada, não apenas com as notas certas.'
      }
    },

    // ---------------------------------------------------------------- 4.3.2
    {
      id: 'n4.3.2',
      titulo: 'Fernando Sor: os estudos que formam músicos',
      resumo: 'Clareza clássica e duas vozes de verdade.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia', 'contraponto'],
      prereq: ['n4.1.9'],
      status: 'implementado',
      cobre: ['Estudos avançados de Sor'],
      objetivo: 'Conhecer os estudos intermediários e avançados de Sor e estudar as suas peças a duas vozes.',
      blocos: [
        { t: 'p', x: 'Fernando Sor (1778–1839) foi espanhol, viveu em Paris e Londres, e é o compositor que mais se aproxima de um "Mozart do violão": textura limpa, vozes bem conduzidas, nada decorativo. Os seus estudos não treinam só dedos: treinam *música*.' },
        { t: 'h', x: 'O mapa dos estudos de Sor' },
        {
          t: 'tabela',
          cab: ['Coleção', 'Conteúdo', 'Para que nível'],
          linhas: [
            ['Op. 60 — 25 Lições progressivas', 'as primeiras lições, muito simples', 'Níveis 1 a 3'],
            ['Op. 31 — 24 Exercícios progressivos', 'técnica de mão esquerda e vozes', 'Nível 4'],
            ['Op. 35 — 24 Exercícios muito fáceis', 'apesar do nome, inclui o célebre nº 22', 'Níveis 3 e 4'],
            ['Op. 6 — 12 Estudos', 'estudos de concerto; o nº 11 é um clássico', 'Níveis 4 e 5'],
            ['Op. 29 — 12 Estudos (continuação)', 'avançados, repertório de recital', 'Nível 5'],
            ['Seleção de Segovia (20 estudos)', 'escolha dos melhores das coleções acima', 'referência padrão']
          ],
          legenda: 'A "Seleção de Segovia" é a edição mais usada no mundo. Os números dela não correspondem aos opus originais: o Estudo nº 1 de Segovia é o Op. 35 nº 13, por exemplo.'
        },
        { t: 'h', x: 'O que faz um estudo de Sor ser difícil' },
        {
          t: 'lista', itens: [
            '*Legato*: as notas precisam durar até a próxima. Soltar o dedo antes é o erro mais comum, e deixa a textura cheia de buracos.',
            '*Condução de vozes*: cada linha tem um desenho. Se você tocar tudo como acordes, perde a peça.',
            '*Simplicidade exposta*: há poucas notas. Qualquer falha de som ou de tempo aparece imediatamente.',
            '*Dedilhado*: Sor escreveu com digitação pensada. Mudá-la por conforto geralmente quebra o legato.'
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 2,
          txt: 'b4+g4/q c5+e4/q b4+g4/q a4+f4/q | g4+e4/q f4+d4/q e4+c4/b',
          legenda: 'Trecho no estilo do Op. 31 (redução didática): duas vozes, movimento contrário, legato obrigatório. Observe que a voz de baixo desce enquanto a de cima oscila.'
        },
        {
          t: 'passos', itens: [
            'Toque só a voz de cima, com legato perfeito, cantando.',
            'Toque só a voz de baixo, também cantando: ela precisa fazer sentido sozinha.',
            'Junte devagar, segurando cada nota até o último instante possível.',
            'Procure os lugares em que um dedo pode ficar como *pivô* entre dois acordes. Sor escreveu pensando nesses pivôs.',
            'Só depois acelere.'
          ]
        },
        {
          t: 'dica', titulo: 'O teste do legato: ',
          x: 'toque o trecho e, em vez de ouvir as notas, escute os *espaços entre elas*. Se houver silêncio entre duas notas que deveriam se ligar, você soltou o dedo cedo. Em Sor, o silêncio não convidado é o pior defeito.'
        },
        { t: 'h', x: 'Os três estudos para conhecer agora' },
        {
          t: 'tabela',
          cab: ['Estudo', 'Caráter', 'Desafio principal'],
          linhas: [
            ['Op. 35 nº 22 (Segovia nº 5)', 'cantabile, melódico', 'melodia legato sobre arpejo'],
            ['Op. 31 nº 16', 'duas vozes, movimento contrário', 'condução independente'],
            ['Op. 6 nº 11', 'estudo de concerto, em Mi maior', 'extensão e mudanças de posição']
          ],
          legenda: 'Todos em domínio público. Procure edições com a digitação original de Sor.'
        },
        { t: 'tocar', titulo: 'Confira a voz de baixo', seq: [[3, 0], [4, 3], [3, 0], [4, 3], [3, 2], [4, 0]], rotulo: 'Tocar a linha grave do trecho', x: 'Cante junto. A linha deve fazer sentido como melodia, não como baixo de acompanhamento.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Sor', rodadas: 6,
          perguntas: [
            { texto: 'Qual é a característica mais marcante da escrita de Sor?', opcoes: ['Clareza e condução de vozes', 'Virtuosismo extremo', 'Harmonia cromática', 'Ritmos de dança espanhola'], correta: 0, explicacao: 'Textura limpa, quase clássica.' },
            { texto: 'O erro mais comum ao tocar Sor é:', opcoes: ['Soltar os dedos cedo e perder o legato', 'Tocar muito legato', 'Usar apoyando', 'Tocar devagar'], correta: 0, explicacao: 'Buracos na textura.' },
            { texto: 'A "Seleção de Segovia" é:', opcoes: ['Uma escolha de 20 estudos de várias coleções de Sor', 'Uma obra original de Segovia', 'Os 12 estudos do Op. 6', 'Uma edição de Tárrega'], correta: 0, explicacao: 'Edição padrão no mundo.' },
            { texto: 'Em peças a duas vozes, cada linha deve:', opcoes: ['Fazer sentido musical sozinha', 'Ser igual à outra', 'Ser mais rápida', 'Ficar no mesmo volume'], correta: 0, explicacao: 'Independência.' },
            { texto: 'O que é um dedo-pivô?', opcoes: ['Um dedo que fica na mesma nota durante a troca de acorde', 'O dedo mais forte', 'O polegar', 'Um dedo que desliza'], correta: 0, explicacao: 'Mantém o legato e guia a mão.' },
            { texto: 'Por que mudar o dedilhado original de Sor costuma ser má ideia?', opcoes: ['Porque ele foi escrito para garantir o legato', 'Porque é proibido', 'Porque soa mais alto', 'Porque muda a harmonia'], correta: 0, explicacao: 'A digitação é parte da composição.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tratar o estudo como exercício de velocidade.', certo: 'Sor é música: frase, legato e voz antes de andamento.' },
            { erro: 'Usar só a voz de cima e abafar o baixo.', certo: 'As duas vozes existem; estude cada uma sozinha.' },
            { erro: 'Trocar a digitação para facilitar.', certo: 'Tente a original por uma semana antes de mudar qualquer coisa.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Sor: espanhol em Paris, textura clássica e clareza acima de tudo.',
            'Op. 60 (fácil) → Op. 35 e Op. 31 (intermediário) → Op. 6 e Op. 29 (avançado).',
            'A dificuldade real é o legato e a condução das vozes.',
            'Estude cada voz sozinha; respeite a digitação original.'
          ]
        }
      ],
      quiz: [
        { texto: 'Sor viveu principalmente em:', opcoes: ['Paris e Londres', 'Viena', 'Roma', 'Madri apenas'], correta: 0, explicacao: 'Espanhol de carreira internacional.' },
        { texto: 'Qual coleção é a mais indicada para o Nível 4?', opcoes: ['Op. 31', 'Op. 60', 'Op. 29', 'Op. 9'], correta: 0, explicacao: '24 exercícios progressivos.' },
        { texto: 'O Op. 35 nº 22 é conhecido por ser:', opcoes: ['Melódico e cantabile', 'Rápido e virtuosístico', 'Atonal', 'Para dois violões'], correta: 0, explicacao: 'Um dos estudos mais tocados.' },
        { texto: 'O que significa legato na prática do violão?', opcoes: ['Cada nota dura até a próxima começar', 'Tocar rápido', 'Tocar forte', 'Abafar as cordas'], correta: 0, explicacao: 'Sem buracos de silêncio.' },
        { texto: 'Os estudos de Sor treinam principalmente:', opcoes: ['Musicalidade e condução de vozes', 'Velocidade', 'Rasgueado', 'Tremolo'], correta: 0, explicacao: 'Daí o seu lugar no ensino.' },
        { texto: 'Para estudar uma peça a duas vozes, comece:', opcoes: ['Por cada voz separada', 'Pelas duas juntas rápido', 'Pelo fim', 'Sem metrônomo'], correta: 0, explicacao: 'Cada linha precisa ser musical.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o trecho de duas vozes com legato, sem silêncios indesejados.',
          'Toco cada voz separada e canto a de baixo.',
          'Encontro ao menos dois dedos-pivô no trecho.',
          'Comecei um estudo de Sor do Op. 31 ou Op. 35.'
        ],
        criterio: 'Você domina quando toca um estudo de Sor com legato contínuo e as duas vozes audíveis.'
      }
    },

    // ---------------------------------------------------------------- 4.3.3
    {
      id: 'n4.3.3',
      titulo: 'Matteo Carcassi: brilho e mecanismo',
      resumo: 'Os estudos que transformam técnica em música de salão.',
      minutos: 18,
      disciplinas: ['repertorio', 'tecnica', 'historia'],
      prereq: ['n4.2.4'],
      status: 'implementado',
      cobre: ['Estudos de Carcassi'],
      objetivo: 'Conhecer o Op. 60 de Carcassi e estudar os estudos de ligado, arpejo e escala mais importantes.',
      blocos: [
        { t: 'p', x: 'Matteo Carcassi (1792–1853) era italiano, viveu em Paris e escrevia para o salão: música brilhante, agradável, com o violão sempre em evidência. Se Sor é o compositor da clareza, Carcassi é o do *efeito*. Os seus 25 Estudos Op. 60 são, até hoje, a coleção intermediária mais usada do mundo.' },
        { t: 'h', x: 'Os estudos do Op. 60 que você precisa conhecer' },
        {
          t: 'tabela',
          cab: ['Estudo', 'Tonalidade', 'Técnica central'],
          linhas: [
            ['nº 1', 'Dó maior', 'arpejo de quatro notas, mão direita regular'],
            ['nº 2', 'Lá menor', 'arpejo com baixo alternado'],
            ['nº 3', 'Dó maior', 'ligados ascendentes e descendentes em sequência'],
            ['nº 7', 'Lá maior', 'escalas rápidas e mudanças de posição'],
            ['nº 16', 'Ré maior', 'melodia acompanhada, dedilhado cruzado'],
            ['nº 19', 'Si menor', 'arpejo com pestana e dinâmica'],
            ['nº 23', 'Lá maior', 'estudo de concerto, velocidade e brilho']
          ],
          legenda: 'O Op. 60 é progressivo: dá para tocar na ordem. O nº 3 e o nº 7 são os dois que mais aparecem em provas e audições.'
        },
        { t: 'h', x: 'Op. 60 nº 3: o estudo de ligados' },
        { t: 'p', x: 'O nº 3 é uma sequência contínua de ligados em tercinas. O desafio não é a nota: é manter os ligados *com o mesmo volume das notas pinçadas* e o tempo absolutamente regular.' },
        {
          t: 'tab', bpm: 54, legenda: 'Padrão de ligado no estilo do Op. 60 nº 3 (redução didática). Só a primeira nota de cada grupo de três é pinçada.',
          compassos: [
            { notas: [{ pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia' }, { pos: [[2, 3]], fig: 'colcheia' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia' }, { pos: [[1, 3]], fig: 'colcheia' }] },
            { notas: [{ pos: [[1, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia' }, { pos: [[1, 0]], fig: 'colcheia' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia' }, { pos: [[2, 0]], fig: 'colcheia' }] }
          ]
        },
        { t: 'metronomo', bpm: 54, compasso: '3/4', x: 'Três colcheias por tempo. Suba 4 BPM só quando os ligados estiverem iguais às notas pinçadas.' },
        { t: 'h', x: 'Op. 60 nº 7: escalas que atravessam o braço' },
        { t: 'p', x: 'O nº 7 é um estudo de escalas em Lá maior, com passagens rápidas que exigem mudanças de posição sem interrupção. Tudo o que você treinou na aula 4.2.1 aparece aqui, aplicado à música.' },
        {
          t: 'pauta', bpm: 80, numerar: true, quebrar: 2, armadura: 3,
          txt: 'a4/c b4/c c5/c d5/c e5/c f5/c g5/c a5/c | a5/c g5/c f5/c e5/c d5/c c5/c b4/c a4/c',
          legenda: 'Escala de Lá maior subindo e descendo, no espírito do nº 7 (redução didática). Na peça original ela aparece dentro de frases com acompanhamento.'
        },
        {
          t: 'dica', titulo: 'Estudo de passagem rápida: ',
          x: 'divida a escala em grupos de quatro notas. Toque cada grupo quatro vezes, rápido, parando entre eles. Depois ligue dois grupos, depois quatro. Velocidade se constrói por blocos, não por repetição da passagem inteira.'
        },
        { t: 'h', x: 'O que Carcassi pede de interpretação' },
        {
          t: 'lista', itens: [
            '*Brilho*: toque um pouco mais perto do cavalete nas passagens rápidas. O estilo pede som claro, não doce.',
            '*Contraste de dinâmica*: as frases de Carcassi costumam ter repetições; faça uma forte e a seguinte piano.',
            '*Tempo estável*: é música de salão, com pulso de dança. Rubato excessivo descaracteriza.',
            '*Terminações limpas*: os finais de frase dele são curtos e marcados. Abafe o que tem de ser abafado.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Carcassi', rodadas: 6,
          perguntas: [
            { texto: 'A coleção intermediária mais usada de Carcassi é:', opcoes: ['Op. 60 — 25 Estudos', 'Op. 1 — 120 arpejos', 'Op. 31', 'Op. 6'], correta: 0, explicacao: 'Padrão em conservatórios.' },
            { texto: 'O Op. 60 nº 3 é um estudo de:', opcoes: ['Ligados', 'Tremolo', 'Harmônicos', 'Pestana'], correta: 0, explicacao: 'Tercinas ligadas.' },
            { texto: 'O estilo de Carcassi é descrito como:', opcoes: ['Brilhante, de salão', 'Contrapontístico', 'Atonal', 'Modal'], correta: 0, explicacao: 'Música agradável e efetiva.' },
            { texto: 'Como construir velocidade numa escala difícil?', opcoes: ['Em blocos de quatro notas, repetidos', 'Tocando a passagem inteira muitas vezes', 'Aumentando o BPM aos poucos sem parar', 'Sem metrônomo'], correta: 0, explicacao: 'Trabalho por blocos.' },
            { texto: 'Nas passagens rápidas de Carcassi, o timbre indicado é:', opcoes: ['Mais brilhante, perto do cavalete', 'Mais doce, junto ao braço', 'Abafado', 'Harmônico'], correta: 0, explicacao: 'Clareza de articulação.' },
            { texto: 'Qual estudo do Op. 60 trabalha escalas e mudanças de posição?', opcoes: ['nº 7', 'nº 1', 'nº 2', 'nº 19'], correta: 0, explicacao: 'Em Lá maior.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar o nº 3 rápido com ligados fracos.', certo: 'Volume igual primeiro, andamento depois.' },
            { erro: 'Tocar Carcassi com muito rubato.', certo: 'Pulso de dança, estável.' },
            { erro: 'Estudar a passagem rápida sempre do começo.', certo: 'Blocos de quatro notas, isolados e rápidos.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Carcassi: italiano em Paris, música de salão brilhante.',
            'Op. 60 = 25 estudos progressivos; nº 3 (ligados) e nº 7 (escalas) são os mais pedidos.',
            'Velocidade se constrói em blocos de quatro notas.',
            'Som mais brilhante, dinâmica contrastante, pulso estável.'
          ]
        }
      ],
      quiz: [
        { texto: 'Carcassi viveu entre:', opcoes: ['1792 e 1853', '1700 e 1760', '1850 e 1920', '1600 e 1650'], correta: 0, explicacao: 'Contemporâneo de Sor.' },
        { texto: 'O Op. 60 é:', opcoes: ['Progressivo: pode ser tocado em ordem', 'Desordenado', 'Só para avançados', 'Só para iniciantes'], correta: 0, explicacao: 'Do fácil ao difícil.' },
        { texto: 'Em tercinas ligadas, quantas notas são pinçadas por grupo?', opcoes: ['Uma', 'Duas', 'Três', 'Nenhuma'], correta: 0, explicacao: 'As outras duas são ligadas.' },
        { texto: 'Em repetições de frase, Carcassi pede:', opcoes: ['Contraste de dinâmica', 'Volume igual', 'Aumento de andamento', 'Troca de tonalidade'], correta: 0, explicacao: 'Forte e piano alternados.' },
        { texto: 'Qual estudo do Op. 60 é considerado de concerto?', opcoes: ['nº 23', 'nº 1', 'nº 2', 'nº 5'], correta: 0, explicacao: 'Velocidade e brilho.' },
        { texto: 'Para o som brilhante, a mão direita toca:', opcoes: ['Mais perto do cavalete', 'Junto ao braço', 'Sobre a boca', 'Com a palma'], correta: 0, explicacao: 'Posição ponticello moderada.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o padrão de ligados a 70 BPM com volume igual.',
          'Toco a escala de Lá maior subindo e descendo a 90 BPM.',
          'Estudei uma passagem rápida pelo método dos blocos de quatro.',
          'Faço contraste de dinâmica entre frase e repetição.'
        ],
        criterio: 'Você domina quando toca um estudo do Op. 60 no andamento indicado, com ligados iguais e dinâmica planejada.'
      }
    },

    // ---------------------------------------------------------------- 4.3.4
    {
      id: 'n4.3.4',
      titulo: 'Francisco Tárrega: o violão moderno nasce aqui',
      resumo: 'Lágrima, Adelita, Recuerdos: o som que definiu o instrumento.',
      minutos: 20,
      disciplinas: ['repertorio', 'historia', 'interpretacao'],
      prereq: ['n4.2.6'],
      status: 'implementado',
      cobre: ['Peças de Tárrega'],
      objetivo: 'Conhecer o repertório de Tárrega e começar as suas peças de nível intermediário com a interpretação adequada.',
      blocos: [
        { t: 'p', x: 'Francisco Tárrega (1852–1909) é o compositor que criou o violão como o conhecemos. Ele fixou a posição de mão, o uso da unha, a técnica de apoyando e tirando, e escreveu um repertório que até hoje é o coração do instrumento. Quase tudo o que você aprendeu de postura vem dele ou do seu círculo.' },
        { t: 'h', x: 'O repertório, por dificuldade' },
        {
          t: 'tabela',
          cab: ['Peça', 'Caráter', 'Dificuldade', 'Técnica central'],
          linhas: [
            ['Lágrima', 'melancólica, curta', 'fácil (Nível 3)', 'melodia cantada com acompanhamento'],
            ['Adelita', 'mazurca delicada', 'fácil a intermediária', 'ritmo de mazurca, rubato'],
            ['Endecha / Oremus', 'miniaturas', 'fácil', 'som doce, frase curta'],
            ['Estudio en Mi menor', 'estudo melódico', 'intermediária', 'arpejo e melodia'],
            ['Pavana', 'dança antiga', 'intermediária', 'acordes e condução'],
            ['Capricho Árabe', 'fantasia oriental', 'intermediária-avançada', 'ligados, portamento, dinâmica'],
            ['Recuerdos de la Alhambra', 'tremolo', 'avançada', 'tremolo p-a-m-i contínuo'],
            ['Estudio Brillante (de Alard)', 'virtuosístico', 'avançada', 'escalas e ligados rápidos']
          ],
          legenda: 'Todas em domínio público. No Nível 4 o alvo são Adelita, Estudio en Mi menor e Pavana; Capricho Árabe e Recuerdos ficam para o Nível 5.'
        },
        { t: 'h', x: 'A assinatura sonora de Tárrega' },
        {
          t: 'lista', itens: [
            '*Melodia sempre em primeiro plano*, mesmo quando está no meio da textura.',
            '*Rubato expressivo*: o tempo respira. Pequenos atrasos nos pontos altos da frase e acelerações nas passagens são parte do estilo, não erro.',
            '*Portamento e glissando*: deslizar de uma nota a outra é recurso expressivo em Tárrega, não defeito.',
            '*Dinâmica ampla*: do quase inaudível ao forte sonoro. Ele explorou o violão como instrumento de concerto.',
            '*Timbre variado*: a mesma frase repetida muda de cor.'
          ]
        },
        { t: 'h', x: 'Adelita: a mazurca' },
        { t: 'p', x: 'Mazurca é uma dança polonesa em 3/4 com uma particularidade: o acento vai no *segundo* ou no *terceiro* tempo, não no primeiro. Tocar Adelita com acento no tempo 1 descaracteriza a peça inteira.' },
        {
          t: 'compasso', formula: [3, 4], acentos: [0, 1, 0], rotulo: 'Mazurca',
          legenda: 'O acento da mazurca cai no segundo tempo. Conte "um DOIS três" e sinta o corpo balançar no dois.'
        },
        {
          t: 'pauta', bpm: 66, numerar: true, armadura: -1,
          txt: 'a4/c bb4/c a4/q f4/q | g4/c a4/c g4/q e4/q | f4/c g4/c f4/q d4/q | e4/b z/q',
          legenda: 'Desenho melódico no espírito de Adelita (redução didática, em tom menor). A frase desce em degraus: cada compasso começa um grau abaixo do anterior.'
        },
        { t: 'h', x: 'Estudio en Mi menor' },
        { t: 'p', x: 'Este estudo é a melhor porta de entrada para o Tárrega intermediário: o arpejo é constante, a melodia aparece no agudo e a harmonia percorre Mi menor com clareza. É também um excelente treino do que você viu em 4.2.5.' },
        {
          t: 'tab', bpm: 60, legenda: 'Padrão de arpejo no estilo do Estudio en Mi menor (redução didática). A melodia é a nota mais aguda de cada grupo: destaque-a.',
          compassos: [
            { acorde: 'Em', notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'Am', notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'B7', notas: [{ pos: [[5, 2]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 2]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'Em', notas: [{ pos: [[6, 0], [4, 2], [3, 0], [2, 0], [1, 0]], fig: 'minima' }] }
          ]
        },
        { t: 'tocar', titulo: 'Confira a melodia do estudo', seq: [[1, 3], [1, 0], [1, 2], [1, 0]], rotulo: 'Tocar só as notas da melodia', x: 'Sol, Mi, Fá♯, Mi: é esta linha que precisa cantar acima do arpejo.' },
        {
          t: 'dica', titulo: 'Rubato com método: ',
          x: 'rubato não é "tocar sem tempo". A regra é: o que você atrasa em um lugar, você compensa em outro. Marque na partitura dois pontos para respirar e um ponto alto para alongar. Fora deles, tempo firme.'
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Tárrega', rodadas: 6,
          perguntas: [
            { texto: 'Qual é a contribuição técnica principal de Tárrega?', opcoes: ['Fixou a posição de mão e a técnica moderna do violão', 'Inventou o violão', 'Criou o tremolo', 'Escreveu a primeira escala'], correta: 0, explicacao: 'Apoyando, tirando, postura e repertório.' },
            { texto: 'A mazurca tem o acento em qual tempo?', opcoes: ['Segundo ou terceiro', 'Primeiro', 'Quarto', 'Sem acento'], correta: 0, explicacao: 'Por isso o balanço característico.' },
            { texto: 'Qual peça de Tárrega é o exemplo clássico de tremolo?', opcoes: ['Recuerdos de la Alhambra', 'Lágrima', 'Adelita', 'Pavana'], correta: 0, explicacao: 'Estudada no Nível 5.' },
            { texto: 'Rubato significa:', opcoes: ['Flexibilizar o tempo, compensando atrasos e acelerações', 'Tocar sem tempo', 'Tocar mais rápido', 'Tocar mais forte'], correta: 0, explicacao: '"Roubar" tempo de um lugar e devolver em outro.' },
            { texto: 'No Estudio en Mi menor, a melodia está:', opcoes: ['Na nota mais aguda de cada grupo de arpejo', 'No baixo', 'Em harmônicos', 'Na voz do meio'], correta: 0, explicacao: 'Destaque com o dedo a.' },
            { texto: 'O portamento, em Tárrega, é:', opcoes: ['Recurso expressivo intencional', 'Defeito técnico', 'Proibido', 'Só para flamenco'], correta: 0, explicacao: 'Deslizar faz parte do estilo.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar Adelita com acento no primeiro tempo.', certo: 'Mazurca acentua o segundo tempo.' },
            { erro: 'Tocar Tárrega com tempo de metrônomo, sem flexibilidade.', certo: 'O estilo pede rubato planejado.' },
            { erro: 'Pular direto para o Recuerdos.', certo: 'Antes dele vêm Lágrima, Adelita, Estudio en Mi menor e o tremolo em construção.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tárrega fundou a técnica moderna do violão e o seu repertório central.',
            'Do fácil ao difícil: Lágrima → Adelita → Estudio en Mi menor → Pavana → Capricho Árabe → Recuerdos.',
            'Assinatura: melodia à frente, rubato, portamento, dinâmica ampla, timbres variados.',
            'Mazurca acentua o segundo tempo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Tárrega viveu entre:', opcoes: ['1852 e 1909', '1780 e 1840', '1900 e 1960', '1700 e 1750'], correta: 0, explicacao: 'Fim do romantismo.' },
        { texto: 'Qual peça de Tárrega é indicada para o Nível 4?', opcoes: ['Estudio en Mi menor', 'Recuerdos de la Alhambra', 'Estudio Brillante', 'Gran Jota'], correta: 0, explicacao: 'Arpejo com melodia.' },
        { texto: 'A técnica de apoyando foi sistematizada por:', opcoes: ['Tárrega', 'Sor', 'Giuliani', 'Carcassi'], correta: 0, explicacao: 'Escola moderna.' },
        { texto: 'Em Adelita, o compasso é:', opcoes: ['3/4, com acento no segundo tempo', '4/4', '2/4', '6/8'], correta: 0, explicacao: 'Mazurca.' },
        { texto: 'Rubato bem feito significa:', opcoes: ['Atrasar em um ponto e compensar em outro', 'Ignorar o tempo', 'Acelerar sempre', 'Tocar lento'], correta: 0, explicacao: 'O pulso geral se mantém.' },
        { texto: 'Capricho Árabe exige principalmente:', opcoes: ['Ligados, portamento e dinâmica ampla', 'Tremolo', 'Rasgueado', 'Harmônicos artificiais'], correta: 0, explicacao: 'Fantasia expressiva.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o padrão do Estudio en Mi menor com a melodia destacada.',
          'Toco o desenho de mazurca com acento no segundo tempo.',
          'Planejei dois pontos de respiração e um ponto alto numa frase.',
          'Toco a mesma frase duas vezes com timbres diferentes.'
        ],
        criterio: 'Você domina quando toca um Tárrega intermediário com melodia à frente e rubato planejado, não acidental.'
      }
    },

    // ---------------------------------------------------------------- 4.3.5
    {
      id: 'n4.3.5',
      titulo: 'Johann Sebastian Bach no violão',
      resumo: 'Transcrever, entender e tocar polifonia barroca.',
      minutos: 22,
      disciplinas: ['repertorio', 'contraponto', 'historia'],
      prereq: ['n4.1.9', 'n4.2.5'],
      status: 'implementado',
      cobre: ['Obras de Johann Sebastian Bach'],
      objetivo: 'Entender como Bach chega ao violão e estudar as suas obras acessíveis com critérios de estilo barroco.',
      blocos: [
        { t: 'p', x: 'Bach (1685–1750) nunca escreveu para violão: o instrumento como o conhecemos não existia. O que tocamos são *transcrições* — principalmente da suíte para laúde BWV 996, do Prelúdio BWV 999, das suítes de violoncelo e das sonatas e partitas para violino solo. E isso levanta uma questão que acompanha todo violonista: o que é fidelidade?' },
        { t: 'h', x: 'As obras acessíveis agora' },
        {
          t: 'tabela',
          cab: ['Obra', 'Origem', 'Dificuldade', 'Desafio'],
          linhas: [
            ['Prelúdio BWV 999 (em Dó menor / Ré menor)', 'laúde', 'intermediária', 'arpejo contínuo e condução do baixo'],
            ['Bourrée da BWV 996', 'laúde', 'intermediária', 'duas vozes independentes, articulação'],
            ['Minueto BWV 841 / 842', 'Caderno de Anna Magdalena', 'fácil a intermediária', 'legato e frase'],
            ['Sarabande da BWV 995/1011', 'laúde / violoncelo', 'intermediária-avançada', 'harmonia implícita, tempo largo'],
            ['Gavotte en Rondeau (BWV 1006a)', 'violino / laúde', 'avançada', 'velocidade e clareza'],
            ['Chaconne (BWV 1004)', 'violino', 'muito avançada', 'o Everest do violão (Nível 6)']
          ],
          legenda: 'Todas em domínio público. A BWV 1006a é uma transcrição feita por Bach ele mesmo, para instrumento de cordas dedilhadas: é a mais "autorizada" de todas.'
        },
        { t: 'h', x: 'A Bourrée: duas vozes, duas personalidades' },
        { t: 'p', x: 'A Bourrée da BWV 996 é a peça de Bach mais tocada por violonistas intermediários, e por um bom motivo: ela ensina tudo. São duas vozes, em movimento quase sempre contrário, com uma dança embaixo.' },
        {
          t: 'pauta', bpm: 72, numerar: true, quebrar: 2, armadura: -1,
          txt: 'z/c e4/c | a4/c g4/c f4/c e4/c d4/c c4/c | b3/c c4/c d4/c e4/c f4/c g4/c | a4/q e4/q c4/b',
          legenda: 'Incipit melódico da Bourrée (redução didática a uma voz). Repare na anacruse: a peça começa na última colcheia do compasso anterior.'
        },
        {
          t: 'passos', itens: [
            '*Anacruse*: conte o compasso inteiro e entre na última colcheia. Começar no tempo 1 estraga a dança.',
            '*Articulação barroca*: Bach não escreveu dinâmica nem ligaduras. A articulação padrão é levemente separada (non legato), não grudada.',
            '*Vozes com volumes diferentes*: a superior canta; o baixo caminha, com clareza mas discreto.',
            '*Sem rubato romântico*: o tempo barroco é estável. A expressão vem da articulação e do timbre, não de atrasos.',
            '*Ornamentos*: trinados e apojaturas são parte do estilo, mas deixe-os para depois de a peça estar firme.'
          ]
        },
        {
          t: 'dica', titulo: 'A pergunta que resolve 90% das dúvidas de estilo: ',
          x: '"isto é uma dança?" A maior parte das peças de Bach para instrumento solo é dança: bourrée, sarabanda, gigue, allemande, courante. Se é dança, tem pulso de corpo, acentuação regular e tempo estável. Toque para alguém poder dançar.'
        },
        { t: 'h', x: 'Prelúdio BWV 999: o arpejo que nunca para' },
        { t: 'p', x: 'Este prelúdio é um arpejo contínuo em semicolcheias, do início ao fim, com uma linha de baixo que se move devagar. É o estudo perfeito de regularidade de mão direita associada à harmonia.' },
        {
          t: 'tab', bpm: 60, legenda: 'Padrão no espírito do BWV 999 (redução didática): o baixo muda a cada compasso e o arpejo se mantém idêntico. Toque a mão direita como uma máquina.',
          compassos: [
            { acorde: 'Dm', notas: [{ pos: [[4, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 3]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'a' }] },
            { acorde: 'A7', notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 2]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 2]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 2]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }] }
          ]
        },
        { t: 'h', x: 'Sobre transcrever Bach' },
        {
          t: 'lista', itens: [
            '*Tonalidade*: a maioria das transcrições muda o tom para caber no violão. O BWV 999, originalmente em Dó menor, é quase sempre tocado em Ré menor.',
            '*Oitavas*: notas graves impossíveis sobem uma oitava. Isso altera a condução das vozes e precisa ser feito com critério.',
            '*Notas acrescentadas*: algumas transcrições acrescentam baixos que Bach não escreveu, para aproveitar as cordas soltas. É aceito, mas é escolha do transcritor, não "o que Bach escreveu".',
            '*Edições*: compare duas ou três edições da mesma peça. As diferenças mostram o que é Bach e o que é interpretação do editor.'
          ]
        },
        { t: 'tocar', titulo: 'Confira a anacruse', seq: [[2, 0], [1, 0], [1, 3], [1, 1]], rotulo: 'Tocar o começo da Bourrée', x: 'A primeira nota é a anacruse: ela entra antes do tempo 1 do compasso seguinte.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Bach no violão', rodadas: 7,
          perguntas: [
            { texto: 'Bach escreveu para violão?', opcoes: ['Não: tocamos transcrições', 'Sim, 12 suítes', 'Sim, uma sonata', 'Sim, estudos'], correta: 0, explicacao: 'O violão moderno não existia.' },
            { texto: 'Qual obra de Bach é transcrição feita por ele mesmo para cordas dedilhadas?', opcoes: ['BWV 1006a', 'BWV 1004', 'BWV 996', 'BWV 999'], correta: 0, explicacao: 'A mais "autorizada".' },
            { texto: 'A articulação padrão no barroco é:', opcoes: ['Levemente separada (non legato)', 'Totalmente ligada', 'Staccato seco', 'Com pedal'], correta: 0, explicacao: 'Clareza das vozes.' },
            { texto: 'O que é uma anacruse?', opcoes: ['Nota ou notas antes do primeiro tempo forte', 'Uma pausa', 'Um trinado', 'Uma cadência'], correta: 0, explicacao: 'A Bourrée começa com uma.' },
            { texto: 'Rubato romântico em Bach é:', opcoes: ['Fora de estilo: o tempo barroco é estável', 'Obrigatório', 'Indicado nas partituras', 'Usado nas danças'], correta: 0, explicacao: 'Expressão vem da articulação.' },
            { texto: 'O BWV 999 é tocado no violão geralmente em:', opcoes: ['Ré menor', 'Dó menor', 'Mi menor', 'Lá menor'], correta: 0, explicacao: 'Transposto para caber no instrumento.' },
            { texto: 'A pergunta-chave de estilo em Bach é:', opcoes: ['"Isto é uma dança?"', '"Isto é rápido?"', '"Isto é forte?"', '"Isto é fácil?"'], correta: 0, explicacao: 'A maioria é dança.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar a Bourrée começando no tempo 1.', certo: 'Ela começa na anacruse, antes do tempo forte.' },
            { erro: 'Tocar Bach com rubato de Tárrega.', certo: 'Tempo estável, expressão pela articulação.' },
            { erro: 'Achar que a edição que você tem é "o que Bach escreveu".', certo: 'Compare edições: muita coisa é escolha do transcritor.' },
            { erro: 'Colocar ornamentos antes de a peça estar firme.', certo: 'Primeiro as notas e as vozes; depois os ornamentos.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tudo de Bach no violão é transcrição: de laúde, violoncelo ou violino.',
            'Acessíveis agora: Prelúdio BWV 999, Bourrée e Minueto da BWV 996, Minuetos do Caderno.',
            'Estilo: non legato, tempo estável, vozes com volumes diferentes, sem rubato romântico.',
            'Pergunte sempre: isto é uma dança? Então tem pulso de corpo.'
          ]
        }
      ],
      quiz: [
        { texto: 'A Bourrée mais tocada por violonistas vem de qual obra?', opcoes: ['Suíte para laúde BWV 996', 'Chaconne BWV 1004', 'Prelúdio BWV 999', 'Suíte BWV 1007'], correta: 0, explicacao: 'Em Mi menor na transcrição usual.' },
        { texto: 'Sobre dinâmica nas partituras de Bach:', opcoes: ['Ele quase não escreveu: é escolha do intérprete', 'Está toda indicada', 'Proibida', 'Só forte'], correta: 0, explicacao: 'Convenção da época.' },
        { texto: 'Transcrições costumam mudar:', opcoes: ['Tonalidade e oitavas de algumas notas', 'As melodias', 'O compasso', 'A harmonia'], correta: 0, explicacao: 'Para caber no instrumento.' },
        { texto: 'No BWV 999, a mão direita deve ser:', opcoes: ['Absolutamente regular', 'Variável', 'Livre', 'Com rubato'], correta: 0, explicacao: 'O arpejo é contínuo.' },
        { texto: 'Em peças a duas vozes de Bach, o baixo deve:', opcoes: ['Caminhar com clareza, mas discreto', 'Ser o mais forte', 'Ser abafado', 'Ter o mesmo volume da melodia'], correta: 0, explicacao: 'Independência com hierarquia.' },
        { texto: 'Trinados e apojaturas devem entrar:', opcoes: ['Depois de a peça estar firme', 'Desde a primeira leitura', 'Nunca', 'Só em concerto'], correta: 0, explicacao: 'Ornamento é acabamento.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o incipit da Bourrée entrando corretamente na anacruse.',
          'Toco o padrão do BWV 999 com mão direita regular por 8 compassos.',
          'Mantenho articulação non legato e tempo estável.',
          'Comparei duas edições de uma peça de Bach e identifiquei diferenças.'
        ],
        criterio: 'Você domina quando toca uma peça de Bach com as duas vozes audíveis, articulação barroca e pulso de dança.'
      }
    },

    // ---------------------------------------------------------------- 4.3.6
    {
      id: 'n4.3.6',
      titulo: 'Montando um programa intermediário',
      resumo: 'Escolher peças, estudar com método e preparar para tocar em público.',
      minutos: 20,
      disciplinas: ['repertorio', 'interpretacao'],
      prereq: ['n4.3.5'],
      status: 'implementado',
      cobre: ['Repertório intermediário'],
      objetivo: 'Montar um programa equilibrado de 15 minutos e saber como levar uma peça do zero ao palco.',
      blocos: [
        { t: 'p', x: 'Chegou o momento de deixar de tocar peças soltas e começar a pensar em *programa*: um conjunto de obras que funciona junto. Isso vale mesmo que o público seja só a sua família na sala — e, sinceramente, esse é o melhor público que existe.' },
        { t: 'h', x: 'Como se monta um programa' },
        {
          t: 'lista', itens: [
            '*Variedade de época*: uma peça barroca, uma clássica, uma romântica, uma do século XX ou brasileira.',
            '*Variedade de caráter*: rápida e lenta alternadas. Duas peças melancólicas em seguida afundam o programa.',
            '*Variedade de tonalidade*: evite três peças seguidas em Mi menor.',
            '*Peça de abertura confiável*: comece com algo que você toca com os olhos fechados. O nervosismo é maior nos dois primeiros minutos.',
            '*Peça de fechamento com efeito*: algo brilhante ou comovente, para terminar bem.',
            '*Duração realista*: 15 minutos para uma apresentação informal; quatro a seis peças curtas bastam.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Posição', 'Sugestão de repertório (domínio público)', 'Por quê'],
          linhas: [
            ['Abertura', 'Minueto de Bach (BWV 841) ou Op. 60 nº 1 de Carcassi', 'confiável, pulso estável'],
            ['2ª', 'Estudo Op. 35 nº 22 de Sor', 'melódica, mostra som'],
            ['3ª', 'Lágrima ou Adelita de Tárrega', 'curta e comovente'],
            ['4ª', 'Bourrée BWV 996', 'contraste barroco, movimento'],
            ['5ª', 'Estudio en Mi menor de Tárrega', 'arpejo e melodia'],
            ['Fechamento', 'Op. 60 nº 3 de Carcassi ou uma peça brasileira', 'brilho final']
          ],
          legenda: 'Este é um exemplo. Troque por peças que você toca bem: um programa modesto bem tocado vale mais que um ambicioso tocado pela metade.'
        },
        { t: 'h', x: 'As cinco fases de uma peça' },
        {
          t: 'passos', itens: [
            '*1. Leitura (1 a 2 semanas)*: notas, dedilhado, digitação. Andamento lento. Nada de interpretação ainda.',
            '*2. Montagem (2 a 4 semanas)*: trechos difíceis isolados, blocos, metrônomo subindo. A peça passa a tocar do início ao fim.',
            '*3. Memorização (2 semanas)*: por seções, com análise harmônica. Decore a planta, não só os dedos.',
            '*4. Interpretação (contínua)*: dinâmica, timbre, frase, rubato. Grave e ouça.',
            '*5. Preparação de palco (1 a 2 semanas)*: tocar de pé, tocar para alguém, tocar com distrações, tocar logo depois de acordar.'
          ]
        },
        {
          t: 'dica', titulo: 'A regra do "não recomeçar": ',
          x: 'na fase 5, treine *continuar depois de errar*. Quem só pratica do começo aprende a recomeçar, e isso é desastroso no palco. Grave-se tocando a peça inteira três vezes seguidas sem parar, aconteça o que acontecer.'
        },
        { t: 'h', x: 'Tocar para alguém' },
        {
          t: 'tabela',
          cab: ['Preparação', 'O que fazer'],
          linhas: [
            ['Uma semana antes', 'toque a peça inteira todos os dias, gravada, sem parar'],
            ['Três dias antes', 'toque para uma pessoa (ou para o celular na sua frente)'],
            ['No dia', 'aquecimento leve, nada de passagens difíceis nas últimas horas'],
            ['Antes de começar', 'respire fundo três vezes, afine com calma, toque o primeiro acorde devagar'],
            ['Se errar', 'continue. Ninguém na plateia sabe onde era o erro']
          ]
        },
        {
          t: 'check', chave: 'programa43', titulo: 'Meu primeiro programa',
          itens: [
            'Escolhi quatro a seis peças de épocas diferentes.',
            'Minha peça de abertura é a mais segura que eu tenho.',
            'Toquei o programa inteiro, na ordem, três vezes.',
            'Gravei o programa inteiro sem parar.',
            'Toquei para pelo menos uma pessoa.'
          ]
        },
        { t: 'ir', titulo: 'Abrir o Plano de Estudos', rota: 'plano', x: 'Use o plano para reservar tempo de repertório e de montagem de programa na sua rotina.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Programa e preparação', rodadas: 6,
          perguntas: [
            { texto: 'Qual peça deve abrir um programa?', opcoes: ['A mais confiável', 'A mais difícil', 'A mais longa', 'A mais nova'], correta: 0, explicacao: 'O nervosismo é maior no início.' },
            { texto: 'Quantas fases tem o estudo de uma peça, segundo esta aula?', opcoes: ['Cinco', 'Três', 'Duas', 'Sete'], correta: 0, explicacao: 'Leitura, montagem, memorização, interpretação, palco.' },
            { texto: 'Por que treinar "continuar depois de errar"?', opcoes: ['Porque quem só pratica do começo aprende a recomeçar', 'Para tocar mais rápido', 'Para decorar melhor', 'Para afinar'], correta: 0, explicacao: 'Essencial no palco.' },
            { texto: 'Um programa informal de 15 minutos tem cerca de:', opcoes: ['Quatro a seis peças curtas', 'Uma peça longa', 'Dez peças', 'Vinte peças'], correta: 0, explicacao: 'Duração realista.' },
            { texto: 'Na véspera da apresentação, o indicado é:', opcoes: ['Tocar a peça inteira, sem passagens difíceis isoladas', 'Treinar as passagens mais difíceis muitas vezes', 'Não tocar', 'Aprender uma peça nova'], correta: 0, explicacao: 'Consolidar, não desmontar.' },
            { texto: 'A memorização deve se apoiar em:', opcoes: ['Análise harmônica e estrutura', 'Repetição mecânica apenas', 'Vídeo', 'Tablatura'], correta: 0, explicacao: 'Decorar a planta.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Montar um programa só com peças difíceis.', certo: 'Programa é equilíbrio: o público ouve o conjunto, não a dificuldade.' },
            { erro: 'Estudar sempre do começo da peça.', certo: 'Isso cria uma peça com o começo ótimo e o fim frágil.' },
            { erro: 'Tocar em público uma peça que você acabou de montar.', certo: 'Uma peça precisa de pelo menos duas semanas na fase 5.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Programa = variedade de época, caráter e tonalidade.',
            'Abra com a peça mais segura; feche com a de mais efeito.',
            'Cinco fases: leitura, montagem, memorização, interpretação, palco.',
            'Treine continuar depois de errar; grave a peça inteira sem parar.',
            'Na véspera, consolide; não desmonte.'
          ]
        }
      ],
      quiz: [
        { texto: 'Um bom programa evita:', opcoes: ['Três peças seguidas no mesmo caráter e tonalidade', 'Peças curtas', 'Peças antigas', 'Repetir compositor'], correta: 0, explicacao: 'Variedade sustenta a atenção.' },
        { texto: 'A fase de interpretação começa:', opcoes: ['Depois da montagem, quando a peça já toca inteira', 'Na primeira leitura', 'Só no palco', 'Nunca'], correta: 0, explicacao: 'Primeiro as notas; depois a música.' },
        { texto: 'Gravar-se serve para:', opcoes: ['Ouvir o que o público vai ouvir', 'Mostrar nas redes', 'Afinar', 'Decorar'], correta: 0, explicacao: 'É o espelho do músico.' },
        { texto: 'Quanto tempo de preparação de palco uma peça precisa?', opcoes: ['Uma a duas semanas', 'Um dia', 'Três meses', 'Nenhum'], correta: 0, explicacao: 'Tocar para alguém, de pé, com distrações.' },
        { texto: 'Ao errar numa apresentação, o certo é:', opcoes: ['Continuar', 'Recomeçar', 'Parar e pedir desculpa', 'Tocar outra peça'], correta: 0, explicacao: 'A plateia não sabe onde era.' },
        { texto: 'Memorizar por seções com análise harmônica é melhor porque:', opcoes: ['Você decora a estrutura, não só os movimentos dos dedos', 'É mais rápido de ler', 'Melhora o som', 'Aumenta o andamento'], correta: 0, explicacao: 'Memória mais robusta.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Montei um programa de quatro a seis peças, com variedade.',
          'Toquei o programa inteiro na ordem, três vezes.',
          'Gravei uma peça inteira sem parar, mesmo com erros.',
          'Toquei para pelo menos uma pessoa.'
        ],
        criterio: 'Você conclui o Nível 4 em repertório quando toca um programa curto do início ao fim, de memória em pelo menos duas peças, sem recomeçar.'
      }
    }
  ]
};
