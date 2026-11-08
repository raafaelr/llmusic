// NÍVEL 2 · MÓDULO 2.2 — Técnica instrumental
// Oito aulas: notas na primeira posição, apoyando e tirando, cromáticos e
// independência, arpejos, escalas de uma oitava, mudanças de posição,
// ligados e controle de intensidade.

export const M22 = {
  id: '2.2',
  titulo: 'Técnica instrumental',
  objetivo: 'Construir a técnica que sustenta todo o repertório: os dois toques da mão direita, os arpejos, as escalas, os ligados e o controle do som.',
  aulas: [

    // ---------------------------------------------------------------- 2.2.1
    {
      id: 'n2.2.1',
      titulo: 'As notas da primeira posição',
      resumo: 'Dominar as 17 notas naturais que estão ao alcance da mão parada.',
      minutos: 18,
      disciplinas: ['tecnica', 'leitura'],
      prereq: ['n1.4.4'],
      status: 'implementado',
      cobre: ['Localização das notas nas primeiras posições'],
      objetivo: 'Tocar qualquer nota da primeira posição sem procurar, com o dedo certo.',
      blocos: [
        { t: 'p', x: 'Chama-se *primeira posição* a região em que o dedo 1 cobre a casa 1, o dedo 2 cobre a casa 2, o dedo 3 cobre a casa 3 e o dedo 4 cobre a casa 4. A mão fica parada; só os dedos trabalham. Quase todo o repertório do Nível 2 cabe aqui.' },
        { t: 'h', x: 'O mapa completo' },
        { t: 'braco', casas: 5, notas: [
          { corda: 6, casa: 0, rotulo: 'Mi' }, { corda: 6, casa: 1, rotulo: 'Fá' }, { corda: 6, casa: 3, rotulo: 'Sol', classe: 'raiz' },
          { corda: 5, casa: 0, rotulo: 'Lá' }, { corda: 5, casa: 2, rotulo: 'Si' }, { corda: 5, casa: 3, rotulo: 'Dó', classe: 'raiz' },
          { corda: 4, casa: 0, rotulo: 'Ré' }, { corda: 4, casa: 2, rotulo: 'Mi' }, { corda: 4, casa: 3, rotulo: 'Fá' },
          { corda: 3, casa: 0, rotulo: 'Sol', classe: 'raiz' }, { corda: 3, casa: 2, rotulo: 'Lá' },
          { corda: 2, casa: 0, rotulo: 'Si' }, { corda: 2, casa: 1, rotulo: 'Dó', classe: 'raiz' }, { corda: 2, casa: 3, rotulo: 'Ré' },
          { corda: 1, casa: 0, rotulo: 'Mi' }, { corda: 1, casa: 1, rotulo: 'Fá' }, { corda: 1, casa: 3, rotulo: 'Sol', classe: 'raiz' }
        ], tocar: true, bpm: 100, legenda: 'As 17 notas naturais da primeira posição. Ouça subindo da 6ª corda até a 1ª.' },
        {
          t: 'tabela',
          cab: ['Corda', 'Solta', 'Casa 1', 'Casa 2', 'Casa 3'],
          linhas: [
            ['6ª', 'Mi', 'Fá (dedo 1)', '—', 'Sol (dedo 3)'],
            ['5ª', 'Lá', '—', 'Si (dedo 2)', 'Dó (dedo 3)'],
            ['4ª', 'Ré', '—', 'Mi (dedo 2)', 'Fá (dedo 3)'],
            ['3ª', 'Sol', '—', 'Lá (dedo 2)', '—'],
            ['2ª', 'Si', 'Dó (dedo 1)', '—', 'Ré (dedo 3)'],
            ['1ª', 'Mi', 'Fá (dedo 1)', '—', 'Sol (dedo 3)']
          ],
          legenda: 'Repare no padrão: as cordas que começam em Mi e em Si (as que têm semitom logo acima) usam a casa 1; as outras pulam para a casa 2.'
        },
        {
          t: 'dica', x: 'Por que algumas cordas não têm nota natural na casa 1? Porque a corda solta já está a um semitom da próxima nota natural. A 1ª corda é Mi, e Mi–Fá é um semitom: Fá fica na casa 1. Já a 5ª é Lá, e Lá–Si é um tom: Si fica na casa 2.'
        },
        { t: 'h', x: 'Exercício 1: subindo e descendo' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[6, 1]], fig: 'colcheia', dedo: 'p' }, { pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[5, 2]], fig: 'colcheia', dedo: 'p' }, { pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[4, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[1, 3]], fig: 'minima', dedo: 'i' }, { pos: [[1, 3]], fig: 'minima', dedo: 'm' }] }
          ],
          legenda: 'Todas as naturais, da 6ª corda à 1ª. Os baixos com o polegar, as agudas com i e m alternados.',
          tocar: true, bpm: 72
        },
        { t: 'h', x: 'Exercício 2: dizer o nome enquanto toca' },
        { t: 'p', x: 'Toque o exercício acima dizendo o nome de cada nota em voz alta. Parece simples e é muito difícil no começo — e é exatamente por isso que funciona. Em duas semanas, os nomes passam a vir sozinhos.' },
        {
          t: 'tocar', titulo: 'Confira as notas das cordas graves',
          seq: [{ corda: 6, casa: 0 }, { corda: 6, casa: 1 }, { corda: 6, casa: 3 }, { corda: 5, casa: 0 }, { corda: 5, casa: 2 }, { corda: 5, casa: 3 }],
          rotulo: 'Mi, Fá, Sol, Lá, Si, Dó',
          x: 'As seis primeiras notas da primeira posição, nas cordas 6 e 5.'
        },
        { t: 'exercicio', tipo: 'identificar-nota', titulo: 'Leia e localize', rodadas: 12, notas: ['e3', 'f3', 'g3', 'a3', 'b3', 'c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5', 'f5', 'g5'], x: 'Para cada nota que aparecer, diga o nome e, no violão, toque-a na primeira posição.' },
        {
          t: 'check', chave: 'primeiraposicao', titulo: 'Plano de 7 dias',
          itens: ['Dia 1: cordas 1 e 2', 'Dia 2: cordas 3 e 4', 'Dia 3: cordas 5 e 6', 'Dia 4: as seis, subindo', 'Dia 5: as seis, descendo', 'Dia 6: dizendo o nome em voz alta', 'Dia 7: com metrônomo a 72 BPM']
        },
        {
          t: 'erros', itens: [
            { erro: 'Mover a mão para alcançar uma casa.', certo: 'Na primeira posição a mão fica parada. Se precisa mover, o polegar está mal colocado.' },
            { erro: 'Usar sempre o dedo 1.', certo: 'Cada casa tem o seu dedo: 1 na casa 1, 2 na casa 2, 3 na casa 3.' },
            { erro: 'Procurar a nota no braço antes de tocar.', certo: 'Olhe a partitura, não a mão. O olhar na mão é a maior trava da leitura.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Primeira posição: dedo 1 na casa 1, dedo 2 na casa 2, dedo 3 na casa 3, dedo 4 na casa 4.',
            'São 17 notas naturais ao alcance da mão parada.',
            'Cordas que começam em Mi e Si usam a casa 1; as outras pulam para a casa 2.',
            'Diga o nome em voz alta enquanto toca: é o que fixa o mapa.'
          ]
        }
      ],
      quiz: [
        { texto: 'Na primeira posição, qual dedo toca a casa 3?', opcoes: ['O dedo 3', 'O dedo 1', 'O dedo 2', 'O polegar'], correta: 0, explicacao: 'Um dedo por casa, sem exceção.' },
        { texto: 'Qual nota fica na 5ª corda, casa 2?', opcoes: ['Si', 'Dó', 'Lá', 'Ré'], correta: 0, explicacao: 'A 5ª corda é Lá; dois semitons acima é Si.' },
        { texto: 'Por que a 5ª corda não tem nota natural na casa 1?', opcoes: ['Porque de Lá a Si há um tom, e a casa 1 cairia em Lá♯', 'Porque a corda é grossa', 'Porque o dedo 1 não alcança', 'Porque é uma convenção'], correta: 0, explicacao: 'Só as cordas Mi e Si têm natural na casa 1.' },
        { texto: 'Qual nota é a 4ª corda, casa 3?', opcoes: ['Fá', 'Mi', 'Sol', 'Ré'], correta: 0, explicacao: 'Ré (solta), Mi (casa 2), Fá (casa 3).' },
        { texto: 'Quantas notas naturais existem na primeira posição?', opcoes: ['17', '12', '21', '14'], correta: 0, explicacao: 'Contando as seis cordas soltas.' },
        { texto: 'Onde você deve olhar enquanto toca lendo?', opcoes: ['Na partitura', 'Na mão esquerda', 'Na mão direita', 'Alternando entre as duas mãos'], correta: 0, explicacao: 'Olhar na mão é a maior trava da leitura.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco as 17 notas naturais, subindo e descendo, sem procurar.',
          'Uso o dedo correto para cada casa.',
          'Minha mão não se move durante o exercício.',
          'Digo o nome de cada nota enquanto toco.',
          'Consigo 72 BPM com o metrônomo.'
        ],
        criterio: 'Você domina quando alguém diz um nome de nota e você toca na primeira posição sem hesitar.'
      }
    },

    // ---------------------------------------------------------------- 2.2.2
    {
      id: 'n2.2.2',
      titulo: 'Apoyando e tirando',
      resumo: 'Os dois toques fundamentais da mão direita.',
      minutos: 18,
      disciplinas: ['tecnica'],
      prereq: ['n1.4.3'],
      status: 'implementado',
      cobre: ['Técnica Apoyando', 'Técnica Tirando'],
      objetivo: 'Executar os dois toques com som correto e saber quando usar cada um.',
      blocos: [
        { t: 'p', x: 'A mão direita do violonista clássico tem dois toques básicos. Eles produzem sons diferentes e servem a propósitos diferentes. Dominar os dois é o que separa um som amador de um som profissional.' },
        { t: 'h', x: 'Tirando (toque livre)' },
        { t: 'p', x: 'O dedo toca a corda e *sai por cima* da corda vizinha, sem encostar nela. É o toque que você já usa desde o Nível 1.' },
        {
          t: 'passos', itens: [
            'Encoste a polpa do dedo na corda.',
            'Flexione a partir da junta grande, puxando a corda levemente para dentro.',
            'Deixe a corda escapar pela unha.',
            'O dedo recolhe *na direção da palma*, passando por cima da corda vizinha sem tocá-la.'
          ]
        },
        {
          t: 'comparar',
          a: { titulo: 'Quando usar tirando', itens: ['Arpejos (várias cordas soando juntas)', 'Acompanhamento', 'Qualquer situação em que a corda vizinha precisa continuar soando', 'Acordes'] },
          b: { titulo: 'Som do tirando', itens: ['Mais leve e transparente', 'Menos volume que o apoyando', 'Deixa todas as cordas livres para vibrar'] }
        },
        { t: 'h', x: 'Apoyando (toque apoiado)' },
        { t: 'p', x: 'O dedo toca a corda e *continua*, parando *apoiado na corda vizinha mais grave*. O movimento é mais horizontal, quase um empurrão para dentro do violão.' },
        {
          t: 'passos', itens: [
            'Encoste a polpa do dedo na corda, com o dedo um pouco mais esticado que no tirando.',
            'Empurre a corda *para dentro*, na direção do tampo, e siga em frente.',
            'O dedo atravessa e *pousa na corda seguinte*, parando ali.',
            'Deixe-o apoiado por um instante: é esse apoio que dá o som cheio.',
            'Volte à posição preparando o próximo toque.'
          ]
        },
        {
          t: 'comparar',
          a: { titulo: 'Quando usar apoyando', itens: ['Melodias que precisam se destacar', 'Escalas', 'Notas longas e expressivas', 'Quando a corda vizinha não precisa soar'] },
          b: { titulo: 'Som do apoyando', itens: ['Mais forte, cheio e redondo', 'Projeta mais na sala', 'Abafa a corda vizinha (é o preço)'] }
        },
        {
          t: 'aviso', x: 'O apoyando *abafa a corda mais grave vizinha*. Por isso ele não serve para arpejos: se você tocar a 1ª corda com apoyando, a 2ª corda que estava soando para na hora.'
        },
        { t: 'h', x: 'Exercício comparativo' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }], acorde: 'tirando' },
            { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }], acorde: 'apoyando' }
          ],
          legenda: 'Oito toques na 1ª corda solta: quatro livres, quatro apoiados. Grave e ouça a diferença de volume e de cor.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Escala com apoyando' },
        { t: 'p', x: 'A aplicação mais comum do apoyando são as escalas. A nota ganha corpo e as escalas soam cantantes, não "dedilhadas".' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[1, 3]], fig: 'minima', dedo: 'i' }, { pos: [[1, 0]], fig: 'minima', dedo: 'm' }] }
          ],
          legenda: 'Sol, Lá, Si, Dó, Ré, Mi, Fá, Sol. Toque tudo com apoyando, alternando i e m.',
          tocar: true, bpm: 76
        },
        {
          t: 'tocar', titulo: 'Confira a escala com apoyando',
          seq: [{ corda: 3, casa: 0 }, { corda: 3, casa: 2 }, { corda: 2, casa: 0 }, { corda: 2, casa: 1 }, { corda: 2, casa: 3 }, { corda: 1, casa: 0 }, { corda: 1, casa: 1 }, { corda: 1, casa: 3 }],
          rotulo: 'Escala de Sol, uma oitava',
          x: 'Use o toque apoiado em todas as notas. O som deve sair mais forte e mais cheio que o habitual.'
        },
        { t: 'metronomo', titulo: 'Escada de velocidade', bpm: 60, compasso: '4/4', x: 'Escala com apoyando, uma nota por clique. Meta do módulo: 100 BPM com som parelho.' },
        {
          t: 'erros', itens: [
            { erro: 'No apoyando, o dedo "bate" na corda vizinha com barulho.', certo: 'O dedo pousa, não bate. O movimento é contínuo e termina suave.' },
            { erro: 'Usar apoyando em arpejos.', certo: 'Apoyando abafa a corda vizinha. Em arpejo, use tirando.' },
            { erro: 'No tirando, o dedo esbarra na corda de cima.', certo: 'Recolha na direção da palma, não para cima.' },
            { erro: 'Apoyando com o dedo muito curvado.', certo: 'No apoyando o dedo fica um pouco mais esticado, e o movimento é mais horizontal.' },
            { erro: 'Fazer força para o apoyando soar forte.', certo: 'O volume vem da massa da corda deslocada e do apoio, não da força.' }
          ]
        },
        {
          t: 'check', chave: 'apoyando', titulo: 'Treino de 10 minutos',
          itens: ['2 min: 1ª corda solta, i–m com tirando', '2 min: 1ª corda solta, i–m com apoyando', '3 min: escala de Sol com apoyando', '2 min: arpejo p-i-m-a com tirando', '1 min: gravar e ouvir a diferença']
        },
        {
          t: 'resumo', itens: [
            'Tirando: o dedo sai por cima da corda vizinha. Para arpejos e acordes.',
            'Apoyando: o dedo pousa na corda vizinha mais grave. Para melodias e escalas.',
            'Apoyando dá mais volume e corpo, mas abafa a corda vizinha.',
            'No apoyando o dedo fica mais esticado e o movimento é mais horizontal.'
          ]
        }
      ],
      quiz: [
        { texto: 'No apoyando, onde o dedo termina?', opcoes: ['Apoiado na corda vizinha mais grave', 'No ar', 'Na palma da mão', 'Na mesma corda'], correta: 0, explicacao: 'Daí vem o nome: toque apoiado.' },
        { texto: 'Por que não se usa apoyando em arpejos?', opcoes: ['Porque ele abafa a corda vizinha que deveria continuar soando', 'Porque é mais lento', 'Porque dá menos volume', 'Porque cansa mais'], correta: 0, explicacao: 'Num arpejo todas as cordas precisam vibrar juntas.' },
        { texto: 'Qual toque produz mais volume?', opcoes: ['Apoyando', 'Tirando', 'Os dois iguais', 'Depende da corda'], correta: 0, explicacao: 'O apoio desloca mais massa de corda.' },
        { texto: 'Em que situação o tirando é obrigatório?', opcoes: ['Quando a corda vizinha precisa continuar soando', 'Em escalas', 'Em melodias lentas', 'Em notas longas'], correta: 0, explicacao: 'Arpejos e acordes.' },
        { texto: 'Como deve estar o dedo no apoyando?', opcoes: ['Um pouco mais esticado, com movimento mais horizontal', 'Bem curvado', 'Rígido', 'Igual ao tirando'], correta: 0, explicacao: 'O movimento atravessa a corda em vez de recolher.' },
        { texto: 'De onde vem o volume do apoyando?', opcoes: ['Da massa de corda deslocada e do apoio, não da força', 'Da força do dedo', 'Da unha comprida', 'Do braço'], correta: 0, explicacao: 'Força sobrando só deixa o som duro.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco quatro notas com tirando e quatro com apoyando, e a diferença é audível.',
          'No apoyando o dedo pousa sem barulho na corda vizinha.',
          'Toco a escala de Sol inteira com apoyando, som parelho.',
          'Sei explicar quando usar cada toque.'
        ],
        criterio: 'Você domina quando grava os dois toques e ouve claramente a diferença de volume e de cor, sem ruído parasita.'
      }
    },

    // ---------------------------------------------------------------- 2.2.3
    {
      id: 'n2.2.3',
      titulo: 'Cromáticos e independência dos dedos',
      resumo: 'O exercício que constrói a mão esquerda.',
      minutos: 16,
      disciplinas: ['tecnica'],
      prereq: ['n1.4.4', 'n2.1.6'],
      status: 'implementado',
      cobre: ['Exercícios cromáticos', 'Independência dos dedos'],
      objetivo: 'Ganhar independência e força nos quatro dedos da mão esquerda, especialmente no 3 e no 4.',
      blocos: [
        { t: 'p', x: 'O dedo 4 (mindinho) e o dedo 3 (anelar) compartilham tendões: na vida comum eles quase nunca se movem sozinhos. Tocar violão exige exatamente isso. Os exercícios cromáticos são o ginásio dessa independência.' },
        { t: 'h', x: 'A base: 1-2-3-4' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[6, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 4]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[5, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[5, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 4]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[4, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 4]], fig: 'seminima', dedo: 'm' }] }
          ],
          legenda: 'Dedos 1-2-3-4, corda por corda. Continue nas cordas 3, 2 e 1, e depois volte descendo 4-3-2-1.',
          tocar: true, bpm: 72
        },
        {
          t: 'dica', titulo: 'A regra que faz este exercício funcionar: ',
          x: 'não levante o dedo anterior. Toque com o 1 e deixe; ponha o 2 e deixe; ponha o 3 e deixe; ponha o 4. No fim os quatro estão na corda. Isso obriga cada dedo a trabalhar sem ajuda dos outros.'
        },
        { t: 'h', x: 'As permutações' },
        { t: 'p', x: 'Com quatro dedos existem 24 ordens possíveis. As mais úteis são as que juntam dedos "difíceis". Faça uma por semana:' },
        {
          t: 'tabela',
          cab: ['Ordem', 'O que treina'],
          linhas: [
            ['1-2-3-4', 'A base, movimento natural'],
            ['4-3-2-1', 'Descida: mais difícil do que parece'],
            ['1-3-2-4', 'Cruzamento, independência do 3'],
            ['2-4-1-3', 'Saltos, independência do 4'],
            ['1-4-2-3', 'Abertura entre 1 e 4'],
            ['3-1-4-2', 'A mais difícil de todas']
          ]
        },
        { t: 'h', x: 'Exercício de independência pura' },
        { t: 'p', x: 'Este não produz música nenhuma: produz mão. Ponha os quatro dedos na 1ª corda, casas 1, 2, 3 e 4, todos apertando ao mesmo tempo. Agora *levante só o dedo 3*, mantendo os outros três apertados. Abaixe. Levante só o 2. Abaixe. Levante só o 4. Dez vezes cada dedo.' },
        {
          t: 'aviso', x: 'Este exercício cansa rápido e é onde mais gente se machuca. Faça no máximo 2 minutos por dia, e pare na hora em que sentir qualquer dor.'
        },
        { t: 'h', x: 'Cromático com mudança de corda' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[6, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 2]], fig: 'colcheia', dedo: 'm' }, { pos: [[6, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[6, 4]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 4]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[4, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 4]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 4]], fig: 'colcheia', dedo: 'm' }] }
          ],
          legenda: 'Alternando entre duas cordas. Isso treina a mão direita a cruzar e a esquerda a manter a forma.',
          tocar: true, bpm: 72
        },
        { t: 'metronomo', titulo: 'Escada de velocidade do cromático', bpm: 60, compasso: '4/4', x: 'Uma nota por clique. Só suba 6 BPM depois de um minuto inteiro sem nenhuma nota suja.' },
        {
          t: 'tocar', titulo: 'Confira 1-2-3-4',
          seq: [{ corda: 6, casa: 1 }, { corda: 6, casa: 2 }, { corda: 6, casa: 3 }, { corda: 6, casa: 4 }],
          rotulo: 'Cromático na 6ª corda',
          x: 'Fá, Fá♯, Sol, Sol♯. Mantenha os dedos anteriores apoiados.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Levantar o dedo anterior a cada nota.', certo: 'Deixe apoiado. É essa restrição que cria a independência.' },
            { erro: 'Puxar a mão para alcançar a casa 4.', certo: 'Ajuste o polegar e o ângulo do braço do violão. A mão não se move.' },
            { erro: 'Fazer o exercício rápido demais, com notas sujas.', certo: 'Devagar e limpo vale dez vezes mais. O cromático sujo ensina a sujeira.' },
            { erro: 'Fazer 20 minutos de cromático de uma vez.', certo: 'Cinco minutos por dia, todo dia. O resto do tempo é para música.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O cromático 1-2-3-4 é o exercício central da mão esquerda.',
            'Não levante o dedo anterior: é essa restrição que gera independência.',
            'Faça as permutações, uma por semana.',
            'Devagar e limpo; suba a velocidade em degraus.',
            'Cinco minutos por dia bastam. Pare se doer.'
          ]
        }
      ],
      quiz: [
        { texto: 'No cromático, o que fazer com o dedo anterior?', opcoes: ['Deixá-lo apoiado na corda', 'Levantá-lo imediatamente', 'Movê-lo para a próxima casa', 'Tirá-lo do braço'], correta: 0, explicacao: 'A restrição é o que cria a independência.' },
        { texto: 'Por que os dedos 3 e 4 são os mais difíceis?', opcoes: ['Porque compartilham tendões e quase nunca se movem sozinhos', 'Porque são mais curtos', 'Porque ficam mais longe da pestana', 'Porque têm menos força de nascença'], correta: 0, explicacao: 'É exatamente essa limitação que o exercício trabalha.' },
        { texto: 'Quanto tempo de cromático por dia é recomendado?', opcoes: ['Cerca de 5 minutos', '30 minutos', '1 hora', '2 minutos por semana'], correta: 0, explicacao: 'Todo dia, pouco. O resto do tempo é para música.' },
        { texto: 'Quando subir a velocidade no metrônomo?', opcoes: ['Depois de um minuto inteiro sem nenhuma nota suja', 'A cada sessão', 'Quando acertar uma vez', 'Nunca'], correta: 0, explicacao: 'Cromático sujo ensina a sujeira.' },
        { texto: 'Se o dedo 4 não alcança a casa 4, o que verificar?', opcoes: ['A posição do polegar e o ângulo do braço do violão', 'A afinação', 'A corda', 'O tamanho da mão'], correta: 0, explicacao: 'Quase sempre é postural, não anatômico.' },
        { texto: 'Qual permutação é citada como a mais difícil?', opcoes: ['3-1-4-2', '1-2-3-4', '4-3-2-1', '1-3-2-4'], correta: 0, explicacao: 'Cruza os dois pares mais dependentes.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco 1-2-3-4 nas seis cordas com todas as notas limpas.',
          'Mantenho os dedos anteriores apoiados.',
          'Minha mão não se desloca durante o exercício.',
          'Toco pelo menos uma permutação além da básica.',
          'Chego a 80 BPM, uma nota por clique.'
        ],
        criterio: 'Você domina quando o cromático sai limpo nas seis cordas a 80 BPM, sem a mão se mover.'
      }
    },

    // ---------------------------------------------------------------- 2.2.4
    {
      id: 'n2.2.4',
      titulo: 'Arpejos simples',
      resumo: 'Os padrões da mão direita que sustentam quase todo o repertório.',
      minutos: 18,
      disciplinas: ['tecnica'],
      prereq: ['n1.4.2', 'n2.2.2'],
      status: 'implementado',
      cobre: ['Arpejos simples'],
      objetivo: 'Executar os padrões básicos de arpejo com regularidade, som parelho e sem olhar a mão.',
      blocos: [
        { t: 'p', x: 'Arpejo é tocar as notas de um acorde *uma de cada vez*, em sequência, deixando todas soarem juntas. É a textura mais característica do violão e a base de praticamente todo acompanhamento.' },
        { t: 'h', x: 'A regra de ouro' },
        {
          t: 'dica', x: 'Em arpejo, use sempre *tirando*. E, o mais importante: *prepare o dedo antes*. Enquanto uma nota soa, o próximo dedo já está encostado na sua corda, esperando. Essa preparação é o que faz o arpejo soar regular.'
        },
        { t: 'h', x: 'Padrão 1: p-i-m-a' },
        { t: 'p', x: 'O mais simples e o mais usado: baixo com o polegar e as três agudas subindo.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am (cordas soltas)' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Em (cordas soltas)' }
          ],
          legenda: 'Com as cordas soltas, sem a mão esquerda: toda a atenção na direita.',
          tocar: true, bpm: 80
        },
        { t: 'h', x: 'Padrão 2: p-a-m-i (descendo)' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }] }
          ],
          legenda: 'Descendo é mais difícil: o anelar é o dedo mais fraco e aqui ele ataca primeiro.',
          tocar: true, bpm: 80
        },
        { t: 'h', x: 'Padrão 3: p-i-m-a-m-i (seis notas)' },
        { t: 'p', x: 'Sobe e desce dentro do mesmo acorde. É o padrão de valsa e de muitos estudos clássicos.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }] }
          ],
          legenda: 'Seis colcheias: cabe exatamente num compasso 3/4 ou em meio compasso 6/8.',
          tocar: true, bpm: 90
        },
        { t: 'h', x: 'Padrão 4: baixo alternado' },
        { t: 'p', x: 'O polegar não fica na mesma corda: ele alterna entre duas cordas graves, criando movimento na base.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] }
          ],
          legenda: '6ª e 4ª cordas alternando no polegar. Essa é a base do dedilhado de canção.',
          tocar: true, bpm: 84
        },
        { t: 'h', x: 'Agora com acordes de verdade' },
        { t: 'acorde', lista: [
          { nome: 'Am', desc: 'Lá menor', cordas: [-1, 0, 2, 2, 1, 0], dedos: [0, 0, 2, 3, 1, 0] },
          { nome: 'E', desc: 'Mi maior', cordas: [0, 2, 2, 1, 0, 0], dedos: [0, 2, 3, 1, 0, 0] },
          { nome: 'Dm', desc: 'Ré menor', cordas: [-1, -1, 0, 2, 3, 1], dedos: [0, 0, 0, 2, 3, 1] }
        ], legenda: 'Três acordes que combinam bem e cabem na primeira posição. Toque o botão para ouvir cada um.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'E' },
            { notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }], acorde: 'Dm' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 0]], fig: 'minima', dedo: 'p' }], acorde: 'E' }
          ],
          legenda: 'Am – E – Dm – E, com arpejo p-i-m-a. Quatro compassos que já são música.',
          tocar: true, bpm: 76
        },
        { t: 'metronomo', titulo: 'Arpejo no tempo', bpm: 66, compasso: '4/4', x: 'Duas notas por clique (colcheias). Procure fazer as quatro notas do arpejo soarem com o mesmo volume.' },
        {
          t: 'erros', itens: [
            { erro: 'Esperar a nota acabar para preparar o próximo dedo.', certo: 'Prepare durante. O dedo seguinte já está na corda enquanto a anterior soa.' },
            { erro: 'O anelar sai mais fraco que os outros.', certo: 'Normal. Toque o arpejo lentamente só prestando atenção no "a", até ele igualar.' },
            { erro: 'A mão balança junto com os dedos.', certo: 'A mão é a plataforma: só os dedos se movem.' },
            { erro: 'Trocar de acorde e o arpejo parar.', certo: 'Treine a troca separado, sem tocar: só monte o acorde seguinte no tempo.' }
          ]
        },
        {
          t: 'check', chave: 'arpejos', titulo: 'Rotina de 12 minutos',
          itens: ['3 min: p-i-m-a nas cordas soltas', '2 min: p-a-m-i', '2 min: p-i-m-a-m-i', '2 min: baixo alternado', '3 min: a sequência Am–E–Dm–E']
        },
        {
          t: 'resumo', itens: [
            'Arpejo = notas do acorde uma de cada vez, todas soando juntas. Use tirando.',
            'Prepare o dedo seguinte enquanto a nota anterior soa.',
            'Quatro padrões básicos: p-i-m-a, p-a-m-i, p-i-m-a-m-i e baixo alternado.',
            'O anelar costuma sair mais fraco: trabalhe-o em separado.',
            'A mão fica parada; só os dedos se movem.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual toque se usa em arpejos?', opcoes: ['Tirando (livre)', 'Apoyando (apoiado)', 'Os dois alternados', 'Depende da corda'], correta: 0, explicacao: 'O apoyando abafaria a corda vizinha.' },
        { texto: 'Qual é o segredo da regularidade no arpejo?', opcoes: ['Preparar o dedo seguinte enquanto a nota anterior soa', 'Tocar mais forte', 'Usar o polegar em todas', 'Tocar rápido'], correta: 0, explicacao: 'A preparação elimina a hesitação.' },
        { texto: 'No padrão p-i-m-a, que corda o "a" toca normalmente?', opcoes: ['A 1ª', 'A 2ª', 'A 3ª', 'A 6ª'], correta: 0, explicacao: 'i na 3ª, m na 2ª, a na 1ª.' },
        { texto: 'O que é baixo alternado?', opcoes: ['O polegar alterna entre duas cordas graves', 'Os dedos alternam entre duas cordas agudas', 'O acorde muda a cada nota', 'O apoyando alternando com tirando'], correta: 0, explicacao: 'Cria movimento na base do acompanhamento.' },
        { texto: 'Qual dedo costuma soar mais fraco no arpejo?', opcoes: ['O anelar (a)', 'O polegar (p)', 'O indicador (i)', 'O médio (m)'], correta: 0, explicacao: 'É o menos usado no dia a dia.' },
        { texto: 'Quantas colcheias tem o padrão p-i-m-a-m-i?', opcoes: ['Seis', 'Quatro', 'Oito', 'Três'], correta: 0, explicacao: 'Cabe num compasso 3/4.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco p-i-m-a com as quatro notas no mesmo volume.',
          'Preparo o dedo seguinte durante a nota anterior.',
          'Toco os quatro padrões sem olhar a mão direita.',
          'Toco a sequência Am–E–Dm–E sem parar entre os acordes.',
          'Consigo 66 BPM com duas notas por clique.'
        ],
        criterio: 'Você domina quando o arpejo soa regular, com volume parelho, e você consegue trocar de acorde sem interromper o padrão.'
      }
    },

    // ---------------------------------------------------------------- 2.2.5
    {
      id: 'n2.2.5',
      titulo: 'Escalas de uma oitava',
      resumo: 'Dó, Sol, Ré e Lá maiores na primeira posição.',
      minutos: 16,
      disciplinas: ['tecnica', 'teoria'],
      prereq: ['n2.1.7', 'n2.2.2'],
      status: 'implementado',
      cobre: ['Escalas de uma oitava'],
      objetivo: 'Tocar quatro escalas maiores com digitação correta, apoyando e no tempo.',
      blocos: [
        { t: 'p', x: 'Escalas não são castigo: são o vocabulário. Praticamente toda melodia é feita de pedaços de escala. Quem treina escalas lê mais rápido, erra menos e toca mais afinado.' },
        { t: 'h', x: 'Como estudar uma escala' },
        {
          t: 'passos', itens: [
            'Primeiro só a mão esquerda, sem tocar: ponha os dedos na sequência e confira a posição.',
            'Depois devagar, com *apoyando* e alternando i e m.',
            'Diga o nome de cada nota em voz alta.',
            'Suba e desça. Descer é sempre mais difícil.',
            'Só então ligue o metrônomo e comece a escada de velocidade.'
          ]
        },
        { t: 'h', x: 'Dó maior' },
        { t: 'braco', casas: 5, notas: [
          { corda: 5, casa: 3, rotulo: '1', classe: 'raiz' }, { corda: 4, casa: 0, rotulo: '2' }, { corda: 4, casa: 2, rotulo: '3' }, { corda: 4, casa: 3, rotulo: '4' },
          { corda: 3, casa: 0, rotulo: '5' }, { corda: 3, casa: 2, rotulo: '6' }, { corda: 2, casa: 0, rotulo: '7' }, { corda: 2, casa: 1, rotulo: '8', classe: 'raiz' }
        ], tocar: true, bpm: 96, legenda: 'Dó maior. Dedos da mão esquerda: 3 · 0 2 3 · 0 2 · 0 1.' },
        { t: 'pauta', txt: 'c4 d4 e4 f4 | g4 a4 b4 c5 | c5 b4 a4 g4 | f4 e4 d4 c4', formula: [4, 4], nomes: true, tocar: true, bpm: 84, legenda: 'A mesma escala na pauta, subindo e descendo.' },
        { t: 'h', x: 'Sol maior' },
        { t: 'braco', casas: 5, notas: [
          { corda: 6, casa: 3, rotulo: '1', classe: 'raiz' }, { corda: 5, casa: 0, rotulo: '2' }, { corda: 5, casa: 2, rotulo: '3' }, { corda: 5, casa: 3, rotulo: '4' },
          { corda: 4, casa: 0, rotulo: '5' }, { corda: 4, casa: 2, rotulo: '6' }, { corda: 4, casa: 4, rotulo: '7' }, { corda: 3, casa: 0, rotulo: '8', classe: 'raiz' }
        ], tocar: true, bpm: 96, legenda: 'Sol maior. O 7º grau é Fá♯: 4ª corda, casa 4, com o dedo 4. Dedos: 3 · 0 2 3 · 0 2 4 · 0.' },
        { t: 'pauta', txt: 'g3 a3 b3 c4 | d4 e4 f4 g4', armadura: 1, formula: [4, 4], nomes: true, tocar: true, bpm: 84, legenda: 'Sol maior escrita. A armadura com um sustenido cuida do Fá♯.' },
        { t: 'h', x: 'Ré maior' },
        { t: 'braco', casas: 5, notas: [
          { corda: 4, casa: 0, rotulo: '1', classe: 'raiz' }, { corda: 4, casa: 2, rotulo: '2' }, { corda: 4, casa: 4, rotulo: '3' }, { corda: 3, casa: 0, rotulo: '4' },
          { corda: 3, casa: 2, rotulo: '5' }, { corda: 2, casa: 0, rotulo: '6' }, { corda: 2, casa: 2, rotulo: '7' }, { corda: 2, casa: 3, rotulo: '8', classe: 'raiz' }
        ], tocar: true, bpm: 96, legenda: 'Ré maior. Dois sustenidos: Fá♯ (4ª/4) e Dó♯ (2ª/2). Dedos: 0 2 4 · 0 2 · 0 2 3.' },
        { t: 'h', x: 'Lá maior' },
        { t: 'braco', casas: 5, notas: [
          { corda: 5, casa: 0, rotulo: '1', classe: 'raiz' }, { corda: 5, casa: 2, rotulo: '2' }, { corda: 5, casa: 4, rotulo: '3' }, { corda: 4, casa: 0, rotulo: '4' },
          { corda: 4, casa: 2, rotulo: '5' }, { corda: 4, casa: 4, rotulo: '6' }, { corda: 3, casa: 1, rotulo: '7' }, { corda: 3, casa: 2, rotulo: '8', classe: 'raiz' }
        ], tocar: true, bpm: 96, legenda: 'Lá maior. Três sustenidos: Dó♯ (5ª/4), Fá♯ (4ª/4) e Sol♯ (3ª/1). Dedos: 0 2 4 · 0 2 4 · 1 2.' },
        {
          t: 'tocar', titulo: 'Confira a escala de Sol',
          seq: [{ corda: 6, casa: 3 }, { corda: 5, casa: 0 }, { corda: 5, casa: 2 }, { corda: 5, casa: 3 }, { corda: 4, casa: 0 }, { corda: 4, casa: 2 }, { corda: 4, casa: 4 }, { corda: 3, casa: 0 }],
          rotulo: 'Sol maior, uma oitava',
          x: 'Toque com apoyando e alternância i–m.'
        },
        { t: 'metronomo', titulo: 'Escada de velocidade', bpm: 60, compasso: '4/4', x: 'Uma nota por clique até 100 BPM. Depois, duas notas por clique a partir de 60.' },
        {
          t: 'tabela',
          cab: ['Escala', 'Sustenidos', 'Começa em'],
          linhas: [
            ['Dó maior', 'nenhum', '5ª corda, casa 3'],
            ['Sol maior', 'Fá♯', '6ª corda, casa 3'],
            ['Ré maior', 'Fá♯, Dó♯', '4ª corda solta'],
            ['Lá maior', 'Fá♯, Dó♯, Sol♯', '5ª corda solta']
          ],
          legenda: 'Repare: cada nova escala acrescenta exatamente um sustenido. Isso não é coincidência — é o ciclo das quintas, que você estuda no Nível 3.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar a escala só subindo.', certo: 'Descer é mais difícil e é onde os erros aparecem. Sempre faça os dois sentidos.' },
            { erro: 'Esquecer os sustenidos da armadura.', certo: 'Antes de tocar, diga em voz alta quais notas são alteradas nessa escala.' },
            { erro: 'Treinar escala sem metrônomo.', certo: 'Escala desigual não serve para nada. O metrônomo denuncia.' },
            { erro: 'Usar tirando.', certo: 'Escalas pedem apoyando: é ele que dá o som cantado.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Quatro escalas maiores em uma oitava: Dó, Sol, Ré e Lá.',
            'Toque com apoyando e alternância i–m, sempre subindo e descendo.',
            'Diga o nome das notas e dos sustenidos antes de começar.',
            'Cada escala nova acrescenta um sustenido: é o ciclo das quintas aparecendo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual toque se usa nas escalas?', opcoes: ['Apoyando', 'Tirando', 'Só o polegar', 'Palheta'], correta: 0, explicacao: 'O apoyando dá o som cantado da melodia.' },
        { texto: 'Em que corda e casa começa a escala de Sol maior?', opcoes: ['6ª corda, casa 3', '3ª corda solta', '5ª corda, casa 3', '4ª corda solta'], correta: 0, explicacao: 'Sol grave, com o dedo 3.' },
        { texto: 'Quantos sustenidos tem Ré maior?', opcoes: ['Dois', 'Um', 'Três', 'Nenhum'], correta: 0, explicacao: 'Fá♯ e Dó♯.' },
        { texto: 'Por que sempre descer a escala também?', opcoes: ['Porque descer é mais difícil e é onde os erros aparecem', 'Porque é mais bonito', 'Porque economiza tempo', 'Não é necessário'], correta: 0, explicacao: 'Levantar dedos de forma ordenada é mais difícil que baixá-los.' },
        { texto: 'Quais são os sustenidos de Lá maior?', opcoes: ['Fá♯, Dó♯ e Sol♯', 'Fá♯ e Dó♯', 'Só Fá♯', 'Fá♯, Dó♯, Sol♯ e Ré♯'], correta: 0, explicacao: 'Três sustenidos.' },
        { texto: 'O que acontece a cada nova escala da sequência Dó, Sol, Ré, Lá?', opcoes: ['Acrescenta-se exatamente um sustenido', 'Troca-se o sustenido', 'Acrescentam-se dois sustenidos', 'Nada muda'], correta: 0, explicacao: 'É o ciclo das quintas.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco Dó e Sol maiores subindo e descendo, com apoyando.',
          'Uso a digitação correta da mão esquerda.',
          'Digo os sustenidos da escala antes de tocar.',
          'Chego a 88 BPM com uma nota por clique, som parelho.',
          'Conheço o desenho de Ré e Lá maiores no braço.'
        ],
        criterio: 'Você domina quando Dó e Sol saem limpas nos dois sentidos, no tempo, sem olhar o diagrama.'
      }
    },

    // ---------------------------------------------------------------- 2.2.6
    {
      id: 'n2.2.6',
      titulo: 'Mudanças de posição',
      resumo: 'Sair da primeira posição sem perder o tempo nem a afinação.',
      minutos: 14,
      disciplinas: ['tecnica'],
      prereq: ['n2.2.1'],
      status: 'implementado',
      cobre: ['Mudanças de posição', 'Sincronização entre as mãos'],
      objetivo: 'Deslocar a mão esquerda pelo braço com precisão e sem interromper o som.',
      blocos: [
        { t: 'p', x: 'A *posição* é definida pela casa em que o dedo 1 trabalha. Se o dedo 1 está na casa 5, você está na 5ª posição. Mudar de posição é deslizar a mão inteira para outra região do braço.' },
        { t: 'h', x: 'As três regras da mudança' },
        {
          t: 'passos', itens: [
            '*O polegar vai junto, e vai primeiro.* Ele é o guia: se ficar para trás, o punho torce e a mão não chega.',
            '*Alivie a pressão antes de deslizar.* O dedo não solta a corda, mas para de apertar. Assim você desliza sem chiado e sem perder o contato.',
            '*Use o tempo da nota anterior.* A mudança acontece durante a última nota da posição antiga, não depois dela.'
          ]
        },
        {
          t: 'dica', x: 'Existe um dedo-guia em quase toda mudança: um dedo que já está na corda certa e simplesmente desliza até a nova casa. Encontre esse dedo antes de treinar a passagem; ele faz todo o trabalho.'
        },
        { t: 'h', x: 'Exercício 1: deslizar na mesma corda' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 1]], fig: 'minima', dedo: 'i' }, { pos: [[1, 5]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[1, 5]], fig: 'minima', dedo: 'i' }, { pos: [[1, 1]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'minima', dedo: 'i' }, { pos: [[2, 5]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 5]], fig: 'minima', dedo: 'i' }, { pos: [[2, 1]], fig: 'minima', dedo: 'm' }] }
          ],
          legenda: 'Dedo 1 da casa 1 para a casa 5 e de volta, deslizando sem levantar. Escute: não pode haver chiado.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Exercício 2: a escada de posições' },
        { t: 'p', x: 'Toque quatro notas cromáticas (dedos 1-2-3-4), depois desloque a mão uma casa para a frente e repita. Vá até a casa 9 e volte.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 2]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 4]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 4]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 5]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[1, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 4]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 6]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 4]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 5]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 6]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 7]], fig: 'colcheia', dedo: 'm' }] }
          ],
          legenda: 'A mão sobe uma casa a cada grupo de quatro. Continue até a casa 9 e depois desça.',
          tocar: true, bpm: 72
        },
        { t: 'braco', casas: 12, notas: [
          { corda: 1, casa: 1, rotulo: '1' }, { corda: 1, casa: 4, rotulo: '4' },
          { corda: 1, casa: 5, rotulo: '1', classe: 'raiz' }, { corda: 1, casa: 8, rotulo: '4', classe: 'raiz' }
        ], legenda: 'Primeira posição (dedo 1 na casa 1) e quinta posição (dedo 1 na casa 5). A mão inteira se desloca quatro casas.' },
        { t: 'h', x: 'Sincronizar as duas mãos na mudança' },
        { t: 'p', x: 'O erro mais audível é a mão direita tocar antes de a esquerda chegar. O resultado é uma nota "arranhada" ou errada. A solução é sempre a mesma: *a esquerda chega primeiro*.' },
        { t: 'metronomo', titulo: 'Mudança no tempo', bpm: 50, compasso: '4/4', x: 'Toque a casa 1 no clique 1 e a casa 5 no clique 3. Use os cliques 2 e 4 para deslizar. Depois reduza o tempo de preparo.' },
        {
          t: 'tocar', titulo: 'Confira a mudança de posição',
          seq: [{ corda: 1, casa: 1 }, { corda: 1, casa: 5 }, { corda: 1, casa: 1 }, { corda: 1, casa: 5 }],
          rotulo: 'Casa 1 e casa 5, alternando',
          x: 'Deslize o dedo 1 entre as casas 1 e 5, aliviando a pressão durante o movimento.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Levantar a mão e "pular" para a nova posição.', certo: 'Deslize mantendo o contato leve. O deslize é mais preciso e mais rápido.' },
            { erro: 'O polegar fica para trás.', certo: 'Ele vai junto, e de preferência inicia o movimento.' },
            { erro: 'Chiado alto ao deslizar.', certo: 'Alivie a pressão. Um chiado leve é inevitável e até faz parte do som do violão; um chiado forte é pressão demais.' },
            { erro: 'Fazer a mudança depois da nota.', certo: 'A mudança acontece durante o valor da nota anterior.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'A posição é definida pela casa do dedo 1.',
            'O polegar vai junto e inicia o movimento.',
            'Alivie a pressão antes de deslizar, sem perder o contato.',
            'A mudança acontece durante a nota anterior, não depois.',
            'Procure sempre o dedo-guia da passagem.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que define a posição da mão esquerda?', opcoes: ['A casa em que o dedo 1 trabalha', 'A casa do polegar', 'A corda escolhida', 'A casa do dedo 4'], correta: 0, explicacao: 'Dedo 1 na casa 5 = quinta posição.' },
        { texto: 'O que o polegar faz numa mudança de posição?', opcoes: ['Vai junto, de preferência iniciando o movimento', 'Fica parado', 'Sobe para o braço', 'Solta o braço'], correta: 0, explicacao: 'Se ficar para trás, o punho torce.' },
        { texto: 'Quando a mudança deve acontecer?', opcoes: ['Durante o valor da nota anterior', 'Depois da nota anterior', 'No silêncio seguinte', 'Junto com a nota nova'], correta: 0, explicacao: 'Assim não há buraco no tempo.' },
        { texto: 'Por que aliviar a pressão ao deslizar?', opcoes: ['Para não chiar e manter o contato com a corda', 'Para o som sair mais forte', 'Para economizar força', 'Para mudar o timbre'], correta: 0, explicacao: 'Sem pressão, o deslize é silencioso e preciso.' },
        { texto: 'O que é um dedo-guia?', opcoes: ['Um dedo já na corda certa que desliza até a nova casa', 'O polegar', 'O dedo 4', 'O dedo que toca primeiro na nova posição'], correta: 0, explicacao: 'Ele carrega a mão inteira para o lugar certo.' },
        { texto: 'Qual mão deve chegar primeiro na nota nova?', opcoes: ['A esquerda', 'A direita', 'As duas juntas', 'Depende do andamento'], correta: 0, explicacao: 'Senão a nota sai arranhada ou errada.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Deslizo o dedo 1 entre as casas 1 e 5 sem chiado forte.',
          'Meu polegar acompanha a mão.',
          'Faço a escada de posições até a casa 9 e volto.',
          'A nota nova sai limpa, sem a direita chegar antes.'
        ],
        criterio: 'Você domina quando muda de posição no tempo, sem buraco e sem nota arranhada.'
      }
    },

    // ---------------------------------------------------------------- 2.2.7
    {
      id: 'n2.2.7',
      titulo: 'Ligados: martelo e arrancado',
      resumo: 'Fazer a mão esquerda produzir som sozinha.',
      minutos: 16,
      disciplinas: ['tecnica'],
      prereq: ['n2.1.3', 'n2.2.3'],
      status: 'implementado',
      cobre: ['Ligados ascendentes e descendentes'],
      objetivo: 'Executar ligados ascendentes e descendentes com som audível e parelho.',
      blocos: [
        { t: 'p', x: 'No ligado, a mão direita toca uma nota só e a mão esquerda produz a seguinte. Isso serve para três coisas: tocar passagens rápidas demais para a mão direita, dar um som mais ligado e expressivo, e economizar movimento.' },
        { t: 'h', x: 'Ligado ascendente: o martelo' },
        {
          t: 'passos', itens: [
            'Toque a 1ª corda solta com a mão direita.',
            'Com a corda ainda soando, deixe o *dedo 1 cair na casa 1* — com firmeza e de cima, como um martelinho.',
            'O dedo deve cair *na ponta*, perto do traste, e ficar lá.',
            'A corda não para de vibrar: ela passa a vibrar no comprimento menor, e a nota sobe.',
            'A força vem da *queda rápida*, não da pressão depois.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 1]], fig: 'seminima', texto: 'martelo' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 3]], fig: 'seminima', texto: 'martelo' }] },
            { notas: [{ pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', texto: 'martelo' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 3]], fig: 'seminima', texto: 'martelo' }] }
          ],
          legenda: 'A mão direita toca só a 1ª e a 3ª notas de cada compasso. As outras saem do martelo.',
          tocar: true, bpm: 66
        },
        { t: 'h', x: 'Ligado descendente: o arrancado' },
        { t: 'p', x: 'Aqui o erro clássico é só *levantar* o dedo. Levantar não produz som nenhum. O dedo precisa *puxar a corda de lado* ao sair, como se estivesse tocando com a mão esquerda.' },
        {
          t: 'passos', itens: [
            'Ponha o dedo 1 na casa 1 e o dedo 3 na casa 3 da 1ª corda, ao mesmo tempo.',
            'Toque com a mão direita: soa a nota da casa 3.',
            'Agora *puxe o dedo 3 para baixo e para fora*, arrancando a corda.',
            'A corda, ainda vibrando, encontra o dedo 1 já posicionado e soa a nota da casa 1.',
            'Se o dedo 1 não estiver lá antes, a corda fica solta e sai a nota errada.'
          ]
        },
        {
          t: 'aviso', x: 'A regra que resolve 90% dos arrancados: *o dedo de destino já tem que estar na corda* antes de você arrancar. Prepare os dois dedos juntos.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 1]], fig: 'seminima', texto: 'arranca' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', texto: 'arranca' }] },
            { notas: [{ pos: [[2, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', texto: 'arranca' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', texto: 'arranca' }] }
          ],
          legenda: 'O dedo 1 fica preparado na casa 1 enquanto o dedo 3 toca a casa 3 e depois arranca.',
          tocar: true, bpm: 66
        },
        { t: 'h', x: 'Ligados combinados' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'mart' }, { pos: [[1, 3]], fig: 'colcheia', texto: 'mart' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'arr' }, { pos: [[1, 0]], fig: 'colcheia', texto: 'arr' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'mart' }, { pos: [[1, 3]], fig: 'colcheia', texto: 'mart' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'arr' }] }
          ],
          legenda: 'Oito notas, um único ataque da mão direita. Este é o poder do ligado.',
          tocar: true, bpm: 60
        },
        {
          t: 'tocar', titulo: 'Confira o martelo',
          seq: [{ corda: 1, casa: 0, rotulo: 'Mi (toque)' }, { corda: 1, casa: 1, rotulo: 'Fá (martelo)' }, { corda: 1, casa: 3, rotulo: 'Sol (martelo)' }],
          rotulo: 'Martelo na 1ª corda',
          x: 'Toque a corda solta e martele as casas 1 e 3 sem tocar de novo. O app só reconhece se o martelo soar de verdade.'
        },
        { t: 'metronomo', titulo: 'Ligados no tempo', bpm: 54, compasso: '4/4', x: 'Toque no clique 1 e martele no clique 2. Depois faça duas por clique.' },
        {
          t: 'erros', itens: [
            { erro: 'O martelo sai fraco.', certo: 'A força vem da velocidade da queda, não da pressão. Levante mais o dedo antes de bater.' },
            { erro: 'O arrancado não soa.', certo: 'Você está só levantando. Puxe a corda de lado ao sair.' },
            { erro: 'Depois do arrancado sai a corda solta.', certo: 'O dedo de destino não estava preparado. Ponha os dois dedos juntos antes.' },
            { erro: 'O ligado sai mais fraco que a nota tocada.', certo: 'Normal no começo. Treine devagar até o volume igualar. Nunca compense tocando a primeira nota mais forte.' },
            { erro: 'Treinar ligado muito tempo seguido.', certo: 'Cansa muito a mão esquerda. 3 a 4 minutos por dia bastam.' }
          ]
        },
        {
          t: 'check', chave: 'ligados', titulo: 'Treino diário (4 minutos)',
          itens: ['1 min: martelo 0→1 e 0→3 na 1ª corda', '1 min: martelo nas seis cordas', '1 min: arrancado 3→1 e 1→0', '1 min: combinado, oito notas num ataque']
        },
        {
          t: 'resumo', itens: [
            'Martelo (ligado ascendente): o dedo cai rápido e de cima, na ponta, perto do traste.',
            'Arrancado (ligado descendente): o dedo puxa a corda de lado ao sair.',
            'No arrancado, o dedo de destino precisa estar preparado antes.',
            'A força vem da velocidade, não da pressão.',
            'Treine pouco por dia: a mão esquerda cansa rápido.'
          ]
        }
      ],
      quiz: [
        { texto: 'No ligado ascendente, de onde vem o som?', opcoes: ['Da queda rápida do dedo da mão esquerda', 'Da mão direita', 'Da pressão depois da queda', 'Do polegar'], correta: 0, explicacao: 'Por isso se chama martelo.' },
        { texto: 'No arrancado, o que o dedo faz?', opcoes: ['Puxa a corda de lado ao sair', 'Só levanta', 'Desliza para a casa anterior', 'Pressiona mais forte'], correta: 0, explicacao: 'Levantar sozinho não produz som.' },
        { texto: 'O que precisa estar pronto antes de um arrancado?', opcoes: ['O dedo da nota de destino, já na corda', 'A mão direita', 'O polegar atrás', 'O metrônomo'], correta: 0, explicacao: 'Senão sai a corda solta em vez da nota certa.' },
        { texto: 'O martelo saiu fraco. O que corrigir?', opcoes: ['A velocidade da queda do dedo', 'A pressão depois da queda', 'A posição do polegar direito', 'A afinação'], correta: 0, explicacao: 'Levante mais o dedo antes de bater.' },
        { texto: 'Para que servem os ligados?', opcoes: ['Tocar passagens rápidas, ligar o som e economizar movimento', 'Aumentar o volume', 'Afinar melhor', 'Marcar o tempo'], correta: 0, explicacao: 'São essenciais no repertório clássico.' },
        { texto: 'Quanto tempo de ligados por dia?', opcoes: ['3 a 4 minutos', '20 minutos', '1 hora', 'Uma vez por semana'], correta: 0, explicacao: 'Cansa muito a mão esquerda.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Faço um martelo audível da corda solta para a casa 1.',
          'Faço um arrancado audível da casa 3 para a casa 1.',
          'O dedo de destino está sempre preparado antes do arrancado.',
          'Toco oito notas ligadas com um único ataque da mão direita.',
          'O volume do ligado está próximo do volume da nota tocada.'
        ],
        criterio: 'Você domina quando os dois ligados soam com volume parecido ao da nota tocada pela mão direita.'
      }
    },

    // ---------------------------------------------------------------- 2.2.8
    {
      id: 'n2.2.8',
      titulo: 'Controle de intensidade',
      resumo: 'Tocar forte, fraco e tudo que está no meio, de propósito.',
      minutos: 14,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n2.2.2'],
      status: 'implementado',
      cobre: ['Controle de intensidade'],
      objetivo: 'Controlar o volume de cada nota conscientemente e separar melodia de acompanhamento.',
      blocos: [
        { t: 'p', x: 'Um iniciante toca tudo no mesmo volume. Um músico decide o volume de cada nota. Essa é, talvez, a maior diferença audível entre os dois — maior até do que a velocidade.' },
        { t: 'h', x: 'De onde vem o volume' },
        {
          t: 'tabela',
          cab: ['O que muda o volume', 'Como'],
          linhas: [
            ['Velocidade do dedo', 'Dedo mais rápido na corda = mais volume. É o principal controle.'],
            ['Quantidade de corda deslocada', 'Afundar mais a corda antes de soltar dá mais corpo.'],
            ['Tipo de toque', 'Apoyando dá mais volume que tirando.'],
            ['Ponto de ataque', 'Perto do cavalete: mais brilho e projeção. Perto do braço: mais doce e menos volume.']
          ],
          legenda: 'Repare que "força" não está na lista. Força estática deixa o som duro e cansa a mão.'
        },
        { t: 'h', x: 'As cinco dinâmicas' },
        { t: 'p', x: 'Você não precisa de infinitos volumes: precisa de cinco níveis bem definidos e consistentes.' },
        {
          t: 'passos', itens: [
            'Toque a 1ª corda solta no volume *mais fraco que ainda soa limpo* (pp).',
            'Agora um pouco mais forte (p).',
            'Um volume médio, confortável (mf).',
            'Forte, mas ainda sem estalo (f).',
            'O mais forte que você consegue *sem o som distorcer* (ff).'
          ]
        },
        { t: 'p', x: 'Faça essa escada subindo e descendo, dez vezes por dia. Em duas semanas você terá cinco volumes reproduzíveis sob controle.' },
        { t: 'h', x: 'Crescendo e diminuendo' },
        { t: 'p', x: 'Crescendo é aumentar gradualmente; diminuendo é diminuir. O erro clássico é fazer um "degrau" no meio. Para evitar, pense na escala inteira como uma rampa e distribua o aumento por *todas* as notas.' },
        { t: 'pauta', txt: 'c4 d4 e4 f4 | g4 a4 b4 c5 | c5 b4 a4 g4 | f4 e4 d4 c4', formula: [4, 4], tocar: true, bpm: 80, legenda: 'Toque esta escala fazendo crescendo na subida e diminuendo na descida. Oito notas para ir do pp ao ff e oito para voltar.' },
        { t: 'h', x: 'A aplicação que muda tudo: destacar a melodia' },
        { t: 'p', x: 'No violão você toca melodia e acompanhamento ao mesmo tempo, com a mesma mão. Se tudo sai no mesmo volume, a música vira uma massa confusa. A solução é tocar a melodia *mais forte* que o resto.' },
        {
          t: 'passos', itens: [
            'A melodia costuma estar na nota mais aguda: use o dedo *a* com apoyando, ou com tirando mais rápido.',
            'O acompanhamento (i e m) fica propositalmente mais fraco.',
            'O baixo (p) fica num volume médio: ele sustenta sem dominar.',
            'Treine tocando *só a melodia* primeiro, para saber como ela deve soar.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'a' }], acorde: 'Am' }
          ],
          legenda: 'Arpejo de Am com melodia nas notas do anelar (Mi, Sol, Fá, Mi). Toque essas quatro notas bem mais fortes que as outras.',
          tocar: true, bpm: 80
        },
        {
          t: 'tocar', titulo: 'Confira a melodia destacada',
          seq: [{ corda: 1, casa: 0 }, { corda: 1, casa: 3 }, { corda: 1, casa: 1 }, { corda: 1, casa: 0 }],
          rotulo: 'Só a melodia: Mi, Sol, Fá, Mi',
          x: 'Antes de juntar com o arpejo, toque só a melodia para gravar o som dela na cabeça.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Aumentar o volume apertando mais com a mão esquerda.', certo: 'A esquerda não controla volume nenhum. Tudo vem da direita.' },
            { erro: 'Tocar forte com força estática e som duro.', certo: 'Volume vem da velocidade do dedo, não da tensão.' },
            { erro: 'Fazer crescendo em degraus.', certo: 'Distribua o aumento por todas as notas do trecho.' },
            { erro: 'Tocar melodia e acompanhamento no mesmo volume.', certo: 'A melodia precisa estar claramente acima. Essa é a diferença entre confuso e musical.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Volume vem da velocidade do dedo, não da força.',
            'Treine cinco níveis definidos: pp, p, mf, f, ff.',
            'Crescendo e diminuendo são rampas, não degraus.',
            'Toque a melodia mais forte que o acompanhamento: é o que torna a música inteligível.'
          ]
        }
      ],
      quiz: [
        { texto: 'De onde vem principalmente o volume de uma nota no violão?', opcoes: ['Da velocidade do dedo na corda', 'Da pressão da mão esquerda', 'Do tamanho da unha', 'Do andamento'], correta: 0, explicacao: 'Força estática só endurece o som.' },
        { texto: 'Quantos níveis de dinâmica vale a pena treinar?', opcoes: ['Cinco bem definidos', 'Dois', 'Infinitos', 'Nenhum'], correta: 0, explicacao: 'pp, p, mf, f e ff, reproduzíveis.' },
        { texto: 'O que é um crescendo?', opcoes: ['Aumentar o volume gradualmente', 'Acelerar', 'Subir de nota', 'Tocar mais agudo'], correta: 0, explicacao: 'Diminuendo é o contrário.' },
        { texto: 'Como destacar a melodia num arpejo?', opcoes: ['Tocar a nota da melodia mais forte que as demais', 'Tocar mais rápido', 'Usar só o polegar', 'Abafar as outras cordas'], correta: 0, explicacao: 'Geralmente com o anelar, em apoyando ou com ataque mais rápido.' },
        { texto: 'Apertar mais com a mão esquerda aumenta o volume?', opcoes: ['Não: a esquerda não controla volume', 'Sim, bastante', 'Sim, nas cordas graves', 'Só com apoyando'], correta: 0, explicacao: 'Só cansa e endurece a nota.' },
        { texto: 'Qual é o erro clássico no crescendo?', opcoes: ['Fazer em degraus em vez de rampa', 'Começar forte demais', 'Acelerar junto', 'Usar apoyando'], correta: 0, explicacao: 'Distribua o aumento por todas as notas.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco cinco níveis de volume distintos e reproduzíveis.',
          'Faço crescendo em oito notas sem degraus.',
          'Toco um arpejo com a melodia claramente acima do acompanhamento.',
          'Não uso força estática para tocar forte.'
        ],
        criterio: 'Você domina quando grava um arpejo com melodia e, ao ouvir, a melodia aparece sozinha.'
      }
    }
  ]
};
