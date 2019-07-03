'use strict';
export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let x = 0;
let y = 0;
let z = 10;
let s = 10;
let colour = ['green', 'red', 'blue', 'purple'];

for (let i: number = 0; i < 4; i++) {
  ctx.fillStyle = colour[i];
  ctx.fillRect(x, y, z, s);
  x = x + 40;
  y = y + 40;
  z = z + 10;
  s = s + 10;
}
