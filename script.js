// Assignment Code
var numbers = ["0", "1", "3", "4", "5", "7", "8,", "9"];


// Write password to the #password input
function getPasswordCriteria (){
  var userChoseNumbers = confirm ("do you want numbers in your password");
  var options ={ 
    userChoseNumbers: userChoseNumbers
  };
return options;

function generatePassword() {
  var userChose = getPasswordCriteria();
  var availableChars =[];
  console.log(userChose)
  if (userChose.userChoseNumbers){
     availableChars = availableChars.concat(numbers);
    }
    for(var i = 0; i <4; i++ ) {
      createRandom(availableChars.length)
      passwordArr.push (availableChars[createRandom(availableChars.length)]
    }
Math.floor()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);