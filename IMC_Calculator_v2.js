/* O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC: IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

Tabela:

Abaixo de 18.5: Abaixo do peso;
Entre 18.5 e 24.9: Peso normal;
Entre 25 e 29.9: Acima do peso;
Entre 30 e 34.9: Obesidade Grau I;
Entre 35 e 39.9: Obesidade Grau II;
Acima de 40: Obesidade Grau III; */

function calcularImc(pesoAdulto, alturaAdulto) {
    return pesoAdulto / (Math.pow(alturaAdulto,2));
}

function classificarImc(imc) {
    if(imc < 18.5) {
        return `Abaixo do peso`;
    } else if(imc < 24.9) {
        return `Peso Normal`;
    } else if(imc < 29.9) {
        return `Acima do peso`;
    } else if(imc < 34.9) {
        return `Obesidade Grau I`;
    } else if(imc < 39.9) {
        return `Obesidade Grau II`;
    } else {
        return `Obesidade Grau III`;
    } 
}

(function () {
    const pesoAdulto = 70;
    const alturaAdulto = 1.62;

    const imc = calcularImc(pesoAdulto, alturaAdulto);
    console.log(imc.toFixed(2));
    console.log(classificarImc(imc));
})(); 

