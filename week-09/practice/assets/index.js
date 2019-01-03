const xhr = new XMLHttpRequest();
xhr.open('GET', '/doggos');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    doggos(res);
  };
}
xhr.send();

const tableDiv = document.querySelector('.mytable');

const doggos = (data) => {
  const tr = document.createElement('tr');
  const thID = document.createElement('th');
  const thName = document.createElement('th');
  const thColor = document.createElement('th');
  const thSex = document.createElement('th');
  const thButton = document.createElement('th');
  thID.textContent = 'ID';
  thName.textContent = 'Name';
  thColor.textContent = 'Color';
  thSex.textContent = 'Sex';
  thButton.textContent = 'Delete';
  tr.appendChild(thID);
  tr.appendChild(thName);
  tr.appendChild(thColor);
  tr.appendChild(thSex);
  tr.appendChild(thButton);
  tableDiv.appendChild(tr);
  data.forEach(e => {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdColor = document.createElement('td');
    const tdSex = document.createElement('td');
    const tdButton = document.createElement('td');
    const button = document.createElement('button');
    tdId.textContent = e.id;
    tdName.textContent = e.name;
    tdColor.textContent = e.color;
    tdSex.textContent = e.sex;
    button.textContent = 'Delete';
    button.setAttribute('id', e.id);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdColor);
    tr.appendChild(tdSex);
    tdButton.appendChild(button);
    tr.appendChild(tdButton);
    tableDiv.appendChild(tr);
  });

}

// backendhez irtam meg, ezzel lehet a form kitoltesevel hozzaadni uj sort a mysql tablamhoz
const form = document.querySelector('.post');
const { name, color, sex } = form.elements; 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/doggos');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    name: name.value,
    color: color.value,
    sex: sex.value,
  }));
  postXHR.onload = () => {
    console.log(JSON.parse(postXHR.responseText));
  }
});

