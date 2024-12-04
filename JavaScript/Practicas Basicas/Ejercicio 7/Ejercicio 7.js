
//typeof muestra el tipo de variable que es

var variable1 = 0;
console.log(typeof variable1);
var variable2 = 1.1;
console.log(typeof variable2);

var variable3 = "Hola Mundo";
console.log(typeof variable3);

var variable4 = [];
console.log(typeof variable4);
var variable5 = {};
console.log(typeof variable5);

var valor = null;
//Null cuenta como definicion

if (typeof valor == "undefined") {
    console.log("Esta variable no esta declarada");
} else {
    console.log("La variable esta declarada");
}
