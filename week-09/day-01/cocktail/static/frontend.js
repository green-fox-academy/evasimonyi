'use strict';

window.onload = () => {
  document.querySelectorAll('button').forEach(buttonOfAlcohol => {
    buttonOfAlcohol.onclick = (e) => {
      if (buttonOfAlcohol.textContent === 'all') {
        e.preventDefault();
        window.location = `http://localhost:3000/`
      } else {
        e.preventDefault();
        window.location = `http://localhost:3000/?alcohol=${e.target.textContent}`
      }
    }
  });
};
