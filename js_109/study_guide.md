### Markdown syntax

> blockquote
>> nested blockquote

1. first item
    1. first indented item
    2. second indented item
2. second item

- item 1
- 1968\. a great year. item 2

*a* **b** ***c***

This is inline `code`
```
this is a block of code
```

a link is like [this](google.com "the most-used search engine")

<https://www.google.com>

<aoife@fidenso.com>


### declarations, initialization, assignment, and re-assignment
#### Declaration
`let newVar;`

 a statement that asks the JavaScript engine to reserve space for a variable with a particular name.
 Optionally, it also specifies an initial value for the variable.

#### Initialization
`newVar = 5;`

initial value given to variable on declaration, defaults to `undefined`.

#### Assignment
`declaredVar = 5;`

giving a declared variable a value

#### Re-assignment
`assignedVar = 6;`

giving a declared, initialized and possible assigned or reassigned variable a new value

### variable scope, especially how variables interact with function definitions and blocks

determines where the variable is available in the program

Global scope

(Non-function) Block scope

Shadowing

Inner scope can access outer scopes, but outer scopes can't access inner scopes.

`let` or `const` keywords declare a block scope variable

Variable declared without `let` or `var` has global scope.

### primitive values, objects, and type coercions
#### Primitives
Number, BigInt, String, Boolean, null, undefined, Symbol

Immutable - they don't have parts that can be changed. Can't add to, remove from or otherwise change.
Any operation performed on a primitive value returns a new primitive value.

Atomic - they're indivisible.

If a variable contains a primitive value, all you can do to that variable is use it in an expression or reassign it.

#### Objects
Array, Object, Date, Function

Compound values

Mutable - certain operations on objects can change the object in place.
All variables that hold a reference to that object will see the change.

#### Type Coercions

conversion of one type of value into another.
`typeof 1;`

##### Explicit
`Number(...), parseInt(...), parseFloat(...), +`
``toString, String, `${}` ``

##### Implicit
`'1' == 1` coerces the string into a number

`true == 1` coerces the boolean into a number

`true == '1'` coerces the boolean into a number, then coerces the string into a number

`undefined == null` is truthy

`{} == '[object Object]'` coerces the object into a string

`[] == 0` coerces the array into an empty string, then coerces the string into a number

`'' + [1,2,3]`
When one of the operands of the + operator is a string, the other operand is also coerced to a string and
concatenated with the string

`1 + true`
When both operands are a combination of numbers, booleans, nulls, or undefineds, they are converted to numbers and
added together

`[1] + 2`
When one of the operands is an object, both operands are converted to strings and concatenated together

`<, >, <=, >=`
When both operands are strings, JavaScript compares them lexicographically.
Otherwise, JavaScript converts both operands to numbers before comparing them.

### object properties
Dot vs Bracket notation

`Object.keys()` and `hasOwnProperty`.

`Object.values()`

`Object.entries()`

`Object.freeze()` shallow-freezes the object

`Object.assign()` or `Object.create()` creates new object

Array keys are strings. Indices are properties as strings or numbers.

`for key in object` iterates through own and inherited properties

### mutability vs. immutability vs. const

### mutability
certain operations can change the object in place.
All variables that hold a reference to the object as their value will change too.
Methods can mutate the caller (destructive) or return a new variable.

### immutability
variable cannot be added to, removed from or otherwise changed.
Any operation on the variable results in a new variable.

### `const`
`const` lets you declare and initialize constant variables, which have an immutable binding to their values.

Trying to reassign the variable will result in a TypeError.

`const` declarations without initialization will result in a SyntaxError.

### loose and strict equality
Strict equality compares the type and value of two variables.

Loose equality coerces one type into another implicitly and then compares the two values.

### passing arguments into and return values out of functions

Arguments let you pass data from outside the function's scope into the function so it can access the data.
In the definition of a function, the names between parentheses are called parameters.
The arguments are the values of those parameters.
Parameters are local variables that are only defined within the body of the function.

Implicit vs Explicit Return value

Return result to caller

All functions return something unless they raise an exception, even if they don't execute a return statement.

Predicates - functions that always return a boolean value.

### working with Strings
Primitive.

Immutable

`"string".slice(), "string".substring(), "string".concat("another string"), "string".includes("another string"),
"string".indexOf("tri"), "string1 string2".split(" ""), "string   ".trim()`

`"string".length`

`'string'.charAt(1), 'string'[1]`

`'string'.toUpperCase(), 'string'.toLowerCase()`

`"s".charCodeAt()", String.fromCharCode(1)`

### working with Arrays, especially the iteration methods (forEach, map, filter, and find)


### working with Objects; accessing keys and values of an Object as arrays
`Object.keys(), Object.values(), Object.entries()`

### arrays are objects
Can reassign length property => `<X empty item(s)`.

Can add new properties.

### understand the concepts of pass-by-reference and pass-by-value
As an argument or as a return value.

#### Pass-by-reference
Function changes given argument.

Objects.

#### Pass-by-value
When you use a variable to pass an argument to a function,
the function can't do anything that sets the original variable to a different value

Primitive values

#### pass-by- value-of-the-reference or call-by-sharing
When an operation within the function mutates its argument, it affects the original object.

### variables as pointers
Variable has memory address and value.
When a primitive variable is reassigned, memory address remains the same, value changes.
When an object variable is reassigned, memory address remains the same, value changes to new memory address.
When an object variable is mutated, memory address remains the same, value remains the same, object referenced changes.
Strings acts like they are stored as primitive values.

### console.log vs. return
`console.log` has the side-effect of printing a given expression to the console.
Return passes a primitive by value or an object by reference to the caller of the function,
storing it in the variable to which the function return value is assigned.

### truthiness vs. boolean
Boolean data type - `true` or `false`
Truthiness - evaluated as true e.g. in a conditional expression.

Falsy - null, undefined, "", 0, NaN, false
True - anything else

### function definition and invocation
#### Function definition
Defining the name, parameters and functionality of a function with a declaration, expression or arrow function

#### Function invocation/call
When the code inside a function block is run and a value returned to the caller

### function declarations, function expressions, and arrow functions
#### Function declaration
Can be defined at the bottom of a file and invoked above.
`function funcName(param1) {
    ...
 }`

#### Function expression
Must be defined before being invoked.
Any function definition that doesn't have the word function at the very beginning of a statement
is a function expression (e.g. wrapped in parentheses, returning a function).
`let funcName = function(param1) {
};`

#### Arrow function
Must be defined before being invoked. Condenses representation.
Useful for callback functions.
`let funcName = param1 => ...`

### implicit return value of function invocations
`undefined`

### first-class functions
All JavaScript functions are objects.
You can assign them to variables, pass them as arguments to other functions and return them from a function call.

### side-effects
1. reassigning a non-local variable
2. Mutates an object referenced by a non-local variable
3. Reads from or writes to a file, network connection, browser or system hardware
e.g. writing to console log or reading input from terminal.
4. Raises an exception without handling it.
5. Calls another function that has side-effects.

### naming conventions (legal vs idiomatic)
#### Legal and idomatic
non-constant variables, object properties, functions - camelCase

constructor functions and classes - CamelCase

configuration, magic numbers - SCREAMING_SNAKE_CASE

caps allowed for acronym

words differentiated by _ or capital letter on new word

#### non-idiomatic but valid
Starting with $, _. Ending with _. Anything else that deviates from the idiomatic examples.

#### invalid
beginning with number

hyphen, dot

###be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)

### Method Chaining, Function Composition
