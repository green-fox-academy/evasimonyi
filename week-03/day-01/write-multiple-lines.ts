// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

'use strict';
export {};

declare function require (path: string);
const fs = require('fs');

function writeTheWord (path: string, word: string, numberOfLines: number){
    for (let i = 0; i < numberOfLines; i++) {
        fs.appendFileSync(path, word);
    }
}

writeTheWord ('apple.txt', 'apple\n', 5);

// fs.appendFile: hozzáfűzi az előzőhöz, a már beleírt szó után írja bele a következőt, nem helyette