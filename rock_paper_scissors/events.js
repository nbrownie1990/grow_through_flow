const userChoiceDisplay = document.querySelector("#user-choice-display");
const computerChoiceDisplay = document.querySelector(
  "#computer-choice-display"
);
const resultDisplay = document.querySelector("#result-display");
const gameGrid = document.querySelector("#game");
const resetButton = document.querySelector("#reset");
const userScore = document.querySelector("XXXX");
const userScoreDisplay = document.querySelector("#user-score-display");
const computerScore = document.querySelector("XXXXXX");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const winningScoreSelect = document.querySelector("#playto");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];
let userChoiceDisplay;
let computerChoiceDisplay;
let userScore = 0;
let computerScore = 0;
let winningScore = 5;
let isGameOver = false;

//Score-Tracker:
// if(!isGameOver){
//     userScore += 1;
//     if(userScore === winningScore)
//     isGameOver = true
//userScoreDisplay.classList.add("winner");
//computerScoreDisplay.classList.add("loser");
// }
// userScoreDisplay.textContent = userScore;
// }

// if(!isGameOver){
//     computerScore += 1;
//     if(computerScore === winningScore)
//     isGameOver = true
//computerScoreDisplay.classList.add("winner");
//userScoreDisplay.classList.add("loser");
// }
// computerScoreDisplay.textContent = computerScore;
// }

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  userScore = 0;
  userScoreDisplay.textContent = 0;
  computerScore = 0;
  computerScoreDisplay.textContent = 0;
  userScoreDisplay.classList.remove("winner", "loser");
  computerScoreDisplay.classList.remove("winner", "loser");
}

const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = `User Choice:  ${userChoice}`;
  generateComputerChoice();
  getResult();
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHtml = `Computer choice:  ${computerChoice}`;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "YOU WIN!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "YOU LOSE!";
    case "paperpaper":
    case "scissorscissor":
    case "rockrock":
      resultDisplay.innerHTML = "IT's A DRAW";
  }
};

//NicetoHave == badge mit eigenem Namen
// const h1 = document.querySelector("h1")
// let input = document.querySelector("#username")

// input.addEventListener("input", (e) =>{
//     if (input.value === ""){
//         p.innerText = "Enter Your Username";
//     } else{
//     p.innerText = `${input.value}`;
//     }
// });
