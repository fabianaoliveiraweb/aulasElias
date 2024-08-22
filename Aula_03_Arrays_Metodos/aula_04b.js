let veiculos = ["carro", "moto", "barco", "lancha", "bicicleta", "caminhão",
    "trem", "avião", "balão", "drone"];

let veiculosSlice = veiculos.slice(0, 5);

console.log("Resultado do slice: ", veiculosSlice);
console.log("Array original após o slice, ", veiculos);

let veiculosSplice = veiculos.splice(0, 5);

console.log("Resultado do splice: ", veiculosSplice);
console.log("Array original após o splice, ", veiculos);