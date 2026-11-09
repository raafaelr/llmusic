// Minhas habilidades: as 17 habilidades do violão, em que pé está cada uma
// e quais pedem revisão hoje. Rota #/habilidades.
//
// Regra desta tela: dizer sempre de onde veio o número. O que foi medido no
// banco aparece como medido; o que você declarou aparece como autoavaliação.
// O app não escuta você tocar, e nada aqui finge que escuta.
import { HABILIDADES, ESTADOS, ESTADOS_ESCOLHIVEIS, quadroGeral, autoavaliacoes, marcarHabilidade } from '../curso/habilidades.js';
import { carregarTodos, todasAsAulas } from '../curso/curriculo.js';
import { carregarFichas } from '../curso/progresso.js';
import { EXERCICIOS } from '../curso/exercicios.js';
import { Config } from '../db.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function quandoTexto(dias) {
  if (dias === null) return 'sem registro';
  if (dias <= 0) return 'hoje';
  if (dias === 1) return 'ontem';
  if (dias < 30) return 'há ' + dias + ' dias';
  const m = Math.round(dias / 30);
  return 'há ' + m + (m === 1 ? ' mês' : ' meses');
}

export function montar(raiz, ir) {
  let encerrada = false;
  const tela = el('main', 'tela');
  raiz.append(tela);

  async function desenhar() {
    const [niveis, fichas, regExerc, autos] = await Promise.all([
      carregarTodos(),
      carregarFichas(),
      Config.obter('exercicios.registro', {}),
      autoavaliacoes()
    ]);
    if (encerrada) return;

    const dados = { aulas: todasAsAulas(niveis), fichas, regExerc, exercicios: EXERCICIOS, autos };
    const quadros = quadroGeral(dados);

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = el('button', 'botao-texto', '‹ Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Minhas habilidades'));
    tela.append(topo);

    tela.append(el('p', 'dica', 'Dezessete habilidades do violão. O estado sai do que você fez no app '
      + '(aulas dominadas e exercícios praticados) ou do que você mesmo marcou — e cada ficha diz qual dos dois. '
      + 'O app não escuta você tocar.'));

    // ------------------------------------------------- o que revisar hoje
    const revisar = quadros.filter((q) => q.estado === 'revisao');
    const secR = el('section', 'grupo');
    secR.append(el('h2', 'rotulo-grupo', 'Revisar hoje'));
    if (!revisar.length) {
      secR.append(el('p', 'cartao-desc', 'Nada vencido. As habilidades voltam para cá sozinhas conforme o tempo passa: '
        + 'dois dias para o que está em aprendizado, seis para o que está em desenvolvimento, três semanas para o que já está dominado.'));
    } else {
      const chips = el('div', 'chips');
      revisar.forEach((q) => {
        const b = el('button', 'chip chip-revisar', '⟳ ' + q.hab.nome + ' · ' + quandoTexto(q.dias));
        b.onclick = () => document.getElementById('hab-' + q.hab.id).scrollIntoView({ block: 'center' });
        chips.append(b);
      });
      secR.append(chips);
    }
    tela.append(secR);

    // ------------------------------------------------------- panorama
    const contagem = {};
    quadros.forEach((q) => { contagem[q.estado] = (contagem[q.estado] || 0) + 1; });
    const faixa = el('section', 'faixa-numeros');
    ['dominado', 'em-desenvolvimento', 'em-aprendizado', 'revisao', 'nao-iniciado'].forEach((e) => {
      const c = el('div', 'numero');
      c.append(el('span', 'numero-valor', String(contagem[e] || 0)));
      c.append(el('span', 'numero-rotulo', ESTADOS[e].nome));
      faixa.append(c);
    });
    tela.append(faixa);

    // ------------------------------------------------------- as fichas
    const lista = el('section', 'grupo');
    lista.append(el('h2', 'rotulo-grupo', 'Todas as habilidades'));
    quadros.forEach((q) => {
      const h = q.hab;
      const c = el('article', 'cartao hab-cartao estado-' + q.estado);
      c.id = 'hab-' + h.id;

      const cab = el('div', 'tec-cab');
      cab.append(el('h3', 'cartao-nome', h.nome));
      cab.append(el('span', 'hab-estado', ESTADOS[q.estado].sinal + ' ' + ESTADOS[q.estado].nome));
      c.append(cab);
      c.append(el('p', 'cartao-desc', h.o_que));

      // de onde veio o estado — sem isto, o número é só um número
      const ev = q.evidencia;
      const partes = [];
      if (ev.totalAulas) partes.push(ev.dominadas + ' de ' + ev.totalAulas + ' aulas dominadas');
      if (ev.totalExerc) partes.push(ev.feitos + ' de ' + ev.totalExerc + ' exercícios praticados'
        + (ev.vezes ? ' (' + ev.vezes + ' vez' + (ev.vezes > 1 ? 'es' : '') + ')' : ''));
      const fonte = el('p', 'hab-fonte');
      if (q.origem === 'autoavaliado') {
        fonte.append(el('span', 'selo-aula selo-auto', 'autoavaliado'));
        fonte.append(document.createTextNode(' você marcou como "' + ESTADOS[q.estadoBase].nome.toLowerCase() + '"'
          + (partes.length ? ' · medido no app: ' + partes.join(' · ') : '')));
      } else if (q.origem === 'medido') {
        fonte.append(el('span', 'selo-aula selo-medido', 'medido'));
        fonte.append(document.createTextNode(' ' + partes.join(' · ')));
      } else {
        fonte.append(el('span', 'selo-aula disc', 'sem dados'));
        fonte.append(document.createTextNode(' nenhuma aula ou exercício do app cobre esta habilidade ainda — marque você mesmo'));
      }
      c.append(fonte);

      const tempo = el('p', 'hab-tempo');
      if (q.estado === 'revisao') {
        tempo.className = 'hab-tempo vencido';
        tempo.textContent = '⟳ Última vez ' + quandoTexto(q.dias) + '. Passou do prazo de '
          + q.prazo + (q.prazo === 1 ? ' dia' : ' dias') + ' para "' + ESTADOS[q.estadoBase].nome.toLowerCase() + '".';
      } else if (q.diasAteRevisar !== null) {
        tempo.textContent = 'Última vez ' + quandoTexto(q.dias) + ' · revisar em '
          + q.diasAteRevisar + (q.diasAteRevisar === 1 ? ' dia' : ' dias');
      } else {
        tempo.textContent = 'Sem registro de prática.';
      }
      c.append(tempo);

      const chips = el('div', 'chips hab-graus');
      chips.setAttribute('role', 'radiogroup');
      chips.setAttribute('aria-label', 'Como está ' + h.nome);
      ESTADOS_ESCOLHIVEIS.forEach((e) => {
        const b = el('button', 'chip' + (q.estadoBase === e && q.origem === 'autoavaliado' ? ' ativo' : ''),
          ESTADOS[e].sinal + ' ' + ESTADOS[e].nome);
        b.setAttribute('role', 'radio');
        b.setAttribute('aria-checked', String(q.estadoBase === e && q.origem === 'autoavaliado'));
        b.onclick = async () => {
          await marcarHabilidade(h.id, q.estadoBase === e && q.origem === 'autoavaliado' ? null : e);
          if (!encerrada) desenhar();
        };
        chips.append(b);
      });
      c.append(chips);
      lista.append(c);
    });
    tela.append(lista);

    tela.append(el('p', 'dica', 'Marcar você mesmo substitui a medição do app, porque você é quem está com o violão '
      + 'na mão. Toque de novo no estado marcado para voltar à medição.'));
    window.scrollTo(0, 0);
  }

  desenhar().catch(() => {
    if (encerrada) return;
    tela.innerHTML = '';
    tela.append(el('p', 'texto-bloco', 'Não consegui ler o seu progresso agora.'));
  });
  return () => { encerrada = true; };
}
