const CACHE_NAME = 'confession-app-v8';
const ASSETS_TO_CACHE = [
    './index.html',
    './styles.css',
    './manifest.json',
    './icon-192.png'
];

// Install Event: Cache all core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate Event: Clean up old caches if version changes
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Event: Serve cached assets when offline, update cache when online
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return cached response if found, otherwise fetch from network
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).catch(() => {
                // Optional fallback if both cache and network fail (e.g. offline page)
                console.log('Fetch failed; offline and not cached:', event.request.url);
            });
        })
    );
});
