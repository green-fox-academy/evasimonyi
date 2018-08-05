'use strict';

export {};

let lineCount: number = 4;
let line: string = '*';

for (let i = 0; i < lineCount; i++) {
    console.log('haho');
    // line = '*' + line + '*';
};


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//


let s: string = '';
let i: number = 4;
let z: number = 0;
let k: number = 1;
let y: number = 0;

while (i > 0){
        s = '';
        for (let j: number = 3; j > 0+z; j--){
                s += ' ';
        };
        
        for (k = 1 + y; k > 0; k--){
                s += '*';
        };

        console.log(s);
        y = y + 2;
        z=z+1;
        i--;
};