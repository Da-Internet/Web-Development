<?php
require_once '../models/User.php';

class LoginController {
    public function login($username, $password) {
        $userModel = new User();
        $user = $userModel->getUserByUsername($username);

        if ($user && password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['username'] = $username;

            // Obtener el nombre completo del usuario
            $nombreCompleto = $user['completo'];
            $_SESSION['completo'] = $nombreCompleto;

            return true;
        } else {
            return false;
        }
    }
}
