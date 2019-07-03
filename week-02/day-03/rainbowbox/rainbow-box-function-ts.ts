'use strict';
export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let size: number = 30;
let colour = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colourIndex = 0;
canvas.width = 400;
canvas.height = 400;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height
let x = (canvasWidth / 2) - (size / 2);
let y = (canvasHeight / 2) - (size / 2);

function draw(size: number, colourArray: string[]) {
  ctx.fillStyle = colourArray[colourIndex];
  ctx.fillRect(x, y, size, size);
};


for (let i: number = 0; i < colour.length; i++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  x += size;
  y += size;
  size = + size;
};

x = (canvasWidth / 2) - (size / 2);
y = (canvasHeight / 2) - (size / 2);
colourIndex = 0;

for (let j: number = 0; j < colour.length; j++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  x = x - size;
  y += size;
  size = + size;
};

x = (canvasWidth / 2) - (size / 2);
y = (canvasHeight / 2) - (size / 2);
colourIndex = 0;

for (let k: number = 0; k < colour.length; k++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  x += size;
  y = y - size;
  size = + size;
};

x = (canvasWidth / 2) - (size / 2);
y = (canvasHeight / 2) - (size / 2);
colourIndex = 0;

for (let l: number = 0; l < colour.length; l++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  x = x - size;
  y = y - size;
  size = + size;
};


x = (canvasWidth / 2) - (size / 2);
y = (canvasHeight / 2) - (size / 2);
colourIndex = 0;

for (let m: number = 0; m < colour.length; m++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  x = x - size;
  size = + size;
};

x = (canvasWidth / 2) - (size / 2);
y = (canvasHeight / 2) - (size / 2);
colourIndex = 0;

for (let n: number = 0; n < colour.length; n++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  y = y - size;
  size = + size;
};

x = (canvasWidth / 2) - (size / 2);
y = (canvasHeight / 2) - (size / 2);
colourIndex = 0;

for (let m: number = 0; m < colour.length; m++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  x = x + size;
  size = + size;
};

x = (canvasWidth / 2) - (size / 2);
y = (canvasHeight / 2) - (size / 2);
colourIndex = 0;

for (let o: number = 0; o < colour.length; o++) {
  draw(size, colour);
  colourIndex = colourIndex + 1;
  y = y + size;
  size = + size;
};
