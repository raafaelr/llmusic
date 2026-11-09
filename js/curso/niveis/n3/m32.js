// NÍVEL 3 · MÓDULO 3.2 — Técnica instrumental
// Sete aulas: escalas em duas oitavas, pestana, arpejos avançados, ligados em
// sequência e saltos, harmônicos naturais, sustentação e legato, e o método
// de estudo com metrônomo.

export const M32 = {
  id: '3.2',
  titulo: 'Técnica instrumental',
  objetivo: 'Sair da primeira posição e dominar o braço inteiro: escalas longas, pestana, arpejos complexos, ligados encadeados, harmônicos e o controle da duração de cada nota.',
  aulas: [

    // ---------------------------------------------------------------- 3.2.1
    {
      id: 'n3.2.1',
      titulo: 'Escalas em duas oitavas',
      resumo: 'Atravessar o braço com digitação organizada.',
      minutos: 18,
      disciplinas: ['tecnica'],
      prereq: ['n2.2.5', 'n2.2.6'],
      status: 'validado',
      cobre: ['Escalas em duas oitavas', 'Escalas maiores e menores'],
      objetivo: 'Tocar escalas de duas oitavas com mudança de posição limpa e som parelho.',
      blocos: [
        { t: 'p', x: 'Uma escala de uma oitava cabe na primeira posição. Duas oitavas obrigam a mão a atravessar o braço — e é aí que a técnica cresce de verdade.' },
        { t: 'h', x: 'O princípio da digitação' },
        {
          t: 'passos', itens: [
            'Divida a escala em *blocos de posição*: trechos em que a mão fica parada.',
            'A mudança acontece sempre numa nota específica, escolhida de antemão. Nunca "quando der".',
            'Prefira mudar numa corda em que o dedo-guia possa deslizar.',
            'Decore a digitação *antes* de treinar a velocidade. Digitação indecisa nunca fica rápida.'
          ]
        },
        { t: 'h', x: 'Dó maior em duas oitavas' },
        { t: 'braco', casas: 9, notas: [
          { corda: 5, casa: 3, rotulo: 'Dó', classe: 'raiz' }, { corda: 4, casa: 0, rotulo: 'Ré' }, { corda: 4, casa: 2, rotulo: 'Mi' }, { corda: 4, casa: 3, rotulo: 'Fá' },
          { corda: 3, casa: 0, rotulo: 'Sol' }, { corda: 3, casa: 2, rotulo: 'Lá' }, { corda: 2, casa: 0, rotulo: 'Si' }, { corda: 2, casa: 1, rotulo: 'Dó', classe: 'raiz' },
          { corda: 2, casa: 3, rotulo: 'Ré' }, { corda: 1, casa: 0, rotulo: 'Mi' }, { corda: 1, casa: 1, rotulo: 'Fá' }, { corda: 1, casa: 3, rotulo: 'Sol' },
          { corda: 1, casa: 5, rotulo: 'Lá' }, { corda: 1, casa: 7, rotulo: 'Si' }, { corda: 1, casa: 8, rotulo: 'Dó', classe: 'raiz' }
        ], tocar: true, bpm: 120, legenda: 'Dó maior, duas oitavas. A segunda oitava sobe pela 1ª corda: é lá que acontece a mudança de posição.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[4, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[2, 3]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 7]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 8]], fig: 'minima', dedo: 'i' }] }
          ],
          legenda: 'Mão esquerda: 3 · 0 2 3 · 0 2 · 0 1 || 3 · 0 1 3 (muda para a 5ª posição) 1 3 4.',
          tocar: true, bpm: 88
        },
        { t: 'p', x: 'A mudança acontece do Sol (1ª corda, casa 3, dedo 3) para o Lá (casa 5, dedo 1). O dedo 1 pula para a casa 5 e a mão inteira vai junto: é uma mudança da 1ª para a 5ª posição.' },
        { t: 'h', x: 'Sol maior em duas oitavas' },
        { t: 'braco', casas: 12, notas: [
          { corda: 6, casa: 3, rotulo: 'Sol', classe: 'raiz' }, { corda: 5, casa: 0, rotulo: 'Lá' }, { corda: 5, casa: 2, rotulo: 'Si' }, { corda: 5, casa: 3, rotulo: 'Dó' },
          { corda: 4, casa: 0, rotulo: 'Ré' }, { corda: 4, casa: 2, rotulo: 'Mi' }, { corda: 4, casa: 4, rotulo: 'Fá♯' }, { corda: 3, casa: 0, rotulo: 'Sol', classe: 'raiz' },
          { corda: 3, casa: 2, rotulo: 'Lá' }, { corda: 2, casa: 0, rotulo: 'Si' }, { corda: 2, casa: 1, rotulo: 'Dó' }, { corda: 2, casa: 3, rotulo: 'Ré' },
          { corda: 1, casa: 0, rotulo: 'Mi' }, { corda: 1, casa: 2, rotulo: 'Fá♯' }, { corda: 1, casa: 3, rotulo: 'Sol', classe: 'raiz' }
        ], tocar: true, bpm: 120, legenda: 'Sol maior, duas oitavas, inteira na primeira posição: nenhuma mudança necessária. É a escala mais confortável do violão.' },
        { t: 'h', x: 'Como estudar' },
        {
          t: 'passos', itens: [
            'Toque só a mão esquerda, sem a direita, decorando a digitação.',
            'Toque devagar com apoyando, alternando i e m.',
            'Isole a mudança de posição e repita dez vezes só ela.',
            'Suba e desça: descer é mais difícil.',
            'Escada de velocidade: comece a 60 BPM, uma nota por clique; chegue a 100; depois passe para duas notas por clique a partir de 60.'
          ]
        },
        { t: 'metronomo', titulo: 'Escada de velocidade', bpm: 60, compasso: '4/4', x: 'Uma nota por clique até 100. Depois duas notas por clique.' },
        {
          t: 'tocar', titulo: 'Confira a segunda oitava de Dó',
          seq: [{ corda: 2, casa: 3 }, { corda: 1, casa: 0 }, { corda: 1, casa: 1 }, { corda: 1, casa: 3 }, { corda: 1, casa: 5 }, { corda: 1, casa: 7 }, { corda: 1, casa: 8 }],
          rotulo: 'Ré, Mi, Fá, Sol, Lá, Si, Dó',
          x: 'Inclui a mudança de posição do Sol para o Lá. Confira se as notas da 5ª posição saem afinadas.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Digitação diferente a cada repetição.', certo: 'Decida e decore a digitação antes de treinar velocidade.' },
            { erro: 'Hesitar na mudança de posição.', certo: 'Isole a mudança e repita só ela, dez vezes.' },
            { erro: 'As notas da segunda oitava saírem desafinadas.', certo: 'Confira a precisão do salto do dedo 1. Use as marcas do braço como referência.' },
            { erro: 'Só subir.', certo: 'Sempre nos dois sentidos.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Divida a escala em blocos de posição e decida onde a mudança acontece.',
            'Decore a digitação antes de buscar velocidade.',
            'Isole a mudança de posição como exercício separado.',
            'Sol maior cabe inteira na primeira posição em duas oitavas.',
            'Suba e desça sempre, com apoyando e alternância i–m.'
          ]
        }
      ],
      quiz: [
        { texto: 'Onde acontece a mudança de posição em Dó maior de duas oitavas?', opcoes: ['Do Sol (1ª/3) para o Lá (1ª/5)', 'Do Dó para o Ré', 'Na 2ª corda', 'Não há mudança'], correta: 0, explicacao: 'O dedo 1 vai para a casa 5.' },
        { texto: 'Por que Sol maior é a escala mais confortável do violão?', opcoes: ['Porque cabe inteira na primeira posição em duas oitavas', 'Porque tem poucas notas', 'Porque não tem alterações', 'Porque é mais aguda'], correta: 0, explicacao: 'A afinação do violão favorece Sol.' },
        { texto: 'O que decorar primeiro ao estudar uma escala nova?', opcoes: ['A digitação', 'A velocidade', 'O volume', 'O timbre'], correta: 0, explicacao: 'Digitação indecisa nunca fica rápida.' },
        { texto: 'Como treinar a mudança de posição de uma escala?', opcoes: ['Isolando-a e repetindo só ela', 'Tocando a escala inteira mais vezes', 'Acelerando', 'Pulando a nota'], correta: 0, explicacao: 'O problema isolado se resolve muito mais rápido.' },
        { texto: 'O que é um "bloco de posição"?', opcoes: ['Um trecho da escala em que a mão fica parada', 'Um grupo de quatro notas', 'Um compasso', 'Uma corda inteira'], correta: 0, explicacao: 'A escala se divide em blocos separados por mudanças.' },
        { texto: 'Qual toque usar nas escalas?', opcoes: ['Apoyando', 'Tirando', 'Os dois alternados', 'Polegar'], correta: 0, explicacao: 'O som cantado da melodia.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco Dó maior em duas oitavas, subindo e descendo, com a mudança limpa.',
          'Toco Sol maior em duas oitavas na primeira posição.',
          'As notas da segunda oitava saem afinadas.',
          'Chego a 100 BPM com uma nota por clique.'
        ],
        criterio: 'Você domina quando a escala sai parelha nos dois sentidos, sem hesitação na mudança de posição.'
      }
    },

    // ---------------------------------------------------------------- 3.2.2
    {
      id: 'n3.2.2',
      titulo: 'A pestana',
      resumo: 'O obstáculo que trava mais gente — e como passar por ele.',
      minutos: 20,
      disciplinas: ['tecnica'],
      prereq: ['n2.2.6'],
      status: 'validado',
      cobre: ['Pestana completa e meia pestana'],
      objetivo: 'Fazer pestana com som limpo em todas as cordas, sem dor e sem travar a mão.',
      blocos: [
        { t: 'p', x: 'A pestana assusta e trava muita gente por meses. Quase sempre o problema não é falta de força: é *posicionamento*. Com o dedo no lugar certo, a força necessária cai pela metade.' },
        { t: 'h', x: 'Os cinco ajustes que resolvem' },
        {
          t: 'passos', itens: [
            '*Perto do traste.* Deite o dedo 1 bem junto ao traste da frente, nunca no meio da casa. Isso sozinho corta metade do esforço.',
            '*Use a lateral do dedo.* Role o indicador ligeiramente para fora, usando o lado da unha. A lateral é mais dura e tem menos dobras que a polpa macia do meio.',
            '*Fuja das articulações.* As linhas das dobras do dedo são moles e deixam a corda abafada. Desloque o dedo até que nenhuma corda caia em cima de uma dobra.',
            '*O polegar atrás, no meio.* Apontando para cima, mais ou menos atrás do dedo 1. Nunca por cima do braço.',
            '*A força vem do braço, não da pinça.* Deixe o peso do antebraço puxar o braço do violão para trás, contra o dedo. Apertar com o polegar é o caminho mais curto para a tendinite.'
          ]
        },
        {
          t: 'aviso', x: 'Se a sua mão dói, pare. Pestana se constrói em semanas, com sessões curtas: 3 minutos, várias vezes ao dia. Vinte minutos seguidos não constroem nada além de lesão.'
        },
        { t: 'h', x: 'O teste diagnóstico' },
        { t: 'p', x: 'Faça a pestana na casa 5 e toque corda por corda, da 6ª à 1ª. Anote quais falham. Quase sempre são a 2ª ou a 3ª, porque caem em cima de uma articulação. Role o dedo um pouco e teste de novo. Em poucos minutos você acha a sua posição.' },
        { t: 'braco', casas: 7, pestana: { casa: 5, de: 1, ate: 6 }, notas: [
          { corda: 1, casa: 5, rotulo: '1' }, { corda: 6, casa: 5, rotulo: '1' }
        ], legenda: 'Pestana solta na casa 5. Comece aqui: a tensão da corda é menor e o espaçamento é mais confortável.' },
        { t: 'h', x: 'A escada descendente' },
        { t: 'p', x: 'O melhor jeito de construir pestana: comece na casa 5, onde é fácil, e desça uma casa por semana. Casa 5, depois 4, depois 3, 2 e só então a casa 1, que é a mais difícil de todas.' },
        { t: 'h', x: 'Os acordes com pestana' },
        { t: 'acorde', lista: [
          { nome: 'F', desc: 'Fá maior — pestana na casa 1', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], casaInicial: 1, pestana: { casa: 1, de: 1, ate: 6 } },
          { nome: 'Bm', desc: 'Si menor — pestana na casa 2', cordas: [-1, 2, 4, 4, 3, 2], dedos: [0, 1, 3, 4, 2, 1], casaInicial: 2, pestana: { casa: 2, de: 1, ate: 5 } },
          { nome: 'Fm', desc: 'Fá menor — pestana na casa 1', cordas: [1, 3, 3, 1, 1, 1], dedos: [1, 3, 4, 1, 1, 1], casaInicial: 1, pestana: { casa: 1, de: 1, ate: 6 } },
          { nome: 'F (fácil)', desc: 'Fá sem pestana, quatro cordas', cordas: [-1, -1, 3, 2, 1, 1], dedos: [0, 0, 3, 2, 1, 1] }
        ], legenda: 'Enquanto a pestana não vem, use a versão de quatro cordas do Fá. Ela serve perfeitamente para tocar música.' },
        { t: 'h', x: 'A ordem de montagem' },
        { t: 'p', x: 'Monte os *outros dedos primeiro* e feche a pestana por último. Se você fechar a pestana antes, a mão já chega tensa e os outros dedos não acham o lugar.' },
        { t: 'h', x: 'Meia pestana' },
        { t: 'p', x: 'Muito mais frequente no repertório do que a pestana completa. O dedo 1 cobre só duas ou três cordas, a ponta fica solta e a força necessária é bem menor. Sempre que uma passagem pedir pestana mas só algumas cordas soarem, use meia pestana.' },
        { t: 'braco', casas: 5, pestana: { casa: 2, de: 1, ate: 2 }, notas: [
          { corda: 1, casa: 2, rotulo: '1' }, { corda: 2, casa: 2, rotulo: '1' }, { corda: 3, casa: 3, rotulo: '3', classe: 'raiz' }
        ], legenda: 'Meia pestana na casa 2, cobrindo a 1ª e a 2ª cordas.' },
        {
          t: 'check', chave: 'pestana', titulo: 'Programa de 5 semanas',
          itens: ['Semana 1: pestana solta na casa 5, corda por corda', 'Semana 2: casa 4 e casa 3', 'Semana 3: casa 2 e casa 1', 'Semana 4: acorde de Fá completo', 'Semana 5: troca Am → F → C → G no tempo']
        },
        { t: 'metronomo', titulo: 'Troca de acorde com pestana', bpm: 50, compasso: '4/4', x: 'Quatro tempos em cada acorde: Am, F, C, G. Monte o acorde seguinte no tempo 4.' },
        {
          t: 'erros', itens: [
            { erro: 'Usar a polpa macia do meio do dedo.', certo: 'Role para a lateral.' },
            { erro: 'Pestana no meio da casa.', certo: 'Junto ao traste da frente.' },
            { erro: 'Apertar com o polegar.', certo: 'A força vem do peso do braço.' },
            { erro: 'Treinar 20 minutos seguidos.', certo: 'Três minutos, várias vezes ao dia.' },
            { erro: 'Fechar a pestana antes dos outros dedos.', certo: 'Os outros dedos primeiro; a pestana fecha por último.' },
            { erro: 'Insistir na casa 1 desde o começo.', certo: 'Comece na casa 5 e desça uma casa por semana.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Perto do traste, na lateral do dedo, fugindo das articulações.',
            'Polegar atrás; a força vem do peso do braço.',
            'Comece na casa 5 e desça uma casa por semana.',
            'Monte os outros dedos primeiro; a pestana fecha por último.',
            'Meia pestana resolve a maior parte do repertório com muito menos esforço.',
            'Sessões curtas. Dor significa parar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a causa mais comum de uma pestana abafada?', opcoes: ['Alguma corda cair em cima de uma articulação do dedo', 'Falta de força', 'Corda velha', 'Violão desafinado'], correta: 0, explicacao: 'Role o dedo um pouco e teste de novo.' },
        { texto: 'Onde deve ficar o dedo na pestana?', opcoes: ['Bem perto do traste da frente', 'No meio da casa', 'Em cima do traste', 'Depois do traste de trás'], correta: 0, explicacao: 'Isso sozinho corta metade do esforço.' },
        { texto: 'De onde vem a força da pestana?', opcoes: ['Do peso do braço puxando o violão para trás', 'Do polegar apertando', 'Da força do indicador', 'Do punho'], correta: 0, explicacao: 'Apertar com o polegar causa lesão.' },
        { texto: 'Em que ordem montar um acorde com pestana?', opcoes: ['Os outros dedos primeiro, a pestana por último', 'A pestana primeiro', 'Tudo ao mesmo tempo', 'Tanto faz'], correta: 0, explicacao: 'Fechar antes deixa a mão tensa.' },
        { texto: 'Em que casa começar a treinar pestana?', opcoes: ['Casa 5', 'Casa 1', 'Casa 12', 'Casa 3'], correta: 0, explicacao: 'Menos tensão de corda e espaçamento mais confortável.' },
        { texto: 'Quanto tempo de pestana por sessão?', opcoes: ['Cerca de 3 minutos, várias vezes ao dia', '20 minutos seguidos', '1 hora', 'Uma vez por semana'], correta: 0, explicacao: 'Sessões longas só causam lesão.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Faço pestana na casa 5 com as seis cordas soando limpas.',
          'Faço o acorde de Fá na casa 1 com todas as cordas soando.',
          'Mantenho a pestana por quatro compassos sem dor.',
          'Troco de um acorde aberto para a pestana dentro do tempo.',
          'Sei usar meia pestana quando só algumas cordas precisam soar.'
        ],
        criterio: 'Você domina quando toca o acorde de Fá e as seis cordas soam, sem dor e sem demorar para montar.'
      }
    },

    // ---------------------------------------------------------------- 3.2.3
    {
      id: 'n3.2.3',
      titulo: 'Arpejos avançados',
      resumo: 'Combinações que cobrem todo o repertório.',
      minutos: 18,
      disciplinas: ['tecnica'],
      prereq: ['n2.2.4'],
      status: 'validado',
      cobre: ['Arpejos com diferentes combinações'],
      objetivo: 'Dominar padrões de arpejo de 3, 4, 6 e 8 notas, com polegar móvel e cruzamentos.',
      blocos: [
        { t: 'p', x: 'Em 1812, Mauro Giuliani publicou o Op. 1, que começa com *120 fórmulas de arpejo*. Até hoje é o catálogo definitivo da mão direita, e está em domínio público. Esta aula cobre as famílias principais.' },
        { t: 'h', x: 'Família 1: arpejos ascendentes' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] }
          ], legenda: 'p-i-m-a: o padrão básico.', tocar: true, bpm: 100
        },
        { t: 'h', x: 'Família 2: descendentes' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }] }
          ], legenda: 'p-a-m-i: o anelar ataca primeiro, o que é mais difícil.', tocar: true, bpm: 96
        },
        { t: 'h', x: 'Família 3: polegar intercalado' },
        { t: 'p', x: 'O polegar aparece entre cada nota aguda, criando uma linha de baixo contínua. É o padrão de muitos estudos de Carulli e de boa parte da música popular dedilhada.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[4, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }] }
          ], legenda: 'p-i-p-m-p-a-p-m, com o polegar alternando entre a 5ª e a 4ª corda.', tocar: true, bpm: 88
        },
        { t: 'h', x: 'Família 4: cruzamentos' },
        { t: 'p', x: 'Aqui a ordem das cordas não acompanha a ordem dos dedos: o *a* pode tocar uma corda mais grave que o *m*. São os padrões mais difíceis e os que mais desenvolvem a mão.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] }
          ], legenda: 'p-m-i-a: o médio toca antes do indicador, cruzando a ordem natural.', tocar: true, bpm: 80
        },
        { t: 'h', x: 'Família 5: seis e oito notas' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[3, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[2, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }] }
          ], legenda: 'p-i-m-a-m-i-m-a: oito semicolcheias, dois tempos. Ótimo para velocidade.', tocar: true, bpm: 72
        },
        { t: 'h', x: 'Como estudar' },
        {
          t: 'passos', itens: [
            'Um padrão por dia, 3 minutos, em cordas soltas.',
            'Depois o mesmo padrão sobre um acorde de Am ou C.',
            'Depois alternando dois acordes.',
            'Sempre com metrônomo, sempre com preparação de dedo.',
            'Ao fim de um mês você terá vinte padrões sob controle.'
          ]
        },
        { t: 'metronomo', titulo: 'Metrônomo para arpejos', bpm: 66, compasso: '4/4', x: 'Comece com duas notas por clique. Suba quando estiver parelho.' },
        {
          t: 'tocar', titulo: 'Confira o cruzamento',
          seq: [{ corda: 5, casa: 0 }, { corda: 2, casa: 0 }, { corda: 3, casa: 0 }, { corda: 1, casa: 0 }],
          rotulo: 'p-m-i-a',
          x: 'O médio toca a 2ª corda antes de o indicador tocar a 3ª. Vá bem devagar.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Pular direto para os cruzamentos.', certo: 'Domine as famílias 1 a 3 antes.' },
            { erro: 'Estudar arpejos sem metrônomo.', certo: 'Regularidade é o objetivo inteiro do exercício.' },
            { erro: 'A mão balançar nos padrões de seis e oito notas.', certo: 'Só os dedos se movem. Se a mão balança, reduza a velocidade.' },
            { erro: 'Treinar sempre o mesmo padrão.', certo: 'A variedade é o que desenvolve a mão.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cinco famílias: ascendente, descendente, polegar intercalado, cruzamentos e padrões longos.',
            'Prepare sempre o dedo seguinte durante a nota anterior.',
            'Um padrão por dia, 3 minutos, com metrônomo.',
            'Giuliani Op. 1 (120 arpejos) é o catálogo completo, em domínio público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quem publicou os 120 arpejos do Op. 1?', opcoes: ['Mauro Giuliani', 'Fernando Sor', 'Matteo Carcassi', 'Francisco Tárrega'], correta: 0, explicacao: 'Em 1812; é o catálogo definitivo da mão direita.' },
        { texto: 'O que caracteriza um arpejo com cruzamento?', opcoes: ['A ordem das cordas não acompanha a ordem dos dedos', 'O polegar toca duas cordas', 'Tem oito notas', 'Usa apoyando'], correta: 0, explicacao: 'Por exemplo, p-m-i-a.' },
        { texto: 'Qual padrão tem o polegar entre cada nota aguda?', opcoes: ['p-i-p-m-p-a', 'p-i-m-a', 'p-a-m-i', 'p-m-i-a'], correta: 0, explicacao: 'Cria uma linha de baixo contínua.' },
        { texto: 'Por que p-a-m-i é mais difícil que p-i-m-a?', opcoes: ['Porque o anelar, o dedo mais fraco, ataca primeiro', 'Porque tem mais notas', 'Porque usa apoyando', 'Porque é mais rápido'], correta: 0, explicacao: 'O "a" precisa de treino extra.' },
        { texto: 'Quanto tempo por dia em cada padrão?', opcoes: ['Cerca de 3 minutos', '30 minutos', '1 hora', '10 segundos'], correta: 0, explicacao: 'Variedade vale mais que volume.' },
        { texto: 'Se a mão balança nos padrões longos, o que fazer?', opcoes: ['Reduzir a velocidade', 'Apertar mais', 'Usar apoyando', 'Mudar de acorde'], correta: 0, explicacao: 'A mão é a plataforma: só os dedos se movem.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco pelo menos um padrão de cada uma das cinco famílias.',
          'Todos com volume parelho e espaçamento exato.',
          'Consigo aplicar os padrões sobre acordes, trocando sem interromper.',
          'A mão fica parada mesmo nos padrões de oito notas.'
        ],
        criterio: 'Você domina quando toca cinco padrões diferentes seguidos, com metrônomo, sem perder a regularidade.'
      }
    },

    // ---------------------------------------------------------------- 3.2.4
    {
      id: 'n3.2.4',
      titulo: 'Ligados em sequência e saltos',
      resumo: 'Encadear ligados e atravessar o braço com precisão.',
      minutos: 16,
      disciplinas: ['tecnica'],
      prereq: ['n2.2.7', 'n3.2.1'],
      status: 'validado',
      cobre: ['Ligados ascendentes e descendentes', 'Saltos entre posições'],
      objetivo: 'Tocar sequências de ligados com volume parelho e executar saltos grandes com precisão.',
      blocos: [
        { t: 'p', x: 'Um ligado isolado é uma habilidade; vários ligados encadeados são outra. E saltos grandes exigem um tipo de controle que não se parece com nada que você fez até agora.' },
        { t: 'h', x: 'Ligados em cadeia' },
        { t: 'p', x: 'A dificuldade das cadeias é que o volume *cai a cada ligado*: cada nota tem menos energia que a anterior, porque a corda vai perdendo amplitude. Compensar isso é o trabalho.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'm' }, { pos: [[1, 3]], fig: 'colcheia', texto: 'm' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'a' }, { pos: [[1, 0]], fig: 'colcheia', texto: 'a' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'm' }, { pos: [[1, 3]], fig: 'colcheia', texto: 'm' }, { pos: [[1, 1]], fig: 'colcheia', texto: 'a' }] }
          ],
          legenda: 'Oito notas com um único ataque da mão direita. "m" = martelo, "a" = arrancado.',
          tocar: true, bpm: 60
        },
        {
          t: 'passos', itens: [
            'Comece bem devagar e *ouça o volume de cada nota*.',
            'Quando perceber a queda, aumente a energia do próximo ligado: dedo mais alto no martelo, puxada mais firme no arrancado.',
            'Nunca compense tocando a primeira nota mais forte: isso só esconde o problema.',
            'Máximo de 4 minutos por dia. A mão esquerda cansa muito rápido nesse exercício.'
          ]
        },
        { t: 'h', x: 'Ligados com três e quatro notas' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[2, 0]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', texto: 'm' }, { pos: [[2, 3]], fig: 'colcheia', texto: 'm' }, { pos: [[2, 1]], fig: 'colcheia', texto: 'a' }, { pos: [[3, 0]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', texto: 'm' }, { pos: [[3, 4]], fig: 'colcheia', texto: 'm' }, { pos: [[3, 2]], fig: 'colcheia', texto: 'a' }] }
          ],
          legenda: 'O mesmo desenho em duas cordas. Um ataque por grupo de quatro.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Saltos entre posições' },
        { t: 'p', x: 'Quando a distância é grande e o tempo é curto, não dá para deslizar. O salto exige *memória de distância* — visual e muscular ao mesmo tempo.' },
        {
          t: 'passos', itens: [
            'Pratique o salto *sem tocar*: só a mão indo e voltando, dez vezes, sentindo a distância.',
            'Use as marcas do braço (casas 5, 7, 9, 12) como referência visual. Olhe o destino *antes* de sair.',
            'Solte completamente a pressão antes de saltar. Mão tensa não é precisa.',
            '*A velocidade do salto é sempre a mesma: rápida.* O que muda é quando você sai. Em andamento lento, saia mais tarde — nunca salte devagar.',
            'Pratique "rápido com espera": salte na velocidade final e espere no destino. Depois encaixe no tempo.'
          ]
        },
        { t: 'braco', casas: 12, notas: [
          { corda: 1, casa: 1, rotulo: '1' }, { corda: 1, casa: 5, rotulo: '1', classe: 'raiz' }, { corda: 1, casa: 9, rotulo: '1', classe: 'raiz' }
        ], tocar: true, bpm: 60, legenda: 'Saltos da 1ª para a 5ª e para a 9ª posição. As marcas do braço são a sua referência.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 9]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 9]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 8]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 8]], fig: 'minima', dedo: 'm' }] }
          ],
          legenda: 'Exercício de salto. Meta: acertar 9 de 10 vezes sem corrigir.',
          tocar: true, bpm: 54
        },
        { t: 'metronomo', titulo: 'Salto no tempo', bpm: 50, compasso: '4/4', x: 'Toque no 1, salte durante o 2, toque no 3. Depois reduza o tempo de preparo.' },
        {
          t: 'erros', itens: [
            { erro: 'Saltar devagar.', certo: 'O salto é sempre rápido; o que muda é o momento da saída.' },
            { erro: 'Manter a pressão durante o salto.', certo: 'Solte completamente antes de sair.' },
            { erro: 'Procurar a casa com o olho depois de chegar.', certo: 'Olhe o destino antes de sair.' },
            { erro: 'Compensar a queda de volume dos ligados tocando a primeira nota mais forte.', certo: 'Aumente a energia dos ligados seguintes.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Em cadeias de ligados, o volume cai: compense aumentando a energia de cada ligado.',
            'Máximo de 4 minutos de ligados por dia.',
            'Salto: solte a pressão, olhe o destino antes, e vá rápido.',
            'A velocidade do salto não muda com o andamento; o momento da saída, sim.',
            'Pratique "rápido com espera" antes de encaixar no tempo.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que acontece com o volume numa cadeia de ligados?', opcoes: ['Cai a cada nota, porque a corda perde amplitude', 'Aumenta', 'Fica igual', 'Depende da corda'], correta: 0, explicacao: 'Compensar isso é o trabalho do exercício.' },
        { texto: 'Como compensar essa queda?', opcoes: ['Aumentando a energia de cada ligado seguinte', 'Tocando a primeira nota mais forte', 'Acelerando', 'Usando apoyando'], correta: 0, explicacao: 'Tocar a primeira mais forte só esconde o problema.' },
        { texto: 'Qual deve ser a velocidade de um salto?', opcoes: ['Sempre rápida, mudando só o momento da saída', 'Proporcional ao andamento', 'Lenta em música lenta', 'Média'], correta: 0, explicacao: 'Salto lento é salto impreciso.' },
        { texto: 'O que fazer com a pressão antes de saltar?', opcoes: ['Soltar completamente', 'Aumentar', 'Manter', 'Alternar'], correta: 0, explicacao: 'Mão tensa não é precisa.' },
        { texto: 'Qual é a referência visual para saltos?', opcoes: ['As marcas do braço nas casas 5, 7, 9 e 12', 'A pestana', 'O cavalete', 'A boca do violão'], correta: 0, explicacao: 'Elas existem exatamente para isso.' },
        { texto: 'Quanto tempo de ligados por dia?', opcoes: ['No máximo 4 minutos', '20 minutos', '1 hora', 'Uma vez por semana'], correta: 0, explicacao: 'A mão esquerda cansa muito rápido.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco oito notas ligadas com um único ataque, com volume parelho.',
          'Acerto o salto da casa 1 para a casa 9 em 9 de 10 tentativas.',
          'Solto a pressão antes de saltar.',
          'O salto não atrasa o tempo.'
        ],
        criterio: 'Você domina quando a cadeia de ligados não perde volume e o salto acerta sem correção.'
      }
    },

    // ---------------------------------------------------------------- 3.2.5
    {
      id: 'n3.2.5',
      titulo: 'Harmônicos naturais',
      resumo: 'O som de sino do violão.',
      minutos: 14,
      disciplinas: ['tecnica'],
      prereq: ['n1.1.6'],
      status: 'validado',
      cobre: ['Harmônicos naturais'],
      objetivo: 'Produzir harmônicos limpos nas casas 12, 7 e 5, e usá-los para afinar.',
      blocos: [
        { t: 'p', x: 'Uma corda não vibra só inteira. Ela vibra ao mesmo tempo em metades, terços, quartos — e cada uma dessas vibrações produz um som mais agudo, chamado *harmônico*. Encostando o dedo num ponto de divisão, você cancela a vibração principal e deixa só a parcial.' },
        { t: 'h', x: 'Passo a passo' },
        {
          t: 'passos', itens: [
            'Encoste a polpa do dedo *exatamente em cima do traste*, não dentro da casa. É a única técnica em que isso é correto.',
            'Encoste *de leve*: pressão zero. O dedo só toca a corda.',
            'Toque a corda com a mão direita, um pouco mais perto do cavalete que o normal.',
            '*Imediatamente* após o ataque, tire o dedo da corda.',
            'Se não sair: confira o ponto exato e a ausência de pressão.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Traste', 'Divisão da corda', 'Resultado', 'Facilidade'],
          linhas: [
            ['12', 'metade', 'Uma oitava acima da corda solta', 'muito fácil'],
            ['7', 'um terço', 'Uma oitava e uma quinta acima', 'fácil'],
            ['5', 'um quarto', 'Duas oitavas acima', 'médio'],
            ['4 e 9', 'um quinto', 'Duas oitavas e uma terça acima', 'difícil, som fraco']
          ]
        },
        { t: 'braco', casas: 12, notas: [
          { corda: 1, casa: 12, rotulo: '12', classe: 'raiz' }, { corda: 2, casa: 12, rotulo: '12', classe: 'raiz' }, { corda: 3, casa: 12, rotulo: '12', classe: 'raiz' },
          { corda: 4, casa: 12, rotulo: '12', classe: 'raiz' }, { corda: 5, casa: 12, rotulo: '12', classe: 'raiz' }, { corda: 6, casa: 12, rotulo: '12', classe: 'raiz' },
          { corda: 3, casa: 7, rotulo: '7' }, { corda: 4, casa: 7, rotulo: '7' }, { corda: 5, casa: 7, rotulo: '7' }, { corda: 6, casa: 7, rotulo: '7' }
        ], legenda: 'Os harmônicos das casas 12 e 7. Encoste exatamente em cima da barrinha de metal.' },
        { t: 'h', x: 'Uso prático: afinar com harmônicos' },
        { t: 'p', x: 'Harmônicos são sons puríssimos, sem as impurezas da nota pressionada. Isso os torna excelentes para afinar com precisão. O truque:' },
        {
          t: 'tabela',
          cab: ['Toque este harmônico...', '...e este deve soar igual'],
          linhas: [
            ['6ª corda, casa 5', '5ª corda, casa 7'],
            ['5ª corda, casa 5', '4ª corda, casa 7'],
            ['4ª corda, casa 5', '3ª corda, casa 7'],
            ['6ª corda, casa 7', '2ª corda solta'],
            ['5ª corda, casa 7', '1ª corda solta']
          ],
          legenda: 'Toque os dois e ouça a oscilação ("uou-uou"). Quando ela desaparece, está afinado. É muito mais preciso que afinar nota contra nota.'
        },
        {
          t: 'aviso', x: 'Atenção: a 3ª corda não entra na regra simples por causa do intervalo diferente entre a 3ª e a 2ª corda. Para ela, use o afinador do app ou compare o harmônico da casa 12 com a casa 12 pressionada.'
        },
        { t: 'h', x: 'Uso musical' },
        { t: 'p', x: 'Harmônicos são usados como efeito expressivo: um brilho que contrasta com as notas normais. Tárrega e Villa-Lobos os exploraram muito. Em partitura aparecem com a palavra *harm.* ou um losango sobre a nota.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 12]], fig: 'seminima', texto: 'harm' }, { pos: [[2, 12]], fig: 'seminima', texto: 'harm' }, { pos: [[3, 12]], fig: 'seminima', texto: 'harm' }, { pos: [[4, 12]], fig: 'seminima', texto: 'harm' }] },
            { notas: [{ pos: [[4, 7]], fig: 'seminima', texto: 'harm' }, { pos: [[3, 7]], fig: 'seminima', texto: 'harm' }, { pos: [[2, 12]], fig: 'minima', texto: 'harm' }] }
          ],
          legenda: 'Uma pequena frase só com harmônicos naturais.',
          tocar: true, bpm: 72
        },
        { t: 'ir', rota: 'afinador', titulo: 'Abrir o afinador', x: 'Compare os seus harmônicos com o afinador para conferir a precisão.' },
        {
          t: 'erros', itens: [
            { erro: 'Pôr o dedo dentro da casa.', certo: 'Exatamente em cima do traste.' },
            { erro: 'Apertar a corda.', certo: 'Pressão zero: só encoste.' },
            { erro: 'Deixar o dedo na corda depois do ataque.', certo: 'Tire imediatamente, senão o harmônico morre.' },
            { erro: 'Tocar perto do braço.', certo: 'Toque mais perto do cavalete: o harmônico sai mais claro.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Encoste de leve exatamente sobre o traste e tire o dedo logo após o ataque.',
            'Casa 12 dá a oitava; casa 7, a oitava mais quinta; casa 5, duas oitavas.',
            'Toque mais perto do cavalete para o harmônico sair claro.',
            'Harmônicos são excelentes para afinar com precisão.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira os harmônicos da casa 12',
          seq: [[5, 12], [4, 12], [3, 12]],
          rotulo: 'Conferir harmônicos no microfone',
          fim: 'Se o app reconheceu as três notas, o seu toque de harmônico já está limpo.',
          x: 'Encoste o dedo sobre o traste 12 (sem apertar), toque e solte o dedo. O harmônico soa uma oitava acima da corda solta, e é essa nota que o app confere.'
        },
      ],
      quiz: [
        { texto: 'Onde encostar o dedo para um harmônico natural?', opcoes: ['Exatamente em cima do traste', 'Dentro da casa', 'Logo depois do traste', 'No meio da casa'], correta: 0, explicacao: 'É a única técnica em que isso é correto.' },
        { texto: 'Quanta pressão aplicar?', opcoes: ['Nenhuma: só encoste', 'A mesma de uma nota normal', 'Mais que o normal', 'Metade'], correta: 0, explicacao: 'Pressionar mata o harmônico.' },
        { texto: 'O harmônico da casa 12 produz que nota?', opcoes: ['Uma oitava acima da corda solta', 'A mesma da corda solta', 'Uma quinta acima', 'Duas oitavas acima'], correta: 0, explicacao: 'A casa 12 é o meio exato da corda.' },
        { texto: 'E o da casa 7?', opcoes: ['Uma oitava e uma quinta acima', 'Uma oitava acima', 'Duas oitavas acima', 'Uma quinta acima'], correta: 0, explicacao: 'A corda vibra em três partes.' },
        { texto: 'O que fazer logo após o ataque?', opcoes: ['Tirar o dedo da corda', 'Apertar', 'Deixar o dedo encostado', 'Abafar'], correta: 0, explicacao: 'Senão o harmônico morre.' },
        { texto: 'Por que harmônicos servem para afinar?', opcoes: ['Porque são sons puros, sem impurezas da nota pressionada', 'Porque são mais altos', 'Porque são mais graves', 'Porque duram mais'], correta: 0, explicacao: 'A oscilação entre dois harmônicos é muito fácil de ouvir.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'O harmônico da casa 12 sai limpo nas seis cordas.',
          'Consigo também os da casa 7 e da casa 5.',
          'O som é cristalino, sem a nota fundamental junto.',
          'Afino pelo menos duas cordas usando harmônicos.'
        ],
        criterio: 'Você domina quando o harmônico da casa 12 sai de primeira em qualquer corda.'
      }
    },

    // ---------------------------------------------------------------- 3.2.6
    {
      id: 'n3.2.6',
      titulo: 'Sustentação e legato',
      resumo: 'Fazer as notas durarem o que está escrito.',
      minutos: 16,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n2.2.8'],
      status: 'validado',
      cobre: ['Sustentação das notas'],
      objetivo: 'Controlar a duração real de cada nota e tocar ligado de verdade.',
      blocos: [
        { t: 'p', x: 'Um problema invisível na partitura mas muito audível na música: *as notas não duram o que está escrito*. O dedo sai cedo porque precisa ir para outro lugar, e a nota morre antes da hora. Corrigir isso muda o som de uma peça inteira.' },
        { t: 'h', x: 'Por que acontece' },
        {
          t: 'lista', itens: [
            'O dedo precisa sair para fazer a nota seguinte na mesma corda.',
            'A digitação escolhida obriga a levantar um dedo que poderia ficar.',
            'A mão muda de posição e leva todos os dedos junto, sem necessidade.',
            'Falta de consciência: a gente simplesmente não ouve que a nota parou.'
          ]
        },
        { t: 'h', x: 'A regra de ouro da digitação' },
        {
          t: 'dica', x: '*Deixe no lugar tudo o que puder ficar.* Antes de levantar um dedo, pergunte: ele precisa mesmo sair agora? Em muitas passagens a resposta é não — e é só isso que separa um som seco de um som ligado.'
        },
        { t: 'h', x: 'Exercício de consciência' },
        {
          t: 'passos', itens: [
            'Pegue um trecho de uma peça que você já toca.',
            'Toque bem devagar, prestando atenção *só na duração das notas*. Não olhe para a técnica nem para o ritmo.',
            'Toda vez que uma nota morrer antes do tempo, pare e descubra por quê.',
            'Procure outra digitação que permita sustentar.',
            'Se não houver, aceite: às vezes é mesmo impossível. Mas quase sempre há.'
          ]
        },
        { t: 'h', x: 'Legato de duas vozes' },
        { t: 'p', x: 'Em música a duas vozes, o teste é claro: a nota longa de uma voz precisa continuar soando enquanto a outra se move. Se ela some, não é mais polifonia: é arpejo.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'seminima', dedo: 'p+m' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 1]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }], acorde: 'C' },
            { notas: [{ pos: [[5, 3], [2, 1]], fig: 'semibreve', dedo: 'p+m' }], acorde: 'C' }
          ],
          legenda: 'O baixo e a nota do médio precisam durar o compasso inteiro, enquanto o anelar se move. Mantenha os dedos da mão esquerda no lugar.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Quando o legato é impossível' },
        { t: 'p', x: 'Às vezes a física do instrumento vence: a nota seguinte está na mesma corda e o dedo tem de sair. Nesses casos existem três saídas:' },
        {
          t: 'passos', itens: [
            'Procurar a mesma nota em *outra corda* — o violão tem a mesma altura em vários lugares.',
            'Usar um *ligado* para unir as duas notas: o som não é interrompido.',
            'Aceitar a interrupção e *compensar com dinâmica*, fazendo a nota soar mais plena enquanto dura.'
          ]
        },
        { t: 'braco', casas: 12, notas: [
          { corda: 2, casa: 1, rotulo: 'Dó', classe: 'raiz' }, { corda: 3, casa: 5, rotulo: 'Dó', classe: 'raiz' }, { corda: 4, casa: 10, rotulo: 'Dó' }
        ], legenda: 'A mesma nota Dó em três lugares diferentes. Escolher o lugar certo muitas vezes resolve um problema de sustentação.' },
        { t: 'metronomo', titulo: 'Exercício de duração', bpm: 50, compasso: '4/4', x: 'Toque uma nota no clique 1 e deixe soar até o clique 4. Preste atenção: ela dura mesmo os quatro tempos?' },
        {
          t: 'erros', itens: [
            { erro: 'Levantar dedos sem necessidade.', certo: 'Antes de levantar, pergunte se ele precisa sair agora.' },
            { erro: 'Mudar a mão inteira de posição quando só um dedo precisava se mover.', certo: 'Mantenha a mão e mova só o que for necessário.' },
            { erro: 'Não ouvir que a nota parou.', certo: 'Faça o exercício de consciência: toque devagar olhando só a duração.' },
            { erro: 'Aceitar a primeira digitação que funciona.', certo: 'Procure a digitação que sustenta.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Deixe no lugar tudo o que puder ficar.',
            'A digitação certa é a que permite sustentar, não só a que alcança.',
            'Em duas vozes, a nota longa precisa durar enquanto a outra se move.',
            'Quando o legato é impossível: mude de corda, use ligado ou compense com dinâmica.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a regra de ouro da digitação para sustentação?', opcoes: ['Deixe no lugar tudo o que puder ficar', 'Use sempre o dedo mais forte', 'Prefira as cordas soltas', 'Mude de posição o mínimo'], correta: 0, explicacao: 'Antes de levantar, pergunte se o dedo precisa sair.' },
        { texto: 'Como perceber que uma nota não está durando o escrito?', opcoes: ['Tocando devagar e prestando atenção só na duração', 'Tocando mais rápido', 'Olhando a partitura', 'Usando o metrônomo'], correta: 0, explicacao: 'É um exercício de consciência auditiva.' },
        { texto: 'Quando o legato é fisicamente impossível, o que fazer?', opcoes: ['Procurar a nota em outra corda, usar ligado ou compensar com dinâmica', 'Tocar mais forte', 'Pular a nota', 'Mudar o andamento'], correta: 0, explicacao: 'O violão tem a mesma altura em vários lugares.' },
        { texto: 'Em música a duas vozes, o que caracteriza o legato correto?', opcoes: ['A nota longa continua soando enquanto a outra voz se move', 'Todas as notas são curtas', 'As vozes tocam juntas', 'A melodia é mais forte'], correta: 0, explicacao: 'Senão não é polifonia: é arpejo.' },
        { texto: 'Por que uma nota morre antes da hora com frequência?', opcoes: ['Porque o dedo sai para fazer outra nota na mesma corda', 'Porque a corda é velha', 'Porque o violão está desafinado', 'Porque o andamento é rápido'], correta: 0, explicacao: 'Daí a importância de escolher bem a digitação.' },
        { texto: 'A mesma nota existe em quantos lugares do violão?', opcoes: ['Em vários: a mesma altura aparece em cordas diferentes', 'Em um só', 'Em dois sempre', 'Depende da afinação'], correta: 0, explicacao: 'Isso é um recurso, não um problema.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco um trecho de peça mantendo todas as durações escritas.',
          'Identifico onde uma nota morre antes do tempo.',
          'Encontro digitações alternativas que permitem sustentar.',
          'Em duas vozes, a nota longa dura o compasso inteiro.'
        ],
        criterio: 'Você domina quando grava um trecho e, ao ouvir, as notas duram o que está escrito.'
      }
    },

    // ---------------------------------------------------------------- 3.2.7
    {
      id: 'n3.2.7',
      titulo: 'Estudar com metrônomo',
      resumo: 'O método que transforma esforço em progresso.',
      minutos: 14,
      disciplinas: ['tecnica'],
      prereq: ['n1.3.8'],
      status: 'validado',
      cobre: ['Exercícios com metrônomo', 'Controle de dinâmica'],
      objetivo: 'Usar o metrônomo como ferramenta de diagnóstico e de construção de velocidade, não como castigo.',
      blocos: [
        { t: 'p', x: 'O metrônomo não serve para "tocar junto com o tic-tac". Ele serve para três coisas muito específicas: *diagnosticar*, *construir velocidade* e *medir progresso*. Quem usa assim progride muito mais rápido.' },
        { t: 'h', x: '1. Diagnosticar' },
        { t: 'p', x: 'Toque uma passagem com metrônomo e preste atenção em *onde* você atrasa ou acelera. Esses pontos são o mapa exato do que precisa ser trabalhado. Sem metrônomo, você não os encontra: o cérebro compensa automaticamente.' },
        {
          t: 'lista', itens: [
            'Atrasa numa mudança de acorde? O problema é a troca.',
            'Acelera num trecho fácil? Falta controle.',
            'Atrasa numa nota aguda? Provavelmente é um salto mal preparado.',
            'Atrasa sempre no mesmo lugar? Esse é o trecho a isolar.'
          ]
        },
        { t: 'h', x: '2. Construir velocidade: a escada' },
        {
          t: 'passos', itens: [
            'Encontre o andamento em que a passagem sai *perfeitamente*, sem nenhum erro. Normalmente é bem mais lento do que você gostaria.',
            'Toque por *um minuto inteiro* nesse andamento, sem nenhum erro.',
            'Suba 4 a 6 BPM.',
            'Repita. Se errar, *volte um degrau* e fique mais tempo ali.',
            'Nunca pule degraus. A escada é mais rápida do que parece.'
          ]
        },
        {
          t: 'dica', titulo: 'Por que isso funciona: ',
          x: 'o cérebro aprende o que você repete. Tocando rápido e errado, você treina o erro. Tocando devagar e certo, você constrói o movimento correto — e o movimento correto fica rápido sozinho.'
        },
        { t: 'metronomo', titulo: 'Pratique a escada', bpm: 60, compasso: '4/4', x: 'Escolha uma passagem. Encontre o andamento perfeito, faça um minuto, suba 6 BPM.' },
        { t: 'h', x: '3. Medir progresso' },
        { t: 'p', x: 'Anote o andamento máximo de cada exercício a cada semana. É a única forma objetiva de saber se você está melhorando. A sensação engana; o número não.' },
        { t: 'ir', rota: 'exercicios', titulo: 'Central de Exercícios', x: 'Lá você registra o andamento atingido em cada exercício e acompanha a evolução.' },
        { t: 'h', x: 'Técnicas avançadas de metrônomo' },
        {
          t: 'tabela',
          cab: ['Técnica', 'Como fazer', 'Para que serve'],
          linhas: [
            ['Clique no contratempo', 'Conte 1-2-3-4, mas ponha o clique no "e"', 'Firmar o senso interno de pulso'],
            ['Clique só no tempo 1', 'Um clique por compasso', 'Obriga você a manter o tempo sozinho'],
            ['Clique a cada dois compassos', 'Metrônomo bem lento', 'Teste severo de estabilidade'],
            ['Subdividir', 'Clique em colcheias', 'Precisão nas subdivisões difíceis']
          ]
        },
        {
          t: 'aviso', x: 'Uma ressalva importante: *nem tudo se toca com metrônomo*. Música expressiva tem rubato, respiração, acelerações e desacelerações propositais. Use o metrônomo para construir a base e depois solte-o para tocar musicalmente.'
        },
        {
          t: 'check', chave: 'metronomo3', titulo: 'Rotina semanal',
          itens: ['Escolhi 3 exercícios para medir', 'Anotei o andamento máximo de cada um', 'Fiz a escada de velocidade em pelo menos um', 'Pratiquei com o clique só no tempo 1', 'Toquei uma peça sem metrônomo, musicalmente']
        },
        {
          t: 'erros', itens: [
            { erro: 'Subir a velocidade sem conseguir um minuto perfeito.', certo: 'Um minuto inteiro sem erro é a condição para subir.' },
            { erro: 'Começar rápido demais.', certo: 'O andamento inicial é o da passagem mais difícil.' },
            { erro: 'Usar metrônomo só nos exercícios.', certo: 'Use nas peças também, pelo menos no começo do estudo.' },
            { erro: 'Nunca soltar o metrônomo.', certo: 'Música expressiva precisa de liberdade. Construa a base e depois solte.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O metrônomo diagnostica, constrói velocidade e mede progresso.',
            'A escada: um minuto perfeito, sobe 6 BPM; errou, desce um degrau.',
            'Tocar rápido e errado treina o erro.',
            'Anote o andamento máximo por semana: a sensação engana, o número não.',
            'Depois de construir a base, solte o metrônomo e toque musicalmente.'
          ]
        }
      ],
      quiz: [
        { texto: 'Para que serve o metrônomo além de marcar o tempo?', opcoes: ['Diagnosticar onde você atrasa e medir progresso', 'Aumentar o volume', 'Afinar', 'Escolher o repertório'], correta: 0, explicacao: 'Sem ele, o cérebro compensa e você não encontra os pontos fracos.' },
        { texto: 'Qual é a condição para subir um degrau na escada de velocidade?', opcoes: ['Um minuto inteiro sem nenhum erro', 'Acertar uma vez', 'Passar uma semana', 'Sentir-se confiante'], correta: 0, explicacao: 'Essa é a regra que faz o método funcionar.' },
        { texto: 'Se você errar no novo andamento, o que fazer?', opcoes: ['Voltar um degrau e ficar mais tempo ali', 'Insistir', 'Subir mais', 'Parar de usar metrônomo'], correta: 0, explicacao: 'A escada só funciona sem pular degraus.' },
        { texto: 'Por que tocar rápido e errado é prejudicial?', opcoes: ['Porque o cérebro aprende o que você repete, inclusive o erro', 'Porque cansa mais', 'Porque desafina', 'Porque quebra as cordas'], correta: 0, explicacao: 'Devagar e certo constrói o movimento correto.' },
        { texto: 'O que significa pôr o clique no contratempo?', opcoes: ['O clique cai no "e" entre os tempos', 'O clique é mais rápido', 'O clique é mais lento', 'O clique só no tempo 1'], correta: 0, explicacao: 'Firma o senso interno de pulso.' },
        { texto: 'Deve-se usar metrônomo o tempo todo?', opcoes: ['Não: música expressiva precisa de liberdade depois que a base está construída', 'Sim, sempre', 'Só nas peças', 'Só nas escalas'], correta: 0, explicacao: 'Construa a base e depois solte.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Uso a escada de velocidade em pelo menos um exercício.',
          'Anoto o andamento máximo semanalmente.',
          'Identifico, com o metrônomo, onde atraso numa peça.',
          'Consigo tocar com o clique só no tempo 1.',
          'Toco uma peça sem metrônomo, com liberdade expressiva.'
        ],
        criterio: 'Você domina quando o metrônomo virou ferramenta de diagnóstico, não apenas acompanhamento.'
      }
    },
    {
      id: 'n3.2.8',
      titulo: 'Independência dos dedos e mudanças de posição',
      resumo: 'Cada dedo obedecendo sozinho, e a mão viajando pelo braço sem perder o tempo.',
      minutos: 20,
      disciplinas: ['tecnica'],
      prereq: ['n3.2.1', 'n3.2.4'],
      status: 'validado',
      cobre: ['Independência dos dedos', 'Mudanças de posição'],
      objetivo: 'Treinar cada dedo da mão esquerda a agir sem arrastar os vizinhos e deslocar a mão entre posições sem interromper o som.',
      blocos: [
        { t: 'p', x: 'Duas dificuldades aparecem juntas por volta desta altura do estudo: os dedos *se atrapalham entre si*, e a mão *não consegue mudar de lugar* no braço sem que a música pare. As duas têm a mesma raiz: a mão ainda trabalha como um bloco só. Esta aula separa esse bloco em quatro dedos e ensina a mão a viajar.' },
        { t: 'h', x: 'Parte 1 — Independência dos dedos' },
        {
          t: 'def', termo: 'Independência',
          x: 'Capacidade de mover um dedo *sem que os outros se mexam*. Não é força: é controle. O dedo 4 não precisa ficar forte, precisa ficar obediente.'
        },
        { t: 'p', x: 'Anatomicamente, os dedos 3 e 4 compartilham tendões: quando um sobe, o outro tende a ir junto. Isso não se corrige com esforço, e sim com repetição lenta e consciente. Você não vai *vencer* a anatomia — vai ensinar o cérebro a enviar ordens separadas.' },
        { t: 'mao', lado: 'esquerda', destacar: ['3', '4'], legenda: 'Os dedos 3 e 4 são os que mais se arrastam um ao outro. São eles que pedem o trabalho específico desta aula.' },
        { t: 'h3', x: 'Exercício 1 — o dedo que fica' },
        {
          t: 'passos', itens: [
            'Ponha o dedo 1 na 1ª corda, casa 5, e toque. Mantenha o dedo 1 apertado durante todo o exercício.',
            'Sem levantar o 1, ponha o dedo 2 na casa 6 e toque.',
            'Sem levantar o 1 nem o 2, ponha o 3 na casa 7 e toque.',
            'Sem levantar nenhum, ponha o 4 na casa 8 e toque.',
            'Agora levante só o 4 e toque a nota do 3. Depois só o 3, e toque a do 2. Depois só o 2.',
            'Repita na 2ª corda, na 3ª, até a 6ª. Depois volte.'
          ]
        },
        {
          t: 'braco', casas: 9,
          notas: [
            { corda: 1, casa: 5, classe: 'dedo1', rotulo: '1' },
            { corda: 1, casa: 6, classe: 'dedo2', rotulo: '2' },
            { corda: 1, casa: 7, classe: 'dedo3', rotulo: '3' },
            { corda: 1, casa: 8, classe: 'dedo4', rotulo: '4' }
          ],
          legenda: 'Um dedo por casa, todos apertados ao mesmo tempo. Essa é a "mão aberta" da 5ª posição.',
          tocar: true, bpm: 60
        },
        {
          t: 'dica', titulo: 'O ponto da aula: ',
          x: 'o que importa não é a nota que soa, e sim os dedos que *não se mexeram*. Olhe para a mão enquanto toca: se o 4 sobe quando o 3 levanta, vá mais devagar.'
        },
        { t: 'h3', x: 'Exercício 2 — pares cruzados' },
        { t: 'p', x: 'Toque pares de dedos nas combinações difíceis, sempre na mesma posição, alternando devagar: 1-2, 1-3, 1-4, 2-3, 2-4 e *3-4*. O par 3-4 é o mais difícil e o que mais rende.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[2, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 7]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 8]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 6]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 7]], fig: 'colcheia', dedo: 'm' }, { pos: [[2, 7]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 8]], fig: 'colcheia', dedo: 'm' }] }
          ],
          legenda: 'Mão esquerda, 5ª posição: 1-3, 1-4, 2-3, 3-4. A mão não sai do lugar; só os dedos trabalham.',
          tocar: true, bpm: 72
        },
        { t: 'metronomo', titulo: 'Pares cruzados com clique', bpm: 60, compasso: '4/4', x: 'Uma nota por clique. Suba de 4 em 4 BPM só quando o par 3-4 sair limpo.' },
        { t: 'h', x: 'Parte 2 — Mudanças de posição' },
        {
          t: 'def', termo: 'Posição',
          x: 'A casa onde o *dedo 1* está. Mão na 5ª posição = dedo 1 na casa 5, dedo 2 na 6, dedo 3 na 7, dedo 4 na 8. Mudar de posição é levar a mão inteira para outra casa.'
        },
        { t: 'p', x: 'A mudança de posição é o que permite tocar o braço inteiro. E é onde quase todo aluno atrasa o tempo, porque faz a mudança em três movimentos separados: solta, procura, aperta. O movimento correto é *um só*.' },
        {
          t: 'comparar',
          a: { titulo: 'O que atrasa', itens: ['Levantar os dedos e só depois mover a mão.', 'Olhar para o braço antes de mover.', 'Apertar o polegar e arrastá-lo.', 'Procurar a casa com o olho, não com a distância.'] },
          b: { titulo: 'O que funciona', itens: ['Aliviar a pressão sem perder o contato com a corda.', 'O polegar sai primeiro, guiando a mão.', 'O braço (e não o pulso) leva a mão.', 'O dedo-guia desliza pela corda até a casa nova.'] }
        },
        { t: 'h3', x: 'A regra do dedo-guia' },
        { t: 'p', x: 'Em quase toda mudança existe um dedo que pode *deslizar* pela corda em vez de saltar no ar. Ele é o dedo-guia: alivia a pressão, mantém o contato e desliza. A mão chega na nova posição já no lugar, porque o dedo nunca perdeu a referência.' },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 5]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 7]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 9]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[1, 7]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 5]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 3]], fig: 'seminima', dedo: 'm' }] }
          ],
          legenda: 'Só o dedo 1, deslizando pela 1ª corda: casa 3 → 5 → 7 → 9 e volta. O som não para entre as casas.',
          tocar: true, bpm: 60
        },
        {
          t: 'passos', itens: [
            'Toque a nota da casa 3 com o dedo 1 e deixe soar.',
            'Alivie a pressão do dedo sem soltar a corda (o som vai morrer um pouco: é normal).',
            'Deslize até a casa 5 mantendo o contato, e aperte de novo ao chegar.',
            'Toque a corda só depois de a mão já estar posicionada.',
            'O polegar acompanha atrás, no meio do braço — ele nunca fica para trás.'
          ]
        },
        {
          t: 'tocar', titulo: 'Confira a sua mudança de posição',
          seq: [[1, 3], [1, 5], [1, 7], [1, 9], [1, 7], [1, 5], [1, 3]],
          rotulo: 'Conferir no microfone',
          fim: 'Agora faça o mesmo caminho com o dedo 2 e depois com o dedo 3.',
          x: 'Toque devagar, uma nota por vez. O app confere se você chegou na casa certa: Sol, Lá, Si, Dó sustenido e volta.'
        },
        { t: 'h3', x: 'Mudanças longas: o salto preparado' },
        { t: 'p', x: 'Quando não há dedo-guia possível (um salto da 1ª para a 9ª posição, por exemplo), a mudança precisa ser *preparada*: você rouba tempo da nota anterior, não da nota seguinte. Encurte levemente a última nota antes do salto e chegue no tempo. Ninguém percebe a nota encurtada; todos percebem o atraso.' },
        { t: 'metronomo', titulo: 'Salto no tempo', bpm: 54, compasso: '4/4', x: 'Toque a casa 3 no tempo 1 e a casa 10 no tempo 3. Dois tempos para viajar. Vá subindo o andamento até ter só um tempo.' },
        {
          t: 'check', chave: 'independencia', titulo: 'Rotina de cinco minutos',
          itens: [
            'Fiz o exercício do dedo que fica nas seis cordas.',
            'Fiz os seis pares cruzados, com atenção especial ao 3-4.',
            'Deslizei o dedo-guia pela 1ª corda, da casa 3 até a 9 e de volta.',
            'Fiz uma mudança longa com o metrônomo, encurtando a nota anterior.',
            'Observei a mão no espelho (ou no celular) para ver se os dedos ficavam quietos.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Fixação', rodadas: 6,
          perguntas: [
            { texto: 'A mão está na 7ª posição. Onde está o dedo 1?', opcoes: ['Casa 7', 'Casa 1', 'Casa 8', 'Casa 10'], correta: 0, explicacao: 'A posição recebe o nome da casa do dedo 1.' },
            { texto: 'Nessa mesma 7ª posição, o dedo 4 cobre naturalmente a casa:', opcoes: ['10', '7', '8', '11'], correta: 0, explicacao: 'Um dedo por casa: 1 na 7, 2 na 8, 3 na 9, 4 na 10.' },
            { texto: 'O que faz o dedo-guia numa mudança de posição?', opcoes: ['Alivia a pressão e desliza pela corda sem perder o contato', 'Aperta mais forte para não escapar', 'Sai da corda e salta pelo ar', 'Fica parado enquanto os outros se movem'], correta: 0, explicacao: 'Manter o contato é o que preserva a referência de distância.' },
            { texto: 'Numa mudança longa, de onde se "rouba" o tempo?', opcoes: ['Da nota anterior ao salto', 'Da nota de chegada', 'Do compasso seguinte', 'Não se rouba tempo nenhum'], correta: 0, explicacao: 'Encurtar a nota anterior é imperceptível; atrasar a chegada não é.' },
            { texto: 'Por que os dedos 3 e 4 se arrastam um ao outro?', opcoes: ['Porque compartilham tendões', 'Porque são mais curtos', 'Porque têm menos força', 'Porque a unha é maior'], correta: 0, explicacao: 'É anatomia. Resolve-se com repetição lenta, não com força.' },
            { texto: 'Durante o exercício do dedo que fica, o que mais importa?', opcoes: ['Os dedos que não se mexeram', 'A velocidade atingida', 'O volume do som', 'A quantidade de repetições'], correta: 0, explicacao: 'O objetivo é controle de cada dedo, não velocidade.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tentar ganhar independência com força.', certo: 'Independência é controle. Toque mais devagar, não mais forte.' },
            { erro: 'Levantar o dedo 4 junto com o 3.', certo: 'Pare, observe a mão e repita o movimento devagar até o 4 ficar quieto.' },
            { erro: 'Soltar a corda completamente para mudar de posição.', certo: 'Alivie a pressão mantendo o contato: o dedo-guia desliza.' },
            { erro: 'Mover o pulso em vez do braço.', certo: 'O antebraço leva a mão. O pulso fica estável, no mesmo ângulo.' },
            { erro: 'Deixar o polegar para trás e arrastar a mão.', certo: 'O polegar sai primeiro, atrás do braço, guiando o movimento.' },
            { erro: 'Olhar para o braço em cada mudança.', certo: 'Olhe uma vez para aprender a distância e depois confie no tato.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Independência é um dedo se mover sem arrastar os vizinhos — controle, não força.',
            'Os dedos 3 e 4 compartilham tendões: precisam de trabalho específico e lento.',
            'Posição é a casa onde está o dedo 1.',
            'Na mudança, o dedo-guia alivia a pressão e desliza sem perder o contato com a corda.',
            'O polegar sai primeiro e o antebraço leva a mão; o pulso fica estável.',
            'Em saltos longos, encurte a nota anterior em vez de atrasar a chegada.'
          ]
        },
        { t: 'ir', rota: 'exercicios', titulo: 'Central de Exercícios', x: 'Registre lá o andamento máximo dos pares cruzados e do deslizamento do dedo-guia.' }
      ],
      quiz: [
        { texto: 'O que significa "mão na 5ª posição"?', opcoes: ['O dedo 1 está na casa 5', 'A mão está na 5ª corda', 'Você toca a quinta nota da escala', 'O polegar está na casa 5'], correta: 0, explicacao: 'A posição é sempre nomeada pela casa do dedo 1.' },
        { texto: 'Independência dos dedos é, acima de tudo:', opcoes: ['Controle', 'Força', 'Velocidade', 'Alongamento'], correta: 0, explicacao: 'O dedo 4 não precisa ficar forte: precisa obedecer sozinho.' },
        { texto: 'Qual é o papel do dedo-guia?', opcoes: ['Deslizar pela corda mantendo a referência de distância', 'Apertar com mais força a nota de chegada', 'Marcar o tempo da mudança', 'Abafar as cordas durante o salto'], correta: 0, explicacao: 'Sem perder o contato, a mão chega posicionada.' },
        { texto: 'Numa mudança de posição que atrasa o tempo, o que se corrige primeiro?', opcoes: ['Encurtar a nota anterior para chegar no tempo', 'Tocar a nota de chegada mais forte', 'Aumentar o andamento do metrônomo', 'Trocar o dedilhado da mão direita'], correta: 0, explicacao: 'Rouba-se tempo de antes, nunca de depois.' },
        { texto: 'Por que o par 3-4 é o mais difícil?', opcoes: ['Porque os dois dedos compartilham tendões', 'Porque ficam mais longe da pestana', 'Porque a corda é mais grossa ali', 'Porque usam unhas diferentes'], correta: 0, explicacao: 'É uma limitação anatômica, vencida com repetição lenta.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Exercício do dedo que fica, nas seis cordas, sem que nenhum dedo apertado se levante.',
          'Os seis pares cruzados a 72 BPM, uma nota por clique, com o par 3-4 limpo.',
          'Dedo-guia deslizando na 1ª corda (casas 3-5-7-9 e volta) sem interromper o som.',
          'Uma mudança longa (casa 3 → casa 10) chegando exatamente no tempo, a 72 BPM.'
        ],
        criterio: 'Você domina quando consegue levantar um dedo por vez com os outros parados e fazer a mudança de posição sem perder uma fração de tempo — tudo isso sem olhar para o braço.'
      }
    }
  ]
};
