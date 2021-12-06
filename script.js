// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// 1. get password requirements
// 2. generate  each lowercase, uppercase , number and special char
// Functions to gerate random chars
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const randomSpecial = () => {
  const charList = "_!@#$%^&*(){}[]=<>/,.-";
  return charList[Math.floor(Math.random() * charList.length)];
};

const randomUpper = () => {
  return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
};

const randomLower = () => {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const randomNumber = (length) => {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
};

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const generatePassword = () => {
  // 1. get password requirements
  const passwdLength = prompt("Length of your password");
  if (
    passwdLength < 8 ||
    passwdLength > 128 ||
    passwdLength == "" ||
    !Number(passwdLength)
  ) {
    alert(
      "Password length should be more than 8 chars and Less than 128 chars and need to be a number"
    );
    return " ";
  }
  const passwdInput = prompt(
    "choose Passwd requirements L=Lowercase Char,U=Uppercase Char,N=numbers,S=Special "
  );
  const passwdTypes = [...passwdInput];

  var requirements = [];

  if (passwdTypes.includes("L") || passwdTypes.includes("l")) {
    requirements.push(randomLower);
  }
  if (passwdTypes.includes("U") || passwdTypes.includes("u")) {
    requirements = [...requirements, randomUpper];
  }
  if (passwdTypes.includes("N") || passwdTypes.includes("n")) {
    requirements = [...requirements, randomNumber];
  }
  if (passwdTypes.includes("S") || passwdTypes.includes("s")) {
    requirements = [...requirements, randomSpecial];
  }
  if (passwdTypes == "") {
    alert("choose atleast one Passwd requirements");
  }

  var mypassword = "";

  for (let v = 0; v <= passwdLength; v++) {
    for (let i = 0; i < requirements.length; i++) {
      const func = requirements[i];
      mypassword += func();
    }
  }

  return mypassword.slice(0, passwdLength);
};
