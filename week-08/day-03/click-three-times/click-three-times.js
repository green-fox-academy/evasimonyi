'use strict';

const button = document.querySelector('button');

const displayText = () => {
  const text = document.createElement('span');
  text.textContent = '5 seconds elapsed and clicked 3 times';
  document.body.appendChild(text);
}

window.onload = () => {
  setTimeout(() => {
    button.addEventListener('click', (event) => {
      if (event.detail === 3) {
        displayText();
      };
    })
  }, 5000);
}
