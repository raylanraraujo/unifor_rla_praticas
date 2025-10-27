const prompt = require('prompt-sync')();

let av1 = parseFloat(prompt("\nDigite a nota da AV1: "));
let av2 = parseFloat(prompt("Digite a nota da AV2: "));
let av3 , media, situacao;


if(av2 == 0){
    console.log("\nO aluno não está autorizado a realizar a AV3\n");
} else {
    av3 = parseFloat(prompt("Digite a nota da AV3: "));
    media = ((av1 * 4) + (av2 * 4) + (av3 * 2))/ 10;

    if (media >= 6){
        situacao = "Aprovado"
    } else if (media >= 4){
        situacao = "Recuperação)"
    } else {
        situacao = "Reprovado"
    }
    console.log(`\n\n* RESUMO *\nAV1: \t${av1}\nAV2: \t${av2}\nAV3: \t${av3}\nMédia: \t${media}  \t(${situacao})\n`);
}


