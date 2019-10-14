'use strict';
export { };

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

let lineCount: number = 7;
let star: string = '*';
let space: string = '';

for (let j = 0; j <= lineCount / 2 + 1; j++) {
	space = '';
	for (let i = 0; i < lineCount - star.length / 2; i++) {
		space += '1';
	};
	console.log(space, star);
	star = '*' + star + '*';
};
