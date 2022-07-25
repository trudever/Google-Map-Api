self.addEventListener('install', function(e) {
  e.waitUntil(
      caches.open('pwa-example').then(function(cache) {
          return cache.addAll([
              '/',
              '/index.html',
              '/app.js',
              '/app.css' //Add any other assets your web page needs
          ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
      })
  );
});