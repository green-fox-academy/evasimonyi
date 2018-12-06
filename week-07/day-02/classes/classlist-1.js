const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(e => {
  console.log(e.classList.value);
});

//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if (paragraphs[3].classList.contains('dolphin')) {
  paragraphs[0].textContent = 'pear';
}

//If the first p has an 'apple' class, replace cat's content with 'dog'
if (paragraphs[0].classList.contains('apple')) {
  paragraphs.forEach(e => {
    if (e.classList.contains('cat')) {
      e.innerText = 'dog';
    }
  })
}

paragraphs.forEach(e => {
  console.log(e.innerText);
});

//Make apple red by adding a .red class
const apple = document.querySelector('.apple');
apple.classList.add('red');

//Make balloon less balloon-like (change its shape)
const balloon = document.querySelector('.balloon');
balloon.style.borderRadius = '30px';
