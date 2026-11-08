// NÍVEL 1 · MÓDULO 1.2 — Postura e posicionamento
// Cinco aulas: sentar, apoiar o violão, mão direita, mão esquerda e relaxamento.

export const M12 = {
  id: '1.2',
  titulo: 'Postura e posicionamento',
  objetivo: 'Sentar, segurar o violão e posicionar as duas mãos de um jeito que você possa estudar uma hora por dia durante anos sem dor e sem travar a técnica.',
  aulas: [

    // ---------------------------------------------------------------- 1.2.1
    {
      id: 'n1.2.1',
      titulo: 'Como sentar',
      resumo: 'A cadeira certa, a coluna, a altura dos joelhos.',
      minutos: 10,
      disciplinas: ['postura'],
      prereq: ['n1.1.2'],
      status: 'implementado',
      cobre: ['Postura correta sentado'],
      objetivo: 'Montar um lugar de estudo que sustente o corpo, para que as mãos fiquem livres para trabalhar.',
      blocos: [
        { t: 'p', x: 'Postura não é formalidade. É engenharia: se o corpo não está apoiado, os braços seguram o violão, e braço que segura não toca. Toda dificuldade técnica que você tiver nos próximos meses vai ter, em parte, uma causa postural.' },
        { t: 'h', x: 'A cadeira' },
        {
          t: 'lista', itens: [
            'Sem braços: os apoios atrapalham o cotovelo direito.',
            'Assento firme e plano. Sofá e poltrona são péssimos para estudar.',
            'Altura tal que, com os pés no chão, os *joelhos fiquem na mesma altura dos quadris ou um pouco abaixo*.',
            'Sente na metade da frente do assento, não encostado no fundo.'
          ]
        },
        { t: 'h', x: 'A coluna' },
        {
          t: 'passos', itens: [
            'Sente na beirada da cadeira, pés inteiros no chão.',
            'Deixe o peso cair sobre os dois ossinhos da bacia (os ísquios), não sobre o cóccix.',
            'Alongue a coluna para cima, como se um fio puxasse o alto da cabeça.',
            'Solte os ombros para baixo e para trás. Não force o peito para fora.',
            'O queixo fica paralelo ao chão: você olha para o braço do violão com os *olhos*, não torcendo o pescoço.'
          ]
        },
        { t: 'postura', tipo: 'classica', legenda: 'Postura clássica: coluna alongada, ombros soltos, o violão apoiado e não segurado.' },
        {
          t: 'dica', x: 'Teste simples: depois de montar a postura, *tire as duas mãos do violão por três segundos*. Se o instrumento escorregar ou cair, ele estava sendo segurado pelos braços. Ajuste até ele ficar parado sozinho.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Curvar as costas para ver as cordas.', certo: 'Incline o violão para trás, trazendo o tampo um pouco para cima, em vez de dobrar a coluna.' },
            { erro: 'Levantar o ombro direito.', certo: 'O ombro fica solto, caído. Se ele sobe, o violão está baixo demais.' },
            { erro: 'Cruzar as pernas.', certo: 'Os dois pés no chão (ou um no apoio). Pernas cruzadas torcem a bacia e a coluna.' },
            { erro: 'Estudar no sofá.', certo: 'O corpo afunda e nada fica no lugar. Use uma cadeira de jantar.' }
          ]
        },
        {
          t: 'check', chave: 'sentar', titulo: 'Antes de cada sessão de estudo',
          itens: ['Cadeira sem braços e firme', 'Sentado na metade da frente do assento', 'Pés inteiros no chão (ou um no apoio)', 'Coluna alongada, ombros soltos', 'Testei: o violão fica parado sem as mãos']
        },
        {
          t: 'resumo', itens: [
            'Cadeira sem braços, firme, da altura dos seus joelhos.',
            'Sente na frente do assento, coluna alongada, ombros soltos.',
            'Olhe com os olhos, não torcendo o pescoço.',
            'Se o violão cai quando você solta as mãos, a postura ainda não está certa.'
          ]
        }
      ],
      quiz: [
        { texto: 'Por que a cadeira não deve ter braços?', opcoes: ['Porque atrapalham o cotovelo direito', 'Porque são desconfortáveis', 'Porque arranham o violão', 'Porque deixam a cadeira alta demais'], correta: 0, explicacao: 'O braço direito precisa cair livre sobre o tampo.' },
        { texto: 'Como testar se a postura está certa?', opcoes: ['Soltar as duas mãos por três segundos e ver se o violão fica parado', 'Ver se o som sai mais alto', 'Contar quantos minutos aguenta', 'Perguntar para alguém'], correta: 0, explicacao: 'Se cai, os braços estavam segurando em vez de tocar.' },
        { texto: 'Qual a altura ideal dos joelhos quando você senta?', opcoes: ['Na altura dos quadris ou um pouco abaixo', 'Bem mais altos que os quadris', 'Encostados no chão', 'Não importa'], correta: 0, explicacao: 'Assim a bacia fica neutra e a coluna se alonga sozinha.' },
        { texto: 'O que fazer para enxergar melhor as cordas?', opcoes: ['Inclinar o violão trazendo o tampo um pouco para cima', 'Curvar as costas', 'Levantar o ombro direito', 'Aproximar o rosto do braço'], correta: 0, explicacao: 'Dobrar a coluna cria dor e tira a liberdade dos braços.' },
        { texto: 'Por que não estudar no sofá?', opcoes: ['Porque o corpo afunda e a postura se perde', 'Porque o som fica abafado', 'Porque faz o violão desafinar', 'Porque é proibido'], correta: 0, explicacao: 'Assento firme é parte do equipamento de estudo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Montei um lugar fixo de estudo com uma cadeira adequada.',
          'Passo no teste das três mãos soltas.',
          'Consigo ficar dez minutos sentado assim sem desconforto.'
        ],
        criterio: 'Você domina quando a postura se monta sozinha ao sentar, sem precisar pensar em cada item.'
      }
    },

    // ---------------------------------------------------------------- 1.2.2
    {
      id: 'n1.2.2',
      titulo: 'Onde apoiar o violão',
      resumo: 'Os quatro pontos de contato, o apoio para o pé e as alternativas ergonômicas.',
      minutos: 12,
      disciplinas: ['postura'],
      prereq: ['n1.2.1'],
      status: 'implementado',
      cobre: ['Posicionamento do violão', 'Apoio para o pé ou suporte ergonômico'],
      objetivo: 'Posicionar o violão de modo que ele fique estável sem ajuda das mãos, no ângulo que facilita as duas mãos.',
      blocos: [
        { t: 'p', x: 'Existem dois jeitos clássicos de apoiar o violão sentado, e os dois funcionam. O importante é que o instrumento fique *apoiado*, não *segurado*.' },
        { t: 'h', x: 'Os quatro pontos de contato' },
        { t: 'p', x: 'Na postura clássica, o violão toca o corpo em quatro lugares. Juntos, eles seguram o instrumento sem nenhuma ajuda das mãos:' },
        {
          t: 'passos', itens: [
            'A *cintura do violão* apoiada na coxa esquerda (que está levantada pelo apoio de pé).',
            'A *lateral de baixo* encostada na coxa direita, por dentro.',
            'O *fundo* encostado no peito, do lado direito.',
            'O *antebraço direito* pousado na borda do tampo, perto do bojo maior.'
          ]
        },
        { t: 'postura', tipo: 'classica', legenda: 'Postura clássica: pé esquerdo no apoio, violão na coxa esquerda, braço do instrumento subindo a uns 45°.' },
        { t: 'h', x: 'O apoio para o pé' },
        { t: 'p', x: 'É um banquinho pequeno e regulável que levanta o pé esquerdo uns 15 a 20 cm. Ele existe por um motivo prático: levantando a coxa esquerda, o violão sobe e o braço do instrumento fica mais alto, numa diagonal de cerca de *45 graus*. Essa diagonal é o que permite à mão esquerda alcançar as casas baixas sem torcer o punho.' },
        {
          t: 'dica', x: 'Sem apoio em casa? Uma pilha de livros grossos, uma caixa de sapato reforçada ou um degrau resolvem no começo. O importante é a altura, não o objeto.'
        },
        { t: 'h', x: 'A alternativa: suporte ergonômico' },
        { t: 'p', x: 'Muitos violonistas profissionais trocaram o apoio de pé por um *suporte ergonômico*: uma peça que se prende na lateral do violão com ventosas e se apoia na coxa, deixando os dois pés no chão. A vantagem é não torcer a bacia nem a coluna, o que previne dor lombar em quem estuda muitas horas.' },
        {
          t: 'comparar',
          a: { titulo: 'Apoio para o pé', itens: ['Barato e fácil de achar', 'Tradição de dois séculos', 'Levanta um lado da bacia', 'Pode causar dor lombar em sessões longas'] },
          b: { titulo: 'Suporte ergonômico', itens: ['Os dois pés ficam no chão', 'Bacia e coluna neutras', 'Mais caro', 'Precisa de ventosa limpa para não cair'] }
        },
        { t: 'h', x: 'A postura comum (perna direita)' },
        { t: 'p', x: 'É como quase todo mundo toca violão popular: o instrumento apoiado na coxa direita, quase deitado. É confortável para acompanhar canções e cantar junto, mas o braço do violão fica baixo e quase horizontal, o que *dificulta muito* a mão esquerda nas casas 1 a 4 e no uso do mindinho.' },
        { t: 'postura', tipo: 'comum', legenda: 'Postura comum: boa para acompanhar canções; ruim para o repertório que exige abertura de mão.' },
        { t: 'p', x: 'A recomendação deste curso: *estude na postura clássica* e use a comum quando estiver tocando para alguém, se preferir. Quem aprende só na postura comum costuma travar quando chega nas pestanas e nas peças de dedilhado.' },
        {
          t: 'aviso', x: 'Nunca deixe o violão escorregando no colo. Se ele escorrega, o braço esquerdo passa a segurar, o punho trava e a mão perde metade do alcance. Resolva o apoio antes de resolver a técnica.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Deixar o braço do violão apontando para baixo.', certo: 'A cabeça do violão deve ficar na altura do seu ombro, mais ou menos.' },
            { erro: 'Apoiar o antebraço direito sobre as cordas.', certo: 'O apoio é na borda do tampo; a mão fica solta sobre a boca.' },
            { erro: 'Grudar o violão no peito com força.', certo: 'Contato leve. O instrumento precisa vibrar; abafar o fundo tira volume.' }
          ]
        },
        {
          t: 'check', chave: 'apoio', titulo: 'Confira agora, com o violão no colo',
          itens: ['A cintura do violão está sobre a coxa esquerda', 'A cabeça do violão está na altura do meu ombro', 'O antebraço direito está na borda do tampo', 'Solto as mãos e o violão não se mexe']
        },
        {
          t: 'resumo', itens: [
            'Quatro pontos de contato seguram o violão sem as mãos.',
            'O apoio de pé levanta a coxa esquerda e põe o braço do violão a 45°.',
            'O suporte ergonômico faz o mesmo sem torcer a bacia.',
            'A postura comum serve para acompanhar; a clássica serve para aprender.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos pontos de contato seguram o violão na postura clássica?', opcoes: ['Quatro', 'Dois', 'Seis', 'Um'], correta: 0, explicacao: 'Coxa esquerda, coxa direita, peito e antebraço direito.' },
        { texto: 'Para que serve o apoio para o pé?', opcoes: ['Levantar a coxa esquerda e pôr o braço do violão a 45°', 'Descansar o pé', 'Aumentar o volume', 'Evitar que o violão arranhe'], correta: 0, explicacao: 'A diagonal é o que dá alcance à mão esquerda.' },
        { texto: 'Qual a vantagem do suporte ergonômico?', opcoes: ['Deixa os dois pés no chão, sem torcer a bacia', 'É mais barato', 'Aumenta o som', 'Dispensa a cadeira'], correta: 0, explicacao: 'Por isso é a escolha de muitos profissionais que tocam horas por dia.' },
        { texto: 'Por que a postura com o violão na perna direita dificulta o aprendizado?', opcoes: ['O braço do violão fica baixo e a mão esquerda perde alcance', 'O som fica abafado', 'O violão desafina', 'O polegar direito não alcança'], correta: 0, explicacao: 'Pestanas e aberturas de mão ficam muito mais difíceis.' },
        { texto: 'Onde o antebraço direito se apoia?', opcoes: ['Na borda do tampo, perto do bojo maior', 'Sobre as cordas', 'No braço do violão', 'Na perna direita'], correta: 0, explicacao: 'Apoiar nas cordas abafa o som e trava a mão.' },
        { texto: 'Onde deve ficar a cabeça do violão?', opcoes: ['Mais ou menos na altura do seu ombro', 'Apontando para o chão', 'Acima da sua cabeça', 'Encostada na parede'], correta: 0, explicacao: 'É o que resulta da diagonal de 45°.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Monto a postura clássica sozinho, com apoio de pé ou substituto.',
          'O violão fica firme quando solto as duas mãos.',
          'A cabeça do violão fica na altura do meu ombro.',
          'Consigo manter isso por dez minutos sem reposicionar.'
        ],
        criterio: 'Você domina quando a posição se repete igual todo dia, sem ajustes longos.'
      }
    },

    // ---------------------------------------------------------------- 1.2.3
    {
      id: 'n1.2.3',
      titulo: 'A mão direita',
      resumo: 'Ângulo do punho, curva dos dedos, onde a unha e a polpa tocam a corda.',
      minutos: 14,
      disciplinas: ['postura', 'tecnica'],
      prereq: ['n1.1.5', 'n1.2.2'],
      status: 'implementado',
      cobre: ['Posicionamento da mão direita'],
      objetivo: 'Posicionar a mão direita de modo que o som saia cheio e os dedos possam se mover sozinhos.',
      blocos: [
        { t: 'p', x: 'A mão direita é a que faz o som. A qualidade do seu violão importa menos do que o jeito como esta mão toca a corda. Vale cada minuto que você gastar aqui.' },
        { t: 'h', x: 'Onde a mão fica' },
        {
          t: 'passos', itens: [
            'Antebraço pousado na borda do tampo, logo depois do bojo maior.',
            'A mão cai naturalmente *sobre a boca do violão*, mais perto do cavalete do que do braço.',
            'O punho fica levemente arqueado para fora, formando uma cúpula. Não é dobrado: é arredondado.',
            'Os dedos *i, m e a* ficam curvados, apontando mais ou menos para o cavalete.',
            'O polegar fica *à frente* dos outros dedos, formando um X com o indicador quando visto de cima.'
          ]
        },
        { t: 'mao', lado: 'direita', destacar: ['p'], legenda: 'O polegar trabalha separado dos outros três: ele vem de cima, os outros vêm de baixo.' },
        { t: 'h', x: 'O X do polegar' },
        { t: 'p', x: 'Este é o detalhe que mais muda o som de um iniciante. O polegar não pode ficar alinhado nem atrás do indicador: ele precisa ficar *à frente*, mais perto do braço do violão. Olhando de cima, o polegar e o indicador formam um X.' },
        { t: 'p', x: 'Por quê? Porque assim o polegar toca a corda grave e sai para fora sem bater no indicador, e o indicador toca a corda aguda sem esbarrar no polegar. Com a mão alinhada, os dois se atropelam e você nunca consegue tocar baixo e melodia ao mesmo tempo.' },
        { t: 'h', x: 'Onde a corda é tocada' },
        { t: 'p', x: 'O ponto em que o dedo encontra a corda muda o timbre:' },
        {
          t: 'tabela',
          cab: ['Onde', 'Nome', 'Som'],
          linhas: [
            ['Perto do cavalete', 'Ponticello', 'Metálico, brilhante, nasal'],
            ['Sobre a boca', 'Natural', 'Cheio e equilibrado: o ponto padrão'],
            ['Perto do braço', 'Tasto (ou dolce)', 'Doce, aveludado, abafado']
          ],
          legenda: 'Experimente os três hoje mesmo: toque a 1ª corda solta nos três lugares e ouça a diferença.'
        },
        { t: 'h', x: 'Unha, polpa ou os dois' },
        { t: 'p', x: 'No violão clássico, o som mais usado nasce do encontro dos dois: a corda entra primeiro na *polpa* do dedo, desliza e sai pela *unha*. A polpa dá corpo, a unha dá definição. Para isso a unha precisa estar lixada, lisa e com apenas 1 a 2 mm além da ponta do dedo.' },
        {
          t: 'dica', x: 'Se as suas unhas são curtas ou quebradiças, não tem problema: muita gente toca só com polpa e consegue um som bonito, mais suave. O que não funciona é unha comprida e sem lixar: ela engancha e faz um clique desagradável.'
        },
        { t: 'h', x: 'Os dois toques básicos' },
        {
          t: 'comparar',
          a: { titulo: 'Tirando (toque livre)', itens: ['O dedo toca a corda e sai para cima, sem encostar na corda vizinha', 'Usado em arpejos e sempre que há várias cordas soando', 'É o toque que você vai usar primeiro'] },
          b: { titulo: 'Apoyando (toque apoiado)', itens: ['O dedo atravessa a corda e *descansa* na corda vizinha mais grave', 'Dá um som mais forte e cheio', 'Usado em melodias e escalas', 'Aparece em detalhe no Nível 2'] }
        },
        {
          t: 'tocar', titulo: 'Experimente o toque livre',
          seq: [{ corda: 1, casa: 0, rotulo: '1ª · a' }, { corda: 2, casa: 0, rotulo: '2ª · m' }, { corda: 3, casa: 0, rotulo: '3ª · i' }, { corda: 1, casa: 0, rotulo: '1ª · a' }],
          rotulo: 'Tocar a, m, i, a',
          x: 'Com o punho em cúpula e o polegar à frente, toque 1ª com o anelar, 2ª com o médio, 3ª com o indicador e volte à 1ª. O dedo sai para cima, sem encostar na corda de baixo.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Punho apoiado no tampo ou no cavalete.', certo: 'A mão flutua. Só o antebraço se apoia, na borda.' },
            { erro: 'Polegar atrás do indicador.', certo: 'Polegar à frente, formando um X com o indicador.' },
            { erro: 'Dedos esticados, batendo na corda.', certo: 'Dedos curvados, puxando a corda levemente para dentro antes de soltar.' },
            { erro: 'Mover o dedo a partir da ponta.', certo: 'O movimento nasce na junta grande, a que liga o dedo à mão.' },
            { erro: 'Fazer força.', certo: 'Som alto vem de bom contato, não de força. Força dá som duro e cansa em cinco minutos.' }
          ]
        },
        {
          t: 'check', chave: 'maodir', titulo: 'Confira a sua mão direita',
          itens: ['O antebraço está na borda do tampo', 'A mão flutua sobre a boca', 'O punho está arredondado, em cúpula', 'O polegar forma um X com o indicador', 'Os dedos estão curvados', 'Consigo tocar sem apoiar o mindinho no tampo']
        },
        {
          t: 'resumo', itens: [
            'A mão direita flutua sobre a boca, com o antebraço apoiado na borda do tampo.',
            'Punho em cúpula, dedos curvados, movimento nascendo na junta grande.',
            'O polegar fica à frente do indicador, formando um X.',
            'Perto do cavalete o som é metálico; perto do braço, doce; sobre a boca, equilibrado.',
            'Toque livre (tirando) sai para cima; toque apoiado (apoyando) descansa na corda vizinha.'
          ]
        }
      ],
      quiz: [
        { texto: 'Onde o antebraço direito se apoia?', opcoes: ['Na borda do tampo, depois do bojo maior', 'Sobre as cordas', 'No cavalete', 'Na perna'], correta: 0, explicacao: 'A mão em si fica flutuando, livre.' },
        { texto: 'Como deve ficar o polegar em relação ao indicador?', opcoes: ['À frente, formando um X', 'Atrás', 'Alinhado', 'Encostado'], correta: 0, explicacao: 'Assim os dois não se atropelam.' },
        { texto: 'Tocar perto do cavalete produz que som?', opcoes: ['Metálico e brilhante', 'Doce e aveludado', 'Abafado', 'Igual a qualquer outro ponto'], correta: 0, explicacao: 'Chama-se ponticello.' },
        { texto: 'No toque livre (tirando), o que o dedo faz depois de tocar a corda?', opcoes: ['Sai para cima, sem encostar na corda vizinha', 'Descansa na corda vizinha', 'Fica parado na corda', 'Vai para o cavalete'], correta: 0, explicacao: 'No apoyando é que o dedo descansa na corda vizinha.' },
        { texto: 'De onde nasce o movimento do dedo?', opcoes: ['Da junta grande, que liga o dedo à mão', 'Da ponta do dedo', 'Do punho', 'Do cotovelo'], correta: 0, explicacao: 'Movimento da ponta gera som fraco e cansa.' },
        { texto: 'Como deve estar a unha para o som clássico?', opcoes: ['Lixada, lisa, 1 a 2 mm além da ponta do dedo', 'Bem comprida', 'Cortada rente', 'Não importa'], correta: 0, explicacao: 'A corda entra pela polpa e sai pela unha.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Minha mão direita flutua, com o antebraço apoiado na borda.',
          'Meu polegar forma um X com o indicador.',
          'Toco i, m e a nas cordas 3, 2 e 1 com som limpo, sem esbarrar nas vizinhas.',
          'Consigo tocar a mesma corda nos três pontos (cavalete, boca, braço) e ouço a diferença.'
        ],
        criterio: 'Você domina quando o som sai limpo e igual em três toques seguidos, sem precisar corrigir a mão.'
      }
    },

    // ---------------------------------------------------------------- 1.2.4
    {
      id: 'n1.2.4',
      titulo: 'A mão esquerda',
      resumo: 'Polegar atrás, dedos em arco, pressão mínima, perto do traste.',
      minutos: 14,
      disciplinas: ['postura', 'tecnica'],
      prereq: ['n1.1.5', 'n1.2.2'],
      status: 'implementado',
      cobre: ['Posicionamento da mão esquerda'],
      objetivo: 'Apertar as cordas com o mínimo de esforço, com som limpo e com os quatro dedos disponíveis.',
      blocos: [
        { t: 'p', x: 'A mão esquerda não "aperta": ela *encosta no lugar certo*. Quem aperta com força trava o punho, cansa em minutos e acaba com tendinite. Quem põe o dedo no lugar certo precisa de muito pouca força.' },
        { t: 'h', x: 'O polegar' },
        { t: 'p', x: 'O polegar esquerdo fica *atrás do braço*, mais ou menos no meio da madeira, apontando para cima, na direção do teto. Ele não aparece por cima da escala. Ele funciona como o lado oposto de uma pinça: os quatro dedos empurram de um lado, o polegar sustenta do outro.' },
        {
          t: 'dica', x: 'Uma referência boa: o polegar costuma ficar atrás, entre os dedos 1 e 2. Se ele ficar muito para trás da mão, o punho torce; se ficar muito à frente, o mindinho não alcança.'
        },
        { t: 'h', x: 'Os quatro dedos' },
        {
          t: 'passos', itens: [
            'Os dedos caem *perpendiculares* à escala, como pequenos martelos.',
            'Cada dedo toca a corda com a *ponta*, não com a polpa deitada.',
            'As unhas da mão esquerda precisam estar *curtas*. Com unha, a ponta não alcança a corda.',
            'O dedo fica *bem perto do traste da frente*, dentro da casa, quase encostado no metal.',
            'Os outros dedos ficam parados sobre as cordas, prontos, sem levantar para longe.'
          ]
        },
        { t: 'mao', lado: 'esquerda', legenda: 'Os quatro dedos que apertam. O polegar não tem número porque não aperta nada.' },
        { t: 'h', x: 'Por que perto do traste' },
        { t: 'p', x: 'Quem decide a nota é o *traste*, não o seu dedo: a corda vibra do traste até o cavalete. O seu dedo só serve para prender a corda contra o traste. Quanto mais perto dele você põe o dedo, menos força é preciso e mais limpa a nota sai. No meio da casa, você precisa apertar muito mais; encostado no metal, a nota morre.' },
        { t: 'braco', casas: 5, notas: [{ corda: 1, casa: 1, rotulo: '1', classe: 'raiz' }, { corda: 2, casa: 2, rotulo: '2', classe: 'raiz' }, { corda: 3, casa: 3, rotulo: '3', classe: 'raiz' }], legenda: 'Um dedo por casa: esta é a posição básica da mão esquerda. Dedo 1 na casa 1, dedo 2 na casa 2 e assim por diante.' },
        { t: 'h', x: 'O teste da pressão mínima' },
        {
          t: 'passos', itens: [
            'Ponha o dedo 1 na 1ª corda, casa 1, mas *sem apertar*: só encostando.',
            'Toque a corda: vai sair um som abafado, de pano.',
            'Vá aumentando a pressão bem devagar e tocando de novo.',
            'No momento em que a nota fica limpa, *pare*. Aquela é a pressão certa.',
            'Você vai descobrir que é muito menos força do que imaginava.'
          ]
        },
        {
          t: 'tocar', titulo: 'Primeira nota presa',
          seq: [{ corda: 1, casa: 1, rotulo: '1ª/1 · Fá' }, { corda: 1, casa: 3, rotulo: '1ª/3 · Sol' }, { corda: 2, casa: 1, rotulo: '2ª/1 · Dó' }, { corda: 2, casa: 3, rotulo: '2ª/3 · Ré' }],
          rotulo: 'Tocar quatro notas presas',
          x: 'Dedo 1 na casa 1 e dedo 3 na casa 3, na 1ª e depois na 2ª corda. Procure a pressão mínima que deixa a nota limpa.'
        },
        {
          t: 'erros', itens: [
            { erro: 'Polegar por cima do braço, agarrando como um taco de beisebol.', certo: 'Polegar atrás, apontando para o teto. Serve a maioria das canções populares, mas trava o mindinho.' },
            { erro: 'Unhas compridas na mão esquerda.', certo: 'Corte rente. Com unha, você toca com a polpa deitada e abafa a corda vizinha.' },
            { erro: 'Dedo deitado, encostando na corda de baixo.', certo: 'Dedo em pé, na ponta, em arco.' },
            { erro: 'Dedo no meio da casa ou em cima do traste.', certo: 'Logo atrás do traste da frente, dentro da casa.' },
            { erro: 'Levantar os outros dedos bem alto.', certo: 'Eles ficam pairando perto das cordas, prontos para a próxima nota.' },
            { erro: 'Apertar com toda a força o tempo todo.', certo: 'Use o teste da pressão mínima. Força sobrando vira dor.' }
          ]
        },
        {
          t: 'check', chave: 'maoesq', titulo: 'Confira a sua mão esquerda',
          itens: ['Unhas curtas', 'Polegar atrás do braço, apontando para cima', 'Dedos em arco, tocando com a ponta', 'Dedo perto do traste da frente', 'Punho sem torcer', 'Fiz o teste da pressão mínima']
        },
        {
          t: 'resumo', itens: [
            'O polegar fica atrás do braço: ele sustenta, não aperta.',
            'Os dedos caem em arco, na ponta, perpendiculares à escala.',
            'O dedo fica dentro da casa, bem perto do traste da frente.',
            'Unhas da mão esquerda sempre curtas.',
            'A pressão certa é a mínima que faz a nota sair limpa.'
          ]
        }
      ],
      quiz: [
        { texto: 'Onde fica o polegar da mão esquerda?', opcoes: ['Atrás do braço, apontando para cima', 'Por cima da 6ª corda', 'Na escala, junto com os outros dedos', 'No tampo'], correta: 0, explicacao: 'Ele é o lado oposto da pinça.' },
        { texto: 'Em que ponto da casa o dedo deve ficar?', opcoes: ['Bem perto do traste da frente, dentro da casa', 'No meio da casa', 'Em cima do traste', 'Logo depois do traste de trás'], correta: 0, explicacao: 'Perto do traste exige menos força e dá som mais limpo.' },
        { texto: 'Por que as unhas da mão esquerda devem ser curtas?', opcoes: ['Para o dedo tocar a corda com a ponta, em arco', 'Para não arranhar o braço', 'Para afinar melhor', 'Para não quebrar'], correta: 0, explicacao: 'Com unha, o dedo deita e abafa a corda vizinha.' },
        { texto: 'Qual é a pressão certa da mão esquerda?', opcoes: ['A mínima que faz a nota sair limpa', 'A máxima que você aguenta', 'Metade da máxima', 'Depende do dedo'], correta: 0, explicacao: 'O teste da pressão mínima mostra o quanto é pouco.' },
        { texto: 'Quem realmente define a altura da nota?', opcoes: ['O traste', 'O seu dedo', 'A tarraxa', 'O cavalete'], correta: 0, explicacao: 'A corda vibra do traste até o cavalete; o dedo só prende.' },
        { texto: 'O que os dedos que não estão tocando devem fazer?', opcoes: ['Ficar pairando perto das cordas, prontos', 'Levantar bem alto', 'Encostar no tampo', 'Ficar esticados'], correta: 0, explicacao: 'Dedo longe da corda é tempo perdido na próxima nota.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Meu polegar fica atrás do braço durante todo o estudo.',
          'Minhas unhas da mão esquerda estão curtas.',
          'Toco quatro notas presas seguidas, todas limpas.',
          'Fiz o teste da pressão mínima e sei qual é a minha força certa.',
          'Meus dedos ficam em arco, sem deitar na corda vizinha.'
        ],
        criterio: 'Você domina quando as notas presas saem limpas sem que você precise apertar com força.'
      }
    },

    // ---------------------------------------------------------------- 1.2.5
    {
      id: 'n1.2.5',
      titulo: 'Relaxamento e prevenção de lesões',
      resumo: 'Como estudar muito sem machucar: pausas, sinais de alerta e alongamentos.',
      minutos: 12,
      disciplinas: ['postura'],
      prereq: ['n1.2.3', 'n1.2.4'],
      status: 'implementado',
      cobre: ['Relaxamento e prevenção de tensões'],
      objetivo: 'Reconhecer tensão desnecessária, saber parar na hora certa e construir uma rotina que o corpo aguente por anos.',
      blocos: [
        { t: 'p', x: 'Tocar violão é um esforço pequeno repetido milhares de vezes. É exatamente esse tipo de esforço que causa lesão: não o peso, mas a repetição com tensão. A boa notícia é que dá para evitar quase tudo com três hábitos simples.' },
        { t: 'h', x: 'Hábito 1: procurar a tensão' },
        { t: 'p', x: 'A cada poucos minutos, faça uma varredura rápida do corpo enquanto toca. Pergunte, na ordem: *A mandíbula está cerrada? Os ombros estão subindo? O pescoço está esticado para a frente? O punho esquerdo está torcido? Estou segurando a respiração?*' },
        { t: 'p', x: 'Quase todo iniciante responde "sim" para pelo menos duas. Perceber já resolve metade: ao notar, solte. Com algumas semanas, o corpo aprende a não ligar os músculos que não são necessários.' },
        {
          t: 'dica', titulo: 'Teste do sorriso: ',
          x: 'tente sorrir enquanto toca uma passagem difícil. Se o sorriso não sai, o seu rosto está tenso, e um rosto tenso quase sempre vem acompanhado de ombros e punhos tensos.'
        },
        { t: 'h', x: 'Hábito 2: pausas' },
        {
          t: 'lista', itens: [
            'A cada *20 a 25 minutos* de estudo, pare de 2 a 3 minutos. Solte os braços, levante, ande.',
            'Nunca estude mais de uma hora seguida sem uma pausa maior.',
            'Para um mesmo exercício difícil, prefira três blocos de 5 minutos ao longo do dia a um bloco de 15 minutos.',
            'Dormir é parte do estudo: boa parte do que você treinou se consolida no sono.'
          ]
        },
        { t: 'h', x: 'Hábito 3: aquecer e soltar' },
        {
          t: 'passos', itens: [
            'Antes de tocar: abra e feche as mãos devagar, 10 vezes.',
            'Gire os punhos nos dois sentidos, 10 vezes cada.',
            'Toque cordas soltas bem devagar por um ou dois minutos, só sentindo o contato.',
            'Depois de tocar: estenda o braço com a palma para cima e puxe os dedos para baixo com a outra mão, 20 segundos em cada braço.',
            'Faça o mesmo com a palma para baixo, puxando os dedos na direção do corpo.'
          ]
        },
        { t: 'metronomo', titulo: 'Metrônomo lento para aquecer', bpm: 50, compasso: '4/4', x: 'Toque uma corda solta por clique, bem devagar, só prestando atenção na soltura da mão. Dois minutos bastam.' },
        { t: 'h', x: 'Sinais de alerta: pare agora' },
        {
          t: 'aviso', titulo: 'Procure um médico se: ',
          x: 'houver *dor* (não cansaço) durante ou depois de tocar; formigamento ou dormência nos dedos; dor que continua no dia seguinte; perda de força; dor que aparece cada vez mais cedo. Dor nunca é parte do aprendizado de violão.'
        },
        {
          t: 'comparar',
          a: { titulo: 'Normal no começo', itens: ['Pontas dos dedos esquerdos doloridas por 2 ou 3 semanas', 'Cansaço muscular leve que passa em minutos', 'Dificuldade de manter a posição por muito tempo'] },
          b: { titulo: 'Sinal de alerta', itens: ['Dor em punho, antebraço, cotovelo ou ombro', 'Formigamento ou dormência', 'Dor que acorda você à noite', 'Dor que persiste no dia seguinte'] }
        },
        { t: 'p', x: 'A dor nas pontas dos dedos esquerdos é a única exceção: no começo é inevitável e passa quando a pele engrossa. Mesmo assim, se arder muito, pare o dia e volte amanhã. Tocar com os dedos em carne viva não acelera nada.' },
        {
          t: 'check', chave: 'relax', titulo: 'Rotina de proteção',
          itens: ['Aqueci antes de tocar', 'Fiz varredura de tensão pelo menos duas vezes', 'Fiz pausa a cada 20-25 minutos', 'Alonguei depois de tocar', 'Não senti dor em punho, braço ou ombro']
        },
        {
          t: 'resumo', itens: [
            'Lesão de músico vem da repetição com tensão, não do esforço grande.',
            'Faça varredura de tensão: mandíbula, ombros, pescoço, punho, respiração.',
            'Pause 2 a 3 minutos a cada 20-25 minutos de estudo.',
            'Aqueça antes e alongue depois.',
            'Dedos doloridos no começo é normal; dor em punho, braço ou ombro não é: pare e procure ajuda.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é a principal causa de lesão em quem toca violão?', opcoes: ['Repetição de movimento com tensão desnecessária', 'Levantar o instrumento', 'Cordas muito finas', 'Tocar sentado'], correta: 0, explicacao: 'O esforço é pequeno, mas se repete milhares de vezes.' },
        { texto: 'De quanto em quanto tempo se recomenda uma pausa?', opcoes: ['A cada 20 a 25 minutos', 'A cada 2 horas', 'A cada 5 minutos', 'Não é preciso pausar'], correta: 0, explicacao: 'Pausas curtas e frequentes protegem e ainda melhoram o aprendizado.' },
        { texto: 'Qual destes é um sinal de alerta que pede parar e procurar um médico?', opcoes: ['Formigamento nos dedos', 'Pontas dos dedos esquerdos doloridas na 2ª semana', 'Cansaço leve que passa em minutos', 'Dificuldade de manter a posição'], correta: 0, explicacao: 'Formigamento e dormência indicam compressão de nervo.' },
        { texto: 'O que é o "teste do sorriso"?', opcoes: ['Tentar sorrir numa passagem difícil para perceber tensão', 'Sorrir ao acertar uma nota', 'Um exercício de respiração', 'Um alongamento facial'], correta: 0, explicacao: 'Rosto tenso quase sempre significa ombros e punhos tensos.' },
        { texto: 'Para um exercício difícil, o que rende mais?', opcoes: ['Três blocos de 5 minutos no dia', 'Um bloco de 15 minutos', 'Uma hora seguida', 'Tanto faz'], correta: 0, explicacao: 'O cérebro consolida melhor com intervalos entre as repetições.' },
        { texto: 'Dor nas pontas dos dedos da mão esquerda no primeiro mês é...', opcoes: ['Normal: a pele está engrossando', 'Sinal de lesão grave', 'Sinal de que a corda é errada', 'Sinal de postura errada'], correta: 0, explicacao: 'É a única dor esperada, e passa em algumas semanas.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Faço aquecimento antes de estudar.',
          'Faço varredura de tensão durante o estudo.',
          'Respeito as pausas a cada 20-25 minutos.',
          'Alongo depois de tocar.',
          'Sei identificar a diferença entre cansaço normal e sinal de alerta.'
        ],
        criterio: 'Você domina quando a rotina de proteção acontece sozinha, sem precisar lembrar.'
      }
    }
  ]
};
