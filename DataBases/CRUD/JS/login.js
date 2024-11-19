
$(document).ready(function () {
    $('#formulario').submit(function (e) {
        e.preventDefault();

        var correo = $('#correo').val();
        var contrasena = $('#contrasena').val();

        // Hecho por: Diego Alberto Canto Ricardez

        $.ajax({
            type: 'POST',
            url: 'php/login.php',
            data: { correo: correo, contrasena: contrasena },
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    window.location.href = response.redirect;
                } else {
                    mostrarMensaje(response.message, 'error');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
                mostrarMensaje('Error al procesar la solicitud. Por favor, intenta nuevamente.', 'error');
            }
        });
    });

    
    function mostrarMensaje(mensaje, tipo) {
        var mensajeBox = $('<div class="mensaje-' + tipo + '">' + mensaje + '</div>');
        $('#mensaje-container').html(mensajeBox).slideDown('slow');

        setTimeout(function () {
            mensajeBox.fadeOut('slow', function () {
                $(this).remove();
            });
        }, 3000);
    }
});
