
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const comprasController = require('../Controllers/comprasController.js');

// POST: / registrarCompras - Para Registrar una Compra
rutas.post('/registrarCompras', comprasController.registrarCompras)

// GET: /Compras/:id - Obtener las Compras segun ID
rutas.get('/:id_compras', comprasController.obtenerComprasPorID)

// GET: /Compras/:metodo_pago - Obtener las Compras segun Metodo de pago
rutas.get('/:metodo_compra', comprasController.obtenerComprasPorMetodo)

// DELETE: /Compras/id - Borrar la Compras
rutas.delete('/id_compras', comprasController.borrarCompra)

// UPDATE: /Compras/id  - Actualizar la Compras 
rutas.put('/id_compras', comprasController.actualizarCompra)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;