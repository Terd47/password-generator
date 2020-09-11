// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt user for password length and properties

function PasswordProperties() {
  // numbers to include in user password
  var num = "0123456789";
  // lowerCase charcaters to add to user password
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  // upperCase characters to add to user password 
  var upperChar = lowerChar.toLocaleUpperCase();
  //special characters to add to users password
  var specialChar = "@%+\\/'!#$^?:,)(}{][~-_.";
  //variable to store user selection
  var desiredPassword = "";

  //askk user for their password character preference

  if (confirm("Will you like numbers in your password?")) {
    desiredPassword += num;
  }
  if (confirm("Will you like lower Case letters in your password?")) {
    desiredPassword += lowerChar;

  }
  if (confirm("Will you like upper Case characters in your password?")) {
    desiredPassword += upperChar;
  }
  if (confirm("Will you like special characters in your password?")) {
    desiredPassword += specialChar;
  }
  return desiredPassword;
}

// generate user's secure password with all specified properties

function generatePassword() {
  var passwordSize = 0;
  var genPassword = PasswordProperties();

  // get length of password from user
  while (passwordSize < 8 || passwordSize > 128) {
    passwordSize = prompt("What is your desired password length?");
  }
  //generate random number to match user password length and loop through the strings
  var randomChar;
  var securePassword = "";
  for (i = 0; i < passwordSize; i++) {
    // generate random number between 0 and the length of user password preference
    randomChar = Math.floor(Math.random() * (genPassword.length));
    securePassword += genPassword[randomChar];
  }
  return securePassword;
}