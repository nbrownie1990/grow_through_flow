// JavaScript
function startGame() {
  alert("Willkommen beim Zahlenratespiel :)");
  let maximum = parseInt(prompt("Gebe deine Höchstzahl ein!"));
  while (!maximum) {
    maximum = parseInt(prompt("Gib bitte eine valide Zahl ein."));
  }

  const targetNum = Math.floor(Math.random() * maximum) + 1;

  let guess = parseInt(prompt("Gib deine erste Schätzung ab:"));
  let attempts = 1;

  while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break;
    attempts++;
    if (guess > targetNum) {
      guess = prompt(
        "Zu hoch! Versuch es nochmal: (Du kannst das Spiel beenden mit 'quit')"
      );
    } else {
      guess = prompt(
        "Zu hoch! Versuch es nochmal: (Du kannst das Spiel beenden mit 'quit')"
      );
    }
  }
  if (guess === "quit") {
    alert("OK, beendet");
  } else {
    alert("Glückwunsch du hast gewonnen!");

    let answerElement = document.getElementById("winner");
    answerElement.innerText = `Gewonnen!\n Deine Schätzung ${guess} ist richtig!! \n Du hast ${attempts} Versuche gebraucht`;
  }
}
