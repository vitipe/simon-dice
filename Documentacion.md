# Documentation for the "Simon Says" from r/argentinaPrograma

Once the class N°8 of the course was finished, the homework was to do a game, spefically a "Simon says". This game would be later reviewed in the class n°10 by Fabri.

My decision for the "package" to use was JS vanilla, HTML and CSS. At the same time Bootstrap was mentioned, but in my case first I tried to do it with only the "vanilla" approach, and later would integrate bootstrap and in that way notice the differences and new things that this package gives.

##My reasoning for the game at first was something like this:

###Website structure:
The site would have a header with a welcome message, four "buttons" (element's like div's would do) each of different colors, a <p> element with the count of the turn and a "play" button. 

###Logic of the game:



### TO-DO

1. Mensaje que diga que vas mejorando si aumentaste los puntos con respecto a la ultima jugada?
2. Mostrarselo a canal clase 10
3. Armar un leaderboard
4. Ver de poner las variables globales adentro de algunas funciones  (que pasa si dos functions la comparten?)
5. Poner todas las functions en calculos y armar un .js nuevo con lo que es manejo del DOM? es asi?
6. Armar Bootstrap, crear un branch nuevo o usar este mismo y dejar el juego andando bien en el master.

**Modos de juego a ver si agrego?:**
[X] Continuar desde donde le erraste
[ ] Aumentar la velocidad a la cual te tira todos los colores
    -Agregar boton de aumentar velocidad
[ ] modo inverso o algo asi?

**###Cosas a mejorar a partir de ver la clase 10:**
1. Invertir opacity colores
2. Ver transition 500ms para que se coloreen los cuadros
3. function reiniciadora: vuelve jugadaUsuario, jugadaComputadora y turno a los valores estándar.
4. Usar math.ceil en numero random y con eso puedo sacar el "+1"
5. Agregar bootstrap, armar el tablero y el header todo con el grid de bootstrap.