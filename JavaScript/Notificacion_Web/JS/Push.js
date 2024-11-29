
// Verificar soporte de notificaciones
function allowedNotifications() {
    if (!("Notification" in window)) {
        console.log("Notificaciones no soportadas en el navegador");
        return;
    }

    Notification.requestPermission()
        .then(permission => {
            if (permission === "granted") {
                console.log("Permisos para notificaciones aceptados");
            } else {
                console.log("Permisos para notificaciones denegados");
            }
        })
        .catch(error => {
            console.error("Error al solicitar permiso para notificaciones:", error);
        });
}

// Función para mostrar Notificaciones
function showNotifications() {
    const notif = document.getElementById('MyNotif');
    notif.style.display = 'block';
}

// Pedir el permiso cuando cargue la pagina
document.addEventListener("DOMContentLoaded", () => {
    allowedNotifications();
    setTimeout(() => {
        showNotifications();
    }, 3000); // Mostrar notificación después de 3 segundos
});

//Cerrar el dialogo
document.getElementById('CloseNotif').addEventListener('click', () => {
    const notif = document.getElementById('MyNotif');
    notif.style.display = 'none'; // Ocultar el div
});