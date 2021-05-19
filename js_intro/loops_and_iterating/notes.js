// do while
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');

// forEach
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
names.forEach(name => console.log(name));

// recursion
function doubler(number) {
  console.log(number);
  if (number <= 50) {
    doubler(number * 2);
  }
}

