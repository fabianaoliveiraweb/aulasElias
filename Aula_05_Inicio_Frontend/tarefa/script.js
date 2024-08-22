function calcularMedia() {
    const nota1 = parseFloat(prompt("Digite a nota da primeira prova:"));
    const nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));
    const nota3 = parseFloat(prompt("Digite a nota da terceira prova:"));

    //Calculo da Média
    const resultado = ((nota1 + nota2 + nota3) / 3);

    //Exibição para o usuário
    alert(`O resultado da média é: ${resultado.toFixed(2)}`);
}