const inicio = document.getElementById('boton-inicio')

function iniciar(evento) {
    evento.preventDefault();
    console.log('hola mundo');
}

inicio.addEventListener('click',iniciar)
