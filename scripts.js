import { passCharacters } from "./password-chars.js";

// Default settings
let passwordLengths = [8, 12, 16];
let darkMode = true;
let pwdLength = passwordLengths[1];
let useLowerCase = true;
let useUpperCase = true;
let useNumbers = true;
let useSpecialChars = true;
let shortPwd = false;
let mediumPwd = true;
let longPwd = false;

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

// DOM settings elements
let darkModeCheckbox = document.getElementById("dark-mode");
let useLowerCheckbox = document.getElementById("use-lower-checkbox");
let useUpperCheckbox = document.getElementById("use-upper-checkbox");
let useNumbersCheckbox = document.getElementById("use-numbers-checkbox");
let useSymbolsCheckbox = document.getElementById("use-symbols-checkbox");
let shortPwdCheckbox = document.getElementById("short-password-checkbox");
let mediumPwdCheckbox = document.getElementById("medium-password-checkbox");
let longPwdCheckbox = document.getElementById("long-password-checkbox");

// Set all default settings to screen
darkModeCheckbox.checked = darkMode;
useLowerCheckbox.checked = useLowerCase;
useUpperCheckbox.checked = useUpperCase;
useNumbersCheckbox.checked = useNumbers;
useSymbolsCheckbox.checked = useSpecialChars;
shortPwdCheckbox.checked = shortPwd;
mediumPwdCheckbox.checked = mediumPwd;
mediumPwdCheckbox.disabled = true; // Disable unchecking before shortPwd or longPwd is checked
longPwdCheckbox.checked = longPwd;

// Event listener for dark mode checkbox
darkModeCheckbox.addEventListener("change", function () {
  const root = document.documentElement; // Get the root element
  if (darkModeCheckbox.checked) {
    darkMode = true;
    root.style.setProperty("--site-background-color", "black");
  } else {
    darkMode = false;
    root.style.setProperty("--site-background-color", "white");
  }
});
