// SINCRONIZAÇÃO ENTRE APARELHOS, POR UM REPOSITÓRIO PRIVADO SEU NO GITHUB
//
// Por que um arquivo novo: isto não é banco (js/db.js guarda dados) nem ponte
// com o Android (js/nativo.js). É credencial + protocolo de rede, e precisa ser
// chamado de dois lugares distantes — do main.js, ao abrir e ao sair do app, e
// da tela de backup. Misturar com qualquer um dos dois escondia a credencial
// dentro de um módulo que faz outra coisa.
//
// Como funciona, em uma frase: o aparelho baixa o estado.json do repositório,
// FUNDE com o que tem aqui (Backup.importar nunca apaga o que é mais novo) e
// devolve o resultado. Quem chegar depois funde de novo. Não há servidor, não
// há conta de terceiro: o dado é seu, no seu repositório privado.
//
// Sobre o token: fica só no aparelho, na gaveta de configurações, e é removido
// de qualquer backup exportado (ver CHAVES_PRIVADAS em js/db.js). Use um
// fine-grained token limitado a UM repositório, com permissão de Conteúdo:
// leitura e escrita. Se vazar, o estrago é esse repositório, e revogar é um
// clique.
import { Config, Backup } from './db.js';

const C_TOKEN = 'sinc.token';
const C_REPO = 'sinc.repo';
const C_SHA = 'sinc.sha';     // sha do arquivo que este aparelho viu por último
const C_EM = 'sinc.em';       // quando este aparelho sincronizou pela última vez
const ARQUIVO = 'estado.json';
const API = 'https://api.github.com';

export async function configurada() {
  return !!(await Config.obter(C_TOKEN, '')) && !!(await Config.obter(C_REPO, ''));
}

export async function estado() {
  return {
    repo: await Config.obter(C_REPO, ''),
    temToken: !!(await Config.obter(C_TOKEN, '')),
    em: await Config.obter(C_EM, null)
  };
}

export async function desconectar() {
  await Config.guardar(C_TOKEN, '');
  await Config.guardar(C_REPO, '');
  await Config.guardar(C_SHA, '');
}

