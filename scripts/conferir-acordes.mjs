// Conferidor do dicionário de acordes.
//
// Por que existe: as formas não são digitadas, são geradas por uma busca
// (js/teoria.js). Busca errada gera 500 acordes errados em silêncio, e um
// dicionário errado é pior do que dicionário nenhum — quem consulta aprende
// errado e não tem como desconfiar. Então aqui cada forma é "tocada" no papel:
// soma-se a casa à corda solta, lista-se as notas que soam e compara-se com a
// fórmula. Nenhuma forma do app passou só pelo olho de alguém.
//
// Uso: node scripts/conferir-acordes.mjs [caminho-do-repo]
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const RAIZ = resolve(process.argv[2] || process.cwd());
const { QUALIDADES, formasDoAcorde, soaComo } = await import(pathToFileURL(RAIZ + '/js/teoria.js').href);

const SOLTAS_6A1 = [40, 45, 50, 55, 59, 64];
const NOMES = ['Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si'];
const mod12 = (n) => ((n % 12) + 12) % 12;

let erros = 0, avisos = 0, formas = 0, acordes = 0, semForma = 0;
const erro = (m) => { erros++; console.log('ERRO  ' + m); };
const aviso = (m) => { avisos++; console.log('aviso ' + m); };

for (let raiz = 0; raiz < 12; raiz++) {
  for (const q of QUALIDADES) {
    acordes++;
    const onde = NOMES[raiz] + (q.cifra || ' maior');
    const lista = formasDoAcorde(raiz, q.id);
    if (!lista.length) { semForma++; aviso(onde + ': nenhuma forma'); continue; }
    if (lista.length > 3) erro(onde + ': ' + lista.length + ' formas (o máximo é 3)');
    if (lista[0].tipo !== 'Principal') erro(onde + ': a primeira forma não é a Principal');

    const vistas = new Set();
    lista.forEach((f, i) => {
      formas++;
      const nome = onde + ' forma ' + (i + 1);
      const c = f.cordas;
      if (!Array.isArray(c) || c.length !== 6) return erro(nome + ': não tem 6 cordas');

      // 1. as notas que soam têm de ser exatamente as do acorde
      const soando = soaComo(c);
      const permitido = new Set(q.f.map((x) => mod12(raiz + x)));
      soando.forEach((p) => {
        if (!permitido.has(p)) erro(nome + ': soa ' + NOMES[p] + ', que não pertence ao acorde');
      });
      // A quinta pode faltar de quatro notas em diante (é como se toca); o
      // resto, não: sem a terça ou a sétima o acorde vira outro acorde.
      const obrig = q.f.filter((x) => !(q.f.length >= 4 && x === 7)).map((x) => mod12(raiz + x));
      obrig.forEach((p) => {
        if (!soando.includes(p)) erro(nome + ': falta ' + NOMES[p] + ' (intervalo obrigatório)');
      });

      // 2. a fundamental tem de estar no baixo
      const tocadas = [];
      c.forEach((casa, k) => { if (casa >= 0) tocadas.push(k); });
      if (tocadas.length < 4) erro(nome + ': só ' + tocadas.length + ' cordas');
      if (tocadas[tocadas.length - 1] - tocadas[0] + 1 !== tocadas.length) {
        erro(nome + ': corda muda no meio (' + c.join(' ') + ')');
      }
      if (mod12(SOLTAS_6A1[tocadas[0]] + c[tocadas[0]]) !== raiz) {
        erro(nome + ': o baixo é ' + NOMES[mod12(SOLTAS_6A1[tocadas[0]] + c[tocadas[0]])] + ', não a fundamental');
      }

      // 3. tem de caber numa mão
      const presas = c.filter((x) => x > 0);
      if (presas.length) {
        const min = Math.min(...presas), max = Math.max(...presas);
        if (max - min > 3) erro(nome + ': abre ' + (max - min + 1) + ' casas');
        if (max > 15) erro(nome + ': casa ' + max + ', alto demais para o dicionário');
        const iMin = c.indexOf(min);
        const temPestana = !!f.pestana;
        if (temPestana) {
          if (iMin !== tocadas[0]) erro(nome + ': pestana que não começa na corda mais grave tocada');
          if (c.slice(iMin, c.lastIndexOf(min) + 1).some((x) => x === 0)) {
            erro(nome + ': pestana com corda solta por baixo dela');
          }
        }
        const dedos = temPestana ? 1 + presas.filter((x) => x > min).length : presas.length;
        if (dedos > 4) erro(nome + ': pede ' + dedos + ' dedos');
        // 4. a numeração dos dedos tem de bater com a forma
        const numerados = f.dedos.filter(Boolean).length;
        if (numerados !== presas.length) {
          erro(nome + ': ' + numerados + ' dedos numerados para ' + presas.length + ' cordas presas');
        }
        if (f.dedos.some((d) => d && !'1234'.includes(d))) erro(nome + ': dedo fora de 1 a 4');
      }

      // 5. a casa indicada no desenho tem de ser a casa onde a forma está
      const esperado = (c.some((x) => x === 0) || !presas.length || Math.min(...presas) <= 1)
        ? 0 : Math.min(...presas);
      if (f.casaInicial !== esperado) erro(nome + ': desenha a partir da casa ' + f.casaInicial + ', e a forma está na ' + esperado);

      // 6. formas repetidas no mesmo acorde não ajudam ninguém
      const chave = c.join(',');
      if (vistas.has(chave)) erro(nome + ': repete uma forma anterior');
      vistas.add(chave);
    });
  }
}

console.log(`\nAcordes: ${acordes} · Formas: ${formas} · Sem forma: ${semForma} · Erros: ${erros} · Avisos: ${avisos}`);
process.exit(erros ? 1 : 0);
