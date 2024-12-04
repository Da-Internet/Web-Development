
console.log("Archivo ServiceWorkers.js detectado");

// Nombre del Cache
const currentCache = 'Cache_v1.1';

// Archivos para  guardar  en el caché
const files = [
    './CSS/bootstrap.min.css',
    './JS/bootstrap.bundle.js',

    './Img/Logo.png',
    './Img/icon.webp',
    './Img/Logo.svg',

    './JS/Header1.js',
    './Header1.html',
    './JS/Header2.js',
    './Header2.html',

    './Home.html',
    './About.html',
    './Support.html',
    './Manifest.json'
];

// Evento para manejar el mensaje push
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const { title = "Notificación", body = "Mensaje recibido", icon = "./IMG/Logo.svg" } = data;

    console.log("Notificación recibida:", { title, body, icon });

    event.waitUntil(
        self.registration.showNotification(title, { body, icon, data })
    );
});

// Evento para manejar clics en las notificaciones
self.addEventListener('notificationclick', event => {
    console.log("Notificación clickeada:", event.notification);

    event.notification.close(); // Para cerrar la notificación al clickear

    const urlToOpen = event.notification.data || '/';

    // Para abrir la URL
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {

            // Confirmar que no este abierta ya la URL
            const client = clientList.find(c => c.url === urlToOpen && 'focus' in c);

            if (client) {
                return client.focus();
            }

            // Si no, abrimos la URL
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Evento de instalación
self.addEventListener("install", event => {
    console.log("Instalando Service Worker...");

    event.waitUntil(
        (async () => {

            try {

                const cache = await caches.open(currentCache);
                await cache.addAll(files);
                console.log("Archivos cacheados correctamente.");
                
            } catch (error) {

                console.error("Error durante la instalación del Service Worker:", error);
            }
        })()
    );

    // Activa  el ServiceWorkers tras instalar
    self.skipWaiting();
});

// Evento de Fetch 
self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

    // Registramos la solicitud del service worker
    console.log(`Interceptando solicitudes para: ${requestUrl.origin}`);

    event.respondWith(
        (async () => {
            const cache = await caches.open(currentCache);

            try {

                // Vemos si hay internet
                const networkResponse = await fetch(event.request);

                // Registramos la respuesta del Service Worker
                cache.put(event.request, networkResponse.clone());
                console.log(`Respuesta desde el servidor: ${requestUrl.pathname}`);
                return networkResponse;

            } catch (error) {
                console.warn(`Sin conexión. Cargando cache`);
                const cachedResponse = await cache.match(event.request);

                if (cachedResponse) {
                    console.log(`Recurso cargado desde cache: ${requestUrl.pathname}`);
                    return cachedResponse;
                }

                // Si no hay cache ni internet
                return new Response("Recurso no disponible offline.", {
                    status: 404,
                    statusText: "Not Found"
                });
            }
        })()
    );
});


// Evento de activación para limpiar el cache antiguo
self.addEventListener("activate", event => {
    console.log("Activando nuevo Service Worker y limpiando caché antiguo.");

    event.waitUntil(
        (async () => {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== currentCache) {
                        console.log(`Eliminando caché antiguo: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })()
    );

    console.log("Cache eliminado con exito")
    self.clients.claim();
});


// Si obtenemos internet otra vez recargara la pagina
self.addEventListener('message', event => {
    if (event.data === 'checkConnection' && navigator.onLine) {
        console.log("Conexión detectada nuevamente. Recargando pestañas controladas...");
        self.clients.matchAll().then(clients => {
            clients.forEach(client => client.navigate(client.url));
        });
    }
});
