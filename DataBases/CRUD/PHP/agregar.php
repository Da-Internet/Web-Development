
<?php

$objetivos = [];

$imagen = $_POST['imagen'];
$objetivo = $_POST['objetivo'];
$recompensa = $_POST['recompensa'];
$categoria = $_POST['categoria'];

// Hecho por: Diego Alberto Canto Ricardez

$nuevoObjetivo = [
    'imagen' => $imagen,
    'objetivo' => $objetivo,
    'recompensa' => $recompensa,
    'categoria' => $categoria,
];

array_push($objetivos, $nuevoObjetivo);

echo json_encode(['success' => true, 'id' => count($objetivos)]);
?>
