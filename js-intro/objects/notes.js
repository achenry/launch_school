// object literal
let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy']
};

// dot notation
person.name;

// bracket notatino
person['age'];

let key = 'name';
person[key];

person.height = '5 ft';
person['gender'] = 'female';

delete person.age;
delete person['gender']
delete person['hobbies']

const MyObj = { foo: "bar", qux: "xyz" };
MyObj.qux = "hey there";
MyObj.pi = 3.1415;
MyObj = {}; // Uncaught TypeError: Assignment to a constant variable

const MyObj = Object.freeze({ foo: "bar", qux: "xyz" });
MyObj.qux = "hey there";
MyObj; // { foo: 'bar', qux: 'xyz' }

// mutable objects vs immutable primitives
let number = 20;
let newNumber = number + 1;
newNumber; // 21
number; // 20

let object = { a: 1, b: 2, c: 3 };
object.c = object.c + 1; // 4
object; // { a: 1, b: 2, c: 4 }

// inheritence
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';
console.log(studentBob.name); // => 'Bob

// for/in loop
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
  // person.prop; // undefined
}

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]); // iterates over properties of prototype too
} // => 3
  //    4
  //    1
  //    2

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) console.log(obj2[prop]); // iterates over properties of prototype too
} // => 3
  //    4

// Object.keys
let personKeys = Object.keys(person);
console.log(personKeys); // => ['name', 'age', 'height'], only own keys
personKeys.forEach(key => console.log(person[key])); // => Bob
                                                     //    30
                                                     //    6 ft

// Object.values
let personValues = Object.values(person);
console.log(personValues); // => ['Bob', 30, '6ft']

// Object.entries
console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]

// Object.assign
let objA = { a: 'foo' };
let objB = { b: 'bar' };
Object.assign(objA, objB); // mutates the first object, { a: 'foo', b: 'bar' }
objA; // { a: 'foo', b: 'bar' }
objB; // { b: 'bar' }

objA = { a: 'foo' };
Object.assign({}, objA, objB); // { a: 'foo', b: 'bar' }
objA; // { a: 'foo' }
objB; // { b: 'bar' }
