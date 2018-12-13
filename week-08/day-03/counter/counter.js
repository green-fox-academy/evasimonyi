// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const listElements = document.querySelectorAll('li');
const btn = document.querySelector('button');
const resultField = document.querySelector('.result');

const countingElements = () => {
  resultField.innerText = listElements.length;
}

btn.addEventListener('click', countingElements);

