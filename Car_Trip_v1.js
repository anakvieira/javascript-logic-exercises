// Aula de variáveis e operadores em JS

// Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em Km da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

let calculoValor = ((distanciaEmKm / kmPorLitros) * precoCombustivel);

console.log(calculoValor.toFixed(2));