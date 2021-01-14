/*
    TO-DO

1. Que al jugar de nuevo arme un patron random diferente y no el mismo (boton resetear y un form)
2. Un div que tape o algo para que no se pueda hacer click mientras la computadora juega.
4. Hacer que vaya chequeando uno a uno los valores del array. Si no, por ejemplo, tengo un array de 4 elementos, y si erro en el segundo de todas maneras tengo que completar 4 para que detecte el error.
5. Armar un leaderboard


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

function chequearResultadoJugada(jugadaUsuario, jugadaComputadora) {

    if (jugadaUsuario.length === jugadaComputadora.length) {
        let contadorAciertos = 0;
        for (let i = 0; i<jugadaComputadora.length; i++) {
            if (jugadaUsuario[i] === jugadaComputadora[i]) {
                contadorAciertos++;
            }
        }

        if (contadorAciertos === jugadaComputadora.length){
            resetearJugadaUsuario(jugadaUsuario);
            jugadaComputadora.push(obternerNumeroRandom());
            sumadorTurnoUsuario();
            contadorPuntosUsuario();
            juegaComputadora();
        } else {
            document.querySelector('#error-jugada').className = '';
            document.querySelector('#boton-continuar-juego').className = '';
            document.querySelector('#boton-reinicio-juego').className = '';
            document.querySelector('#error-jugada').textContent = "Le erraste, pero lograste " + contadorPuntosUsuario() + " puntos!";
        } 
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
    document.querySelector('#error-jugada').className = 'oculto';
    document.querySelector('#boton-continuar-juego').className = 'oculto';
    document.querySelector('#boton-reinicio-juego').className = 'oculto';
    resetearJugadaUsuario(jugadaUsuario);
    juegaComputadora();

    return false;
}



