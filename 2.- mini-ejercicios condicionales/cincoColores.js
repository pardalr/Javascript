// 2 - CINCO COLORES
// Se le pide al usuario que escoja un color (azul, verde, rojo, amarillo y morado) y darle una respuesta en relación al color elegido. Ejemplo: "el azul es como el mar, siempre que el cielo sea azul (y sea de día)". Dar otra respuesta en el caso que NO elija ninguno de los colores anteriores.

let color = prompt("Elije uno de estos colores: azul, verde, rojo, amarillo o morado: ");

if (color == "azul"){
    document.write("Azul es el cielo, azul es el mar, azul la ballena y azul el calamar.");
} else if (color == "verde"){
    document.write("Verde es la pera, verde la lechuga, verde la hoja y verde la tortuga.");
} else if (color == "rojo"){
    document.write("Rojo es el tomate, rojo es el fresón, roja la sandía y... rojo el corazón.");
} else if (color == "amarillo"){
    document.write("Amarillo es el sol, amarillo el limón, amarillo es el pollito, amarillo el girasol.");
} else if (color == "morado"){
    document.write("Morado el sombrero, morado la flor, morado el sonajero y morado el bañador.");
} else {
    document.write("Valor introducido no válido!");
}





