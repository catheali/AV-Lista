let altura = parseFloat(prompt('Digite sua altura em metros. Ex: 1.70'));
let peso =parseFloat(prompt('Digite seu peso. Ex: 70'));
let imc = (peso)/(altura * altura);

console.log(imc)

if (imc <= 18.5){
    console.log('Abaixo do peso')
}  if (imc >= 18.5 && imc <= 25){
    console.log('Peso normal')
}  if (imc >= 25.1 && imc <= 30){
    console.log('Acima do peso')
}  if (imc >= 30.1) {
    console.log('Obeso')
}  
