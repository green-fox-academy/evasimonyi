// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';
export {};

declare function require (path: string);
const fs = require('fs');

let logContent = fs.readFileSync('log.txt', 'utf-8');
let splittedLines: string [] = logContent.split('\n');

console.log(splittedLines);
let logArray : any = [];
logArray.push(logContent);

