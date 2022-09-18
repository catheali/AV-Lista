let nome = prompt('Digite seu nome');
let sexo = prompt('Qual seu sexo? Responda com "F" ou "M"');
let stsCivil = prompt('Qual seu estado civil? Responda com SOLTEIRO, CASADO(o) ou DIVORCIADO');
if (sexo == "F" && stsCivil == "casada"){
    let qtdCasa = prompt("Quanto tempo você está casada? Responda em Anos");
    console.log(`Olá ${nome}, você é ${sexo} e está casada há ${qtdCasa} anos. `);
} else {
    console.log((`Olá ${nome}, você é ${sexo} e o seu estado civil é ${stsCivil}. `));
}