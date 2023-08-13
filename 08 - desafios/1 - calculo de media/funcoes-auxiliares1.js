const entradas = [5.5]; // ENTRADA PARA GETS
let i = 0;

function gets() {
    const valor = entradas[i]; // PARA ACESSAR A LISTA DE DADOS DA ENTRADA
    i++;
    return valor;
}

function print(texto) { // PARA IMPRIMIR
    console.log(texto);
}

module.exports = { gets, print }; // PARA EXPORTAR AS FUNÇÕES DECLARADAS