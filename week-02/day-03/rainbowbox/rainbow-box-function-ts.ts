'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
 
let size : number = 30;
let x = (canvas.width / 2) - (size / 2);
let y = (canvas.height / 2) - (size / 2);
let colour = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colourIndex = 0;

function draw (size,colour){
    ctx.fillStyle = colour [colourIndex];
    ctx.fillRect(x, y, size, size);
    colourIndex = colourIndex + 1 ;
};

for (let i : number = 0; i < size; i++) {
    draw(size, colour);
    x = x + size;
    y = y + size;
};

for (let i : number = 0; i < size; i++) {
    draw(size, colour);
    x = x - size;
    y = y - size;
};