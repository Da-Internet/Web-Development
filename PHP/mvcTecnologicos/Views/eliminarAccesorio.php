<?php

if (isset($_GET['id'])) {
    require_once '../controllers/AccesorioController.php';
    $accesorioController = new AccesorioController();
    $id = $_GET['id'];

    $eliminado = $accesorioController->eliminarAccesorio($id);

    if ($eliminado) {
        header('Location: tecnologico.php');
        exit();
    } else {
        echo "Error al intentar eliminar el accesorio.";
    }
}
?>
