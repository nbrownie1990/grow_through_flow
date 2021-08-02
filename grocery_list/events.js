const form = document.querySelector("form");
let list = document.querySelector("#list");
let listArea = document.querySelector(".listArea");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newList = document.createElement("li");
  let prodTxt = document.querySelector("#product").value;
  let qtyTxt = document.querySelector("#qty").value;
  const delButton = document.createElement("button");
  delButton.innerHTML = '<i class="fas fa-times-circle"> </i>';
  newList.innerText = `${qtyTxt} ${prodTxt}`;
  delButton.classList.add("delete-btn");
  newList.appendChild(delButton);
  list.appendChild(newList);
  form.elements.product.value = "";
  form.elements.qty.value = "";
});

listArea.addEventListener("click", (e) => {
  const item = e.target;
  const toBuy = item.parentElement;
  item.nodeName === "BUTTON" && toBuy.remove();
});
