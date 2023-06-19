const ataques_kaido = document.getElementsByClassName('ataques-kaido')
const ataques_luffy = document.getElementsByClassName('ataques-luffy')
let vidaKaido = 100;
let vidaLuffy = 100;
const danoTabla = [[10,20,0],[0,10,20],[20,0,10]];
function iniciar(ataque) {
    const dano = danoTabla[ataque][defensa];
    return dano;
}

inicio.addEventListener('click',iniciar)
