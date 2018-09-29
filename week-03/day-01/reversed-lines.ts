// Create a method that decrypts reversed-lines.txt

declare function require (path: string);
const fs = require('fs');

let lines = fs.readFileSync('reversed-lines.txt', 'utf-8');

function reverse (lines){
    return lines.split('').reverse().join('');
}

console.log(reverse(lines));
