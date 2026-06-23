self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass-through fetch for a basic PWA that doesn't cache everything offline
  e.respondWith(fetch(e.request).catch(() => new Response('App is offline.')));
});
