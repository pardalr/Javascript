    //SUMA NÚMEROS
/*
- Se te piden dos números y te muestra la suma
- Te pregunta después: “¿quieres continuar (S/N)?”
- Si es que sí, vuelves a preguntar los números y sumarlos
- Si es que no, sales del bucle y te despides.
Puedes probar primero a hacer sólo la lógica mediante console.log y después trabajar la presentación:
- ya sea mediante prompt/alerts (nivel 1)
- o mediante el uso del DOM (getElementById/ querySelector/ .value/ innerHTML) (nivel 2)
*/

let num1 = 0;
let num2 = 0;
let resultado = 0;

let continuar = "S";


    while (continuar == "S"){
    num1 = parseInt(prompt("Introduce primer número de la suma: "));
    num2 = parseInt(prompt("Introduce segundo número de la suma: "));
    resultado = num1 + num2;
    continuar = prompt("El resultado de la operación es: " + resultado + " ¿Quieres continuar (S/N)?");
    continuar = continuar.toUpperCase();
    }




if (continuar == "N"){
    document.write("<br><hr>¡Hasta la próxima!");
} else {
    alert("¡Respuesta incorrecta!");
    
}



