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
// proxima: { aoAvancar(), rotulo, exigeEstrelas } — opcional. Quando vem, o
// resultado ganha um botão para seguir adiante sem voltar para a tela da aula.
export function rodarQuiz({ tela, titulo, perguntas, chave, textoVoltar = '‹ Lição', aoVoltar, aoDesenhar, aoNovaTentativa, aoFim = null, ativo = () => true, proxima = null }) {
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

    // "Próxima aula" aqui no resultado poupa o usuário de voltar e rolar a tela
    // inteira até o fim da aula. Com as três estrelas ele vai direto; abaixo
    // disso o app pergunta antes, porque seguir com a teoria mal resolvida é
    // justamente o que faz a aula seguinte parecer difícil demais.
    const limite = proxima && proxima.exigeEstrelas != null ? proxima.exigeEstrelas : 3;
    const direto = proxima && e >= limite;
    let bProx = null;
    if (proxima && proxima.aoAvancar) {
      bProx = el('button', direto ? 'botao-principal' : 'botao-sec', proxima.rotulo || 'Próxima aula');
      bProx.onclick = () => {
        if (direto) return proxima.aoAvancar();
        botoes.hidden = true;
        const cf = el('div', 'fim-confirma');
        cf.append(el('p', 'legenda', 'Você fez ' + e + ' de 3 estrelas neste questionário. '
          + 'Quer tentar de novo antes de seguir?'));
        const bb = el('div', 'fim-botoes');
        if (aoNovaTentativa) {
          const r = el('button', 'botao-principal', 'Refazer o questionário');
          r.onclick = aoNovaTentativa; bb.append(r);
        }
        const av = el('button', 'botao-sec', 'Avançar mesmo assim');
        av.onclick = () => proxima.aoAvancar(); bb.append(av);
        cf.append(bb); painel.append(cf);
      };
    }

    if (bProx && direto) botoes.append(bProx);
    if (aoNovaTentativa) {
      const o = el('button', direto ? 'botao-sec' : 'botao-principal', 'Tentar de novo');
      o.onclick = aoNovaTentativa; botoes.append(o);
    }
    if (bProx && !direto) botoes.append(bProx);
    const vo = el('button', 'botao-sec', 'Voltar'); vo.onclick = aoVoltar; botoes.append(vo);
    painel.append(est, msg, botoes);
    tela.append(topo2, painel);
  }
  mostrar();
}
