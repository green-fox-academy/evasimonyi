const xhr = new XMLHttpRequest();

xhr.open('GET', '/books');

xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    console.log(res);
  }
}
xhr.send();





