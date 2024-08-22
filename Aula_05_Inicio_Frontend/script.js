function calcular() {
    //Pedir para o usuário entrar com dois números
    const num1 = prompt("Digite o primeiro nro: ");
    const num2 = prompt("Digite o segundo nro: ");
    
    //Converte os números de string para nros inteiros
    const numero1 = parseInt(num1);
    const numero2 = parseFloat(num2);

    //Calcula a soma dos dois números
    const resultado = numero1 + numero2; 

    //Exibe o resultado em um alert
    alert(`O resultado da soma é: ${resultado}`);

}