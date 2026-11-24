/* Offline cache for the web (PWA) version. Bump VERSION when any file in www/ changes. */
const VERSION='mdu-nav-v15';
const FILES=['./',"css/app.css","fonts/ibm-plex-mono-latin-500-normal.woff2","fonts/ibm-plex-mono-latin-600-normal.woff2","fonts/ibm-plex-sans-latin-400-normal.woff2","fonts/ibm-plex-sans-latin-500-normal.woff2","fonts/ibm-plex-sans-latin-600-normal.woff2","fonts/ibm-plex-sans-latin-700-normal.woff2","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","index.html","js/app.js","js/data.js","manifest.webmanifest","maps/E1.png","maps/E2.png","maps/E3.png","maps/E4.png","maps/R1.png","maps/R2.png","maps/R3.png","maps/U1.png","maps/U2.png","maps/U3.png","maps/X1.png","maps/X2.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;
  // Pages, scripts and styles: network first (always the newest version when online), cache as offline fallback.
  // Maps, fonts and icons: cache first (they rarely change and are big).
  const fresh=e.request.mode==='navigate'||/\.(html|js|css|webmanifest)$/.test(u.pathname)||u.pathname.endsWith('/');
  if(fresh){
    e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(VERSION).then(k=>k.put(e.request,c));}return r;})
      .catch(()=>caches.match(e.request,{ignoreSearch:true})));
  }else{
    e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));
  }
});
