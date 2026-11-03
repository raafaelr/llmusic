// Som de violão sintetizado (algoritmo Karplus-Strong), sem nenhum arquivo de áudio.
// Ideia: um pouco de ruído "gira" dentro de uma linha de atraso do tamanho de um período da nota,
// perdendo um pouco de energia nos agudos a cada volta, como uma corda de verdade.

const cache = new Map();

export function frequencia(midi) { return 440 * Math.pow(2, (midi - 69) / 12); }

// Gera o buffer de áudio de uma nota. Resultado guardado em cache (por contexto e nota).
export function bufferDaNota(ctx, midi, segundos = 2.2) {
  const chave = ctx.sampleRate + ':' + midi;
  if (cache.has(chave)) return cache.get(chave);
  const sr = ctx.sampleRate;
  const f = frequencia(midi);
  const N = Math.max(2, Math.round(sr / f));
  const total = Math.floor(sr * segundos);
  const buf = ctx.createBuffer(1, total, sr);
  const out = buf.getChannelData(0);
  // ruído inicial suavizado (palheta de dedo = menos brilho que palheta de plástico)
  const linha = new Float32Array(N);
  let ant = 0;
  for (let i = 0; i < N; i++) { const r = Math.random() * 2 - 1; ant = ant * 0.5 + r * 0.5; linha[i] = ant; }
  const perda = midi < 52 ? 0.9985 : 0.997;     // cordas graves duram mais
  let p = 0;
  let maximo = 0;
  for (let i = 0; i < total; i++) {
    const prox = (p + 1) % N;
    const v = linha[p];
    out[i] = v;
    linha[p] = (v + linha[prox]) * 0.5 * perda;
    p = prox;
    const a = Math.abs(v); if (a > maximo) maximo = a;
  }
  // normaliza e aplica um fade curto no começo e no fim para não estalar
  const g = maximo > 0 ? 0.6 / maximo : 1;
  const fim = Math.floor(sr * 0.15);
  for (let i = 0; i < total; i++) {
    let m = g;
    if (i < 64) m *= i / 64;
    if (i > total - fim) m *= (total - i) / fim;
    out[i] *= m;
  }
  cache.set(chave, buf);
  return buf;
}

// Toca uma nota no instante "quando" (relógio do AudioContext).
export function tocarNota(ctx, destino, midi, quando, volume = 0.5) {
  const fonte = ctx.createBufferSource();
  fonte.buffer = bufferDaNota(ctx, midi);
  const g = ctx.createGain();
  g.gain.value = volume;
  fonte.connect(g); g.connect(destino);
  fonte.start(quando);
  return fonte;
}
