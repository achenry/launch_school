let rlSync = require('readline-sync');

let fName = rlSync.question('What is your first name? ');
let lName = rlSync.question('What is your last name? ');
console.log(`Hello, ${fName} ${lName}!`);