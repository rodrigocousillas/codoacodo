const Ticket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre          = document.querySelector('#nombre');
let apellido        = document.querySelector('#apellido');
let mail            = document.querySelector('#mail');
let cantidad        = document.querySelector('#cantidadTickets');
let categoria       = document.querySelector('#categoria');
const btnResumen    = document.querySelector('#btnResumen');
const btnBorrar     = document.querySelector('#btnBorrar');
let totalPago       = document.querySelector('#totalPago');

btnBorrar.addEventListener("click", limpiarRegistros);
btnResumen.addEventListener("click", calcularMonto);

function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i ++) {
        x[i].classList.remove('is-invalid');
    }
}

function calcularMonto(event) {

    event.preventDefault();

    quitarClaseError();
    
    if(nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus;
        return;
    }

    if(apellido.value === "") {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus;
        return;
    }

    if(mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus;
        return;
    }

    const emailValido = mail => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
    }

    if(!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido");
        mail.classList.add("is-invalid");
        mail.focus;
        return;
    }

    if( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value))) {
        alert("Por favor, ingresa la cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus;
        return;
    }

    if(categoria.value == 0) {
        alert("Por favor, selecciona una categoria.");
        categoria.classList.add("is-invalid");
        categoria.focus;
        return;
    }

    let totalValorTickets = (cantidadTickets.value) * Ticket;

    if(categoria.value == 4) {
        totalValorTickets = totalValorTickets;
    }

    if(categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets)
    }

    if(categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets)
    }

    if(categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets)
    }


    totalPago.textContent = totalValorTickets;
    
}

function limpiarRegistros() {
    quitarClaseError();
    nombre.value = "";
    apellido.value = "";
    mail.value = "";
    cantidad.value = "";
    categoria.value = "";
    totalPago.textContent = "";
}