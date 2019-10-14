
// const newxhr = new XMLHttpRequest();
// newxhr.open('GET', '/books');
// newxhr.onload = () => {
//   console.log(newxhr.status);
//   if (newxhr.status === 200) {
//     const res = JSON.parse(newxhr.responseText);
//     console.log(res);
//     console.log(url);
//     createTable(res);
//   }
// }
// newxhr.send();

const tableDiv = document.querySelector('.mytable');

const createTable = (data) => {
  const tr = document.createElement('tr');
  const thbook_name = document.createElement('th');
  const thaut_name = document.createElement('th');
  const thcate_descrip = document.createElement('th');
  const thpub_name = document.createElement('th');
  const thbook_price = document.createElement('th');
  const thButton = document.createElement('th');
  thbook_name.textContent = 'book_name';
  thaut_name.textContent = 'aut_name';
  thcate_descrip.textContent = 'cate_descrip';
  thpub_name.textContent = 'pub_name';
  thbook_price.textContent = 'book_price';
  thButton.textContent = 'Delete';
  tr.appendChild(thbook_name);
  tr.appendChild(thaut_name);
  tr.appendChild(thcate_descrip);
  tr.appendChild(thpub_name);
  tr.appendChild(thbook_price);
  tr.appendChild(thButton);
  tableDiv.appendChild(tr);
  data.forEach(e => {
    const tr = document.createElement('tr');
    const tdbook_name = document.createElement('td');
    const tdaut_name = document.createElement('td');
    const tdcate_descrip = document.createElement('td');
    const tdpub_name = document.createElement('td');
    const tdbook_price = document.createElement('td');
    const tdButton = document.createElement('td');
    const button = document.createElement('button');
    tdbook_name.textContent = e.book_name;
    tdaut_name.textContent = e.aut_name;
    tdcate_descrip.textContent = e.cate_descrip;
    tdpub_name.textContent = e.pub_name;
    tdbook_price.textContent = e.book_price;
    button.textContent = 'Delete';
    button.setAttribute('id', e.aut_id);
    tr.appendChild(tdbook_name);
    tr.appendChild(tdaut_name);
    tr.appendChild(tdcate_descrip);
    tr.appendChild(tdpub_name);
    tr.appendChild(tdbook_price);
    tdButton.appendChild(button);
    tr.appendChild(tdButton);
    tableDiv.appendChild(tr);
  });

}

const form = document.querySelector('form');
const { book_name, aut_name, book_pricecate_descrip, pub_name, book_price } = form.elements;

let url = '/books?';

form.addEventListener('submit', (event => {
  event.preventDefault();
  if (book_name.value) {
    url += `book_name=${book_name}&`;
  }
  if (aut_name.value) {
    url += `aut_name=${aut_name.value}`;
  }
  if (cate_descrip.value) {
    url += `cate_descrip=${cate_descrip.value}&`
  }
  if (pub_name.value) {
    url += `pub_name=${pub_name.value}&`
  }
  if (book_price.value) {
    url += `book_price=${book_price.value}&`
  }

  const newxhr = new XMLHttpRequest();
  newxhr.open('GET', url);
  newxhr.onload = () => {
    if (newxhr.status === 200) {
      const res = JSON.parse(newxhr.responseText);
      createTable(res);
    }
  }
  newxhr.send();
}
)
)
