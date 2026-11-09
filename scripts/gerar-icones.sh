#!/bin/sh
# GERA TODOS OS ÍCONES A PARTIR DE icons/icon.svg
#
# São três famílias, com exigências diferentes:
#  - manifesto (PWA): 192 e 512 normais, mais um "maskable", que o Android
#    recorta — por isso o conteúdo dele fica menor, dentro da zona segura.
#  - lançador antigo: PNG quadrado e redondo, nas cinco densidades.
#  - ícone adaptativo (Android 8+): frente transparente com o conteúdo dentro
#    dos 66% centrais, e o fundo como cor sólida. O sistema é que decide o
#    recorte — círculo, quadrado arredondado, esquilo, o que o fabricante usar.
#
# Rode depois de mexer em icons/icon.svg:  sh scripts/gerar-icones.sh
set -e
cd "$(dirname "$0")/.."
command -v rsvg-convert >/dev/null || { echo "falta rsvg-convert (librsvg2-bin)"; exit 1; }

VERDE="#263F35"

# ---- manifesto ----
rsvg-convert -w 192 -h 192 icons/icon.svg -o icons/icon-192.png
rsvg-convert -w 512 -h 512 icons/icon.svg -o icons/icon-512.png

# maskable: fundo inteiro, conteúdo a 72% no centro (cabe na zona segura)
cat > /tmp/mask.svg <<FIM
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="$VERDE"/>
  <g transform="translate(256,256) scale(0.72) translate(-256,-256)">
    <g stroke="#B49358" stroke-width="4" opacity="0.38">
      <line x1="40" y1="196" x2="472" y2="196"/><line x1="40" y1="226" x2="472" y2="226"/>
      <line x1="40" y1="256" x2="472" y2="256"/><line x1="40" y1="286" x2="472" y2="286"/>
      <line x1="40" y1="316" x2="472" y2="316"/>
    </g>
    <g fill="#F3EFE3">
      <rect x="140" y="140" width="40" height="212" rx="8"/><rect x="140" y="312" width="116" height="40" rx="8"/>
      <rect x="286" y="140" width="40" height="212" rx="8"/><rect x="286" y="312" width="116" height="40" rx="8"/>
    </g>
    <circle cx="402" cy="160" r="26" fill="#B49358"/>
  </g>
</svg>
FIM
rsvg-convert -w 512 -h 512 /tmp/mask.svg -o icons/icon-maskable-512.png

# ---- frente do ícone adaptativo: sem fundo, conteúdo a 60% ----
cat > /tmp/frente.svg <<FIM
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <g transform="translate(256,256) scale(0.60) translate(-256,-256)">
    <g stroke="#B49358" stroke-width="4" opacity="0.45">
      <line x1="40" y1="196" x2="472" y2="196"/><line x1="40" y1="226" x2="472" y2="226"/>
      <line x1="40" y1="256" x2="472" y2="256"/><line x1="40" y1="286" x2="472" y2="286"/>
      <line x1="40" y1="316" x2="472" y2="316"/>
    </g>
    <g fill="#F3EFE3">
      <rect x="140" y="140" width="40" height="212" rx="8"/><rect x="140" y="312" width="116" height="40" rx="8"/>
      <rect x="286" y="140" width="40" height="212" rx="8"/><rect x="286" y="312" width="116" height="40" rx="8"/>
    </g>
    <circle cx="402" cy="160" r="26" fill="#B49358"/>
  </g>
</svg>
FIM

# ---- lançador, por densidade ----
# mdpi 48, hdpi 72, xhdpi 96, xxhdpi 144, xxxhdpi 192; a frente adaptativa é 108dp
set -- "mdpi 48 108" "hdpi 72 162" "xhdpi 96 216" "xxhdpi 144 324" "xxxhdpi 192 432"
for linha in "$@"; do
  set -- $linha
  dir="icons/android/mipmap-$1"
  mkdir -p "$dir"
  rsvg-convert -w "$2" -h "$2" icons/icon.svg -o "$dir/ic_launcher.png"
  cp "$dir/ic_launcher.png" "$dir/ic_launcher_round.png"
  rsvg-convert -w "$3" -h "$3" /tmp/frente.svg -o "$dir/ic_launcher_foreground.png"
done

# ---- XML do ícone adaptativo ----
mkdir -p icons/android/mipmap-anydpi-v26 icons/android/values
for n in ic_launcher ic_launcher_round; do
  cat > "icons/android/mipmap-anydpi-v26/$n.xml" <<FIM
<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
FIM
done
cat > icons/android/values/ic_launcher_background.xml <<FIM
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">$VERDE</color>
</resources>
FIM

echo "ícones gerados:"
find icons -name '*.png' -o -name '*.xml' | sort | sed 's/^/  /'
