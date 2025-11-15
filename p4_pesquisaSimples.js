const prompt = require('prompt-sync')();

let n = parseInt(prompt("Quantidade de elementos do vetor: "));
let vetorps = [];

for (let i = 0; i < n; i++){
    vetorps[i] = parseInt(prompt("Digite um elemento: "));
}

let x = parseInt(prompt("Digite o número a ser procurado: "));
let pos = -1;

for (let i = 0; i < n; i++){
    if(vetorps[i] == x){
        pos = i;
    }
}
console.log(`Vetor pesquisa Simples: ${vetorps}`);
console.log(`O número pesquisado foi: ${x}. E sua posição no vetor é: ${pos}`);