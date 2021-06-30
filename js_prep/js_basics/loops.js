// loop and log
for (let i = 0; i <= 10; i += 2) {
  console.log(i); // => 0, 2, 4, 6, 8, 10
}

// countdown
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}
console.log("Launch!");

// triple greeting
let greeting = 'Aloha!';
for (let i = 0; i < 3; i++) console.log(greeting);

// take two
for (let i = 1; i <= 100; i++) {
  console.log(i * 2);
}

// looping over Array Elements
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index++]);
}

// continue
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for ( let i = 0; i < cities.length; i++ ) {
  if (cities[i] === null) continue
  console.log(cities[i]);
}

// and on and on and on
// no terminating condition
for (let i = 0; ; i += 1) {
  console.log("and on");
}
// with terminating condition
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

// that's odd
let num = 1;
while (num < 40) {
  console.log(num);
  num += 2;
}

// finding nemo
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for (f in fish) {
  console.log(fish[f]);
  if (fish[f] === 'Nemo') break;
}

// do...while
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
} // => (will never run)

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0); // => 'Wooot!'
