<?php
session_start();

echo "Bienvenido a la pagina numero 2<br>";
echo "<h1>".$_SESSION['nombre']." ".$_SESSION['Apellidos']."</h1><br>";
echo "la fecha es: ".date( 'd m Y',$_SESSION['fecha'])

?>

