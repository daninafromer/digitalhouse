//Passo 5
// Crie um método para o objeto curso que receba um aluno (como parâmetro)
// e retorne true se ele aprovou no curso ou false em caso de reprovação.
// Para ser aprovado, o aluno tem que ter uma média igual ou acima da 
// nota de aprovação  e ter menos faltas que faltas máximas.Se tiver a mesma 
// quantidade, tem que estar 10% acima da nota de aprovação.

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
    }
};

console.log(curso);
module.exports = curso;