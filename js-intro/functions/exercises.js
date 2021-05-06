// 1
// let bar = 1;
//
// function foo() {
//   let bar = 2;
// }
//
// foo(); // does not affect output, because bar is a local variable in foo function body
// console.log(bar); // => 1
//
// // 4
// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }
//
// scream('Yipeee'); // nothing

// 5
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee'); // returns "Yipeee!!!!', but doesn't write it to the console
