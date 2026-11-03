# Como gerar o APK do LLMusic (sem Android Studio)

O GitHub monta o APK para você, de graça, a cada vez que você pedir. Você não precisa instalar nada no computador.

## Passo a passo
1. No GitHub, abra o repositório `llmusic` e clique na aba **Actions**.
2. Se aparecer um botão verde pedindo para habilitar as Actions, clique nele.
3. No menu da esquerda, clique em **Gerar APK**. Depois clique em **Run workflow** (botão à direita) e confirme em **Run workflow**.
4. Espere uns 5 a 10 minutos (aparece um círculo amarelo; vira um ✓ verde quando termina).
5. Clique na execução que terminou. Lá embaixo, em **Artifacts**, baixe **LLMusic-apk** (vem num .zip com o `app-debug.apk`).
6. No Samsung: abra o arquivo `app-debug.apk` pelo app **Meus Arquivos**. O Android vai pedir para permitir "instalar apps desconhecidos" desta fonte: permita e instale.

## O que muda no APK em relação ao app instalado pelo Chrome
- **Lembrete diário** passa a funcionar (Hábitos > Lembrete diário): notificação todo dia no horário escolhido.
- **Backup**: o botão Exportar abre o menu Compartilhar do Android (Drive, e-mail, WhatsApp).
- O microfone é pedido na primeira vez que você usar o afinador ou os exercícios.

## Atualizar o app
Quando eu (ou você) mudar o código, gere o APK de novo (passos 3 a 6). Instalar por cima mantém seus dados.
Seus dados ficam guardados dentro do app. Antes de desinstalar, faça um backup em Hábitos.

## Se der erro
Abra a execução que ficou com ✗ vermelho, clique no passo que falhou e copie a mensagem para mim.

## Para quem quiser entender
- `capacitor.config.json`: nome e identificador do app.
- `scripts/preparar-web.sh`: copia os arquivos do app para a pasta `www/`.
- `scripts/ajustar-android.sh`: dá as permissões (microfone, notificações) ao app.
- `.github/workflows/apk.yml`: a receita que o GitHub segue para montar o APK.
- Este APK é de "debug" (assinado com a chave de teste): serve perfeitamente para uso pessoal.
