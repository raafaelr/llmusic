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
import { termoDeBusca } from './curso/repertorio.js';
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

// As buscas prontas, na ordem de quanto o app aproveita cada formato.
//
// Todas usam termoDeBusca(), e não o título da tela: o app é em português e
// esses sites são em inglês. "Estudo em Dó maior (Op. 27)" não acha nada;
// "Carulli Op. 27" acha. Ver o comentário de termoDeBusca, em
// js/curso/repertorio.js.
// O IMSLP é um caso à parte: a busca dele é por título de página de obra
// ("24 Études, Op.48 (Giuliani, Mauro)"), então palavra descritiva a mais
// derruba o resultado em vez de refinar. Quando o termo tem opus ou número de
// catálogo, manda só o sobrenome do compositor e esse número, que é o que a
// página tem no título.
function termoIMSLP(obra) {
  const t = obra.busca || '';
  const cat = t.match(/\b(?:Op\.|BWV|WoO)\s*\d+(?:\s*No\.\s*\d+)?/i);
  // Corta o termo logo depois do número de catálogo e joga fora o resto, que
  // é descrição. Cortar é melhor do que remontar com o sobrenome: "Agustín
  // Barrios Mangoré" tem duas palavras de sobrenome e a última é o apelido
  // guarani, então pegar a última palavra dava "Mangoré Op. 8".
  if (!cat) return termoDeBusca(obra);
  return t.slice(0, cat.index + cat[0].length);
}

export function buscaIMSLP(obra) {
  return 'https://imslp.org/index.php?search=' + encodeURIComponent(termoIMSLP(obra)) + '&title=Special%3ASearch';
}

// O IMSLP é a fonte certa para a MÚSICA e quase sempre a errada para o
// FORMATO: o que está lá é, na maioria, PDF digitalizado de uma edição
// antiga. O importador do app lê tablatura, não partitura — ele procura seis
// linhas e números em texto, e numa partitura as notas são desenho sobre
// cinco linhas. Um PDF desses cai no caminho de copiar à mão.
//
// Em MusicXML ou Guitar Pro o AlphaTab lê completo, com o ritmo exato.
export function buscaMusicXML(obra) {
  const termo = termoDeBusca(obra) + ' musicxml OR "guitar pro"';
  return 'https://duckduckgo.com/?q=' + encodeURIComponent(termo);
}

// Sem filtro de instrumento na URL: o número que eu tinha posto aqui era o do
// trombone baixo, e o filtro errado zerava a busca. O instrumento vai no
// texto, que é à prova de mudança de catálogo do site.
export function buscaMuseScore(obra) {
  return 'https://musescore.com/sheetmusic?text=' + encodeURIComponent(termoDeBusca(obra));
}

// O Classtab publica milhares de tablaturas de violão clássico em texto puro
// — o formato "e|--0--3--|". O app lê esse texto direto: dá para copiar da
// página e colar na tela de importar, sem baixar arquivo nenhum.
export function buscaClasstab(obra) {
  return 'https://duckduckgo.com/?q=' + encodeURIComponent('site:classtab.org ' + termoDeBusca(obra));
}
