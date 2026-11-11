// Meu Plano de Estudos: rotina do dia com cronômetro, plano semanal editável,
// metas e histórico de sessões. Rota #/plano.
import { ROTINAS, rotinaPorId, DIAS, DIAS_CURTO, SEMANA_PADRAO, METAS_SUGERIDAS, exercicioDoDia } from '../curso/plano.js';
import { Config, Pratica, Sessoes } from '../db.js';
import { hojeISO, comecarPratica, pararPratica, minutosTexto } from '../pratica.js';
import { icone, botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

const C_SEMANA = 'plano.semana';
const C_METAS = 'plano.metas';
const C_SESSAO = 'plano.sessaoAtual';   // blocos marcados da sessão em andamento
const C_EXERC = 'exercicios.registro'; // mesma gaveta que a Central de Exercícios usa

// Datas dos últimos n dias, da mais antiga para a mais recente.
function ultimosDias(n) {
  const fora = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    fora.push({ iso: hojeISO(d), diaSemana: d.getDay(), num: d.getDate() });
  }
  return fora;
}

export function montar(raiz, ir) {
  let encerrada = false;
  let cronometro = null;
  let inicio = null;
  const tela = el('main', 'tela plano-tela');
  raiz.append(tela);

  function parar() {
    if (cronometro) { clearInterval(cronometro); cronometro = null; }
    pararPratica();
  }

  async function desenhar() {
    const hoje = new Date();
    const semana = await Config.obter(C_SEMANA, SEMANA_PADRAO);
    const metas = await Config.obter(C_METAS, []);
    const marcados = await Config.obter(C_SESSAO, {});
    const regExerc = await Config.obter(C_EXERC, {});
    const praticaTudo = await Pratica.todos();
    const sessoes = Object.values(await Sessoes.todos()).sort((a, b) => (a.em < b.em ? 1 : -1));
    if (encerrada) return;

    const doDia = semana[hoje.getDay()] || SEMANA_PADRAO[hoje.getDay()];
    const rotina = rotinaPorId(doDia.rotina);

    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
    voltar.onclick = () => ir('');
    topo.append(voltar, el('h1', 'titulo-tela', 'Meu Plano de Estudos'));
    tela.append(topo);

    // ------------------------------------------------ hoje
    const sec1 = el('section', 'grupo');
    sec1.append(el('h2', 'rotulo-grupo', DIAS[hoje.getDay()] + ' · ' + rotina.nome));
    sec1.append(el('p', 'dica', doDia.foco));

    const segHoje = praticaTudo[hojeISO()] || 0;
    const alvo = rotina.minutos * 60;
    const barra = el('div', 'plano-barra');
    const preenche = el('span');
    preenche.style.width = Math.min(100, Math.round((segHoje / alvo) * 100)) + '%';
    barra.append(preenche);
    sec1.append(barra);
    const contador = el('p', 'legenda', minutosTexto(segHoje) + ' de ' + rotina.minutos + ' min hoje');
    sec1.append(contador);

    // cronômetro
    const botoes = el('div', 'bloco-botoes');
    const bt = el('button', 'botao-principal');
    const rotular = () => { bt.textContent = ''; bt.append(icone(cronometro ? 'parar' : 'tocar'),
      document.createTextNode(cronometro ? ' Parar o cronômetro' : ' Começar a praticar')); };
    rotular();
    bt.onclick = async () => {
      if (cronometro) {
        parar();
        cronometro = null; rotular();
        await desenhar();
        return;
      }
      inicio = Date.now();
      comecarPratica();
      cronometro = setInterval(async () => {
        if (encerrada) return;
        const s = (praticaTudo[hojeISO()] || 0) + Math.floor((Date.now() - inicio) / 1000);
        contador.textContent = minutosTexto(s) + ' de ' + rotina.minutos + ' min hoje';
        preenche.style.width = Math.min(100, Math.round((s / alvo) * 100)) + '%';
      }, 1000);
      rotular();   // só agora cronometro existe, e o rótulo vira "Parar"
    };
    botoes.append(bt);
    const trocar = el('button', 'botao-sec', 'Trocar a rotina de hoje');
    trocar.onclick = () => escolherRotina(hoje.getDay());
    botoes.append(trocar);
    sec1.append(botoes);

    // blocos da rotina
    const jaEscolhidos = [];   // para o exercício secundário não repetir o principal
    rotina.blocos.forEach((b, i) => {
      const chave = hojeISO() + '.' + rotina.id + '.' + i;
      const feito = !!marcados[chave];
      const caixa = el('div', 'plano-bloco' + (feito ? ' feito' : ''));
      caixa.append(el('div', 'min', b.min + ' min'));
      const corpo = el('div', 'corpo');
      corpo.append(el('strong', '', b.titulo));
      corpo.append(el('span', 'cartao-desc', b.o_que));
      // Blocos de técnica abrem direto no exercício do dia, em vez de jogarem o
      // aluno na Central com a lista inteira para filtrar no meio da sessão.
      const ex = b.tipos ? exercicioDoDia(b, { registro: regExerc, diaISO: hojeISO(), excluir: jaEscolhidos }) : null;
      if (ex) {
        jaEscolhidos.push(ex.id);
        corpo.append(el('span', 'cartao-desc hoje-ex', 'Hoje: ' + ex.nome + ' · ' + ex.minutos
          + ' min · ' + ex.dificuldade + '. Escolhido no rodízio, entre os que você menos praticou.'));
        const l = el('button', 'link-aula', 'Abrir: ' + ex.nome);
        l.onclick = () => ir('exercicios/' + ex.id);
        corpo.append(l);
      } else if (b.rota) {
        const l = el('button', 'link-aula', 'Abrir a ferramenta');
        l.onclick = () => ir(b.rota);
        corpo.append(l);
      }
      caixa.append(corpo);
      const cx = document.createElement('input');
      cx.type = 'checkbox'; cx.checked = feito;
      cx.setAttribute('aria-label', 'Concluí: ' + b.titulo);
      cx.onchange = async () => {
        const m = await Config.obter(C_SESSAO, {});
        if (cx.checked) m[chave] = true; else delete m[chave];
        await Config.guardar(C_SESSAO, m);
        caixa.classList.toggle('feito', cx.checked);
      };
      caixa.append(cx);
      sec1.append(caixa);
    });
    tela.append(sec1);

    // ------------------------------------------------ registrar sessão
    const sec2 = el('section', 'grupo');
    sec2.append(el('h2', 'rotulo-grupo', 'Registrar a sessão de hoje'));
    sec2.append(el('p', 'legenda', 'O registro é o que permite comparar semanas e perceber o progresso. '
      + 'Anote o que funcionou e o que ficou para a próxima.'));
    const ta = document.createElement('textarea');
    ta.className = 'campo-texto'; ta.rows = 3;
    ta.placeholder = 'O que estudei, andamentos atingidos, o que ficou para a próxima sessão…';
    const bs = el('button', 'botao-principal', 'Registrar sessão');
    const fb = el('p', 'feedback', '');
    bs.onclick = async () => {
      parar();
      const m = await Config.obter(C_SESSAO, {});
      const feitos = rotina.blocos.filter((b, i) => m[hojeISO() + '.' + rotina.id + '.' + i]).map((b) => b.titulo);
      await Sessoes.registrar({
        dia: hojeISO(), rotina: rotina.id, rotinaNome: rotina.nome,
        segundos: (await Pratica.segundosDoDia(hojeISO())),
        blocos: feitos, anotacao: ta.value
      });
      if (encerrada) return;
      fb.textContent = '✓ Sessão registrada.';
      fb.className = 'feedback certo';
      ta.value = '';
      setTimeout(() => { if (!encerrada) desenhar(); }, 600);
    };
    sec2.append(ta, bs, fb);
    tela.append(sec2);

    // ------------------------------------------------ semana
    const sec3 = el('section', 'grupo');
    sec3.append(el('h2', 'rotulo-grupo', 'Os últimos sete dias'));
    const grade = el('div', 'plano-semana');
    ultimosDias(7).forEach((d) => {
      const seg = praticaTudo[d.iso] || 0;
      const c = el('div', 'plano-dia' + (seg > 0 ? ' praticado' : '') + (d.iso === hojeISO() ? ' hoje' : ''));
      c.append(el('span', '', DIAS_CURTO[d.diaSemana]));
      c.append(el('span', 'n', String(Math.round(seg / 60))));
      c.title = d.iso + ': ' + minutosTexto(seg);
      grade.append(c);
    });
    sec3.append(grade);
    const total = ultimosDias(7).reduce((a, d) => a + (praticaTudo[d.iso] || 0), 0);
    const dias = ultimosDias(7).filter((d) => (praticaTudo[d.iso] || 0) > 0).length;
    sec3.append(el('p', 'legenda', 'Total da semana: ' + minutosTexto(total) + ' em ' + dias + ' dia(s). '
      + (dias >= 5 ? 'Regularidade boa: é ela que faz o progresso.' : 'Tente chegar a cinco dias por semana — regularidade rende mais que sessões longas.')));
    tela.append(sec3);

    // ------------------------------------------------ plano semanal
    const sec4 = el('section', 'grupo');
    sec4.append(el('h2', 'rotulo-grupo', 'Plano da semana'));
    sec4.append(el('p', 'legenda', 'Qual rotina e qual foco em cada dia. Toque num dia para mudar.'));
    DIAS.forEach((nome, i) => {
      const d = semana[i] || SEMANA_PADRAO[i];
      const r = rotinaPorId(d.rotina);
      const caixa = el('div', 'plano-bloco' + (i === hoje.getDay() ? ' feito' : ''));
      caixa.append(el('div', 'min', nome.slice(0, 3)));
      const corpo = el('div', 'corpo');
      corpo.append(el('strong', '', r.nome));
      corpo.append(el('span', 'cartao-desc', d.foco));
      caixa.append(corpo);
      const b = el('button', 'botao-sec sm', 'Mudar');
      b.onclick = () => escolherRotina(i);
      caixa.append(b);
      sec4.append(caixa);
    });
    const restaurar = el('button', 'botao-texto', 'Restaurar o plano padrão');
    restaurar.onclick = async () => { await Config.guardar(C_SEMANA, SEMANA_PADRAO); if (!encerrada) desenhar(); };
    sec4.append(restaurar);
    tela.append(sec4);

    // ------------------------------------------------ metas
    const sec5 = el('section', 'grupo');
    sec5.append(el('h2', 'rotulo-grupo', 'Minhas metas'));
    if (!metas.length) sec5.append(el('p', 'legenda', 'Nenhuma meta ainda. Uma meta boa é verificável: dá para responder sim ou não.'));
    metas.forEach((m, i) => {
      const caixa = el('div', 'plano-bloco' + (m.feita ? ' feito' : ''));
      const cx = document.createElement('input');
      cx.type = 'checkbox'; cx.checked = !!m.feita;
      cx.setAttribute('aria-label', 'Meta cumprida');
      cx.onchange = async () => {
        const lista = await Config.obter(C_METAS, []);
        lista[i].feita = cx.checked;
        lista[i].em = new Date().toISOString();
        await Config.guardar(C_METAS, lista);
        if (!encerrada) desenhar();
      };
      caixa.append(cx);
      const corpo = el('div', 'corpo');
      corpo.append(el('strong', '', m.texto));
      if (m.prazo) corpo.append(el('span', 'cartao-desc', 'Prazo: ' + m.prazo));
      caixa.append(corpo);
      const x = botaoIcone('botao-texto', 'fechar');
      x.setAttribute('aria-label', 'Remover meta');
      x.onclick = async () => {
        const lista = await Config.obter(C_METAS, []);
        lista.splice(i, 1);
        await Config.guardar(C_METAS, lista);
        if (!encerrada) desenhar();
      };
      caixa.append(x);
      sec5.append(caixa);
    });

    const nova = el('div', 'grupo');
    const inp = document.createElement('input');
    inp.type = 'text'; inp.className = 'campo-busca'; inp.placeholder = 'Nova meta verificável…';
    const inpP = document.createElement('input');
    inpP.type = 'date'; inpP.className = 'campo-num'; inpP.style.width = '150px';
    inpP.setAttribute('aria-label', 'Prazo da meta');
    const add = el('button', 'botao-sec', 'Adicionar meta');
    add.onclick = async () => {
      const texto = inp.value.trim();
      if (!texto) return;
      const lista = await Config.obter(C_METAS, []);
      lista.push({ texto, prazo: inpP.value || '', feita: false, criada: new Date().toISOString() });
      await Config.guardar(C_METAS, lista);
      if (!encerrada) desenhar();
    };
    nova.append(inp, inpP, add);
    sec5.append(nova);

    const sug = el('details', 'grupo');
    sug.append(el('summary', 'rotulo-grupo', 'Sugestões de meta por nível'));
    METAS_SUGERIDAS.forEach((s) => {
      const b = el('button', 'chip', 'N' + s.nivel + ' · ' + s.texto);
      b.onclick = async () => {
        const lista = await Config.obter(C_METAS, []);
        lista.push({ texto: s.texto, prazo: '', feita: false, criada: new Date().toISOString() });
        await Config.guardar(C_METAS, lista);
        if (!encerrada) desenhar();
      };
      sug.append(b);
    });
    sec5.append(sug);
    tela.append(sec5);

    // ------------------------------------------------ histórico
    const sec6 = el('section', 'grupo');
    sec6.append(el('h2', 'rotulo-grupo', 'Histórico de sessões'));
    if (!sessoes.length) {
      sec6.append(el('p', 'legenda', 'Nenhuma sessão registrada ainda. Registre a de hoje no fim do estudo.'));
    } else {
      sec6.append(el('p', 'legenda', sessoes.length + ' sessão(ões) registrada(s).'));
      sessoes.slice(0, 15).forEach((s) => {
        const caixa = el('div', 'plano-bloco');
        caixa.append(el('div', 'min', s.dia.slice(8) + '/' + s.dia.slice(5, 7)));
        const corpo = el('div', 'corpo');
        corpo.append(el('strong', '', (s.rotinaNome || 'Sessão') + ' · ' + minutosTexto(s.segundos || 0)));
        if ((s.blocos || []).length) corpo.append(el('span', 'cartao-desc', 'Blocos: ' + s.blocos.join(', ')));
        if (s.anotacao) corpo.append(el('span', 'cartao-desc', s.anotacao));
        caixa.append(corpo);
        sec6.append(caixa);
      });
    }
    tela.append(sec6);
    window.scrollTo(0, 0);
  }

  async function escolherRotina(dia) {
    tela.innerHTML = '';
    const topo = el('header', 'topo');
    const voltar = botaoIcone('botao-texto', 'voltar', 'Plano');
    voltar.onclick = desenhar;
    topo.append(voltar, el('h1', 'titulo-tela', DIAS[dia]));
    tela.append(topo);
    tela.append(el('p', 'dica', 'Escolha a rotina deste dia da semana. Você pode mudar quando quiser.'));

    const semana = (await Config.obter(C_SEMANA, SEMANA_PADRAO)).slice();
    if (encerrada) return;

    ROTINAS.forEach((r) => {
      const c = el('button', 'cartao' + (semana[dia] && semana[dia].rotina === r.id ? ' exerc-cartao feito' : ''));
      c.append(el('h3', 'cartao-nome', r.nome));
      c.append(el('p', 'cartao-desc', r.para));
      const selos = el('div', 'aula-selos');
      r.blocos.forEach((b) => selos.append(el('span', 'selo-aula disc', b.min + ' min · ' + b.titulo)));
      c.append(selos);
      c.onclick = async () => {
        semana[dia] = { rotina: r.id, foco: (semana[dia] && semana[dia].foco) || SEMANA_PADRAO[dia].foco };
        await Config.guardar(C_SEMANA, semana);
        if (!encerrada) escolherRotina(dia);
      };
      tela.append(c);
    });

    const g = el('section', 'grupo');
    g.append(el('h2', 'rotulo-grupo', 'Foco deste dia'));
    const ta = document.createElement('textarea');
    ta.className = 'campo-texto'; ta.rows = 2;
    ta.value = (semana[dia] && semana[dia].foco) || '';
    const b = el('button', 'botao-principal', 'Salvar foco');
    b.onclick = async () => {
      semana[dia] = { rotina: (semana[dia] && semana[dia].rotina) || SEMANA_PADRAO[dia].rotina, foco: ta.value };
      await Config.guardar(C_SEMANA, semana);
      if (!encerrada) desenhar();
    };
    g.append(ta, b);
    tela.append(g);
    window.scrollTo(0, 0);
  }

  desenhar();
  return () => { encerrada = true; parar(); };
}
