class Robot {
  static LETTERS = Array.from('ABCDEFGHIJKLMNOPQRSTUVXYZ');
  static NUMBERS = Array.from('123456789');
  static names = [];
  static NUM_LETTERS_IN_NAME = 2;
  static NUM_NUMBERS_IN_NAME = 3;

  name() {
    if (this.robotName) return this.robotName;

    while (Robot.names.includes(this.robotName) || !this.robotName) {
      this.robotName = this.generateName();
    }

    Robot.names.push(this.robotName);
    return this.robotName;
  }

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }

  generateName() {
    let newName = '';
    for (let letterIdx = 0; letterIdx < Robot.NUM_LETTERS_IN_NAME; letterIdx++) {
      newName += Robot.LETTERS[this.randomNum(0, Robot.LETTERS.length)];
    }
    for (let numberIdx = 0; numberIdx < Robot.NUM_NUMBERS_IN_NAME; numberIdx++) {
      newName += Robot.NUMBERS[this.randomNum(0, Robot.NUMBERS.length)];
    }
    return newName;
  }

  reset() {
    let nameIdx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameIdx, 1);
    this.robotName = null;
  }
}

module.exports = Robot;
