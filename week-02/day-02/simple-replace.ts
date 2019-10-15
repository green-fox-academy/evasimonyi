'use strict';
export { };

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

// this way if there is multiple 'diswasher'-s, all of them gets replaced
let x: any = /dishwasher/gi;
let firstExample: string = 'In a dishwasher far far away dishwasher';
console.log(firstExample.replace(x, 'galaxy'));

// this way if there is multiple 'diswasher'-s, only the first occurence gets replaced
let dishwasher = 'dishwasher';
let secondExample: string = 'In a dishwasher far far away dishwasher';
console.log(secondExample.replace(dishwasher, 'galaxy'));
