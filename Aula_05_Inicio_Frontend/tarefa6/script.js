/**Armazene o nome em uma variável nome, a idade em uma variável idade, a cidade em 
uma variável cidade, o estado civil em uma variável estadoCivil, o número da casa 
em uma variável numeroCasa e o número de filhos (se aplicável) em uma variável 
numeroFilhos. */

function mostrarMensagem() {
    let nome = prompt("Digite o seu nome: ");
    let idade = parseInt(prompt("Digite sua idade: "));
    let cidade = prompt("Digite sua cidade: ");
    let estCivil = prompt("Digite seu estado civil: [solteiro ou casado]");
    let nroCasa = parseInt(prompt("Digite o nro da casa: "));
    let nroFilhos = parseInt(0);  

    let mensagem = "Olá, seja bem vindo! Seu nome é " + nome + " tem idade de " + idade + " mora em " + cidade + " o número da casa é " + nroCasa + " seu estado civil é " + estCivil;

    if(estCivil === "casado") {
        nroFilhos = prompt("Digite o número de filho(s): ");
        mensagem+= (" você tem " + nroFilhos + " filhos.");
    }else {
        nroFilhos = prompt("Você não possui filhos.");        
    }  
    
    alert(mensagem);    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = mensagem;
}