<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once '../controllers/AccesorioController.php';

    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $imagen = $_POST['imagen'];

    $accesorioController = new AccesorioController();
    $exito = $accesorioController->agregarAccesorio($nombre, $descripcion, $precio, $imagen);

    if ($exito) {
        header("Location: ../views/tecnologico.php");
        exit();
    } else {
        echo "Hubo un error al agregar el accesorio.";
        
    }
}
?>
