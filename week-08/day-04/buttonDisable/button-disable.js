const buttons = document.querySelectorAll('button');
const choices = document.querySelectorAll('.choose');

buttons.forEach(e => {
  // console.log(e);
  e.disabled = true;
});

choices.forEach(e => {
  console.log(e);
  if (e.innerText === 'Dog') {
    console.log('cica');
  }
});

