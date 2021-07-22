// 1
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);
// side-effects in foo:
// function modifies the array passed as an argumnt
// function writes sth to console

// 2
function sum(a, b) {
  return a + b;
}
// is a pure function
function sum(a, b) {
  a + b;
}
// is a pure function
function sum(a, b) {
  return 3.1415;
}
// is a pure function (but not a very useful one)
