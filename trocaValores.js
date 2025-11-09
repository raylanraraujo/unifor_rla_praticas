const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o primeiro valor: "));
let n2 = parseInt(prompt("Digite o segundo valor: "));

console.log(`\nInicialmente temos: x = ${n1} e y = ${n2}\n`);

//SEM usar AUXILIAR
troca(n1, n2);
function troca(x, y){
    x = x + y;
    y = x - y;
    x = x - y;
    
    console.log(`(SEM AUXILIAR) Após a troca temos: x = ${x} e y = ${y}\n`);
}

//usando variável auxiliar
trocaValor(n1, n2)
function trocaValor(x, y){
    aux = x;
    x = y;
    y = aux;
    console.log(`(AUXILIAR) Após a troca temos: x = ${x} e y = ${y}`);
}

