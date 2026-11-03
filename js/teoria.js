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
