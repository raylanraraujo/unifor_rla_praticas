// console.log("Troca de valor de variáveis")

// console.log("\nUsando variável temporária");
// let a = 5;
// let b = 10;
// console.log(`   Iniciando\n     a = ${a}\n     b = ${b}`)
// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(`\n   Por fim temos: \n     a = ${a}\n     b = ${b}`);

// console.log("\nSem usar variável auxiliar");
// let c = 10;
// let d = 5;
// console.log(`\n   Iniciando\n     c = ${c}\n     d = ${d}`);

// c = c + d;
// d = c - d;
// c = c - d;
// console.log(`\n   Terminamos\n     c = ${c}\n     d = ${d}`);


// let vetor = [1, 2, 3, 4, 5];
// let contador = 0;
// let soma = 0;
// let mult = 1;

// for (n of vetor){
//     contador++;
//     soma+=n;
//     mult *=n;
// }
// console.log(contador)
// console.log(soma)
// console.log(mult)

//Sequencia de fibonacci
function fiboos(n){
    let sequencia = [ 0, 1];

    for (i = 2; i < n; i++) {
        sequencia[i] = sequencia[i-1] + sequencia[i-2]
    }
    return sequencia;
}

console.log(fiboos(10));