// Pacotes: instale ou remova pacotes de peças (arquivos .json). Tudo fica no seu celular.
import { pacotesInstalados, instalarPacote, removerPacote } from '../biblioteca.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela pacotes');
  const topo = el('header', 'topo');
  const voltar = el('button', 'botao-texto', '‹ Início');
  voltar.onclick = () => ir('');
  topo.append(voltar, el('h1', 'titulo-tela', 'Pacotes'));

  const texto = el('p', 'dica', 'Pacotes são arquivos .json com novas peças para a tela Partituras. Instale quantos quiser e remova quando não precisar. Só instale pacotes de quem você confia.');
  const lista = el('div', 'lista-pacotes');
  const acoes = el('div', 'acoes');
  const arq = document.createElement('input');
  arq.type = 'file'; arq.accept = '.json,application/json'; arq.hidden = true;
  const bArq = el('button', 'botao-sec', 'Instalar de um arquivo');
  const bEx = el('button', 'botao-sec', 'Instalar pacote de exemplo');
  acoes.append(bArq, bEx, arq);
  const msg = el('p', 'dica', '');
  msg.setAttribute('aria-live', 'polite');
  tela.append(topo, texto, lista, acoes, msg);
  raiz.append(tela);

  async function desenhar() {
    const l = await pacotesInstalados();
    if (encerrada) return;
    lista.innerHTML = '';
    if (!l.length) lista.append(el('p', 'vazio', 'Nenhum pacote instalado ainda.'));
    l.forEach((p) => {
      const cartao = el('div', 'cartao pacote');
      const info = el('div');
      info.append(el('h2', 'cartao-nome', p.nome), el('p', 'cartao-desc', p.pecas.length + (p.pecas.length === 1 ? ' peça: ' : ' peças: ') + p.pecas.map((x) => x.titulo).join(', ')));
      const rm = el('button', 'botao-sec remover', 'Remover');
      rm.setAttribute('aria-label', 'Remover pacote ' + p.nome);
      rm.onclick = async () => { await removerPacote(p.id); msg.textContent = 'Pacote removido.'; desenhar(); };
      cartao.append(info, rm);
      lista.append(cartao);
    });
  }
  async function instalar(obj) {
    try {
      const n = await instalarPacote(obj);
      msg.textContent = '✓ Pacote instalado (' + n + (n === 1 ? ' peça' : ' peças') + '). Veja em Partituras.';
    } catch (e) { msg.textContent = 'Não instalei: ' + e.message; }
    desenhar();
  }
  bArq.onclick = () => arq.click();
  arq.onchange = async () => {
    const f = arq.files[0];
    if (!f) return;
    let obj;
    try { obj = JSON.parse(await f.text()); } catch (e) { msg.textContent = 'Não instalei: o arquivo não é um JSON válido.'; arq.value = ''; return; }
    await instalar(obj);
    arq.value = '';
  };
  bEx.onclick = async () => {
    try { await instalar(await (await fetch('./pacotes/exemplo.json')).json()); }
    catch (e) { msg.textContent = 'Não consegui carregar o exemplo.'; }
  };
  desenhar();
  return () => { encerrada = true; };
}
