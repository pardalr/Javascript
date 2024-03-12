// 2- LISTA PASAJEROS TITANIC

// ¡Pasajeros a bordo!

// Tienes un listado con doce nombres de pasajeros para viajar en el Titanic.

// - Los dos últimos se dan de baja porque les da mala espina

// - Lo que aprovechan dos nuevos pasajeros para apuntarse.

// - El segundo pasajero se pone enfermo y lo sustituyes por uno nuevo.

// - Imprimes la lista definitiva, te santiguas y les deseas buena suerte.

// +EXTRA: Probar a hacerlo de forma visual en la página (innerHTML, botones, etc).

// +EXTRA: Puedes empezar a partir de una lista ya creada, o intentar crearla añadiendo pasajeros mediante un bucle for o while, o do...while. Puedes en este segundo caso añadir pasajeros mediante un input en pantalla (sin bucle).

function registrar(){

    if (nombres.length < 4) {

    nombre = document.getElementById("pasajeros").value;
    nombres.push(nombre);
    
    document.getElementById("pasajeros").value = "";
    document.getElementById("lista").innerHTML = "<br>" + nombres;

    listaFull += 1;
    lista += 1;

    
    
    console.log("numero: " + nombres.length);
    
} else if (listaFull==4) {
        alert("Lo siento, la lista está completa. Vuelva a intentarlo más tarde.");

        setTimeout (function(){
            nombres.pop();
            lista--;
            nombres.pop();
            lista--;

            alert("Hey, quedan dos sitios libres. Aprovecha para vivir la mejor experiencia de tu vida, apúntate ya!") 
        }, 3000);

        borradoOk = 1;

        } else if (borradoOk == 1){

        alert("Se ha enfermado un pasajero, qué lástima para él... Aprovecha esta plaza!");

        let nombre2 = prompt("si te quieres inscribir en esta plaza libre, registra tu nombre aquí.");
        nombres [1] = nombre2;

        document.getElementById("lista").innerHTML = "<br>" + nombres;
        
        borradoOk = 0;

        document.getElementById("lista").innerHTML ="";
        console.log("Ha borrado el DIV.")
        
        for (let i=0; i<lista; i++){

            console.log("HA ENTRADO FASE FINAL.")
        
            document.getElementById("lista").innerHTML +=nombres[i] + "<br>";        

            }

        }         

}
 



const nombres=[];
let nombre = "";
let lista = 0;
let borradoOk = 0;
let auxBorrado = 0;
let finito = 0;
let listaFull = 0;
    

