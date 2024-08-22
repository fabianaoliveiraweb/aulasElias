function mostrarMensagem() {
    const resp1 = prompt("Digite seu nome: ");
    const resp2 = prompt("Digite sua idade: ");

    const idade = parseInt(resp2);

    alert("Olá " + resp1 + " você tem " + idade + " anos!");


}