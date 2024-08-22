let moveis = ["cadeira", "sofá", "mesa"];

let moveisM = moveis.map(function(valores) {
    return valores.slice(0, -1) + valores.slice(-1).toUpperCase();
});

console.log(moveisM);