// Obter o modal e o botão de abrir
let modal = document.getElementById("myModal"); // Obtém o elemento do modal pelo ID "myModal"
let btn = document.getElementById("openModalBtn"); // Obtém o botão de abrir o modal pelo ID "openModalBtn"
let span = document.getElementsByClassName("close")[0]; /* Obtém o primeiro elemento com a classe "close", 
que geralmente é o botão de fechar o modal*/

// Quando o usuário clicar no botão, abrir o modal
btn.onclick = function() {
  modal.style.display = "block"; // Define o estilo de exibição do modal como "block" para torná-lo visível
}

// Quando o usuário clicar no ícone de fechar (X), fechar o modal
span.onclick = function() {
  modal.style.display = "none"; // Define o estilo de exibição do modal como "none" para ocultá-lo
}

// Fechar o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Se o usuário clicar fora do modal (no próprio modal), ele será fechado definindo o estilo de exibição como "none"
  }
}

