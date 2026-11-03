// Motor do metrônomo. Os cliques são SINTETIZADOS: o código cria o som na hora,
// sem nenhum arquivo de áudio.
//
// Por que não usar setInterval para tocar cada clique? Porque o JavaScript atrasa
// um pouco (às vezes alguns milissegundos), e o ouvido percebe. A solução usada por
// metrônomos profissionais na web é:
//   1. Um temporizador roda a cada 25 ms e olha só um pouquinho à frente (120 ms).
//   2. Todo clique que cai nessa janela é AGENDADO no relógio de áudio, que é
//      muito mais preciso que o relógio do JavaScript.

export const COMPASSOS = {
  '2/4': { pulsos: 2, medios: [] },
  '3/4': { pulsos: 3, medios: [] },
  '4/4': { pulsos: 4, medios: [] },
  '6/8': { pulsos: 6, medios: [3] }   // 6/8 é sentido em dois grupos de três
};

export const SUBDIVISOES = [
  { valor: 1, nome: 'Nenhuma' },
  { valor: 2, nome: 'Colcheias' },
  { valor: 3, nome: 'Tercinas' },
  { valor: 4, nome: 'Semicolcheias' }
];

export const BPM_MIN = 30;
export const BPM_MAX = 240;

export function limitarBpm(n) {
  return Math.max(BPM_MIN, Math.min(BPM_MAX, Math.round(n)));
}

// Nome italiano do andamento, para você ir se acostumando com os termos.
export function andamento(bpm) {
  if (bpm < 60) return 'Largo';
  if (bpm < 76) return 'Adagio';
  if (bpm < 108) return 'Andante';
  if (bpm < 120) return 'Moderato';
  if (bpm < 156) return 'Allegro';
  if (bpm < 176) return 'Vivace';
  return 'Presto';
}

export class Metronomo {
  constructor(aoPulso) {
    this.aoPulso = aoPulso;     // função chamada quando um pulso principal toca (para a tela piscar)
    this.bpm = 80;
    this.compasso = '4/4';
    this.subdivisao = 1;
    this.rodando = false;

    this._ctx = null;           // o "estúdio" de áudio do navegador
    this._timer = null;
    this._proximoInstante = 0;  // quando toca o próximo clique (em segundos do relógio de áudio)
    this._pulso = 0;            // qual pulso do compasso (0 = primeiro)
    this._sub = 0;              // qual subdivisão dentro do pulso
    this._fila = [];            // pulsos agendados, esperando a hora de piscar na tela
    this._quadro = null;
  }

  mudarCompasso(nome) {
    this.compasso = nome;
    this._pulso = 0;
    this._sub = 0;
  }

  async iniciar() {
    if (!this._ctx) {
      const Contexto = window.AudioContext || window.webkitAudioContext;
      this._ctx = new Contexto();
    }
    // Navegadores só liberam áudio depois de um toque do usuário; o "resume" cuida disso.
    if (this._ctx.state === 'suspended') await this._ctx.resume();
    this.rodando = true;
    this._pulso = 0;
    this._sub = 0;
    this._fila = [];
    this._proximoInstante = this._ctx.currentTime + 0.08;
    this._agendar();
    this._piscar();
  }

  parar() {
    this.rodando = false;
    clearTimeout(this._timer);
    cancelAnimationFrame(this._quadro);
    this._fila = [];
  }

  _agendar() {
    if (!this.rodando) return;
    while (this._proximoInstante < this._ctx.currentTime + 0.12) {
      this._tocar(this._proximoInstante);
      this._avancar();
    }
    this._timer = setTimeout(() => this._agendar(), 25);
  }

  _tocar(instante) {
    const c = COMPASSOS[this.compasso];
    const pulso = this._pulso % c.pulsos;
    if (this._sub > 0) {
      this._clique(instante, 620, 0.35);                       // subdivisão: grave e baixinho
    } else {
      this._fila.push({ instante, pulso });
      if (pulso === 0) this._clique(instante, 1600, 1);        // primeiro tempo: agudo e forte
      else if (c.medios.includes(pulso)) this._clique(instante, 1150, 0.8);
      else this._clique(instante, 880, 0.7);
    }
  }

  _avancar() {
    const duracao = 60 / this.bpm / this.subdivisao;           // quanto dura cada clique
    this._proximoInstante += duracao;
    this._sub++;
    if (this._sub >= this.subdivisao) {
      this._sub = 0;
      this._pulso = (this._pulso + 1) % COMPASSOS[this.compasso].pulsos;
    }
  }

  // Cria um "tic": uma onda senoidal que sobe e some em 60 milésimos de segundo.
  _clique(instante, frequencia, volume) {
    const ctx = this._ctx;
    const osc = ctx.createOscillator();
    const ganho = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = frequencia;
    ganho.gain.setValueAtTime(0.0001, instante);
    ganho.gain.linearRampToValueAtTime(volume, instante + 0.002);
    ganho.gain.exponentialRampToValueAtTime(0.0001, instante + 0.06);
    osc.connect(ganho).connect(ctx.destination);
    osc.start(instante);
    osc.stop(instante + 0.08);
  }

  // Roda a cada quadro da tela e avisa quando chegou a hora de um pulso piscar.
  _piscar() {
    if (!this.rodando) return;
    const agora = this._ctx.currentTime;
    let ultimo = null;
    while (this._fila.length && this._fila[0].instante <= agora) {
      ultimo = this._fila.shift();
    }
    if (ultimo && this.aoPulso) this.aoPulso(ultimo.pulso);
    this._quadro = requestAnimationFrame(() => this._piscar());
  }
}
