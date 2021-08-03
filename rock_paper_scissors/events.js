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
gameGrid.append(
  `User:${userChoiceDisplay} vs. Computer: ${computerChoiceDisplay}`
);

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

function win(user, computer) {
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
  resultDisplay.innerHTML = "YOU WIN!";
}

function lose(user, computer) {
  resultDisplay.innerHTML = "YOU LOSE!";
  //Score-Tracker:
  // if(!isGameOver){
  //     computerScore += 1;
  //     if(computerScore === winningScore)
  //     isGameOver = true
  //computerScoreDisplay.classList.add("winner");
  //userScoreDisplay.classList.add("loser");
  // }
  // computerScoreDisplay.textContent = computerScore;
  // }
}

function draw(user, computer) {
  resultDisplay.innerHTML = "IT's A DRAW";
}

//WINNING SCORE
// winningScoreSelect.addEventListener("change", function () {
//   winningScore = parseInt(this.value);
//   reset();
// });

//RESET
// // resetButton.addEventListener("click", reset);

// function reset() {
//   isGameOver = false;
//   userScore = 0;
//   userScoreDisplay.textContent = 0;
//   computerScore = 0;
//   computerScoreDisplay.textContent = 0;
//   userScoreDisplay.classList.remove("winner", "loser");
//   computerScoreDisplay.classList.remove("winner", "loser");
// }

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
