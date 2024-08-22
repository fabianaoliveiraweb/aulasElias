function mostrarMensagem() {

    let mensagem = "Seja bem vindo ";

    const resultadoDiv = document.getElementById("mostrarMensagem");//pega

    resultadoDiv.textContent = mensagem;//mostra

    let mensagem2 = "Hello World";

    const resultadoDiv2 = document.getElementById("mostrarMensagem2");//pega

    resultadoDiv2.textContent = mensagem2;//mostra
}

function botao1() {
    
    let mensagem1 = "Página Anterior";

    const resultadoDiv1 = document.getElementById("mostrarBtn1");//pega

    resultadoDiv1.textContent = mensagem1;//mostra   
}

function botao2() {
    
    let mensagem2 = "Próxima Página";

    const resultadoDiv2 = document.getElementById("mostrarBtn2");//pega

    resultadoDiv2.textContent = mensagem2;//mostra
}