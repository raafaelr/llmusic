// Importa partituras de Guitar Pro (.gp3 .gp4 .gp5 .gpx .gp), MusicXML (.xml .musicxml .mxl) e AlphaTex (.tex)
// usando a biblioteca AlphaTab (guardada em js/vendor, funciona sem internet).
// A parte pesada (ler o arquivo) é da AlphaTab; aqui só convertemos o resultado para o formato de peça do LLMusic.
import { CORDAS_SOLTAS } from '../pecas.js';

const arred = (x) => Math.round(x * 10000) / 10000;
const PADRAO = [76, 71, 67, 62, 57, 52];   // afinação padrão, da 1ª corda (aguda) para a 6ª, uma oitava acima do som (como o AlphaTab guarda)

export async function lerPartitura(bytes, nomeArquivo = '') {
  const at = await import('../vendor/alphaTab.core.min.mjs');
  const cfg = new at.Settings();
  if (/\.(tex|alphatex)$/i.test(nomeArquivo)) {
    const imp = new at.importer.AlphaTexImporter();
    imp.initFromString(new TextDecoder().decode(bytes), cfg);
    return imp.readScore();
  }
  return at.importer.ScoreLoader.loadScoreFromBytes(bytes, cfg);
}

// Lista as faixas que dá para tocar (violão de 6 cordas, sem bateria).
export function faixasTocaveis(score) {
  const r = [];
  score.tracks.forEach((t, i) => {
    const st = t.staves && t.staves[0];
    if (!st || st.isPercussion || !st.tuning || st.tuning.length !== 6) return;
    if (!st.bars.some((b) => b.voices.some((v) => v.beats.some((bt) => bt.notes.length)))) return;
    r.push({ indice: i, nome: t.name || 'Faixa ' + (i + 1) });
  });
  return r;
}

// Converte uma faixa em peça. Devolve { peca, avisos }.
export function faixaParaPeca(score, indice, { id, titulo } = {}) {
  const avisos = [];
  const track = score.tracks[indice];
  const staff = track.staves[0];
  const afinPadrao = staff.tuning.every((m, i) => m === PADRAO[i] || m === PADRAO[i] - 12);
  const baseAfin = staff.tuning[0] >= 76 ? 0 : -12;
  if (!afinPadrao) avisos.push('Esta faixa usa afinação diferente do violão normal; ajustei as casas para a afinação padrão (as notas continuam as mesmas).');
  if (staff.capo) avisos.push('Esta faixa usa capotraste na casa ' + staff.capo + '; o som foi mantido, mas as casas aparecem como no arquivo.');

  const barras = staff.bars;
  const mestre = barras.map((b) => b.masterBar);
  // ordem de execução, desdobrando repetições simples
  const ordem = [];
  let iniRep = 0;
  for (let i = 0; i < barras.length; i++) {
    const mb = mestre[i];
    if (mb.isRepeatStart) iniRep = i;
    ordem.push(i);
    if (mb.isRepeatEnd && mb.repeatCount > 1) {
      for (let r = 1; r < Math.min(mb.repeatCount, 4); r++) for (let k = iniRep; k <= i; k++) ordem.push(k);
      avisos.push('Repetições foram escritas por extenso.');
    }
  }
  let ordemUsada = ordem;
  if (ordem.length > 400) { ordemUsada = ordem.slice(0, 400); avisos.push('A peça tem mais de 400 compassos; guardei só os 400 primeiros.'); }

  const sig0 = [mestre[0].timeSignatureNumerator, mestre[0].timeSignatureDenominator];
  const compassos = [];
  let mudouCompasso = false;
  for (const bi of ordemUsada) {
    const bar = barras[bi], mb = mestre[bi];
    const num = mb.timeSignatureNumerator, den = mb.timeSignatureDenominator;
    if (num !== sig0[0] || den !== sig0[1]) mudouCompasso = true;
    const tpc = num * 4 / den;
    const mapa = new Map();     // t (em ticks) -> evento
    bar.voices.forEach((voz) => {
      let t = 0;
      for (const bt of voz.beats) {
        const dur = bt.playbackDuration / 960;
        if (!bt.isRest && bt.notes.length) {
          const chave = Math.round(t * 960);
          const ev = mapa.get(chave) || { t: arred(t), d: arred(dur), n: [] };
          bt.notes.forEach((nt) => {
            if (nt.isTieDestination) {
              const ant = [...mapa.values()].find((e) => e.n.some(([c]) => c === 7 - nt.string));
              if (ant) ant.d = arred(Math.min(tpc - ant.t, ant.d + dur));
              return;
            }
            if (nt.isDead && nt.fret < 0) return;
            const cf = ajustarNota(nt, staff.tuning, baseAfin, afinPadrao);
            if (cf && !ev.n.some(([c]) => c === cf[0])) ev.n.push(cf);
          });
          if (ev.n.length) mapa.set(chave, ev);
        }
        t += dur;
      }
    });
    const eventos = [...mapa.values()].sort((a, b) => a.t - b.t);
    eventos.forEach((e) => { e.n.sort((a, b) => b[0] - a[0]); e.d = arred(Math.max(0.05, Math.min(e.d, tpc - e.t))); });
    const acordeTxt = bar.voices[0].beats.map((bt) => bt.chord && bt.chord.name).find(Boolean) || '';
    compassos.push({ acorde: acordeTxt, eventos: eventos.length ? eventos : [{ t: 0, d: tpc, n: [], silencio: true }] });
  }
  if (mudouCompasso) avisos.push('A peça muda de compasso no meio; usei o do começo (' + sig0.join('/') + ') e ajustei os compassos diferentes.');
  const peca = {
    id: id || 'imp-' + Date.now().toString(36),
    titulo: titulo || score.title || track.name || 'Peça importada',
    nivel: 'Importada' + (score.artist ? ' · ' + score.artist : ''),
    bpm: Math.max(30, Math.min(240, Math.round(score.tempo || 90))),
    compasso: sig0,
    dica: 'Importada de um arquivo. Confira as casas e os tempos antes de tocar; se algo estiver errado, edite na tela de importação.',
    compassos
  };
  return { peca, avisos };
}

// Converte nota do AlphaTab (string 1 = mais grave) para [corda 1..6 (1 = aguda), casa] na afinação padrão.
function ajustarNota(nt, afin, baseAfin, padrao) {
  const corda = 7 - nt.string;
  if (corda < 1 || corda > 6 || nt.fret < 0) return null;
  if (padrao) return [corda, nt.fret];
  // afinação diferente: calcula o som real e acha a casa na afinação padrão
  const midiSoa = afin[6 - corda] + nt.fret + (baseAfin ? 0 : -12);   // "soa" = escrito - 12
  const aberta = CORDAS_SOLTAS[corda];
  const casa = midiSoa - aberta;
  if (casa >= 0 && casa <= 24) return [corda, casa];
  for (let c = 6; c >= 1; c--) { const f = midiSoa - CORDAS_SOLTAS[c]; if (f >= 0 && f <= 24) return [c, f]; }
  return null;
}
