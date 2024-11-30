var nombre = "Diego";

var cadena = 'Hola ' + nombre;

console.log(cadena);

var resultado = cadena.indexOf("Diego");

console.log(resultado);

if (nombre.indexOf("Diego") != -1) {
    console.log("Eres el estudiante Diego");
} else {
    console.log("No eres el estudiante Diego");
}

console.log(nombre.indexOf("Diego"));

console.log(nombre[20]);

console.log(nombre[nombre.length - 1]);

console.log(nombre.charAt(1));

console.log(nombre.slice(0, 0));
console.log(nombre.slice(0, 1));
console.log(nombre.slice(0, 2));
console.log(nombre.slice(0, 3));
console.log(nombre.slice(0, 4));
console.log(nombre.slice(0, 5));

console.log(nombre.slice(1, 1));
console.log(nombre.slice(1, 2));
console.log(nombre.slice(1, 3));
console.log(nombre.slice(1, 4));
console.log(nombre.slice(1, 5));

console.log(nombre.slice(2, 2));
console.log(nombre.slice(2, 3));
console.log(nombre.slice(2, 4));
console.log(nombre.slice(2, 5));

console.log(nombre.slice(3, 3));
console.log(nombre.slice(3, 4));
console.log(nombre.slice(3, 5));

console.log(nombre.slice(4, 4));
console.log(nombre.slice(4, 5));

console.log(nombre.slice(5, 5));

console.log(nombre.toUpperCase());

console.log(nombre.toLowerCase());

nombre = nombre.replace("D", "T");

nombre = nombre.replace("g", "s");

console.log(nombre);
