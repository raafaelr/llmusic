// ÍCONES DA INTERFACE — Tabler Icons, só os que o app usa.
//
// Tabler Icons © Paweł Kuna, licença MIT.
// https://github.com/tabler/tabler-icons
//
// São 27 desenhos copiados para cá, não a biblioteca inteira: nada é
// baixado em tempo de execução, nada entra no package.json, e o app continua
// funcionando sem rede. Os desenhos herdam currentColor e o tamanho vem do
// CSS, então os dois temas e o contraste seguem valendo.
//
// Para acrescentar um ícone: pegue o SVG do Tabler, remova o <path> do
// contorno vazio e cole o miolo aqui. Um desenho que o Tabler não tenha é
// grafismo próprio e vai em js/grafismos.js.
//
// O C no começo do miolo marca os preenchidos (sem traço).

const MIOLO = {
  "voltar": "<path d=\"M15 6l-6 6l6 6\" />",
  "avancar": "<path d=\"M9 6l6 6l-6 6\" />",
  "tocar": "<path d=\"M7 4v16l13 -8l-13 -8\" />",
  "parar": "<path d=\"M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10\" />",
  "pausar": "<path d=\"M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12\" /> <path d=\"M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12\" />",
  "microfone": "<path d=\"M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5\" /> <path d=\"M5 10a7 7 0 0 0 14 0\" /> <path d=\"M8 21l8 0\" /> <path d=\"M12 17l0 4\" />",
  "estrela": "<path d=\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245\" />",
  "estrela-cheia": "C<path d=\"M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z\" />",
  "menos": "<path d=\"M5 12l14 0\" />",
  "mais": "<path d=\"M12 5l0 14\" /> <path d=\"M5 12l14 0\" />",
  "recarregar": "<path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /> <path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" />",
  "relogio": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /> <path d=\"M12 7v5l3 3\" />",
  "fechar": "<path d=\"M18 6l-12 12\" /> <path d=\"M6 6l12 12\" />",
  "baixar": "<path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /> <path d=\"M7 11l5 5l5 -5\" /> <path d=\"M12 4l0 12\" />",
  "enviar": "<path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /> <path d=\"M7 9l5 -5l5 5\" /> <path d=\"M12 4l0 12\" />",
  "link-externo": "<path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\" /> <path d=\"M11 13l9 -9\" /> <path d=\"M15 4h5v5\" />",
  "camera": "<path d=\"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2\" /> <path d=\"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" />",
  "expandir": "<path d=\"M16 4l4 0l0 4\" /> <path d=\"M14 10l6 -6\" /> <path d=\"M8 20l-4 0l0 -4\" /> <path d=\"M4 20l6 -6\" /> <path d=\"M16 20l4 0l0 -4\" /> <path d=\"M14 14l6 6\" /> <path d=\"M8 4l-4 0l0 4\" /> <path d=\"M4 4l6 6\" />",
  "inicio": "<path d=\"M5 12l-2 0l9 -9l9 9l-2 0\" /> <path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\" /> <path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\" />",
  "aprendizado": "<path d=\"M22 9l-10 -4l-10 4l10 4l10 -4v6\" /> <path d=\"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4\" />",
  "estudio": "<path d=\"M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4\" /> <path d=\"M14.5 5.5l4 4\" /> <path d=\"M12 8l-5 -5l-4 4l5 5\" /> <path d=\"M7 8l-1.5 1.5\" /> <path d=\"M16 12l5 5l-4 4l-5 -5\" /> <path d=\"M16 17l-1.5 1.5\" />",
  "biblioteca": "<path d=\"M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14\" /> <path d=\"M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14\" /> <path d=\"M5 8h4\" /> <path d=\"M9 16h4\" /> <path d=\"M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041\" /> <path d=\"M14 9l4 -1\" /> <path d=\"M16 16l3.923 -.98\" />",
  "evolucao": "<path d=\"M4 19l16 0\" /> <path d=\"M4 15l4 -6l4 2l4 -5l4 4\" />",
  "ajustes": "<path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\" /> <path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" />",
  "ouvir": "<path d=\"M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3\" /> <path d=\"M15 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3\" /> <path d=\"M4 15v-3a8 8 0 0 1 16 0v3\" />",
  "som": "<path d=\"M15 8a5 5 0 0 1 0 8\" /> <path d=\"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5\" />",
  "fixar": "<path d=\"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4\" /> <path d=\"M9 15l-4.5 4.5\" /> <path d=\"M14.5 4l5.5 5.5\" />",
};

// Devolve o <svg> pronto. É decoração: quem lê a tela ouve o texto do botão,
// não o ícone — por isso aria-hidden.
export function icone(nome, classe) {
  const d = MIOLO[nome];
  if (!d) return document.createComment('ícone desconhecido: ' + nome);
  const cheio = d.startsWith('C');
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  s.setAttribute('viewBox', '0 0 24 24');
  s.setAttribute('aria-hidden', 'true');
  s.setAttribute('focusable', 'false');
  s.setAttribute('class', 'ic-t' + (classe ? ' ' + classe : ''));
  if (cheio) {
    s.setAttribute('fill', 'currentColor');
  } else {
    s.setAttribute('fill', 'none');
    s.setAttribute('stroke', 'currentColor');
    s.setAttribute('stroke-width', '2');
    s.setAttribute('stroke-linecap', 'round');
    s.setAttribute('stroke-linejoin', 'round');
  }
  s.innerHTML = cheio ? d.slice(1) : d;
  return s;
}

// Botão com ícone antes do texto. Reaproveita as classes de botão que já
// existem; não cria componente novo.
export function botaoIcone(classe, nome, texto) {
  const b = document.createElement('button');
  b.className = classe;
  b.append(icone(nome));
  if (texto) b.append(document.createTextNode(' ' + texto));
  else b.setAttribute('aria-label', nome);
  return b;
}