// JSON <-> base64 aguentando acentos. O btoa() cru quebra com "ç" e "ã", e o
// conteúdo aqui é todo em português.
function paraBase64(texto) {
  const bytes = new TextEncoder().encode(texto);
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s);
}
function deBase64(b64) {
  const s = atob(String(b64).replace(/\s/g, ''));
  const bytes = Uint8Array.from(s, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function chamar(caminho, opcoes = {}) {
  const token = await Config.obter(C_TOKEN, '');
  const r = await fetch(API + caminho, {
    ...opcoes,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: 'Bearer ' + token,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(opcoes.body ? { 'Content-Type': 'application/json' } : {}),
      ...(opcoes.headers || {})
    }
  });
  return r;
}

function explicar(r) {
  if (r.status === 401) return new Error('token inválido ou expirado');
  if (r.status === 403) return new Error('token sem permissão de Conteúdo neste repositório');
  if (r.status === 404) return new Error('repositório não encontrado (confira o nome e a permissão do token)');
  if (r.status === 409) return new Error('conflito');
  return new Error('GitHub respondeu ' + r.status);
}

// Confere o token e o repositório antes de guardar, para o erro aparecer na
// hora de conectar e não só na primeira sincronização.
export async function conectar(repo, token) {
  const limpo = String(repo || '').trim().replace(/^https?:\/\/github\.com\//, '').replace(/\.git$/, '').replace(/\/+$/, '');
  if (!/^[\w.-]+\/[\w.-]+$/.test(limpo)) throw new Error('Escreva o repositório como dono/nome, por exemplo raafaelr/llmusic-dados.');
  if (!String(token || '').trim()) throw new Error('Falta o token.');
  await Config.guardar(C_TOKEN, String(token).trim());
  await Config.guardar(C_REPO, limpo);
  const r = await chamar('/repos/' + limpo);
  if (!r.ok) { await desconectar(); throw explicar(r); }
  const info = await r.json();
  if (info.private === false) {
    await desconectar();
    throw new Error('Esse repositório é público. Use um privado: o arquivo guarda o seu progresso.');
  }
  await Config.guardar(C_SHA, '');
  return limpo;
}

// Baixa o estado.json. Devolve { dados, sha } — sha null quando o arquivo ainda
// não existe (primeira vez).
async function baixar(repo) {
  const r = await chamar('/repos/' + repo + '/contents/' + ARQUIVO + '?ref=HEAD', { cache: 'no-store' });
  if (r.status === 404) return { dados: null, sha: null };
  if (!r.ok) throw explicar(r);
  const j = await r.json();
  let dados = null;
  try { dados = JSON.parse(deBase64(j.content)); } catch { dados = null; }
  return { dados, sha: j.sha };
}

async function enviar(repo, dados, sha) {
  const corpo = {
    message: 'llmusic: progresso de ' + new Date().toISOString(),
    content: paraBase64(JSON.stringify(dados, null, 1))
  };
  if (sha) corpo.sha = sha;
  const r = await chamar('/repos/' + repo + '/contents/' + ARQUIVO, { method: 'PUT', body: JSON.stringify(corpo) });
  if (!r.ok) throw explicar(r);
  const j = await r.json();
  return j.content && j.content.sha;
}

// Uma rodada completa: baixa, funde o que veio com o que está aqui, e devolve o
// resultado fundido para o repositório. Se alguém gravou entre o nosso baixar e
// o nosso enviar, o GitHub recusa com 409 e a gente recomeça — fundir de novo é
// seguro, porque nenhuma regra de fusão apaga informação.
export async function sincronizar({ tentativas = 2 } = {}) {
  const repo = await Config.obter(C_REPO, '');
  if (!repo || !(await Config.obter(C_TOKEN, ''))) throw new Error('Sincronização não configurada.');

  let resumo = { configs: 0, dias: 0, aulas: 0, sessoes: 0, avaliacoes: 0 };
  for (let n = 0; n < tentativas; n++) {
    const { dados, sha } = await baixar(repo);
    if (dados) {
      try { resumo = await Backup.importar(dados); }
      catch { /* arquivo de outro formato: o nosso envio conserta */ }
    }
    const meu = await Backup.exportar();
    try {
      const novoSha = await enviar(repo, meu, sha);
      await Config.guardar(C_SHA, novoSha || '');
      const agora = new Date().toISOString();
      await Config.guardar(C_EM, agora);
      return { ...resumo, em: agora, primeiraVez: !sha };
    } catch (e) {
      if (e.message !== 'conflito' || n === tentativas - 1) throw e;
      // outro aparelho gravou no meio do caminho: recomeça e funde de novo
    }
  }
  throw new Error('Não consegui gravar: o outro aparelho está sincronizando ao mesmo tempo.');
}

// Sincronização automática. Chamada ao abrir o app e ao sair dele.
//
// Não há execução em segundo plano no APK, então estes são os dois únicos
// momentos possíveis. O intervalo mínimo evita gastar rede e cota da API quando
// o app é aberto e fechado várias vezes seguidas; "forcar" ignora ele.
const MINUTOS_MINIMOS = 5;
let rodando = false;

export async function sincronizarSePuder({ forcar = false } = {}) {
  if (rodando || !navigator.onLine) return null;
  if (!(await configurada())) return null;
  if (!forcar) {
    const ultima = await Config.obter(C_EM, null);
    if (ultima && (Date.now() - Date.parse(ultima)) < MINUTOS_MINIMOS * 60000) return null;
  }
  rodando = true;
  try { return await sincronizar(); }
  catch { return null; }          // silencioso: é pano de fundo, não pode atrapalhar o estudo
  finally { rodando = false; }
}
