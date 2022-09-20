let numeros = [7, 8, 9, 10, 11, 23, 45, 88, 4, 33, 31, 44, 52 , 1, 34, 98]
let intervalo1= 0;
let intervalo2= 0;
let intervalo3= 0;
let intervalo4= 0;

for ( let i = 0; i < numeros.length; i++) {
     
    let num = numeros[i];

    if (num > 0 && num <= 25){
        intervalo1++;
        
    } if (num >= 26 && num <= 50){
        intervalo2++;
        
    } if ( num >= 51 && num <= 75){
        intervalo3++;
        
    } if ( num >= 76 && num <= 100){
        intervalo4++;

     } if (num >= 0){
        break; // quando for lido um numero negativo a leitura termina
    }
}

console.log("Quantidade de numeros entre 0-25: " + intervalo1 )
console.log("Quantidade de numeros entre 26-50: " + intervalo2 ) 
console.log("Quantidade de numeros entre 51-75: "+ intervalo3 )
console.log("Quantidade de numeros entre 76-100: " + intervalo4 )
