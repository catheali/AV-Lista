let num1 = parseFloat(prompt('Digite um número'));
let num2 = parseFloat(prompt('Digite um número'));
let num3 = parseFloat(prompt('Digite um número'));
let maior = 0;
let meio = 0;
let menor =0;

if((num1 > num2)&&(num1 > num3)){
    maior = num1;
} if((num2 > num1)&&(num2 > num3)){
    maior = num2;
} if((num3 > num2)&&(num3 > num1)){
    maior = num3;
} if((num1 < num2)&&(num1 < num3)){
    menor = num1;
} if((num2 < num1)&&(num2 < num3)){
    menor = num2;
} if((num3 < num2)&&(num3 < num1)){
    menor = num3;
} if((num1 < maior)&& (num1 > menor )){
    meio = num1;
} if((num2 < maior )&&(num2 > menor)){
    meio = num2;
} if((num3 < maior)&&(num3 > menor)){
    meio = num3;
} 

console.log(maior)
console.log(meio)
console.log(menor)