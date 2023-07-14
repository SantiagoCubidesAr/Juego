let puño = document.getElementById('puño');
let patada = document.getElementById('patada');
let cabezazo = document.getElementById('cabezazo');
let defensa1 = document.getElementById('defensa1');
let defensa2 = document.getElementById('defensa2');
let defensa3 = document.getElementById('defensa3');
let texto = document.getElementById('mensaje');
let barraVidaKaido = document.querySelector('.vida');
let barraVidaLuffy = document.querySelector('.vida2');
let defAt = document.getElementById('mensaje-botones');
let reiniciar = document.getElementById('boton-reiniciar');
let regresar = document.getElementById('boton-regresar');

// Variables de juego
let ataqueLuffy, ataqueKaido, defensaLuffy, defensaKaido;
let vidaLuffy = 100;
let vidaKaido = 100;

defAt.innerHTML = "Elige un ataque";
desactivarDefensa();
// Event listeners para los botones de ataque de Luffy
puño.addEventListener('click', function(){
    ataqueLuffy = "puño";
    desactivarAtaques();
    activarDefensa();
    defensaPc();
});

patada.addEventListener('click', function(){
    ataqueLuffy = "patada";
    desactivarAtaques();
    activarDefensa();
    defensaPc();
});

cabezazo.addEventListener('click', function(){
    ataqueLuffy = "cabezazo";
    desactivarAtaques();
    activarDefensa();
    defensaPc();
});

// Event listeners para los botones de defensa de Luffy
defensa1.addEventListener('click', function(){
    defensaLuffy = "puño";
    desactivarDefensa();
    activarAtaques();
    ataquePc();
});

defensa2.addEventListener('click', function(){
    defensaLuffy = "patada";
    desactivarDefensa();
    activarAtaques();
    ataquePc();
});

defensa3.addEventListener('click', function(){
    defensaLuffy = "cabezazo";
    desactivarDefensa();
    activarAtaques();
    ataquePc();
});

// Funciones de juego
function desactivarAtaques() {
    puño.classList.add('invisible');
    patada.classList.add('invisible');
    cabezazo.classList.add('invisible');
}

function activarAtaques() {
    puño.classList.remove('invisible');
    patada.classList.remove('invisible');
    cabezazo.classList.remove('invisible');
    defAt.innerHTML = "Elige un ataque";

}

function desactivarDefensa() {
    defensa1.classList.add('invisible');
    defensa2.classList.add('invisible');
    defensa3.classList.add('invisible');
}

function activarDefensa() {
    defensa1.classList.remove('invisible');
    defensa2.classList.remove('invisible');
    defensa3.classList.remove('invisible');
    defAt.innerHTML = "Elige una defensa";
    // Agrega esta línea para ocultar los botones de ataque cuando se muestren los botones de defensa
}

function generarAleatorio() {
    return Math.floor(Math.random() * 3);
}


function ataquePc() {
    var opcionesAtaque = ["puño", "patada", "cabezazo"];
    var aleatorio = generarAleatorio();
    ataqueKaido = opcionesAtaque[aleatorio];
    calcularDanoLuffy();
    verificarFinJuego();
}

function defensaPc() {
    var opcionesDefensa = ["puño", "patada", "cabezazo"];
    aleatorio = generarAleatorio();
    defensaKaido = opcionesDefensa[aleatorio];
    calcularDanoKaido();
    verificarFinJuego();
 // Agrega esta línea para ocultar los botones de defensa después de seleccionar una defensa
}

function calcularDanoKaido() {
    if (
        (ataqueLuffy === "puño" && defensaKaido === "patada") ||
        (ataqueLuffy === "cabezazo" && defensaKaido === "puño") ||
        (ataqueLuffy === "patada" && defensaKaido === "cabezazo")
    ) {
        vidaKaido -= 20;
        texto.textContent = "Luffy ataca con " + ataqueLuffy + " Kaido se defiende con " + defensaKaido +" ¡Kaido pierde 20 puntos de vida!";
        barraVidaKaido.style.width = vidaKaido + '%';
    } else if (
        (ataqueLuffy === "puño" && defensaKaido === "puño") ||
        (ataqueLuffy === "patada" && defensaKaido === "patada") ||
        (ataqueLuffy === "cabezazo" && defensaKaido === "cabezazo")
    ) {
        vidaKaido -= 10;
        texto.textContent = "Luffy ataca con " + ataqueLuffy + " Kaido se defiende con " + defensaKaido + " ¡Kaido pierde 10 puntos de vida!";
        barraVidaKaido.style.width = vidaKaido + '%';
    } else {
        texto.textContent = "Luffy ataca con " + ataqueLuffy + " Kaido se defiende con " + defensaKaido + " ¡Kaido no pierde puntos de vida!";
    }
}

function calcularDanoLuffy() {
    if (
        (ataqueKaido === "puño" && defensaLuffy === "patada") ||
        (ataqueKaido === "cabezazo" && defensaLuffy === "puño") ||
        (ataqueKaido === "patada" && defensaLuffy === "cabezazo")
    ) {
        vidaLuffy -= 20;
        texto.textContent = "Kaido ataca con " + ataqueKaido + " Luffy se defiende con " + defensaLuffy + " ¡Luffy pierde 20 puntos de vida!";
        barraVidaLuffy.style.width = vidaLuffy + '%'
    } else if (
        (ataqueKaido === "puño" && defensaLuffy === "puño") ||
        (ataqueKaido === "patada" && defensaLuffy === "patada") ||
        (ataqueKaido === "cabezazo" && defensaLuffy === "cabezazo")
    ) {
        vidaLuffy -= 10;
        texto.textContent = "Kaido ataca con " + ataqueKaido + " Luffy se defiende con " + defensaLuffy + " ¡Luffy pierde 10 puntos de vida!";
        barraVidaLuffy.style.width = vidaLuffy + '%'
    } else {
        texto.textContent = "Kaido ataca con " + ataqueKaido + " Luffy se defiende con " + defensaLuffy + " ¡Luffy no pierde puntos de vida!";
    }
}

function verificarFinJuego() {
    if (vidaLuffy <= 0 && vidaKaido <= 0) {
         texto.textContent = "¡Es un empate!";
         desactivarAtaques();
         desactivarDefensa();
         defAt.innerHTML = "";
         reiniciar.classList.remove('invisible');
         regresar.classList.remove('invisible');
    } else if (vidaKaido <= 0) {
        texto.textContent = "¡Luffy gana!";
        desactivarAtaques();
         desactivarDefensa();
         defAt.innerHTML = "";
         reiniciar.classList.remove('invisible');
         regresar.classList.remove('invisible');
    } else if (vidaLuffy <= 0){
        texto.textContent = "¡Kaido gana!";
        desactivarAtaques();
         desactivarDefensa();
         defAt.innerHTML = "";
         reiniciar.classList.remove('invisible');
         regresar.classList.remove('invisible');
    }
} 
   

