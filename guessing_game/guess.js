// JavaScript
function startGame() {
  let maximum = parseInt(prompt("Enter your max-number!"));
  while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
  }

  const targetNum = Math.floor(Math.random() * maximum) + 1;

  let guess = parseInt(prompt("Enter your first guess:"));
  let attempts = 1;

  while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break;
    attempts++;
    if (guess > targetNum) {
      guess = prompt(
        "Too high! Enter new guess: (you can quit the game by typing 'quit')"
      );
    } else {
      guess = prompt(
        "Too low! Enter a new guess: (you can quit the game by typing 'quit')"
      );
    }
  }
  if (guess === "quit") {
    alert("OK, You Quit");
  } else {
    alert("Congrats you win!");

    let answerElement = document.getElementById("winner");
    answerElement.innerText = `WINNER\n Your guess ${guess} is right!! \n You tried it ${attempts} times`;
  }
}
