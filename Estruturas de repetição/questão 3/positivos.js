let numeros = [12, 780, 30, -22, 25, -10];

let soma = 0; 
let qtdPositivos = 0;

for (let n = 0; n < numeros.length; n++) {
 
    soma = soma + numeros[n];    
    if (numeros[n] > 0) {
        qtdPositivos++;
    }
}
let qtdNegativos = numeros.length - qtdPositivos;

console.log("Media:" + (soma/numeros.length));
console.log("Qtd positivos:" + qtdPositivos);
console.log("Qtd negativos:" + qtdNegativos);
console.log("Positivos:" + ((qtdPositivos/numeros.length) * 100) + " %");
console.log("Negativos:"+ ((qtdNegativos/numeros.length) * 100) + " % ");