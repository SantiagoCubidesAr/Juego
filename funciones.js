const ataque = document.getElementById('boton-ataque')
const puño = document.getElementById('puño')
const patada = document.getElementById('patada')
const cabezazo = document.getElementById('cabezazo')
let ataqueJugador;
let vidaKaido = 100;
let vidaLuffy = 100;
const danoTabla = [[10,20,0],[0,10,20],[20,0,10]];
ataqueJugador === (puño.click) ? "puño" 
    : (patada.click) ? "patada"
    : "cabezazo"
    console.log(ataqueJugador)
 ataque.addEventListener('click',seleccionarataque)


function seleccionarataque(e) {
    e.prevenDefault()

    
}

