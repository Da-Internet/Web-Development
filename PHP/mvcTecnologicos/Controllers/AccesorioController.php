<?php
require_once __DIR__ . '/../models/Accesorio.php';

class AccesorioController
{
    private $accesorioModel;

    public function __construct()
    {
        $this->accesorioModel = new Accesorio();
    }

    public function listarAccesorio()
    {
        return $this->accesorioModel->obtenerTodosLosAccesorios();
    }

    public function agregarAccesorio($nombre, $descripcion, $precio, $imagen)
    {
        return $this->accesorioModel->crearAccesorio($nombre, $descripcion, $precio, $imagen);
    }

    public function verAccesorio($id)
    {
        return $this->accesorioModel->obtenerAccesorioPorId($id);
    }

    public function actualizarAccesorio($id, $nombre, $descripcion, $precio, $imagen)
    {
        return $this->accesorioModel->actualizarAccesorio($id, $nombre, $descripcion, $precio, $imagen);
    }

    public function eliminarAccesorio($id)
    {
        return $this->accesorioModel->eliminarAccesorio($id);
    }

}
?>
