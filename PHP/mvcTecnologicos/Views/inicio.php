<?php
require_once '../controllers/LoginController.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión - Accesorios Tecnológicos</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <style>
        body {
            background-image: url('https://png.pngtree.com/background/20231017/original/pngtree-office-essentials-and-tech-gadgets-mobile-phone-laptop-printer-camera-headphones-picture-image_5591761.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .login-container {
            background-color: rgba(200, 200, 200, 0.7);
            /* Color gris con transparencia */
            border-radius: 10px;
            padding: 30px;
            backdrop-filter: blur(5px);
            /* Agregar efecto de desenfoque */
        }

        .login-btn {
            border-radius: 20px;
            padding: 12px 20px;
            font-size: 16px;
        }
    </style>

    <?php
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(isset($_POST['login'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];

            $loginController = new LoginController();
            $loggedIn = $loginController->login($username, $password);

            if($loggedIn === true) {
                echo "<script>alert('¡Inicio de sesión exitoso!');</script>";
                header("Location: tecnologico.php"); // Redirecciona si el inicio de sesión es exitoso
                exit();
            } else {
                echo "<div class='container'><div class='alert alert-danger'>Nombre de usuario o contraseña incorrectos</div></div>";
            }
        }
    }
    ?>

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card login-container">
                    <div class="card-header">
                        <h2 class="text-center"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</h2>
                    </div>
                    <div class="card-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <input type="text" class="form-control" name="username" placeholder="Nombre de usuario"
                                    required>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Contraseña"
                                    required>
                            </div>
                            <button type="submit" name="login" class="btn btn-primary btn-block"><i
                                    class="fas fa-sign-in-alt"></i> Iniciar sesión</button>

                        </form>
                        <p class="mt-3 text-center"><a href="registro.php">Regístrate</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/your_font_awesome_kit.js" crossorigin="anonymous"></script>
</body>

</html>