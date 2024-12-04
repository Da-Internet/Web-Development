
function clic() {
    alert("NO TOQUES EL BOTON");
}

function encima() {
    alert("BAJATE DE ENCIMA");
}

function afuera() {
    alert("QUEDATE ARRIBA");
}

document.getElementById("nuclear").addEventListener("click", bomba_nuclear, true);

function bomba_nuclear() {
    alert("Los misiles han sido desplegados, suerte a todos.");
}

document.getElementById("div").addEventListener("click", another_click, false);

function another_click() {
    alert("Presionas donde no es, esto es el div.");
}
