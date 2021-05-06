// 2
function factorialLoop(number) {
  result = 1;
  for (let i = 1; i <= number; i++) result *= i;
  return result;
}

console.log(factorialLoop(1));
console.log(factorialLoop(2));
console.log(factorialLoop(3));
console.log(factorialLoop(4));

// 6
function factorialRec(number) {
  if (number === 1) return number;
  else return number * factorialRec(number - 1);
}

console.log(factorialRec(5));
console.log(factorialRec(6));
console.log(factorialRec(7));
console.log(factorialRec(8));

// 3
// counter = 1 is an assigment that returns 1 which is truthy
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// 4
// no error because increment is not necessary for for loop condition
for (let i = 0; i < 5;) {
  console.log(i += 1); // returns new value
} // => 1, 2, 3, 4, 5

// 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let tries = 0;
let result;
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
