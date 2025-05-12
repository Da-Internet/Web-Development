/* 
Operador	Descripción
+           Addition
-	        Subtraction
*	        Multiplication
*/

// Operacion de Resultados
document.addEventListener("DOMContentLoaded", function () {
    const botonResultado = document.getElementById("botonResultado");
    const botonLimpiar = document.getElementById("botonLimpiar");

    // Calcular resultados
    botonResultado.addEventListener("click", function (event) {
        event.preventDefault();

        // Recolectar valores
        const potencia = +document.getElementById("Potencia").value;
        const stat = +document.getElementById("Stats").value;
        const poder = +document.getElementById("Poder").value;
        const energiaTotal = +document.getElementById("Energia_Total").value;

        // Revisar que los valores sean positivos
        if (potencia < 0 || stat < 0 || poder < 0 || energiaTotal < 0) {
            alert("Los Valores deben ser Positivos");
            return;
        }

        // Formulas
        const potenciaAtaque = potencia * stat;
        const poderAtaque = potenciaAtaque * poder;
        const energiaConsumida = (potenciaAtaque * poder) * 10;
        const energiaRestante = energiaTotal - energiaConsumida;

        // Mostrar resultados (toFixed(2) para limitar a 2 decimales)
        document.getElementById("Potencia_Ataque").textContent = potenciaAtaque.toFixed(2);
        document.getElementById("Poder_Ataque").textContent = poderAtaque.toFixed(2);
        document.getElementById("Energia_Consumida").textContent = energiaConsumida.toFixed(2);
        document.getElementById("Energia_Restante").textContent = energiaRestante.toFixed(2);
    });

    // Limpiar todo
    botonLimpiar.addEventListener("click", function () {
        document.querySelectorAll("input[type=number]").forEach(input => input.value = "");
        document.querySelectorAll(".Resultados p").forEach(p => p.textContent = "");
    });
});