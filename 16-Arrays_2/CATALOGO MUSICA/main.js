function borrarPrimero(){
    bandas.shift();
    document.getElementById("lista").innerHTML = "";
    for (let i=0; i<=bandas.length-1; i++){
        document.getElementById("lista").innerHTML += (i + " - " + bandas[i] + "<br>");
    }
}

function borrarUltimo(){
    bandas.pop();
    document.getElementById("lista").innerHTML = "";
    for (let i=0; i<=bandas.length-1; i++){
        document.getElementById("lista").innerHTML += (i + " - " + bandas[i] + "<br>");
    }
}


function borrarCambiar(){
    
    console.log("borrarCambiar");
    let decision = prompt("¿Quieres borrar, cambiar o añadir banda?").toLocaleLowerCase();
    if (decision == "borrar"){
        console.log("borrar");
        let index = parseInt(prompt("Indica la posición (del 0 al " + (indice - 1) +""));
        bandas.splice(index, 1);
    } else if (decision == "cambiar"){
        let cambio = prompt("¿Qué banda quieres sustituir?");
        let sustituir = prompt("¿Por cuál la quieres sustituir?");
        let resultado = bandas.indexOf(cambio);
        bandas[resultado] = sustituir;
    } else if (decision == "añadir") {
        let añadir = prompt("¿Qué banda quieres añadir?");
        let posicion = parseInt(prompt("¿En qué posición del índice quieres añadirla?"));
        let numero = parseInt(prompt("¿Cuántas bandas contíguas quieres eliminar?"));
        bandas.splice(posicion, numero, añadir);
    } else {
        alert("Elige una de las tres opciones, carajo!");
    }

    document.getElementById("lista").innerHTML = "";
    for (let i=0; i<=bandas.length-1; i++){
        document.getElementById("lista").innerHTML += (i + " - " + bandas[i] + "<br>");
    }

}



function consultarIndice(){
    let cambio = prompt("¿De qué banda quieres conocer el índice?");
    let resultado = bandas.indexOf(cambio);    
    document.getElementById("lista").innerHTML = ("El índice de " + cambio + " es " + resultado);
}




function consultarBanda(){
    
    let cambio = prompt("A qué banda corresponde el índice: ");
    let resultado = bandas[cambio];    
    document.getElementById("lista").innerHTML = ("El índice " + cambio + " corresponde a " + resultado);

}

function mostrarTodos(){

    document.getElementById("lista").innerHTML = "";
    for (let i=0; i<=bandas.length-1; i++){
        document.getElementById("lista").innerHTML += (i + " - " + bandas[i] + "<br>");
    }

}


const bandas = ["Nirvana", "Beatles", "AC/DC", "Rolling Stones", "U2", "Beach Boys"];
let indice = bandas.length;
for (let i=0; i<=bandas.length-1; i++){
    document.getElementById("lista").innerHTML += (i + " - " + bandas[i] + "<br>");
}
