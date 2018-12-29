const kids = [
  { 'petName': 'Wattled crane', 'owner': 'Bryant' },
  { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
  { 'petName': 'Mynah, common', 'owner': 'Nelie' },
  { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
  { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
  { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
  { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
  { 'petName': 'Bison, american', 'owner': 'Tommie' },
  { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
  { 'petName': 'Carpet snake', 'owner': 'Veda' },
  { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

// 1) Create an <article> element for each kid
// 2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
//     - The H3 should contain the owner's name
//     - The p should contain the pet's name
// 3) Add the article to the pets div.

const div = document.querySelector('div');

kids.forEach(e => {
  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  h3.textContent = e.owner;
  const p = document.createElement('p');
  p.textContent = e.petName;
  article.appendChild(h3);
  article.appendChild(p);
  div.appendChild(article);
})