// Atualizar o app e cuidar do backup. Rota #/atualizar.
//
// Esta tela existe por causa de um erro antigo: até hoje, cada APK saía do
// GitHub assinado com uma chave diferente, e o Android se recusa a instalar
// por cima quando a assinatura muda. A única saída era desinstalar — e
// desinstalar apaga o banco local, ou seja, todo o progresso do curso.
//
// Isso foi corrigido na origem: agora todo build usa a mesma chave, e a
// instalação passa por cima. Mas a lição fica: o backup vem ANTES da
// atualização nesta tela, e não depois.
import { VERSAO_APP, ARQUIVOS_APP } from '../versao.js';
import { Backup, Config } from '../db.js';
import { icone, botaoIcone } from '../icones.js';
import { nativo, salvarNoCelular, compartilharArquivo, PASTA, CAMINHO_HUMANO } from '../nativo.js';

const REPO = 'raafaelr/llmusic';
const API_RELEASE = 'https://api.github.com/repos/' + REPO + '/releases/tags/apk-latest';
const APK_URL = 'https://github.com/' + REPO + '/releases/download/apk-latest/LLMusic.apk';
const C_BACKUP = 'backup.ultimo';
const C_CHECADO = 'atualizar.ultimaChecagem';   // para não bater no GitHub toda vez que a tela abre
const HORAS_ENTRE_CHECAGENS = 6;

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function diasDesde(iso) {
  if (!iso) return null;
  const t = Date.parse(iso);
  return Number.isNaN(t) ? null : Math.floor((Date.now() - t) / 86400000);
}

