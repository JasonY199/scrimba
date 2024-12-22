import { passCharacters } from "./password-chars.js";

// DOM elements
let generatePasswordsBtn = document.getElementById("generate-passwords");
let displayResults = document.getElementById("display-results");
let showPassOne = document.getElementById("show-pass-one");
let showPassTwo = document.getElementById("show-pass-two");

// DOM settings elements
let darkModeCheckbox = document.getElementById("dark-mode");
let useLowerCheckbox = document.getElementById("use-lower-checkbox");
let useUpperCheckbox = document.getElementById("use-upper-checkbox");
let useNumbersCheckbox = document.getElementById("use-numbers-checkbox");
let useSymbolsCheckbox = document.getElementById("use-symbols-checkbox");
let shortPwdCheckbox = document.getElementById("short-password-checkbox");
let mediumPwdCheckbox = document.getElementById("medium-password-checkbox");
let longPwdCheckbox = document.getElementById("long-password-checkbox");

// Default settings
let settings = {
  darkMode: true,
  useChars: {
    useLowerCase: true,
    useUpperCase: true,
    useNumbers: true,
    useSpecialChars: true,
  },
  passLengths: {
    shortPwd: { enabled: false, length: 8 },
    mediumPwd: { enabled: true, length: 12 },
    longPwd: { enabled: false, length: 16 },
  },
};

// Set all default settings to screen
darkModeCheckbox.checked = settings.darkMode;
useLowerCheckbox.checked = settings.useChars.useLowerCase;
useUpperCheckbox.checked = settings.useChars.useUpperCase;
useNumbersCheckbox.checked = settings.useChars.useNumbers;
useSymbolsCheckbox.checked = settings.useChars.useSpecialChars;
shortPwdCheckbox.checked = settings.passLengths.shortPwd.enabled;
mediumPwdCheckbox.checked = settings.passLengths.mediumPwd.enabled;
longPwdCheckbox.checked = settings.passLengths.longPwd.enabled;

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
  if (settings.useChars.useLowerCase) {
    availableChars.push(...passCharacters.lowercase);
  }
  if (settings.useChars.useUpperCase) {
    availableChars.push(...passCharacters.uppercase);
  }
  if (settings.useChars.useNumbers) {
    availableChars.push(...passCharacters.numbers);
  }
  if (settings.useChars.useSpecialChars) {
    availableChars.push(...passCharacters.special);
  }

  // Generate password
  for (let i = 0; i < getPwdLength(); i++) {
    let randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}

// Get password length
function getPwdLength() {
  if (settings.passLengths.shortPwd.enabled)
    return settings.passLengths.shortPwd.length;
  if (settings.passLengths.mediumPwd.enabled)
    return settings.passLengths.mediumPwd.length;
  if (settings.passLengths.longPwd.enabled)
    return settings.passLengths.longPwd.length;
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

function checkboxesChecked(groupType) {
  let amountChecked = 0;

  if (groupType === "charTypes") {
    if (settings.useChars.useLowerCase) amountChecked++;
    if (settings.useChars.useUpperCase) amountChecked++;
    if (settings.useChars.useNumbers) amountChecked++;
    if (settings.useChars.useSpecialChars) amountChecked++;
  }
  if (groupType === "passLengths") {
    if (settings.passLengths.shortPwd) amountChecked++;
    if (settings.passLengths.mediumPwd) amountChecked++;
    if (settings.passLengths.longPwd) amountChecked++;
  }
  return amountChecked;
}

// Event listener for dark mode checkbox
darkModeCheckbox.addEventListener("change", function () {
  const root = document.documentElement; // Get the root element
  if (darkModeCheckbox.checked) {
    root.style.setProperty("--site-background-color", "#111721");
    root.style.setProperty("--variable-text-color", "white");
    root.style.setProperty("--content-background-color", "#1f2937");
    root.style.setProperty("--main-green-color", "#4adf86");
    root.style.setProperty("--secondary-green-color", "#10b981");
    root.style.setProperty("--light-gray-color", "#d5d4d8");
    root.style.setProperty("--divider-color", "#2f3e53");
    root.style.setProperty("--password-box-color", "#273549");
    root.style.setProperty("--password-text-color", "#55f991");
  } else {
    root.style.setProperty("--site-background-color", "#7eb99d");
    root.style.setProperty("--variable-text-color", "black");
    root.style.setProperty("--content-background-color", "#ECFDF5");
    root.style.setProperty("--main-green-color", "#10B981");
    root.style.setProperty("--secondary-green-color", "#10b981");
    root.style.setProperty("--light-gray-color", "#6B7280");
    root.style.setProperty("--divider-color", "#D5D4D8");
    root.style.setProperty("--password-box-color", "#273549");
    root.style.setProperty("--password-text-color", "#5DEF92");
  }
});

// Generic event listener for char setting checkboxes
function handleCharSettingChange(checkbox, settingKey) {
  checkbox.addEventListener("change", function () {
    // User unchecking checkbox and has only 1 checked
    if (!checkbox.checked && checkboxesChecked("charTypes") < 2) {
      console.log(
        `Cannot uncheck ${settingKey} checkbox, must have at least 1 checked`
      );
      checkbox.checked = true;
    } else {
      settings.useChars[settingKey] = checkbox.checked;
    }
  });
}

// Applying the char setting function to all char checkboxes
handleCharSettingChange(useLowerCheckbox, "useLowerCase");
handleCharSettingChange(useUpperCheckbox, "useUpperCase");
handleCharSettingChange(useNumbersCheckbox, "useNumbers");
handleCharSettingChange(useSymbolsCheckbox, "useSpecialChars");

// Generic event listener for password length setting checkboxes
function handlePassLengthSettingChange(checkbox, settingKey) {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // User checking checkbox
      settings.passLengths[settingKey].enabled = true;
      // Set other checkboxes to false
      if (settingKey === "shortPwd") {
        mediumPwdCheckbox.checked = false;
        longPwdCheckbox.checked = false;
        settings.passLengths.mediumPwd.enabled = false;
        settings.passLengths.longPwd.enabled = false;
      } else if (settingKey === "mediumPwd") {
        shortPwdCheckbox.checked = false;
        longPwdCheckbox.checked = false;
        settings.passLengths.shortPwd.enabled = false;
        settings.passLengths.longPwd.enabled = false;
      } else if (settingKey === "longPwd") {
        shortPwdCheckbox.checked = false;
        mediumPwdCheckbox.checked = false;
        settings.passLengths.shortPwd.enabled = false;
        settings.passLengths.mediumPwd.enabled = false;
      } else {
        console.error("Invalid setting key");
      }
    } else {
      // Don't allow user to uncheck a checkbox
      checkbox.checked = true;
    }
  });
}

// Applying the password length setting function to all length checkboxes
handlePassLengthSettingChange(shortPwdCheckbox, "shortPwd");
handlePassLengthSettingChange(mediumPwdCheckbox, "mediumPwd");
handlePassLengthSettingChange(longPwdCheckbox, "longPwd");
