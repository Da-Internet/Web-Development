
// Verificar soporte de notificaciones
if (!("Notification" in window)) {

    console.log("Este navegador no soporta notificaciones.");

} else if (Notification.permission !== "granted") {

    // Solicitar permiso al usuario
    Notification.requestPermission().then((permission) => {

        if (permission === "granted") {
            console.log("Permiso de notificaciones concedido.");

        } else {
            console.log("Permiso de notificaciones denegado.");

        }
    });
}

// Función para enviar notificación
function enviarNotificacion(titulo, mensaje) {
    if (Notification.permission === "granted") {

        const options = {
            body: mensaje,
            icon: "./IMG/Logo.svg"
        };

        console.log(`Enviando notificación: ${titulo} - ${mensaje}`);
        new Notification(titulo, options);

    } else {

        console.log("No se pueden enviar notificaciones. Permiso no concedido.");
    }
}
