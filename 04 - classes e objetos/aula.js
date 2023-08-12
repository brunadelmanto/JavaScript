class Pessoa {
    // atributos da classe
    nome;
    idade;
    anoDeNascimento;

    // construtor para criar objetos
    constructor(nome, idade) {
        this.nome = nome; // aponta que o atributo é o mesmo que o parametro
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;

    }
}

// criar função para comparar
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        // atenção para usar crase (`) ao invés de aspas simples (') quando usa-se ${}.
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais nova que ${p2.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}

// criar objeto
const bruna = new Pessoa('Bruna', 28);
const emilio = new Pessoa('Emilio', 30);

console.log(emilio);
console.log(bruna);

compararPessoas(bruna, emilio);
