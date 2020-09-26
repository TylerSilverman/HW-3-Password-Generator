// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
var generatePassword;

var length = prompt ("How long is the password?");

if (length < 8) {
  alert("Password must be at least 8 characters.");
  return generatePassword ();
}

if (length > 128) {
  alert("Password cannot be more then 128 characters.");
  return generatePassword ();
}
// Array -------
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var numbers = [];
// var symbols - [];
//____________________________________________________________


var randomPassword = [randomPassword];

for (var i=0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * letters.length);
  console.log(randomIndex);
  randomPassword.push(letters [randomIndex]);
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
