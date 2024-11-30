<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - Tema de Automóviles</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-image: url('https://img.freepik.com/foto-gratis/arreglo-coleccion-estacionaria-moderna_23-2149309662.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .register-container {
            background-color: rgba(200, 200, 200, 0.7);
            border-radius: 10px;
            padding: 30px;
            backdrop-filter: blur(5px);
        }

        .register-heading {
            text-align: center;
            font-size: 28px;
            margin-bottom: 30px;
            color: #333;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-control {
            border-radius: 25px;
            padding: 10px;
            font-size: 16px;
        }

        .register-btn {
            border-radius: 25px;
            padding: 12px 20px;
            font-size: 16px;
        }
    </style>
    <script>
        function showAlert(message) {
            alert(message);
            window.location.href = "inicio.php"; // Redirige a la página de inicio de sesión
        }

        function handleResponse(response) {
            const result = JSON.parse(response);

            if (result.success) {
                showAlert(result.message);
            } else {
                showAlert(result.message);
            }
        }
    </script>
</head>

<body>
    <div class="container">
        <div class="register-container">
            <h2 class="register-heading"><i class="fas fa-user-plus"></i> Registro</h2>
            <script>
                <?php
                require_once '../controllers/RegisterController.php';

                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    if (isset($_POST['register'])) {
                        $username = $_POST['username'];
                        $password = $_POST['password'];
                        $completo = $_POST['completo'];

                        $registerController = new RegisterController();
                        $message = $registerController->register($username, $password, $completo);
                        echo "handleResponse('$message');"; // Maneja la respuesta del controlador
                    }
                }
                ?>
            </script>
            <form action="registro.php" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" name="completo" placeholder="Nombre completo" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="username" placeholder="Nombre de usuario" required>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Contraseña" required>
                </div>
                <button type="submit" name="register" class="btn btn-primary btn-block"><i
                        class="fas fa-user-plus"></i> Registrarse</button>
            </form>
            <p class="mt-3 text-center"><a href="inicio.php">Iniciar Sesión</a></p>
        </div>
    </div>
</body>

</html>
