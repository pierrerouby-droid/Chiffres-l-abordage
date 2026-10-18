import os, json, sys
root=sys.argv[2] if len(sys.argv) > 2 else '.'; ver=sys.argv[1]
files=['./', './index.html', './aide.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png']
files += ['./assets/' + f for f in sorted(os.listdir(root + '/assets')) if f.endswith('.webp')]
files += ['./assets/fonts/' + f for f in sorted(os.listdir(root + '/assets/fonts')) if f.endswith('.woff2')]
aud = sorted(os.listdir(root + '/assets/audio'))
files += ['./assets/audio/' + f for f in aud if f.startswith(('vo-', 'sfx-')) or f == 'manifest.json']
sw = f"""// Mode hors connexion : met en cache le jeu, les images et les voix ; les musiques sont gardées après leur première écoute.
const V = 'archipel-{ver}';
const FILES = {json.dumps(files)};
self.addEventListener('install', e => {{ e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); }});
self.addEventListener('activate', e => {{ e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); }});
self.addEventListener('fetch', e => {{
  const u = new URL(e.request.url); if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  const keep = r => {{ if (r && r.ok) {{ const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); }} return r; }};
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request).then(keep).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
  else e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(keep)));
}});
"""
open(root + '/sw.js', 'w').write(sw); print(len(files), 'fichiers en cache')
