// greet 1
function greet(greeting='Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

// greet 2
function greet(greeting='Hello', recipient='world') {
  console.log(`${greeting} ${recipient}`);
}
greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// greet 3
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

// calculate bmi
function calculateBMI(heightInCentimeters, weightInKilograms) {
  return String(Math.round(weightInKilograms / (heightInCentimeters / 100)**2 * 100) / 100);
  // return (weightInKilograms / heightInMeters ** 2).toFixed(2);
}
calculateBMI(180, 80); // "24.69"

// calculate cat age
function catAge(humanYears) {
  let catYears = 0;
  if (humanYears >= 1) catYears += 15;
  if (humanYears >= 2) catYears += 9;
  if (humanYears >= 3) catYears += 4 * (humanYears - 2);
  return catYears;
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

// remove last char
function removeLastChar(str) {
  return str.slice(0, str.length - 1);
  // return str.substring(0, str.length - 1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

// arrow functions (part 1)
const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

// arrow functions (part 2)
let initGame = () => { level: 1, score: 0 };

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
