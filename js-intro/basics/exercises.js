// 1
let firstName = 'Aoife'
let lastName = 'Henry'
let fullName1 = 'Aoife' + 'Henry'
let fullName2 = `${firstName} ${lastName}`

// 2
let num = 4936
let oneNum = num % 10
let tenNum = ((num - oneNum) / 10) % 10
let hundredNum = ((num - oneNum - (tenNum * 10)) / 100) % 10
let thousandNum = ((num - oneNum - (tenNum * 10) - (hundredNum * 100)) / 1000) % 10

// 3
String, Boolean, Number, Number, Undefined, Object

// 4
// implict type coercian of number 10 to string '10', followed by string concatenation
console.log(Number('5') + 10)

// 5
console.log(parseInt('5') + 10)

// 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

// 7
// no - returns an undefined value

// 8
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']

// 9
let pets = {
  'asta': 'dog',
  'butterscotch': 'cat',
  'pudding': 'cat',
  'neptune': 'fish',
  'darwin': 'lizard'
}

// 10
'foo' === 'Foo' // false

// 11
parseInt('3.1415') // 3

// 12
'12' < '9' // true, character by character comparison
