
var numeros = [2, 4, 6, 8];

numeros.forEach(function (elemento, index, arreglo) {
    console.log(elemento);
    console.log(index);
    console.log(arreglo);
});

numeros.forEach(function (elemento, index, arreglo) {
    arreglo[index] = Math.pow(elemento, 2);
});

console.log(numeros);

