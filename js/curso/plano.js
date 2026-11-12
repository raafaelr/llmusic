import { EXERCICIOS } from './exercicios.js';

// Dados do Plano de Estudos: rotinas diárias prontas e plano semanal padrão.
//
// Uma rotina é uma sequência de blocos com duração e objetivo. O aluno escolhe
// a rotina que cabe no dia dele, marca os blocos conforme vai fazendo e
// registra a sessão no fim. O plano semanal diz qual é o foco de cada dia.

export const ROTINAS = [
  {
    id: 'r60',
    nome: 'Rotina completa — 60 minutos',
    minutos: 60,
    para: 'O formato de referência deste curso. Cobre técnica, leitura, repertório e teoria no mesmo dia.',
    blocos: [
      { min: 5, titulo: 'Aquecimento', o_que: 'Cordas soltas com som pleno e uma escala lenta em duas oitavas. Sem velocidade, sem metrônomo. Atenção ao contato do dedo e à postura.', rota: 'afinador' },
      { min: 10, titulo: 'Técnica de mão direita', o_que: 'Arpejos: dez fórmulas do Op. 1 de Giuliani ou o padrão da peça que você estuda. Com metrônomo, anotando o andamento atingido.', rota: 'metronomo' },
      { min: 10, titulo: 'Técnica de mão esquerda', o_que: 'Escalas, ligados, pestana ou mudanças de posição — um por dia, em rodízio. Com metrônomo e critério de domínio.', tipos: ['escalas', 'cromatismos', 'independencia', 'coordenacao'], rota: 'exercicios' },
      { min: 5, titulo: 'Leitura à primeira vista', o_que: 'Material novo, todos os dias, sem parar. Mais fácil que o seu nível. Nunca repita a mesma peça de leitura na mesma semana.', rota: 'leitura' },
      { min: 20, titulo: 'Repertório', o_que: 'Dois ou três pontos de trabalho escolhidos antes de começar. Nada de tocar a peça inteira repetidamente: isso é execução, não estudo.', rota: 'repertorio' },
      { min: 5, titulo: 'Teoria ou percepção', o_que: 'Uma aula do curso, um exercício de percepção ou a análise de um trecho da peça que você estuda.', rota: 'curso' },
      { min: 5, titulo: 'Tocar por prazer', o_que: 'Uma execução completa de algo que você já toca bem, sem corrigir nada. Fecha a sessão em cima de uma experiência boa.', rota: '' }
    ]
  },
  {
    id: 'r30',
    nome: 'Rotina curta — 30 minutos',
    minutos: 30,
    para: 'Para os dias corridos. Mantém o essencial: um pouco de técnica, repertório e leitura.',
    blocos: [
      { min: 3, titulo: 'Aquecimento', o_que: 'Cordas soltas e uma escala lenta.', rota: '' },
      { min: 7, titulo: 'Técnica', o_que: 'Um único exercício, com metrônomo e objetivo claro.', tipos: ['escalas', 'arpejos', 'cromatismos', 'coordenacao', 'independencia'], rota: 'exercicios' },
      { min: 15, titulo: 'Repertório', o_que: 'Um ponto de trabalho só, bem escolhido.', rota: 'repertorio' },
      { min: 5, titulo: 'Leitura', o_que: 'Um trecho novo, sem parar.', rota: 'leitura' }
    ]
  },
  {
    id: 'r20',
    nome: 'Manutenção — 20 minutos',
    minutos: 20,
    para: 'Para dias impossíveis. Não desenvolve, mas impede o retrocesso — e mantém o hábito.',
    blocos: [
      { min: 5, titulo: 'Aquecimento e técnica', o_que: 'Escala lenta e um exercício curto.', rota: '' },
      { min: 10, titulo: 'Repertório', o_que: 'Execução completa de uma peça, sem corrigir.', rota: '' },
      { min: 5, titulo: 'Leitura', o_que: 'Um trecho novo.', rota: 'leitura' }
    ]
  },
  {
    id: 'r90',
    nome: 'Rotina longa — 90 minutos',
    minutos: 90,
    para: 'Para quem prepara recital, prova ou concurso. Inclui execução completa e gravação.',
    blocos: [
      { min: 5, titulo: 'Aquecimento', o_que: 'Notas longas, som pleno, atenção à postura.', rota: '' },
      { min: 15, titulo: 'Técnica de mão direita', o_que: 'Arpejos e, se for o caso, tremolo ou rasgueado, com metrônomo.', rota: 'metronomo' },
      { min: 15, titulo: 'Técnica de mão esquerda', o_que: 'Escalas em três oitavas, ligados, pestanas e mudanças de posição.', tipos: ['escalas', 'cromatismos', 'independencia', 'coordenacao'], rota: 'exercicios' },
      { min: 10, titulo: 'Leitura à primeira vista', o_que: 'Duas peças novas, sem parar, com metrônomo.', rota: 'leitura' },
      { min: 30, titulo: 'Repertório', o_que: 'Três pontos de trabalho, escolhidos antes. Isolar, progredir, transferir.', rota: 'repertorio' },
      { min: 10, titulo: 'Execução completa', o_que: 'Uma peça inteira, sem parar, gravada. Tocar inteiro é uma habilidade diferente de tocar trechos.', rota: '' },
      { min: 5, titulo: 'Autoavaliação', o_que: 'Ouvir a gravação, preencher a ficha e escolher dois pontos para a próxima sessão.', rota: 'avaliacoes' }
    ]
  },
  {
    id: 'r45t',
    nome: 'Foco em técnica — 45 minutos',
    minutos: 45,
    para: 'Para semanas em que o objetivo é destravar um problema técnico específico.',
    blocos: [
      { min: 5, titulo: 'Aquecimento', o_que: 'Sem metrônomo, som pleno.', rota: '' },
      { min: 15, titulo: 'Exercício principal', o_que: 'O exercício que resolve o problema da semana: isolamento, progressão, critério.', tipos: ['escalas', 'arpejos', 'cromatismos', 'coordenacao', 'independencia'], rota: 'exercicios' },
      { min: 10, titulo: 'Exercício secundário', o_que: 'Outra competência, em rodízio, para não perder o resto.', tipos: ['escalas', 'arpejos', 'cromatismos', 'coordenacao', 'independencia'], rota: 'exercicios' },
      { min: 10, titulo: 'Transferência', o_que: 'O trecho real da peça em que esse problema aparece.', rota: 'repertorio' },
      { min: 5, titulo: 'Tocar por prazer', o_que: 'Algo que já sai bem.', rota: '' }
    ]
  }
];

