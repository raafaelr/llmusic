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

export const Config = {
  async obter(chave, padrao) {
    const v = await ler('config', chave);
    return v === undefined ? padrao : v;
  },
  guardar(chave, valor) {
    return gravar('config', chave, valor);
  }
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
  }
};
