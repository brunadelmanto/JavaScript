/* Arrays
push = adicionar
pop = exclui e mostra o ultimo 
shift = exclui e mostra o primeiro
length = tamanho da lista
*/

// Estruturas de repetição para percorrer as listas
// FOR LOOP
const nome = 'Bruna Delmanto';
console.log(nome.length);

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}

// NOTAS
const notas = [];
notas.push(5);
notas.push(6);
notas.push(8);
notas.push(4);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

/* DEPURAR (debug)
usar o ponto de interrupção (break point) = o código para no ponto e executamos linha a linha para encontrar o erro
menu lateral > executar e depuraru > node.js
*/