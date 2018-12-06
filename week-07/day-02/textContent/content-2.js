/*
  1) replace the list items' content with items from this list:
  ['apple', 'banana', 'cat', 'dog']
  2) change the <ul> element's background color to 'limegreen'
    - use css class to change the color instead of the style property
*/

const listElements = document.querySelectorAll('li');
const newElements = ['apple', 'banana', 'cat', 'dog'];

listElements.forEach(((e, i) => {
    e.innerText = newElements[i];
}));

listElements.forEach(e => {
  console.log(e.innerText);
});