'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let size: number = 30;

function draw(size: number) {
  let x = (canvas.width / 2) - (size / 2);
  let y = (canvas.height / 2) - (size / 2);
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, size, size);
};

for (let i: number = 0; i < 3; i++) {
  draw(size)
  x = x + size;
  y = y + size;
};

export = draw;