/*
1- ADIVINA EL NUMERO
Se genera un número aleatorio del 1 al 10  (o del 1 al 20 si prefieres).
En un bucle do...while:
Te pregunta (puede ser un prompt) ‘qué número es’ ?.
Y te sigue preguntando hasta que lo adivines.
Cuando lo adivines, mensaje de “Felicidades, has acertado!”.
*/


function numAleatorio (min, max){
    const numMin = Math.ceil(min);
    const numMax = Math.floor(max);
    return Math.floor(Math.random() * (numMax - numMin) + numMin);
}

let numeroAleatorio = numAleatorio(1, 10);
let numUser = 0;

do {
    
    numUser = parseInt(prompt("Introduce un número del 1 al 10: "));
    
} while (numUser != numeroAleatorio);

document.write("Correcto! El número era: " + numeroAleatorio);
