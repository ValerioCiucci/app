self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/img/cute.png',
        '/img/cute1.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Filtro per evitare risorse 'chrome-extension://'
  if (requestUrl.protocol === 'chrome-extension:') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((networkResponse) => {
        // Filtro per evitare di cache-izzare risposte parziali (status code 206)
        if (networkResponse.status === 206) {
          return networkResponse;  // Non mettere in cache le risposte parziali
        }

        return caches.open('v1').then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
