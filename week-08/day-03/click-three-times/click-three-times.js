// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

'use strict';

const button = document.querySelector('button');
const body = document.querySelector('body');

let displayText = () => {
  const text = document.createElement('p');
  text.textContent = '5 seconds elapsed and clicked 3 times';
  body.appendChild(text);
}

window.onload = () => {
  setTimeout(() => {
    button.onclick = (event) => {
      if (event.detail === 3) {
        displayText();
      };
    }
  }, 5000)
}