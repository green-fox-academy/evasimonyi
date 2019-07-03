'use strict';
export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

// Draw a rectangle
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
ctx.strokeStyle = "red";
ctx.strokeRect(9, 9, 101, 101);
