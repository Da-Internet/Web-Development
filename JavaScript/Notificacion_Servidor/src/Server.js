
// Modulo Dotenv para manejar archivos .env antes de cargar todo
require('dotenv').config();

// Exportamos Express y creamos el objecto-instancia de Express (Obligatorio)
const express = require('express');
const app = express();

// Exportamos los siguientes modulos,
const morgan = require('morgan');
const path = require('path');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use(require('./Routes/Index.js'));

// Static Content
app.use(express.static(path.join(__dirname, 'public')));


//Servidor
const PORT = 4000; 

const server = app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto: ${PORT}`) // Confirmar que el puerto este funcionando
});