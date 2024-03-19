// Tienes un grupo de al menos 5 imágenes (tema libre) y deseas realizar un carousel manualmente mediante javascript. Puede ejecutarse automáticamente, o bien mediante flechitas que pasen a la siguiente imagen o a la anterior. Puedes poner las imágenes en un array para irlas leyendo, y usar addEventListener desde javascript para controlar los eventos.

// Cuando ya te funcione, aprovecha para mejorar la presentación en lo posible. Hazlo más o menos complejo según el tiempo de que dispongas.


const fotos = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.webp", "images/5.jpg", "images/6.jpg"];
let posicion = 0;
let tiempo;
document.getElementById("imagenes").src = fotos[posicion];
const ant = document.getElementById("izq");
const sig = document.getElementById("der");
const auto = document.getElementById("imagenes");

ant.addEventListener('click', atras);
sig.addEventListener('click', siguiente);
auto.addEventListener('mouseover', automatico);
auto.addEventListener('mouseout', parar);



function atras(){
    if (posicion > 0 ){
        posicion--;
    } else{
        posicion = fotos.length-1;
    }

    document.getElementById("imagenes").src = fotos[posicion];

}

function siguiente(){
    if (posicion < fotos.length-1){
        posicion++;
    } else{
        posicion = 0
    }

    document.getElementById("imagenes").src = fotos[posicion];

}


function automatico(){
 tiempo = setInterval(siguiente, 1000);
}

function parar(){
    clearInterval(tiempo);
}


