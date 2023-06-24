let puño = document.getElementById('puño');
let patada = document.getElementById('patada');
let cabezazo = document.getElementById('cabezazo');
let texto = document.getElementById('mensaje');
let dano = 0;
puño.onclick = ataques;
patada.onclick = ataques;
cabezazo.onclick = ataques;
function ataques() {
    puño.onclick ? dano = 10
    : patada.onclick ? dano = 20
    : dano = 30;
}
