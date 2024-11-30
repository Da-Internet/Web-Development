<?php

require_once '../models/User.php';

class RegisterController
{
    public function register($username, $password, $completo)
    {
        $userModel = new User();

        if ($userModel->getUserByUsername($username)) {
            return json_encode(["message" => "El nombre de usuario ya está en uso.", "success" => false]);
        } else {
            $success = $userModel->createUser($username, $password, $completo);

            if ($success) {
                return json_encode(["message" => "Registro exitoso.", "success" => true]);
            } else {
                return json_encode(["message" => "Error en el registro.", "success" => false]);
            }
        }
    }

}
