const prompt = require("prompt-sync")();

numero = parseInt(prompt("\nDigite um número: "));
let fatorial = 1;
let cc = numero;

while (cc >=1){
    fatorial *= cc;
    cc--;
}
console.log(`O fatorial de ${numero} é igual a ${fatorial}.\n`);