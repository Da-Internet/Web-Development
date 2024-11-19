

<?php

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Hecho por: Diego Alberto Canto Ricardez

if ($correo === 'Usuario@hotmail.com' && $contrasena === 'UTSV') {
    // Credenciales válidas
    echo json_encode(['success' => true, 'redirect' => 'menu.html']);

} else {

    // Credenciales inválidas
    echo json_encode(['success' => false, 'message' => 'Correo o contraseña incorrectos']);
}
