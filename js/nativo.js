// Ponte com o app Android (Capacitor). No navegador/PWA, "nativo()" é falso e tudo continua funcionando
// pelo jeito web. No APK, usamos os recursos do celular: notificações locais e compartilhar arquivos.

export function nativo() {
  return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
}
function plugin(nome) {
  return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins[nome];
}

// Salva um texto como arquivo e abre o menu "Compartilhar" do Android (para guardar no Drive, e-mail...).
export async function compartilharArquivo(nomeArquivo, texto) {
  const fs = plugin('Filesystem'), share = plugin('Share');
  if (!fs || !share) throw new Error('compartilhar indisponível');
  const r = await fs.writeFile({ path: nomeArquivo, data: texto, directory: 'CACHE', encoding: 'utf8' });
  await share.share({ title: nomeArquivo, files: [r.uri], dialogTitle: 'Guardar backup do LLMusic' });
}

export const Lembretes = {
  ID: 1,
  disponivel() { return nativo() && !!plugin('LocalNotifications'); },
  // Agenda uma notificação que se repete todo dia, na hora e minuto escolhidos.
  async ativar(hora, minuto) {
    const ln = plugin('LocalNotifications');
    if (!ln) throw new Error('indisponível');
    const p = await ln.requestPermissions();
    if (p.display !== 'granted') throw new Error('permissão negada');
    await ln.cancel({ notifications: [{ id: this.ID }] });
    await ln.schedule({
      notifications: [{
        id: this.ID,
        title: 'Hora de tocar! 🎸',
        body: 'Alguns minutinhos de violão hoje mantêm a sequência viva.',
        schedule: { on: { hour: hora, minute: minuto }, allowWhileIdle: true }
      }]
    });
  },
  async desativar() {
    const ln = plugin('LocalNotifications');
    if (ln) await ln.cancel({ notifications: [{ id: this.ID }] });
  }
};

// Lê "07:30" e devolve [7, 30], ou null se for inválido.
export function lerHora(txt) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(txt || '');
  if (!m) return null;
  const h = +m[1], mi = +m[2];
  return h < 24 && mi < 60 ? [h, mi] : null;
}
