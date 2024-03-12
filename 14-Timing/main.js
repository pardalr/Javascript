let visib = 0;
let velocidad = 1000;
let sound = 0;
let activa = 0;
let sonidoJack = 0;

function visibilidad(){

    if (activa == 0){
    activa = 1; 
    console.log("Estoy aquí");
    
    // let visibl = document.querySelector(".imagen").style.visibility;
    // let visib = document.querySelector(".imagen").style.visibility;
    // let primero = document.getElementById("img1").style.visibility;
    // let ultimo = document.getElementById("img6").style.visibility;

    if (visib == 1){
        
        document.getElementById("boton").value = "Mostrar";

        setTimeout(imagen6, velocidad);
        document.querySelector("#img6").style.animation = "animacion2 2s";
        function imagen6 (){
            document.getElementById("img6").style.visibility = "hidden";


                setTimeout(imagen5, velocidad);
                document.querySelector("#img5").style.animation = "animacion2 2s";
                function imagen5 (){
                    document.getElementById("img5").style.visibility = "hidden";


                    setTimeout(imagen4, velocidad);
                    document.querySelector("#img4").style.animation = "animacion2 2s";
                    function imagen4 (){
                        document.getElementById("img4").style.visibility = "hidden";
        
                        setTimeout(imagen3, velocidad);
                        document.querySelector("#img3").style.animation = "animacion2 2s";
                        function imagen3 (){
                            document.getElementById("img3").style.visibility = "hidden";

                            setTimeout(imagen2, velocidad);
                            document.querySelector("#img2").style.animation = "animacion2 2s";
                            function imagen2 (){
                                document.getElementById("img2").style.visibility = "hidden";
                
                                setTimeout(imagen1, velocidad);
                                document.querySelector("#img1").style.animation = "animacion2 2s";
                                function imagen1 (){
                                document.getElementById("img1").style.visibility = "hidden";
                                visib = 0;
                                sound = 0; 
                                activa = 0; 
                                document.getElementById("sonido").src = "";
                                document.getElementById("jack").src = "";

                              
                
                                        }
                
        
                                }
        


                        }


                }

        
            }
        }

    } else if (visib == 0){

    if (sound == 0){
        document.getElementById("sonido").src = "audio/PiratesOfCaribbean.mp3";
        sound = 1;
    }

    document.getElementById("boton").value = "Ocultar";

    setTimeout(image1, velocidad);

    function image1 (){
    document.getElementById("img1").style.visibility = "visible";
    document.querySelector("#img1").style.animation = "animacion 2s";

            setTimeout(image2, velocidad);
            function image2 (){
            document.getElementById("img2").style.visibility = "visible";
            document.querySelector("#img2").style.animation = "animacion 2s";

                setTimeout(image3, velocidad);
                function image3 (){
                document.getElementById("img3").style.visibility = "visible";
                document.querySelector("#img3").style.animation = "animacion 2s";

                    setTimeout(image4, velocidad);
                    function image4 (){
                    document.getElementById("img4").style.visibility = "visible";
                    document.querySelector("#img4").style.animation = "animacion 2s";

                    setTimeout(image5, velocidad);
                        function image5 (){
                        document.getElementById("img5").style.visibility = "visible";
                        document.querySelector("#img5").style.animation = "animacion 2s";

            
                            setTimeout(image6, velocidad);
                            function image6 (){
                            document.getElementById("img6").style.visibility = "visible";
                            document.querySelector("#img6").style.animation = "animacion 2s";

                            activa = 0;
                            visib = 1;    

            
                                    }
            
    
                            }
    


                    }


            }

    
        }
    }

    }

}
    
}




function audioJack(){

    function delayoff(){

        document.getElementById("sonido").src = "audio/PiratesOfCaribbean.mp3"
        document.getElementById("jack").src = "";
        document.getElementById("gif").style.visibility = "hidden";
        sonidoJack = 0;

    }
    
    setTimeout(delayoff, 10000);
    
    if (sonidoJack == 0){
        document.getElementById("sonido").src = "";
        document.getElementById("jack").src = "audio/SiempreRecordareis.mp3";
        document.getElementById("gif").style.visibility = "visible";
        sonidoJack = 1;
        
    } else if (sonidoJack == 1) {
        console.log("pasa por aquí");
        document.getElementById("sonido").src = "audio/PiratesOfCaribbean.mp3"
        document.getElementById("jack").src = "";
        document.getElementById("gif").style.visibility = "hidden";
        sonidoJack = 0;
    
    }


}
