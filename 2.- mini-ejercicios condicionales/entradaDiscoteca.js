// 1- ENTRADA DISCOTECA
// A la entrada a una discoteca, se pregunta al cliente qué edad tiene. Darle una respuesta diferente si la edad es mayor, menor o igual a 18 años.

let edad = parseInt(prompt("Indica tu edad: "));

if (edad == 18){
    document.write("Uff! Entras por los pelos!");
} else if (edad > 18){
    document.write("Pasa, perro viejo");
} else {
    document.write("Vuelve cuando cumplas los 18!");
}