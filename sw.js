
const CACHE_NAME = 'nashco-global-v1';
const urlsToCache = ["index.html", "about.html", "chemical.html", "automotive.html", "manufacturing.html", "trading.html", "contact.html", "offline.html", "manifest.json", "css/styles.css", "js/script.js", "images/logo-nashco.jpg", "images/logo-zahy.jpg", "images/automotive-hero.jpg", "images/chemical-hero.jpg", "images/trading-hero.jpg", "images/manufacturing-hero.jpg", "images/contact-hero.jpg", "images/assembly-line.jpg", "images/ev-car.jpg", "images/headquarters.jpg", "images/icon-192.png", "images/icon-512.png"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).catch(() => caches.match('offline.html'));
    })
  );
});
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhitelist.includes(cacheName)) return caches.delete(cacheName);
      })
    ))
  );
});
