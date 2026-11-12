// Ponte com o app Android (Capacitor). No navegador/PWA, "nativo()" é falso e tudo continua funcionando
// pelo jeito web. No APK, usamos os recursos do celular: notificações locais e compartilhar arquivos.

export function nativo() {
  return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
}
export function plugin(nome) {
  return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins[nome];
}

// A pasta do app dentro de "Documentos". É pública: aparece em Meus Arquivos
// (Samsung) ou Files > Documentos, e sobrevive à desinstalação do app.
export const PASTA = 'LLMusic';
export const CAMINHO_HUMANO = 'Documentos › ' + PASTA;

// Salva um texto num arquivo de verdade, dentro de Documentos/LLMusic.
//
// Por que isto existe: no APK, a página roda dentro de um WebView, e ali o jeito
// web de baixar arquivo (criar um link com "download" e clicar nele) NÃO faz nada.
// O clique é engolido sem erro — por isso o app dizia "salvo" e não havia arquivo
// nenhum. Quem grava em disco no Android é o plugin Filesystem.
export async function salvarNoCelular(nomeArquivo, texto) {
  const fs = plugin('Filesystem');
  if (!fs) throw new Error('Filesystem indisponível');
  const r = await fs.writeFile({
    path: PASTA + '/' + nomeArquivo, data: texto,
    directory: 'DOCUMENTS', encoding: 'utf8', recursive: true
  });
  return { uri: r.uri, caminho: CAMINHO_HUMANO + ' › ' + nomeArquivo };
}

// Abre o menu "Compartilhar" do Android com um arquivo já gravado.
export async function compartilharUri(uri, nomeArquivo) {
  const share = plugin('Share');
  if (!share) throw new Error('compartilhar indisponível');
  await share.share({ title: nomeArquivo, files: [uri], dialogTitle: 'Guardar backup do LLMusic' });
}

// Salva e já abre o compartilhamento. Se não der para gravar em Documentos
// (aparelho antigo, permissão negada), cai no cache só para o arquivo sair daqui.
export async function compartilharArquivo(nomeArquivo, texto) {
  const fs = plugin('Filesystem');
  if (!fs) throw new Error('compartilhar indisponível');
  let uri;
  try { uri = (await salvarNoCelular(nomeArquivo, texto)).uri; }
  catch { uri = (await fs.writeFile({ path: nomeArquivo, data: texto, directory: 'CACHE', encoding: 'utf8' })).uri; }
  await compartilharUri(uri, nomeArquivo);
  return uri;
}

// LEMBRETES DIÁRIOS
//
// Antes era uma notificação só, repetindo todo dia o mesmo texto. Agora cada
// dia tem o seu, com o exercício que o rodízio escolheu, e tocar nela abre
// aquele exercício — a rota viaja no "extra" da notificação e quem a lê é o
// ouvinte em js/main.js.
//
// O preço disso é que não dá mais para usar uma notificação que se repete:
// o texto muda a cada dia, então são N notificações, uma por data. O app
// reagenda as próximas toda vez que abre. Se ficar muito tempo fechado, as
// últimas chegam com o exercício que era o próximo na época de agendar —
// está dito na tela de Hábitos, não escondido.
export const Lembretes = {
  DIAS: 14,            // quantos dias à frente ficam agendados
  disponivel() { return nativo() && !!plugin('LocalNotifications'); },

  ids() { return Array.from({ length: this.DIAS }, (_, i) => ({ id: i + 1 })); },

  // dias: [{ data: Date, titulo, corpo, rota }], já com a hora certa.
  async ativar(dias) {
    const ln = plugin('LocalNotifications');
    if (!ln) throw new Error('indisponível');
    const p = await ln.requestPermissions();
    if (p.display !== 'granted') throw new Error('permissão negada');
    await ln.cancel({ notifications: this.ids() });
    const agora = Date.now();
    const notifications = dias
      .filter((d) => d.data.getTime() > agora)      // o Android ignora data no passado
      .slice(0, this.DIAS)
      .map((d, i) => ({
        id: i + 1,
        title: d.titulo,
        body: d.corpo,
        extra: { rota: d.rota },
        schedule: { at: d.data, allowWhileIdle: true }
      }));
    if (!notifications.length) return 0;
    await ln.schedule({ notifications });
    return notifications.length;
  },

  async desativar() {
    const ln = plugin('LocalNotifications');
    if (ln) await ln.cancel({ notifications: this.ids() });
  }
};

// Lê "07:30" e devolve [7, 30], ou null se for inválido.
export function lerHora(txt) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(txt || '');
  if (!m) return null;
  const h = +m[1], mi = +m[2];
  return h < 24 && mi < 60 ? [h, mi] : null;
}
