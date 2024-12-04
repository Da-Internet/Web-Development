<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles del Accesorio</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
</head>
<style>
    .card {
        max-width: 450px;
        margin: 0 auto;
    }
</style>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="tecnologico.php">Accesorios Tecnológicos</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <?php
            session_start();
            if(isset($_SESSION['username'])) {
                echo $_SESSION['username'];
            }
            ?>
            <i class="fas fa-user"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <?php if(isset($_SESSION['completo']) && !empty($_SESSION['completo'])) { ?>
                <a class="dropdown-item" href="#">
                    <i class="fas fa-user-circle"></i>
                    <?php echo $_SESSION['completo']; ?>
                </a>
                <div class="dropdown-divider"></div>
            <?php } ?>
            <a class="dropdown-item" href="inicio.php">Cerrar Sesión</a>
        </div>
    </nav>
    <div class="container mt-4">
        <h1>Detalles del Accesorio</h1>
        <?php
        require_once '../controllers/AccesorioController.php';
        $accesorioController = new AccesorioController();

        if (isset($_GET['id'])) {
            $accesorio = $accesorioController->verAccesorio($_GET['id']);

            if ($accesorio) {
                ?>
                <div class="card">
                    <img src="<?= $accesorio['imagen'] ?>" class="card-img-top" alt="Imagen del accesorio">
                    <div class="card-body">
                        <h5 class="card-title"><?= $accesorio['nombre'] ?></h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Precio
                                <span class="badge badge-primary badge-pill"><?= $accesorio['precio'] ?></span>
                            </li>
                            <li class="list-group-item"><?= $accesorio['descripcion'] ?></li>
                        </ul>
                        <a href="tecnologico.php" class="btn btn-primary mt-3">Volver</a>
                    </div>
                </div>
                <?php
            } else {
                echo "<div class='alert alert-danger' role='alert'>No se encontró el accesorio</div>";
            }
        }
        ?>
    </div>
</body>

</html>