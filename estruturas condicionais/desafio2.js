let etanolPrice = 3.50;
let gasolinaPrice = 5.79;
let carCombutivelEtanol = 'etanol';
let carCombutivelGasolina = 'gasolina';
let gastoMedioCombustivelKm = 10;
let travelDistance = 100;

let combustivel = travelDistance / gastoMedioCombustivelKm;
let priceTravelGasolina = combustivel * gasolinaPrice;
let priceTravelEtanol = combustivel * etanolPrice;

if (carCombutivelGasolina){
    console.log('gasolina ' + priceTravelGasolina.toFixed(2))
} else {
    console.log('etanol ' + priceTravelEtanol.toFixed(2))
}

