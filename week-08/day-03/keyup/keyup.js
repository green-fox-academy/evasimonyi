'use strict';

const h1 = document.querySelector('h1');
const body = document.querySelector('body');

body.addEventListener('keyup', (event) => {
  h1.innerText = `Last pressed key code is: ${event.keyCode}`;
});
