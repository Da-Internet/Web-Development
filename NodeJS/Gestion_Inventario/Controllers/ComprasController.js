
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")

// POST: / registrarCompras - Para Registrar una Compra
registrarCompras = (req, res) => {
    // Columnas a crear al registrar nuevo elemento:  Fecha_Compra | Hora_Compra | Total_Compra | Metodo_Compra | Impuesto_Compra
    const {
        Fecha_Compra,
        Hora_Compra,
        Total_Compra,
        Metodo_Compra,
        Impuesto_Compra
    } = req.body // Esto almacena los datos que llegan al servicio

    // Cuando esto se cargue se usara el orden guardado
    const sql = "INSERT INTO `Compras`(`Fecha_Compra`, `Hora_Compra`, `Total_Compra`, `Metodo_Compra`, `Impuesto_Compra`) VALUES (?,?,?,?,?);" 
    conexion.query(sql, [Fecha_Compra, Hora_Compra, Total_Compra, Metodo_Compra, Impuesto_Compra], (err, result) => {
        if (err) {
            console.error("Error al registrar la Compra" + err)
            throw err; // Para detener el programa en caso de error
        }
        res.json({
            message: "Compra subida Correctamente",
            data: result
        }); // Con esto veremos el resultado de la consulta
    });
}

// GET: /Compras/:id - Obtener Compra segun ID
obtenerComprasPorID = (req, res) => {
    // Con esto veremos el metodo de la consulta
    const { id_compras } = req.params

    //Llamar a todos los usuarios con un metodo específico
    const query = 'SELECT * FROM `Compras` WHERE id_compras=?;'

    conexion.query(query, [id_compras], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todas las Compras con el metodo de Compra especificado",
            data: results
        });
    });
}

// GET: /Compras/:metodo_compra - Obtener las compras segun el Metodo
obtenerComprasPorMetodo = (req, res) => {
    // Con esto veremos el metodo de la consulta
    const { Metodo_Compra } = req.params

    //Llamar a todos los usuarios con un metodo específico
    const query = 'SELECT * FROM `Compras` WHERE Metodo_Compra=?;'

    conexion.query(query, [Metodo_Compra], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todas las Compras con el metodo especificado",
            data: results
        });
    });
}

// DELETE: /Compras/id_compras - Borrar la compra
borrarCompra = (req, res) => {
    // Con esto encontramos la Compra
    const { id_compras } = req.params

    // El script de SQL
    const query = 'DELETE FROM `Compras` WHERE id_compras=?'

    conexion.query(query, [id_compras], (err, results) => {
        if (err) throw err;
        res.json({
            message: "La compra fue borrada Exitosamente",
            data: results
        });
    });
}

// UPDATE: /Compras/id_compras  - Actualizar la compra 
// Parametros a Modificar: Fecha_Compra | Hora_Compra | Total_Compra | Metodo_Compra | Impuesto_Compra
actualizarCompra = (req, res) => {
// Con esto encontramos la Compra
const { id_compras } = req.params
// Valores a modificar
const { Fecha_Compra, Hora_Compra, Total_Compra, Metodo_Compra, Impuesto_Compra } = req.body

// El script de SQL
const query = 'UPDATE `Compras` SET Fecha_Compra=?, Hora_Compra=?, Total_Compra=?, Metodo_Compra=? , Impuesto_Compra=? WHERE id_compras=?;'

conexion.query(query, [Fecha_Compra, Hora_Compra, Total_Compra, Metodo_Compra, Impuesto_Compra, id_compras], (err, results) => {
    if (err) throw err;
    res.json({
        message: "La compra fue actualizada exitosamente",
        data: results
    });
});
}

// Con esto llamamos todos los modulos en conjunto
module.exports = {
    registrarCompras,
    obtenerComprasPorID,
    obtenerComprasPorMetodo,
    borrarCompra,
    actualizarCompra
}