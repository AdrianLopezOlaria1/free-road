let email;
let pass;

let btn_login = document.getElementById("btn_login");

$(document).ready(function() {
    btn_login.addEventListener('click', login);
});

function login() {
    event.preventDefault();
    getLoginInfo();
    
    if (checkLoginInfo(email, pass)) {
        // Aquí puedes proceder con el inicio de sesión
        alert("Inicio de sesión exitoso.");
        window.location.href= "principal.html";
    }
}

function getLoginInfo(){
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value; 
}

function checkLoginInfo(email, pass) {
    // Verificar que los campos no estén vacíos
    if (email.trim() === '' || pass.trim() === '') {
        alert("Por favor, ingresa tu correo electrónico y contraseña.");
        return false;
    }

    // Verificar que el email tenga un formato válido
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Verificar que la contraseña tenga más de 6 caracteres
    if (pass.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    if(email !='adrian@gmail.com' || pass != '123456'){
        alert('El usuario o la contraseña no son correctos');
        return false;
    }

    // Si todas las validaciones pasan, retorna true
    return true;
}
