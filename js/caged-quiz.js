// Perguntas do CAGED (sem tela). Cada pergunta: { texto, opcoes, correta, explicacao, desenho? }.
// "desenho" diz qual acorde mostrar no braço: { id, tonica, qual, escondeNome }.
import { ORDEM_CAGED, NOMES_TONICA, CORDA_DA_RAIZ, formaNaTonalidade, ordemNoBraco, nomeAcorde, formasDisponiveis, QUALIDADES } from './caged.js';

const pick = (l, r) => l[Math.floor(r() * l.length)];
function embaralhar(l, r) { const a = [...l]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function montar(texto, correta, erradas, r, explicacao = '', desenho = null, max = 4) {
  const unicas = [...new Set(erradas.map(String).filter((x) => x !== String(correta)))];
  const opcoes = embaralhar([String(correta), ...embaralhar(unicas, r).slice(0, max - 1)], r);
  return { texto, opcoes, correta: opcoes.indexOf(String(correta)), explicacao, desenho };
}
const nomeT = (pc) => NOMES_TONICA[pc];
const cordaTxt = (c) => c + 'ª corda';

const TIPOS = {
  forma: (r) => {
    const id = pick(ORDEM_CAGED, r), t = Math.floor(r() * 12);
    const f = formaNaTonalidade(id, t);
    return montar('De qual forma (C, A, G, E ou D) é este desenho? Ele toca ' + nomeAcorde(t) + '.', id, ORDEM_CAGED, r,
      'A forma de ' + id + (f.k ? ' deslizada ' + f.k + ' casa(s)' : ' aberta') + ' toca ' + nomeAcorde(t) + '.', { id, tonica: t, qual: 'maior' }, 5);
  },
  acorde: (r) => {
    const id = pick(ORDEM_CAGED, r), k = 1 + Math.floor(r() * 11);
    const t = (({ C: 0, A: 9, G: 7, E: 4, D: 2 })[id] + k) % 12;
    return montar('A forma de ' + id + ', deslizada ' + k + ' casa(s) para cima, toca qual acorde maior?', nomeT(t), NOMES_TONICA.filter((n) => n !== nomeT(t)), r,
      'A raiz da forma de ' + id + ' é ' + nomeT(({ C: 0, A: 9, G: 7, E: 4, D: 2 })[id]) + '. Subindo ' + k + ' semitons chegamos em ' + nomeT(t) + '.', { id, tonica: t, qual: 'maior', escondeNome: true });
  },
  casa: (r) => {
    const id = pick(ORDEM_CAGED, r), t = Math.floor(r() * 12);
    const k = formaNaTonalidade(id, t).k;
    const outras = [...new Set([k + 1, k + 2, k + 3, k - 1, k - 2, k + 5, k + 7].map((x) => ((x % 12) + 12) % 12))].filter((x) => x !== k);
    return montar('Para tocar ' + nomeAcorde(t) + ' com a forma de ' + id + ', em qual casa a forma deve ficar? (0 = aberta)', String(k), outras.map(String), r,
      'Conte quantos semitons existem da raiz da forma de ' + id + ' até ' + nomeT(t) + ': ' + k + '.');
  },
  raiz: (r) => {
    const id = pick(ORDEM_CAGED, r);
    return montar('Na forma de ' + id + ', em qual corda fica a nota raiz (a que dá nome ao acorde)?', cordaTxt(CORDA_DA_RAIZ[id]), ['3ª corda', '4ª corda', '5ª corda', '6ª corda', '2ª corda'].map((x) => x), r,
      'Raiz da forma de C e de A: 5ª corda. Forma de G e de E: 6ª corda. Forma de D: 4ª corda.', { id, tonica: ({ C: 0, A: 9, G: 7, E: 4, D: 2 })[id], qual: 'maior' });
  },
  ordem: (r) => {
    const t = Math.floor(r() * 12);
    const ord = ordemNoBraco(t).map((f) => f.id);
    const i = Math.floor(r() * 5);
    const prox = ord[(i + 1) % 5];
    return montar('Em ' + nomeAcorde(t) + ', qual forma vem logo depois da forma de ' + ord[i] + ', subindo pelo braço?', prox, ORDEM_CAGED.filter((x) => x !== prox && x !== ord[i]), r,
      'Em ' + nomeT(t) + ' a ordem subindo é ' + ord.join(' → ') + ' e depois recomeça.');
  },
  menor: (r) => {
    const pergs = [
      montar('Qual nota muda quando o acorde maior vira menor?', 'A terça (desce um semitom)', ['A tônica (raiz)', 'A quinta', 'Todas as notas'], r, 'Maior: 1-3-5. Menor: 1-♭3-5.'),
      montar('Quais formas de acorde menor existem abertas no CAGED?', 'E, A e D', ['C, A e G', 'G, E e D', 'Todas as cinco'], r, 'Em, Am e Dm. As formas de C e de G em menor são pouco usadas.'),
      montar('A forma de Am (x02210) deslizada 3 casas toca qual acorde?', 'Dó menor', ['Dó maior', 'Lá menor', 'Ré menor'], r, 'Lá + 3 semitons = Dó.')
    ];
    return pick(pergs, r);
  },
  setima: (r) => {
    const pergs = [
      montar('Qual nota o acorde com sétima (dominante) tem a mais que o acorde maior?', 'A sétima menor (♭7)', ['A segunda', 'A quarta', 'A sexta maior'], r, 'Dominante: 1-3-5-♭7.'),
      montar('O acorde "G7" é...', 'Sol com sétima', ['Sol menor', 'Sol maior com sétima maior', 'Sol com a 7ª corda'], r),
      montar('Qual a diferença entre C7 e Cmaj7?', 'O C7 tem sétima menor (Si♭); o Cmaj7 tem sétima maior (Si)', ['Nenhuma', 'O Cmaj7 é menor', 'O C7 tem seis notas'], r)
    ];
    return pick(pergs, r);
  },
  escala: (r) => {
    const pergs = [
      montar('O que é uma "caixa" de escala no CAGED?', 'A região do braço, em volta de uma forma de acorde, onde cabem as notas da escala', ['Uma capa para o violão', 'Um acorde com 7 notas', 'A afinação do violão'], r),
      montar('A pentatônica tem quantas notas por oitava?', '5', ['4', '6', '7'], r, 'Penta = cinco.'),
      montar('A pentatônica menor de Lá usa as mesmas notas da pentatônica maior de...', 'Dó', ['Mi', 'Sol', 'Ré'], r, 'Lá menor é o relativo de Dó maior.')
    ];
    return pick(pergs, r);
  },
  conceito: (r) => {
    const pergs = [
      montar('CAGED é...', 'o nome das cinco formas de acorde abertas: C, A, G, E e D', ['uma marca de violão', 'uma afinação alternativa', 'um tipo de pestana'], r),
      montar('Por que deslizar uma forma exige pestana?', 'Porque as cordas soltas viram notas fretadas, e o dedo 1 precisa substituir a pestana', ['Para deixar o violão mais afinado', 'Porque o braço fica mais curto', 'Não exige nada'], r),
      montar('Quantas posições diferentes um acorde maior tem no CAGED?', '5', ['3', '7', '12'], r, 'Uma por forma: C, A, G, E e D.'),
      montar('Depois da forma de D, a sequência volta para...', 'a forma de C, 12 casas acima', ['a forma de A', 'a forma de E', 'não volta'], r)
    ];
    return pick(pergs, r);
  }
};
export const NOMES_TIPOS = Object.keys(TIPOS);
export function gerarPerguntaCaged(tipo, r = Math.random) { return TIPOS[tipo](r); }
export function gerarPerguntasCaged(tipos, n, r = Math.random) {
  const out = [], vistos = new Set();
  let guarda = 0;
  while (out.length < n && guarda++ < 200) {
    const q = TIPOS[tipos[out.length % tipos.length]](r);
    const chave = q.texto;
    if (vistos.has(chave)) continue;
    vistos.add(chave); out.push(q);
  }
  return out;
}
