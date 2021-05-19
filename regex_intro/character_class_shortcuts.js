if ('Four score'.match(/\s/)) {
  console.log('matched 1');
}
if ("Four\tscore".match(/\s/)) {
  console.log('matched 2');
}
if ("Four-score\n".match(/\s/)) {
  console.log('matched 3');
}
if ("Four-score".match(/\s/)) {
  console.log('matched 4');
}

if ('a b'.match(/\S/)) {
  console.log('matched 1');
}
if (" \t\n\r\f\v".match(/\S/)) {
  console.log('matched 2');
}
