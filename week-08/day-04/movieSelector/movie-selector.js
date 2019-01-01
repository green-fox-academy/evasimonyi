'use strict';

let body = document.querySelector('body');
let form = document.querySelector('form');
let genres = document.querySelector('#genre');
let titles = document.querySelector('#title');
let titleOptions = document.querySelector('#title').querySelectorAll('option');
let selectedMovie = document.querySelector('h4');

let selectGenre = (genre) => {
  titles.innerText = '';
  selectedMovie.innerText = '';
  titleOptions.forEach(title => {
    if (title.getAttribute('class') === genre) {
      titles.appendChild(title);
    };
  });
};

genres.addEventListener('change', () => {
  selectGenre(event.target.value);
});

titles.addEventListener('change', () => {
  selectedMovie.innerText = event.target.value;
});


