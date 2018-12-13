const buttons = document.querySelectorAll('button');

buttons.forEach(e => {
  console.log(e);
  e.disabled = true;
});
