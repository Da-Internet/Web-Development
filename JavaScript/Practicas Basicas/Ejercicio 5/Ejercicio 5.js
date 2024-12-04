
console.log("Contador 1 - Progreso basico");
var contador1 = 0;

while (contador1 < 11) {
    contador1 = contador1 + 1;
    console.log(contador1);
}

console.log("");
console.log("Contador 2 - Aumento progresivo con ++");
var contador2 = 0;

while (contador2 < 11) {
    contador2++;
    console.log(contador2);
}

console.log("");
console.log("Contador 3 - Uso de Break");
var contador3 = 0;

while (contador3 < 21) {
    contador3++;
    if (contador3 > 15) {
        break;
    }
    console.log(contador3);
}

console.log("");
console.log("Contador 4 - Do While");
var temporizador = 0;

do {
    temporizador++;
    console.log("Minuto " + temporizador);

    if (temporizador > 29) {
        break;
    }

} while (true) {
    console.log("Ha pasado media hora");
}