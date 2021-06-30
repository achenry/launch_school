// 1
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo); // => 2
// qux has an own property foo.
// baz doesn't, so JS searches the prototype chain for a foo property

// 2
baz.foo = 2;
console.log(baz.foo + qux.foo); // => 3
// baz gains an own property foo when it is reassigned,
// the prototype's property is not mutated

// 3
let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;
console.log(baz.foo + qux.foo); // => 4
// baz delegates property foo to property qux

// 4
function assignProperty(obj, prop, val) {
  while(obj !== null) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = val;
      break;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

// 5
// for/in loops loop through all enumerable (own and inherited) properties
// Object.keys only loops through own properties
// differ for
let foo = Object.create(fooA);

// 6
let foo = Object.create(null);
Object.getPrototypeOf(foo) !== null;
