// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
var generatePassword;

var length = prompt ("How long is the password?");

if (length < 8) {
  alert("Password must be at least 8 characters and inclue Upper or Lower case letters, numbers or special characters.");
  return generatePassword ();
}

if (length > 128) {
  alert("Password cannot be more then 128 characters and inclue Upper or Lower case letters, numbers or special characters.");
  return generatePassword ();
}
// Array -------
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "+", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var randomPassword = [randomPassword];

for (var i=0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  console.log(randomIndex);
  randomPassword.push(characters[randomIndex]);
}

// Functions-----
// consoleInside(letters);
// consoleInside();
// consoleInside();


generatePassword = randomPassword;
return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
