function isPalindrome(word) {
  // Write your algorithm here
for (let i = 0; i < word.length /2; i++) {
  //console.log(word[i])
  if (word[i] === word[word.length-1-i]) {
    return true;
  } else {
    return false;
  }
  // console.log("i is ", i)
  // console.log("middle of word is ", word.length/2)
  // console.log(`${i+1}th from end is `, word.length - (i));
  // console.log(i)
}
}

/* 
  Add your pseudocode here
  write a function that returns true or false if a word is a palindrome
  function determines if 1st letter === last letter, 2nd letter === 2nd-last letter... etc until middle
  extract middle of string using findMiddle function
  function extractMiddle(str) {
    var position;
    var length;
    if(str.length() % 2 == 1) {
        position = str.length() / 2;
        length = 1;
    } else {
        position = str.length() / 2 - 1;
        length = 2;
    }
    result = str.substring(position, position + length)
}

Alternate: 
iterate from beginning to middle, check each letter to the corresponding letter from end of word.
if any letters don't match, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
