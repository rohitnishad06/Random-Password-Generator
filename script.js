const passwordBox = document.getElementById("password");

//lenght of the password
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

// creating the password
function createPassword() {
  let password = "";
  //Add one random uppercase letter to the password.
  password += upperCase[Math.floor(Math.random() * upperCase.length)];

  //Add one random lowercase letter to the password.
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  //Add one random number (digit) to the password.
  password += number[Math.floor(Math.random() * number.length)];

  //Add one random symbol to the password.
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * symbol.length)];
  }

  // return the password to the user
  passwordBox.value = password;
}

//coping the password
function copyPassword() {

  // Selects the text inside the input box.
  passwordBox.select();
  
  // Copies the selected text to the clipboard.
  document.execCommand("copy");
}
