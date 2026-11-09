// Motor de progresso do curso (sem tela).
//
// Regras que valem para o curso inteiro:
//  - Cada aula tem um estado: 'nova', 'em-andamento', 'estudada' ou 'dominada'.
//  - "Estudada" significa que o aluno leu a aula até o fim.
//  - "Dominada" exige mais: passar no questionário E confirmar o critério prático.
//    É isso que impede o app de considerar uma habilidade conquistada só porque
//    o aluno clicou em "concluir".
//  - Uma aula só libera quando os pré-requisitos dela estão, no mínimo, estudados.
//  - O percentual de um módulo e de um nível conta as aulas DOMINADAS.

import { Progresso, Avaliacoes } from '../db.js';

export const ESTADOS = {
  nova: { nome: 'não iniciada', ordem: 0, sinal: '○' },
  'em-andamento': { nome: 'em andamento', ordem: 1, sinal: '◐' },
  estudada: { nome: 'estudada', ordem: 2, sinal: '◑' },
  dominada: { nome: 'dominada', ordem: 3, sinal: '●' }
};

// Nota mínima do questionário para considerar a aula dominada.
export const NOTA_MINIMA = 0.75;

export function estadoDaFicha(ficha) {
  if (!ficha) return 'nova';
  if (ficha.dominada) return 'dominada';
  if (ficha.estudada) return 'estudada';
  if (ficha.visitas) return 'em-andamento';
  return 'nova';
}

export function estrelasDaFicha(ficha) {
  const q = ficha && ficha.quiz;
  if (!q || !q.total) return 0;
  const a = q.acertos / q.total;
  return a >= 0.9 ? 3 : a >= 0.75 ? 2 : a >= 0.5 ? 1 : 0;
}

// Lê de uma vez a ficha de todas as aulas (uma leitura só no banco).
export async function carregarFichas() {
  return await Progresso.todos();
}

// Marca que o aluno abriu a aula.
export async function registrarVisita(id) {
  const f = (await Progresso.obter(id)) || {};
  return Progresso.mesclar(id, { visitas: (f.visitas || 0) + 1, ultimaEm: new Date().toISOString() });
}

// Marca que o aluno chegou ao fim do conteúdo.
export async function marcarEstudada(id) {
  return Progresso.mesclar(id, { estudada: true });
}

// Guarda o resultado do questionário e recalcula se a aula ficou dominada.
export async function registrarQuiz(id, titulo, acertos, total) {
  const f = (await Progresso.obter(id)) || {};
  const antes = f.quiz || { acertos: 0, total: 0 };
  const melhor = (acertos / (total || 1)) > (antes.acertos / (antes.total || 1)) ? { acertos, total } : antes;
  const nova = await Progresso.mesclar(id, {
    estudada: true,
    quiz: { ...melhor, em: new Date().toISOString() },
    dominada: !!(f.autoavaliacao && (melhor.acertos / (melhor.total || 1)) >= NOTA_MINIMA)
  });
  await Avaliacoes.registrar({ tipo: 'questionario', alvo: id, titulo, acertos, total });
  return nova;
}

// Autoavaliação prática orientada: o aluno confirma, item por item, que consegue executar.
// O app não finge que ouviu a execução: ou o microfone confirmou as notas, ou é o aluno
// quem declara, com critérios claros na frente.
export async function registrarAutoavaliacao(id, itens, aprovado) {
  const f = (await Progresso.obter(id)) || {};
  const q = f.quiz || { acertos: 0, total: 0 };
  const passouNoQuiz = q.total > 0 && (q.acertos / q.total) >= NOTA_MINIMA;
  const nova = await Progresso.mesclar(id, {
    autoavaliacao: aprovado ? { itens, em: new Date().toISOString() } : null,
    dominada: !!(aprovado && passouNoQuiz)
  });
  await Avaliacoes.registrar({ tipo: 'pratica', alvo: id, titulo: 'Avaliação prática', acertos: aprovado ? 1 : 0, total: 1 });
  return nova;
}

// Uma aula está liberada quando todos os pré-requisitos já foram estudados.
export function liberada(aula, fichas) {
  if (!aula.prereq || !aula.prereq.length) return true;
  return aula.prereq.every((id) => {
    const e = estadoDaFicha(fichas[id]);
    return e === 'estudada' || e === 'dominada';
  });
}
export function prereqFaltando(aula, fichas) {
  return (aula.prereq || []).filter((id) => {
    const e = estadoDaFicha(fichas[id]);
    return e !== 'estudada' && e !== 'dominada';
  });
}

