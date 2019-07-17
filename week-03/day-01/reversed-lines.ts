// Create a method that decrypts reversed-lines.txt

'use strict';
export { };

declare function require(path: string): any;
const fs = require('fs');

let lines = fs.readFileSync('reversed-lines.txt', 'utf-8');

function reverse(lines: any): any {
    return lines.split('').reverse().join('');
}

console.log(reverse(lines));
