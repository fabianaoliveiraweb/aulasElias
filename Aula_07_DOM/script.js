//Obter o modal e o botão abrir
let modal = document.getElementById("myModal"); //pega o "myModal" que tá lá no HTML
let btn = document.getElementById("openModalBtn"); // pega o "openModalBtn" que tb está no HTML
let span = document.getElementsByClassName("close")[0]; //pega o primeiro elemento da classe close, que geralmente é o close, o fechar "X"

btn.onclick = function() {
    modal.style.display = "block"; //Ao clicar no botão, a modal passa a "aparecer" na tela.
}

span.onclick = function() { //Ação para fechar "X" a modal.
    modal.style.display = "none"; // Agora a modal será ocultada.
}

window.onclick = function(event) { //a modal será fechada caso o usuário clicar na área mais escura da tela.
    if(event.target == modal) { //se o "alvo" do evento é a modal
        modal.style.display = "none"; //A modal será ocultada.
    }
}

//Estudar o event.target, e o que está no PDF.