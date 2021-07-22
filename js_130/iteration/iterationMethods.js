// forEach
function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index++) {
    callback.call(thisArg, array[index], index, array);
  }
}

let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));

// filter
function filter(array, callback, thisArg) {
  let filteredArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callback.call(thisArg, array[index], index, array)) {
      filteredArray.push(array[index]);
    }
  }
  return filteredArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

// map
function map(array, callback, thisArg) {
  let mappedArray = [];
  for (let index = 0; index < array.length; index++) {
    mappedArray.push(callback.call(thisArg, array[index], index, array));
  }
  return mappedArray;
}
numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// reduce
function reduce(array, callback, initAcc, thisArg) {
  let acc = initAcc || array[0];
  let index = initAcc ? 0 : 1;
  while (index < array.length) {
    acc = callback.call(thisArg, acc, array[index], index, array);
    index++;
  }
  return acc;
}
numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]


// reduce as filter
function filter(array, callback, thisArg) {
  return array.reduce((filteredArr, element, index, fullArr) => {
    if (callback.call(this, element, index, fullArr)) {
      filteredArr.push(element);
    }
    return filteredArr;
  }, [], thisArg);
}

// reduce as map
function map(array, callback, thisArg) {
  return array.reduce((mappedArr, element, index, fullArr) => {
    mappedArr.push(callback.call(this, element, index, fullArr));
    return mappedArr;
  }, [], thisArg);
}
