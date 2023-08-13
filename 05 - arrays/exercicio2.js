/*
let lista = [2, 3, 5, 6, 18, 32, 24, 15];

for (let i = 0; i < lista.length; i++) {
    const numeros = lista[i];
    console.log(numeros);
}
*/

// IMPRIMIR APENAS NUMEROS PARES
let lista2 = [2, 3, 5, 6, 18, 32, 24, 15];

for (let i = 0; i < lista2.length; i++) {
    const numeros2 = lista2[i];
    if (numeros2 % 2 === 0) {
        console.log(numeros2);
    }
}