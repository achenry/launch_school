'Hello, world!' // string literal
3.141528 // numeric literal
true // boolean literal
{ a: 1, b: 2 } // object literal
[ 1, 2, 3 ] // array literal
undefined // undefined literal

"He said, 'Hi there!'" // with double quotes
'He said, \'Hi there!\'' // with single quotes and escaping
'He said, "Hi there!"' // with single quotes
"He said, \"Hi there!\"" // with double quotes and escaping

`5 plus 5 equals ${5 + 5}` // string interpolation

12_345_678 // grouping in numbers

let toggleOne = true
let sessionActive = false
5 === 5
100 < 9

// undefined === absense of value, value is not defined, declaring variables without a specific value
console.log("Hello, World!") // doesn't return anything
let foo // declare witout assigning a value
foo // undefined
let bar = 5 // declare with an initial value
bar // 3

// null === intentional absense of a value, emptiness, nothing. must use explicitly
let foo = null

typeof 1 // 'number'
typeof 'foo' // 'string'
typeof true // 'boolean'
typeof undefined // 'undefined'
typeof null // 'object', mistake by JavaScript!
typeof [1, 2, 3] // 'object'
typeof NaN // 'number' - indicates an error occurred, an undefined mathematical operation OR trying to convert a non-number value to a number

let value = NaN;
value === NaN; // false, only value in JS that is not equal to itself
NaN === NaN; // false
Number.isNaN(value); // true
Object.is(value, NaN); // true

1 / 0; // Infinity
Infinity * Infinity // Infinity
Infinity + Infinity // Infinity
Infinity - Infinity // NaN
Infinity / Infinity // NaN
1234567890 / Infinity // 0
-1 / 0 // -Infinity
typeof Infinity // 'number'
typeof -Infinity // 'number'
let value1 = Infinity
value1 === Infinity // true
let value2 = -Infinity
value2 === -Infinity // true
let value3 = Infinity
value3 === Infinity * 123456789 // true

'foo' === 'foo' // true
'FOO' === 'foo' // false
'1' + '2' // '12'

// implicit type coercian - lets the engine choose
'1' + 2 // '12' 
'5' - 3 // 2

// explicit type coercian - lets the programmer choose
Number('1') // 1
Number('foo') // NaN
parseInt('12') // 12
parseInt('12xyz') // 12
parseInt('3.1415') // 3, returns Infinity for >300 digits
parseFloat('12.5foo') // 12.5
String(20) // '20'

[1, 2, 3, 4, 5][0] // 1
({ dog: 'barks', cat: 'meows', pig 'oinks' })['cat']

// expressions
7 + (5 + 2) // 14
console.log(5 + 2) // undefined
"hi" // hi

// statement - can't capture a value from it
let foo = 3; // variable declaration