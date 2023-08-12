/* formas de pagamento
1- dinheiro ou pix, com 15% de desconto
2- debito, com 10% de desconto
3- parcelado, com juros de 10%
4- 2 parcelas, sem juros
*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

let valorProduto = 100;

function escolherPagamento(formaPagamento) {
    if (formaPagamento === 1) {
        console.log(aplicarDesconto(valorProduto, 15));
    } else if (formaPagamento === 2) {
        console.log(aplicarDesconto(valorProduto, 10));
    } else if (formaPagamento === 3) {
        console.log(aplicarJuros(valorProduto, 10));
    } else {
        console.log(produto);
    }
}
escolherPagamento(3);


