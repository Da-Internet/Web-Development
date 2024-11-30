<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['id'], $_POST['nombre'], $_POST['descripcion'], $_POST['precio'], $_POST['imagen'])) {
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $precio = $_POST['precio'];
        $imagen = $_POST['imagen'];

        require_once '../controllers/AccesorioController.php';

        $accesorioController = new AccesorioController();
        $success = $autoController->actualizarAccesorio($id, $nombre, $descripcion, $precio, $imagen);

        if ($success) {
            echo "<p>Los cambios se guardaron correctamente.</p>";
        } else {
            echo "<p>Error al guardar los cambios.</p>";
        }
    } else {
        echo "<p>Faltan parámetros para editar el accesorio.</p>";
    }
} else {
    echo "<p>Método no permitido para editar el accesorio.</p>";
}
?>
