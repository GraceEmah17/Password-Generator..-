// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

document.getElementById("generate").addEventListener("click", function () {
  generatePassword();
});

// Function to generate password with user input
function generatePassword() {
  var length = document.getElementById("passwordLength").value;
  var upperCasedCharacters = document.getElementById(
    "upperCasedCharacters"
  ).checked;
  var lowerCasedCharacters = document.getElementById(
    "lowerCasedCharacters"
  ).checked;
  var specialCharacters = document.getElementById("specialCharacters").checked;
  var numericCharacters = document.getElementById("numericCharacters").checked;

  var charset = "";
  var password = "";

  if (upperCasedCharacters) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCasedCharacters) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (specialCharacters) {
    charset += "@%+\\/'!#$^?:,)({}[]-_";
  }

  if (numericCharacters) {
    charset += "0123456789";
  }

  if (charset.length === 0) {
    alert("Please select at least one option for the password.");
    return;
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  document.getElementById("password").textContent = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