export const rotinaPorId = (id) => ROTINAS.find((r) => r.id === id) || ROTINAS[0];

// Escolhe o exercício do dia para um bloco da rotina.
//
// Por que isto existe: o bloco dizia "um por dia, em rodízio" e mandava o aluno
// para a Central de Exercícios com a lista inteira aberta. Quem está no meio da
// sessão, com o violão na mão, não quer filtrar nada — quer o exercício de hoje.
//
// Critério, nesta ordem:
//  1. o menos praticado (o app já guarda quantas vezes cada um foi feito);
//  2. entre esses, o de nível mais baixo — é o que faz a dificuldade subir
//     sozinha: enquanto houver básico por fazer, vem o básico; quando tudo do
//     nível tiver sido praticado uma vez, o rodízio sobe;
//  3. no empate, um rodízio pela data, para dois dias seguidos não caírem no
//     mesmo exercício só porque ambos estão zerados.
export function exercicioDoDia(bloco, { registro = {}, diaISO = '', excluir = [] } = {}) {
  if (!bloco || !bloco.tipos) return null;
  const candidatos = EXERCICIOS.filter((e) => bloco.tipos.includes(e.tipo) && !excluir.includes(e.id));
  if (!candidatos.length) return null;
  const vezes = (e) => (registro[e.id] && registro[e.id].vezes) || 0;
  const menosFeitos = candidatos.filter((e) => vezes(e) === Math.min(...candidatos.map(vezes)));
  const nivelMin = Math.min(...menosFeitos.map((e) => e.nivel || 0));
  const empatados = menosFeitos.filter((e) => (e.nivel || 0) === nivelMin);
  const semente = [...String(diaISO)].reduce((a, c) => a + c.charCodeAt(0), 0);
  return empatados[semente % empatados.length];
}

