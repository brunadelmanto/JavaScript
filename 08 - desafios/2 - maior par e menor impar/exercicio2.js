// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcao-auxiliar2');

const n = gets(); // NUMERO DE ELEMENTOS QUE VAI RECEBER
let maiorNumeroPar = 0; // OU null
let menorNumeroImpar = 0; // OU null

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar || maiorNumeroPar === null) {
            maiorNumeroPar = numero;
        }
    } else {
        if (numero < menorNumeroImpar || menorNumeroImpar === 0 || maiorNumeroPar === null) {
            menorNumeroImpar = numero;
        }
    }
}

print('Maior número par: ' + maiorNumeroPar);
print('Menor número impar: ' + menorNumeroImpar);

