'use strict';
export { };

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(list: number[]): any {
  for (let i = 0; i < list.length; i++)
    if (list[i] === 4 || 8 || 12 || 14 || 16) {
      return true;
    } else {
      return false;
    }
}

console.log(checkNums(listOfNumbers));

// with includes()
console.log(listOfNumbers.includes(4 || 8 || 12 || 16));
