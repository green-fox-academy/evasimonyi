'use strict';
export { };

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let space: string = '';
let character: string = '%';
let line: string = '';
let line2: string = '';

for (let k: number = 0; k <= lineCount; k++) {
  line += character;
};
console.log(line);

for (let e: number = 1; e < lineCount; e++) {
  line2 = '%';
};
// x db spacet rak a % elé a téglalapban
for (let l = 0; l < lineCount; l++) {
  console.log(character, line2);
  line2 = ' ' + line2;
};
// ez teszi bele a középső % -et a sorba
for (let t: number = 1; t < lineCount - 5; t++) {
  console.log(space, '%');
  space = space + ' ';
};

// for (let j = 1; j <= lineCount; j++) {
//   space = '';
//   for (let i = 1; i < lineCount - 2; i++) {
//     space += ' ';
//   };
//   console.log(character, space, character);
// }

console.log(line);
