#!/bin/sh
# Depois de "npx cap add android": dá ao app as permissões de microfone e notificações
# e coloca o app em modo "paisagem ou retrato" livre. Roda no GitHub Actions.
set -e
M=android/app/src/main/AndroidManifest.xml
add_perm() { grep -q "$1" "$M" || sed -i "s#<application#<uses-permission android:name=\"$1\" />\n    <application#" "$M"; }
add_perm android.permission.RECORD_AUDIO
add_perm android.permission.MODIFY_AUDIO_SETTINGS
add_perm android.permission.POST_NOTIFICATIONS
add_perm android.permission.SCHEDULE_EXACT_ALARM
add_perm android.permission.WAKE_LOCK
grep -q 'android:screenOrientation' "$M" || sed -i 's#<activity#<activity android:screenOrientation="fullUser"#' "$M"
echo "Manifest ajustado:"; grep -n "uses-permission\|screenOrientation" "$M"
