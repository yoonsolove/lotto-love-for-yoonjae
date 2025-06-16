
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('yunso-lotto-cache').then(function(cache) {
      return cache.addAll([
        'yunso_lotto_pwa.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
