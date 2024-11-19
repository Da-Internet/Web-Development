
// Exportamos los siguientes modulos, crear el objeto no es necesario
const mysql2 = require('mysql2');

// Ahora crearemos el objeto de conexion con los siguientes parametros
// host, user, password, database y port
const conexion = mysql2.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_api_rest',
    port: 3306

}); // Todavia no se esta conectando aqui, solo se crea el objeto de Conexion

// Ahora si nos conectaremos a la base de datos usando el objeto conexion

conexion.connect(err => {
    if (err) {
        console.error("Error de Conexion" + err)
        throw err; // Para detener el programa en caso de error
    }
    console.log("Conectando a la Base de Datos")
})

// Exportaremos el objeto para que se use en otros archivos
module.exports = conexion;