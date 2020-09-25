// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){

var generatePassword;
var length = prompt ("How long is the password?");









}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
