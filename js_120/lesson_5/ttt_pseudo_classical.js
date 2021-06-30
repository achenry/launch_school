let readline = require('readline-sync');

function Square(marker) {
  this.marker = marker || Square.EMPTY_SQUARE;
}

Square.EMPTY_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
};

Square.prototype.getMarker = function() {
  return this.marker;
};

Square.prototype.isEmpty = function() {
  return this.marker === Square.EMPTY_SQUARE;
};

function Board() {
  this.squares = {};
  for (let key = 1; key <= Board.NUM_ROWS * Board.NUM_ROWS; key++) {
    this.squares[String(key)] = new Square();
  }
}

Board.NUM_ROWS = 3;

Board.prototype.displayWithClear = function() {
  console.clear();
  console.log("");
  console.log("");
  this.display();
};

Board.prototype.display = function() {
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
};

Board.prototype.emptySquares = function() {
  return Object.keys(this.squares).filter(key => this.squares[key].isEmpty());
};

Board.prototype.markSquareAt = function(key, marker) {
  this.squares[key].setMarker(marker);
};

Board.prototype.isFull = function() {
  return this.emptySquares().length === 0;
};

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
};

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function TTTGame() {
  this.board = new Board();
  this.human = new Human();
  this.computer = new Computer();
}

TTTGame.POSSIBLE_WINNING_COMBINATIONS = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]]
    .map(comb => comb.map(num => String(num)));

TTTGame.prototype.play = function() {
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
};

TTTGame.prototype.displayWelcomeMessage = function() {
  console.clear();
  console.log("Welcome to Tic Tac Toe!");
  console.log("");
};

TTTGame.prototype.humanMoves = function() {
  let choice;
  let validChoices = this.board.emptySquares();
  while (true) {
    choice = readline.question(`Choose a square (${validChoices.join(", ")}).`);
    if (validChoices.includes(choice)) break;
    console.log("Not a valid choice. Please try again.\n");
  }
  this.board.markSquareAt(choice, this.human.getMarker());
};

TTTGame.prototype.computerMoves = function() {
  let validChoices = this.board.emptySquares();
  let choice = validChoices[Math.floor(Math.random() * validChoices.length)];
  this.board.markSquareAt(choice, this.computer.getMarker());
};

TTTGame.prototype.gameOver = function() {
  return this.board.isFull() || this.someoneWon();
};

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(this.human) || this.isWinner(this.computer);
};

TTTGame.prototype.isWinner = function(player) {
  return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(comb =>
    comb.every(key =>
      this.board.squares[key].getMarker() === player.getMarker()));
};

TTTGame.prototype.displayResults = function() {
  if (this.isWinner(this.human)) {
    console.log("You won! Congratulations!");
  } else if (this.isWinner(this.computer)) {
    console.log("I won! Take that, human!");
  } else {
    console.log("A tie game, How boring.");
  }
};

TTTGame.prototype.displayGoodbyeMessage = function() {
  console.log("Thanks for playing Tic Tac Toe! Goodbye!");
};

let game = new TTTGame();
game.play();
