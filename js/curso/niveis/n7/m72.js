// NÍVEL 7 — MÓDULO 7.2: Prática profissional
// Ensinar postura e técnica, corrigir vícios, estruturar exercícios, ensinar
// leitura, escolher repertório, organizar apresentações, conduzir conjuntos,
// preparar provas e concursos, gravar e produzir performances.

export const M72 = {
  id: '7.2',
  titulo: 'Prática profissional',
  resumo: 'O trabalho concreto de quem ensina e atua: da primeira aula de postura à produção de uma gravação.',
  aulas: [
    {
      id: 'n7.2.1',
      titulo: 'Ensino de postura e técnica',
      resumo: 'As primeiras aulas decidem dez anos de hábitos.',
      minutos: 20,
      disciplinas: ['postura', 'tecnica'],
      prereq: ['n7.1.3'],
      status: 'validado',
      cobre: ['Ensino de postura e técnica'],
      objetivo: 'Conduzir as primeiras aulas de postura e técnica estabelecendo hábitos corretos e sem tensão.',
      blocos: [
        { t: 'p', x: 'Tudo o que o aluno fizer nos próximos anos vai ser construído sobre a postura das primeiras aulas. Um ombro erguido ou um polegar errado nessa fase viram vícios que custam meses para desfazer. Vale investir tempo aqui — mesmo que o aluno queira "logo tocar uma música".' },
        { t: 'h', x: 'A ordem das primeiras aulas' },
        {
          t: 'passos', itens: [
            'Sentar: altura da cadeira, pés apoiados, coluna ereta sem rigidez, peso distribuído.',
            'Apoiar o instrumento: apoio de pé ou apoio lateral; o violão fica estável sem a ajuda das mãos.',
            'Mão direita: posição do pulso, ângulo dos dedos, ponto de contato. Só cordas soltas.',
            'Mão esquerda: polegar atrás, dedos curvos, pressão mínima. Só uma nota por vez.',
            'Primeira música: assim que as duas mãos estiverem posicionadas, nem que seja com duas notas.'
          ]
        },
        { t: 'postura', legenda: 'A postura de base: coluna ereta, ombros soltos, violão estável sem apoio das mãos, braço direito caindo naturalmente sobre o tampo.' },
        { t: 'h', x: 'O teste da estabilidade' },
        { t: 'p', x: 'Peça ao aluno para tirar as duas mãos do violão. Se o instrumento se mover, o apoio está errado. Esse teste simples resolve metade dos problemas posturais, e vale repetir em todas as primeiras aulas.' },
        {
          t: 'tabela',
          cab: ['Problema comum', 'Causa', 'Correção'],
          linhas: [
            ['Ombro direito erguido', 'Violão baixo demais ou cadeira alta', 'Ajustar altura; apoiar o antebraço no tampo, não o ombro'],
            ['Pulso esquerdo muito dobrado', 'Braço do violão baixo demais', 'Levantar o braço do violão (apoio de pé)'],
            ['Polegar esquerdo por cima do braço', 'Hábito de violão popular', 'Polegar atrás, na altura do dedo 2'],
            ['Pressão excessiva', 'Insegurança; corda alta', 'Buscar o ponto mínimo em que a nota não chia'],
            ['Pulso direito apoiado no tampo', 'Busca de estabilidade', 'Apoio no antebraço; o pulso fica livre e levemente arqueado'],
            ['Cabeça inclinada para ver o braço', 'Insegurança na posição das notas', 'Trabalhar o tato; permitir olhar só no começo']
          ]
        },
        { t: 'mao', lado: 'esquerda', legenda: 'A mão esquerda na primeira aula: dedos curvos, apoiando na ponta, polegar atrás do braço. Nenhuma pressão além do necessário.' },
        { t: 'h', x: 'Como corrigir sem travar o aluno' },
        {
          t: 'lista', itens: [
            'Corrija uma coisa por aula. Postura perfeita na primeira aula não existe.',
            'Use o toque com autorização: às vezes, posicionar fisicamente o pulso ensina mais que dez explicações. Sempre peça permissão antes.',
            'Mostre o problema num espelho ou numa foto do celular — ver é mais eficaz que ouvir.',
            'Explique a consequência: "assim o pulso dói depois de vinte minutos" convence mais que "está errado".',
            'Volte à postura em toda aula, por dois minutos, pelo primeiro ano.'
          ]
        },
        {
          t: 'aviso', x: 'Dor nunca é parte do aprendizado. Se o aluno relata dor em punho, antebraço, ombro ou pescoço, interrompa o conteúdo e investigue a postura. Dor persistente exige avaliação médica, não mais exercícios.'
        },
        {
          t: 'check', chave: 'ensinopostura', titulo: 'Prepare as primeiras aulas',
          itens: [
            'Pratiquei o teste da estabilidade com outra pessoa.',
            'Identifiquei três problemas posturais comuns e suas correções.',
            'Expliquei a consequência de um vício postural, não apenas que ele é errado.',
            'Usei foto ou espelho para mostrar um problema.',
            'Planejei a sequência das cinco primeiras aulas.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Postura na primeira aula', rodadas: 5,
          perguntas: [
            { texto: 'O que indica o teste da estabilidade?', opcoes: ['Se o violão se mantém sem a ajuda das mãos', 'Se o aluno está afinado', 'Se a cadeira é adequada', 'Se o aluno tem força'], correta: 0, explicacao: 'O instrumento deve ficar estável sozinho.' },
            { texto: 'Ombro direito erguido costuma indicar:', opcoes: ['Violão baixo demais ou cadeira alta', 'Falta de força', 'Corda alta', 'Unha comprida'], correta: 0, explicacao: 'É problema de altura relativa.' },
            { texto: 'Quantas correções posturais fazer por aula?', opcoes: ['Uma', 'Todas as observadas', 'Três', 'Depende do aluno'], correta: 0, explicacao: 'Mais de uma não é absorvida.' },
            { texto: 'Antes de posicionar fisicamente a mão do aluno, o professor deve:', opcoes: ['Pedir permissão', 'Explicar a anatomia', 'Demonstrar duas vezes', 'Gravar'], correta: 0, explicacao: 'Contato físico sempre com autorização.' },
            { texto: 'Diante de relato de dor, o professor deve:', opcoes: ['Interromper o conteúdo e investigar a postura', 'Reduzir o tempo de estudo', 'Trocar as cordas', 'Continuar com cuidado'], correta: 0, explicacao: 'Dor nunca é parte do aprendizado.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Pular a postura para "logo tocar uma música".', certo: 'Dá para fazer as duas coisas: postura primeiro, música na mesma aula.' },
            { erro: 'Corrigir tudo de uma vez.', certo: 'Uma correção por aula, repetida.' },
            { erro: 'Tocar no aluno sem avisar.', certo: 'Peça permissão sempre.' },
            { erro: 'Dizer apenas "está errado".', certo: 'Explique a consequência física.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'As primeiras aulas definem hábitos de anos.',
            'Ordem: sentar, apoiar, mão direita, mão esquerda, primeira música.',
            'O teste da estabilidade resolve metade dos problemas posturais.',
            'Uma correção por aula, com permissão para o contato físico.',
            'Dor nunca é parte do aprendizado.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o primeiro item das primeiras aulas?', opcoes: ['Sentar corretamente', 'Afinar', 'Ler partitura', 'Aprender um acorde'], correta: 0, explicacao: 'Tudo se constrói sobre isso.' },
        { texto: 'O polegar da mão esquerda deve ficar:', opcoes: ['Atrás do braço, na altura do dedo 2', 'Por cima do braço', 'Apoiado na 6ª corda', 'Livre no ar'], correta: 0, explicacao: 'Permite dedos curvos e pressão mínima.' },
        { texto: 'Pulso esquerdo muito dobrado indica:', opcoes: ['Braço do violão baixo demais', 'Corda alta', 'Falta de força', 'Unha grande'], correta: 0, explicacao: 'Levantar o braço corrige.' },
        { texto: 'Onde se apoia o braço direito?', opcoes: ['No antebraço, sobre o tampo, com o pulso livre', 'No pulso', 'No cotovelo apenas', 'Em nenhum lugar'], correta: 0, explicacao: 'O pulso precisa ficar livre e arqueado.' },
        { texto: 'Quanto tempo revisar postura em cada aula do primeiro ano?', opcoes: ['Cerca de dois minutos', 'Nenhum', 'Metade da aula', 'Só na primeira aula'], correta: 0, explicacao: 'Revisão breve e constante.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Conduzir o teste da estabilidade com outra pessoa e corrigir o apoio.',
          'Identificar e corrigir um problema postural, explicando a consequência.',
          'Apresentar o plano das cinco primeiras aulas.',
          'Demonstrar a posição correta das duas mãos.'
        ],
        criterio: 'Você domina quando consegue estabelecer, em uma aula, uma postura estável e sem tensão em alguém que nunca pegou no violão.'
      }
    },

    {
      id: 'n7.2.2',
      titulo: 'Correção de vícios técnicos',
      resumo: 'Desfazer um hábito é mais difícil que criar um — e exige método.',
      minutos: 20,
      disciplinas: ['tecnica', 'postura'],
      prereq: ['n7.2.1'],
      status: 'validado',
      cobre: ['Correção de vícios técnicos'],
      objetivo: 'Diagnosticar vícios técnicos e aplicar um protocolo de correção que funcione sem desmotivar.',
      blocos: [
        { t: 'p', x: 'Um vício é um movimento automatizado que funciona mal. O problema não é o aluno não saber o certo: é que o errado já está automático, e sob pressão o automático volta. Corrigir exige substituir o movimento, não apenas apontar o erro.' },
        { t: 'h', x: 'Os vícios mais comuns e o que os causa' },
        {
          t: 'tabela',
          cab: ['Vício', 'Causa provável', 'Substituição'],
          linhas: [
            ['Polegar esquerdo por cima do braço', 'Transferência do violão popular', 'Exercício de escala só com o polegar atrás, muito devagar'],
            ['Dedos levantando muito da mão esquerda', 'Falta de consciência; velocidade cedo demais', 'Exercício de dedos apoiados, olhando a mão'],
            ['Mão direita apoiada no tampo pelo pulso', 'Busca de estabilidade', 'Apoio no antebraço; tocar sem contato do pulso por semanas'],
            ['Tensão no ombro', 'Postura ou ansiedade', 'Pausa, respiração, reposicionamento; estudar em blocos curtos'],
            ['Olhar constante para o braço', 'Insegurança espacial', 'Exercícios de braço com olhos fechados'],
            ['Pressão excessiva na mão esquerda', 'Insegurança; ação alta', 'Exercício do ponto mínimo: chiar e corrigir'],
            ['Acelerar em trechos fáceis', 'Falta de pulso interno', 'Metrônomo com clique no tempo 1']
          ]
        },
        { t: 'h', x: 'O protocolo de correção' },
        {
          t: 'passos', itens: [
            '*Mostre*: grave ou fotografe. O aluno precisa ver o vício; descrevê-lo não basta.',
            '*Explique a consequência*: o que esse movimento impede ou machuca. Sem motivo, não há esforço.',
            '*Substitua, não proíba*: defina o movimento correto e pratique-o isoladamente, fora da peça.',
            '*Reduza drasticamente a velocidade*: o vício só não aparece em andamento muito baixo.',
            '*Use um exercício neutro*: uma escala ou um padrão simples, sem a pressão da peça.',
            '*Reintroduza aos poucos*: volte à peça só quando o movimento novo estiver estável no exercício.',
            '*Monitore por meses*: sob pressão, o vício tenta voltar. Revisite periodicamente.'
          ]
        },
        {
          t: 'dica', titulo: 'A regra do tempo: ',
          x: 'um vício de dois anos não se corrige em duas semanas. Avise o aluno disso no começo, ou ele vai desistir achando que não funciona. Dizer "isso leva alguns meses" transforma frustração em paciência.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 5]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 6]], fig: 'seminima', dedo: 'm' }, { pos: [[1, 7]], fig: 'seminima', dedo: 'i' }, { pos: [[1, 8]], fig: 'seminima', dedo: 'm' }] },
            { notas: [{ pos: [[2, 5]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 6]], fig: 'seminima', dedo: 'm' }, { pos: [[2, 7]], fig: 'seminima', dedo: 'i' }, { pos: [[2, 8]], fig: 'minima', dedo: 'm' }] }
          ],
          legenda: 'Exercício neutro para correção: um dedo por casa, muito devagar, com toda a atenção no movimento que se quer instalar. Sem peça, sem pressão.',
          tocar: true, bpm: 48
        },
        { t: 'h', x: 'O que não funciona' },
        {
          t: 'lista', itens: [
            'Apontar o vício em toda aula sem oferecer substituição: gera culpa, não mudança.',
            'Corrigir dentro da peça, no andamento: o automático vence sempre.',
            'Corrigir vários vícios ao mesmo tempo.',
            'Pedir que o aluno "preste atenção": atenção não substitui treino do movimento novo.',
            'Esperar resultado em uma semana.'
          ]
        },
        {
          t: 'check', chave: 'vicios', titulo: 'Aplique o protocolo',
          itens: [
            'Identifiquei um vício meu ou de outra pessoa.',
            'Gravei ou fotografei para mostrar.',
            'Expliquei a consequência concreta.',
            'Defini o movimento substituto e um exercício neutro.',
            'Pratiquei o exercício em andamento muito baixo.',
            'Combinei um prazo realista de alguns meses.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Corrigir vícios', rodadas: 5,
          perguntas: [
            { texto: 'Por que apontar o erro não basta?', opcoes: ['O movimento errado já está automático', 'O aluno não presta atenção', 'Falta técnica', 'Falta tempo de estudo'], correta: 0, explicacao: 'É preciso instalar um movimento substituto.' },
            { texto: 'Em que andamento se corrige um vício?', opcoes: ['Muito baixo', 'No andamento da peça', 'Acima do andamento', 'Sem metrônomo'], correta: 0, explicacao: 'Em velocidade, o automático vence.' },
            { texto: 'Por que usar um exercício neutro?', opcoes: ['Remove a pressão da peça e permite atenção total ao movimento', 'É mais fácil', 'Economiza tempo', 'Serve de aquecimento'], correta: 0, explicacao: 'A peça carrega o hábito antigo.' },
            { texto: 'Quanto tempo leva corrigir um vício de dois anos?', opcoes: ['Alguns meses', 'Duas semanas', 'Uma aula', 'Um ano exato'], correta: 0, explicacao: 'Avisar isso evita a desistência.' },
            { texto: 'Qual é o primeiro passo do protocolo?', opcoes: ['Mostrar: gravar ou fotografar o vício', 'Explicar a anatomia', 'Trocar a peça', 'Reduzir a velocidade'], correta: 0, explicacao: 'O aluno precisa ver.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Repetir a correção toda aula sem exercício substituto.', certo: 'Proibir não instala movimento novo.' },
            { erro: 'Corrigir dentro da peça, no andamento.', certo: 'Exercício neutro e velocidade baixa.' },
            { erro: 'Prometer resultado rápido.', certo: 'Prazo realista evita frustração.' },
            { erro: 'Atacar vários vícios ao mesmo tempo.', certo: 'Um por vez, até estabilizar.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Vício é movimento automatizado que funciona mal.',
            'Protocolo: mostrar, explicar a consequência, substituir, reduzir velocidade, exercício neutro, reintroduzir, monitorar.',
            'O vício só desaparece em andamento muito baixo.',
            'Um vício por vez, com prazo realista de meses.',
            'Apontar sem substituir produz culpa, não mudança.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que é um vício técnico?', opcoes: ['Um movimento automatizado que funciona mal', 'Falta de estudo', 'Um erro de leitura', 'Um problema do instrumento'], correta: 0, explicacao: 'Por isso volta sob pressão.' },
        { texto: 'Qual vício costuma vir do violão popular?', opcoes: ['Polegar esquerdo por cima do braço', 'Pressão excessiva', 'Olhar para o braço', 'Tensão no ombro'], correta: 0, explicacao: 'É funcional lá e atrapalha no clássico.' },
        { texto: 'Em que contexto se treina o movimento substituto?', opcoes: ['Num exercício neutro, fora da peça', 'Na peça mais difícil', 'Em apresentação', 'Com outro professor'], correta: 0, explicacao: 'Sem a pressão do repertório.' },
        { texto: 'Depois que o movimento novo se estabiliza, o professor deve:', opcoes: ['Monitorar por meses, porque o vício tenta voltar', 'Considerar resolvido', 'Mudar de peça', 'Aumentar a velocidade imediatamente'], correta: 0, explicacao: 'Sob pressão, o antigo ressurge.' },
        { texto: 'Pedir que o aluno "preste atenção":', opcoes: ['Não substitui o treino do movimento novo', 'Resolve o problema', 'É o primeiro passo', 'Basta se repetido'], correta: 0, explicacao: 'Atenção não cria automatismo.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Diagnosticar um vício a partir de uma gravação.',
          'Definir o movimento substituto e um exercício neutro para ele.',
          'Conduzir dez minutos de correção com outra pessoa.',
          'Estabelecer um plano de monitoramento de três meses.'
        ],
        criterio: 'Você domina quando consegue levar alguém a executar o movimento correto num exercício neutro e sabe explicar por que a correção leva meses.'
      }
    },

    {
      id: 'n7.2.3',
      titulo: 'Estruturação de exercícios',
      resumo: 'Criar o exercício certo para o problema certo.',
      minutos: 20,
      disciplinas: ['tecnica'],
      prereq: ['n7.2.2'],
      status: 'validado',
      cobre: ['Estruturação de exercícios'],
      objetivo: 'Construir exercícios sob medida, com objetivo, progressão e critério de domínio definidos.',
      blocos: [
        { t: 'p', x: 'Um bom exercício não é um trecho difícil repetido: é um problema isolado, com progressão clara e um critério que diz quando ele foi resolvido. Saber construir exercícios é o que permite ensinar qualquer aluno, inclusive aquele cujo problema não está em nenhum método.' },
        { t: 'h', x: 'A anatomia de um exercício' },
        {
          t: 'tabela',
          cab: ['Elemento', 'Pergunta que responde'],
          linhas: [
            ['Objetivo', 'Qual é exatamente o problema que isto resolve?'],
            ['Isolamento', 'O que foi removido para que só o problema reste?'],
            ['Progressão', 'Como a dificuldade aumenta, passo a passo?'],
            ['Medida', 'Como se mede o progresso? (BPM, número de repetições, qualidade)'],
            ['Critério de domínio', 'Quando se pode dizer que acabou?'],
            ['Transferência', 'Em que trecho real isso vai ser usado?']
          ],
          legenda: 'Um exercício sem critério de domínio nunca termina; um sem transferência nunca é usado.'
        },
        { t: 'h', x: 'Construindo um exercício: exemplo completo' },
        {
          t: 'passos', itens: [
            '*Problema observado*: o aluno atrasa na mudança da 1ª para a 5ª posição no compasso 12.',
            '*Objetivo*: fazer a mudança de posição chegando no tempo.',
            '*Isolamento*: remover a melodia, o acompanhamento e o ritmo. Só duas notas: a última antes e a primeira depois.',
            '*Progressão*: duas notas com quatro tempos de intervalo, depois dois, depois um, depois no tempo exato.',
            '*Medida*: andamento do metrônomo em que a chegada é pontual.',
            '*Critério*: dez repetições seguidas no tempo, no andamento da peça.',
            '*Transferência*: tocar os compassos 10 a 14 e verificar.'
          ]
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[1, 3]], fig: 'minima' }, { pos: [[1, 8]], fig: 'minima' }] },
            { notas: [{ pos: [[1, 3]], fig: 'seminima' }, { pos: [[1, 8]], fig: 'seminima' }, { pos: [[1, 3]], fig: 'seminima' }, { pos: [[1, 8]], fig: 'seminima' }] }
          ],
          legenda: 'O exercício do exemplo: primeiro com dois tempos para a mudança, depois com um. A progressão está na redução do tempo disponível.',
          tocar: true, bpm: 60
        },
        { t: 'h', x: 'Famílias de exercícios' },
        {
          t: 'tabela',
          cab: ['Família', 'Serve para', 'Variável que se manipula'],
          linhas: [
            ['Isolamento', 'Separar um componente do movimento', 'O que é removido'],
            ['Progressão de velocidade', 'Construir velocidade com controle', 'BPM'],
            ['Variação rítmica', 'Quebrar automatismos e igualar', 'Padrão rítmico (pontuado, invertido)'],
            ['Transposição', 'Generalizar o movimento pelo braço', 'Posição e tonalidade'],
            ['Resistência', 'Sustentar qualidade ao longo do tempo', 'Duração'],
            ['Condições adversas', 'Robustez (olhos fechados, no escuro, cansado)', 'Contexto']
          ]
        },
        {
          t: 'dica', titulo: 'O exercício mais subestimado: ',
          x: 'tocar o trecho *de trás para frente*, grupo por grupo. Comece pelas últimas quatro notas, depois as oito últimas, e assim por diante. O trecho vai sempre em direção a terreno conhecido, e a confiança cresce.'
        },
        { t: 'metronomo', titulo: 'Progressão de velocidade', bpm: 60, compasso: '4/4', x: 'Dez repetições perfeitas antes de subir 4 BPM. Esse é o critério de domínio padrão.' },
        {
          t: 'check', chave: 'exercicios7', titulo: 'Construa exercícios',
          itens: [
            'Observei um problema técnico concreto.',
            'Formulei o objetivo em uma frase.',
            'Defini o que remover para isolar o problema.',
            'Escrevi a progressão em quatro etapas.',
            'Defini a medida e o critério de domínio.',
            'Testei a transferência no trecho real.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Construir exercícios', rodadas: 6,
          perguntas: [
            { texto: 'O que diferencia um exercício de uma repetição?', opcoes: ['Objetivo, isolamento, progressão e critério', 'A duração', 'O andamento', 'O uso de metrônomo'], correta: 0, explicacao: 'Repetir não é exercitar.' },
            { texto: 'O que significa isolar um problema?', opcoes: ['Remover tudo o que não é o problema', 'Tocar mais devagar', 'Repetir mais', 'Usar outro dedilhado'], correta: 0, explicacao: 'Só o componente que falha permanece.' },
            { texto: 'Um exercício sem critério de domínio:', opcoes: ['Nunca termina', 'É mais eficaz', 'Serve de aquecimento', 'É mais rápido'], correta: 0, explicacao: 'O aluno não sabe quando passar adiante.' },
            { texto: 'O que é transferência?', opcoes: ['Verificar o exercício no trecho real da peça', 'Mudar de tonalidade', 'Trocar de exercício', 'Passar para outro aluno'], correta: 0, explicacao: 'Sem isso, o exercício fica isolado do repertório.' },
            { texto: 'Variação rítmica serve para:', opcoes: ['Quebrar automatismos e igualar', 'Treinar leitura', 'Melhorar o timbre', 'Aumentar a resistência'], correta: 0, explicacao: 'Padrões pontuados expõem desigualdades.' },
            { texto: 'Estudar o trecho de trás para frente serve para:', opcoes: ['Sempre caminhar em direção a terreno conhecido', 'Treinar leitura', 'Economizar tempo', 'Melhorar a memória visual'], correta: 0, explicacao: 'A confiança cresce no fim do trecho.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Mandar "repetir cem vezes".', certo: 'Repetição sem isolamento fixa o erro.' },
            { erro: 'Criar exercício sem critério de parada.', certo: 'Defina quando está dominado.' },
            { erro: 'Exercício que nunca volta para a peça.', certo: 'Teste a transferência.' },
            { erro: 'Começar o estudo sempre do início do trecho.', certo: 'De trás para frente consolida o fim.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Exercício tem objetivo, isolamento, progressão, medida, critério e transferência.',
            'Isolar é remover tudo o que não é o problema.',
            'Seis famílias: isolamento, velocidade, variação rítmica, transposição, resistência e condições adversas.',
            'Critério de domínio padrão: dez repetições perfeitas antes de subir 4 BPM.',
            'Estudar de trás para frente consolida o fim do trecho.'
          ]
        }
      ],
      quiz: [
        { texto: 'Quantos elementos compõem um exercício bem construído?', opcoes: ['Seis', 'Três', 'Dois', 'Dez'], correta: 0, explicacao: 'De objetivo a transferência.' },
        { texto: 'Isolar significa:', opcoes: ['Remover tudo o que não é o problema', 'Estudar sozinho', 'Separar as mãos', 'Tocar sem metrônomo'], correta: 0, explicacao: 'Só resta o componente que falha.' },
        { texto: 'Qual é um critério de domínio típico?', opcoes: ['Dez repetições perfeitas no andamento alvo', 'Trinta minutos de estudo', 'Uma semana de prática', 'Sentir-se confiante'], correta: 0, explicacao: 'Mensurável e verificável.' },
        { texto: 'A família "condições adversas" inclui:', opcoes: ['Tocar de olhos fechados ou cansado', 'Tocar mais rápido', 'Tocar em outra tonalidade', 'Tocar mais tempo'], correta: 0, explicacao: 'Testa a robustez do movimento.' },
        { texto: 'Um exercício que nunca é testado na peça:', opcoes: ['Não produz transferência', 'É mais eficaz', 'Serve de aquecimento', 'Deve ser repetido mais'], correta: 0, explicacao: 'O objetivo é a música.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Construir um exercício completo, com os seis elementos, a partir de um problema real.',
          'Demonstrar a progressão em quatro etapas.',
          'Declarar o critério de domínio e verificá-lo.',
          'Testar a transferência no trecho da peça.'
        ],
        criterio: 'Você domina quando consegue, diante de qualquer problema técnico, construir em cinco minutos um exercício com progressão e critério claros.'
      }
    },

    {
      id: 'n7.2.4',
      titulo: 'Ensino de leitura musical',
      resumo: 'Fazer o aluno ler de verdade — e não decorar a posição dos dedos.',
      minutos: 20,
      disciplinas: ['leitura'],
      prereq: ['n7.1.3'],
      status: 'validado',
      cobre: ['Ensino de leitura musical'],
      objetivo: 'Ensinar leitura de forma progressiva, evitando os atalhos que produzem alunos que não leem.',
      blocos: [
        { t: 'p', x: 'A maior parte dos violonistas lê mal, e a causa quase sempre é a mesma: aprenderam a associar o símbolo diretamente a uma posição no braço, pulando o nome e o som da nota. Funciona no começo e trava por completo quando a mesma nota aparece em outra corda.' },
        { t: 'h', x: 'A ordem correta de associação' },
        {
          t: 'comparar',
          a: { titulo: 'O atalho que trava', itens: ['Símbolo → posição no braço', 'Rápido no começo', 'O aluno não sabe o nome da nota', 'Trava quando a nota muda de corda', 'Impossível transpor ou analisar'] },
          b: { titulo: 'O caminho que funciona', itens: ['Símbolo → nome → som → posição', 'Mais lento no começo', 'O aluno canta o que lê', 'Qualquer corda serve', 'Permite transposição e análise'] }
        },
        { t: 'h', x: 'A progressão da leitura' },
        {
          t: 'tabela',
          cab: ['Etapa', 'Conteúdo', 'Atividade típica'],
          linhas: [
            ['1', 'Ritmo sem altura', 'Bater palmas lendo figuras; falar as sílabas rítmicas'],
            ['2', 'Alturas na 1ª corda', 'Mi, Fá, Sol — três notas, muitas melodias'],
            ['3', 'Duas cordas', 'Combinar 1ª e 2ª; o mesmo Si em dois lugares'],
            ['4', 'Primeira posição completa', 'Todas as seis cordas, casas 0 a 3'],
            ['5', 'Alterações e armaduras', 'Sustenidos, bemóis e tons com uma alteração'],
            ['6', 'Duas vozes', 'Baixo e melodia simultâneos'],
            ['7', 'Posições altas', 'Leitura na 5ª e na 7ª posição'],
            ['8', 'Leitura à primeira vista', 'Material novo diariamente']
          ]
        },
        {
          t: 'pauta', bpm: 66, numerar: true, quebrar: 4,
          txt: 'e4/q f4/q g4/q f4/q | e4/b z/b | g4/q f4/q e4/q f4/q | g4/o',
          legenda: 'Etapa 2: só três notas na 1ª corda. Com três notas já se fazem dezenas de melodias — e o aluno lê de verdade.'
        },
        { t: 'h', x: 'Atividades que fazem o aluno ler' },
        {
          t: 'lista', itens: [
            '*Cantar antes de tocar*: o aluno diz o nome das notas no ritmo, sem o instrumento.',
            '*Apontar e nomear*: o professor aponta notas aleatórias na partitura e o aluno nomeia, sem tocar.',
            '*Mesma nota, outra corda*: tocar a mesma melodia em cordas diferentes obriga a ler, não a decorar.',
            '*Ditado rítmico e melódico*: o professor toca, o aluno escreve. É a leitura ao contrário.',
            '*Material novo todos os dias*: quantidade vence repetição.'
          ]
        },
        { t: 'h', x: 'O papel da tablatura' },
        { t: 'p', x: 'Tablatura não é inimiga: ela é uma notação legítima, usada desde o Renascimento, e resolve bem o problema da digitação no violão. O problema é usá-la *em vez* da pauta. A prática razoável é ensinar as duas, com clareza sobre o que cada uma informa: a pauta diz qual nota e quando; a tablatura diz onde pôr o dedo.' },
        {
          t: 'tocar', titulo: 'Confira as três notas da etapa 2',
          seq: [[1, 0], [1, 1], [1, 3]],
          rotulo: 'Conferir no microfone',
          fim: 'Com Mi, Fá e Sol já dá para ler dezenas de melodias curtas.',
          x: 'Toque Mi, Fá e Sol na 1ª corda, uma nota por vez.'
        },
        {
          t: 'check', chave: 'ensinoleitura', titulo: 'Ensine a ler',
          itens: [
            'Pedi a alguém que cantasse o nome das notas antes de tocar.',
            'Apontei notas aleatórias na partitura para nomeação.',
            'Fiz a mesma melodia em duas cordas diferentes.',
            'Apliquei um ditado rítmico curto.',
            'Montei uma progressão de leitura em oito etapas.',
            'Expliquei a diferença entre pauta e tablatura.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Ensinar leitura', rodadas: 5,
          perguntas: [
            { texto: 'Qual é o atalho que produz alunos que não leem?', opcoes: ['Associar o símbolo direto à posição no braço', 'Ensinar ritmo primeiro', 'Usar três notas apenas', 'Cantar antes de tocar'], correta: 0, explicacao: 'Pula o nome e o som da nota.' },
            { texto: 'Qual é a ordem correta de associação?', opcoes: ['Símbolo, nome, som, posição', 'Símbolo, posição', 'Som, símbolo, posição', 'Posição, nome, símbolo'], correta: 0, explicacao: 'O nome e o som precisam estar no meio.' },
            { texto: 'Por que começar a leitura pelo ritmo sem altura?', opcoes: ['Separa dois problemas que juntos são difíceis demais', 'É mais divertido', 'Não exige instrumento', 'É tradição'], correta: 0, explicacao: 'Isolamento também vale na leitura.' },
            { texto: 'Tocar a mesma melodia em outra corda obriga o aluno a:', opcoes: ['Ler de verdade, em vez de decorar posições', 'Transpor', 'Melhorar o timbre', 'Usar outra digitação'], correta: 0, explicacao: 'Expõe a dependência da posição memorizada.' },
            { texto: 'Qual é a posição razoável sobre a tablatura?', opcoes: ['Ensinar as duas notações, com clareza sobre o que cada uma informa', 'Proibir', 'Usar só tablatura', 'Usar tablatura no começo e abandonar'], correta: 0, explicacao: 'Elas dizem coisas diferentes.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Ensinar a nota pela casa onde ela fica.', certo: 'Nome e som primeiro; posição por último.' },
            { erro: 'Introduzir seis cordas de uma vez.', certo: 'Comece com três notas numa corda.' },
            { erro: 'Proibir a tablatura.', certo: 'Ensine as duas notações e o que cada uma informa.' },
            { erro: 'Repetir sempre o mesmo material de leitura.', certo: 'Material novo todos os dias.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'O atalho símbolo-posição produz alunos que não leem.',
            'Ordem correta: símbolo, nome, som, posição.',
            'Progressão em oito etapas, começando por ritmo sem altura.',
            'Cantar o nome das notas e tocar a mesma melodia em outra corda são as atividades-chave.',
            'Tablatura é notação legítima: ensine as duas.'
          ]
        }
      ],
      quiz: [
        { texto: 'Por que muitos violonistas leem mal?', opcoes: ['Aprenderam a associar símbolo direto à posição', 'Falta de talento', 'A pauta é difícil', 'Estudaram pouco'], correta: 0, explicacao: 'O nome e o som ficaram de fora.' },
        { texto: 'Qual é a primeira etapa da progressão de leitura?', opcoes: ['Ritmo sem altura', 'Primeira posição completa', 'Duas vozes', 'Armaduras'], correta: 0, explicacao: 'Isolar o ritmo facilita tudo depois.' },
        { texto: 'Quantas notas bastam para começar a leitura melódica?', opcoes: ['Três', 'Sete', 'Doze', 'Uma oitava inteira'], correta: 0, explicacao: 'Mi, Fá e Sol na 1ª corda.' },
        { texto: 'O que o ditado musical treina?', opcoes: ['A leitura ao contrário: ouvir e escrever', 'A memória visual', 'A digitação', 'O ritmo apenas'], correta: 0, explicacao: 'Consolida a associação som-símbolo.' },
        { texto: 'A tablatura informa:', opcoes: ['Onde pôr o dedo', 'Qual nota e quando', 'A harmonia', 'A dinâmica'], correta: 0, explicacao: 'A pauta informa altura e duração.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Conduzir uma atividade de leitura rítmica sem altura.',
          'Ensinar três notas numa corda e fazer o aluno ler quatro melodias diferentes.',
          'Aplicar um ditado rítmico de quatro compassos.',
          'Explicar a diferença entre pauta e tablatura a um iniciante.'
        ],
        criterio: 'Você domina quando consegue fazer um iniciante ler uma melodia nova de três notas sem decorar posições.'
      }
    },

    {
      id: 'n7.2.5',
      titulo: 'Seleção de repertório',
      resumo: 'Escolher a peça certa para o aluno certo no momento certo.',
      minutos: 20,
      disciplinas: ['repertorio'],
      prereq: ['n7.1.6'],
      status: 'validado',
      cobre: ['Seleção de repertório'],
      objetivo: 'Selecionar repertório que equilibre motivação, desenvolvimento técnico e viabilidade legal.',
      blocos: [
        { t: 'p', x: 'A escolha de repertório é a decisão pedagógica com maior impacto na continuidade do aluno. Uma peça bem escolhida ensina, motiva e cabe no tempo disponível. Uma peça mal escolhida consome meses e produz desistência.' },
        { t: 'h', x: 'Os cinco critérios' },
        {
          t: 'tabela',
          cab: ['Critério', 'Pergunta'],
          linhas: [
            ['Dificuldade', 'A peça está um pouco acima do nível atual — não muito?'],
            ['Objetivo técnico', 'Que competência ela desenvolve?'],
            ['Motivação', 'O aluno quer tocar isso? Ele conhece a música?'],
            ['Tempo', 'Dá para aprender no prazo disponível, com o estudo que ele faz?'],
            ['Legalidade', 'A peça está em domínio público ou há edição licenciada?']
          ],
          legenda: 'Uma peça que falha em qualquer um dos cinco critérios geralmente não deve ser escolhida.'
        },
        {
          t: 'dica', titulo: 'A regra dos 10%: ',
          x: 'escolha uma peça em que cerca de 10% dos compassos sejam realmente difíceis. Se for tudo fácil, não ensina; se mais de um quarto for difícil, o aluno não termina.'
        },
        { t: 'h', x: 'Repertório por estágio' },
        {
          t: 'tabela',
          cab: ['Estágio', 'Características da peça', 'Exemplos em domínio público'],
          linhas: [
            ['Primeiros meses', 'Melodia simples, primeira posição, poucas cordas', 'Melodias folclóricas; estudos iniciais de Carulli'],
            ['6 a 12 meses', 'Acordes básicos, arpejo simples, duas vozes', 'Estudos de Carulli Op. 27; Carcassi iniciais'],
            ['1 a 2 anos', 'Pestana, mudanças de posição, peças completas', 'Carcassi Op. 60 nº 1 e 3; Sor Op. 60'],
            ['2 a 4 anos', 'Polifonia, repertório de concerto inicial', 'Sor Op. 35; Tárrega Lágrima e Adelita; Bourrée BWV 996'],
            ['Avançado', 'Obras de concerto completas', 'Bach, Tárrega, Barrios, Sor Op. 9']
          ],
          legenda: 'Todos os exemplos citados estão em domínio público e podem ser copiados e distribuídos livremente.'
        },
        { t: 'h', x: 'O repertório que o aluno quer tocar' },
        {
          t: 'passos', itens: [
            'Pergunte, na primeira aula, que músicas ele gostaria de tocar. Anote.',
            'Para cada uma, identifique a competência que falta e o caminho até lá.',
            'Se a peça estiver longe demais, encontre uma versão simplificada ou uma peça do mesmo estilo no nível dele.',
            'Mantenha sempre uma peça "do aluno" junto com as peças "do percurso".',
            'Se a música for protegida por direito autoral, você pode ensiná-la em aula particular, mas não distribuir cópias nem publicar arranjos sem autorização.'
          ]
        },
        {
          t: 'aviso', titulo: 'Sobre direito autoral no ensino: ',
          x: 'tocar e ensinar uma obra protegida numa aula particular é uso privado. Reproduzir partituras protegidas para distribuir aos alunos, publicar arranjos ou gravar e divulgar exigem autorização. Na dúvida, prefira repertório em domínio público — ele é vastíssimo.'
        },
        {
          t: 'check', chave: 'repertorio7', titulo: 'Selecione repertório',
          itens: [
            'Perguntei a um aluno (real ou imaginário) o que ele quer tocar.',
            'Avaliei uma peça pelos cinco critérios.',
            'Apliquei a regra dos 10% contando os compassos difíceis.',
            'Encontrei uma alternativa em domínio público para uma peça protegida.',
            'Montei uma lista de três peças para um semestre.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Escolher repertório', rodadas: 5,
          perguntas: [
            { texto: 'Qual proporção de compassos difíceis é ideal numa peça de estudo?', opcoes: ['Cerca de 10%', 'Metade', 'Nenhum', '50% a 70%'], correta: 0, explicacao: 'Fácil demais não ensina; difícil demais não termina.' },
            { texto: 'Quantos critérios uma peça precisa satisfazer?', opcoes: ['Os cinco', 'Pelo menos três', 'Apenas dificuldade e motivação', 'Apenas legalidade'], correta: 0, explicacao: 'Falhar em um já costuma inviabilizar.' },
            { texto: 'Se a peça que o aluno quer está muito acima do nível dele:', opcoes: ['Buscar versão simplificada ou peça do mesmo estilo no nível', 'Recusar', 'Deixar que ele tente', 'Mudar de estilo'], correta: 0, explicacao: 'A motivação se preserva.' },
            { texto: 'Ensinar uma obra protegida em aula particular:', opcoes: ['É uso privado e permitido', 'É proibido', 'Exige autorização sempre', 'Só com edição licenciada'], correta: 0, explicacao: 'Distribuir cópias ou publicar é que exige autorização.' },
            { texto: 'O que é recomendável manter junto com as peças do percurso?', opcoes: ['Uma peça escolhida pelo aluno', 'Dois estudos extras', 'Uma peça de concerto', 'Nada além do percurso'], correta: 0, explicacao: 'Autonomia sustenta a motivação.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Escolher sempre pelo método, sem ouvir o aluno.', certo: 'Pergunte o que ele quer tocar e use isso.' },
            { erro: 'Dar uma peça muito acima do nível.', certo: 'Regra dos 10%.' },
            { erro: 'Distribuir cópias de partituras protegidas.', certo: 'Use domínio público ou edição licenciada.' },
            { erro: 'Manter o aluno meses na mesma peça.', certo: 'Se não terminar em um prazo razoável, a escolha foi errada.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cinco critérios: dificuldade, objetivo técnico, motivação, tempo e legalidade.',
            'Regra dos 10% de compassos difíceis.',
            'Mantenha sempre uma peça escolhida pelo aluno.',
            'O repertório em domínio público é vastíssimo e cobre todos os níveis.',
            'Ensinar obra protegida em aula é uso privado; distribuir cópias não é.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o critério mais ligado à continuidade do aluno?', opcoes: ['Motivação: ele querer tocar aquilo', 'Dificuldade', 'Legalidade', 'Duração'], correta: 0, explicacao: 'Repertório significativo sustenta o estudo.' },
        { texto: 'A regra dos 10% refere-se a:', opcoes: ['Proporção de compassos realmente difíceis', 'Tempo de estudo', 'Margem de erro', 'Número de peças'], correta: 0, explicacao: 'Equilíbrio entre desafio e viabilidade.' },
        { texto: 'Para um aluno de 6 a 12 meses, um bom repertório é:', opcoes: ['Estudos de Carulli Op. 27', 'Bach BWV 1000', 'Barrios, La Catedral', 'Villa-Lobos, Estudo nº 7'], correta: 0, explicacao: 'Acordes básicos e arpejos simples.' },
        { texto: 'Reproduzir partituras protegidas para distribuir aos alunos:', opcoes: ['Exige autorização', 'É sempre permitido', 'É permitido em escolas', 'Depende do número de cópias'], correta: 0, explicacao: 'O uso privado não cobre distribuição.' },
        { texto: 'Se a peça não termina em prazo razoável, isso indica:', opcoes: ['A escolha foi errada', 'O aluno não estuda', 'A peça é boa', 'Falta de talento'], correta: 0, explicacao: 'Responsabilidade da seleção.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Avaliar três peças pelos cinco critérios e justificar a escolha de uma.',
          'Encontrar uma alternativa em domínio público para uma peça protegida que o aluno queira.',
          'Montar uma lista de repertório semestral para um aluno específico.',
          'Explicar as regras de direito autoral aplicáveis ao ensino.'
        ],
        criterio: 'Você domina quando escolhe peças que o aluno termina no prazo, aprendendo o que você planejou e querendo tocar a seguinte.'
      }
    },

    {
      id: 'n7.2.6',
      titulo: 'Organização de apresentações',
      resumo: 'Produzir uma audição ou recital, do convite ao agradecimento final.',
      minutos: 20,
      disciplinas: ['conjunto', 'interpretacao'],
      prereq: ['n6.2.5'],
      status: 'validado',
      cobre: ['Organização de apresentações'],
      objetivo: 'Planejar e executar uma apresentação de alunos ou um recital próprio, cuidando de todos os aspectos práticos.',
      blocos: [
        { t: 'p', x: 'Uma audição de alunos é a ferramenta pedagógica mais poderosa que existe: ela dá prazo, propósito e uma experiência que nenhuma aula substitui. Também é a atividade em que mais coisas podem dar errado — e quase todas são previsíveis.' },
        { t: 'h', x: 'O cronograma' },
        {
          t: 'tabela',
          cab: ['Prazo', 'O que fazer'],
          linhas: [
            ['8 semanas antes', 'Definir data, local e horário; comunicar aos alunos e famílias'],
            ['6 semanas', 'Fechar o programa: quem toca o quê, em que ordem'],
            ['4 semanas', 'Primeira passagem: cada aluno toca sua peça para os outros'],
            ['2 semanas', 'Ensaio geral no local, se possível; testar cadeiras, apoio e acústica'],
            ['1 semana', 'Confirmar presenças; imprimir programas; preparar afinador reserva'],
            ['No dia', 'Chegar 1h antes; afinar todos os instrumentos; organizar a ordem de entrada']
          ]
        },
        { t: 'h', x: 'A ordem do programa' },
        {
          t: 'lista', itens: [
            'Comece com um aluno confiante: a primeira apresentação estabelece o clima.',
            'Alterne níveis: iniciantes e avançados intercalados, nunca todos os iniciantes primeiro.',
            'Alterne formações: solo, duo, conjunto.',
            'Os alunos mais nervosos devem tocar cedo — esperar aumenta a ansiedade.',
            'Termine com algo marcante: um conjunto com todos, por exemplo.',
            'Duração total: 45 a 60 minutos no máximo. Audição longa cansa o público e os alunos.'
          ]
        },
        { t: 'h', x: 'O checklist do dia' },
        {
          t: 'tabela',
          cab: ['Item', 'Por quê'],
          linhas: [
            ['Afinador e cordas reserva', 'Corda arrebenta justamente no dia'],
            ['Banquinho ou apoio extra', 'Alguém sempre esquece'],
            ['Cadeiras sem braço e na altura certa', 'Cadeira errada estraga a postura'],
            ['Estantes, se houver leitura', 'E luz suficiente para ler'],
            ['Programa impresso', 'Dá formalidade e organiza o público'],
            ['Alguém para apresentar', 'Evita silêncios constrangedores entre peças'],
            ['Água', 'Boca seca é sintoma universal de nervosismo']
          ]
        },
        { t: 'h', x: 'Cuidar do aluno nervoso' },
        {
          t: 'passos', itens: [
            'Normalize: diga que nervosismo é universal e não indica despreparo.',
            'Ensaie a situação, não só a peça: entrar, sentar, respirar, começar.',
            'Combine um plano B explícito: se der branco, pule para o próximo ponto de partida e siga.',
            'Oriente a respiração: três respirações lentas antes de tocar.',
            'Depois, elogie algo concreto — e nunca comente erros em público.'
          ]
        },
        {
          t: 'aviso', x: 'Jamais corrija um aluno durante ou logo após a apresentação, nem na frente de outras pessoas. A conversa técnica fica para a próxima aula. No dia, só o que funcionou.'
        },
        {
          t: 'check', chave: 'apresentacoes', titulo: 'Organize uma audição',
          itens: [
            'Defini data, local e duração.',
            'Montei a ordem do programa segundo os critérios.',
            'Fiz uma passagem com os alunos tocando uns para os outros.',
            'Montei o checklist do dia.',
            'Combinei o plano B de branco com cada aluno.',
            'Preparei o programa impresso.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Produzir apresentações', rodadas: 5,
          perguntas: [
            { texto: 'Quem deve tocar primeiro numa audição?', opcoes: ['Um aluno confiante', 'O mais iniciante', 'O mais avançado', 'O mais nervoso'], correta: 0, explicacao: 'A primeira apresentação estabelece o clima.' },
            { texto: 'Alunos muito nervosos devem tocar:', opcoes: ['Cedo no programa', 'Por último', 'No meio', 'Em dupla'], correta: 0, explicacao: 'Esperar aumenta a ansiedade.' },
            { texto: 'Qual é a duração máxima recomendada de uma audição?', opcoes: ['45 a 60 minutos', '2 horas', '30 minutos', 'Sem limite'], correta: 0, explicacao: 'Além disso, cansa público e alunos.' },
            { texto: 'O que fazer se um aluno errar em público?', opcoes: ['Nada no momento; comentar só na próxima aula', 'Corrigir ao fim da peça', 'Pedir que repita', 'Explicar ao público'], correta: 0, explicacao: 'Correção em público prejudica mais do que ajuda.' },
            { texto: 'Qual item do checklist evita o problema mais comum?', opcoes: ['Cordas e afinador reserva', 'Programa impresso', 'Água', 'Estantes'], correta: 0, explicacao: 'Corda arrebenta sempre no dia.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Ensaiar só a peça, não a situação.', certo: 'Entrar, sentar, respirar e começar também se ensaia.' },
            { erro: 'Pôr todos os iniciantes no começo.', certo: 'Alterne níveis e formações.' },
            { erro: 'Audição de duas horas.', certo: 'Máximo de uma hora.' },
            { erro: 'Comentar erros logo após a apresentação.', certo: 'No dia, só o que funcionou.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Cronograma de oito semanas, com ensaio geral no local.',
            'Comece com um aluno confiante; os nervosos tocam cedo.',
            'Alterne níveis e formações; termine com algo marcante.',
            'Checklist do dia: afinador, cordas, banquinho, cadeiras, programa, água.',
            'Ensaie a situação e combine um plano B de branco.',
            'Nada de correções em público.'
          ]
        }
      ],
      quiz: [
        { texto: 'Com quanta antecedência definir data e local?', opcoes: ['Oito semanas', 'Uma semana', 'Três dias', 'Um mês'], correta: 0, explicacao: 'Dá tempo de preparar o programa.' },
        { texto: 'Por que fazer uma passagem com os alunos tocando uns para os outros?', opcoes: ['Simular a situação de apresentação', 'Economizar aulas', 'Avaliar os alunos', 'Escolher a ordem'], correta: 0, explicacao: 'A simulação é o treino mais eficaz.' },
        { texto: 'O plano B para branco de memória é:', opcoes: ['Pular para o próximo ponto de partida e seguir', 'Recomeçar do início', 'Parar e pedir desculpa', 'Olhar a partitura'], correta: 0, explicacao: 'Combinado antes, com cada aluno.' },
        { texto: 'O que não pode faltar no checklist?', opcoes: ['Afinador e cordas reserva', 'Microfone', 'Câmera', 'Palco elevado'], correta: 0, explicacao: 'São os itens que mais salvam o dia.' },
        { texto: 'Logo após a apresentação, o professor deve comentar:', opcoes: ['Apenas o que funcionou', 'Todos os erros', 'A nota', 'A próxima peça'], correta: 0, explicacao: 'A técnica fica para a aula seguinte.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Montar o cronograma completo de uma audição.',
          'Definir a ordem do programa justificando cada posição.',
          'Apresentar o checklist do dia.',
          'Conduzir uma simulação de apresentação com pelo menos uma pessoa.'
        ],
        criterio: 'Você domina quando produz uma apresentação em que nada prático dá errado e cada aluno sabe exatamente o que fazer se errar.'
      }
    },

    {
      id: 'n7.2.7',
      titulo: 'Música de conjunto no ensino',
      resumo: 'Conduzir duos, grupos e orquestras de violão.',
      minutos: 20,
      disciplinas: ['conjunto'],
      prereq: ['n6.2.9'],
      status: 'validado',
      cobre: ['Música de conjunto'],
      objetivo: 'Organizar e conduzir atividades de conjunto, distribuindo partes conforme o nível de cada aluno.',
      blocos: [
        { t: 'p', x: 'Tocar em conjunto resolve de uma vez vários problemas pedagógicos: motiva, obriga a manter o pulso, desenvolve escuta e cria vínculo entre os alunos. E tem uma vantagem rara: alunos de níveis muito diferentes podem tocar juntos, cada um na parte adequada.' },
        { t: 'h', x: 'Formações e o que cada uma resolve' },
        {
          t: 'tabela',
          cab: ['Formação', 'Nível', 'O que desenvolve'],
          linhas: [
            ['Duo professor-aluno', 'Qualquer', 'Pulso, escuta e motivação desde a primeira aula'],
            ['Duo entre alunos', 'A partir de 6 meses', 'Responsabilidade mútua e entrada conjunta'],
            ['Trio ou quarteto', 'Intermediário', 'Equilíbrio, planos sonoros, leitura de parte'],
            ['Orquestra de violões', 'Mista', 'Integração de níveis; partes fáceis e difíceis simultâneas'],
            ['Violão e outro instrumento', 'Intermediário', 'Afinação, equilíbrio, adaptação de volume'],
            ['Violão e voz', 'Qualquer', 'Acompanhamento, introdução, respiração do cantor']
          ]
        },
        {
          t: 'dica', titulo: 'O recurso mais subestimado: ',
          x: 'o duo professor-aluno. Na segunda aula, o aluno toca duas notas e o professor toca tudo o resto. A sensação de estar fazendo música é imediata, e o pulso se instala sem esforço.'
        },
        { t: 'h', x: 'Distribuir partes num grupo misto' },
        {
          t: 'tabela',
          cab: ['Parte', 'Conteúdo', 'Para quem'],
          linhas: [
            ['Violão 1', 'Melodia principal, registro agudo', 'Alunos mais avançados'],
            ['Violão 2', 'Contracanto ou harmonia em acordes', 'Intermediários'],
            ['Violão 3', 'Acompanhamento rítmico simples', 'Iniciantes avançados'],
            ['Violão 4 (baixo)', 'Fundamental e quinta, figuras longas', 'Iniciantes'],
            ['Percussão corporal', 'Pulso e levada', 'Iniciantes absolutos ou quem está sem instrumento']
          ],
          legenda: 'Com essa distribuição, um aluno de dois meses toca na mesma peça que um de cinco anos.'
        },
        {
          t: 'tab',
          compassos: [
            { notas: [{ pos: [[5, 3]], fig: 'minima' }, { pos: [[6, 3]], fig: 'minima' }] },
            { notas: [{ pos: [[5, 0]], fig: 'minima' }, { pos: [[6, 1]], fig: 'minima' }] },
            { notas: [{ pos: [[5, 3]], fig: 'semibreve' }] }
          ],
          legenda: 'Parte de baixo para iniciantes: só fundamentais, em mínimas. Qualquer aluno com dois meses de estudo consegue, e a peça soa completa.',
          tocar: true, bpm: 72
        },
        { t: 'h', x: 'Conduzir o ensaio' },
        {
          t: 'passos', itens: [
            'Afine todos juntos, com a mesma referência, antes de qualquer coisa.',
            'Toque a peça inteira uma vez, mesmo com erros, para todos entenderem o todo.',
            'Trabalhe no máximo três pontos; escolha-os antes do ensaio.',
            'Ensaie entradas e finais isoladamente.',
            'Termine sempre tocando a peça inteira de novo.',
            'Dê uma tarefa concreta por naipe para a semana.'
          ]
        },
        { t: 'h', x: 'Repertório para conjunto' },
        {
          t: 'lista', itens: [
            'Duos de Carulli, Giuliani e Sor estão em domínio público e cobrem vários níveis.',
            'Melodias folclóricas e canções tradicionais arranjadas em quatro partes funcionam muito bem.',
            'Peças do repertório solo podem ser rearranjadas: a melodia num violão, o acompanhamento dividido.',
            'Arranje você mesmo: é a forma mais segura de ajustar a dificuldade de cada parte.',
            'Evite arranjos protegidos sem licença; prefira domínio público ou arranjos próprios.'
          ]
        },
        {
          t: 'check', chave: 'conjunto7', titulo: 'Monte um conjunto',
          itens: [
            'Toquei em duo com outra pessoa, dando a entrada.',
            'Distribuí partes de uma peça entre quatro níveis diferentes.',
            'Escrevi uma parte de baixo acessível a iniciantes.',
            'Conduzi um ensaio com três pontos de trabalho definidos.',
            'Ensaiei entradas e finais isoladamente.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Conjunto no ensino', rodadas: 5,
          perguntas: [
            { texto: 'Qual formação pode ser usada desde a primeira aula?', opcoes: ['Duo professor-aluno', 'Quarteto', 'Orquestra de violões', 'Duo entre alunos'], correta: 0, explicacao: 'O aluno toca duas notas e o professor, o resto.' },
            { texto: 'Numa orquestra de violões, quem toca a parte de baixo?', opcoes: ['Os iniciantes', 'Os mais avançados', 'O professor', 'Ninguém'], correta: 0, explicacao: 'Fundamentais em figuras longas.' },
            { texto: 'Quantos pontos trabalhar num ensaio?', opcoes: ['No máximo três', 'Todos os problemas', 'Um só', 'Dez'], correta: 0, explicacao: 'Escolhidos antes do ensaio.' },
            { texto: 'Como começar um ensaio de conjunto?', opcoes: ['Afinando todos juntos e tocando a peça inteira', 'Pelo trecho mais difícil', 'Por naipes separados', 'Pela leitura individual'], correta: 0, explicacao: 'Todos precisam entender o todo.' },
            { texto: 'Qual é a vantagem pedagógica central do conjunto?', opcoes: ['Integra níveis diferentes na mesma atividade', 'Economiza tempo do professor', 'Dispensa estudo individual', 'Facilita a leitura'], correta: 0, explicacao: 'Cada um na parte adequada.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Dar a mesma parte a todos.', certo: 'Distribua por nível; é a força do conjunto.' },
            { erro: 'Começar o ensaio pelo trecho difícil.', certo: 'Toque inteiro primeiro.' },
            { erro: 'Não ensaiar entradas.', certo: 'É o que mais falha na apresentação.' },
            { erro: 'Usar arranjos protegidos sem licença.', certo: 'Domínio público ou arranjo próprio.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Conjunto motiva, firma o pulso, desenvolve escuta e integra níveis.',
            'O duo professor-aluno serve desde a primeira aula.',
            'Distribua partes por nível: melodia para avançados, baixo para iniciantes.',
            'Ensaio: afinar, tocar inteiro, três pontos, entradas e finais, tocar inteiro de novo.',
            'Prefira repertório em domínio público ou arranjos próprios.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual parte é adequada para um aluno de dois meses numa orquestra de violões?', opcoes: ['Baixo com fundamentais em figuras longas', 'Melodia principal', 'Contracanto', 'Acompanhamento rítmico rápido'], correta: 0, explicacao: 'Simples e estruturalmente importante.' },
        { texto: 'O ensaio deve terminar:', opcoes: ['Tocando a peça inteira de novo', 'No trecho trabalhado', 'Com avaliação individual', 'Com leitura de nova peça'], correta: 0, explicacao: 'Consolida o que foi trabalhado.' },
        { texto: 'Duos de qual compositor em domínio público servem ao ensino?', opcoes: ['Carulli', 'Brouwer', 'Rodrigo', 'Villa-Lobos'], correta: 0, explicacao: 'Carulli, Giuliani e Sor são livres.' },
        { texto: 'Por que arranjar você mesmo as peças de conjunto?', opcoes: ['Permite ajustar a dificuldade de cada parte', 'É mais barato', 'É mais rápido', 'Evita leitura'], correta: 0, explicacao: 'E evita problemas de licença.' },
        { texto: 'O que mais costuma falhar numa apresentação de conjunto?', opcoes: ['As entradas', 'O trecho mais difícil', 'A afinação', 'O final'], correta: 0, explicacao: 'Por isso se ensaiam isoladamente.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Arranjar uma melodia simples em quatro partes de níveis diferentes.',
          'Conduzir um ensaio de conjunto com três pontos definidos.',
          'Dar a entrada de uma peça em duo, dez vezes seguidas.',
          'Apresentar a distribuição de partes justificada por nível de aluno.'
        ],
        criterio: 'Você domina quando consegue pôr alunos de níveis muito diferentes tocando juntos a mesma peça, todos com parte adequada.'
      }
    },

    {
      id: 'n7.2.8',
      titulo: 'Preparação para provas e concursos',
      resumo: 'Bancas, editais e a diferença entre tocar bem e tocar bem numa prova.',
      minutos: 20,
      disciplinas: ['interpretacao', 'repertorio'],
      prereq: ['n6.2.5'],
      status: 'validado',
      cobre: ['Preparação para provas e concursos'],
      objetivo: 'Preparar um aluno (ou a si mesmo) para provas de conservatório, vestibular de música e concursos.',
      blocos: [
        { t: 'p', x: 'Tocar numa banca é diferente de tocar num recital. O público quer ser emocionado; a banca quer verificar competências específicas, listadas num edital. Ler o edital com atenção vale tanto quanto estudar.' },
        { t: 'h', x: 'O que uma banca costuma avaliar' },
        {
          t: 'tabela',
          cab: ['Item', 'O que observam', 'Como preparar'],
          linhas: [
            ['Repertório obrigatório', 'Fidelidade ao texto e estilo', 'Estudar com partitura Urtext e comparar edições'],
            ['Repertório de livre escolha', 'Adequação ao nível e domínio', 'Escolher uma peça segura, não a mais difícil'],
            ['Leitura à primeira vista', 'Continuidade e pulso', 'Material novo todos os dias por meses'],
            ['Teoria e percepção', 'Intervalos, acordes, ditado, leitura rítmica', 'Treino sistemático separado'],
            ['Escalas e técnica', 'Igualdade, andamento, digitação correta', 'Escalas em todas as tonalidades, com metrônomo'],
            ['Entrevista ou arguição', 'Conhecimento sobre as obras', 'Saber compositor, período, forma e contexto']
          ]
        },
        {
          t: 'dica', titulo: 'A escolha mais importante: ',
          x: 'na peça de livre escolha, escolha uma que você toque *com folga*. A banca não premia ambição; premia controle. Uma peça mais simples tocada com domínio vale mais que uma difícil tocada no limite.'
        },
        { t: 'h', x: 'Cronograma de preparação' },
        {
          t: 'tabela',
          cab: ['Prazo', 'Foco'],
          linhas: [
            ['6 meses', 'Ler o edital inteiro; escolher repertório; mapear exigências de teoria'],
            ['5 meses', 'Repertório lido e digitado; rotina diária de leitura à primeira vista'],
            ['4 meses', 'Escalas em todas as tonalidades exigidas; teoria em dia'],
            ['3 meses', 'Repertório memorizado, se exigido'],
            ['2 meses', 'Simulados completos, com cronômetro e banca improvisada'],
            ['1 mês', 'Dois simulados por semana; ajustes finais'],
            ['1 semana', 'Manutenção; nada novo; revisar o edital de novo']
          ]
        },
        { t: 'h', x: 'O simulado' },
        {
          t: 'passos', itens: [
            'Monte a situação completa: sala diferente, roupa adequada, pessoas desconhecidas se possível.',
            'Siga a ordem exata do edital, com os mesmos intervalos de tempo.',
            'Inclua a leitura à primeira vista com material realmente inédito.',
            'Não pare se errar: provas não permitem recomeçar.',
            'Grave e analise depois, com a ficha de autoavaliação.',
            'Faça pelo menos seis simulados antes da prova real.'
          ]
        },
        {
          t: 'pauta', bpm: 60, numerar: true, quebrar: 4,
          txt: 'g4/q a4/q b4/q c5/q | d5/q c5/q b4/q a4/q | g4/q f#4/q e4/q d4/q | g4/b z/b',
          legenda: 'Trecho típico de leitura à primeira vista de prova de nível intermediário: tonalidade simples, movimento por graus conjuntos, ritmo regular. Leia sem parar.'
        },
        { t: 'h', x: 'No dia da prova' },
        {
          t: 'lista', itens: [
            'Chegue com uma hora de antecedência e aqueça em local separado.',
            'Leve cordas, afinador, apoio e a partitura, mesmo que toque de memória.',
            'Se a banca pedir para parar no meio, não é mau sinal: é economia de tempo.',
            'Se errar, siga. Bancas esperam erros e avaliam a recuperação.',
            'Na arguição, responda o que sabe com segurança e admita o que não sabe. Inventar é pior.'
          ]
        },
        {
          t: 'check', chave: 'provas', titulo: 'Prepare uma prova',
          itens: [
            'Li um edital real de prova ou concurso.',
            'Listei todas as exigências em uma tabela.',
            'Escolhi a peça de livre escolha pelo critério de folga.',
            'Montei uma rotina diária de leitura à primeira vista.',
            'Fiz pelo menos um simulado completo, gravado.',
            'Preparei as respostas da arguição sobre as obras.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Provas e concursos', rodadas: 5,
          perguntas: [
            { texto: 'Como escolher a peça de livre escolha?', opcoes: ['Uma que se toque com folga', 'A mais difícil possível', 'A mais longa', 'A mais recente'], correta: 0, explicacao: 'A banca premia controle.' },
            { texto: 'Se a banca interrompe no meio da peça:', opcoes: ['Normalmente é economia de tempo, não mau sinal', 'Significa reprovação', 'Significa erro grave', 'Significa que acabou a prova'], correta: 0, explicacao: 'É prática comum.' },
            { texto: 'Quantos simulados fazer antes da prova?', opcoes: ['Pelo menos seis', 'Um', 'Nenhum', 'Dois'], correta: 0, explicacao: 'A situação precisa ficar familiar.' },
            { texto: 'Na arguição, diante de uma pergunta que você não sabe:', opcoes: ['Admitir que não sabe', 'Inventar uma resposta', 'Mudar de assunto', 'Pedir para pular'], correta: 0, explicacao: 'Inventar costuma ser pior que não saber.' },
            { texto: 'Qual é o primeiro passo da preparação?', opcoes: ['Ler o edital inteiro', 'Escolher o repertório', 'Começar a estudar escalas', 'Memorizar'], correta: 0, explicacao: 'Tudo decorre das exigências listadas.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Escolher a peça mais difícil que se consegue tocar.', certo: 'Escolha a que você toca com folga.' },
            { erro: 'Deixar a leitura à primeira vista para o fim.', certo: 'Ela exige meses de prática diária.' },
            { erro: 'Não fazer simulados.', certo: 'A situação precisa ser treinada.' },
            { erro: 'Ler o edital superficialmente.', certo: 'Ele define tudo o que será cobrado.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Banca verifica competências listadas no edital; leia-o integralmente.',
            'Na livre escolha, prefira a peça que você toca com folga.',
            'Leitura à primeira vista exige meses de prática diária.',
            'Seis simulados completos, com gravação e análise.',
            'No dia: chegar cedo, levar reserva, seguir em frente diante de erros.'
          ]
        }
      ],
      quiz: [
        { texto: 'O que a banca avalia que o público não avalia?', opcoes: ['Competências específicas listadas no edital', 'Musicalidade', 'Som', 'Presença de palco'], correta: 0, explicacao: 'Leitura, escalas, teoria, fidelidade ao texto.' },
        { texto: 'Qual é o critério para a peça de livre escolha?', opcoes: ['Tocar com folga', 'Ser a mais difícil', 'Ser pouco conhecida', 'Ser longa'], correta: 0, explicacao: 'Controle vale mais que ambição.' },
        { texto: 'Leitura à primeira vista se prepara com:', opcoes: ['Material novo todos os dias, por meses', 'Repetição do mesmo trecho', 'Memorização', 'Escalas'], correta: 0, explicacao: 'Quantidade e variedade.' },
        { texto: 'O que incluir num simulado?', opcoes: ['Toda a ordem do edital, com tempos e leitura inédita', 'Só o repertório', 'Só a leitura', 'Só a teoria'], correta: 0, explicacao: 'A situação completa.' },
        { texto: 'Diante de um erro durante a prova:', opcoes: ['Seguir em frente', 'Recomeçar', 'Pedir desculpa', 'Parar'], correta: 0, explicacao: 'A recuperação também é avaliada.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Analisar um edital e montar a tabela de exigências.',
          'Montar o cronograma de preparação de seis meses.',
          'Realizar um simulado completo, gravado.',
          'Apresentar a análise do simulado com pontos de ajuste.'
        ],
        criterio: 'Você domina quando realiza um simulado completo sem interrupções e consegue listar objetivamente o que ajustar.'
      }
    },

    {
      id: 'n7.2.9',
      titulo: 'Gravação e produção de performances',
      resumo: 'Do celular ao vídeo bem feito: captar, editar e publicar com honestidade.',
      minutos: 20,
      disciplinas: ['tecnica', 'interpretacao'],
      prereq: ['n6.2.8'],
      status: 'validado',
      cobre: ['Gravação e produção de performances'],
      objetivo: 'Planejar e executar uma gravação de qualidade, com decisões técnicas e éticas conscientes.',
      blocos: [
        { t: 'p', x: 'Gravar deixou de ser privilégio de estúdio. Com um celular e alguns cuidados, dá para produzir um registro muito bom. Os três fatores que mais importam não custam nada: a sala, a posição do microfone e a execução.' },
        { t: 'h', x: 'A sala' },
        {
          t: 'lista', itens: [
            'Evite cômodos com eco forte (banheiro, corredor vazio) e cômodos totalmente abafados (closet, quarto cheio de tecido).',
            'Uma sala média, com algum mobiliário, costuma ser o melhor compromisso.',
            'Desligue geladeira, ar-condicionado e ventilador. O ruído aparece na gravação e não some depois.',
            'Grave longe de janelas voltadas para a rua.',
            'Teste: grave trinta segundos de silêncio e ouça com fone. O que você escutar vai estar no registro.'
          ]
        },
        { t: 'h', x: 'A captação' },
        {
          t: 'tabela',
          cab: ['Fator', 'Recomendação'],
          linhas: [
            ['Distância', 'Cerca de 1 metro; mais perto exagera ruídos de dedo'],
            ['Altura', 'Na altura da boca do violão ou um pouco acima'],
            ['Ângulo', 'Levemente de lado, apontando entre a boca e a 12ª casa'],
            ['Processamento', 'Desligar redução de ruído e nivelamento automático, se possível'],
            ['Nível', 'Gravar com margem: picos em torno de -12 dB, nunca estourando'],
            ['Dois microfones', 'Se houver, um perto da 12ª casa e outro no corpo, para estéreo']
          ]
        },
        {
          t: 'dica', titulo: 'O erro mais comum: ',
          x: 'microfone perto demais. A um palmo do violão, o som fica cheio de ruído de unha e respiração e perde o corpo da caixa. O violão precisa de distância para soar como violão.'
        },
        { t: 'h', x: 'A execução para gravação' },
        {
          t: 'lista', itens: [
            'Grave tomadas inteiras, não trechos. A continuidade musical é audível.',
            'Faça pelo menos cinco tomadas e escolha depois; nunca na hora.',
            'Articule um pouco mais do que no ao vivo: o microfone perdoa menos.',
            'Vibrato e rubato soam maiores na gravação do que ao vivo — modere.',
            'Afinação: confira entre tomadas, não só no começo.'
          ]
        },
        { t: 'h', x: 'Edição e honestidade' },
        {
          t: 'tabela',
          cab: ['Prática', 'Aceitável?', 'Observação'],
          linhas: [
            ['Escolher a melhor tomada inteira', 'Sim', 'Prática universal'],
            ['Juntar duas tomadas num corte', 'Sim', 'Prática padrão em disco; indique se for material de avaliação'],
            ['Corrigir notas isoladas', 'Depende', 'Em disco é comum; em prova ou candidatura, é fraude'],
            ['Ajustar equalização e reverberação', 'Sim', 'Com moderação'],
            ['Corrigir afinação digitalmente', 'Não, no violão clássico', 'Descaracteriza o instrumento'],
            ['Acelerar digitalmente para parecer mais rápido', 'Não', 'É falsificação']
          ],
          legenda: 'Quando a gravação serve a uma avaliação, concurso ou candidatura, o padrão é: tomada única, sem cortes, e o edital costuma exigir vídeo com as mãos visíveis.'
        },
        {
          t: 'aviso', x: 'Publicar uma gravação de obra protegida em plataforma pública depende de licenciamento — as plataformas costumam ter acordos com as entidades de direitos, mas a responsabilidade é de quem publica. Obras em domínio público não têm esse problema; a edição usada, porém, pode ter direitos próprios.'
        },
        {
          t: 'tocar', titulo: 'Teste de captação',
          seq: [[6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0]],
          rotulo: 'Conferir as seis cordas',
          fim: 'Grave essas seis notas e ouça: todas devem soar com o mesmo peso. Se as graves dominam, afaste o microfone.',
          x: 'Toque as seis cordas soltas, da mais grave para a mais aguda.'
        },
        {
          t: 'check', chave: 'producao', titulo: 'Produza um registro',
          itens: [
            'Gravei trinta segundos de silêncio e identifiquei os ruídos da sala.',
            'Testei três posições de microfone e escolhi a melhor.',
            'Desliguei processamentos automáticos.',
            'Gravei cinco tomadas inteiras da mesma peça.',
            'Escolhi a melhor tomada no dia seguinte.',
            'Verifiquei a situação de direitos da obra e da edição.'
          ]
        },
        {
          t: 'exercicio', tipo: 'perguntas', titulo: 'Gravar bem', rodadas: 5,
          perguntas: [
            { texto: 'Qual é a distância recomendada do microfone?', opcoes: ['Cerca de um metro', 'Um palmo', 'Três metros', 'Encostado no tampo'], correta: 0, explicacao: 'Perto demais exagera ruídos e perde o corpo.' },
            { texto: 'O que fazer com a redução de ruído automática?', opcoes: ['Desligar, se possível', 'Deixar no máximo', 'Usar só em sala ruidosa', 'Ativar depois'], correta: 0, explicacao: 'Ela altera o timbre do instrumento.' },
            { texto: 'Quantas tomadas inteiras fazer?', opcoes: ['Pelo menos cinco', 'Uma', 'Vinte', 'Até acertar'], correta: 0, explicacao: 'E escolher depois, não na hora.' },
            { texto: 'Em gravação para avaliação ou concurso, o padrão é:', opcoes: ['Tomada única, sem cortes, mãos visíveis', 'Edição livre', 'Correção de notas', 'Áudio apenas'], correta: 0, explicacao: 'Os editais costumam exigir isso.' },
            { texto: 'Corrigir afinação digitalmente num violão clássico:', opcoes: ['Descaracteriza o instrumento e não se faz', 'É prática comum', 'É obrigatório', 'Melhora o resultado'], correta: 0, explicacao: 'A pequena variação faz parte do som.' }
          ]
        },
        {
          t: 'erros', itens: [
            { erro: 'Microfone encostado no violão.', certo: 'Cerca de um metro, na altura da boca.' },
            { erro: 'Gravar com ar-condicionado ligado.', certo: 'O ruído não sai depois.' },
            { erro: 'Escolher a tomada logo após gravar.', certo: 'Escolha no dia seguinte.' },
            { erro: 'Editar notas numa gravação de avaliação.', certo: 'Nesse contexto, é fraude.' }
          ]
        },
        {
          t: 'resumo', itens: [
            'Sala, posição do microfone e execução importam mais que equipamento.',
            'Cerca de um metro, na altura da boca, levemente de lado.',
            'Desligue processamentos automáticos e ruídos do ambiente.',
            'Cinco tomadas inteiras; escolha no dia seguinte.',
            'Em avaliação, tomada única sem cortes.',
            'Verifique os direitos da obra e da edição antes de publicar.'
          ]
        }
      ],
      quiz: [
        { texto: 'Qual é o fator mais barato que mais melhora uma gravação?', opcoes: ['A escolha da sala e a posição do microfone', 'O microfone caro', 'O software de edição', 'A interface de áudio'], correta: 0, explicacao: 'Custa zero e muda tudo.' },
        { texto: 'Como testar o ruído da sala?', opcoes: ['Gravar trinta segundos de silêncio e ouvir com fone', 'Olhar o medidor', 'Perguntar a alguém', 'Gravar tocando'], correta: 0, explicacao: 'O que você ouvir estará no registro.' },
        { texto: 'Por que gravar tomadas inteiras?', opcoes: ['A continuidade musical é audível', 'Economiza tempo', 'Facilita a edição', 'Melhora o som'], correta: 0, explicacao: 'Trechos colados perdem direção.' },
        { texto: 'Juntar duas tomadas num corte é:', opcoes: ['Prática padrão em disco, mas deve ser indicada em material de avaliação', 'Sempre fraude', 'Sempre aceitável', 'Tecnicamente impossível'], correta: 0, explicacao: 'O contexto define.' },
        { texto: 'Antes de publicar, é preciso verificar:', opcoes: ['Os direitos da obra e da edição usada', 'A duração', 'O formato do arquivo', 'A resolução do vídeo'], correta: 0, explicacao: 'A edição pode ter direitos próprios.' }
      ],
      pratica: {
        titulo: 'Avaliação prática',
        itens: [
          'Produzir uma gravação de uma peça completa, com teste de sala e posicionamento.',
          'Apresentar três tomadas e justificar a escolha da melhor.',
          'Explicar as decisões de edição adotadas.',
          'Verificar e declarar a situação de direitos da obra e da edição.'
        ],
        criterio: 'Você domina quando produz um registro em que o violão soa como violão, sem ruído de ambiente, e as decisões de edição são declaráveis sem constrangimento.'
      }
    }
  ]
};
