// 1) Write a textual description of the problem or exercise
// 2) Extract the significant nouns and verbs from the description
//      Nouns: player, move, rule
//      Verbs: choose, compare
// 3) Organize and associate the verbs with the nouns

const WINNING_SCORE = 5;
const HUNDRED_PERCENT = 100;
const CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

let readline = require('readline-sync');

function createPlayer() {
  return {
    score: 0,
    wonRound: [],
    moves: [],
    reset() {
      this.score = 0;
      this.wonRound = [];
      this.moves = [];
    },
    hasWon(otherPlayerMove) {
      let move = this.moves[this.moves.length - 1];
      return ((move === 'scissors' && otherPlayerMove === 'paper') ||
      (move === 'paper' && otherPlayerMove === 'rock') ||
      (move === 'rock' && otherPlayerMove === 'lizard') ||
      (move === 'lizard' && otherPlayerMove === 'spock') ||
      (move === 'spock' && otherPlayerMove === 'scissors') ||
      (move === 'scissors' && otherPlayerMove === 'lizard') ||
      (move === 'lizard' && otherPlayerMove === 'paper') ||
      (move === 'paper' && otherPlayerMove === 'spock') ||
      (move === 'spock' && otherPlayerMove === 'rock') ||
      (move === 'rock' && otherPlayerMove === 'scissors'));
    }
  };
}

function createComputer() {
  let playerObject = createPlayer();
  let choiceWeights = {};
  CHOICES.forEach(choice => {
    choiceWeights[choice] = HUNDRED_PERCENT / CHOICES.length;
  });

  let computerObject = {
    choiceWeights,
    updateOdds() {
      let numMoves = this.moves.length;
      for (let choiceIdx = 0; choiceIdx < CHOICES.length; choiceIdx++) {
        let lossCount = 0;
        let choice = CHOICES[choiceIdx];
        for (let moveIdx = 0; moveIdx < numMoves; moveIdx++) {
          let computerMove = this.moves[moveIdx];
          if (computerMove === choice && this.score[moveIdx]) {
            lossCount++;
          }
        }
        if ((lossCount / numMoves) > 0.6) {
          let diff = this.choiceWeights[choice] - 10 > 0 ? 10 : 0;
          this.choiceWeights[choice] -= diff;
          Object.keys(this.choiceWeights).forEach(key => {
            if (key !== choice) {
              this.choiceWeights[key] += diff / (CHOICES.length - 1);
            }
          });
          break;
        }
      }
    },
    choose() {
      let randomIndexRange = Math.floor(Math.random() * HUNDRED_PERCENT);
      let cumulativeWeight = 0;
      let choiceIdx = 0;
      while (choiceIdx < CHOICES.length) {
        let choice = CHOICES[choiceIdx];
        let weight = this.choiceWeights[choice];
        if (cumulativeWeight <= randomIndexRange &&
          randomIndexRange < cumulativeWeight + weight) {
          this.moves.push(choice);
          break;
        }
        cumulativeWeight += weight;
        choiceIdx++;
      }
    }
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;
      let validChoices;
      let isValid;
      do {
        let nChars = 1;
        choice = readline.question('Make your move ').toLowerCase().trim();
        do {
          validChoices = CHOICES.filter(validChoice =>
            validChoice.slice(0, nChars) === choice.slice(0, nChars));
          nChars += 1;
        } while (validChoices.length > 1);
        isValid = validChoices.length === 1;
      } while (!isValid);
      this.moves.push(validChoices[0]);
    }
  };

  return Object.assign(playerObject, humanObject);
}

// 4) Orchestration Engine
const RPSGame = {
  playAgain() {
    let answer;
    let isValid;
    do {
      answer = readline.question('Would you like to play again? (y/n)');
      isValid = ['y', 'n'].includes(answer[0].toLowerCase());
    } while (!isValid);
    return answer.toLowerCase()[0] === 'y';
  },
  human: createHuman(),
  computer: createComputer(),
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },
  displayWinner() {
    let humanMove = this.human.moves[this.human.moves.length - 1];
    let computerMove = this.computer.moves[this.computer.moves.length - 1];

    console.log(`\nYou chose: ${humanMove}`);
    console.log(`\nComputer chose: ${computerMove}`);

    if (this.human.hasWon(computerMove)) {
      console.log('You win!');
      this.human.score += 1;
      this.human.wonRound.push(true);
      this.computer.wonRound.push(false);
    } else if (this.computer.hasWon(humanMove)) {
      console.log('Computer wins!');
      this.computer.score += 1;
      this.computer.wonRound.push(true);
      this.human.wonRound.push(false);
    } else {
      console.log("It's a tie");
      this.human.wonRound.push(false);
      this.computer.wonRound.push(false);
    }
  },
  displayOverallWinner() {

    console.log('You chose:');
    this.human.moves.forEach(move => console.log(move));

    console.log('Computer chose:');
    this.computer.moves.forEach(move => console.log(move));


    if (this.human.score === WINNING_SCORE) {
      console.log(`You win overall with a score of ${this.human.score} vs. ${this.computer.score}!`);
    } else {
      console.log(`Computer wins overall with a score of ${this.computer.score} vs. ${this.human.score}!`);
    }
  },
  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors!');
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (true) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
        if (this.human.score === WINNING_SCORE
          || this.computer.score === WINNING_SCORE) {
          this.displayOverallWinner();
          break;
        }
      }
      if (!this.playAgain()) break;
      this.computer.updateOdds();
      this.human.reset();
      this.computer.reset();
    }
    this.displayGoodbyeMessage();
  }
};
RPSGame.play();
