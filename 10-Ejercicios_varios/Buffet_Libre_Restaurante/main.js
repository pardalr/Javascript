/*
BUFFET LIBRE RESTAURANTE

    Estás en un restaurante con buffet libre y vas pidiendo platos.
    Escribes lo que se ha pedido cada vez.
    Ejemplo: qué quieres comer? Respuesta: lentejas. En pantalla: “Has pedido lentejas”. Que se vaya viendo todo lo que se va pidiendo.
    Escribir ‘salir’ para salir.
    Cuando salgas, decir la cantidad total de platos que has comido: “has pedido 7 platos. Que aproveche!”
NOTA: Cuando lleves 5 platos, tiene que dar el mensaje “vas a reventar!”
*/

let exit = "";
let i = 0;
let platos = "";

while (exit != "salir"){

    platos = prompt("Qué quieres comer?");
    exit = platos.toLowerCase(); 
    i++;

    if (exit != "salir"){
    alert("Has pedido " + platos);
    document.getElementById("lista").innerHTML += ("<h1>" + i + " - " + platos + "<h1><br>");
    }
    
    if (i == 5){
        alert("Vas a reventar!!");
    }
}