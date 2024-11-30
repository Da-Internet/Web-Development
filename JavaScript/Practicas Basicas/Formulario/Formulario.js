document.addEventListener('DOMContentLoaded', function () {
    const botonEnviar = document.getElementById('botonEnviar');
    const botonLimpiar = document.getElementById('botonLimpiar');

    botonEnviar.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Mostrar mensaje de información enviada
        var name = document.getElementById('Nombre');
        alert('Información Enviada. Un gusto volverle a ver, ' + name.value);

        console.log('Información enviada');
    });

    botonLimpiar.addEventListener('click', function () {
        // Vaciar los inputs
        const inputs = document.querySelectorAll('input[type=text], input[type=text]');
        inputs.forEach(input => input.value = '');

        console.log('Limpieza Terminada')
    });

    botonCambiar.addEventListener('click', function () {
        var cambiar1 = document.getElementById('Usuario');
        var cambiar2 = document.getElementById('Nombre');

        var temp = cambiar2.value;

        cambiar2.value = cambiar1.value;
        cambiar1.value = temp;

        console.log('Cambiado con Exito');

    });

    botonEdad.addEventListener('click', function () {
        const MayoriaEdadElemento = document.getElementById('MayoriaEdad');
        var name = document.getElementById('Nombre');
        var edad = document.getElementById('Edad');

        if (edad.value <= 1 && edad.value > 2) {

            MayoriaEdadElemento.textContent =(name.value + ", usted es un: Recien Nacido");

        } else if (edad.value >= 2 && edad.value <= 13) {

            MayoriaEdadElemento.textContent =(name.value + ", usted es un: Niño");

        }
        else if (edad.value >= 18 && edad.value <= 59) {

            MayoriaEdadElemento.textContent =(name.value + ", usted es un: Adulto");

        }
        else if (edad.value >= 60 && edad.value <= 100) {

            MayoriaEdadElemento.textContent =(name.value + ", usted es un: Anciano");

        } else {

            MayoriaEdadElemento.textContent = (name.value + ", usted esta Muerto o Eres Atemporal");
        }
    });

    botonSuma.addEventListener('click', function () {
        const resultadoElemento = document.getElementById('resultado');
        var num1 = document.getElementById('Num1');
        var num2 = document.getElementById('Num2');

        var resultado = parseInt(num1.value) + parseInt(num2.value)

        resultadoElemento.textContent = "El resultado es: " + resultado;

        console.log("Suma Realizada")

    });

    botonResta.addEventListener('click', function () {
        const resultadoElemento = document.getElementById('resultado');
        var num1 = document.getElementById('Num1');
        var num2 = document.getElementById('Num2');

        var resultado = parseInt(num1.value) - parseInt(num2.value)

        resultadoElemento.textContent = "El resultado es: " + resultado;

        console.log("Resta Realizada")

    });

    botonMult.addEventListener('click', function () {
        const resultadoElemento = document.getElementById('resultado');
        var num1 = document.getElementById('Num1');
        var num2 = document.getElementById('Num2');

        var resultado = parseInt(num1.value) * parseInt(num2.value)

        resultadoElemento.textContent = "El resultado es: " + resultado;

        console.log("Multiplicación Realizada")

    });

    botonDividir.addEventListener('click', function () {
        const resultadoElemento = document.getElementById('resultado');
        var num1 = document.getElementById('Num1');
        var num2 = document.getElementById('Num2');

        var resultado = parseInt(num1.value) / parseInt(num2.value)

        resultadoElemento.textContent = "El resultado es: " + resultado;

        console.log("Division Realizada")

    });

    botonTabla.addEventListener('click', function () {
        const resultadoElemento = document.getElementById('resultado');
        var num1 = document.getElementById('Num1');

        let resultadosTexto = '';

        for (let i = 1; i <= 10; i++) {
            resultado = parseInt(num1.value) * i;
            resultadosTexto += `${num1.value} x ${i} = ${resultado}<br>`;
        }

        resultadoElemento.innerHTML = resultadosTexto;

        console.log("Tabla del numero " + num1.value + " desplegada")

    });



});
