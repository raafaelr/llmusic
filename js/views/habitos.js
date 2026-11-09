// Hábitos: sequência de dias, meta diária, calendário do mês e backup dos seus dados.
import { Config, Pratica, Backup } from '../db.js';
import { hojeISO, minutosTexto } from '../pratica.js';
import { nativo, compartilharArquivo, Lembretes, lerHora } from '../nativo.js';
import { sequenciaAtual, melhorSequencia, diasDoMes, semana, totalSegundos, nivelDoDia, dataDe } from '../habitos.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export function montar(raiz, ir) {
  let pratica = {};
  let meta = 10;
  let ano, mes;
  let encerrada = false;
  const hoje = hojeISO();
  { const d = dataDe(hoje); ano = d.getFullYear(); mes = d.getMonth(); }

  const tela = el('main', 'tela habitos');
  const topo = el('header', 'topo');
  const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Hábitos'));

  const esq = el('section', 'coluna');
  const seq = el('div', 'sequencia');
  const seqNum = el('div', 'seq-num', '0');
  seqNum.setAttribute('role', 'status');
  const seqRot = el('p', 'rotulo', 'dias seguidos');
  seq.append(seqNum, seqRot);
  const hojeBarra = el('div', 'barra-meta');
  const hojeFill = el('span', 'barra-meta-fill');
  hojeBarra.append(hojeFill);
  const hojeTxt = el('p', 'dica texto-hoje', '');
  const stats = el('p', 'stats', '');
  const gMeta = el('div', 'grupo'); gMeta.append(el('h2', 'rotulo-grupo', 'Meta diária'));
  const chipsMeta = el('div', 'chips'); gMeta.append(chipsMeta);
  const gLem = el('div', 'grupo'); gLem.append(el('h2', 'rotulo-grupo', 'Lembrete diário'));
  const linhaLem = el('div', 'linha-lembrete');
  const chipLem = el('button', 'chip sm', 'Ativar lembrete');
  chipLem.setAttribute('aria-pressed', 'false');
  const hora = document.createElement('input');
  hora.type = 'time'; hora.value = '19:00'; hora.className = 'campo-hora';
  hora.setAttribute('aria-label', 'Horário do lembrete');
  linhaLem.append(chipLem, hora);
  const msgLem = el('p', 'dica', '');
  msgLem.setAttribute('aria-live', 'polite');
  gLem.append(linhaLem, msgLem);
  const gBk = el('div', 'grupo'); gBk.append(el('h2', 'rotulo-grupo', 'Backup dos seus dados'));
  const linhaBk = el('div', 'acoes');
  const exp = el('button', 'botao-sec', 'Exportar');
  const imp = el('button', 'botao-sec', 'Importar');
  const arq = document.createElement('input');
  arq.type = 'file'; arq.accept = '.json,application/json'; arq.hidden = true;
  linhaBk.append(exp, imp, arq);
  const msg = el('p', 'dica', '');
  msg.setAttribute('aria-live', 'polite');
  gBk.append(linhaBk, msg);
  esq.append(seq, hojeBarra, hojeTxt, stats, gMeta, gLem, gBk);

  const dir = el('section', 'coluna');
  const navMes = el('div', 'nav-mes');
  const ant = botaoIcone('botao-passo', 'voltar'); ant.setAttribute('aria-label', 'Mês anterior');
  const prox = botaoIcone('botao-passo', 'avancar'); prox.setAttribute('aria-label', 'Próximo mês');
  const tituloMes = el('h2', 'titulo-mes', '');
  navMes.append(ant, tituloMes, prox);
  const cal = el('div', 'calendario');
  const legenda = el('p', 'dica', 'Cor mais forte = mais estudo. Dia com meta batida: cor cheia.');
  dir.append(navMes, cal, legenda);

  tela.append(topo, esq, dir);
  raiz.append(tela);

  function desenhar() {
    const seqAtual = sequenciaAtual(pratica, meta, hoje);
    seqNum.textContent = seqAtual;
    seqRot.textContent = seqAtual === 1 ? 'dia seguido' : 'dias seguidos';
    const segHoje = pratica[hoje] || 0;
    hojeFill.style.width = Math.min(100, (segHoje / (meta * 60)) * 100) + '%';
    hojeTxt.textContent = segHoje >= meta * 60 ? '✓ Meta de hoje batida (' + minutosTexto(segHoje) + ')' : 'Hoje: ' + minutosTexto(segHoje) + ' de ' + meta + ' min';
    stats.textContent = 'Melhor sequência: ' + melhorSequencia(pratica, meta) + ' · Últimos 7 dias: ' + minutosTexto(semana(pratica, hoje)) + ' · Total: ' + minutosTexto(totalSegundos(pratica));
    chipsMeta.innerHTML = '';
    [5, 10, 20, 30].forEach((m) => {
      const b = el('button', 'chip sm', m + ' min');
      b.setAttribute('aria-pressed', String(m === meta));
      b.onclick = () => { meta = m; Config.guardar('habitos.meta', m); desenhar(); };
      chipsMeta.append(b);
    });
    tituloMes.textContent = MESES[mes][0].toUpperCase() + MESES[mes].slice(1) + ' de ' + ano;
    cal.innerHTML = '';
    SEMANA.forEach((s) => cal.append(el('span', 'cal-sem', s)));
    diasDoMes(ano, mes).forEach((iso) => {
      if (!iso) { cal.append(el('span', 'cal-vazio')); return; }
      const seg = pratica[iso] || 0;
      const c = el('span', 'cal-dia nivel' + nivelDoDia(seg, meta) + (iso === hoje ? ' hoje' : ''), String(Number(iso.slice(8))));
      c.title = seg ? minutosTexto(seg) : 'sem prática';
      c.dataset.dia = iso;
      c.dataset.nivel = nivelDoDia(seg, meta);
      cal.append(c);
    });
  }
  ant.onclick = () => { mes--; if (mes < 0) { mes = 11; ano--; } desenhar(); };
  prox.onclick = () => { mes++; if (mes > 11) { mes = 0; ano++; } desenhar(); };

  exp.onclick = async () => {
    const dados = await Backup.exportar();
    if (nativo()) {
      try { await compartilharArquivo('llmusic-backup-' + hoje + '.json', JSON.stringify(dados, null, 2)); msg.textContent = 'Escolha onde guardar o backup (Drive, e-mail, WhatsApp...).'; }
      catch (e) { msg.textContent = 'Não consegui abrir o compartilhamento.'; }
      return;
    }
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'llmusic-backup-' + hoje + '.json';
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    msg.textContent = 'Backup salvo em Downloads. Guarde o arquivo em um lugar seguro (nuvem, e-mail).';
  };
  imp.onclick = () => arq.click();
  arq.onchange = async () => {
    const f = arq.files[0];
    if (!f) return;
    try {
      const r = await Backup.importar(JSON.parse(await f.text()));
      msg.textContent = 'Backup importado: ' + r.dias + ' dias e ' + r.configs + ' configurações.';
      pratica = await Pratica.todos();
      meta = await Config.obter('habitos.meta', 10);
      desenhar();
    } catch (e) {
      msg.textContent = 'Não consegui importar: ' + (e.message || 'arquivo inválido') + '';
    }
    arq.value = '';
  };

  let lembreteAtivo = false;
  function pintarLembrete() {
    chipLem.setAttribute('aria-pressed', String(lembreteAtivo));
    chipLem.textContent = lembreteAtivo ? 'Lembrete ligado' : 'Ativar lembrete';
    if (!Lembretes.disponivel()) msgLem.textContent = 'Os lembretes funcionam no aplicativo instalado (APK). Aqui no navegador não é possível.';
  }
  async function aplicarLembrete() {
    const h = lerHora(hora.value);
    if (!h) { msgLem.textContent = 'Escolha um horário válido.'; return; }
    try {
      if (lembreteAtivo) { await Lembretes.ativar(h[0], h[1]); msgLem.textContent = 'Todo dia às ' + hora.value + '.'; }
      else { await Lembretes.desativar(); msgLem.textContent = ''; }
      await Config.guardar('lembrete', { ativo: lembreteAtivo, hora: hora.value });
    } catch (e) {
      lembreteAtivo = false; pintarLembrete();
      msgLem.textContent = e.message === 'permissão negada' ? 'Permita as notificações nas configurações do Android.' : 'Lembretes não estão disponíveis aqui.';
    }
  }
  chipLem.onclick = () => {
    if (!Lembretes.disponivel()) { pintarLembrete(); return; }
    lembreteAtivo = !lembreteAtivo; pintarLembrete(); aplicarLembrete();
  };
  hora.onchange = () => { if (lembreteAtivo) aplicarLembrete(); else Config.guardar('lembrete', { ativo: false, hora: hora.value }); };

  (async () => {
    const lem = await Config.obter('lembrete', { ativo: false, hora: '19:00' });
    if (!encerrada) { hora.value = lem.hora || '19:00'; lembreteAtivo = !!lem.ativo && Lembretes.disponivel(); pintarLembrete(); }
    pratica = await Pratica.todos();
    const m = await Config.obter('habitos.meta', 10);
    if (encerrada) return;
    meta = [5, 10, 20, 30].includes(m) ? m : 10;
    desenhar();
  })();

  return () => { encerrada = true; };
}
