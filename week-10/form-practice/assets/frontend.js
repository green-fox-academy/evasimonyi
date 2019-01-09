'use strict';

const formRadio = document.querySelector('.radiobutton');
const formCheck = document.querySelector('.checkbox');
const dropdownAnimalForm = document.querySelector('.dropdownAnimal');

const finalsubmit = document.querySelector('.finalsubmit');

//ez egyben kuldi el az osszes valaszomat
finalsubmit.addEventListener('click', () => {
  let pickedAnswer = formRadio.elements.choose.value;
  let checkedArr = [];
  formCheck.elements.allat.forEach(box => {
    if (box.checked) {
      checkedArr.push(box.value);
    }
  });
  let pickedAnimal = dropdownAnimalForm.elements.kedvencallat.value;

  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/final');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    pickedAnswer,
    checkedArr,
    pickedAnimal
  }));
  postXHR.onload = () => {
    const response = JSON.parse(postXHR.responseText);
    const szeretnelkutyust = document.createElement('h1');
    szeretnelkutyust.textContent = 
    `szeretnel kutyust? valaszod: ${response.message.pickedAnswer}`;
    const kedvencAllataid = document.createElement('h1');
    kedvencAllataid.textContent = 
    `kedvenc allatod/allataid: valaszod: ${response.message.checkedArr}`;
    const favAnimal = document.createElement('h1');
    favAnimal.textContent = 
    `Fav animal? valaszod: ${response.message.pickedAnimal}`;
    document.body.appendChild(szeretnelkutyust);
    document.body.appendChild(kedvencAllataid);
    document.body.appendChild(favAnimal);
  }
})

//ezek egyesevel kuldik el adott kerdesre a valaszt

// formCheck.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const postXHR = new XMLHttpRequest();
//   let checkedArr = [];
//   formCheck.elements.allat.forEach(box => {
//     if (box.checked) {
//       checkedArr.push(box.value);
//     }
//   });
//   // console.log(checkedArr);
//   postXHR.open('POST', '/');
//   postXHR.setRequestHeader('Content-Type', 'application/json');
//   postXHR.send(JSON.stringify({
//     checkedArr
//   }));
//   postXHR.onload = () => {
//     const response = JSON.parse(postXHR.responseText);
//     // console.log(response);
//     const h2 = document.querySelector('#checkboxAnswer');
//     h2.textContent = response.message;
//     h2.style.color = 'blue'
//   }
// });

// // let pickedAnswer = formCheck.elements.choose.value;
// // console.log(pickedAnswer);

// formRadio.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const postXHR = new XMLHttpRequest();
//   let pickedAnswer = formRadio.elements.choose.value;
//   postXHR.open('POST', '/favanimal');
//   postXHR.setRequestHeader('Content-Type', 'application/json');
//   postXHR.send(JSON.stringify({
//     pickedAnswer
//   }));
//   postXHR.onload = () => {
//     console.log(JSON.parse(postXHR.responseText));
//     const response = JSON.parse(postXHR.responseText);
//     const h2 = document.querySelector('#radiobuttonAnswer');
//     h2.textContent = response.message;
//     h2.style.color = 'green'
//   }
// });



// dropdownAnimalForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const postXHR = new XMLHttpRequest();
//   let pickedAnimal = dropdownAnimalForm.elements.kedvencallat.value;
//   postXHR.open('POST', '/dropdown');
//   postXHR.setRequestHeader('Content-Type', 'application/json');
//   postXHR.send(JSON.stringify({
//     pickedAnimal
//   }));
//   postXHR.onload = () => {
//     const response = JSON.parse(postXHR.responseText);
//     const h2 = document.querySelector('#dropdownAnswer');
//     h2.textContent = response.message;
//     h2.style.color = 'purple'
//   }
// });