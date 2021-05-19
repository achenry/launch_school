let str = 'cast';
if (str.match(/s/)) {
  console.log("mathced 's'");
}
if (str.match(/x/)) {
  console.log("matched 'x'");
}

if (text.match(/\t/)) {
  console.log("has tab");
}

let text = 'xyx';
if (text.match(/[^x]/)) {
  console.log('matched');
}