// Plano semanal padrão: qual é o foco de cada dia. O aluno pode editar.
export const DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
export const DIAS_CURTO = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

// O que o lembrete daquele dia deve dizer.
//
// Função pura de propósito: recebe o dia, o plano semanal e o registro de
// exercícios, e devolve o texto. Quem lê o banco é quem chama — assim dá para
// calcular o lembrete de um dia que ainda não chegou, que é justamente o que
// uma notificação agendada precisa.
//
// O diaISO vem de fora em vez de ser calculado aqui para não importar
// js/pratica.js, que vai importar este arquivo de volta.
export function lembreteDoDia(diaSemana, diaISO, semana, registro = {}) {
  const d = (semana && semana[diaSemana]) || SEMANA_PADRAO[diaSemana];
  const r = rotinaPorId(d.rotina);
  // O primeiro bloco com rodízio é o exercício principal do dia. Os outros
  // entram em "excluir" na tela do plano; aqui basta o primeiro, que é o que
  // cabe numa notificação.
  let ex = null;
  for (const b of (r.blocos || [])) {
    if (!b.tipos) continue;
    ex = exercicioDoDia(b, { registro, diaISO });
    if (ex) break;
  }
  if (ex) {
    return {
      titulo: 'Hoje: ' + ex.nome,
      corpo: ex.minutos + ' min · ' + r.nome.split('—')[0].trim() + ' · ' + d.foco,
      rota: 'exercicios/' + ex.id
    };
  }
  return { titulo: 'Hora de tocar 🎸', corpo: r.nome + ' · ' + d.foco, rota: 'plano' };
}

export const SEMANA_PADRAO = [
  { rotina: 'r20', foco: 'Descanso ativo: tocar por prazer, ouvir gravações.' },
  { rotina: 'r60', foco: 'Escalas e leitura. Repertório: peça principal.' },
  { rotina: 'r60', foco: 'Arpejos e ligados. Repertório: peça secundária.' },
  { rotina: 'r45t', foco: 'Foco técnico da semana. Transferência para a peça.' },
  { rotina: 'r60', foco: 'Pestana e mudanças de posição. Repertório: peça principal.' },
  { rotina: 'r30', foco: 'Leitura e manutenção. Execução completa gravada.' },
  { rotina: 'r90', foco: 'Sessão longa: técnica completa, repertório e autoavaliação.' }
];

// Metas sugeridas, por nível, para quem não sabe por onde começar.
export const METAS_SUGERIDAS = [
  { nivel: 1, texto: 'Trocar entre dois acordes sem interromper o pulso, a 60 BPM.' },
  { nivel: 1, texto: 'Nomear qualquer nota da primeira posição em menos de dois segundos.' },
  { nivel: 2, texto: 'Ler uma melodia nova de oito compassos sem parar.' },
  { nivel: 2, texto: 'Tocar p-i-m-a a 80 BPM com som igual entre os dedos.' },
  { nivel: 3, texto: 'Fazer pestana em Fá com as seis cordas soando.' },
  { nivel: 3, texto: 'Tocar uma escala maior em duas oitavas a 100 BPM.' },
  { nivel: 4, texto: 'Tocar um estudo de Carcassi inteiro, de memória.' },
  { nivel: 4, texto: 'Montar o campo harmônico de qualquer tom de cabeça.' },
  { nivel: 5, texto: 'Manter tremolo igual por um minuto a 60 BPM.' },
  { nivel: 5, texto: 'Ler à primeira vista uma peça do seu nível sem parar.' },
  { nivel: 6, texto: 'Tocar um trecho a três vozes com os planos sonoros distinguíveis.' },
  { nivel: 6, texto: 'Arranjar uma canção para violão solo e tocá-la.' },
  { nivel: 7, texto: 'Planejar e conduzir uma aula com objetivos verificáveis.' },
  { nivel: 8, texto: 'Preparar e apresentar um programa de 40 minutos de memória.' }
];
