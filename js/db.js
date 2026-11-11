// Banco de dados local do app (fica só no seu celular).
// Usa o IndexedDB, que é o "banco" que todo navegador tem.
//
// Gavetas (lojas):
//   config     -> configurações (ex.: o último BPM usado do metrônomo)
//   pratica    -> segundos praticados por dia (ex.: "2026-11-04" -> 1260)
//   progresso  -> uma ficha por aula do curso (status, estrelas, datas)
//   sessoes    -> cada sessão de estudo registrada no Plano de Estudos
//   avaliacoes -> histórico de provas e autoavaliações
//
// Se o navegador não deixar usar o IndexedDB (modo anônimo, por exemplo),
// o app continua funcionando, só que sem guardar nada depois de fechar.

const NOME = 'llmusic';
const VERSAO = 2;                       // v1 tinha só config e pratica
const LOJAS = ['config', 'pratica', 'progresso', 'sessoes', 'avaliacoes'];

let aberto = null;
// Plano B: uma cópia em memória de tudo, usada se o IndexedDB falhar.
const memoria = Object.fromEntries(LOJAS.map((l) => [l, new Map()]));

function abrir() {
  if (!aberto) {
    aberto = new Promise((ok, erro) => {
      try {
        const pedido = indexedDB.open(NOME, VERSAO);
        pedido.onupgradeneeded = () => {
          // Cria só as gavetas que ainda não existem: quem já usava o app não perde nada.
          const db = pedido.result;
          LOJAS.forEach((l) => { if (!db.objectStoreNames.contains(l)) db.createObjectStore(l); });
        };
        pedido.onsuccess = () => ok(pedido.result);
        pedido.onerror = () => erro(pedido.error);
        pedido.onblocked = () => erro(new Error('banco bloqueado por outra aba'));
      } catch (e) {
        erro(e);
      }
    });
  }
  return aberto;
}

async function ler(loja, chave) {
  try {
    const db = await abrir();
    return await new Promise((ok, erro) => {
      const q = db.transaction(loja).objectStore(loja).get(chave);
      q.onsuccess = () => ok(q.result);
      q.onerror = () => erro(q.error);
    });
  } catch (e) {
    return memoria[loja].get(chave);
  }
}

async function gravar(loja, chave, valor) {
  memoria[loja].set(chave, valor);
  try {
    const db = await abrir();
    await new Promise((ok, erro) => {
      const t = db.transaction(loja, 'readwrite');
      t.objectStore(loja).put(valor, chave);
      t.oncomplete = () => ok();
      t.onerror = () => erro(t.error);
    });
  } catch (e) { /* sem banco: fica só na memória */ }
}

async function apagar(loja, chave) {
  memoria[loja].delete(chave);
  try {
    const db = await abrir();
    await new Promise((ok, erro) => {
      const t = db.transaction(loja, 'readwrite');
      t.objectStore(loja).delete(chave);
      t.oncomplete = () => ok();
      t.onerror = () => erro(t.error);
    });
  } catch (e) { /* idem */ }
}

// Lê TUDO de uma loja (usado no backup e nos painéis). Se o banco falhar, usa a memória.
async function lerTudo(loja) {
  try {
    const db = await abrir();
    return await new Promise((ok, erro) => {
      const r = {};
      const q = db.transaction(loja).objectStore(loja).openCursor();
      q.onsuccess = () => {
        const c = q.result;
        if (c) { r[c.key] = c.value; c.continue(); } else ok(r);
      };
      q.onerror = () => erro(q.error);
    });
  } catch (e) {
    return Object.fromEntries(memoria[loja]);
  }
}

// Chaves que a sincronização usa para si mesma. Nunca saem daqui: o token é
// credencial, e os carimbos e o estado do último envio são de cada aparelho.
export const CHAVES_PRIVADAS = ['sinc.token', 'sinc.carimbos', 'sinc.sha', 'sinc.em'];
const C_CARIMBOS = 'sinc.carimbos';

