// Assignment Code
var generateBtn = document.querySelector("#generate"); //selects the button

// Write password to the #password input
function writePassword() {
  var len = window.prompt("Enter length of password between 8 and 128 characters: ")
  /* if (len === null) {
    return;
  } */
  while (len <= 7 || len >= 129){
    var len = window.prompt("Invalid Entry. Enter length of password between 8 and 128 characters: ")
  }
  var upper = window.prompt("Include uppercase letters? (Y/N): ").toLowerCase()
  while (upper != "y" && upper!= "n" ){
    var upper = window.prompt("Invalid Entry. Include uppercase letters? (Y/N): ")
  } 
  
  var lower = window.prompt("Include lowercase letters? (Y/N): ").toLowerCase()
  while (lower != "y" && lower!= "n"){
    var lower = window.prompt("Invalid Entry. Include lowercase letters? (Y/N): ")
  }

  var num = window.prompt("Include numbers? (Y/N): ").toLowerCase()
  while (num != "y" && num != "n"){
    var num = window.prompt("Invalid Entry. numbers? (Y/N): ") 
  } 

  var special = window.prompt("Include special characters? (Y/N): ").toLowerCase()
  while (special != "y" && special != "n"){
    var special = window.prompt("Invalid Entry. special characters? (Y/N): ") 
  }  

  upper = (upper == 'y') ? true : false;
  lower = (lower =='y') ? true : false;
  num = (num == 'y') ? true : false;
  special = (special == 'y') ? true : false;

  var password = generatePassword(len, upper, lower, num, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
function generatePassword(len, upper, lower, num, special){
  var password = ''
  var upperChar ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz'
  var numChar = '0123456789'
  var specChar = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  var char = ''

  if (upper == true){
    char += upperChar
  }
  if (lower == true) {
    char += lowerChar
  }
  if (num == true) {
    char += numChar
  }
  if (special == true) {
    char += specChar
  }

  for(let i = 0; i < len; i++) {
    password += char[Math.floor(Math.random() * char.length)]
  }

  var hasUpper = /[A-Z]/.test(password)
  var hasLower = /[a-z]/.test(password)
  var hasNum = /[0-9]/.test(password)
  var hasSpec = /[!"#$%&\'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/.test(password)

  if (hasUpper != upper || hasLower != lower || hasNum != num || hasSpec != special) {
    generatePassword(len, upper, lower, num, special)
  } else {
    console.log(password)
    return password;
  } 

} 



 

