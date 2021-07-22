// 1
// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();
// Uncaught SyntaxError: Unexpected token (
// a function declaration must be converted to a function expression before you can invoke it with immediate invocation syntax

// 2
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// 3
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}
console.log(sum);

sum += sum(numbers);

// throws an error because var sum and function sum have the same name
// both are hoisted. The var sum declaration is discarded but
// it is reassigned (from the function) to the numbers 0 and then
// incremented by 10 and 31.


var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

console.log(sum);

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

// 4
(function(num) {
  for (let currentNum = num; currentNum >= 0; currentNum--) {
    console.log(currentNum);
  }
})(7);

// 5
(function foo() {
  console.log('Bar');
})();

foo(); // not accessible in the global scope, even if a named function

// 6
let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// 7
(function foo(num) {
  console.log(num);
  if (num !== 0) {
    foo(num - 1);
  }
})(7);
