class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards = [];
  }

  generate_deck() {
    let card = (suit, value) => {
      this.name = value + suit;
      this.suit = suit;
      this.value = value;

      // return { name: this.name, suit: this.suit, value: this.value };
      return this.name;
    }

    let values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let suits = ['C', 'D', 'S', 'H'];

    for (let i = 0; i < suits.length; i++) {
      for (let k = 0; k < values.length; k++) {
        this.deck.push(card(suits[i], values[k]))
      }
    }
  }

  printDeck() {
    if (this.deck.length === 0) {
      console.log('the deck has not been generated')
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]);
      }
    }
  }

  shuffle() {
    let currentIndex = this.deck.length, temp_val, rand_ind;

    while (0 !== currentIndex) {
      rand_ind = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temp_val = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[rand_ind];
      this.deck[rand_ind] = temp_val;
    }
  }

  deal(num_cards) {
    let cards = []
    for (let c = 0; c < num_cards; c++) {
      let dealt_card = this.deck.shift();
      cards.push(dealt_card);
      this.dealt_cards.push(dealt_card);
    }
    return cards;
  }

  replace() {
    this.deck.unshift(this.dealt_cards.shift());
  }

  clear_deck() {
    this.deck = [];
  }

  sort(hand) {

  }
}

module.exports = { Deck };

let deck = new Deck();
deck.generate_deck();
deck.shuffle();

let blackHand = deck.deal(5);
let whiteHand = deck.deal(5);
console.log(whiteHand);
console.log(blackHand);