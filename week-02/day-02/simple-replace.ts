'use strict';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let x = /dishwasher/gi;
let example: string = 'In a dishwasher far far away';
console.log(example.replace(x, 'galaxy'));