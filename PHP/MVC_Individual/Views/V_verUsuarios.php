<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lista De Usuarios</title>
</head>
<body>
    
    <table>

        <thead>
            <tr>
                <td>Usuario</td>
                <td>Contraseña</td>
                <td>Nombre Real</td>
            </tr>
        </thead>

        <tbody>
            <?php

                foreach ($usuarios as $user) {
                    echo "<tr>";
                    echo "<td>". $user['username'] ."</td>";
                    echo "<td>". $user['contrasena'] ."</td>";
                    echo "<td>". $user['nombre'] ."</td>";
                    echo "</tr>";
                }

            ?>
        </tbody>

    </table>

</body>
</html>