export const Config = {
  async obter(chave, padrao) {
    const v = await ler('config', chave);
    return v === undefined ? padrao : v;
  },
  // Além do valor, guarda QUANDO esta chave mudou. É esse carimbo que permite,
  // ao juntar dois aparelhos, saber qual preferência é a mais nova — sem ele a
  // última sincronização ganharia sempre, mesmo trazendo um valor mais velho.
  async guardar(chave, valor) {
    await gravar('config', chave, valor);
    if (CHAVES_PRIVADAS.includes(chave)) return;   // não carimba a si mesma
    const c = (await ler('config', C_CARIMBOS)) || {};
    c[chave] = new Date().toISOString();
    await gravar('config', C_CARIMBOS, c);
  },
  carimbos() { return ler('config', C_CARIMBOS).then((c) => c || {}); },
  todos() { return lerTudo('config'); }
};

export const Pratica = {
  // Soma segundos ao dia indicado. Lê e grava na mesma transação,
  // para não perder contagem se duas coisas gravarem ao mesmo tempo.
  async somar(dia, segundos) {
    memoria.pratica.set(dia, (memoria.pratica.get(dia) || 0) + segundos);
    try {
      const db = await abrir();
      await new Promise((ok, erro) => {
        const t = db.transaction('pratica', 'readwrite');
        const loja = t.objectStore('pratica');
        const q = loja.get(dia);
        q.onsuccess = () => loja.put((q.result || 0) + segundos, dia);
        t.oncomplete = () => ok();
        t.onerror = () => erro(t.error);
      });
    } catch (e) { /* plano B já guardou na memória */ }
  },
  async segundosDoDia(dia) {
    return (await ler('pratica', dia)) || 0;
  },
  todos() { return lerTudo('pratica'); },
  // Usado na importação: guarda o MAIOR valor entre o que já existe e o que veio do backup.
  async definirMaior(dia, segundos) {
    const atual = (await ler('pratica', dia)) || 0;
    if (segundos > atual) await gravar('pratica', dia, segundos);
  }
};

// Ficha de uma aula do curso. A chave é o id da aula (ex.: "n1.1.2").
// Formato: { status, estudada, quiz:{acertos,total,estrelas,em}, auto:{...}, check:{...}, em, visitas }
export const Progresso = {
  async obter(id) { return (await ler('progresso', id)) || null; },
  guardar(id, ficha) { return gravar('progresso', id, ficha); },
  todos() { return lerTudo('progresso'); },
  // Altera só alguns campos da ficha, mantendo o resto.
  async mesclar(id, partes) {
    const atual = (await ler('progresso', id)) || {};
    const nova = { ...atual, ...partes, em: new Date().toISOString() };
    await gravar('progresso', id, nova);
    return nova;
  },
  limpar(id) { return apagar('progresso', id); }
};

// Uma sessão de estudo registrada pelo aluno (Plano de Estudos).
// Chave: carimbo de tempo ISO. Valor: { dia, segundos, blocos:[...], anotacao }
export const Sessoes = {
  async registrar(sessao) {
    const chave = sessao.em || new Date().toISOString();
    await gravar('sessoes', chave, { ...sessao, em: chave });
    return chave;
  },
  todos() { return lerTudo('sessoes'); },
  apagar(chave) { return apagar('sessoes', chave); }
};

// Histórico de avaliações (provas teóricas e autoavaliações práticas).
// Chave: carimbo de tempo ISO + alvo. Valor: { tipo, alvo, titulo, acertos, total, estrelas, em }
export const Avaliacoes = {
  async registrar(av) {
    const chave = (av.em || new Date().toISOString()) + '|' + (av.alvo || '');
    await gravar('avaliacoes', chave, { ...av, em: av.em || new Date().toISOString() });
    return chave;
  },
  todos() { return lerTudo('avaliacoes'); },
  async lista() {
    const t = await lerTudo('avaliacoes');
    return Object.values(t).sort((a, b) => (a.em < b.em ? 1 : -1));
  }
};

// Junta duas fichas da mesma aula sem perder nada de nenhum dos dois lados.
// Regra de cada campo, seguindo o que o próprio app já considera verdade:
//   estudada        — basta ter sido marcada em um aparelho
//   quiz            — fica o MELHOR resultado, como quando se refaz o quiz
//   autoavaliacao   — fica a mais recente, porque é um retrato do momento
//   visitas         — soma o que cada aparelho viu
function fundirFicha(a, b) {
  if (!a) return b;
  if (!b) return a;
  const nota = (q) => (q && q.total ? q.acertos / q.total : -1);
  const maisNovo = (x, y) => (!x ? y : !y ? x : (String(x.em || '') >= String(y.em || '') ? x : y));
  const recente = String(a.em || '') >= String(b.em || '') ? a : b;
  return {
    ...(recente === a ? b : a), ...recente,
    estudada: !!(a.estudada || b.estudada),
    quiz: nota(a.quiz) >= nota(b.quiz) ? a.quiz : b.quiz,
    autoavaliacao: maisNovo(a.autoavaliacao, b.autoavaliacao),
    visitas: Math.max(a.visitas || 0, b.visitas || 0),
    em: String(a.em || '') >= String(b.em || '') ? a.em : b.em
  };
}

