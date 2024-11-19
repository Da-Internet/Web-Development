
<?php

// Conectamos a la base de datos mediante el archivo 'conexion.php'
include('conexion.php');

// Se obtienen los datos del formulario 'Index' usando el método POST.
$usuario = mysqli_real_escape_string($conexion, $_POST['Usuario']);
$password = mysqli_real_escape_string($conexion, $_POST['Password']);

// Inicia una sesión para guardar datos entre páginas
session_start();

// Almacena el nombre de usuario en la sesión 
$_SESSION['usuario'] = $usuario;

// Se construye la consulta SQL para verificar que existe el usuario
$consulta = "SELECT * FROM Usuarios WHERE Usuario = '$usuario' and Password = '$password'";
// Ejecuta la consulta en la base de datos
$resultado = mysqli_query($conexion, $consulta);

// Verifica si la consulta encontro 
if ($resultado && mysqli_num_rows($resultado) > 0) {
    // Si hay coincidencias, se obtiene la fila con los datos del usuario
    $filas = mysqli_fetch_array($resultado);

    // Se realiza la redirección según el rol del usuario
    if ($filas['ID_Rol'] == 1) {
        // Si el rol es admin, redirige a la página de administrador
        header("location:../home_admin.php");
    } else if ($filas['ID_Rol'] == 2) {
        // Si el rol es moderador, redirige a la página de moderador
        header("location:../home_mod.php");
    } else if ($filas['ID_Rol'] == 3) {
        // Si el rol es usuario, redirige a la página de usuario
        header("location:../home_user.php");
    }
} else {
    // Si no hay coincidencias, muestra un mensaje de error
    include('../index.php');
    echo '<h1 class="bad">ERROR DE AUTENTICACION</h1>';
}

// Libera los resultados de la consulta para no consumir memoria
mysqli_free_result($resultado);

// Cierra la conexión con la base de datos
mysqli_close($conexion);
