// let str = "james E harris";

// let f_pure = function(_input) {
//     let _output = _input.toUpperCase();
//     return _output;
// }
// /* NOT SURE I UNDERSTAND WHAT STR = OUTPUT IS FOR*/
// // let f_impure = function(_input) {
// //     let output = _input.toUpperCase();
// //     str = output; //side-effect
// //     return _output;
// // }

// // let out = f_pure(str);

// // console.log(out, str);

/*
// setTimeout (function () {
// console.log('what! DMX! ');
// }, 1000);

// setTimeout(function() {
//     console.log('Welcome', '')
// }, 100)

// setTimeout (function(){
//     console.log(4 *5 )
// }, 100) **** setTimeout__Has Function run once*****

setTimeout (function () {
    console.log()
}, 1000)


setInterval(function(){
    console.log('hello');

}, 100) ******setInterval___Has to repeat it self
*/

// setInterval(function(){
//     console.log("Welcome: Test");

// },1000);


// // setInterval(function(){
// //     console.log (4/50);
// // }, 3000)

// var intervalID = setInterval (function(){
//     console.log('welcome: test');
// }, 1000 );

// clearInterval(intervalID)

// setInterval (function() {
//     console.log(4/5);
// clearInterval("function");
// }, 1500);

/* .map()
    Returns: A new array the same size as the input
    Purpose: Allows you  to take an array of data and create
    a new array of data from it.
*/
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.map(function(num) {
//     return num + 50

// })
// console.log(result)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result =arr.map (function(callback) {
//     return callback + 50
// })
// console.log (result);

/* .map()
    Returns: A new array the same size as the input array
    Purpose: Allows you to take an array and data and create a new
    array of data from it.
*/



// const arr = [1, 2, 3, 4, 5,]
// const result = arr.map (function(callback){
//     return callback * 20
    
// })

// console.log(result);

// const arr = [1, 2, 3]
// const result = arr.map(function(num) {
//     return num * 20
// })
// console.log (result)

// const doubleNumbers = [2, 5, 100]

// const result = arr.map(function(doubleNumbers){
//     return doubleNumbers * 2
// })
// console.log(result)



// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
// const doubleNumbers = [2, 5, 100]
//     const result = doubleNumbers.map (function(num){
//      return num * 4
  
// })
// console.log(result);
// console.log(); // [4, 10, 200]

// const doubleNumbers = [10, 11, 100]

// const result = doubleNumbers.map (function (result) {
//     return result * 4
    
// });
/******* Good work for review ***** 1.18.23 /
takes an Array and converts to a string
const myString = ["1", "2", "3"]

console.log(myString.toString());
console.log(myString.join(":").split(",") );
console.log(myString.valueOf());
/******* Good work for review ***** 1.18.23 */

/*****Capitalize 1st Letters */

// const str = 'john, JACOB, jinGleHeimer, schmidt ';

// const arr = str.split(" ");

// split the above string into an array of strings
// whenever a blank space is encountered



// loop through each element of the array and capitalize the first letter
// for(var i =0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1) .toLowerCase ();

// }






// join all the elements of the array back into a string
// using a blankspace as a separator
// const str2 = arr.join(" ");
// console.log(str2);

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]



// const arrName = [{
//     name: "Angelina Jolie",
//     age: 80,
// },
// {
//     name: "Eric Jones",
//     age: 2,
// },
// {
//     name: "Paris Hilton",
//     age: 40,
// },
// {
//     name: "James Harris",
//     age: 44,
// },
// {
//     name: "Kanye West",
//     age: 16,
// },
// {
//     name: "Bob Ziroll",
//     age: 100,
 

// }];

// const namesOnly = arrName.map (x => x.name);



   
// console.log (namesOnly)

// const result = arrName.map(arrName => arrName.age >= 18? arrName.name  +  ' Can go to the Matrix': arrName.name + 'Can NOT go to the Matrix')

// console.log(result);

// const test = arrName.map (arrName => arrName.age >= 18? arrName.name + ' You can go into the Matrix' : arrName.name + ' Can NOT go into the Matrix')

// console.log(test);

// The global variable
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// fiveAndGreater = [3, 6, 8, 2];

// const result = fiveAndGreater.filter(function(person){
//     return person.fiveAndGreater 
// });




// const title = watchList.filter(function(person){
//     return person.Type === 'movie'
// })

// console.log(title);
// const result = watchList.map(function(person){
//     return person.imdbRating;
// })

// const title = watchList.map(function(movies){
//     return movies.Title
// })
// THIS CODE IS NOT RUNNING PROPERLY IN TERMINAL
// const newResult = watchList.map(function(person){
//     return{rating:watchList.imdbRating.toUpperCase(),
//     movies:watchList.Title
//     };
// });
// console.log(result);
// console.log(title);
// Only change code below this line

//return imdb ratings that are greater that 8 using the filter
//method

// function imdbRating(){
//     return imdbRating === 8;

// }


// const result = watchList.filter(imdbRating)

// // console.log(result)
// console.log(watchList.filter(list => list.imdbRating > 8), "test")

// const filterList = (arr) => {
//     return arr.filter(list => list.imdbRating > 8)
// }
// console.log(filterList(watchList), "testing function")

// console.log(watchList.map(list => list.imdbRating > 8), "testing map")
// function filterList(arr) {

// }
// const filteredList = "";

// // Only change code above this line

// console.log(filteredList);

// REST operator

// function addNumbers(...numbers) {
//   // numbers is now an array that we can use .reduce() on
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }

