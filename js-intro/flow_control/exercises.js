// 1
false || (true && false) // false
true || (1 + 2) // true
(1 + 2) || true // 3
true && (1 + 2) // 3
false && (1 + 2) // false
(1 + 2) && true // true
(32 * 4) >= 129 // false
false !== !true // false
true === 4 // false
false === (847 === '847') // true
false === (847 == '847') // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false // true

// 2
function evenOrOdd(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}

// 3
function evenOrOdd(num) {
  if (Number.isInteger()) return num % 2 === 0 ? 'even' : 'odd';
  else {
    console.log("Error");
    return;
  }
}

// 4
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// => 'Product2'
//    'Product3
//    'Product not found!'

// 5
return foo() ? 'bar' : qux();
if (foo()) {
  return 'bar';
} else {
  return qux();
}

// 6
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); // => 'Not Empty'

// 7
function capitalizeLong(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
  // return str.length > 10 ? str.toUpperCase() : str;
}

// 8
function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}
