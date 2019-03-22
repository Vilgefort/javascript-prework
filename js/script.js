var computerMove, playerMove;
computerMove = "kamień";
printMessage(
  "Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!"
);
playerMove = "papier";
printMessage("papier");

var playerInput, playerMove;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);
if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
} else {
  playerMove = "nieznany ruch";
}
printMessage("Twój ruch: " + playerMove);