// addNumbers(1, 2, 3, 4, 5, 6, 7, 8);

// SPREAD operator
// 2 arrays comes back as 1>>>>
// think concatenation

// function validateShoppingList(...items) {
//   if (items.indexOf("milk") < 0) {
//     return ["milk", ...items];
//   }

//   return items;
// }

// validateShoppingList("oranges", "bread", "eggs");



// Constructor Functions
// blueprint for generate js objects with the same shape

// Constructor is "what it is to be car"
// function Car(make, model){
//     this.make = make
//     this.model = model
// }

// What do cars "Do"
// Car.prototype.honk = function(){
//     console.log("Honk")
// }

// // instantiate
// const jeep = new Car("jeep", "cherokee")
// const mazda = new Car("mazda", "3")

// mazda.honk()


// ES6 Classes
// class Vehicle {
//     constructor(make, model, honkSound){
//         this.make = make
//         this.model = model
//         this.honkSound = honkSound
//     }
    
//     honk(){
//         console.log(this.honkSound)
//     }
    
//     drive(){
//         console.log("Vrooom")
//     }
// }

// Don't repeat yourself . DRY

// class Motorcycle extends Vehicle {
//     constructor(make, model, honkSound, hasSideCar){
//         super(make, model, honkSound)
//         this.hasSideCar = hasSideCar
//     }
// }
// class Bicycle extends Motorcycle {
//   constructor(make, model, honkSound) {
//     super(make, model, honkSound);
    
//   }
// }


// const jeep = new Vehicle("jeep", "cherokee", "Veerp")
// jeep.honk()

// const harley = new Motorcycle("Harley", "davidson", "Honkey", true)
// const Mongoose = new Bicycle("Mongoose", "BMX", "Beep-beep")

// jeep.honk()

// class Bicycle extends Motorcycle{
//     constructor(make, model, honkSound,){
//     super(make, model, honkSound)
//     this.hasSideCar = hasSideCar
//     }
// }

/* HOISTING----use var */
/* CREATION PHASE ---- this is where HOISTING happens*/
// AVOID IF CAN......Don't use "var" keyword

// var favouriteFood = "grapes";

// var foodThoughts = function () {
//     console.log("Original favourite food: " + favouriteFood);
// }

// foodThoughts ()


// This is a class Constructor in JavaScript

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }

// // create a new instance of the Person class
// const person1 = new Person("John", 30);

// // call the sayHello method on the person1 instance
// person1.sayHello();

class Player {
  constructor(
    name = "",
    status = "Small",
    totalCoins,
    hasStar,
    gameActive = true
  ) {
    this.name = name;
    this.status = status;
    this.totalCoins = totalCoins;
    this.gameActive = gameActive;
    this.hasStar = hasStar;
  }
  ø;

  /* DAMAGE gotHit */
  gotHit() {
    if (this.hasStar) {
      console.log("You used your Star ⭐️ power 🙌!");
      this.hasStar = false;
    } else {
      this.status =
        this.status === "PowerUp"
          ? "Big"
          : this.status === "Big"
          ? "Small"
          : this.endGame();
    }
  }

  /* POWER UP */
  gotPowerUp() {
    if (this.status === "PowerUp") this.hasStar = true;
    else if (this.status === "Big") this.status = "PowerUp";
    else this.status = "Big";
  }
  /* ADDS COINS TO CURRENT COIN COUNT */
  addCoin() {
    this.totalCoins++;
  }

  /* PRINTS PLAYER */
  print() {
    console.log(
      `\n Name: ${this.name} \n Status: ${this.status} \n Coins 💰: ${this.totalCoins} \n StarPower ⭐️: ${this.hasStar}`
    );
  }

  /* ENDGAME(stops running) */
  endGame() {
    this.gameActive = false;
    console.log(`\n ${this.name} 💀 Died 🪦, \n 👾 Game Over `);
    clearInterval(runTime);
  }
}
//SET INTERVAL
let player = new Player("Mario", "Big", 0, false);

let runTime = setInterval(() => {
  player.print();
  let randomEvent = Math.floor(Math.random() * 3);
  console.log(` Random ⁇ Event(s): ${randomEvent}`);
  if (randomEvent === 0) {
    player.gotHit();
  } else if (randomEvent === 1) {
    player.gotPowerUp();
  } else player.addCoin();
}, 1000);













