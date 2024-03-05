// 1. feladat - Aktuális szöveghossz
function updateCharacterCount() {
  const inputField = document.getElementById("inputField");
  const characterCountDisplay = document.getElementById("karakterszam");
  characterCountDisplay.textContent = `${inputField.value.length} karakter`;
}

// 2. feladat - Kirajzoló
function drawSquare() {
  let square = document.getElementById("square");

  if (!square) {
    square = document.createElement("div");
    square.id = "square";
    square.className = "square";
    document.body.appendChild(square);
  }

  const x = document.getElementById("xCoord").value || 100;
  const y = document.getElementById("yCoord").value || 100;
  square.style.position = "absolute";
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
}

function deleteSquare() {
  const square = document.getElementById("square");
  if (square) {
    square.remove();
  }
}

//3. feladat - Bújócska
let button = document.getElementById("toggleButton");
let image = document.getElementById("catImage");
let isImageVisible = true;

button.addEventListener("click", function () {
  if (isImageVisible) {
    image.style.opacity = "0";
    isImageVisible = false;
  } else {
    image.style.opacity = "1";
    isImageVisible = true;
  }
});

// 4. feladat - Hibaüzenetek
document.getElementById("checkButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  const messageBox = document.getElementById("messageBox");

  messageBox.className = "hidden";

  if (!email && !confirmEmail) {
    displayMessage("Nincs kitöltve egyik mező sem!", "error");
  } else if (!email) {
    displayMessage("Nincs kitöltve az e-mail mező!", "error");
  } else if (!confirmEmail) {
    displayMessage("Nincs kitöltve az e-mail megerősítése mező!", "error");
  } else if (!/^[0-9a-z.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i.test(email)) {
    displayMessage("Nem megfelelő az e-mail cím formátuma!", "error");
  } else if (email !== confirmEmail) {
    displayMessage("A két mező tartalma nem egyezik!", "error");
  } else {
    displayMessage("Adatok rögzítése sikeres!", "success");
  }

  function displayMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = type;
    messageBox.classList.remove("hidden");
  }
});
