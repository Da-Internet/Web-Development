
<?php

$objetivos = [];

// Hecho por: Diego Alberto Canto Ricardez
$idObjetivo = $_POST['id'];

unset($objetivos[$idObjetivo]);

echo json_encode(['success' => true]);
?>
