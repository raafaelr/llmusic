// Tela de quiz reaproveitável: faz as perguntas, mostra a resposta certa, dá estrelas e guarda o recorde.
import { Config } from './db.js';
import { estrelas } from './leitura.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

// opcoes: { tela, titulo, perguntas, chave (Config), textoVoltar, aoVoltar, aoDesenhar(desenho, svg) }
export function rodarQuiz({ tela, titulo, perguntas, chave, textoVoltar = '‹ Lição', aoVoltar, aoDesenhar, aoNovaTentativa, aoFim = null, ativo = () => true }) {
  let i = 0, acertos = 0, respondida = false;
  tela.innerHTML = '';
  tela.className = 'tela teoria quiz-tela';
  const topo = el('header', 'topo');
  const sair = el('button', 'botao-texto', textoVoltar);
  sair.onclick = aoVoltar;
  topo.append(sair, el('h1', 'titulo-tela', titulo));
  const prog = el('p', 'dica', '');
  const enun = el('h2', 'enunciado', '');
  enun.setAttribute('role', 'status');
  const desenho = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  desenho.setAttribute('class', 'braco-svg desenho-quiz');
  const opc = el('div', 'opcoes-quiz');
  const feed = el('p', 'feedback', '');
  const prox = el('button', 'botao-principal', 'Continuar');
  prox.hidden = true;
  tela.append(topo, prog, enun, desenho, opc, feed, prox);

  function mostrar() {
    respondida = false;
    const q = perguntas[i];
    prog.textContent = 'Pergunta ' + (i + 1) + ' de ' + perguntas.length;
    enun.textContent = q.texto;
    feed.textContent = ''; feed.className = 'feedback';
    prox.hidden = true;
    desenho.style.display = q.desenho && aoDesenhar ? '' : 'none';
    if (q.desenho && aoDesenhar) aoDesenhar(q.desenho, desenho, false);
    opc.innerHTML = '';
    opc.dataset.n = q.opcoes.length;
    q.opcoes.forEach((o, k) => {
      const b = el('button', 'botao-sec opcao', o);
      b.onclick = () => responder(k, b);
      opc.append(b);
    });
  }
  function responder(k, b) {
    if (respondida) return;
    respondida = true;
    const q = perguntas[i];
    const certo = k === q.correta;
    if (certo) acertos++;
    [...opc.children].forEach((x, idx) => { x.disabled = true; if (idx === q.correta) x.classList.add('certa'); });
    if (!certo) b.classList.add('errada');
    feed.textContent = (certo ? '✓ Certo! ' : 'Resposta: ' + q.opcoes[q.correta] + '. ') + (q.explicacao || '');
    feed.className = 'feedback ' + (certo ? 'certo' : 'errado');
    if (q.desenho && aoDesenhar) aoDesenhar(q.desenho, desenho, true);
    prox.hidden = false;
    prox.textContent = i + 1 >= perguntas.length ? 'Ver resultado' : 'Continuar';
  }
  prox.onclick = () => { i++; if (i >= perguntas.length) fim(); else mostrar(); };
  async function fim() {
    const e = estrelas(acertos, perguntas.length);
    const antes = chave ? await Config.obter(chave, 0) : 0;
    if (chave && e > antes) await Config.guardar(chave, e);
    if (aoFim) await aoFim(acertos, perguntas.length, e);
    if (!ativo()) return;
    tela.innerHTML = '';
    const topo2 = el('header', 'topo');
    const v = el('button', 'botao-texto', textoVoltar); v.onclick = aoVoltar;
    topo2.append(v, el('h1', 'titulo-tela', 'Resultado'));
    const est = el('p', 'estrelas', '★'.repeat(e) + '☆'.repeat(3 - e));
    est.dataset.estrelas = e;
    est.setAttribute('aria-label', e + ' de 3 estrelas');
    const msg = el('p', 'fim-msg', acertos + ' de ' + perguntas.length + ' certas' + (e > antes ? ' · novo recorde!' : ''));
    const painel = el('div', 'painel-fim');
    const botoes = el('div', 'fim-botoes');
    if (aoNovaTentativa) { const o = el('button', 'botao-principal', 'Tentar de novo'); o.onclick = aoNovaTentativa; botoes.append(o); }
    const vo = el('button', 'botao-sec', 'Voltar'); vo.onclick = aoVoltar; botoes.append(vo);
    painel.append(est, msg, botoes);
    tela.append(topo2, painel);
  }
  mostrar();
}
