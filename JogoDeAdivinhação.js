function gerarNumero() {
  return Math.floor(Math.random() * 100) + 1;
}

function solicitarPalpite(tentativa) {
  const resposta = prompt(`Tentativa ${tentativa}/5\nInsira um número de 1 a 100:`);
  if (resposta === null) {
    alert("Jogo encerrado pelo usuário.");
    return null;
  }
  const palpite = Number(resposta);
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    alert("Entrada inválida. Tente novamente.");
    return solicitarPalpite(tentativa);
  }
  return palpite;
}

function verificarPalpite(palpite, alvo) {
  if (palpite === alvo) {
    return "acertou";
  }
  return palpite < alvo ? "maior" : "menor";
}

function controladorDeTentativas() {
  const alvo = gerarNumero();
  let tentativas = 0;
  let acertou = false;

  while (tentativas < 5 && !acertou) {
    tentativas++;
    const palpite = solicitarPalpite(tentativas);
    if (palpite === null) {
      return; // usuário cancelou o jogo
    }

    const status = verificarPalpite(palpite, alvo);

    if (status === "acertou") {
      alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
      acertou = true;
    } else {
      alert(`Tente um número ${status}.`);
    }
  }

  if (!acertou) {
    alert(`Suas tentativas acabaram. O número era ${alvo}.`);
  }
}

// Início do jogo
do {
  controladorDeTentativas();
} while (confirm("Deseja jogar novamente?"));