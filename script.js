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

// // Function to start prompting user on generating a new password
// function generatePassword() {

//   // Reset outputPass if code is run without refreshing page
//   outputPass = ""

//   // Prompt to set password length
//   var passLength = parseInt(prompt("Please input the desired length. Input from 8 to 128 is required."));

//   // Test for if input is between 8 to 128
//   if (passLength < 8 || passLength > 128) {

//     // Ends input if length is outside the specified range
//     window.alert("Input is required to be anywhere from 8 to 128. Please restart.")
//     return generatePassword()
//   }

//   // Character type prompts
//   var lttrLwrOption = confirm("Should lower case letters be included in the password?")
//   var lttrUpprOption = confirm("Should upper case letters be included in the password?")
//   var spclCharOption = confirm("Should special characters be included in the password?")
//   var numbersOption = confirm("Should numbers be included in the password?")

//   // Ends input if no character options were chosen
//   if (!lttrLwrOption && !lttrUpprOption && !spclCharOption && !numbersOption) {
//     window.alert("At least one of the character options must be chosen. Please restart.")
//     return generatePassword ()
//   }

//   // Output for when all options were chosen
//   if (lttrLwrOption && lttrUpprOption && spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += allOptions[Math.floor(Math.random() * allOptions.length)];
//     } return outputPass
//   } else

//   // Output for when lowercase, uppercase, and special characters were chosen
//   if (lttrLwrOption && lttrUpprOption && spclCharOption && !numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options1[Math.floor(Math.random() * options1.length)];
//     } return outputPass
//   } else

//   // Output for when lowercase, uppercase, and numbers were chosen
//   if (lttrLwrOption && lttrUpprOption && !spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options2[Math.floor(Math.random() * options2.length)];
//     } return outputPass
//   }

//   // Output for when lowercase, special characters, and numbers were chosen
//   if (lttrLwrOption && !lttrUpprOption && spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options3[Math.floor(Math.random() * options3.length)];
//     } return outputPass
//   }

//   // Output for when lowercase and uppercase were chosen
//   if (lttrLwrOption && lttrUpprOption && !spclCharOption && !numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options4[Math.floor(Math.random() * options4.length)];
//     } return outputPass
//   }

//   // Output for when lowercase and special characters were chosen
//   if (lttrLwrOption && !lttrUpprOption && spclCharOption && !numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options4[Math.floor(Math.random() * options4.length)];
//     } return outputPass
//   }

//   // Output for when lowercase and numbers were chosen
//   if (lttrLwrOption && !lttrUpprOption && !spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options5[Math.floor(Math.random() * options5.length)];
//     } return outputPass
//   }

//   // Output for when only lowercase was chosen
//   if (lttrLwrOption && !lttrUpprOption && !spclCharOption && !numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += lttrLwr[Math.floor(Math.random() * lttrLwr.length)];
//     } return outputPass
//   }

//   // Output for when uppercase, special characters, and numbers were chosen
//   if (!lttrLwrOption && lttrUpprOption && spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options6[Math.floor(Math.random() * options6.length)];
//     } return outputPass
//   } else

//   // Output for when uppercase and special characters were chosen
//   if (!lttrLwrOption && lttrUpprOption && spclCharOption && !numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options7[Math.floor(Math.random() * options7.length)];
//     } return outputPass
//   } else

//   // Output for when uppercase and numbers were chosen
//   if (!lttrLwrOption && lttrUpprOption && !spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options8[Math.floor(Math.random() * options8.length)];
//     } return outputPass
//   } else

//   // Output for when only uppercase was chosen
//   if (!lttrLwrOption && lttrUpprOption && !spclCharOption && !numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += lttrUppr[Math.floor(Math.random() * lttrUppr.length)];
//     } return outputPass
//   } else

//   // Output for when special characters and numbers were chosen
//   if (!lttrLwrOption && !lttrUpprOption && spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += options9[Math.floor(Math.random() * options9.length)];
//     } return outputPass
//   } else

//   // Output for when only special characters was chosen
//   if (!lttrLwrOption && !lttrUpprOption && spclCharOption && !numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += spclChar[Math.floor(Math.random() * spclChar.length)];
//     } return outputPass
//   } else

//   // Output for when only numbers was chosen
//   if (!lttrLwrOption && !lttrUpprOption && !spclCharOption && numbersOption) {
//     for (var i = 0; i < passLength; i++) {
//       outputPass += numbers[Math.floor(Math.random() * numbers.length)];
//     } return outputPass
//   }
// }




// ---------
// TEST CODE
// ---------
// Function to start prompting user on generating a new password
function generatePassword() {
  // Reset outputPass if code is run without refreshing page
  outputPass = "";

  // Prompt to set password length
  var passLength = parseInt(
    prompt("Please input the desired length. Input from 8 to 128 is required.")
  );

  // Test for if input is between 8 to 128
  if (passLength < 8 || passLength > 128) {
    // Ends input if length is outside the specified range
    window.alert(
      "Input is required to be anywhere from 8 to 128. Please restart."
    );
    return generatePassword();
  }

  // Character type prompts
  var lttrLwrOption = confirm(
    "Should lower case letters be included in the password?"
  );
  var lttrUpprOption = confirm(
    "Should upper case letters be included in the password?"
  );
  var spclCharOption = confirm(
    "Should special characters be included in the password?"
  );
  var numbersOption = confirm("Should numbers be included in the password?");

  // Ends input if no character options were chosen
  if (!lttrLwrOption && !lttrUpprOption && !spclCharOption && !numbersOption) {
    window.alert(
      "At least one of the character options must be chosen. Please restart."
    );
    return generatePassword();
  }

  function generation() {
    // Pass Reset
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

  var passPreArray = generation()
  var passArray = passPreArray.split("")

  // BEGINNING OF LOWER LETTER CHECK
  function lttrLwrCheck(passArray, lttrLwr) {
    return passArray.some(item => lttrLwr.includes(item))
  }

  if (lttrLwrOption == false) {
    lttrLwrCheck(passArray, lttrLwr)
    return generation()
  }
  // END OF LOWER LETTER CHECK

  return outputPass
}
// -------------
// END TEST CODE
// -------------

//
// TEST CODE SET 2
//




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
