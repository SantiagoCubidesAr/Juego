const ataque = document.getElementById('ataque')
const defensa = document.getElementById('defensa')
let vidaKaido = 100;
let vidaLuffy = 100;
const danoTabla = [[10,20,0],[0,10,20],[20,0,10]];
function iniciar(ataque,defensa) {
    const dano = danoTabla[ataque][defensa];
    return dano;
}

inicio.addEventListener('click',iniciar)
