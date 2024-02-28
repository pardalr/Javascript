    //VERIFICAR PASSWORD
/*
    Crea una petición de password, (que tú creas e incrustas en el código) de manera que si el usuario y el password coinciden con los guardados, dé acceso a la página *, y si no, que siga preguntando.
    Una vez te funcione, intenta hacer la presentación más atractiva mediante CSS.
    + EXTRA: dar un máximo de intentos, por ejemplo, si no se consigue a los 3 intentos, salir del programa
    * para ir a otra página mediante javascript, usar la instrucción:  window.open("https://www.w3schools.com");
*/


    const iUser = "Pardal_rifi96";
    const iPass = "Ir0nH@ck!";
    

    let user = "";
    let pass = "";
    let i = 0;
    
    while ((user!=iUser || pass!=iPass) && i<3 ){
        
        user = prompt("Introduce el usuario: ");
        pass = prompt("Introduce la contraseña: ");
        
        if (user==iUser && pass==iPass){
            window.open("https://www.w3schools.com");
            document.write("<h1 id='exito'>¡Acceso correcto!<h1>")
        } else if (i==2){
            document.write("<h1 id='fallo'> Excedido el número de intentos<h1>");
        } else {
            alert("Usuario o contraseña incorrectos");
        }

        i++;
    }

    
 
