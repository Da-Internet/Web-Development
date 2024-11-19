
<?php

// Inicia una  sesión
session_start();

// Destruye todas las variables de sesión y cierra la sesión actual
session_destroy();

// Muestra un mensaje indicando que la sesión se ha cerrado  y redirige al login
echo "Sesion Cerrada con Exito";
echo "<script>
        alert('Sesion Cerrada con Exito');
        window.location.href = '../index.php';
    </script>";

?>
