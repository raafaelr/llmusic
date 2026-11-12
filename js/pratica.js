// O dia de prática: o relógio que conta o tempo e o lembrete que chama para
// começar. As duas coisas moram juntas porque as duas dependem da mesma noção
// de "dia" (hojeISO) e do mesmo plano semanal.
//
// Qualquer tela do app pode chamar comecarPratica() e pararPratica().
// O tempo é salvo a cada 10 segundos, para não se perder se o app fechar de repente.
import { Pratica, Config } from './db.js';
import { lembreteDoDia, SEMANA_PADRAO } from './curso/plano.js';
import { Lembretes } from './nativo.js';

// Data de hoje no formato "2026-11-04", usando a hora do seu celular.
export function hojeISO(data = new Date()) {
  const dois = (n) => String(n).padStart(2, '0');
  return data.getFullYear() + '-' + dois(data.getMonth() + 1) + '-' + dois(data.getDate());
}

let ultimo = null;   // até que instante (em ms) o tempo já foi salvo
let relogio = null;

async function guardar() {
  if (ultimo === null) return;
  const segundos = Math.floor((Date.now() - ultimo) / 1000);
  if (segundos > 0) {
    ultimo += segundos * 1000; // avança só os segundos inteiros que foram salvos
    await Pratica.somar(hojeISO(), segundos);
  }
}

export function comecarPratica() {
  if (ultimo !== null) return;
  ultimo = Date.now();
  relogio = setInterval(guardar, 10000);
}

export async function pararPratica() {
  if (ultimo === null) return;
  clearInterval(relogio);
  await guardar();
  ultimo = null;
}

export function minutosTexto(segundos) {
  const min = Math.floor(segundos / 60);
  if (min < 1) return segundos < 10 ? '0 min' : 'menos de 1 min';
  return min + ' min';
}

// ---- LEMBRETES DO DIA ----
//
// Monta os próximos dias com o exercício que o rodízio vai escolher em cada
// um e manda agendar. Chamado quando o lembrete é ligado, quando o horário
// muda, e toda vez que o app abre — é esse reagendar ao abrir que mantém as
// notificações combinando com o rodízio.
export async function reagendarLembretes() {
  if (!Lembretes.disponivel()) return 0;
  const lem = await Config.obter('lembrete', { ativo: false, hora: '19:00' });
  if (!lem.ativo) return 0;
  const m = /^(\d{1,2}):(\d{2})$/.exec(lem.hora || '');
  if (!m) return 0;
  const hora = +m[1], minuto = +m[2];

  const semana = await Config.obter('plano.semana', SEMANA_PADRAO);
  const registro = await Config.obter('exercicios.registro', {});

  const dias = [];
  for (let i = 0; i < Lembretes.DIAS; i++) {
    const data = new Date();
    data.setDate(data.getDate() + i);
    data.setHours(hora, minuto, 0, 0);
    const { titulo, corpo, rota } = lembreteDoDia(data.getDay(), hojeISO(data), semana, registro);
    dias.push({ data, titulo, corpo, rota });
  }
  return Lembretes.ativar(dias);
}
