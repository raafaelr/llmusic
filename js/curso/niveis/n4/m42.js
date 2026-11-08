// NÍVEL 4 · MÓDULO 4.2 — Técnica avançada inicial
// Nove aulas: escalas em três oitavas e mudanças rápidas de posição, arpejos
// avançados, pestanas e aberturas, ligados em velocidade, independência do
// polegar e das vozes, timbre e abafamento, tremolo, harmônicos artificiais e
// resistência com relaxamento.

export const M42 = {
  id: '4.2',
  titulo: 'Técnica avançada inicial',
  objetivo: 'Ampliar o alcance das duas mãos: braço inteiro, velocidade com controle, várias vozes ao mesmo tempo e um som que você escolhe, não um som que acontece.',
  aulas: [

    // ---------------------------------------------------------------- 4.2.1
    {
      id: 'n4.2.1',
      titulo: 'Escalas em três oitavas e mudanças rápidas de posição',
      resumo: 'Atravessar o braço sem perder o tempo nem o som.',
      minutos: 22,
      disciplinas: ['tecnica'],
      prereq: ['n3.2.2'],
      status: 'implementado',
      cobre: ['Escalas em três oitavas', 'Mudanças rápidas de posição'],
      objetivo: 'Tocar escalas de três oitavas com a digitação de Segovia e trocar de posição sem buraco no som.',
      blocos: [
        { t: 'p', x: 'Uma escala de três oitavas ocupa quase todo o braço: começa na 6ª corda e termina perto da casa 15 da 1ª. Para isso a mão esquerda precisa *viajar*, e é na viagem que quase todo mundo perde o tempo, o som ou as duas coisas.' },
        { t: 'h', x: 'A digitação que virou padrão' },
        { t: 'p', x: 'Andrés Segovia publicou em 1953 um conjunto de escalas diatônicas maiores e menores em três oitavas que até hoje é o material padrão dos conservatórios. A ideia é simples: cada escala tem uma digitação fixa, com um número definido de mudanças de posição, sempre nos mesmos pontos.' },
        {
          t: 'braco', casas: 15, tocar: true, bpm: 100,
          notas: [
            { corda: 6, casa: 3, rotulo: '2', classe: 'raiz' }, { corda: 6, casa: 5, rotulo: '4' },
            { corda: 5, casa: 2, rotulo: '1' }, { corda: 5, casa: 3, rotulo: '2' }, { corda: 5, casa: 5, rotulo: '4' },
            { corda: 4, casa: 2, rotulo: '1' }, { corda: 4, casa: 4, rotulo: '3' }, { corda: 4, casa: 5, rotulo: '4' },
            { corda: 3, casa: 2, rotulo: '1' }, { corda: 3, casa: 4, rotulo: '3' },
            { corda: 2, casa: 3, rotulo: '1' }, { corda: 2, casa: 5, rotulo: '3' },
            { corda: 1, casa: 3, rotulo: '1' }, { corda: 1, casa: 5, rotulo: '3' }, { corda: 1, casa: 7, rotulo: '4' }
          ],
          legenda: 'Sol maior em duas oitavas e meia, com os dedos da mão esquerda. Os números são os dedos: 1 indicador, 2 médio, 3 anular, 4 mínimo.'
        },
        {
          t: 'pauta', bpm: 80, oitavaAbaixo: true,
          txt: 'g3/c a3/c b3/c c4/c d4/c e4/c f#4/c g4/c | a4/c b4/c c5/c d5/c e5/c f#5/c g5/c a5/c | b5/c c6/c d6/c e6/c f#6/c g6/q z/q',
          legenda: 'Sol maior subindo três oitavas, escrita na pauta. Lembre que o violão soa uma oitava abaixo do escrito.'
        },
        { t: 'h', x: 'Mudança de posição: a mecânica' },
        {
          t: 'def', termo: 'Mudança de posição',
          x: 'deslocar a mão esquerda inteira ao longo do braço para alcançar outra região. A "posição" é definida pela casa em que o dedo 1 trabalha: na 5ª posição, o dedo 1 cuida da casa 5.'
        },
        {
          t: 'passos', itens: [
            '*Antecipe com os olhos*: olhe para o destino antes de a mão sair. O olho vai primeiro, a mão segue.',
            '*Solte o polegar*: o polegar atrás do braço precisa viajar junto. Se ele ficar, a mão torce.',
            '*Mude durante uma nota longa ou uma corda solta*, sempre que a música permitir. É de graça.',
            '*Dedo-guia*: deixe um dedo deslizando levemente pela corda até o destino. Ele não toca com força; serve de trilho para a mão não se perder.',
            '*Chegue com o braço, não com o dedo*: o movimento vem do cotovelo e do ombro. Esticar o dedo deforma a mão.'
          ]
        },
        {
          t: 'dica', titulo: 'O exercício da mudança seca: ',
          x: 'toque o dedo 1 na casa 2 da 3ª corda, depois pule para a casa 7 da mesma corda, e volte. Faça 20 vezes, devagar, procurando *zero* ruído de deslize e *zero* atraso. Depois acrescente o metrônomo a 50 BPM, uma mudança por clique.'
        },
        {
          t: 'tab', bpm: 60, legenda: 'Exercício de mudança com dedo-guia: o dedo 1 nunca solta a corda, apenas desliza. O som deve ficar igual nas quatro notas.',
          compassos: [
            { notas: [{ pos: [[3, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 4]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 7]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 9]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[3, 7]], fig: 'seminima', dedo: 'i' }, { pos: [[3, 4]], fig: 'seminima', dedo: 'm' }, { pos: [[3, 2]], fig: 'minima', dedo: 'i' }] }
          ]
        },
        { t: 'metronomo', bpm: 50, compasso: '4/4', x: 'Comece a 50, uma nota por clique. Suba de 4 em 4 BPM só quando as mudanças saírem sem ruído.' },
        { t: 'tocar', titulo: 'Confira a chegada', seq: [[3, 2], [3, 7], [3, 2]], rotulo: 'Tocar Lá → Ré → Lá (3ª corda)', x: 'O app confere se a nota de chegada está certa e afinada. Se vier desafinada, a mão chegou torta.' },
        { t: 'h', x: 'Como estudar escalas de três oitavas' },
        {
          t: 'lista', itens: [
            '*Dois minutos por dia* bastam, mas todos os dias.',
            'Comece com apoyando, alternando i e m, volume parelho.',
            'Suba e desça sem parar entre os sentidos, como se fosse uma coisa só.',
            'Pare no primeiro erro, volte duas notas e repita o trecho. Não recomece do começo.',
            'Quando acertar três vezes seguidas, suba 4 BPM. Quando errar duas vezes, desça 4.'
          ]
        },
        {
          t: 'check', chave: 'esc3oit', titulo: 'Rotina da semana',
          itens: [
            'Sol maior em três oitavas, 60 BPM, sem erro.',
            'Mesma escala a 80 BPM.',
            'Exercício da mudança seca, 20 repetições.',
            'Lá menor (natural) em três oitavas.',
            'Uma escala nova de três oitavas por semana.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Escalas e posições', rodadas: 6,
          perguntas: [
            { texto: 'O que define a "posição" da mão esquerda?', opcoes: ['A casa em que o dedo 1 trabalha', 'A corda tocada', 'O dedo mais usado', 'A altura do braço'], correta: 0, explicacao: '5ª posição = dedo 1 na casa 5.' },
            { texto: 'Qual é o melhor momento para mudar de posição?', opcoes: ['Durante uma nota longa ou corda solta', 'No tempo forte', 'Na nota mais aguda', 'Nunca importa'], correta: 0, explicacao: 'A mudança fica inaudível.' },
            { texto: 'Para que serve o dedo-guia?', opcoes: ['Servir de trilho para a mão não se perder', 'Tocar mais alto', 'Abafar as cordas', 'Marcar o tempo'], correta: 0, explicacao: 'Desliza levemente até o destino.' },
            { texto: 'Quem publicou as escalas diatônicas em três oitavas que se tornaram padrão?', opcoes: ['Andrés Segovia', 'Francisco Tárrega', 'Fernando Sor', 'Villa-Lobos'], correta: 0, explicacao: 'Publicadas em 1953.' },
            { texto: 'O que fazer ao errar no meio da escala?', opcoes: ['Voltar duas notas e repetir o trecho', 'Recomeçar do início', 'Acelerar', 'Passar adiante'], correta: 0, explicacao: 'Repetição localizada corrige mais rápido.' },
            { texto: 'O polegar da mão esquerda, na mudança de posição:', opcoes: ['Viaja junto com a mão', 'Fica parado', 'Aperta mais', 'Sai do braço'], correta: 0, explicacao: 'Se ele fica, a mão torce.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Esticar o dedo 4 para alcançar em vez de mover a mão.', certo: 'Mude a posição inteira: a mão chega, o dedo só aperta.' },
            { erro: 'Ruído de deslize audível a cada mudança.', certo: 'Alivie a pressão do dedo-guia ao deslizar; ele apenas acompanha.' },
            { erro: 'Estudar escala rápido antes de sair limpa devagar.', certo: 'Velocidade é consequência de precisão, nunca o contrário.' },
            { erro: 'Olhar a mão direita durante a escala.', certo: 'Olhe o destino da mão esquerda; a direita já sabe o caminho.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Três oitavas = braço inteiro: a mão precisa viajar com organização.',
            'Posição é definida pela casa do dedo 1.',
            'Mude durante nota longa ou corda solta, com dedo-guia e polegar acompanhando.',
            'Dois minutos por dia, metrônomo, subindo 4 BPM a cada três acertos.'
          ]
        }
      ],
      quiz: [
        { texto: 'Na 7ª posição, o dedo 1 cuida da casa:', opcoes: ['7', '1', '5', '9'], correta: 0, explicacao: 'A posição recebe o nome da casa do dedo 1.' },
        { texto: 'Uma escala de três oitavas em Sol começa em:', opcoes: ['6ª corda, casa 3', '5ª corda, casa 2', '1ª corda solta', '4ª corda, casa 5'], correta: 0, explicacao: 'Sol grave na 6ª corda.' },
        { texto: 'O dedo-guia deve:', opcoes: ['Deslizar com pressão mínima', 'Apertar firme ao deslizar', 'Sair da corda', 'Tocar a nota de chegada'], correta: 0, explicacao: 'Se apertar, chia.' },
        { texto: 'Mudança de posição se faz principalmente com:', opcoes: ['Braço e cotovelo', 'Só o pulso', 'Só o dedo 4', 'O polegar da direita'], correta: 0, explicacao: 'O movimento vem de cima.' },
        { texto: 'Quanto tempo de escala por dia é suficiente para evoluir?', opcoes: ['Dois minutos, todos os dias', 'Uma hora, uma vez por semana', 'Trinta minutos, dois dias', 'Não é preciso estudar'], correta: 0, explicacao: 'Constância vence volume.' },
        { texto: 'Ao errar três vezes no mesmo ponto, o certo é:', opcoes: ['Isolar o trecho e baixar o andamento', 'Tocar a peça inteira de novo', 'Trocar de escala', 'Aumentar o BPM'], correta: 0, explicacao: 'Trabalho localizado.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco Sol maior em três oitavas a 80 BPM, subindo e descendo, sem erro.',
          'Faço mudanças de posição sem ruído de deslize.',
          'A nota de chegada sai afinada e no tempo.',
          'Mantenho volume parelho em todas as cordas.'
        ],
        criterio: 'Você domina quando toca a escala de três oitavas a 80 BPM com som igual e nenhuma mudança audível.'
      }
    },

    // ---------------------------------------------------------------- 4.2.2
    {
      id: 'n4.2.2',
      titulo: 'Arpejos avançados',
      resumo: 'Giuliani, 120 fórmulas e a mão direita que não pensa.',
      minutos: 20,
      disciplinas: ['tecnica'],
      prereq: ['n3.2.3'],
      status: 'implementado',
      cobre: ['Arpejos avançados'],
      objetivo: 'Dominar as fórmulas de arpejo com três e quatro dedos, incluindo padrões com repetição e salto.',
      blocos: [
        { t: 'p', x: 'No Nível 2 você aprendeu p-i-m-a. Agora vamos ampliar: mudando a ordem dos dedos, a mesma harmonia produz dezenas de texturas diferentes. Mauro Giuliani escreveu 120 estudos de arpejo (Op. 1) exatamente com esse objetivo, e eles continuam sendo o melhor material do gênero.' },
        { t: 'h', x: 'As famílias de arpejo' },
        {
          t: 'tabela',
          cab: ['Família', 'Fórmula', 'Dificuldade', 'Onde aparece'],
          linhas: [
            ['Ascendente', 'p i m a', 'básica', 'quase todo acompanhamento'],
            ['Descendente', 'p a m i', 'básica', 'Villa-Lobos, Prelúdio nº 1'],
            ['Ida e volta', 'p i m a m i', 'média', 'valsas, "Romance de Amor"'],
            ['Com repetição', 'p i m i a i', 'média', 'estudos de Giuliani'],
            ['Com salto', 'p m a i', 'alta', 'passagens de Tárrega'],
            ['Dobrado', 'p i m a i m a i', 'alta', 'arpejos rápidos em 2 compassos'],
            ['Com polegar alternado', 'p i p m p a', 'alta', 'acompanhamento de choro e de Barrios']
          ]
        },
        {
          t: 'tab', bpm: 76, legenda: 'Cinco fórmulas sobre o mesmo acorde de Am. Ouça como a textura muda sem a harmonia mudar.',
          compassos: [
            { acorde: 'p i m a', notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }] },
            { acorde: 'p a m i', notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'p i m i a i', notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }] },
            { acorde: 'p m a i', notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'colcheia', dedo: 'a' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }] }
          ]
        },
        { t: 'h', x: 'As três regras de ouro da mão direita' },
        {
          t: 'passos', itens: [
            '*Preparação*: o dedo encosta na corda antes de tocar. Quem apoia antes toca no tempo; quem busca a corda no ar atrasa.',
            '*Independência do polegar*: o p mantém o baixo firme e igual, aconteça o que acontecer em cima. Treine o p sozinho, bem forte, enquanto i m a tocam fraco.',
            '*Economia*: o dedo volta só o necessário. Movimento grande é movimento lento.'
          ]
        },
        {
          t: 'dica', titulo: 'O teste do silêncio: ',
          x: 'toque um arpejo e, no meio, pare de repente. Todos os dedos devem estar *na corda*, prontos, e não espalhados no ar. Se eles estiverem longe, você está gastando movimento.'
        },
        { t: 'h', x: 'Progressão de estudo' },
        {
          t: 'tabela',
          cab: ['Semana', 'Fórmulas', 'BPM alvo (colcheias)'],
          linhas: [
            ['1 e 2', 'p i m a / p a m i', '60 → 80'],
            ['3 e 4', 'p i m a m i / p i m i a i', '60 → 80'],
            ['5 e 6', 'p m a i / p a i m', '50 → 72'],
            ['7 e 8', 'p i m a i m a i (dobrado)', '50 → 76'],
            ['9 e 10', 'p i p m p a (polegar alternado)', '50 → 72']
          ],
          legenda: 'Dez semanas, duas fórmulas por bloco, cinco minutos por dia. Troque de acorde a cada compasso para não decorar só uma posição de mão esquerda.'
        },
        { t: 'metronomo', bpm: 60, compasso: '4/4', x: 'Duas colcheias por clique. Procure os dedos caindo exatamente no meio do intervalo.' },
        { t: 'tocar', titulo: 'Confira o arpejo p-m-a-i', seq: [[5, 0], [2, 1], [1, 0], [3, 2]], rotulo: 'Tocar p m a i em Am', x: 'A fórmula com salto: o m vem antes do i. É o padrão que mais embaralha a mão no começo.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Arpejos', rodadas: 6,
          perguntas: [
            { texto: 'Quem escreveu os 120 estudos de arpejo para violão?', opcoes: ['Mauro Giuliani', 'Fernando Sor', 'Matteo Carcassi', 'Dionisio Aguado'], correta: 0, explicacao: 'Op. 1, material padrão até hoje.' },
            { texto: 'O que é "preparação" na mão direita?', opcoes: ['Encostar o dedo na corda antes de tocar', 'Aquecer antes de estudar', 'Afinar o violão', 'Olhar a partitura'], correta: 0, explicacao: 'Garante precisão rítmica.' },
            { texto: 'A fórmula p a m i é um arpejo:', opcoes: ['Descendente', 'Ascendente', 'Com salto', 'Dobrado'], correta: 0, explicacao: 'Começa do agudo para o grave depois do baixo.' },
            { texto: 'Por que treinar o polegar forte e os outros dedos fraco?', opcoes: ['Para ganhar independência de volume entre as vozes', 'Para cansar menos', 'Para tocar mais rápido', 'Para afinar'], correta: 0, explicacao: 'Base do acompanhamento com melodia.' },
            { texto: 'Movimento grande do dedo é:', opcoes: ['Movimento lento', 'Movimento forte', 'Mais preciso', 'Indiferente'], correta: 0, explicacao: 'Economia é velocidade.' },
            { texto: 'Trocar o acorde a cada compasso durante o estudo de arpejo serve para:', opcoes: ['Não decorar apenas uma posição de mão esquerda', 'Cansar a mão', 'Mudar o ritmo', 'Afinar melhor'], correta: 0, explicacao: 'As duas mãos trabalham juntas.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar arpejo com o pulso batendo para cima e para baixo.', certo: 'O pulso fica quieto; os dedos se movem a partir da junta grande.' },
            { erro: 'Dedo a mais fraco que os outros.', certo: 'Faça dois minutos por dia de a sozinho, em apoyando, até igualar.' },
            { erro: 'Baixo sumindo quando o arpejo acelera.', certo: 'Estude com o polegar em apoyando e volume exagerado.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Mudando a ordem dos dedos, a mesma harmonia gera texturas diferentes.',
            'Sete famílias: ascendente, descendente, ida e volta, com repetição, com salto, dobrado, polegar alternado.',
            'Três regras: preparação, polegar independente, economia de movimento.',
            'Dez semanas, duas fórmulas por bloco, cinco minutos por dia.'
          ]
        }
      ],
      quiz: [
        { texto: 'A fórmula p i m i a i pertence à família:', opcoes: ['Com repetição', 'Com salto', 'Descendente', 'Dobrado'], correta: 0, explicacao: 'O i volta entre as notas.' },
        { texto: 'Preparar o dedo significa:', opcoes: ['Deixá-lo encostado na corda antes do toque', 'Esticá-lo', 'Afastá-lo da corda', 'Apoiá-lo no tampo'], correta: 0, explicacao: 'Precisão no tempo.' },
        { texto: 'Qual fórmula embaralha mais a mão no começo?', opcoes: ['p m a i (com salto)', 'p i m a', 'p a m i', 'p i p m'], correta: 0, explicacao: 'A ordem contraria o reflexo.' },
        { texto: 'No teste do silêncio, os dedos devem estar:', opcoes: ['Encostados nas cordas, prontos', 'Longe das cordas', 'Fechados na palma', 'No braço do violão'], correta: 0, explicacao: 'Sinal de economia.' },
        { texto: 'O arpejo com polegar alternado aparece tipicamente em:', opcoes: ['Choro e obras de Barrios', 'Rock', 'Música renascentista', 'Flamenco rasgueado'], correta: 0, explicacao: 'p alternando entre cordas graves.' },
        { texto: 'Para igualar um dedo a mais fraco:', opcoes: ['Treine-o sozinho, poucos minutos por dia', 'Toque mais rápido', 'Ignore', 'Use só i e m'], correta: 0, explicacao: 'Trabalho isolado e curto.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco as sete fórmulas sobre Am e E7 sem parar entre elas.',
          'Mantenho o baixo audível e igual quando acelero.',
          'Passo o teste do silêncio: dedos nas cordas ao parar.',
          'Toco a fórmula dobrada a 72 BPM em colcheias.'
        ],
        criterio: 'Você domina quando troca de fórmula sem pensar e o baixo permanece firme em todas elas.'
      }
    },

    // ---------------------------------------------------------------- 4.2.3
    {
      id: 'n4.2.3',
      titulo: 'Pestanas e acordes com grandes aberturas',
      resumo: 'Pestana limpa e mão aberta sem dor.',
      minutos: 18,
      disciplinas: ['tecnica', 'postura'],
      prereq: ['n3.2.5'],
      status: 'implementado',
      cobre: ['Pestanas e acordes com aberturas maiores'],
      objetivo: 'Fazer pestana completa limpa em qualquer casa e alcançar acordes com abertura de quatro ou cinco casas sem tensão.',
      blocos: [
        { t: 'p', x: 'A pestana e a abertura são os dois momentos em que a mão esquerda chega perto do seu limite físico. A boa notícia: quase todo problema de pestana é de *geometria*, não de força. E quase toda abertura difícil fica possível quando o polegar muda de lugar.' },
        { t: 'h', x: 'Pestana: os seis ajustes' },
        {
          t: 'passos', itens: [
            '*Ossinho, não polpa*: deite o dedo 1 ligeiramente girado para fora, de modo que a corda apoie no lado duro do dedo, não no meio macio.',
            '*Perto do traste*: a pestana fica a um ou dois milímetros do traste de destino, nunca no meio da casa. Metade da força necessária desaparece.',
            '*Polegar atrás do dedo 2*: alinhado com o meio da mão e mais ou menos na metade da altura do braço. Polegar aparecendo por cima tira força.',
            '*Cotovelo levemente para dentro*: aproximar o cotovelo do corpo gira o antebraço e transforma peso em pressão, sem apertar.',
            '*Só as cordas necessárias*: na maioria dos acordes, duas ou três cordas da pestana ficam cobertas pelos outros dedos. Ali você não precisa de pressão.',
            '*Teste corda por corda*: toque as seis cordas separadas. Onde chiar, ajuste um milímetro e teste de novo. Nunca aumente a força primeiro.'
          ]
        },
        {
          t: 'acorde', legenda: 'Pestana em três situações. No Fá, as cordas 1, 2 e 6 dependem da pestana; nas outras, os dedos 2, 3 e 4 fazem o trabalho.',
          lista: [
            { nome: 'F (pestana casa 1)', cordas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1], pestana: { casa: 1, de: 1, ate: 6 } },
            { nome: 'Bm (pestana casa 2)', cordas: [-1, 2, 4, 4, 3, 2], dedos: [null, 1, 3, 4, 2, 1], pestana: { casa: 2, de: 1, ate: 5 } },
            { nome: 'C (forma A, casa 3)', cordas: [-1, 3, 5, 5, 5, 3], dedos: [null, 1, 2, 3, 4, 1], pestana: { casa: 3, de: 1, ate: 5 } }
          ]
        },
        {
          t: 'aviso', titulo: 'Dor é sinal de parar: ',
          x: 'cansaço no antebraço é normal e passa em semanas. *Dor* no pulso, formigamento ou agulhada é sinal de técnica errada ou excesso. Pare, alongue e volte amanhã com menos tempo e mais atenção à geometria.'
        },
        { t: 'h', x: 'Aberturas grandes' },
        { t: 'p', x: 'Acordes como o Cmaj7 na forma de D, ou as posições de Villa-Lobos e Barrios, pedem quatro ou cinco casas de distância entre o dedo 1 e o dedo 4. O segredo não está em esticar os dedos.' },
        {
          t: 'lista', itens: [
            '*Polegar desce*: para abrir, leve o polegar mais para baixo (em direção à borda inferior do braço). A mão se abre sozinha.',
            '*Mão mais perpendicular*: aproxime os dedos de um ângulo de 90° com as cordas. Dedos deitados perdem alcance.',
            '*Cotovelo para fora e para frente*: muda o eixo do antebraço e aumenta o alcance do dedo 4.',
            '*Dedo 4 com a ponta*: não tente alcançar com a polpa; use a pontinha.',
            '*Abra devagar, não force*: segure a posição por dois segundos, solte, repita cinco vezes. Alongamento vem com repetição curta, não com esforço longo.'
          ]
        },
        {
          t: 'braco', casas: 9, legenda: 'Uma abertura de cinco casas: dedo 1 na casa 2 e dedo 4 na casa 7 da mesma corda. Treine chegar sem torcer o pulso.',
          notas: [
            { corda: 4, casa: 2, rotulo: '1', classe: 'raiz' },
            { corda: 2, casa: 5, rotulo: '3' },
            { corda: 1, casa: 7, rotulo: '4' }
          ]
        },
        {
          t: 'tab', bpm: 50, legenda: 'Exercício de abertura progressiva: a cada compasso o dedo 4 se afasta uma casa. Pare antes de doer.',
          compassos: [
            { notas: [{ pos: [[2, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 4]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 4]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 5]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 5]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 6]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 6]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 2]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 7]], fig: 'minima', dedo: 'm' }] }
          ]
        },
        {
          t: 'check', chave: 'pestana42', titulo: 'Rotina de pestana (1 minuto por dia)',
          itens: [
            'Pestana na casa 1, seis cordas, todas soando.',
            'Pestana na casa 5 e na casa 7.',
            'F → Bm → C (forma A) em sequência.',
            'Abertura de quatro casas sem dor.',
            'Cinco dias seguidos de prática.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Pestana e abertura', rodadas: 6,
          perguntas: [
            { texto: 'Onde o dedo 1 deve ficar na pestana?', opcoes: ['A um ou dois milímetros do traste', 'No meio da casa', 'Em cima do traste', 'Atrás do braço'], correta: 0, explicacao: 'Perto do traste exige metade da força.' },
            { texto: 'Qual parte do dedo 1 apoia as cordas na pestana?', opcoes: ['O lado duro, perto do osso', 'A polpa macia do meio', 'A unha', 'A ponta'], correta: 0, explicacao: 'Gire levemente o dedo para fora.' },
            { texto: 'Para abrir mais a mão, o polegar deve:', opcoes: ['Descer em direção à borda inferior do braço', 'Subir por cima do braço', 'Sair do braço', 'Apertar mais'], correta: 0, explicacao: 'A mão se abre como consequência.' },
            { texto: 'Chiado numa corda da pestana pede primeiro:', opcoes: ['Ajuste de posição de um milímetro', 'Mais força', 'Troca de cordas', 'Regulagem do violão'], correta: 0, explicacao: 'Geometria antes de força.' },
            { texto: 'Dor em agulhada no pulso significa:', opcoes: ['Parar e rever a técnica', 'Continuar: é normal', 'Apertar mais', 'Aumentar o tempo de estudo'], correta: 0, explicacao: 'Cansaço é normal; dor não.' },
            { texto: 'Alongamento da mão se ganha com:', opcoes: ['Repetições curtas, dois segundos cada', 'Força máxima prolongada', 'Esticar até doer', 'Pressão do polegar'], correta: 0, explicacao: 'Pouco e frequente.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Apertar mais quando a pestana chia.', certo: 'Ajuste a posição: aproxime do traste e gire o dedo.' },
            { erro: 'Polegar aparecendo por cima do braço na pestana.', certo: 'Atrás, alinhado com o dedo 2.' },
            { erro: 'Treinar pestana dez minutos seguidos no primeiro dia.', certo: 'Um minuto por dia, cinco dias. A adaptação é do tendão, e tendão não tem pressa.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Pestana é geometria: lado duro do dedo, perto do traste, polegar atrás do dedo 2.',
            'Cordas cobertas por outros dedos não precisam de pressão.',
            'Para abrir a mão, desça o polegar e aproxime os dedos de 90°.',
            'Dor é sinal de parar; cansaço passa com constância.'
          ]
        }
      ],
      quiz: [
        { texto: 'A pestana exige menos força quando está:', opcoes: ['Perto do traste de destino', 'No meio da casa', 'Longe do traste', 'Sobre o traste'], correta: 0, explicacao: 'A corda já está quase pressionada.' },
        { texto: 'O cotovelo levemente para dentro, na pestana, serve para:', opcoes: ['Transformar peso em pressão', 'Levantar o braço', 'Abafar as cordas', 'Nada'], correta: 0, explicacao: 'Gira o antebraço.' },
        { texto: 'Numa abertura de cinco casas, o dedo 4 deve usar:', opcoes: ['A ponta', 'A polpa', 'A lateral', 'A unha'], correta: 0, explicacao: 'Ponta alcança mais.' },
        { texto: 'Em acordes com pestana, pressão máxima é necessária:', opcoes: ['Só nas cordas que não têm outro dedo', 'Em todas as seis', 'Em nenhuma', 'Apenas na 6ª'], correta: 0, explicacao: 'Economia de esforço.' },
        { texto: 'Quanto tempo por dia de pestana no início?', opcoes: ['Cerca de um minuto', 'Dez minutos', 'Meia hora', 'Até doer'], correta: 0, explicacao: 'Adaptação gradual do tendão.' },
        { texto: 'Formigamento durante o estudo indica:', opcoes: ['Parar imediatamente', 'Estar no caminho certo', 'Falta de força', 'Cordas velhas'], correta: 0, explicacao: 'Sinal de compressão nervosa.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Faço pestana na casa 1 com as seis cordas soando limpas.',
          'Toco F, Bm e C (forma A) em sequência, sem chiado.',
          'Alcanço uma abertura de quatro casas sem torcer o pulso.',
          'Termino o estudo sem dor, apenas com cansaço.'
        ],
        criterio: 'Você domina quando a pestana sai limpa em qualquer casa e você explica o que ajustar quando uma corda chia.'
      }
    },

    // ---------------------------------------------------------------- 4.2.4
    {
      id: 'n4.2.4',
      titulo: 'Ligados em velocidade',
      resumo: 'Hammer-on e pull-off rápidos, limpos e iguais.',
      minutos: 18,
      disciplinas: ['tecnica'],
      prereq: ['n3.2.4'],
      status: 'implementado',
      cobre: ['Ligados em velocidade'],
      objetivo: 'Executar ligados ascendentes e descendentes com volume igual ao das notas tocadas, em velocidade.',
      blocos: [
        { t: 'p', x: 'Você já faz ligados. O problema agora é outro: em velocidade, o ligado tende a sair *mais fraco* que a nota pinçada, e a frase fica torta. A solução é mecânica e dá para medir.' },
        { t: 'h', x: 'O que faz o volume do ligado' },
        {
          t: 'comparar',
          a: { titulo: 'Ligado ascendente (hammer-on)', itens: ['O volume vem da *velocidade* do dedo, não da força', 'O dedo cai de perto, não de longe', 'Caia na ponta, perto do traste', 'A corda deve continuar vibrando: não abafe com os outros dedos'] },
          b: { titulo: 'Ligado descendente (pull-off)', itens: ['O volume vem do *puxão lateral* do dedo', 'O dedo sai arrastando a corda para dentro do braço', 'O dedo que fica já deve estar pressionado antes', 'Solte depressa; soltar devagar mata o som'] }
        },
        {
          t: 'dica', titulo: 'A medida objetiva: ',
          x: 'grave quatro notas: duas pinçadas e duas ligadas, alternando. Ouça a gravação. Se você consegue apontar quais foram ligadas *só pelo volume*, ainda há trabalho. O objetivo é não dar para distinguir.'
        },
        {
          t: 'tab', bpm: 60, legenda: 'Exercício 1: ligado ascendente nos quatro dedos, na mesma corda. Só a primeira nota de cada par é pinçada.',
          compassos: [
            { notas: [{ pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 3]], fig: 'colcheia' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 4]], fig: 'colcheia' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 5]], fig: 'colcheia' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[3, 6]], fig: 'colcheia' }] },
            { notas: [{ pos: [[3, 6]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 5]], fig: 'colcheia' }, { pos: [[3, 4]], fig: 'colcheia' }, { pos: [[3, 2]], fig: 'colcheia' }, { pos: [[3, 2]], fig: 'minima', dedo: 'i' }] }
          ]
        },
        {
          t: 'tab', bpm: 54, legenda: 'Exercício 2: ligados em grupos de quatro (martelo e puxada alternados), subindo pela escala. Clássico de Carlevaro.',
          compassos: [
            { notas: [{ pos: [[1, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[1, 7]], fig: 'colcheia' }, { pos: [[1, 5]], fig: 'colcheia' }, { pos: [[1, 7]], fig: 'colcheia' }, { pos: [[1, 7]], fig: 'colcheia', dedo: 'm' }, { pos: [[1, 9]], fig: 'colcheia' }, { pos: [[1, 7]], fig: 'colcheia' }, { pos: [[1, 9]], fig: 'colcheia' }] },
            { notas: [{ pos: [[2, 5]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 7]], fig: 'colcheia' }, { pos: [[2, 5]], fig: 'colcheia' }, { pos: [[2, 7]], fig: 'colcheia' }, { pos: [[2, 7]], fig: 'minima', dedo: 'm' }] }
          ]
        },
        { t: 'h', x: 'Os três erros que roubam velocidade' },
        {
          t: 'lista', itens: [
            '*Dedo alto*: levantar o dedo 3 cm antes de martelar. O caminho de volta custa tempo. Mantenha os dedos a poucos milímetros da corda.',
            '*Pressão residual*: continuar apertando a nota anterior. A corda vibra presa e o som morre. Solte na hora exata.',
            '*Punho trancado*: a mão esquerda rígida transforma o ligado em esforço. Entre os grupos, relaxe por meio segundo.'
          ]
        },
        { t: 'metronomo', bpm: 54, compasso: '4/4', x: 'Quatro colcheias por compasso, dois ligados por tempo. Suba só quando o volume estiver igual.' },
        { t: 'tocar', titulo: 'Confira o ligado', seq: [[3, 2], [3, 4], [3, 2]], rotulo: 'Pinçar casa 2, martelar casa 4, puxar de volta', x: 'O app reconhece as três notas. Se a nota ligada não for reconhecida, ela saiu fraca demais.' },
        { t: 'h', x: 'Onde isso aparece no repertório' },
        { t: 'p', x: 'Nos estudos de Carcassi (Op. 60 nº 3 e nº 7), em Villa-Lobos (Estudo nº 2 e nº 3), em Tárrega (Estudio Brillante) e em quase todo flamenco. Ligados bem-feitos são o que permite frases rápidas sem a mão direita ter de acompanhar nota por nota.' },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Ligados', rodadas: 6,
          perguntas: [
            { texto: 'O volume do ligado ascendente vem de:', opcoes: ['Velocidade do dedo', 'Força do dedo', 'Altura da queda', 'Pressão do polegar'], correta: 0, explicacao: 'Velocidade, não força.' },
            { texto: 'No ligado descendente, o dedo deve:', opcoes: ['Puxar a corda lateralmente ao sair', 'Levantar reto', 'Deslizar para a frente', 'Ficar parado'], correta: 0, explicacao: 'O puxão produz o som.' },
            { texto: 'Dedos altos sobre o braço causam:', opcoes: ['Perda de velocidade', 'Som mais forte', 'Melhor afinação', 'Nada'], correta: 0, explicacao: 'Caminho de volta mais longo.' },
            { texto: 'Como medir se o ligado está igual à nota pinçada?', opcoes: ['Gravar e tentar distinguir pelo volume', 'Contar os compassos', 'Olhar a mão', 'Usar afinador'], correta: 0, explicacao: 'Se dá para distinguir, falta trabalho.' },
            { texto: 'Pressão residual no dedo anterior causa:', opcoes: ['Som abafado e curto', 'Som mais alto', 'Afinação alta', 'Nada'], correta: 0, explicacao: 'A corda vibra presa.' },
            { texto: 'Em qual repertório os ligados rápidos são essenciais?', opcoes: ['Carcassi, Villa-Lobos e flamenco', 'Renascença', 'Coral luterano', 'Música eletrônica'], correta: 0, explicacao: 'Estudos e repertório virtuosístico.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Martelar de longe para "dar força".', certo: 'Caia de perto e rápido: velocidade faz volume.' },
            { erro: 'Soltar o dedo devagar no pull-off.', certo: 'Puxe e solte depressa, lateralmente.' },
            { erro: 'Estudar ligados por dez minutos seguidos.', certo: 'Dois minutos, pausa, dois minutos. Ligado cansa o tendão.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Ligado ascendente: velocidade do dedo, queda curta, perto do traste.',
            'Ligado descendente: puxão lateral e saída rápida.',
            'Mantenha os dedos a milímetros da corda e sem pressão residual.',
            'O critério é o volume: ligado e nota pinçada devem soar iguais.'
          ]
        }
      ],
      quiz: [
        { texto: 'Para o hammer-on soar forte, o dedo deve:', opcoes: ['Cair rápido e de perto', 'Cair de longe', 'Apertar depois de cair', 'Deslizar'], correta: 0, explicacao: 'Velocidade, não amplitude.' },
        { texto: 'No pull-off, o som nasce:', opcoes: ['Do puxão lateral da corda', 'Do levantar do dedo', 'Da mão direita', 'Do polegar'], correta: 0, explicacao: 'O dedo põe a corda em movimento ao sair.' },
        { texto: 'Pressão residual é:', opcoes: ['Continuar apertando a nota anterior', 'Apertar o polegar', 'Tocar duas cordas', 'Apoiar o braço'], correta: 0, explicacao: 'Mata o som da nota seguinte.' },
        { texto: 'Qual é a melhor forma de estudar ligados sem lesão?', opcoes: ['Blocos de dois minutos com pausa', 'Dez minutos seguidos', 'Até cansar', 'Sem metrônomo'], correta: 0, explicacao: 'O tendão precisa de pausa.' },
        { texto: 'Em velocidade, o maior sintoma de ligado malfeito é:', opcoes: ['Notas ligadas mais fracas', 'Notas mais agudas', 'Mão direita atrasada', 'Pestana suja'], correta: 0, explicacao: 'Desequilíbrio de volume.' },
        { texto: 'Onde o dedo deve martelar na casa?', opcoes: ['Perto do traste', 'No meio da casa', 'Sobre o traste', 'Longe do traste'], correta: 0, explicacao: 'Mesma regra da pestana.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco o exercício 1 a 80 BPM com volume igual nas notas ligadas.',
          'Gravei quatro notas alternando pinçada e ligada e não consigo distinguir pelo volume.',
          'Mantenho os dedos próximos da corda durante o exercício.',
          'Termino sem dor e com a mão relaxada entre os grupos.'
        ],
        criterio: 'Você domina quando a nota ligada soa com o mesmo volume da pinçada, a 80 BPM em colcheias.'
      }
    },

    // ---------------------------------------------------------------- 4.2.5
    {
      id: 'n4.2.5',
      titulo: 'Polegar independente e vozes simultâneas',
      resumo: 'Melodia cantando em cima, acompanhamento firme embaixo.',
      minutos: 22,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n4.2.2'],
      status: 'implementado',
      cobre: ['Independência entre polegar e demais dedos', 'Execução de vozes simultâneas', 'Independência entre melodia e acompanhamento'],
      objetivo: 'Tocar duas ou três vozes ao mesmo tempo com volumes e articulações diferentes, controlando qual delas o ouvinte escuta.',
      blocos: [
        { t: 'p', x: 'Esta é a habilidade que transforma um violonista em músico completo: fazer o instrumento soar como duas pessoas tocando juntas. A mão direita precisa deixar de ser um bloco e passar a ter *dois cérebros*: o polegar e os outros dedos.' },
        { t: 'h', x: 'O princípio: volume é escolha, não acidente' },
        { t: 'p', x: 'Quando você toca um acorde arpejado, todas as notas saem com volume parecido. Para uma voz *cantar*, ela precisa sair 20% a 30% mais forte que as outras. Isso se faz com três controles:' },
        {
          t: 'lista', itens: [
            '*Toque*: a voz da melodia usa apoyando (dedo apoia na corda vizinha); o acompanhamento usa tirando. O apoyando é naturalmente mais cheio.',
            '*Profundidade*: empurre a corda da melodia um pouco mais para dentro, em direção ao tampo, antes de soltá-la.',
            '*Ponto de ataque*: mais perto da unha dá brilho e destaque; mais polpa dá som macio e discreto.'
          ]
        },
        {
          t: 'dica', titulo: 'Exercício do contraste: ',
          x: 'toque um acorde de Dó arpejado quatro vezes. Na primeira, destaque a 1ª corda; na segunda, a 2ª; na terceira, o baixo; na quarta, toque tudo igual. Se o ouvinte consegue dizer qual voz você destacou, está funcionando.'
        },
        { t: 'h', x: 'Dois cérebros na mão direita' },
        {
          t: 'tab', bpm: 56, legenda: 'Estudo de independência: o polegar toca semínimas firmes e regulares; os dedos i e m tocam colcheias fracas em cima. Comece contando em voz alta.',
          compassos: [
            { notas: [{ pos: [[5, 0], [3, 2]], fig: 'colcheia' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[5, 0], [3, 2]], fig: 'colcheia' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 1]], fig: 'colcheia', dedo: 'm' }] },
            { notas: [{ pos: [[4, 0], [3, 2]], fig: 'colcheia' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[4, 0], [3, 2]], fig: 'colcheia' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }, { pos: [[3, 2]], fig: 'colcheia', dedo: 'i' }, { pos: [[2, 3]], fig: 'colcheia', dedo: 'm' }] }
          ]
        },
        { t: 'h', x: 'Melodia e acompanhamento na mesma mão' },
        { t: 'p', x: 'No repertório, melodia e acompanhamento costumam compartilhar as mesmas cordas. O que separa as vozes é a *articulação*: a melodia sustenta (as notas duram até a próxima), o acompanhamento é curto e discreto.' },
        {
          t: 'pauta', bpm: 60, numerar: true,
          txt: 'e4+c4/q f4+c4/q g4+c4/q e4+c4/q | f4+b3/q d4+b3/q e4+b3/q c4+b3/b',
          legenda: 'A voz de cima (melodia) se move; a de baixo repete. Toque a melodia em apoyando e o baixo em tirando, mais fraco.'
        },
        {
          t: 'passos', itens: [
            'Toque só a melodia, cantando-a, com a dinâmica que você quer.',
            'Toque só o acompanhamento, bem fraco, mantendo o pulso.',
            'Junte as duas mantendo a *memória do volume* de cada uma.',
            'Grave. Ouça procurando a melodia: ela aparece sozinha ou você precisa procurá-la?'
          ]
        },
        { t: 'tocar', titulo: 'Confira as duas vozes', seq: [[5, 0], [2, 1], [4, 0], [2, 3]], rotulo: 'Tocar baixo e melodia alternados', x: 'Toque cada nota separada para o app conferir; depois junte-as de duas em duas.' },
        { t: 'h', x: 'Três vozes' },
        { t: 'p', x: 'A partir do Nível 5 aparecem peças com três linhas: melodia no agudo, contracanto no meio e baixo embaixo. A regra não muda — só fica mais fina. A voz do meio é a que costuma atrapalhar: ela deve ser a mais discreta de todas, quase um sussurro.' },
        {
          t: 'check', chave: 'vozes42', titulo: 'Pratique a independência',
          itens: [
            'Exercício do contraste: destaco cada voz à escolha.',
            'Polegar em semínimas firmes com i m fracos em cima, 2 minutos.',
            'Toco o exemplo de melodia + baixo com a melodia clara.',
            'Gravei e a melodia aparece sem esforço na escuta.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Vozes simultâneas', rodadas: 6,
          perguntas: [
            { texto: 'Qual toque a voz da melodia costuma usar?', opcoes: ['Apoyando', 'Tirando', 'Harmônico', 'Rasgueado'], correta: 0, explicacao: 'Som mais cheio e presente.' },
            { texto: 'Quanto mais forte a melodia deve soar em relação ao acompanhamento?', opcoes: ['Cerca de 20% a 30%', 'O dobro', 'Igual', 'Mais fraca'], correta: 0, explicacao: 'O suficiente para aparecer sem agredir.' },
            { texto: 'O que separa melodia de acompanhamento quando compartilham cordas?', opcoes: ['A articulação e a duração das notas', 'A afinação', 'O compasso', 'A tonalidade'], correta: 0, explicacao: 'Melodia sustenta; acompanhamento é curto.' },
            { texto: 'Tocar mais perto da unha produz:', opcoes: ['Som com mais brilho e destaque', 'Som mais abafado', 'Som mais grave', 'Nenhuma diferença'], correta: 0, explicacao: 'É um controle de timbre.' },
            { texto: 'Em peças a três vozes, a voz do meio deve ser:', opcoes: ['A mais discreta', 'A mais forte', 'Igual à melodia', 'Tocada com o polegar sempre'], correta: 0, explicacao: 'Ela preenche, não canta.' },
            { texto: 'Como verificar objetivamente se a melodia está destacada?', opcoes: ['Gravar e ouvir se ela aparece sozinha', 'Olhar a mão', 'Contar as notas', 'Medir o BPM'], correta: 0, explicacao: 'Gravação não mente.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Tocar tudo com o mesmo volume e esperar que a melodia apareça.', certo: 'Destaque é decisão: apoyando, mais profundidade e mais unha.' },
            { erro: 'Aumentar o volume da melodia apertando a mão esquerda.', certo: 'Volume é mão direita; mão esquerda só define a altura.' },
            { erro: 'Estudar as duas vozes sempre juntas.', certo: 'Cada voz sozinha primeiro, com a dinâmica final já decidida.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'A mão direita tem dois cérebros: polegar e dedos.',
            'Destaque se faz com toque (apoyando), profundidade e ponto de ataque.',
            'Melodia sustenta, acompanhamento é curto e discreto.',
            'Em três vozes, a do meio é a mais apagada.',
            'Gravar é o único juiz confiável.'
          ]
        }
      ],
      quiz: [
        { texto: 'Independência do polegar significa:', opcoes: ['O baixo continuar firme e igual qualquer que seja o que os outros dedos fazem', 'Tocar só com o polegar', 'Alternar polegar e dedos', 'Usar polegar na melodia'], correta: 0, explicacao: 'Dois cérebros na mesma mão.' },
        { texto: 'O apoyando é usado na melodia porque:', opcoes: ['Produz som mais cheio e destacado', 'É mais rápido', 'É mais fácil', 'Economiza movimento'], correta: 0, explicacao: 'O dedo apoia na corda vizinha.' },
        { texto: 'Para o acompanhamento ficar discreto:', opcoes: ['Tirando, com menos profundidade e mais polpa', 'Apoyando forte', 'Mais unha', 'Mais pressão da mão esquerda'], correta: 0, explicacao: 'Som macio e curto.' },
        { texto: 'Numa peça a três vozes, a ordem de volume costuma ser:', opcoes: ['Melodia > baixo > voz do meio', 'Voz do meio > melodia > baixo', 'Tudo igual', 'Baixo > melodia > meio'], correta: 0, explicacao: 'O meio preenche.' },
        { texto: 'O volume de uma nota no violão depende principalmente:', opcoes: ['Da mão direita', 'Da mão esquerda', 'Da afinação', 'Do metrônomo'], correta: 0, explicacao: 'A esquerda define altura, não volume.' },
        { texto: 'O exercício do contraste consiste em:', opcoes: ['Destacar uma voz diferente em cada repetição do acorde', 'Tocar cada vez mais rápido', 'Trocar de acorde', 'Tocar sem metrônomo'], correta: 0, explicacao: 'Treina o controle consciente.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Destaco, à escolha, qualquer uma das vozes de um acorde arpejado.',
          'Toco dois minutos de polegar firme com dedos fracos sem o baixo oscilar.',
          'Toco um trecho do meu repertório com a melodia nitidamente à frente.',
          'Gravei e identifiquei a melodia sem esforço na escuta.'
          ],
        criterio: 'Você domina quando escolhe qual voz o ouvinte vai escutar e isso aparece na gravação.'
      }
    },

    // ---------------------------------------------------------------- 4.2.6
    {
      id: 'n4.2.6',
      titulo: 'Controle de timbre e abafamento',
      resumo: 'O violão tem muitos sons. Escolha o seu.',
      minutos: 18,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n4.2.5'],
      status: 'implementado',
      cobre: ['Controle de timbre', 'Técnicas de abafamento'],
      objetivo: 'Produzir ao menos quatro timbres distintos de propósito e interromper o som quando a música pede silêncio.',
      blocos: [
        { t: 'p', x: 'Duas pessoas tocando a mesma nota no mesmo violão produzem sons diferentes. Isso não é mágica: é a soma de onde a corda é tocada, com que parte do dedo e em que ângulo. Esses três controles são a sua paleta de cores.' },
        { t: 'h', x: 'Os três controles do timbre' },
        {
          t: 'tabela',
          cab: ['Controle', 'Para som brilhante', 'Para som doce'],
          linhas: [
            ['Onde tocar (posição da mão)', 'perto do cavalete (ponticello)', 'perto da boca ou do braço (tasto)'],
            ['Com o que tocar', 'mais unha', 'mais polpa'],
            ['Ângulo do dedo', 'mais perpendicular à corda', 'mais inclinado, deslizando']
          ],
          legenda: 'Os nomes italianos aparecem nas partituras: *ponticello* (ou "sul ponticello") pede som metálico junto ao cavalete; *dolce* ou *sul tasto* pede som doce, perto do braço.'
        },
        {
          t: 'passos', itens: [
            'Toque a 1ª corda solta perto do cavalete, com bastante unha: som metálico, nasal, cortante.',
            'Agora toque a mesma corda sobre a boca, com polpa: som redondo, cheio, escuro.',
            'Repita no meio do caminho, com unha e polpa juntas: é o som "normal" do violão.',
            'Por último, toque bem perto do braço, bem de leve: quase uma flauta.',
            'Esses quatro pontos são a sua paleta mínima. Decore a sensação de cada um.'
          ]
        },
        {
          t: 'dica', titulo: 'Uso musical: ',
          x: 'repetições pedem cores diferentes. Se uma frase aparece duas vezes, toque a segunda em outro timbre: a música deixa de ser repetitiva sem você mudar uma nota. É o recurso interpretativo mais barato e mais eficaz que existe.'
        },
        { t: 'h', x: 'Abafamento: o silêncio também é música' },
        { t: 'p', x: 'O violão tem um problema: a corda continua soando depois de tocada. Em peças com pausas, com baixos curtos ou com mudanças de harmonia, esse resto de som suja tudo. Abafar é técnica, e tem quatro jeitos.' },
        {
          t: 'tabela',
          cab: ['Técnica', 'Como', 'Quando usar'],
          linhas: [
            ['Abafamento com o polegar', 'o p encosta na corda grave logo após tocá-la', 'baixos curtos, pausas no baixo'],
            ['Abafamento com o dedo', 'i, m ou a encosta na corda que acabou de soar', 'pausas na melodia, fim de frase'],
            ['Abafamento pela mão esquerda', 'alivia a pressão do dedo sem soltar a corda', 'troca de acorde, notas fretadas'],
            ['Abafamento pela palma', 'a base da mão direita cobre várias cordas', 'acorde final seco, efeito percussivo']
          ]
        },
        {
          t: 'tab', bpm: 60, legenda: 'Baixos curtos: cada nota do polegar dura só meio tempo. O abafamento é o que cria a pausa — o polegar volta e encosta na corda.',
          compassos: [
            { notas: [{ pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1], [1, 0]], fig: 'colcheia' }, { pos: [[5, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1], [1, 0]], fig: 'colcheia' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1], [1, 0]], fig: 'colcheia' }, { pos: [[4, 2]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 2], [2, 1], [1, 0]], fig: 'colcheia' }] },
            { notas: [{ pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1], [2, 0], [1, 0]], fig: 'colcheia' }, { pos: [[6, 0]], fig: 'colcheia', dedo: 'p' }, { pos: [[3, 1], [2, 0], [1, 0]], fig: 'colcheia' }, { pos: [[5, 0], [4, 2], [3, 2], [2, 1], [1, 0]], fig: 'minima' }] }
          ]
        },
        {
          t: 'aviso', titulo: 'O erro mais comum do iniciante: ',
          x: 'deixar todas as cordas soando sempre. O resultado é uma nuvem de som em que nada se distingue. Antes de procurar velocidade ou repertório difícil, aprenda a *desligar* o som.'
        },
        { t: 'tocar', titulo: 'Som brilhante e som doce', seq: [[1, 0], [1, 0]], rotulo: 'Tocar a mesma nota duas vezes', x: 'Toque a primeira junto ao cavalete e a segunda sobre a boca. O app confere a nota; o seu ouvido confere o timbre.' },
        {
          t: 'check', chave: 'timbre42', titulo: 'Pratique',
          itens: [
            'Produzo os quatro timbres da paleta, à escolha.',
            'Toco uma frase repetida com dois timbres diferentes.',
            'Abafo o baixo com o polegar e ouço a pausa.',
            'Toco um trecho com pausas e o silêncio é realmente silêncio.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Timbre e abafamento', rodadas: 6,
          perguntas: [
            { texto: 'Tocar perto do cavalete produz som:', opcoes: ['Brilhante e metálico', 'Doce e redondo', 'Mais grave', 'Mais baixo'], correta: 0, explicacao: 'É o ponticello.' },
            { texto: 'Sul tasto significa tocar:', opcoes: ['Perto do braço, com som doce', 'Junto ao cavalete', 'Com a palma', 'Com unha apenas'], correta: 0, explicacao: 'Som de flauta.' },
            { texto: 'Mais unha no toque resulta em:', opcoes: ['Mais brilho', 'Mais escuridão', 'Menos volume', 'Som abafado'], correta: 0, explicacao: 'A unha acrescenta agudos.' },
            { texto: 'Para fazer um baixo curto, o polegar deve:', opcoes: ['Voltar e encostar na corda', 'Apertar mais', 'Tocar duas vezes', 'Sair do violão'], correta: 0, explicacao: 'O abafamento cria a pausa.' },
            { texto: 'Abafamento pela mão esquerda se faz:', opcoes: ['Aliviando a pressão sem soltar a corda', 'Soltando a corda', 'Apertando mais', 'Com o polegar da esquerda'], correta: 0, explicacao: 'A corda para de vibrar sem ruído.' },
            { texto: 'Repetir uma frase com outro timbre serve para:', opcoes: ['Dar variedade sem mudar as notas', 'Corrigir afinação', 'Acelerar', 'Marcar o tempo'], correta: 0, explicacao: 'Recurso interpretativo central.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Mudar o timbre mexendo o braço todo.', certo: 'Mova a mão direita alguns centímetros ao longo da corda; o resto do corpo fica quieto.' },
            { erro: 'Abafar com força, criando um "toc" audível.', certo: 'Encoste de leve: o objetivo é parar a vibração, não bater na corda.' },
            { erro: 'Ignorar as pausas escritas.', certo: 'Pausa é som que você precisa desligar de propósito.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Timbre = onde toca + com o que toca + ângulo.',
            'Quatro cores mínimas: cavalete com unha, meio, boca com polpa, junto ao braço.',
            'Ponticello é brilhante; sul tasto é doce.',
            'Quatro abafamentos: polegar, dedo, mão esquerda, palma.',
            'Silêncio escrito é silêncio produzido.'
          ]
        }
      ],
      quiz: [
        { texto: 'Os três controles do timbre são:', opcoes: ['Onde, com o que e em que ângulo', 'Força, velocidade e tempo', 'Mão esquerda, direita e pé', 'Unha, afinação e cordas'], correta: 0, explicacao: 'Posição, parte do dedo e ângulo.' },
        { texto: 'Ponticello indica som:', opcoes: ['Metálico, junto ao cavalete', 'Doce, junto ao braço', 'Abafado', 'Harmônico'], correta: 0, explicacao: 'Indicação de partitura.' },
        { texto: 'O abafamento com a palma serve para:', opcoes: ['Acordes finais secos e efeito percussivo', 'Som doce', 'Aumentar o volume', 'Afinar'], correta: 0, explicacao: 'Cobre várias cordas.' },
        { texto: 'O "toc" audível ao abafar indica:', opcoes: ['Excesso de força no abafamento', 'Técnica correta', 'Cordas novas', 'Boa afinação'], correta: 0, explicacao: 'Encoste de leve.' },
        { texto: 'Numa frase que se repete, a boa prática é:', opcoes: ['Mudar o timbre na segunda vez', 'Tocar igual', 'Acelerar', 'Tocar mais forte sempre'], correta: 0, explicacao: 'Variedade sem mudar notas.' },
        { texto: 'Para um baixo em staccato, use:', opcoes: ['Abafamento com o polegar', 'Mais unha', 'Sul tasto', 'Pestana'], correta: 0, explicacao: 'O p volta e encosta.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Produzo quatro timbres distintos e nomeio cada um.',
          'Toco a mesma frase duas vezes com cores diferentes.',
          'Faço baixos curtos com abafamento de polegar, sem ruído.',
          'Respeito as pausas de um trecho do meu repertório.'
        ],
        criterio: 'Você domina quando escolhe o timbre antes de tocar e as pausas soam realmente silenciosas.'
      }
    },

    // ---------------------------------------------------------------- 4.2.7
    {
      id: 'n4.2.7',
      titulo: 'Introdução ao tremolo',
      resumo: 'p-a-m-i: a ilusão de uma nota contínua.',
      minutos: 20,
      disciplinas: ['tecnica'],
      prereq: ['n4.2.2'],
      status: 'implementado',
      cobre: ['Introdução ao tremolo'],
      objetivo: 'Executar o tremolo clássico p-a-m-i com regularidade, construindo velocidade a partir da igualdade.',
      blocos: [
        { t: 'p', x: 'O tremolo é o efeito mais famoso do violão clássico: uma melodia que parece sustentada como um violino, com um acompanhamento embaixo. O exemplo definitivo é o *Recuerdos de la Alhambra*, de Tárrega. E tudo isso é uma ilusão criada por quatro dedos em sequência rápida.' },
        {
          t: 'def', termo: 'Tremolo clássico',
          x: 'repetição rápida de uma mesma nota aguda pelos dedos a, m e i, intercalada com o baixo do polegar. A fórmula é *p a m i*: quatro ataques por tempo, sendo três na mesma corda.'
        },
        { t: 'h', x: 'A mecânica' },
        {
          t: 'passos', itens: [
            'O polegar toca o baixo (corda 4, 5 ou 6) e os três dedos tocam *a mesma corda aguda*, normalmente a 1ª.',
            'A ordem é sempre p → a → m → i. O a vem logo depois do polegar, e o i fecha.',
            'Os três dedos usam tirando, com movimento mínimo: a ponta do dedo quase não sai da corda.',
            'O pulso fica absolutamente parado. Todo o movimento vem das juntas dos dedos.',
            'O polegar segue a sua própria vida: ele toca o baixo e já se prepara para o próximo, sem esperar os dedos.'
          ]
        },
        {
          t: 'tab', bpm: 50, legenda: 'Tremolo em Lá menor: p no baixo e a-m-i na 1ª corda. Quatro ataques por tempo, bem devagar no início.',
          compassos: [
            { acorde: 'Am', notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 0]], fig: 'semicolcheia', dedo: 'i' }] },
            { acorde: 'Am', notas: [{ pos: [[5, 0]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'i' }, { pos: [[4, 2]], fig: 'semicolcheia', dedo: 'p' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'a' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'm' }, { pos: [[1, 1]], fig: 'semicolcheia', dedo: 'i' }] }
          ]
        },
        {
          t: 'aviso', titulo: 'A regra que decide tudo: ',
          x: 'o tremolo não se constrói com velocidade, e sim com *igualdade*. Um tremolo lento e perfeitamente regular soa bem; um tremolo rápido e irregular soa como gagueira. Nunca aumente o andamento antes de os quatro ataques ficarem exatamente iguais em volume e distância.'
        },
        { t: 'h', x: 'Como construir, semana por semana' },
        {
          t: 'tabela',
          cab: ['Etapa', 'O que fazer', 'BPM (semicolcheias)'],
          linhas: [
            ['1', 'p a m i em cordas soltas, contando 1-2-3-4 em voz alta', '40'],
            ['2', 'O mesmo, com o baixo mudando de corda a cada tempo', '40 → 50'],
            ['3', 'Trocar a nota aguda com a mão esquerda (casa 0 → 1 → 3)', '50'],
            ['4', 'Primeiros quatro compassos do Recuerdos', '50 → 60'],
            ['5', 'A peça inteira, mantendo a igualdade', '60 → 76']
          ],
          legenda: 'Dois a três minutos por dia. O tremolo é a técnica que mais recompensa constância e mais pune pressa.'
        },
        { t: 'metronomo', bpm: 40, compasso: '4/4', x: 'Um clique por grupo de quatro ataques. Conte "pa-mi" em voz alta no início.' },
        {
          t: 'dica', titulo: 'Diagnóstico pela gravação: ',
          x: 'grave 10 segundos de tremolo e ouça. Se você escuta "tá-tá-tá... tá-tá-tá", o polegar está grudado no a. Separe-os. Se escuta um ataque mais fraco, é o a (quase sempre). Trabalhe o a sozinho, em apoyando, por um minuto.'
        },
        { t: 'tocar', titulo: 'Confira a nota do tremolo', seq: [[1, 0], [1, 0], [1, 0]], rotulo: 'Tocar a-m-i na 1ª corda solta', x: 'Três ataques na mesma nota. O app reconhece cada um: se ele perder um ataque, aquele dedo saiu fraco.' },
        { t: 'h', x: 'Variantes' },
        {
          t: 'lista', itens: [
            '*p-a-m-i* — o tremolo clássico, de Tárrega e Barrios.',
            '*p-i-m-a* — menos comum, usado por alguns intérpretes por soar mais fluido na saída do polegar.',
            '*p-a-m-i-m* — tremolo de cinco, usado em obras do século XX para grupos de quintinas.',
            '*Tremolo de Barrios* — em "Un Sueño en la Floresta" a nota aguda muda dentro do grupo, o que exige mão esquerda ágil junto com a direita.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Tremolo', rodadas: 6,
          perguntas: [
            { texto: 'Qual é a fórmula do tremolo clássico?', opcoes: ['p a m i', 'p i m a', 'i m a p', 'p m i a'], correta: 0, explicacao: 'O a vem logo depois do polegar.' },
            { texto: 'Qual peça é o exemplo definitivo de tremolo?', opcoes: ['Recuerdos de la Alhambra', 'Lágrima', 'Asturias', 'Estudo nº 1 de Villa-Lobos'], correta: 0, explicacao: 'De Francisco Tárrega.' },
            { texto: 'O que se constrói primeiro no tremolo?', opcoes: ['A igualdade', 'A velocidade', 'O volume', 'A dinâmica'], correta: 0, explicacao: 'Velocidade vem depois.' },
            { texto: 'Durante o tremolo, o pulso deve:', opcoes: ['Ficar parado', 'Balançar', 'Girar', 'Subir e descer'], correta: 0, explicacao: 'O movimento é das juntas dos dedos.' },
            { texto: 'Se um ataque sai mais fraco, normalmente é:', opcoes: ['O a', 'O p', 'O i', 'O m'], correta: 0, explicacao: 'O anular é o dedo menos treinado.' },
            { texto: '"Tá-tá-tá... tá-tá-tá" na gravação indica:', opcoes: ['Polegar grudado no a', 'Velocidade excessiva', 'Mão esquerda errada', 'Violão desafinado'], correta: 0, explicacao: 'Falta separar p e a.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Começar o tremolo rápido para "ver como fica".', certo: 'Comece a 40 BPM. O que não é igual devagar nunca fica igual rápido.' },
            { erro: 'Mexer o pulso para ganhar velocidade.', certo: 'Pulso parado, dedos curtos e próximos da corda.' },
            { erro: 'Esquecer o baixo e virar um exercício de dedos.', certo: 'O tremolo é melodia *e* acompanhamento: o baixo precisa soar musical.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tremolo clássico = p a m i, três ataques na mesma corda aguda.',
            'A ilusão depende da igualdade, não da velocidade.',
            'Pulso parado, movimento mínimo, polegar independente.',
            'Construção em cinco etapas, dois a três minutos por dia.'
          ]
        }
      ],
      quiz: [
        { texto: 'No tremolo p-a-m-i, quantos ataques há por tempo?', opcoes: ['4', '3', '2', '5'], correta: 0, explicacao: 'Um do polegar e três dos dedos.' },
        { texto: 'Os três dedos do tremolo tocam:', opcoes: ['A mesma corda aguda', 'Três cordas diferentes', 'Cordas graves', 'Harmônicos'], correta: 0, explicacao: 'Em geral a 1ª corda.' },
        { texto: 'A primeira meta de estudo do tremolo é:', opcoes: ['Igualdade de volume e distância', 'Chegar a 120 BPM', 'Tocar a peça inteira', 'Usar apoyando'], correta: 0, explicacao: 'Regularidade antes de tudo.' },
        { texto: 'Qual compositor escreveu tremolos em que a nota aguda muda dentro do grupo?', opcoes: ['Barrios', 'Tárrega', 'Sor', 'Carcassi'], correta: 0, explicacao: 'Un Sueño en la Floresta.' },
        { texto: 'O polegar, no tremolo, deve:', opcoes: ['Seguir independente, preparando o próximo baixo', 'Esperar os dedos', 'Tocar junto com o a', 'Ficar parado'], correta: 0, explicacao: 'Independência é essencial.' },
        { texto: 'Quanto tempo de tremolo por dia é recomendado no início?', opcoes: ['Dois a três minutos', 'Meia hora', 'Uma hora', 'Dez segundos'], correta: 0, explicacao: 'Curto e diário.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Toco p-a-m-i a 50 BPM com os quatro ataques iguais.',
          'Gravei e não ouço nenhum ataque mais fraco.',
          'O baixo muda de corda sem o tremolo tropeçar.',
          'Mantenho o pulso imóvel durante um minuto de tremolo.'
        ],
        criterio: 'Você domina o início do tremolo quando toca a 50 BPM com regularidade perfeita e baixo independente.'
      }
    },

    // ---------------------------------------------------------------- 4.2.8
    {
      id: 'n4.2.8',
      titulo: 'Harmônicos artificiais',
      resumo: 'Sinos em qualquer nota do braço.',
      minutos: 16,
      disciplinas: ['tecnica'],
      prereq: ['n3.2.6'],
      status: 'implementado',
      cobre: ['Harmônicos artificiais'],
      objetivo: 'Produzir harmônicos artificiais limpos em qualquer nota, com as duas mãos coordenadas.',
      blocos: [
        { t: 'p', x: 'No Nível 3 você aprendeu os harmônicos naturais: encostar o dedo sobre o traste 12, 7 ou 5 e tocar. O limite é que eles só existem em alguns pontos de cada corda. O harmônico *artificial* resolve isso: ele produz o efeito de sino em qualquer nota do braço.' },
        { t: 'h', x: 'Como funciona' },
        { t: 'p', x: 'Um harmônico aparece quando você toca uma corda e, ao mesmo tempo, impede a vibração no seu ponto médio. No natural, quem faz isso é o dedo da mão esquerda sobre o traste 12, que é metade da corda solta. No artificial, você *cria* uma corda nova: a mão esquerda aperta uma nota e o ponto médio passa a ser doze casas acima dela.' },
        {
          t: 'passos', itens: [
            'A mão esquerda aperta a nota normalmente. Digamos a casa 3 da 1ª corda (Sol).',
            'Conte *doze casas acima*: casa 15.',
            'Encoste levemente o dedo *i* (ou o dedo 1) da mão direita exatamente sobre o traste 15 — em cima do traste, não antes.',
            'Com o dedo *a* (ou o polegar) da mão direita, toque a corda atrás desse ponto.',
            'Solte o dedo que encostou imediatamente depois do toque. Sai um Sol duas oitavas acima, com som de sino.'
          ]
        },
        {
          t: 'braco', casas: 17, legenda: 'Harmônico artificial da nota Sol (1ª corda, casa 3): a mão esquerda aperta a casa 3, e a direita encosta na casa 15 — doze casas acima.',
          notas: [
            { corda: 1, casa: 3, rotulo: 'E', classe: 'raiz' },
            { corda: 1, casa: 15, rotulo: 'D' }
          ]
        },
        {
          t: 'tabela',
          cab: ['Mão esquerda aperta', 'Mão direita encosta', 'Resultado'],
          linhas: [
            ['1ª corda, casa 0 (solta)', 'casa 12', 'Mi, duas oitavas acima'],
            ['1ª corda, casa 2', 'casa 14', 'Fá♯, duas oitavas acima'],
            ['1ª corda, casa 3', 'casa 15', 'Sol, duas oitavas acima'],
            ['2ª corda, casa 1', 'casa 13', 'Dó, duas oitavas acima'],
            ['3ª corda, casa 2', 'casa 14', 'Lá, duas oitavas acima']
          ],
          legenda: 'A regra é sempre a mesma: nota apertada + 12 casas. Na partitura o harmônico artificial aparece como uma nota em forma de losango, ou com a indicação "arm. 12".'
        },
        {
          t: 'dica', titulo: 'Os três detalhes que decidem se sai: ',
          x: '*1.* O dedo precisa estar *exatamente* sobre o traste, não um milímetro antes. *2.* O toque deve ser leve: encostar, não apertar. *3.* Solte na hora. Se ficar encostado, o som morre.'
        },
        { t: 'h', x: 'Duas formas de tocar com a mão direita' },
        {
          t: 'comparar',
          a: { titulo: 'Dedo i encosta, dedo a toca', itens: ['Som mais claro e projetado', 'Permite harmônicos em sequência rápida', 'É a forma mais usada no repertório', 'Exige coordenação entre i e a'] },
          b: { titulo: 'Dedo 1 encosta, polegar toca', itens: ['Mais fácil no começo', 'Som um pouco mais grosso', 'Boa para harmônicos isolados', 'Deixa i m a livres para outras vozes'] }
        },
        { t: 'h', x: 'Onde você vai usar' },
        { t: 'p', x: 'Em Villa-Lobos (Prelúdio nº 4 termina com harmônicos), em Barrios (La Catedral), em Leo Brouwer e em arranjos de música brasileira. Também como efeito final de peças: um acorde inteiro em harmônicos é um dos finais mais bonitos do instrumento.' },
        {
          t: 'tab', bpm: 50, legenda: 'Sequência de quatro harmônicos artificiais na 1ª corda, subindo. A mão esquerda aperta as casas 0, 2, 3 e 5; a direita encosta 12 casas acima de cada uma.',
          compassos: [
            { notas: [{ pos: [[1, 12]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 14]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 15]], fig: 'seminima', dedo: 'a' }, { pos: [[1, 17]], fig: 'seminima', dedo: 'a' }] }
          ]
        },
        {
          t: 'check', chave: 'harm42', titulo: 'Pratique',
          itens: [
            'Produzo o harmônico artificial da 1ª corda solta (casa 12).',
            'Produzo harmônicos nas casas 2, 3 e 5 da 1ª corda.',
            'Faço quatro harmônicos em sequência, no tempo.',
            'Consigo um harmônico na 3ª corda.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Harmônicos artificiais', rodadas: 6,
          perguntas: [
            { texto: 'A mão direita encosta quantas casas acima da nota apertada?', opcoes: ['12', '7', '5', '19'], correta: 0, explicacao: 'O ponto médio da nova corda.' },
            { texto: 'O dedo que encosta deve ficar:', opcoes: ['Exatamente sobre o traste', 'Antes do traste', 'Depois do traste', 'No meio da casa'], correta: 0, explicacao: 'Fora do traste o harmônico não soa.' },
            { texto: 'Qual é a pressão correta do dedo que encosta?', opcoes: ['Toque leve, sem apertar', 'Pressão total', 'Pressão média', 'Nenhum contato'], correta: 0, explicacao: 'Apertar mata o harmônico.' },
            { texto: 'Quanto acima soa o harmônico de 12 casas?', opcoes: ['Duas oitavas acima da nota apertada', 'Uma oitava acima', 'Uma quinta acima', 'Igual'], correta: 0, explicacao: 'Por isso o som de sino agudo.' },
            { texto: 'Na partitura, o harmônico aparece em geral como:', opcoes: ['Nota em forma de losango', 'Nota com ponto', 'Nota cruzada', 'Nota em negrito'], correta: 0, explicacao: 'Ou com "arm." indicado.' },
            { texto: 'Qual combinação é a mais usada no repertório?', opcoes: ['Dedo i encosta, dedo a toca', 'Dedo 1 encosta, polegar toca', 'Polegar encosta, i toca', 'Palheta'], correta: 0, explicacao: 'Permite sequências rápidas.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Encostar o dedo antes do traste.', certo: 'Exatamente em cima do traste.' },
            { erro: 'Manter o dedo encostado depois do toque.', certo: 'Solte imediatamente para a corda vibrar.' },
            { erro: 'Esquecer de manter a nota da mão esquerda pressionada.', certo: 'Sem ela, não existe a "corda nova".' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Harmônico artificial = nota apertada + dedo encostando 12 casas acima.',
            'Soa duas oitavas acima da nota apertada.',
            'Três detalhes: sobre o traste, toque leve, soltar na hora.',
            'Duas combinações de mão direita: i encosta/a toca, ou dedo 1 encosta/polegar toca.'
          ]
        }
      ],
      quiz: [
        { texto: 'Para um harmônico artificial da 2ª corda casa 3, a mão direita encosta na casa:', opcoes: ['15', '12', '10', '17'], correta: 0, explicacao: '3 + 12 = 15.' },
        { texto: 'A diferença entre harmônico natural e artificial é:', opcoes: ['O artificial funciona em qualquer nota do braço', 'O artificial é mais grave', 'O natural é mais difícil', 'Nenhuma'], correta: 0, explicacao: 'O natural só existe em pontos fixos.' },
        { texto: 'Se o harmônico sai abafado, provavelmente:', opcoes: ['O dedo ficou encostado depois do toque', 'A corda está velha', 'A mão esquerda apertou pouco', 'O violão está desafinado'], correta: 0, explicacao: 'É preciso soltar na hora.' },
        { texto: 'O harmônico artificial soa como:', opcoes: ['Um sino, duas oitavas acima', 'Um tambor', 'Uma nota abafada', 'A mesma nota'], correta: 0, explicacao: 'Timbre cristalino.' },
        { texto: 'Em qual obra brasileira famosa aparecem harmônicos no final?', opcoes: ['Prelúdio nº 4 de Villa-Lobos', 'Carinhoso', 'Asa Branca', 'Trem das Onze'], correta: 0, explicacao: 'O fim do prelúdio usa harmônicos.' },
        { texto: 'A mão esquerda, durante o harmônico artificial:', opcoes: ['Mantém a nota pressionada normalmente', 'Solta a corda', 'Encosta de leve', 'Abafa'], correta: 0, explicacao: 'Ela define a nova corda.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Produzo harmônicos artificiais limpos em quatro notas diferentes.',
          'Toco quatro harmônicos em sequência no tempo do metrônomo.',
          'Consigo harmônicos na 1ª, 2ª e 3ª cordas.',
          'O som sai cristalino, sem ruído de dedo.'
        ],
        criterio: 'Você domina quando produz harmônicos artificiais limpos em qualquer nota da primeira posição.'
      }
    },

    // ---------------------------------------------------------------- 4.2.9
    {
      id: 'n4.2.9',
      titulo: 'Resistência, relaxamento e saúde das mãos',
      resumo: 'Estudar muito sem se machucar.',
      minutos: 18,
      disciplinas: ['tecnica', 'postura'],
      prereq: ['n1.2.5'],
      status: 'implementado',
      cobre: ['Resistência e relaxamento muscular'],
      objetivo: 'Construir resistência para sessões longas e reconhecer os sinais de excesso antes de uma lesão.',
      blocos: [
        { t: 'p', x: 'Conforme o repertório fica mais difícil, o tempo de estudo aumenta — e aí aparece o risco que nenhum iniciante considera: *lesão por esforço repetitivo*. Violonistas profissionais perdem carreiras por isso. A boa notícia é que é quase inteiramente evitável, e a prevenção é simples.' },
        { t: 'h', x: 'O princípio: alternância de tensão' },
        { t: 'p', x: 'Nenhum músculo deve ficar contraído continuamente. Tocar bem é alternar: contrai, toca, solta. A maioria dos problemas vem de *não soltar*. O dedo que já tocou continua apertando; o ombro fica levantado do começo ao fim; o polegar da esquerda abraça o braço com força todo o tempo.' },
        {
          t: 'passos', itens: [
            '*Varredura corporal*: a cada cinco minutos de estudo, pare e confira em ordem: testa, maxilar, ombros, cotovelos, pulsos, polegares. Solte o que estiver tenso.',
            '*Pressão mínima*: toque uma nota e vá aliviando a pressão da mão esquerda até a nota começar a chiar. Esse é o limite. Toque sempre logo acima dele, nunca com o dobro.',
            '*Pausa ativa*: a cada 20 ou 25 minutos, pare 2 minutos. Sacuda as mãos, gire os ombros, abra e feche as mãos devagar.',
            '*Volume progressivo*: aumente o tempo total de estudo em no máximo 10% por semana.',
            '*Aquecimento*: 3 a 5 minutos de cordas soltas e escalas lentas antes de qualquer coisa difícil. Tendão frio é tendão vulnerável.'
          ]
        },
        {
          t: 'tabela',
          cab: ['Sinal', 'O que significa', 'O que fazer'],
          linhas: [
            ['Cansaço muscular difuso', 'normal, adaptação', 'continuar, com pausas'],
            ['Queimação no antebraço', 'excesso de tensão acumulada', 'parar a sessão, alongar, voltar amanhã'],
            ['Dor em ponto específico', 'possível inflamação', 'repouso de dias; se persistir, médico'],
            ['Formigamento ou perda de força', 'possível compressão de nervo', 'parar e procurar médico'],
            ['Dor que acorda à noite', 'sinal de alerta sério', 'médico, sem negociar']
          ],
          legenda: 'A regra de bolso: cansaço é muscular, difuso e passa com o descanso. Dor é localizada, aguda e volta. Cansaço se treina; dor se trata.'
        },
        {
          t: 'aviso', titulo: 'Jamais faça isto: ',
          x: 'tomar anti-inflamatório para conseguir estudar. A dor existe para avisar. Silenciá-la para continuar é o caminho mais rápido para uma lesão que leva meses.'
        },
        { t: 'h', x: 'Rotina de aquecimento (4 minutos)' },
        {
          t: 'tab', bpm: 50, legenda: 'Aquecimento: cordas soltas com os quatro dedos da direita, depois cromatismo lento com os quatro dedos da esquerda. Sem força, sem pressa.',
          compassos: [
            { notas: [{ pos: [[6, 0]], fig: 'seminima', dedo: 'p' }, { pos: [[3, 0]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 0]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 0]], fig: 'seminima', dedo: 'a' }] },
            { notas: [{ pos: [[6, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[6, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[6, 4]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[5, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[5, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[5, 4]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[4, 1]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 2]], fig: 'seminima', dedo: 'm' }, { pos: [[4, 3]], fig: 'seminima', dedo: 'i' }, { pos: [[4, 4]], fig: 'minima', dedo: 'm' }] }
          ]
        },
        { t: 'h', x: 'Alongamento depois de estudar' },
        {
          t: 'lista', itens: [
            '*Extensão do pulso*: mão aberta, dedos para cima, empurre levemente a palma com a outra mão. 20 segundos cada.',
            '*Flexão do pulso*: dedos para baixo, empurre o dorso. 20 segundos cada.',
            '*Dedos individuais*: puxe cada dedo levemente para trás, 5 segundos.',
            '*Ombros*: gire para trás dez vezes, devagar.',
            'Alongue *depois* de tocar, nunca antes com força: músculo frio alongado com força se machuca.'
          ]
        },
        {
          t: 'check', chave: 'saude42', titulo: 'Hábitos para instalar nesta semana',
          itens: [
            'Aquecimento de 4 minutos antes de cada sessão.',
            'Varredura corporal a cada 5 minutos.',
            'Pausa de 2 minutos a cada 25 minutos.',
            'Alongamento ao fim de cada sessão.',
            'Teste da pressão mínima na mão esquerda.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Saúde das mãos', rodadas: 6,
          perguntas: [
            { texto: 'Qual é o princípio central para evitar lesões?', opcoes: ['Alternar tensão e relaxamento', 'Estudar sempre forte', 'Nunca parar', 'Aumentar a pressão'], correta: 0, explicacao: 'Contrai, toca, solta.' },
            { texto: 'Formigamento nos dedos durante o estudo exige:', opcoes: ['Parar e procurar médico', 'Mais aquecimento', 'Mais força', 'Trocar de cordas'], correta: 0, explicacao: 'Possível compressão nervosa.' },
            { texto: 'Qual é o limite seguro de aumento de tempo de estudo?', opcoes: ['Cerca de 10% por semana', 'Dobrar por semana', 'Sem limite', '50% por dia'], correta: 0, explicacao: 'Adaptação gradual.' },
            { texto: 'O teste da pressão mínima consiste em:', opcoes: ['Aliviar a pressão até a nota chiar e tocar logo acima disso', 'Apertar o máximo', 'Tocar sem pressão', 'Medir com aparelho'], correta: 0, explicacao: 'Evita excesso crônico.' },
            { texto: 'Quando alongar?', opcoes: ['Depois de tocar', 'Antes, com força', 'Durante as peças', 'Nunca'], correta: 0, explicacao: 'Músculo aquecido.' },
            { texto: 'A diferença entre cansaço e dor é:', opcoes: ['Cansaço é difuso e passa; dor é localizada e volta', 'Nenhuma', 'Dor é mais fraca', 'Cansaço dura mais'], correta: 0, explicacao: 'Critério prático.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Estudar duas horas seguidas sem pausa porque "está rendendo".', certo: 'Pausa de 2 minutos a cada 25. O rendimento cai e o risco sobe.' },
            { erro: 'Apertar as cordas com o dobro da força necessária.', certo: 'Faça o teste da pressão mínima uma vez por semana.' },
            { erro: 'Tomar remédio para conseguir estudar com dor.', certo: 'Dor pede repouso e, se insistir, avaliação médica.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Tocar bem é alternar tensão e relaxamento.',
            'Varredura corporal a cada 5 minutos; pausa a cada 25.',
            'Aumente o tempo total no máximo 10% por semana.',
            'Cansaço se treina; dor se trata. Formigamento é motivo para médico.',
            'Aqueça antes, alongue depois.'
          ]
        }
      ],
      quiz: [
        { texto: 'A pausa recomendada durante o estudo é de:', opcoes: ['2 minutos a cada 20 ou 25', '10 minutos a cada hora', 'Nenhuma', '1 minuto a cada 5'], correta: 0, explicacao: 'Pausa curta e frequente.' },
        { texto: 'Queimação no antebraço significa:', opcoes: ['Tensão acumulada: encerrar a sessão', 'Progresso', 'Falta de força', 'Cordas duras'], correta: 0, explicacao: 'Sinal de excesso.' },
        { texto: 'O aquecimento serve para:', opcoes: ['Preparar tendões e articulações antes do esforço', 'Afinar', 'Aumentar o volume', 'Decorar a peça'], correta: 0, explicacao: 'Tendão frio é vulnerável.' },
        { texto: 'Dor que acorda à noite indica:', opcoes: ['Procurar um médico', 'Estudar mais', 'Alongar mais forte', 'Trocar o violão'], correta: 0, explicacao: 'Sinal de alerta sério.' },
        { texto: 'Durante a varredura corporal você confere:', opcoes: ['Maxilar, ombros, pulsos e polegares', 'Só as mãos', 'A afinação', 'O metrônomo'], correta: 0, explicacao: 'A tensão se esconde longe das mãos.' },
        { texto: 'A pressão correta da mão esquerda é:', opcoes: ['Um pouco acima do mínimo que faz a nota soar limpa', 'A máxima possível', 'Metade do mínimo', 'Depende do volume desejado'], correta: 0, explicacao: 'Volume é da mão direita.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Faço o aquecimento de 4 minutos antes de estudar.',
          'Faço a varredura corporal e encontro onde costumo travar.',
          'Respeito a pausa de 2 minutos a cada 25.',
          'Alongo ao fim da sessão.',
          'Termino as sessões sem dor.'
        ],
        criterio: 'Você domina quando consegue estudar 45 minutos com pausas e terminar sem dor nem tensão residual.'
      }
    }
  ]
};
