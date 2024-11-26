
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
    console.log("Mensaje push recibido:", event);

    let data = {};

    if (event.data) {
        // Parseamos los datos recibidos
        data = event.data.json();
    }

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