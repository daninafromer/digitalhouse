var usuarioDesejaJogar = confirm("Você quer jogar Pedra, Papel ou Tesoura?")
let vitorias = 0
let derrotas = 0

function segueOJogo(){
    let jogadaUsuario = prompt("Escolha um número: 1-papel, 2-tesoura, 3-pedra")
    let jogadaOponente = Math.floor(Math.random() * 3) + 1

    console.log("Você escolheu " + jogadaUsuario)
    console.log("Seu oponente escolheu " + jogadaOponente)
}

function pontuacao(){
    let jogadaUsuario = prompt("Escolha um número: 1-papel, 2-tesoura, 3-pedra")
    let jogadaOponente = Math.floor(Math.random() * 3) + 1

    console.log("Você escolheu " + jogadaUsuario)
    console.log("Seu oponente escolheu " + jogadaOponente)

    if(jogadaOponente == jogadaUsuario){
        console.log("Deu empate.")
        console.log("Vitórias: " + vitorias)
        console.log("Derrotas: " + derrotas)
        pontuacao()
    }
    else if(jogadaOponente === 1 && jogadaUsuario === 3){
        console.log("O papel ganha da pedra embrulhando-a.")
        derrotas = derrotas + 1
        console.log("Vitórias: " + vitorias)
        console.log("Derrotas: " + derrotas)
        if(derrotas === 2){
            console.log("Você perdeu duas vezes. O jogo acabou.")
            console.log(usuarioDesejaJogar)
        }
        else{
            pontuacao()
        }
    }
    else if(jogadaOponente === 3 && jogadaUsuario ===1){
        console.log("O papel ganha da pedra embrulhando-a.")
        vitorias = vitorias + 1
        console.log("Vitórias: " + vitorias)
        console.log("Derrotas: " + derrotas)
        if(vitorias === 2){
            console.log("Você venceu. Parabéns!")
            console.log(usuarioDesejaJogar)
        }
        else{
            pontuacao()
        }
    }
    else if(jogadaOponente < jogadaUsuario){
        console.log("Você ganhou!")
        vitorias = vitorias + 1
        console.log("Vitórias: " + vitorias)
        console.log("Derrotas: " + derrotas)
        if(vitorias === 2){
            console.log("Você venceu. Parabéns!")
            console.log(usuarioDesejaJogar)
        }
        else{
            pontuacao()
        }
    }
    else if(jogadaOponente > jogadaUsuario){
        console.log("Você perdeu!")
        derrotas = derrotas + 1
        console.log("Vitórias: " + vitorias)
        console.log("Derrotas: " + derrotas)
        if(derrotas === 2){
            console.log("Você perdeu duas vezes. O jogo acabou.")
            console.log(usuarioDesejaJogar)
        }
        else{
            pontuacao()
        }
    }
}

if(usuarioDesejaJogar === true){

    pontuacao()

}else {
    alert("Então pegue descendo.")

}

