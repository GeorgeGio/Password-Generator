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

// let userPrompts = "";
var selectionArray = [];
var userPromptsAmount = 0;
var randomIndex = "";

// Function to prompt user for password options
function getPasswordOptions() {
  userPromptsAmount = prompt("State how many characters you want! between 10-64 : ");
  if(userPromptsAmount>64 || userPromptsAmount<10){

    getPasswordOptions();
    return
  }
  userPromptsLowercase = confirm("Do you want to include Lowercase?  ");
  if (userPromptsLowercase) {
   selectionArray = selectionArray.concat(lowerCasedCharacters);
  }
  userPromptsUppercase = confirm("Do you want to include Uppercase?  ");
  if (userPromptsUppercase) {
    selectionArray = selectionArray.concat(upperCasedCharacters);
  }
  userPromptsNumeric = confirm("Do you want to include Numbers?  ");
  if (userPromptsNumeric) {
    selectionArray = selectionArray.concat(numericCharacters);
  }
  userPromptsSpecial = confirm("Do you want to include Special Characters?  ");
  if (userPromptsSpecial) {
    selectionArray = selectionArray.concat(specialCharacters);
  }
  console.log(selectionArray);
  console.log(userPromptsAmount);

  if(!userPromptsLowercase && !userPromptsUppercase && !userPromptsNumeric && !userPromptsSpecial){
    getPasswordOptions();
    return
  }
  return selectionArray;


}

// Function for getting a random element from an array
function getRandom() {
  for (let i = 0; i < userPromptsAmount; i++){
    randomIndex += selectionArray[Math.floor(Math.random()*selectionArray.length)];
    }
    return randomIndex;
}

// Function to generate password with user input
function generatePassword() {
  randomIndex = "";
  getPasswordOptions();
  let randomPassword = getRandom();

  return randomPassword;

}

// console.log(selectionArray);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // var password = getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);