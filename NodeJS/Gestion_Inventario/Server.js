
// Exportamos Express y creamos el objecto-instancia de Express (Obligatorio)
const express = require('express');
const app = express();

// Exportamos los siguientes modulos, crear el objeto no es necesario
const bodyParser = require('body-parser');
const morgan = require('morgan');

//Exportaremos el modulo de Rutas
const ventasRutas = require('./Routes/VentasRoutes.js');
const comprasRutas = require('./Routes/ComprasRoutes.js');
const inventarioRutas = require('./Routes/InventarioRoutes.js');
const proveedorRutas = require('./Routes/ProveedorRoutes.js');

//MiddleWare - Conjunto de funciones que se ejecutan de manera secuencial durante el ciclo de vida de una solicitud HTTP
app.use(morgan('dev')); // 
app.use(bodyParser.json()); // Todas las peticiones se convertiran a Json

app.use("/Ventas", ventasRutas);
app.use("/Compras", comprasRutas);
app.use("/Inventario", inventarioRutas);
app.use("/Proveedores", proveedorRutas);

const PORT = 3000; // Definir el puerto de default

const server = app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto: ${PORT}`) // Confirmar que el puerto este funcionando
});