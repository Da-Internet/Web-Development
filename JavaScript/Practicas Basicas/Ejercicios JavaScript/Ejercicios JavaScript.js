document.addEventListener('DOMContentLoaded', function () {

    botonFrase.addEventListener('click', function (event) {
        const VocalesElemento = document.getElementById('Vocales');
        const fraseInput = document.getElementById('Frase').value;

        const vocales = contarVocales(fraseInput);

        function contarVocales(frase) {
            const fraseMinusculas = frase.toLowerCase();

            const vocales = ['a', 'e', 'i', 'o', 'u'];

            var contadorVocales = 0;

            for (let i = 0; i < fraseMinusculas.length; i++) {
                if (vocales.includes(fraseMinusculas[i])) {
                    contadorVocales++;
                }
            }

            return contadorVocales;
        }

        console.log("Vocales Contadas")

        VocalesElemento.textContent = "El número de vocales en la frase es: " + vocales;

    });

    BotonGasolina.addEventListener('click', function (event) {
        const ConsumoElemento = document.getElementById('Consumo');
        var litros = document.getElementById('Litros');
        var km = document.getElementById('Kilometros');

        var consumo = parseInt(litros.value) / parseInt(km.value);

        console.log("Consumo Obtenido");

        ConsumoElemento.textContent = "El consumo fue: " + consumo;

    });

    BotonSegundos.addEventListener('click', function (event) {
        const SegundosElemento = document.getElementById('Segundos');
        var hr = document.getElementById('Horas');
        var m = document.getElementById('Minutos');

        var sec = ((parseInt(hr.value) * 60) * 60) + (parseInt(m.value) * 60);

        console.log("Segundos Obtenidos");

        SegundosElemento.textContent = "El total de Segundos es: " + sec;

    });

    BotonUniDecenas.addEventListener('click', function (event) {
        const UnidadesElemento = document.getElementById('Unidades');
        const DecenasElemento = document.getElementById('Decenas');
        var num = document.getElementById('Num2Digitos');

        var uni = parseInt(num.value) % 10;
        var dec = Math.floor(parseInt(num.value) / 10);

        console.log("Operación Realizada");

        UnidadesElemento.textContent = "El total de Unidades es: " + uni;
        DecenasElemento.textContent = "El total de Decenas es: " + dec;

    });

    BotonIngredientes.addEventListener('click', function (event) {
        const PapasElemento = document.getElementById('Cantidad_Papas');
        const HuevosElemento = document.getElementById('Cantidad_Huevos');
        const CebollasElemento = document.getElementById('Cantidad_Cebolla');
        var gente = document.getElementById('Comensales');

        var papasgr = parseInt(gente.value * 200);
        var papaskl = (papasgr / 1000);
        var huevos = (papaskl * 5);
        var cebolla = (papaskl * 300);

        console.log("Ingredientes Obtenidos")

        PapasElemento.textContent = "El total de gramos de papas necesarias es: " + papasgr + " gr, o " + papaskl + " kg";
        HuevosElemento.textContent = "El total de huevos necesarios es: " + huevos;
        CebollasElemento.textContent = "El total de gramos de cebollas es: " + cebolla + " gr";

    });

    BotonMayorArray.addEventListener('click', function (event) {
        const mayorElemento = document.getElementById('MayorArray');

        // Con esto consigo el array
        const arrayInput = document.getElementById('Array1').value;
        const numeros = arrayInput.split(',').map(Number);

        const mayor = encontrarMayor(numeros);

        function encontrarMayor(array) {
            if (array.length === 0) {
                return "El Array está vacío";
            }

            let mayor = array[0];

            // Recorremos el array para encontrar el número mayor
            for (let i = 1; i < array.length; i++) {
                if (array[i] > mayor) {
                    mayor = array[i];
                }
            }

            return mayor;
        }

        console.log("Mayor Número Encontrado");

        mayorElemento.textContent = "El número más grande del Array es " + mayor;

    });

    BotonSumaArray.addEventListener('click', function (event) {
        const sumaElemento = document.getElementById('SumaArray');

        // Con esto consigo el array
        const arrayInput = document.getElementById('Array2').value;
        const Numeros = arrayInput.split(',').map(Number);

        const Suma = calcularSuma(Numeros);

        function calcularSuma(array) {
            let Suma = 0;

            // Recorremos el array y sumamos cada número
            for (let i = 0; i < array.length; i++) {
                Suma += array[i];
            }

            return Suma;
        }

        console.log("Suma Obtenida");

        sumaElemento.textContent = "La suma de los Números del Array es " + Suma;

    });

    BotonFactorial.addEventListener('click', function (event) {
        const factorialElemento = document.getElementById('FactorialResultado');
        var Numero = document.getElementById('Factorial').value;

        const Factorial = calcularFactorial(Numero);

        function calcularFactorial(Numero) {
            if (Numero === 0 || Numero === 1) {
                return 1;
            }

            let resultado = 1;

            for (let i = 2; i <= Numero; i++) {
                resultado *= i;
            }

            return resultado;
        }

        console.log("Factorial Obtenido");

        factorialElemento.textContent = "El resultado del Factorial es " + Factorial;

    });

    BotonPalindromo.addEventListener('click', function (event) {
        const PalindromoElemento = document.getElementById('PalindromoConfirmado');

        // Con esto obtenemos la oración y solo dejamos las letras
        const Oracion = document.getElementById('Palindromo').value.toLowerCase().replace(/\s/g, '');

        const esPalindromo = verificarPalindromo(Oracion);

        function verificarPalindromo(Oracion) {
            // Invertimos con esto la oración
            const OracionInvertida = Oracion.split('').reverse().join('');

            // Y comparamos
            return Oracion === OracionInvertida;
        }

        console.log("Palíndromo Revisado")

        if (esPalindromo) {
            PalindromoElemento.textContent = "La Oración es un Palíndromo.";
        } else {
            PalindromoElemento.textContent = "La Oración no es un Palíndromo.";
        }

    });

    BotonArreglo0.addEventListener('click', function (event) {
        const arreglo0Elemento = document.getElementById('ArregloSin0');

        // Con esto consigo el arreglo
        const arrayInput = document.getElementById('Arreglo0').value;
        const Numeros = arrayInput.split(',').map(Number);

        const NumerosFiltrados = filtrarCeros(Numeros);

        function filtrarCeros(array) {
            // Filtrar los ceros del arreglo
            const NumerosFiltrados = array.filter(Numeros => Numeros !== 0);
            return NumerosFiltrados;
        }

        console.log("Ceros Eliminados")

        arreglo0Elemento.textContent = "Nuevo arreglo sin ceros: " + NumerosFiltrados.join(', ');

    });

});
