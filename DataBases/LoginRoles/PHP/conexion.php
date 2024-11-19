
<?php

// Se definen las credenciales de conexión a la base de datos
$servidor = 'localhost'; // El servidor 
$usuario = 'root'; // El nombre de usuario 
$password = ''; // La contraseña 
$bd = 'loginroles'; // El nombre de la base de datos 

// Se crea una  conexión a la base de datos 
$conexion = new mysqli($servidor, $usuario, $password, $bd);

// Verifica si la conexión fue exitosa, de lo contrario, muestra un mensaje de error
if($conexion->connect_error){
    
    echo $error -> $conexion->connect_error;
}

?>
