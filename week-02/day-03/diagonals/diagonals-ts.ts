'use strict';
export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

// Draw a colored line

// function nelkul, jo megoldas lasd lejjebb
// ctx.strokeStyle = 'green';
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(600, 400);
// ctx.stroke();

// ctx.strokeStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(600, 0);
// ctx.lineTo(0, 400);
// ctx.stroke();

canvas.width = 600;
canvas.height = 400;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height

function drawDiagonal(x: number, y: number): any {
  ctx.beginPath();
  if (x === 0 && y === 0) {
    ctx.strokeStyle = 'green';
    ctx.moveTo(x, y);
    ctx.lineTo(canvasWidth, canvasHeight);
  } else {
    ctx.strokeStyle = 'red';
    ctx.moveTo(canvasWidth, 0);
    ctx.lineTo(0, canvasHeight);
  }
  ctx.stroke();
}

drawDiagonal(0, 0);
drawDiagonal(canvasWidth, canvasHeight);
