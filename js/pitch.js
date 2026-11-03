// Funções puras de afinação: não mexem na tela nem no microfone, só fazem contas.
// Por serem "puras", dá para testá-las com sinais de teste, sem violão.

// Nomes das notas em português, começando em Dó (número 0 até 11).
export const NOMES_PT = ['Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si'];
export const NOMES_EN = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Quantos Hz tem a nota de número MIDI "midi". O Lá central (A4) é o MIDI 69
// e por padrão vale 440 Hz. Cada semitom multiplica a frequência por 2^(1/12).
export function frequenciaDoMidi(midi, a4 = 440) {
  return a4 * Math.pow(2, (midi - 69) / 12);
}

// O contrário: de uma frequência, qual é o número MIDI (com casas decimais).
export function midiDaFrequencia(freq, a4 = 440) {
  return 69 + 12 * Math.log2(freq / a4);
}

// Dado um número MIDI inteiro, devolve o nome da nota e a oitava.
// Ex.: 40 -> { pt: 'Mi', en: 'E', oitava: 2 }
export function nomeDoMidi(midi) {
  const i = ((midi % 12) + 12) % 12;
  return { pt: NOMES_PT[i], en: NOMES_EN[i], oitava: Math.floor(midi / 12) - 1 };
}

// A nota mais próxima de uma frequência e quantos "cents" você está longe dela.
// 100 cents = 1 semitom. De -50 a +50 é a faixa em que a nota ainda é a mesma.
export function notaMaisProxima(freq, a4 = 440) {
  const m = midiDaFrequencia(freq, a4);
  const midi = Math.round(m);
  return { midi, cents: (m - midi) * 100 };
}

// Diferença em cents entre uma frequência e uma nota alvo (positivo = está agudo).
export function centsAteAlvo(freq, midiAlvo, a4 = 440) {
  return (midiDaFrequencia(freq, a4) - midiAlvo) * 100;
}

// Afinações do violão: do 6º (mais grave) ao 1º (mais agudo), com o número MIDI de cada corda.
export const AFINACOES = [
  { id: 'padrao', nome: 'Padrão', midis: [40, 45, 50, 55, 59, 64], nomes: ['Mi', 'Lá', 'Ré', 'Sol', 'Si', 'Mi'] },
  { id: 'dropd', nome: 'Drop D', midis: [38, 45, 50, 55, 59, 64], nomes: ['Ré', 'Lá', 'Ré', 'Sol', 'Si', 'Mi'] },
  { id: 'meiotom', nome: 'Meio tom abaixo', midis: [39, 44, 49, 54, 58, 63], nomes: ['Mi♭', 'Lá♭', 'Ré♭', 'Sol♭', 'Si♭', 'Mi♭'] },
  { id: 'dadgad', nome: 'DADGAD', midis: [38, 45, 50, 55, 57, 62], nomes: ['Ré', 'Lá', 'Ré', 'Sol', 'Lá', 'Ré'] },
  { id: 'opensol', nome: 'Sol aberto', midis: [38, 43, 50, 55, 59, 62], nomes: ['Ré', 'Sol', 'Ré', 'Sol', 'Si', 'Ré'] },
  { id: 'openre', nome: 'Ré aberto', midis: [38, 45, 50, 54, 57, 62], nomes: ['Ré', 'Lá', 'Ré', 'Fá#', 'Lá', 'Ré'] }
];

// Entre as cordas da afinação, qual é a mais próxima do som ouvido?
// Devolve o índice (0 = 6ª corda ... 5 = 1ª corda).
export function cordaMaisProxima(freq, midis, a4 = 440) {
  const m = midiDaFrequencia(freq, a4);
  let melhor = 0;
  for (let i = 1; i < midis.length; i++) {
    if (Math.abs(midis[i] - m) < Math.abs(midis[melhor] - m)) melhor = i;
  }
  return melhor;
}

// Volume médio (RMS) do trecho de áudio. Serve para ignorar silêncio e ruído fraco.
export function volumeRms(buf) {
  let soma = 0;
  for (let i = 0; i < buf.length; i++) soma += buf[i] * buf[i];
  return Math.sqrt(soma / buf.length);
}

// Detector de frequência YIN (de Cheveigné e Kawahara, 2002).
// Ideia: um som com frequência f se repete a cada "período" T = 1/f.
// Compara o trecho com ele mesmo deslocado de tau amostras. Quando tau é igual ao período,
// os dois trechos ficam quase iguais, e a diferença cai quase a zero.
// É mais confiável que a autocorrelação simples, que confunde a nota com seus harmônicos
// (o clássico "oitava errada", que acontece muito nas cordas graves do violão).
//
// buf: amostras de áudio (Float32Array); sampleRate: ex. 48000
// Devolve { freq, confianca } ou null se não achou uma nota clara.
export function detectarFrequencia(buf, sampleRate, opcoes = {}) {
  const fmin = opcoes.fmin || 60;          // abaixo do Mi grave (82 Hz) e do Ré grave (73 Hz)
  const fmax = opcoes.fmax || 1100;
  const limiar = opcoes.limiar || 0.15;    // quanto menor, mais exigente
  const rmsMin = opcoes.rmsMin === undefined ? 0.008 : opcoes.rmsMin;

  if (volumeRms(buf) < rmsMin) return null;

  const janela = buf.length >> 1;
  const tauMax = Math.min(Math.floor(sampleRate / fmin), janela - 1);
  const tauMin = Math.max(2, Math.floor(sampleRate / fmax));

  // 1. Função de diferença
  const d = new Float32Array(tauMax + 1);
  for (let tau = 1; tau <= tauMax; tau++) {
    let soma = 0;
    for (let j = 0; j < janela; j++) {
      const x = buf[j] - buf[j + tau];
      soma += x * x;
    }
    d[tau] = soma;
  }

  // 2. Diferença normalizada pela média acumulada (corrige o viés para tau pequeno)
  const dn = new Float32Array(tauMax + 1);
  dn[0] = 1;
  let acumulado = 0;
  for (let tau = 1; tau <= tauMax; tau++) {
    acumulado += d[tau];
    dn[tau] = acumulado === 0 ? 1 : (d[tau] * tau) / acumulado;
  }

  // 3. Primeiro vale abaixo do limiar
  let tau = -1;
  for (let t = tauMin; t <= tauMax; t++) {
    if (dn[t] < limiar) {
      while (t + 1 <= tauMax && dn[t + 1] < dn[t]) t++;   // desce até o fundo do vale
      tau = t;
      break;
    }
  }
  if (tau === -1) return null;                              // nenhum período claro: é ruído

  // 4. Refinamento: ajusta uma parábola em volta do mínimo para ter precisão menor que 1 amostra
  let tauFino = tau;
  if (tau > 1 && tau < tauMax) {
    const a = dn[tau - 1], b = dn[tau], c = dn[tau + 1];
    const denom = 2 * (2 * b - c - a);
    if (denom !== 0) tauFino = tau + (c - a) / denom;
  }
  return { freq: sampleRate / tauFino, confianca: 1 - dn[tau] };
}
