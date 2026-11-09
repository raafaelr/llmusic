// ACOMPANHAMENTO POR HABILIDADE
//
// O curso mede aulas. Mas ninguém toca "aulas": toca pestana, arpejo, leitura.
// Este arquivo agrupa o que o app já sabe em 17 habilidades, e diz, para cada
// uma, em que pé ela está e quando ela precisa de revisão.
//
// DE ONDE VEM CADA ESTADO — isto é o mais importante aqui:
//
//  - MEDIDO: sai de coisa que aconteceu de verdade e está no banco. Aulas
//    dominadas (quiz acima da nota mínima) nas disciplinas da habilidade, e
//    exercícios praticados nas técnicas dela, com as datas reais.
//  - AUTOAVALIADO: você mesmo disse. Vale mais que o medido quando existe,
//    porque você é quem está com o violão na mão — mas aparece rotulado como
//    autoavaliação, nunca como medição.
//
// O app NÃO escuta você tocar e NÃO infere qualidade de execução de lugar
// nenhum. Onde não há evidência, o estado é "não iniciado" e está dito.
//
// A REVISÃO usa repetição espaçada: quanto mais firme a habilidade, maior o
// intervalo até ela precisar de ar de novo. Quem estuda sozinho esquece o que
// não volta, e é isso que o papel não faz por você.
import { Config } from '../db.js';

export const ESTADOS = {
  'nao-iniciado': { nome: 'Não iniciado', ordem: 0, sinal: '○', dias: null },
  'em-aprendizado': { nome: 'Em aprendizado', ordem: 1, sinal: '◔', dias: 2 },
  'em-desenvolvimento': { nome: 'Em desenvolvimento', ordem: 2, sinal: '◑', dias: 6 },
  'revisao': { nome: 'Precisa de revisão', ordem: 3, sinal: '⟳', dias: 0 },
  'dominado': { nome: 'Dominado', ordem: 4, sinal: '●', dias: 21 }
};

// A ordem em que o estudante escolhe o próprio estado (revisão não se escolhe:
// ela é calculada pelo tempo).
export const ESTADOS_ESCOLHIVEIS = ['nao-iniciado', 'em-aprendizado', 'em-desenvolvimento', 'dominado'];

export const HABILIDADES = [
  { id: 'postura', nome: 'Postura e relaxamento', o_que: 'Sentar, segurar e mover-se sem tensão.', disciplinas: ['postura'], tecnicas: [] },
  { id: 'mao-direita', nome: 'Mão direita', o_que: 'Apoyando, tirando, abafamento e qualidade de som.', disciplinas: [], tecnicas: ['apoyando', 'tirando', 'abafamento'] },
  { id: 'arpejos', nome: 'Arpejos', o_que: 'Fórmulas de arpejo e tremolo, com regularidade.', disciplinas: [], tecnicas: ['arpejos', 'tremolo'] },
  { id: 'escalas', nome: 'Escalas', o_que: 'Escalas e cromáticas, com os dois lados juntos.', disciplinas: [], tecnicas: ['escalas', 'cromaticas'] },
  { id: 'ligados', nome: 'Ligados', o_que: 'Martelo e arrancado, ascendente e descendente.', disciplinas: [], tecnicas: ['ligado-asc', 'ligado-desc'] },
  { id: 'pestana', nome: 'Pestana', o_que: 'Pestana inteira e meia-pestana sem apagar notas.', disciplinas: [], tecnicas: ['pestana', 'meia-pestana'] },
  { id: 'mudancas', nome: 'Mudanças de posição', o_que: 'Trocar de posição no tempo, sem ruído de corda.', disciplinas: [], tecnicas: ['mudanca', 'saltos'] },
  { id: 'harmonicos', nome: 'Harmônicos', o_que: 'Naturais e artificiais, com ataque limpo.', disciplinas: [], tecnicas: ['harm-naturais', 'harm-artificiais'] },
  { id: 'expressao', nome: 'Dinâmica e timbre', o_que: 'Tocar piano e forte de verdade, e mudar a cor do som.', disciplinas: ['interpretacao'], tecnicas: ['dinamica', 'timbre', 'vibrato', 'glissando', 'portamento'] },
  { id: 'polifonia', nome: 'Vozes independentes', o_que: 'Melodia e baixo soando como duas pessoas diferentes.', disciplinas: ['contraponto'], tecnicas: ['vozes'] },
  { id: 'leitura', nome: 'Leitura musical', o_que: 'Ler a partitura e achar a nota no braço.', disciplinas: ['leitura'], tecnicas: [] },
  { id: 'primeira-vista', nome: 'Primeira vista', o_que: 'Tocar algo que você nunca viu, sem parar.', disciplinas: [], tecnicas: ['primeira-vista'] },
  { id: 'ritmo', nome: 'Ritmo e pulso', o_que: 'Manter a pulsação e ler figuras no tempo.', disciplinas: ['teoria'], tecnicas: [] },
  { id: 'harmonia', nome: 'Harmonia', o_que: 'Como os acordes se formam e se encadeiam.', disciplinas: ['harmonia'], tecnicas: [] },
  { id: 'percepcao', nome: 'Ouvido e solfejo', o_que: 'Reconhecer de ouvido e cantar o que está escrito.', disciplinas: ['percepcao', 'solfejo'], tecnicas: [] },
  { id: 'memoria', nome: 'Memorização', o_que: 'Tocar sem a partitura, com segurança.', disciplinas: [], tecnicas: ['memorizacao'] },
  { id: 'repertorio', nome: 'Repertório', o_que: 'Peças levadas até o fim, em condições de tocar para alguém.', disciplinas: ['repertorio'], tecnicas: [] }
];

