'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = '- Buy milk\n';
console.log('My todo:'.concat('\n', todoText, '- Download games\n').concat('\t - Diablo'));

// with string template literals
console.log(`My todos: \n ${todoText} - Download games\n \t- Diablo`);
