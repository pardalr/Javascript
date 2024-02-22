//1- Dentro de un bucle, ejecutar x veces (x según usuario) una función que te pida saludo (“Hola”, “Adiós”, etc) y nombre (“Marga”, “Carol”, etc ) , y al final te muestre los resultados en pantalla: Hola Marga, Adiós Carol (líneas separadas).

let cantidad = parseInt(prompt("¿Cuántos saludos quieres introducir?"));

for (i=0; i<cantidad; i++){
    let saludo = prompt("Introduce el saludo: ");
    let nombre = prompt("Introduce el nombre: ");
    document.write(saludo + " " + nombre + ". <hr>");
}