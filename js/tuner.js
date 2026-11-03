// Motor do afinador: liga o microfone, lê o áudio em pedaços e usa o detector YIN (pitch.js).
// Também toca o tom de referência de uma corda.
import { detectarFrequencia, volumeRms, frequenciaDoMidi } from './pitch.js';

export class Afinador {
  // aoLeitura(freq) é chamada ~25x por segundo: freq (Hz) estável, ou null se não há nota clara.
  constructor(aoLeitura) {
    this.aoLeitura = aoLeitura;
    this.ctx = null;
    this.fluxo = null;
    this.analisador = null;
    this.buf = null;
    this.timer = null;
    this.recentes = [];
    this.mudoAte = 0;       // enquanto toca o tom de referência, ignora o microfone
    this.ultimaFreq = null;
    this.semNota = 0;
  }

  get ouvindo() { return !!this.fluxo; }

  // Pede o microfone. Desligamos os "melhoramentos" de voz do celular
  // (cancelamento de eco, redução de ruído, ganho automático): eles distorcem o som do violão.
  async iniciar() {
    if (this.ouvindo) return;
    const fluxo = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
    });
    this.fluxo = fluxo;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!this.ctx) this.ctx = new AC();
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    const fonte = this.ctx.createMediaStreamSource(fluxo);
    this.analisador = this.ctx.createAnalyser();
    this.analisador.fftSize = 4096;
    this.buf = new Float32Array(this.analisador.fftSize);
    fonte.connect(this.analisador);       // não conectamos ao alto-falante: evita microfonia
    this.fonte = fonte;
    this.recentes = [];
    this.timer = setInterval(() => this.ler(), 40);
  }

  ler() {
    if (this.ctx.currentTime < this.mudoAte) { this.aoLeitura(null); return; }
    this.analisador.getFloatTimeDomainData(this.buf);
    const r = detectarFrequencia(this.buf, this.ctx.sampleRate);
    if (!r || r.confianca < 0.8) {
      // aguenta alguns instantes sem nota (a nota some aos poucos), depois limpa
      this.semNota++;
      if (this.semNota > 8) { this.recentes = []; this.ultimaFreq = null; this.aoLeitura(null); }
      else this.aoLeitura(this.ultimaFreq);
      return;
    }
    this.semNota = 0;
    // Estabilidade: usa a mediana das últimas leituras que concordam (±50 cents) entre si.
    this.recentes.push(r.freq);
    if (this.recentes.length > 5) this.recentes.shift();
    const ordenadas = [...this.recentes].sort((a, b) => a - b);
    const mediana = ordenadas[ordenadas.length >> 1];
    const concordam = this.recentes.filter((f) => Math.abs(1200 * Math.log2(f / mediana)) < 50);
    if (concordam.length < 3) { this.aoLeitura(this.ultimaFreq); return; }
    this.recentes = concordam;
    // suaviza um pouco para o ponteiro não tremer
    this.ultimaFreq = this.ultimaFreq && Math.abs(1200 * Math.log2(mediana / this.ultimaFreq)) < 50
      ? this.ultimaFreq * 0.6 + mediana * 0.4
      : mediana;
    this.aoLeitura(this.ultimaFreq);
  }

  parar() {
    clearInterval(this.timer);
    this.timer = null;
    if (this.fonte) { this.fonte.disconnect(); this.fonte = null; }
    if (this.fluxo) { this.fluxo.getTracks().forEach((t) => t.stop()); this.fluxo = null; }
    this.recentes = [];
    this.ultimaFreq = null;
    this.semNota = 0;
    this.aoLeitura(null);
  }

  // Toca uma nota de referência (tom que decai como uma corda). Não precisa de microfone.
  async tocarReferencia(midi, a4 = 440) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!this.ctx) this.ctx = new AC();
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    const t = this.ctx.currentTime;
    const f = frequenciaDoMidi(midi, a4);
    const o = this.ctx.createOscillator();
    const o2 = this.ctx.createOscillator();   // 2º harmônico, deixa o som mais "de corda"
    const g = this.ctx.createGain();
    o.type = 'triangle'; o2.type = 'sine';
    o.frequency.value = f; o2.frequency.value = f * 2;
    const g2 = this.ctx.createGain();
    g2.gain.value = 0.25;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.35, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.0);
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(this.ctx.destination);
    o.start(t); o2.start(t); o.stop(t + 2.1); o2.stop(t + 2.1);
    this.mudoAte = t + 2.2;
    this.recentes = []; this.ultimaFreq = null;
  }
}
