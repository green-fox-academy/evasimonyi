'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(canvas.width/2, canvas.height/2);

let width = canvas.width/2;
let height = canvas.height/2;

function draw (width, height: any[]){
        for (let i : number = 0; i < width; i++) {
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(canvas.width/2, canvas.height/2);
            ctx.stroke();
        };
        
    }

console.log(draw)
