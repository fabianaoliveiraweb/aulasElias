/*Tarefa 4
->nome, idade, cidade, estado civil, número da casa e número de filhos (caso seja casado)*/

function mostrarDados() {
    let nome = prompt("Digite o seu nome: ");
    let idade = prompt("Digite sua idade: ");
    let cidade = prompt("Digite sua cidade: ");
    let estCivil = prompt("Digite seu estado civil: [solteiro ou casado]");
    let nroFilhos = 0;

    let idadeNum = parseInt(idade);    

    let mensagem = "Seu nome é " + nome + " tem idade de " + idade + " mora em " + cidade + " seu estado civil é " + estCivil;

    if(estCivil === "casado") {
        nroFilhos = prompt("Digite o número de filho(s): ");
        mensagem+= (" você tem " + nroFilhos + "filhos.");
    }else {
        nroFilhos = prompt("Você não possui filhos.");        
    }  
    
    alert(mensagem);
}
