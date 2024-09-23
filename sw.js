const cacheName = 'v1';


const cacheAssets = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/img/gatto.gif'
];


self.addEventListener('install', (event) => {
  console.log('Service Worker: Installazione');

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('Service Worker: Caching File');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});


self.addEventListener('activate', (event) => {
  console.log('Service Worker: Attivazione');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Pulizia vecchia cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
       
        const resClone = response.clone();
        
        caches.open(cacheName).then((cache) => {
         
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request).then((response) => response))
  );
});