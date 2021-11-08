// Assignment Code
var generateBtn = document.querySelector("#generate"); //selects the button

// Write password to the #password input
function writePassword() {
  var len = window.prompt("Enter length of password between 8 and 128 characters: ")
  while (len <= 7 || len >= 128){
    var len = window.prompt("Invalid Entry. Enter length of password between 8 and 128 characters: ")
  }

  var upper = window.prompt("Include uppercase letters? (Y/N): ").toLowerCase()
  while (upper != "y" && upper!= "n" ){
    var upper = window.prompt("Invalid Entry. Include uppercase letters? (Y/N): ")
  } 
  
  var lower = window.prompt("Include lowercase letters? (Y/N): ").toLowerCase()
  console.log(lower)
  while (lower != "y" && lower!= "n"){
    var lower = window.prompt("Invalid Entry. Include lowercase letters? (Y/N): ")
  }

  var special = window.prompt("Include special characters? (Y/N): ").toLowerCase()
  console.log(special)
  while (special != "y" && special.toLowerCase() != "n"){
    var special = window.prompt("Invalid Entry. special characters? (Y/N): ") 
  }  

  var password = generatePassword(len, upper, lower, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
function generatePassword(len, upper, lower, special){
  var password = ''

  if (upper == 'y' && lower == 'y' && special == 'y'){ // inclues upper, lower, and special chars
    var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'y' && lower == 'y' && special == 'n'){ // inclues upper and lower chars
    var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for(let i = 0; i < len; i++) { 
      password += char[Math.floor(Math.random() * char.length)]
      console.log(password)
    }
    return password
  } else if (upper == 'y' && lower == 'n' && special == 'n'){ // inclues upper chars
    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    
    }
    return password
  } else if (upper == 'y' && lower == 'n' && special == 'y'){ // includes upper and special char
    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'y' && special == 'y'){ //includes lower and special char
    var char = 'abcdefghijklmnopqrstuvwxyz !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'n' && special == 'y'){ //includes special chars
    var char = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else { //includes lower chars
    var char = 'abcdefghijklmnopqrstuvwxyz'
  
    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  }
    
}

