// falsy
// 0, null, undefined, '', NaN, "", -0, 0n

// yes? no? part 1
let randomNumber = Math.round(Math.random());
switch (randomNumber) {
  case 1:
    console.log('Yes!');
    break;
  case 0:
    console.log('No!');
    break;
  default:
    break;
}

// yes? no? part 2 (ternary operator)
let randomNumber = Math.round(Math.random());
console.log(randomNumber === 1 ? 'Yes!' : 'No!');

// check the weather, part 1
let weather = "sunny"; // "rainy" etc
if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.")
} else {
  console.log("Let's stay inside.")
}

// switch
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
} // => 'neigh'
  //    'tweet tweet'
  //    '*cricket*'

// check the weather, part 2
let weather = "sunny"; // "rainy" etc
switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");
}

// logical conditions 1
if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
} // => 'Yes!'

// logical conditions 2
if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
} // => 'No...'

// logical conditions 3
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice); // => $3.99

// are we moving?
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // => true

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0; // different
