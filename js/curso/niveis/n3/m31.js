// NÍVEL 3 · MÓDULO 3.1 — Teoria e harmonia
// Oito aulas: escalas maiores em todas as tonalidades, ciclo das quintas e
// armaduras, as três escalas menores, intervalos, tríades, campo harmônico,
// funções e cadências.

export const M31 = {
  id: '3.1',
  titulo: 'Teoria e harmonia',
  objetivo: 'Entender como a música tonal funciona por dentro: de onde vêm as tonalidades, como os acordes se formam e por que eles se encadeiam do jeito que se encadeiam.',
  aulas: [

    // ---------------------------------------------------------------- 3.1.1
    {
      id: 'n3.1.1',
      titulo: 'Escalas maiores em todas as tonalidades',
      resumo: 'Uma fórmula, doze tonalidades.',
      minutos: 16,
      disciplinas: ['teoria'],
      prereq: ['n2.1.7'],
      status: 'validado',
      cobre: ['Escalas maiores'],
      objetivo: 'Construir e escrever a escala maior de qualquer uma das doze notas.',
      blocos: [
        { t: 'p', x: 'Você já sabe a fórmula: *T T S T T T S*. Agora vamos aplicá-la nas doze notas e descobrir um padrão que organiza toda a música tonal.' },
        { t: 'h', x: 'A regra de ouro da escrita' },
        {
          t: 'dica', titulo: 'Uma letra por grau: ',
          x: 'numa escala maior, *cada letra aparece exatamente uma vez*. Se a escala tem Fá, não pode ter Fá♯ também. Essa regra sozinha decide se você escreve Fá♯ ou Sol♭.'
        },
        { t: 'p', x: 'Exemplo: em Sol maior, o sétimo grau fica um semitom abaixo do Sol. Poderia ser chamado de Fá♯ ou de Sol♭. Mas já existe um Sol (a tônica), então a escolha é obrigatória: *Fá♯*.' },
        { t: 'h', x: 'Montando qualquer escala' },
        {
          t: 'passos', itens: [
            'Escreva as sete letras em ordem, começando pela tônica. Em Mi: *Mi Fá Sol Lá Si Dó Ré*.',
            'Agora confira as distâncias com a fórmula 2-2-1-2-2-2-1 (em casas).',
            'Mi→Fá é 1 casa, mas a fórmula pede 2: então é *Fá♯*.',
            'Fá♯→Sol é 1, mas a fórmula pede 2: *Sol♯*.',
            'Sol♯→Lá é 1, e a fórmula pede 1: fica *Lá*.',
            'Continue até fechar. Resultado: Mi Fá♯ Sol♯ Lá Si Dó♯ Ré♯.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Tonalidade', 'Notas', 'Alterações'],
          linhas: [
            ['Dó maior', 'Dó Ré Mi Fá Sol Lá Si', 'nenhuma'],
            ['Sol maior', 'Sol Lá Si Dó Ré Mi Fá♯', '1 sustenido'],
            ['Ré maior', 'Ré Mi Fá♯ Sol Lá Si Dó♯', '2 sustenidos'],
            ['Lá maior', 'Lá Si Dó♯ Ré Mi Fá♯ Sol♯', '3 sustenidos'],
            ['Mi maior', 'Mi Fá♯ Sol♯ Lá Si Dó♯ Ré♯', '4 sustenidos'],
            ['Si maior', 'Si Dó♯ Ré♯ Mi Fá♯ Sol♯ Lá♯', '5 sustenidos'],
            ['Fá maior', 'Fá Sol Lá Si♭ Dó Ré Mi', '1 bemol'],
            ['Si♭ maior', 'Si♭ Dó Ré Mi♭ Fá Sol Lá', '2 bemóis'],
            ['Mi♭ maior', 'Mi♭ Fá Sol Lá♭ Si♭ Dó Ré', '3 bemóis'],
            ['Lá♭ maior', 'Lá♭ Si♭ Dó Ré♭ Mi♭ Fá Sol', '4 bemóis']
          ],
          legenda: 'Repare: as escalas com sustenidos sobem de quinta em quinta (Dó, Sol, Ré, Lá, Mi, Si). As com bemóis descem de quinta em quinta (Dó, Fá, Si♭, Mi♭, Lá♭). Isso é o ciclo das quintas, assunto da próxima aula.'
        },
        { t: 'teclado', oitavas: 1, destacar: [7, 9, 11, 0, 2, 4, 6].map((pc, i) => ({ pc, rotulo: String(i + 1), classe: i ? '' : 'raiz' })), legenda: 'Sol maior no teclado. A única tecla preta é o Fá♯.' },
        { t: 'h', x: 'Por que isso importa no violão' },
        { t: 'p', x: 'Saber a escala de uma tonalidade é saber *quais notas existem naquela música*. Isso muda tudo na prática: você para de procurar nota por nota e passa a tocar dentro de um conjunto conhecido. É o que permite improvisar, harmonizar e corrigir erros de ouvido.' },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Construir escalas', rodadas: 6, perguntas: [
          { texto: 'Quantos sustenidos tem Mi maior?', opcoes: ['4', '3', '5', '2'], correta: 0, explicacao: 'Fá♯, Dó♯, Sol♯ e Ré♯.' },
          { texto: 'Qual é a sétima nota de Ré maior?', opcoes: ['Dó♯', 'Dó', 'Ré♯', 'Si'], correta: 0, explicacao: 'Ré Mi Fá♯ Sol Lá Si Dó♯.' },
          { texto: 'Fá maior tem qual alteração?', opcoes: ['Si bemol', 'Fá sustenido', 'Mi bemol', 'nenhuma'], correta: 0, explicacao: 'De Lá a Si há um tom, mas a fórmula pede semitom no grau 3–4.' },
          { texto: 'Por que Sol maior usa Fá♯ e não Sol♭?', opcoes: ['Porque cada letra aparece uma vez só, e Sol já é a tônica', 'Porque soa melhor', 'Por convenção', 'Porque Sol♭ não existe'], correta: 0, explicacao: 'A regra de uma letra por grau.' },
          { texto: 'Qual é a terceira nota de Lá maior?', opcoes: ['Dó♯', 'Dó', 'Si', 'Ré'], correta: 0, explicacao: 'Lá Si Dó♯.' },
          { texto: 'Si♭ maior tem quantos bemóis?', opcoes: ['2', '1', '3', '4'], correta: 0, explicacao: 'Si♭ e Mi♭.' }
        ] },
        {
          t: 'erros', itens: [
            { erro: 'Escrever Sol♭ numa escala que já tem Sol.', certo: 'Uma letra por grau: use Fá♯.' },
            { erro: 'Decorar as doze escalas uma por uma.', certo: 'Decore a fórmula e a regra das letras; o resto se calcula em segundos.' },
            { erro: 'Confundir escala com armadura.', certo: 'A escala é a sequência de notas; a armadura é o jeito de escrevê-la na partitura.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'A fórmula T T S T T T S vale para todas as doze tonalidades.',
            'Cada letra aparece exatamente uma vez na escala: é essa regra que decide ♯ ou ♭.',
            'Escalas com sustenidos sobem de quinta em quinta; com bemóis, descem.',
            'Saber a escala é saber quais notas existem naquela música.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos sustenidos tem Lá maior?', opcoes: ['3', '2', '4', '1'], correta: 0, explicacao: 'Fá♯, Dó♯ e Sol♯.' },
        { texto: 'Qual regra decide se uma nota é escrita com ♯ ou ♭?', opcoes: ['Cada letra aparece uma vez só na escala', 'A preferência do compositor', 'O instrumento', 'O andamento'], correta: 0, explicacao: 'É a regra de uma letra por grau.' },
        { texto: 'Qual é a quarta nota de Mi maior?', opcoes: ['Lá', 'Lá♯', 'Sol♯', 'Si'], correta: 0, explicacao: 'Mi Fá♯ Sol♯ Lá.' },
        { texto: 'As tonalidades com bemóis seguem que direção?', opcoes: ['Descem de quinta em quinta a partir de Dó', 'Sobem de quinta em quinta', 'Sobem de terça em terça', 'Não seguem ordem'], correta: 0, explicacao: 'Dó, Fá, Si♭, Mi♭, Lá♭…' },
        { texto: 'Qual é a alteração de Fá maior?', opcoes: ['Si bemol', 'Fá sustenido', 'Dó sustenido', 'nenhuma'], correta: 0, explicacao: 'Para o semitom cair entre o 3º e o 4º grau.' },
        { texto: 'Para que serve saber a escala de uma tonalidade?', opcoes: ['Para saber quais notas existem naquela música', 'Para afinar', 'Para marcar o compasso', 'Para escolher o andamento'], correta: 0, explicacao: 'É a base de improvisar, harmonizar e corrigir de ouvido.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Escrevo a escala maior de qualquer nota em menos de um minuto.',
          'Aplico corretamente a regra de uma letra por grau.',
          'Sei quantas alterações tem cada uma das tonalidades mais usadas.',
          'Toco pelo menos quatro escalas maiores diferentes no violão.'
        ],
        criterio: 'Você domina quando constrói qualquer escala maior de cabeça, sem consultar a tabela.'
      }
    },

    // ---------------------------------------------------------------- 3.1.2
    {
      id: 'n3.1.2',
      titulo: 'O ciclo das quintas e as armaduras',
      resumo: 'O mapa que organiza todas as tonalidades.',
      minutos: 18,
      disciplinas: ['teoria', 'harmonia'],
      prereq: ['n3.1.1'],
      status: 'validado',
      cobre: ['Ciclo das quintas', 'Armaduras de clave'],
      objetivo: 'Ler qualquer armadura de clave na hora e entender o parentesco entre as tonalidades.',
      blocos: [
        { t: 'p', x: 'Se você sair de Dó maior e subir uma quinta justa, chega em Sol maior — que tem exatamente *um sustenido a mais*. Suba outra quinta: Ré maior, dois sustenidos. E assim por diante, até dar a volta inteira. Esse é o ciclo das quintas, provavelmente a ferramenta mais útil de toda a teoria musical.' },
        { t: 'ciclo', destacar: ['C'], legenda: 'O ciclo das quintas. No sentido horário acrescentam-se sustenidos; no anti-horário, bemóis. Por dentro, as tonalidades menores relativas.' },
        { t: 'h', x: 'A ordem dos sustenidos e dos bemóis' },
        { t: 'p', x: 'Os sustenidos nunca aparecem em ordem aleatória. Eles entram sempre nesta ordem: *Fá, Dó, Sol, Ré, Lá, Mi, Si*. Os bemóis entram exatamente na ordem inversa: *Si, Mi, Lá, Ré, Sol, Dó, Fá*.' },
        {
          t: 'dica', x: 'Frase para decorar os sustenidos: "*Fá*zer *Dó* é *Sol*ução para *Ré*zar *Lá* no *Mi*lagre do *Si*lêncio". Se você preferir, invente a sua: o que importa é a ordem.'
        },
        {
          t: 'pauta',
          txt: 'g4/o', armadura: 1, formula: null, tocar: false,
          legenda: 'Armadura de 1 sustenido (Fá♯): Sol maior ou Mi menor.'
        },
        {
          t: 'pauta',
          txt: 'd5/o', armadura: 3, formula: null, tocar: false,
          legenda: 'Armadura de 3 sustenidos (Fá♯, Dó♯, Sol♯): Lá maior ou Fá♯ menor.'
        },
        {
          t: 'pauta',
          txt: 'f4/o', armadura: -2, formula: null, tocar: false,
          legenda: 'Armadura de 2 bemóis (Si♭, Mi♭): Si♭ maior ou Sol menor.'
        },
        { t: 'h', x: 'Os dois truques para ler uma armadura na hora' },
        {
          t: 'passos', itens: [
            '*Com sustenidos:* olhe o *último* sustenido da armadura e suba um semitom. Esse é o nome da tonalidade maior. Três sustenidos → o último é Sol♯ → um semitom acima é Lá → *Lá maior*.',
            '*Com bemóis:* olhe o *penúltimo* bemol. Ele já é o nome da tonalidade. Quatro bemóis (Si♭ Mi♭ Lá♭ Ré♭) → o penúltimo é Lá♭ → *Lá♭ maior*.',
            'Exceção única: *um bemol só* é Fá maior. Não dá para olhar o penúltimo quando só há um.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Armadura', 'Maior', 'Menor relativa'],
          linhas: [
            ['nenhuma', 'Dó', 'Lá menor'], ['1♯', 'Sol', 'Mi menor'], ['2♯', 'Ré', 'Si menor'], ['3♯', 'Lá', 'Fá♯ menor'],
            ['4♯', 'Mi', 'Dó♯ menor'], ['5♯', 'Si', 'Sol♯ menor'],
            ['1♭', 'Fá', 'Ré menor'], ['2♭', 'Si♭', 'Sol menor'], ['3♭', 'Mi♭', 'Dó menor'], ['4♭', 'Lá♭', 'Fá menor']
          ]
        },
        { t: 'h', x: 'A tonalidade relativa menor' },
        { t: 'p', x: 'Cada armadura serve a *duas* tonalidades: uma maior e uma menor. A menor relativa fica *três semitons abaixo* da maior (ou, o que dá no mesmo, no sexto grau dela). Dó maior e Lá menor usam as mesmíssimas notas; o que muda é qual delas funciona como centro.' },
        { t: 'ouvir', titulo: 'Ouvir Dó maior', notas: [60, 62, 64, 65, 67, 69, 71, 72], bpm: 140, x: 'As sete notas, terminando em Dó.' },
        { t: 'ouvir', titulo: 'Ouvir Lá menor', notas: [57, 59, 60, 62, 64, 65, 67, 69], bpm: 140, x: 'As mesmas sete notas, terminando em Lá. Ouça a diferença de caráter.' },
        { t: 'h', x: 'Por que o ciclo é tão útil' },
        {
          t: 'lista', itens: [
            'Mostra quais tonalidades são *vizinhas*: as que ficam lado a lado no ciclo diferem por uma nota só. É para elas que a música costuma modular.',
            'Explica as progressões de acordes mais comuns: boa parte da música anda no sentido anti-horário do ciclo (ii–V–I).',
            'Dá a armadura de qualquer tonalidade sem precisar montar a escala.',
            'No violão, mostra quais tonalidades são confortáveis: Mi, Lá, Ré, Sol e Dó usam muitas cordas soltas.'
          ]
        },
        { t: 'ciclo', destacar: ['C', 'G', 'D', 'A', 'E'], legenda: 'As cinco tonalidades mais confortáveis no violão, por causa das cordas soltas.' },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Ler armaduras', rodadas: 7, perguntas: [
          { texto: 'Armadura com 2 sustenidos: qual tonalidade maior?', opcoes: ['Ré maior', 'Sol maior', 'Lá maior', 'Si maior'], correta: 0, explicacao: 'Último sustenido é Dó♯; um semitom acima é Ré.' },
          { texto: 'Armadura com 3 bemóis: qual tonalidade maior?', opcoes: ['Mi♭ maior', 'Si♭ maior', 'Lá♭ maior', 'Fá maior'], correta: 0, explicacao: 'Bemóis: Si♭ Mi♭ Lá♭. O penúltimo é Mi♭.' },
          { texto: 'Qual é a menor relativa de Sol maior?', opcoes: ['Mi menor', 'Ré menor', 'Si menor', 'Lá menor'], correta: 0, explicacao: 'Três semitons abaixo, ou o sexto grau.' },
          { texto: 'Qual é a ordem dos sustenidos?', opcoes: ['Fá Dó Sol Ré Lá Mi Si', 'Dó Ré Mi Fá Sol Lá Si', 'Si Mi Lá Ré Sol Dó Fá', 'Fá Sol Lá Si Dó Ré Mi'], correta: 0, explicacao: 'Os bemóis seguem a ordem inversa.' },
          { texto: 'Armadura com 1 bemol: qual tonalidade maior?', opcoes: ['Fá maior', 'Si♭ maior', 'Ré menor', 'Dó maior'], correta: 0, explicacao: 'É a exceção da regra do penúltimo bemol.' },
          { texto: 'Subindo uma quinta a partir de uma tonalidade, o que acontece com a armadura?', opcoes: ['Ganha um sustenido (ou perde um bemol)', 'Ganha um bemol', 'Não muda', 'Ganha dois sustenidos'], correta: 0, explicacao: 'É o mecanismo do ciclo das quintas.' },
          { texto: 'Dó maior e Lá menor usam as mesmas notas. O que muda?', opcoes: ['Qual nota funciona como centro', 'As notas da escala', 'A armadura', 'O compasso'], correta: 0, explicacao: 'Mesmo material, centro tonal diferente.' }
        ] },
        {
          t: 'resumo', itens: [
            'Subir uma quinta acrescenta um sustenido; descer uma quinta acrescenta um bemol.',
            'Ordem dos sustenidos: Fá Dó Sol Ré Lá Mi Si. Dos bemóis: o inverso.',
            'Último sustenido + 1 semitom = tonalidade maior. Penúltimo bemol = tonalidade maior.',
            'Cada armadura serve a uma tonalidade maior e à sua relativa menor, três semitons abaixo.',
            'Tonalidades vizinhas no ciclo diferem por uma nota só.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a ordem dos sustenidos na armadura?', opcoes: ['Fá Dó Sol Ré Lá Mi Si', 'Si Mi Lá Ré Sol Dó Fá', 'Dó Ré Mi Fá Sol Lá Si', 'Fá Sol Lá Si Dó Ré Mi'], correta: 0, explicacao: 'Os bemóis entram na ordem inversa.' },
        { texto: 'Como descobrir a tonalidade maior de uma armadura com sustenidos?', opcoes: ['Último sustenido mais um semitom', 'Primeiro sustenido', 'Último sustenido', 'Penúltimo sustenido'], correta: 0, explicacao: 'O último sustenido é o sétimo grau.' },
        { texto: 'E com bemóis?', opcoes: ['O penúltimo bemol dá o nome', 'O último bemol', 'O primeiro bemol', 'Último bemol mais um tom'], correta: 0, explicacao: 'Exceto quando há um bemol só: Fá maior.' },
        { texto: 'Qual é a relativa menor de Ré maior?', opcoes: ['Si menor', 'Sol menor', 'Lá menor', 'Fá♯ menor'], correta: 0, explicacao: 'Três semitons abaixo de Ré.' },
        { texto: 'O que acontece ao subir uma quinta no ciclo?', opcoes: ['Ganha-se um sustenido', 'Ganha-se um bemol', 'Nada muda', 'Muda o compasso'], correta: 0, explicacao: 'É assim que o ciclo é construído.' },
        { texto: 'Por que Mi, Lá, Ré, Sol e Dó são confortáveis no violão?', opcoes: ['Porque usam muitas cordas soltas', 'Porque têm poucas notas', 'Porque são mais agudas', 'Por acaso'], correta: 0, explicacao: 'A afinação do violão favorece essas tonalidades.' },
        { texto: 'Quantas tonalidades uma mesma armadura pode indicar?', opcoes: ['Duas: uma maior e uma menor', 'Uma', 'Três', 'Depende do compasso'], correta: 0, explicacao: 'A maior e a sua relativa menor.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Leio qualquer armadura e digo a tonalidade maior em menos de 5 segundos.',
          'Digo também a relativa menor.',
          'Recito a ordem dos sustenidos e a dos bemóis.',
          'Sei dizer quais tonalidades são vizinhas de uma dada tonalidade.'
        ],
        criterio: 'Você domina quando abre uma partitura qualquer e identifica a tonalidade sem pensar.'
      }
    },

    // ---------------------------------------------------------------- 3.1.3
    {
      id: 'n3.1.3',
      titulo: 'As três escalas menores',
      resumo: 'Natural, harmônica e melódica: o que muda e por quê.',
      minutos: 18,
      disciplinas: ['teoria'],
      prereq: ['n3.1.2'],
      status: 'validado',
      cobre: ['Escalas menores naturais', 'Escalas menores harmônicas', 'Escalas menores melódicas'],
      objetivo: 'Construir e reconhecer as três formas da escala menor, e entender o problema que cada uma resolve.',
      blocos: [
        { t: 'p', x: 'O modo menor tem três escalas, e não uma. Isso confunde muita gente, mas a razão é simples e vale a pena entender: cada uma resolve um problema diferente.' },
        { t: 'h', x: '1. Menor natural' },
        { t: 'p', x: 'É a escala relativa: as mesmas notas da maior, começando no sexto grau. Em Lá menor natural: *Lá Si Dó Ré Mi Fá Sol*. A fórmula, em tons e semitons, é *T S T T S T T*.' },
        { t: 'pauta', txt: 'a3 b3 c4 d4 | e4 f4 g4 a4', formula: [4, 4], nomes: true, tocar: true, bpm: 84, legenda: 'Lá menor natural. Som grave, antigo, um pouco modal.' },
        { t: 'p', x: '*O problema:* o sétimo grau (Sol) fica um tom inteiro abaixo da tônica. Ele não "puxa" para o Lá. Na harmonia tonal, essa atração do sétimo grau para a tônica é essencial, e aqui ela não existe.' },
        { t: 'h', x: '2. Menor harmônica' },
        { t: 'p', x: 'A solução é direta: *suba o sétimo grau um semitom*. Em Lá menor harmônica: Lá Si Dó Ré Mi Fá *Sol♯*. Agora o Sol♯ está a um semitom do Lá e puxa com força.' },
        { t: 'pauta', compassos: [
          { notas: [{ midi: 57, fig: 'seminima' }, { midi: 59, fig: 'seminima' }, { midi: 60, fig: 'seminima' }, { midi: 62, fig: 'seminima' }] },
          { notas: [{ midi: 64, fig: 'seminima' }, { midi: 65, fig: 'seminima' }, { midi: 68, fig: 'seminima', acc: 1 }, { midi: 69, fig: 'seminima' }] }
        ], formula: [4, 4], tocar: true, bpm: 84, legenda: 'Lá menor harmônica. O Sol♯ é o que torna possível o acorde de Mi maior, o dominante de Lá menor.' },
        { t: 'p', x: 'Chama-se *harmônica* exatamente por isso: ela existe por causa da harmonia. É o Sol♯ que permite o acorde de *Mi maior* (Mi, Sol♯, Si) funcionar como dominante e resolver em Lá menor. Sem ele, o quinto grau seria Mi menor, que não resolve com a mesma força.' },
        { t: 'p', x: '*O novo problema:* entre o sexto grau (Fá) e o sétimo (Sol♯) agora há um tom e meio — três semitons. É um salto grande e difícil de cantar, que dá um sabor "oriental" à escala. Bonito como efeito, estranho numa melodia comum.' },
        { t: 'regua', de: 5, ate: 8, nomes: ['Lá', '', 'Si', 'Dó', '', 'Ré', '', 'Mi', 'Fá', '', 'Sol', 'Sol♯', 'Lá'], legenda: 'Da sexta à sétima nota da menor harmônica: três semitons de distância.' },
        { t: 'h', x: '3. Menor melódica' },
        { t: 'p', x: 'A terceira solução resolve o salto: *suba também o sexto grau*. Em Lá menor melódica subindo: Lá Si Dó Ré Mi *Fá♯* *Sol♯* Lá. Agora os últimos passos são tom, tom, semitom: canta-se com facilidade.' },
        { t: 'p', x: 'E na descida? Como a atração para a tônica só importa na subida, a prática clássica é *descer na forma natural*: Lá Sol Fá Mi Ré Dó Si Lá. Por isso a melódica é a única escala que muda conforme a direção.' },
        { t: 'pauta', compassos: [
          { notas: [{ midi: 57, fig: 'colcheia' }, { midi: 59, fig: 'colcheia' }, { midi: 60, fig: 'colcheia' }, { midi: 62, fig: 'colcheia' }, { midi: 64, fig: 'colcheia' }, { midi: 66, fig: 'colcheia', acc: 1 }, { midi: 68, fig: 'colcheia', acc: 1 }, { midi: 69, fig: 'colcheia' }] },
          { notas: [{ midi: 67, fig: 'colcheia', bequadro: true }, { midi: 65, fig: 'colcheia', bequadro: true }, { midi: 64, fig: 'colcheia' }, { midi: 62, fig: 'colcheia' }, { midi: 60, fig: 'colcheia' }, { midi: 59, fig: 'colcheia' }, { midi: 57, fig: 'minima' }] }
        ], formula: [4, 4], tocar: true, bpm: 96, legenda: 'Lá menor melódica: sobe com Fá♯ e Sol♯, desce natural. Os bequadros na descida cancelam as alterações.' },
        {
          t: 'tabela',
          cab: ['Escala', 'Lá menor', 'Para que serve'],
          linhas: [
            ['Natural', 'Lá Si Dó Ré Mi Fá Sol', 'Som modal; usada em música popular e folclórica'],
            ['Harmônica', 'Lá Si Dó Ré Mi Fá Sol♯', 'Permite o dominante maior; base da harmonia menor'],
            ['Melódica', 'Lá Si Dó Ré Mi Fá♯ Sol♯ (sobe) / natural (desce)', 'Melodia cantável mantendo a atração da sensível']
          ]
        },
        { t: 'h', x: 'No violão' },
        { t: 'braco', casas: 5, notas: [
          { corda: 5, casa: 0, rotulo: '1', classe: 'raiz' }, { corda: 5, casa: 2, rotulo: '2' }, { corda: 5, casa: 3, rotulo: '3' },
          { corda: 4, casa: 0, rotulo: '4' }, { corda: 4, casa: 2, rotulo: '5' }, { corda: 4, casa: 3, rotulo: '6' },
          { corda: 3, casa: 1, rotulo: '7' }, { corda: 3, casa: 2, rotulo: '8', classe: 'raiz' }
        ], tocar: true, bpm: 96, legenda: 'Lá menor harmônica na primeira posição. O 7º grau (Sol♯) fica na 3ª corda, casa 1.' },
        {
          t: 'erros', itens: [
            { erro: 'Achar que existe "a" escala menor.', certo: 'São três, e cada uma resolve um problema diferente.' },
            { erro: 'Escrever a armadura com o Sol♯ da harmônica.', certo: 'A armadura de Lá menor é a mesma de Dó maior: nenhuma alteração. O Sol♯ é escrito como acidente, nota por nota.' },
            { erro: 'Subir a melódica na descida.', certo: 'Na prática clássica, desce-se na forma natural.' },
            { erro: 'Confundir menor natural com maior.', certo: 'Mesmas notas, centro diferente. Toque as duas e ouça.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Natural: mesmas notas da relativa maior, fórmula T S T T S T T.',
            'Harmônica: sétimo grau elevado, para o dominante funcionar.',
            'Melódica: sexto e sétimo elevados na subida, natural na descida.',
            'A armadura é sempre a da relativa maior; as alterações são escritas como acidentes.'
          ]
        },
        {
          t: 'tocar', titulo: 'Ouça a diferença no braço',
          seq: [[5, 0], [4, 2], [3, 0], [3, 2], [2, 0], [2, 1], [1, 0], [1, 1]],
          rotulo: 'Conferir Lá menor harmônica',
          fim: 'Agora toque a mesma escala trocando o Sol sustenido pelo Sol natural: essa é a menor natural.',
          x: 'Lá Si Dó Ré Mi Fá Sol sustenido Lá. A sétima nota (Sol sustenido, 1ª corda casa 1) é o que distingue a harmônica da natural.'
        },
      ],
      quiz: [
        { texto: 'Qual é a diferença entre menor natural e menor harmônica?', opcoes: ['A harmônica tem o sétimo grau elevado', 'A harmônica tem o terceiro grau elevado', 'A harmônica tem o sexto elevado', 'Não há diferença'], correta: 0, explicacao: 'É o Sol♯ em Lá menor.' },
        { texto: 'Por que o sétimo grau é elevado na menor harmônica?', opcoes: ['Para criar atração para a tônica e permitir o dominante maior', 'Para ficar mais agudo', 'Para facilitar no violão', 'Por tradição apenas'], correta: 0, explicacao: 'Sem ele, o V grau seria menor e não resolveria com força.' },
        { texto: 'O que a menor melódica faz de diferente?', opcoes: ['Eleva o sexto e o sétimo na subida e desce natural', 'Eleva só o sexto', 'Abaixa o terceiro', 'Usa a mesma forma nos dois sentidos'], correta: 0, explicacao: 'É a única escala que muda conforme a direção.' },
        { texto: 'Qual é a armadura de Lá menor?', opcoes: ['Nenhuma alteração', 'Um sustenido', 'Três bemóis', 'Um bemol'], correta: 0, explicacao: 'A mesma de Dó maior, sua relativa.' },
        { texto: 'Quantos semitons há entre o 6º e o 7º grau da menor harmônica?', opcoes: ['Três', 'Dois', 'Um', 'Quatro'], correta: 0, explicacao: 'É esse salto que dá o sabor característico da escala.' },
        { texto: 'Qual é a fórmula da menor natural?', opcoes: ['T S T T S T T', 'T T S T T T S', 'S T T S T T T', 'T T T S T T S'], correta: 0, explicacao: 'Começando no sexto grau da maior.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Escrevo as três formas de qualquer escala menor.',
          'Explico por que a harmônica existe.',
          'Toco Lá menor natural e Lá menor harmônica no violão e ouço a diferença.',
          'Sei que a armadura é a da relativa maior.'
        ],
        criterio: 'Você domina quando ouve uma melodia em menor e identifica se o sétimo grau está elevado.'
      }
    },

    // ---------------------------------------------------------------- 3.1.4
    {
      id: 'n3.1.4',
      titulo: 'Intervalos simples e compostos',
      resumo: 'Medir com precisão qualquer distância entre duas notas.',
      minutos: 16,
      disciplinas: ['teoria', 'percepcao'],
      prereq: ['n2.1.8'],
      status: 'validado',
      cobre: ['Intervalos simples e compostos'],
      objetivo: 'Nomear, inverter e reconhecer intervalos dentro e além da oitava.',
      blocos: [
        { t: 'p', x: 'No Nível 2 você aprendeu a contar o número (pelas letras) e a qualidade (pelos semitons). Agora vamos completar o sistema: as alterações, as inversões e os intervalos maiores que uma oitava.' },
        { t: 'h', x: 'As cinco qualidades' },
        {
          t: 'tabela',
          cab: ['Qualidade', 'Aplica-se a', 'O que é'],
          linhas: [
            ['Justo', '4ª, 5ª, 8ª (e uníssono)', 'A forma natural desses intervalos'],
            ['Maior', '2ª, 3ª, 6ª, 7ª', 'A forma natural desses'],
            ['Menor', '2ª, 3ª, 6ª, 7ª', 'Um semitom menor que o maior'],
            ['Aumentado', 'qualquer', 'Um semitom maior que o justo ou o maior'],
            ['Diminuto', 'qualquer', 'Um semitom menor que o justo ou o menor']
          ],
          legenda: 'Repare que justos nunca viram maiores ou menores, e maiores/menores nunca viram justos.'
        },
        { t: 'p', x: 'A escada completa, do menor para o maior: *diminuto → menor → maior → aumentado* (para 2ª, 3ª, 6ª e 7ª) e *diminuto → justo → aumentado* (para 4ª, 5ª e 8ª).' },
        { t: 'h', x: 'Intervalos compostos' },
        { t: 'p', x: 'Quando a distância passa da oitava, o intervalo é *composto*. Basta somar 7 ao número simples: a 2ª vira *9ª*, a 3ª vira *10ª*, a 4ª vira *11ª*, a 6ª vira *13ª*.' },
        {
          t: 'tabela',
          cab: ['Simples', 'Composto', 'Semitons'],
          linhas: [['2ª maior', '9ª maior', '14'], ['3ª maior', '10ª maior', '16'], ['4ª justa', '11ª justa', '17'], ['5ª justa', '12ª justa', '19'], ['6ª maior', '13ª maior', '21']],
          legenda: 'A qualidade não muda: uma 3ª maior ampliada em uma oitava continua maior, só que agora é 10ª.'
        },
        { t: 'p', x: 'Esses nomes aparecem o tempo todo em cifras: *C9*, *C11*, *C13*. Eles indicam que o acorde tem uma nota a mais, à distância de nona, décima primeira ou décima terceira da raiz.' },
        { t: 'h', x: 'Inversão de intervalos' },
        { t: 'p', x: 'Se você pegar a nota de baixo e levá-la uma oitava acima, o intervalo se *inverte*. Duas regras simples governam isso:' },
        {
          t: 'passos', itens: [
            '*Os números somam 9.* A 3ª inverte em 6ª (3 + 6 = 9). A 2ª em 7ª. A 4ª em 5ª.',
            '*As qualidades trocam:* maior vira menor, menor vira maior, aumentado vira diminuto, diminuto vira aumentado. *Justo continua justo.*'
          ]
        },
        {
          t: 'tabela',
          cab: ['Intervalo', 'Inversão'],
          linhas: [['3ª maior (Dó–Mi)', '6ª menor (Mi–Dó)'], ['3ª menor (Dó–Mi♭)', '6ª maior (Mi♭–Dó)'], ['5ª justa (Dó–Sol)', '4ª justa (Sol–Dó)'], ['2ª maior (Dó–Ré)', '7ª menor (Ré–Dó)'], ['Trítono (Dó–Fá♯)', 'Trítono (Fá♯–Dó)']],
          legenda: 'O trítono é o único que inverte nele mesmo: seis semitons para cima ou para baixo dá na mesma.'
        },
        { t: 'ouvir', titulo: 'Terça maior', notas: [60, 64], fig: 'minima', bpm: 60 },
        { t: 'ouvir', titulo: 'Sua inversão: sexta menor', notas: [64, 72], fig: 'minima', bpm: 60, x: 'As mesmas duas notas, com o Dó uma oitava acima.' },
        { t: 'h', x: 'O trítono' },
        { t: 'p', x: 'Seis semitons, exatamente metade da oitava. É o intervalo mais instável da música tonal, e por isso mesmo o mais importante: é ele que está dentro do acorde dominante e é a sua tensão que pede resolução. Na Idade Média ganhou o apelido de *diabolus in musica*.' },
        { t: 'ouvir', titulo: 'Ouvir um trítono', notas: [60, 66], fig: 'minima', bpm: 60, x: 'Dó e Fá♯. Repare na sensação de que "falta resolver".' },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Intervalos', rodadas: 7, perguntas: [
          { texto: 'Qual é a inversão de uma terça maior?', opcoes: ['Sexta menor', 'Sexta maior', 'Terça menor', 'Quinta justa'], correta: 0, explicacao: 'Números somam 9; qualidade troca.' },
          { texto: 'Quantos semitons tem o trítono?', opcoes: ['6', '5', '7', '4'], correta: 0, explicacao: 'Metade exata da oitava.' },
          { texto: 'Uma 3ª maior ampliada em uma oitava vira o quê?', opcoes: ['10ª maior', '9ª maior', '11ª justa', '13ª maior'], correta: 0, explicacao: 'Some 7 ao número.' },
          { texto: 'Qual é a inversão de uma quinta justa?', opcoes: ['Quarta justa', 'Quarta aumentada', 'Quinta diminuta', 'Sexta maior'], correta: 0, explicacao: 'Justo continua justo.' },
          { texto: 'Um intervalo aumentado é...', opcoes: ['Um semitom maior que o justo ou o maior', 'Um tom maior', 'Igual ao maior', 'Um semitom menor'], correta: 0, explicacao: 'E diminuto é um semitom menor que o justo ou o menor.' },
          { texto: 'A 4ª pode ser maior?', opcoes: ['Não: ela é justa, aumentada ou diminuta', 'Sim', 'Só em menor', 'Depende da tonalidade'], correta: 0, explicacao: '4ª, 5ª e 8ª não têm forma maior nem menor.' },
          { texto: 'Por que o trítono é importante na harmonia?', opcoes: ['Porque está dentro do acorde dominante e pede resolução', 'Porque é consonante', 'Porque é o maior intervalo', 'Porque é fácil de tocar'], correta: 0, explicacao: 'A instabilidade dele é o motor da harmonia tonal.' }
        ] },
        {
          t: 'resumo', itens: [
            'Justo aplica-se a 4ª, 5ª e 8ª; maior/menor a 2ª, 3ª, 6ª e 7ª.',
            'Aumentado é um semitom acima; diminuto, um semitom abaixo.',
            'Compostos: some 7 ao número (3ª → 10ª, 2ª → 9ª).',
            'Inversão: os números somam 9 e as qualidades trocam; justo continua justo.',
            'O trítono tem 6 semitons, inverte nele mesmo e é o motor da harmonia tonal.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a inversão de uma sexta maior?', opcoes: ['Terça menor', 'Terça maior', 'Quarta justa', 'Sétima menor'], correta: 0, explicacao: '6 + 3 = 9, e maior vira menor.' },
        { texto: 'Uma 2ª maior ampliada em uma oitava é...', opcoes: ['9ª maior', '10ª maior', '11ª justa', '7ª menor'], correta: 0, explicacao: 'Some 7 ao número simples.' },
        { texto: 'Quais intervalos podem ser justos?', opcoes: ['4ª, 5ª e oitava', '3ª e 6ª', '2ª e 7ª', 'Todos'], correta: 0, explicacao: 'Eles nunca são maiores nem menores.' },
        { texto: 'O que acontece com a qualidade na inversão?', opcoes: ['Maior vira menor, aumentado vira diminuto, justo continua justo', 'Nada muda', 'Tudo vira justo', 'Maior vira aumentado'], correta: 0, explicacao: 'É uma troca simétrica.' },
        { texto: 'Qual intervalo inverte nele mesmo?', opcoes: ['O trítono', 'A quinta justa', 'A terça maior', 'A oitava'], correta: 0, explicacao: 'Seis semitons para cima ou para baixo dá na mesma.' },
        { texto: 'O que significa um "C9" numa cifra?', opcoes: ['Um acorde de Dó com a nota à distância de nona da raiz', 'Nove notas', 'Dó na nona casa', 'Dó com nona corda'], correta: 0, explicacao: 'Intervalos compostos aparecem o tempo todo nas cifras.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Nomeio qualquer intervalo com número e qualidade.',
          'Inverto um intervalo de cabeça.',
          'Converto intervalos simples em compostos.',
          'Reconheço o trítono de ouvido.'
        ],
        criterio: 'Você domina quando nomeia e inverte intervalos sem consultar a tabela.'
      }
    },

    // ---------------------------------------------------------------- 3.1.5
    {
      id: 'n3.1.5',
      titulo: 'Tríades: as quatro espécies',
      resumo: 'Maior, menor, diminuta e aumentada.',
      minutos: 16,
      disciplinas: ['harmonia', 'teoria'],
      prereq: ['n3.1.4'],
      status: 'validado',
      cobre: ['Formação de tríades', 'Acordes maiores e menores', 'Acordes diminutos e aumentados'],
      objetivo: 'Construir e reconhecer as quatro tríades, no papel e no braço.',
      blocos: [
        { t: 'p', x: 'Uma *tríade* é um acorde de três notas empilhadas em terças: raiz, terça e quinta. Trocando a qualidade das duas terças, surgem exatamente quatro possibilidades — e são essas quatro que sustentam toda a harmonia tradicional.' },
        {
          t: 'tabela',
          cab: ['Tríade', 'Terças empilhadas', 'Fórmula', 'Em Dó', 'Cifra'],
          linhas: [
            ['Maior', 'maior + menor', 'R  3  5', 'Dó Mi Sol', 'C'],
            ['Menor', 'menor + maior', 'R ♭3  5', 'Dó Mi♭ Sol', 'Cm'],
            ['Diminuta', 'menor + menor', 'R ♭3 ♭5', 'Dó Mi♭ Sol♭', 'C° ou Cdim'],
            ['Aumentada', 'maior + maior', 'R  3 ♯5', 'Dó Mi Sol♯', 'C+ ou Caug']
          ],
          legenda: 'Repare na simetria: a diminuta é feita só de terças menores; a aumentada, só de terças maiores.'
        },
        { t: 'h', x: 'O som de cada uma' },
        { t: 'ouvir', titulo: 'Dó maior', acorde: [48, 52, 55], x: 'Estável, luminoso.' },
        { t: 'ouvir', titulo: 'Dó menor', acorde: [48, 51, 55], x: 'Estável, mas sombrio. Só a terça mudou.' },
        { t: 'ouvir', titulo: 'Dó diminuto', acorde: [48, 51, 54], x: 'Instável, tenso: pede resolução.' },
        { t: 'ouvir', titulo: 'Dó aumentado', acorde: [48, 52, 56], x: 'Suspenso, sem chão: também pede resolução, mas de outro jeito.' },
        {
          t: 'comparar',
          a: { titulo: 'Estáveis (consonantes)', itens: ['Maior: terça maior + quinta justa', 'Menor: terça menor + quinta justa', 'A quinta justa é o que dá estabilidade'] },
          b: { titulo: 'Instáveis (dissonantes)', itens: ['Diminuta: quinta diminuta (trítono)', 'Aumentada: quinta aumentada', 'Ambas pedem resolução'] }
        },
        { t: 'p', x: 'A chave está na *quinta*. Se a quinta é justa, o acorde tem chão, e a terça só decide se ele é alegre ou triste. Se a quinta está alterada, o acorde perde o chão e precisa ir para algum lugar.' },
        { t: 'h', x: 'No braço do violão' },
        { t: 'acorde', lista: [
          { nome: 'C', desc: 'Dó maior', cordas: [-1, 3, 2, 0, 1, 0], dedos: [0, 3, 2, 0, 1, 0] },
          { nome: 'Cm', desc: 'Dó menor (pestana)', cordas: [-1, 3, 5, 5, 4, 3], dedos: [0, 1, 3, 4, 2, 1], casaInicial: 3, pestana: { casa: 3, de: 1, ate: 5 } },
          { nome: 'Bdim', desc: 'Si diminuto', cordas: [-1, 2, 3, 4, 3, -1], dedos: [0, 1, 2, 4, 3, 0], casaInicial: 2 },
          { nome: 'Caug', desc: 'Dó aumentado', cordas: [-1, 3, 2, 1, 1, 0], dedos: [0, 4, 3, 1, 2, 0] }
        ], legenda: 'As quatro espécies com raiz em Dó (ou próxima). Toque o botão de cada uma e compare.' },
        { t: 'h', x: 'Inversões' },
        { t: 'p', x: 'Uma tríade não precisa ter a raiz no baixo. Se a terça estiver embaixo, é a *primeira inversão*; se a quinta estiver embaixo, a *segunda inversão*. As notas são as mesmas; muda o som e a função no baixo.' },
        {
          t: 'tabela',
          cab: ['Posição', 'Nota no baixo', 'Dó maior fica', 'Cifra'],
          linhas: [['Fundamental', 'Raiz', 'Dó Mi Sol', 'C'], ['1ª inversão', 'Terça', 'Mi Sol Dó', 'C/E'], ['2ª inversão', 'Quinta', 'Sol Dó Mi', 'C/G']],
          legenda: 'A barra na cifra indica qual nota vai no baixo: C/E lê-se "Dó com baixo em Mi".'
        },
        { t: 'pauta', compassos: [
          { notas: [{ midis: [60, 64, 67], fig: 'minima' }, { midis: [64, 67, 72], fig: 'minima' }], acorde: 'C · C/E' },
          { notas: [{ midis: [67, 72, 76], fig: 'minima' }, { midis: [60, 64, 67], fig: 'minima' }], acorde: 'C/G · C' }
        ], formula: [4, 4], tocar: true, bpm: 60, legenda: 'As três posições de Dó maior e a volta à fundamental.' },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Reconhecer tríades', rodadas: 7, perguntas: [
          { texto: 'Quais notas formam Sol maior?', opcoes: ['Sol Si Ré', 'Sol Si♭ Ré', 'Sol Dó Ré', 'Sol Si Ré♯'], correta: 0, explicacao: 'Terça maior (4 semitons) e quinta justa (7).' },
          { texto: 'Quais notas formam Ré menor?', opcoes: ['Ré Fá Lá', 'Ré Fá♯ Lá', 'Ré Sol Lá', 'Ré Fá Lá♭'], correta: 0, explicacao: 'Terça menor e quinta justa.' },
          { texto: 'Como é formada a tríade diminuta?', opcoes: ['Duas terças menores empilhadas', 'Duas terças maiores', 'Maior e depois menor', 'Menor e depois maior'], correta: 0, explicacao: 'Por isso a quinta fica diminuta.' },
          { texto: 'Como é formada a tríade aumentada?', opcoes: ['Duas terças maiores empilhadas', 'Duas menores', 'Maior e depois menor', 'Menor e depois maior'], correta: 0, explicacao: 'A quinta fica aumentada.' },
          { texto: 'O que significa a cifra C/E?', opcoes: ['Dó maior com Mi no baixo', 'Dó e Mi tocados juntos', 'Dó maior seguido de Mi', 'Dó na corda Mi'], correta: 0, explicacao: 'É a primeira inversão.' },
          { texto: 'O que dá estabilidade a uma tríade?', opcoes: ['A quinta justa', 'A terça', 'A oitava', 'A raiz no baixo'], correta: 0, explicacao: 'Com a quinta alterada, o acorde pede resolução.' },
          { texto: 'Qual é a única diferença entre maior e menor?', opcoes: ['A terça, um semitom mais baixa no menor', 'A quinta', 'A raiz', 'O número de notas'], correta: 0, explicacao: 'E é ela que define o caráter.' }
        ] },
        {
          t: 'resumo', itens: [
            'Tríade = raiz + terça + quinta, duas terças empilhadas.',
            'Maior (M+m), menor (m+M), diminuta (m+m), aumentada (M+M).',
            'A quinta dá estabilidade; a terça dá caráter.',
            'Inversões: terça no baixo (1ª) ou quinta no baixo (2ª), escritas com barra na cifra.'
          ]
        }
      ],
      quiz: [
        { texto: 'Como se forma a tríade maior?', opcoes: ['Terça maior + terça menor', 'Terça menor + terça maior', 'Duas terças maiores', 'Duas terças menores'], correta: 0, explicacao: 'Resultando em quinta justa.' },
        { texto: 'E a diminuta?', opcoes: ['Duas terças menores', 'Duas terças maiores', 'Maior + menor', 'Menor + maior'], correta: 0, explicacao: 'A quinta fica diminuta: trítono.' },
        { texto: 'Quais notas formam Mi menor?', opcoes: ['Mi Sol Si', 'Mi Sol♯ Si', 'Mi Lá Si', 'Mi Sol Si♭'], correta: 0, explicacao: 'Terça menor (3 semitons) e quinta justa.' },
        { texto: 'O que a cifra G/B indica?', opcoes: ['Sol maior com Si no baixo', 'Sol e Si juntos', 'Sol maior seguido de Si', 'Sol na corda Si'], correta: 0, explicacao: 'Primeira inversão de Sol maior.' },
        { texto: 'Qual nota da tríade define se ela é maior ou menor?', opcoes: ['A terça', 'A quinta', 'A raiz', 'A oitava'], correta: 0, explicacao: 'Um semitom de diferença muda tudo.' },
        { texto: 'Por que as tríades diminuta e aumentada são instáveis?', opcoes: ['Porque a quinta está alterada', 'Porque a terça está alterada', 'Porque têm quatro notas', 'Porque são mais agudas'], correta: 0, explicacao: 'A quinta justa é o que dá chão ao acorde.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Monto as quatro tríades sobre qualquer nota.',
          'Toco as quatro no violão e ouço a diferença.',
          'Identifico uma inversão numa cifra com barra.',
          'Sei dizer qual nota muda entre maior e menor.'
        ],
        criterio: 'Você domina quando constrói qualquer tríade de cabeça e reconhece as quatro de ouvido.'
      }
    },

    // ---------------------------------------------------------------- 3.1.6
    {
      id: 'n3.1.6',
      titulo: 'Campo harmônico e graus',
      resumo: 'Os sete acordes que nascem de uma escala.',
      minutos: 16,
      disciplinas: ['harmonia'],
      prereq: ['n3.1.5'],
      status: 'validado',
      cobre: ['Campo harmônico maior', 'Graus da escala'],
      objetivo: 'Saber quais acordes pertencem a uma tonalidade e como eles são numerados.',
      blocos: [
        { t: 'p', x: 'Pegue a escala maior e monte uma tríade sobre cada uma das sete notas, usando *só notas da escala*. O resultado é o *campo harmônico*: os sete acordes que pertencem àquela tonalidade.' },
        { t: 'h', x: 'O padrão é sempre o mesmo' },
        {
          t: 'tabela',
          cab: ['Grau', 'Qualidade', 'Em Dó', 'Em Sol', 'Em Ré'],
          linhas: [
            ['I', 'maior', 'C', 'G', 'D'],
            ['ii', 'menor', 'Dm', 'Am', 'Em'],
            ['iii', 'menor', 'Em', 'Bm', 'F♯m'],
            ['IV', 'maior', 'F', 'C', 'G'],
            ['V', 'maior', 'G', 'D', 'A'],
            ['vi', 'menor', 'Am', 'Em', 'Bm'],
            ['vii°', 'diminuto', 'Bdim', 'F♯dim', 'C♯dim']
          ],
          legenda: 'A qualidade de cada grau nunca muda, em nenhuma tonalidade maior. Decore o padrão uma vez e vale para sempre.'
        },
        { t: 'p', x: 'Os números romanos são a linguagem universal da harmonia. *Maiúsculos* indicam acorde maior; *minúsculos*, menor; o *pequeno círculo* indica diminuto. Falar em "I–V–vi–IV" é falar de uma progressão independentemente da tonalidade.' },
        { t: 'h', x: 'Por que isso é tão útil' },
        {
          t: 'lista', itens: [
            'Você descobre quais acordes combinam numa música sem precisar testar.',
            'Consegue transpor qualquer música para outra tonalidade na hora.',
            'Entende por que certas sequências aparecem em milhares de canções.',
            'Consegue tirar música de ouvido muito mais rápido, porque as opções caem de 12 para 7.'
          ]
        },
        { t: 'h', x: 'A progressão mais famosa do mundo' },
        { t: 'p', x: '*I – V – vi – IV*. Em Dó: C – G – Am – F. Em Sol: G – D – Em – C. Está em centenas de canções populares, de todos os países e de todas as décadas.' },
        { t: 'acorde', lista: [
          { nome: 'C', desc: 'I', cordas: [-1, 3, 2, 0, 1, 0], dedos: [0, 3, 2, 0, 1, 0] },
          { nome: 'G', desc: 'V', cordas: [3, 2, 0, 0, 0, 3], dedos: [2, 1, 0, 0, 0, 3] },
          { nome: 'Am', desc: 'vi', cordas: [-1, 0, 2, 2, 1, 0], dedos: [0, 0, 2, 3, 1, 0] },
          { nome: 'F', desc: 'IV', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], casaInicial: 1, pestana: { casa: 1, de: 1, ate: 6 } }
        ], legenda: 'I–V–vi–IV em Dó maior. Toque os quatro em sequência, quatro tempos cada.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'C (I)' },
            { notas: [{ pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'a' }], acorde: 'G (V)' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am (vi)' },
            { notas: [{ pos: [[4, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[4, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }], acorde: 'F (IV)' }
          ],
          legenda: 'A progressão com arpejo. O Fá aqui está sem pestana, usando só quatro cordas.',
          tocar: true, bpm: 84
        },
        { t: 'h', x: 'O campo harmônico menor' },
        { t: 'p', x: 'Partindo da menor *harmônica* (com o sétimo grau elevado), o padrão fica: *i – ii° – III+ – iv – V – VI – vii°*. Em Lá menor: Am, Bdim, Caug, Dm, E, F, G♯dim. Repare que o V é *maior* — e é exatamente para isso que o sétimo grau foi elevado.' },
        { t: 'ir', rota: 'caged', titulo: 'Abrir a ferramenta CAGED', x: 'Lá você vê o mesmo acorde em cinco lugares do braço, o que é a aplicação prática direta desta aula.' },
        { t: 'ir', rota: 'teoria', titulo: 'Lição de campo harmônico', x: 'Com quiz e braço interativo em todas as tonalidades.' },
        {
          t: 'erros', itens: [
            { erro: 'Achar que o padrão muda de tonalidade para tonalidade.', certo: 'A qualidade de cada grau é sempre a mesma: I ii iii IV V vi vii°.' },
            { erro: 'Escrever o grau vi com maiúscula.', certo: 'Maiúscula = maior, minúscula = menor. O vi é menor.' },
            { erro: 'Usar o campo harmônico como regra rígida.', certo: 'Ele descreve o que é natural, não o que é permitido. Música boa sai dele o tempo todo.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Campo harmônico: uma tríade sobre cada grau da escala, usando só notas dela.',
            'Padrão maior: I ii iii IV V vi vii°, sempre.',
            'Maiúsculo = maior, minúsculo = menor, ° = diminuto.',
            'I–V–vi–IV é a progressão mais usada da música popular.',
            'No menor harmônico, o V é maior: é para isso que o 7º grau sobe.'
          ]
        },
        {
          t: 'check', chave: 'campo', titulo: 'Toque o campo harmônico',
          itens: [
            'Toquei os sete acordes do campo de Dó maior em sequência: C, Dm, Em, F, G, Am, Bdim.',
            'Toquei os sete acordes do campo de Sol maior.',
            'Toquei a sequência I - IV - V - I em Dó e em Sol.',
            'Escrevi de memória o campo harmônico de Ré maior e confirmei na tabela.'
          ]
        },
      ],
      quiz: [
        { texto: 'Qual é a qualidade do grau vi no campo harmônico maior?', opcoes: ['Menor', 'Maior', 'Diminuto', 'Aumentado'], correta: 0, explicacao: 'I ii iii IV V vi vii°.' },
        { texto: 'Em Sol maior, qual acorde é o grau IV?', opcoes: ['C', 'D', 'Em', 'Am'], correta: 0, explicacao: 'Sol-Lá-Si-Dó: o quarto grau é Dó.' },
        { texto: 'O que significa o grau vii°?', opcoes: ['Acorde diminuto sobre o sétimo grau', 'Acorde maior', 'Acorde menor', 'Acorde com sétima'], correta: 0, explicacao: 'O círculo indica diminuto.' },
        { texto: 'Em Dó maior, qual é a progressão I–V–vi–IV?', opcoes: ['C G Am F', 'C F G Am', 'C Am F G', 'C Em F G'], correta: 0, explicacao: 'A progressão mais usada da música popular.' },
        { texto: 'No campo harmônico menor harmônico, qual é a qualidade do grau V?', opcoes: ['Maior', 'Menor', 'Diminuto', 'Aumentado'], correta: 0, explicacao: 'Graças ao sétimo grau elevado.' },
        { texto: 'Para que serve conhecer o campo harmônico?', opcoes: ['Saber quais acordes combinam e transpor na hora', 'Afinar o violão', 'Marcar o compasso', 'Escolher o andamento'], correta: 0, explicacao: 'Reduz as opções de 12 acordes para 7.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Digo os sete acordes de qualquer tonalidade maior em menos de 20 segundos.',
          'Toco I–V–vi–IV em Dó e em Sol.',
          'Sei transpor uma progressão de uma tonalidade para outra usando os graus.',
          'Conheço o padrão do campo harmônico menor.'
        ],
        criterio: 'Você domina quando ouve uma progressão e consegue nomeá-la em números romanos.'
      }
    },

    // ---------------------------------------------------------------- 3.1.7
    {
      id: 'n3.1.7',
      titulo: 'Funções harmônicas',
      resumo: 'Tônica, subdominante e dominante: as três forças da música tonal.',
      minutos: 16,
      disciplinas: ['harmonia'],
      prereq: ['n3.1.6'],
      status: 'validado',
      cobre: ['Funções harmônicas', 'Tônica, subdominante e dominante'],
      objetivo: 'Entender por que os acordes se movem, e não apenas quais existem.',
      blocos: [
        { t: 'p', x: 'Os sete acordes do campo harmônico não são sete coisas diferentes: eles se agrupam em *três funções*. Entender isso explica por que a música anda, para onde ela quer ir e por que certas sequências soam "certas".' },
        {
          t: 'tabela',
          cab: ['Função', 'Sensação', 'Graus', 'Em Dó'],
          linhas: [
            ['Tônica (T)', 'Repouso, chegada, casa', 'I, vi, iii', 'C, Am, Em'],
            ['Subdominante (S)', 'Afastamento, preparação', 'IV, ii', 'F, Dm'],
            ['Dominante (D)', 'Tensão máxima, quer resolver', 'V, vii°', 'G, Bdim']
          ],
          legenda: 'Os acordes de uma mesma função compartilham notas e podem se substituir.'
        },
        { t: 'h', x: 'O movimento natural' },
        { t: 'p', x: 'A música tonal tem um ciclo básico: *Tônica → Subdominante → Dominante → Tônica*. Sai de casa, se afasta, cria tensão, volta. Quase toda música ocidental é uma variação disso, em escalas de tempo diferentes.' },
        {
          t: 'passos', itens: [
            '*Tônica*: o lugar de repouso. A música pode ficar aqui à vontade.',
            '*Subdominante*: dá um passo para fora. Ainda é confortável, mas já não é casa.',
            '*Dominante*: tensão. Contém o trítono (em Dó: Si e Fá dentro do G7) e exige resolução.',
            '*Tônica*: resolve. O trítono se abre e o ouvido descansa.'
          ]
        },
        { t: 'h', x: 'Por que o dominante puxa tanto' },
        { t: 'p', x: 'Duas forças agem ao mesmo tempo. A primeira é a *sensível*: o sétimo grau da escala (em Dó, o Si) está a um semitom da tônica e quer subir até ela. A segunda é o *trítono* entre o Si e o Fá do acorde G7: um intervalo instável que precisa se resolver, e resolve exatamente nas notas Dó e Mi.' },
        { t: 'ouvir', titulo: 'G7 resolvendo em C', notas: [], acorde: [43, 47, 50, 53], x: 'Primeiro o G7 (Sol Si Ré Fá).' },
        { t: 'ouvir', titulo: 'E agora o C', acorde: [48, 52, 55, 60], x: 'A resolução. O Si subiu para o Dó e o Fá desceu para o Mi.' },
        { t: 'braco', casas: 5, notas: [
          { corda: 2, casa: 0, rotulo: 'Si', classe: 'raiz' }, { corda: 2, casa: 1, rotulo: 'Dó' },
          { corda: 4, casa: 3, rotulo: 'Fá', classe: 'raiz' }, { corda: 4, casa: 2, rotulo: 'Mi' }
        ], legenda: 'As duas resoluções do trítono: Si sobe para Dó, Fá desce para Mi. Um semitom cada.' },
        { t: 'h', x: 'Substituições dentro da função' },
        { t: 'p', x: 'Como os acordes de uma função compartilham notas, eles podem se trocar. Em Dó: Am (lá, dó, mi) tem duas notas em comum com C (dó, mi, sol). Por isso Am pode fazer o papel de tônica, só que com uma cor mais melancólica.' },
        {
          t: 'tabela',
          cab: ['Em vez de', 'Experimente', 'Efeito'],
          linhas: [
            ['C (I)', 'Am (vi)', 'Mesma função, cor menor'],
            ['C (I)', 'Em (iii)', 'Repouso mais suave e ambíguo'],
            ['F (IV)', 'Dm (ii)', 'Preparação mais melancólica'],
            ['G (V)', 'Bdim (vii°)', 'Tensão sem a raiz; menos comum']
          ]
        },
        { t: 'h', x: 'Analisando uma progressão' },
        { t: 'p', x: 'Pegue I–V–vi–IV (C G Am F) e traduza em funções: *T – D – T – S*. Repare que ela termina na subdominante, o que deixa a sensação de "não acabou" e faz o ciclo querer recomeçar. É por isso que essa progressão funciona tão bem em loop.' },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Funções', rodadas: 6, perguntas: [
          { texto: 'Qual é a função do grau V?', opcoes: ['Dominante', 'Tônica', 'Subdominante', 'Nenhuma'], correta: 0, explicacao: 'É o acorde de maior tensão.' },
          { texto: 'Qual grau pode substituir o I mantendo a função de tônica?', opcoes: ['vi', 'IV', 'V', 'ii'], correta: 0, explicacao: 'Compartilha duas notas com o I.' },
          { texto: 'Que intervalo instável está dentro do acorde dominante com sétima?', opcoes: ['O trítono', 'A quinta justa', 'A oitava', 'A terça maior'], correta: 0, explicacao: 'Em G7: Si e Fá.' },
          { texto: 'O que é a sensível?', opcoes: ['O sétimo grau, a um semitom da tônica', 'O primeiro grau', 'A quinta da escala', 'A nota mais aguda'], correta: 0, explicacao: 'Ela "quer" subir para a tônica.' },
          { texto: 'Qual é o ciclo funcional básico?', opcoes: ['Tônica → Subdominante → Dominante → Tônica', 'Dominante → Tônica → Subdominante', 'Tônica → Dominante → Subdominante', 'Subdominante → Tônica → Dominante'], correta: 0, explicacao: 'Sai de casa, afasta, tensiona, volta.' },
          { texto: 'Qual é a função do grau ii?', opcoes: ['Subdominante', 'Tônica', 'Dominante', 'Nenhuma'], correta: 0, explicacao: 'Compartilha notas com o IV.' }
        ] },
        {
          t: 'resumo', itens: [
            'Três funções: tônica (repouso), subdominante (afastamento) e dominante (tensão).',
            'Tônica: I, vi, iii. Subdominante: IV, ii. Dominante: V, vii°.',
            'O ciclo básico é T → S → D → T.',
            'O dominante puxa por causa da sensível e do trítono.',
            'Acordes da mesma função podem se substituir, mudando a cor sem mudar a direção.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as três funções harmônicas?', opcoes: ['Tônica, subdominante e dominante', 'Maior, menor e diminuta', 'Início, meio e fim', 'I, IV e V'], correta: 0, explicacao: 'Elas agrupam os sete graus.' },
        { texto: 'Qual função o grau IV cumpre?', opcoes: ['Subdominante', 'Tônica', 'Dominante', 'Sensível'], correta: 0, explicacao: 'Afastamento e preparação.' },
        { texto: 'Por que o dominante cria tanta tensão?', opcoes: ['Pela sensível e pelo trítono que ele contém', 'Porque é mais agudo', 'Porque é maior', 'Porque vem depois do IV'], correta: 0, explicacao: 'Duas forças pedindo resolução ao mesmo tempo.' },
        { texto: 'Em Dó maior, como o trítono do G7 resolve?', opcoes: ['Si sobe para Dó e Fá desce para Mi', 'Si desce e Fá sobe', 'Os dois sobem', 'Os dois descem'], correta: 0, explicacao: 'Um semitom cada, em direções opostas.' },
        { texto: 'Qual acorde pode substituir o I com função de tônica?', opcoes: ['vi', 'IV', 'V', 'vii°'], correta: 0, explicacao: 'Duas notas em comum.' },
        { texto: 'Por que I–V–vi–IV funciona bem em loop?', opcoes: ['Porque termina na subdominante, deixando sensação de continuação', 'Porque é curta', 'Porque usa acordes fáceis', 'Porque é antiga'], correta: 0, explicacao: 'O ciclo pede para recomeçar.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Classifico qualquer grau do campo harmônico em T, S ou D.',
          'Toco T–S–D–T no violão e ouço a sensação de cada etapa.',
          'Sei explicar por que o dominante resolve na tônica.',
          'Substituo um acorde por outro da mesma função e percebo a mudança de cor.'
        ],
        criterio: 'Você domina quando ouve uma música e percebe onde ela está tensa e onde descansa.'
      }
    },

    // ---------------------------------------------------------------- 3.1.8
    {
      id: 'n3.1.8',
      titulo: 'Cadências e harmonia tonal',
      resumo: 'A pontuação da música.',
      minutos: 16,
      disciplinas: ['harmonia'],
      prereq: ['n3.1.7'],
      status: 'validado',
      cobre: ['Introdução às cadências', 'Harmonia tonal'],
      objetivo: 'Reconhecer e usar as quatro cadências básicas, e entender o que é harmonia tonal.',
      blocos: [
        { t: 'p', x: 'Cadência é a fórmula harmônica que encerra uma frase musical. Ela é a *pontuação da música*: diz se a frase terminou com ponto final, com vírgula, com ponto e vírgula ou com reticências.' },
        { t: 'h', x: 'As quatro cadências' },
        {
          t: 'tabela',
          cab: ['Cadência', 'Fórmula', 'Equivale a', 'Sensação'],
          linhas: [
            ['Autêntica (perfeita)', 'V → I', 'Ponto final', 'Conclusão total'],
            ['Plagal', 'IV → I', 'Ponto final suave', 'Conclusão serena, "amém"'],
            ['Suspensiva (meia cadência)', 'termina em V', 'Vírgula', 'Suspensão, continua'],
            ['Interrompida (de engano)', 'V → vi', 'Reticências', 'Surpresa: esperava-se o I']
          ]
        },
        { t: 'h', x: 'Cadência autêntica: V → I' },
        { t: 'p', x: 'A mais forte de todas. O dominante resolve na tônica e tudo descansa. Quando o V tem a sétima (V7) e os dois acordes estão com a raiz no baixo, ela se chama *autêntica perfeita* — o fim mais conclusivo que a harmonia tonal conhece.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 3], [4, 0], [3, 0], [2, 0], [1, 3]], fig: 'minima', dedo: 'p i m a' }, { pos: [[6, 3], [4, 0], [3, 0], [2, 0], [1, 1]], fig: 'minima', dedo: 'p i m a' }], acorde: 'G · G7' },
            { notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'C' }
          ],
          legenda: 'Cadência autêntica em Dó: G – G7 – C. Ouça como o Fá do G7 desce para o Mi.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Cadência plagal: IV → I' },
        { t: 'p', x: 'Mais suave e menos conclusiva, sem trítono resolvendo. É a cadência do "amém" dos hinos religiosos, e por isso ficou conhecida como *cadência de amém*. Muito usada como final depois de uma cadência autêntica, como um epílogo.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[4, 3], [3, 2], [2, 1], [1, 1]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'F' },
            { notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'C' }
          ],
          legenda: 'Cadência plagal: F – C.',
          tocar: true, bpm: 50
        },
        { t: 'h', x: 'Meia cadência: termina em V' },
        { t: 'p', x: 'A frase para no dominante, sem resolver. O efeito é de pergunta, de suspensão. É assim que termina a primeira metade de quase toda melodia clássica de oito compassos — e é exatamente o que acontece no compasso 4 do Andantino que você tocou no Nível 2.' },
        { t: 'h', x: 'Cadência interrompida: V → vi' },
        { t: 'p', x: 'O ouvido espera o I depois do V, e vem o vi. Como o vi também é função de tônica, a frase "quase" resolve — mas em menor, e com surpresa. Compositores usam isso para prolongar uma peça que parecia que ia acabar.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 3], [4, 0], [3, 0], [2, 0], [1, 3]], fig: 'minima', dedo: 'p i m a' }, { pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'minima', dedo: 'p i m a' }], acorde: 'G · Am' },
            { notas: [{ pos: [[4, 3], [3, 2], [2, 1], [1, 1]], fig: 'minima', dedo: 'p i m a' }, { pos: [[6, 3], [4, 0], [3, 0], [2, 0], [1, 1]], fig: 'minima', dedo: 'p i m a' }], acorde: 'F · G7' },
            { notas: [{ pos: [[5, 3], [4, 2], [3, 0], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'C' }
          ],
          legenda: 'Primeiro a interrompida (G → Am), depois a autêntica de verdade (G7 → C). Repare como a surpresa adia o final.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'O que é harmonia tonal' },
        { t: 'p', x: '*Harmonia tonal* é o sistema que organizou a música ocidental de aproximadamente 1600 a 1900, e que continua sendo a base de quase toda a música popular de hoje. Ele se apoia em três pilares:' },
        {
          t: 'lista', itens: [
            'Existe um *centro tonal*: uma nota e um acorde que funcionam como casa.',
            'Os acordes têm *funções* e se movem em direções previsíveis, criando tensão e repouso.',
            'As *cadências* pontuam o discurso, marcando o fim de cada frase e seção.'
          ]
        },
        { t: 'p', x: 'Entender isso muda a sua relação com a música: você para de ouvir "um monte de acordes" e passa a ouvir um caminho, com partida, afastamento, tensão e chegada. E, na hora de estudar uma peça, você entende por que ela é como é.' },
        { t: 'exercicio', tipo: 'perguntas', titulo: 'Cadências', rodadas: 6, perguntas: [
          { texto: 'Qual é a cadência mais conclusiva?', opcoes: ['Autêntica (V–I)', 'Plagal (IV–I)', 'Meia cadência', 'Interrompida'], correta: 0, explicacao: 'Equivale a um ponto final.' },
          { texto: 'O que é uma cadência plagal?', opcoes: ['IV → I', 'V → I', 'V → vi', 'I → V'], correta: 0, explicacao: 'A cadência do "amém".' },
          { texto: 'O que caracteriza a meia cadência?', opcoes: ['A frase termina no V, sem resolver', 'A frase termina no I', 'A frase termina no vi', 'A frase não termina'], correta: 0, explicacao: 'Equivale a uma vírgula.' },
          { texto: 'O que é a cadência interrompida?', opcoes: ['V → vi, em vez do esperado V → I', 'IV → I', 'V → I com sétima', 'I → IV'], correta: 0, explicacao: 'Adia o final com uma surpresa.' },
          { texto: 'Quais são os pilares da harmonia tonal?', opcoes: ['Centro tonal, funções e cadências', 'Melodia, harmonia e ritmo', 'Maior, menor e diminuto', 'Escala, acorde e arpejo'], correta: 0, explicacao: 'Casa, movimento e pontuação.' },
          { texto: 'Por que a cadência autêntica é tão forte?', opcoes: ['Porque o trítono do dominante resolve na tônica', 'Porque usa acordes maiores', 'Porque é mais rápida', 'Porque é mais antiga'], correta: 0, explicacao: 'Duas notas resolvem por semitom em direções opostas.' }
        ] },
        {
          t: 'resumo', itens: [
            'Cadência é a pontuação da música: encerra frases.',
            'Autêntica (V–I) é o ponto final; plagal (IV–I) é o final suave.',
            'Meia cadência termina em V: é vírgula. Interrompida (V–vi) é surpresa.',
            'Harmonia tonal = centro tonal + funções + cadências.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual cadência equivale a um ponto final?', opcoes: ['Autêntica (V–I)', 'Plagal', 'Meia cadência', 'Interrompida'], correta: 0, explicacao: 'Especialmente com V7 e as raízes no baixo.' },
        { texto: 'Como é a cadência de "amém" dos hinos?', opcoes: ['IV → I', 'V → I', 'V → vi', 'ii → V'], correta: 0, explicacao: 'É a cadência plagal.' },
        { texto: 'Numa meia cadência, onde a frase termina?', opcoes: ['No V', 'No I', 'No IV', 'No vi'], correta: 0, explicacao: 'Deixa a frase em suspenso.' },
        { texto: 'Numa cadência interrompida, o V vai para onde?', opcoes: ['Para o vi', 'Para o I', 'Para o IV', 'Para o ii'], correta: 0, explicacao: 'O ouvido esperava o I.' },
        { texto: 'Em que período a harmonia tonal organizou a música ocidental?', opcoes: ['Aproximadamente de 1600 a 1900', 'Idade Média', 'Século XX', 'Antiguidade'], correta: 0, explicacao: 'E continua sendo a base da música popular de hoje.' },
        { texto: 'Para que serve entender cadências ao estudar uma peça?', opcoes: ['Para saber onde as frases começam e terminam', 'Para tocar mais rápido', 'Para afinar', 'Para escolher o dedilhado'], correta: 0, explicacao: 'Elas definem a respiração da música.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco as quatro cadências em Dó maior.',
          'Identifico de ouvido a diferença entre autêntica e plagal.',
          'Encontro as cadências numa peça que estou estudando.',
          'Sei explicar o que é harmonia tonal com as minhas palavras.'
        ],
        criterio: 'Você domina quando abre uma partitura e identifica onde cada frase termina e com que cadência.'
      }
    }
  ]
};
