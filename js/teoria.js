// Teoria musical (sem tela): grafia correta das notas (Fá# e não Solb), escalas, intervalos,
// tríades, campo harmônico e os geradores das perguntas dos quizzes.

const LETRAS = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
const CIFRAS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const NAT = [0, 2, 4, 5, 7, 9, 11];                 // altura (0 a 11) de cada nota natural
const PASSOS = [0, 2, 4, 5, 7, 9, 11];              // distâncias em semitons da escala maior
const sim = (acc) => (acc > 0 ? '#'.repeat(acc) : acc < 0 ? '♭'.repeat(-acc) : '');
const mod12 = (n) => ((n % 12) + 12) % 12;

// Uma "nota" é { letra: 0..6, acc: -1|0|1, pc: 0..11 }.
export function nota(letra, pc) {
  const p = mod12(pc);
  const acc = mod12(p - NAT[letra] + 6) - 6;
  return { letra, acc, pc: p };
}
export const nomeNota = (n) => LETRAS[n.letra] + sim(n.acc);
export const cifraNota = (n) => CIFRAS[n.letra] + sim(n.acc);

// As 12 tonalidades maiores, na ordem do círculo das quintas.
export const TONICAS = [
  [0, 0], [4, 0], [1, 0], [5, 0], [2, 0], [6, 0], [3, 1], [1, -1], [5, -1], [2, -1], [6, -1], [3, 0]
].map(([letra, acc]) => nota(letra, NAT[letra] + acc));

export function escalaMaior(t) {
  return PASSOS.map((s, i) => nota((t.letra + i) % 7, t.pc + s));
}
export function triadeDe(t, tipo) {
  const e = escalaMaior(t);
  const terca = tipo === 'menor' ? nota(e[2].letra, e[2].pc - 1) : e[2];
  return [e[0], terca, e[4]];
}
const ROMANOS = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'];
const QUAL = ['', 'm', 'm', '', '', 'm', 'dim'];
export function campoHarmonico(t) {
  const e = escalaMaior(t);
  return e.map((n, i) => ({ grau: ROMANOS[i], cifra: cifraNota(n) + QUAL[i], notas: [e[i], e[(i + 2) % 7], e[(i + 4) % 7]] }));
}

export const INTERVALOS = ['uníssono', '2ª menor', '2ª maior', '3ª menor', '3ª maior', '4ª justa', 'trítono', '5ª justa', '6ª menor', '6ª maior', '7ª menor', '7ª maior', 'oitava'];
export const semitons = (a, b) => mod12(b.pc - a.pc);

// ---------- demonstração no braço: quais notas acender ----------
// Devolve [{pc, rotulo}] relativo à tônica.
export function demo(tipo, t, variante) {
  if (tipo === 'nota') return [{ pc: t.pc, rotulo: 'R' }];
  if (tipo === 'escala') return escalaMaior(t).map((n, i) => ({ pc: n.pc, rotulo: i === 0 ? 'R' : String(i + 1) }));
  if (tipo === 'triade') return triadeDe(t, variante === 'menor' ? 'menor' : 'maior').map((n, i) => ({ pc: n.pc, rotulo: ['R', '3', '5'][i] }));
  return [];
}

