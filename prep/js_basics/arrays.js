// first element
let first = arr => arr[0];
first(['Earth', 'Moon', 'Mars']); // 'Earth'

// last element
let last = arr => arr[arr.length - 1];
last(['Earth', 'Moon', 'Mars']); // 'Mars'

// add + delete
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.splice(0, 1);
// energy = energy.slice(1);
// energy.shift():
energy.push('geothermal');
// energy.unshift('geothermal');

// alphabet
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet.split('');
// Array.from(alphabet);

// filter
let scores = [96, 47, 113, 89, 100, 102];
scores.filter(score => score >= 100).length;

// vocabulary
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
vocabulary.forEach(arr => arr.forEach(word => {console.log(word)}));

// equality
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // => false, different memory locations

// type
function filter(input) {
  return input.length !== undefined && typeof input !== 'string';
  // Array.isArray(input);
}
let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

console.log(filter(someValue1));
console.log(filter(someValue2));

// travel
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(item, arr) {
  return !!arr.filter(el => el === item).length;
  // return arr.indexOf(item) !== -1;
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

// passcode
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
passcode.join('-');
passcode.join('');

// checking items off the grocery list
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
while (groceryList.length) console.log(groceryList.shift());
