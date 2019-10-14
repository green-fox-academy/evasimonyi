// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict';
export { };

let numlist: any = [1, 2, 3, 8, 5, 6];

let newList = numlist.map(function (value: number) {
  if (value === 8) {
    return 4;
  }
  return value;
});

console.log(newList[3]);
console.log(newList);
