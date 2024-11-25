
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const proveedorController = require('../Controllers/ProveedorController.js');

// POST: /registrarProveedor - Para Registrar un Proveedor
rutas.post('/registrarProveedor', proveedorController.registrarProveedor)

// GET /Proveedores - Para obtener todos los Proveedores
rutas.get('/obtenerProveedores', proveedorController.obtenerProveedores)

// DELETE: /Proveedores/id - Borrar un Proveedor
rutas.delete('/id_proveedor', proveedorController.borrarProveedor)

// UPDATE: /Proveedores/id  - Actualizar un Proveedor 
rutas.put('/id_proveedor', proveedorController.actualizarProveedor)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;