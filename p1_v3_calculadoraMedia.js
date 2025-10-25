//Calculadora de média

let nota1, nota2, nota3, media, situacao, mensagemFinal; // declaração das variáveis

nota1 = 10;
nota2 = 6.5;
nota3 = 8;

media = ((nota1 + nota2 + nota3) / 3).toFixed(2); //calcula a média do aluno

// verificação da situacao do aluno baseado no valor da sua média
if ( media >= 7) {
    situacao = "APROVADO";
    mensagemFinal = "Estrela recebida!";
    
} else if (media >=4) {
    situacao = "Recuperação";
    mensagemFinal = "Vai dar certo.";
} else {
    situacao = "REPROVADO";
    mensagemFinal = "Nos veremos próximo semestre."
}

console.log(`A média é: ${media}.\nSituação: ${situacao}.\n${mensagemFinal}`) //exibe na tela os valores da média do aluno, a sua situação e uma mensagem final.
