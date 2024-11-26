
CREATE DATABASE Sistema_Escolar_Token;
USE Sistema_Escolar_Token;


CREATE TABLE `Users` (
  `ID_Usuarios` INT(13) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `Username` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(99) NOT NULL,
  `Rol` VARCHAR(255) NOT NULL
);
