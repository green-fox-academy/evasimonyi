'use strict';

const formRadio = document.querySelector('.radiobutton');
const formCheck = document.querySelector('.checkbox');

formCheck.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  let checkedArr = [];
  formCheck.elements.allat.forEach(box => {
    if (box.checked) {
      checkedArr.push(box.value);
    }
  });
  // console.log(checkedArr);
  postXHR.open('POST', '/');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    checkedArr
  }));
  postXHR.onload = () => {
    const response = JSON.parse(postXHR.responseText);
    // console.log(response);
    const h2 = document.querySelector('#checkboxAnswer');
    h2.textContent = response.message;
    h2.style.color = 'blue'
  }
});

// let pickedAnswer = formCheck.elements.choose.value;
// console.log(pickedAnswer);

formRadio.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  let pickedAnswer = formRadio.elements.choose.value;
  postXHR.open('POST', '/favanimal');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    pickedAnswer
  }));
  postXHR.onload = () => {
    console.log(JSON.parse(postXHR.responseText));
    const response = JSON.parse(postXHR.responseText);
    const h2 = document.querySelector('#radiobuttonAnswer');
    h2.textContent = response.message;
    h2.style.color = 'green'
  }
});


const dropdownAnimalForm = document.querySelector('.dropdownAnimal');

dropdownAnimalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  let pickedAnimal = dropdownAnimalForm.elements.kedvencallat.value;
  postXHR.open('POST', '/dropdown');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    pickedAnimal
  }));
  postXHR.onload = () => {
    const response = JSON.parse(postXHR.responseText);
    const h2 = document.querySelector('#dropdownAnswer');
    h2.textContent = response.message;
    h2.style.color = 'purple'
  }
});