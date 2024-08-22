function sum(a, b) {
    return a + b;
}

console.log("A soma de a + b é: ", sum(10,5));

function divisao(a, b) {
    return a / b;
}

console.log("A divisão de a por b é: ", divisao(10,5));

function multi(a, b) {
    a = 5;
    b = 2;
    return a * b;
}

console.log("A multiplicação de a por b é: ", multi());

function subtracao(a, b) {
    a = 6;
    b = 3;
    console.log(a - b);
}

subtracao();

//se o resultado for maior q 50, vou ao cinema, senão, se for menor, não vou ao cinema

function cinema(a, b, idade) {
    a = 5;
    b = 10;
    idade = 20;
    result = a * b;
    if (result >= 50 && idade >= 18) {
        return console.log("Vou ao cinema e sou maior de idade.") //console.log no escopo da função
    }else {
        return console.log("Não vou ao cinema.")
    }
}
cinema(); //só chamo a função

