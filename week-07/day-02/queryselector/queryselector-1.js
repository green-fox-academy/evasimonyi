/* 
	1. store the element that says 'The King' in the 'king' variable.
	console.log it.

	2. store 'The Businessman' and 'The Lamplighter'
	in the 'businessLamp' variable.
	console.log each of them.

	3. store 'The King' and 'The Conceited Man'
	in the 'conceitedKing' variable.
	alert them one by one.

	4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
	in the 'noBusiness' variable.
	console.log each of them.
*/

//1
const king = document.querySelector('.asteroid').textContent;
console.log(king);

//2
const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e => {
  console.log(e.innerText);
});

//3
const conceitedKing = document.querySelectorAll('.container');
conceitedKing.forEach(e => {
  alert(e.innerText);
});

//4
const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(e => {
  console.log(e.innerText);
});

