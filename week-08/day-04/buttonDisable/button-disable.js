const buttons = document.querySelectorAll('button');
const labels = document.querySelectorAll('label');
let signupbutton = document.querySelector('#signupbutton');
let lovecats = document.querySelector('#loveCats');
const cat = document.querySelector('#cat');
const yes = document.querySelector('#yes');

const animals = document.querySelector('#animals');
const yesno = document.querySelector('#yesno')

animals.addEventListener('change', () => {
  if (event.target.value === 'dog' || event.target.value === 'cat') {
    signupbutton.removeAttribute('disabled');
  }
})

yesno.addEventListener('change', () => {
  if (event.target.value === 'yes') {
    lovecats.removeAttribute('disabled');
  }
})

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (event.target.value === 'dog' || event.target.value === 'cat') {
      alert('Thank you, you\'ve successfully signed up for cat facts');
    } else {
      alert('Sigh, we still added you to the cat facts list');
    }
  })
})

