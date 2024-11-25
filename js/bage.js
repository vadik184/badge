document
  .querySelector(".main-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const gender = document.querySelector(
      'input[name="gender-choise"]:checked'
    ).value;

    const name = document.getElementById("input-name").value;
    const position = document.getElementById("select-position").value;
    const maleColor = document.querySelector(
      'input[name="male-color"]:checked'
    ).value;
    console.log(maleColor);

    function malePic() {
      if (maleColor === "brunette") {
        return "../img/male2.png";
      } else {
        return "../img/male-blond-2.png";
      }
    }
    // Створюємо об'єкт з даними
    const formData = {
      gender: gender,
      name: name,
      position: position,
    };

    console.log("Збережені дані у змінній formData:", formData);
    function genderChoise() {
      if (gender === "male") {
        return `<img
              class="avatarWithBody"
              src="../img/male2.png"
              alt="avatar"
            /><span></span>`;
      } else {
        return `<img src = "../img/female.png" alt="avatar" />`;
      }
    }
    // Створюємо нову сторінку формату A4
    const newWindow = window.open("", "_blank", "width=842,height=1190"); // A4 в пікселях при 72dpi

    // HTML-контент для нової сторінки
    const bageForPrint = `<div class="main-container">
      <div class="one-bage">
        <div class="background-black">
          <div class="img-position">
            ${genderChoise()}
          </div>
          <div class="text-position">
            <h2>${name}</h2>
            <h3>${position}</h3>
          </div>
        </div>
        <div class="background-black">
          <div class="img-position">
            ${genderChoise()}
          </div>
          <div class="text-position">
            <h2>${name}</h2>
            <h3>${position}</h3>
          </div>
        </div>
      </div>
    </div>`;
    const pageContent = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../CSS/print-page.css" />
    <title>Бейджі</title>
      </head>
  <body>
    <div class="many">
    ${bageForPrint}</div>
  </body>
</html>
  `;

    // Записуємо вміст у нову сторінку
    newWindow.document.write(pageContent);
    newWindow.document.close(); // Закриваємо документ для запобігання подальших змін

    // Можна автоматично відкрити діалогове вікно для друку
    newWindow.print();
  });

const nameText = document.querySelector(".input-name");
const maketNameText = document.querySelector(".maket-name");
const positionText = document.querySelector(".select-position");
const maketPositionText = document.querySelector(".maket-position");

console.log(nameText.value, positionText.value);
const getName = (event) => {
  return (maketNameText.textContent = event.target.value);
};
nameText.addEventListener("input", getName);
document
  .getElementById("select-position")
  .addEventListener("change", function () {
    let selectedOption = this.options[this.selectedIndex].text;
    document.querySelector(".maket-position").innerText = selectedOption;
  });
document
  .getElementById("select-position")
  .addEventListener("change", function () {
    let selectedOption = this.options[this.selectedIndex].text;
    document.querySelector(".maket-position").innerText = selectedOption;
  });
// ------------------- додаєм картинку
const maket = document.querySelector(".maket2");
console.log(maket);

const createImg = document.createElement("img");
createImg.src = "../img/male2.png";
maket.prepend(createImg);
const form = document.getElementById("main-form");
console.log(form);

form.addEventListener("change", (event) => {
  const malePicture = document.querySelector(".male-pic");
  const divider = document.querySelector(".divider-color");
  const gender = document.querySelector(
    'input[name="gender-choise"]:checked'
  ).value;
  console.log(gender);
  if (gender === "male") {
    malePicture.style.display = "flex";
    divider.style.display = "flex";
  } else {
    malePicture.style.display = "none";
    divider.style.display = "none";
  }
  const maleColor = document.querySelector(
    'input[name="male-color"]:checked'
  ).value;
  console.log(maleColor);

  function malePic() {
    if (maleColor === "brunette") {
      return "../img/male2.png";
    } else {
      return "../img/male-blond-2.png";
    }
  }
  if (gender === "male") {
    createImg.src = "../img/male2.png";
  } else if (gender === "female") {
    createImg.src = "../img/female.png"; // Замініть на реальний шлях до картинки для female
  }
  console.log(event.target.value);
  maket.prepend(createImg);
});
//--------------------- вибір кольору волосся
