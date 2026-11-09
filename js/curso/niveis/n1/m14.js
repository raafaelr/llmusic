// NÍVEL 1 · MÓDULO 1.4 — Primeiros exercícios
// Seis aulas: cordas soltas, polegar, alternância i–m, a primeira nota presa,
// a primeira melodia e os primeiros ritmos.
// Todas as melodias usadas aqui são de domínio público ou originais do LLMusic.

export const M14 = {
  id: '1.4',
  titulo: 'Primeiros exercícios',
  objetivo: 'Tirar som limpo do violão, fazer os dedos da mão direita se alternarem, juntar as duas mãos e tocar as primeiras melodias no tempo.',
  aulas: [

    // ---------------------------------------------------------------- 1.4.1
    {
      id: 'n1.4.1',
      titulo: 'Cordas soltas: o primeiro som',
      resumo: 'Tirar um som limpo e cheio antes de qualquer outra coisa.',
      minutos: 14,
      disciplinas: ['tecnica'],
      prereq: ['n1.2.3'],
      status: 'validado',
      cobre: ['Execução de cordas soltas', 'Produção de som limpo'],
      objetivo: 'Produzir um som limpo, igual e sem ruído em qualquer corda solta.',
      blocos: [
        { t: 'p', x: 'Antes de tocar qualquer melodia, vale gastar alguns dias só com cordas soltas. Parece pouco, mas é aqui que o seu som nasce. Um violonista experiente reconhece um iniciante pelo som de uma única nota.' },
        { t: 'h', x: 'O movimento, passo a passo' },
        {
          t: 'passos', itens: [
            'Postura montada, mão direita flutuando sobre a boca, punho em cúpula.',
            'Encoste a ponta do dedo *i* na 3ª corda. Sinta a corda com a polpa.',
            'Empurre a corda levemente *para dentro* (na direção do tampo), não para cima.',
            'Deixe a corda escapar: ela desliza pela polpa e sai pela unha.',
            'O dedo termina o movimento *dentro da mão*, na direção da palma, não voando para fora.',
            'Deixe a nota soar inteira antes de tocar de novo.'
          ]
        },
        {
          t: 'dica', titulo: 'A direção importa: ',
          x: 'se você puxa a corda para cima, ela vibra batendo nos trastes e faz um zumbido metálico. Empurrando levemente para dentro, a corda vibra paralela ao tampo e o som sai cheio e redondo.'
        },
        { t: 'h', x: 'O que é "som limpo"' },
        {
          t: 'comparar',
          a: { titulo: 'Som limpo', itens: ['Ataque definido, sem clique', 'Nota soando até o fim', 'Volume parelho em todas as cordas', 'Sem zumbido de traste', 'Sem barulho de unha enganchando'] },
          b: { titulo: 'Sinais de problema', itens: ['Clique seco: unha sem lixar ou ângulo errado', 'Zumbido: corda puxada para cima', 'Som fino: dedo esticado, batendo de raspão', 'Som que morre logo: dedo encostou na corda depois do toque'] }
        },
        { t: 'h', x: 'Exercício 1: uma corda, muitas vezes' },
        { t: 'pauta', txt: 'g4/b g4/b | g4/b g4/b', formula: [4, 4], legenda: 'A 3ª corda solta (Sol), em mínimas. Toque com o dedo i. Ouça cada nota até o fim antes da próxima.', tocar: true, bpm: 60 },
        { t: 'metronomo', titulo: 'Com o metrônomo', bpm: 50, compasso: '4/4', x: 'Toque a 3ª corda a cada dois cliques. Entre uma nota e outra, você tem tempo de sobra para preparar o dedo. Use esse tempo.' },
        { t: 'h', x: 'Exercício 2: descendo as cordas' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'p' }] },
            { notas: [{ pos: [[5, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[6, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[5, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'p' }] },
            { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }] }
          ],
          legenda: 'Desça e suba as seis cordas soltas. Cada dedo na sua corda: a na 1ª, m na 2ª, i na 3ª, p nas graves.',
          tocar: true, bpm: 70
        },
        {
          t: 'tocar', titulo: 'O app confere o seu som',
          seq: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]],
          rotulo: 'Tocar as seis cordas, da 1ª à 6ª',
          x: 'Toque uma de cada vez, deixando soar. Se o app não reconhecer alguma nota, o som não está limpo o bastante (ou a corda está desafinada).'
        },
        { t: 'h', x: 'O teste do volume parelho' },
        { t: 'p', x: 'Grave-se tocando as seis cordas, uma de cada vez, com a mesma intenção. Escute depois. É quase certo que a 1ª corda saiu fraca e a 6ª saiu estourada. Isso acontece com todo mundo no começo: a corda grave tem mais massa e responde mais.' },
        { t: 'p', x: 'A correção é simples e leva tempo: toque *mais forte na 1ª e mais leve na 6ª*, até o volume ficar igual. Treinar isso agora evita um problema que atrapalha muito quando você começar a tocar melodia e acompanhamento ao mesmo tempo.' },
        {
          t: 'erros', itens: [
            { erro: 'Tocar com o dedo esticado.', certo: 'Dedo curvado. A corda precisa encontrar a polpa antes da unha.' },
            { erro: 'O dedo voa para fora depois de tocar.', certo: 'Ele termina dentro da mão, perto da palma.' },
            { erro: 'Tocar a próxima nota antes de a anterior terminar.', certo: 'No começo, deixe cada nota soar inteira. Pressa aqui é tempo perdido depois.' },
            { erro: 'Apoiar o mindinho no tampo para "firmar" a mão.', certo: 'A mão flutua. Apoiar o mindinho trava os outros dedos e vira um vício difícil de tirar.' }
          ]
        },
        {
          t: 'check', chave: 'soltas', titulo: 'Treino de 7 dias (10 minutos por dia)',
          itens: ['Dia 1: 3ª corda com i, som limpo', 'Dia 2: acrescentei a 2ª com m', 'Dia 3: acrescentei a 1ª com a', 'Dia 4: as três graves com p', 'Dia 5: as seis cordas descendo e subindo', 'Dia 6: com metrônomo a 50 BPM', 'Dia 7: gravei e ouvi o volume das seis']
        },
        {
          t: 'resumo', itens: [
            'Empurre a corda levemente para dentro, na direção do tampo.',
            'A corda entra pela polpa e sai pela unha; o dedo termina dentro da mão.',
            'Som limpo é ataque definido, nota inteira, sem zumbido nem clique.',
            'Procure volume parelho: mais forte nas agudas, mais leve nas graves.',
            'A mão flutua: nunca apoie o mindinho no tampo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em que direção o dedo deve empurrar a corda?', opcoes: ['Levemente para dentro, na direção do tampo', 'Para cima, afastando do tampo', 'Para o lado', 'Na direção do braço'], correta: 0, explicacao: 'Puxar para cima faz a corda bater nos trastes e zumbir.' },
        { texto: 'Onde o dedo termina o movimento?', opcoes: ['Dentro da mão, perto da palma', 'Voando para fora', 'Encostado na corda vizinha', 'No tampo'], correta: 0, explicacao: 'No toque livre, o dedo recolhe para dentro.' },
        { texto: 'O que causa um "clique" seco no ataque?', opcoes: ['Unha sem lixar ou ângulo errado do dedo', 'Corda desafinada', 'Metrônomo muito rápido', 'Postura da mão esquerda'], correta: 0, explicacao: 'A unha engancha em vez de deixar a corda escapar.' },
        { texto: 'Por que não apoiar o mindinho direito no tampo?', opcoes: ['Porque trava os outros dedos e vira um vício difícil de corrigir', 'Porque risca o verniz', 'Porque abafa o som', 'Porque é proibido'], correta: 0, explicacao: 'A mão precisa flutuar para os dedos se moverem livres.' },
        { texto: 'Por que a 6ª corda costuma soar mais forte que a 1ª?', opcoes: ['Porque tem mais massa e responde mais', 'Porque está mais perto da mão', 'Porque é mais nova', 'Porque é de metal'], correta: 0, explicacao: 'Por isso é preciso tocar mais leve nela e mais forte na 1ª.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco qualquer corda solta com som limpo, sem zumbido nem clique.',
          'Minha mão flutua, sem apoiar o mindinho.',
          'Toco as seis cordas descendo e subindo com volume parecido.',
          'Consigo tocar a cada dois cliques do metrônomo a 50 BPM.'
        ],
        criterio: 'Você domina quando grava as seis cordas e, ao ouvir, o som é limpo e o volume é parelho.'
      }
    },

    // ---------------------------------------------------------------- 1.4.2
    {
      id: 'n1.4.2',
      titulo: 'O polegar e os baixos',
      resumo: 'O dedo p nas cordas 6, 5 e 4: o alicerce de tudo.',
      minutos: 12,
      disciplinas: ['tecnica'],
      prereq: ['n1.4.1'],
      status: 'validado',
      cobre: ['Dedos polegar, indicador, médio e anular'],
      objetivo: 'Usar o polegar com independência, com som firme e sem bagunçar os outros dedos.',
      blocos: [
        { t: 'p', x: 'O polegar é o dedo mais forte da mão e, no violão, é o que sustenta a música. Ele toca os baixos: a linha grave que dá base para tudo o que acontece em cima.' },
        { t: 'h', x: 'O movimento do polegar' },
        { t: 'p', x: 'O polegar não se dobra como os outros dedos. Ele se move *a partir da base*, da junta que fica lá no meio da mão, num movimento que empurra a corda para baixo e para a frente, na direção do braço do violão.' },
        {
          t: 'passos', itens: [
            'Apoie o polegar sobre a 6ª corda, à frente dos outros dedos (lembre do X).',
            'Empurre a corda para baixo com a lateral do dedo, não com a ponta.',
            'O polegar segue em frente e pousa *na corda seguinte* (a 5ª). Isso é o apoio do polegar, e dá um som cheio.',
            'Para o som livre, o polegar sai por cima da corda seguinte, sem encostar.',
            'Os dedos i, m e a ficam parados no lugar, prontos. Eles não acompanham o polegar.'
          ]
        },
        { t: 'mao', lado: 'direita', destacar: ['p'], legenda: 'O polegar trabalha num plano diferente dos outros três.' },
        { t: 'h', x: 'Exercício do baixo caminhante' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[5, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[5, 0]], fig: 'seminima', dedo: 'p' }] },
            { notas: [{ pos: [[6, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[5, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[4, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[5, 0]], fig: 'seminima', dedo: 'p' }] },
            { notas: [{ pos: [[6, 0]], fig: 'minima', dedo: 'p' }, { pos: [[6, 0]], fig: 'minima', dedo: 'p' }] }
          ],
          legenda: 'Só com o polegar: 6ª, 5ª, 4ª, 5ª. Procure o mesmo volume nas três cordas.',
          tocar: true, bpm: 70
        },
        { t: 'metronomo', titulo: 'Treine no tempo', bpm: 60, compasso: '4/4', x: 'Uma nota por clique. Quando estiver confortável, suba para 72 e depois 84 BPM.' },
        { t: 'h', x: 'Polegar e dedos juntos' },
        { t: 'p', x: 'Agora o primeiro desafio de coordenação: o polegar toca o baixo e, logo depois, os dedos tocam as agudas. Esta é a base de todo acompanhamento de violão.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[6, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }] },
            { notas: [{ pos: [[5, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }] },
            { notas: [{ pos: [[4, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }] },
            { notas: [{ pos: [[5, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }] }
          ],
          legenda: 'Baixo e arpejo: p nas graves, depois i, m e a. Este padrão aparece em centenas de músicas.',
          tocar: true, bpm: 72
        },
        {
          t: 'tocar', titulo: 'Confira a coordenação',
          seq: [{ corda: 6, casa: 0, rotulo: '6ª · p' }, { corda: 3, casa: 0, rotulo: '3ª · i' }, { corda: 2, casa: 0, rotulo: '2ª · m' }, { corda: 1, casa: 0, rotulo: '1ª · a' }],
          rotulo: 'Tocar p-i-m-a',
          x: 'Um baixo e três agudas, uma de cada vez, devagar.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Mover a mão inteira junto com o polegar.', certo: 'Só o polegar se move. A mão fica parada, como uma plataforma.' },
            { erro: 'Tocar com a ponta do polegar.', certo: 'Use a lateral, do lado da unha. Dá mais som e menos esforço.' },
            { erro: 'Polegar tão forte que abafa a melodia.', certo: 'O baixo sustenta, não domina. Procure equilíbrio.' },
            { erro: 'Os dedos i, m e a fecham quando o polegar se move.', certo: 'Eles ficam prontos sobre as cordas. Essa independência é o que você está treinando.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O polegar toca as cordas 6, 5 e 4 e se move a partir da base, na direção do braço.',
            'Use a lateral do polegar, não a ponta.',
            'Com apoio, o polegar pousa na corda seguinte; sem apoio, passa por cima.',
            'Os outros dedos ficam parados e prontos enquanto o polegar trabalha.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais cordas o polegar costuma tocar?', opcoes: ['6ª, 5ª e 4ª', '1ª, 2ª e 3ª', 'Só a 6ª', 'Todas igualmente'], correta: 0, explicacao: 'Os baixos são a base da música.' },
        { texto: 'De onde nasce o movimento do polegar?', opcoes: ['Da junta da base, no meio da mão', 'Da ponta do dedo', 'Do punho', 'Do cotovelo'], correta: 0, explicacao: 'Por isso ele não se dobra como os outros dedos.' },
        { texto: 'Com que parte do polegar se toca a corda?', opcoes: ['A lateral, do lado da unha', 'A ponta', 'A polpa inteira', 'A articulação'], correta: 0, explicacao: 'A lateral dá mais som com menos esforço.' },
        { texto: 'No toque com apoio, onde o polegar termina?', opcoes: ['Pousado na corda seguinte', 'No ar', 'No tampo', 'Na mesma corda'], correta: 0, explicacao: 'Esse apoio é o que dá o som cheio do baixo.' },
        { texto: 'O que os dedos i, m e a fazem enquanto o polegar toca?', opcoes: ['Ficam parados e prontos sobre as cordas', 'Fecham junto', 'Acompanham o movimento', 'Apoiam no tampo'], correta: 0, explicacao: 'Essa independência é o objetivo do exercício.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco 6ª-5ª-4ª-5ª só com o polegar, com volume igual.',
          'Minha mão fica parada enquanto o polegar trabalha.',
          'Toco p-i-m-a sem que os dedos fechem junto com o polegar.',
          'Consigo fazer isso a 72 BPM com o metrônomo.'
        ],
        criterio: 'Você domina quando o polegar se move sozinho, sem arrastar o resto da mão.'
      }
    },

    // ---------------------------------------------------------------- 1.4.3
    {
      id: 'n1.4.3',
      titulo: 'Alternância i–m',
      resumo: 'O motor da técnica: dois dedos se revezando sem parar.',
      minutos: 14,
      disciplinas: ['tecnica'],
      prereq: ['n1.4.1'],
      status: 'validado',
      cobre: ['Alternância entre indicador e médio', 'Dedilhado básico'],
      objetivo: 'Alternar i e m com som parelho e regular, a base de toda escala e melodia.',
      blocos: [
        { t: 'p', x: 'Se existe um único hábito técnico que separa quem vai longe de quem empaca, é este: *nunca repetir o mesmo dedo duas vezes seguidas na melodia*. Indicador e médio se revezam, sempre.' },
        { t: 'h', x: 'Por que alternar' },
        { t: 'p', x: 'Um dedo precisa voltar à corda antes de tocar de novo. Esse retorno leva tempo. Com um dedo só, a velocidade máxima é a velocidade do retorno. Com dois dedos se revezando, enquanto um toca o outro já está voltando: a velocidade dobra, e a música fica parelha.' },
        {
          t: 'dica', x: 'Pense em caminhar. Ninguém anda pulando com a mesma perna. Alternar i e m é andar; repetir o mesmo dedo é pular num pé só.'
        },
        { t: 'h', x: 'Exercício 1: numa corda só' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }] }
          ],
          legenda: 'Oito toques por compasso, alternando i e m. Comece bem devagar e preste atenção: as duas notas devem soar exatamente iguais.',
          tocar: true, bpm: 60
        },
        { t: 'metronomo', titulo: 'Escada de velocidade', bpm: 50, compasso: '4/4', x: 'Comece a 50 BPM com uma nota por clique. Quando estiver perfeito por um minuto inteiro, suba 6 BPM. Nunca pule etapas: se errar, volte um degrau.' },
        { t: 'h', x: 'O problema do volume desigual' },
        { t: 'p', x: 'Quase todo iniciante toca o *i* mais forte que o *m*, porque o indicador é mais forte e mais acostumado. O resultado é um "TUM-tum-TUM-tum" involuntário, que estraga qualquer escala.' },
        { t: 'p', x: 'A correção: toque bem devagar, grave e ouça. Se o *i* está mais forte, toque o *i* mais leve até igualar. Dois minutos por dia resolvem isso em poucas semanas.' },
        { t: 'h', x: 'Exercício 2: mudando de corda' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[3, 0]], fig: 'minima', dedo: 'i' }, { pos: [[3, 0]], fig: 'minima', dedo: 'm' }] }
          ],
          legenda: 'A alternância continua mesmo quando a corda muda. Repare que o dedo "errado" nunca se repete.',
          tocar: true, bpm: 64
        },
        { t: 'h', x: 'Exercício 3: com apoio (apoyando)' },
        { t: 'p', x: 'Agora experimente o toque apoiado: o dedo atravessa a corda e *descansa* na corda vizinha mais grave. Toque a 1ª corda com *i* e deixe o dedo pousar na 2ª. O som fica visivelmente mais forte e mais cheio. Este é o toque das melodias e das escalas, e você vai estudá-lo a fundo no Nível 2.' },
        {
          t: 'tocar', titulo: 'Confira a alternância',
          seq: [{ corda: 1, casa: 0, rotulo: 'i' }, { corda: 1, casa: 0, rotulo: 'm' }, { corda: 1, casa: 0, rotulo: 'i' }, { corda: 1, casa: 0, rotulo: 'm' }, { corda: 1, casa: 0, rotulo: 'i' }, { corda: 1, casa: 0, rotulo: 'm' }],
          rotulo: 'Seis toques alternados na 1ª corda',
          x: 'Alterne i e m na 1ª corda solta. O app conta os ataques; você cuida de manter o volume igual.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Repetir o mesmo dedo quando a nota se repete.', certo: 'Alterne sempre, mesmo que a nota seja a mesma.' },
            { erro: 'Tocar o i mais forte que o m.', certo: 'Grave-se e iguale. O ouvido não percebe sozinho no começo.' },
            { erro: 'Subir a velocidade antes de estar parelho.', certo: 'A escada de velocidade: só sobe quem fez um minuto perfeito.' },
            { erro: 'Mover o punho junto com os dedos.', certo: 'Só os dedos se movem; a mão fica estável.' }
          ]
        },
        {
          t: 'check', chave: 'im', titulo: 'Treino diário de 5 minutos',
          itens: ['2 min: i–m na 1ª corda, devagar, volume igual', '1 min: mudando de corda (3ª-2ª-1ª-2ª)', '1 min: com apoio, na 1ª corda', '1 min: escada de velocidade com metrônomo']
        },
        {
          t: 'resumo', itens: [
            'Nunca repita o mesmo dedo seguidamente na melodia: alterne i e m.',
            'A alternância é o que permite velocidade e som parelho.',
            'O problema mais comum é o i soar mais forte que o m: grave-se e iguale.',
            'Suba a velocidade em degraus, só depois de um minuto perfeito.'
          ]
        }
      ],
      quiz: [
        { texto: 'Por que alternar i e m?', opcoes: ['Porque um dedo precisa voltar à corda antes de tocar de novo', 'Porque é mais bonito', 'Porque cansa menos o polegar', 'Porque a partitura manda'], correta: 0, explicacao: 'Com dois dedos, enquanto um toca o outro já volta.' },
        { texto: 'Qual é o erro de volume mais comum na alternância?', opcoes: ['O i sair mais forte que o m', 'O m sair mais forte que o i', 'Os dois saírem fracos', 'O polegar abafar'], correta: 0, explicacao: 'O indicador é mais forte e mais usado no dia a dia.' },
        { texto: 'Quando subir a velocidade no metrônomo?', opcoes: ['Depois de um minuto inteiro sem erro e com volume parelho', 'A cada dia, automaticamente', 'Quando conseguir tocar uma vez certo', 'Nunca'], correta: 0, explicacao: 'Essa é a escada de velocidade.' },
        { texto: 'E quando a nota se repete, pode usar o mesmo dedo?', opcoes: ['Não: alterne mesmo assim', 'Sim, sempre', 'Só se for lento', 'Só na 1ª corda'], correta: 0, explicacao: 'Repetir o dedo cria o limite de velocidade que você quer evitar.' },
        { texto: 'No toque apoiado (apoyando), onde o dedo termina?', opcoes: ['Descansando na corda vizinha mais grave', 'No ar', 'Na palma da mão', 'No tampo'], correta: 0, explicacao: 'Por isso o som sai mais forte e mais cheio.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco 16 notas alternando i e m sem repetir dedo.',
          'As notas saem com o mesmo volume (conferi gravando).',
          'Mantenho a alternância mesmo mudando de corda.',
          'Consigo um minuto perfeito a 72 BPM com duas notas por clique.'
        ],
        criterio: 'Você domina quando a alternância acontece sem você pensar nela.'
      }
    },

    // ---------------------------------------------------------------- 1.4.4
    {
      id: 'n1.4.4',
      titulo: 'Juntando as mãos',
      resumo: 'A primeira nota presa e a sincronia entre a esquerda e a direita.',
      minutos: 16,
      disciplinas: ['tecnica'],
      prereq: ['n1.2.4', 'n1.4.3'],
      status: 'validado',
      cobre: ['Coordenação das duas mãos'],
      objetivo: 'Fazer as duas mãos trabalharem no mesmo instante, com nota limpa e sem ruído de troca.',
      blocos: [
        { t: 'p', x: 'Até agora cada mão trabalhou sozinha. Agora elas precisam se encontrar no mesmo milésimo de segundo. É aqui que quase todo iniciante descobre que violão é difícil, e também é aqui que a dificuldade passa mais rápido do que parece.' },
        { t: 'h', x: 'A regra da antecipação' },
        { t: 'p', x: 'A mão esquerda *chega antes*. O dedo já está apertando a corda quando a mão direita toca. Se as duas chegam ao mesmo tempo, sai um som sujo; se a esquerda chega depois, sai um "pluim" e a nota não soa.' },
        {
          t: 'passos', itens: [
            'Ponha o dedo 1 na 1ª corda, casa 1, e aperte.',
            'Confira: o dedo está em arco, na ponta, perto do traste?',
            'Só então toque com o dedo i da mão direita.',
            'Deixe soar. Ouça se a nota está limpa, sem zumbido.',
            'Solte e repita dez vezes, sempre preparando a esquerda antes.'
          ]
        },
        { t: 'braco', casas: 4, notas: [{ corda: 1, casa: 1, rotulo: '1', classe: 'raiz' }], legenda: 'A primeira nota presa: 1ª corda, casa 1, dedo 1. Essa nota é o Fá.' },
        { t: 'h', x: 'Exercício 1: solta e presa' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'i' }] }
          ],
          legenda: 'Mi (solta) e Fá (casa 1), alternando. A esquerda prepara durante a nota solta.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Exercício 2: um dedo por casa' },
        { t: 'p', x: 'Agora o exercício mais importante do Nível 1. Cada dedo da mão esquerda fica responsável por uma casa: *dedo 1 na casa 1, dedo 2 na casa 2, dedo 3 na casa 3, dedo 4 na casa 4*. A mão não se move; só os dedos caem e levantam.' },
        { t: 'braco', casas: 5, notas: [{ corda: 1, casa: 1, rotulo: '1', classe: 'raiz' }, { corda: 1, casa: 2, rotulo: '2', classe: 'neutro' }, { corda: 1, casa: 3, rotulo: '3', classe: 'neutro' }, { corda: 1, casa: 4, rotulo: '4', classe: 'neutro' }], tocar: true, bpm: 80, legenda: 'Um dedo por casa na 1ª corda. Depois faça o mesmo em cada uma das seis cordas.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 4]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 4]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[3, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 4]], fig: 'seminima', dedo: 'm' }] }
          ],
          legenda: 'O cromático: dedos 1-2-3-4 da esquerda, alternando i e m na direita. Faça nas seis cordas, todo dia.',
          tocar: true, bpm: 60
        },
        {
          t: 'dica', titulo: 'O segredo deste exercício: ',
          x: 'depois de tocar com o dedo 1, *não o levante*. Deixe-o apoiado enquanto o dedo 2 cai. Depois o 3, depois o 4. No fim, os quatro dedos estão na corda ao mesmo tempo. Isso treina independência e economiza movimento.'
        },
        { t: 'metronomo', titulo: 'Cromático no tempo', bpm: 54, compasso: '4/4', x: 'Uma nota por clique. Objetivo do mês: chegar a 80 BPM com som limpo em todas as cordas.' },
        {
          t: 'tocar', titulo: 'Confira o cromático',
          seq: [{ corda: 1, casa: 1 }, { corda: 1, casa: 2 }, { corda: 1, casa: 3 }, { corda: 1, casa: 4 }],
          rotulo: 'Tocar 1-2-3-4 na 1ª corda',
          x: 'Dedos 1, 2, 3 e 4 nas casas 1 a 4 da 1ª corda. O app confere se cada nota sai limpa e afinada.'
        },
        { t: 'h', x: 'Os três problemas clássicos' },
        {
          t: 'erros', itens: [
            { erro: 'A nota sai abafada ou "de pano".', certo: 'O dedo está longe do traste ou não está em arco. Aproxime do traste e ponha o dedo em pé.' },
            { erro: 'A nota chia ou zumbe.', certo: 'Falta pressão, ou a corda vizinha está sendo tocada de raspão pelo dedo deitado.' },
            { erro: 'A mão direita toca antes de a esquerda apertar.', certo: 'Prepare a esquerda durante a nota anterior. A esquerda sempre chega primeiro.' },
            { erro: 'O mindinho (dedo 4) não alcança.', certo: 'Normal no começo. Verifique o polegar atrás e o ângulo do braço do violão: a 45° o alcance melhora muito.' }
          ]
        },
        {
          t: 'check', chave: 'juntar', titulo: 'Rotina de 10 minutos',
          itens: ['2 min: solta e presa na 1ª corda', '5 min: cromático 1-2-3-4 nas seis cordas', '2 min: cromático com metrônomo', '1 min: alongamento']
        },
        {
          t: 'resumo', itens: [
            'A mão esquerda chega antes: o dedo já aperta quando a direita toca.',
            'Cromático 1-2-3-4: um dedo por casa, a mão parada.',
            'Deixe os dedos apoiados: não levante o 1 para pôr o 2.',
            'Nota abafada = dedo longe do traste ou deitado. Nota que chia = pressão ou ângulo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual mão chega primeiro?', opcoes: ['A esquerda: o dedo já aperta quando a direita toca', 'A direita', 'As duas ao mesmo tempo', 'Depende da nota'], correta: 0, explicacao: 'Se a esquerda chega depois, a nota não soa.' },
        { texto: 'No exercício cromático, qual dedo vai na casa 3?', opcoes: ['O dedo 3 (anelar)', 'O dedo 1', 'O dedo 2', 'O polegar'], correta: 0, explicacao: 'Um dedo por casa: 1 na 1, 2 na 2, 3 na 3, 4 na 4.' },
        { texto: 'Depois de tocar com o dedo 1, o que fazer?', opcoes: ['Deixá-lo apoiado enquanto o dedo 2 cai', 'Levantá-lo imediatamente', 'Movê-lo para a casa 2', 'Tirá-lo da corda'], correta: 0, explicacao: 'Deixar apoiado treina independência e economiza movimento.' },
        { texto: 'A nota sai abafada. Qual a causa mais provável?', opcoes: ['O dedo está longe do traste ou deitado', 'A corda está velha', 'A mão direita está fraca', 'O metrônomo está rápido'], correta: 0, explicacao: 'Aproxime do traste e ponha o dedo em arco, na ponta.' },
        { texto: 'O mindinho não alcança a casa 4. O que verificar primeiro?', opcoes: ['A posição do polegar atrás e o ângulo do braço do violão', 'A afinação', 'O tamanho da corda', 'A altura da cadeira'], correta: 0, explicacao: 'Com o braço a 45° e o polegar atrás, o alcance melhora muito.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o cromático 1-2-3-4 na 1ª corda com as quatro notas limpas.',
          'Faço o mesmo nas seis cordas.',
          'Mantenho os dedos apoiados em vez de levantar.',
          'Consigo 60 BPM, uma nota por clique, sem falhas.'
        ],
        criterio: 'Você domina quando as quatro notas saem limpas nas seis cordas, com a mão esquerda parada.'
      }
    },

    // ---------------------------------------------------------------- 1.4.5
    {
      id: 'n1.4.5',
      titulo: 'Sua primeira melodia',
      resumo: 'Ler e tocar uma melodia inteira, do começo ao fim.',
      minutos: 20,
      disciplinas: ['leitura', 'repertorio', 'tecnica'],
      prereq: ['n1.3.5', 'n1.4.4'],
      status: 'validado',
      cobre: ['Primeiras melodias'],
      objetivo: 'Juntar tudo: ler a partitura, achar a nota no braço, tocar com dedilhado certo e no tempo.',
      blocos: [
        { t: 'p', x: 'Chegou a hora de tocar música. Você já tem tudo o que precisa: sabe ler as notas da primeira posição, sabe alternar i e m e sabe pôr o dedo no lugar certo. Agora é juntar.' },
        { t: 'h', x: 'Antes de tocar: o mapa das notas' },
        {
          t: 'tabela',
          cab: ['Nota', 'Corda', 'Casa', 'Dedo esquerdo'],
          linhas: [
            ['Mi', '1ª', 'solta', '—'],
            ['Fá', '1ª', '1', '1'],
            ['Sol', '1ª', '3', '3'],
            ['Si', '2ª', 'solta', '—'],
            ['Dó', '2ª', '1', '1'],
            ['Ré', '2ª', '3', '3'],
            ['Sol (grave)', '3ª', 'solta', '—'],
            ['Lá', '3ª', '2', '2']
          ],
          legenda: 'Estas oito notas bastam para tocar as duas melodias desta aula.'
        },
        { t: 'h', x: 'Melodia 1: Ode à Alegria (Beethoven)' },
        { t: 'p', x: 'O tema do quarto movimento da Nona Sinfonia de Beethoven, de 1824. É domínio público e é perfeito para começar: anda de grau em grau, quase sem saltos, e cabe inteiro na primeira posição.' },
        {
          t: 'pauta',
          txt: 'b4 b4 c5 d5 | d5 c5 b4 a4 | g4 g4 a4 b4 | b4/q. a4/c a4/b',
          formula: [4, 4], nomes: true, tocar: true, bpm: 72,
          legenda: 'Ode à Alegria, primeira parte. Ouça algumas vezes antes de tentar tocar.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 0]], fig: 'seminima', ponto: true, dedo: 'i' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'minima', dedo: 'i' }] }
          ],
          legenda: 'A mesma melodia em tablatura, com o dedilhado da mão direita. Alternância i–m o tempo todo.',
          tocar: true, bpm: 72
        },
        {
          t: 'passos', itens: [
            'Primeiro: toque só a mão esquerda, sem tocar com a direita, só pondo os dedos no lugar.',
            'Depois: toque *bem devagar*, sem metrônomo, uma nota de cada vez, conferindo se sai limpa.',
            'Depois: com metrônomo a 50 BPM, uma nota por clique.',
            'Só então: suba a velocidade de 6 em 6 BPM, até 72.',
            'Por último: toque sem olhar as mãos, lendo a partitura.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira os primeiros compassos',
          seq: [{ corda: 2, casa: 0 }, { corda: 2, casa: 0 }, { corda: 2, casa: 1 }, { corda: 2, casa: 3 }, { corda: 2, casa: 3 }, { corda: 2, casa: 1 }, { corda: 2, casa: 0 }, { corda: 3, casa: 2 }],
          rotulo: 'Tocar os dois primeiros compassos',
          x: 'Si, Si, Dó, Ré, Ré, Dó, Si, Lá. O app confere nota por nota.'
        },
        { t: 'h', x: 'Melodia 2: Brilha, brilha, estrelinha' },
        { t: 'p', x: 'A melodia é francesa, do século XVIII (*Ah! vous dirai-je, maman*), domínio público, e foi usada por Mozart num conjunto de variações. Aqui ela está em Sol, para caber na primeira posição.' },
        {
          t: 'pauta',
          txt: 'g4 g4 d5 d5 | e5 e5 d5/b | c5 c5 b4 b4 | a4 a4 g4/b',
          formula: [4, 4], nomes: true, tocar: true, bpm: 80,
          legenda: 'Brilha, brilha, estrelinha. Repare nos saltos de quinta no primeiro compasso: Sol para Ré.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[1, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 3]], fig: 'minima', dedo: 'i' }] },
            { notas: [{ pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }] },
            { notas: [{ pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 0]], fig: 'minima', dedo: 'm' }] }
          ],
          legenda: 'Tablatura com dedilhado. Quando a nota se repete, o dedo muda: essa é a alternância.',
          tocar: true, bpm: 80
        },
        {
          t: 'dica', x: 'Toque cantando o nome das notas em voz alta. Isso liga, de uma vez só, o olho (partitura), a voz (solfejo), o ouvido e a mão. É o método mais eficiente que existe para memorizar uma melodia.'
        },
        { t: 'ir', rota: 'partituras', titulo: 'Abrir Partituras', x: 'Na tela de Partituras você encontra estas e outras peças com cursor que acompanha o tempo.' },
        {
          t: 'erros', itens: [
            { erro: 'Tocar rápido demais e errar sempre no mesmo lugar.', certo: 'Isole os dois compassos difíceis e repita só eles, devagar, 10 vezes.' },
            { erro: 'Parar e recomeçar do início toda vez que errar.', certo: 'Siga em frente. Depois volte e trabalhe o trecho errado separado.' },
            { erro: 'Decorar e parar de ler.', certo: 'Mesmo sabendo de cor, leia de vez em quando: é assim que a leitura melhora.' },
            { erro: 'Esquecer a alternância quando a nota se repete.', certo: 'Si-Si são dois dedos diferentes: i depois m.' }
          ]
        },
        {
          t: 'check', chave: 'melodia1', titulo: 'Plano de 10 dias',
          itens: ['Dias 1-2: Ode à Alegria, compassos 1 e 2, bem devagar', 'Dias 3-4: compassos 3 e 4', 'Dia 5: a melodia inteira, devagar', 'Dia 6: com metrônomo a 50', 'Dia 7: a 72 BPM', 'Dias 8-9: Brilha, brilha, estrelinha', 'Dia 10: as duas, sem olhar as mãos']
        },
        {
          t: 'resumo', itens: [
            'Oito notas da primeira posição bastam para as duas melodias.',
            'Estude por partes: dois compassos de cada vez, bem devagar.',
            'Mantenha a alternância i–m, inclusive quando a nota se repete.',
            'Cante o nome das notas enquanto toca.',
            'Suba a velocidade só depois de o trecho sair limpo.'
          ]
        }
      ],
      quiz: [
        { texto: 'Em que corda e casa fica o Dó da primeira posição?', opcoes: ['2ª corda, casa 1', '1ª corda, casa 1', '2ª corda, casa 3', '3ª corda, casa 2'], correta: 0, explicacao: 'E o dedo é o 1.' },
        { texto: 'E o Lá?', opcoes: ['3ª corda, casa 2', '2ª corda, casa 2', '1ª corda, casa 2', '3ª corda solta'], correta: 0, explicacao: 'Dedo 2 na 3ª corda.' },
        { texto: 'Quando a melodia repete a mesma nota, o que fazer com os dedos da direita?', opcoes: ['Alternar: i depois m', 'Repetir o mesmo dedo', 'Usar o polegar', 'Usar o anelar'], correta: 0, explicacao: 'A alternância vale também para notas repetidas.' },
        { texto: 'Qual é a melhor forma de estudar um trecho difícil?', opcoes: ['Isolar os dois compassos e repetir devagar', 'Tocar a peça inteira mais vezes', 'Tocar mais rápido para "soltar"', 'Pular o trecho'], correta: 0, explicacao: 'Repetir a peça inteira treina o erro junto.' },
        { texto: 'A melodia de "Brilha, brilha, estrelinha" é originalmente...', opcoes: ['Uma canção francesa do século XVIII', 'Uma composição de Beethoven', 'Uma canção folclórica brasileira', 'Uma peça de Villa-Lobos'], correta: 0, explicacao: '"Ah! vous dirai-je, maman", usada por Mozart em suas variações.' },
        { texto: 'Por que cantar o nome das notas enquanto toca?', opcoes: ['Liga olho, voz, ouvido e mão ao mesmo tempo', 'Ajuda a tocar mais rápido', 'Melhora o som do violão', 'É exigência da partitura'], correta: 0, explicacao: 'É o jeito mais eficiente de memorizar e ler melhor.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco a Ode à Alegria inteira, devagar, sem parar.',
          'Toco com metrônomo a 72 BPM, sem acelerar nem atrasar.',
          'Mantenho a alternância i–m do começo ao fim.',
          'Todas as notas saem limpas.',
          'Toco lendo a partitura, sem olhar as mãos o tempo todo.'
        ],
        criterio: 'Você domina quando toca a melodia inteira com o metrônomo, sem parar e com som limpo.'
      }
    },

    // ---------------------------------------------------------------- 1.4.6
    {
      id: 'n1.4.6',
      titulo: 'Primeiros ritmos',
      resumo: 'Ler e tocar padrões rítmicos no tempo, com o metrônomo.',
      minutos: 16,
      disciplinas: ['teoria', 'tecnica'],
      prereq: ['n1.3.8', 'n1.4.3'],
      status: 'validado',
      cobre: ['Exercícios simples de ritmo'],
      objetivo: 'Executar padrões rítmicos simples com precisão, contando em voz alta.',
      blocos: [
        { t: 'p', x: 'Ritmo é a parte da música que mais se perde quando a gente estuda só as notas. A boa notícia: ritmo se treina separado das notas, e isso é muito mais rápido.' },
        { t: 'h', x: 'Como treinar ritmo sem se preocupar com as notas' },
        { t: 'p', x: 'Use *uma corda solta só*. Com a altura resolvida, toda a sua atenção vai para o tempo. Depois que o ritmo estiver firme, você aplica em qualquer melodia.' },
        { t: 'h', x: 'Padrão 1: semínimas' },
        { t: 'pauta', txt: 'e5 e5 e5 e5 | e5 e5 e5 e5', formula: [4, 4], legenda: 'Uma nota por tempo. Conte em voz alta: "um, dois, três, quatro".', tocar: true, bpm: 72 },
        { t: 'h', x: 'Padrão 2: mínimas' },
        { t: 'pauta', txt: 'e5/b e5/b | e5/b e5/b', formula: [4, 4], legenda: 'Uma nota a cada dois tempos. Conte os quatro, mas toque só no 1 e no 3.', tocar: true, bpm: 72 },
        { t: 'h', x: 'Padrão 3: colcheias' },
        { t: 'pauta', txt: 'e5/c e5/c e5/c e5/c e5/c e5/c e5/c e5/c', formula: [4, 4], legenda: 'Duas notas por tempo. Conte "um e, dois e, três e, quatro e".', tocar: true, bpm: 72 },
        { t: 'h', x: 'Padrão 4: misturando' },
        { t: 'pauta', txt: 'e5/b e5/c e5/c e5 | e5 e5/c e5/c e5/b', formula: [4, 4], legenda: 'Mínima, duas colcheias, semínima. É aqui que a contagem em voz alta salva.', tocar: true, bpm: 72 },
        { t: 'h', x: 'Padrão 5: com pausas' },
        { t: 'pauta', txt: 'e5 z/q e5 z/q | e5/c e5/c z/q e5/b', formula: [4, 4], legenda: 'Lembre: a pausa precisa ser silêncio de verdade. Abafe a corda.', tocar: true, bpm: 72 },
        { t: 'h', x: 'Padrão 6: a semínima pontuada' },
        { t: 'pauta', txt: 'e5/q. e5/c e5/b | e5/q. e5/c e5/b', formula: [4, 4], legenda: 'Um tempo e meio, depois meio tempo. Conte "um e dois e": a segunda nota entra no "e" do dois.', tocar: true, bpm: 72 },
        { t: 'metronomo', titulo: 'Metrônomo para os seis padrões', bpm: 60, compasso: '4/4', x: 'Toque cada padrão quatro vezes seguidas sem parar, depois passe para o próximo. Conte em voz alta o tempo inteiro.' },
        {
          t: 'dica', titulo: 'O truque da sílaba: ',
          x: 'em vez de só contar números, use sílabas para o ritmo. Semínimas: "tá tá tá tá". Colcheias: "ti-ti ti-ti ti-ti ti-ti". Semínima pontuada com colcheia: "táa-ti". Falar o ritmo antes de tocar resolve metade dos problemas.'
        },
        { t: 'h', x: 'Aplicando numa melodia' },
        { t: 'p', x: 'Agora o mesmo ritmo do padrão 4, mas com notas diferentes. Primeiro fale o ritmo em sílabas, depois toque.' },
        { t: 'pauta', txt: 'g4/b a4/c b4/c c5 | b4 a4/c g4/c g4/b', formula: [4, 4], nomes: true, tocar: true, bpm: 72, legenda: 'Melodia original do LLMusic para treinar o padrão 4.' },
        { t: 'ir', rota: 'ritmo', titulo: 'Abrir a tela de Ritmo', x: 'Lá o app sorteia ritmos e corrige a sua execução em tempo real.' },
        {
          t: 'erros', itens: [
            { erro: 'Começar a contar depois de tocar a primeira nota.', certo: 'Conte um compasso inteiro vazio antes de começar: "um, dois, três, quatro, e então toca".' },
            { erro: 'Apressar as colcheias.', certo: 'As duas colcheias de um tempo têm exatamente a mesma duração. Fale "ti-ti" parelho.' },
            { erro: 'Alongar a nota em cima da pausa.', certo: 'A pausa é silêncio medido. Abafe no tempo certo.' },
            { erro: 'Treinar ritmo e notas ao mesmo tempo quando os dois estão difíceis.', certo: 'Separe: primeiro o ritmo numa corda solta, depois as notas devagar, depois junte.' }
          ]
        },
        {
          t: 'check', chave: 'ritmo1', titulo: 'Treino dos seis padrões',
          itens: ['Padrão 1 (semínimas) a 72 BPM', 'Padrão 2 (mínimas)', 'Padrão 3 (colcheias)', 'Padrão 4 (misturado)', 'Padrão 5 (com pausas)', 'Padrão 6 (pontuada)', 'Toquei os seis seguidos sem parar']
        },
        {
          t: 'resumo', itens: [
            'Treine ritmo numa corda solta: assim a atenção vai toda para o tempo.',
            'Conte em voz alta, sempre, e comece contando um compasso vazio.',
            'Use sílabas: "tá" para semínima, "ti-ti" para colcheias.',
            'A pausa é silêncio medido: abafe a corda.',
            'Quando ritmo e notas estiverem difíceis, separe os dois problemas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Por que treinar ritmo numa corda solta?', opcoes: ['Para toda a atenção ir para o tempo', 'Porque a corda solta soa melhor', 'Porque é mais fácil para a esquerda', 'Para economizar as cordas'], correta: 0, explicacao: 'Um problema de cada vez.' },
        { texto: 'Como se conta um compasso 4/4 com colcheias?', opcoes: ['"um e, dois e, três e, quatro e"', '"um, dois, três, quatro"', '"um, dois"', '"um e dois"'], correta: 0, explicacao: 'O "e" marca a metade de cada tempo.' },
        { texto: 'O que fazer antes de começar a tocar com metrônomo?', opcoes: ['Contar um compasso inteiro vazio', 'Tocar uma nota de teste', 'Afinar', 'Nada'], correta: 0, explicacao: 'Assim você entra no tempo já estabelecido.' },
        { texto: 'Quantos tempos vale uma semínima pontuada?', opcoes: ['1 tempo e meio', '2 tempos', '1 tempo', '3 tempos'], correta: 0, explicacao: '1 + metade de 1.' },
        { texto: 'Numa pausa, o que deve acontecer com a corda?', opcoes: ['Ser abafada: silêncio de verdade', 'Continuar soando', 'Soar mais baixo', 'Tanto faz'], correta: 0, explicacao: 'No violão, parar o som exige ação.' },
        { texto: 'Se o ritmo e as notas estão difíceis ao mesmo tempo, o que fazer?', opcoes: ['Separar: ritmo na corda solta, depois notas devagar, depois juntar', 'Tocar mais rápido', 'Tocar mais devagar só uma vez', 'Pular o trecho'], correta: 0, explicacao: 'Dois problemas juntos viram um problema insolúvel.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco os seis padrões a 72 BPM sem errar o tempo.',
          'Conto em voz alta durante todos eles.',
          'As pausas são silêncio de verdade.',
          'Toco a melodia final no ritmo do padrão 4.'
        ],
        criterio: 'Você domina quando toca os seis padrões seguidos, sem parar, com o metrônomo a 72 BPM.'
      }
    }
  ]
};
