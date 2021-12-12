//passo 6
//Passo 6 (2 pontos)
//Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array
// de booleanos com os resultados se os alunos aprovaram ou não. 

aluno = require('./ex2.js');
let curso = {
    nome_do_curso: "CTD",
    notaDeAprovacao: 6,
    faltasMaximas: 10,
    listaDeEstudantes: [aluno],
    adicionarAluno(novoAluno){
        this.listaDeEstudantes.push(novoAluno)
    },
    aprovou(param){
        if(param.calculaMedia() >= this.notaDeAprovacao && param.quantidadeDeFaltas < this.faltasMaximas){
            return true;
        }
        else if(param.calculaMedia() >= (1.10*(this.notaDeAprovacao)) && param.quantidadeDeFaltas == this.faltasMaximas){
            return true;
        }
        else{
            return false;
        }
    },
    alunosAprovados(){
        return this.listaDeEstudantes.map((value, item)=>{return this.aprovou(value)});
    }
};

console.log(curso);
module.exports = curso;