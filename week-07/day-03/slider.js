const leftButton = document.querySelector('.btnlft');
const rightButton = document.querySelector('.btnrght');

const thumbnails = document.querySelector('.img');

// const images = document.querySelectorAll('img');

// leftButton.addEventListener('click', function () {
//   mainImage.setAttribute('src', './3.jpg');
// });

// rightButton.addEventListener('click', function () {
//   mainImage.setAttribute('src', './2.jpg');
// });

// rightButton.addEventListener('click', function () {
//   mainImage.setAttribute('src', './1.jpg');
// });

leftButton.addEventListener('click', function () {
  thumbnails.forEach((e, i) => {
    mainImage.setAttribute('src', e[i].getAttribute('src'));
  });
});

rightButton.addEventListener('click', function () {
  thumbnails.forEach(e => {
    mainImage.setAttribute('src', e.getAttribute('src'));
  });
});