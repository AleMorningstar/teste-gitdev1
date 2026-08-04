//Funcao padrao.
function triplicar(numero) {
    return (numero * 3);
}
console.log(triplicar(9));
//Expressao da Funcao
const quadrado = function (numeroQuadrado) {
    return numeroQuadrado ** 2; 
}
console.log(quadrado(9));
const soma = function(a, b) {
    return a + b;
}
console.log(soma(9, 18));
//Arrow function
const somaA = (a, b) => a + b;
console.log(somaA(9, 18));
//Funcao Callback
function executar(funcao) {
    funcao();
}
function cumprimentar() {
    console.log('Bom dia!');
}

executar(cumprimentar);

function repetir(rept) {
    rept();
    rept();
    rept();
}
function aprender() {
    console.log('Estou aprendendo JavaScript!');
}
repetir(aprender);

function mensagem(nome) {
    console.log(`Olá, ${nome} `);
}
function executarMensagem(nome, mensagem) {
    callback(nome);
}
executarMensagem("Alex", mensagem);