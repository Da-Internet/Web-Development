
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var arreglo = ["Hola", "Mundo"]
for (var i = 0; i <= arreglo.length; i++) {
    if (i > 1) { break; }
    console.log(arreglo[i]);
}


for (var i = 0; i <= 10; i++) {
    if (i % 2 !== 0) { continue; }
    console.log(arreglo[i]);
}
