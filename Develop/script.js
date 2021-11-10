// Assignment Code
var generateBtn = document.querySelector("#generate"); //selects the button

// Write password to the #password input
function writePassword() {
  var len = window.prompt("Enter length of password between 8 and 128 characters: ")
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
  var specChar = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

  if (upper == 'y' && lower == 'y' && num == 'y' && special == 'y'){ // includes upper, lower, num, and special chars
    var char = upperChar + lowerChar + numChar + specChar
    
    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password

  } else if (upper == 'y' && lower == 'y' && num == 'y' && special == 'n'){ // includes upper, lower, num chars
    var char = upperChar + lowerChar + numChar

    for (let i = 0; i < len; i++) { 
      password += char[Math.floor(Math.random() * char.length)]
      console.log(password)
    }
    return password
  } else if (upper == 'y' && lower == 'y' && num == 'n' && special == 'y'){ // includes upper, lower, spec chars
    var char = upperChar + lowerChar + specChar

    for(let i = 0; i < len; i++) { 
      password += char[Math.floor(Math.random() * char.length)]
      console.log(password)
    }
    return password
  } else if (upper == 'y' && lower == 'y' && num == 'n' && special == 'n'){ // includes upper and lower chars
    var char = upperChar + lowerChar 

    for(let i = 0; i < len; i++) { 
      password += char[Math.floor(Math.random() * char.length)]
      console.log(password)
    }
    return password
  } else if (upper == 'y' && lower == 'n' && num == 'y' && special == 'n'){ // includes upper and num chars
    var char = upperChar + numChar

    for(let i = 0; i < len; i++) { 
      password += char[Math.floor(Math.random() * char.length)]
      console.log(password)
    }
    return password
  } else if (upper == 'y' && lower == 'n' && num == 'y' && special == 'n'){ // includes upper and spec chars
    var char = upperChar + specChar

    for(let i = 0; i < len; i++) { 
      password += char[Math.floor(Math.random() * char.length)]
      console.log(password)
    }
    return password
  } else if (upper == 'y' && lower == 'n' &&  num =='n' && special == 'n'){ // includes upper chars
    var char = upperChar

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    
    }
    return password
  } else if (upper == 'n' && lower == 'y' && num == 'y' && special == 'y'){ // includes lower, num, and special char
    var char = lowerChar + numChar + specChar

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'y' && num == 'y' && special == 'n'){ // includes lower and num char
    var char = lowerChar + numChar

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'y' && num == 'n' && spec == 'y'){ // includes lower and spec char
    var char = lowerChar + specChar

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'y' && num == 'n' && special == 'n'){ // includes lower char
    var char = lowerChar 

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'n' && num == 'y' && special == 'y'){ // includes num and spec char
    var char = numChar + specChar

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'n' && num == 'y' && special == 'n'){ // includes num char
    var char = numChar

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  } else if (upper == 'n' && lower == 'n' && num == 'n' && special == 'y'){ // includes spec char
    var char = specChar

    for(let i = 0; i < len; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password
  }
    
}

