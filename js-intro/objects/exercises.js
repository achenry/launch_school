// 1
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
person.name;
person['name'];

// 2
// all valid keys, but non-string keys are coerced to strings
let obj = {
  1: null,
  '1': null,
  undefined: null,
  'hello world': null,
  true: null,
  'true': null
}

// 3
let myArray = {
  0: 'first',
  1: 'second',
  2: 'third',
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// 4
obj = {
  b: 2,
  a: 1,
  c: 3,
};
let upperKeys = Object.keys(obj).map(el => el.toUpperCase());

// 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// 6
"foo" // primitive
3.1415 // primitive
['a', 'b', 'c'] // object
false // primitive
foo // neither primitive nor object, an identifier
function bar() {return "bar";} // object
undefined // primitive
{ a: 1, b: 2 } // object

// 7
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
}); // => 'qux'

for (let key in myObj) {
  console.log(key);
} // => 'foo'
  //    'bar'
  //    'qux'

// 8
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
function copyObj(obj, keys=[]) {
  if (!keys.length) return Object.assign({}, obj);
  else return keys.reduce((acc, next) => {
    acc[next] = obj[next];
    return acc;
  }, {});
}

// 9
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // => 'hi'
console.log(qux); // => 'hello'

// 10
[1, 2, ["a", ["b", false]], null, {}]
// primitives = 1, 2, null, "a", "b", false
// objects = ["a", ["b", false]], ["b", false], {}, [1, 2, ["a", ["b", false]], null, {}]

// 11
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj.bar[3].xyz = 606;
