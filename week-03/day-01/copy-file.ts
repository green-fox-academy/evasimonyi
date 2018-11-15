// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict';
export {};

declare function require (path: string);
const fs = require('fs');

/*function copy (to, from){
    fs.writeFileSync('to.txt', fs.readFileSync('from.txt'));
} */

function copyContent (from: string, to: string){
    try {
         fs.copyFile('from.txt', 'to.txt'); 
    } 
    
    catch {
        return false
    } return true
}
copyContent ('from.txt','to.txt');

