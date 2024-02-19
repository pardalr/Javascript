// 3- CARRITO DE LA COMPRA: se le pide al usuario el precio de 5 productos. Se calcula el total. En el caso de sumar 100 euros o más, se le da un descuento del 15%. Imprimir en tal caso el precio original y el precio final con el descuento. Si no, solo el precio total. Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios.

let i;
let precios;
let total = 0;
let totalDesc = 0;

for (i=1; i<6; i++){
    precios = parseInt(prompt("Introduce el precio del producto" + i + "/5: "));
    total = total + precios;
}

if (total >= 100){
    totalDesc = total - (total * (15/100));
    document.write("Precio Total: " + total + "€ <br>");
    document.write("Precio con descuento: " + totalDesc + "€ <br>");
} else {
    document.write("Precio Total: " + total + "€ <br>");
}