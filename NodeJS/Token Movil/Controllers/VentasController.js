
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")

// POST: / registrarVentas - Para Registrar una Venta
registrarVentas = (req, res) => {
    // Columnas a crear al registrar nuevo elemento:  Fecha_Venta | Hora_Venta | Total_Venta | Metodo_Venta | Impuesto_Venta
    const {
        Fecha_Venta,
        Hora_Venta,
        Total_Venta,
        Metodo_Venta,
        Impuesto_Venta
    } = req.body // Esto almacena los datos que llegan al servicio

     // Cuando esto se cargue se usara el orden guardado
    const sql = "INSERT INTO `Ventas`(`Fecha_Venta`, `Hora_Venta`, `Total_Venta`, `Metodo_Venta`, `Impuesto_Venta`) VALUES (?,?,?,?,?);"
    conexion.query(sql, [Fecha_Venta, Hora_Venta, Total_Venta, Metodo_Venta, Impuesto_Venta], (err, result) => {
        if (err) {
            console.error("Error al registrar la Venta" + err)
            throw err; // Para detener el programa en caso de error
        }
        res.json({
            message: "Venta subida Correctamente",
            data: result
        }); // Con esto veremos el resultado de la consulta
    });
}

// GET: /Ventas/:id_ventas - Obtener Venta segun ID
obtenerVentasPorID = (req, res) => {
    // Con esto veremos el metodo de la consulta
    const { id_ventas } = req.params

    //Llamar a todos los usuarios con un metodo específico
    const query = 'SELECT * FROM `Ventas` WHERE id_ventas=?;'

    conexion.query(query, [id_ventas], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todas las ventas con el metodo de venta especificado",
            data: results
        });
    });
}

// GET: /Venta/:Metodo_Venta - Obtener las Ventas de un Metodo_Pago
obtenerVentasPorMetodo = (req, res) => {
    // Con esto veremos el metodo de la consulta
    const { Metodo_Venta } = req.params

    //Llamar a todos los usuarios con un metodo específico
    const query = 'SELECT * FROM `Ventas` WHERE Metodo_Venta=?;'

    conexion.query(query, [Metodo_Venta], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todas las ventas con el ID especificado",
            data: results
        });
    });
}

// DELETE: /Ventas/id_ventas - Borrar la Venta
borrarVenta = (req, res) => {
    // Con esto encontramos la venta
    const { id_ventas } = req.params

    // El script de SQL
    const query = 'DELETE FROM `Ventas` WHERE id_ventas=?'

    conexion.query(query, [id_ventas], (err, results) => {
        if (err) throw err;
        res.json({
            message: "La venta fue borrada Exitosamente",
            data: results
        });
    });
}

// UPDATE: /Ventas/id_ventas  - Actualizar la Venta, se identifica con id_venta
// Parametros a Modificar: Fecha_Venta | Hora_Venta | Total_Venta | Metodo_Venta | Impuesto_Venta
actualizarVenta = (req, res) => {
    // Con esto encontramos la venta
    const { id_ventas } = req.params
    // Valores a modificar
    const { Fecha_Venta, Hora_Venta, Total_Venta, Metodo_Venta, Impuesto_Venta } = req.body

    // El script de SQL
    const query = 'UPDATE `Ventas` SET Fecha_Venta=?, Hora_Venta=?, Total_Venta=?, Metodo_Venta=? , Impuesto_Venta=? WHERE id_ventas=?;'

    conexion.query(query, [Fecha_Venta, Hora_Venta, Total_Venta, Metodo_Venta, Impuesto_Venta, id_ventas], (err, results) => {
        if (err) throw err;
        res.json({
            message: "La venta fue actualizada exitosamente",
            data: results
        });
    });
}

// Con esto llamamos todos los modulos en conjunto
module.exports = {
    registrarVentas,
    obtenerVentasPorID,
    obtenerVentasPorMetodo,
    borrarVenta,
    actualizarVenta
}