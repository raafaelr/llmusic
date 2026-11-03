// Biblioteca de peças: as peças do app + as dos pacotes que você instalou.
// Os pacotes ficam guardados no banco local, na chave "pacotes".
import { Config } from './db.js';
import { PECAS, validarPacote } from './pecas.js';

export async function pacotesInstalados() {
  const l = await Config.obter('pacotes', []);
  return Array.isArray(l) ? l : [];
}
export async function todasAsPecas() {
  const pacotes = await pacotesInstalados();
  const extras = [];
  pacotes.forEach((pk) => pk.pecas.forEach((p) => extras.push({ ...p, pacote: pk.nome, id: pk.id + ':' + p.id })));
  return [...PECAS, ...extras];
}
export async function instalarPacote(obj) {
  const v = validarPacote(obj);
  if (!v.ok) throw new Error(v.erro);
  const lista = (await pacotesInstalados()).filter((p) => p.id !== obj.id);   // reinstalar = atualizar
  lista.push({ id: obj.id, nome: obj.nome, pecas: obj.pecas });
  await Config.guardar('pacotes', lista);
  return obj.pecas.length;
}
export async function removerPacote(id) {
  await Config.guardar('pacotes', (await pacotesInstalados()).filter((p) => p.id !== id));
}

// ---------- Minhas tablaturas (importadas ou criadas por você) ----------
// Ficam num pacote especial chamado "minhas", então aparecem na tela Partituras junto com as outras.
export const ID_MINHAS = 'minhas';
export async function minhasPecas() {
  const pk = (await pacotesInstalados()).find((p) => p.id === ID_MINHAS);
  return pk ? pk.pecas : [];
}
async function guardarMinhas(pecas) {
  const lista = (await pacotesInstalados()).filter((p) => p.id !== ID_MINHAS);
  if (pecas.length) lista.push({ id: ID_MINHAS, nome: 'Minhas tablaturas', pecas });
  await Config.guardar('pacotes', lista);
}
export async function salvarMinha(peca) {
  const v = validarPacote({ formato: 'llmusic-pacote', versao: 1, id: ID_MINHAS, nome: 'Minhas tablaturas', pecas: [peca] });
  if (!v.ok) throw new Error(v.erro);
  const atuais = await minhasPecas();
  const i = atuais.findIndex((p) => p.id === peca.id);
  if (i >= 0) atuais[i] = peca; else atuais.push(peca);
  await guardarMinhas(atuais);
  return ID_MINHAS + ':' + peca.id;     // id como aparece na tela Partituras
}
export async function removerMinha(id) { await guardarMinhas((await minhasPecas()).filter((p) => p.id !== id)); }
export function pacoteDasMinhas(pecas) { return { formato: 'llmusic-pacote', versao: 1, id: 'minhas-tablaturas', nome: 'Minhas tablaturas', pecas }; }
