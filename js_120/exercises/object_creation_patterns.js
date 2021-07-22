// ancestors
Object.prototype.ancestors = function() {
  let list = [];
  let prototype = this;
  do {
    prototype = Object.getPrototypeOf(prototype);
    list.push(prototype.name || 'Object.prototype');
  } while (prototype.name);
  return list;
};
// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']

// classical object creation
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.lastName}`);
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
};

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log('Studying');
};

function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, graduateDegree);
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function() {
  console.log('Researching');
};
let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'

// circular queue
class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.queue = [];
    for (let idx = 0; idx < this.bufferSize; idx++) {
      this.queue.push({isNewest: false, value: null});
    }
  }

  enqueue(newValue) {
    let newIdx = this.nextIdx(this.newestIdx());
    this.queue.forEach((item, idx, queue) => queue[idx].isNewest = false);
    this.queue[newIdx].isNewest = true;
    this.queue[newIdx].value = newValue;
  }

  nextIdx(idx) {
    return (idx + 1) % this.bufferSize;
  }

  nonNullObjects() {
    return this.queue.filter(obj => obj.value !== null);
  }

  isFull() {
    return this.nonNullObjects().length === this.bufferSize;
  }

  oldestIdx() {
    let idx = this.nextIdx(this.newestIdx());
    let numIndicesChecked = 0;
    while (this.queue[idx].value === null) {
      if (numIndicesChecked === this.bufferSize - 1) {
        return -1;
      }
      idx = this.nextIdx(idx);
      numIndicesChecked++;
    }
    return idx;
    // return this.queue.indexOf(this.queue.slice().sort((a, b) => b.age - a.age)[0]);
  }

  newestIdx() {
    return this.queue.reduce((newIdx, obj, idx) => obj.isNewest ? idx : newIdx, -1);
    // if (!this.nonNullObjects().length) return null;
    // return this.queue.indexOf(this.queue.slice().sort((a, b) => a.age - b.age)[0]);
  }

  dequeue() {
    // remove and return oldest object in queue
    if (!this.nonNullObjects().length) return null;
    else {
      let oldestObjIdx = this.oldestIdx();
      let oldestObjValue = this.queue[oldestObjIdx].value;

      this.queue[oldestObjIdx].value = null;
      this.queue[oldestObjIdx].isNewest = false;
      return oldestObjValue;
    }

  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
