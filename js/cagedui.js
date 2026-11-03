// Peças de tela do CAGED usadas pela ferramenta e pelas aulas.
import { nomeDoMidi } from './pitch.js';
import { midisDoAcorde, raizDeReferencia, descricaoPosicao, QUALIDADES, cifraAcorde, nomeAcorde } from './caged.js';
import { tocarAcorde } from './violao.js';

// Desenha uma forma no braço. rotulo: 'graus' | 'notas' | 'dedos' | 'raiz' | 'nenhum'.
export function desenharForma(braco, f, { rotulo = 'graus', fraco = false, classe = null } = {}) {
  if (f.pestana && f.cordasPestana.length) braco.barra(f.k, Math.min(...f.cordasPestana), Math.max(...f.cordasPestana));
  f.notas.forEach((n) => {
    let t = '';
    if (rotulo === 'graus') t = n.grau;
    else if (rotulo === 'notas') t = nomeDoMidi(n.midi).pt;
    else if (rotulo === 'dedos') t = n.dedo ? String(n.dedo) : n.casa === 0 ? '○' : '';
    else if (rotulo === 'raiz') t = n.tonica ? 'R' : '';
    braco.ponto(n.corda, n.casa, (classe || 'f-' + f.id) + (n.tonica ? ' raiz' : '') + (fraco ? ' fraco' : ''), t);
  });
  f.mudas.forEach((c) => braco.marcaMuda(c));
}

// Texto que explica a forma desenhada.
export function descrever(f) {
  const ref = raizDeReferencia(f.id, f.tonicaPc);
  const tocadas = f.notas.map((n) => n.corda).sort((a, b) => b - a);
  const partes = [cifraAcorde(f.tonicaPc, f.qual) + ' = ' + nomeAcorde(f.tonicaPc, f.qual) + ' (forma de ' + f.id + (f.qual === 'maior' ? '' : f.qual === 'menor' ? 'm' : f.qual === '7' ? '7' : f.qual) + ')'];
  partes.push(descricaoPosicao(f));
  partes.push('raiz na ' + ref.corda + 'ª corda, casa ' + ref.casa);
  partes.push('toque as cordas ' + tocadas[0] + ' a ' + tocadas[tocadas.length - 1] + (f.mudas.length ? ' (não toque a ' + f.mudas.join(' e a ') + 'ª)' : ''));
  return partes.join(' · ');
}

// Pequeno gerenciador de áudio: um AudioContext por tela.
export function criarSom() {
  let ctx = null, saida = null, timers = [];
  async function pronto() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC(); saida = ctx.createGain(); saida.gain.value = 0.9; saida.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') await ctx.resume();
  }
  return {
    async acorde(f) { await pronto(); tocarAcorde(ctx, saida, midisDoAcorde(f), ctx.currentTime + 0.05); },
    // Toca vários acordes em sequência; "aoTocar(i)" avisa a tela de qual está soando.
    async sequencia(lista, aoTocar, pausa = 1700) {
      await pronto();
      this.parar();
      lista.forEach((f, i) => {
        timers.push(setTimeout(() => { aoTocar && aoTocar(i); tocarAcorde(ctx, saida, midisDoAcorde(f), ctx.currentTime + 0.02); }, i * pausa));
      });
      timers.push(setTimeout(() => aoTocar && aoTocar(-1), lista.length * pausa));
    },
    parar() { timers.forEach(clearTimeout); timers = []; },
    fechar() { this.parar(); if (ctx) { ctx.close().catch(() => {}); ctx = null; } }
  };
}
