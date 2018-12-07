const leftButton = document.querySelector('.btnlft');
const rightButton = document.querySelector('.btnrght');

const mainImage = document.querySelector('.image');
// console.log(mainImage.getAttribute('src'));
// // mainImage.setAttribute('src', './2.jpg');

const images = document.querySelector('img');

// leftButton.addEventListener('click', function () {
//   // console.log('cica');
//   // setAttribute for setting any attributes
//   mainImage.setAttribute('src', './2.jpg');
// });

leftButton.addEventListener = () => {
  mainImage.setAttribute('src', './3.jpg');
}

rightButton.addEventListener('click', function () {
  mainImage.setAttribute('src', './2.jpg');
});

rightButton.clickon('click', function () {
  mainImage.setAttribute('src', './1.jpg');
});

leftButton.clickon('click', function () {
  images.forEach((e, i) => {
    e.setAttribute('src', i.jpg)
  });
});