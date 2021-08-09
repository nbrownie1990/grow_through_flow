//CLOCK//
const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});

//CLOCK End

//COFFEE BUTTON
const coffeeButton = document.querySelector("#coffee-btn");
const audio = document.querySelector(".coffee-sound");

const getAnswer = async () => {
  const answerOption = await coffeeGod();
  answer.innerHTML = `${answerOption}`;
};

function coffeeGod() {
  let dayTime = new Date().getHours();
  if (dayTime >= 15)
    return (answer.innerHTML = `Nö, sonst kannst <br> du wieder nicht <br> einschlafen...`);
  else if (dayTime >= 4 && dayTime <= 8) {
    audio.play();
    return (answer.innerHTML =
      "Oh ja, <br> den brauchst du jetzt <br> auf jeden Fall!");
  } else {
    audio.play();
    return (answer.innerHTML = "Ja, unbedingt! :)");
  }
}

//LOADER
const loader = document.querySelector("#coffee-loader");

function load() {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
}

coffeeButton.addEventListener("click", async () => {
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
  }, 1500);
  setTimeout(getAnswer, 2000);
});

//LOADER End
