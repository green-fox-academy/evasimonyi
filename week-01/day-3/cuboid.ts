'use strict';

export {};

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let length: number = 20;
let width: number = 5;
let height: number = 10;

let SurfaceArea: number = (2 * (length * width)) + (2 * (length * height)) + (2 * (width * height));
console.log('Surface Area: ' + SurfaceArea);
 
let Volume: number = (length * width * height);
console.log('Volume: ' + Volume);
