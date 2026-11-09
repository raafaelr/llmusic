// LIGAÇÃO ENTRE UMA OBRA DO REPERTÓRIO E A PARTITURA DELA
//
// O Repertório traz 44 obras em domínio público, com o que cada uma ensina e
// como estudá-la — mas sem as notas. Escrever as notas de cabeça seria o
// caminho fácil e o errado: uma nota errada numa partitura que você vai
// decorar é pior do que partitura nenhuma, porque você não tem como saber.
//
// Então o app faz o contrário: você baixa a partitura de uma fonte boa (as
// obras são domínio público, o IMSLP tem quase todas de graça), importa pelo
// leitor que já existe, e o app guarda que AQUELE arquivo é AQUELA obra.
// A partir daí o catálogo e a partitura viram a mesma coisa: abrir a obra
// abre a peça, com cursor, tablatura e metrônomo.
//
// Aqui mora só o vínculo: { id da obra: id da peça na biblioteca }.
import { Config } from './db.js';
import { todasAsPecas } from './biblioteca.js';

const CHAVE = 'repertorio.partituras';

export async function vinculos() {
  return await Config.obter(CHAVE, {});
}

// O id da peça ligada a esta obra, ou null. Se a peça foi apagada da
// biblioteca depois, o vínculo é ignorado (e limpo) em vez de apontar para
// o vazio e quebrar a tela.
export async function partituraDaObra(obraId) {
  const v = await vinculos();
  const id = v[obraId];
  if (!id) return null;
  // todasAsPecas já devolve as peças de pacotes com o id completo
  // ("minhas:lagrima"), e as do app com o id simples.
  const peca = (await todasAsPecas()).find((p) => p.id === id);
  if (peca) return { id, peca };
  await desligar(obraId);
  return null;
}

export async function ligar(obraId, idDaPeca) {
  const v = await vinculos();
  v[obraId] = idDaPeca;
  await Config.guardar(CHAVE, v);
}

export async function desligar(obraId) {
  const v = await vinculos();
  delete v[obraId];
  await Config.guardar(CHAVE, v);
}

// Endereço de busca no IMSLP para uma obra. O IMSLP é a biblioteca pública de
// partituras em domínio público; a busca já vai com o compositor junto para
// não cair em homônimo.
export function buscaIMSLP(obra) {
  const termo = encodeURIComponent(obra.titulo + ' ' + obra.compositor);
  return 'https://imslp.org/index.php?search=' + termo + '&title=Special%3ASearch';
}
