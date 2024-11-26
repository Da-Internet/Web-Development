
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas
const usersController = require('../controllers/UsersController')

//Servicios:
//Login, register, lista de usuarios

//Ruta de login

rutas.post('/Login_Usuario', usersController.loginUser)

//Ruta de registro
rutas.post('/Registrar_Usuario', usersController.registrarUser)

//Ruta para obtener la lista de usuarios
rutas.get('/Obtener_Usuarios', usersController.obtenerUsuarios)

//Ruta para obtener la lista de los usuarios por rol
rutas.get('/Usuarios_Por_Rol/:Rol', usersController.usuariosPorRol)

//Ruta para actualizar los usuarios
rutas.put('/Actualizar_User/:ID_Usuarios', usersController.actualizarUser)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;