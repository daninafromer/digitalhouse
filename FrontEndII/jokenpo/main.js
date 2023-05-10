// Armazenar a pontuação atual e o vencedor da rodada anterior
var pontuacao = 0;
var ultimoVencedor = null;
var jogarNovamente = true;
var nivelDificuldade = null;

while (jogarNovamente) {
  if (nivelDificuldade === null || ultimoVencedor === "computador") {
    // Definir o nível de dificuldade
    nivelDificuldade = prompt("Escolha o nível de dificuldade: fácil, médio ou difícil");
    nivelDificuldade = nivelDificuldade.toLowerCase();
  }
  // Definir a jogada do usuário
  var jogadaUsuario = prompt("Você quer jogar Pedra, Papel ou Tesoura? Para Pedra digite 1, para papel digite 2, para tesoura digite 3:");
  var jogadaUsuarioConvertida = Number(jogadaUsuario);

  // Verificar se a jogada do usuário é válida
  if (jogadaUsuarioConvertida >= 1 && jogadaUsuarioConvertida <= 3) {
    var jogadaScript = null;

    // Verificar o nível de dificuldade e gerar a jogada do computador
    if (nivelDificuldade === "fácil") {
      jogadaScript = Math.floor(Math.random() * 3) + 1;
    } else if (nivelDificuldade === "médio") {
      jogadaScript = Math.floor(Math.random() * 5) + 1;
    } else if (nivelDificuldade === "difícil") {
      jogadaScript = Math.floor(Math.random() * 7) + 1;
    } else {
      alert("Nível de dificuldade inválido! Por favor, escolha entre fácil, médio ou difícil.");
      continue;
    }

    // Determinar quem ganhou a rodada
  function playRound(jogadaUsuarioConvertida, jogadaScript) {
    if (jogadaUsuarioConvertida === jogadaScript) {
      return " Deu empate!";
    } else if (
      (jogadaUsuarioConvertida === 1 && jogadaScript === 3) ||
      (jogadaUsuarioConvertida === 2 && jogadaScript === 1) ||
      (jogadaUsuarioConvertida === 3 && jogadaScript === 2)
    ) {
      // Se o jogador ganhar duas vezes seguidas, atualizar a pontuação
      if (ultimoVencedor === "jogador") {
        pontuacao++;
        return "Você ganhou novamente! Parabéns! Você se tornou campeã(o)!";
      } else {
        ultimoVencedor = "jogador";
        return "Você ganhou essa batalha, mas para ser campeã(o), precisa ganhar duas vezes!";
      }
    } else {
      // Se o computador ganhar duas vezes seguidas, reiniciar a pontuação
      if (ultimoVencedor === "computador") {
        pontuacao = 0;
        ultimoVencedor = null;
        return "Você perdeu novamente! Sua pontuação foi reiniciada.";
      } else {
        ultimoVencedor = "computador";
        return "Você perdeu!";
      }
    }
  }
    // Executar uma rodada do jogo
    const result = playRound(jogadaUsuarioConvertida, jogadaScript);

    // Exibir o resultado
    alert("Você jogou " + jogadaUsuarioConvertida + " e o computador jogou " + jogadaScript + ". " + result);

    // Perguntar ao usuário se ele deseja jogar novamente
    
  } else {
    alert("Opção inválida! Por favor, digite 1 para Pedra, 2 para Papel ou 3 para Tesoura.");
  }
}
var resposta = prompt("Deseja jogar novamente? Digite 'sim' para jogar novamente ou qualquer outra coisa para sair:");

    // Verificar a resposta do usuário
    if (resposta.toLowerCase() !== "sim") {
      jogarNovamente = false;
    }
// Exibir mensagem de encerramento
alert("Obrigado por jogar! Até a próxima.")

