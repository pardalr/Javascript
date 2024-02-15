/*1- BECA ESTUDIANTE

Para conseguir una beca en Hack-Iron el estudiante debe cumplir las siguientes condiciones:

1- Que sea mayor o igual 18 y resida en Barcelona

2- O bien, que sea mayor de 30 años y tenga familia numerosa

3- O bien, Que tenga entre 12 y 18 años y sea un geni@ de la programación

Recuerda que puedes usar los métodos toLowerCase() o toUpperCase() para facilitar la comparación de strings.*/

let edad = parseInt(prompt("Introduce tu edad: "));
let residencia = prompt("Introduce tu ciudad: ");
residencia = residencia.toLowerCase();
let familiaNumerosa = prompt("Eres familia numerosa? (responde si o no)");
familiaNumerosa = familiaNumerosa.toLowerCase();
let genio = prompt("Eres un genio de la programación? (responde si o no)");
genio = genio.toLowerCase();


if ((edad>=18 && residencia == "barcelona")||(edad>30 && familiaNumerosa == "si")||((edad>=12 && edad<=18) && genio == "si")){
    document.write("<h1>Felicidades! Cumples los requisitos para la beca de Iron-Hack!<h1>");
} else {
    document.write("Lo sentimos, no cumples los requisitos para la beca de Iron-Hack");
}