import { passCharacters } from "./password-chars.js";

// Default pwd generation settings
let pwdLength = 10;
let useLowerCase = true;
let useUpperCase = true;
let useNumbers = true;
let useSpecialChars = true;

// DOM elements
let generatePasswordsBtn = document.getElementById("generate-passwords");
let displayResults = document.getElementById("display-results");
let showPassOne = document.getElementById("show-pass-one");
let showPassTwo = document.getElementById("show-pass-two");

// Event listener for the generate passwords button
generatePasswordsBtn.addEventListener("click", function () {
  displayResults.style.display = "inline-block";
  displayResults.style.marginTop = "2.5rem";
  showPassOne.textContent = generatePassword();
  showPassTwo.textContent = generatePassword();
});

// Event listeners for copy password on click
showPassOne.addEventListener("click", () =>
  copyPassword(showPassOne.textContent)
);
showPassTwo.addEventListener("click", () =>
  copyPassword(showPassTwo.textContent)
);

// Generate password
function generatePassword() {
  let availableChars = [];
  let password = "";

  // Add characters to availableChars array based on user settings
  if (useLowerCase) {
    availableChars.push(...passCharacters.lowercase);
  }
  if (useUpperCase) {
    availableChars.push(...passCharacters.uppercase);
  }
  if (useNumbers) {
    availableChars.push(...passCharacters.numbers);
  }
  if (useSpecialChars) {
    availableChars.push(...passCharacters.special);
  }

  // Generate password
  for (let i = 0; i < pwdLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}

// Copy password to clipboard
function copyPassword(passToCopy) {
  navigator.clipboard
    .writeText(passToCopy)
    .then(() => {
      alert("Copied the text: " + passToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
