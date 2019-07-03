'use strict';
export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

// width="600" height="400"  0: 0,0 cél: 1.600, 0   2.600,400   3.0,400

let x: number = 0;
let y: number = 0;

function draw(x: number, y: number) {
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
};

for (let i: number = 0; i < 3; i++) {
  draw(x, y)
  x = x + 150;
}