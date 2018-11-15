// Write a recursive function that takes one parameter: n and counts down from n.

'use strict';
export {};

function countdown(num: number): number {
  if (num < 1) { //base case
    return 1;
  } else {
    console.log(num)
    return num * countdown(num - 1);
  }
}

countdown(7);
