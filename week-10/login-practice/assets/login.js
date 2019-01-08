'use strict';

const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  const { name, password } = form.elements;
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/login');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    name: name.value,
    password: password.value
  }));
  postXHR.onload = () => {
    const res = JSON.parse(postXHR.responseText);
    if (res.id) {
      window.location = `${res.pathTo}/${res.id}`;
    } else {
      window.location = res.pathTo;
    }
  }
});