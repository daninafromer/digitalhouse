// Passo 4
// Crie o método que permite adicionar alunos à lista do curso, ou seja, 
// quando chamamos nosso método em nosso objeto curso, deverá adicionar 
// um aluno a mais na propriedade lista de estudantes do objeto curso.

aluno = require('./ex1.js');
let curso = {
    nome_do_curso: "CTD",
    notaDeAprovacao: 10,
    faltasMaximas: 1,
    listaDeEstudantes: [aluno],
    adicionarAluno(novoAluno){
        this.listaDeEstudantes.push(novoAluno)
    }
};

console.log(curso);
module.exports = curso;