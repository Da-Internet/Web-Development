<?php

//  Seguridad de Paginacion
session_start();

// Verificamos si la sesión existe antes de acceder a $_SESSION['usuario']
if (!isset($_SESSION['usuario']) || $_SESSION['usuario'] == '') {
    echo "<script>
        alert('Debe iniciar sesión para ingresar');
        window.location.href = 'index.php';
    </script>";
    die();
}

$varsesion = $_SESSION['usuario'];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio del Login</title>
</head>

<body>

    <h1>
        Bienvenido, Moderador
    </h1>

    <a href="./PHP/logout.php">Cerrar Sesion</a>

</body>

</html>