$(document).ready(function() {
    function animateForm() {
        $('#form').slideDown(500, function() {
            $('#form').css('opacity', '1'); // Después de completar la animación de despliegue hacia abajo, cambia la opacidad a 1
        });
    }
    animateForm();

    // Función para animar el logo
    function animateLogo() {
        // Animación de subida
        $('#animated-logo').animate({marginTop: '-=20px'}, {
            duration: 1000,
            step: function(now, fx) {
                // Aplicar rotación simultánea
                if (fx.prop === 'marginTop') {
                    var rotation = now / 3; // Girar 1/3 de la distancia de desplazamiento
                    $(this).css('transform', 'rotate(' + rotation + 'deg)');
                }
            },
            complete: function() {
                // Animación de bajada después de la subida
                $('#animated-logo').animate({marginTop: '+=20px'}, {
                    duration: 1000,
                    step: function(now, fx) {
                        // Aplicar rotación simultánea
                        if (fx.prop === 'marginTop') {
                            var rotation = now / 3; // Girar 1/3 de la distancia de desplazamiento
                            $(this).css('transform', 'rotate(' + rotation + 'deg)');
                        }
                    }
                });
            }
        });
    }

    // Llamar a la función de animación del logo cada cierto intervalo
    setInterval(animateLogo, 3000); // Cambia el valor de 2000 si quieres que la animación sea más lenta o rápida
});
