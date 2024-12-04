<?php
require_once __DIR__ . '/../config/db.php';

class Accesorio {
    private $db;

    public function __construct() {
        $this->db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function obtenerTodosLosAccesorios() {
        $stmt = $this->db->query("SELECT * FROM accesorios");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function crearAccesorio($nombre, $descripcion, $precio, $imagen) {
        $stmt = $this->db->prepare("INSERT INTO accesorios (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)");
        return $stmt->execute([$nombre, $descripcion, $precio, $imagen]);
    }

    public function obtenerAccesorioPorId($id) {
        $stmt = $this->db->prepare("SELECT * FROM accesorios WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function actualizarAccesorio($id, $nombre, $descripcion, $precio, $imagen)
    {
        $stmt = $this->db->prepare("UPDATE accesorios SET nombre = ?, descripcion = ? , precio = ?, imagen = ? WHERE id = ?");
        return $stmt->execute([$nombre, $descripcion, $precio, $imagen, $id]);
    }

    public function eliminarAccesorio($id) {
        $stmt = $this->db->prepare("DELETE FROM accesorios WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>
