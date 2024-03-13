/*
1- TABLAS DE MULTIPLICAR

El usuario entra un intervalo de dos números entre el 1 y el 10 (el segundo número debe ser mayor
que el primero).
El programa muestra en orden, con un título, la tabla de multiplicar del primer número, y luego el siguiente, hasta
el último.

Ej: si entra 5 y 7, mostrará las tablas del 5, del 6 y del 7.
*/

const tabla = [[],[],[],[],[],[],[],[],[],[]];
let num1 = parseInt(prompt("Introduce el primer número del intervalo de dos números entre el 1 y el 10: "));
let num2 = parseInt(prompt("Introduce el primer número del intervalo de dos números entre el 1 y el 10: "));

for (let i=num1; i<=num2; i++){

    for (let a=0; a<=9; a++){
        tabla[i][a] = i * (a + 1);
        // console.log(i*a);
    }

}

console.log(tabla);
 

