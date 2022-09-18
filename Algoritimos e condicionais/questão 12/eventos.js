let numAluno = 2022010102;
let nota1 = 50;
let nota2= 80;
let nota3= 60;
let notas= (`${nota1},${nota2},${nota3}`) 
let ex1= 50;
let ex2= 70;
let ex3= 60;
let Me= (ex1 + ex2 + ex3)/3;
let Ma= (nota1 + (nota2 * 2)+(nota3 *3) + Me)/7;

console.log(`Numero do Aluno: ${numAluno}`)
console.log(`Notas do Aluno: ${notas}`)
console.log(`Média dos Exercicios: ${Me}`)

if (Ma >= 90){
    console.log( 'Aprovado - Conceito A')    
}
if (Ma >= 75 && Ma < 90){

    console.log( 'Aprovado - Conceito B') 
}
if (Ma >= 60 && Ma < 75){
    console.log( 'Aprovado - Conceito C') 
}
if (Ma >= 40 && Ma < 60){
    console.log( 'Reprovado - Conceito D') 
}
if(Ma < 40){
    console.log('Reprovado - Conceito D')
}
console.log(`Media de Aproveitamento: ${Ma}`);



