// GRAFISMOS
//
// Desenhos em SVG que o app usa como linguagem visual: a roseta do violão, a
// silhueta do instrumento, a clave e um ramo. Todos herdam a cor do texto
// (currentColor), então funcionam nos dois temas sem duas versões.
//
// Regra de uso, para isto não virar enfeite: um grafismo só entra onde faz
// trabalho — marcar o começo de uma seção, emoldurar conteúdo musical, dar
// rosto a uma tela vazia. Em tela cheia de informação ele fica de fora.
// Tudo aqui é aria-hidden: é desenho, não conteúdo, e leitor de tela deve
// passar direto.

function svg(viewBox, corpo, classe) {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  s.setAttribute('viewBox', viewBox);
  s.setAttribute('aria-hidden', 'true');
  s.setAttribute('focusable', 'false');
  if (classe) s.setAttribute('class', classe);
  s.innerHTML = corpo;
  return s;
}

// A roseta: o desenho da boca do violão clássico, em geometria modernista.
// Círculos concêntricos e raios — simples o bastante para virar marca d'água.
export function roseta(classe = 'grafismo-roseta') {
  const raios = Array.from({ length: 24 }, (_, i) => {
    const a = (i * Math.PI * 2) / 24;
    const x1 = 50 + Math.cos(a) * 26, y1 = 50 + Math.sin(a) * 26;
    const x2 = 50 + Math.cos(a) * 40, y2 = 50 + Math.sin(a) * 40;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
  }).join('');
  return svg('0 0 100 100', `
    <g fill="none" stroke="currentColor" stroke-width="1.4">
      <circle cx="50" cy="50" r="46"/>
      <circle cx="50" cy="50" r="40"/>
      <circle cx="50" cy="50" r="26"/>
      <circle cx="50" cy="50" r="22"/>
      ${raios}
    </g>`, classe);
}

// Silhueta do violão clássico, de frente. Serve para telas vazias.
export function violao(classe = 'grafismo-violao') {
  return svg('0 0 60 150', `
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
      <path d="M30 56c13 0 20 9 20 20 0 8-5 13-5 20 0 9 7 15 7 27 0 14-10 24-22 24S8 137 8 123c0-12 7-18 7-27 0-7-5-12-5-20 0-11 7-20 20-20z"/>
      <rect x="25" y="14" width="10" height="42" rx="1"/>
      <rect x="23" y="4" width="14" height="10" rx="2"/>
      <circle cx="30" cy="96" r="10"/>
      <path d="M18 118h24" stroke-width="3"/>
    </g>`, classe);
}

// Clave de sol, desenhada em traço único. Marca de seção.
export function clave(classe = 'grafismo-clave') {
  return svg('0 0 40 100', `
    <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
      d="M20 88c0 6-4 9-8 9s-7-3-7-7 3-7 7-7c6 0 10 5 10 12 0-10 2-20 2-32 0-18-8-24-8-35 0-9 4-18 8-18s6 8 6 15c0 14-12 22-18 30-5 7-8 13-8 20 0 10 8 17 17 17 8 0 14-6 14-14 0-7-5-13-12-13"/>`, classe);
}

// Ramo discreto, de folhas simples. Modernismo brasileiro sem bandeira:
// a referência é botânica, não patriótica.
export function ramo(classe = 'grafismo-ramo') {
  const folhas = [18, 32, 46, 60, 74].map((y, i) => {
    const lado = i % 2 ? 1 : -1;
    return `<path d="M20 ${y}c${lado * 12} -4 ${lado * 16} -10 ${lado * 15} -2 -1 8 -9 11 -15 2z"/>`;
  }).join('');
  return svg('0 0 40 100', `
    <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
      <path d="M20 94V8"/>
      ${folhas}
    </g>`, classe);
}

// Uma linha de pauta: cinco linhas finas, para separar seções.
// Em CSS existe .pauta-divisor para o caso simples; esta versão em SVG é
// para quando se quer a pauta mais presente, com clave na ponta.
export function pautaDivisor(classe = 'grafismo-pauta') {
  const linhas = [0, 4, 8, 12, 16].map((y) => `<line x1="0" y1="${y}" x2="300" y2="${y}"/>`).join('');
  return svg('0 0 300 16', `
    <g fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.5">${linhas}</g>`, classe);
}

// Coloca um grafismo como marca d'água dentro de um elemento.
export function marcaDagua(elemento, desenho) {
  const caixa = document.createElement('div');
  caixa.className = 'marca-dagua';
  caixa.setAttribute('aria-hidden', 'true');
  caixa.append(desenho);
  elemento.prepend(caixa);
  return caixa;
}

