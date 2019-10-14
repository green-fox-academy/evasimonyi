'use strict';
export { };

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let line: string = '*';
let space: string = '';

for (let j = 1; j <= lineCount; j++) {
  space = '';
  for (let i = 0; i < lineCount - line.length / 2; i++) {
    space += ' ';
  };
  console.log(space, line);
  line = '*' + line + '*';
};
