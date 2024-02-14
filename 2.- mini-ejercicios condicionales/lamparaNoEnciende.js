// 3- LAMPARA NO ENCIENDE

// Hacer 2 preguntas prompt (si/no). Se puede anidar dos condicionales (uno dentro de otro). Crear el código con condicionales para el algoritmo representado por el siguiente diagrama de flujo:

let lampara = prompt("¿Está enchufada?");

if (lampara == "no"){

    document.write("Enchufarla");

} else if (lampara == "si"){

    let foco = prompt("¿Foco quemado?");

    if (foco == "si"){

        document.write("Reemplazar el foco");

    } else {

        document.write("Comprar nueva lámpara");
        
    }
}