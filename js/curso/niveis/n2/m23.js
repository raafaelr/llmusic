// NÍVEL 2 · MÓDULO 2.3 — Repertório inicial
// Quatro aulas. Todas as peças deste módulo são composições originais do LLMusic
// ou melodias de domínio público, para o app poder distribuí-las livremente.

export const M23 = {
  id: '2.3',
  titulo: 'Repertório inicial',
  objetivo: 'Sair dos exercícios e tocar música de verdade: melodias, peças didáticas, estudos e o primeiro contato com o repertório clássico.',
  aulas: [

    // ---------------------------------------------------------------- 2.3.1
    {
      id: 'n2.3.1',
      titulo: 'Melodias para tocar',
      resumo: 'Três melodias na primeira posição, do simples ao nem tanto.',
      minutos: 22,
      disciplinas: ['repertorio', 'leitura'],
      prereq: ['n2.2.1'],
      status: 'validado',
      cobre: ['Melodias populares adaptadas'],
      objetivo: 'Tocar três melodias completas, lendo a partitura, com dedilhado correto e no tempo.',
      blocos: [
        { t: 'p', x: 'Exercício técnico constrói a mão; música constrói o músico. A partir daqui, metade do seu tempo de estudo deve ser repertório.' },
        { t: 'h', x: 'Como estudar uma peça nova' },
        {
          t: 'passos', itens: [
            '*Ouça primeiro.* Toque o botão de áudio algumas vezes até a melodia estar na sua cabeça.',
            '*Leia sem tocar.* Percorra a partitura dizendo o nome das notas, sem o violão.',
            '*Divida em frases.* Quase toda melodia se divide em pedaços de 2 ou 4 compassos. Estude um pedaço por vez.',
            '*Toque muito devagar*, sem metrônomo, conferindo cada nota.',
            '*Junte as frases.* Só depois de cada uma sair limpa.',
            '*Ligue o metrônomo* e suba a velocidade em degraus.'
          ]
        },
        {
          t: 'aviso', x: 'A tentação é tocar a peça inteira do começo ao fim, muitas vezes, torcendo para melhorar. Isso não funciona: você repete o trecho fácil dez vezes e o difícil dez vezes, e o difícil continua difícil. Estude o difícil separado.'
        },
        { t: 'h', x: 'Melodia 1 — Cantiga da Liz (original)' },
        { t: 'p', x: 'Em Dó maior, 4/4. A melodia sobe de três em três notas e depois desce: é um bom treino de leitura, porque o desenho é regular e fácil de prever.' },
        {
          t: 'pauta',
          txt: 'g4 a4 b4 c5 | b4/b g4/b | a4 b4 c5 d5 | c5/b a4/b | b4 c5 d5 e5 | d5/b b4/b | c5 b4 a4 g4 | c5/o',
          formula: [4, 4], quebrar: 4, nomes: true, tocar: true, bpm: 80,
          legenda: 'Cantiga da Liz, oito compassos. Composição original do LLMusic.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 0]], fig: 'minima', dedo: 'i' }, { pos: [[3, 0]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[3, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'minima', dedo: 'i' }, { pos: [[3, 2]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 3]], fig: 'minima', dedo: 'i' }, { pos: [[2, 0]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'semibreve', dedo: 'i' }] }
          ],
          quebrar: 4,
          legenda: 'A mesma melodia em tablatura, com o dedilhado. Toque com apoyando.',
          tocar: true, bpm: 80
        },
        {
          t: 'tocar', titulo: 'Confira os quatro primeiros compassos',
          seq: [{ corda: 3, casa: 0 }, { corda: 3, casa: 2 }, { corda: 2, casa: 0 }, { corda: 2, casa: 1 }, { corda: 2, casa: 0 }, { corda: 3, casa: 0 }],
          rotulo: 'Sol, Lá, Si, Dó, Si, Sol',
          x: 'Os dois primeiros compassos. Quando saírem limpos, siga para os próximos.'
        },
        { t: 'h', x: 'Melodia 2 — Acalanto para a Lívia (original)' },
        { t: 'p', x: 'Em Lá menor, 3/4, bem devagar. Tem notas longas e uma ligadura de prolongamento no fim de cada frase: é um treino de som sustentado e de contagem.' },
        {
          t: 'pauta',
          txt: 'a4/b b4 | c5/b. | b4/b a4 | g4/q.~ g4/c z/c | a4/b c5 | e5/b. | d5/b b4 | a4/b.',
          formula: [3, 4], quebrar: 4, nomes: true, tocar: true, bpm: 66,
          legenda: 'Acalanto para a Lívia. Repare na ligadura do 4º compasso: a nota atravessa o tempo.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[3, 2]], fig: 'minima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'minima', ponto: true, dedo: 'i' }] },
            { notas: [{ pos: [[2, 0]], fig: 'minima', dedo: 'm' }, { pos: [[3, 2]], fig: 'seminima', dedo: 'i' }] },
            { notas: [{ pos: [[3, 0]], fig: 'minima', ponto: true, dedo: 'm' }] },
            { notas: [{ pos: [[3, 2]], fig: 'minima', dedo: 'i' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[1, 0]], fig: 'minima', ponto: true, dedo: 'a' }] },
            { notas: [{ pos: [[2, 3]], fig: 'minima', dedo: 'm' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'i' }] },
            { notas: [{ pos: [[3, 2]], fig: 'minima', ponto: true, dedo: 'm' }] }
          ],
          quebrar: 4,
          legenda: 'Em 3/4: conte 1-2-3 em voz alta. As notas pontuadas ocupam o compasso inteiro.',
          tocar: true, bpm: 66
        },
        { t: 'h', x: 'Melodia 3 — Estudo da ponte (original)' },
        { t: 'p', x: 'Em Sol maior, 4/4, com colcheias e um Fá sustenido. É a mais difícil das três: tem mudança de corda frequente e exige a alternância i–m firme.' },
        {
          t: 'pauta',
          txt: 'g4/c a4/c b4/c c5/c d5/b | e5/c d5/c c5/c b4/c a4/b | b4/c c5/c d5/c e5/c f5/b | g5/b z/b',
          armadura: 1, formula: [4, 4], quebrar: 2, tocar: true, bpm: 76,
          legenda: 'Estudo da ponte. A armadura tem um sustenido: todos os Fá são Fá♯.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 3]], fig: 'minima', dedo: 'i' }] },
            { notas: [{ pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 2]], fig: 'minima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 2]], fig: 'minima', dedo: 'i' }] },
            { notas: [{ pos: [[1, 3]], fig: 'minima', dedo: 'm' }] }
          ],
          quebrar: 2,
          legenda: 'O Fá♯ fica na 1ª corda, casa 2 (dedo 2). Repare como a melodia sobe sempre um pouco mais alto a cada frase.',
          tocar: true, bpm: 76
        },
        { t: 'metronomo', titulo: 'Metrônomo para as três melodias', bpm: 60, compasso: '4/4', x: 'Comece a 60 e suba até o andamento indicado em cada peça. Lembre de mudar para 3/4 no Acalanto.' },
        {
          t: 'check', chave: 'melodias2', titulo: 'Plano de 12 dias',
          itens: ['Dias 1-3: Cantiga da Liz, por frases', 'Dia 4: Cantiga completa, com metrônomo', 'Dias 5-7: Acalanto para a Lívia', 'Dia 8: Acalanto completo', 'Dias 9-11: Estudo da ponte', 'Dia 12: as três seguidas, de memória ou lendo']
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar a peça inteira repetidas vezes.', certo: 'Isole o trecho difícil e repita só ele.' },
            { erro: 'Parar e recomeçar do início ao errar.', certo: 'Siga em frente. Depois volte ao trecho.' },
            { erro: 'Esquecer o Fá♯ da armadura no Estudo da ponte.', certo: 'Antes de tocar, diga em voz alta: "tem Fá sustenido".' },
            { erro: 'Tocar sem apoyando.', certo: 'Melodia pede apoyando. Vai soar muito melhor.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Ouça, leia sem tocar, divida em frases, toque devagar, junte, só então acelere.',
            'Estude o trecho difícil em separado.',
            'Melodia se toca com apoyando.',
            'Confira a armadura antes de começar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o primeiro passo ao estudar uma peça nova?', opcoes: ['Ouvir a melodia até ela estar na sua cabeça', 'Tocar do começo ao fim', 'Decorar as notas', 'Ligar o metrônomo'], correta: 0, explicacao: 'Saber como soa evita tocar errado sem perceber.' },
        { texto: 'O que fazer quando você erra sempre no mesmo trecho?', opcoes: ['Isolar o trecho e repetir só ele, devagar', 'Tocar a peça inteira mais vezes', 'Pular o trecho', 'Tocar mais rápido'], correta: 0, explicacao: 'Repetir a peça inteira treina o erro junto.' },
        { texto: 'Em que compasso está o Acalanto para a Lívia?', opcoes: ['3/4', '4/4', '2/4', '6/8'], correta: 0, explicacao: 'Três semínimas por compasso: conte 1-2-3.' },
        { texto: 'Quantos sustenidos tem o Estudo da ponte?', opcoes: ['Um (Fá♯)', 'Nenhum', 'Dois', 'Três'], correta: 0, explicacao: 'Está em Sol maior.' },
        { texto: 'Onde fica o Fá♯ usado nessa peça?', opcoes: ['1ª corda, casa 2', '1ª corda, casa 1', '2ª corda, casa 2', '4ª corda, casa 4'], correta: 0, explicacao: 'Mi (solta), Fá (casa 1), Fá♯ (casa 2).' },
        { texto: 'Qual toque usar numa melodia?', opcoes: ['Apoyando', 'Tirando', 'Só o polegar', 'Qualquer um'], correta: 0, explicacao: 'O apoyando dá o som cantado.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco a Cantiga da Liz inteira, sem parar, no andamento indicado.',
          'Toco o Acalanto para a Lívia contando 1-2-3 corretamente.',
          'Toco o Estudo da ponte com todos os Fá sustenidos certos.',
          'Uso apoyando e alternância i–m em todas.',
          'Toco lendo a partitura, não só de memória.'
        ],
        criterio: 'Você domina quando toca as três de ponta a ponta, no tempo, sem parar.'
      }
    },

    // ---------------------------------------------------------------- 2.3.2
    {
      id: 'n2.3.2',
      titulo: 'Pequenas peças didáticas',
      resumo: 'Duas peças com acompanhamento: baixo, acordes e melodia juntos.',
      minutos: 22,
      disciplinas: ['repertorio', 'tecnica'],
      prereq: ['n2.2.4'],
      status: 'validado',
      cobre: ['Pequenas peças didáticas'],
      objetivo: 'Tocar peças em que as duas mãos fazem duas coisas ao mesmo tempo: baixo e melodia.',
      blocos: [
        { t: 'p', x: 'Até aqui você tocou uma nota de cada vez. Agora o violão vira o que ele é de verdade: um instrumento que toca a música inteira sozinho — baixo, harmonia e melodia ao mesmo tempo.' },
        { t: 'h', x: 'Peça 1 — Valsinha da Lívia (original)' },
        { t: 'p', x: 'Em Lá menor, 3/4. Arpejo p-i-m-a-m-i, uma harmonia por compasso. O desafio é manter o arpejo regular enquanto a mão esquerda troca de acorde.' },
        { t: 'acorde', lista: [
          { nome: 'Am', desc: 'Lá menor', cordas: [-1, 0, 2, 2, 1, 0], dedos: [0, 0, 2, 3, 1, 0] },
          { nome: 'Dm', desc: 'Ré menor', cordas: [-1, -1, 0, 2, 3, 1], dedos: [0, 0, 0, 2, 3, 1] },
          { nome: 'E', desc: 'Mi maior', cordas: [0, 2, 2, 1, 0, 0], dedos: [0, 2, 3, 1, 0, 0] }
        ], legenda: 'Os três acordes da Valsinha. Monte cada um e toque o botão para conferir o som.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am' },
            { notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Dm' },
            { notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Dm' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }], acorde: 'E' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }], acorde: 'Am' },
            { notas: [{ pos: [[5, 0], [3, 2], [2, 1], [1, 0]], fig: 'minima', ponto: true, dedo: 'p i m a' }], acorde: 'Am' }
          ],
          quebrar: 4,
          legenda: 'Valsinha da Lívia, oito compassos. O último é o acorde inteiro, dedilhado de uma vez.',
          tocar: true, bpm: 100
        },
        {
          t: 'dica', titulo: 'O segredo da troca de acorde: ',
          x: 'treine *só a troca*, sem tocar. Monte Am, conte 1-2-3, e no 3 monte Dm. Depois volte. Faça 20 vezes sem a mão direita. Quando a troca ficar automática, junte o arpejo.'
        },
        { t: 'h', x: 'Peça 2 — Canção de ninar (original)' },
        { t: 'p', x: 'Em Dó maior, 4/4. Aqui a melodia está na nota mais aguda e o baixo embaixo, tocados *ao mesmo tempo*. É a sua primeira peça a duas vozes.' },
        {
          t: 'pauta',
          compassos: [
            { notas: [{ midis: [48, 76], fig: 'minima' }, { midis: [48, 74], fig: 'minima' }], acorde: 'C' },
            { notas: [{ midis: [48, 72], fig: 'minima' }, { midis: [48, 71], fig: 'minima' }], acorde: 'C' },
            { notas: [{ midis: [53, 69], fig: 'minima' }, { midis: [53, 71], fig: 'minima' }], acorde: 'F' },
            { notas: [{ midis: [55, 72], fig: 'semibreve' }], acorde: 'G' },
            { notas: [{ midis: [48, 76], fig: 'minima' }, { midis: [48, 74], fig: 'minima' }], acorde: 'C' },
            { notas: [{ midis: [48, 72], fig: 'minima' }, { midis: [48, 71], fig: 'minima' }], acorde: 'C' },
            { notas: [{ midis: [55, 74], fig: 'minima' }, { midis: [55, 71], fig: 'minima' }], acorde: 'G' },
            { notas: [{ midis: [48, 72], fig: 'semibreve' }], acorde: 'C' }
          ],
          formula: [4, 4], quebrar: 4, tocar: true, bpm: 60,
          legenda: 'Duas vozes: a de cima é a melodia (toque com a), a de baixo é o baixo (toque com p). As duas soam juntas.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [1, 0]], fig: 'minima', dedo: 'p+a' }, { pos: [[5, 3], [2, 3]], fig: 'minima', dedo: 'p+m' }], acorde: 'C' },
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'minima', dedo: 'p+m' }, { pos: [[5, 3], [2, 0]], fig: 'minima', dedo: 'p+m' }], acorde: 'C' },
            { notas: [{ pos: [[4, 3], [3, 2]], fig: 'minima', dedo: 'p+i' }, { pos: [[4, 3], [2, 0]], fig: 'minima', dedo: 'p+m' }], acorde: 'F' },
            { notas: [{ pos: [[6, 3], [2, 1]], fig: 'semibreve', dedo: 'p+m' }], acorde: 'G' },
            { notas: [{ pos: [[5, 3], [1, 0]], fig: 'minima', dedo: 'p+a' }, { pos: [[5, 3], [2, 3]], fig: 'minima', dedo: 'p+m' }], acorde: 'C' },
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'minima', dedo: 'p+m' }, { pos: [[5, 3], [2, 0]], fig: 'minima', dedo: 'p+m' }], acorde: 'C' },
            { notas: [{ pos: [[6, 3], [2, 3]], fig: 'minima', dedo: 'p+m' }, { pos: [[6, 3], [2, 0]], fig: 'minima', dedo: 'p+m' }], acorde: 'G' },
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'semibreve', dedo: 'p+m' }], acorde: 'C' }
          ],
          quebrar: 4,
          legenda: 'Em tablatura. "p+m" quer dizer: polegar e médio tocam juntos, ao mesmo tempo.',
          tocar: true, bpm: 60
        },
        {
          t: 'dica', x: 'Para tocar duas notas juntas, prepare os dois dedos na corda *antes* e solte ao mesmo tempo. Se um sair antes do outro, soa como um erro em vez de um acorde.'
        },
        {
          t: 'tocar', titulo: 'Confira a melodia da Canção de ninar',
          seq: [{ corda: 1, casa: 0 }, { corda: 2, casa: 3 }, { corda: 2, casa: 1 }, { corda: 2, casa: 0 }],
          rotulo: 'Só a melodia: Mi, Ré, Dó, Si',
          x: 'Antes de juntar com o baixo, toque só a melodia. Depois só o baixo. Depois junte.'
        },
        { t: 'metronomo', titulo: 'Metrônomo', bpm: 54, compasso: '3/4', x: 'Para a Valsinha. Mude para 4/4 na Canção de ninar.' },
        {
          t: 'erros', itens: [
            { erro: 'O arpejo para quando a mão esquerda troca de acorde.', certo: 'Treine a troca sozinha, sem a direita, até ficar automática.' },
            { erro: 'As duas notas do "p+m" não saem juntas.', certo: 'Prepare os dois dedos na corda antes e solte ao mesmo tempo.' },
            { erro: 'O baixo some.', certo: 'O polegar precisa de volume próprio. Toque-o com apoio.' },
            { erro: 'A melodia fica no mesmo volume do acompanhamento.', certo: 'Toque a nota da melodia mais forte, como na aula de intensidade.' }
          ]
        },
        {
          t: 'check', chave: 'didaticas', titulo: 'Plano de 10 dias',
          itens: ['Dias 1-2: só as trocas de acorde da Valsinha', 'Dias 3-4: Valsinha com arpejo, devagar', 'Dia 5: Valsinha completa a 100 BPM', 'Dias 6-7: Canção de ninar, só a melodia e só o baixo', 'Dias 8-9: as duas vozes juntas', 'Dia 10: as duas peças seguidas']
        },
        {
          t: 'resumo', itens: [
            'Treine a troca de acorde sem a mão direita, até ficar automática.',
            'Para tocar duas notas juntas, prepare os dedos e solte ao mesmo tempo.',
            'Na peça a duas vozes: estude a melodia sozinha, o baixo sozinho, e só depois junte.',
            'A melodia precisa soar acima do acompanhamento.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a melhor forma de resolver uma troca de acorde difícil?', opcoes: ['Treinar só a troca, sem a mão direita', 'Tocar a peça mais vezes', 'Tocar mais devagar a peça inteira', 'Trocar o acorde por outro'], correta: 0, explicacao: 'Isolar o problema é sempre mais rápido.' },
        { texto: 'Em que compasso está a Valsinha da Lívia?', opcoes: ['3/4', '4/4', '6/8', '2/4'], correta: 0, explicacao: 'Valsa é sempre três tempos.' },
        { texto: 'O que significa "p+m" na tablatura?', opcoes: ['Polegar e médio tocam juntos, ao mesmo tempo', 'Primeiro p, depois m', 'Polegar com apoio', 'Dois ataques seguidos'], correta: 0, explicacao: 'É assim que se escreve duas notas simultâneas.' },
        { texto: 'Como estudar uma peça a duas vozes?', opcoes: ['Melodia sozinha, baixo sozinho, e só então as duas juntas', 'Tudo junto desde o começo', 'Só a melodia', 'Só o baixo'], correta: 0, explicacao: 'Cada voz precisa estar segura antes de somar.' },
        { texto: 'Quantas notas tem o arpejo p-i-m-a-m-i?', opcoes: ['Seis', 'Quatro', 'Três', 'Oito'], correta: 0, explicacao: 'Cabe exatamente num compasso 3/4 com colcheias.' },
        { texto: 'Numa peça com melodia e acompanhamento, o que fazer com o volume?', opcoes: ['A melodia soa mais forte que o acompanhamento', 'Tudo no mesmo volume', 'O baixo mais forte', 'O acompanhamento mais forte'], correta: 0, explicacao: 'Senão a música vira uma massa confusa.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco a Valsinha da Lívia inteira, sem o arpejo parar nas trocas.',
          'Toco a Canção de ninar com as duas vozes soando juntas.',
          'As notas simultâneas saem exatamente ao mesmo tempo.',
          'A melodia está audivelmente acima do acompanhamento.',
          'Toco as duas no andamento indicado.'
        ],
        criterio: 'Você domina quando as duas peças saem inteiras, no tempo, com a melodia se destacando.'
      }
    },

    // ---------------------------------------------------------------- 2.3.3
    {
      id: 'n2.3.3',
      titulo: 'Estudos simples',
      resumo: 'Dois estudos originais, cada um com um problema técnico para resolver.',
      minutos: 20,
      disciplinas: ['repertorio', 'tecnica'],
      prereq: ['n2.3.2'],
      status: 'validado',
      cobre: ['Estudos simples'],
      objetivo: 'Entender o que é um estudo e tocar dois, cada um treinando uma habilidade específica.',
      blocos: [
        { t: 'p', x: 'Um *estudo* é uma peça escrita com dois objetivos ao mesmo tempo: ser música e resolver um problema técnico. Os grandes compositores do violão — Sor, Carcassi, Carulli, Giuliani, Aguado — escreveram centenas deles no século XIX, e eles continuam sendo o melhor caminho até hoje.' },
        { t: 'h', x: 'Como se estuda um estudo' },
        {
          t: 'passos', itens: [
            'Primeiro, descubra *qual é o problema*. Todo estudo tem um. Está escrito no título ou aparece logo nos primeiros compassos.',
            'Isole o problema num exercício seco, sem música. Faça 2 minutos.',
            'Toque o estudo bem devagar, prestando atenção *só naquele problema*.',
            'Depois toque prestando atenção na música: fraseado, dinâmica, som.',
            'Um estudo não termina quando você consegue tocá-lo: termina quando ele fica fácil.'
          ]
        },
        { t: 'h', x: 'Estudo nº 1 — Arpejo em Lá menor (original)' },
        { t: 'p', x: '*O problema:* manter o arpejo p-i-m-a perfeitamente regular enquanto a harmonia muda a cada compasso.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'a' }], acorde: 'Dm' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'E' },
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 3]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'a' }], acorde: 'G' },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }], acorde: 'E' },
            { notas: [{ pos: [[5, 0], [3, 2], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'Am' }
          ],
          quebrar: 4,
          legenda: 'Estudo nº 1. Oito compassos: Am – Dm – E – Am – C – G – E – Am.',
          tocar: true, bpm: 72
        },
        {
          t: 'dica', x: 'Exercício seco para este estudo: toque só os baixos, com o polegar, uma nota por compasso, trocando o acorde. Depois toque só i-m-a, sem o baixo. Depois junte.'
        },
        { t: 'h', x: 'Estudo nº 2 — Baixo caminhante em Dó maior (original)' },
        { t: 'p', x: '*O problema:* independência entre o polegar, que anda melodicamente, e os dedos, que seguram um acompanhamento fixo.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 0], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }], acorde: 'C' },
            { notas: [{ pos: [[4, 2], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 3], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }], acorde: 'C/F' },
            { notas: [{ pos: [[3, 0], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 3], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }], acorde: 'G' },
            { notas: [{ pos: [[4, 2], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 0], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'm' }], acorde: 'C' },
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[5, 2], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[5, 0], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[6, 3], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }], acorde: 'Am / G' },
            { notas: [{ pos: [[6, 1], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[6, 0], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }], acorde: 'F / E' },
            { notas: [{ pos: [[5, 3], [3, 0], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'C' }
          ],
          quebrar: 4,
          legenda: 'Estudo nº 2. O polegar desce passo a passo: Dó, Ré, Mi, Fá, Sol, Fá, Mi, Ré, Dó, Si, Lá, Sol, Fá, Mi. Os dedos mantêm a nota de cima.',
          tocar: true, bpm: 66
        },
        {
          t: 'dica', x: 'Exercício seco: toque só a linha do polegar, como se fosse uma melodia. Depois toque só a nota de cima, repetida. Depois junte. O polegar é quem conta a história aqui.'
        },
        { t: 'metronomo', titulo: 'Metrônomo para os estudos', bpm: 54, compasso: '4/4', x: 'Estudo nº 1: duas notas por clique. Estudo nº 2: uma nota por clique.' },
        { t: 'h', x: 'Depois destes: o repertório de verdade' },
        { t: 'p', x: 'Quando os dois estudos acima estiverem fáceis, você está pronto para os estudos históricos. Todos de domínio público, todos escritos exatamente para este momento:' },
        {
          t: 'tabela',
          cab: ['Compositor', 'Obra', 'Por que agora'],
          linhas: [
            ['Ferdinando Carulli', 'Método Op. 27 e Op. 241', 'Peças curtíssimas, quase todas na primeira posição'],
            ['Matteo Carcassi', '25 Estudos Op. 60', 'Começam fáceis e cobrem toda a técnica básica'],
            ['Fernando Sor', 'Estudos Op. 60 e Op. 35', 'Os mais musicais; Op. 60 começa muito simples'],
            ['Dionisio Aguado', 'Método, primeiros estudos', 'Ótimos para arpejos e mão direita'],
            ['Mauro Giuliani', '120 arpejos Op. 1', 'Um catálogo de padrões de mão direita']
          ],
          legenda: 'Todos morreram há mais de cem anos, então as obras estão em domínio público. Você encontra as partituras gratuitamente em acervos como o IMSLP. No Nível 3 este repertório é estudado em detalhe.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar o estudo sem saber qual é o problema dele.', certo: 'Identifique o problema primeiro; é ele que você está treinando.' },
            { erro: 'Considerar o estudo "pronto" quando consegue tocá-lo uma vez.', certo: 'Um estudo termina quando fica fácil, não quando sai.' },
            { erro: 'Tocar o Estudo nº 2 com o polegar fraco.', certo: 'A linha do polegar é a melodia. Ela precisa aparecer.' },
            { erro: 'Pular os exercícios secos.', certo: 'São dois minutos que economizam duas semanas.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Estudo é música escrita para resolver um problema técnico.',
            'Identifique o problema, isole-o, toque devagar, depois foque na música.',
            'Estudo nº 1: regularidade do arpejo nas trocas de acorde.',
            'Estudo nº 2: independência do polegar, que carrega a melodia.',
            'Depois destes vêm Carulli, Carcassi, Sor, Aguado e Giuliani, todos em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que é um estudo?', opcoes: ['Uma peça escrita para ser música e resolver um problema técnico', 'Um exercício sem melodia', 'Uma escala', 'Uma peça de concerto'], correta: 0, explicacao: 'Os dois objetivos ao mesmo tempo.' },
        { texto: 'Qual é o problema técnico do Estudo nº 1?', opcoes: ['Manter o arpejo regular enquanto a harmonia muda', 'Tocar rápido', 'Fazer ligados', 'Usar pestana'], correta: 0, explicacao: 'Por isso o exercício seco separa baixos e dedos.' },
        { texto: 'Qual é o problema técnico do Estudo nº 2?', opcoes: ['Independência do polegar, que faz a melodia', 'Alternância i–m', 'Mudança de posição', 'Afinação'], correta: 0, explicacao: 'A linha grave caminha enquanto os dedos seguram a nota de cima.' },
        { texto: 'Quando um estudo está realmente concluído?', opcoes: ['Quando fica fácil', 'Quando sai uma vez certo', 'Quando você decora', 'Depois de uma semana'], correta: 0, explicacao: 'Sair uma vez é o começo, não o fim.' },
        { texto: 'Por que as obras de Sor, Carcassi e Carulli podem ser distribuídas livremente?', opcoes: ['Porque estão em domínio público: os autores morreram há mais de cem anos', 'Porque são fáceis', 'Porque são curtas', 'Porque foram doadas'], correta: 0, explicacao: 'Você as encontra gratuitamente em acervos como o IMSLP.' },
        { texto: 'O que é um "exercício seco"?', opcoes: ['Um trecho isolado do problema técnico, sem música', 'Um estudo sem acompanhamento', 'Tocar sem som', 'Tocar sem metrônomo'], correta: 0, explicacao: 'Dois minutos dele economizam semanas.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o Estudo nº 1 inteiro, com o arpejo regular nas oito trocas de acorde.',
          'Toco o Estudo nº 2 com a linha do polegar audível como melodia.',
          'Fiz os exercícios secos de cada um.',
          'Sei dizer qual é o problema técnico de cada estudo.',
          'Toco os dois no andamento indicado, sem parar.'
        ],
        criterio: 'Você domina quando os dois estudos saem inteiros e o problema técnico de cada um já não atrapalha.'
      }
    },

    // ---------------------------------------------------------------- 2.3.4
    {
      id: 'n2.3.4',
      titulo: 'As primeiras obras clássicas',
      resumo: 'Como se aproxima de uma peça do repertório, e um Andantino para começar.',
      minutos: 20,
      disciplinas: ['repertorio', 'interpretacao', 'historia'],
      prereq: ['n2.3.3'],
      status: 'validado',
      cobre: ['Primeiras obras de compositores clássicos'],
      objetivo: 'Tocar uma peça com estrutura e intenção musical, não só notas certas.',
      blocos: [
        { t: 'p', x: 'Uma obra do repertório não é um exercício maior. Ela tem forma, tem frases, tem um clima. Tocar as notas certas é só o primeiro quarto do trabalho.' },
        { t: 'h', x: 'As quatro camadas de uma peça' },
        {
          t: 'tabela',
          cab: ['Camada', 'Pergunta', 'O que fazer'],
          linhas: [
            ['Notas', 'Quais notas, em que ordem?', 'Ler, decifrar, achar no braço'],
            ['Ritmo', 'Quando cada uma soa?', 'Contar em voz alta, metrônomo'],
            ['Técnica', 'Como a mão faz isso?', 'Dedilhado fixo, exercícios secos'],
            ['Música', 'O que isso quer dizer?', 'Frases, respiração, dinâmica, timbre']
          ],
          legenda: 'A quarta camada é a que transforma estudo em música. Quase ninguém chega nela por falta de tempo nas três primeiras — por isso vale estudar as três rápido e bem.'
        },
        { t: 'h', x: 'Frases: onde a música respira' },
        { t: 'p', x: 'Música tem pontuação, como um texto. Uma *frase* musical é um pedaço que faz sentido sozinho, geralmente de 2 ou 4 compassos, e que termina numa nota de repouso.' },
        { t: 'p', x: 'Encontre as frases *antes* de estudar as notas: marque a lápis onde cada uma começa e termina. Depois, toque cada frase como se estivesse dizendo uma oração em voz alta: começa, cresce um pouco, e relaxa no fim.' },
        { t: 'h', x: 'Andantino em Lá menor (original do LLMusic)' },
        { t: 'p', x: 'Uma pequena peça em três partes (A–B–A), no estilo dos andantinos do começo do século XIX. É a sua primeira peça com forma de verdade.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[5, 0], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'minima', dedo: 'a' }], acorde: 'Am' },
            { notas: [{ pos: [[4, 0], [2, 3]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'minima', dedo: 'a' }], acorde: 'Dm' },
            { notas: [{ pos: [[6, 0], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'a' }], acorde: 'E' },
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[6, 3], [2, 0]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'minima', dedo: 'a' }], acorde: 'G' },
            { notas: [{ pos: [[5, 0], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[6, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[3, 1]], fig: 'seminima', dedo: 'i' }], acorde: 'Am · E' },
            { notas: [{ pos: [[5, 0], [3, 2], [2, 1], [1, 0]], fig: 'semibreve', dedo: 'p i m a' }], acorde: 'Am' }
          ],
          quebrar: 4,
          legenda: 'Parte A, oito compassos. Duas frases de quatro: a primeira termina em suspense (compasso 4, acorde de E), a segunda resolve (compasso 8, Am).',
          tocar: true, bpm: 72
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [1, 0]], fig: 'seminima', dedo: 'p+a' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'minima', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[4, 3], [1, 1]], fig: 'seminima', dedo: 'p+a' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'minima', dedo: 'a' }], acorde: 'F' },
            { notas: [{ pos: [[6, 3], [2, 3]], fig: 'seminima', dedo: 'p+m' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 3]], fig: 'minima', dedo: 'a' }], acorde: 'G' },
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'semibreve', dedo: 'p+m' }], acorde: 'C' }
          ],
          quebrar: 4,
          legenda: 'Parte B, quatro compassos. Repare que a música foi parar em Dó maior: ficou mais clara, mais aberta. Depois dela, volta-se à parte A.',
          tocar: true, bpm: 72
        },
        {
          t: 'dica', titulo: 'A forma A–B–A: ',
          x: 'toque a parte A, depois a parte B, depois a parte A outra vez. Na volta, toque um pouco mais suave: o ouvinte já conhece aquele material, e a repetição mais doce soa como um reencontro, não como uma repetição.'
        },
        { t: 'h', x: 'Dando intenção às frases' },
        {
          t: 'passos', itens: [
            'Compassos 1 a 4 (primeira frase): comece em *mf*, faça um pequeno crescendo até o compasso 3 e segure a tensão no compasso 4.',
            'Compassos 5 a 8 (segunda frase): comece igual, mas faça *diminuendo* nos dois últimos compassos: é o repouso.',
            'Parte B: um pouco mais forte e mais brilhante (toque mais perto do cavalete).',
            'Volta da parte A: mais suave, mais perto do braço, timbre doce.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a melodia da parte A',
          seq: [{ corda: 1, casa: 0 }, { corda: 1, casa: 1 }, { corda: 1, casa: 1 }, { corda: 1, casa: 0 }],
          rotulo: 'A linha de cima: Mi, Fá, Fá, Mi',
          x: 'A melodia da parte A está nas notas longas do anelar. Toque só ela para ouvir a frase.'
        },
        { t: 'h', x: 'E agora, o repertório histórico' },
        { t: 'p', x: 'Com o Andantino tocado e entendido, você tem o necessário para começar o repertório de verdade. A ordem que funciona bem:' },
        {
          t: 'passos', itens: [
            'Carulli, *Op. 241*: as primeiras peças, quase todas na primeira posição.',
            'Sor, *Op. 60 nº 1 a 5*: curtíssimas, de uma beleza desproporcional ao tamanho.',
            'Carcassi, *Op. 60 nº 1 e 2*: já exigem arpejo firme.',
            'Aguado, primeiros estudos do Método: excelentes para a mão direita.',
            'Giuliani, *Op. 1*: os 120 arpejos, para fazer cinco por dia como aquecimento.'
          ]
        },
        { t: 'p', x: 'Todas essas obras estão em domínio público e podem ser baixadas gratuitamente em acervos como o IMSLP. O Nível 3 deste curso trabalha cada um desses compositores em detalhe.' },
        { t: 'ir', rota: 'importar', titulo: 'Importar uma partitura', x: 'Se você baixar uma partitura em PDF, Guitar Pro ou MusicXML, pode importá-la aqui e estudá-la com o cursor do app.' },
        {
          t: 'erros', itens: [
            { erro: 'Parar de estudar a peça quando as notas saem.', certo: 'Aí começa a parte musical: frases, dinâmica, timbre.' },
            { erro: 'Tocar tudo no mesmo volume e no mesmo timbre.', certo: 'A parte B pede outra cor. Mude o ponto de ataque da mão direita.' },
            { erro: 'Não marcar as frases.', certo: 'Marque a lápis onde cada frase começa e termina, antes de estudar as notas.' },
            { erro: 'Repetir a parte A exatamente igual.', certo: 'Na volta, toque mais suave: é um reencontro, não uma cópia.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Uma peça tem quatro camadas: notas, ritmo, técnica e música.',
            'Frases são pedaços que fazem sentido sozinhos; marque-as antes de estudar.',
            'Forma A–B–A: na volta, toque mais suave.',
            'Use dinâmica e timbre para dar intenção às frases.',
            'O repertório histórico começa em Carulli Op. 241 e Sor Op. 60, em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quais são as quatro camadas de uma peça?', opcoes: ['Notas, ritmo, técnica e música', 'Melodia, baixo, harmonia e ritmo', 'Introdução, A, B e coda', 'Leitura, memória, velocidade e som'], correta: 0, explicacao: 'A quarta é a que transforma estudo em música.' },
        { texto: 'O que é uma frase musical?', opcoes: ['Um pedaço que faz sentido sozinho e termina em repouso', 'Um compasso', 'Uma seção inteira', 'Uma escala'], correta: 0, explicacao: 'Geralmente de 2 ou 4 compassos.' },
        { texto: 'Na forma A–B–A, como tocar a volta da parte A?', opcoes: ['Um pouco mais suave, como um reencontro', 'Exatamente igual', 'Mais rápido', 'Mais forte'], correta: 0, explicacao: 'O ouvinte já conhece o material.' },
        { texto: 'Como se muda o timbre no violão?', opcoes: ['Mudando o ponto de ataque da mão direita', 'Apertando mais a mão esquerda', 'Trocando de corda', 'Mudando o andamento'], correta: 0, explicacao: 'Perto do cavalete é brilhante; perto do braço, doce.' },
        { texto: 'Por que as obras de Carulli e Sor podem ser baixadas gratuitamente?', opcoes: ['Porque estão em domínio público', 'Porque são curtas', 'Porque são para iniciantes', 'Porque foram digitalizadas'], correta: 0, explicacao: 'Os compositores morreram há mais de cem anos.' },
        { texto: 'Qual obra é sugerida como primeiro contato com o repertório histórico?', opcoes: ['Carulli, Op. 241', 'Villa-Lobos, Estudo nº 1', 'Bach, Chaconne', 'Tárrega, Recuerdos de la Alhambra'], correta: 0, explicacao: 'Peças curtíssimas, quase todas na primeira posição.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o Andantino inteiro na forma A–B–A.',
          'Marquei as frases e toco cada uma com começo, meio e fim.',
          'Faço diferença de dinâmica entre as frases.',
          'Mudo o timbre na parte B.',
          'A melodia aparece acima do acompanhamento.'
        ],
        criterio: 'Você domina quando alguém que ouve consegue perceber onde cada frase termina, sem que você explique.'
      }
    }
  ]
};
