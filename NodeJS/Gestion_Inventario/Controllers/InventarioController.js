
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")

// POST: / registrarProducto - Para Registrar un producto
registrarProducto = (req, res) => {
        // Columnas a crear al registrar nuevo elemento:  Nombre | Categoria | Stock | Cantidad
    const {
        Nombre,
        Categoria,
        Stock,
        Cantidad
    } = req.body // Esto almacena los datos que llegan al servicio

    // Cuando esto se cargue se usara el orden guardado
    const sql = "INSERT INTO `Inventario`(`Nombre`, `Categoria`, `Stock`, `Cantidad`) VALUES (?,?,?,?);" 
    conexion.query(sql, [Nombre, Categoria, Stock, Cantidad], (err, result) => {
        if (err) {
            console.error("Error al registrar el Producto" + err)
            throw err; // Para detener el programa en caso de error
        }
        res.json({
            message: "Producto subido Correctamente",
            data: result
        }); // Con esto veremos el resultado de la consulta
    });
}

// GET: /Inventario/ - Obtener los Productos
obtenerProductos = (res) => {
    const query = 'SELECT * FROM `Inventario`;'

    conexion.query(query, (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todos los Productos existentes",
            data: results
        });
    });
}

// DELETE: /Inventario/id_inventario - Borrar la puntuacion
borrarProducto = (req, res) => {
    // Con esto encontramos el producto
    const { id_inventario } = req.params

    // El script de SQL
    const query = 'DELETE FROM `Inventario` WHERE id_inventario=?'

    conexion.query(query, [id_inventario], (err, results) => {
        if (err) throw err;
        res.json({
            message: "El proveedor fue borrada Exitosamente",
            data: results
        });
    });
}

// UPDATE: /Inventario/id_inventario  - Actualizar el Puntaje 
// Parametros a Modificar: Nombre | Categoria | Stock | Cantidad 
actualizarProducto = (req, res) => {
        // Con esto encontramos la venta
        const { id_inventario } = req.params
        // Valores a modificar
        const { Nombre, Categoria, Stock, Cantidad } = req.body
    
        // El script de SQL
        const query = 'UPDATE `Inventario` SET Nombre=?, Categoria=?, Stock=?, Cantidad=? WHERE id_inventario=?;'
    
        conexion.query(query, [Nombre, Categoria, Stock, Cantidad, id_inventario], (err, results) => {
            if (err) throw err;
            res.json({
                message: "El producto fue actualizado exitosamente",
                data: results
            });
        });
}

// Con esto llamamos todos los modulos en conjunto
module.exports = {
    registrarProducto,
    obtenerProductos,
    borrarProducto,
    actualizarProducto
}