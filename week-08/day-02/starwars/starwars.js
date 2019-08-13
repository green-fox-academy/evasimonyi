'use strict';

const apiURL = 'https://swapi.co/api/';

// const xhr = new XMLHttpRequest();
const charactersBox = document.querySelector('#characters');
const moviesBox = document.querySelector('#movies');
const searchInput = document.querySelector('#name');
const button = document.querySelector('button');

const characterRequest = new XMLHttpRequest();
const movieRequest = new XMLHttpRequest();

characterRequest.onload = () => {
  if (characterRequest.status === 200) {
    const characters = JSON.parse(characterRequest.responseText);
    characters.results.forEach((element) => {
      // console.log(element.name)
    })
  }
}

characterRequest.open('GET', `${apiURL}people`);
characterRequest.send();

movieRequest.onload = () => {
  if (movieRequest.status === 200) {
    const moviesList = JSON.parse(movieRequest.responseText);
    // console.log(moviesList);
  }
}

movieRequest.open('GET', `${apiURL}films`);
movieRequest.send();

// button addevent
const sendHttpRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}

// displaying all characters
const charUl = document.createElement('ul');
characters.appendChild(charUl);

let searchedCharacter = document.querySelector('input').value;

sendHttpRequest('GET', `${apiURL}people/?search=${searchedCharacter}`, (response) => {
  const content = response.results;
  content.forEach(e => {
    const newChar = document.createElement('li');
    newChar.innerHTML = e.name;
    charUl.appendChild(newChar);
  });
  return charUl;
})

button.onclick = (event) => {
  event.preventDefault();
  const ul = document.querySelector('ul');
  sendHttpRequest('GET', `${apiURL}people/?search=${searchedCharacter}`, (response) => {
    const content = response.results;
    ul.innerHTML = '';
    content.forEach(e => {
      if (e.name.toLowerCase().includes(document.querySelector('input').value)) {
        const matchinChar = document.createElement('li');
        matchinChar.textContent = e.name;
        ul.appendChild(matchinChar)
      }
      // else {
      //   console.log('there is no character like that in sw universe');
      // }
    });
  })
}

// console.log(charUl)
// charUl.onclick = (event) => {
//   console.log(event.target.innerText)
// }