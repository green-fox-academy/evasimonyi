'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const buttons = document.querySelectorAll('button');

const createTable = (data) => {
  data.forEach(e => {
    console.log(e)
    const tr = document.createElement('tr');
    const questioncontainer = document.createElement('td');
    const deletecontainer = document.createElement('td');
    const button = document.createElement('button');
    questioncontainer.textContent = e.question;
    button.textContent = 'DELETE';
    button.setAttribute('id', e.id);
    deletecontainer.appendChild(button);
    tr.appendChild(questioncontainer);
    tr.appendChild(deletecontainer);
    table.appendChild(tr);
  });
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "/manageall");
xhr.onload = () => {
  if (xhr.status == "200") {
    const res = JSON.parse(xhr.responseText);
    createTable(res);
  }
}
xhr.send();

tableDiv.addEventListener('click', (event) => {
  const deleteXhR = new XMLHttpRequest();
  deleteXhR.open('DELETE', '/deletequestion');
  deleteXhR.setRequestHeader('Content-Type', 'application/json');
  deleteXhR.send(JSON.stringify({
    qid: event.target.id
  }));
  deleteXhR.onload = () => {
    console.log(JSON.parse(deleteXhR.responseText));
  }
});

buttons.forEach(element => {
  element.addEventListener('click', () => {
    console.log(element)
  })
});


