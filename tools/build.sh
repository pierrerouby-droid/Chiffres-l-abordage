#!/bin/sh
# Assemble la page complète du dépôt à partir du fragment publié en Artifact.
SRC="${1:-src/app.html}"; OUT="${2:-index.html}"
{
cat <<'HEAD'
<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<script>/* Tablette (iPad) : le jeu, pensé en portrait pour téléphone, est agrandi d'un bloc avec une mise en page de 560 px de large, celle du jeu */
(function(){try{if(Math.min(screen.width,screen.height)>=700)document.querySelector('meta[name=viewport]').setAttribute('content','width=560, viewport-fit=cover')}catch(e){}})()</script>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Moussaillon">
<meta name="theme-color" content="#0B2230">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}[hidden]{display:none!important}</style>
HEAD
cat "$SRC"
printf '\n</html>\n'
} > "$OUT"
