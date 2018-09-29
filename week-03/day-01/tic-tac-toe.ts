// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
// Make sure you have the 3 source files given to you on your computer
export {};

declare function require (path: string);
const fs = require('fs');

let filecontent: string = fs.readFileSync('win-x.txt', 'utf-8');
let lines: string[] = filecontent.split('\n');

let elements : string[][] =[];

for (let i : number = 0; i < lines.length; i++){
    elements.push(lines[i].split(''));
}

console.log(elements)

function equals (char1:string, char2:string, char3:string) {
    return (char1 === char2 && char2 === char3)
}

//sorok
console.log(equals(elements[0][0],elements[0][1],elements[0][2]))
console.log(equals(elements[1][0],elements[1][1],elements[1][2]))
console.log(equals(elements[2][0],elements[2][1],elements[2][2]))

//oszlopok
console.log(equals(elements[0][0],elements[1][0],elements[2][0]))
console.log(equals(elements[1][0],elements[1][1],elements[1][2]))
console.log(equals(elements[2][0],elements[2][1],elements[2][2]))

//átlók
console.log(equals(elements[0][0],elements[1][1],elements[2][2]))
console.log(equals(elements[0][2],elements[1][1],elements[2][0]))

/* function name (filename1, filename2, filename3) {
    fs.readFileSync('win-o.txt','win-x.txt', 'draw.txt', 'utf-8');
};

console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw */