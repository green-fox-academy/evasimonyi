// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const body = document.querySelector('body');

button.onclick = () => {
  setTimeout(() => {
    const text = document.createElement('p');
    text.textContent = '2 seconds ellapsed';
    body.appendChild(text);
  }, 2000);
};