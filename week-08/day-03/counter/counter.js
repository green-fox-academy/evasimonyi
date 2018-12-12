// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const listElements = document.querySelectorAll('li');
const btn = document.querySelector('button');
const resultField = document.querySelector('.result');

let counter = 0;
let countingElements = () => {
  listElements.forEach(function () {
    counter++;
  })
  resultField.innerText = counter;
}

btn.addEventListener('click', countingElements);
