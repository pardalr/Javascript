/*
1- TABLAS DE MULTIPLICAR

El usuario entra un intervalo de dos números entre el 1 y el 10 (el segundo número debe ser mayor
que el primero).
El programa muestra en orden, con un título, la tabla de multiplicar del primer número, y luego el siguiente, hasta
el último.

Ej: si entra 5 y 7, mostrará las tablas del 5, del 6 y del 7.
*/

const tabla = [];
let num1 = parseInt(prompt("Introduce la primera tabla de múltiplicar que quieres visualizar: "));
let num2 = parseInt(prompt("Introduce la última tabla de multiplicar que quieres visualizar: "));
let lim = parseInt(prompt("¿De cuántas multiplicaciones quieres que sea cada tabla? "));

for (let i=0; i<=num2; i++){
    tabla.push([]);
}

for (let i=num1; i<=num2; i++){
    document.getElementById("multiplicar").innerHTML += "<hr>&emsp;&emsp;Tabla del "+ i +":&emsp;&emsp;<br><br>";

    for (let a=0; a<=lim-1; a++){
        tabla[i][a] = i * (a + 1);
        document.getElementById("multiplicar").innerHTML +="&emsp;&emsp;" + i + " x " + (a + 1) + " = " + tabla [i][a] + "&emsp;&emsp;<br>";
    }

    document.getElementById("multiplicar").innerHTML += "<br><br>";


    

}

 

