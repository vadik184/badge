document
  .querySelector(".main-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Отримуємо дані з форми
    const gender = document.querySelector(
      'input[name="gender-choise"]:checked'
    ).value;
    const name = document.getElementById("input-name").value;
    const position = document.getElementById("select-position").value;

    // Створюємо об'єкт з даними
    const formData = {
      gender: gender,
      name: name,
      position: position,
    };

    console.log("Збережені дані у змінній formData:", formData);

    // Створюємо нову сторінку формату A4
    const newWindow = window.open("", "_blank", "width=842,height=1190"); // A4 в пікселях при 72dpi

    // HTML-контент для нової сторінки
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
    <style>
    @media print {
  @page {
    size: A4;
    margin: 20mm;
  }
    .background-black {
    -webkit-print-color-adjust: exact; /* Для Chrome та Safari */
    print-color-adjust: exact; /* Для Firefox та інших браузерів */
    background-color: black; /* Фон тепер друкуватиметься */
  }
}
body {
  font-family: Arial, sans-serif;
  width: 210mm;
  height: 297mm;
  margin: 0;
  padding: 20mm;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  margin: 10px 0;
}
.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.one-bage {
  display: flex;
  gap: 1.5mm;
}
.background-black {
  width: 55.5mm;
  height: 79.5mm;
  background-color: black;
    border: 1px solid white;

}
.img-position {
  display: flex;
  align-items: end;
  justify-content: center;
}
.text-position {
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.5mm;
}
h2 {
font-size: 18px;
  margin: 0;
  font-weight: 800;
}
h3 {
font-size: 14px;
  margin: 0;
  font-weight: 400;
}
img {
  width: 53mm;
  height: 53mm;
}</style>
  </head>
  <body>
    <div class="main-container">
      <div class="one-bage">
        <div class="background-black">
          <div class="img-position">
            <img src="../img/female.png" alt="avatar" />
          </div>
          <div class="text-position">
            <h2>${name}</h2>
            <h3>${position}</h3>
          </div>
        </div>
        <div class="background-black">
          <div class="img-position">
            <img src="../img/female.png" alt="avatar" />
          </div>
          <div class="text-position">
            <h2>${name}</h2>
            <h3>${position}</h3>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
  `;

    // Записуємо вміст у нову сторінку
    newWindow.document.write(pageContent);
    newWindow.document.close(); // Закриваємо документ для запобігання подальших змін

    // Можна автоматично відкрити діалогове вікно для друку
    newWindow.print();
  });
