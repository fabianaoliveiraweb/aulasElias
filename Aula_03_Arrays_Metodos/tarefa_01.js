/* Exercício 01
Recall de Veículos. Atendender somente a primeira metade dos carros, 
e a lista dos carros que vão entrar na segunda chamada.
Imprimir as duas listas com a primeira letra em maiúscula.*/

let carros = ["fiat argo", "renault kwid", "chevrolet onix", "fiat mobi", "hyundai hb20", "sandero", 
    "fiat cronos", "peugeot", "quantum", "astra"];

let carrosMaiuscula1 = carros.map(function(valores) {
    return valores.charAt(0).toUpperCase() + valores.slice(1);
});

let carrosSlice = carrosMaiuscula1.slice(5); //pega do 5 até o final do array
console.log("Resultado segunda metade de carros para Recall: ", carrosSlice);

let carrosSplice = carrosMaiuscula1.splice(0, 5);
console.log("Resultado primeira metade dos carros para Recall: ", carrosSplice);


