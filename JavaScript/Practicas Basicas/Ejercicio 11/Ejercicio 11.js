
var arreglo = [20, 10, 5];
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);

console.log("------------------");

arreglo.push(7);
console.log(arreglo);

arreglo.pop();
console.log(arreglo);

arreglo.unshift(7);
console.log(arreglo);

arreglo.shift();
console.log(arreglo);

console.log("------------------");

for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

console.log("------------------");

arreglo.push(3);
for (var i = arreglo.length; i >= 0; i--) {
    console.log(arreglo[i]);
}

console.log("------------------");

var i = arreglo.length;
for (; i >= 0; i--) {
    console.log(arreglo[i]);
}
