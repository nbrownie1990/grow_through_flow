const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
    document.querySelector(
      "#nav"
    ).innerText = `hey ${card.id} - you are looking soo good!`;
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
