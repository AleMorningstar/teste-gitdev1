function triplicar(numero) {
    return (numero * 3);
}
console.log(triplicar(9));

const quadrado = function (numeroQuadrado) {
    return numeroQuadrado ** 2; 
}
console.log(quadrado(9));

const soma = function(a, b) {
    return a + b;
}
console.log(soma(9, 18));

const somaA = (a, b) => a + b;
console.log(somaA(9, 18));


function executar(funcao) {
    console.log('É a vida :)');
}

function mensagem() {
    console.log("Funcionou!");
}

executar(mensagem);