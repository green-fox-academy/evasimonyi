// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

'use strict';

const createCandiesButton = document.querySelector('.create-candies');
const buyLollipopButton = document.querySelector('.buy-lollypops');
let displayingCandies = document.querySelector('.candies');
let displayingLollipops = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
let amountOfCandies = 0;
let amountOfLollipops = 0;
let priceOfLollipop = 10;

displayingLollipops.textContent = '';

const updateMyCandies = () => {
  displayingCandies.textContent = amountOfCandies;
}

const createOneCandy = () => {
  amountOfCandies += 1;
  updateMyCandies();
}

createCandiesButton.addEventListener('click', createOneCandy);

const updateMyLollipops = () => {
  displayingLollipops.textContent += '🍭';
}

const buyALollipop = () => {
  if (amountOfCandies >= priceOfLollipop) {
    amountOfCandies -= priceOfLollipop;
    amountOfLollipops += 1;
    updateMyCandies();
    updateMyLollipops();
    generateCandiesByLollipop();
  }
}

buyLollipopButton.addEventListener('click', buyALollipop)

// TODO: fix candyrain

function generateCandiesByLollipop() {
  let timer = 1000;
  let candyMakerLollipops = amountOfLollipops / 2;
  if (candyMakerLollipops >= 1 && candyMakerLollipops % 1 === 0) {
    let candyPerSec = candyMakerLollipops / (timer / 1000);
    setInterval(() => {
      for (let i = 0; i < candyMakerLollipops; i++) {
        createOneCandy();
      };
    }, timer)
    speed.textContent = candyMakerLollipops;
  }
}