// Percentuais.
export function progressoDoModulo(modulo, fichas) {
  const aulas = modulo.aulas || [];
  if (!aulas.length) return { dominadas: 0, estudadas: 0, total: 0, pct: 0 };
  let dom = 0, est = 0;
  aulas.forEach((a) => {
    const e = estadoDaFicha(fichas[a.id]);
    if (e === 'dominada') { dom++; est++; } else if (e === 'estudada') est++;
  });
  return { dominadas: dom, estudadas: est, total: aulas.length, pct: Math.round((dom / aulas.length) * 100) };
}

export function progressoDoNivel(nivel, fichas) {
  const mods = nivel.modulos || [];
  const soma = mods.reduce((a, m) => {
    const p = progressoDoModulo(m, fichas);
    return { dominadas: a.dominadas + p.dominadas, estudadas: a.estudadas + p.estudadas, total: a.total + p.total };
  }, { dominadas: 0, estudadas: 0, total: 0 });
  return { ...soma, pct: soma.total ? Math.round((soma.dominadas / soma.total) * 100) : 0 };
}

// Próxima aula recomendada: a primeira liberada que ainda não está dominada.
export function proximaAula(niveis, fichas) {
  for (const n of niveis) {
    for (const m of n.modulos || []) {
      for (const a of m.aulas || []) {
        const e = estadoDaFicha(fichas[a.id]);
        if (e !== 'dominada' && liberada(a, fichas)) return { nivel: n, modulo: m, aula: a, estado: e };
      }
    }
  }
  return null;
}

// Blocos que só existem numa aula em que você pega o violão.
const BLOCOS_COM_VIOLAO = new Set(['tocar', 'tab', 'violao', 'mao', 'postura', 'braco', 'acorde']);

// A aula é de pegar o violão, ou é de papel e lápis?
export function pedeViolao(aula) {
  return (aula.blocos || []).some((b) => BLOCOS_COM_VIOLAO.has(b.t));
}

// A próxima aula liberada em que você toca.
//
// Por que isto existe: os pré-requisitos do curso NÃO são lineares — em boa
// parte do curso dá para seguir pela teoria ou pela prática, na ordem que você
// quiser. Mas a lista do currículo tem uma ordem, e "proximaAula" segue ela:
// no nível 1, isso põe oito aulas seguidas de leitura (quase duas horas) entre
// você e o módulo em que se toca, mesmo essas aulas não sendo exigidas.
// Para quem estuda sozinho, é assim que a vontade acaba. Então, quando a
// próxima aula é de papel, a tela inicial também oferece a próxima em que se
// toca — as duas estão liberadas, e a escolha é sua.
export function proximaPratica(niveis, fichas) {
  for (const n of niveis) {
    for (const m of n.modulos || []) {
      for (const a of m.aulas || []) {
        const e = estadoDaFicha(fichas[a.id]);
        if (e !== 'dominada' && pedeViolao(a) && liberada(a, fichas)) {
          return { nivel: n, modulo: m, aula: a, estado: e };
        }
      }
    }
  }
  return null;
}

// Pontos fracos: aulas estudadas cujo questionário ficou abaixo da nota mínima,
// e aulas dominadas há muito tempo que merecem revisão.
export function pontosFracos(niveis, fichas, limite = 5) {
  const r = [];
  niveis.forEach((n) => (n.modulos || []).forEach((m) => (m.aulas || []).forEach((a) => {
    const f = fichas[a.id];
    if (!f || !f.quiz || !f.quiz.total) return;
    const nota = f.quiz.acertos / f.quiz.total;
    if (nota < NOTA_MINIMA) r.push({ aula: a, modulo: m, nivel: n, nota, motivo: 'questionário abaixo de ' + Math.round(NOTA_MINIMA * 100) + '%' });
  })));
  return r.sort((a, b) => a.nota - b.nota).slice(0, limite);
}

// Conta quantas aulas de cada disciplina já foram dominadas.
export function porDisciplina(niveis, fichas) {
  const mapa = {};
  niveis.forEach((n) => (n.modulos || []).forEach((m) => (m.aulas || []).forEach((a) => {
    (a.disciplinas || []).forEach((d) => {
      if (!mapa[d]) mapa[d] = { total: 0, dominadas: 0, estudadas: 0 };
      mapa[d].total++;
      const e = estadoDaFicha(fichas[a.id]);
      if (e === 'dominada') { mapa[d].dominadas++; mapa[d].estudadas++; }
      else if (e === 'estudada') mapa[d].estudadas++;
    });
  })));
  return mapa;
}
