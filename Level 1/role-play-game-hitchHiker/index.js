const readline = require("readline-sync");
const prompt = require("prompt-sync")();
var r = true
var a = true
var isRunning = r;
var isAttacking = a;
var player = { name: playerName, hp: 100, rewards: [] };
var playerStuff = ["shoes", "tent", "water"];

let enemies = []

function Enemies (enemyName, hp, weapon) {
  this.enemyName = enemyName;
  this.hp = hp;
  this.weapon = weapon;
  
  
}

let enemies1 = new Enemies ("rockTroll", 100, "rocks",);
let enemies2 = new Enemies ("Mr.mudFlood", 100, "mud", );
let enemies3 = new Enemies ("wildBoar posse", 100, "tusks");

enemies.push(enemies1, enemies2, enemies3)

let myInventory = ["box cutter"]

//********Steps for Inventory******
//1. Create an empty array
//2. Push enemies weapon into array



// write a readlineQuestion asking the player to check there Inventory by pressing "p"for print

var playerName = readline.question(
  "Welcome to Hitch Hiker fellow traverller what's your name ? "
);
console.log("Welcome " + playerName + " let's get started");

var choices = readline.keyIn("Choose 'w' to walk, 'q' to quit, 'i' to check your inventory. ", {
  limit: "wqi",
});
//use a while a loop and call the walking inside of that while loop
//create a variable that will determine if the  condition is true or false

//   var inventory = readline.keyIn("press P to check", { limit: "p" });
 

var isPlaying = true;
while (isPlaying === true) {
  //conditional statement
  if (choices === "w") {
    console.log("You chose to walk. ");
    walking();
  } else if (choices === "q") {
    console.log("You chose to quit. ");
    break;
  } else if (choices === "i"){
    console.log("Here is your inventory: " + myInventory);
    walking()
  }
}

//for walking function:
function walking() {
  console.log("You are walking?");
  //use Math.random for walking function.There is a 1/3 or 1/4 chance of being attacked by the enemy.
  var random = Math.random(); /* this will return a number bw 0 and 1 */
//   console.log(random, "you now have a chance of being attacked by your enemy");
  //use an if statement stating if the random number is greater than 0.25, no enemies appeared
  if (random <= 0.66) {
    //use keyIn method to get the player to walk if there are no enemies
    const chooseWalk = readline.keyIn(
      "No enemies in sight. Press 'w' to keep walking. ",
      { limit: "w" }
    );
    if (chooseWalk === "w") {
      console.log("You can continue walking");
    }


  }
  if (random > 0.66) {




  

    var question2 = readline.keyIn(
      `Oh no! ${playerName}. You are under attack. What would you like to do next, R for run, A to fight back, or I to check inventory? `,
      { limit: "rai" }
    );
    

    if (question2 === "r") {
      //conditional statement
      console.log("You chose to run");
      console.log(
        "Good choice, I would've done the same thing. let's get out of here "
      );

      
      running()
      //create a separate function called run(or whatever variable name) and call that function here
      //run()
    } else if (question2 === "a") {
      console.log("You chose to fight");
      // if(isAttacking === null) {
        //create a separate function called attack(or whatever variable name) and call that function here
        attacked()
      // console.log("Good choice, but you don't have any weapons. ");
    } else if (question2 === "i") {
        console.log("Here is your inventory: " + myInventory)
        walking()
    }
  }

}

function attacked () {
let randomEnemies = enemies[Math.floor(Math.random() * enemies.length)];

  console.log(`You are now in a fight for your life against ${randomEnemies.enemyName} `);

 const hpPlayerLosses = Math.floor (Math.random() * 100);
//  console.log(hpPlayerLosses, "random player hp")

 let newPlayerHp = player.hp - hpPlayerLosses
 console.log(`The enemy striked you. Your hp is now ${newPlayerHp}`)

 const hpEnemyLosses = Math.floor (Math.random() * 100)
//  console.log(hpEnemyLosses, "random enemy hp")

let newEnemyHp = randomEnemies.hp - hpEnemyLosses

console.log(`You hit the enemy. The enemy's hp is now ${newEnemyHp}`)


while (newPlayerHp > 0 && newEnemyHp > 0){
  newPlayerHp -= hpPlayerLosses;

  // if(newPlayerHp > 0){
    console.log(`Your hp is now ${newPlayerHp}. `)
    // }
    newEnemyHp -= hpEnemyLosses
    // if(newEnemyHp > 0){
      console.log(`${randomEnemies.enemyName} hp is now ${newEnemyHp}. `);
      // }
    
    } 
  if(newPlayerHp < 0) {
    console.log(`You were defeated by ${randomEnemies.enemyName}`);
    isPlaying = false
  } else if (newEnemyHp <= 0) {
    console.log(`You defeated ${randomEnemies.enemyName}`);
    //if enemy is defeated remove enemy from array
    const randomEnemyIndex = enemies.indexOf(randomEnemies)
    enemies.splice(randomEnemyIndex, 1)
    console.log(enemies, "enemies removed")
    //**********logic for pushing items/weapons into inventory goes here**************
    myInventory.push(randomEnemies.weapon)
    
    //you can use readline sync's key in method to view inventory
  
  } 


  //if the enemy array is less than or equal to 0, end game because no enemies are left
  if(enemies.length <= 0){
    console.log("You have defeated all of the enemies.")
    isPlaying = false
  }

}
//create function for attacking here
//use math.random to randomize how much hp a player loses
//use math.random to randomize how much hp the enemy loses
//also if you beat the enemy, you can use the splice method to remove the enemy from the enemy array



  //you can push the defeated enemy's weapon/item inside of the inventory array


//create function for running here
function running() {
  //use math.random to get a randomized number
  const randomChance = Math.random()
  //there is a 50% chance of escaping
  //if random number is greater that 50%, console log the player has escaped
  if (randomChance > 0.50 ) {
    console.log ("You have escaped the enemy hands")
  } else {
    console.log("You have failed to escape")
    attacked()
  }
  //if random number is less than 50%, console  log the player has failed to escape and run the attacking function
}
// console.log(running);

//end game is no enemy
// } else if (`Hello ${playerStuff} + + is being depleted`) {
// }
//   console.log(`${playerStuff} + +" Has been depleted! "`);

//call enemy appear function

// // const walk = takeAction.bind(actionMove1);
// // const attack = takeAction.bind(actionMove2);
// // const run = takeAction.bind(actionMove3);

// // console.log(`ah....Excellent choice! you choose to ${question1}. `);

// // Have player make a selection W = walk R = run A = attack

// // const name = prompt("choose W for walk, A for attack, or R for run ");
// // choose an option w = walk a = attack r = run

//   // console.log(` Hi  welcome to HitchHiker`);

// // console.log("Are you ready to play enter y for yes,'[]' or n for no '[]'!");

// /*

// rl.question function user_Q1()  {
//   console.log("We're glad to here, let's play!");
// }//user wants to start

// rl.question function user_Q2()  {
//   console.log("We're sorry to see you go! :(");
// }//user wants to stop

// console.log(user_Q1 () || user_Q2());

