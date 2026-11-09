// Ferramenta do CAGED: ver as formas (maior, menor, 7ª...), ouvir, ver caixas de escala,
// treinar com quiz e tocar a forma no violão. As explicações estão nas "Aulas do CAGED".
import { Config } from '../db.js';
import { comecarPratica, pararPratica } from '../pratica.js';
import { Afinador } from '../tuner.js';
import { notaMaisProxima, nomeDoMidi } from '../pitch.js';
import { criarBraco } from '../bracosvg.js';
import {
  ORDEM_CAGED, ORDEM_QUALIDADES, QUALIDADES, NOMES_TONICA, formasDisponiveis, formaNaTonalidade, ordemNoBraco,
  arpejoDaForma, caixaDaEscala, TIPOS_ESCALA, nomeDaEscala, nomeAcorde
} from '../caged.js';
import { desenharForma, descrever, criarSom } from '../cagedui.js';
import { gerarPerguntasCaged, NOMES_TIPOS } from '../caged-quiz.js';
import { rodarQuiz } from '../quizui.js';
import { botaoIcone } from '../icones.js';

function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
const NOME_QUAL = { maior: 'Maior', menor: 'Menor', '7': '7ª', maj7: 'Maj7', m7: 'm7' };

export function montar(raiz, ir) {
  let modo = 'ver';             // 'ver' | 'escala' | 'quiz' | 'tocar'
  let tonica = 0, qual = 'maior', formaSel = 'todas', rotulo = 'graus', tipoEscala = 'maior';
  let seq = [], passo = 0, tocando = false;
  let bloqueioMidi = -1, bloqueioAte = 0;
  let encerrada = false;
  const som = criarSom();
  const motor = new Afinador((f) => aoOuvir(f));

  const tela = el('main', 'tela caged');
  const topo = el('header', 'topo');
  const voltar = botaoIcone('botao-texto', 'voltar', 'Início');
  voltar.onclick = () => ir('');
  const aulas = el('button', 'botao-sec bt-aulas', '📚 Aulas do CAGED');
  aulas.onclick = () => ir('caged-aulas');
  topo.append(voltar, el('h1', 'titulo-tela', 'CAGED'), aulas);

  const area = el('section', 'coluna');
  const info = el('p', 'pergunta info-caged', '');
  info.setAttribute('role', 'status');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'braco-svg'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Braço do violão com a forma de acorde');
  const feedback = el('p', 'feedback', '');
  feedback.setAttribute('aria-live', 'polite');
  const acoesVer = el('div', 'acoes acoes-caged');
  const bOuvir = botaoIcone('botao-sec', 'tocar', 'Ouvir');
  const bOuvirTodas = botaoIcone('botao-sec', 'tocar', 'Ouvir as formas em sequência');
  acoesVer.append(bOuvir, bOuvirTodas);
  const caixaBraco = document.createElement('div');
  caixaBraco.className = 'rola-h';
  caixaBraco.append(svg);
  area.append(info, caixaBraco, feedback, acoesVer);

  const opcoes = el('section', 'caged-opcoes');
  function grupo(rot) { const g = el('div', 'grupo'); g.append(el('h2', 'rotulo-grupo', rot)); const c = el('div', 'chips'); g.append(c); return [g, c]; }
  const [gModo, chipsModo] = grupo('Exercício');
  const [gTon, chipsTon] = grupo('Tonalidade');
  const [gQual, chipsQual] = grupo('Tipo de acorde');
  const [gForma, chipsForma] = grupo('Forma');
  const [gRot, chipsRot] = grupo('Mostrar nas bolinhas');
  const [gEsc, chipsEsc] = grupo('Escala');
  const botMic = botaoIcone('botao-sec', 'microfone', 'Ligar microfone');
  const botNovo = el('button', 'botao-sec', 'Recomeçar');
  const acoes = el('div', 'acoes'); acoes.append(botNovo, botMic);
  opcoes.append(gModo, gTon, gQual, gForma, gRot, gEsc, acoes);
  tela.append(topo, area, opcoes);
  raiz.append(tela);

  let braco = null;
  const novoBraco = () => { braco = criarBraco(svg, { casas: 15 }); return braco; };

  // ---------- modo ver ----------
  function mostrar() {
    novoBraco();
    feedback.textContent = ''; feedback.className = 'feedback';
    if (formaSel === 'todas') {
      const ord = ordemNoBraco(tonica, qual);
      ord.forEach((f) => desenharForma(braco, f, { rotulo: rotulo === 'dedos' ? 'raiz' : rotulo }));
      info.textContent = nomeAcorde(tonica, qual) + ': ' + ord.length + ' formas, subindo pelo braço: ' + ord.map((f) => f.id + ' (casa ' + f.k + ')').join(' → ');
    } else {
      const f = formaNaTonalidade(formaSel, tonica, qual);
      desenharForma(braco, f, { rotulo });
      info.textContent = descrever(f);
    }
  }
  function destacar(i) {
    // durante "ouvir em sequência": só a forma que está tocando fica forte
    novoBraco();
    const ord = ordemNoBraco(tonica, qual);
    ord.forEach((f, k) => desenharForma(braco, f, { rotulo: k === i ? rotulo === 'dedos' ? 'raiz' : rotulo : 'nenhum', fraco: i >= 0 && k !== i }));
    if (i >= 0) info.textContent = 'Tocando a forma de ' + ord[i].id + ' (casa ' + ord[i].k + ') · é o mesmo acorde, em outro lugar do braço';
    else mostrar();
  }
  bOuvir.onclick = async () => {
    if (formaSel === 'todas') { bOuvirTodas.click(); return; }
    await som.acorde(formaNaTonalidade(formaSel, tonica, qual));
  };
  bOuvirTodas.onclick = () => {
    const ord = ordemNoBraco(tonica, qual);
    if (formaSel !== 'todas') { formaSel = 'todas'; chips(); }
    som.sequencia(ord, (i) => destacar(i));
  };

  // ---------- modo escala (caixas) ----------
  function mostrarEscala() {
    novoBraco();
    feedback.textContent = ''; feedback.className = 'feedback';
    const id = formaSel === 'todas' ? 'E' : formaSel;
    const f = formaNaTonalidade(id, tonica, 'maior');
    const cx = caixaDaEscala(f, tipoEscala);
    cx.notas.forEach((n) => braco.ponto(n.corda, n.casa, 'neutro' + (n.raiz ? ' raiz' : ''), n.rotulo));
    desenharForma(braco, f, { rotulo: 'nenhum', fraco: false });
    const nomeRaiz = NOMES_TONICA[cx.raizPc];
    info.textContent = nomeDaEscala(tipoEscala) + ' de ' + (tipoEscala === 'pent-menor' ? nomeRaiz + ' menor' : NOMES_TONICA[tonica]) + ' · caixa ao redor da forma de ' + id + ' (casas ' + cx.de + ' a ' + cx.ate + '). Bolinhas coloridas = o acorde dentro da escala.';
  }

  // ---------- modo quiz ----------
  function iniciarQuiz() {
    const perguntas = gerarPerguntasCaged(NOMES_TIPOS, 10);
    rodarQuiz({
      tela, titulo: 'Quiz CAGED', perguntas, chave: 'caged.quiz.livre', textoVoltar: '‹ CAGED',
      aoVoltar: () => { modo = 'ver'; Config.guardar('caged.modo', 'ver'); montarTela(); },
      aoNovaTentativa: iniciarQuiz,
      ativo: () => !encerrada,
      aoDesenhar: (d, s, revelar) => {
        const b = criarBraco(s, { casas: 15 });
        const f = formaNaTonalidade(d.id, d.tonica, d.qual || 'maior');
        desenharForma(b, f, { rotulo: d.escondeNome && !revelar ? 'raiz' : 'graus' });
      }
    });
  }

  // ---------- modo tocar ----------
  function comecarSequencia() {
    if (!formasDisponiveis(qual).includes(formaSel)) formaSel = formasDisponiveis(qual)[0];
    const f = formaNaTonalidade(formaSel, tonica, qual);
    seq = arpejoDaForma(f); passo = 0; tocando = true; bloqueioMidi = -1;
    desenharSequencia(f);
  }
  function desenharSequencia(f) {
    novoBraco();
    if (f.pestana && f.cordasPestana.length) braco.barra(f.k, Math.min(...f.cordasPestana), Math.max(...f.cordasPestana));
    f.mudas.forEach((c) => braco.marcaMuda(c));
    seq.forEach((n, i) => {
      if (i < passo) braco.ponto(n.corda, n.casa, 'certo', nomeDoMidi(n.midi).pt);
      else if (i === passo) braco.ponto(n.corda, n.casa, 'alvo', nomeDoMidi(n.midi).pt);
      else braco.ponto(n.corda, n.casa, 'neutro fraco', '');
    });
    if (passo < seq.length) {
      const n = seq[passo];
      info.textContent = 'Toque a corda ' + n.corda + (n.casa === 0 ? ' solta' : ', casa ' + n.casa) + ' (' + nomeDoMidi(n.midi).pt + ') · ' + (passo + 1) + ' de ' + seq.length;
    }
  }
  function aoOuvir(freq) {
    if (modo !== 'tocar' || !tocando || !freq || encerrada) return;
    const r = notaMaisProxima(freq);
    if (r.midi === bloqueioMidi && performance.now() < bloqueioAte) return;
    const alvo = seq[passo];
    if (r.midi === alvo.midi) {
      if (Math.abs(r.cents) > 25) { feedback.textContent = 'Quase! Nota certa, mas desafinada: ajuste.'; feedback.className = 'feedback quase'; return; }
      bloqueioMidi = alvo.midi; bloqueioAte = performance.now() + 1500;
      passo++;
      feedback.textContent = '✓'; feedback.className = 'feedback certo';
      const f = formaNaTonalidade(formaSel, tonica, qual);
      if (passo >= seq.length) {
        tocando = false; desenharSequencia(f);
        info.textContent = '✓ Forma completa! ' + nomeAcorde(tonica, qual) + '. Agora toque as cordas juntas.';
        feedback.textContent = 'Parabéns!'; feedback.className = 'feedback certo';
        som.acorde(f);
      } else desenharSequencia(f);
    } else {
      const n = nomeDoMidi(r.midi);
      feedback.textContent = 'Você tocou ' + n.pt + n.oitava + '. Procure ' + nomeDoMidi(alvo.midi).pt + nomeDoMidi(alvo.midi).oitava + '.';
      feedback.className = 'feedback errado';
    }
  }

  // ---------- controles ----------
  function montarTela() {
    som.parar();
    tela.className = 'tela caged';
    tela.innerHTML = '';
    tela.append(topo, area, opcoes);
    gQual.hidden = modo === 'escala';
    gEsc.hidden = modo !== 'escala';
    gRot.hidden = modo !== 'ver';
    gTon.hidden = false; gForma.hidden = false;
    acoesVer.hidden = modo !== 'ver';
    botMic.hidden = modo !== 'tocar';
    botNovo.hidden = modo !== 'tocar';
    if (modo === 'tocar' && formaSel === 'todas') formaSel = formasDisponiveis(qual)[0];
    chips();
    if (modo === 'ver') mostrar();
    else if (modo === 'escala') mostrarEscala();
    else if (modo === 'quiz') iniciarQuiz();
    else comecarSequencia();
  }
  function chips() {
    chipsModo.innerHTML = '';
    [['ver', 'Ver e ouvir'], ['escala', 'Escalas'], ['quiz', 'Quiz'], ['tocar', 'Tocar a forma']].forEach(([id, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(id === modo));
      b.onclick = async () => {
        if (modo === 'tocar' && id !== 'tocar' && motor.ouvindo) await desligarMic();
        modo = id; Config.guardar('caged.modo', id); montarTela();
      };
      chipsModo.append(b);
    });
    chipsTon.innerHTML = '';
    NOMES_TONICA.forEach((n, pc) => {
      const b = el('button', 'chip sm', n);
      b.setAttribute('aria-pressed', String(pc === tonica));
      b.setAttribute('aria-label', 'Tonalidade ' + n);
      b.onclick = () => { tonica = pc; Config.guardar('caged.tonica', pc); chips(); refrescar(); };
      chipsTon.append(b);
    });
    chipsQual.innerHTML = '';
    ORDEM_QUALIDADES.forEach((q) => {
      const b = el('button', 'chip sm', NOME_QUAL[q]);
      b.title = QUALIDADES[q].nome;
      b.setAttribute('aria-pressed', String(q === qual));
      b.onclick = () => { qual = q; Config.guardar('caged.qual', q); if (!formasDisponiveis(q).includes(formaSel) && formaSel !== 'todas') formaSel = 'todas'; if (modo === 'tocar' && formaSel === 'todas') formaSel = formasDisponiveis(q)[0]; chips(); refrescar(); };
      chipsQual.append(b);
    });
    chipsForma.innerHTML = '';
    const disp = modo === 'escala' ? ORDEM_CAGED : formasDisponiveis(qual);
    const lista = modo === 'ver' ? [['todas', 'Todas'], ...disp.map((c) => [c, c])] : disp.map((c) => [c, c]);
    lista.forEach(([id, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(id === formaSel || (modo === 'escala' && formaSel === 'todas' && id === 'E')));
      b.setAttribute('aria-label', id === 'todas' ? 'Todas as formas' : 'Forma de ' + id);
      b.onclick = () => { formaSel = id; Config.guardar('caged.forma', id); chips(); refrescar(); };
      chipsForma.append(b);
    });
    chipsRot.innerHTML = '';
    [['graus', 'Graus (R 3 5)'], ['notas', 'Nomes das notas'], ['dedos', 'Dedos'], ['raiz', 'Só a raiz']].forEach(([id, nome]) => {
      const b = el('button', 'chip sm', nome);
      b.setAttribute('aria-pressed', String(id === rotulo));
      b.onclick = () => { rotulo = id; Config.guardar('caged.rotulo', id); chips(); refrescar(); };
      chipsRot.append(b);
    });
    chipsEsc.innerHTML = '';
    TIPOS_ESCALA.forEach((t) => {
      const b = el('button', 'chip sm', nomeDaEscala(t));
      b.setAttribute('aria-pressed', String(t === tipoEscala));
      b.onclick = () => { tipoEscala = t; Config.guardar('caged.escala', t); chips(); refrescar(); };
      chipsEsc.append(b);
    });
  }
  function refrescar() {
    som.parar();
    if (modo === 'ver') mostrar();
    else if (modo === 'escala') mostrarEscala();
    else if (modo === 'tocar') comecarSequencia();
  }
  botNovo.onclick = () => comecarSequencia();
  async function ligarMic() {
    try { await motor.iniciar(); comecarPratica(); botMic.textContent = '■ Parar microfone'; }
    catch (e) { feedback.textContent = 'Não consegui usar o microfone. Permita o acesso nas configurações.'; feedback.className = 'feedback errado'; }
  }
  async function desligarMic() { motor.parar(); await pararPratica(); botMic.textContent = '🎤 Ligar microfone'; }
  botMic.onclick = () => (motor.ouvindo ? desligarMic() : ligarMic());
  function aoEsconder() { if (document.hidden) { som.parar(); if (motor.ouvindo) desligarMic(); } }
  document.addEventListener('visibilitychange', aoEsconder);

  (async () => {
    const m = await Config.obter('caged.modo', 'ver');
    const t = await Config.obter('caged.tonica', 0);
    const f = await Config.obter('caged.forma', 'todas');
    const q = await Config.obter('caged.qual', 'maior');
    const ro = await Config.obter('caged.rotulo', 'graus');
    const te = await Config.obter('caged.escala', 'maior');
    if (encerrada) return;
    modo = ['ver', 'escala', 'quiz', 'tocar'].includes(m) ? m : 'ver';
    tonica = Number.isInteger(t) && t >= 0 && t < 12 ? t : 0;
    qual = QUALIDADES[q] ? q : 'maior';
    formaSel = f === 'todas' || formasDisponiveis(qual).includes(f) ? f : 'todas';
    rotulo = ['graus', 'notas', 'dedos', 'raiz'].includes(ro) ? ro : 'graus';
    tipoEscala = TIPOS_ESCALA.includes(te) ? te : 'maior';
    montarTela();
  })();

  return () => {
    encerrada = true;
    som.fechar();
    document.removeEventListener('visibilitychange', aoEsconder);
    if (motor.ouvindo) { motor.parar(); pararPratica(); }
    if (motor.ctx) motor.ctx.close().catch(() => {});
  };
}
