/*
INVITADOS FIESTA ESTE FINDE

Montas una fiesta este finde en tu casa!
Tienes una lista de invitados ya fija en array (o bien creada mediante Prompt)
– Te llama la Juani que se apunta con su novio Alex
– Te encuentras a Marta que dice que le cueles la tercera
– Roberto, que estaba el primero de la lista, resulta que está de viaje y no puede venir
– Hay una fiesta al lado la misma noche y toda esa gente dicen que se apuntan a tu fiesta
– Mostrar la lista definitiva de invitados con todos los nombres en mayúsculas.
– Además, con tanto lío, acabas realizando una función de buscar, que te dice si tal persona está en la lista o
no

A cada paso debe ir actualizándose la presentación en pantalla de la lista de invitados. Tómate tu tiempo para repasar todo lo visto hasta ahora. Intenta crear una página visualmente atractiva.
*/

let fiesta1 = ["Roberto", "Alejandro", "Sandra", "Núria", "Fran", "Sebas", "Laura", "Raúl", "Maria"];
let fiesta2 = ["Pedro", "Carlos", "Anna", "Francisca", "Amelia", "Clara"];
let may = [];
let vec=0;
let rob=0;
let mar=0;
let jua=0;

const textInput = document.getElementById('buscar');
    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        buscar();
      }
    });




for (let i=0; i<fiesta1.length; i++){
    document.getElementById("lista1").innerHTML += (i+1) + " - " + fiesta1[i] + "<br>"; 
}

for (let i=0; i<fiesta2.length; i++){
    document.getElementById("lista2").innerHTML += (i+1) + " - " + fiesta2[i] + "<br>"; 
}

function juani(){
    if (jua == 0){
    fiesta1.push("Juani", "NovioJuani");
    document.getElementById("lista1").innerHTML = ""; 
    for (let i=0; i<fiesta1.length; i++){
        document.getElementById("lista1").innerHTML += (i+1) + " - " + fiesta1[i] + "<br>"; 
    }
    }
    jua = 1;
}

function marta(){
    if (mar == 0){
    fiesta1.splice(2, 0, "Marta");
    document.getElementById("lista1").innerHTML = ""; 
    for (let i=0; i<fiesta1.length; i++){
        document.getElementById("lista1").innerHTML += (i+1) + " - " + fiesta1[i] + "<br>"; 
    }
    }
    mar = 1;
}

function roberto(){
    if (rob == 0){
    fiesta1.shift();
    document.getElementById("lista1").innerHTML = ""; 
    for (let i=0; i<fiesta1.length; i++){
        document.getElementById("lista1").innerHTML += (i+1) + " - " + fiesta1[i] + "<br>"; 
    }
    }
    rob = 1;
}

function vecinos(){
    if (vec == 0){
    fiesta1 = fiesta1.concat(fiesta2);
    document.getElementById("lista1").innerHTML = ""; 
    for (let i=0; i<fiesta1.length; i++){
        document.getElementById("lista1").innerHTML += (i+1) + " - " + fiesta1[i] + "<br>"; 
    }
    document.getElementById("lista2").innerHTML = "";
    document.getElementById("casa2").style.backgroundImage = "url('img/casaSad.png')";
    vec = 1;
    }
}

function mayusculas(){

    document.getElementById("lista1").innerHTML = ""; 
    for (let i=0; i<fiesta1.length; i++){
        document.getElementById("lista1").innerHTML += (i+1) + " - " + fiesta1[i].toLocaleUpperCase() + "<br>"; 
    }

    if (lista1 > 12){

    document.getElementById("lista2").innerHTML = ""; 
    for (let i=0; i<fiesta2.length; i++){
        document.getElementById("lista2").innerHTML += (i+1) + " - " + fiesta2[i].toLocaleUpperCase() + "<br>"; 
    }
    }

}

function buscar(){

    may = fiesta1.map(f=>{ return f.toUpperCase(); });
    let search = document.getElementById("buscar").value;
    let verif = may.includes(search.toUpperCase());
    if (verif == true){
        document.getElementById("busqueda").innerHTML = "✅";
    } else {
        document.getElementById("busqueda").innerHTML = "❌";
    }

}


function reiniciar(){
    fiesta1 = ["Roberto", "Alejandro", "Sandra", "Núria", "Fran", "Sebas", "Laura", "Raúl", "Maria"];
    fiesta2 = ["Pedro", "Carlos", "Anna", "Francisca", "Amelia", "Clara"];

    document.getElementById("lista1").innerHTML = ""; 
    for (let i=0; i<fiesta1.length; i++){
        document.getElementById("lista1").innerHTML += (i+1) + " - " + fiesta1[i] + "<br>"; 
    }

    document.getElementById("lista2").innerHTML = ""; 
    for (let i=0; i<fiesta2.length; i++){
        document.getElementById("lista2").innerHTML += (i+1) + " - " + fiesta2[i] + "<br>"; 
    }
    document.getElementById("casa2").style.backgroundImage = "url('img/casa2.png')";
    
    vec=0;
    rob=0;
    mar=0;
    jua=0;
}