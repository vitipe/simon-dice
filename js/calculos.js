/*
    TO-DO

1.
2. Tirare el pull a Fabri a ver que te dice.
3. Armar un leaderboard
4. Ver de poner las variables globales adentro de algunas funciones  (que pasa si dos functions la comparten?)
5. Poner todas las functions en calculos y armar un .js nuevo con lo que es manejo del DOM? es asi?
6. Armar Bootstrap, crear un branch nuevo o usar este mismo y dejar el juego andando bien en el master.


Modos de juego a ver si agrego?:
[X] Continuar desde donde le erraste
[ ] Aumentar la velocidad a la cual te tira todos los colores
    -Agregar boton de aumentar velocidad
[ ] modo inverso o algo asi?

*/

let jugadaUsuario = []; //ver de mandarlo adentro de alguna function, es la unica variable global que me quedó
let jugadaComputadora = crearJugadaComputadora();
bloquearClickUsuario();

function obtenerNumeroRandom() {
    let numeroRandom = Math.floor(Math.random() * 4 + 1); //El valor tiene que ser entre 1 y 4
    return numeroRandom;
}

function colorearBotones(jugadaComputadora) {
    let DELAY_COLOR_JUGADA = 500;
    let DELAY_COLOR_NORMAL = 1000;

    bloquearClickUsuario();

    for (let i = 0; i < jugadaComputadora.length; i++) {

        let $botonEnJuego = document.querySelector(`#div-${jugadaComputadora[i]}`);

        setTimeout(function() {
            $botonEnJuego.className = 'en-juego';
        }, DELAY_COLOR_JUGADA);

        setTimeout(function() {
            $botonEnJuego.className = '';
        }, DELAY_COLOR_NORMAL);

        DELAY_COLOR_JUGADA += 1000;
        DELAY_COLOR_NORMAL += 1000;
    }

    setTimeout(function() {
        desbloquearClickUsuario();
    }, DELAY_COLOR_NORMAL - 1000);
}

function crearJugadaComputadora() {
    let turnoUsuario = 1;
    let jugadaComputadora = [];

    for (let i = 0; i < turnoUsuario; i++) { //probar usar ForEach?
        jugadaComputadora.push(obtenerNumeroRandom());
    }

    return jugadaComputadora;
}

function juegaComputadora() {
    colorearBotones(jugadaComputadora);
}

function resetearJugadaUsuario(jugadaUsuario) {

    for (let i = 1; i <= jugadaUsuario.length;) {
        jugadaUsuario.pop(jugadaUsuario);
    }
}

function sumadorTurnoUsuario() {
    let turnoUsuario = 0;
    for (let i = 0; i < jugadaComputadora.length; i++) {
        turnoUsuario++
    }
    document.querySelector('#turno-usuario').textContent = "Turno #" + turnoUsuario;
}

function contadorPuntosUsuario() { //esto y lo de arriba no los puedo hacer en un solo calculo?
    let puntosUsuario = 0;
    for (let i = 0; i < jugadaComputadora.length; i++) {
        puntosUsuario++
    }

    return puntosUsuario - 1;
}

function mostrarErrorJugada() {
    document.querySelector('#error-jugada').className = '';
    document.querySelector('#boton-continuar-juego').className = '';
    document.querySelector('#boton-reinicio-juego').className = '';
    document.querySelector('#error-jugada').textContent = `No era esa jugada, pero lograste ${contadorPuntosUsuario()} puntos!`;
}

function ocultarErrorJugada() {
    document.querySelector('#error-jugada').className = 'oculto';
    document.querySelector('#boton-continuar-juego').className = 'oculto';
    document.querySelector('#boton-reinicio-juego').className = 'oculto';
}

function ocultarBotonJugar() {
    document.querySelector('#boton-jugar').className = 'oculto';
}

function bloquearClickUsuario() {
    document.querySelector('#div-1').style.pointerEvents = "none";
    document.querySelector('#div-2').style.pointerEvents = "none";
    document.querySelector('#div-3').style.pointerEvents = "none";
    document.querySelector('#div-4').style.pointerEvents = "none";

    document.querySelector('#tablero-juego').style.borderStyle = "solid";
    document.querySelector('#tablero-juego').style.borderColor = "black";
    document.querySelector('#tablero-juego').style.borderRadius = "2px";

}

function desbloquearClickUsuario() {
    document.querySelector('#div-1').style.pointerEvents = "auto";
    document.querySelector('#div-2').style.pointerEvents = "auto";
    document.querySelector('#div-3').style.pointerEvents = "auto";
    document.querySelector('#div-4').style.pointerEvents = "auto";

    document.querySelector('#tablero-juego').style.borderStyle = "";
    document.querySelector('#tablero-juego').style.borderColor = "";
    document.querySelector('#tablero-juego').style.borderRadius = "";
}

function colorearClicksUsuario(divClickeado) {
    setTimeout(function() {
        document.querySelector(divClickeado).className = 'clickeado';
    }, 0);

    setTimeout(function() {
        document.querySelector(divClickeado).className = '';
    }, 75);
}

function chequearResultadoJugada(jugadaUsuario, jugadaComputadora) { //Subdividir en functions?
    let cantidadAciertos = 0;

    for (let i = 0; i < jugadaUsuario.length; i++) {

        if (jugadaUsuario[i] === jugadaComputadora[i]) {
            cantidadAciertos++;
        } else {
            mostrarErrorJugada();
        }
    }

    if (cantidadAciertos === jugadaComputadora.length) {
        resetearJugadaUsuario(jugadaUsuario);
        sumadorTurnoUsuario();
        contadorPuntosUsuario();
        jugadaComputadora.push(obtenerNumeroRandom());
        juegaComputadora();
    }
}

document.querySelector("#boton-jugar").onclick = function() {
    juegaComputadora();
    ocultarBotonJugar();
};

document.querySelector('#div-1').onclick = function() {
    colorearClicksUsuario('#div-1');
    jugadaUsuario.push(1);
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#div-2').onclick = function() {
    colorearClicksUsuario('#div-2');
    jugadaUsuario.push(2)
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#div-3').onclick = function() {
    colorearClicksUsuario('#div-3');
    jugadaUsuario.push(3)
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#div-4').onclick = function() {
    colorearClicksUsuario('#div-4');
    jugadaUsuario.push(4)
    chequearResultadoJugada(jugadaUsuario, jugadaComputadora);
}

document.querySelector('#boton-continuar-juego').onclick = function() {
    ocultarErrorJugada();
    resetearJugadaUsuario(jugadaUsuario);
    juegaComputadora();

    return false;
}
