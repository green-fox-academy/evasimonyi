// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
// Try to solve this two different ways.
// hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

const btn = document.querySelector('button');
const body = document.querySelector('body');
const now = new Date();

//VERSION1

const showCurrentTime = () => {
  const div = document.createElement('div');
  body.appendChild(div);
  div.innerText = `The current date is: ${now}`;
  btn.disabled = true;
}

btn.addEventListener('click', showCurrentTime);
btn.removeEventListener('click', showCurrentTime);

//VERSION2

const showCurrentTime = () => {
  const div = document.createElement('div');
  body.appendChild(div);
  div.innerText = `The current date is: ${now}`;
  btn.removeEventListener('click', showCurrentTime);
}

btn.addEventListener('click', showCurrentTime);

