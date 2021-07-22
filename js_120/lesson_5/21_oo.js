let readline = require('readline-sync');

function joinAnd(arr, normDelim = ', ', lastDelim = 'and') {
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

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getSuit() {
    return this.suit;
  }

  getRank() {
    return this.rank
  }
}

class Deck {

  static SUITS = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
  static VALUES = ['2', '3', '4', '5', '6', '7', '9', '10', 'Ace', 'Jack', 'Queen', 'King'];

  constructor() {
    this.deck = this.new();
    this.shuffle();
  }

  new() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < Deck.SUITS.length; suitIdx++) {
      for (let cardIdx = 0; cardIdx < Deck.VALUES.length; cardIdx++) {
        deck.push(new Card(Deck.SUITS[suitIdx], Deck.VALUES[cardIdx]));
      }
    }
    return deck;
  }

  shuffle() {
    this.deck.sort((a, b) => Math.random() - 0.5);
  }

  deal(numCards) {
    let dealtCards = [];
    for (let cardIdx = 0; cardIdx < numCards; cardIdx++) {
      if (!this.deck.length) {
        this.deck = this.new();
        this.shuffle();
      }
      dealtCards.push(this.deck.pop());
    }
    return dealtCards;
  }
}

class Participant {
  constructor() {
    this.cards = [];
  }

  dealCards(cards) {
    this.cards = this.cards.concat(...cards);
  }

  getCards() {
    return this.cards;
  }

  showCards(numCards) {
    numCards = numCards || this.getCards().length;
    return this.getCards().map(card => `${card.getRank()} of ${card.getSuit()}`).slice(0, numCards);
  }

  displayCards(numCards) {
    if (numCards > 1 || numCards === undefined) {
      console.log(`The ${this.name}'s cards are ${joinAnd(this.showCards(numCards))}`);
    } else if (numCards === 1) {
      console.log(`One of the ${this.name}'s cards is ${joinAnd(this.showCards(numCards))}`);
    } else if (numCards === 0) {
      console.log(`The ${this.name} has no cards.`);
    }
  }

}

class Player extends Participant {
  constructor() {
    super();
    this.name = 'Player';
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    this.name = 'Dealer';
  }
}

class TwentyOneGame {
  static NUM_CARDS_PER_HAND = 2;
  static ONE_CARD = 1;
  static BUST_SCORE = 21;
  static DEALER_HIT_SCORE = 17;
  static ACE_VALUES = {'low': 1, 'high': 11};

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.displayWelcomeMessage();

    this.dealCards();

    this.playerTurn();

    if (!this.isBusted(this.player)) {
      this.dealerTurn();
    }

    this.displayResult();

    this.displayGoodbyeMessage();
  }

  dealCards() {
    this.player.dealCards(this.deck.deal(TwentyOneGame.NUM_CARDS_PER_HAND));
    this.dealer.dealCards(this.deck.deal(TwentyOneGame.NUM_CARDS_PER_HAND));
  }

  isBusted(participant) {
    return this.evaluateScore(participant) > TwentyOneGame.BUST_SCORE;
  }

  evaluateScore(participant) {
    let cards = participant.getCards();
    let cardsWithoutAces = cards.filter(card => card.getRank() !== 'Ace');
    let cardsWithAces = cards.filter(card => card.getRank() === 'Ace');
    let value = 0;
    for (let cardIdx = 0; cardIdx < cardsWithoutAces.length; cardIdx++) {
      if (['Jack', 'Queen', 'King'].includes(cardsWithoutAces[cardIdx].getValue())) {
        value += 10;
      } else if (!Number.isNaN(Number(cardsWithoutAces[cardIdx].getValue()))) {
        value += Number(cardsWithoutAces[cardIdx].getValue());
      }
    }
    for (let cardIdx = 0; cardIdx < cardsWithAces.length; cardIdx++) {
      if (value + TwentyOneGame.ACE_VALUES['high'] <= TwentyOneGame.BUST_SCORE) {
          value += TwentyOneGame.ACE_VALUES['high'];
        } else {
          value += TwentyOneGame.ACE_VALUES['low'];
        }
    }
    return value;
  }

  playerTurn() {

    let move;
    while (true) {
      let pointTotal = this.evaluateScore(this.player);

      this.dealer.displayCards(TwentyOneGame.ONE_CARD);
      this.player.displayCards();
      console.log(`Player has a pointTotal of ${pointTotal}`);

      if (this.isBusted(this.player)) {
        console.log(`Player busts.`);
        return;
      }

      move = readline.question(`Player: hit or stay? (h/s) `);
      if (!['h', 's'].includes(move.toLowerCase())) {
        console.log('Invalid entry, please try again.');
      }
      else if (move === 's') {
        console.log(`Player stays.`);
        return;
      }
      else if (move === 'h') {
        this.player.dealCards(this.deck.deal(TwentyOneGame.ONE_CARD));
        console.log(`Player hit with ${this.player.showCards().pop()}.`);
      }
    }
  }

  dealerTurn() {
    while (true) {
      let pointTotal = this.evaluateScore(this.dealer);
      this.dealer.displayCards();
      console.log(`Dealer has a pointTotal of ${pointTotal}`);

      if (this.isBusted(this.dealer)) {
        console.log(`Dealer busts.`);
        return;
      } else if (pointTotal >= TwentyOneGame.DEALER_HIT_SCORE) {
        console.log(`Dealer stays.`);
        return;
      } else {
        this.dealer.dealCards(this.deck.deal(TwentyOneGame.ONE_CARD));
        console.log(`Dealer hit with ${this.dealer.showCards().pop()}.`);
      }
    }
  }

  displayWelcomeMessage() {
    console.log(`Welcome to Twenty-One!`);
  }

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Twenty-One!`)
  }

  displayResult() {
    let playerScore = this.evaluateScore(this.player);
    let dealerScore = this.evaluateScore(this.dealer);
    if (this.isBusted(this.player) || dealerScore > playerScore) {
      console.log(`Dealer wins with a score of Player: ${playerScore} vs. Dealer: ${dealerScore}`);
    } else if (this.isBusted(this.dealer) || playerScore > dealerScore) {
      console.log(`Player wins with a score of Player: ${playerScore} vs. Dealer: ${dealerScore}`);
    } else {
      console.log(`Its a tie with a score of Player: ${playerScore} vs. Dealer: ${dealerScore}`);
    }
  }
}

let game = new TwentyOneGame();
game.start();
