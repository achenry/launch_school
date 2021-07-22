// when node is used to run a .js file, it wraps code in a function,
// so "global" variables are not in fact defined on the global object
var bar = 42;
console.log(global.bar);
bar += 1;
console.log(global.bar);

let foo = 86;
console.log(global.foo);

//
function foo() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
}

foo();

//

function foo() {
  if (false) {
    var a = 1;
  }
  console.log(a); // undefined
}
foo();
