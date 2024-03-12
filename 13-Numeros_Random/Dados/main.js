/*
2- LANZAR LOS DADOS
Dos jugadores, PLAYER1 y PLAYER2, se enfrentan a tirar los dados.
PLAYER1: Se genera un número del 1 al 6 cuando el usuario aprieta el botón "lanzar dado". Se muestra el resultado en pantalla con innerHTML.
PLAYER2: juega su turno
+
Crear una página con presentación CSS, según tu tiempo e imaginación.
*/

// let nombres = "";
// let nombre1 = "";
// let nombre2 = "";


// function registrar(){
    
    //     var name1 = "";
    //     let name2 = "";
    //     let names = "";
    //     name1 = document.getElementById("nameP1").value;
    //     name2 = document.getElementById("nameP2").value;
    //     console.log(name1);
    //     console.log(name2);
    
    //     names = [name1, name2];
    
    //     console.log(names);
    
    //     return names;
    
    // }
    
    // nombres = registrar();
    // nombre1 = nombres[0];
    // nombre2 = nombres[1];
    
    
    
    let resultadoPlayer1 = 0;
    let resultadoPlayer2 = 0;



function dados(jugador){

    if (resultadoPlayer1 && resultadoPlayer2){

    } else {

    if (jugador == 1){

    document.querySelector("#img1").src = "img/dado0.gif";
    document.querySelector("#img2").src = "img/dado0.gif";

    } else {

        document.querySelector("#img3").src = "img/dado0.gif";
        document.querySelector("#img4").src = "img/dado0.gif";    

    }


    let dadosAleatorios = Math.floor(Math.random() * 6 + 1);
    let dadosAleatorios1 = Math.floor(Math.random() * 6 + 1);


    setTimeout(function(){



        if (jugador == 1){
            resultadoPlayer1 = dadosAleatorios + dadosAleatorios1;
            document.getElementById("resultado1").innerHTML = "El resultado es: " + resultadoPlayer1;
            document.querySelector("#img1").src = "img/dado"+ dadosAleatorios +".png";
            document.querySelector("#img2").src = "img/dado"+ dadosAleatorios1 +".png";
            
        } else {
            resultadoPlayer2 = dadosAleatorios + dadosAleatorios1;
            document.getElementById("resultado2").innerHTML = "El resultado es: " + resultadoPlayer2;
            document.querySelector("#img3").src = "img/dado"+ dadosAleatorios +".png";
            document.querySelector("#img4").src = "img/dado"+ dadosAleatorios1 +".png";

        }
    
        if ((resultadoPlayer1 > 0) && (resultadoPlayer2 > 0)){
            console.log("Ha entrado");
    
        if (resultadoPlayer1 > resultadoPlayer2){
            document.getElementById("winner").innerHTML = "Ha ganado el jugador 1";
        } else if (resultadoPlayer1 < resultadoPlayer2){
            document.getElementById("winner").innerHTML = "Ha ganado el jugador 2";
        } else {
            document.getElementById("winner").innerHTML = "¡Empate!";
        }
    
        }


    }, 1500);
    
}

}

function reiniciar(){

    resultadoPlayer1 = 0;
    resultadoPlayer2 = 0;
    document.getElementById("winner").innerHTML = "";
    document.getElementById("resultado1").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "";

}

