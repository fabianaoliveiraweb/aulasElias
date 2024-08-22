/* Pra cada produto eu devo deefinir uma quantidade, vou precisar de uma variável a quantidade de cada item, pois isso irá 
afetar o resultado do valor da compra. Deve ser printado na tela, quais os produtos q o usuário está levando e a quantidade.
*/

function calcularTotalCompra(produtos, quantidades) {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i] === "leite") {
            total += 4 * quantidades[i];
        }else if (produtos[i] === "pao") {
            total += 1.75 * quantidades[i];
        }else if (produtos[i] === "chocolate") {
            total += 5.25 * quantidades[i];
        }
    }
    return total;
}

const carteira = 10;
const produtos = ["leite", "pao", "chocolate"];
const quantidades = [2, 3, 1];
const faltante = 0;

const totalCompra = calcularTotalCompra(produtos, quantidades);

console.log("Produtos comprados:");
for (let i = 0; i < produtos.length; i++) {
    console.log(`${quantidades[i]} x ${produtos[i]}`);
}

console.log("Total da compra: ", totalCompra.toFixed(2));

if(carteira >= totalCompra) {
    const troco = carteira - totalCompra;
    console.log("Troco: ", troco.toFixed(2));
}else {
    const faltante = totalCompra - carteira;
    console.log("Dinheiro insuficiente. Faltam: ",faltante.toFixed(2));
    console.log("Por favor, remova alguns produtos do carrinho.");
}

