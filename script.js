// Assignement Code
var generateBtn = document.querySelector("#generate");

var lowercaseAlpha = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var capitalAlpha = [];
// function to make lowercase into uppercase without having to retype it
for (var i=0; i < lowercaseAlpha.length; i++){
  capitalAlpha[i] = lowercaseAlpha[i].toUpperCase()
}
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var punctuation = ["\"","~","!",",","@","#","$","%","^","&","*","(",")",".","'","/",";",":","<",">","?","`","[","]"];

// Write password to the #password input

function generatePassword() {
  var lengthInput = window.prompt("How many characters do you want in your password?");
  var pwLength = parseInt(lengthInput);
  //following if statement is to ensure user picks a number between 8 and 128
  if (isNaN(pwLength) === true || pwLength === null || pwLength === "" || pwLength<8 || pwLength>128) {
    window.alert("Invalid input. Please insert a number from 8 to 128.");
    return;
  }
  var optionLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var optionCapital = window.confirm("Would you like to include capital letters in your password?");
  var optionNumbers = window.confirm("Would you like to include numbers in your password?");
  var optionSymbols = window.confirm("Would you like to include symbols in your password?");

  //this is where the user's choice of characters will be stored
  var usersConditions = [];

  if (optionLowercase === true){
    usersConditions.push(...lowercaseAlpha);
  }
  
  if (optionCapital === true){
    usersConditions.push(...capitalAlpha);
  }
  
  if (optionNumbers === true){
    usersConditions.push(...numeric);
  }
  
  if (optionSymbols === true){
    usersConditions.push(...punctuation);
  }
  console.log(usersConditions);

  var randomPW = [];
  for (var i = 0; i < pwLength ; i++) {
    var elements = usersConditions[Math.floor(Math.random()* usersConditions.length)];
    randomPW.push(elements);
    console.log(randomPW);
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
