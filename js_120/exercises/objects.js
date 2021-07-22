// buggy code 1
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

// buggy code 2
let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};
item.discount(20);  // should return 40i
item.discount(50);  // should return 25
item.discount(25);  // should return 37.5

// testing object equality
function objectsEqual(obj1, obj2) {
  for (let key in obj1) {
    if (!key in obj2 || obj2[key] !== obj1[key]) return false;
  }

  for (let key in obj2) {
    if (!key in obj1 || obj2[key] !== obj1[key]) return false;
  }
  return true;
}
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// Student
function createStudent(name, year) {
  return {
    courses: [],
    notes: {},
    info() {
      console.log(`${name} is a ${year} year student`);
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, note) {
      if (this.notes[code]) {
        this.notes[code] += '; ' + note;
      } else {
        this.notes[code] = note;
      }
    },
    updateNote(code, note) {
      this.notes[code] = note;
    },
    viewNotes() {
      Object.entries(this.notes).forEach(([code, note]) =>
      console.log(`${this.courses.find(course => course.code === Number(code)).name}: ${note}`))
    }
  };
}
let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();

// school
let school = {
  students: [],
  addStudent(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      console.log('Invalid Year');
    } else {
      let newStudent = createStudent(name, year);
      this.students.push(newStudent);
      return newStudent;
    }
  },
  enrollStudent(student, course) {
    student.addCourse(course);
  },
  getReportCard(student) {
    student.courses.forEach(course => {
      console.log(`${course.name}: ${course.grade || "In Progress"}`);
    });
  },
  courseReport(courseName) {
    let studentGrades = {};
    this.students.forEach(student => {
        let studentCourse = student.courses.find(course => course.name === courseName);
        if (studentCourse && studentCourse.grade) {
          studentGrades[student.name] = studentCourse.grade;
        }
    });
    if (Object.keys(studentGrades).length) {
      console.log(`=${courseName} Grades=`);
      Object.entries(studentGrades).forEach(([name, grade]) => {
        console.log(`${name}: ${grade}`);
      });
      console.log(`---`);
      console.log(`Course Average: ${Object.values(studentGrades).reduce((grade, ave) => ave + grade / Object.keys(studentGrades).length, 0)}`);
    }
  }
};

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};
school.students = [foo, bar, qux];
school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
