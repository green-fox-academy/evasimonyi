'use strict';

export {};
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 10;
let space: string = '';
let character: string = '%';
let line: string = '';
let k: number;

for (let k = 0; k <= lineCount; k++){
    line += character ;
};
console.log(line);

for (let j = 1; j <= lineCount; j++){ 
    space = '';
    for (let i = 1; i < lineCount - 2 ; i++) {
            space += ' ';
    };
    console.log(character, space, character);
}

console.log(line);

/* for (let j = 1; j <= lineCount; j++){ 
        space = '';
        for (let i = 0; i < lineCount - line.length / 2 ; i++) {
                space += ' ';
        };
        console.log(space, line);
        line = '*' + line + '*';
        
}; 



    */

