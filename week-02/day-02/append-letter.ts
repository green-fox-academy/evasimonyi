'use strict';
export { };

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(toBeCorrected: string[]): string[] {
  let far2: string[] = [];
  for (let i: number = 0; i < toBeCorrected.length; i++) {
    far2.push(toBeCorrected[i] + 'a');
  };
  return far2;
}

console.log(appendA(far));

// built in method
far.forEach(element => console.log(element + 'a'))
