'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const xhr = new XMLHttpRequest();
  if (form.elements.id.value, form.elements.city.value, form.elements.street.value, form.elements.housenumber.value, form.elements.owner.value) {
    xhr.open('PUT', '/api/all');
  } else {
    xhr.open('PATCH', '/api/all');
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    id: form.elements.id.value,
    city: form.elements.city.value,
    street: form.elements.street.value,
    housenumber: form.elements.housenumber.value,
    owner: form.elements.owner.value
  }));
  xhr.onload = () => {
    const res = JSON.parse(xhr.responseText);
    console.log(res);
  }
});
