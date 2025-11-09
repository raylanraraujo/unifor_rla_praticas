const prompt = require('prompt-sync')();

let array = [];
let inicio = parseInt(prompt("Digite o início: "));
//let final = parseInt(prompt("Digite o final: "));
let quantidade = parseInt(prompt("Digite a quantidade: "));
let passo = parseInt(prompt("Digite o valor da progressao: "));
// for(i=inicio; i < final; i+=passo){
//     console.log(i)
// }   

for(i = 0 ; i < quantidade; i++){
    array[i] = inicio + (passo * i);
}

console.log(array);