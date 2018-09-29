// Create a method that decrypts duplicated-chars.txt
export {};

declare function require (path: string);
const fs = require('fs');

let doubledLines = fs.readFileSync('duplicated-chars.txt', 'utf-8');

console.log(doubledLines.replace(/[^\w\s]|(.+)\1+/gi, '$1'));
      
//googled it, so now sure what did I just do with that line of code but it works...