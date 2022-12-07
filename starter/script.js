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

/*
var lowercaseletter = ["a","b","c"];
var uppercaseletter = ["a","b","c"];

var allLetters = lowercaseletter.concat(uppercaseLetter);

var index = Math.floor(Math.random() * lowercaseletter.length);

console.log(lowercaseletter[index]);

var characters = [];

characters = characters.concat(lowercaseletter);
characters = characters.concat(uppercaseletter);
characters = characters.concat(numbers);

var password = "";
for (var i = 0; i < length - 3 ; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  var randomCharacter = characters[randomIndex];
  password = password + randomcharacter;
  console.log(password);
}
*/

// Function to prompt user for password options
function getPasswordOptions() {
  length = prompt("Enter a number to choose the length of your password: (At least 10 characters but no more than 64)")

  typesSpecial = confirm("Choose ok to confirm if your password includes Special characters")

  typesNumeric = confirm("Choose ok to confirm if your password includes Numbers")

  typesLowercase = confirm("Choose ok to confirm if your password includes Lowercase")

  typesUppercase = confirm("Choose ok to confirm if your password includes Uppercase")

  mixedArr = []
  
  if (typesSpecial === true) {
    mixedArr = mixedArr.concat(specialCharacters)
  }

  if (typesLowercase === true) {
    mixedArr = mixedArr.concat(lowerCasedCharacters)
  }

  if (typesUppercase === true) {
    mixedArr = mixedArr.concat(upperCasedCharacters)
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  singleSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]

  singleNumeric = numericCharacters[Math.floor(Math.random() * numericCharacters.length)]

  singleLower = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]

  singleUpper = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]
}

// Function to generate password with user input
function generatePassword() {
  password = "";

  for (var i=0; i<length - 3 ; i++) {
    var randomIndex = Math.floor(Math.random() * mixedArr.length);
    var randomCharacter = mixedArr[randomIndex];
    password = password + randomcharacter + singleSpecial + singleNumeric + singleLower + singleUpper;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);