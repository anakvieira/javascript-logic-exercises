/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:

À vista Débito, recebe 10% de desconto;
À vista no Dinheiro ou PIX, recebe 15% de desconto;
Em duas vezes, preço normal de etiqueta sem juros;
Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const precoEtiqueta = 100;
const meioDePagamento = "Dinheiro";
const quantidadeParcelamento = 1;
let desconto;
let pagamentoTotal;
let juros;

if(meioDePagamento === "Débito") {
    desconto = precoEtiqueta * 0.10;
    pagamentoTotal = precoEtiqueta - desconto;
} else if(meioDePagamento === "Crédito" && quantidadeParcelamento < 2){
    desconto = precoEtiqueta;
    pagamentoTotal = precoEtiqueta - desconto;
} else if(meioDePagamento === "Crédito" && quantidadeParcelamento > 2){
    juros = precoEtiqueta * 0.10;
    pagamentoTotal = precoEtiqueta + juros;
} else if(meioDePagamento === "Dinheiro" || "PIX"){
    desconto = precoEtiqueta * 0.15;
    pagamentoTotal = precoEtiqueta - desconto;
}

console.log(pagamentoTotal);