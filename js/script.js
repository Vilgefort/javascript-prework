const buttonPaper = document.getElementById("button-paper");
const buttonRock = document.getElementById("button-rock");
const buttonScissors = document.getElementById("button-scissors");

function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + " został kliknięty");

  function getMoveName(argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage(
        "Nie znam ruchu o id " +
          argMoveId +
          '. Zakładam, że chodziło o "kamień".'
      );
      return "kamień";
    }
  }

  function displayResult(playerMove, computerMove) {
    console.log(
      "wywołano funkcję displayResults z argumentami: " +
        playerMove +
        ", " +
        computerMove
    );
    if (playerMove == "papier" && computerMove == "kamień") {
      printMessage("Wygrywasz!");
    } else if (playerMove == "kamień" && computerMove == "nożyce") {
      printMessage("Wygrywasz!");
    } else if (playerMove == "nożyce" && computerMove == "papier") {
      printMessage("Wygrywasz!");
    } else if (playerMove == computerMove) {
      printMessage("Remis");
    } else {
      printMessage("Przegrywasz :(");
    }
    printMessage("Zagrałem " + computerMove + ", a Ty " + playerMove);
  }
  let randomNumber, playerInput;
  console.log("wybór ruchu gracza to: " + playerInput);
  playerMove = buttonName;
  console.log("ruch gracza to: " + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener("click", function() {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function() {
  buttonClicked("papier");
});
buttonScissors.addEventListener("click", function() {
  buttonClicked("nożyce");
});
