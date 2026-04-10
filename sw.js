const CACHE_NAME = 'bysanz-v3-cache';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './src/icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
