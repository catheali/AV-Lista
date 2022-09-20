let numeros = [90, 9, 22, 45, 31, 600];

let soma = 0;

for (let n = 0; n < numeros.length; n++) {
    if (
        numeros[n] >= 1 && numeros[n] <= 500
        && numeros[n] % 2 !== 0
        && numeros[n] % 3 === 0 
    ) {
        soma += numeros[n];
    }
}

console.log(soma);
