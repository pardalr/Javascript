document.write("2- Imprime los números pares entre dos números que introduzca el usuario: <hr>");

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

if (num1<num2){

    for (let i=num1; i<=num2; i++){
        if (i%2==0){
            //console.log(i + "<hr>");
            document.write(i + "<hr>");
            
        }
    }

} else {

    for (let i=num1; i>=num2; i--){
        if (i%2==0){
            //console.log(i + "<hr>");
            document.write(i + "<hr>");
        }
    }

}
