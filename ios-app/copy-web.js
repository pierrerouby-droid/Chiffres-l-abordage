// Copie les fichiers du jeu (déjà construits à la racine du dépôt) dans www/, que Capacitor embarque dans l'app iPhone.
// Le service worker n'est pas copié : dans l'app, tout est déjà sur l'appareil.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), out = path.join(__dirname, 'www');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out);
for (const f of ['index.html', 'aide.html', 'confidentialite.html', 'support.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'])
  fs.copyFileSync(path.join(root, f), path.join(out, f));
fs.cpSync(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });
console.log('Fichiers du jeu copiés dans www/');