// ---------- quizzes ----------
const pick = (l, r) => l[Math.floor(r() * l.length)];
function embaralhar(l, r) { const a = [...l]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function pergunta(texto, correta, erradas, r, explicacao = '') {
  const unicas = [...new Set(erradas.filter((x) => x !== correta))];
  const opcoes = embaralhar([correta, ...embaralhar(unicas, r).slice(0, 3)], r);
  return { texto, opcoes, correta: opcoes.indexOf(correta), explicacao };
}
const lista = (ns) => ns.map(nomeNota).join(' ');

const GERADORES = {
  notas: (r) => {
    const pares = [['Dó', 'Ré', 2], ['Mi', 'Fá', 1], ['Si', 'Dó', 1], ['Sol', 'Lá', 2], ['Fá', 'Sol', 2], ['Lá', 'Si', 2], ['Ré', 'Mi', 2]];
    const [a, b, s] = pick(pares, r);
    const acima = pick([['Dó', 'Dó#'], ['Ré', 'Ré#'], ['Fá', 'Fá#'], ['Sol', 'Sol#'], ['Lá', 'Lá#']], r);
    return [
      pergunta('Quantos semitons (casas) há entre ' + a + ' e ' + b + '?', String(s), ['1', '2', '3', '4'], r, 'Entre Mi–Fá e Si–Dó é 1 semitom; entre as outras notas naturais, 2 (um tom).'),
      pergunta('Qual nota fica um semitom acima de ' + acima[0] + '?', acima[1], ['Dó#', 'Ré#', 'Fá#', 'Sol#', 'Lá#', 'Mi', 'Si'].concat([acima[0]]), r, 'Sustenido (#) sobe um semitom.'),
      pergunta('Entre quais notas naturais NÃO existe sustenido?', 'Mi e Fá', ['Dó e Ré', 'Sol e Lá', 'Fá e Sol', 'Lá e Si'], r, 'Mi–Fá e Si–Dó já estão a um semitom.'),
      pergunta('Dó# e Ré♭ são...', 'a mesma nota com nomes diferentes', ['notas a um tom de distância', 'a mesma nota em oitavas diferentes', 'notas a um semitom de distância'], r, 'Chamamos de enarmônicas.')
    ];
  },
  escala: (r) => {
    const t = pick(TONICAS, r), e = escalaMaior(t);
    const g = pick([[2, '3ª'], [4, '5ª'], [6, '7ª']], r);
    const outras = e.filter((_, i) => i !== g[0]).map(nomeNota);
    const t2 = pick(TONICAS, r);
    return [
      pergunta('Qual é a fórmula da escala maior (T = tom, S = semitom)?', 'T T S T T T S', ['T S T T S T T', 'S T T S T T T', 'T T T S T T S'], r, 'Tom, tom, semitom, tom, tom, tom, semitom.'),
      pergunta('Qual é a ' + g[1] + ' nota da escala de ' + nomeNota(t) + ' maior?', nomeNota(e[g[0]]), outras, r, 'Escala de ' + nomeNota(t) + ': ' + lista(e)),
      pergunta('O que é a tônica de uma escala?', 'A nota que dá nome à escala (grau 1)', ['A última nota da escala', 'A nota mais aguda do violão', 'A terceira nota da escala'], r),
      pergunta('Quais são as notas de ' + nomeNota(t2) + ' maior?', lista(escalaMaior(t2)), [lista(escalaMaior(t2).map((n, i) => (i === 2 ? nota(n.letra, n.pc - 1) : n))), lista(escalaMaior(t2).map((n, i) => (i === 6 ? nota(n.letra, n.pc - 1) : n))), lista(escalaMaior(t2).map((n, i) => (i === 3 ? nota(n.letra, n.pc + 1) : n)))], r, 'Siga T T S T T T S a partir da tônica.')
    ];
  },
  intervalos: (r) => {
    const t = pick(TONICAS, r), e = escalaMaior(t);
    const alvo = pick([[2, '3ª maior'], [3, '4ª justa'], [4, '5ª justa'], [5, '6ª maior'], [6, '7ª maior']], r);
    const sem = pick([['5ª justa', 7], ['3ª maior', 4], ['3ª menor', 3], ['4ª justa', 5], ['7ª menor', 10], ['oitava', 12]], r);
    return [
      pergunta('Quantos semitons tem uma ' + sem[0] + '?', String(sem[1]), ['3', '4', '5', '7', '10', '12'], r, 'Veja a tabela da lição.'),
      pergunta('Qual é o intervalo de ' + nomeNota(e[0]) + ' até ' + nomeNota(e[alvo[0]]) + '?', alvo[1], ['2ª maior', '3ª maior', '4ª justa', '5ª justa', '6ª maior', '7ª maior', '3ª menor'], r, 'Conte os graus da escala maior de ' + nomeNota(t) + '.'),
      pergunta('Qual é a 5ª justa de ' + nomeNota(t) + '?', nomeNota(e[4]), [nomeNota(e[3]), nomeNota(e[5]), nomeNota(e[2]), nomeNota(e[6])], r, 'A 5ª justa é o grau 5 da escala maior.'),
      pergunta('Qual é a diferença entre uma 3ª maior e uma 3ª menor?', 'Um semitom', ['Um tom', 'Dois semitons', 'Nenhuma, só o nome'], r)
    ];
  },
  acordes: (r) => {
    const t = pick(TONICAS, r), e = escalaMaior(t);
    const tm = pick(TONICAS, r);
    return [
      pergunta('Quais notas formam o acorde de ' + nomeNota(t) + ' maior?', lista(triadeDe(t, 'maior')), [lista(triadeDe(t, 'menor')), lista([e[0], e[3], e[4]]), lista([e[0], e[2], nota(e[4].letra, e[4].pc - 1)])], r, 'Tônica, 3ª maior e 5ª justa.'),
      pergunta('Qual é a única diferença entre um acorde maior e o menor da mesma tônica?', 'A terça fica um semitom mais baixa', ['A quinta fica um semitom mais baixa', 'A tônica muda', 'Todas as notas mudam'], r),
      pergunta('O que significa "' + cifraNota(tm) + 'm" numa cifra?', nomeNota(tm) + ' menor', [nomeNota(tm) + ' maior', nomeNota(tm) + ' diminuto', nomeNota(tm) + ' com sétima'], r),
      pergunta('Quantos semitons há da tônica à terça de um acorde menor?', '3', ['2', '4', '5'], r)
    ];
  },
  campo: (r) => {
    const t = pick(TONICAS, r), c = campoHarmonico(t);
    const idx = pick([[3, 'IV'], [4, 'V'], [5, 'vi'], [1, 'ii']], r);
    return [
      pergunta('Quais graus do campo harmônico maior são acordes menores?', 'ii, iii e vi', ['I, IV e V', 'I, ii e V', 'iii, IV e vii°'], r, 'I, IV e V são maiores; vii° é diminuto.'),
      pergunta('Em ' + nomeNota(t) + ' maior, qual é o acorde do grau ' + idx[1] + '?', c[idx[0]].cifra, c.filter((_, i) => i !== idx[0]).map((x) => x.cifra), r, 'Campo de ' + nomeNota(t) + ': ' + c.map((x) => x.cifra).join(' ')),
      pergunta('Em ' + nomeNota(t) + ' maior, qual é o acorde do grau V?', c[4].cifra, c.filter((_, i) => i !== 4).map((x) => x.cifra), r),
      pergunta('Em ' + nomeNota(t) + ' maior, a sequência I–V–vi–IV forma quais acordes?', [c[0], c[4], c[5], c[3]].map((x) => x.cifra).join(' '), [[c[0], c[3], c[4], c[5]], [c[0], c[1], c[4], c[3]], [c[0], c[5], c[4], c[3]]].map((l) => l.map((x) => x.cifra).join(' ')), r)
    ];
  },
  caged: (r) => [
    pergunta('Quantas formas de acorde formam o sistema CAGED?', '5', ['3', '4', '6', '7'], r, 'C, A, G, E e D.'),
    pergunta('A forma de A deslizada para a casa 3 (com pestana) toca qual acorde?', 'Dó maior', ['Lá maior', 'Mi maior', 'Sol maior'], r, 'Lá desliza 3 casas (Lá → Dó).'),
    pergunta('Em Dó maior, qual é a ordem das formas subindo pelo braço?', 'C A G E D', ['C G A E D', 'A C G E D', 'C A E G D'], r),
    pergunta('A forma de E aberta (0 2 2 1 0 0) toca qual acorde?', 'Mi maior', ['Lá maior', 'Ré maior', 'Dó maior'], r)
  ]
};
export function gerarQuiz(licaoId, r = Math.random) { return GERADORES[licaoId](r); }

// Notas (alturas) que o exercício de microfone pede, na ordem. Vale qualquer oitava.
export function sequenciaExercicio(licaoId, t, variante) {
  if (licaoId === 'escala') { const e = escalaMaior(t); return [...e, e[0]]; }
  if (licaoId === 'acordes' || licaoId === 'intervalos') return triadeDe(t, variante === 'menor' ? 'menor' : 'maior');
  if (licaoId === 'notas') return [t];
  return [];
}


// ============================================================================
// DICIONÁRIO DE ACORDES
//
// Por que isto é gerado e não digitado: são 12 fundamentais × 22 qualidades ×
// até 3 formas, quase 800 desenhos. Digitar isso à mão garante erro, e erro
// num dicionário é pior do que não ter dicionário — quem consulta aprende
// errado e não tem como desconfiar.
//
// Então a única coisa escrita à mão aqui são as FÓRMULAS: quais intervalos
// cada qualidade tem. São 22 linhas curtas, do tamanho que dá para conferir
// lendo. Todo o resto — inclusive as formas com pestana, que normalmente se
// digitam como "moldes" — sai de uma busca no braço.
//
// Tentei antes com moldes digitados e errei: escrevi os intervalos em semitons
// onde deviam ir casas do braço. O acorde "existia" e estava errado. A busca
// não tem como cometer esse erro, porque ela calcula a nota que cada casa
// produz em vez de confiar no que eu escrevi.
//
// E nada disso passa só pelo meu olho: scripts/conferir-acordes.mjs toca cada
// forma no papel, lista as notas que soam e compara com a fórmula.

// "f" é a fórmula em semitons a partir da fundamental.
export const QUALIDADES = [
  { id: 'maior', cifra: '', nome: 'Maior', f: [0, 4, 7] },
  { id: 'm', cifra: 'm', nome: 'Menor', f: [0, 3, 7] },
  { id: '7', cifra: '7', nome: 'Sétima (7)', f: [0, 4, 7, 10] },
  { id: '7M', cifra: '7M', nome: 'Sétima maior', f: [0, 4, 7, 11] },
  { id: 'm7', cifra: 'm7', nome: 'Menor com sétima', f: [0, 3, 7, 10] },
  { id: 'dim', cifra: 'dim', nome: 'Diminuto', f: [0, 3, 6] },
  { id: 'dim7', cifra: 'dim7', nome: 'Diminuto com sétima', f: [0, 3, 6, 9] },
  { id: 'm7b5', cifra: 'm7♭5', nome: 'Meio-diminuto', f: [0, 3, 6, 10] },
  { id: '7(9)', cifra: '7(9)', nome: 'Sétima com nona', f: [0, 4, 7, 10, 2] },
  { id: 'm7(9)', cifra: 'm7(9)', nome: 'Menor com sétima e nona', f: [0, 3, 7, 10, 2] },
  { id: '7M(9)', cifra: '7M(9)', nome: 'Sétima maior com nona', f: [0, 4, 7, 11, 2] },
  { id: '7(13)', cifra: '7(13)', nome: 'Sétima com treze', f: [0, 4, 7, 10, 9] },
  { id: '9', cifra: '9', nome: 'Maior com nona', f: [0, 4, 7, 2] },
  { id: '6(9)', cifra: '6(9)', nome: 'Sexta com nona', f: [0, 4, 7, 9, 2] },
  { id: '7(9-)', cifra: '7(9−)', nome: 'Sétima com nona menor', f: [0, 4, 7, 10, 1] },
  { id: '7(9+)', cifra: '7(9+)', nome: 'Sétima com nona aumentada', f: [0, 4, 7, 10, 3] },
  { id: 'm7(11)', cifra: 'm7(11)', nome: 'Menor com sétima e onze', f: [0, 3, 7, 10, 5] },
  { id: 'sus4', cifra: 'sus4', nome: 'Sus4', f: [0, 5, 7] },
  { id: 'sus2', cifra: 'sus2', nome: 'Sus2', f: [0, 2, 7] },
  { id: '5+', cifra: '5+', nome: 'Aumentado', f: [0, 4, 8] },
  { id: '6', cifra: '6', nome: 'Sexta', f: [0, 4, 7, 9] },
  { id: 'm6', cifra: 'm6', nome: 'Menor com sexta', f: [0, 3, 7, 9] }
];

// Altura de cada corda solta, da 6ª para a 1ª — a mesma ordem do desenho
// (js/musica/diagramas.js). Em js/braco.js a ordem é a inversa; é a confusão
// mais fácil de cometer neste código, por isso está dito aqui.
const SOLTAS_6A1 = [40, 45, 50, 55, 59, 64];
const mod12n = (n) => ((n % 12) + 12) % 12;

// As notas que uma forma realmente faz soar, em classes de altura (0 a 11).
// É isto que o conferidor compara com a fórmula — e é também o que impede uma
// forma inventada de passar despercebida.
export function soaComo(cordas) {
  const pcs = new Set();
  cordas.forEach((casa, k) => { if (casa >= 0) pcs.add(mod12n(SOLTAS_6A1[k] + casa)); });
  return [...pcs].sort((a, b) => a - b);
}

// Dedos: a casa mais baixa é o dedo 1, a seguinte o 2, e assim por diante.
// Com pestana, o dedo 1 deita na casa mais baixa e os outros começam do 2.
function dedilhar(cordas, pestana) {
  const casas = [...new Set(cordas.filter((c) => c > 0))].sort((a, b) => a - b);
  const mapa = new Map();
  let n = pestana ? 1 : 0;
  casas.forEach((c) => {
    if (pestana && c === pestana.casa) { mapa.set(c, 1); return; }
    mapa.set(c, Math.min(4, ++n));
  });
  return cordas.map((c) => (c <= 0 ? '' : String(mapa.get(c))));
}

// A BUSCA. Percorre as casas possíveis de cada corda dentro de uma janela de
// quatro casas e devolve as formas que (a) soam exatamente as notas do acorde,
// (b) têm a fundamental no baixo e (c) cabem numa mão.
//
// janela: primeira casa da janela (0 = posição aberta).
// cordaRaiz: em que corda a fundamental tem de estar (null = qualquer uma).
function buscar(formula, raizPc, janela, cordaRaiz) {
  const obrig = new Set(formula.map((i) => mod12n(raizPc + i)));
  // A QUINTA É OPCIONAL de quatro notas em diante. Não é atalho: é como se
  // toca. O Dó com sétima que todo mundo faz é x32310, que não tem Sol
  // nenhum, e o Dó com sexta é x32210, idem. A quinta justa é a nota que
  // menos define o acorde — tirar a terça ou a sétima mudaria o acorde, tirar
  // a quinta não. Exigindo-a, 18 dos 264 acordes ficavam sem forma alguma.
  // Em tríade ela continua obrigatória, porque ali ela é metade do acorde.
  // Acorde de quinta alterada (dim, m7♭5, 5+) não entra nisto: a fórmula
  // deles não tem o 7, tem 6 ou 8, e essa nota é justamente a que os define.
  const opcional = formula.length >= 4 ? mod12n(raizPc + 7) : null;
  if (opcional !== null) obrig.delete(opcional);
  const permitido = new Set(formula.map((i) => mod12n(raizPc + i)));

  const opcoes = [];
  for (let k = 0; k < 6; k++) {
    const o = [-1];
    // Corda solta só vale na posição aberta. Numa forma movível ela é o que
    // justamente a impede de ser movível: a solta não anda com a mão, e foi
    // por admiti-la que a busca propôs um "Dó" x35050 no lugar da pestana.
    if (janela === 0) o.push(0);
    for (let c = Math.max(janela, 1); c <= janela + 3; c++) o.push(c);
    opcoes.push(o.filter((c) => c < 0 || permitido.has(mod12n(SOLTAS_6A1[k] + c))));
  }

  const achadas = [];
  const atual = new Array(6);
  (function anda(k) {
    if (achadas.length > 400) return;
    if (k === 6) {
      const tocadas = [];
      atual.forEach((c, i) => { if (c >= 0) tocadas.push(i); });
      if (tocadas.length < 4) return;                       // menos de 4 cordas soa pobre
      // Sem corda muda no meio: x32010 vale, x3x010 não. Mutar no meio é
      // técnica de quem já toca, não de quem está consultando o acorde.
      if (tocadas[tocadas.length - 1] - tocadas[0] + 1 !== tocadas.length) return;
      if (cordaRaiz !== null && tocadas[0] !== cordaRaiz) return;
      if (mod12n(SOLTAS_6A1[tocadas[0]] + atual[tocadas[0]]) !== mod12n(raizPc)) return;
      const soando = new Set(soaComo(atual));
      for (const p of obrig) if (!soando.has(p)) return;     // não pode faltar nota
      const presas = atual.filter((c) => c > 0);
      if (!presas.length) { achadas.push({ cordas: atual.slice(), dedosN: 0, pestana: null }); return; }
      const min = Math.min(...presas), max = Math.max(...presas);
      if (max - min > 3) return;                             // mão humana: 4 casas
      // Pestana: a casa mais baixa repetida, sem corda solta entre as duas
      // pontas — não dá para deitar o dedo e deixar uma solta soando embaixo.
      const iMin = atual.indexOf(min), iMax = atual.lastIndexOf(min);
      const temSoltaNoMeio = atual.slice(iMin, iMax + 1).some((c) => c === 0);
      // A pestana é o dedo 1 DEITADO, e ele deita a partir da corda mais
      // grave que se toca — não no meio do braço. Sem esta regra a busca
      // propôs coisas como 10-7-7-7-7-10: pestana na casa 7 cobrindo as
      // cordas do meio e dois dedos na casa 10 nas duas pontas, contornando
      // o próprio indicador. Soa certo no papel e nenhuma mão faz.
      const pestana = (presas.filter((c) => c === min).length >= 2 && !temSoltaNoMeio && iMin === tocadas[0])
        ? { casa: min, de: 6 - iMax, ate: 6 - iMin } : null;
      // Quantos dedos a forma pede. Dois dedos NÃO compartilham uma casa:
      // ou há pestana, e aí um dedo deitado cobre todas as cordas daquela
      // casa, ou cada corda presa precisa do seu. Contar casas distintas em
      // vez de cordas presas foi o que fez a busca propor um Fá 1-0-3-2-1-1,
      // que pede cinco dedos e nenhuma mão tem.
      const dedos = pestana
        ? 1 + presas.filter((c) => c > min).length
        : presas.length;
      if (dedos > 4) return;
      achadas.push({ cordas: atual.slice(), dedosN: dedos, pestana });
      return;
    }
    for (const v of opcoes[k]) { atual[k] = v; anda(k + 1); }
  })(0);

  // Melhor primeiro: MAIS cordas tocadas, depois menos dedos, depois mais
  // cordas soltas. A ordem importa e eu tinha errado: pondo "menos dedos"
  // na frente, a busca escolhia um Sol 3-2-0-0-0-x, que poupa um dedo mudando
  // a 1ª corda, no lugar do Sol 3-2-0-0-0-3 que todo mundo toca. Acorde de
  // dicionário é o acorde cheio; economizar dedo é escolha de quem toca.
  const nCordas = (f) => f.cordas.filter((c) => c >= 0).length;
  const nSoltas = (f) => f.cordas.filter((c) => c === 0).length;
  // Corda solta ENTRE cordas presas é desempate contra, não a favor: ela
  // impede a pestana e obriga a mão a passar por cima dela. Foi assim que a
  // busca propôs um Lá# x-1-0-3-3-1 no lugar da pestana x-1-3-3-3-1 — mesmos
  // quatro dedos, só que um deles tem de pular a 4ª corda solta no meio.
  const soltaNoMeio = (f) => {
    const presas = [], soltas = [];
    f.cordas.forEach((c, i) => { if (c > 0) presas.push(i); else if (c === 0) soltas.push(i); });
    if (!presas.length) return 0;
    return soltas.some((i) => i > presas[0] && i < presas[presas.length - 1]) ? 1 : 0;
  };
  achadas.sort((a, b) => nCordas(b) - nCordas(a)
    || a.dedosN - b.dedosN
    || soltaNoMeio(a) - soltaNoMeio(b)
    || nSoltas(b) - nSoltas(a));
  return achadas;
}

function montar(f) {
  const presas = f.cordas.filter((c) => c > 0);
  const min = presas.length ? Math.min(...presas) : 0;
  // Acorde com corda solta é de posição aberta: o desenho mostra a pestana do
  // instrumento no alto, não um número de casa.
  const aberto = f.cordas.some((c) => c === 0) || min <= 1;
  return {
    cordas: f.cordas,
    casaInicial: aberto ? 0 : min,
    pestana: f.pestana,
    dedos: dedilhar(f.cordas, f.pestana),
    tipo: f.pestana ? 'Com pestana' : 'Sem pestana',
    casaBase: min
  };
}

// As formas de um acorde, da mais fácil para a mais difícil, no máximo 3:
// a de posição aberta (quando existe), a de fundamental na 5ª corda e a de
// fundamental na 6ª — que são as duas formas movíveis tradicionais.
export function formasDoAcorde(raizPc, qualidadeId) {
  const q = QUALIDADES.find((x) => x.id === qualidadeId);
  if (!q) return [];
  const raiz = mod12n(raizPc);
  const saida = [];
  const vistas = new Set();
  const juntar = (lista, quantas) => {
    lista.slice(0, quantas).forEach((f) => {
      const chave = f.cordas.join(',');
      if (vistas.has(chave)) return;
      vistas.add(chave);
      saida.push(montar(f));
    });
  };
  juntar(buscar(q.f, raiz, 0, null), 1);                       // posição aberta
  [[1, 45], [0, 40]].forEach(([corda, solta]) => {             // 5ª corda, depois 6ª
    let casa = mod12n(raiz - solta);
    if (casa === 0) casa = 12;                                 // a casa 0 já é a aberta
    if (casa <= 12) juntar(buscar(q.f, raiz, casa, corda), 1);
  });
  // Reserva. Dezessete acordes — quase todos de nona, sexta com nona e sétima
  // maior com nona — não têm forma na posição aberta nem com a fundamental na
  // 5ª ou na 6ª corda: as notas simplesmente não caem juntas em quatro casas.
  // Em vez de mostrar a folha com buracos, procuro no braço inteiro. O que
  // sai daqui não é uma das formas tradicionais, e por isso vem marcado
  // "Posição alta" — quem consulta merece saber que está vendo outra coisa.
  if (!saida.length) {
    const todas = [];
    for (let j = 0; j <= 11; j++) buscar(q.f, raiz, j, null).slice(0, 3).forEach((f) => todas.push(f));
    todas.sort((a, b) => b.cordas.filter((c) => c >= 0).length - a.cordas.filter((c) => c >= 0).length
      || a.dedosN - b.dedosN
      || Math.min(...a.cordas.filter((c) => c > 0).concat([99])) - Math.min(...b.cordas.filter((c) => c > 0).concat([99])));
    todas.slice(0, 6).forEach((f) => {
      const chave = f.cordas.join(',');
      if (vistas.has(chave) || saida.length >= 2) return;
      vistas.add(chave);
      const m = montar(f);
      saida.push({ ...m, tipo: m.casaBase >= 5 ? 'Posição alta' : m.tipo });
    });
  }
  saida.sort((a, b) => a.casaBase - b.casaBase);
  const tres = saida.slice(0, 3);
  if (tres.length) tres[0] = { ...tres[0], tipo: 'Principal' };
  return tres;
}
