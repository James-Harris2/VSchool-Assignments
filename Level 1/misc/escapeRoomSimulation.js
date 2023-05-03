// YOU HAVE 3 OPTIONS:
// 1. Put hand in hole
// 2. Find the key
// 3. Open the door

// Remember, you can't open the door unless you find the key first.
// You die if put your hand in the hole.

const readline = require('readline-sync'); // Pulling in readline-sync

const name = readline.question('What is your name? '); // Asks player for name

const introMessage = 'Welcome to the ESCAPE ROOM!'; // Welcome message
console.log(introMessage);

let playerLife = true;  // Boolean flags for player's health & key status
let foundKey = false;

while (playerLife == true) {


    // Sets game options for player to choose from (options are limited to 3)
    const gameOptions = readline.keyIn('Press 1 to check the hole in the wall.. \n Press 2 to find the key! \n Press 3 to open door.. \n', {limit: `$<1-3`});
    
    if (gameOptions == 1 ) { // Player checks hole in wall
    console.log ('You put your hand in the wall. GAME OVER');
    playerLife = false;

    } else if (gameOptions == 2 && foundKey == false) {// Player finds key for the first time
        console.log ('You found the key! The last step is to open the door.');
        foundKey = true;
    } else if (gameOptions == 2 && foundKey == true) {// Player chooses option 2 but already has key
        console.log('Key already found. The last step is to open the door.');
    } else if (gameOptions == 3 && foundKey == false) {// Player chooses otpion 3 with no key
        console.log('Sorry, you need a key. Please go back to find it first.');
    } else if (gameOptions == 3 && foundKey == true) {// Player opens door with key and wins game
        console.log('Congrats ${name}, you found a way out!');
        playerLife = false;
    }
}