
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const ventasController = require('../Controllers/VentasController.js');

// POST: / registrarVentas - Para Registrar una Venta
rutas.post('/registrarVentas', ventasController.registrarVentas)

// GET: /Ventas/:id - Obtener las Ventas segun ID
rutas.get('/:id_ventas', ventasController.obtenerVentasPorID)

// GET: /Ventas/:metodo_pago - Obtener las Venta segun Metodo de pago
rutas.get('/:metodo_venta', ventasController.obtenerVentasPorMetodo)

// DELETE: /Ventas/id - Borrar la Venta
rutas.delete('/id_ventas', ventasController.borrarVenta)

// UPDATE: /Ventas/id  - Actualizar la Venta 
rutas.put('/id_ventas', ventasController.actualizarVenta)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;