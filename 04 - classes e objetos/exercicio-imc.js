class Pessoa {
    // atributos de Pessoa
    nome;
    peso;
    altura;

    // criar o construtor de objetos
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    // método da classe Pessoa *não precisa de parâmetros* porque já está dentro da classe
    valorImc() {
        return this.peso / (this.altura * this.altura);  // ou usar Math.pow(altura,2);
    }

    classificarImc(){
    const imc = this.valorImc();
    // atalho: segurar ALT para selecionar várias linhas e mudar console para return. CNTRL+DELETE apaga até o final
    if (imc < 18.5) {
        return ('Abaixo do peso.');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal.');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso.');
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso.');
    } else {
        return ('Obesidade grave.');
    }

    }
}

// criar e instanciar um objeto Pessoa
const jose = new Pessoa('José', 100, 1.75);
console.log(jose.classificarImc());

const bruna = new Pessoa('Bruna', 64, 1.65);
console.log(bruna.classificarImc());

