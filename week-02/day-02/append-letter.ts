'use strict';
export {};

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA (corrected: string[]): string[] {
    var far2: string[] = [];
    for (let i : number = 0; i < corrected.length; i++) {
        far2.push(corrected[i] + 'a');
    };
    return far2;
}

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;