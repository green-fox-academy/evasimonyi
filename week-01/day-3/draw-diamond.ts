'use strict';

export {};

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

/*      3 space, 1 star
        2 space, 3 star
        1 space, 5 star
        0 space, 7 star */

let lineCount: number = 7;
let line: string = '*';
let space: string = '';

for (let j = 0; j <= lineCount / 2; j++){ 
        space = '';
        for (let i = 0; i < lineCount - line.length / 2 ; i++) {
                space += ' ';
        };
        console.log(space, line);
        line = '*' + line + '*';
        
};

/*      1 space, 5 star
        2 space, 3 star
        3 space, 1 star */
        
let sp: string = ' ';
let repeatTimes= lineCount;
// fill the k variable with its content 4 times
        
function repeat(sp) {
for (let l = 0; l < repeatTimes; l++) {
        console.log(sp);
            }
        }
repeat(sp);

for (let k = 0; k <= lineCount / 2; k--){
        space = ' ';
        for (let b = lineCount; b > 0; b--)
                console.log(space, line);
                line = space + line + space;

}