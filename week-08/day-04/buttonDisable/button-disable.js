'use strict';

//buttons
const buttons = document.querySelectorAll('button');
let signupbutton = document.querySelector('#signupbutton');
let lovecats = document.querySelector('#loveCats');

// questions
const animals = document.querySelector('#animals');
const yesno = document.querySelector('#yesno');

let lovesCats = false;
let goldfishlover = true;

// If you choose Dog or Cat, it should enable the sign up button
animals.addEventListener('change', () => {
  if (event.target.id === 'dog' || event.target.id === 'cat') {
    goldfishlover = false;
    signupbutton.removeAttribute('disabled');
  } else if (event.target.value === 'goldfish') {
    goldfishlover === true;
  }
})

// If you choose Yes for cat facts, it should enable the I love cats button
// If you pick Victor and no to cat facts it should enable the sign up button only
yesno.addEventListener('change', () => {
  if (event.target.value === 'yes') {
    lovecats.removeAttribute('disabled');
    lovesCats === true;
  } else if (goldfishlover && event.target.value === 'no') {
    signupbutton.removeAttribute('disabled');
    lovesCats === false;
  }
})

// Clicking on a button should alert:
// Thank you, you've successfully signed up for cat facts
// Cilcking this time should display: Sigh, we still added you to the cat facts list

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (goldfishlover && lovesCats === false) {
      alert('Sigh, we still added you to the cat facts list');
    } else {
      alert('Thank you, you\'ve successfully signed up for cat facts');
    };
  });
})


