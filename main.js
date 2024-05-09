let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerImg = document.createElement('img');
    const choices = ['Kő', 'Papír', 'Olló'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (computerChoice == 'Kő') {
      computerImg.setAttribute('src', 'images/rock.jpg');
  }
  if (computerChoice == 'Papír') {
      computerImg.setAttribute('src', 'images/paper.jpg');
  }
  if (computerChoice == 'Olló') {
      computerImg.setAttribute('src', 'images/scissors.jpg');
  }
    let result;
    document.getElementById("result").innerHTML = result;
    const main = document.getElementById('computerChoice');
    main.innerHTML = "";
    main.appendChild(computerImg);

    if (!playerChoice) {
        result = "Válassz!";
    } else if (playerChoice === computerChoice) {
        result = "Döntetlen!";
    } else if (
        (playerChoice === "Kő" && computerChoice === "Olló") ||
        (playerChoice === "Papír" && computerChoice === "Kő") ||
        (playerChoice === "Olló" && computerChoice === "Papír")
    ) {
        result = "Nyertél!";
        playerScore++;
    } else {
        result = "Vesztettél!";
        computerScore++;
    }

    document.getElementById("score").innerHTML = `Játékos: ${playerScore} - Számítógép: ${computerScore}`;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score").innerHTML = `Játékos: ${playerScore} - Számítógép: ${computerScore}`;
}
