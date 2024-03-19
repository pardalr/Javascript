/*
Crea un input, un div vacío y un array de colores.

Cuando el usuario escriba en el input, con cada letra, debe cambiar el color de fondo de ese DIV. Cuando llegue al último color de la lista, que vuelva a empezar por el primero
*/



const colores = [];
colores [0] = '#FFFFFF'; //blanco
colores [1] = '#FFFF00'; //amarillo
colores [2] = '#00FF00'; //verde
colores [3] = '#66FFFF'; //cian
colores [4] = '#0000FF'; //azul
colores [5] = '#9900FF'; //violeta
colores [6] = '#FF00FF'; //rosa
colores [7] = '#FF0000'; //rojo
colores [8] = '#330000'; //marrón
colores [9] = '#000000'; //negro
let i = 0;

const texto = document.getElementById("texto");

texto.addEventListener('keyup', color);



function color(){
console.log("Function");
    if ( i<colores.length){

        console.log("colores " + i);
        document.getElementById("circulo").style.backgroundColor= colores[i];
        i++;
    } else {
        i=0;
        console.log("colores " + i);
        document.getElementById("circulo").style.backgroundColor= colores[i];
        i++;
    }

}