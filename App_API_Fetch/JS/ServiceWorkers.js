
const currentCache = 'cache-v2.0';

const files =
    [
        'css/*/.css',
        'js/*/.js',
        'img/*/.png',
        'img/*/.webp',
        'img/*/.svg',
        'index.html',
        '.html',
        '.json'
    ];

// Instalar el Service Worker y cachear los recursos
self.addEventListener('install', (event) => {
    console.log('[SW] Instalando el Service Worker');
    event.waitUntil(
        caches.open(currentCache).then((cache) => {
            console.log('[SW] Archivos en caché:', files);
            return cache.addAll(files);
        }).catch((error) => {
            console.log('[SW] Error al cachear archivos durante la instalación:', error);
        })
    );
});

// Activar el Service Worker y eliminar cachés antiguas
self.addEventListener('activate', (event) => {
    console.log('[SW] Activando el Service Worker');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== currentCache) {
                        console.log('[SW] Eliminando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).catch((error) => {
            console.log('[SW] Error durante la activación:', error);
        })
    );
});

// Manejo de solicitudes con fetch y caché
self.addEventListener('fetch', (event) => {
    console.log('[SW] Interceptando solicitud:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log('[SW] Respondiendo desde caché:', event.request.url);
                return cachedResponse;
            }
            console.log('[SW] Respuesta no en caché, haciendo fetch:', event.request.url);
            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    caches.open(currentCache).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        console.log('[SW] Respuesta guardada en caché:', event.request.url);
                    });
                }
                return networkResponse;
            }).catch((error) => {
                console.log('[SW] Error al obtener de la red:', event.request.url, error);
                // Aquí puedes manejar respuestas alternativas, como un mensaje de error o imagen
            });
        }).catch((error) => {
            console.log('[SW] Error en el manejo del caché para', event.request.url, error);
        })
    );
});