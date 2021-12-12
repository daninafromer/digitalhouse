// Passo 2
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

aluno ={
    nome: "Danina",
    quantidadeDeFaltas: 0,
    notas: [10,10,10],
    constructor(nome, quantidadeDeFaltas, notas){
        this.nome = nome
        this.quantidadeDeFaltas = quantidadeDeFaltas
        this.notas = notas
    },
    calculaMedia(){
        let soma = this.notas.reduce((a, b) => a + b, 0)
        let avg = (soma / this.notas.length) || 0

        return avg
    },
    faltas(){
        this.quantidadeDeFaltas = this.quantidadeDeFaltas + 1
    }
};


module.exports = aluno;