const btn = document.querySelector('button');
const body = document.querySelector('body');
const now = new Date();

//VERSION1

const showCurrentTime = () => {
  const div = document.createElement('div');
  body.appendChild(div);
  div.innerText = `The current date is: ${now}`;
  btn.disabled = true;
}

btn.addEventListener('click', showCurrentTime);


//VERSION2

const showCurrentTime = () => {
  const div = document.createElement('div');
  body.appendChild(div);
  div.innerText = `The current date is: ${now}`;
  btn.removeEventListener('click', showCurrentTime);
}

btn.addEventListener('click', showCurrentTime);

