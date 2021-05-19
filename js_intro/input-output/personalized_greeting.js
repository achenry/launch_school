// use Node's built-in require function to import readline-sync into your program
// returns library as an object
let rlSync = require('readline-sync');

// call question method
// assign user input to name variable
let name = rlSync.question("What's your name?\n");

// display personalized greeting
console.log(`Good Morning, ${name}!`);