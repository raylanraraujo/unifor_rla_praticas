
let presenca, nota1, nota2, media, situacao;

const prompt = require('prompt-sync')();

presenca = prompt("\nDigite a frequência do aluno: ");
nota1 = parseFloat(prompt("Digite a nota 1: "));
nota2 = parseFloat(prompt("Digite a nota 2: "));
media = (nota1 + nota2) / 2

if (presenca >= 75) {
    if (media > 7) {
        situacao = "APROVADO por média"
    } else if (media > 4) {
        situacao = "RECUPERAÇÃO"
    } else {
        situacao = "REPROVADO por média"
    }
} else {
    situacao = "REPROVADO (por falta)"
}
console.log(`\nResumo\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media}\nSituacao: ${situacao}\n`);
