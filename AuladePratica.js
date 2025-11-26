let vetor = [];

for (let i = 0; i < 60; i++){
    let numero = parseInt(Math.random()*100);
    vetor.push(numero)
}

//chamar a funcao para ordenar o vetor
bubbleSort(vetor);
console.log(vetor)

//pesqusar pelo 32
console.log(buscaBinaria(vetor, 32))

function bubbleSort(vetor){
    let total = vetor.length;

    for(let i = 0; i < total; i ++){
        let trocado = false;
        for(let j = 0; j < (vetor.length - i - 1); j++){
            if(vetor[j] > vetor[j+1]){
                let temp = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = temp;
            }
        }

        trocado = true;
        
        if(!trocado){
            break;
        }
    }
}





function buscaBinaria(vetor, valor){
    let esquerda = 0;
    let direita = vetor.length -1;

    while(esquerda <= direita){
        let meio = Math.floor((esquerda + direita)/2);

        if(vetor[meio] == valor){
            return meio;
        } else if(vetor[meio] < valor ){
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }
    
    return -1;
}