// Validador do curso do LLMusic: estrutura, pré-requisitos, cobertura e blocos.
// Uso: node validar.mjs [/caminho/do/repo]
const RAIZ = process.argv[2] || '/home/claude/llmusic';
const { MAPA, carregarNivel, auditar } = await import(RAIZ + '/js/curso/curriculo.js');

let erros = 0, avisos = 0;
const erro = (m) => { erros++; console.log('ERRO  ' + m); };
const aviso = (m) => { avisos++; console.log('aviso ' + m); };

const BLOCOS_OK = new Set(['p', 'h', 'h3', 'dica', 'aviso', 'def', 'lista', 'passos', 'erros', 'resumo', 'tabela',
  'comparar', 'pauta', 'tab', 'braco', 'acorde', 'figuras', 'compasso', 'violao', 'mao', 'postura', 'teclado',
  'semitons', 'ciclo', 'regua', 'metronomo', 'tocar', 'check', 'exercicio', 'ouvir', 'ir']);
const EX_OK = new Set(['identificar-nota', 'figura', 'nome-figura', 'corda', 'ouvido', 'perguntas']);
const FIG_OK = new Set(['semibreve', 'minima', 'seminima', 'colcheia', 'semicolcheia', 'fusa']);
const ROTAS = new Set(['', 'metronomo', 'afinador', 'braco', 'leitura', 'partituras', 'habitos', 'pacotes', 'caged',
  'teoria', 'ritmo', 'caged-aulas', 'importar', 'curso', 'aula', 'painel', 'auditoria', 'tecnicas', 'exercicios',
  'plano', 'repertorio', 'avaliacoes', 'tutor', 'materiais', 'jornada']);

const niveis = [];
for (const meta of MAPA) niveis.push(await carregarNivel(meta.n));

const todasIds = new Set();
const porId = new Map();
for (const nv of niveis) {
  for (const m of nv.modulos || []) {
    for (const a of m.aulas || []) {
      if (todasIds.has(a.id)) erro('id repetido: ' + a.id);
      todasIds.add(a.id);
      porId.set(a.id, { a, m, nv });
    }
  }
}

const assuntosDoMapa = new Set(MAPA.flatMap((n) => n.modulos.flatMap((m) => m.assuntos)));

