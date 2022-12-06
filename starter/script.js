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

var randonIndex = Math.floor(Math.random() * specialCharacters.length);
var singleSpecislCharacter = specialCharacters[randonIndex]
console.log(singleSpecislCharacter)


var password = "";

// Function to prompt user for password options
function getPasswordOptions() {

}
getPasswordOptions()
// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var length = prompt("Enter a number to choose the length of your password: (At least 10 characters but no more than 64)")
  console.log(length)

  var typesLowercase = confirm("Choose ok to confirm if your password includes Lowercase")
  console.log(typesLowercase)

  var typesUppercase = confirm("Choose ok to confirm if your password includes Numeric")
  console.log(typesUppercase)

  var typesSpecial = confirm("Choose ok to confirm if your password includes Special characters")
  console.log(typesSpecial)

  var specialAndNumeric = specialCharacters.concat(numericCharacters)
  console.log(specialAndNumeric)
  
  if (typesLowercase == "Yes") {

  }

  if (typesUppercase == "Yes") {
    
  }

  if (typesSpecial == "Yes") {
    
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