// get the input in the text box
// remove all non-chars
// compare [0] to [length]
// if all true, return true

const userInput = document.getElementById('text-input');
const checkPalindromeButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function doesItPalindrome (input) {
    result.text = "";
    const userInput = getUserText(input);
    if (userInput === "") {
        console.log("please put up");
        alert("Please input a value");
        //This needs to be an error message that pops up
    } else {
      const cleanInput = cleanInputStr(userInput);
      const reversedInput = strReversal(cleanInput);
      console.log("1 " + cleanInput);
      console.log("2 " + reversedInput);
      if(reversedInput == cleanInput) {
        //console.log("yayayay");
        return result.innerHTML = userInput + " is a palindrome";
      } else {
        return result.innerHTML = userInput + " is not a palindrome";
      }
    }
};

function cleanInputStr (str) {
    const regex = /[^a-zA-Z0-9]/g;
    return str.replace(regex, "").toLowerCase();
};

function getUserText () {
  const userInputText = userInput.value
  return userInputText;
  //console.log(userInputText);
};

function strReversal (str) {
    const strArr = str.split('');
    console.log("strArr "+strArr)
    const reversedArr = [];
    while (strArr.length > 0) {
        const lastChar = strArr.pop();
        reversedArr.push(lastChar);
    }
    return reversedArr.join("");
    //console.log(reversedArr);
}

checkPalindromeButton.addEventListener("click", doesItPalindrome);