for (const [id, { a, m, nv }] of porId) {
  const onde = `${id} (${nv.n}.${m.id})`;
  if (!/^n\d+\.\d+\.\d+$/.test(id)) erro(onde + ': id fora do padrão nN.M.A');
  if (!id.startsWith('n' + nv.n + '.')) erro(onde + ': id não corresponde ao nível');
  if (!a.titulo) erro(onde + ': sem título');
  if (!a.objetivo) erro(onde + ': sem objetivo de aprendizagem');
  if (!Number.isFinite(a.minutos)) erro(onde + ': sem minutos');
  if (!Array.isArray(a.disciplinas) || !a.disciplinas.length) erro(onde + ': sem disciplinas');
  if (!Array.isArray(a.cobre) || !a.cobre.length) erro(onde + ': sem "cobre"');
  (a.cobre || []).forEach((c) => { if (!assuntosDoMapa.has(c)) erro(onde + ': cobre assunto inexistente no MAPA: "' + c + '"'); });
  (a.prereq || []).forEach((p) => { if (!porId.has(p)) erro(onde + ': prereq inexistente: ' + p); });
  if (!Array.isArray(a.blocos) || a.blocos.length < 5) erro(onde + ': menos de 5 blocos');
  if (!Array.isArray(a.quiz) || a.quiz.length < 4) erro(onde + ': quiz com menos de 4 perguntas');
  if (!a.pratica || !Array.isArray(a.pratica.itens) || !a.pratica.criterio) erro(onde + ': sem avaliação prática completa');

  // exigência pedagógica: visual + prática + fixação
  const tipos = (a.blocos || []).map((b) => b.t);
  const temVisual = tipos.some((t) => ['pauta', 'tab', 'braco', 'acorde', 'figuras', 'compasso', 'violao', 'mao', 'postura', 'teclado', 'semitons', 'ciclo', 'regua', 'tabela', 'comparar'].includes(t));
  const temPratica = tipos.some((t) => ['tocar', 'metronomo', 'check', 'exercicio', 'ouvir'].includes(t));
  const temFixacao = tipos.includes('exercicio');
  const temResumo = tipos.includes('resumo');
  const temErros = tipos.includes('erros');
  if (!temVisual) erro(onde + ': sem nenhuma representação visual');
  if (!temPratica) erro(onde + ': sem nenhuma atividade prática');
  if (!temFixacao) aviso(onde + ': sem exercício interativo de fixação');
  if (!temResumo) aviso(onde + ': sem resumo');
  if (!temErros) aviso(onde + ': sem erros comuns');

  (a.quiz || []).forEach((q, i) => {
    if (!q.texto) erro(onde + ' quiz ' + i + ': sem texto');
    if (!Array.isArray(q.opcoes) || q.opcoes.length < 3) erro(onde + ' quiz ' + i + ': menos de 3 opções');
    if (new Set(q.opcoes).size !== (q.opcoes || []).length) erro(onde + ' quiz ' + i + ': opções repetidas');
    if (!(q.correta >= 0 && q.correta < (q.opcoes || []).length)) erro(onde + ' quiz ' + i + ': índice correto inválido');
  });

  (a.blocos || []).forEach((b, i) => {
    const q = onde + ' bloco ' + i + ' (' + b.t + ')';
    if (!BLOCOS_OK.has(b.t)) erro(q + ': tipo de bloco desconhecido');
    if (b.t === 'exercicio') {
      if (!EX_OK.has(b.tipo)) erro(q + ': tipo de exercício desconhecido: ' + b.tipo);
      if (b.tipo === 'perguntas') {
        if (!Array.isArray(b.perguntas) || !b.perguntas.length) erro(q + ': sem perguntas');
        (b.perguntas || []).forEach((p, k) => {
          if (!Array.isArray(p.opcoes) || p.opcoes.length < 3) erro(q + ' pergunta ' + k + ': menos de 3 opções');
          if (new Set(p.opcoes).size !== p.opcoes.length) erro(q + ' pergunta ' + k + ': opções repetidas');
          if (!(p.correta >= 0 && p.correta < p.opcoes.length)) erro(q + ' pergunta ' + k + ': correta inválida');
        });
      }
    }
    if (b.t === 'tabela') {
      const n = (b.cab || []).length;
      (b.linhas || []).forEach((l, k) => { if (n && l.length !== n) erro(q + ' linha ' + k + ': ' + l.length + ' células para ' + n + ' colunas'); });
    }
    if (b.t === 'tab') {
      (b.compassos || []).forEach((c, k) => {
        (c.notas || []).forEach((nt, j) => {
          if (nt.fig && !FIG_OK.has(nt.fig)) erro(q + ' c' + k + ' n' + j + ': figura inválida ' + nt.fig);
          (nt.pos || []).forEach((pp) => {
            if (!Array.isArray(pp) || pp.length !== 2) return erro(q + ' c' + k + ' n' + j + ': posição malformada');
            const [corda, casa] = pp;
            if (!(corda >= 1 && corda <= 6)) erro(q + ' c' + k + ' n' + j + ': corda ' + corda);
            if (!(casa >= 0 && casa <= 19)) erro(q + ' c' + k + ' n' + j + ': casa ' + casa);
          });
        });
      });
    }
    if (b.t === 'braco') {
      (b.notas || []).forEach((nt, j) => {
        if (!(nt.corda >= 1 && nt.corda <= 6)) erro(q + ' nota ' + j + ': corda ' + nt.corda);
        if (!(nt.casa >= 0 && nt.casa <= (b.casas || 12))) erro(q + ' nota ' + j + ': casa ' + nt.casa + ' fora de ' + (b.casas || 12));
      });
    }
    if (b.t === 'acorde') {
      (b.lista || [b]).forEach((ac, j) => {
        if (!Array.isArray(ac.cordas) || ac.cordas.length !== 6) erro(q + ' acorde ' + j + ': precisa de 6 cordas');
        (ac.cordas || []).forEach((c) => { if (!(c >= -1 && c <= 19)) erro(q + ' acorde ' + j + ': casa ' + c); });
      });
    }
    if (b.t === 'tocar') {
      (b.seq || []).forEach((p, j) => {
        const corda = Array.isArray(p) ? p[0] : p.corda;
        const casa = Array.isArray(p) ? p[1] : p.casa;
        if (p.midi === undefined && !(corda >= 1 && corda <= 6 && casa >= 0 && casa <= 19)) erro(q + ' seq ' + j + ': posição inválida');
      });
    }
    if (b.t === 'ir' && !ROTAS.has(String(b.rota).split('/')[0])) erro(q + ': rota inexistente "' + b.rota + '"');
    if (b.t === 'pauta' && b.txt) {
      b.txt.split('|').forEach((parte) => {
        parte.trim().split(/\s+/).filter(Boolean).forEach((tok0) => {
          const tok = tok0.replace(/~$/, '');
          const [alt, fig = 'q'] = tok.split('/');
          if (!/^[obqcsf]\.?$/.test(fig)) erro(q + ': figura "' + fig + '" em "' + tok0 + '"');
          if (alt !== 'z' && alt !== 'Z') {
            alt.split('+').forEach((nota) => {
              if (!/^[a-gA-G][#b]?-?\d$/.test(nota)) erro(q + ': nota "' + nota + '" em "' + tok0 + '"');
            });
          }
        });
      });
    }
  });
}

// pré-requisitos sem ciclos e sempre apontando para trás
for (const [id, { a }] of porId) {
  (a.prereq || []).forEach((p) => {
    const ordem = (x) => x.replace(/[^0-9.]/g, '').split('.').map(Number);
    const [an, am, aa] = ordem(id), [bn, bm, bb] = ordem(p);
    if (bn > an || (bn === an && (bm > am || (bm === am && bb >= aa)))) erro(id + ': prereq ' + p + ' não vem antes');
  });
}

const aud = auditar(niveis);
console.log('\n--- Cobertura curricular ---');
aud.porNivel.forEach((n) => console.log(`Nível ${n.n}: ${n.feitos}/${n.total} assuntos (${n.pct}%) — ${n.titulo}`));
console.log(`TOTAL: ${aud.feitos}/${aud.total} (${aud.pct}%)`);
console.log(`\nAulas: ${porId.size} · Erros: ${erros} · Avisos: ${avisos}`);
process.exit(erros ? 1 : 0);
