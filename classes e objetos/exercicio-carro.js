class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    // definir um método (função/ação dentro de um objeto)
    valorGasto(quantidadeKm, preçoCombustivel) {
        return quantidadeKm * this.gastoMedioKm * preçoCombustivel;
    }

}

const virtus = new Carro('Wolksvagem', 'cinza', 1 / 13);
console.log(virtus.valorGasto(100, 5.30).toFixed(2));

const uno = new Carro('Fiat', 'branco', 1 / 7);
console.log(uno.valorGasto(100, 5.30).toFixed(2));





