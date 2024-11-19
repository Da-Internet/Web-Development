# Gestion-Inventario

# Codigos para terminal

## Saber que version de Node tiene
node -v

## Crear un proyecto
npm init -y

## Modulos y Como Instalarlos
* npm i express - Necesario Eternamente
* npm i mySQL2 - Para conectar con Bases de Datos MySQL
* npm i body-parser - Para convertir los valores a JSON al exportar
* npm i nodemon - Para reiniciar automaticamente el servidor con cada cambio
* npm i morgan - 
* npm i bcryptjs - Para encriptar contraseñas

## Iniciar servidor
node (NombredelArchivo)  - Para correr archivos individuales
o
npm run dev - Para correr el archivo completo

## Detener servidor
ctrl C

# Como funciona

## Paso 1
Despues de usar el comando de crear, se creara el package.json

## Paso 2
Crearemos la estructura del Proyecto con las carpetas "Controllers", "Models", "Routes", y "Views" opcionalmente
Crearemos un archivo llamado Server.js

## Paso 3
Crearemos el primer archivo de Rutas, y el primer archivo de Controladores

## Paso 4
Instalaremos ahora los modulos necesarios (Ver apartado de Instalacion de Modulos)

## Paso 5
Ahora configuraremos el Server.js (Revisar Server.js para configuracion)

## Paso 6
Ahora configuraremos nodemon en package.json con "dev": "nodemon run dev"  debajo de test

## Paso 7
Asegurarse de que en package.json el archivo "main" debe ser Server.js, o server.js debe llamarse como el archivo "main"

## Paso 8
Ahora crearemos una base de Datos para ejemplificar con el modulo MySQL2 (Se puede hacer directo desde PHPMyAdmin)
### Ejemplo de examen
Nombre: Gestion_Inventario

Ventas | ID_Ventas  | Fecha_Venta  | Hora_Venta  | Total_Venta  | Metodo_Pago  | Impuesto
--- | --- | --- | --- | --- | --- | ---
Fila | int autoincremental | date | Time | Decimal | Varchar | Varchar

Compras | ID_Compras | Fecha_Compra | Hora_Compra | Total | Metodo_Pago  | Impuesto  
--- | --- | --- | --- | --- | --- | ---
Fila | int autoincremental | Varchar | Time | Decimal | Varchar | Varchar 

Proveedor | ID_Proveedor | Nombre | Pais | Compañia | Productos  
--- | --- | --- | --- | --- | --- 
Fila | int autoincremental | Varchar |  Varchar | Varchar | Varchar 

Inventario | ID_Inventario | Nombre | Categoria | Stock | Cantidad  
--- | --- | --- | --- | --- | --- 
Fila | int autoincremental | Varchar |  Varchar | Varchar | Int 

(Nota, el VARCHAR siempre necesita de un maximo de longitud)

## Paso 9 
Conectaremos la Base de Datos, creando el archivo database.js en Models (Database.js para informacion)

## Paso 10
Podemos probar el archivo de Database.js usando node database.js

## Paso 11
Ahora definiremos los EndPoints, para el ejemplo de la tabla manejaremos Puntajes
* POST: / registrarPuntos - Para Registrar una puntuacion
* GET: /Users/:id - Obtener ID del Usuario
* GET: /Users/:metodo - Obtener los usuarios de un Metodo
* DELETE: /User/id - Borrar la puntuacion
* UPDATE: /User/id  - Actualizar los usarios

## Paso 12
Ahora definiremos en PuntosRoutes.js  (Revisar PuntosRoutes)
rutas.post('/registrarPuntos', puntosController.registrarPuntos)

## Paso 13
Crearemos los servicios en PuntosController  (Revisar PuntosController )

## Paso 14
Configuraremos la ruta en el servidor (Server.js) con un MiddleWare

# Cosas importantes
## IMPORTANTE
el express constante  que requiere express instalado

## Server
La app constante que requiere express
Definir el puerto constante 3000
El body parser y morgan constantes que requieren los modulos respectivos

## Enrutamientos
El exportar el modulo del enrutamiento al final, con rutas constantes que requieren rutas express

## Controladores
La conexion constanste requiere conectarse a la base de datos
Los modulos se pueden exportar en conjunto con {}
Los controladores tienen requisitos y resultados
El resultado tiene cuerpo

## Base de Datos
La constante de mysql2 que requiere mysql2
La conexion constante que se crea con mysql2 con el host, usuario, contraseña y el nombre de la base de datos y el puerto del xampp
El exportar el modulo de conexion

## Sentencias de SQL
"INSERT INTO `Tabla`(`Campo1`, `Campo2`, `Campo3`, `Campo4`, `Campo5`) VALUES (?,?,?,?,?);"
'SELECT * FROM `Tabla`;'
'SELECT * FROM `Tabla` WHERE Columna=?;'
'DELETE FROM `Tabla` WHERE id=?'
'UPDATE `Tabla` SET Campo1=?, Campo2=?, Campo3=?, Campo4=? , Campo5=? WHERE id=?;'