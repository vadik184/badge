const startContainer = document.querySelector(".start-container");
const startButton = document.querySelector(".start-button");
// const maleButton = document.querySelector(".male-button");
// const femaleButton = document.querySelector(".female-button");
const mainContainer = document.querySelector(".main-container");
let maleButton;
let femaleButton;

function openGender() {
  startContainer.style.display = "none";
  startButton.style.display = "none";

  maleButton = document.createElement("button");
  maleButton.classList.add("male-button");
  maleButton.textContent = "хлопець";
  mainContainer.append(maleButton);
  maleButton.addEventListener("click", createText);

  femaleButton = document.createElement("button");
  femaleButton.classList.add("female-button");
  femaleButton.textContent = "дівчина";
  mainContainer.append(femaleButton);

  console.log(maleButton, femaleButton);

  return maleButton, femaleButton;
}

function createText() {
  maleButton.style.display = "none";
  femaleButton.style.display = "none";
  const textBoy = document.createElement("p");
  textBoy.style.width = "100px";
  textBoy.style.height = "100px";
  textBoy.style.backgroundColor = "red";
  textBoy.textContent = "я хлопець";
  console.log(textBoy);
  mainContainer.appendChild(textBoy);
}
startButton.addEventListener("click", openGender);
