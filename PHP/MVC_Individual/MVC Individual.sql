CREATE DATABASE mvc_ind;

USE mvc_ind;

CREATE TABLE usuarios(
username varchar(255) primary key,
contrasena varchar(255),
nombre varchar(255)
);

INSERT INTO usuarios values ('DaInternet','1234','Diego');

INSERT INTO usuarios values ('Ourmine','qwerty','Kevin');