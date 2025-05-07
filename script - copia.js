// Crea un nº aleatorio
function getRandomNumber(max) { 
    return Math.ceil(Math.random(3) * max); 
}

// Almacena y muestra en la consola su jugada (Computadora)
function guardarSuJugada(){
    const suJugada = getRandomNumber(3);
    if (suJugada === 1){
        console.log('Su jugada es: piedra');
    } else if (suJugada === 2) {
         console.log('Su jugada es: papel');
    } else if (suJugada === 3) {
        console.log('Su jugada es: tijera');
   }
}

// Almacena y muestra en la consola su jugada (Jugadora)
function guardarTuJugada() {
    const tuJugada = document.getElementById('mano');
    const valorTuJugada = tuJugada.value;
    let tuNumero;
    console.log('Tu jugada es:', valorTuJugada);
    if (tuJugada === "piedra"){
        tuNumero = 1;
    } else if (tuJugada === "papel") {
        tuNumero = 2;
    } else if (tuJugada === "tijera") {
        tuNumero = 3;
   }
}

// Acciona el juego al pulsar click y muestra ambos resultados
const botonJuego = document.querySelector ("button");
botonJuego.addEventListener ("click", (ev) => {
    guardarTuJugada();
    guardarSuJugada();
    console.log(tuNumero);

});