<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Accesorios Tecnológicos</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
</head>

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
        <h1>Listado de Accesorios Tecnológicos</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                require_once '../Controllers/AccesorioController.php';
                $accesorioModel = new AccesorioController();
                $accesorios = $accesorioModel->listarAccesorio();

                foreach($accesorios as $accesorio) {
                    echo "<tr>";
                    echo "<td>{$accesorio['id']}</td>";
                    echo "<td>{$accesorio['nombre']}</td>";
                    echo "<td>{$accesorio['descripcion']}</td>";
                    echo "<td>{$accesorio['precio']}</td>";
                    echo "<td>";
                    echo "<form action='eliminarAccesorio.php' method='POST' style='padding-top: 0.5rem;'>";
                    echo "<input type='hidden' id='disabledTextInput' class='form-control' name='id_eliminar' value='{$accesorio['id']}'>";
                    echo "<a href='verAccesorio.php?id={$accesorio['id']}' class='btn btn-info btn-sm'><i class='fas fa-eye'></i></a> ";
                    echo "<a href='editarAccesorio.php?id={$accesorio['id']}' class='btn btn-primary btn-sm'><i class='fas fa-edit'></i></a>";
                    echo "<a href='eliminarAccesorio.php?id={$accesorio['id']}' class='btn btn-danger btn-sm'onclick='return confirmarEliminar();'><i class='fas fa-trash-alt'></i></a>";
                    echo "</td>";
                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <!-- Botón para agregar accesorio al final -->
    <div class="container">
        <div class="row justify-content-end mb-4">
            <div class="col-md-2">
                <a href="agregar_accesorio.php" class="btn btn-success btn-block">Agregar Accesorio</a>
            </div>
        </div>
    </div>

    <!-- Scripts de Bootstrap y otros -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>