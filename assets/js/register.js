let nameUser;
let locality;
let email;
let pass;

let btn_register = document.getElementById("btn_register");

$(document).ready(function() {
    btn_register.addEventListener('click', register);
});

function register() {
    event.preventDefault();
    getElements();
    
    if (checkElements(nameUser, locality, email, pass)) {
        // Aquí puedes proceder con el registro
        alert("Registro exitoso.");
        window.location.href= "mas_ajustes.html";
    }
    
}

function getElements(){
    nameUser = document.getElementById("name").value;
    locality = document.getElementById("locality").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value; 
}

function checkElements(nameUser, locality, email, pass) {
    // Verificar que los campos no estén vacíos
    if (nameUser.trim() === '' || locality.trim() === '' || email.trim() === '' || pass.trim() === '') {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Verificar que el campo nameUser no contenga números
    let nameUserPattern = /^[^\d]+$/;
    if (!nameUserPattern.test(nameUser)) {
        alert("El campo nombre no puede contener números.");
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

    // Si todas las validaciones pasan, retorna true
    return true;
}

