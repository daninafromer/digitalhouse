  // Armazenar a pontuação atual e o vencedor da rodada anterior
  var pontuacao = 0;
  var ultimoVencedor = null;
  
  var jogarNovamente = true;

while (jogarNovamente) {
  // Definir as opções do jogo
  var jogadaUsuario = prompt("Você quer jogar Pedra, Papel ou Tesoura? Para Pedra digite 1, para papel digite 2, para tesoura digite 3:");
  var jogadaUsuarioConvertida = Number(jogadaUsuario);

  // Selecionar uma opção aleatória para o computador
  var jogadaScript = Math.floor(Math.random() * 3) + 1;

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
        return "Você ganhou novamente! Parabéns! Você se tornou campeã(o)! Sua pontuação é " + pontuacao + ".";
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
  var resposta = prompt("Deseja jogar novamente? Digite 'sim' para jogar novamente ou qualquer outra coisa para sair:");

  // Verificar a resposta do usuário
  if (resposta.toLowerCase() !== "sim") {
    jogarNovamente = false;
  }
}

// Exibir mensagem de encerramento
alert("Obrigado por jogar! Até a próxima."); 
