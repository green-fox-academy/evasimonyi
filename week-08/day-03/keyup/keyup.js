// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

const h1 = document.querySelector('h1');
const keyup = window.onkeyup;

const body = document.querySelector('body');

body.addEventListener('keyup', (event) => {
  h1.innerText = `Last pressed key code is: ${event.keyCode} `;
});

