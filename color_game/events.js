let numPalettes = 6;
let colors = [];
let pickedColor;
let palettes = document.querySelectorAll(".palette");
let colorDisplay = document.getElementById("color-display");
let messageDisplay = document.querySelector("#message");
let win = document.querySelector("#win");
let paletteContainer = document.querySelector(".palette-container");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let levelButtons = document.querySelectorAll(".level");

init();

function init() {
  setupLevelButtons();
  setupPalettes();
  reset();
}

function setupLevelButtons() {
  for (let i = 0; i < levelButtons.length; i++) {
    levelButtons[i].addEventListener("click", function () {
      levelButtons[0].classList.remove("selected");
      levelButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy"
        ? ((numPalettes = 3), (paletteContainer.style.height = "4rem"))
        : ((numPalettes = 6), (paletteContainer.style.height = "8rem"));
      reset();
    });
  }
}
//  looping through palettes to apply color from colors array
function setupPalettes() {
  for (let i = 0; i < palettes.length; i++) {
    //add click events to palettes
    palettes[i].addEventListener("click", function () {
      //grab color of clicked palettes
      let clickedColor = this.style.background;
      //compare color to pickedColor & see if it matches
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        //turns all other palettes to the right answer color
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        win.style.display = "grid";
        resetButton.textContent = "Play Again?";
      } else {
        this.style.background = "black";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numPalettes);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  win.style.display = "none";
  //   winnerDisplay.textContent = "";

  //change colors of palettes
  for (let i = 0; i < palettes.length; i++) {
    if (colors[i]) {
      palettes[i].style.display = "block";
      palettes[i].style.background = colors[i];
    } else {
      palettes[i].style.display = "none";
    }
  }
  h1.style.background = "rgba(0, 0, 0, 0.8)";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  //loop through all palettes
  for (let i = 0; i < palettes.length; i++) {
    //change each color to match given color
    palettes[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //repeat num times
  for (let i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  let r = Math.floor(Math.random() * 256);
  //pick a "green" from  0 -255
  let g = Math.floor(Math.random() * 256);
  //pick a "blue" from  0 -255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
