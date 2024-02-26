function elegirAnimal(){

    const jsAnimal = document.getElementById("animal").value.toLowerCase();
    let jsImagen = document.getElementById("img");
    let jsTexto = document.getElementById("texto");

    if (jsAnimal == "ciervo"){
    
    jsImagen.style = "background-image: url(/images/ciervo.png);";
    jsImagen.style.backgroundSize = "contain";
    jsImagen.style.backgroundRepeat = "no-repeat";
    jsImagen.style.backgroundColor = "rgba(53, 186, 53, 0.472)";

    jsTexto.innerText = "Ciervo";
    jsTexto.style.color = "black";
    jsTexto.style.display = "flex";
    jsTexto.style.justifyContent = "center";
    jsTexto.style = "margin-left: 340px;";

    } else if (jsAnimal == "ballena"){
    
        jsImagen.style = "background-image: url(/images/ballena.png);";
        jsImagen.style.backgroundSize = "contain";
        jsImagen.style.backgroundRepeat = "no-repeat";
        jsImagen.style.backgroundColor = "rgba(5, 47, 215, 0.627)";
    
        jsTexto.innerText = "Ballena";
        jsTexto.style.color = "black";
        jsTexto.style.display = "flex";
        jsTexto.style.justifyContent = "center";
        jsTexto.style = "margin-left: 340px;";
        
    } else if (jsAnimal == "tigre"){
    
        jsImagen.style = "background-image: url(/images/tigre.png);";
        jsImagen.style.backgroundSize = "contain";
        jsImagen.style.backgroundRepeat = "no-repeat";
        jsImagen.style.backgroundColor = "rgba(199, 30, 30, 0.558)";
    
        jsTexto.innerText = "Tigre";
        jsTexto.style.color = "black";
        jsTexto.style.display = "flex";
        jsTexto.style.justifyContent = "center";
        jsTexto.style = "margin-left: 340px;";


    } else if (jsAnimal == "lobo"){
    
        jsImagen.style = "background-image: url(/images/lobo.png);";
        jsImagen.style.backgroundSize = "contain";
        jsImagen.style.backgroundRepeat = "no-repeat";
        jsImagen.style.backgroundColor = "rgba(31, 42, 65, 0.558)";
    
        jsTexto.innerText = "Lobo";
        jsTexto.style.color = "black";
        jsTexto.style.display = "flex";
        jsTexto.style.justifyContent = "center";
        jsTexto.style = "margin-left: 340px;";


    } else if (jsAnimal == "loro"){
    
        jsImagen.style = "background-image: url(/images/loro.png);";
        jsImagen.style.backgroundSize = "contain";
        jsImagen.style.backgroundRepeat = "no-repeat";
        jsImagen.style.backgroundColor = "yellow";
    
        jsTexto.innerText = "Loro";
        jsTexto.style.color = "black";
        jsTexto.style.display = "flex";
        jsTexto.style.justifyContent = "center";
        jsTexto.style = "margin-left: 340px;";


    } else {
        
        jsImagen.style.backgroundImage = "url()";
        jsImagen.style.backgroundColor = "black";
        jsTexto.innerText = "Este animal no está registrado";
        jsTexto.style.color = "white";
        jsTexto.style.display = "flex";
        jsTexto.style.justifyContent = "center";


    }


}



