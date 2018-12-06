/*
    1)  Fill every paragraph with the last one's content.
    2)  Do the same again, but you should keep the cat strong.
*/

/*
//1
let paragraphs = document.querySelectorAll('p');
const animals = document.querySelector('.animals');

paragraphs.forEach(e => {
  console.log(e.innerText);
});

paragraphs.forEach(e => {
  e.innerText = animals.innerText;
});

paragraphs.forEach(e => {
  console.log(e.innerText);
});
*/

//2
paragraphs.forEach(e => {
  e.innerHTML = animals.innerHTML;
});

paragraphs.forEach(e => {
  console.log(e);
});