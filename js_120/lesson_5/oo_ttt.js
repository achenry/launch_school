let readline = require('readline-sync');

class Square {

  static EMPTY_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.EMPTY_SQUARE) {
    this.marker = marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isEmpty() {
    return this.marker === Square.EMPTY_SQUARE;
  }
}

class Board {
  static NUM_ROWS = 3;

  constructor() {
    // this.squares = [['-', 0, 1], [1, 0, '-'], ['-', 0, '-']];
    this.squares = {};
    for (let sqIdx = 1; sqIdx <= Board.NUM_ROWS * Board.NUM_ROWS; sqIdx++) {
      // this.squares[String(sqIdx)] = "-";
      this.squares[sqIdx] = new Square();
    }
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  display() {
    let spaces = ' '.repeat(5);
    let halfSpaces = ' '.repeat(2);
    let emptyRow = `${spaces}|${spaces}|`;
    let hLine = "-----+-----+-----";

    console.log("");
    for (let rowIdx = 1; rowIdx <= Board.NUM_ROWS; rowIdx++) {
      console.log(emptyRow);
      let row = "";
      for (let colIdx = 1; colIdx <= Board.NUM_ROWS; colIdx++) {
        let sqIdx = ((rowIdx - 1) * Board.NUM_ROWS) + colIdx;
        row += `${halfSpaces}${this.squares[sqIdx].getMarker()}`;
        if (colIdx !== Board.NUM_ROWS) {
          row += `${halfSpaces}|`;
        }
      }
      console.log(row);
      console.log(emptyRow);
      if (rowIdx !== Board.NUM_ROWS) {
        console.log(hLine);
      }
    }
  }

  emptySquares() {
    return Object.keys(this.squares).filter(key => this.squares[key].isEmpty());
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
    // this.emptySquares.splice(this.emptySquares.indexOf(key), 1);
  }

  isFull() {
    return this.emptySquares().length === 0;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  mark() {

  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {

  static POSSIBLE_WINNING_COMBINATIONS = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]]
    .map(comb => comb.map(num => String(num)));

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();
    this.board.display();

    while (true) {

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  humanMoves() {
    let choice;
    let validChoices = this.board.emptySquares();
    while (true) {
      choice = readline.question(`Choose a square (${validChoices.join(", ")}).`);
      if (validChoices.includes(choice)) break;
      console.log("Not a valid choice. Please try again.\n");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.emptySquares();
    let choice = validChoices[Math.floor(Math.random() * validChoices.length)];
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(comb =>
      comb.every(key =>
        this.board.squares[key].getMarker() === player.getMarker()));
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! Take that, human!");
    } else {
      console.log("A tie game, How boring.");
    }
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }
}

let game = new TTTGame();
game.play();
