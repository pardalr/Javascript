/*
2- ACCESO A DATOS EN BUCLES MULTI-DIMENSIONALES
Tienes estos dos arrays:

const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];

const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

Imprime en consola o pantalla:

- El número 26, el numero 134, el numero 92

- El nombre "Rosa", el nombre "Roberto"

- Todos los nombres de mascotas, a) en una línea y b) en diferentes líneas
*/

const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];

const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

console.log("medidas: " + medidas[2][2][1] + ", " + medidas[0][1] + ", " + medidas[2][3]);
console.log("nombre: " + nombres[2][0]+ ", " + nombres[0][2]);
