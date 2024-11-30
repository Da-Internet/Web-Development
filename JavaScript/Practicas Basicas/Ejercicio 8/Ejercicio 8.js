
//El minimo
var min = 1;
//El maximo
var max = 50;

//Va a ser un numero aleatorio
var numero_secreto = Math.random() * (max - min) + min;

numero_secreto = parseInt(numero_secreto)

console.log(numero_secreto);

var mensaje = "Ingresa un numero para empezar a adivinar";

while (true) {
    var numero_usuario = prompt(mensaje, "0");

    numero_usuario = parseInt(numero_usuario);

    if (numero_usuario === numero_secreto) {
        alert("Felicidades, has ganado");
        break;
    } else if (numero_usuario === 0) {
        break;
    } else if (numero_usuario > numero_secreto) {
        mensaje = "Lo sentimos, el numero que ingresaste es mayor al numero secreto";
    } else if (numero_usuario < numero_secreto) {
        mensaje = "Lo sentimos, el numero que ingresaste es menor al numero secreto";
    }

}