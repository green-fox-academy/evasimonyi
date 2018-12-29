
// Turn the party on and off by clicking the button. (the whole page)

const button = document.querySelector('button');
const div = document.querySelector('div');

button.onclick = () => {
  if (div.classList.contains('party')) {
    div.classList.remove('party');
  } else {
    div.classList.add('party')
  };
} 