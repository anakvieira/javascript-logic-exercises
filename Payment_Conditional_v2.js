function aplicarDesconto(valor, desconto) {
    return (precoEtiqueta - (precoEtiqueta * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (precoEtiqueta + (precoEtiqueta * (juros / 100)));
}

const precoEtiqueta = 130;
const meioDePagamento = "Crédito";
const quantidadeParcelamento = 5;


if(meioDePagamento === "Débito") {
    pagamentoTotal = aplicarDesconto(precoEtiqueta, 10);
} else if(meioDePagamento === "Crédito" && quantidadeParcelamento < 2) {
    pagamentoTotal = precoEtiqueta;
} else if(meioDePagamento === "Crédito" && quantidadeParcelamento > 2) {
    pagamentoTotal = aplicarJuros(precoEtiqueta, 10);
} else if(meioDePagamento === "Dinheiro" || "PIX"){
    pagamentoTotal = aplicarDesconto(precoEtiqueta, 15);
}

console.log(pagamentoTotal);