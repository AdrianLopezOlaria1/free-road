$(document).ready(function() {
    function animateForm() {
        $('#form').slideDown(500, function() {
            // Después de completar la animación de despliegue hacia abajo, cambia la opacidad a 1
            $('#form').css('opacity', '1');
        });
    }
    animateForm();
});