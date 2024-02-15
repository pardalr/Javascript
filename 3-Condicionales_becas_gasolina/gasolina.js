/*2- COCHE NO ARRANCA

Solucionar mediante condicionales el siguiente algoritmo:


Oh! Estás aparcado en la calle, pero el coche no arranca...

Si vives cerca AND tienes ganas de caminar, te vas andando y ya lo arreglarás mañana. Si no, realiza las siguientes comprobaciones:
           - Tiene gasolina?
                        * No => hay que poner gasolina
                                  - Tienes dinero?
                                 • Si => poner gasolina
                                 • No => vas en metro
                          * Sí que tiene gasolina:


                                  - Tiene batería?
                                               * No => recargar batería
                                               * Sí => pásate por el mecánico*/


let vivienda = prompt("Vives cerca? (responde si o no)");
vivienda = vivienda.toLowerCase();
let caminar = prompt("Tienes ganas de caminar?");
caminar = caminar.toLowerCase();

if (vivienda == "si" && caminar == "si"){
    document.write("<h1>Pues pa' tu casa y mañana ya lo arreglarás.</h1>");
} else {
    let gasolina = prompt("Tienes gasolina? (responde si o no)"); 
    gasolina = gasolina.toLowerCase();     
    if (gasolina == "no"){
        let dinero = prompt("Tienes dinero? (responde si o no)");
        dinero = dinero.toLowerCase();
        if (dinero == "si"){
            document.write("<h1>Ves a poner gasolina.</h1>");
        } else {
            document.write("<h1>Pues te vas en metro (aunque no tengas dinero jeje).</h1>");
        }
    } else {
        let bateria = prompt("Tiene batería? (responde si o no)");
        bateria = bateria.toLowerCase();
        if (bateria == "si"){
            document.write("<h1>Pásate por el mecánico.</h1>");
        } else {
            document.write("<h1>Recargar la bateria.</h1>");
        }
    }
}