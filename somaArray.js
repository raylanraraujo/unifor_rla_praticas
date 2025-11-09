const prompt = require('prompt-sync')();
let array =[]; //cria um array vazio

let quantidade = prompt(); // recebe a quantidade de elementos que o array terá

// faz a inclusao da quantidade de números inteiros no array vazio
for(i = 0; i < quantidade; i++) {
    array[i] = parseInt(prompt());
}

//funcao que soma os valores numericos de um array
function soma(array){
    soma = 0;
    for(i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

console.log(`O Array é: ${array}`);
console.log(`A soma dos seus valores é ${soma(array)}`);