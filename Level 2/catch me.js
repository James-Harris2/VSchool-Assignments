// try {
// throw "James";
// console.log("hello");
// }catch(err){
//     console.log("Caught", err);

// }
// console.log('end');

// var input = "";

// try {
//   if (input == "") {
//     throw "Input can not be empty";
//   } else if (input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }

// functions: push, pop, peek, length

var letters = [];

var word = "racecar"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}
// pop off the stack in reverse order
for (var i =0; i < word.length; i++){
    rword += letters.pop();
}
if (rword === word) {
    console.log(word + " is a palindrome");
}
else {
    console.log(word + " is not a palindrome");
}


