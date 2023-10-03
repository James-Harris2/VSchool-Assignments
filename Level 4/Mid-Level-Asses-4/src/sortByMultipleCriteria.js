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