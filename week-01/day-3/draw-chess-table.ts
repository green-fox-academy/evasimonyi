'use strict';

export {};

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let character: string = "% ";
let lineCount: number = 5;

for (let i: number= 0; i < lineCount; i ++) {
    console.log(character);

}