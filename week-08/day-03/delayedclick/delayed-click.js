'use strict';

const button = document.querySelector('button');

const changeText = () => {
  setTimeout(() => {
    const text = document.createElement('span');
    text.textContent = '2 seconds ellapsed';
    document.body.appendChild(text);
  }, 2000);
}

button.addEventListener('click', changeText);
