
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")

// POST: /registrarProveedor - Para Registrar un Proveedor
registrarProveedor = (req, res) => {
    // Columnas a crear al registrar nuevo elemento:  Nombre | Pais | Compañia | Productos 
    const {
        Nombre,
        Pais,
        Compañia,
        Productos
    } = req.body // Esto almacena los datos que llegan al servicio

    // Cuando esto se cargue se usara el orden guardado
    const sql = "INSERT INTO `proveedores`(`Nombre`, `Pais`, `Compañia`, `Productos`) VALUES (?,?,?,?);" 
    conexion.query(sql, [Nombre, Pais, Compañia, Productos], (err, result) => {
        if (err) {
            console.error("Error al registrar el Proveedor" + err)
            throw err; // Para detener el programa en caso de error
        }
        res.json({
            message: "Proveedor subido Correctamente",
            data: result
        }); // Con esto veremos el resultado de la consulta
    });
}

// GET: /obtenerProveedores - Obtener Proveedores 
obtenerProveedores = (res) => {
    const query = 'SELECT * FROM `proveedores`;'

    conexion.query(query, (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todos los Proveedores existentes",
            data: results
        });
    });
}

// DELETE: /Proveedor/id_proveedor - Borrar al proveedor
borrarProveedor = (req, res) => {
    // Con esto encontramos al proveedor
    const { id_proveedor } = req.params

    // El script de SQL
    const query = 'DELETE FROM `proveedores` WHERE id_proveedor=?'

    conexion.query(query, [id_proveedor], (err, results) => {
        if (err) throw err;
        res.json({
            message: "El proveedor fue borrada Exitosamente",
            data: results
        });
    });
}

// UPDATE: /Proveedor/id_proveedor  - Actualizar al Proveedor 
// Parametros a Modificar: Nombre | Pais | Compañia | Productos 
actualizarProveedor = (req, res) => {
    // Con esto encontramos la venta
    const { id_proveedor } = req.params
    // Valores a modificar
    const { Nombre, Pais, Compañia, Productos } = req.body

    // El script de SQL
    const query = 'UPDATE `Proveedores` SET Nombre=?, Pais=?, Compañia=?, Productos=? WHERE id_proveedor=?;'

    conexion.query(query, [Nombre, Pais, Compañia, Productos, id_proveedor], (err, results) => {
        if (err) throw err;
        res.json({
            message: "El proveedor fue actualizado exitosamente",
            data: results
        });
    });
}

// Con esto llamamos todos los modulos en conjunto
module.exports = {
    registrarProveedor,
    obtenerProveedores,
    borrarProveedor,
    actualizarProveedor
}