
function inicio(){

    var boton=document.getElementById("guardar");

    boton.addEventListener("click", itemNuevo, false);

}

function itemNuevo(){

    var titulo_nota = document.getElementById("titulo_nota").value;

    var cuerpo_nota = document.getElementById("cuerpo_nota").value;

    sessionStorage.setItem(titulo_nota, cuerpo_nota);

    leer_y_mostrar(titulo_nota);

}

function leer_y_mostrar(titulo_nota){

    var bloc = document.getElementById("bloc");

    var la_nota = sessionStorage.getItem(titulo_nota);

    bloc.innerHTML = "<div>Titulo:" + titulo_nota + "--" + "Nota:" + la_nota + "</div>";

}

window.addEventListener ("load", inicio, false);