// Об'єкт для збереження значення вибраного радіо-кнопки
const mainObject = {};

const maleInput = document.querySelector("#male");
const femaleInput = document.querySelector("#female");
const nameInput = document.querySelector(".input-name");
const positionSelect = document.querySelector(".select-position");
const imageInput = document.querySelector("#image-input-id");
const photoPreview = document.querySelector(".photo-preview");
// Функція для обробки зміни вибору радіо-кнопок
function updateValue() {
  if (maleInput.checked) {
    mainObject.gender = maleInput.value;
  } else if (femaleInput.checked) {
    mainObject.gender = femaleInput.value;
  }
  mainObject.name = nameInput.value;
  mainObject.position = positionSelect.value;
  function genderChoise() {
    if (mainObject.gender === "male") {
      return `../img/male2.png`;
    } else {
      return `../img/female.png`;
    }
  }
  mainObject.img = genderChoise();
  console.log("Оновлене значення об'єкта:", mainObject);
}

// Додаємо обробники подій для обох радіо-кнопок
maleInput.addEventListener("change", updateValue);
femaleInput.addEventListener("change", updateValue);
nameInput.addEventListener("input", updateValue);
positionSelect.addEventListener("change", updateValue);

// imageInput.addEventListener("change", (event) => {
//   const file = event.target.file[0];
//   if (!file) {
//     console.error("Файл не знайдено.");
//   } else {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = document.createElement("img");
//       img.src = e.target.result;
//       img.classList.add("uploaded-photo");
//       photoPreview.innerHTML = "";
//       photoPreview.appendChild(img);

//       mainObject.imagePath = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// });
imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0]; // Отримуємо перший файл
  if (file) {
    const reader = new FileReader(); // Створюємо екземпляр FileReader
    reader.onload = (e) => {
      const img = document.createElement("img"); // Створюємо елемент <img>
      img.src = e.target.result; // Додаємо згенероване посилання на зображення
      img.alt = "Завантажене зображення"; // Додаємо атрибут alt для зображення
      img.classList.add("uploaded-photo"); // Додаємо клас для стилів

      photoPreview.innerHTML = ""; // Очищуємо попередній вміст
      photoPreview.appendChild(img); // Додаємо нове зображення

      // Зберігаємо дані в об'єкт
      mainObject.imagePath = e.target.result;
      console.log("Оновлене значення об'єкта:", mainObject);
    };

    if (!file.type.startsWith("image/")) {
      console.error("Файл не є зображенням.");
      return;
    }

    reader.onerror = (error) => {
      console.error("Помилка під час зчитування файлу:", error);
    };

    reader.readAsDataURL(file); // Читаємо файл як Data URL
  } else {
    console.error("Файл не вибрано.");
  }
});

function getOwnPhoto() {
  if (!mainObject.imagePath) {
    return mainObject.img;
  } else {
    return mainObject.imagePath;
  }
}

document
  .querySelector("#main-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newWindow = window.open("", "_blank", "width=842,height=1190"); // A4 в пікселях при 72dpi

    const pageContent = `<!DOCTYPE html>
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
    <div class="main-container">
      <div class="one-bage">
        <div class="background-black">
          <div class="img-position">
            <img
              class="avatarWithBody"
              src="${getOwnPhoto()}"
              alt="avatar"
            /><span></span>
          </div>
          <div class="text-position">
            <h2>${mainObject.name}</h2>
            <h3>${mainObject.position}</h3>
          </div>
        </div>
        <div class="background-black">
          <div class="img-position">
            <img
              class="avatarWithBody"
              src="${getOwnPhoto()}"
              alt="avatar"
            /><span></span>
          </div>
          <div class="text-position">
            <h2>${mainObject.name}</h2>
            <h3>${mainObject.position}</h3>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;
    newWindow.document.write(pageContent);
    newWindow.document.close(); // Закриваємо документ для запобігання подальших змін

    // Можна автоматично відкрити діалогове вікно для друку
    newWindow.print();
  });
console.log("Початкове значення об'єкта:", mainObject);
