// Global variables
var generateBtn = document.querySelector("#generate");
var lttrLwr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lttrUppr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var spclChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", "]", "}", "|", "\\",";", ":", "'", '"', "<", ",", ">", ".", "`", "~", "/", "?"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var outputPass = ""
var outputPassArray = ""

// Option outputs not including the arrays on their own
var allOptions = lttrLwr.concat(lttrUppr, spclChar, numbers)
var options1 = lttrLwr.concat(lttrUppr, spclChar)
var options2 = lttrLwr.concat(lttrUppr, numbers)
var options3 = lttrLwr.concat(spclChar, numbers)
var options4 = lttrLwr.concat(lttrUppr)
var options5 = lttrLwr.concat(spclChar)
var options6 = lttrUppr.concat(spclChar, numbers)
var options7 = lttrUppr.concat(spclChar)
var options8 = lttrUppr.concat(numbers)
var options9 = spclChar.concat(numbers)

// Function to start prompting user on password length and character options
function generatePassword() {

  // Prompt to set password length
  var passLength = parseInt(prompt("Please input the desired length. Input from 8 to 128 is required."));

  // Test for if input is 8-128
  if (passLength < 8 || passLength > 128) {

    // Ends input if length is outside the specified range and re-runs generatePassword function
    window.alert("Input is required to be anywhere from 8 to 128. Please restart.");
    return generatePassword();
  }

  // Character type prompts
  var lttrLwrOption = confirm("Should lower case letters be included in the password?");
  var lttrUpprOption = confirm("Should upper case letters be included in the password?");
  var spclCharOption = confirm("Should special characters be included in the password?");
  var numbersOption = confirm("Should numbers be included in the password?");

  // Ends input if no character options were chosen and re-runs generatePassword function
  if (!lttrLwrOption && !lttrUpprOption && !spclCharOption && !numbersOption) {
    window.alert("At least one of the character options must be chosen. Please restart.");
    return generatePassword();
  }

  // Function to generate password
  function generation() {

    // Pass reset for when the function gets re-run without refreshing the page
    outputPass = ""
    outputPassArray = ""

    // Output for when all options were chosen
    if (lttrLwrOption && lttrUpprOption && spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += allOptions[Math.floor(Math.random() * allOptions.length)];
      }
      return outputPass;
    }

    // Output for when lowercase, uppercase, and special characters were chosen
    if (lttrLwrOption && lttrUpprOption && spclCharOption && !numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options1[Math.floor(Math.random() * options1.length)];
      }
      return outputPass;
    }

    // Output for when lowercase, uppercase, and numbers were chosen
    if (lttrLwrOption && lttrUpprOption && !spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options2[Math.floor(Math.random() * options2.length)];
      }
      return outputPass;
    }

    // Output for when lowercase, special characters, and numbers were chosen
    if (lttrLwrOption && !lttrUpprOption && spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options3[Math.floor(Math.random() * options3.length)];
      }
      return outputPass;
    }

    // Output for when lowercase and uppercase were chosen
    if (lttrLwrOption && lttrUpprOption && !spclCharOption && !numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options4[Math.floor(Math.random() * options4.length)];
      }
      return outputPass;
    }

    // Output for when lowercase and special characters were chosen
    if (lttrLwrOption && !lttrUpprOption && spclCharOption && !numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options4[Math.floor(Math.random() * options4.length)];
      }
      return outputPass;
    }

    // Output for when lowercase and numbers were chosen
    if (lttrLwrOption && !lttrUpprOption && !spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options5[Math.floor(Math.random() * options5.length)];
      }
      return outputPass;
    }

    // Output for when only lowercase was chosen
    if (lttrLwrOption && !lttrUpprOption && !spclCharOption && !numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += lttrLwr[Math.floor(Math.random() * lttrLwr.length)];
      }
      return outputPass;
    }

    // Output for when uppercase, special characters, and numbers were chosen
    if (!lttrLwrOption && lttrUpprOption && spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options6[Math.floor(Math.random() * options6.length)];
      }
      return outputPass;
    }

    // Output for when uppercase and special characters were chosen
    else if (!lttrLwrOption && lttrUpprOption && spclCharOption && !numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options7[Math.floor(Math.random() * options7.length)];
      }
      return outputPass;
    }

    // Output for when uppercase and numbers were chosen
    else if (!lttrLwrOption && lttrUpprOption && !spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options8[Math.floor(Math.random() * options8.length)];
      }
      return outputPass;
    }

    // Output for when only uppercase was chosen
    else if (!lttrLwrOption && lttrUpprOption && !spclCharOption && !numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += lttrUppr[Math.floor(Math.random() * lttrUppr.length)];
      }
      return outputPass;
    }

    // Output for when special characters and numbers were chosen
    else if ( !lttrLwrOption && !lttrUpprOption && spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += options9[Math.floor(Math.random() * options9.length)];
      }
      return outputPass;
    }

    // Output for when only special characters was chosen
    else if ( !lttrLwrOption && !lttrUpprOption && spclCharOption && !numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += spclChar[Math.floor(Math.random() * spclChar.length)];
      }
      return outputPass;
    }

    // Output for when only numbers was chosen
    else if ( !lttrLwrOption && !lttrUpprOption && !spclCharOption && numbersOption) {
      for (var i = 0; i < passLength; i++) {
        outputPass += numbers[Math.floor(Math.random() * numbers.length)];
      }
      return outputPass;
    }
  }

  // Variables for converting the generated password into an array to check if all options that were selected were included in the password
  var passPreArray = generation()
  var passArray = passPreArray.split("")

  // Function to check if characters in the generated password includes all selected options
  function characterCheck() {

    // Returns true or false depending on if a lowercase letter was included in the password
    function lttrLwrCheck(passArray, lttrLwr) {
      return passArray.some(item => lttrLwr.includes(item))
    }

    // If the option for lowercase was selected, runs the lttrLwrCheck function
    if (lttrLwrOption == true) {
      var lttrLwrResult = lttrLwrCheck(passArray, lttrLwr)
    } else

    // If the option for lowercase was not selected, outputs true for characterCheckResult to pass
    if (lttrLwrOption == false) {
      var lttrLwrResult = true
    }

    // Returns true or false depending on if an uppercase letter was included in the password
    function lttrUpprCheck(passArray, lttrUppr) {
      return passArray.some(item => lttrUppr.includes(item))
    }

    // If the option for lowercase was selected, runs the lttrUpprCheck function
    if (lttrUpprOption == true) {
      var lttrUpprResult = lttrUpprCheck(passArray, lttrUppr)
    } else

    // If the option for lowercase was not selected, outputs true for characterCheckResult to pass
    if (lttrUpprOption == false) {
      var lttrUpprResult = true
    }

    // If all results come back true, return true for final output
    if (lttrLwrResult == true && lttrUpprResult == true) {
      return true
    }

    // If any of the options fail, re-run generation function
    else {
      return generation()
    }
  }

  // Variable of the password to options verification
  var characterCheckResult = characterCheck()

  // If all options verification passed, output final generated password
  if (characterCheckResult == true) {
    return outputPass
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
