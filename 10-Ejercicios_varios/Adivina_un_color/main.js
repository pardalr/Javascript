/*
ADIVINAR UN COLOR
Creas una variable con un color que tú decidas.
Sigue preguntando el programa hasta que el usuario adivine el color
Si lo adivina, das mensaje de “felicidades!”
*/


const violeta = "violeta";
let colores = "";

while (colores != violeta){

    colores = prompt("Adivina el color: ").toLowerCase();

}

document.write("<h1>¡Felicidades!<h1>");