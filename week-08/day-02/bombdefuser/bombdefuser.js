// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

'use strict';

const display = document.querySelector('.display');
const button = document.querySelector('button');

const timeout = setTimeout(() => {
  display.textContent = "Bomb exploded";
}, 10000);

const displayRemainingSeconds = setInterval(() => {
  if (display.textContent >= 1) {
    display.textContent -= 1;
  }
}, 1000);

button.onclick = () => {
  clearTimeout(timeout);
  clearInterval(displayRemainingSeconds);
  display.textContent = "Bomb defused";
};
