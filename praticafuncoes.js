
function saudacao(nome = "") {
    if (nome) {
        console.log(`Olá, ${nome} Bem-vindo(a)!`);
    } else {
        console.log('Olá! Bem-vindo(a)!');
        
    }
}
saudacao("Alexandre");
saudacao();

//Exercício 2
function calculaDesconto(preco, desconto = 10) {
    const valorFinal = preco - (preco * (desconto / 100));
    return valorFinal;
}

console.log(calculaDesconto(90, 30));

