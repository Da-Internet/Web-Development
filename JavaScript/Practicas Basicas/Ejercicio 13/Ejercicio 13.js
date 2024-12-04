
var arreglo1 = [2, 5, 1, 10, 20];
arreglo1.sort();
console.log(arreglo1);
console.log("------------------");

function ordenacion1(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else if (a == b) {
        return 0;
    }
}
var arreglo2 = [2, 5, 4, 7, 20];
arreglo2.sort(ordenacion1);
console.log(arreglo2);

function ordenacion2(a, b) {
    return a - b;
}
var arreglo2 = [2, 5, 4, 7, 20];
arreglo2.sort(ordenacion2);
arreglo2.reverse();
console.log(arreglo2);

console.log("------------------");

var arreglo3 = "a,b,c,2".split(",");
arreglo3 = arreglo3.join("p");
console.log(arreglo3);

