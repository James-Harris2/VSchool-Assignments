//Given an array of numbers, return a new array
// that has only the numbers that are 5 or greater

// const fiveAndGreater = [3, 6, 8, 2]

// const young = fiveAndGreater.filter(function(arr){
//     return arr >= 5
// })

// console.log(young); // [6, 8]

// const evenOnly = [3, 6, 8, 2]

// const myEven = evenOnly.filter(function(arr){
//     return arr != 3 ;
// })
//     console.log(myEven);// [6, 8, 2]
// return 5 or fewer charcters
// not able to run .filter method on Higher Order Function

// const fiveCharctersOrFewerOnly =  ["dog", "wolf", "by", "family", "eaten","camping"];
// const result = fiveCharctersOrFewerOnly.filter(myCharcter)

// function myCharcter (word){
//     return word.length <= 5
// }
// console.log(result);

// const sixThings = ['cat', 'goat', 'rabbit', 'tree', 'polar bear', 'elephant', ]
// const result = sixThings.filter(mySixThings)

// function mySixThings(animals) {
//     return animals.length <= 5

// }
// console.log(result);
/* .sort Array method; takes a function and sort through array*/
// leastToGreatest = [5,2, 20, 1, 3, 90, 75, 8];

// greatNumbers = leastToGreatest.sort(function(j,  h){
//     return j -h
// })
// console.log(leastToGreatest); // [1,2, 3, 5, 8, 20, 75, 90]




// function sumName(name1, name2){
//     return name1 < 5, name2 <= 5;
// }





// setTimeout(function(arg1, arg2){
//     console.log('Hello!');
// }, 1000);

// setInterval(function(){
//     console.log('Hello!');
// }, 1000)

// var intervalID = setInterval(function(){
//     console.log('what up my boy!');
// }, 3000)

// clearInterval(intervalID);

// function sayHello(){
//     console.log("hello!");
// }
// var intervalID = setInterval (sayHello, 1000);
// ****TESTING FUNCTIONS ON SETtimeOut

// function sayHello(){
//     console.log("what up my boy! ");
// }
// function stopSayingHello(){
//     clearInterval(intervalID)
// }

// var intervalID = setInterval(sayHello, 1000);
// setTimeout(stopSayingHello, 6000)



// find-get specific item
// findIndex - get's index of the item;
// every - every item in the array
// some - at least one item

// const people = [
//     { id: 1, name: "john"},
//     { id: 2, name: "peter",},
//     { id: 2, name: "anna"},
//     { id: 2, name: "james"}
// ];

// const grades = ['A', 'B', 'C', 'A', 'B', 'C'];
// const goodGrades = ['A', 'B', 'A', 'B'];

// const anna = people.find(person => person.name === 'anna');

// console.log(anna.name)// return anna

// const person = people.findIndex(item => item.id === 4);

// console.log (person)
// const newPeople = people.slice(0, person)
// console.log(newPeople);

// .EVERY in the array// it will LOOP through
// const allGoodGrades = people.every(name => name !== 'C');

// console.log(allGoodGrades);

/* sort an array from Largest number to smallest*/
// myArr = [1, 3, 5, 2, 90 , 20];


/* sort ARRAY of Strings from shortest to longest*/
// myString = ["dog", "wolf", "by", "family", "eaten"];

// const greatestToLeast = myArr.sort(function (a, b) {
//     return a - b
// })

// reverse the order of the" myString Array 
// const smallString = myString.sort(function (a, b) {// sort the array given the Return statement
//     // if (a.length <= 2){
//     //     return -1
//     } // returns length of array by element 
// )  

// console.log(smallString.sort()) //outPUT: ['by', 'dog', 'eaten', 'family', 'wolf']
// reverse string of myString Array ['by', 'dog', 'wolf', 'family', 'eaten'] in alphabetical order//

// console.log(greatestToLeast);

// 2 reduce the users to an array of strings of the user's first and last names
// also can add to final with additional data

// const users = [ 
//     { fName: "james", lName: "harris"},
//     { fName: "jackson", lName: "harris"},
//     { fName: "james-morely", lName: "harris"},
//     { fName: "scarlett", lName: "harris"},
//     { fName: "sara", lName: "harris"}
    
