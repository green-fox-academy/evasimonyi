// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strict';
export { };

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

function double(arrayToBeDoubled: string[]): string[] {
  var doubled: string[] = [];
  for (let i: number = 0; i < arrayToBeDoubled.length; i++) {
    doubled.push(arrayToBeDoubled[i] + arrayToBeDoubled[i]);
    // or doubled.push(arrayToBeDoubled[i].repeat(2));
  };
  return doubled;
}

console.log(double(drinks));
