
let produto = 500.00;
let formaPagamento = 'pix';

let pagPixDinheiro = produto - ((15 / 100) * produto);
let pagDebito = produto - ((10 / 100) * produto);
let pag2x = produto;
let parcelado = ((10 / 100) * produto) + produto;

if (formaPagamento === 'pix' || formaPagamento === 'dinheiro') {
    console.log(pagPixDinheiro);
} else if (formaPagamento === 'debito'){
    console.log(pagDebito);
} else if (formaPagamento === 'parcelado'){
    console.log(parcelado);
} else {
    console.log(pag2x);
}

