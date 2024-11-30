
function suma(a, b) {
    //La funcion de Suma

    // b + b || 0

    console.log(a);
    console.log(b);
    return a + b;

}

//var resultado = suma(2);
console.log(suma(20, 30));

console.log("------------------");

var resultado = suma(50, 100);
console.log(resultado);

console.log("------------------");

function ejecutar(funcion) {
    return funcion();
}
var funcion_suma = suma;
resultado = ejecutar(funcion_suma);
