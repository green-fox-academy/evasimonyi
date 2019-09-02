'use strict';

const url = 'http://api.icndb.com/jokes/random';
const button = document.querySelector('button');
const divContainer = document.querySelector('div');

function attachTheJoke(result) {
  let newSpan = document.createElement('span');
  newSpan.textContent = result.value.joke;
  divContainer.appendChild(newSpan);
  divContainer.appendChild(document.createElement('br'));
}

function fetching() {
  fetch(url)
    .then(response => response.json())
    .then(parsedResponse => attachTheJoke(parsedResponse))
    .catch(error => console.log(error));
}

button.addEventListener('click', fetching);
