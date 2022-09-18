let altura = parseFloat(prompt('Digite sua altura em metros. Ex: 1.70'));
let sexo = prompt('Qual o seu sexo? Responda com F ou M');
let pesoIdeal = 0;

if (sexo == "M"){
    pesoIdeal = (72.7 * altura)-58;
    console.log(`Seu peso ideal é ${pesoIdeal}`);
} if( sexo == "F"){
    pesoIdeal = (62.1* altura)-44.7;    
    console.log(`Seu peso ideal é ${pesoIdeal}`);
} else{
    alert('Verifique suas respostas.')
}