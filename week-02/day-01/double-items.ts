// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strict';
export {};

let drinks : string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

function double (doubled1: string[]): string[] {
    var doubled: string[] = [];
    for (let i : number = 0; i < doubled1.length; i++) {
        doubled.push(doubled1[i] + doubled1[i]);
    };
    return doubled;
}

console.log(double(drinks));