/*
TO-DO
1.  resetearJugadaUsuario no elimina todos los elementos del array jugadaUsuario
2. la computadora no sigue agregando colores a la jugada
4. Armar el contador de turno en el html y la function que lo actualice

*/


let jugadaUsuario = [];


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

function crearJugadaComputadora() {
    let jugadaComputadora = [];
    let turnoUsuario = 1;
    
    for (let i = 0; i<turnoUsuario; i++) { //probar usar ForEach?
        jugadaComputadora.push(obternerNumeroRandom()); 
        
    }

    turnoUsuario++;

    return jugadaComputadora;
}

let jugadaComputadora = crearJugadaComputadora();

function juegaComputadora() {
    return colorearBotones(jugadaComputadora);
}

function resetearJugadaUsuario(jugadaUsuario) {

    for (let i = 1; i <= jugadaUsuario.length;) {
        jugadaUsuario.pop(jugadaUsuario);
    }
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
            juegaComputadora();
        } else {
            document.querySelector('#error-jugada').className = '';
            document.querySelector('#boton-reinicio-juego').className = '';
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

document.querySelector('#boton-reinicio-juego').onclick = function() {
    document.querySelector('#error-jugada').className = 'oculto';
    document.querySelector('#boton-reinicio-juego').className = 'oculto';
    resetearJugadaUsuario(jugadaUsuario);
    juegaComputadora();
}

