// Banco de dados local do app (fica só no seu celular).
// Usa o IndexedDB, que é o "banco" que todo navegador tem.
// Duas "gavetas" (lojas):
//   config  -> configurações (ex.: o último BPM usado do metrônomo)
//   pratica -> segundos praticados por dia (ex.: "2026-11-04" -> 1260)
//
// Se o navegador não deixar usar o IndexedDB (modo anônimo, por exemplo),
// o app continua funcionando, só que sem guardar nada depois de fechar.

const NOME = 'llmusic';
const VERSAO = 1;

let aberto = null;
const memoria = { config: new Map(), pratica: new Map() }; // plano B

function abrir() {
  if (!aberto) {
    aberto = new Promise((ok, erro) => {
      try {
        const pedido = indexedDB.open(NOME, VERSAO);
        pedido.onupgradeneeded = () => {
          pedido.result.createObjectStore('config');
          pedido.result.createObjectStore('pratica');
        };
        pedido.onsuccess = () => ok(pedido.result);
        pedido.onerror = () => erro(pedido.error);
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

// Lê TUDO de uma loja (usado no backup). Se o banco falhar, usa a memória.
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

// Backup completo em um objeto simples (vira um arquivo .json).
export const Backup = {
  async exportar() {
    return { formato: 'llmusic-backup', versao: 1, em: new Date().toISOString(), config: await Config.todos(), pratica: await Pratica.todos() };
  },
  // Mescla: configurações do backup substituem as atuais; dias de prática ficam com o maior valor.
  async importar(obj) {
    if (!obj || obj.formato !== 'llmusic-backup' || typeof obj.config !== 'object' || typeof obj.pratica !== 'object') {
      throw new Error('Este arquivo não é um backup do LLMusic.');
    }
    for (const k of Object.keys(obj.config)) await Config.guardar(k, obj.config[k]);
    for (const d of Object.keys(obj.pratica)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(d) && Number.isFinite(obj.pratica[d])) await Pratica.definirMaior(d, obj.pratica[d]);
    }
    return { configs: Object.keys(obj.config).length, dias: Object.keys(obj.pratica).length };
  }
};
