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
Crearemos el primer archivo de Rutas, Ej1Routes.js, y el primer archivo de Controladores, Ej1Controller.js

## Paso 4
Instalaremos ahora los modulos necesarios (Ver apartado de Instalacion de Modulos)

## Paso 5
Ahora configuraremos el Server.js (Revisar Server.js para configuracion)

## Paso 6
Ahora configuraremos nodemon en package.json

## Paso 7
Asegurarse de que en package.json el archivo "main" debe ser Server.js, o server.js debe llamarse como el archivo "main"

## Paso 8
Ahora crearemos una base de Datos para ejemplificar con el modulo MySQL2 (Se puede hacer directo desde PHPMyAdmin)
Nombre: bd_api_rest
Tabla_1 | ID | Fecha | Hora | Total | Metodo  
--- | --- | --- | --- |--- |--- 
Fila | int autoincremental | date | Time o Varchar | Decimal | Varchar 

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