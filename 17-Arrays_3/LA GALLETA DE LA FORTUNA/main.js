/*
3- LA GALLETA DE LA FORTUNA

Tienes dos arrays,
- uno con los nombres de los estudiantes de este curso
- Y otro con galletas con mensajes de ‘vaticinio’, la cantidad que tú quieras (no hace falta que sea la misma
cantidad que estudiantes).
Debes buscar ALEATORIAMENTE un estudiante, y una frase de vaticinio,
Y mostrar el resultado del tipo:
"vaticinio para Ferdi:
Este fin de semana debes de escuchar tus sueños, porque contienen la clave para encontrar un tesoro cerca de tu casa"
*/

let nombreAleatorio = 0;
let fraseAleatoria = 0;
const nombres = ["Francisco", "Ferdi", "David", "Albert", "Juan Carlos", "Walid", "Herman", "Carla"];
const vaticinio = [];
vaticinio [0] = "La mejor manera de predecir el futuro es creándolo.";
vaticinio [1] = "El pasado no puede ser cambiado. El futuro está aún en tu poder.";
vaticinio [2] = "Procuremos más ser padres de nuestro porvenir que hijos de nuestro pasado.";
vaticinio [3] = "El futuro está oculto detrás de los hombres que lo hacen.";
vaticinio [4] = "El futuro comienza hoy, no mañana.";
vaticinio [5] = "Hemos preparado a los hombres para pensar en el futuro como una tierra prometida que alcanzan los héroes, no como lo que cualquiera alcanza a un ritmo de sesenta minutos por hora, haga lo que haga.";
vaticinio [6] = "No puedes escapar de la responsabilidad del mañana evadiéndola hoy.";
vaticinio [7] = "Me interesa el futuro porque es el sitio donde voy a pasar el resto de mi vida.";
vaticinio [8] = "Cambia tu vida hoy. No te juegues el futuro. Actúa ya, sin demora.";
vaticinio [9] = "Estudia el pasado si quieres pronosticar el futuro.";
vaticinio [10] = " Si se me diera la oportunidad de hacer un regalo a la siguiente generación, sería la capacidad de reírse cada cual de sí mismo.";
vaticinio [11] = "Cada vez que tomas una decisión, cambias el futuro.";
vaticinio [12] = "Es más divertido pensar en el futuro que cavar en el pasado.";
vaticinio [13] = "No todos los soñadores son ganadores, pero todos los ganadores son soñadores; tu sueño es la llave hacia tu futuro.";
vaticinio [14] = "Soñar con el futuro es mucho mejor que lamentarse por el pasado.";
vaticinio [15] = "No hay nada como un sueño para crear el futuro.";

function galleta(){

nombreAleatorio = Math.floor(Math.random()*nombres.length);
document.getElementById("nombre").innerHTML = "Hola " + nombres[nombreAleatorio] + ", recuerda:";
console.log("Resultado: " + nombres[nombreAleatorio]);

fraseAleatoria = Math.floor(Math.random()*vaticinio.length);
document.getElementById("vatic").innerHTML = vaticinio[fraseAleatoria];
console.log("Resultado: " + vaticinio[fraseAleatoria]);

}

