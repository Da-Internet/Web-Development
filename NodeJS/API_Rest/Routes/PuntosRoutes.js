
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const puntosController = require('../Controllers/PuntosController.js');

// POST: / registrarPuntos - Para Registrar una puntuacion
rutas.post('/registrarPuntos', puntosController.registrarPuntos) // Asi llamamos los metodos especificos desde controllers

// GET: /Users/:id - Obtener Usuario segun ID
rutas.get('/:id', puntosController.obtenerPuntosPorID) // Asi conseguimos los usuarios por ID

// GET: /Users/:metodo - Obtener los Usuarios de un Metodo
rutas.get('/:metodo', puntosController.obtenerPuntosPorMetodo) // Asi conseguimos los usuarios por Metodo

// DELETE: /User/id - Borrar la puntuacion
rutas.delete('/id', puntosController.borrarPuntaje) // Asi borramos un puntaje

// UPDATE: /User/id  - Actualizar los puntajes 
rutas.put('/id', puntosController.actualizarPuntajes) // Asi actualizamos un puntaje

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;