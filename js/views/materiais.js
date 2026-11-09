// Biblioteca de Materiais: tabelas de consulta rápida, catálogo de métodos
// em domínio público e guia prático de direito autoral. Rota #/materiais.
//
// Tudo aqui é material de referência que funciona offline. Nada de links para
// partituras protegidas: o que está em domínio público é identificado como tal,
// e o resto vem com a indicação de procurar edição licenciada.
import { GLOSSARIO } from '../curso/tutor.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function tabela(cab, linhas) {
  const wrap = el('div', 'tabela-env');
  const t = el('table', 'tabela-int');
  const thead = el('thead');
  const tr = el('tr');
  cab.forEach((c) => tr.append(el('th', '', c)));
  thead.append(tr);
  t.append(thead);
  const tb = el('tbody');
  linhas.forEach((l) => {
    const r = el('tr');
    l.forEach((c) => r.append(el('td', '', c)));
    tb.append(r);
  });
  t.append(tb);
  wrap.append(t);
  return wrap;
}

// ------------------------------------------------------------------ conteúdo
const REFERENCIAS = [
  {
    id: 'afinacao', nome: 'Afinação e cordas',
    blocos: [
      ['h', 'Afinação padrão'],
      ['t', [['Corda', 'Nota', 'Frequência', 'Soa'], [
        ['1ª (mais fina)', 'Mi', '329,63 Hz', 'E4'],
        ['2ª', 'Si', '246,94 Hz', 'B3'],
        ['3ª', 'Sol', '196,00 Hz', 'G3'],
        ['4ª', 'Ré', '146,83 Hz', 'D3'],
        ['5ª', 'Lá', '110,00 Hz', 'A2'],
        ['6ª (mais grossa)', 'Mi', '82,41 Hz', 'E2']
      ]]],
      ['p', 'A partitura de violão é escrita em clave de sol e soa uma oitava abaixo do escrito. '
        + 'Por isso o Mi da 1ª corda, escrito na primeira linha suplementar inferior, soa como E4.'],
      ['h', 'Afinações alternativas usuais'],
      ['t', [['Nome', 'Mudança', 'Para quê'], [
        ['Drop D', '6ª corda de Mi para Ré', 'Baixos abaixo do Mi; peças em Ré'],
        ['6ª em Dó', '6ª corda de Mi para Dó', 'Peças em Dó e em Fá'],
        ['3ª em Fá sustenido', '3ª corda de Sol para Fá♯', 'Transcrições de alaúde renascentista'],
        ['Afinação de Ré (DADGAD-like)', '6ª Ré, 5ª Lá, 1ª Ré', 'Repertório moderno e modal']
      ]]],
      ['h', 'Tensão de cordas'],
      ['t', [['Tensão', 'Volume', 'Toque', 'Indicada para'], [
        ['Baixa', 'Menor', 'Leve', 'Iniciantes, mãos sensíveis, ligados'],
        ['Média', 'Equilibrado', 'Padrão', 'Uso geral'],
        ['Alta', 'Maior projeção', 'Mais duro', 'Concerto, violão de tampo rígido']
      ]]]
    ]
  },
  {
    id: 'figuras', nome: 'Figuras, pausas e compassos',
    blocos: [
      ['h', 'Figuras e durações'],
      ['t', [['Figura', 'Vale (em 4/4)', 'Pausa'], [
        ['Semibreve', '4 tempos', 'Retângulo abaixo da 4ª linha'],
        ['Mínima', '2 tempos', 'Retângulo acima da 3ª linha'],
        ['Semínima', '1 tempo', 'Sinal de pausa de semínima'],
        ['Colcheia', 'meio tempo', 'Uma bandeirola'],
        ['Semicolcheia', 'um quarto de tempo', 'Duas bandeirolas'],
        ['Fusa', 'um oitavo de tempo', 'Três bandeirolas']
      ]]],
      ['p', 'Ponto de aumento acrescenta metade do valor: semínima pontuada vale um tempo e meio. '
        + 'Dois pontos acrescentam metade e mais um quarto.'],
      ['h', 'Fórmulas de compasso'],
      ['t', [['Fórmula', 'Leitura', 'Caráter'], [
        ['2/4', 'Dois tempos de semínima', 'Marcha, polca, choro'],
        ['3/4', 'Três tempos de semínima', 'Valsa, minueto, sarabanda'],
        ['4/4', 'Quatro tempos de semínima', 'O mais comum'],
        ['6/8', 'Dois grupos de três colcheias', 'Giga, barcarola, baião'],
        ['3/8', 'Três colcheias', 'Danças rápidas'],
        ['5/8 e 7/8', 'Agrupamentos desiguais (2+3, 3+2+2)', 'Música moderna e folclórica']
      ]]]
    ]
  },
  {
    id: 'armaduras', nome: 'Armaduras de clave',
    blocos: [
      ['h', 'Tons com sustenidos'],
      ['t', [['Armadura', 'Tom maior', 'Relativo menor', 'Sustenidos'], [
        ['—', 'Dó', 'Lá menor', 'nenhum'],
        ['1♯', 'Sol', 'Mi menor', 'Fá♯'],
        ['2♯', 'Ré', 'Si menor', 'Fá♯ Dó♯'],
        ['3♯', 'Lá', 'Fá♯ menor', 'Fá♯ Dó♯ Sol♯'],
        ['4♯', 'Mi', 'Dó♯ menor', 'Fá♯ Dó♯ Sol♯ Ré♯'],
        ['5♯', 'Si', 'Sol♯ menor', 'Fá♯ Dó♯ Sol♯ Ré♯ Lá♯']
      ]]],
      ['h', 'Tons com bemóis'],
      ['t', [['Armadura', 'Tom maior', 'Relativo menor', 'Bemóis'], [
        ['1♭', 'Fá', 'Ré menor', 'Si♭'],
        ['2♭', 'Si♭', 'Sol menor', 'Si♭ Mi♭'],
        ['3♭', 'Mi♭', 'Dó menor', 'Si♭ Mi♭ Lá♭'],
        ['4♭', 'Lá♭', 'Fá menor', 'Si♭ Mi♭ Lá♭ Ré♭'],
        ['5♭', 'Ré♭', 'Si♭ menor', 'Si♭ Mi♭ Lá♭ Ré♭ Sol♭']
      ]]],
      ['p', 'Atalhos: o último sustenido é a sensível — suba meio tom e você tem o tom maior. '
        + 'O penúltimo bemol dá o nome do tom maior.']
    ]
  },
  {
    id: 'cifras', nome: 'Cifras e formação de acordes',
    blocos: [
      ['h', 'Como ler a cifra'],
      ['t', [['Cifra', 'Nome', 'Notas (sobre Dó)'], [
        ['C', 'maior', 'Dó Mi Sol'],
        ['Cm', 'menor', 'Dó Mi♭ Sol'],
        ['C°', 'diminuto', 'Dó Mi♭ Sol♭'],
        ['C+ (Caug)', 'aumentado', 'Dó Mi Sol♯'],
        ['C7', 'dominante com sétima', 'Dó Mi Sol Si♭'],
        ['Cmaj7 (C7M)', 'maior com sétima maior', 'Dó Mi Sol Si'],
        ['Cm7', 'menor com sétima', 'Dó Mi♭ Sol Si♭'],
        ['Cm7(♭5)', 'meio-diminuto', 'Dó Mi♭ Sol♭ Si♭'],
        ['C°7', 'diminuto com sétima', 'Dó Mi♭ Sol♭ Lá'],
        ['Csus4', 'com quarta suspensa', 'Dó Fá Sol'],
        ['Cadd9', 'maior com nona (sem sétima)', 'Dó Mi Sol Ré'],
        ['C9', 'dominante com nona', 'Dó Mi Sol Si♭ Ré'],
        ['C6', 'maior com sexta', 'Dó Mi Sol Lá'],
        ['C/G', 'maior com Sol no baixo', 'Sol Dó Mi Sol']
      ]]],
      ['h', 'Campo harmônico maior'],
      ['t', [['Grau', 'Tipo', 'Função', 'Em Dó'], [
        ['I', 'maior com 7ª maior', 'tônica', 'Cmaj7'],
        ['ii', 'menor com 7ª', 'subdominante', 'Dm7'],
        ['iii', 'menor com 7ª', 'tônica', 'Em7'],
        ['IV', 'maior com 7ª maior', 'subdominante', 'Fmaj7'],
        ['V', 'dominante', 'dominante', 'G7'],
        ['vi', 'menor com 7ª', 'tônica', 'Am7'],
        ['vii', 'meio-diminuto', 'dominante', 'Bm7(♭5)']
      ]]]
    ]
  },
  {
    id: 'italiano', nome: 'Termos de andamento e dinâmica',
    blocos: [
      ['h', 'Andamento'],
      ['t', [['Termo', 'Significado', 'BPM aproximado'], [
        ['Largo', 'Muito lento e amplo', '40–60'],
        ['Adagio', 'Lento, à vontade', '66–76'],
        ['Andante', 'Andando, caminhando', '76–108'],
        ['Moderato', 'Moderado', '108–120'],
        ['Allegro', 'Rápido e alegre', '120–156'],
        ['Vivace', 'Vivo', '156–176'],
        ['Presto', 'Muito rápido', '168–200']
      ]]],
      ['h', 'Modificadores'],
      ['t', [['Termo', 'Significado'], [
        ['ritardando (rit.)', 'desacelerando aos poucos'],
        ['accelerando (accel.)', 'acelerando aos poucos'],
        ['rubato', 'tempo roubado e devolvido'],
        ['a tempo', 'de volta ao andamento original'],
        ['fermata', 'prolongar a nota à vontade'],
        ['meno mosso', 'menos movido'],
        ['più mosso', 'mais movido']
      ]]],
      ['h', 'Dinâmica e caráter'],
      ['t', [['Símbolo', 'Nome', 'Significado'], [
        ['pp', 'pianissimo', 'muito suave'],
        ['p', 'piano', 'suave'],
        ['mp', 'mezzo piano', 'meio suave'],
        ['mf', 'mezzo forte', 'meio forte'],
        ['f', 'forte', 'forte'],
        ['ff', 'fortissimo', 'muito forte'],
        ['<', 'crescendo', 'aumentando'],
        ['>', 'diminuendo', 'diminuindo'],
        ['dolce', '—', 'doce; no violão, tocar sobre a boca'],
        ['ponticello', '—', 'perto do cavalete, som metálico'],
        ['cantabile', '—', 'cantado'],
        ['sempre', '—', 'sempre, continuamente']
      ]]]
    ]
  },
  {
    id: 'violao', nome: 'Símbolos próprios do violão',
    blocos: [
      ['t', [['Símbolo', 'Significado'], [
        ['p i m a', 'Dedos da mão direita: polegar, indicador, médio, anelar'],
        ['c (ou x)', 'Mínimo da mão direita, usado em rasgueados'],
        ['1 2 3 4', 'Dedos da mão esquerda: indicador a mínimo'],
        ['Números em círculo (①–⑥)', 'Corda em que a nota deve ser tocada'],
        ['Algarismos romanos (I, V, VII…)', 'Posição da mão esquerda'],
        ['C ou B antes do romano', 'Pestana (cejilla / barré) naquela casa'],
        ['½C', 'Meia pestana'],
        ['Losango sobre a nota', 'Harmônico'],
        ['AH ou arm. 12', 'Harmônico artificial, com a casa indicada'],
        ['pizz.', 'Pizzicato: abafar junto ao cavalete e tocar com o polegar'],
        ['tamb.', 'Tambora: bater com o lado do polegar junto ao cavalete'],
        ['golpe', 'Percussão no tampo'],
        ['gliss.', 'Glissando: deslizar com a corda soando'],
        ['apoy.', 'Apoiando: o dedo descansa na corda vizinha'],
        ['⌃ sobre a nota', 'Acento']
      ]]]
    ]
  },
  {
    id: 'ornamentos', nome: 'Ornamentos barrocos',
    blocos: [
      ['t', [['Ornamento', 'Como se executa', 'Observação'], [
        ['Trinado (tr)', 'Alternância rápida com a nota superior', 'Começa na nota superior e dentro do tempo'],
        ['Mordente', 'Nota principal, inferior, principal', 'Rapidíssimo, no tempo'],
        ['Mordente invertido', 'Nota principal, superior, principal', 'Também chamado de pralltriller'],
        ['Apogiatura', 'Nota de ornamento recebe parte do valor da principal', 'Cai no tempo, não antes'],
        ['Acciaccatura', 'Nota muito curta antes da principal', 'Prática mais tardia'],
        ['Grupeto', 'Volta ao redor da nota: superior, principal, inferior, principal', 'Muito usado em cadências']
      ]]],
      ['p', 'Regra geral do barroco: o ornamento acontece dentro do tempo, não antes dele. '
        + 'No violão, trinados e mordentes costumam ser realizados com ligados.']
    ]
  }
];

