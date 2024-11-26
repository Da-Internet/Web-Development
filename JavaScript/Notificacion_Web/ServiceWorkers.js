
console.log("Archivo ServiceWorker.js detectado");

// Nombre del Cache
const currentCache = 'cache-v2.5';

// Archivos para  guardar  en el caché
const files = [
    './CSS/bootstrap.min.css',
    './JS/bootstrap.bundle.js',

    './Img/Logo.png',
    './Img/icon.webp',
    './Img/Logo.svg',

    './Img/Ace_Attorney.png',
    './Img/Among_Us.png',
    './Img/Baldurs_Gate_3.png',
    './Img/EA_FC.png',
    './Img/Elden_Ring.png',
    './Img/SilkSong.png',
    './Img/Steam.png',
    './Img/Ubisoft.png',
    './Img/Unicorn_Overlord.png',

    './JS/Header1.js',
    './Header1.html',

    './Home.html',
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
    console.log("Evento de Instalación de Service Worker en progreso.");

    event.waitUntil(
        (async () => {
            try {
                const cache = await caches.open(currentCache);
                await cache.addAll(files);
                console.log("Recursos guardados en cache exitosamente.");
            } catch (error) {
                console.error("Error al almacenar recursos en cache:", error);
            }
        })()
    );

    // Activa  el ServiceWorker tras instalar
    self.skipWaiting();
});

// Evento de Fetch 
self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

    // Registramos la solicitud del service worker
    // console.log(`Interceptando solicitudes para: ${requestUrl.origin}`);

    event.respondWith(
        (async () => {
            const cache = await caches.open(currentCache);

            try {

                // Vemos si hay internet
                const networkResponse = await fetch(event.request);

                // Registramos la respuesta del Service Worker
                cache.put(event.request, networkResponse.clone());
                // console.log(`Respuesta desde el servidor y guardada en cache: ${requestUrl.pathname}`);
                return networkResponse;

            } catch (error) {
                console.warn(`Sin conexión. Intentando cargar desde el cache: ${requestUrl.pathname}`);
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
    console.log("Evento de Activación de Service Worker.");

    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(
                keys.map(key => {
                    if (key !== currentCache) {
                        console.log(`Eliminando cache antiguo: ${key}`);
                        return caches.delete(key);
                    }
                })
            );

            console.log("Cache actualizado.");
            return self.clients.claim();
        })()
    );
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
