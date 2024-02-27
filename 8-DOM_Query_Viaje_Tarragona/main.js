function mostrarBcn(){
    document.querySelector("#imgBcn").src = "/images/Barcelona.jpg";
    document.querySelector("#imgBcn").style = "    border-radius: 10px;    border-color: brown;    border-style: solid;";
    let transicionBcn = document.getElementById("imgBcn");

    transicionBcn.style.transitionProperty = "width";
    transicionBcn.style.transitionDuration = "2s";
    transicionBcn.style.width = "350px";

}



function mostrarCny(){
    document.querySelector("#imgCny").src = "/images/Canyelles.jpg";
    document.querySelector("#imgCny").style = "    border-radius: 10px;    border-color: brown;    border-style: solid;";
    let transicionCny = document.getElementById("imgCny");

    transicionCny.style.transitionProperty = "width";
    transicionCny.style.transitionDuration = "2s";
    transicionCny.style.width = "350px";
}



function mostrarTorre(){
    document.querySelector("#imgTorre").src = "/images/Torredembarra-pamorama.jpg";
    document.querySelector("#imgTorre").style = "    border-radius: 10px;    border-color: brown;    border-style: solid;";
    let transicionTorre = document.getElementById("imgTorre");

    transicionTorre.style.transitionProperty = "width";
    transicionTorre.style.transitionDuration = "2s";
    transicionTorre.style.width = "350px";
}



function mostrarTgn(){
    document.querySelector("#imgTgn").src = "/images/Tarragona.jpg";
    document.querySelector("#imgTgn").style = "    border-radius: 10px;    border-color: brown;    border-style: solid;";
    document.querySelector("#abril").innerHTML = "❌";
    document.querySelector("#abril").style = "    border-radius: 10px;    border-color: black;    border-style: solid;";
    let transicionTgn = document.getElementById("imgTgn");

    transicionTgn.style.transitionProperty = "width";
    transicionTgn.style.transitionDuration = "2s";
    transicionTgn.style.width = "700px";

}

function abril(){
    document.querySelector("#imgBcn").src = "";
    document.querySelector("#imgBcn").style = "border-style: hidden;";
    document.querySelector("#imgCny").src = "";
    document.querySelector("#imgCny").style = "border-style: hidden;";
    document.querySelector("#imgTorre").src = "";
    document.querySelector("#imgTorre").style = "border-style: hidden;";
    document.querySelector("#imgTgn").src = "";
    document.querySelector("#imgTgn").style = "border-style: hidden;";
    document.querySelector("#abril").innerHTML = "";
    document.querySelector("#abril").style = "border-style: hidden;";


}