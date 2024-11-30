
//Opcion 1
var numeros = [10, 2, 3, 5, 6, 19, 13, 34, 22];

var numeros_pares1 = [];

for (var i = numeros.length; i >= 0; i--) {

    var numero = numeros[i];

    if (numero % 2 == 0) {
        numeros_pares1.push(numero);
    }

}

console.log(numeros_pares1);

//Opcion 2
var numeros_pares2 = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

console.log(numeros_pares2);

