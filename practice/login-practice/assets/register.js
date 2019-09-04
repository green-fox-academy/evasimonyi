'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const { name, password, country } = form.elements;
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/registry');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    name: name.value,
    password: password.value,
    country: country.value
  }));
  postXHR.onload = () => {
    window.location = '/login';
  }
}
);