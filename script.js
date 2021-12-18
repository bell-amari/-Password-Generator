// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
  const specailChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z"];
  const lowercase = ["a", "b", "b", "c", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
  
  var passwordLength = 0, boolSpecailCharcters = false, boolNumbers = false, boolUpperCase = false, boolLowerCase = false;
  var output = "";
  passwordLength = prompt("What length do you need your password to be? (Note: Type a interger between 8 and 128)");
  if (passwordLength > 7 && passwordLength < 129){
    boolSpecailCharcters = confirm("Should specail characters be included in your password?");
    boolNumbers = confirm("Should numbers be included in your password?");
    boolLowerCase = confirm("Should lowercase letters be included in your password?");
    boolUpperCase = confirm("Should uppercase letters be included in your password?");
  }
  else alert("Error! Only an interger between 8 and 128 will be reconized");

  if (boolSpecailCharcters === false && boolNumbers === false && boolUpperCase === false && boolLowerCase === false){
    alert("Error! At least one condition must be chosen.")
    return("Error! All conditions are false. At least one condition must be true");
  }
  
  for(let i=1; i<=passwordLength; i++){
    var shuffle = "";
      if (boolSpecailCharcters === true){
        var hold = Math.floor(Math.random() * specailChar.length)
        shuffle += specailChar[hold] ;
      }
      if (boolNumbers === true){
        var hold = Math.floor(Math.random() * numbers.length)
        shuffle += numbers[hold];
      }
      if (boolLowerCase === true) {
        var hold = Math.floor(Math.random() * lowercase.length)
        shuffle += lowercase[hold];
      }
      if (boolUpperCase === true) {
        var hold = Math.floor(Math.random() * uppercase.length)
        shuffle += uppercase[hold];
      }

      const shuffleArray = shuffle.split("");
      var rand = Math.floor(Math.random() * shuffleArray.length)
      output += shuffleArray[rand];
  }

  return output;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);