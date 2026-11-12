const CACHE_NAME = 'kdt-portal-v1';
const ASSETS_TO_CACHE = [
  '/KDT-AUTO-PORTAL/',
  '/KDT-AUTO-PORTAL/index.html',
  '/KDT-AUTO-PORTAL/manifest.json',
  '/KDT-AUTO-PORTAL/logo_kdt.jpg',
  '/KDT-AUTO-PORTAL/logo_jdt.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});