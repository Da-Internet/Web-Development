
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const inventarioController = require('../Controllers/InventarioController.js');

// POST: /registrarProducto - Para Registrar un producto en el inventario
rutas.post('/registrarProducto', inventarioController.registrarProducto)

// GET /obtenerproductos - Para obtener todos los Productos
rutas.get('/obtenerProductos', inventarioController.obtenerProductos)

// DELETE: /Inventario/id_inventario - Borrar el producto
rutas.delete('/id_inventario', inventarioController.borrarProducto)

// UPDATE: /Inventario/id_inventario  - Actualizar el producto 
rutas.put('/id_inventario', inventarioController.actualizarProducto)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;