// Tela vazia com rosto: desenho, uma frase e, se houver, uma saída.
// CERTIFICADO DE NÍVEL, como arquivo SVG de verdade.
//
// Devolve TEXTO, não elemento: o certificado sai do app como arquivo, para
// guardar ou mostrar, e um arquivo não tem a folha de estilo do app por perto.
// Por isso as cores da paleta Villa-Lobos entram escritas, e as fontes têm
// pilha de reserva com serif no fim — num visualizador de imagens qualquer,
// Cormorant Garamond não existe.
//
// Reaproveita os grafismos acima pondo-os dentro de um grupo com "color"
// explícito, que é o que o currentColor deles resolve.
//
// Não leva nome de pessoa nenhuma, e isso é decisão, não esquecimento: o app
// não guarda dado pessoal. O certificado diz o nível, a data e as duas notas.
const VL = {
  floresta: '#263F35', musical: '#496D5B', salvia: '#879989', marfim: '#F3EFE3',
  dourado: '#B49358', papel: '#D9D4C8', grafite: '#292D2A'
};
export function certificadoSVG({ n, titulo, em, teorica, pratica, dominadas, total }) {
  const L = 1000, A = 707;                       // proporção A4 deitado
  const data = em ? new Date(em) : new Date();
  const dataTxt = isNaN(data) ? '' : data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  s.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  s.setAttribute('viewBox', `0 0 ${L} ${A}`);
  s.setAttribute('width', L); s.setAttribute('height', A);
  const serif = "'Cormorant Garamond','Iowan Old Style',Georgia,'Times New Roman',serif";
  const sans = "'Inter',system-ui,'Segoe UI',Roboto,sans-serif";
  s.innerHTML = `
    <rect width="${L}" height="${A}" fill="${VL.marfim}"/>
    <rect x="26" y="26" width="${L - 52}" height="${A - 52}" fill="none" stroke="${VL.floresta}" stroke-width="3"/>
    <rect x="38" y="38" width="${L - 76}" height="${A - 76}" fill="none" stroke="${VL.dourado}" stroke-width="1.5"/>
    <text x="${L / 2}" y="132" text-anchor="middle" font-family="${sans}" font-size="17"
      letter-spacing="5" fill="${VL.musical}">LLMUSIC · VIOLÃO CLÁSSICO</text>
    <text x="${L / 2}" y="212" text-anchor="middle" font-family="${serif}" font-size="60"
      fill="${VL.floresta}">Certificado de conclusão</text>
    <line x1="${L / 2 - 90}" y1="244" x2="${L / 2 + 90}" y2="244" stroke="${VL.dourado}" stroke-width="2"/>
    <text x="${L / 2}" y="320" text-anchor="middle" font-family="${serif}" font-size="104"
      fill="${VL.musical}">Nível ${n}</text>
    <text x="${L / 2}" y="372" text-anchor="middle" font-family="${serif}" font-size="34"
      fill="${VL.grafite}">${escapar(titulo || '')}</text>
    <text x="${L / 2}" y="438" text-anchor="middle" font-family="${sans}" font-size="16"
      fill="${VL.grafite}">${dominadas} de ${total} aulas dominadas${
  teorica === null || teorica === undefined ? '' : ` · prova teórica ${teorica}%`}${
  pratica === null || pratica === undefined ? '' : ` · avaliação prática ${pratica}%`}</text>
    <text x="${L / 2}" y="474" text-anchor="middle" font-family="${sans}" font-size="14"
      fill="${VL.salvia}">Avaliação prática autodeclarada com critérios observáveis. O app não julga execução por áudio.</text>
    <text x="${L / 2}" y="588" text-anchor="middle" font-family="${serif}" font-size="22"
      fill="${VL.floresta}">${dataTxt}</text>
    <text x="${L / 2}" y="638" text-anchor="middle" font-family="${serif}" font-size="19"
      font-style="italic" fill="${VL.musical}">para a Liz e a Lívia</text>`;
  // Os grafismos: roseta como marca d'água atrás, clave e ramo nas laterais.
  const por = (no, x, y, l, a, cor, op) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${x} ${y})`);
    g.setAttribute('style', 'color:' + cor);
    if (op !== undefined) g.setAttribute('opacity', String(op));
    no.setAttribute('width', l); no.setAttribute('height', a);
    g.append(no);
    s.append(g);
  };
  // Sem as classes do app: o arquivo sai sozinho no mundo, e uma classe que
  // aponta para um CSS inexistente só atrapalha se o SVG for parar dentro de
  // alguma página com folha de estilo própria.
  por(roseta(''), L / 2 - 150, A / 2 - 150, 300, 300, VL.salvia, 0.14);
  por(clave(''), 96, 236, 64, 160, VL.dourado, 0.9);
  por(ramo(''), L - 150, 236, 56, 160, VL.musical, 0.85);
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(s) + '\n';
}
function escapar(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function telaVazia(texto, acao) {
  const d = document.createElement('div');
  d.className = 'tela-vazia';
  d.append(violao());
  const p = document.createElement('p');
  p.className = 'tela-vazia-texto';
  p.textContent = texto;
  d.append(p);
  if (acao) d.append(acao);
  return d;
}
