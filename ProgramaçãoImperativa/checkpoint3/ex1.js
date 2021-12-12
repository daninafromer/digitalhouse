// Passo1
// Crie um objeto aluno que tenha como atributos:
// nome (string), quantidade de faltas (number) e notas (array de números).
// Crie um construtor para ele e importe-o como o módulo aluno.


aluno ={
    nome: "Danina",
    quantidadeDeFaltas: 0,
    notas: [10,10,10],
    constructor(nome, quantidadeDeFaltas, notas){
        this.nome = nome
        this.quantidadeDeFaltas = quantidadeDeFaltas
        this.notas = notas
    }
};

module.exports = aluno;