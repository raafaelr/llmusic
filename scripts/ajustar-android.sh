#!/bin/sh
# Depois de "npx cap add android": dá ao app as permissões de microfone e notificações
# e coloca o app em modo "paisagem ou retrato" livre. Roda no GitHub Actions.
set -e
M=android/app/src/main/AndroidManifest.xml
add_perm() { grep -q "$1" "$M" || sed -i "s#<application#<uses-permission android:name=\"$1\" />\n    <application#" "$M"; }
add_perm android.permission.CAMERA
add_perm android.permission.RECORD_AUDIO
add_perm android.permission.MODIFY_AUDIO_SETTINGS
add_perm android.permission.POST_NOTIFICATIONS
add_perm android.permission.SCHEDULE_EXACT_ALARM
add_perm android.permission.WAKE_LOCK
grep -q 'android:screenOrientation' "$M" || sed -i 's#<activity#<activity android:screenOrientation="fullUser"#' "$M"
echo "Manifest ajustado:"; grep -n "uses-permission\|screenOrientation" "$M"

# Assinatura: aponta explicitamente para a chave do repositório.
# Copiar a chave para ~/.android/debug.keystore NÃO basta — o plugin do
# Android procura em outros lugares conforme o ambiente, e no GitHub ele
# acabou assinando com uma chave própria. Declarando aqui não há dúvida.
G=android/app/build.gradle
if ! grep -q "llmusic_fixa" "$G"; then
  python3 - "$G" <<'FIM'
import re, sys
caminho = sys.argv[1]
t = open(caminho).read()
assinatura = """
    signingConfigs {
        llmusic_fixa {
            storeFile file("$rootDir/../chaves/debug.keystore")
            storePassword "android"
            keyAlias "androiddebugkey"
            keyPassword "android"
        }
    }
"""
t = t.replace("android {", "android {" + assinatura, 1)
t = re.sub(r"buildTypes\s*\{",
           "buildTypes {\n        debug {\n            signingConfig signingConfigs.llmusic_fixa\n        }",
           t, count=1)
open(caminho, "w").write(t)
print("build.gradle: assinatura fixa aplicada")
FIM
fi
grep -n "llmusic_fixa" "$G" || echo "AVISO: nao consegui aplicar a assinatura no build.gradle"

# ---------------------------------------------------------------- ícones
# Sem isto o APK sai com o ícone padrão do Capacitor. Os arquivos foram
# gerados por scripts/gerar-icones.sh e estão versionados em icons/android.
RES=android/app/src/main/res
if [ -d "$RES" ] && [ -d icons/android ]; then
  # tira os padrões que colidiriam (o Capacitor põe a frente em drawable/)
  rm -f "$RES"/drawable*/ic_launcher_foreground.* "$RES"/drawable*/ic_launcher_background.* 2>/dev/null || true
  cp -R icons/android/. "$RES"/
  echo "Ícones instalados:"; ls "$RES"/mipmap-xxxhdpi/ 2>/dev/null
else
  # Falha de propósito: um aviso ignorado foi o que fez o APK sair com o
  # ícone do Capacitor sem ninguém notar.
  echo "ERRO: não achei $RES ou icons/android — o APK sairia com o ícone padrão."
  [ -d icons/android ] || echo "  icons/android não existe (os arquivos estão versionados?)"
  [ -d "$RES" ] || echo "  $RES não existe (o projeto Android não foi criado?)"
  exit 1
fi

# Confere que chegaram mesmo, em vez de confiar no cp.
for d in mdpi hdpi xhdpi xxhdpi xxxhdpi; do
  [ -f "$RES/mipmap-$d/ic_launcher.png" ] || { echo "ERRO: falta mipmap-$d/ic_launcher.png"; exit 1; }
done
[ -f "$RES/mipmap-anydpi-v26/ic_launcher.xml" ] || { echo "ERRO: falta o ícone adaptativo"; exit 1; }
echo "Ícones conferidos nas 5 densidades e no adaptativo." 
