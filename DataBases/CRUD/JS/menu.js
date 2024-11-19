
$(document).ready(function () {
    $('#formulario').submit(function (e) {
        e.preventDefault();

        var imagen = $('#imagen').val();
        var objetivo = $('#objetivo').val();
        var recompensa = $('#recompensa').val();
        var categoria = $('#categoria').val();

        // Con esto agregamos
        $.ajax({
            type: 'POST',
            url: 'php/agregar.php',
            data: { imagen: imagen, objetivo: objetivo, recompensa: recompensa, categoria: categoria },
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    $('#objetivos-lista').append('<div class="objetivo-item" data-categoria="' + categoria + '">' +
                        '<img src="' + imagen + '" class="Img_Objetivo" alt="Imagen del objetivo">' +
                        '<h3>' + objetivo + '</h3>' +
                        '<p> Categoría: ' + categoria + '</p>' +
                        '<p> Recompensa: ' + recompensa + '$</p>' +
                        '<button class="btnEliminar" data-id="' + response.id + '">Eliminar</button>' +
                        '</div>');
                    
                    // Mostrar mensaje de éxito
                    mostrarMensaje('Objetivo agregado con éxito', 'success');
                } else {
                    mostrarMensaje('Error al agregar el objetivo', 'error');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
                mostrarMensaje('Error al procesar la solicitud', 'error');
            }
        });

        // Limpiar datos
        $('#imagen').val('');
        $('#objetivo').val('');
        $('#recompensa').val('');
        $('#categoria').val('');
    });

    // Con esto eliminamos eliminar
    $(document).on('click', '.btnEliminar', function () {
        var objetivoId = $(this).data('id');
        var button = $(this);

        $.ajax({
            type: 'POST',
            url: 'php/eliminar.php',
            data: { id: objetivoId },
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    button.closest('.objetivo-item').remove();
                    mostrarMensaje('Objetivo eliminado con éxito, su recompensa ha sido entregada', 'success');
                } else {
                    mostrarMensaje('Error al eliminar el objetivo', 'error');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
                mostrarMensaje('Error al procesar la solicitud', 'error');
            }
        });
    });

    $('#btnLogin').click(function (e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    // Con esto mostramos mensajes
    function mostrarMensaje(mensaje, tipo) {
        var mensajeBox = $('<div class="mensaje-' + tipo + '">' + mensaje + '</div>');
        $('#mensaje-container').html(mensajeBox).slideDown('slow');

        setTimeout(function () {
            mensajeBox.fadeOut('slow', function () {
                $(this).remove();
            });
        }, 3000);
    }

    //Con esto muestro y oculto segun categorias
    $('.btn-filtro').click(function () {
        var categoria = $(this).data('categoria');

        $('.objetivo-item').hide();

        if (categoria === 'Todos') {
            $('.objetivo-item').show();
        } else {
            $('.objetivo-item[data-categoria="' + categoria + '"]').show();
        }
    });
});
