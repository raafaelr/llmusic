// Contas dos hábitos (sem tela): sequência de dias, calendário do mês, totais.
// "pratica" é um objeto { "2026-11-04": segundos, ... } e "meta" é a meta diária em minutos.

const pad = (n) => String(n).padStart(2, '0');
export function isoDe(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
export function dataDe(iso) { const [a, m, d] = iso.split('-').map(Number); return new Date(a, m - 1, d, 12); }   // meio-dia: evita problemas de horário de verão
export function somarDias(iso, n) { const d = dataDe(iso); d.setDate(d.getDate() + n); return isoDe(d); }

export function bateuMeta(pratica, dia, metaMin) { return (pratica[dia] || 0) >= metaMin * 60; }

// Sequência atual: dias seguidos com a meta batida. Se hoje ainda não bateu, a sequência
// continua viva (conta até ontem), porque o dia ainda não acabou.
export function sequenciaAtual(pratica, metaMin, hoje) {
  let dia = bateuMeta(pratica, hoje, metaMin) ? hoje : somarDias(hoje, -1);
  let n = 0;
  while (bateuMeta(pratica, dia, metaMin)) { n++; dia = somarDias(dia, -1); }
  return n;
}

export function melhorSequencia(pratica, metaMin) {
  const dias = Object.keys(pratica).filter((d) => bateuMeta(pratica, d, metaMin)).sort();
  let melhor = 0, atual = 0, ant = null;
  for (const d of dias) {
    atual = ant && somarDias(ant, 1) === d ? atual + 1 : 1;
    if (atual > melhor) melhor = atual;
    ant = d;
  }
  return melhor;
}

// Células do calendário de um mês (semana começando no domingo). null = espaço vazio.
export function diasDoMes(ano, mes) {
  const primeiro = new Date(ano, mes, 1, 12);
  const n = new Date(ano, mes + 1, 0, 12).getDate();
  const r = Array(primeiro.getDay()).fill(null);
  for (let d = 1; d <= n; d++) r.push(isoDe(new Date(ano, mes, d, 12)));
  return r;
}

export function totalSegundos(pratica) { return Object.values(pratica).reduce((a, b) => a + (b || 0), 0); }

// Segundos praticados nos últimos 7 dias (incluindo hoje).
export function semana(pratica, hoje) {
  let t = 0;
  for (let i = 0; i < 7; i++) t += pratica[somarDias(hoje, -i)] || 0;
  return t;
}

// Nível da cor do dia: 0 nada, 1 alguma prática, 2 quase a meta, 3 meta batida.
export function nivelDoDia(seg, metaMin) {
  if (!seg) return 0;
  if (seg >= metaMin * 60) return 3;
  return seg >= metaMin * 30 ? 2 : 1;
}
