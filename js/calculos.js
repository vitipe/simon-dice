//TO-DO

//Hacerlo con bootstrap?

//Crear una base de 4 botones en el centro con 4 colores diferentes. A eso agregar un boton "jugar".

/*
En base a la interfaz de 4 botones.

Tendria que haber un boton iniciar. Al hacer click, comienza el juego.

Por cada boton hay un color y un ID (1,2,3,4), al hacer click en "jugar" tendria que tomar uno de los botones random y cambiarle el color.
Al mismo tiempo, crear un array que contenga el/los numeros y que haga un random y en base a ese random ilumine el boton.
Si es correcto, sumar a ese array otro random 1,2,3,4 y que ilumne los dos seguidos del otro. Ademas crear un contador de "correctos"
Si es incorrecto, msj de que el usuario le erró y mostrar cuantas correctas llegó a hacer.
Agregar set.timeout para que tarde entre mostrar uno y otro. ver como hacer para que el boton quede "encendido" medio segundo o algo asi.
eventListener para escuchar la respuesta del usuario y que la espere la funcion?


Usuario clickea boton "jugar"
Turno computadora:
    dentro de un array vacío "turnoComputadora" pushear un numero random entre 1 y 4
    Por cada numero que hay adentro del array:
        tomar ese numero y cambiar de color ese numero (opacity?)
        despues de ¿1 seg? volver a cambiar ese color al original
        Terminar? esperar? ¿Como pasar al turno del usuario?

turnoUsuario:
    crear un array ¿u objeto? llamado "turnoUsuario" vacío
    por cada click que hace el usuario, ingresar el id? o name de ese boton al array turnoUsuario
    if turnoUsuario.length = turnoComputadora.length:
        if turnoUsuario = turnoComputadora
            sumar un nuevo valor random entre 1 y 4 al array de turnoComputadora
            gatillar turnoComputadora de nuevo
            sumar 1 al n° de turno (poner un numero de turno visible arrancando de 1)
        if turnoUsuario =! turnoComputadora
            mostrar mensaje de que el usuario le erró
            resetear turno
            resetear juego (vaciar turnoComputadora?)
            pedir hacer click en jugar de nuevo

*/

let $divPrueba = document.querySelector('#div-prueba');

$divPrueba.onclick = function() {
    console.log('hola!');
}

