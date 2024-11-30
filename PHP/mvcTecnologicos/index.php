<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accesorios Tecnológicos - Página de Inicio</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container">
            <a class="navbar-brand text-white" href="#">Accesorios Tecnológicos</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="Views/inicio.php">Iniciar Sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid text-center text-dark"
        style="background-image: url('https://images.unsplash.com/photo-1556228458-1daa707e5b11');">
        <div class="container">
            <h1 class="display-4">Explora los últimos accesorios tecnológicos</h1>
            <p class="lead">Encuentra los dispositivos más modernos y útiles para tu vida diaria.</p>
        </div>
    </div>

    <!-- Cards -->
    <div class="container">
        <h2 class="text-center">Accesorios</h2>
        <div class="row">
            <?php
            require_once 'controllers/AccesorioController.php';
            // Instancia del controlador de autos
            $accesorioController = new AccesorioController();

            // Obtener todos los autos desde la base de datos
            $accesorios = $accesorioController->listarAccesorio();

            // Mostrar cada auto en tarjetas
            foreach ($accesorios as $accesorio) {
                echo '
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="' . $accesorio['imagen'] . '" alt="' . $accesorio['nombre'] . '" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">' . $accesorio['nombre'] . '</h5>
                            <p class="card-text">' . $accesorio['descripcion'] . '</p>
                            <p class="card-text">Precio: ' . $accesorio['precio'] . '</p>
                        </div>
                    </div>
                </div>';
            }
            ?>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-info text-white text-center py-4 mt-5">
        <p>&copy; 2023 Accesorios Tecnológicos</p>
    </footer>

    <!-- Scripts -->
    <script src="https://kit.fontawesome.com/your_font_awesome_kit.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
