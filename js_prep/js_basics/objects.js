// retrieve a value (part 1)
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};
student.courses;
student['courses'];

// retrieve a value (part 2)
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};
jane.location.country;
jane['location']['country'];

// add a property
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};
fido.age = 10;
fido.favoriteFood = 'rice';
fido['favorite drink'] = 'water';

// greetings from jane
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(name) {
    console.log(`Hey, ${name}!`);
  },
};

jane.greet('Bobby'); // Hej, Bobby!

// dot notation vs bracket notation
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // => { prefix: 'Pacific' }

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // => { Indian: 'Pacific' }

// is it true?
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}
// all keys coerced into strings

// car keys
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);

// convert an object to a nested array
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
Object.entries(person);

// ...and vice versa
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
nestedArray.reduce((acc, next) => {
  acc[next[0]] = next[1];
  return acc;
}, {});

// cloning a person
let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

function clone(obj) {
  return Object.assign({}, obj);
}


let objCopy = clone(obj);
console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

objCopy.number = 2;
objCopy.string = 'xyz';
objCopy.array.push(4);
console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }
