// Об'єкт для збереження значення вибраного радіо-кнопки
const mainObject = {};

const form = document.querySelector("#main-form");
const maleInput = document.querySelector("#male");
const femaleInput = document.querySelector("#female");
const nameInput = document.querySelector(".input-name");
const positionSelect = document.querySelector(".select-position");
const imageInput = document.querySelector("#image-input-id");
const photoPreview = document.querySelector(".photo-preview");
const uploadPhoto = document.querySelector(".upload-photo");
const maketNameText = document.querySelector(".maket-name");
const maketPositionText = document.querySelector(".maket-position");

// ---------- обробка інпутів і додання даних до головного об'єкта
function updateValue() {
  if (maleInput.checked) {
    mainObject.gender = maleInput.value;
  } else if (femaleInput.checked) {
    mainObject.gender = femaleInput.value;
  } else {
    mainObject.gender = null; // Скидаємо значення, якщо нічого не вибрано
  }
  mainObject.name = nameInput.value;
  mainObject.position = positionSelect.value;
  maketNameText.textContent = nameInput.value;
  maketPositionText.textContent = positionSelect.value;
  // ----- зміна дефолтної аватарки
  function genderChoise() {
    if (mainObject.gender === "male") {
      return `../img/male2.png`;
    } else if (mainObject.gender === "female") {
      return `../img/female.png`;
    }
    return ""; // Повертаємо порожнє значення, якщо gender не вибрано
  }

  mainObject.img = genderChoise();
  imgInMakert(); // Оновлюємо макет
  console.log("Оновлене значення об'єкта:", mainObject);
}

// ------------- Додаємо обробники подій для обох радіо-кнопок та інпутів
maleInput.addEventListener("change", updateValue);
femaleInput.addEventListener("change", updateValue);
nameInput.addEventListener("input", updateValue);
positionSelect.addEventListener("change", updateValue);

// ------ додаємо власне зображення
// imageInput.addEventListener("change", (event) => {
//   const file = event.target.files[0]; // Отримуємо перший файл
//   if (file) {
//     if (!file.type.startsWith("image/")) {
//       console.error("Файл не є зображенням.");
//       return;
//     }

//     const reader = new FileReader(); // Створюємо екземпляр FileReader
//     reader.onload = (e) => {
//       const img = document.createElement("img"); // Створюємо елемент <img>
//       img.src = e.target.result; // Додаємо згенероване посилання на зображення
//       img.alt = "Завантажене зображення"; // Додаємо атрибут alt для зображення
//       img.classList.add("uploaded-photo"); // Додаємо клас для стилів
//       const deletePriviewPhoto = document.createElement("button");
//       deletePriviewPhoto.classList.add("delete-img-btn");
//       deletePriviewPhoto.textContent = "x";
//       uploadPhoto.innerHTML = ""; // Очищуємо попередній вміст
//       uploadPhoto.appendChild(img); // Додаємо нове зображення
//       uploadPhoto.appendChild(deletePriviewPhoto); // Додаємо нове зображення
//       // Зберігаємо шлях до зображення в об'єкт
//       mainObject.imagePath = e.target.result;

//       // Оновлюємо зображення в макеті
//       imgInMakert();

//       console.log("Оновлене значення об'єкта:", mainObject);
//     };

//     reader.onerror = (error) => {
//       console.error("Помилка під час зчитування файлу:", error);
//     };

//     reader.readAsDataURL(file); // Читаємо файл як Data URL
//   } else {
//     console.error("Файл не вибрано.");
//   }
//   deletePriviewPhoto.addEventListener("click", () => {
//     // Видаляємо зображення та кнопку
//     uploadPhoto.innerHTML = "";
//     mainObject.imagePath = null; // Скидаємо шлях до зображення
//     imgInMakert(); // Оновлюємо макет
//     console.log("Зображення видалено, об'єкт оновлено:", mainObject);
//   });
// });
imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0]; // Отримуємо перший файл
  if (file) {
    if (!file.type.startsWith("image/")) {
      console.error("Файл не є зображенням.");
      return;
    }

    const reader = new FileReader(); // Створюємо екземпляр FileReader
    reader.onload = (e) => {
      const img = document.createElement("img"); // Створюємо елемент <img>
      img.src = e.target.result; // Додаємо згенероване посилання на зображення
      img.alt = "Завантажене зображення"; // Додаємо атрибут alt для зображення
      img.classList.add("uploaded-photo"); // Додаємо клас для стилів

      // Створюємо кнопку для видалення зображення
      const deletePriviewPhoto = document.createElement("button");
      deletePriviewPhoto.classList.add("delete-img-btn");
      deletePriviewPhoto.textContent = "x";

      // Очищуємо попередній вміст та додаємо нові елементи
      uploadPhoto.innerHTML = ""; // Очищуємо попередній вміст
      uploadPhoto.appendChild(img); // Додаємо нове зображення
      uploadPhoto.appendChild(deletePriviewPhoto); // Додаємо кнопку для видалення

      // Зберігаємо шлях до зображення в об'єкт
      mainObject.imagePath = e.target.result;

      // Оновлюємо зображення в макеті
      imgInMakert();

      console.log("Оновлене значення об'єкта:", mainObject);

      // Додаємо обробник події для видалення зображення
      deletePriviewPhoto.addEventListener("click", () => {
        // Видаляємо зображення та кнопку
        uploadPhoto.innerHTML = "";
        mainObject.imagePath = null; // Скидаємо шлях до зображення
        imgInMakert();
        // Оновлюємо макет
        createImg.style.display = "none";
        imgInMakert();
        console.log("Зображення видалено, об'єкт оновлено:", mainObject);
      });
    };

    reader.onerror = (error) => {
      console.error("Помилка під час зчитування файлу:", error);
    };

    reader.readAsDataURL(file); // Читаємо файл як Data URL
  } else {
    console.error("Файл не вибрано.");
  }
});

// ----------- функція вибору зображення в залежгості від того чи вибране власне чи дефолтне
function getOwnPhoto() {
  createImg.style.display = "flex";
  if (!mainObject.imagePath) {
    return mainObject.img;
  } else {
    return mainObject.imagePath;
  }
}
//----------- макет
const maket = document.querySelector(".previwe-photo");
const createImg = document.createElement("img");
createImg.classList.add("maket-img");
createImg.style.display = "none";
maket.prepend(createImg);

function imgInMakert() {
  if (!mainObject.gender && !mainObject.imagePath) {
    createImg.src = ""; // Очищаємо зображення в макеті
    return;
  }
  createImg.src = `${getOwnPhoto()}`;
}
// ---------- оновлює зображення на макеті
form.addEventListener("change", imgInMakert);

// ------------- створюємо сторінку для друку
form.addEventListener("submit", function (event) {
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
