<?php
session_start();
if (isset($_POST["Ingresar"])) {
    $usuario = $_POST["usuario"];
    $contraseña = $_POST["contraseña"];

    if ($usuario == "admin" and $contraseña == "1234"){
        $_SESSION["usuario"]=$usuario;
        header("Location:pagina1.php");
    } else {
        echo "<h1>Acceso Denegado</h1>";
    }
}

?>



<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title style color="white">login</title>
    <link rel="stylesheet" href="css.css">
</head>

<body>
    
    <form action="#" method="post">
    <div class="login-box">
        <h1>MEJY medidores</h1>

        <form>
        <div class="user-box">
        <p>Usuario <input type="text" placeholder="Ingrese su nombre" name="usuario"></p>
        </div>

         
    <div class="user-box">
        <p>Contraseña <input type="password" placeholder="Ingrese su contraseña" name="contraseña"></p>
        </div>

        <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     <input type="submit" value="Ingresar" name="Ingresar">
    </a>
        

    </form>
</body>

</html>


  
  
    
      
      
   
     
    
   

