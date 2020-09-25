// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){

var generatePassword;
var length = prompt ("How long is the password?");
}

if (length < 8){
  alert("Password must be at least 8 characters.");
  return generatePassword;
}

if (length > 128){
  alert("Password cannot be more then 128 characters.");
  return generatePassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
