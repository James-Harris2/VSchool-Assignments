const people = ["John", "Adam", "Amber"];
// function peopleElements(arr) {}

// console.log(peopleElements(people));




// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
// using .map


// // pseudo code 
// 1. create a function that takes an array as an argument
// 2. create a new array
// 3. loop through the array
// 4. add the array elements to the new array
// 5. return the new array
// //
// using.map

 function peopleElements(arr) {
        const newArr = arr.map(function(element) {
            return `<h1>${element}</h1>`
        })
        return newArr
    }

    console.log(peopleElements(people));