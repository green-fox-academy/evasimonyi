'use strict';
export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

let x: number = 30;
let y: number = 30;
let x2: number = x + 50;

function draw(x: number, y: number): any {
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
};

for (let i: number = 0; i < 3; i++) {
  draw(x, y)
  y = y + 40;
}