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
