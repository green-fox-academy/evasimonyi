'use strict';

const listElements = document.querySelectorAll('li');
const btn = document.querySelector('button');
const resultField = document.querySelector('.result');

const countingElements = () => {
  resultField.innerText = `there are ${listElements.length} elements in this list`;
}

btn.addEventListener('click', countingElements);
