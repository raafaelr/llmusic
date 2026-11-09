// Configurações: aparência, acessibilidade e dados.
// Rota #/config.
//
// Regra desta tela: nada decorativo. Toda opção aqui muda alguma coisa de
// verdade e fica guardada no aparelho.
import { TEMAS, TAMANHOS, trocarTema, trocarTamanho, trocarMovimento, lerTema, lerTamanho, lerMovimento } from '../tema.js';
import { Config } from '../db.js';
import { deveConferir, ligarConferencia, abrirEspelho } from '../postura.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela');
  raiz.append(tela);

  async function desenhar() {
    const tema = await lerTema();
    const tamanho = await lerTamanho();
    const semAnim = await lerMovimento();
    const meta = await Config.obter('habitos.meta', 15);
    const conferir = await deveConferir();
    if (encerrada) return;

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Configurações'));
    tela.append(topo);

    // ------------------------------------------------------------ aparência
    const sec1 = el('section', 'grupo');
    sec1.append(el('h2', 'rotulo-grupo', 'Tema'));
    sec1.append(el('p', 'dica', 'A escolha vale em todas as telas e fica guardada no aparelho.'));
    TEMAS.forEach((t) => {
      const c = el('button', 'cartao' + (tema === t.id ? ' cartao-destaque' : ''));
      const cab = el('div', 'tec-cab');
      cab.append(el('h3', 'cartao-nome', t.nome));
      if (tema === t.id) cab.append(el('span', 'tec-ok', 'em uso'));
      c.append(cab);
      c.append(el('p', 'cartao-desc', t.desc));
      c.onclick = async () => { await trocarTema(t.id); if (!encerrada) desenhar(); };
      sec1.append(c);
    });
    tela.append(sec1);

    // ------------------------------------------------------- tamanho da letra
    const sec2 = el('section', 'grupo');
    sec2.append(el('h2', 'rotulo-grupo', 'Tamanho da letra'));
    sec2.append(el('p', 'dica', 'Aumenta tudo junto: textos, botões e diagramas acompanham.'));
    const chips = el('div', 'chips');
    TAMANHOS.forEach((t) => {
      const b = el('button', 'chip' + (tamanho === t.id ? ' ativo' : ''), t.nome + (t.desc ? ' (' + t.desc + ')' : ''));
      b.setAttribute('aria-pressed', String(tamanho === t.id));
      b.onclick = async () => { await trocarTamanho(t.id); if (!encerrada) desenhar(); };
      chips.append(b);
    });
    sec2.append(chips);
    tela.append(sec2);

    // ------------------------------------------------------- acessibilidade
    const sec3 = el('section', 'grupo');
    sec3.append(el('h2', 'rotulo-grupo', 'Movimento'));
    const linha = el('label', 'config-linha');
    const cx = document.createElement('input');
    cx.type = 'checkbox'; cx.checked = !!semAnim;
    cx.onchange = async () => { await trocarMovimento(cx.checked); };
    linha.append(cx);
    const txt = el('div');
    txt.append(el('strong', '', 'Reduzir animações'));
    txt.append(el('span', 'cartao-desc', 'Desliga transições e deslizamentos. Se o seu celular já pede movimento reduzido, o app respeita isso sozinho.'));
    linha.append(txt);
    sec3.append(linha);
    tela.append(sec3);

    // ------------------------------------------------------------- meta
    const sec4 = el('section', 'grupo');
    sec4.append(el('h2', 'rotulo-grupo', 'Meta diária de prática'));
    sec4.append(el('p', 'dica', 'Usada na sequência de dias: um dia conta quando você passa desse tempo.'));
    const linhaMeta = el('div', 'campo-bpm');
    const inp = document.createElement('input');
    inp.type = 'number'; inp.className = 'campo-num'; inp.min = '5'; inp.max = '240'; inp.step = '5';
    inp.value = String(meta);
    inp.setAttribute('aria-label', 'Minutos por dia');
    const salvar = el('button', 'botao-sec sm', 'Salvar');
    const fb = el('span', 'feedback', '');
    salvar.onclick = async () => {
      const v = Math.max(5, Math.min(240, Number(inp.value) || 15));
      await Config.guardar('habitos.meta', v);
      if (encerrada) return;
      inp.value = String(v);
      fb.textContent = '✓ salvo'; fb.className = 'feedback certo';
    };
    linhaMeta.append(inp, el('span', '', 'minutos por dia'), salvar, fb);
    sec4.append(linhaMeta);
    tela.append(sec4);

    // ----------------------------------------------------------- postura
    const secP = el('section', 'grupo');
    secP.append(el('h2', 'rotulo-grupo', 'Postura'));
    secP.append(el('p', 'dica', 'Estudando sozinho, ninguém corrige a sua postura — e vício de postura '
      + 'não dói no primeiro mês, dói no segundo ano. O app lembra e deixa você olhar; '
      + 'ele não analisa a imagem da câmera.'));
    const linhaP = el('label', 'config-linha');
    const cxP = document.createElement('input');
    cxP.type = 'checkbox'; cxP.checked = !!conferir;
    cxP.onchange = async () => { await ligarConferencia(cxP.checked); };
    linhaP.append(cxP);
    const txtP = el('div');
    txtP.append(el('strong', '', 'Conferir a postura ao entrar no Modo Estudo'));
    txtP.append(el('span', 'cartao-desc', 'Cinco itens com desenho, antes de cada sessão.'));
    linhaP.append(txtP);
    secP.append(linhaP);
    const btEsp = botaoIcone('botao-sec', 'camera', 'Abrir o espelho agora');
    btEsp.onclick = () => abrirEspelho();
    secP.append(btEsp);
    tela.append(secP);

    // ------------------------------------------------------------- dados
    const sec5 = el('section', 'grupo');
    sec5.append(el('h2', 'rotulo-grupo', 'Seus dados'));
    sec5.append(el('p', 'dica', 'Progresso, sessões, avaliações, anotações e preferências ficam só neste aparelho, '
      + 'num banco local. Nada é enviado para servidor nenhum.'));
    const bts = el('div', 'bloco-botoes');
    const b1 = el('button', 'botao-principal', 'Atualizar e backup');
    b1.onclick = () => ir('atualizar');
    const b1b = el('button', 'botao-sec', 'Pacotes extras');
    b1b.onclick = () => ir('pacotes');
    const b2 = el('button', 'botao-sec', 'Biblioteca de Materiais');
    b2.onclick = () => ir('materiais');
    bts.append(b1, b1b, b2);
    sec5.append(bts);
    tela.append(sec5);

    window.scrollTo(0, 0);
  }

  desenhar();
  return () => { encerrada = true; };
}
