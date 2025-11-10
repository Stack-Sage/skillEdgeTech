// Basic offline support for PWA
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  // You can add caching logic here for offline support
});
