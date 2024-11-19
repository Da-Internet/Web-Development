
const currentCache = 'cache-v2.0';

const files =
    [
        'index.html',
        'img/Logo.png',
        'img/Logo.svg',
        'img/Icon.webp'
    ];

// Instalar el Service Worker y cachear los recursos
self.addEventListener('install', (event) => {
    console.log('Instalando el Service Worker');
    event.waitUntil(
        caches.open(currentCache)
            .then((cache) => {
                console.log('Archivos en caché');
                return cache.addAll(files);
            })
    );
});

// Uso del Cache
self.addEventListener('fetch', (event) => {
    console.log('Solicitud de Cache');

    event.respondWith(
        caches.match(event.request)
            .then((response) => {

                // Si hay una respuesta en caché, la devuelve, de lo contrario, busca en la red
                return response || fetch(event.request).then((response) => {

                    return caches.open(currentCache).then((cache) => {
                        console.log('Respuesta del Cache');

                        // Guarda la respuesta en caché para futuras solicitudes
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });

            }).catch(() => {

                console.log('No hay Cache detectado, no hay Red detectada');

                // Si no tiene caché ni acceso a la red, podrías servir una página o recurso por defecto
                return caches.match('/offline.html');
            })
    );
});