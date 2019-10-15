'use strict';
export { };

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
//  console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`


// with function
function getUniqueElements(value: number, index: number, originalArray: any[]) {
  return originalArray.indexOf(value) === index;
}

let listWithDuplicates = [1, 11, 34, 11, 52, 61, 1, 34];
let unique = listWithDuplicates.filter(getUniqueElements);
console.log(unique);

// with Set 
let uniqueArray = Array.from(new Set(listWithDuplicates));
console.log(uniqueArray);
