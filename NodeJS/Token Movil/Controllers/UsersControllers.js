
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

loginUser = async (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM `Users` WHERE Username =?;';

    // Verificar las credenciales de un usuario y responde en consecuencia.
    conexion.query(query, [username], async (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const user = results[0];
            const isMatch = bcrypt.compareSync(password, user.password); // Comparar contraseñas

            if (isMatch) {
                res.json({ message: "Login Exitoso", data: results });

                // Generar un token aquí
                const token = generarToken(user)//Se le pasan los datos del usuario
                //Almacenar el token en una cookie

                /*Opcion 1.- El servidor almacena el token en una cookie*/
                res.cookie('token: ', token, {httpOnly:true,secure:false,maxAge:60000});
                
                /*Opcion 2.- El servidor devuelve el token y la aplicacion cliente lo almacena*/
                res.json({ token });

            } else {

                res.json({ message: "Usuario o contraseña incorrectos", data: [] });
            }
        } else {
            
            res.json({ message: "Usuario o contraseña incorrectos", data: [] });
        }
    });
}

//Funcion para generar el token
function generarToken() {
    const password = "12345";
    const dataUser = {
        id: user.id,
        username: user.username,
        correo: user.correo,
        rol: user.rol
    }
    const token = jwt.sign(dataUser, password, { expiresIn: '1h' });
    return token;
}

registrarUser = async (req, res) => {
    const { username, correo, password, rol } = req.body

    //Encriptar la contraseña antes de almacenarla en la base de datos
    const passSecret = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO `Users` (Username, Email, Password, Rol) VALUES (?,?,?,?);'

    //Crear un nuevo usuario y responde en consecuencia.
    conexion.query(query, [username, correo, passSecret, rol], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Registro Exitoso",
            data: results
        })
    })
}

obtenerUsuarios = (req, res) => {
    //Llamar a todos los usuarios existentes
    const query = 'SELECT * FROM `Users`;'

    conexion.query(query, (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todos los usuarios existentes",
            data: results
        })
    })
}

usuariosPorRol = (req, res) => {
    const { rol } = req.params

    //Llamar a todos los usuarios con un rol específico
    const query = 'SELECT * FROM `Users` WHERE Rol=?;'

    conexion.query(query, [rol], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Aqui estan todos los usuarios con el rol especificado",
            data: results
        })
    })
}

actualizarUser = (req, res) => {
    const { id } = req.params
    const { username, correo, password, rol } = req.body

    const query = 'UPDATE `Users` SET Username=?, Email=?, Password=?, Rol=? WHERE ID_Usuarios=?;'

    conexion.query(query, [username, correo, password, rol, id], (err, results) => {
        if (err) throw err;
        res.json({
            message: "El usuario fue actualizado",
            data: results
        })
    })
}

module.exports = {
    loginUser,
    registrarUser,
    obtenerUsuarios,
    usuariosPorRol,
    actualizarUser
}