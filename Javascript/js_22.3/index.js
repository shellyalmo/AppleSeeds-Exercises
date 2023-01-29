const hiddenSpan = document.getElementById("hidden-letter");
const letters = "abcdefghijklmnopqrstuvwxyz";
const randomLetter = randomLetterGenerator();
const gameMessage = document.getElementById("game-message");
const playAgainMessage = document.getElementById("play-again");
const newGameBtn = document.getElementById("new-game-btn");
const guessedLetters = document.getElementById("guessed-keys");
let guessedLettersString = "";

/**
 * generated random letter
 */
function randomLetterGenerator() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

// check if play again message is displayed
function checkPlayAgain() {
  if (playAgainMessage.style.display === "block") {
    window.addEventListener("keydown", function (e) {
      e.preventDefault();
      return false;
    });
  }
}

//check if letter was guessed
function wasGuessed(letter) {
  return guessedLettersString.includes(letter) ? true : false;
}

//change game message styling
function changeStyle(message, color) {
  gameMessage.innerText = message;
  gameMessage.style.color = color;
}

window.addEventListener("keypress", function (e) {
  if (letters.includes(e.key.toLowerCase())) {
    if (e.key.toLowerCase() === randomLetter) {
      changeStyle("Right letter!", "green");
      hiddenSpan.innerText = randomLetter;
      playAgainMessage.style.display = "block";
      checkPlayAgain();
    } else {
      changeStyle("Nope, wrong letter", "red");
      if (wasGuessed(e.key.toLowerCase())) {
        changeStyle("Don't use the same letter again!", "red");
      } else {
        guessedLettersString += e.key.toLowerCase();
        guessedLetters.innerText = guessedLettersString;
      }
    }
  } else {
    gameMessage.innerText = "Please type only letters";
    gameMessage.style.color = "red";
  }
});

newGameBtn.addEventListener("click", (e) => window.location.reload());
