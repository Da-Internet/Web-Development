
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")

// POST: / registrarPuntos - Para Registrar una puntuacion
registrarPuntos = (req, res) => {
    // Columnas a crear al registrar nuevo elemento:  Fecha | Hora | Total | Metodo  
    const {
        fechaPuntaje,
        horaPuntaje,
        totalPuntaje,
        metodoPuntaje,
    } = req.body // Esto almacena los datos que llegan al servicio

    const sql = "INSERT INTO `tabla_1`(`Fecha`, `Hora`, `Total`, `Metodo`) VALUES (?,?,?,?);" // Cuando esto se cargue se usara el orden guardado
    conexion.query(sql, [fechaPuntaje, horaPuntaje, totalPuntaje, metodoPuntaje], (err, result) => {
        if (err) {
            console.error("Error al registrar el Puntaje" + err)
            throw err; // Para detener el programa en caso de error
        }
        res.json({
            message: "Puntaje subido Correctamente",
            data: result
        }) // Con esto veremos el resultado de la consulta
    })

}

// GET: /Users/:id - Obtener Usuario segun ID
obtenerPuntosPorID = (req, res) => {

}

// GET: /Users/:metodo - Obtener los Usuarios de un Metodo
obtenerPuntosPorMetodo = (req, res) => {

}

// DELETE: /User/id - Borrar la puntuacion
borrarPuntaje = (req, res) => {
}

// UPDATE: /User/id  - Actualizar el Puntaje 
actualizarPuntajes = (req, res) => {
}

// Con esto llamamos todos los modulos en conjunto
module.exports = {
    registrarPuntos,
    obtenerPuntosPorID,
    obtenerPuntosPorMetodo,
    borrarPuntaje,
    actualizarPuntajes
}

/*
Otra opcion para llamarlos uno a uno es

exports.registrarPuntos = (req, res) => {
}

*/