
var variable1 = 100;
var variable2 = 50;

/* 
    Operadores Aritmeticos
--------------------------------------
    x < y | X menor que Y
    x > y | X mayor que Y
    x == y | X igual que Y
*/

if (variable1 > variable2) {
    console.log("El valor 1 es mayor al valor 2");
} else if (variable1 < variable2) {
    console.log("El valor 1 es menor al valor 2");
} else if (variable1 == variable2) {
    console.log("El valor 1 es igual al valor 2")
}

/* 
    Operadores Logicos
--------------------------------------
    || OR
    && AND
    == =====
    != !==
*/

if (variable1 || variable2) {
    console.log("Valor 2 OR");
}

if (variable1 && variable2) {
    console.log("Valor 2 AND")
}

if (variable1 == variable2) {
    console.log("Valor 2 ==");
}

if (variable1 != variable2) {
    console.log("Valor 2 !=");
}

var variable3 = "25";

if (variable1 || variable3) {
    console.log("Valor 3 OR");
}

if (variable1 && variable3) {
    console.log("Valor 3 AND")
}

if (variable1 == variable3) {
    console.log("Valor 3 ==");
}

if (variable1 != variable3) {
    console.log("Valor 3 !=");
}
