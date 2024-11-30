
//Funcion Flecha
//Minimizar la definicion de una función
window.onload = function () {
    //Request
    fetch("js/Carrito_juegos.json") //API
        .then((data) => {
            return data.json();
        })
        .then((objectJson) => {
            console.log(objectJson); //Arreglo
            console.log(objectJson.catalogodejuegos); //Objeto

            /* //Opcion 1
            for (var indice = 0; indice < objectJson.catalogodejuegos.length; indice++) {

            } */
            var html = '';
            //Opcion 2
            objectJson.catalogodejuegos.forEach(function (data) {
                html += '<div class="col">';
                html += '<div class="card" style="width: 18rem;">';
                html += '<img src= "' + data.urlImagen + '" class="imagen" alt="...">';
                html += '<div class="card-body">';
                html += '<h5 class="card-title"> ' + data.nombreDelJuego + ' </h5>';
                html += '<p class="card-text"> ' +
                    data.nombreDelJuego + ' es un juego del genero ' + data.genero + ' salido en el año ' +
                    data.lanzamiento + ' con clasificacion ' + data.clasificacion + ' </p>';
                html += '<a href="#" class="btn btn-primary">Agregar al Carrito</a>'
                html += '</div>';
                html += '</div>';
                html += '</div>';

                /* console.log(html); */
            });

            document.getElementById("Catalogo").innerHTML = html;

        })
}