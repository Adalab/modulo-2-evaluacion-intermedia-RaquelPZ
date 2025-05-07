// Crea un nº aleatorio
function getRandomNumber(max) { 
    return Math.ceil(Math.random(3) * max); 
}

// Almacena y muestra en la consola su jugada (Computadora)
function guardarSuJugada(){
    let valorSuJugada = getRandomNumber(3);
    if (valorSuJugada === 1){
        console.log('Su jugada es: piedra');
    } else if (valorSuJugada === 2) {
         console.log('Su jugada es: papel');
    } else if (valorSuJugada === 3) {
        console.log('Su jugada es: tijera');
   }
}

// Almacena y muestra en la consola su jugada (Jugadora)

const tuJugada = document.getElementById('mano');
function guardarTuJugada() {
    const valorTuJugada = tuJugada.value;
    let tuNumero = 0;
    console.log('Tu jugada es:', valorTuJugada);
    if (valorTuJugada === "piedra"){
        tuNumero = 1;
    } else if (valorTuJugada === "papel") {
        tuNumero = 2;
    } else if (valorTuJugada === "tijera") {
        tuNumero = 3;
   }
}

// Almacena y muestra en la consola su jugada (Jugadora)
function compararResultados(valorTuJugada, valorSuJugada) {
    console.log(valorSuJugada);
    console.log(valorTuJugada);
    if (valorTuJugada === valorSuJugada){
    console.log("¡Empate!");
    } else if (valorTuJugada === 1 && valorSuJugada === 3) {
        console.log("Ganas: Piedra gana a tijera");
    } else if (valorTuJugada === 2 && valorSuJugada === 1) {
        console.log("Ganas: Papel gana a piedra");
    } else if (valorTuJugada === 3 && valorSuJugada === 2) {
        console.log("Ganas: Tijera gana a papel");
    } else if (valorTuJugada === 1 && valorSuJugada === 2) {
        console.log("Pierdes: Papel gana a piedra");
    } else if (valorTuJugada === 2 && valorSuJugada === 3) {
        console.log("Pierdes: Tijera gana a papel");
    } else if (valorTuJugada === 3 && valorSuJugada === 1) {
        console.log("Pierdes: Piedra gana a tijera");
    } 
}

// Acciona el juego al pulsar click y muestra ambos resultados
const botonJuego = document.querySelector ("button");
botonJuego.addEventListener ("click", (ev) => {
    console.log("Nueva jugada");
    guardarTuJugada();
    guardarSuJugada();
    compararResultados();
});