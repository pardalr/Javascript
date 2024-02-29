/*
TIENDA MUEBLES *

Tienes un super-catálogo de 4 muebles:
- Silla Mackintosh
- Silla IKEA
- Mesa Roble
- Mesa IKEA
Encontrar con las preguntas adecuadas  (prompts) y responder s/n y encontrar cuál es el mueble elegido
Que sea el mínimo de preguntas.
Usar condicionales con esas respuestas para encontrar el mueble correcto.
Mostrar respuesta (mueble correcto) en alert o en pantalla.
*/


let mueble  = "";
let pregunta1 = "";
let pregunta2 = "";

pregunta1 = prompt("¿Es el mueble marca IKEA? (responde S/N)").toLowerCase();
pregunta2 = prompt("¿Es el mueble una silla? (responde S/N)").toLowerCase();

if (pregunta1 == "s" && pregunta2 == "s"){

    document.write("<h1>¡Has elegido la Silla de IKEA!<h1>");
    
} else if (pregunta1 == "s" && pregunta2 == "n"){
    
    document.write("<h1>¡Has elegido la Mesa de IKEA!<h1>");

} else if (pregunta1 == "n" && pregunta2 == "s"){

    document.write("<h1>¡Has elegido la Silla de Mackintosh!<h1>");

} else if (pregunta1 == "n" && pregunta2 == "n"){

    document.write("<h1>¡Has elegido la Mesa de Mackintosh!<h1>");

} else {

    document.write("<h1>Sólo debes responder S o N, carajo<h1>");

}