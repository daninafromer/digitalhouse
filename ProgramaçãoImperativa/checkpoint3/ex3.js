// Passo 3
// Em um arquivo diferente, crie o objeto literal curso que tem como atributos:
// nome do curso (string), nota de aprovação (number), faltas máximas (number) 
// e uma lista de estudantes (um array composto pelos alunos criados no passo 1)

aluno = require('./ex1.js');
let curso = {
    nome_do_curso: "CTD",
    notaDeAprovacao: 10,
    faltasMaximas: 1,
    listaDeEstudantes: [aluno],
};

console.log(curso);
module.exports = curso;