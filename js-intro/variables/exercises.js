// 3
/*{
  // this is a block
  let foo = 'bar';
}
console.log(foo); // ReferenceError: foo is not defined*/

// 4
// const NAME = 'Victor';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);
//
// NAME = 'Joe'; // TypeError: Assignment to constant variable 
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// 5
// let foo = 'bar';
// {
//   let foo = 'qux';
// }
// console.log(foo); // => 'bar'

// 6
const FOO = 'bar';
{
  const FOO = 'qux'; // no TypeError
}

console.log(FOO); // => "bar"