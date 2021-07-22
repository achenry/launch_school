// 1
function delayLog() {
  for (let delay = 1; delay <= 10; delay++) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}
delayLog();

// 2
// var declaration has function scope
// so the same delay variable is used for each loop iteration block
// due to closure, by the time the callback is invoked (after the loop has finished),
// delay refers to the most recent value

// let has block scope
// so on each iteration of the loop (a new block)
// the callback forms a closure with a new variable

// 3
setTimeout(function() {   // 1
  console.log('Once');    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log('upon');    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log('a');       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log('time');    // 8
}, 4000);

// 4
setTimeout(function() {
  setTimeout(function() {
    q(); // 7
  }, 15);

  d(); // 3

  setTimeout(function() {
    n(); // 5
  }, 5);

  z(); // 4
}, 10);

setTimeout(function() {
  s(); // 6
}, 20);

setTimeout(function() {
  f(); // 2
});

g(); // 1

// g, f, d, z, n, s, q

// 5
function afterNSeconds(callback, numSeconds) {
  setTimeout(callback, numSeconds * 1000);
}
