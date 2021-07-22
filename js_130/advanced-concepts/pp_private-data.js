// 1
function makeCounterLogger(firstNum) {
  return (secondNum) => {
    if (firstNum <= secondNum) {
      for (let num = firstNum; num <= secondNum; num++) {
        console.log(num);
      }
    } else {
      for (let num = firstNum; num >= secondNum; num--) {
        console.log(num);
      }
    }
  }
}
let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);

// 2
function makeList1() {
  let list = [];
  return (item) => {
    if (item === undefined) {
      if (list.length) {
        list.forEach(item => console.log(item));
      } else {
        console.log("The list is empty.");
      }
    } else {
      let foundIdx = list.indexOf(item);
      if (foundIdx > -1) {
        list.splice(foundIdx, 1);
        console.log(`${item} removed!`);
      } else {
        list.push(item);
        console.log(`${item} added!`);
      }
    }
  };
}

let list = makeList1();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();

// 3
function makeList2() {
  return {
    items: [],
    add(item) {
      let foundIdx = this.items.indexOf(item);
      if (foundIdx === -1) {
        list.push(item);
        console.log(`${item} added!`);
      }
    },
    remove(item) {
      let foundIdx = this.items.indexOf(item);
      if (foundIdx > -1) {
        this.items.splice(foundIdx, 1);
        console.log(`${item} removed!`);
      }
    },
    list() {
      if (this.items.length) {
        this.items.forEach(item => console.log(item));
      } else {
        console.log("The list is empty.");
      }
    },
  };
}

// 4
function makeList3() {
  let items = [];
  return {
    add(item) {
      let foundIdx = items.indexOf(item);
      if (foundIdx === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },
    remove(item) {
      let foundIdx = items.indexOf(item);
      if (foundIdx > -1) {
        items.splice(foundIdx, 1);
        console.log(`${item} removed!`);
      }
    },
    list() {
      if (items.length) {
        items.forEach(item => console.log(item));
      } else {
        console.log("The list is empty.");
      }
    },
  };
}