// Backup completo em um objeto simples (vira um arquivo .json).
export const Backup = {
  async exportar() {
    const config = await Config.todos();
    // O token de sincronização NUNCA entra no arquivo: o backup vai para o
    // Drive, para o e-mail, para o WhatsApp — e levaria a credencial junto.
    for (const k of CHAVES_PRIVADAS) delete config[k];
    return {
      formato: 'llmusic-backup', versao: 2, em: new Date().toISOString(),
      carimbos: await Config.carimbos(),
      config,
      pratica: await Pratica.todos(),
      progresso: await Progresso.todos(),
      sessoes: await Sessoes.todos(),
      avaliacoes: await Avaliacoes.todos()
    };
  },
  // Junta um backup ao que já existe no aparelho, SEM apagar o que é mais novo.
  //
  // Antes isto sobrescrevia: restaurar um backup de ontem apagava o progresso de
  // hoje. Com dois aparelhos sincronizando, o estrago seria diário. Agora cada
  // gaveta tem a sua regra, e nenhuma delas perde informação:
  //   pratica      o maior número de minutos de cada dia
  //   progresso    ficha a ficha, campo a campo (ver fundirFicha)
  //   sessoes      união: a chave é o instante, duas sessões nunca colidem
  //   avaliacoes   união pelo mesmo motivo
  //   config       vence quem tem o carimbo mais recente; sem carimbo, o local
  //
  // Backups antigos (versão 1, sem carimbos) continuam válidos: sem carimbo do
  // lado de lá, o valor local é preservado, que é o comportamento seguro.
  async importar(obj) {
    if (!obj || obj.formato !== 'llmusic-backup' || typeof obj.config !== 'object' || typeof obj.pratica !== 'object') {
      throw new Error('Este arquivo não é um backup do LLMusic.');
    }
    const meus = await Config.carimbos();
    const deles = obj.carimbos || {};
    let configs = 0;
    for (const k of Object.keys(obj.config)) {
      if (CHAVES_PRIVADAS.includes(k)) continue;
      const atual = await Config.obter(k, undefined);
      // só troca se o outro lado for comprovadamente mais novo, ou se aqui não existe
      if (atual !== undefined && !(deles[k] && (!meus[k] || deles[k] > meus[k]))) continue;
      await Config.guardar(k, obj.config[k]);
      if (deles[k]) { const c = await Config.carimbos(); c[k] = deles[k]; await gravar('config', 'sinc.carimbos', c); }
      configs++;
    }
    for (const d of Object.keys(obj.pratica)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(d) && Number.isFinite(obj.pratica[d])) await Pratica.definirMaior(d, obj.pratica[d]);
    }
    let aulas = 0, sess = 0, avs = 0;
    if (obj.progresso && typeof obj.progresso === 'object') {
      for (const id of Object.keys(obj.progresso)) {
        const antes = await ler('progresso', id);
        const nova = fundirFicha(antes || null, obj.progresso[id]);
        await gravar('progresso', id, nova);
        if (!antes || JSON.stringify(antes) !== JSON.stringify(nova)) aulas++;
      }
    }
    if (obj.sessoes && typeof obj.sessoes === 'object') {
      for (const k of Object.keys(obj.sessoes)) {
        if ((await ler('sessoes', k)) === undefined) { await gravar('sessoes', k, obj.sessoes[k]); sess++; }
      }
    }
    if (obj.avaliacoes && typeof obj.avaliacoes === 'object') {
      for (const k of Object.keys(obj.avaliacoes)) {
        if ((await ler('avaliacoes', k)) === undefined) { await gravar('avaliacoes', k, obj.avaliacoes[k]); avs++; }
      }
    }
    return { configs, dias: Object.keys(obj.pratica).length, aulas, sessoes: sess, avaliacoes: avs };
  }
};
