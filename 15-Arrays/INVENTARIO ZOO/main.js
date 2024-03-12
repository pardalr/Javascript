// 1- INVENTARIO DEL ZOO

// Crea un array zoo con al menos 5 animales.

// Imprime el array en consola, e ir imprimiendo a cada paso:

// Añade dos al final.

// Pero resta uno al final.

// Cambia el tercero por otro.

// Imprime el total de animales con la propiedad length.

// Recorre con un bucle FOR todo el array e imprímelo en consola.



const animales = ["Cabra", "Oveja", "Higuana", "Mapache", "Jirafa", "Cocodrilo"];

console.log(animales);

animales.push("Gato", "Conejo");

console.log(animales);

animales.pop();

console.log(animales);

animales[2] = "Rata";

document.write("Hay un total de " + animales.length + " animales en este zoo. <br>");

for(let i=0; i<animales.length; i++){
    document.write(i+1 + " - " + animales[i] + "<br>");
}

console.log(animales);