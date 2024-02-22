// 2- Pide dos números. Pide si quiere sumar o restar (+/-). Según el caso, llama a la función sumar() o restar() pasándole esos parametros y muestra el resultado de sumar o restar ambos números. Prueba a realizar esto sin return
// +EXTRA: prueba a realizar lo mismo con return.
// nota: en vez de document.write también podéis usar console.log

//*******************************VER. 1********************************** */
/*
function sumar(){
    let resultado = num1 + num2;
    return resultado;
}

function restar(){
    let resultado = num1 - num2; 
    return resultado;
}


let num1 = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));

let oper = prompt("Para sumar introduce '+', para restar introduce '-'.");


if (oper == "+"){
    sumar();
    let result = sumar();
    document.write("El resultado de la suma es: " + result);
} else if (oper == "-") {
    restar();
    let result = restar();
    document.write("El resultado de la resta es: " + result);
} else {
    document.write("<h2>Alerta: Introduce el símbolo de operación correctamente.<h2>");
}
*/
//*********************************************************************** */


//*******************************VER. 2********************************** */

function sumar(a, b){
    let resultado = a + b;
    return resultado;
}

function restar(a, b){
    let resultado = a - b; 
    return resultado;
}


let num1 = parseInt(prompt("*Introduce el primer número: "));
let num2 = parseInt(prompt("*Introduce el segundo número: "));

let oper = prompt("*Para sumar introduce '+', para restar introduce '-'.");

if (oper == "+"){

    let enviar = sumar(num1, num2);
    document.write("*El resultado de la suma es: " + enviar);

} else if (oper == "-") {

    let enviar = restar(num1, num2);
    document.write("*El resultado de la resta es: " + enviar);

} else {

    document.write("<h2>*Alerta: Introduce el símbolo de operación correctamente.<h2>");

}

//****************************************************************************** */



