// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//   - the nav buttons(up, down, left, right) move the background by 10px
//     - the zoom buttons increase / decrease the image by 20 %
//       - attach only two event listeners to the nav element
//         - one for navigation
//           - one for zooming

const nav = document.querySelector('nav');
const image = document.querySelector('.img-inspector');
let addPixels = 10;

const move = (event) => {
  if (event.target.dataset.direction === 'up') {
    image.setAttribute('style', `background-position-y: ${addPixels}px;`);
    addPixels -= 10;
  } else if (event.target.dataset.direction === 'left') {
    image.setAttribute('style', `background-position-x: ${addPixels}px;`);
    addPixels -= 10;
  } else if (event.target.dataset.direction === 'right') {
    image.setAttribute('style', `background-position-x: ${addPixels}px;`);
    addPixels += 10;
  } else if (event.target.dataset.direction === 'down') {
    image.setAttribute('style', `background-position-y: ${addPixels}px;`);
    addPixels += 10;
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