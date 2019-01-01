'use strict';

const body = document.querySelector('body');
const container = document.querySelector('.container');
const scrollThreshold = 300;
let randomNumber = Math.floor((Math.random() * 100) + 1);

let randomColour = () => {
  let newColour = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  return newColour;
}

let createBoxes = () => {
  for (let i = 1; i <= randomNumber; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', `background-color: ${randomColour()}`)
    container.appendChild(div);
  };
}

createBoxes();

const createTenBoxes = () => {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', `background-color: ${randomColour()}`)
    container.appendChild(div);
  };
}

window.onscroll = () => {
  if (window.scrollY + window.innerHeight >= container.clientHeight - scrollThreshold) {
    createTenBoxes();
  } if (window.scrollY <= scrollThreshold) {
    for (let i = 0; i < 10; i++) {
      const div = document.createElement('div');
      div.setAttribute('style', `background-color: ${randomColour()}`)
      container.insertBefore(div, container.childNodes[0]);
    }
  }
}