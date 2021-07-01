let readline = require('readline-sync');

function joinOr(arr, normDelim = ', ', lastDelim = 'or') {
  let str;
  if (arr.length > 2) {
    str = "";
    for (let idx = 0; idx < arr.length - 1; idx++) {
      str += `${arr[idx]}${normDelim}`;
    }
    str += `${lastDelim} ${arr[arr.length - 1]}`;
  } else if (arr.length === 2) {
    str = `${arr[0]} ${lastDelim} ${arr[1]}`;
  } else {
    str = String(arr[0]);
  }
  return str;
}

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
  static MIDDLE_SQUARE = '5';

  constructor() {
    this.squares = {};
    this.clear();
  }

  clear() {
    for (let sqIdx = 1; sqIdx <= Board.NUM_ROWS * Board.NUM_ROWS; sqIdx++) {
      this.squares[sqIdx] = new Square();
    }
  }

  displayWithClear() {
    // console.clear();
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
  }

  isFull() {
    return this.emptySquares().length === 0;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  incrementScore() {
    this.score++;
  }

  getScore() {
    return this.score;
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

  static GAMES_TO_WIN = 3;

  static POSSIBLE_WINNING_COMBINATIONS = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]]
    .map(comb => comb.map(num => String(num)));

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.players = [this.human, this.computer];
  }

  switchPlayerOrder() {
    let tempPlayers = [];
    while (this.players.length) {
      tempPlayers.push(this.players.pop());
    }
    this.players = tempPlayers.slice();
  }

  playGame() {
    let gameOver = false;
    while (true) {
      for (let playerIdx = 0; playerIdx < this.players.length; playerIdx++) {
        switch (this.players[playerIdx]) {
          case this.human:
            this.humanMoves();
            break;
          case this.computer:
            this.computerMoves();
            break;
        }
        gameOver = this.gameOver();
        if (gameOver) break;
        this.board.displayWithClear();
      }
      if (gameOver) break;

    }
  }

  isMatchWinner(player) {
    return player.score === TTTGame.GAMES_TO_WIN;
  }

  matchOver() {
    return this.isMatchWinner(this.human) || this.isMatchWinner(this.computer);
  }

  askForReplay() {
    let replay;
    while (true) {
      replay = readline.question("Do you want to play again? (y/n) ");
      if (['y', 'n'].includes(replay.toLowerCase())) break;
      console.log('Invalid entry, please try again.');
    }
    return replay.toLowerCase() === 'y';
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();
      this.playGame();
      this.switchPlayerOrder();

      if (this.matchOver()) break;

      this.board.displayWithClear();
      this.displayResults();
      this.board.clear();
      if (!this.askForReplay()) break;
    }
    this.displayMatchResult();
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
      choice = readline.question(`Choose a square (${joinOr(validChoices, ", ")}). `);
      if (validChoices.includes(choice)) break;
      console.log("Not a valid choice. Please try again.\n");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.emptySquares();
    let choice;
    if (this.isNearlyWinner(this.computer)) {
      choice = this.getMatchingCombinations(
        this.computer, Board.NUM_ROWS - 1)[0]
        .reduce((nextKey, finalKey) =>
          validChoices.includes(nextKey) ? nextKey : finalKey, undefined);
    } else if (this.isNearlyWinner(this.human)) {
      choice = this.getMatchingCombinations(
        this.human, Board.NUM_ROWS - 1)[0]
        .reduce((nextKey, finalKey) =>
          validChoices.includes(nextKey) ? nextKey : finalKey, undefined);
    } else if (this.board.squares[Board.MIDDLE_SQUARE].isEmpty()) {
      choice = Board.MIDDLE_SQUARE;
    } else {
      choice = validChoices[Math.floor(Math.random() * validChoices.length)];
    }
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  getMatchingCombinations(player, matchCount) {
    return TTTGame.POSSIBLE_WINNING_COMBINATIONS.filter(comb =>
      comb.filter(key =>
        this.board.squares[key].getMarker()
        === player.getMarker()).length === matchCount
      && comb.filter(key =>
        this.board.squares[key].isEmpty()).length
      === Board.NUM_ROWS - matchCount);
  }

  isWinner(player) {
    return this.getMatchingCombinations(player, Board.NUM_ROWS).length > 0;
  }

  isNearlyWinner(player) {
    return this.getMatchingCombinations(player, Board.NUM_ROWS - 1).length > 0;
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      this.human.incrementScore();
      console.log(`You won! Congratulations!`);
    } else if (this.isWinner(this.computer)) {
      this.computer.incrementScore();
      console.log(`I won! Take that, human!`);
    } else {
      console.log(`A tie game, How boring.`);
    }
    console.log(`The score is Human: ${this.human.getScore()} vs Computer: ${this.computer.getScore()}`);
  }

  displayMatchResult() {
    if (this.human.getScore() === TTTGame.GAMES_TO_WIN) {
      console.log(`Human wins the match with a score of Human: ${this.human.getScore()} vs Computer: ${this.computer.getScore()}`);
    } else if (this.computer.getScore() === TTTGame.GAMES_TO_WIN) {
      console.log(`Computer wins the match with a score of Human: ${this.human.getScore()} vs Computer: ${this.computer.getScore()}`);
    }
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }
}

let game = new TTTGame();
game.play();
