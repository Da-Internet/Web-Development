<?php
//Creamos la variable para utilizar sesiones
session_start();
if($_SESSION["usuario"]){

echo"<font face='Arial' size='11'>Bienvenido al menu, ¿Qué deseas hacer?</font>";
$_SESSION['nombre']="Admin";
$_SESSION['Apellidos']="Usuario 1";
$_SESSION['fecha']= time();

}
else{
    echo "Necesitas iniciar sesion :]<br>";
    echo "<a href='index.php'>Ir al login</a>";
    
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Diseño/barra.css">

    <title>Inicio</title>
</head>
<body>
    
<div id="pagina">
    <div class="barra-menu">
        <!-- Boton Desplegar/Replegar menú -->	<a href="#" id="btn-drop" class="btn-menu aln-centro">Navegacion</a>	
        <!-- Menú de navegación -->
        <ul id="submenu" class="lista-menu aln-centro">
            <li><a href="pagina2.php">Inicio</a>

            </li>
            <li><a href="vistas/medidores.html">Medidores</a>

            </li>
            <li><a href="vistas/contactos.html">Contactos</a>

            </li>
            <li><a href="index.php">Login</a>

            </li>
        </ul>
    </div>
</div>

<script src="JavaScript/barra.js"></script>

</body>
</html>