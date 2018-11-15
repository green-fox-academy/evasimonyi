// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';
export {};

declare function require (path: string);
const fs = require('fs');

if (fs.existsSync('my-file.txt')){ 
    let fileContent1 = 'Évi';
    fs.writeFileSync('my-file.txt', fileContent1);
    let fileContent2 = fs.readFileSync('my-file.txt', 'utf-8');
    console.log(fileContent2);
} else {
    throw Error ('Unable to read file: my-file.txt');
}

    