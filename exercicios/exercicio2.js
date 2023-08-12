// alt + shift + f = organiza o código

let peso = 64;
let altura = 1.65;

let imc = peso / (altura * altura);
// Match.pow(altura,2); pow é a função da classe Match, do calculo ao quadrado

console.log(imc.toFixed(2));


if (imc < 18.5) {
    console.log('Abaixo do peso.');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal.');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso.');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso.');
} else {
    console.log('Obesidade grave.');
}