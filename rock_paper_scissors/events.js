const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.querySelector("#game");
const reset = document.querySelector("#reset");
const userScore = document.querySelector("#user-score");
const userScoreDisplay = document.querySelector("XXXX");
const computerScore = document.querySelector("#computer-score");
const computerScoreDisplay = document.querySelector("XXXX");
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
// }
// userScoreDisplay.textContent = userScore;
// }

// if(!isGameOver){
//     computerScore += 1;
//     if(computerScore === winningScore)
//     isGameOver = true
// }
// computerScoreDisplay.textContent = computerScore;
// }

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
