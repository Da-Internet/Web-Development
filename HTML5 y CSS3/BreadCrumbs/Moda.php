<?php
/*session_start();*/
$rol = "Alumno"; //$_SESSION['rol'];
$nombre = "Diego Alberto Canto Ricardez"; //$_SESSION['nombre'];*/
?>
<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="bootstrap5/css/bootstrap.min.css">
    <script src="bootstrap5/js/bootstrap.min.js"></script>
</head>

<body>
    <?php include('menu801.php') ?>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.php">Compras</a></li>
            <li class="breadcrumb-item active" aria-current="page">Moda</li>
        </ol>
    </nav>

    <h1>Moda</h1>

    <a href="Camisas.php"> Camisas</a>
    <br>
    <a href="Pantalones.php"> Pantalones</a>
    <br>
    <a href="Chaquetas.php"> Chaquetas</a>

</body>

</html>