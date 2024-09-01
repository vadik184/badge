const startContainer = document.querySelector(".start-container");
const startButton = document.querySelector(".start-button");
const maleButton = document.querySelector(".male-button");
const femaleButton = document.querySelector(".female-button");
const mainContainer = document.querySelector(".main-container");

function openGender() {
  startContainer.style.display = "none";
  startButton.style.display = "none";

  maleButton.style.display = "block";
  femaleButton.style.display = "block";
  return maleButton, femaleButton;
}
startButton.addEventListener("click", openGender);
