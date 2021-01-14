/*
    TO-DO

1. Un div que tape o algo para que no se pueda hacer click mientras la computadora juega.
2. Ocultar boton "Jugar" al hacerle click.
3. Armar un leaderboard
4. Ver de poner las variables globales adentro de algunas funciones  (que pasa si dos functions la comparten?)
5. Armar Bootstrap


Modos de juego a ver si agrego?:
Continuar desde donde le erraste
Aumentar la velocidad a la cual te tira todos los colores
modo inverso o algo asi?

*/

let jugadaUsuario = []; //ver de mandarlo adentro de alguna function

function obternerNumeroRandom() {
    let numeroRandom = Math.floor(Math.random() * 4 + 1); //El valor tiene que ser entre 1 y 4
    return numeroRandom;
}

function colorearBotones(jugadaComputadora) {
    let delayColores = 1000;
    let delayReseteo = 2000;

    for(let i = 0; i<jugadaComputadora.length;i++) {

        let $botonEnJuego = document.querySelector(`#div-${jugadaComputadora[i]}`);
        
        setTimeout(function() {
            $botonEnJuego.className = 'en-juego';
        }, delayColores);

        setTimeout(function() {
            $botonEnJuego.className = '';
        }, delayReseteo);

        delayColores += 1500;
        delayReseteo += 1500;
    }
}

let turnoUsuario = 1;

function crearJugadaComputadora(turnoUsuario) {
    let jugadaComputadora = [];
    
    for (let i = 0; i<turnoUsuario; i++) { //probar usar ForEach?
        jugadaComputadora.push(obternerNumeroRandom());    
    }

    return jugadaComputadora;
}

let jugadaComputadora = crearJugadaComputadora(turnoUsuario);

function juegaComputadora() {
    return colorearBotones(jugadaComputadora);
}

function resetearJugadaUsuario(jugadaUsuario) {

    for (let i = 1; i <= jugadaUsuario.length;) {
        jugadaUsuario.pop(jugadaUsuario);
    }
}

function sumadorTurnoUsuario() {
    let turnoUsuario = 0;
    for (let i = 0; i<jugadaComputadora.length; i++) {
        turnoUsuario++
    }
    document.querySelector('#turno-usuario').textContent = "Turno #" + turnoUsuario;
}

function contadorPuntosUsuario() {
    let puntosUsuario = 0;
    for (let i = 0; i<jugadaComputadora.length; i++) {
        puntosUsuario++
    }

    return puntosUsuario - 1;
}

function mostrarErrorJugada() {
    document.querySelector('#error-jugada').className = '';
    document.querySelector('#boton-continuar-juego').className = '';
    document.querySelector('#boton-reinicio-juego').className = '';
    document.querySelector('#error-jugada').textContent = "No era esa jugada, pero lograste " + contadorPuntosUsuario() + " puntos!";
}

function ocultarErrorJugada() {
    document.querySelector('#error-jugada').className = 'oculto';
    document.querySelector('#boton-continuar-juego').className = 'oculto';
    document.querySelector('#boton-reinicio-juego').className = 'oculto';
}

function chequearResultadoJugada(jugadaUsuario, jugadaComputadora) {
    let cantidadAciertos = 0;
    
    for (let i = 0; i<jugadaUsuario.length; i++) {

        if (jugadaUsuario[i] === jugadaComputadora[i]) {
            cantidadAciertos++;
        } else {
            mostrarErrorJugada();
        }
    }
    
    if (cantidadAciertos === jugadaComputadora.length){
        resetearJugadaUsuario(jugadaUsuario);
        jugadaComputadora.push(obternerNumeroRandom());
        sumadorTurnoUsuario();
        contadorPuntosUsuario();
        juegaComputadora();
    } 
}

document.querySelector("#boton-jugar").onclick = function() {
    juegaComputadora();
};


document.querySelector('#div-1').onclick = function(){
    jugadaUsuario.push(1);
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#div-2').onclick = function(){
    jugadaUsuario.push(2)
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#div-3').onclick = function(){
    jugadaUsuario.push(3)
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#div-4').onclick = function(){
    jugadaUsuario.push(4)
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#boton-continuar-juego').onclick = function() {
    ocultarErrorJugada();
    resetearJugadaUsuario(jugadaUsuario);
    juegaComputadora();

    return false;
}



