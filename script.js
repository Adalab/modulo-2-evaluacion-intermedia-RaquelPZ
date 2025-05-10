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
    return valorSuJugada;
}

// Almacena y muestra en la consola su jugada (Jugadora)

const tuMano = document.getElementById('mano');

function guardarTuJugada() {
    const tuJugada = tuMano.value;
    let valorTuJugada = 0;
    console.log('Tu jugada es:', tuJugada);
    if (tuJugada === "piedra"){
        valorTuJugada = 1;
    } else if (tuJugada === "papel") {
        valorTuJugada = 2;
    } else if (tuJugada === "tijera") {
        valorTuJugada = 3;
    }
    return valorTuJugada;
}

// Almacena y muestra en la consola su jugada (Jugadora)
function compararResultados(valorTuJugada, valorSuJugada) {
    let resultadoString;
    if (valorTuJugada === valorSuJugada){
        resultadoString = "¡Empate!";
    } else if (valorTuJugada === 1 && valorSuJugada === 3) {
        resultadoString = "Ganas: Piedra gana a tijera";
    } else if (valorTuJugada === 2 && valorSuJugada === 1) {
        resultadoString = "Ganas: Papel gana a piedra";
    } else if (valorTuJugada === 3 && valorSuJugada === 2) {
        resultadoString = "Ganas: Tijera gana a papel";
    } else if (valorTuJugada === 1 && valorSuJugada === 2) {
        resultadoString = "Pierdes: Papel gana a piedra";
    } else if (valorTuJugada === 2 && valorSuJugada === 3) {
        resultadoString = "Pierdes: Tijera gana a papel";
    } else if (valorTuJugada === 3 && valorSuJugada === 1) {
        resultadoString = "Pierdes: Piedra gana a tijera";
    } 
    return resultadoString;
}

// Contar y pintar puntos en el marcador
const boxJugadora = document.querySelector(".n_jugadora");
const boxComputadora = document.querySelector(".n_computadora");
let puntoJugadora = 0;
let puntoComputadora = 0;
    boxJugadora.innerHTML = puntoJugadora;
    boxComputadora.innerHTML = puntoComputadora;
function pintarMarcador(valorTuJugada, valorSuJugada) {
    if (valorTuJugada === 1 && valorSuJugada === 3) {
        puntoJugadora = puntoJugadora + 1;
    } else if (valorTuJugada === 2 && valorSuJugada === 1) {
        puntoJugadora = puntoJugadora + 1;
    } else if (valorTuJugada === 3 && valorSuJugada === 2) {
        puntoJugadora = puntoJugadora + 1;
    } else if (valorTuJugada === 1 && valorSuJugada === 2) {
        puntoComputadora = puntoComputadora + 1;
    } else if (valorTuJugada === 2 && valorSuJugada === 3) {
        puntoComputadora = puntoComputadora + 1;
    } else if (valorTuJugada === 3 && valorSuJugada === 1) {
        puntoComputadora = puntoComputadora + 1;
    } 
    boxJugadora.innerHTML = puntoJugadora;
    boxComputadora.innerHTML = puntoComputadora;
}

// Desactivar juego cuando alguien llegue a 10 puntos
const boxMaxJugadora = document.querySelector(".jugadora");
const boxMaxComputadora = document.querySelector(".computadora");
function pararJuego(puntoComputadora, puntoJugadora){
    if (puntoComputadora === 10|| puntoJugadora === 10) {
        boxFrase.innerHTML = "¡Fin del juego!";
        tuMano.disabled = true;
        botonJuego.disabled = true;
    }
    if (puntoComputadora === 10) {
        boxMaxJugadora.classList.add("chao");
    } else if (puntoJugadora === 10) {
        boxMaxComputadora.classList.add("chao");
    }
}

// Muestra la imagen de la eleccion de la computadora
const compuPiedra = document.querySelector(".i_piedra");
const compuPapel = document.querySelector(".i_papel");
const compuTijera = document.querySelector(".i_tijera");
function mostrarImagen(valorSuJugada){
    compuPiedra.classList.remove("ii_piedra");
    compuPapel.classList.remove("ii_papel");
    compuTijera.classList.remove("ii_tijera");
    if (valorSuJugada === 1) {
        compuPiedra.classList.add("ii_piedra");
    } else if (valorSuJugada === 2) {
        compuPapel.classList.add("ii_papel");
    } else if (valorSuJugada === 3) {
        compuTijera.classList.add("ii_tijera");
    }
}

// Acciona el juego al pulsar click y muestra ambos resultados
const botonJuego = document.querySelector ("button");
const boxFrase = document.querySelector (".frase");
botonJuego.addEventListener ("click", (ev) => {
    console.log("NUEVA JUGADA");
    let valorTuJugada = guardarTuJugada();
    console.log(valorTuJugada);
    let valorSuJugada = guardarSuJugada();
    console.log(valorSuJugada);
    let resultado = compararResultados(valorTuJugada, valorSuJugada);
    boxFrase.innerHTML = resultado;
    pintarMarcador(valorTuJugada, valorSuJugada);
    pararJuego (puntoComputadora, puntoJugadora);
    mostrarImagen (valorSuJugada);
});

//Aciona el reseteado de los puntos para comenzar
const botonReset = document.querySelector (".btn_reset");
botonReset.addEventListener ("click", () => {
    boxFrase.innerHTML = "¡Comencemos!";
    puntoJugadora = 0;
    puntoComputadora = 0;
    boxJugadora.innerHTML = puntoJugadora;
    boxComputadora.innerHTML = puntoComputadora;
    boxMaxJugadora.classList.remove("chao");
    boxMaxComputadora.classList.remove("chao");
    tuMano.disabled = false;
    botonJuego.disabled = false;
    compuPiedra.classList.remove("ii_piedra");
    compuPapel.classList.remove("ii_papel");
    compuTijera.classList.remove("i_tijera");
});

// //Posibilidad de poner tu nombre de jugadora
// const boxNombre = document.querySelector (".name_jugadora");
// const botonNombre = document.querySelector (".btn_ok");
// const escribeNombre = document.querySelector (".tu_nombre");
// botonNombre.addEventListener ("click", () => {
//     boxFrase.innerHTML = "nombre";
//     boxNombre.innerHTML = escribeNombre.value;
//     boxNombre = escribeNombre.value;
// });