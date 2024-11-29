
// Verificar Soporte de Notificaciones
function allowedNotifications() {
    if (!("Notification" in window)) {
        console.log("Notificaciones no Soportadas en el Navegador");
        return;
    }

    Notification.requestPermission()
        .then(permission => {
            if (permission === "granted") {
                console.log("Permisos para Notificaciones Aceptados");
            } else {
                console.log("Permisos para Notificaciones Denegados");
            }
        })
        .catch(error => {
            console.error("Error al Solicitar Permiso para Notificaciones:", error);
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

