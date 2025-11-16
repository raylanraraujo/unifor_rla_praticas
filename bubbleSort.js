//declarando as variáveis
let vetor = []; 
let numeroAleatorio;
let comprimento;
let aux;

// cria um vetor com 10 posições de números aleatórios
for (let i=0; i<10; i++) {
    numeroAleatorio = Math.floor((Math.random()*100)+1)
    vetor[i] = numeroAleatorio;
}


//crianco a função bubble sort
function bubbleSort(array){
    comprimento = array.length; // usado para saber o comprimento do vetor

    for(let i = 0; i < comprimento; i++) { //um laço 
        for(j= 0 ; j < (comprimento - i - 1); j++){
            if (array[j] > array[j+1]){
               aux = array[j];
               array[j] = array[j+1];
               array[j+1] = aux; 
            }
        }
    }
    return array;
}
console.log(vetor);
console.log(bubbleSort(vetor));


/*
a função bubble sort é exatamente a ordenação feita dessa maneira.

Para isso eu tenho que fazer 2 laços: um extarno e um interno.
O laço externo FOR vai ser feito iterando do início do vetor (i=0) até seu último elemento 
(comprimentoArray - 1).
Esse laço externo é aquele que vai se movendo vagarosamente os pares de valores para comparação 
até chegar no final do vetor.

Os pares internos são controlados por outro laço interno. 
Usa-se outra variável de iteração (j) que deve ser iniciada em zero, e vai rodar enquanto J 
for menor que  (comprimentoArray - i - 1).

Não é necessário ir até o final do array, pois, de acordo com o andamento do nosso algoritmo, 
a cada iteraçao os valores dos pares vao sendo comparados entre si e o maior valor é colocado 
na última posição do vetor. 

Por isso, nós vamos descontando 1 a cada iteraçao completa. 
Pois a cada iteração, um valor fica na sua posicao certa no final do vetor.


*/