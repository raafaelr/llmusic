// Tocador de exemplos das aulas: nota solta, acorde, escala e trechos de partitura.
// Usa o som de violão sintetizado (js/violao.js), então não existe nenhum arquivo de áudio.
// Um tocador por tela: a tela cria com criarTocador() e chama fechar() ao sair.
import { tocarNota, tocarAcorde } from '../violao.js';
import { VALOR } from '../musica/notacao.js';

export function criarTocador() {
  let ctx = null;
  let saida = null;
  let fontes = [];
  let timers = [];
  let tocandoAgora = false;

  function ligar() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      saida = ctx.createGain();
      saida.gain.value = 0.9;
      saida.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function parar() {
    fontes.forEach((f) => { try { f.stop(); } catch (e) { /* já parou */ } });
    fontes = [];
    timers.forEach(clearTimeout);
    timers = [];
    tocandoAgora = false;
  }

  // Toca uma nota (número MIDI do som real, não o escrito).
  function nota(midi, { volume = 0.55, quando = 0 } = {}) {
    const c = ligar();
    fontes.push(tocarNota(c, saida, midi, c.currentTime + quando, volume));
  }

  // Toca várias notas juntas, levemente defasadas, como um dedilhado para baixo.
  function acorde(midis, { volume = 0.42, quando = 0, intervalo = 0.05 } = {}) {
    const c = ligar();
    fontes.push(...tocarAcorde(c, saida, midis, c.currentTime + quando, intervalo, volume));
  }

  // Toca uma sequência de eventos no tempo. Cada evento:
  //   { midis: [..] | midi, fig: 'seminima', ponto: false, pausa: 'seminima' }
  // aoTocar(i) é chamado quando cada evento soa (para acender a nota na tela).
  // Devolve uma promessa que termina quando a sequência acaba.
  function sequencia(eventos, { bpm = 72, aoTocar = null, aoFim = null, volume = 0.5 } = {}) {
    parar();
    const c = ligar();
    const seg = 60 / bpm;
    tocandoAgora = true;
    let t = 0.12;
    eventos.forEach((e, i) => {
      const d = (VALOR[e.fig || e.pausa || 'seminima'] || 1) * (e.ponto ? 1.5 : 1) * seg;
      if (!e.pausa) {
        const ms = (e.midis || [e.midi]).filter((m) => m !== undefined && m !== null);
        if (ms.length > 1) acorde(ms, { quando: t, volume });
        else if (ms.length === 1) nota(ms[0], { quando: t, volume });
      }
      if (aoTocar) timers.push(setTimeout(() => aoTocar(i, e), t * 1000));
      t += d;
    });
    return new Promise((ok) => {
      timers.push(setTimeout(() => {
        tocandoAgora = false;
        if (aoTocar) aoTocar(-1);
        if (aoFim) aoFim();
        ok();
      }, t * 1000 + 120));
    });
  }

  function fechar() {
    parar();
    if (ctx) { ctx.close().catch(() => {}); ctx = null; }
  }

  return { nota, acorde, sequencia, parar, fechar, tocando: () => tocandoAgora, contexto: () => ctx };
}

// Afinação padrão (som real) da 1ª para a 6ª corda.
export const CORDAS_MIDI = [64, 59, 55, 50, 45, 40];
// Som real de uma posição no braço: corda 1 é a mais fina.
export const midiDaPosicao = (corda, casa) => CORDAS_MIDI[corda - 1] + casa;
// A partitura de violão soa uma oitava abaixo do escrito.
export const soaComoEscrito = (midiEscrito) => midiEscrito - 12;
