
const CACHE_NAME = 'nashco-global-v1';
const urlsToCache = [
  "index.html",
  "about.html",
  "automotive.html",
  "manufacturing.html",
  "trading.html",
  "contact.html",
  "offline.html",
  "manifest.json",
  "Assets/css/styles.css",
  "Assets/js/script.js",
  "Assets/vendor/bootstrap/bootstrap.css",
  "Assets/vendor/bootstrap/bootstrap.bundle.js",
  "Assets/vendor/aos/aos.css",
  "Assets/vendor/aos/aos.js",
  "Assets/vendor/swiper/swiper-bundle.css",
  "Assets/vendor/swiper/swiper-bundle.js",
  "Assets/vendor/gsap/gsap.js",
  "Assets/vendor/gsap/ScrollTrigger.js",
  "Assets/images/icon-192.png",
  "Assets/images/Index-hero.jpeg",
  "Assets/images/trading-hero.jpeg",
  "Assets/images/manufacturing-hero.jpg",
  "Assets/images/automotive-industry-hero.jpeg",
  "Assets/images/contact-hero.jpg",
  "Assets/images/logo-nashco.png"
];
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