// ]


// const result = users.reduce(function(final, user){
//     final.push(user.fName + " " + user.lName)
//     return final
// }, [])

// console.log(result)


// 3. reduce the array into a count of how many people voted


// const voters = [
//   { name: "steve", voted: true },
//   { name: "sara", voted: true },
//   { name: "James", voted: true },
//   { name: "Scarlett", voted: false },
// ]
/*
const voteCount = voters.reduce(function(final, countVoter){
    if(!countVoter.voted){ // 1 name DID NOT ! voted: or false
        final++
    }
    return final
}, 0)
console.log(voteCount);
*/

// const voterObj = voters.reduce(function(final, voter){// variable & function()
//     if(voter.voted){ // logic {inside function}
//         final.didVote++
//     } else {
//         final.didntVote++
//     }
//     return final

// }, {didVote: 0, didntVote: 0 })// return what we expected {didVote: 3, didntVote: 1}

// console.log(voterObj);

// total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ]

// const myTotal = total.reduce(function(accumlator, currentValue) {
//     return accumlator + currentValue
// })

// console.log(myTotal); // returns a single TOTAL OF 6//changed array to 10 OutPut: 55


// const myTotal = total.reduce(function(a,c){
//     return  a + c
// },[ " " ]);

// console.log(myTotal);

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "ed", age: 55, voted: true },
//   { name: "tami", age: 54, voted: true },
//   { name: "mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'zack', age: 19, voted: false},

// ];
// create a variable name "voterObj"
// added a method or function to voters(accessing data inside voters)
//(.reduce) used
// created an actual function(placeHolder = finalARRAY, placeHolder = count)
// function block {}
// BLOCK reads: if the count.voted code block equals = true
// ***Did Vote:true
// *** else: DidntVote: false
// return placeHolder = final ARRAY
// BLOCK END

// {}

// var voterObj = voters.reduce(function(final, count){
//     if (count.voted){
//         final.didVote ++
//     } else {
//         final.didntVote ++
//     }
//     return final
// }, {didVote: 0, didntVote: 0})

//  console.log(voterObj);
//* from wishList return total sum of price//
// var wishList = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "House", price: 390000 },
//   { title: "Vehcile 2 ", price: 90000 },
//   { title: "Dogs", price: 3000 },
//   { title: "modern applicances", price: 9000 }
// ];
// function declaration /definition
// function addValues(num1, num2) {
//     return num1 + num2;
// }
// //****END */



// const firstValue = ([]+ [])
// const secondValue = ([0]+ [0]);

// // function Expression
//   const add = function (num1, num2) {
//   return num1 + num2;

//   }
  

// console.log();



// myStuff = wishList.reduce(function(a, b){

// })
// console.log(myStuff);

// return functions 

// calculates 1 inch = 2.54cm (1 * 2.54) 01.26.23
// const wallHeight = 80;

// function calculate(value){
//     const newValue = value * 2.54;
//     return newValue
// }
// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions)

// var peopleArray = [
//   {
//     firstName: "Sarah",
//     lastName: "Palin",
//     age: 47,
//   },
//   {
//     firstName: "Frank",
//     lastName: "Zappa",
//     age: 12,
//   },
//   {
//     firstName: "Rick",
//     lastName: "Sanchez",
//     age: 78,
//   },
//   {
//     firstName: "Morty",
//     lastName: "Smith",
//     age: 29,
//   },
//   {
//     firstName: "Kyle",
//     lastName: "Mooney",
//     age: 27,
//   },
//   {
//     firstName: "Pasha",
//     lastName: "Datsyuk",
//     age: 13,
//   },
//   {
//     firstName: "Lev",
//     lastName: "Tolstoy",
//     age: 82,
//   },
// ];

// write a function of everyone older than 18
/* accessing an Array */

// function fullName({firstName, lastName }) {
//     const fullName = `${firstName} ${lastName} ` ;
//     return fullName.toUpperCase();
// }

// myPeople = peopleArray.filter(function(el){
//     return el.age >= 18
// } )



// myNum = peopleArray.sort(function(a, b){
//     a.firstName.localeCompare(b.lastName)
// } )

// console.log(myNum);




