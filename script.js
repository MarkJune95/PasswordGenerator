//Assignment Code
var generateBtn = document.querySelector("#generate");
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword(){
 //init var createdPassword to store created password
  var createdPassword = '';

  //prompt user for inputs and store the values in vars
  passLength = +prompt("Enter password length(8-128): ");
  console.log(passLength);


//inputl validation for password length
  if(passLength > 7 && passLength < 129){
    var includeLower = confirm("Include lowercase?");
    console.log(includeLower);
    var includeUpper = confirm("Include uppercase?");
    console.log(includeUpper);
    var includeNumbers = confirm("Include numbers?");
    console.log(includeNumbers);
    var includeSymbols = confirm("Include special characters?")
    console.log(includeSymbols);
  //init var countCharactersType to store types of char user included
    var countCharactersType = includeLower + includeUpper + includeNumbers + includeSymbols;

    //input validation for character types
    if(countCharactersType == 0){
      alert("You must include at least one characters type!")
    } else{
        for (var i = 0; i < passLength; i+= countCharactersType){
          if(includeLower){  
            createdPassword += getLowerLetters();
          }
          if(includeUpper){  
            createdPassword += getUpperLetters();
          }
          if(includeNumbers){  
            createdPassword += getNumbers();
          }
          if(includeSymbols){  
            createdPassword += getSymbols();
          }
        }
    }
  } else {
    alert("Password length must be at least 8 characters, and no more than 128 characters!");
  }

  return createdPassword;
}
//get random letters - lower case
function getLowerLetters(){
  var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  lowerLetters = lowerLetters[Math.floor(Math.random()* lowerLetters.length)];
  return lowerLetters;
}


//get random letters - upper case
function getUpperLetters(){
  var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  upperLetters = upperLetters[Math.floor(Math.random()* upperLetters.length)];
  return upperLetters;
}

//get random numbers
function getNumbers(){
  var numbers = '1234567890';
  numbers = numbers[Math.floor(Math.random()* numbers.length)];
  return numbers; 
}

//get random symbols
function getSymbols(){
  var symbols = '!#$%&()*+,-./\:;<=>?@][^_`{|}~';
  symbols = symbols[Math.floor(Math.random()* symbols.length)];
  return symbols;
}

