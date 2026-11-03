#!/bin/sh
# Copia só os arquivos do app (sem node_modules, .git etc.) para a pasta www/, que o Capacitor empacota no APK.
set -e
rm -rf www
mkdir -p www
cp -r index.html manifest.webmanifest sw.js css js icons pacotes www/
echo "Pasta www/ pronta."
