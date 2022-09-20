let altura = [ 1.05, 2.10, 1.32, 1.82, 1.90,
              1.64, 1.53, 1.78, 1.66, 1.70,
              1.42, 1.79, 1.62, 1.79, 1.80]

let antesAltura; //guarda a leitura anterior pra poder comparar com a menor altura;
let maiorAltura = 0; // guarda a maior altura;
let menorAltura= 5; // faz uma comparação entres as alturas, para descobrir qual a menor;

for ( let i= 0; i < altura.length; i++) {
    let alturaAtual = altura[i]; // inicia a leitura no inicio da array
    if(alturaAtual > antesAltura){ //guarda o primeiro valor inicial
        antesAltura = alturaAtual;

    } if (alturaAtual > maiorAltura){ //guarda o maior valor 
        maiorAltura = alturaAtual;

    } if(antesAltura < menorAltura){ // compara com o menor valor
        menorAltura = antesAltura;

    } if(alturaAtual < menorAltura) // verifica se a leitura atual é a menor
        menorAltura = alturaAtual;
}
console.log(menorAltura)
console.log(maiorAltura)
