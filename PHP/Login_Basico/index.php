
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login con Autenticacion</title>
</head>

<body>

    <!-- Con esto el index mandara los datos a validacion -->
<form action="./PHP/validar.php" method="POST">
    <h1>
        Login con Autenticacion
    </h1>

    <p> Usuario <input type="text" placeholder="Ingrese su Usuario" name="Usuario"> </p>
    <p> Contraseña <input type="password" placeholder="Ingrese su Contraseña" name="Password"></p>
    <input type="submit" value="Ingresar">

</form>

</body>

</html>