const METODOS = [
  { nome: 'Método para Guitarra', autor: 'Fernando Sor', ano: 1830, dp: true,
    sobre: 'Reflexivo e analítico: discute o porquê de cada escolha técnica em vez de apenas prescrever.',
    bom: 'Entender a lógica da técnica; condução de vozes e musicalidade.' },
  { nome: 'Nuevo Método para Guitarra', autor: 'Dionisio Aguado', ano: 1843, dp: true,
    sobre: 'O mais sistemático dos métodos históricos, com progressão rigorosa de mecanismo.',
    bom: 'Rigor técnico e construção de mecanismo desde o início.' },
  { nome: 'Método Op. 59 e 25 Estudos Op. 60', autor: 'Matteo Carcassi', ano: 1836, dp: true,
    sobre: 'Progressão clara e estudos musicais. Os 25 estudos continuam sendo material central do ensino intermediário.',
    bom: 'Caminho progressivo do iniciante ao intermediário.' },
  { nome: 'Método Op. 27', autor: 'Ferdinando Carulli', ano: 1810, dp: true,
    sobre: 'Didático e agradável: traz peças desde as primeiras lições.',
    bom: 'Primeiros meses de estudo, com repertório que soa bem cedo.' },
  { nome: '120 Arpejos, Op. 1', autor: 'Mauro Giuliani', ano: 1812, dp: true,
    sobre: 'Cento e vinte fórmulas de mão direita sobre a mesma progressão de dois compassos.',
    bom: 'O material de mão direita mais usado no mundo; serve do iniciante ao profissional.' },
  { nome: 'Escuela Razonada de la Guitarra', autor: 'Emilio Pujol', ano: 1934, dp: false,
    sobre: 'Quatro volumes, herdeiros diretos da escola de Tárrega. O tratado mais completo do século XX.',
    bom: 'Consulta detalhada sobre qualquer aspecto técnico. Procure edição licenciada.' },
  { nome: 'Série Didática para Guitarra', autor: 'Abel Carlevaro', ano: 1966, dp: false,
    sobre: 'Análise do movimento com rigor quase científico, em quatro cadernos.',
    bom: 'Técnica avançada e compreensão biomecânica. Procure edição licenciada.' }
];

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela mat-tela');
  raiz.append(tela);

  function indice() {
    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Biblioteca de Materiais'));
    tela.append(topo);

    tela.append(el('p', 'dica', 'Tabelas de consulta rápida, catálogo de métodos históricos e um guia prático '
      + 'de direito autoral. Tudo funciona offline, sem depender de internet.'));

    tela.append(el('h2', 'rotulo-grupo', 'Consulta rápida'));
    const grade = el('div', 'grade');
    REFERENCIAS.forEach((r) => {
      const c = el('button', 'cartao');
      c.append(el('h3', 'cartao-nome', r.nome));
      c.onclick = () => referencia(r);
      grade.append(c);
    });
    tela.append(grade);

    tela.append(el('h2', 'rotulo-grupo', 'Glossário'));
    tela.append(el('p', 'legenda', GLOSSARIO.length + ' termos explicados, cada um com a aula que desenvolve o assunto.'));
    const bg = el('button', 'botao-sec', 'Abrir o glossário');
    bg.onclick = glossario;
    tela.append(bg);

    tela.append(el('h2', 'rotulo-grupo', 'Métodos de violão'));
    METODOS.forEach((m) => {
      const c = el('div', 'cartao');
      const cab = el('div', 'tec-cab');
      cab.append(el('h3', 'cartao-nome', m.nome));
      cab.append(el('span', m.dp ? 'tec-ok' : 'selo-aula disc', m.dp ? 'domínio público' : 'protegido'));
      c.append(cab);
      c.append(el('p', 'cartao-desc', m.autor + ' (' + m.ano + ') · ' + m.sobre));
      c.append(el('p', 'cartao-desc', 'Bom para: ' + m.bom));
      tela.append(c);
    });

    tela.append(el('h2', 'rotulo-grupo', 'Direito autoral na prática'));
    const b2 = el('button', 'botao-sec', 'Abrir o guia');
    b2.onclick = direitos;
    tela.append(b2);

    tela.append(el('h2', 'rotulo-grupo', 'Seus dados'));
    tela.append(el('p', 'legenda', 'Progresso, sessões, avaliações e anotações ficam guardados no próprio aparelho. '
      + 'Use a área de backup para exportar e importar tudo.'));
    const b3 = el('button', 'botao-sec', 'Backup e pacotes');
    b3.onclick = () => ir('pacotes');
    tela.append(b3);
    window.scrollTo(0, 0);
  }

  function referencia(r) {
    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Materiais');
    voltar.onclick = indice;
    topo.append(voltar, el('h1', 'titulo-tela', r.nome));
    tela.append(topo);
    r.blocos.forEach(([tipo, conteudo]) => {
      if (tipo === 'h') tela.append(el('h2', 'rotulo-grupo titulo-bloco', conteudo));
      else if (tipo === 'p') tela.append(el('p', 'texto-bloco', conteudo));
      else if (tipo === 't') tela.append(tabela(conteudo[0], conteudo[1]));
    });
    window.scrollTo(0, 0);
  }

  function glossario() {
    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Materiais');
    voltar.onclick = indice;
    topo.append(voltar, el('h1', 'titulo-tela', 'Glossário'));
    tela.append(topo);

    const inp = document.createElement('input');
    inp.type = 'search'; inp.className = 'campo-busca'; inp.placeholder = 'Buscar termo…';
    tela.append(inp);
    const area = el('div', 'grupo');
    tela.append(area);

    function desenhar() {
      const t = inp.value.trim().toLowerCase();
      area.innerHTML = '';
      const lista = GLOSSARIO.filter((g) => !t || (g.termo + ' ' + g.texto).toLowerCase().includes(t));
      if (!lista.length) { area.append(el('p', 'texto-bloco', 'Nenhum termo encontrado.')); return; }
      lista.slice().sort((a, b) => a.termo.localeCompare(b.termo)).forEach((g) => {
        const d = el('div', 'def-bloco');
        d.append(el('span', 'def-termo', g.termo));
        d.append(el('p', 'def-texto', g.texto));
        if (g.aula) {
          const b = el('button', 'link-aula', 'Aula que desenvolve isso');
          b.onclick = () => ir('aula/' + g.aula);
          d.append(b);
        }
        area.append(d);
      });
    }
    inp.oninput = desenhar;
    desenhar();
    window.scrollTo(0, 0);
  }

  function direitos() {
    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Materiais');
    voltar.onclick = indice;
    topo.append(voltar, el('h1', 'titulo-tela', 'Direito autoral na prática'));
    tela.append(topo);

    tela.append(el('p', 'texto-bloco', 'Este guia resume as regras que afetam o estudo e o ensino de violão no Brasil. '
      + 'Não é parecer jurídico; em caso de dúvida sobre um uso específico, consulte um advogado.'));

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Prazo de proteção'));
    tela.append(el('p', 'texto-bloco', 'No Brasil, a obra fica protegida até 70 anos contados do 1º de janeiro do ano '
      + 'seguinte ao da morte do autor. Depois disso, entra em domínio público: pode ser copiada, tocada, '
      + 'gravada, arranjada e distribuída livremente.'));

    tela.append(tabela(['Compositor', 'Morte', 'Situação'], [
      ['Johann Sebastian Bach', '1750', 'domínio público'],
      ['Fernando Sor', '1839', 'domínio público'],
      ['Mauro Giuliani', '1829', 'domínio público'],
      ['Matteo Carcassi', '1853', 'domínio público'],
      ['Francisco Tárrega', '1909', 'domínio público'],
      ['Isaac Albéniz', '1909', 'domínio público'],
      ['Enrique Granados', '1916', 'domínio público'],
      ['Ernesto Nazareth', '1934', 'domínio público'],
      ['Agustín Barrios Mangoré', '1944', 'domínio público'],
      ['João Pernambuco', '1947', 'domínio público'],
      ['Manuel Ponce', '1948', 'domínio público'],
      ['Heitor Villa-Lobos', '1959', 'protegido até 2030'],
      ['Dilermando Reis', '1977', 'protegido'],
      ['Joaquín Rodrigo', '1999', 'protegido'],
      ['Leo Brouwer', 'vivo', 'protegido']
    ]));

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Obra e edição são coisas diferentes'));
    tela.append(el('p', 'texto-bloco', 'O texto musical de Bach é livre, mas uma edição moderna específica — com '
      + 'dedilhados, revisão e diagramação — pode ter direitos próprios sobre esse trabalho editorial. '
      + 'Procure edições identificadas como de domínio público ou de licença livre.'));

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'O que pode e o que não pode'));
    tela.append(tabela(['Uso', 'Obra em domínio público', 'Obra protegida'], [
      ['Tocar em casa', 'pode', 'pode'],
      ['Estudar numa aula particular', 'pode', 'pode'],
      ['Fotocopiar para o aluno', 'pode', 'exige autorização'],
      ['Publicar um arranjo seu', 'pode (o arranjo é seu)', 'exige autorização do titular'],
      ['Gravar e publicar na internet', 'pode', 'depende de licenciamento'],
      ['Tocar em concerto com bilheteria', 'pode', 'recolhimento de direitos autorais'],
      ['Incluir num app público', 'pode', 'exige licença']
    ]));

    tela.append(el('h2', 'rotulo-grupo titulo-bloco', 'Como este app trata o assunto'));
    const ul = el('ul', 'lista-bloco');
    [
      'A Biblioteca de Repertório só lista obras em domínio público, com o ano de morte do autor declarado.',
      'As aulas sobre compositores protegidos (Villa-Lobos, Rodrigo, Brouwer) ensinam a linguagem e preparam a técnica com exercícios originais, sem reproduzir partitura, e indicam a edição licenciada.',
      'Os exemplos musicais escritos nas aulas são de obras em domínio público ou foram compostos para este curso.',
      'Nenhuma partitura protegida é distribuída pelo app.'
    ].forEach((t) => ul.append(el('li', '', t)));
    tela.append(ul);
    window.scrollTo(0, 0);
  }

  indice();
  return () => { encerrada = true; };
}
