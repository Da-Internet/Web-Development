
-- Aqui va el nombre de la base de datos
CREATE DATABASE LoginRoles
USE LoginRoles

-- Esta es la tabla de los roles 
CREATE TABLE `roles` (
    `ID` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `Descripcion` varchar(250) NOT NULL
) 

-- Esta es la tabla de los usuarios conectada a roles
CREATE TABLE `usuarios` (
    `ID` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `Nombre` varchar(250) NOT NULL,
    `Usuario` varchar(250) NOT NULL,
    `Password` varchar(12) NOT NULL,
    `ID_Rol` int(11) NOT NULL,
    CONSTRAINT `Usuarios_Roles` FOREIGN KEY (`ID_Rol`) REFERENCES `roles` (`ID`)
) 

-------------------------------------------------------------------------------------------------------

-- Aqui van los roles
INSERT INTO
    `roles` (`ID`, `Descripcion`)
VALUES (1, 'Administrador'),
    (2, 'Moderador'),
    (3, 'Usuario');


-- Los ejemplos de usuarios, se pueden cambiar
INSERT INTO
    `usuarios` (
        `ID`,
        `Nombre`,
        `Usuario`,
        `Password`,
        `ID_Rol`
    )
VALUES (
        1,
        'Danny VitaNova',
        'Danny',
        '12345',
        1
    ),
    (
        2,
        'Miguel',
        'Willinger',
        '12345',
        2
    ),
    (
        3,
        'Carlos',
        'Karolus',
        '12345',
        3
    );
