// 1
class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
  play() {

  }
}

// method overriding
// objects created with Bingo class will use its play method instead of
// looking up the prototype chain and finding it in the Game class

// 2
class Greeting {
  greet(msg) {
    console.log(msg);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');
  }
}
