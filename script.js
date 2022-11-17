// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseAlpha = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

var capitalAlpha = [];

for (var i=0; i < lowercaseAlpha.length; i++){
  capitalAlpha[i] = lowercaseAlpha[i].toUpperCase()
}

var numeric = ["1","2","3","4","5","6","7","8","9","0"];

var punctuation = ["\"","~","!",",","@","#","$","%","^","&","*","(",")",".","'","/",";",":","<",">","?","`","[","]"];

//var genElementsList = []

function generatePassword() {
  var lengthInput = window.prompt("How many characters do you want in your password?");
  var pwLength = parseInt(lengthInput);

  if (isNaN(pwLength)) {
    window.alert("Please insert a number.");
    return
  } else if (pwLength == null || pwLength == "" || pwLength<8 || pwLength>128) {
    window.alert("Invalid input. Please insert a number from 8 to 128.");
  } else {
    // a way to store the variable that we will get back to
  }
  
  var optionLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var optionCapital = window.confirm("Would you like to include capital letters in your password?");
  var optionNumbers = window.confirm("Would you like to include numbers in your password?");
  var optionSymbols = window.confirm("Would you like to include symbols in your password?");

  var usersConditions = [];

  if (optionLowercase === true){
    usersConditions.push(lowercaseAlpha);
  }

  if (optionCapital === true){
    usersConditions.push(capitalAlpha);
  }

  if (optionNumbers === true){
    usersConditions.push(numeric);
  }

  if (optionSymbols === true){
    usersConditions.push(punctuation);
  }

  console.log(usersConditions);

  var randomPW = "";

  function randomNum(min, max) {
    return Math.floor((Math.random)*(max-min)+min);
  }

  function randomCombo(combo) {
    return combo[randomCombo(0, combo.length -1)];
  }

  for (var i = 0; i <pwLength; i++){
    var leCombo = randomCombo(usersConditions);
    var sousCombo = randomCombo(leCombo);
    console.log(sousCombo);
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
