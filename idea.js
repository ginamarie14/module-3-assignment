var capitalAlpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercaseAlpha = "qwertyuiopasdfghjklzxcvbnm";
var numeric = "1234567890";
var punctuation = "~!,@#$%^&*().'/;:<>?`[]\"";

function buttonPrompts() {
    var prompt1;
    let qLength = prompt("How long do you want your password to be?", "");
    if (qLength == null || qLength == "" || qLength<8 || qLength>128 || e.key >= 48 && e.key <= 57 || e.key >= 96 && e.key <= 105) {
        prompt1 = "Invalid input. Please insert a number from 8 to 128."
    } else { 
 
    }
}



//what i did originally:

// Assignment code here
var capitalAlpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercaseAlpha = "qwertyuiopasdfghjklzxcvbnm";
var numeric = "1234567890";
var punctuation = "~!,@#$%^&*().'/;:<>?`[]\"";





// Get references to the #generate element
function generatePassword(){
  var characters = "~!,@#$%^&*().'/;:<>?`[]";
  var length = 12;
  Math.random()*n;
  var generateBtn = document.querySelector("#generate");

  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
