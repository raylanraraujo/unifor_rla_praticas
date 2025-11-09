const prompt = require('prompt-sync')();

let A = [], B = [], C= [];
let quantidade = parseInt(prompt("Quantos valores cada vetor vai ter: "));

console.log("Digite os valores de A")
for (i=0; i < quantidade; i++){
    let valor = parseInt(prompt());
    A.push(valor);
}

console.log("Digite os valores de B")
for (i=0; i < quantidade; i++){
    B[i] = parseInt(prompt());
}

for (i = 0; i < quantidade; i++){
    C[i] = A[i] + B[i];
}


console.log(`Os valores de A são: ${A}`);
console.log(`Os valores de B são: ${B}`);
console.log(`Os valores de C são: ${C}`);