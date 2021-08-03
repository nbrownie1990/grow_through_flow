//USER CHOICES
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userChoiceDisplay = document.querySelector("#user-choice-display");
//COMP CHOICES
const computerChoiceDisplay = document.querySelector(
  "#computer-choice-display"
);
//RESULTS
const resultDisplay = document.querySelector("#result-display");
const gameGrid = document.querySelector("#game");

//SCORES
let userScore = 0;
const userScoreDisplay = document.querySelector("#user-score-display");
const computerScore = 0;
const computerScoreDisplay = document.querySelector("#computer-score-display");
let winningScore = 5;
const winningScoreSelect = document.querySelector("#playto");
const resetButton = document.querySelector("#reset");
let isGameOver = false;

/////////////////////////////
function game(userChoice) {
  userChoiceDisplay.innerHTML = `${userChoice}`;
  let computerChoice = generateComputerChoice();

  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      win(userChoice, computerChoice);
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      lose(userChoice, computerChoice);
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      draw(userChoice, computerChoice);
      break;
  }
}

//MAIN / USERCHOICE
function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });

  paper.addEventListener("click", function () {
    game("paper");
  });

  scissors.addEventListener("click", function () {
    game("scissors");
  });
}
main();

//COMP CHOICE
const generateComputerChoice = function () {
  let choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = `${computerChoice}`;
  return computerChoice;
};

function win(userChoice, computerChoice) {
  resultDisplay.innerHTML = "you WIN";
  resultDisplay.classList.remove("draw", "loser");
  resultDisplay.classList.add("winner");
  gameGrid.innerHTML = `<i class="fas fa-user-ninja"></i>: ${userChoice} __beats__ ${computerChoice} : <i class="fas fa-robot"></i>  `;

  if (!isGameOver) {
    userScore += 1;
    if (userScore === winningScore) {
      isGameOver = true;
      userScoreDisplay.classList.add("winner");
      computerScoreDisplay.classList.add("loser");
    }
    userScoreDisplay.textContent = userScore;
  }
}

function lose(userChoice, computerChoice) {
  resultDisplay.innerHTML = "Arghh... you LOSE";
  resultDisplay.classList.remove("winner", "draw");
  resultDisplay.classList.add("loser");
  gameGrid.innerHTML = `<i class="fas fa-user-ninja"></i>: ${userChoice} __fails to__ ${computerChoice} : <i class="fas fa-robot"></i>  `;

  //Score-Tracker:
  if (!isGameOver) {
    computerScore += 1;
    if (computerScore === winningScore) isGameOver = true;
    computerScoreDisplay.classList.add("winner");
    userScoreDisplay.classList.add("loser");
  }
  computerScoreDisplay.textContent = computerScore;
}

function draw(userChoice, computerChoice) {
  resultDisplay.innerHTML = "IT's A DRAW";
  resultDisplay.classList.remove("winner", "loser");
  resultDisplay.classList.add("draw");

  gameGrid.innerHTML = `<i class="fas fa-user-ninja"></i>: ${userChoice} __samesame__ ${computerChoice} : <i class="fas fa-robot"></i>  `;
}

//WINNING SCORE
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

//RESET
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  userScore = 0;
  userScoreDisplay.textContent = 0;
  computerScore = 0;
  computerScoreDisplay.textContent = 0;
  userScoreDisplay.classList.remove("winner", "loser");
  userScoreDisplay.classList.add("draw");
  userScoreDisplay.classList.remove("winner", "loser");
  computerScoreDisplay.classList.add("draw");
}

//NicetoHave == badge mit eigenem Namen
const h2 = document.querySelectorAll("h2")[0];
const formInput = document.querySelector("#form-input");
const usernameInput = document.querySelector("#username-input");
const input = document.querySelector("#username");

input.addEventListener("input", (e) => {
  if (input.value === "") {
    h2.innerText = "Username";
  } else {
    h2.innerText = `${input.value}`;
  }
});

// document.onkeydown.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let keyCode = "Enter";
//   input.submit();
//   formInput.appendChild(newUsername);
//   input.style.visibility = "hidden";
// });
