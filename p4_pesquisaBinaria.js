const prompt = require ('prompt-sync')();

let n = parseInt(prompt("Digite a quantidade de números: "));
let vetor = [];

for (let i = 0; i < n; i++){
    vetor[i] = parseInt(prompt(`Digite o número para a posição ${i}: `))
}

let x = parseInt(prompt("Digite o valor a ser pesquisado: ")); // define na variável x o elemento a ser pesquisado.

let pos = -1; // posição inicial com esse valor. Caso não encontre o elemento a posição permanecerá com esse valor. 
let limiteInferior = 0; //índice do liminte inferior sempre terá índice ZERO
let limiteSuperior = n -1; //índice do limite superior é a quantidade de elementos ao todo menos 1

// aqui seria a pesquisa binária propriamente dita
while (limiteInferior <= limiteSuperior){
    let posicaoMeio = parseInt((limiteInferior + limiteSuperior) / 2); // define a posição centra do meu vetor
    
    if (vetor[posicaoMeio] == x){
        pos = posicaoMeio; 
    }
    if(x < vetor[posicaoMeio]){
        limiteSuperior = posicaoMeio - 1;
    } else {
        limiteInferior = posicaoMeio + 1;
    }  
}

//exibir os resultados 
console.log("O vetor tem os elementos:");
console.log(vetor);
console.log("O número a ser procurado é: ");
console.log(x);
console.log("A posição do elemento no vetor é: ");
console.log(pos);