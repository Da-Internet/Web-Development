<?php

// Con esto va a obtener los datos del Index
$usuario = $_POST['Usuario'];
$password = $_POST['Password'];

session_start();

$_SESSION['usuario'] = $usuario;

include('conexion.php');

$consulta = "SELECT * FROM usuarios WHERE usuario = '$usuario' and password = '$password'";
$resultado = mysqli_query($conexion, $consulta);

$filas = mysqli_num_rows($resultado);

if ($filas) {

    header("location:../home.php");

} else {
    ?>

    <?php
    include('../index.php');
    ?>

    <h1 class="bad">
        ERROR DE AUTENTICACION
    </h1>

    <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);
