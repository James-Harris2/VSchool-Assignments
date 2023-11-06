//  Palindrome  sequence characters backwards & forwards

// -[] Given a string, return true if the string is a palindrome, false otherwise.

// split stings into an array
//  reverse the array of strings
// join the array back into a string
//  and then compare it to the original string

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('dog'));
//  LOOK UP: .join, split, reverse, .map,.filter,.reduce,.every,.sort