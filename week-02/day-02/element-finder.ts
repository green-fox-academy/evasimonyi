'use strict';
export { };

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(numbers: number[]) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
      return 'Hoorray';
    } else {
      return 'Noooooo';
    }
  }
}

console.log(containsSeven(numbers));

// with includes()
function containsSeven2(numbers: number[]) {
  if (numbers.includes(7)) {
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}

console.log(containsSeven2(numbers));
