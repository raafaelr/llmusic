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

export const Config = {
  async obter(chave, padrao) {
    const v = await ler('config', chave);
    return v === undefined ? padrao : v;
  },
  guardar(chave, valor) {
    return gravar('config', chave, valor);
  },
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

// Backup completo em um objeto simples (vira um arquivo .json).
export const Backup = {
  async exportar() {
    return {
      formato: 'llmusic-backup', versao: 2, em: new Date().toISOString(),
      config: await Config.todos(),
      pratica: await Pratica.todos(),
      progresso: await Progresso.todos(),
      sessoes: await Sessoes.todos(),
      avaliacoes: await Avaliacoes.todos()
    };
  },
  // Mescla: configurações do backup substituem as atuais; dias de prática ficam com o maior valor.
  // Backups antigos (versão 1) continuam válidos: as gavetas novas simplesmente não vêm no arquivo.
  async importar(obj) {
    if (!obj || obj.formato !== 'llmusic-backup' || typeof obj.config !== 'object' || typeof obj.pratica !== 'object') {
      throw new Error('Este arquivo não é um backup do LLMusic.');
    }
    for (const k of Object.keys(obj.config)) await Config.guardar(k, obj.config[k]);
    for (const d of Object.keys(obj.pratica)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(d) && Number.isFinite(obj.pratica[d])) await Pratica.definirMaior(d, obj.pratica[d]);
    }
    let aulas = 0, sess = 0, avs = 0;
    if (obj.progresso && typeof obj.progresso === 'object') {
      for (const id of Object.keys(obj.progresso)) { await gravar('progresso', id, obj.progresso[id]); aulas++; }
    }
    if (obj.sessoes && typeof obj.sessoes === 'object') {
      for (const k of Object.keys(obj.sessoes)) { await gravar('sessoes', k, obj.sessoes[k]); sess++; }
    }
    if (obj.avaliacoes && typeof obj.avaliacoes === 'object') {
      for (const k of Object.keys(obj.avaliacoes)) { await gravar('avaliacoes', k, obj.avaliacoes[k]); avs++; }
    }
    return { configs: Object.keys(obj.config).length, dias: Object.keys(obj.pratica).length, aulas, sessoes: sess, avaliacoes: avs };
  }
};