function quando(dias) {
  if (dias === null) return 'nunca';
  if (dias <= 0) return 'hoje';
  if (dias === 1) return 'ontem';
  return 'há ' + dias + ' dias';
}

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela');
  raiz.append(tela);

  const topo = el('header', 'topo');
  const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Atualizar e backup'));
  tela.append(topo);

  // =================================================== 1. backup primeiro
  const secB = el('section', 'grupo');
  secB.append(el('h2', 'rotulo-grupo titulo-bloco', '1. Guarde o seu progresso'));
  secB.append(el('p', 'dica', 'Tudo o que você fez — aulas, quizzes, sessões de prática, avaliações, '
    + 'trechos marcados e preferências — fica só neste aparelho. Um arquivo de backup é o que torna '
    + 'isso independente do app estar instalado.'));

  const estadoBk = el('p', 'hab-tempo', 'Verificando…');
  secB.append(estadoBk);

  const acoesBk = el('div', 'bloco-botoes');
  const btExportar = botaoIcone('botao-principal', 'baixar', 'Salvar backup agora');
  const btEnviar = botaoIcone('botao-sec', 'enviar', 'Enviar para a nuvem');
  btEnviar.hidden = !nativo();
  const rotImportar = el('label', 'botao-sec rotulo-arquivo', '⬆ Restaurar de um backup');
  const inpImportar = document.createElement('input');
  inpImportar.type = 'file'; inpImportar.accept = 'application/json,.json'; inpImportar.hidden = true;
  rotImportar.append(inpImportar);
  acoesBk.append(btExportar, btEnviar, rotImportar);
  secB.append(acoesBk);

  const msgBk = el('p', 'feedback', '');
  msgBk.setAttribute('aria-live', 'polite');
  secB.append(msgBk);

  secB.append(el('p', 'dica', nativo()
    ? 'No APK o arquivo é gravado em ' + CAMINHO_HUMANO + ' — abra o app Meus Arquivos, entre em '
      + 'Documentos e procure a pasta ' + PASTA + '. Mesmo assim, mande uma cópia para você mesmo '
      + '(Drive, e-mail): se o aparelho se perder, a pasta vai junto.'
    : 'Depois de salvar, mande o arquivo para você mesmo — e-mail, Google Drive, o que for. '
      + 'No computador ele cai em Downloads, e Downloads some se você formatar a máquina.'));
  tela.append(secB);

  async function mostrarEstadoBackup() {
    const ultimo = await Config.obter(C_BACKUP, null);
    if (encerrada) return;
    const d = diasDesde(ultimo);
    estadoBk.textContent = 'Último backup: ' + quando(d) + '.';
    estadoBk.className = (d === null || d > 14) ? 'hab-tempo vencido' : 'hab-tempo';
    if (d === null) estadoBk.textContent += ' Você ainda não salvou nenhum.';
    else if (d > 14) estadoBk.textContent += ' Já faz tempo — vale salvar outro.';
  }

  // Monta o arquivo e devolve { nome, texto, kb }.
  async function prepararBackup() {
    const texto = JSON.stringify(await Backup.exportar(), null, 1);
    return {
      nome: 'llmusic-backup-' + new Date().toISOString().slice(0, 10) + '.json',
      texto, kb: Math.max(1, Math.round(texto.length / 1024))
    };
  }

  async function registrar() {
    await Config.guardar(C_BACKUP, new Date().toISOString());
    if (!encerrada) mostrarEstadoBackup();
  }

  function falhou(e) {
    if (encerrada) return;
    msgBk.textContent = 'Não consegui gerar o backup: ' + (e && e.message ? e.message : e);
    msgBk.className = 'feedback errado';
  }

  btExportar.onclick = async () => {
    msgBk.textContent = 'Preparando…'; msgBk.className = 'feedback';
    try {
      const { nome, texto, kb } = await prepararBackup();
      if (nativo()) {
        // No APK o download do navegador não grava nada; quem escreve é o Filesystem.
        let caminho;
        try {
          caminho = (await salvarNoCelular(nome, texto)).caminho;
        } catch (e) {
          // Se não der para gravar na pasta pública, abre o compartilhamento:
          // é melhor o arquivo sair por ali do que ele ficar sem backup nenhum.
          await compartilharArquivo(nome, texto);
          await registrar();
          if (encerrada) return;
          msgBk.textContent = 'Não consegui gravar em ' + CAMINHO_HUMANO
            + ' (' + (e && e.message ? e.message : e) + '), então abri o compartilhamento. '
            + 'Escolha Drive, e-mail ou outro lugar para guardar.';
          msgBk.className = 'feedback';
          return;
        }
        await registrar();
        if (encerrada) return;
        msgBk.textContent = '✓ Salvo (' + kb + ' KB) em: ' + caminho
          + '. Procure por "' + PASTA + '" no app Meus Arquivos, dentro de Documentos.';
      } else {
        const url = URL.createObjectURL(new Blob([texto], { type: 'application/json' }));
        const a = document.createElement('a');
        a.href = url; a.download = nome;
        document.body.append(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 10000);
        await registrar();
        if (encerrada) return;
        msgBk.textContent = '✓ ' + nome + ' salvo em Downloads (' + kb + ' KB). Guarde numa nuvem.';
      }
      msgBk.className = 'feedback certo';
    } catch (e) { falhou(e); }
  };

  btEnviar.onclick = async () => {
    msgBk.textContent = 'Preparando…'; msgBk.className = 'feedback';
    try {
      const { nome, texto } = await prepararBackup();
      await compartilharArquivo(nome, texto);
      await registrar();
      if (encerrada) return;
      msgBk.textContent = 'Escolha onde guardar: Drive, e-mail, WhatsApp… O arquivo também ficou em '
        + CAMINHO_HUMANO + '.';
      msgBk.className = 'feedback certo';
    } catch (e) { falhou(e); }
  };

  inpImportar.onchange = async () => {
    const f = inpImportar.files && inpImportar.files[0];
    if (!f) return;
    msgBk.textContent = 'Lendo o arquivo…'; msgBk.className = 'feedback';
    try {
      const r = await Backup.importar(JSON.parse(await f.text()));
      if (encerrada) return;
      msgBk.textContent = '✓ Restaurado: ' + r.aulas + ' aulas, ' + r.dias + ' dias de prática, '
        + r.sessoes + ' sessões, ' + r.avaliacoes + ' avaliações e ' + r.configs + ' preferências.';
      msgBk.className = 'feedback certo';
    } catch (e) {
      if (encerrada) return;
      msgBk.textContent = 'Não consegui restaurar: ' + (e && e.message ? e.message : e);
      msgBk.className = 'feedback errado';
    } finally {
      inpImportar.value = '';
    }
  };

  // ================================================== 2. versão e update
  const secV = el('section', 'grupo');
  secV.append(el('h2', 'rotulo-grupo titulo-bloco', '2. Versão do app'));

  const linhaV = el('div', 'cartao');
  linhaV.append(el('p', 'rotulo-grupo', 'Esta instalação'));
  linhaV.append(el('p', 'cartao-nome', VERSAO_APP));
  linhaV.append(el('p', 'cartao-desc', ARQUIVOS_APP + ' arquivos guardados para funcionar sem internet'));
  secV.append(linhaV);

  const estadoV = el('p', 'hab-tempo', '');
  estadoV.setAttribute('aria-live', 'polite');
  secV.append(estadoV);

  const acoesV = el('div', 'bloco-botoes');
  const btVer = botaoIcone('botao-sec', 'recarregar', 'Procurar atualização');
  acoesV.append(btVer);
  secV.append(acoesV);
  const alvoV = el('div');
  secV.append(alvoV);
  tela.append(secV);

  async function procurar(automatica) {
    estadoV.className = 'hab-tempo';
    estadoV.textContent = 'Procurando…';
    alvoV.innerHTML = '';
    try {
      const r = await fetch(API_RELEASE, { headers: { Accept: 'application/vnd.github+json' }, cache: 'no-store' });
      if (r.status === 403) throw new Error('o GitHub limitou as consultas por agora — tente daqui a pouco');
      if (!r.ok) throw new Error('o GitHub respondeu ' + r.status);
      const rel = await r.json();
      if (encerrada) return;
      await Config.guardar(C_CHECADO, new Date().toISOString());

      // O workflow escreve "versao: <impressão digital>" nas notas da release.
      const m = /versao:\s*(\S+)/.exec(rel.body || '');
      const versaoLa = m ? m[1] : null;
      const asset = (rel.assets || []).find((a) => a.name === 'LLMusic.apk');
      const quandoLa = asset ? new Date(asset.updated_at).toLocaleDateString('pt-BR') : '—';

      if (versaoLa && versaoLa === VERSAO_APP) {
        estadoV.textContent = '✓ Você está na versão mais recente (publicada em ' + quandoLa + ').';
        return;
      }
      estadoV.className = 'hab-tempo vencido';
      estadoV.textContent = versaoLa
        ? '⟳ Há uma versão mais nova, de ' + quandoLa + ' (' + versaoLa + ').'
        : '⟳ Há um APK publicado em ' + quandoLa + '. Não consegui ler a versão dele, então compare pela data.';

      const cx = el('div', 'cartao cartao-destaque');
      cx.append(el('p', 'texto-bloco', 'Baixe e instale por cima do app atual. '
        + 'Não desinstale: a partir de agora todos os APKs são assinados com a mesma chave, '
        + 'então a instalação passa por cima e o seu progresso fica onde está.'));
      const bt = el('a', 'botao-principal');
      bt.append(icone('baixar'), document.createTextNode(' Baixar o APK ('
        + (asset ? Math.round(asset.size / 1048576 * 10) / 10 + ' MB' : '') + ')'));
      bt.href = APK_URL; bt.target = '_blank'; bt.rel = 'noopener noreferrer';
      cx.append(bt);
      alvoV.append(cx);
    } catch (e) {
      if (encerrada) return;
      estadoV.className = 'hab-tempo';
      estadoV.textContent = 'Não consegui falar com o GitHub agora (' + (e && e.message ? e.message : e) + '). '
        + 'Procurar atualização é a única parte do app que precisa de internet — o resto funciona offline.';
    }
  }
  btVer.onclick = () => procurar(false);

  // Na abertura, só consulta se já faz algumas horas. O app é offline-first:
  // bater no GitHub toda vez que a tela abre gasta rede à toa e esbarra no
  // limite de consultas de quem não está autenticado.
  async function talvezProcurar() {
    const ultima = await Config.obter(C_CHECADO, null);
    if (encerrada) return;
    const horas = ultima ? (Date.now() - Date.parse(ultima)) / 3600000 : Infinity;
    if (horas >= HORAS_ENTRE_CHECAGENS) return procurar(true);
    estadoV.textContent = 'Procurei há pouco e não havia versão nova. '
      + 'Toque em “Procurar atualização” para conferir de novo.';
  }

  // ============================================ 3. o que acontece com os dados
  const secI = el('section', 'grupo');
  secI.append(el('h2', 'rotulo-grupo titulo-bloco', 'O que acontece com os seus dados'));
  const tab = el('div', 'tabela-simples');
  [['Instalar o APK novo por cima', 'Progresso mantido'],
   ['Atualizar a versão web (recarregar)', 'Progresso mantido'],
   ['Desinstalar o app', 'APAGA TUDO — restaure depois pelo backup'],
   ['Limpar os dados do app nas configurações do Android', 'APAGA TUDO — restaure depois pelo backup'],
   ['Trocar de celular', 'Não vai junto — leve o arquivo de backup']
  ].forEach(([o, q]) => {
    const l = el('div', 'tabela-linha');
    l.append(el('span', '', o));
    l.append(el('strong', q.startsWith('APAGA') || q.startsWith('Não') ? 'perigo' : '', q));
    tab.append(l);
  });
  secI.append(tab);
  tela.append(secI);

  mostrarEstadoBackup().catch(() => {});
  talvezProcurar().catch(() => {});

  return () => { encerrada = true; };
}
