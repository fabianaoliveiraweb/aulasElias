let alunosSalaA = [
    "ana", "bernardo", "carla", "daniel", "elena", "felipe", "gabriela", "henrique", "isabela", "joão",
    "maria", "nuno", "olivia", "paulo", "quiteria", "rafael", "sara", "tiago", "ursula", "vitor",
    "xavier", "yara", "zeca", "adriana", "bruno", "clara", "davi", "elisa", "fernando", "gisele",
    "hugo", "isadora", "jorge", "karina", "lucas", "mariana", "nicolas", "olga", "pedro", "quiteria",
    "rafaela", "samuel", "tatiana", "ulisses", "valentina", "wagner", "ximena", "yago", "zuleica"
];

let alunosSalaB = [
    "alice", "bruno", "camila", "diego", "fabiana", "gustavo", "helen", "igor", "julia", "lucas",
    "marina", "nathan", "olivia", "pedro", "quiteria", "rodrigo", "sabrina", "thiago", "ursula", "vitor",
    "xenia", "yago", "zara", "amanda", "benjamin", "clara", "daniel", "elena", "francisco", "gabriela",
    "henrique", "isabela", "joão", "katia", "leonardo", "mariana", "nuno", "olivia", "paulo", "quiteria",
    "rafael", "sara", "tiago", "ursula", "vitor", "xavier", "yara", "zeca"
];

let salaA_Fase2 = alunosSalaA.slice(50);
console.log("Resultado segunda metade dos nomes Sala B - Fase 2: ", salaA_Fase2);

let salaA_Fase1 = alunosSalaA.splice(0, 25);
console.log("Resultado primeira metade dos nomes Sala A - Fase 1: ", salaA_Fase1);



