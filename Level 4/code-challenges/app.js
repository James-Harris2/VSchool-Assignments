// write a function for mid-level 4 assesment
 // write a function 
 // Find and return 
 // only words of a given Target
 function findAnagrams(target, words) {
    // Convert the target word into a sorted string
    const sortedTarget = target.split('').sort().join('');
  
    // Filter words that match the sorted target string
    const anagrams = words.filter(word => word.split('').sort().join('') === sortedTarget);
  
    return anagrams;
  }
  
  // Example:
  const words = ["listen", "enlist", "silent", "inlets", "banana"];
  const target = "listen";
  console.log(findAnagrams(target, words));
  
  
  //  separte assignments
  
  // Sort Criteria
  // build array Object
  
  function sortByMultipleCriteria(people) {
    return people.sort((a, b) => {
        // First, compare by age
        if (a.age < b.age) return -1;
        if (a.age > b.age) return 1;
  
        // If age is the same, compare by name
        return a.name.localeCompare(b.name);
    });
  }
  
  // Example usage
  const people = [
    {name: "John", age: 25},
    {name: "Anna", age: 25},
    {name: "Doe", age: 20},
    {name: "Smith", age: 30}
  ];
  console.log(sortByMultipleCriteria(people));
//Problem Solving Process
  //1. Identify the problem
  //You can state the vowels challenge as follows: write a function that takes a string
  // as argument and returns the number of vowels contained in that string.
  //The vowels are “a”, “e”, “i”, “o”, “u”.

  //2. Make a plan - pseudocode

  //3. Execute the code - write code

  //4. Review - Check to see if the code works



//   [] write a function that take a string
//  [] takes String as arg
// [] return Number of Vowels in Str
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0

function findVowels (word) {//parameter
    // check num of Vow
    for (let i = 0; i <= word.length; i++){
        // Check for vowels in word
        // If letter in word matches a vowel
        // add 1 to count variable
        if(vowels.includes(word[i])){
            count++
        }

        
    }
    return count
}

console.log(findVowels("hello"))// argument

console.log(findVowels("goodbye"))// argument