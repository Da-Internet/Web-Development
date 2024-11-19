
CREATE DATABASE Gestion_Inventario;
USE Gestion_Inventario;


CREATE TABLE `ventas` (
  `ID_Ventas` INT(13) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `Fecha_Venta` DATE NOT NULL,
  `Hora_Venta` TIME NOT NULL,
  `Total_Venta` INT(99) NOT NULL,
  `Metodo_Venta` VARCHAR(250) NOT NULL,
  `Impuesto_Venta` INT(99) NOT NULL
);

CREATE TABLE `compras` (
  `ID_Compras` INT(13) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `Fecha_Compra` DATE NOT NULL,
  `Hora_Compra` TIME NOT NULL,
  `Total_Compra` INT(99) NOT NULL,
  `Metodo_Compra` VARCHAR(250) NOT NULL,
  `Impuesto_Compra` INT(250) NOT NULL
) ;

CREATE TABLE `inventario` (
  `ID_Inventario` INT(13) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `Nombre` VARCHAR(250) NOT NULL,
  `Categoria` VARCHAR(250) NOT NULL,
  `Stock` VARCHAR(2) NOT NULL,
  `Cantidad` INT(99) NOT NULL
);

CREATE TABLE `proveedores` (
  `ID_Proveedor` INT(13) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `Nombre` VARCHAR(250) NOT NULL,
  `Pais` VARCHAR(250) NOT NULL,
  `Compañia` VARCHAR(250) NOT NULL,
  `Productos` VARCHAR(250) NOT NULL
);