export const habilidadePorId = (id) => HABILIDADES.find((h) => h.id === id) || null;

const C_ESTADO = 'habilidades.estado';
const DIA = 86400000;

export const autoavaliacoes = () => Config.obter(C_ESTADO, {});

export async function marcarHabilidade(id, estado) {
  const todas = await Config.obter(C_ESTADO, {});
  if (!estado || estado === 'nao-iniciado') delete todas[id];
  else todas[id] = { estado, em: new Date().toISOString() };
  await Config.guardar(C_ESTADO, todas);
  return todas;
}

function diasDesde(iso) {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return null;
  return Math.floor((Date.now() - t) / DIA);
}

// Junta a evidência real de uma habilidade: aulas dominadas nas disciplinas
// dela e exercícios praticados nas técnicas dela, com a data mais recente.
function evidenciaDe(hab, aulas, fichas, regExerc, exercicios) {
  const disc = new Set(hab.disciplinas);
  const tec = new Set(hab.tecnicas);

  let totalAulas = 0, dominadas = 0, estudadas = 0;
  let ultima = null;
  const guardarData = (iso) => { if (iso && (!ultima || iso > ultima)) ultima = iso; };

  if (disc.size) {
    for (const a of aulas) {
      if (!(a.disciplinas || []).some((d) => disc.has(d))) continue;
      totalAulas++;
      const f = fichas[a.id];
      if (!f) continue;
      if (f.dominada) { dominadas++; guardarData(f.em || f.ultimaEm); }
      else if (f.estudada || f.visitas) { estudadas++; guardarData(f.ultimaEm || f.em); }
    }
  }

  let totalExerc = 0, feitos = 0, vezes = 0;
  if (tec.size) {
    for (const e of exercicios) {
      if (!(e.tecnicas || []).some((t) => tec.has(t))) continue;
      totalExerc++;
      const r = regExerc[e.id];
      if (r && r.vezes) { feitos++; vezes += r.vezes; guardarData(r.ultimo); }
    }
  }

  return { totalAulas, dominadas, estudadas, totalExerc, feitos, vezes, ultima };
}

// O estado medido: só do que aconteceu. Sem evidência, "não iniciado".
function estadoMedido(ev) {
  const base = ev.totalAulas + ev.totalExerc;
  if (!base) return null;                      // nada mapeado: não dá para medir
  const feito = ev.dominadas + ev.feitos;
  if (!feito && !ev.estudadas) return 'nao-iniciado';
  const prop = feito / base;
  if (prop >= 0.8) return 'dominado';
  if (prop >= 0.35) return 'em-desenvolvimento';
  return 'em-aprendizado';
}

// O quadro de uma habilidade: estado, de onde ele veio, e se está na hora
// de revisar.
export function quadroDaHabilidade(hab, dados) {
  const ev = evidenciaDe(hab, dados.aulas, dados.fichas, dados.regExerc, dados.exercicios);
  const medido = estadoMedido(ev);
  const auto = dados.autos[hab.id];

  let estado = auto ? auto.estado : (medido || 'nao-iniciado');
  const origem = auto ? 'autoavaliado' : (medido ? 'medido' : 'sem-dados');

  // A data que conta para a revisão é a mais recente entre o que você fez e
  // o que você declarou.
  const datas = [ev.ultima, auto && auto.em].filter(Boolean).sort();
  const ultima = datas.length ? datas[datas.length - 1] : null;
  const dias = diasDesde(ultima);

  const prazo = ESTADOS[estado] ? ESTADOS[estado].dias : null;
  let precisaRevisar = false;
  if (estado !== 'nao-iniciado' && prazo !== null && dias !== null && dias > prazo) {
    precisaRevisar = true;
  }

  return {
    hab,
    estado: precisaRevisar ? 'revisao' : estado,
    estadoBase: estado,
    origem,
    evidencia: ev,
    ultima,
    dias,
    prazo,
    diasAteRevisar: (prazo === null || dias === null) ? null : prazo - dias
  };
}

export function quadroGeral(dados) {
  return HABILIDADES.map((h) => quadroDaHabilidade(h, dados));
}
