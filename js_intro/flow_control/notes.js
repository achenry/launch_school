if (x === 3) {
  console.log('x is 3');
}

if (x === 3) {
  console.log('x is 3');
} else {
  console.log('x is NOT 3');
}

if (x === 3)
  console.log('x is 3');

if (x === 3)
  console.log('x is 3');
else
  console.log('x is NOT 3');

if (x === 3) {
  console.log('x is 3');
} else {
  if (x === 4) {
    console.log('x is 4');
  } else {
    console.log('x is NOT 3 or 4');
  }
}

if (x === 3) {
  console.log('x is 3');
} else if (x === 4) {
  console.log('x is 4');
} else {
  console.log('x is NOT 3 or 4');
}

// strict equality operator/identity operator, true if same type and value
5 === 5
5 === 4
'abc' === 'abc'
'abc' === 'abcd'
'abc' === 'aBc'
'5' === '5'
'5' === '6'
5 === '5'
'' === 0

// strict inequality operator, false if same type and value
5 !== 5
5 !== 4
4 !== 156
'abc' !== 'def'
'abc' !== 'aBc'
5 !== '5'

// non-strict equality operator/loose equality operator
// when operands have different types, one is coerced to the other's type before being compared
5 == 5
5 == 4
5 == '5' // true
'' == 0 // true

// non-strict inequality operator/loose inequality operator
5 != 5
5 != 4
5 != '5' // false
'' != 0 // false

// less than operator
4 < 5
5 < 4
5 < 5
"4" < "5" // true
"42" < "402" // false, character by character comparison, smaller numbers less than larger numbers
"42" < "420" // true, shorter string is less than longer string
"42" < 420 // true, "42" is coerced to a number

// greater than operator
4 > 5
5 > 4
5 > 5
"4" > "5" // false
"42" > "402" // true
"42" > "420" // false
"42" > 420 // false

// less than or equal operator
4 <= 5
5 <= 4
5 <= 5

// greater than or equal operator
4 >= 5
5 >= 4
5 >= 5

// not operator
!true
!false
!(4 === 4) // false
!(4 !== 4) // true

// and operator
true && true // true
true && false // false
false && false // false
false && true // false
(4 === 4) && (5 === 5) // true
(4 === 4) && (5 === 6) // false
(4 === 5) && (5 === 5) // false
(4 === 5) && (5 === 6) // false

// or operator
true || true // true
true || false // true
false || true // true
false || false // false
(4 === 4) || (5 === 5) // true
(4 === 4) || (5 === 6) // true
(4 === 5) || (5 === 5) // true
(4 === 5) || (5 === 6) // false

// short circuit evaluation

// truthiness
let a = 5;
if (a) { // 5 is coerced to true
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

let b = 0;
if (b) { // 0 is coerced to false
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

let x;
if (x = 5) { // returns 5
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

// falsy
false
0
-0
0n // the BigInt version of zero
'' // empty string
undefined
null
NaN

// return value of logical operators is value of last evaluated operand
3 && 'foo' // 'foo'
'foo' && 3 // 3
0 && 'foo' // 0
'foo' && 0 // 0

3 || 'foo' // 3
'foo' || 3 // 'foo'
0 || 'foo' // 'foo'
'foo' || 0 // 'foo'
'' || 0 // 0

let foo = null; // falsy
let bar = 'qux'; // truthy
let isOk = foo || bar; // 'qux'

let isOk = (foo || bar) ? true : false; // ternary expression

let isOk;
if (foo || bar) {
  isOk = true;
} else {
  isOk = false;
}

let isOk = !!(foo || bar); // returns a boolean value

// operator precedence - comparison, equaliry, AND, OR

// ternary operator
1 == 1 ? 'this is true' : 'this is not true'
1 == 0 ? "this is true" : "this is not true"

let message = true ? 'this is true' : 'this is not true';
console.log(false ? 'this is true' : 'this is not true');

// switch statement
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5 nor 6');
    break;
} // => a is 5

if (a === 5) {
  console.log('a is 5');
} else if (a === 6) {
  console.log('a is 6');
} else {
  console.log('a is neither 5 nor 6');
} // => a is 5

// fall-through
switch (a) {
  case 5:
    console.log('a is 5');
  case 6:
    console.log('a is 6');
  default:
    console.log('a is neither 5 nor 6');
} // => a is 5
//     a is 6
//      a is neithr 5 nor 6

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6 or 7
    console.log('a is either 5, 6 or 7');
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8 or 9');
    break;
}