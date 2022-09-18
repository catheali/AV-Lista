let produto = parseFloat(prompt('Digite o preço do produto')); ;
let formaPag = prompt('Qual a forma do pagamento? Dinheiro, Cheque, Cartão, Parcelado em 2, Parcelado em 3.') ;
let total = 0;


 if(formaPag =="Dinheiro"||formaPag == "Cheque"){
    total = (produto-((produto * 10)/100));    
    console.log( `O preço final do produto é ${total}`);
}    
 if(formaPag == "Cartão"){
  total = (produto-((produto * 15)/100));
  
  console.log( `O preço final do produto é ${total}`);
}
if(formaPag == "Parcelado em 2"){
    total = produto;
    console.log( `O preço final do produto é ${total}`);
} 
 if(formaPag == "Parcelado em 3"){
     total = (produto+((produto*10)/100));    
    console.log( `O preço final do produto é ${total}`);
} 