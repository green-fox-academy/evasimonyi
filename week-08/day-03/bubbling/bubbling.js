// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//   - the nav buttons(up, down, left, right) move the background by 10px
//     - the zoom buttons increase / decrease the image by 20 %
//       - attach only two event listeners to the nav element
//         - one for navigation
//           - one for zooming

const nav = document.querySelector('nav');
const image = document.querySelector('.img-inspector');
let addPixels = 0;

const move = (event) => {
  if (event.target.dataset.direction === 'up') {
    addPixels -= 10;
    image.setAttribute('style', `background-position-y: ${addPixels}px;`);
  } else if (event.target.dataset.direction === 'left') {
    addPixels -= 10;
    image.setAttribute('style', `background-position-x: ${addPixels}px;`);
  } else if (event.target.dataset.direction === 'right') {
    addPixels += 10;
    image.setAttribute('style', `background-position-x: ${addPixels}px;`);
  } else if (event.target.dataset.direction === 'down') {
    addPixels += 10;
    image.setAttribute('style', `background-position-y: ${addPixels}px;`);
  }
}

nav.addEventListener('click', move);

let backgroundSize = 100;

const zoom = () => {
  if (event.target.dataset.direction === 'in') {
    image.setAttribute('style', `background-size: ${backgroundSize}%;`);
    backgroundSize += 20;
  } else if (event.target.dataset.direction === 'out') {
    image.setAttribute('style', `background-size: ${backgroundSize}%;`);
    backgroundSize -= 20;
  }
}

nav.addEventListener('click', zoom);