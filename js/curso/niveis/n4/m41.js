// NÍVEL 4 · MÓDULO 4.1 — Harmonia intermediária
// Nove aulas: campo harmônico menor, tríades e inversões, sétimas e tétrades,
// progressões e cadências, dominantes secundárias, tonalidade e modulação,
// análise harmônica, motivo/frase/período/forma e a primeira porta do contraponto.

export const M41 = {
  id: '4.1',
  titulo: 'Harmonia intermediária',
  objetivo: 'Entender a música por dentro: como os acordes se formam, se invertem, se encadeiam, criam tensão, mudam de tonalidade e se organizam em frases e formas.',
  aulas: [

    // ---------------------------------------------------------------- 4.1.1
    {
      id: 'n4.1.1',
      titulo: 'Campo harmônico menor',
      resumo: 'Os acordes do tom menor, e por que o V é maior.',
      minutos: 18,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n3.1.6'],
      status: 'implementado',
      cobre: ['Campo harmônico menor'],
      objetivo: 'Montar os sete acordes de qualquer tonalidade menor e entender por que o quinto grau aparece maior no repertório.',
      blocos: [
        { t: 'p', x: 'No Nível 3 você montou o campo harmônico maior: uma tríade sobre cada nota da escala, usando só as notas daquela escala. Em tom menor o procedimento é o mesmo, mas o resultado é diferente — e tem uma surpresa no quinto grau.' },
        { t: 'h', x: 'O campo da menor natural' },
        { t: 'p', x: 'A escala de Lá menor natural é *Lá Si Dó Ré Mi Fá Sol*. Empilhando terças sobre cada grau, com essas notas e só essas, saem sete acordes:' },
        {
          t: 'tabela',
          cab: ['Grau', 'Acorde em Lá menor', 'Qualidade'],
          linhas: [
            ['i', 'Am (Lá Dó Mi)', 'menor'],
            ['ii°', 'Bdim (Si Ré Fá)', 'diminuto'],
            ['III', 'C (Dó Mi Sol)', 'maior'],
            ['iv', 'Dm (Ré Fá Lá)', 'menor'],
            ['v', 'Em (Mi Sol Si)', 'menor'],
            ['VI', 'F (Fá Lá Dó)', 'maior'],
            ['VII', 'G (Sol Si Ré)', 'maior']
          ],
          legenda: 'O padrão da menor natural: i ii° III iv v VI VII. Minúsculas são acordes menores, maiúsculas são maiores, o ° é diminuto.'
        },
        {
          t: 'dica', titulo: 'Atalho que economiza decoreba: ',
          x: 'o campo menor natural usa *exatamente os mesmos sete acordes* do campo maior da sua relativa. Lá menor e Dó maior têm os mesmos acordes (Am, Bdim, C, Dm, Em, F, G). O que muda é qual deles é a casa: em Dó maior a casa é C, em Lá menor a casa é Am.'
        },
        { t: 'h', x: 'O problema do v menor' },
        { t: 'p', x: 'Toque Em → Am. Depois toque E (maior) → Am. Ouça a diferença: o primeiro chega mole, o segundo chega como quem fecha a porta. A razão é uma nota só.' },
        {
          t: 'ouvir', titulo: 'Ouvir v menor → i', acorde: [40, 47, 52, 55, 59], bpm: 60,
          x: 'Em maior… não: Em (Mi Sol Si). A nota Sol não aponta para lugar nenhum.'
        },
        { t: 'ouvir', titulo: 'Ouvir V maior → i', acorde: [40, 47, 56, 59, 64], x: 'E (Mi Sol♯ Si). O Sol♯ é um semitom abaixo do Lá: ele *puxa* para a tônica.' },
        {
          t: 'def', termo: 'Sensível',
          x: 'a nota que fica um semitom abaixo da tônica. Em Lá menor, o Sol♯. Ela cria a maior tensão da tonalidade e é o que faz o V soar como dominante de verdade. A menor natural não tem sensível: o Sol fica um *tom* abaixo do Lá.'
        },
        { t: 'p', x: 'Para ganhar a sensível, a música sobe o sétimo grau meio tom. Essa escala tem nome: *menor harmônica* (Lá Si Dó Ré Mi Fá Sol♯). Você já a viu no Nível 3. É dela que vem o V maior.' },
        { t: 'h', x: 'O campo harmônico menor que o repertório realmente usa' },
        {
          t: 'tabela',
          cab: ['Grau', 'Lá menor', 'De onde vem'],
          linhas: [
            ['i', 'Am', 'natural'],
            ['ii°', 'Bdim', 'natural'],
            ['III', 'C', 'natural'],
            ['iv', 'Dm', 'natural'],
            ['V', 'E (maior!)', 'harmônica — tem o Sol♯'],
            ['V7', 'E7', 'harmônica — Sol♯ + Ré'],
            ['VI', 'F', 'natural'],
            ['VII°', 'Gdim♯ (Sol♯ Si Ré)', 'harmônica'],
            ['VII', 'G', 'natural — usado como passagem para C']
          ],
          legenda: 'Na prática o tom menor mistura as duas escalas: melodias usam a natural, e o acorde de dominante usa a harmônica. Isso não é incoerência: é como a música tonal funciona desde o barroco.'
        },
        {
          t: 'acorde', legenda: 'Os cinco acordes que resolvem quase todo tom menor no violão. Toque na ordem: Am · Dm · E · F · C.',
          lista: [
            { nome: 'Am (i)', cordas: [-1, 0, 2, 2, 1, 0], dedos: [null, null, 2, 3, 1, null] },
            { nome: 'Dm (iv)', cordas: [-1, -1, 0, 2, 3, 1], dedos: [null, null, null, 2, 3, 1] },
            { nome: 'E (V)', cordas: [0, 2, 2, 1, 0, 0], dedos: [null, 2, 3, 1, null, null] },
            { nome: 'F (VI)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1] },
            { nome: 'C (III)', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] }
          ]
        },
        { t: 'h', x: 'A sequência que você já ouviu mil vezes' },
        {
          t: 'tab', bpm: 66, legenda: 'i – iv – V – i em Lá menor. É a cadência menor: a base de "Romance de Amor", de "Malagueña" e de meia Espanha.',
          compassos: [
            { acorde: 'Am', notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'Dm', notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'E', notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'Am', notas: [{ pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'minima' }] }
          ]
        },
        { t: 'tocar', titulo: 'Confira a sensível no violão', seq: [[3, 1], [2, 1], [3, 2]], rotulo: 'Tocar Sol♯ → Lá → Lá (3ª corda)', x: 'A primeira nota é o Sol♯ (3ª corda, casa 1), a sensível. Ouça como ela pede o Lá.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Campo menor', rodadas: 7,
          perguntas: [
            { texto: 'No campo harmônico menor natural, qual é a qualidade do grau ii?', opcoes: ['Diminuto', 'Menor', 'Maior', 'Aumentado'], correta: 0, explicacao: 'Em Lá menor: Si Ré Fá = Bdim.' },
            { texto: 'Por que o V do tom menor costuma aparecer maior?', opcoes: ['Para ganhar a sensível, que puxa para a tônica', 'Para ficar mais fácil de tocar', 'Porque soa mais alegre', 'Por engano dos compositores'], correta: 0, explicacao: 'O sétimo grau sobe meio tom e vira sensível.' },
            { texto: 'Qual é o acorde de V7 em Ré menor?', opcoes: ['A7', 'Am7', 'D7', 'G7'], correta: 0, explicacao: 'A quinta de Ré é Lá; com sensível Dó♯, dá A7.' },
            { texto: 'O campo de Mi menor usa os mesmos acordes do campo maior de qual tom?', opcoes: ['Sol maior', 'Dó maior', 'Mi maior', 'Ré maior'], correta: 0, explicacao: 'Mi menor é a relativa de Sol maior.' },
            { texto: 'Qual é a sensível de Dó menor?', opcoes: ['Si', 'Si bemol', 'Dó♯', 'Lá'], correta: 0, explicacao: 'Um semitom abaixo de Dó: Si natural (a natural teria Si♭).' },
            { texto: 'Em Lá menor, qual grau é o acorde de F?', opcoes: ['VI', 'IV', 'III', 'VII'], correta: 0, explicacao: 'Fá é o sexto grau da escala de Lá menor.' },
            { texto: 'Qual sequência é a cadência menor clássica?', opcoes: ['i – iv – V – i', 'i – III – VI – i', 'i – ii – iii – i', 'I – IV – V – I'], correta: 0, explicacao: 'Em Lá menor: Am – Dm – E – Am.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Usar Em como dominante de Lá menor e estranhar que não resolve.', certo: 'Use E ou E7: é o Sol♯ que resolve.' },
            { erro: 'Achar que menor natural e menor harmônica são tonalidades diferentes.', certo: 'São duas escalas da mesma tonalidade; a música usa as duas conforme a função.' },
            { erro: 'Escrever o VII° como "Gdim" em Lá menor.', certo: 'O acorde diminuto da harmônica é sobre Sol♯, não sobre Sol.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Campo menor natural: i ii° III iv v VI VII.',
            'Ele tem os mesmos acordes do campo maior da relativa; o que muda é a casa.',
            'A sensível é a nota um semitom abaixo da tônica, e vem da menor harmônica.',
            'Na prática o tom menor usa V ou V7 maior, e é isso que faz a cadência fechar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a fórmula de qualidades do campo menor natural?', opcoes: ['i ii° III iv v VI VII', 'I ii iii IV V vi vii°', 'i ii III IV v VI vii', 'I II III iv v VI VII'], correta: 0, explicacao: 'Menor, diminuto, maior, menor, menor, maior, maior.' },
        { texto: 'A sensível de Mi menor é:', opcoes: ['Ré♯', 'Ré', 'Fá♯', 'Mi♭'], correta: 0, explicacao: 'Um semitom abaixo de Mi.' },
        { texto: 'Qual acorde é o iv de Mi menor?', opcoes: ['Am', 'A', 'Bm', 'C'], correta: 0, explicacao: 'O quarto grau de Mi menor é Lá, menor.' },
        { texto: 'De qual escala vem o V maior do tom menor?', opcoes: ['Menor harmônica', 'Menor natural', 'Menor melódica descendente', 'Cromática'], correta: 0, explicacao: 'É ela que sobe o sétimo grau.' },
        { texto: 'Em Ré menor, qual é o acorde de VI?', opcoes: ['Si bemol maior', 'Si diminuto', 'Sol menor', 'Fá maior'], correta: 0, explicacao: 'O sexto grau de Ré menor é Si♭.' },
        { texto: 'Por que Am e C têm os mesmos acordes no campo?', opcoes: ['Porque são relativas: mesma armadura', 'Porque são enarmônicas', 'Coincidência', 'Porque ambas são menores'], correta: 0, explicacao: 'Mesma armadura, tônicas diferentes.' },
        { texto: 'O acorde Bdim em Lá menor é formado por:', opcoes: ['Si Ré Fá', 'Si Ré♯ Fá♯', 'Si Ré Fá♯', 'Si Dó Ré'], correta: 0, explicacao: 'Duas terças menores empilhadas.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Monto o campo harmônico menor de Lá, Mi e Ré de cabeça.',
          'Toco i – iv – V – i em Lá menor e em Mi menor sem parar.',
          'Identifico a sensível de qualquer tonalidade menor.',
          'Ouço a diferença entre v menor e V maior chegando na tônica.'
        ],
        criterio: 'Você domina quando escreve o campo menor de qualquer tonalidade e explica, com a nota na mão, por que o V é maior.'
      }
    },

    // ---------------------------------------------------------------- 4.1.2
    {
      id: 'n4.1.2',
      titulo: 'Tríades e inversões',
      resumo: 'O mesmo acorde com outro baixo muda tudo.',
      minutos: 16,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n4.1.1'],
      status: 'implementado',
      cobre: ['Tríades e inversões'],
      objetivo: 'Reconhecer e usar as três posições de uma tríade e entender o efeito de cada baixo.',
      blocos: [
        { t: 'p', x: 'Uma tríade tem três notas: raiz, terça e quinta. Mas elas podem ser empilhadas em três ordens diferentes, e *quem está no baixo* muda o caráter do acorde sem mudar o acorde.' },
        { t: 'h', x: 'As três posições' },
        {
          t: 'tabela',
          cab: ['Posição', 'Nota no baixo', 'Cifra', 'Dó maior'],
          linhas: [
            ['Estado fundamental', 'raiz', 'C', 'Dó Mi Sol'],
            ['1ª inversão', 'terça', 'C/E', 'Mi Sol Dó'],
            ['2ª inversão', 'quinta', 'C/G', 'Sol Dó Mi']
          ],
          legenda: 'A barra na cifra indica a nota do baixo: C/E lê-se "Dó com baixo em Mi".'
        },
        { t: 'pauta', txt: 'c4+e4+g4/o | e4+g4+c5/o | g4+c5+e5/o', formula: null, bpm: 50, legenda: 'As três posições de Dó maior na pauta. São as mesmas três notas, reordenadas.' },
        { t: 'h', x: 'Por que isso existe' },
        {
          t: 'lista', itens: [
            '*Baixo que caminha*: em C → C/B? não; mas em C → G/B → Am o baixo desce Dó–Si–Lá, de nota em nota. Com acordes só em estado fundamental o baixo saltaria.',
            '*Peso*: estado fundamental é firme e conclusivo; a 1ª inversão é leve, boa para o meio da frase; a 2ª inversão é instável e quase sempre pede continuação.',
            '*Violão*: muitas vezes a inversão é a única forma confortável. O acorde de Sol com baixo em Si (G/B) cai naturalmente na mão.'
          ]
        },
        {
          t: 'acorde', legenda: 'C, C/E e C/G no violão. Ouça: o acorde é o mesmo, a sensação é outra.',
          lista: [
            { nome: 'C', cordas: [-1, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
            { nome: 'C/E', cordas: [0, 3, 2, 0, 1, 0], dedos: [null, 3, 2, null, 1, null] },
            { nome: 'C/G', cordas: [3, 3, 2, 0, 1, 0], dedos: [3, 4, 2, null, 1, null] }
          ]
        },
        {
          t: 'h3', x: 'A cadência com 2ª inversão'
        },
        { t: 'p', x: 'Existe um lugar em que a 2ª inversão é obrigatória no estilo clássico: logo antes da dominante, formando o chamado *cadencial*. Em Dó maior: C/G → G7 → C. O baixo fica parado no Sol e as vozes de cima resolvem em cima dele.' },
        { t: 'ouvir', titulo: 'Ouvir C/G → G7 → C', notas: [43, 48, 52, 43, 47, 50, 53, 48, 52, 55], bpm: 56, x: 'O baixo Sol se repete nos dois primeiros acordes: é a assinatura do cadencial.' },
        { t: 'h', x: 'Como achar a inversão de ouvido e no papel' },
        {
          t: 'passos', itens: [
            'Olhe a nota mais grave do acorde.',
            'Monte o acorde em terças a partir dela: se der uma pilha de duas terças (3ª + 3ª), está no estado fundamental.',
            'Se der uma terça e depois uma quarta (3ª + 4ª), é 1ª inversão: a raiz é a nota de cima.',
            'Se der uma quarta e depois uma terça (4ª + 3ª), é 2ª inversão: a raiz é a nota do meio.'
          ]
        },
        {
          t: 'dica', titulo: 'Regra da quarta: ',
          x: 'numa tríade invertida, *a raiz é sempre a nota logo acima do intervalo de quarta*. Ache a quarta e você achou a raiz, sem decorar nada.'
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Achar a inversão', rodadas: 6,
          perguntas: [
            { texto: 'Mi Sol Dó é qual posição de qual acorde?', opcoes: ['1ª inversão de Dó maior', 'Estado fundamental de Mi menor', '2ª inversão de Dó maior', '1ª inversão de Mi menor'], correta: 0, explicacao: 'A quarta é Sol→Dó, então a raiz é Dó.' },
            { texto: 'Sol Dó Mi é:', opcoes: ['2ª inversão de Dó maior', '1ª inversão de Sol maior', 'Dó maior fundamental', 'Sol maior fundamental'], correta: 0, explicacao: 'A quinta (Sol) está no baixo.' },
            { texto: 'A cifra Am/C significa:', opcoes: ['Lá menor com Dó no baixo', 'Lá menor com Dó na melodia', 'Lá menor e Dó maior juntos', 'Dó maior com Lá no baixo'], correta: 0, explicacao: 'Depois da barra vem o baixo.' },
            { texto: 'Qual posição soa mais conclusiva?', opcoes: ['Estado fundamental', '1ª inversão', '2ª inversão', 'Todas iguais'], correta: 0, explicacao: 'Raiz no baixo é o acorde mais firme.' },
            { texto: 'No cadencial clássico, o acorde antes da dominante é:', opcoes: ['A tônica em 2ª inversão', 'A tônica fundamental', 'O IV em 1ª inversão', 'O ii'], correta: 0, explicacao: 'C/G → G7 → C.' },
            { texto: 'Numa tríade invertida, a raiz está:', opcoes: ['Logo acima da quarta', 'Sempre no topo', 'Sempre no meio', 'No baixo'], correta: 0, explicacao: 'É a regra da quarta.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Confundir C/E com um acorde de Mi.', certo: 'O acorde é Dó; o Mi é só o baixo.' },
            { erro: 'Terminar uma peça com a tônica em 2ª inversão.', certo: 'Para fechar, raiz no baixo.' },
            { erro: 'Procurar a raiz contando sempre de baixo para cima.', certo: 'Ache o intervalo de quarta: a raiz está logo acima dele.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tríade = raiz, terça, quinta. Três posições: fundamental, 1ª e 2ª inversão.',
            'A cifra com barra indica o baixo: C/G é Dó com Sol no baixo.',
            'Inversões servem para o baixo caminhar, para aliviar o peso e para caber na mão.',
            'A raiz é a nota logo acima do intervalo de quarta.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantas posições tem uma tríade?', opcoes: ['3', '2', '4', '7'], correta: 0, explicacao: 'Fundamental, 1ª e 2ª inversão.' },
        { texto: 'Lá Dó Mi com Dó no baixo se escreve:', opcoes: ['Am/C', 'C/Am', 'Am7', 'C6'], correta: 0, explicacao: 'Acorde barra baixo.' },
        { texto: 'Qual inversão é a mais instável?', opcoes: ['2ª', '1ª', 'Fundamental', 'Nenhuma'], correta: 0, explicacao: 'A quinta no baixo pede continuação.' },
        { texto: 'Fá Lá Ré é qual acorde e posição?', opcoes: ['1ª inversão de Ré menor', 'Fá maior fundamental', '2ª inversão de Ré menor', 'Fá com sexta'], correta: 0, explicacao: 'A quarta é Lá→Ré; raiz Ré; acorde Dm.' },
        { texto: 'Para que serve a inversão num acompanhamento?', opcoes: ['Fazer o baixo caminhar por graus vizinhos', 'Trocar a tonalidade', 'Aumentar o andamento', 'Mudar o compasso'], correta: 0, explicacao: 'Linha de baixo suave.' },
        { texto: 'C/G → G7 → C é um exemplo de:', opcoes: ['Cadencial com 2ª inversão', 'Modulação', 'Cadência plagal', 'Dominante secundária'], correta: 0, explicacao: 'O baixo fica no Sol.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco C, C/E e C/G e ouço a diferença de peso entre eles.',
          'Identifico a raiz de qualquer tríade invertida escrita na pauta.',
          'Toco G → G/B → Am com o baixo descendo de grau em grau.',
          'Toco o cadencial C/G – G7 – C sem olhar as cifras.'
        ],
        criterio: 'Você domina quando nomeia qualquer tríade invertida e escolhe a inversão certa para o baixo caminhar.'
      }
    },

    // ---------------------------------------------------------------- 4.1.3
    {
      id: 'n4.1.3',
      titulo: 'Acordes com sétima e tétrades',
      resumo: 'A quarta nota que dá cor e direção.',
      minutos: 20,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n4.1.2'],
      status: 'implementado',
      cobre: ['Acordes com sétima', 'Tétrades'],
      objetivo: 'Construir e reconhecer as cinco tétrades do campo harmônico e saber o que cada uma pede.',
      blocos: [
        { t: 'p', x: 'Empilhe mais uma terça sobre a tríade e você tem uma *tétrade*: quatro notas, raiz, terça, quinta e sétima. O nome genérico é "acorde com sétima". É a partir daqui que a harmonia deixa de ser só sustentação e começa a ter cor e direção.' },
        {
          t: 'def', termo: 'Tétrade',
          x: 'acorde de quatro notas formado por três terças empilhadas. Tríade = 3 notas (duas terças); tétrade = 4 notas (três terças).'
        },
        { t: 'h', x: 'As cinco tétrades que você precisa conhecer' },
        {
          t: 'tabela',
          cab: ['Nome', 'Cifra', 'Fórmula', 'Em Dó', 'Som'],
          linhas: [
            ['Maior com sétima maior', 'Cmaj7', '1 3 5 7', 'Dó Mi Sol Si', 'suave, aberto, "jazz"'],
            ['Dominante', 'C7', '1 3 5 ♭7', 'Dó Mi Sol Si♭', 'tenso, pede resolver'],
            ['Menor com sétima', 'Cm7', '1 ♭3 5 ♭7', 'Dó Mi♭ Sol Si♭', 'macio, melancólico'],
            ['Meio-diminuto', 'Cm7♭5', '1 ♭3 ♭5 ♭7', 'Dó Mi♭ Sol♭ Si♭', 'inquieto, de passagem'],
            ['Diminuto com sétima', 'C°7', '1 ♭3 ♭5 ♭♭7', 'Dó Mi♭ Sol♭ Lá', 'muito tenso, simétrico']
          ],
          legenda: 'A diferença entre maj7 e 7 é um semitom na sétima — e muda completamente a função do acorde.'
        },
        { t: 'ouvir', titulo: 'Ouvir Cmaj7', acorde: [48, 55, 59, 64], x: 'Dó Sol Si Mi. Repousa.' },
        { t: 'ouvir', titulo: 'Ouvir C7', acorde: [48, 55, 58, 64], x: 'Dó Sol Si♭ Mi. Não repousa: pede Fá.' },
        { t: 'h', x: 'Onde cada uma aparece no campo harmônico' },
        { t: 'p', x: 'Se você montar tétrades em vez de tríades sobre a escala maior, cada grau ganha um tipo fixo. Isso é um mapa que vale para qualquer tonalidade:' },
        {
          t: 'tabela',
          cab: ['Grau', 'Tétrade', 'Em Dó maior'],
          linhas: [
            ['I', 'maj7', 'Cmaj7'],
            ['ii', 'm7', 'Dm7'],
            ['iii', 'm7', 'Em7'],
            ['IV', 'maj7', 'Fmaj7'],
            ['V', '7 (dominante)', 'G7'],
            ['vi', 'm7', 'Am7'],
            ['vii', 'm7♭5', 'Bm7♭5']
          ],
          legenda: 'Só o grau V é dominante. É por isso que o acorde "com sétima" simples soa como quem vai voltar para casa: ele só existe naturalmente no quinto grau.'
        },
        {
          t: 'dica', titulo: 'A nota que resolve: ',
          x: 'em G7 (Sol Si Ré Fá), o Si é a sensível e sobe para Dó; o Fá é a sétima e desce para Mi. Duas vozes se movem meio tom em direções opostas e fecham o acorde de Dó. Toda a força do V7 está nesse par.'
        },
        {
          t: 'acorde', legenda: 'As cinco tétrades com raiz na 5ª corda. A mesma forma, movida pelo braço, serve para qualquer tonalidade.',
          lista: [
            { nome: 'Cmaj7', cordas: [-1, 3, 5, 4, 5, -1], dedos: [null, 1, 3, 2, 4, null] },
            { nome: 'C7', cordas: [-1, 3, 5, 3, 5, -1], dedos: [null, 1, 3, 1, 4, null] },
            { nome: 'Cm7', cordas: [-1, 3, 5, 3, 4, -1], dedos: [null, 1, 3, 1, 2, null] },
            { nome: 'Cm7♭5', cordas: [-1, 3, 4, 3, 4, -1], dedos: [null, 2, 3, 1, 4, null] },
            { nome: 'C°7', cordas: [-1, 3, 4, 2, 4, -1], dedos: [null, 2, 3, 1, 4, null] }
          ]
        },
        { t: 'h', x: 'A progressão que organiza tudo: ii – V – I' },
        { t: 'p', x: 'Dm7 → G7 → Cmaj7. O ii prepara, o V tensiona, o I resolve. É a frase harmônica mais usada da música ocidental dos últimos trezentos anos, do minueto ao bolero.' },
        {
          t: 'tab', bpm: 64, legenda: 'ii – V – I em Dó, com baixo e acorde. Ouça o Fá descer para o Mi na última troca.',
          compassos: [
            { acorde: 'Dm7', notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1], [1, 1]], fig: 'colcheia' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1], [1, 1]], fig: 'colcheia' }] },
            { acorde: 'G7', notas: [{ pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0], [2, 0], [1, 1]], fig: 'colcheia' }, { pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0], [2, 0], [1, 1]], fig: 'colcheia' }] },
            { acorde: 'Cmaj7', notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 0], [1, 0]], fig: 'semibreve' }] }
          ]
        },
        { t: 'tocar', titulo: 'As duas vozes que resolvem', seq: [[2, 0], [2, 1], [1, 1], [1, 0]], rotulo: 'Tocar Si → Dó e Fá → Mi', x: 'Primeiro a sensível subindo (Si→Dó), depois a sétima descendo (Fá→Mi).' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Tétrades', rodadas: 8,
          perguntas: [
            { texto: 'Qual é a fórmula do acorde dominante?', opcoes: ['1 3 5 ♭7', '1 3 5 7', '1 ♭3 5 ♭7', '1 ♭3 ♭5 ♭7'], correta: 0, explicacao: 'Terça maior com sétima menor.' },
            { texto: 'Em Sol maior, qual é a tétrade do grau ii?', opcoes: ['Am7', 'A7', 'Amaj7', 'Am7♭5'], correta: 0, explicacao: 'O segundo grau é sempre m7.' },
            { texto: 'Qual tétrade aparece no grau vii da escala maior?', opcoes: ['m7♭5', '°7', '7', 'maj7'], correta: 0, explicacao: 'Meio-diminuto.' },
            { texto: 'A diferença entre C7 e Cmaj7 é:', opcoes: ['Um semitom na sétima', 'Um semitom na terça', 'A quinta', 'A raiz'], correta: 0, explicacao: 'Si♭ contra Si.' },
            { texto: 'Em G7, qual nota é a sensível de Dó?', opcoes: ['Si', 'Fá', 'Ré', 'Sol'], correta: 0, explicacao: 'Si sobe meio tom para Dó.' },
            { texto: 'Quantas notas tem uma tétrade?', opcoes: ['4', '3', '5', '7'], correta: 0, explicacao: 'Três terças empilhadas.' },
            { texto: 'Qual é o V7 de Fá maior?', opcoes: ['C7', 'F7', 'Bb7', 'G7'], correta: 0, explicacao: 'A quinta de Fá é Dó.' },
            { texto: 'A progressão ii – V – I em Sol maior é:', opcoes: ['Am7 – D7 – Gmaj7', 'Bm7 – E7 – Amaj7', 'Dm7 – G7 – Cmaj7', 'Em7 – A7 – Dmaj7'], correta: 0, explicacao: 'Segundo, quinto e primeiro graus de Sol.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Chamar qualquer acorde de 4 notas de "sétima".', certo: 'Diga o tipo: maj7, 7, m7, m7♭5 ou °7. Cada um tem função diferente.' },
            { erro: 'Usar C7 como acorde de repouso em Dó maior.', certo: 'C7 é dominante de Fá. Para repousar em Dó use C ou Cmaj7.' },
            { erro: 'Esquecer a sétima ao tocar violão por falta de dedo.', certo: 'Deixe a quinta de fora, não a sétima: é ela que define o acorde.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tétrade: quatro notas, três terças empilhadas.',
            'Cinco tipos: maj7, 7, m7, m7♭5 e °7.',
            'Na escala maior, só o grau V é dominante — por isso ele puxa.',
            'ii – V – I é a frase harmônica mais comum da música tonal.',
            'Sem dedos para tudo, sacrifique a quinta, nunca a sétima.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual tétrade tem terça menor e sétima menor?', opcoes: ['m7', 'maj7', '7', 'm7♭5'], correta: 0, explicacao: '1 ♭3 5 ♭7.' },
        { texto: 'Em Ré maior, a tétrade do grau IV é:', opcoes: ['Gmaj7', 'G7', 'Gm7', 'Gm7♭5'], correta: 0, explicacao: 'IV é sempre maj7.' },
        { texto: 'Qual é a função do acorde dominante?', opcoes: ['Criar tensão que resolve na tônica', 'Repousar', 'Preparar o IV', 'Mudar o compasso'], correta: 0, explicacao: 'Tensão e resolução.' },
        { texto: 'C°7 é formado por:', opcoes: ['Três terças menores', 'Três terças maiores', 'Duas terças maiores', 'Quartas'], correta: 0, explicacao: 'Totalmente simétrico.' },
        { texto: 'Qual acorde é o ii de Mi menor (campo maior da relativa)?', opcoes: ['Am7', 'Bm7', 'F♯m7♭5', 'Cmaj7'], correta: 0, explicacao: 'O ii de Sol maior é Am7, e Mi menor é sua relativa.' },
        { texto: 'Se faltar um dedo, qual nota sai da tétrade?', opcoes: ['A quinta', 'A sétima', 'A terça', 'A raiz'], correta: 0, explicacao: 'A quinta é a menos característica.' },
        { texto: 'Em G7 → C, o Fá vai para:', opcoes: ['Mi', 'Sol', 'Fá♯', 'Dó'], correta: 0, explicacao: 'A sétima desce meio tom.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco as cinco tétrades com raiz na 5ª corda, sem consultar.',
          'Monto a tétrade de qualquer grau de uma tonalidade maior.',
          'Toco ii – V – I em três tonalidades diferentes.',
          'Ouço e reconheço a diferença entre maj7, 7 e m7.'
        ],
        criterio: 'Você domina quando identifica de ouvido os três tipos mais comuns e toca ii – V – I em qualquer tom.'
      }
    },

    // ---------------------------------------------------------------- 4.1.4
    {
      id: 'n4.1.4',
      titulo: 'Progressões harmônicas e cadências',
      resumo: 'Como os acordes andam, e como as frases terminam.',
      minutos: 20,
      disciplinas: ['harmonia'],
      prereq: ['n4.1.3'],
      status: 'implementado',
      cobre: ['Progressões harmônicas', 'Cadências autênticas, plagais e interrompidas'],
      objetivo: 'Reconhecer os caminhos harmônicos mais usados e classificar os quatro tipos de cadência de ouvido.',
      blocos: [
        { t: 'p', x: 'Acordes não andam ao acaso. Existem caminhos fortes, caminhos fracos e pontos de pontuação. Entender isso é o que permite ouvir uma música uma vez e adivinhar o acorde seguinte.' },
        { t: 'h', x: 'A lógica do movimento' },
        {
          t: 'lista', itens: [
            '*Movimento forte*: a raiz desce uma quinta (ou sobe uma quarta). G → C, Dm → G, Am → Dm. É o movimento da dominante para a tônica, e soa inevitável.',
            '*Movimento de terça*: C → Am, C → Em. Suave, quase imperceptível: os acordes compartilham duas notas.',
            '*Movimento de grau*: C → Dm, Am → G. Firme e fácil de ouvir, bom para subir ou descer uma frase.',
            '*Movimento retrógrado*: G → Dm, C → G antes de resolver. Soa como "voltar atrás"; é usado de propósito, com cuidado.'
          ]
        },
        {
          t: 'dica', titulo: 'O ciclo que explica tudo: ',
          x: 'os acordes do campo harmônico tendem a caminhar *em quintas descendentes*: vii → iii → vi → ii → V → I. Qualquer trecho desse caminho soa natural. O famoso ii – V – I é só o final dele.'
        },
        { t: 'ciclo', destacar: ['C', 'G', 'D'], legenda: 'O mesmo ciclo das quintas que organiza as tonalidades organiza também o movimento dos acordes dentro de uma tonalidade.' },
        { t: 'h', x: 'Progressões que você vai reconhecer em tudo' },
        {
          t: 'tabela',
          cab: ['Progressão', 'Em Dó maior', 'Onde aparece'],
          linhas: [
            ['I – IV – V – I', 'C – F – G – C', 'quase todo repertório didático'],
            ['I – V – vi – IV', 'C – G – Am – F', 'música popular dos últimos 60 anos'],
            ['vi – IV – I – V', 'Am – F – C – G', 'a mesma, começando pela menor'],
            ['ii – V – I', 'Dm7 – G7 – Cmaj7', 'jazz, bossa, choro, música clássica'],
            ['i – VI – III – VII', 'Am – F – C – G', 'tom menor, folk e rock'],
            ['I – vi – ii – V', 'C – Am – Dm – G7', 'a "volta" das canções antigas']
          ]
        },
        { t: 'h', x: 'Cadências: a pontuação da música' },
        {
          t: 'def', termo: 'Cadência',
          x: 'o par de acordes que termina uma frase musical. É a pontuação: pode ser ponto final, ponto e vírgula ou reticências.'
        },
        {
          t: 'tabela',
          cab: ['Cadência', 'Acordes', 'Efeito', 'Pontuação'],
          linhas: [
            ['Autêntica perfeita', 'V → I (raízes no baixo)', 'fecha completamente', 'ponto final'],
            ['Autêntica imperfeita', 'V → I (com inversão)', 'fecha, mas com menos peso', 'ponto'],
            ['Plagal', 'IV → I', 'fecha com suavidade, sem tensão', 'ponto suave ("amém")'],
            ['Interrompida (suspensiva)', 'I → V ou qualquer → V', 'deixa no ar, pede continuação', 'ponto e vírgula'],
            ['Interrompida de surpresa', 'V → vi', 'engana o ouvido: não resolve na tônica', 'reticências']
          ],
          legenda: 'Em português, "interrompida" aparece tanto para a cadência que termina no V (suspensiva) quanto para V → vi (de surpresa). Diga qual você quer dizer.'
        },
        { t: 'ouvir', titulo: 'Autêntica: G7 → C', notas: [43, 47, 50, 53, 48, 52, 55, 60], bpm: 54, x: 'Ponto final.' },
        { t: 'ouvir', titulo: 'Plagal: F → C', notas: [41, 45, 48, 53, 48, 52, 55, 60], bpm: 54, x: 'Fecha, mas sem a tensão do V. É o "amém" das igrejas.' },
        { t: 'ouvir', titulo: 'De surpresa: G7 → Am', notas: [43, 47, 50, 53, 45, 48, 52, 57], bpm: 54, x: 'O ouvido espera Dó e recebe Lá menor.' },
        {
          t: 'tab', bpm: 60, legenda: 'As três cadências no violão, em sequência: autêntica (G7–C), plagal (F–C) e de surpresa (G7–Am).',
          compassos: [
            { acorde: 'G7', notas: [{ pos: [[6, 3], [5, 2], [4, 0], [3, 0], [2, 0], [1, 1]], fig: 'minima' }, { pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'minima' }] },
            { acorde: 'F', notas: [{ pos: [[4, 3], [3, 2], [2, 1], [1, 1]], fig: 'minima' }, { pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'minima' }] },
            { acorde: 'G7', notas: [{ pos: [[6, 3], [5, 2], [4, 0], [3, 0], [2, 0], [1, 1]], fig: 'minima' }, { pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'minima' }] }
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Progressões e cadências', rodadas: 8,
          perguntas: [
            { texto: 'Qual é o movimento de raiz mais forte?', opcoes: ['Descer uma quinta', 'Subir uma segunda', 'Descer uma terça', 'Subir uma sétima'], correta: 0, explicacao: 'É o movimento V → I.' },
            { texto: 'IV → I é qual cadência?', opcoes: ['Plagal', 'Autêntica', 'Suspensiva', 'De surpresa'], correta: 0, explicacao: 'Fecha sem tensão.' },
            { texto: 'V → vi é qual cadência?', opcoes: ['Interrompida de surpresa', 'Autêntica perfeita', 'Plagal', 'Suspensiva'], correta: 0, explicacao: 'Engana o ouvido.' },
            { texto: 'Em Sol maior, qual é a cadência autêntica?', opcoes: ['D7 → G', 'C → G', 'G → D', 'Em → G'], correta: 0, explicacao: 'V7 → I.' },
            { texto: 'Uma frase que termina no V soa como:', opcoes: ['Ponto e vírgula: pede continuação', 'Ponto final', 'Nada demais', 'Fim da peça'], correta: 0, explicacao: 'É a cadência suspensiva.' },
            { texto: 'A progressão I – V – vi – IV em Sol é:', opcoes: ['G – D – Em – C', 'G – C – Am – D', 'G – Em – C – D', 'G – D – C – Em'], correta: 0, explicacao: 'Primeiro, quinto, sexto e quarto graus.' },
            { texto: 'Por que C → Em soa suave?', opcoes: ['Os dois acordes têm duas notas em comum', 'São o mesmo acorde', 'Estão longe no ciclo', 'Têm a mesma raiz'], correta: 0, explicacao: 'Mi e Sol estão nos dois.' },
            { texto: 'O ciclo de quintas dentro de um tom caminha:', opcoes: ['vii – iii – vi – ii – V – I', 'I – ii – iii – IV', 'I – III – V', 'iv – v – vi'], correta: 0, explicacao: 'Quintas descendentes.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Chamar qualquer final de "cadência perfeita".', certo: 'Perfeita exige V → I com as duas raízes no baixo.' },
            { erro: 'Usar só cadências autênticas em tudo.', certo: 'A plagal e a suspensiva dão respiro e variedade à peça.' },
            { erro: 'Analisar acorde por acorde sem ver a frase.', certo: 'Cadência é onde a frase respira: procure primeiro as respirações.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Movimento forte = raiz descendo uma quinta.',
            'Dentro do tom, os acordes tendem a caminhar em quintas descendentes.',
            'Autêntica (V→I) fecha; plagal (IV→I) fecha macio; suspensiva (→V) deixa no ar; V→vi surpreende.',
            'Cadência é pontuação: é por ela que se descobre onde a frase termina.'
          ]
        }
      ],
      quiz: [
        { texto: 'Cadência autêntica perfeita é:', opcoes: ['V → I com raízes no baixo', 'IV → I', 'I → V', 'V → vi'], correta: 0, explicacao: 'O fechamento mais forte.' },
        { texto: 'Em Lá menor, a cadência autêntica é:', opcoes: ['E7 → Am', 'Em → Am', 'Dm → Am', 'G → Am'], correta: 0, explicacao: 'V7 maior por causa da sensível.' },
        { texto: 'Qual progressão é a "volta" das canções antigas?', opcoes: ['I – vi – ii – V', 'I – IV – V', 'i – VI – III', 'ii – V'], correta: 0, explicacao: 'C – Am – Dm – G7.' },
        { texto: 'Uma cadência plagal costuma ser descrita como:', opcoes: ['O "amém"', 'O "clímax"', 'A surpresa', 'A suspensão'], correta: 0, explicacao: 'IV → I.' },
        { texto: 'Movimento de terça entre acordes soa:', opcoes: ['Suave, por notas em comum', 'Brusco', 'Dissonante', 'Impossível'], correta: 0, explicacao: 'Duas notas compartilhadas.' },
        { texto: 'Em Ré maior, a cadência suspensiva termina em:', opcoes: ['A (o V)', 'D (o I)', 'G (o IV)', 'Bm (o vi)'], correta: 0, explicacao: 'Terminar no V deixa no ar.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco as quatro cadências em Dó maior e em Lá menor.',
          'Reconheço de ouvido se uma frase terminou em cadência autêntica, plagal ou suspensiva.',
          'Toco I – V – vi – IV em três tonalidades.',
          'Identifico, numa peça do meu repertório, onde estão as cadências.'
        ],
        criterio: 'Você domina quando aponta as cadências de uma peça que está estudando e classifica cada uma.'
      }
    },

    // ---------------------------------------------------------------- 4.1.5
    {
      id: 'n4.1.5',
      titulo: 'Dominantes secundárias',
      resumo: 'Um V para cada acorde, não só para a tônica.',
      minutos: 16,
      disciplinas: ['harmonia'],
      prereq: ['n4.1.4'],
      status: 'implementado',
      cobre: ['Dominantes secundárias'],
      objetivo: 'Reconhecer e usar dominantes que resolvem em graus que não são a tônica.',
      blocos: [
        { t: 'p', x: 'Você já sabe que o V7 resolve no I. Mas a mesma tensão pode ser usada para chegar em *qualquer* acorde da tonalidade. Basta construir um acorde dominante uma quinta acima do acorde que você quer alcançar. Isso é uma dominante secundária.' },
        {
          t: 'def', termo: 'Dominante secundária',
          x: 'acorde dominante (1 3 5 ♭7) construído sobre a quinta de um grau que não é a tônica, usado para dar a ele, por um instante, o peso de uma tônica. Escreve-se V7/ii, V7/vi e assim por diante — lê-se "dominante de ii", "dominante de vi".'
        },
        { t: 'h', x: 'Como achar' },
        {
          t: 'passos', itens: [
            'Escolha o acorde-alvo. Em Dó maior, digamos o Dm (grau ii).',
            'Suba uma quinta justa a partir da raiz dele: Ré → Lá.',
            'Monte um acorde dominante sobre essa nota: A7 (Lá Dó♯ Mi Sol).',
            'Pronto: A7 é a dominante secundária de Dm. Escreve-se V7/ii.',
            'Repare na nota de fora da tonalidade: o Dó♯ não existe em Dó maior. É ele que avisa o ouvido de que algo novo vem.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Alvo em Dó maior', 'Dominante secundária', 'Nota estranha ao tom'],
          linhas: [
            ['Dm (ii)', 'A7', 'Dó♯'],
            ['Em (iii)', 'B7', 'Ré♯'],
            ['F (IV)', 'C7', 'Si♭'],
            ['G (V)', 'D7', 'Fá♯'],
            ['Am (vi)', 'E7', 'Sol♯']
          ],
          legenda: 'Cada dominante secundária traz uma, e só uma, nota de fora da tonalidade. É por isso que elas colorem sem desorientar.'
        },
        { t: 'h', x: 'O caso mais comum de todos' },
        { t: 'p', x: 'A dominante do V — em Dó maior, o D7 chegando no G7 — é a mais usada. Ela cria uma corrente: D7 → G7 → C. Duas tensões em fila, cada uma resolvendo na seguinte. Dá uma sensação de chegada muito maior do que G7 → C sozinho.' },
        {
          t: 'tab', bpm: 62, legenda: 'C – A7 – Dm – G7 – C. O A7 é a dominante secundária de Dm (V7/ii). Ouça o Dó♯ no segundo compasso.',
          compassos: [
            { acorde: 'C', notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'minima' }, { pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'minima' }] },
            { acorde: 'A7', notas: [{ pos: [[5, 0], [4, 2], [3, 0], [2, 2], [1, 0]], fig: 'minima' }, { pos: [[5, 0], [4, 2], [3, 0], [2, 2], [1, 0]], fig: 'minima' }] },
            { acorde: 'Dm', notas: [{ pos: [[4, 0], [3, 2], [2, 3], [1, 1]], fig: 'minima' }, { pos: [[4, 0], [3, 2], [2, 3], [1, 1]], fig: 'minima' }] },
            { acorde: 'G7', notas: [{ pos: [[6, 3], [5, 2], [4, 0], [3, 0], [2, 0], [1, 1]], fig: 'minima' }, { pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'minima' }] }
          ]
        },
        { t: 'ouvir', titulo: 'Ouvir a corrente D7 → G7 → C', notas: [50, 54, 57, 60, 43, 47, 50, 53, 48, 52, 55, 60], bpm: 56, x: 'Duas dominantes em fila. A chegada no Dó fica muito mais forte.' },
        {
          t: 'aviso', titulo: 'Não confunda: ',
          x: 'em Dó maior, o acorde *C7* não é a tônica com sétima. Ele traz Si♭, que não existe em Dó maior: é a dominante secundária de Fá (V7/IV). Se você vê C7 numa música em Dó, espere um Fá em seguida.'
        },
        { t: 'tocar', titulo: 'A nota que denuncia', seq: [[2, 2], [2, 1]], rotulo: 'Tocar Dó♯ → Dó', x: 'No A7 o Dó♯ aparece; ao voltar para Dm/C ele se desfaz. Ouça a cor que ele acrescenta.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Dominantes secundárias', rodadas: 7,
          perguntas: [
            { texto: 'Qual é a dominante secundária de Am em Dó maior?', opcoes: ['E7', 'A7', 'Em7', 'C7'], correta: 0, explicacao: 'Uma quinta acima de Lá é Mi; dominante: E7.' },
            { texto: 'O que denuncia uma dominante secundária numa cifra?', opcoes: ['Uma nota que não existe na tonalidade', 'A letra maiúscula', 'A sétima', 'O baixo'], correta: 0, explicacao: 'A alteração de fora do tom.' },
            { texto: 'Em Dó maior, C7 provavelmente vai para:', opcoes: ['F', 'C', 'G', 'Am'], correta: 0, explicacao: 'C7 é V7/IV.' },
            { texto: 'V7/V em Sol maior é:', opcoes: ['A7', 'D7', 'G7', 'E7'], correta: 0, explicacao: 'O V de Sol é Ré; o V de Ré é Lá.' },
            { texto: 'Para que serve uma dominante secundária?', opcoes: ['Dar peso de tônica a um acorde que não é a tônica', 'Mudar o compasso', 'Afinar o violão', 'Terminar a peça'], correta: 0, explicacao: 'Tensão local.' },
            { texto: 'D7 → G7 → C é um exemplo de:', opcoes: ['Corrente de dominantes', 'Cadência plagal', 'Modulação definitiva', 'Inversão'], correta: 0, explicacao: 'Dominantes em fila.' },
            { texto: 'A7 em Dó maior traz qual nota estranha ao tom?', opcoes: ['Dó♯', 'Si♭', 'Fá♯', 'Sol♯'], correta: 0, explicacao: 'A terça do A7.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Analisar A7 em Dó maior como "um erro de cifra".', certo: 'É dominante secundária de Dm; a nota Dó♯ é proposital.' },
            { erro: 'Resolver a dominante secundária em qualquer acorde.', certo: 'Ela aponta para um alvo: uma quarta acima da sua raiz.' },
            { erro: 'Achar que isso já é modulação.', certo: 'É um empréstimo passageiro. Modulação muda o centro da música, assunto da aula 4.1.6.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Dominante secundária = acorde dominante construído uma quinta acima de um grau qualquer.',
            'Ela traz exatamente uma nota de fora da tonalidade.',
            'Notação: V7/ii, V7/iii, V7/IV, V7/V, V7/vi.',
            'Em correntes (D7 → G7 → C) ela aumenta muito a sensação de chegada.'
          ]
        }
      ],
      quiz: [
        { texto: 'Dominante secundária de Em em Dó maior:', opcoes: ['B7', 'E7', 'Bm7', 'Em7'], correta: 0, explicacao: 'Uma quinta acima de Mi é Si.' },
        { texto: 'Em Fá maior, qual acorde é V7/V?', opcoes: ['G7', 'C7', 'D7', 'A7'], correta: 0, explicacao: 'O V de Fá é Dó. A dominante de Dó é Sol: G7.' },
        { texto: 'Quantas notas de fora do tom uma dominante secundária traz?', opcoes: ['Uma', 'Nenhuma', 'Duas', 'Três'], correta: 0, explicacao: 'Em geral apenas a terça alterada.' },
        { texto: 'A7 → Dm é um exemplo de:', opcoes: ['V7/ii → ii', 'V7 → I', 'IV → I', 'vi → ii'], correta: 0, explicacao: 'Dominante do segundo grau.' },
        { texto: 'Dominante secundária e modulação:', opcoes: ['São coisas diferentes: a primeira é passageira', 'São sinônimos', 'Nunca aparecem juntas', 'São a mesma coisa em tom menor'], correta: 0, explicacao: 'Empréstimo contra mudança de centro.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Monto a dominante secundária de qualquer grau em Dó, Sol e Ré maior.',
          'Toco C – A7 – Dm – G7 – C e ouço o Dó♯ aparecer.',
          'Toco a corrente D7 – G7 – C.',
          'Acho uma dominante secundária numa cifra de música popular.'
        ],
        criterio: 'Você domina quando identifica dominantes secundárias numa cifra e explica para qual acorde cada uma aponta.'
      }
    },

    // ---------------------------------------------------------------- 4.1.6
    {
      id: 'n4.1.6',
      titulo: 'Tonalidade, centro tonal e modulação',
      resumo: 'Onde é a casa da música — e como se muda de casa.',
      minutos: 20,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n4.1.5'],
      status: 'implementado',
      cobre: ['Tonalidade', 'Centro tonal', 'Modulação'],
      objetivo: 'Identificar a tonalidade de uma peça, perceber o centro tonal de ouvido e reconhecer os três tipos de modulação mais comuns.',
      blocos: [
        { t: 'p', x: 'Toque a escala de Dó maior e pare no Si. Incômodo, não? Agora toque a mesma escala e pare no Dó. Repouso. Essa sensação de "chegar em casa" é o centro tonal, e é o fenômeno mais importante de toda a música tonal.' },
        {
          t: 'def', termo: 'Tonalidade',
          x: 'o conjunto de notas e acordes organizados em torno de uma nota principal, com funções definidas (tônica, dominante, subdominante). "A peça está em Sol maior" quer dizer: as notas são as de Sol maior e tudo gravita em torno do Sol.'
        },
        {
          t: 'def', termo: 'Centro tonal',
          x: 'a nota que o ouvido reconhece como repouso. É uma percepção, não uma regra: dá para sentir sem saber teoria nenhuma. A tonalidade é a organização escrita desse fenômeno.'
        },
        { t: 'h', x: 'Como descobrir a tonalidade de uma partitura' },
        {
          t: 'passos', itens: [
            'Olhe a armadura de clave. Ela dá duas opções: uma maior e a sua relativa menor. Um sustenido = Sol maior ou Mi menor.',
            'Olhe a última nota do baixo e o último acorde. Peças tonais quase sempre terminam na tônica.',
            'Procure a sensível. Se há Fá♯ em uma peça com armadura de Dó maior aparecendo antes de Sol, suspeite de Sol.',
            'Em tom menor, procure o V maior: em Mi menor, o acorde B ou B7 com Ré♯ confirma a tonalidade.'
          ]
        },
        {
          t: 'dica', titulo: 'Teste do ouvido: ',
          x: 'cante a última nota da peça e depois procure essa nota no violão. Nove de dez vezes, é a tônica. Funciona melhor que qualquer análise escrita.'
        },
        { t: 'h', x: 'Modulação: trocar de centro no meio do caminho' },
        {
          t: 'def', termo: 'Modulação',
          x: 'mudança de tonalidade dentro da mesma peça, com um novo centro tonal estabelecido. Não é uma nota estranha de passagem: é o ouvido aceitando outra casa.'
        },
        {
          t: 'tabela',
          cab: ['Tipo', 'Como funciona', 'Exemplo em Dó maior'],
          linhas: [
            ['Por acorde comum (diatônica)', 'usa um acorde que existe nas duas tonalidades como ponte', 'Am existe em Dó e em Sol: C – Am – D7 – G'],
            ['Pela dominante', 'apresenta o V7 da nova tonalidade', 'C – D7 – G: o D7 instala Sol'],
            ['Direta (por justaposição)', 'troca de tom sem preparação, em geral depois de uma pausa ou repetição', 'termina em C, começa a próxima parte em Mi♭'],
            ['Por enarmonia', 'um acorde ambíguo (diminuto, aumentado) é reinterpretado', 'B°7 pode levar a vários lugares']
          ]
        },
        { t: 'p', x: 'A modulação mais comum no repertório clássico de violão é para a *dominante* (de Dó para Sol) na segunda parte da peça, e a volta para a tônica no fim. É a estrutura da forma binária, assunto da aula 4.1.8.' },
        {
          t: 'tab', bpm: 60, legenda: 'Modulação pela dominante: os dois primeiros compassos estão em Dó, o D7 instala Sol maior e o Sol confirma.',
          compassos: [
            { acorde: 'C', notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'minima' }, { pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'minima' }] },
            { acorde: 'Am', notas: [{ pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'minima' }, { pos: [[4, 0], [3, 2], [2, 1], [1, 2]], fig: 'minima' }] },
            { acorde: 'D7', notas: [{ pos: [[4, 0], [3, 2], [2, 1], [1, 2]], fig: 'minima' }, { pos: [[4, 0], [3, 2], [2, 1], [1, 2]], fig: 'minima' }] },
            { acorde: 'G', notas: [{ pos: [[6, 3], [5, 2], [4, 0], [3, 0], [2, 0], [1, 3]], fig: 'semibreve' }] }
          ]
        },
        { t: 'ciclo', destacar: ['C', 'G'], legenda: 'Tonalidades vizinhas no ciclo (uma alteração de diferença) modulam com facilidade. Quanto mais longe no ciclo, mais dramática a modulação.' },
        {
          t: 'comparar',
          a: { titulo: 'Empréstimo passageiro', itens: ['Uma nota ou acorde de fora', 'O ouvido continua esperando a tônica antiga', 'Dura um ou dois compassos', 'Ex.: A7 em Dó maior indo para Dm'] },
          b: { titulo: 'Modulação', itens: ['Nova tonalidade confirmada por cadência', 'O ouvido aceita a nova tônica', 'Dura uma seção', 'Ex.: segunda parte de um minueto em Sol'] }
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Tonalidade e modulação', rodadas: 7,
          perguntas: [
            { texto: 'Armadura com dois sustenidos indica qual par de tonalidades?', opcoes: ['Ré maior ou Si menor', 'Sol maior ou Mi menor', 'Lá maior ou Fá♯ menor', 'Si♭ maior ou Sol menor'], correta: 0, explicacao: 'Fá♯ e Dó♯.' },
            { texto: 'O que é centro tonal?', opcoes: ['A nota que o ouvido sente como repouso', 'A nota mais aguda', 'A primeira nota da peça', 'A nota mais tocada'], correta: 0, explicacao: 'É percepção de repouso.' },
            { texto: 'Qual é o jeito mais prático de achar a tônica de ouvido?', opcoes: ['Cantar a última nota e procurá-la no violão', 'Contar os compassos', 'Olhar o andamento', 'Medir o BPM'], correta: 0, explicacao: 'Peças tonais terminam na tônica.' },
            { texto: 'Modular pela dominante de Dó maior leva a:', opcoes: ['Sol maior', 'Fá maior', 'Lá menor', 'Mi maior'], correta: 0, explicacao: 'O V de Dó é Sol.' },
            { texto: 'Um acorde que existe nas duas tonalidades serve como:', opcoes: ['Ponte para a modulação', 'Cadência final', 'Dominante secundária', 'Inversão'], correta: 0, explicacao: 'Modulação diatônica.' },
            { texto: 'A diferença entre empréstimo e modulação é:', opcoes: ['A modulação confirma uma nova tônica com cadência', 'Nenhuma', 'A modulação usa menos notas', 'O empréstimo é mais longo'], correta: 0, explicacao: 'Confirmação por cadência.' },
            { texto: 'Tonalidades vizinhas no ciclo das quintas:', opcoes: ['Modulam com mais facilidade', 'Nunca modulam entre si', 'São enarmônicas', 'Têm a mesma tônica'], correta: 0, explicacao: 'Uma alteração de diferença.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Decidir a tonalidade só pela armadura.', certo: 'A armadura dá duas opções; o fim da peça e a sensível decidem.' },
            { erro: 'Chamar qualquer acidente de modulação.', certo: 'Sem cadência na nova tonalidade, é empréstimo.' },
            { erro: 'Procurar a tônica na primeira nota.', certo: 'Muitas peças começam na dominante ou no terceiro grau.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tonalidade é a organização das notas em torno de uma tônica; centro tonal é a sensação de repouso.',
            'Para achar a tonalidade: armadura + último acorde + sensível.',
            'Modulação muda o centro tonal e é confirmada por cadência.',
            'Os caminhos mais comuns: por acorde comum, pela dominante, direta e por enarmonia.'
          ]
        }
      ],
      quiz: [
        { texto: 'Uma peça com um sustenido que termina em Mi menor está em:', opcoes: ['Mi menor', 'Sol maior', 'Ré maior', 'Si menor'], correta: 0, explicacao: 'A armadura dá duas opções; o fim decide.' },
        { texto: 'Modulação é:', opcoes: ['Mudança de tonalidade confirmada na própria peça', 'Mudança de andamento', 'Mudança de compasso', 'Mudança de dedilhado'], correta: 0, explicacao: 'Novo centro tonal.' },
        { texto: 'Qual acorde instala Sol maior vindo de Dó maior?', opcoes: ['D7', 'G7', 'C7', 'A7'], correta: 0, explicacao: 'É o V7 da nova tonalidade.' },
        { texto: 'Modulação direta é a que:', opcoes: ['Troca de tom sem preparação', 'Usa acorde comum', 'Usa o V7', 'Usa enarmonia'], correta: 0, explicacao: 'Justaposição.' },
        { texto: 'Em peças clássicas de violão, a modulação mais comum na segunda parte é para:', opcoes: ['A dominante', 'O trítono', 'A subdominante menor', 'A sétima'], correta: 0, explicacao: 'Depois volta à tônica.' },
        { texto: 'Centro tonal é descoberto principalmente:', opcoes: ['De ouvido, pela sensação de repouso', 'Contando notas', 'Pela armadura apenas', 'Pelo compasso'], correta: 0, explicacao: 'A teoria só descreve o que o ouvido já percebe.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Descubro a tonalidade de três peças do meu repertório e explico como cheguei nela.',
          'Canto a tônica de uma peça depois de ouvi-la uma vez.',
          'Toco a modulação C – Am – D7 – G e ouço o centro mudar.',
          'Aponto numa partitura onde a modulação começa e onde ela é confirmada.'
        ],
        criterio: 'Você domina quando identifica a tonalidade de uma peça nova e percebe, ouvindo, quando ela muda de centro.'
      }
    },

    // ---------------------------------------------------------------- 4.1.7
    {
      id: 'n4.1.7',
      titulo: 'Análise harmônica passo a passo',
      resumo: 'Pegar uma partitura e descobrir o que está acontecendo.',
      minutos: 22,
      disciplinas: ['harmonia', 'interpretacao'],
      prereq: ['n4.1.6'],
      status: 'implementado',
      cobre: ['Análise harmônica'],
      objetivo: 'Analisar harmonicamente um trecho de peça, com cifra, graus e cadências, do zero ao fim.',
      blocos: [
        { t: 'p', x: 'Análise harmônica não é um exercício escolar: é a ferramenta que faz você decorar mais rápido, errar menos e interpretar melhor. Quem entende a harmonia de uma peça para de tocar notas e começa a tocar frases.' },
        { t: 'h', x: 'O método, em seis passos' },
        {
          t: 'passos', itens: [
            '*1. Tonalidade.* Armadura, último acorde, sensível. Anote no alto da partitura.',
            '*2. Baixos.* Marque a nota mais grave de cada tempo forte. O baixo é o esqueleto da harmonia.',
            '*3. Acordes.* Junte as notas de cada compasso e veja que acorde elas formam. Não precisa de todas: raiz, terça e sétima bastam.',
            '*4. Cifra.* Escreva o nome acima do compasso (C, Am, G7…). Se o baixo não for a raiz, use a barra (C/E).',
            '*5. Graus.* Troque as cifras por números romanos da tonalidade. Agora a análise serve para qualquer tom.',
            '*6. Cadências e frases.* Circule os pontos de repouso. Eles mostram onde a música respira.'
          ]
        },
        { t: 'h', x: 'Analisando um trecho de verdade' },
        { t: 'p', x: 'Abaixo, oito compassos no estilo de um estudo de Carulli, em Dó maior. Primeiro ouça; depois acompanhe a análise.' },
        {
          t: 'pauta', bpm: 68, numerar: true, quebrar: 4,
          txt: 'c4/c e4/c g4/c e4/c c4/c e4/c g4/c e4/c | c4/c f4/c a4/c f4/c c4/c f4/c a4/c f4/c | b3/c d4/c g4/c d4/c b3/c d4/c f4/c d4/c | c4/c e4/c g4/c e4/c c4/q z/q | a3/c c4/c e4/c c4/c a3/c c4/c e4/c c4/c | d4/c f4/c a4/c f4/c d4/c f4/c a4/c f4/c | g3/c d4/c f4/c b3/c g3/c d4/c f4/c b3/c | c4+e4+g4/o',
          legenda: 'Oito compassos em Dó maior, em arpejo. Lembre: a partitura de violão soa uma oitava abaixo do escrito.'
        },
        {
          t: 'tabela',
          cab: ['Compasso', 'Baixo', 'Notas', 'Cifra', 'Grau'],
          linhas: [
            ['1', 'Dó', 'Dó Mi Sol', 'C', 'I'],
            ['2', 'Dó', 'Dó Fá Lá', 'F/C', 'IV (2ª inversão)'],
            ['3', 'Si', 'Si Ré Sol / Si Ré Fá', 'G/B → G7/B', 'V'],
            ['4', 'Dó', 'Dó Mi Sol', 'C', 'I'],
            ['5', 'Lá', 'Lá Dó Mi', 'Am', 'vi'],
            ['6', 'Ré', 'Ré Fá Lá', 'Dm', 'ii'],
            ['7', 'Sol', 'Sol Si Ré Fá', 'G7', 'V7'],
            ['8', 'Dó', 'Dó Mi Sol', 'C', 'I']
          ],
          legenda: 'A análise em graus: I – IV – V – I · vi – ii – V7 – I. A primeira frase fecha em cadência autêntica no compasso 4; a segunda percorre o ciclo das quintas (vi – ii – V – I) e fecha no 8.'
        },
        {
          t: 'dica', titulo: 'O que a análise te dá na prática: ',
          x: 'os compassos 1 a 4 e 5 a 8 são duas frases. Isso diz onde respirar, onde fazer um pequeno rallentando e onde *não* parar. E diz que decorar essa peça é decorar sete acordes, não 60 notas.'
        },
        { t: 'h', x: 'Atalhos de quem analisa rápido' },
        {
          t: 'lista', itens: [
            'Em arpejos, a harmonia quase nunca muda no meio do compasso: um compasso, um acorde.',
            'Notas de passagem (que entram e saem por grau) não entram na análise. Só as notas do acorde.',
            'Se um acorde tem uma nota estranha à tonalidade, suspeite de dominante secundária.',
            'Se a seção inteira passa a girar em outro tom, é modulação: reanalise a partir dali com a nova tônica.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Analisar', rodadas: 7,
          perguntas: [
            { texto: 'Qual é o primeiro passo da análise harmônica?', opcoes: ['Descobrir a tonalidade', 'Contar os compassos', 'Marcar o dedilhado', 'Medir o andamento'], correta: 0, explicacao: 'Sem tonalidade não há graus.' },
            { texto: 'Numa análise, o que é mais importante marcar primeiro?', opcoes: ['Os baixos dos tempos fortes', 'As notas agudas', 'As pausas', 'As ligaduras'], correta: 0, explicacao: 'O baixo é o esqueleto.' },
            { texto: 'Notas de passagem entram na cifra?', opcoes: ['Não, só as notas do acorde', 'Sim, todas', 'Só as agudas', 'Só no tom menor'], correta: 0, explicacao: 'Elas decoram, não definem.' },
            { texto: 'Em Dó maior, um compasso com Si Ré Sol Fá é:', opcoes: ['G7', 'Bdim', 'Em', 'Dm'], correta: 0, explicacao: 'Sol Si Ré Fá reordenado.' },
            { texto: 'Para que serve trocar cifras por graus romanos?', opcoes: ['A análise passa a valer para qualquer tonalidade', 'Fica mais bonito', 'Facilita afinar', 'Marca o ritmo'], correta: 0, explicacao: 'Graus são relativos.' },
            { texto: 'vi – ii – V – I é um trecho de:', opcoes: ['Ciclo das quintas descendentes', 'Cadência plagal', 'Modulação direta', 'Escala cromática'], correta: 0, explicacao: 'O caminho natural do campo harmônico.' },
            { texto: 'Como a análise ajuda a decorar?', opcoes: ['Você decora acordes e funções em vez de notas soltas', 'Ela não ajuda', 'Diminui o andamento', 'Troca o dedilhado'], correta: 0, explicacao: 'Menos informação para memorizar.' }
          ]
        },
        {
          t: 'check', chave: 'analise41', titulo: 'Pratique a análise',
          itens: [
            'Analisei os 8 compassos desta aula sozinho, antes de ver a tabela.',
            'Analisei a primeira página de uma peça que já toco.',
            'Marquei as cadências e as frases dessa peça.',
            'Decorei os acordes da peça em vez das notas.'
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tentar cifrar nota por nota.', certo: 'Olhe o compasso inteiro: em geral é um acorde só.' },
            { erro: 'Ignorar o baixo e cifrar pelas notas agudas.', certo: 'O baixo define a inversão e quase sempre a raiz.' },
            { erro: 'Parar a análise quando aparece um acorde "estranho".', certo: 'Acorde estranho é informação: dominante secundária, empréstimo ou modulação.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Seis passos: tonalidade, baixos, acordes, cifra, graus, cadências.',
            'Em peças de violão, um compasso costuma ser um acorde.',
            'Notas de passagem não entram na cifra.',
            'A análise mostra as frases, o que muda a interpretação e acelera a memorização.'
          ]
        }
      ],
      quiz: [
        { texto: 'A ordem correta dos passos é:', opcoes: ['Tonalidade → baixos → acordes → cifra → graus → cadências', 'Cifra → tonalidade → baixos', 'Graus → acordes → tonalidade', 'Cadências → baixos → cifra'], correta: 0, explicacao: 'Do geral ao detalhe.' },
        { texto: 'Em Sol maior, um compasso com Ré Fá♯ Lá Dó é:', opcoes: ['D7 (V7)', 'G (I)', 'Bm (iii)', 'Em (vi)'], correta: 0, explicacao: 'A dominante de Sol.' },
        { texto: 'A cifra C/E indica:', opcoes: ['Dó maior com Mi no baixo', 'Dó e Mi tocados juntos', 'Mi maior com Dó no baixo', 'Dó com sexta'], correta: 0, explicacao: 'Primeira inversão.' },
        { texto: 'Se uma seção passa a girar em torno de outra tônica, trata-se de:', opcoes: ['Modulação', 'Cadência plagal', 'Inversão', 'Nota de passagem'], correta: 0, explicacao: 'Reanalise com a nova tônica.' },
        { texto: 'Qual é o benefício prático da análise para a memória?', opcoes: ['Decorar funções em vez de notas', 'Tocar mais rápido', 'Afinar melhor', 'Ler mais alto'], correta: 0, explicacao: 'Compressão da informação.' },
        { texto: 'Numa peça em arpejos, a harmonia muda tipicamente:', opcoes: ['A cada compasso', 'A cada nota', 'A cada duas notas', 'Nunca'], correta: 0, explicacao: 'Um compasso, um acorde.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Analisei do zero um trecho de 8 compassos, com cifras e graus.',
          'Marquei as cadências e o fim das frases.',
          'Expliquei em voz alta a função de cada acorde do trecho.',
          'Usei a análise para decidir onde respirar ao tocar.'
        ],
        criterio: 'Você domina quando analisa um trecho novo sem ajuda e usa o resultado para tocar com frases.'
      }
    },

    // ---------------------------------------------------------------- 4.1.8
    {
      id: 'n4.1.8',
      titulo: 'Motivo, frase, período e forma',
      resumo: 'A arquitetura invisível das peças.',
      minutos: 20,
      disciplinas: ['harmonia', 'interpretacao', 'historia'],
      prereq: ['n4.1.7'],
      status: 'implementado',
      cobre: ['Frases e períodos musicais', 'Motivos musicais', 'Formas musicais'],
      objetivo: 'Dividir uma peça em motivos, frases, períodos e seções, e nomear a sua forma.',
      blocos: [
        { t: 'p', x: 'Uma peça não é uma fila de notas: é um edifício. Os tijolos são pequenos, e eles se juntam em paredes, andares e plantas. Saber enxergar isso muda a sua interpretação e a sua memória.' },
        { t: 'h', x: 'Os quatro tamanhos' },
        {
          t: 'tabela',
          cab: ['Unidade', 'Tamanho típico', 'O que é', 'Analogia'],
          linhas: [
            ['Motivo', '2 a 6 notas', 'a menor ideia reconhecível', 'palavra'],
            ['Frase', '4 compassos', 'uma ideia completa, termina em cadência', 'oração'],
            ['Período', '8 compassos (2 frases)', 'pergunta + resposta', 'parágrafo'],
            ['Seção', '8 a 32 compassos', 'parte inteira da peça (A, B…)', 'capítulo']
          ]
        },
        {
          t: 'def', termo: 'Motivo',
          x: 'o grupo mínimo de notas que a peça repete, transforma e desenvolve. Nas quatro primeiras notas da Quinta de Beethoven está o motivo mais famoso da música. No violão, o arpejo inicial do Estudo nº 1 de Villa-Lobos é um motivo.'
        },
        { t: 'h', x: 'Pergunta e resposta' },
        { t: 'p', x: 'O período clássico tem duas frases: a primeira termina suspensa (no V) e a segunda termina fechada (no I). É literalmente uma pergunta e uma resposta. Chamam-se *antecedente* e *consequente*.' },
        {
          t: 'pauta', bpm: 76, numerar: true, quebrar: 4,
          txt: 'g4/q e4/c f4/c g4/q e4/q | f4/q d4/c e4/c f4/b | e4/q c4/c d4/c e4/q f4/q | d4/q b3/q c4/b',
          legenda: 'Um período de 8 compassos: o motivo (três notas descendo por grau) aparece quatro vezes. A frase 1 termina no Fá, suspensa; a frase 2 fecha no Dó.'
        },
        { t: 'p', x: 'Repare que as duas frases começam igual e terminam diferente. Isso se chama *paralelismo*, e é o jeito mais comum de construir um período.' },
        { t: 'h', x: 'As formas que o repertório de violão usa' },
        {
          t: 'tabela',
          cab: ['Forma', 'Esquema', 'Como reconhecer', 'Exemplo de repertório'],
          linhas: [
            ['Binária simples', 'A – B', 'duas seções, cada uma repetida; a A modula para a dominante', 'minuetos e danças barrocas'],
            ['Binária arredondada', 'A – B – A', 'a seção A volta no fim da segunda parte', 'estudos de Sor e Carcassi'],
            ['Ternária', 'A – B – A', 'três seções distintas, com B contrastante', 'Lágrima (Tárrega)'],
            ['Tema e variações', 'A – A¹ – A² …', 'a mesma harmonia, roupa nova a cada volta', 'Variações sobre tema de Mozart (Sor)'],
            ['Rondó', 'A – B – A – C – A', 'o tema principal sempre volta', 'rondós de Carulli'],
            ['Forma-sonata', 'exposição – desenvolvimento – reexposição', 'dois temas, em tonalidades diferentes, que retornam', 'sonatas de Giuliani e Sor']
          ],
          legenda: 'Estas seis formas cobrem quase todo o repertório clássico de violão até o século XX. As três últimas você estuda em detalhe no Nível 5.'
        },
        {
          t: 'dica', titulo: 'Como achar a forma em 2 minutos: ',
          x: 'procure as *barras de repetição* e as *cadências fortes*. Onde há dois pontos na barra, termina uma seção. Onde há cadência autêntica com fermata ou nota longa, termina uma parte. Marque com A, B, A na sua partitura e pronto.'
        },
        { t: 'h', x: 'Por que isso importa para quem toca' },
        {
          t: 'lista', itens: [
            '*Interpretação*: cada frase precisa de um pequeno arco de dinâmica. Sem saber onde a frase termina, você toca tudo igual.',
            '*Memória*: decorar "A com repetição, B modulando para Sol, volta do A" é muito mais fácil que decorar 64 compassos.',
            '*Estudo*: quando você erra sempre no mesmo lugar, quase sempre é na *costura* entre duas seções. Saber onde elas estão mostra o que treinar.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Arquitetura musical', rodadas: 7,
          perguntas: [
            { texto: 'Qual é a menor unidade musical reconhecível?', opcoes: ['O motivo', 'A frase', 'O período', 'A seção'], correta: 0, explicacao: '2 a 6 notas.' },
            { texto: 'Uma frase musical normalmente termina em:', opcoes: ['Uma cadência', 'Uma pausa longa', 'Uma nota aguda', 'Um acorde diminuto'], correta: 0, explicacao: 'Cadência é pontuação.' },
            { texto: 'No período clássico, a primeira frase costuma terminar:', opcoes: ['Suspensa, no V', 'Fechada, no I', 'No vi', 'Sem cadência'], correta: 0, explicacao: 'É o antecedente: a pergunta.' },
            { texto: 'Forma A – B – A com retorno do A no fim da segunda parte é:', opcoes: ['Binária arredondada', 'Rondó', 'Tema e variações', 'Forma-sonata'], correta: 0, explicacao: 'Comum nos estudos clássicos.' },
            { texto: 'Rondó é a forma em que:', opcoes: ['O tema principal sempre volta entre episódios', 'Há duas seções só', 'Há variações do mesmo tema', 'Não há repetições'], correta: 0, explicacao: 'A – B – A – C – A.' },
            { texto: 'Que pista visual indica o fim de uma seção?', opcoes: ['A barra de repetição', 'A clave', 'A armadura', 'O número do compasso'], correta: 0, explicacao: 'Os dois pontos na barra.' },
            { texto: 'Saber a forma ajuda principalmente em:', opcoes: ['Memória e interpretação', 'Afinação', 'Postura', 'Escolha do violão'], correta: 0, explicacao: 'Estrutura é memória.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar oito compassos como uma linha contínua.', certo: 'Encontre as duas frases e dê a cada uma o seu arco.' },
            { erro: 'Chamar toda forma de "A – B – A".', certo: 'Verifique se o B contrasta de verdade e se o A volta inteiro ou pela metade.' },
            { erro: 'Decorar a peça compasso por compasso.', certo: 'Decore a planta: seções, modulações e retornos.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Motivo → frase → período → seção: quatro tamanhos de ideia.',
            'O período clássico é pergunta (termina no V) e resposta (termina no I).',
            'Formas do repertório de violão: binária, binária arredondada, ternária, tema e variações, rondó, sonata.',
            'Barras de repetição e cadências fortes revelam a forma em minutos.'
          ]
        }
      ],
      quiz: [
        { texto: 'Um período clássico tem tipicamente:', opcoes: ['8 compassos, em duas frases', '4 compassos', '16 notas', '2 seções'], correta: 0, explicacao: 'Antecedente e consequente.' },
        { texto: 'O que caracteriza tema e variações?', opcoes: ['A mesma estrutura harmônica com roupagens diferentes', 'Dois temas contrastantes', 'Ausência de repetição', 'Três seções'], correta: 0, explicacao: 'A – A¹ – A²…' },
        { texto: 'Antecedente e consequente são:', opcoes: ['As duas frases de um período', 'Dois motivos', 'Duas seções', 'Dois acordes'], correta: 0, explicacao: 'Pergunta e resposta.' },
        { texto: 'Numa forma binária simples, a seção A costuma terminar:', opcoes: ['Na dominante', 'Na tônica', 'No vi', 'Em cadência plagal'], correta: 0, explicacao: 'Daí a necessidade da volta.' },
        { texto: 'Onde os erros de execução mais aparecem?', opcoes: ['Na costura entre seções', 'No primeiro compasso', 'Nas pausas', 'Na última nota'], correta: 0, explicacao: 'Por isso vale treinar as junções.' },
        { texto: 'Motivo é:', opcoes: ['A menor ideia reconhecível, que se repete e se transforma', 'Um acorde', 'Uma escala', 'Uma cadência'], correta: 0, explicacao: 'O tijolo da construção.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Identifico o motivo principal de uma peça que estou estudando.',
          'Marquei na partitura as frases e os períodos.',
          'Nomeio a forma da peça (A–B, A–B–A, rondó…).',
          'Toco dando a cada frase um arco de dinâmica próprio.'
        ],
        criterio: 'Você domina quando mapeia a forma de uma peça nova e toca mostrando as frases, não só as notas.'
      }
    },

    // ---------------------------------------------------------------- 4.1.9
    {
      id: 'n4.1.9',
      titulo: 'Introdução ao contraponto',
      resumo: 'Duas melodias ao mesmo tempo, cada uma com vida própria.',
      minutos: 20,
      disciplinas: ['contraponto', 'harmonia'],
      prereq: ['n4.1.8'],
      status: 'implementado',
      cobre: ['Introdução ao contraponto'],
      objetivo: 'Entender a diferença entre harmonia e contraponto e tocar duas vozes independentes no violão.',
      blocos: [
        { t: 'p', x: 'Até aqui você pensou verticalmente: acordes empilhados, um por compasso. Contraponto é pensar *horizontalmente*: duas ou mais melodias caminhando juntas, cada uma boa de ouvir sozinha, e soando bem quando combinadas.' },
        {
          t: 'comparar',
          a: { titulo: 'Harmonia (vertical)', itens: ['Pergunta: que acorde é este?', 'Uma melodia e um acompanhamento', 'As vozes de dentro servem o acorde', 'Cifra resume tudo'] },
          b: { titulo: 'Contraponto (horizontal)', itens: ['Pergunta: para onde vai cada voz?', 'Duas ou mais melodias iguais em importância', 'Cada voz tem desenho próprio', 'Cifra não dá conta: é preciso ver as linhas'] }
        },
        { t: 'p', x: 'As duas coisas são a mesma música vista de ângulos diferentes. Bach pensava em linhas, e das linhas nasciam acordes. Um bom estudo de violão dá conta das duas leituras.' },
        { t: 'h', x: 'As quatro regras básicas (contraponto a duas vozes)' },
        {
          t: 'lista', itens: [
            '*Movimento contrário sempre que possível*: se uma voz sobe, a outra desce. É isso que dá independência.',
            '*Intervalos consonantes nos tempos fortes*: terças, sextas, quintas e oitavas. Segundas e sétimas podem passar, mas de passagem.',
            '*Nada de quintas e oitavas paralelas*: duas vozes andando sempre à mesma distância de quinta ou oitava soam como uma só. Perde-se a independência.',
            '*Cada voz deve ser cantável*: sem saltos estranhos, sem notas inalcançáveis. Se não dá para cantar, não é uma boa linha.'
          ]
        },
        {
          t: 'dica', titulo: 'Teste do cantor: ',
          x: 'cante só a voz de baixo de um trecho de Bach. Ela faz sentido sozinha? Se sim, é contraponto de verdade. Agora cante o baixo de uma música pop: provavelmente é só a raiz do acorde. Essa é a diferença.'
        },
        { t: 'h', x: 'Duas vozes no violão' },
        { t: 'p', x: 'O violão é um instrumento polifônico: ele toca várias vozes ao mesmo tempo, como um pequeno órgão de seis cordas. Na prática, isso significa dar a cada voz um dedo e um volume diferentes. Em geral: polegar (p) na voz grave, e m a nas agudas.' },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'c4+e4/q d4+f4/q e4+g4/q f4+a4/q | g4+b4/q f4+a4/q e4+g4/q d4+f4/q | c4+e4/b z/b',
          legenda: 'Terças paralelas: as duas vozes andam juntas. Soa bonito, mas sem independência — é o contrário do que o contraponto procura.'
        },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'c4+g4/q d4+f4/q e4+e4/q f4+d4/q | g4+c4/q a4+c4/q b3+d4/q c4+e4/q | c4+g4/b z/b',
          legenda: 'Movimento contrário: a voz de cima sobe enquanto a de baixo desce. Agora as duas linhas têm vida própria.'
        },
        {
          t: 'tab', bpm: 56, legenda: 'O mesmo movimento contrário em tablatura, com os dedos da mão direita. O polegar cuida da linha que desce; o dedo m da que sobe.',
          compassos: [
            { notas: [{ pos: [[4, 2], [2, 0]], fig: 'seminima' }, { pos: [[4, 0], [2, 1]], fig: 'seminima' }, { pos: [[5, 3], [2, 3]], fig: 'seminima' }, { pos: [[5, 2], [1, 0]], fig: 'seminima' }] },
            { notas: [{ pos: [[5, 0], [1, 1]], fig: 'seminima' }, { pos: [[6, 3], [1, 3]], fig: 'seminima' }, { pos: [[6, 2], [1, 1]], fig: 'seminima' }, { pos: [[6, 0], [1, 0]], fig: 'minima' }] }
          ]
        },
        { t: 'tocar', titulo: 'Toque as duas vozes', seq: [[4, 2], [2, 0], [4, 0], [2, 1], [5, 3], [2, 3]], rotulo: 'Conferir nota por nota', x: 'Toque primeiro só a voz grave, depois só a aguda, e por último as duas juntas.' },
        { t: 'h', x: 'Onde você vai encontrar isso' },
        { t: 'p', x: 'Nos estudos de Sor (especialmente os de duas vozes), nas Bourrées e Minuetos de Bach transcritos para violão, nas fugas e em quase toda a obra de Villa-Lobos. A partir do Nível 5 você estuda contraponto a três e quatro vozes.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Contraponto', rodadas: 6,
          perguntas: [
            { texto: 'Contraponto é pensar a música:', opcoes: ['Horizontalmente, por linhas', 'Verticalmente, por acordes', 'Por ritmos', 'Por timbres'], correta: 0, explicacao: 'Linhas independentes.' },
            { texto: 'Qual movimento dá mais independência às vozes?', opcoes: ['Contrário', 'Paralelo', 'Oblíquo', 'Nenhum'], correta: 0, explicacao: 'Uma sobe, a outra desce.' },
            { texto: 'Por que se evitam quintas paralelas?', opcoes: ['As vozes deixam de soar independentes', 'São dissonantes', 'São difíceis de tocar', 'Soam desafinadas'], correta: 0, explicacao: 'Fundem-se numa só.' },
            { texto: 'Qual é o "teste do cantor"?', opcoes: ['Cantar cada voz sozinha e ver se faz sentido', 'Cantar o acorde', 'Cantar em oitavas', 'Cantar com metrônomo'], correta: 0, explicacao: 'Linha boa é cantável.' },
            { texto: 'No violão, a voz grave em geral é tocada com:', opcoes: ['O polegar (p)', 'O anular (a)', 'O médio (m)', 'A palheta'], correta: 0, explicacao: 'p cuida do baixo.' },
            { texto: 'Nos tempos fortes, prefira intervalos:', opcoes: ['Consonantes: 3ª, 5ª, 6ª e 8ª', 'Dissonantes', 'Trítonos', 'Segundas'], correta: 0, explicacao: 'Dissonâncias passam, não pousam.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar as duas vozes com o mesmo volume e sem intenção.', certo: 'Dê um pouco mais de peso à voz que tem a melodia naquele momento.' },
            { erro: 'Pensar que terças paralelas são contraponto.', certo: 'São bonitas, mas é uma voz dobrada, não duas independentes.' },
            { erro: 'Estudar as duas vozes sempre juntas.', certo: 'Estude cada linha sozinha até ficar musical, e só então junte.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Harmonia é vertical (acordes); contraponto é horizontal (linhas).',
            'Quatro regras: movimento contrário, consonância nos tempos fortes, sem quintas/oitavas paralelas, vozes cantáveis.',
            'No violão, cada voz ganha dedos e volume próprios: p no baixo, i m a no agudo.',
            'Estude cada voz separada antes de juntar.'
          ]
        }
      ],
      quiz: [
        { texto: 'A diferença central entre harmonia e contraponto é:', opcoes: ['Vertical (acordes) contra horizontal (linhas)', 'Clássico contra popular', 'Lento contra rápido', 'Escrito contra improvisado'], correta: 0, explicacao: 'Dois ângulos da mesma música.' },
        { texto: 'Quintas paralelas são evitadas porque:', opcoes: ['As vozes perdem independência', 'São dissonantes', 'Soam fracas', 'Não existem no violão'], correta: 0, explicacao: 'Fundem-se.' },
        { texto: 'Movimento oblíquo é quando:', opcoes: ['Uma voz fica parada e a outra se move', 'As duas sobem', 'As duas descem', 'As duas param'], correta: 0, explicacao: 'É aceito e útil.' },
        { texto: 'Para estudar uma peça a duas vozes, comece:', opcoes: ['Tocando cada voz separada', 'Tocando as duas juntas rápido', 'Pelo fim', 'Sem metrônomo'], correta: 0, explicacao: 'Cada linha precisa fazer sentido.' },
        { texto: 'Em qual repertório o contraponto é central?', opcoes: ['Bach e os estudos a duas vozes de Sor', 'Rock', 'Bossa nova', 'Flamenco'], correta: 0, explicacao: 'Barroco e escola clássica.' },
        { texto: 'Nos tempos fortes, o intervalo entre as vozes deve ser preferencialmente:', opcoes: ['Consonante', 'Dissonante', 'Um trítono', 'Uma sétima'], correta: 0, explicacao: '3ª, 5ª, 6ª, 8ª.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o exemplo de movimento contrário com as duas vozes limpas.',
          'Toco cada voz separada e canto a de baixo.',
          'Dou mais peso à voz da melodia e menos à de acompanhamento.',
          'Identifico, numa peça de Sor ou Bach, quantas vozes estão soando.'
        ],
        criterio: 'Você domina quando toca duas vozes com volumes diferentes e explica para onde cada linha caminha.'
      }
    }
  ]
};
