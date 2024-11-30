document.addEventListener('DOMContentLoaded', function () {

    BotonPalindromo.addEventListener('click', function (event) {

        console.log("Ejercicio del Palindromo")

        const PalindromoElemento = document.getElementById('ConfirmacionPalindromo');

        // Con esto obtenemos la oración y solo dejamos las letras
        const frase = document.getElementById('Palin').value.toLowerCase().replace(/\s/g, '');

        const esPalindromo = verificarPalindromo(frase);

        function verificarPalindromo(frase) {
            // Invertimos con esto la oración
            const fraseInvertida = frase.split('').reverse().join('');

            // Y comparamos
            return frase === fraseInvertida;
        }

        if (esPalindromo) {
            PalindromoElemento.textContent = "La frase SI es un palíndromo.";
        } else {
            PalindromoElemento.textContent = "La frase NO es un palíndromo.";
        }

    });

    BotonFactorial.addEventListener('click', function (event) {
        const factorialElemento = document.getElementById('ResultadoFactorial');
        var num = document.getElementById('NumFactorial').value;

        const Factorial = obtenerFactorial(num);

        function obtenerFactorial(num) {
            if (num === 0 || num === 1) {
                return 1;
            }

            let resultado = 1;

            for (let i = 2; i <= num; i++) {
                resultado *= i;
            }

            return resultado;
        }

        console.log("Factorial Obtenido");

        factorialElemento.textContent = "El resultado del Factorial es " + Factorial;

    });

    BotonIBM.addEventListener('click', function (event) {
        const IBMElemento = document.getElementById('ResultadoIBM');
        var weight = document.getElementById('Peso').value;
        var height = document.getElementById('Altura').value;

        var heightCM = parseFloat(height) * 100;
        var IBM = (parseInt(weight) / (parseInt(heightCM) * parseInt(heightCM) / 10000));

        IBM = parseFloat(IBM.toFixed(2));

        console.log("IBM Obtenido")

        if (IBM < 18.5) {
            IBMElemento.textContent = "El IBM total es: " + IBM + " por lo tanto usted es de Bajo Peso";
        } else if (IBM >= 18.5 && IBM <= 24.9) {
            IBMElemento.textContent = "El IBM total es: " + IBM + " por lo tanto usted es de Peso Normal";
        }
        else if (IBM >= 5 && IBM <= 29.9) {
            IBMElemento.textContent = "El IBM total es: " + IBM + " por lo tanto usted tiene SobrePeso";
        }
        else if (IBM >= 30) {
            IBMElemento.textContent = "El IBM total es: " + IBM + " por lo tanto usted es Obeso";
        }

    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const botonesNumeros = document.querySelectorAll('.button:not(#BotonMas,#BotonMenos,#BotonMult,#BotonDiv,#BotonLimpiar,#BotonRes)');

    const botonMas = document.getElementById('BotonMas');
    const botonMenos = document.getElementById('BotonMenos');
    const botonMult = document.getElementById('BotonMult');
    const botonDiv = document.getElementById('BotonDiv');

    const botonLimpiar = document.getElementById('BotonLimpiar');
    const BotonRes = document.getElementById('BotonRes');

    const resultadoCalc = document.getElementById('ResultadoCalc');

    let operacion = '';

    botonesNumeros.forEach(boton => {
        boton.addEventListener('click', function () {
            operacion += boton.textContent.trim();
            document.querySelector('label[for="Operacion Ingresada"]').textContent = operacion;
            console.log("Operacion hasta ahora" + operacion);
        });
    });

    botonMas.addEventListener('click', function () {
        operacion += ' + ';
        document.querySelector('label[for="Operacion Ingresada"]').textContent = operacion;
        console.log("Operacion hasta ahora" + operacion);
    });

    botonMenos.addEventListener('click', function () {
        operacion += ' - ';
        document.querySelector('label[for="Operacion Ingresada"]').textContent = operacion;
        console.log("Operacion hasta ahora" + operacion);
    });

    botonMult.addEventListener('click', function () {
        operacion += ' * ';
        document.querySelector('label[for="Operacion Ingresada"]').textContent = operacion;
        console.log("Operacion hasta ahora" + operacion);
    });

    botonDiv.addEventListener('click', function () {
        operacion += ' / ';
        document.querySelector('label[for="Operacion Ingresada"]').textContent = operacion;
        console.log("Operacion hasta ahora" + operacion);
    });

    BotonRes.addEventListener('click', function () {
        try {
            const resultado = eval(operacion);
            resultadoCalc.textContent = "El resultado es: " + resultado;
        } catch (error) {
            resultadoCalc.textContent = "Error en la operación";
        }
    });

    botonLimpiar.addEventListener('click', function () {
        operacion = '';
        document.querySelector('label[for="Operacion Ingresada"]').textContent = '';
        resultadoCalc.textContent = '';
    });

});