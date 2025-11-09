const prompt = require('prompt-sync')();

//programa para exibir a sequencia de fibonacci usando recursão
function fibonacci(num) {
    if (num < 2){
        return num;
    } else {
        return fibonacci(num -1) + fibonacci(num - 2);
    }
}

// recebe a entrada do usuário referente a quantidade de termos que se deseja apresentar na sequencia de fibonacci
let nTermo = prompt('Digite quantos termos voce deseja: ');

if (nTermo <= 0) {
    console.log("Digite um valor positivo");
} else{
    for(let i=0; i < nTermo; i++) {
        //console.log(fibonacci(i), " ", end = "");
        process.stdout.write(fibonacci(i) + " ");
    }
    console.log();
}